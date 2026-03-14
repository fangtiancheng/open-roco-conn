System.register("chunks:///_virtual/SpiritBooksMainView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpiritBooksMainUI.ts", "./GameView.ts", "./UIManager.ts"], (function(t) {
        var e, i, n, o, r, u, a;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        o = t._decorator
                }
                , function(t) {
                    r = t.SpiritBooksMainUI
                }
                , function(t) {
                    u = t.GameView
                }
                , function(t) {
                    a = t.default
                }
            ],
            execute: function() {
                n._RF.push({}, "ae103bMERxLN74/hvXRRaio", "SpiritBooksMainView", void 0);
                o.ccclass,
                    o.property,
                    t("SpiritBooksMainView", function(t) {
                        function n() {
                            return t.apply(this, arguments) || this
                        }
                        return e(n, t),
                            n.prototype.updateLinkSelectState = function(t) {
                                var e;
                                null == (e = this.gui) || e.updateLinkSelectState(t)
                            }
                            ,
                            i(n, [{
                                key: "bundleName",
                                get: function() {
                                    return "gui"
                                }
                            }, {
                                key: "prefabPath",
                                get: function() {
                                    return "prefabs/spiritBooks_1600/SpiritBooksMainView"
                                }
                            }, {
                                key: "guiParent",
                                get: function() {
                                    return a.gRootCanvas
                                }
                            }, {
                                key: "gui",
                                get: function() {
                                    var t;
                                    return null == (t = this.node) ? void 0 : t.getComponent(r)
                                }
                            }]),
                            n
                    }(u));
                n._RF.pop()
            }
        }
    }
));
