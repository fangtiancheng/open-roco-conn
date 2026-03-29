# Open Roco Conn Prompt (Architecture + Engineering Notes)

## 1) Architecture Overview

### 1.1 Entry and Context
- Entry point: `open_roco_conn/app.cpp`.
- `AppContext` is the top-level runtime container for one account/session. It owns:
  - `GlobalAPI` (runtime state)
  - `GlobalTimer` (timer service)
  - `GlobalManager` (bootstrap/lifecycle coordinator)
  - network/http/callback-related services
- Goal: **one account = one AppContext = one isolated runtime graph**.

### 1.2 Bootstrap Chain
1. `main()` creates `AppContext`.
2. Pre-login HTTP flow (recommend/range) runs.
3. `GlobalManager` receives user/runtime dependencies.
4. `GlobalManager` creates and initializes `AngleMain` when resources are ready.

### 1.3 Core Runtime in AngleMain
`AngleMain` is the composition root for runtime systems:
- `AngleEventManager` (event bus + frame/tick timer hooks)
- `WebSocketClient` (transport)
- `AngelNetSystem` (network orchestration)
- `LoginReceiver` + world receivers
- `AngleWorld` (created after login success)

Design intent:
- `AngleMain` focuses on wiring/lifecycle, not protocol business logic.
- Business receive/send logic goes through receivers/processors and `AngelNetSystem`.

### 1.4 Network Data Flow (JS-aligned)
Inbound:
1. `AngelTcpConnection::recv_once()` gets one frame per tick.
2. Parse into `ADF` and raise `EventKey::tcp_conn_on_adf`.
3. `AngelNetSystem` handles `tcp_conn_on_adf`, drains queue, decodes via processors.
4. Dispatch to matched receivers by command type / serial mapping.

Outbound:
1. Receiver calls `send_data_to_server(...)` / `send_data_with_ser_num(...)`.
2. Receiver emits a send callback with explicit params:
   - `data_type` (cmd id)
   - `data` (`ByteArray`)
   - `has_ser_num` (`bool`)
   - `tcp_id` (`uint32_t`)
3. `ADFReceivers` dispatches `EventKey::try_send_adf`.
4. `ADFReceivers::all_send_adf_handler()` calls
   `AngelNetSystem::try_send_data(data_type, data, has_ser_num, tcp_id)`.
5. `AngelNetSystem` resolves transport via `get_tcp_proxy(tcp_id)` then sends.
6. If serial is used, `ADFReceivers` keeps pending map for request-response routing.

State:
- `AngelNetSystem` maps transport events to `EventKey::net_state_change`.
- State values follow `AngelNetSysEvent` (`nsConneted/nsClosed/nsError`).

## 2) Code Style and Engineering Rules

### 2.1 Global State Policy
- No mutable global variables.
- No mutable class static members for runtime state.
- Runtime state must be either:
  - instance member, or
  - explicitly owned by `AppContext` and injected.
- Exceptions allowed:
  - RFBase logging singleton-style internals (console output is process-wide)
  - constants (`constexpr`, immutable tables)

### 2.2 Dependency Direction
- Prefer explicit dependency injection over hidden access.
- Keep module boundaries clear:
  - transport (`websock`) vs event definitions (`event`) vs business receivers.
- Avoid cross-module shortcuts that bypass orchestration layers.

### 2.3 Event Contracts
- Event key must use `EventKey` enum (no string tags in runtime path).
- Callback return type is `std::expected<void, std::string>`.
- `dispatch_event(...)` return value must be handled.
- Payload typing remains static (`void/std::string/boost::json::value/ByteArray`).

### 2.4 Threading and Loop
- Websocket runtime is sync tick mode (HTTP remains async).
- Main loop (`AngleMain::tick_once`) drives heartbeat + recv_once.
- Avoid hidden worker loops inside callbacks.

### 2.5 Logging
- Use `RFBase::debug_line` only.
- Keep logs concise and structured (`module + key fields`).

### 2.6 Naming
- Default naming is `snake_case`.
- JS parity means behavior/call-stack parity first, not camelCase copy.
- Keep domain words aligned where useful (`all_send_adf_handler`, `try_send_data`, `get_tcp_proxy`).

## 3) Important Implementation Notes

### 3.1 Receiver Contracts
- `AbstractDataReceiver` supports:
  - `receive(const ADF&)`
  - `send_data_to_server(...)`
  - `send_data_with_ser_num(...)`
- `on_data_receive(cmd, adf*)` avoids side effects outside owned domain.

### 3.2 Processor Contracts
- `AdfProcessors` is the codec pipeline for command-specific encode/decode.
- Add/remove processors at `AngelNetSystem` level.
- Keep fallback encoding path for commands without custom processor.

### 3.3 Lifecycle Order
- Initialize: event manager -> net system -> listeners/receivers -> websocket connect.
- Finalize: remove listeners/receivers -> disconnect transport -> finalize net system.

### 3.4 Multi-account Readiness
- New feature code must satisfy multi-account assumptions:
  - no hidden shared mutable state
  - no static caches unless immutable or account-keyed
  - no implicit singleton dependency for per-account data

## 4) Near-term Technical Direction
- Keep `ServerListUI::login_req` behavior stable (JS parity requirement).
- Continue migrating protocol handling from `AngleMain` into receivers/processors.
- Keep `AngelNetSystem` as the central network orchestrator.
- Keep `ADFReceivers` in `websock` and preserve call stack:
  `dispatch try_send_adf -> all_send_adf_handler -> net_system.try_send_data`.

---
This file is the project-level prompt/reference for architecture, style, and runtime constraints.
