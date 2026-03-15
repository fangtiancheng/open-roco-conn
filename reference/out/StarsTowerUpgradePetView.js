System.register("chunks:///_virtual/StarsTowerUpgradePetView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./StarsTowerUpgradePetUI.ts", "./UIManager.ts"], (function(e) {
        var t, r, n, i, o, u;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    r = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    i = e.GameView
                }
                , function(e) {
                    o = e.StarsTowerUpgradePetUI
                }
                , function(e) {
                    u = e.default
                }
            ],
            execute: function() {
                n._RF.push({}, "e0e35Vdm99NWbGJRK0s8y7K", "StarsTowerUpgradePetView", void 0);
                e("StarsTowerUpgradePetView", function(e) {
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
                                return "prefabs/starsTower/StarsTowerUpgradePetView"
                            }
                        }, {
                            key: "guiParent",
                            get: function() {
                                return u.gRootCanvas
                            }
                        }, {
                            key: "gui",
                            get: function() {
                                var e;
                                return null == (e = this.node) ? void 0 : e.getComponent(o)
                            }
                        }]),
                        n
                }(i));
                n._RF.pop()
            }
        }
    }
));
