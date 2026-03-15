System.register("chunks:///_virtual/EventNode.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./FrameEvent.ts", "./Timer.ts", "./TimerEvent.ts", "./EventDispatcher.ts"], (function(t) {
        var e, n, i, s, r, o, c, a;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy,
                        i = t.Event,
                        s = t.Node
                }
                , function(t) {
                    r = t.default
                }
                , function(t) {
                    o = t.Timer
                }
                , function(t) {
                    c = t.default
                }
                , function(t) {
                    a = t.EventDispatcher
                }
            ],
            execute: function() {
                n._RF.push({}, "62144K8dMtHXbvWFIwOCEiE", "EventNode", void 0);
                t("EventNode", function(t) {
                    function n() {
                        var e;
                        return (e = t.call(this) || this)._timer = void 0,
                            e._dispatcher = new a,
                            e
                    }
                    e(n, t);
                    var s = n.prototype;
                    return s.startTimer = function() {
                        this._timer || (console.info("EventNode==startTimer==new"),
                            this._timer = new o(1e3),
                            this._timer.addEventListener(c.TIMER, this.action.bind(this))),
                            this._timer.start()
                    }
                        ,
                        s.action = function(t) {
                            this.dispatchEvent(new i(r.ENTER_FRAME))
                        }
                        ,
                        s.addEventListener = function(t, e, n) {
                            t == r.ENTER_FRAME && this.startTimer(),
                                this._dispatcher.hasEventListener(t, e, n) ? console.error("[" + this.constructor.name + "]'s function [addEventListener].") : this._dispatcher.addEventListener(t, e, n)
                        }
                        ,
                        s.dispatchEvent = function(e, n) {
                            void 0 === n && (n = null),
                                t.prototype.dispatchEvent.call(this, e),
                                e.target = this,
                                this._dispatcher.dispatchEvent(e, n)
                        }
                        ,
                        s.removeEventListener = function(t, e, n) {
                            t == r.ENTER_FRAME && this._timer.stop(),
                                this._dispatcher.removeEventListener(t, e, n)
                        }
                        ,
                        n
                }(s));
                n._RF.pop()
            }
        }
    }
));
