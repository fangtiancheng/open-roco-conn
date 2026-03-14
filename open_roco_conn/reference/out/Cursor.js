System.register("chunks:///_virtual/Cursor.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, n, o, r, s, i;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy,
                        o = t._decorator,
                        r = t.Node,
                        s = t.game,
                        i = t.Component
                }
            ],
            execute: function() {
                t("buttonModel", (function(t) {
                        return function(t, e) {
                            delete t[e] && Object.defineProperty(t, e, {
                                get: function() {
                                    return this["__" + e + "__"]
                                },
                                set: function(t) {
                                    this["__" + e + "__"] = t,
                                    this["__" + e + "__"] && this["__" + e + "__"].node.addComponent(c).setTarget(this["__" + e + "__"])
                                },
                                enumerable: !0,
                                configurable: !0
                            })
                        }
                    }
                )),
                    n._RF.push({}, "a8e7847QC9OfKKDQc5/32+b", "Cursor", void 0);
                o.ccclass,
                    o.property;
                var c = t("cursorCom", function(t) {
                    function n() {
                        for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                            o[r] = arguments[r];
                        return (e = t.call.apply(t, [this].concat(o)) || this)._target = void 0,
                            e._ispointer = !1,
                            e
                    }
                    e(n, t);
                    var o = n.prototype;
                    return o.start = function() {
                        console.log("cursorCom运行"),
                            this.node.on(r.EventType.MOUSE_ENTER, this.onEnter, this),
                            this.node.on(r.EventType.MOUSE_LEAVE, this.onLeave, this)
                    }
                        ,
                        o.onEnter = function() {
                            s.canvas.style.cursor = "pointer",
                                this._ispointer = !0
                        }
                        ,
                        o.onLeave = function() {
                            s.canvas.style.cursor = "default",
                                this._ispointer = !1
                        }
                        ,
                        o.onDisable = function() {
                            this._ispointer && (s.canvas.style.cursor = "default"),
                                this._ispointer = !1
                        }
                        ,
                        o.onDestroy = function() {
                            this._target && (this._ispointer && (s.canvas.style.cursor = "default"),
                                this._target.off(r.EventType.MOUSE_ENTER, this.onEnter, this),
                                this._target.off(r.EventType.MOUSE_LEAVE, this.onLeave, this))
                        }
                        ,
                        o.setTarget = function(t) {}
                        ,
                        n
                }(i));
                n._RF.pop()
            }
        }
    }
));
