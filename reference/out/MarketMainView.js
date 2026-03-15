System.register("chunks:///_virtual/MarketMainView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./MarketMainUI.ts", "./UIManager.ts"], (function(t) {
        var e, n, i, u, r, a, o;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    i = t.cclegacy,
                        u = t._decorator
                }
                , function(t) {
                    r = t.GameView
                }
                , function(t) {
                    a = t.MarketMainUI
                }
                , function(t) {
                    o = t.default
                }
            ],
            execute: function() {
                var c;
                i._RF.push({}, "e08767yI21IDZpJ6o053+eN", "MarketMainView", void 0);
                var s = u.ccclass;
                u.property,
                    t("MarketMainView", s("MarketMainView")(c = function(t) {
                        function i() {
                            return t.apply(this, arguments) || this
                        }
                        e(i, t);
                        var u = i.prototype;
                        return u.updateSuitPrice = function(t) {
                            this.gui.updateSuitBuyPrice(t)
                        }
                            ,
                            u.openBuySuitUI = function(t) {
                                this.gui.openBuySuitUI(t)
                            }
                            ,
                            u.updateBuyItemBack = function(t) {
                                this.gui.updateBuyItemBack(t)
                            }
                            ,
                            n(i, [{
                                key: "bundleName",
                                get: function() {
                                    return "gui"
                                }
                            }, {
                                key: "prefabPath",
                                get: function() {
                                    return "prefabs/market_1600/MarketMainUI_1600"
                                }
                            }, {
                                key: "guiParent",
                                get: function() {
                                    return o.gRootCanvas
                                }
                            }, {
                                key: "gui",
                                get: function() {
                                    var t;
                                    return null == (t = this.node) ? void 0 : t.getComponent(a)
                                }
                            }, {
                                key: "mediatior",
                                get: function() {
                                    return this.currMediator
                                }
                            }]),
                            i
                    }(r)) || c);
                i._RF.pop()
            }
        }
    }
));
