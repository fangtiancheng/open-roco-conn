System.register("chunks:///_virtual/TimerHelper.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Timer.ts", "./TimerEvent.ts"], (function(t) {
        var i, e, r, n;
        return {
            setters: [function(t) {
                i = t.createClass
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    r = t.Timer
                }
                , function(t) {
                    n = t.default
                }
            ],
            execute: function() {
                e._RF.push({}, "d8c22FaLmpNWIiy0PmciUd2", "TimerHelper", void 0),
                    t("TimerHelper", function() {
                        function t(t, i, e, m) {
                            void 0 === t && (t = 1e3),
                            void 0 === i && (i = 1),
                            void 0 === e && (e = null),
                            void 0 === m && (m = null),
                                this.key = void 0,
                                this._timer = void 0,
                                this._timeEndFunc = void 0,
                                this._timeTickFunc = void 0,
                                this._timeEndFunc = m,
                                this._timeTickFunc = e,
                                this._timer = new r(t,i),
                                this._timer.addEventListener(n.TIMER, this.onTimer.bind(this), this.onTimerComplete.bind(this)),
                                this._timer.start()
                        }
                        t.startTimer = function(i, e, r, n, m) {
                            void 0 === e && (e = 1e3),
                            void 0 === r && (r = 1),
                            void 0 === n && (n = null),
                            void 0 === m && (m = null);
                            var o = t.timers[i];
                            return null == o ? (o = new t(e,r,n,m)).key = i : o.reset(e, r, n, m),
                                t.timers[i] = o,
                                o.onTimer(null),
                                o
                        }
                            ,
                            t.stopTimer = function(i) {
                                var e = t.timers[i];
                                e && e._timer.stop()
                            }
                            ,
                            t.resumeTimer = function(i) {
                                var e = t.timers[i];
                                e && e._timer.start()
                            }
                            ,
                            t.getTimer = function(i) {
                                return t.timers[i]
                            }
                            ,
                            t.disposeTimer = function(i) {
                                var e = t.timers[i];
                                e && e.dispose()
                            }
                        ;
                        var e = t.prototype;
                        return e.reset = function(t, i, e, r) {
                            void 0 === t && (t = 1e3),
                            void 0 === i && (i = 1),
                            void 0 === e && (e = null),
                            void 0 === r && (r = null),
                                this._timeEndFunc = r,
                                this._timeTickFunc = e,
                                this._timer.delay = t,
                                this._timer.repeatCount = i,
                                this._timer.reset(),
                                this._timer.start()
                        }
                            ,
                            e.totalCount = function() {
                                return this._timer.repeatCount
                            }
                            ,
                            e.dispose = function() {
                                this._timer && (this._timer.stop(),
                                    this._timer.removeEventListener(n.TIMER, this.onTimer.bind(this)),
                                    this._timer.removeEventListener(n.TIMER_COMPLETE, this.onTimerComplete.bind(this)),
                                    this._timer = null),
                                    this._timeEndFunc = null,
                                    this._timeTickFunc = null,
                                    delete t.timers[this.key],
                                    this.key = null
                            }
                            ,
                            e.onTimer = function(t) {
                                null != this._timeTickFunc && (1 == this._timeTickFunc.length ? this._timeTickFunc(this.leftCount) : this._timeTickFunc())
                            }
                            ,
                            e.onTimerComplete = function(t) {
                                null != this._timeEndFunc && this._timeEndFunc(),
                                    this.dispose()
                            }
                            ,
                            t.timeFormatFun = function(i) {
                                var e = {};
                                return e.min = Number(i % 86400 % 3600 / 60),
                                    e.sec = Number(i % 60),
                                    e.timeStr = t.formatTimeShow(e.min) + ":" + t.formatTimeShow(e.sec),
                                    e
                            }
                            ,
                            t.timeFormatFun5 = function(i) {
                                var e = {};
                                return e.min = Number(i % 86400 % 3600 / 60),
                                    e.sec = Number(i % 60),
                                    e.timeStr = t.formatTimeShow(e.min) + "分" + t.formatTimeShow(e.sec) + "秒",
                                    e
                            }
                            ,
                            t.timeFormatFun2 = function(i) {
                                var e = {};
                                return e.hour = Number(i / 3600),
                                    e.min = Number(i % 86400 % 3600 / 60),
                                    e.sec = Number(i % 60),
                                    e.timeStr = t.formatTimeShow(e.hour) + ":" + t.formatTimeShow(e.min) + ":" + t.formatTimeShow(e.sec),
                                    e
                            }
                            ,
                            t.timeFormatFun3 = function(i) {
                                var e = {};
                                return e.hour = Number(i / 3600),
                                    e.min = Number(i % 86400 % 3600 / 60),
                                    e.sec = Number(i % 60),
                                    e.timeStr = t.formatTimeShow(e.hour) + ":" + t.formatTimeShow(e.min),
                                    e
                            }
                            ,
                            t.timeFormatFun4 = function(i) {
                                var e = {};
                                return e.sec = i,
                                    e.timeStr = t.formatTimeShow(e.sec),
                                    e
                            }
                            ,
                            t.timeFormat = function(i) {
                                return t.timeFormatFun(i).timeStr
                            }
                            ,
                            t.formatTimeShow = function(t) {
                                return t < 10 ? "0" + t : t.toString()
                            }
                            ,
                            i(t, [{
                                key: "count",
                                get: function() {
                                    return this._timer.currentCount
                                }
                            }, {
                                key: "leftCount",
                                get: function() {
                                    return this._timer.repeatCount - this._timer.currentCount
                                }
                            }]),
                            t
                    }()).timers = new Map,
                    e._RF.pop()
            }
        }
    }
));
