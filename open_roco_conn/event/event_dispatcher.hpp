#include "base/rf_base.hpp"
#include <string>
#include <functional>
#include <vector>
#include <cstdint>
class CallbackInfo;

class EventDispatcher: public RFBase {
    bool is_invoking = false;
    bool contain_canceled = false;
    std::vector<CallbackInfo> callbacks{};
    int64_t res_begin_timer = 0;
    int64_t res_end_timer = 0;

public:
    const std::string_view get_param1() override { return "48587FFAcVH5YpkyvFs0TMy"; }
    const std::string_view get_param2() override { return "EventDispatcher"; }
};

class Event {
public:
    std::string type;
    std::string __constructor__;
    void* __this__;
    void* __target__;

    Event(const std::string& t) : type(t), __this__(nullptr), __target__(nullptr) {}
};

struct CallbackInfo {
    std::function<void(void)> call;
    bool is_null = false;
};

class EventDispatcher {
private:
    bool _isInvoking = false;
    bool _containCanceled = false;
    std::unordered_map<std::string, std::vector<CallbackInfo>> _callbacks;
    long long _resBeginTimer = 0;
    long long _resEndTimer = 0;

    // 模擬 BuildLogHelper.IS_LOCAL
    static bool IS_LOCAL;

public:
    EventDispatcher() = default;

    // 添加事件監聽器
    void addEventListener(const std::string& eventType,
                          std::function<void(Event*, void*)> callback,
                          void* target,
                          bool useCapture = false,  // 保留參數但暫不使用
                          int priority = 0) {       // 保留參數但暫不使用

        // 檢查是否已存在該類型的回調列表
        auto& list = _callbacks[eventType];

        // 檢查重複添加（簡化版：只檢查 obj 是否相同）
        if (!list.empty()) {
            for (const auto& info : list) {
                if (info.obj == target && !info.isNull) {
                    std::cerr << "重复addEventListener==" << eventType << std::endl;
                    return;
                }
            }
        }

        list.emplace_back(callback, target);
    }

    // 移除事件監聽器
    void removeEventListener(const std::string& eventType,
                             std::function<void(Event*, void*)> callback,
                             void* target) {

        auto it = _callbacks.find(eventType);
        if (it == _callbacks.end()) return;

        auto& list = it->second;
        int index = -1;

        for (int i = 0; i < list.size(); i++) {
            // 比較函數指針和對象指針
            if (!list[i].isNull &&
                list[i].obj == target) {
                // C++ 中無法直接比較 std::function，這裡簡化處理
                // 實際項目中可能需要使用更複雜的比較機制
                index = i;
                break;
            }
        }

        if (index < 0) return;

        if (_isInvoking) {
            // 如果在分發過程中，標記為 null，稍後清理
            list[index].isNull = true;
            _containCanceled = true;
        } else {
            // 直接移除
            list.erase(list.begin() + index);
        }
    }

    // 分發事件
    void dispatchEvent(Event* event, void* data = nullptr) {
        std::string eventType = event->type;

        // 設置事件屬性
        event->__constructor__ = "EventDispatcher";
        event->__this__ = this;
        event->__target__ = this;

        auto it = _callbacks.find(eventType);
        if (it == _callbacks.end() || it->second.empty()) {
            return;
        }

        auto& list = it->second;

        // 本地調試輸出
        if (list.size() > 1 && IS_LOCAL) {
            std::cout << "多个callback==>>" << eventType << std::endl;
        }

        _isInvoking = true;

        // 遍歷並調用回調
        for (auto& info : list) {
            if (!info.isNull && info.call && info.obj) {
                info.call(event, data);
            }
        }

        _isInvoking = false;

        // 清理被標記移除的回調
        if (_containCanceled) {
            purgeCanceled(eventType);
        }
    }

    // 清理已取消的回調
    void purgeCanceled(const std::string& eventType) {
        auto it = _callbacks.find(eventType);
        if (it != _callbacks.end()) {
            auto& list = it->second;

            // 從後向前遍歷，安全刪除
            for (int i = list.size() - 1; i >= 0; --i) {
                if (list[i].isNull) {
                    list.erase(list.begin() + i);
                }
            }

            if (list.empty()) {
                _callbacks.erase(it);
            }
        }
        _containCanceled = false;
    }

    // 檢查是否有事件監聽器
    bool hasEventListener(const std::string& eventType,
                          std::function<void(Event*, void*)> callback = nullptr,
                          void* target = nullptr) {

        auto it = _callbacks.find(eventType);
        if (it == _callbacks.end()) return false;

        const auto& list = it->second;
        for (const auto& info : list) {
            if (!info.isNull && info.call && info.obj) {
                // 如果沒有指定具體回調和目標，只要有監聽器就返回 true
                if (callback == nullptr && target == nullptr) {
                    return true;
                }
                // 否則檢查匹配（簡化處理）
                if (info.obj == target) {
                    return true;
                }
            }
        }
        return false;
    }

    // 開始計時
    void beginTimer() {
        auto now = std::chrono::system_clock::now();
        _resBeginTimer = std::chrono::duration_cast<std::chrono::milliseconds>(
                now.time_since_epoch()).count();

        if (IS_LOCAL) {
            std::cout << "EventDispatcher==beginTimer==>EventDispatcher===>"
                      << _resBeginTimer << "ms" << std::endl;
        }
    }

    // 結束計時
    void endTimer() {
        auto now = std::chrono::system_clock::now();
        _resEndTimer = std::chrono::duration_cast<std::chrono::milliseconds>(
                now.time_since_epoch()).count();

        if (IS_LOCAL) {
            std::cout << "EventDispatcher==endTimer==>" << _resBeginTimer
                      << "==" << _resEndTimer << "=="
                      << (_resEndTimer - _resBeginTimer) << "ms" << std::endl;
        }
    }
};