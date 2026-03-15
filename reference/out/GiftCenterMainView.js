System.register("chunks:///_virtual/GiftCenterMainView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./UIManager.ts", "./GiftCenterMainUI.ts"], (function(e) {
        var t, n, i, r, u, a;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass
            }
                , function(e) {
                    i = e.cclegacy
                }
                , function(e) {
                    r = e.GameView
                }
                , function(e) {
                    u = e.default
                }
                , function(e) {
                    a = e.GiftCenterMainUI
                }
            ],
            execute: function() {
                i._RF.push({}, "a4b578MPg5DRblmkOQdqmjJ", "GiftCenterMainView", void 0);
                e("GiftCenterMainView", function(e) {
                    function i() {
                        return e.apply(this, arguments) || this
                    }
                    return t(i, e),
                        n(i, [{
                            key: "bundleName",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "prefabPath",
                            get: function() {
                                return "prefabs/giftCenter_1600/ui/GiftCenterMainView"
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
                                return null == (e = this.node) ? void 0 : e.getComponent(a)
                            }
                        }]),
                        i
                }(r));
                i._RF.pop()
            }
        }
    }
));
