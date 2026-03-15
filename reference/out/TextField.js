System.register("chunks:///_virtual/TextField.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeExtend.ts"], (function(t) {
        var e, n, o, i, r, s, u, c;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    o = t.cclegacy,
                        i = t.LabelOutline,
                        r = t.color,
                        s = t.Label,
                        u = t.UITransform
                }
                , function(t) {
                    c = t.NodeExtend
                }
            ],
            execute: function() {
                o._RF.push({}, "eb72eptDPpMaIctmGeGClsO", "TextField", void 0);
                t("TextFormatAlign", function(t) {
                    return t[t.LEFT = 0] = "LEFT",
                        t[t.CENTER = 1] = "CENTER",
                        t[t.RIGHT = 2] = "RIGHT",
                        t
                }({})),
                    t("TextField", function(t) {
                        function o() {
                            var e;
                            return null == (e = t.call(this) || this).getComponent(s) && e.addComponent(s),
                                e
                        }
                        return e(o, t),
                            o.prototype.addLabelOutline = function() {
                                this.getComponent(i) || this.addComponent(i);
                                var t = this.getComponent(i);
                                t.color = r(0, 0, 0),
                                    t.width = 3
                            }
                            ,
                            n(o, [{
                                key: "target",
                                get: function() {
                                    return this.getComponent(s)
                                }
                            }, {
                                key: "size",
                                get: function() {
                                    return this.getComponent(s).fontSize
                                },
                                set: function(t) {
                                    this.getComponent(s).fontSize = t
                                }
                            }, {
                                key: "defaultTextFormat",
                                get: function() {
                                    return this
                                },
                                set: function(t) {}
                            }, {
                                key: "bold",
                                get: function() {
                                    return this.getComponent(s).isBold
                                },
                                set: function(t) {
                                    this.getComponent(s).isBold = t
                                }
                            }, {
                                key: "align",
                                set: function(t) {
                                    this.getComponent(s).horizontalAlign = t
                                }
                            }, {
                                key: "color",
                                set: function(t) {
                                    this.getComponent(s).color = t
                                }
                            }, {
                                key: "anchorPoint",
                                set: function(t) {
                                    this.getComponent(u).anchorPoint = t
                                }
                            }]),
                            o
                    }(c));
                o._RF.pop()
            }
        }
    }
));
