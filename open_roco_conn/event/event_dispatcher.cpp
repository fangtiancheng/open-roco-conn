#include "event_dispatcher.hpp"
#include <iostream>
#include <chrono>
#include "base/define.hpp"

void EventDispatcher::add_event_listener(const std::string& event_type,
                                         const std::function<void()>& callback){
    auto plist = callbacks.find(event_type);
    if(plist == callbacks.end()){
        callbacks[event_type] = std::vector<CallbackInfo>{CallbackInfo{.call=callback, .is_null=false}};
    } else {
        plist->second.emplace_back(CallbackInfo{.call=callback, .is_null=false});
    }
}

void EventDispatcher::remove_event_listener(const std::string &event_type,
                                            const std::function<void()>& callback) {
    auto it = callbacks.find(event_type);
    if (it == callbacks.end()) return;
    auto &list = it->second;
    for(auto pinfo=list.begin(); pinfo!=list.end(); pinfo++){
        if(!pinfo->is_null && callback.target<void()>() == pinfo->call.target<void()>()){
            if(is_invoking){
                pinfo->is_null = true;
                contain_canceled = true;
            } else {
                list.erase(pinfo);
            }
            break;
        }
    }
}

void EventDispatcher::dispatch_event(const std::string &event_type) {
    auto it = callbacks.find(event_type);
    if (it == callbacks.end()) return;
    auto &list = it->second;
    if(list.empty()) return;
    if (list.size() > 1) {
        std::cout << "多个callback==>>" << event_type << std::endl;
    }
    is_invoking = true;
    for(auto &info: list){
        if(!info.is_null){
            info.call();
        }
    }
    is_invoking = false;
    if(contain_canceled) {
        purge_canceled(event_type);
    }
}

void EventDispatcher::purge_canceled(const std::string &event_type) {
    auto it = callbacks.find(event_type);
    if (it != callbacks.end()) {
        std::erase_if(it->second, [](const CallbackInfo& ci){return ci.is_null;});
    }
    contain_canceled = false;
}

bool EventDispatcher::has_event_listener(const std::string &event_type) const {
    auto it = callbacks.find(event_type);
    if(it != callbacks.end()) {
        const auto &list = it->second;
        for (const auto &info: list) {
            if (!info.is_null) return true;
        }
    }
    return false;
}

void EventDispatcher::begin_timer() {
    auto now = std::chrono::system_clock::now();
    res_begin_timer = std::chrono::duration_cast<std::chrono::milliseconds>(now.time_since_epoch()).count();
    if(Define::IS_DEBUG){
        std::cout << "EventDispatcher==beginTimer==>EventDispatcher===>"
                  << res_begin_timer << "ms" << std::endl;
    }
}

void EventDispatcher::end_timer() {
    auto now = std::chrono::system_clock::now();
    res_end_timer = std::chrono::duration_cast<std::chrono::milliseconds>(now.time_since_epoch()).count();
    if(Define::IS_DEBUG){
        std::cout << "EventDispatcher==endTimer==>" << res_begin_timer
                  << "==" << res_end_timer << "=="
                  << (res_end_timer - res_begin_timer) << "ms" << std::endl;
    }
}
