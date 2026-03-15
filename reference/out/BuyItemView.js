System.register("chunks:///_virtual/BuyItemView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./BuyItemUI.ts", "./UIManager.ts", "./Icon.ts"], (function(e) {
        var t, n, u, i, o, r, c;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass
            }
                , function(e) {
                    u = e.cclegacy
                }
                , function(e) {
                    i = e.GameView
                }
                , function(e) {
                    o = e.BuyItemUI
                }
                , function(e) {
                    r = e.default
                }
                , function(e) {
                    c = e.IconType
                }
            ],
            execute: function() {
                u._RF.push({}, "389f0gpUjFBWoy6muH/NYCF", "BuyItemView", void 0);
                e("BuyItemView", function(e) {
                    function u() {
                        return e.apply(this, arguments) || this
                    }
                    return t(u, e),
                        u.prototype.refreshView = function(e) {
                            void 0 === e.maxCount && (e.maxCount = 999),
                            void 0 === e.count && (e.count = 1),
                            void 0 === e.itemType && (e.itemType = c.PROPS);
                            var t = e;
                            this.gui.refresh(t)
                        }
                        ,
                        n(u, [{
                            key: "bundleName",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "prefabPath",
                            get: function() {
                                return "prefabs/common/BuyItemView"
                            }
                        }, {
                            key: "guiParent",
                            get: function() {
                                return r.gRootCanvas
                            }
                        }, {
                            key: "gui",
                            get: function() {
                                var e;
                                return null == (e = this.node) ? void 0 : e.getComponent(o)
                            }
                        }]),
                        u
                }(i));
                u._RF.pop()
            }
        }
    }
));
