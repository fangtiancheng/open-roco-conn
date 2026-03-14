System.register("chunks:///_virtual/Signal.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Timer.ts", "./TimerEvent.ts"], (function(t) {
        var s, e, i, n;
        return {
            setters: [function(t) {
                s = t.createClass
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    i = t.Timer
                }
                , function(t) {
                    n = t.default
                }
            ],
            execute: function() {
                e._RF.push({}, "da7ca1WGYJFNZpgLkol1WqL", "Signal", void 0);
                t("Signal", function() {
                    function t() {
                        this.m_logType = void 0,
                            this.log = null,
                            this.m_lstSlot = [],
                            this.m_lstSlotOnce = [],
                            this.m_asyTimer = void 0,
                            this.m_valueObjectsForAsy = []
                    }
                    var e = t.prototype;
                    return e.addOnce = function(t) {
                        this.m_lstSlotOnce.indexOf(t) < 0 && this.m_lstSlotOnce.push(t)
                    }
                        ,
                        e.add = function(t) {
                            this.m_lstSlot.indexOf(t) < 0 && this.m_lstSlot.push(t)
                        }
                        ,
                        e.remove = function(t) {
                            var s = this.m_lstSlot.indexOf(t);
                            s >= 0 && this.m_lstSlot.splice(s, 1),
                            (s = this.m_lstSlotOnce.indexOf(t)) >= 0 && this.m_lstSlotOnce.splice(s, 1)
                        }
                        ,
                        e.removeAll = function() {
                            this.m_lstSlot.length = 0,
                                this.m_lstSlotOnce.length = 0
                        }
                        ,
                        e.setLogType = function(t) {
                            this.m_logType = t
                        }
                        ,
                        e.dispatchAsy = function() {
                            for (var t = arguments.length, s = new Array(t), e = 0; e < t; e++)
                                s[e] = arguments[e];
                            this.m_valueObjectsForAsy = s,
                            this.m_asyTimer || (this.m_asyTimer = new i(1,1)),
                                this.m_asyTimer.addEventListener(n.TIMER, this.onAsyTimer.bind(this)),
                            this.m_asyTimer.running || this.m_asyTimer.start()
                        }
                        ,
                        e.onAsyTimer = function(t) {
                            this.m_asyTimer.removeEventListener(n.TIMER, this.onAsyTimer.bind(this)),
                                this.dispatchWorker(this.m_valueObjectsForAsy),
                                this.m_valueObjectsForAsy = []
                        }
                        ,
                        e.dispatch = function() {
                            for (var t = arguments.length, s = new Array(t), e = 0; e < t; e++)
                                s[e] = arguments[e];
                            this.dispatchWorker(s)
                        }
                        ,
                        e.dispatchWorker = function(t) {
                            var s = this.m_lstSlot.concat()
                                , e = 0;
                            for (e = 0; e < s.length; ++e)
                                this.execute(s[e], t);
                            for (s = this.m_lstSlotOnce.concat(),
                                     this.m_lstSlotOnce.length = 0,
                                     e = 0; e < s.length; ++e)
                                this.execute(s[e], t)
                        }
                        ,
                        e.execute = function(t, s) {
                            var e = s.length;
                            0 == e ? t() : 1 == e ? t(s[0]) : 2 == e ? t(s[0], s[1]) : 3 == e ? t(s[0], s[1], s[2]) : t.apply(null, s)
                        }
                        ,
                        s(t, [{
                            key: "numListeners",
                            get: function() {
                                return this.m_lstSlot.length
                            }
                        }]),
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
