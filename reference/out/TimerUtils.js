System.register("chunks:///_virtual/TimerUtils.ts", ["cc", "./BuildLogHelper.ts"], (function(e) {
        var t, i;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    i = e.default
                }
            ],
            execute: function() {
                t._RF.push({}, "2388bPM4KpFlonwyQpKfpu6", "TimerUtils", void 0),
                    e("TimerUtils", function() {
                        function e() {}
                        return e.BeginTimer = function(t) {
                            var r = (new Date).getTime();
                            e.TimerMap.set(t, r),
                            1 == i.IS_LOCAL && console.error(t + "=TimerUtils计时开始=>" + this.constructor.name + "===>" + r + "ms")
                        }
                            ,
                            e.EndTimer = function(t) {
                                var r = (new Date).getTime()
                                    , n = e.TimerMap.get(t);
                                1 == i.IS_LOCAL && console.error(t + "=TimerUtils计时结束=>" + n + "=" + r + "=" + (r - n) + "ms")
                            }
                            ,
                            e.EndTimerAndReset = function(t) {
                                var r = (new Date).getTime()
                                    , n = e.TimerMap.get(t);
                                1 == i.IS_LOCAL && console.error(t + "=TimerUtils计时结束=>" + n + "=" + r + "=" + (r - n) + "ms");
                                var s = (new Date).getTime();
                                e.TimerMap.set(t, s)
                            }
                            ,
                            e
                    }()).TimerMap = new Map,
                    t._RF.pop()
            }
        }
    }
));
