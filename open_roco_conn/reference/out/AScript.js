System.register("chunks:///_virtual/AScript.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./SuccessorEvent.ts"], (function(t) {
        var n, c, o, e;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    c = t.cclegacy
                }
                , function(t) {
                    o = t.EventDispatcher
                }
                , function(t) {
                    e = t.SuccessorEvent
                }
            ],
            execute: function() {
                c._RF.push({}, "a93d4UQ3ptHPJL9HoEJ8hCN", "AScript", void 0);
                t("AScript", function(t) {
                    function c(n) {
                        var c;
                        return (c = t.call(this) || this)._name = "",
                            c._system = void 0,
                            console.log("AScript==" + c.constructor.name + "==constructor"),
                            c
                    }
                    n(c, t);
                    var o = c.prototype;
                    return o.IScriptJudge = function() {
                        CONFIG.DEBUG,
                            console.log("i am a AScript")
                    }
                        ,
                        o.initialize = function(t) {
                            this._system = t
                        }
                        ,
                        o.execute = function() {
                            console.log("AScript==" + this.constructor.name + "==execute")
                        }
                        ,
                        o.over = function(t) {
                            console.log("AScript==" + this.constructor.name + "==over"),
                                this.dispatchEvent(new e(e.PROCESS_EVENT))
                        }
                        ,
                        o.toString = function() {
                            return "[IScript:" + t.prototype.toString.call(this) + "]|" + this._name
                        }
                        ,
                        c
                }(o));
                c._RF.pop()
            }
        }
    }
));
