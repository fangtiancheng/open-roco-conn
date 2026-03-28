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
- `AngleMain` should focus on wiring/lifecycle, not protocol parsing business logic.
- Business receive/send logic should go through receivers/processors and `AngelNetSystem`.

### 1.4 Network Data Flow (JS-aligned)
Inbound:
1. `AngelTcpConnection` async read gets frames.
2. Parse into `ADF` and raise `tcp_conn_on_adf`.
3. `AngelNetSystem` handles `tcp_conn_on_adf`, drains queue, decodes via processors.
4. Dispatch to matched receivers by command type / serial mapping.

Outbound:
1. Receiver calls `sendDataToServer` / `sendDataWithSerNum`.
2. `TRYSENDADF` event is emitted.
3. `AngelNetSystem` drains send requests, encodes via processors, sends through `WebSocketClient`.
4. If serial is used, keep pending map for request-response routing.

State:
- `AngelNetSystem` maps transport events to `AngelNetSysEvent::ON_STATE_CHANGE`
  (`nsConneted/nsClosed/nsError`) and fills message/tcp id.

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
- Avoid adding cross-module shortcuts that bypass orchestration layers.

### 2.3 Event-driven First
- Prefer event-driven async flow over polling loops.
- Use typed event classes for semantic events (`AngelDataEvent`, `AngelNetSysEvent`).
- Keep callback contracts minimal and deterministic.

### 2.4 Threading
- Avoid ad-hoc detached thread explosion for per-message dispatch.
- Prefer controlled async/event loops and bounded workers where needed.
- Any blocking/wait API must have clean shutdown behavior.

### 2.5 Logging
- Use `RFBase::debug_line` only.
- Keep logs structured and concise (`module + key fields`).

## 3) Important Implementation Notes

### 3.1 Receiver Contracts
- `AbstractDataReceiver` supports:
  - `receive(const ADF&)`
  - `sendDataToServer(...)`
  - `sendDataWithSerNum(...)`
- `on_data_receive(cmd, adf*)` should avoid side effects outside owned domain.

### 3.2 Processor Contracts
- `AdfProcessors` is the codec pipeline for command-specific encode/decode.
- Add/remove processors at `AngelNetSystem` level.
- Fallback encoding path should remain available for commands without custom processor.

### 3.3 Lifecycle Order
- Initialize: event manager -> net system -> listeners/receivers -> async bootstrap.
- Finalize: remove listeners/receivers -> disconnect transport -> finalize net system -> stop io/timers.

### 3.4 Multi-account Readiness
- New feature code must be validated against multi-account assumption:
  - no hidden shared mutable state
  - no static caches unless immutable or account-keyed
  - no implicit singleton dependency for per-account data

## 4) Near-term Technical Direction
- Keep `ServerListUI::login_req` behavior stable (JS parity requirement).
- Continue migrating protocol handling from `AngleMain` into receivers/processors.
- Keep `AngelNetSystem` as the central network orchestrator.

---
This file is the project-level prompt/reference for architecture, style, and runtime constraints.
