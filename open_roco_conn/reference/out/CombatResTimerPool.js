System.register("chunks:///_virtual/CombatResTimerPool.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Timer.ts", "./TimerEvent.ts"], (function(t) {
        var e, i, n, o;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    n = t.Timer
                }
                , function(t) {
                    o = t.default
                }
            ],
            execute: function() {
                i._RF.push({}, "8ab744RQoFENakHxG6X03UD", "CombatResTimerPool", void 0);
                var r = t("CombatResTimerPool", function() {
                    function t() {
                        this._timePool = new Map,
                            this._timer = void 0,
                            this._timer = new n(60 * t.timingPolicy * 1e3,0),
                            this._timer.addEventListener(o.TIMER, this.timerHandler.bind(this))
                    }
                    return t.getInstance = function() {
                        return null == t.instance && (t.instance = new t),
                            t.instance
                    }
                        ,
                        t.prototype.timerHandler = function(t) {
                            for (var e in this._timePool) {
                                var i = this._timePool[e];
                                i.display = null,
                                    i = null,
                                    delete this._timePool[e]
                            }
                        }
                        ,
                        e(t, [{
                            key: "timePool",
                            get: function() {
                                return this._timePool
                            }
                        }]),
                        t
                }());
                r.instance = void 0,
                    r.timingPolicy = 30,
                    i._RF.pop()
            }
        }
    }
));
