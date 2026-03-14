System.register("chunks:///_virtual/Timer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GlobalTimer.ts", "./TimerEvent.ts"], (function(t) {
        var e, i, r, n;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    r = t.GlobalTimer
                }
                , function(t) {
                    n = t.default
                }
            ],
            execute: function() {
                i._RF.push({}, "0e943dbX/hFFbadeIWvfb0p", "Timer", void 0),
                    t("Timer", function() {
                        function t(e, i) {
                            if (void 0 === i && (i = 0),
                                this.delay = 0,
                                this.repeatCount = 0,
                                this.currentCount = 0,
                                this._timer = 1e3,
                                this._timerName = "TIMER_",
                                this._repeatCount = 0,
                                this._defalutRepeat = 0,
                                this._alwaysRepeat = !1,
                                this._callBack = null,
                                this._repeatTimes = 0,
                                this._running = !1,
                                this._timeEndFunc = void 0,
                            null == e || null == e)
                                throw new Error("Timer class constructor’s param is illegal");
                            if (e <= 0)
                                throw new Error("Timer class constructor’s param is illegal");
                            if (null == i || null == i)
                                throw new Error("Timer class constructor’s param is illegal");
                            if (i = 0)
                                throw new Error("Timer class constructor’s param is illegal");
                            this._alwaysRepeat = 0 == i,
                                t._timerCounter++,
                                this._timer = e,
                                this._defalutRepeat = i,
                                this._repeatCount = i,
                                this._timerName = this._timerName + t._timerCounter,
                                this._repeatTimes = 0
                        }
                        var i = t.prototype;
                        return i.start = function(t) {
                            void 0 === t && (t = !1),
                            1 != this._running && (this._running = !0,
                                r.start(this._timerName, t))
                        }
                            ,
                            i.stop = function() {
                                this._running = !1,
                                    r.stop(this._timerName)
                            }
                            ,
                            i.addEventListener = function(t, e, i) {
                                var s = this;
                                if (void 0 === i && (i = null),
                                null == t || null == t)
                                    throw new Error("Timer class addEventListener param is illegal");
                                if ("string" != typeof t || t != n.TIMER)
                                    throw new Error("Timer class addEventListener param is illegal");
                                this._callBack = e,
                                    this._timeEndFunc = i,
                                    r.registerTimer(this._timerName, this._timer, (function() {
                                            if (s._repeatTimes++,
                                            1 == s._alwaysRepeat)
                                                e(s._repeatTimes);
                                            else {
                                                if (0 == s._repeatCount)
                                                    return s.stop(),
                                                        void (s._timeEndFunc && s._timeEndFunc());
                                                s._repeatCount--,
                                                    e(s._repeatTimes),
                                                0 == s._repeatCount && (s.stop(),
                                                s._timeEndFunc && s._timeEndFunc())
                                            }
                                        }
                                    ), this, !1, !1)
                            }
                            ,
                            i.removeEventListener = function(t, e) {
                                if (null == t || null == t)
                                    throw new Error("Timer class addEventListener param is illegal");
                                if ("string" == typeof t && t == n.TIMER)
                                    this._callBack = null,
                                        r.unregisterTimer(this._timerName);
                                else {
                                    if ("string" != typeof t || t != n.TIMER_COMPLETE)
                                        throw new Error("Timer class addEventListener param is illegal");
                                    this._timeEndFunc = null
                                }
                            }
                            ,
                            i.reset = function() {
                                this.resetTimerState(),
                                    this.stop()
                            }
                            ,
                            i.resetTimerState = function() {
                                this._repeatTimes = 0,
                                    this._repeatCount = this._defalutRepeat
                            }
                            ,
                            e(t, [{
                                key: "timerName",
                                get: function() {
                                    return this._timerName
                                }
                            }, {
                                key: "running",
                                get: function() {
                                    return this._running
                                },
                                set: function(t) {}
                            }]),
                            t
                    }())._timerCounter = 0,
                    i._RF.pop()
            }
        }
    }
));
