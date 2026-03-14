System.register("chunks:///_virtual/StarsTowerShopView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./UIManager.ts", "./StarsTowerShopUI.ts"], (function(e) {
        var t, r, n, o, i, u;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    r = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    o = e.GameView
                }
                , function(e) {
                    i = e.default
                }
                , function(e) {
                    u = e.StarsTowerShopUI
                }
            ],
            execute: function() {
                n._RF.push({}, "60e33AUDhpC5J2sXWuP5AKa", "StarsTowerShopView", void 0);
                e("StarsTowerShopView", function(e) {
                    function n() {
                        return e.apply(this, arguments) || this
                    }
                    return t(n, e),
                        n.prototype.refreshView = function(e) {
                            this.gui.refresh(e)
                        }
                        ,
                        r(n, [{
                            key: "bundleName",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "prefabPath",
                            get: function() {
                                return "prefabs/starsTower/StarsTowerShopView"
                            }
                        }, {
                            key: "guiParent",
                            get: function() {
                                return i.gRootCanvas
                            }
                        }, {
                            key: "gui",
                            get: function() {
                                var e;
                                return null == (e = this.node) ? void 0 : e.getComponent(u)
                            }
                        }]),
                        n
                }(o));
                n._RF.pop()
            }
        }
    }
));
