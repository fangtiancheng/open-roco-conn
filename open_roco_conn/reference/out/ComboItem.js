System.register("chunks:///_virtual/ComboItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeExtend.ts"], (function(t) {
        var e, o, i, n, s;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    o = t.createClass
            }
                , function(t) {
                    i = t.cclegacy,
                        n = t.NodeEventType
                }
                , function(t) {
                    s = t.NodeExtend
                }
            ],
            execute: function() {
                i._RF.push({}, "37c9d7VSsRARborENuZuGnO", "ComboItem", void 0),
                    t("ComboItem", function(t) {
                        function i(e, o, i, n) {
                            var s;
                            return (s = t.call(this) || this).item = void 0,
                                s.label = "",
                                s.title = "",
                                s.type = void 0,
                                s.subtype = void 0,
                                s._frame = 1,
                                s
                        }
                        e(i, t);
                        var s = i.prototype;
                        return s.__over = function(t) {
                            this.item.gotoAndStop(3)
                        }
                            ,
                            s.__out = function(t) {
                                this.item.gotoAndStop(this._frame)
                            }
                            ,
                            s.dispose = function() {
                                this.item = null,
                                    this.off(n.MOUSE_ENTER, this.__over, this),
                                    this.off(n.MOUSE_LEAVE, this.__out, this)
                            }
                            ,
                            o(i, [{
                                key: "frame",
                                set: function(t) {
                                    this._frame = t,
                                        this.item.gotoAndStop(this._frame)
                                }
                            }]),
                            i
                    }(s)).HEIGHT = 20,
                    i._RF.pop()
            }
        }
    }
));
