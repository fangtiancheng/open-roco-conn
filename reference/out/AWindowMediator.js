System.register("chunks:///_virtual/AWindowMediator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts"], (function(t) {
        var i, n, o, e;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    o = t.cclegacy
                }
                , function(t) {
                    e = t.EventDispatcher
                }
            ],
            execute: function() {
                o._RF.push({}, "32ee3D7yxxK3ZYqGAqqWor8", "AWindowMediator", void 0);
                t("AWindowMediator", function(t) {
                    function o(i) {
                        var n;
                        return (n = t.call(this) || this)._system = void 0,
                            n._window = void 0,
                            n._data = void 0,
                            n
                    }
                    i(o, t);
                    var e = o.prototype;
                    return e.show = function(t) {
                        void 0 === t && (t = !0),
                        this._window && (t ? this._window.show() : this._window.hide())
                    }
                        ,
                        e.initialize = function(t) {
                            this._system = t
                        }
                        ,
                        n(o, [{
                            key: "data",
                            set: function(t) {
                                this._data = t
                            }
                        }]),
                        o
                }(e));
                o._RF.pop()
            }
        }
    }
));
