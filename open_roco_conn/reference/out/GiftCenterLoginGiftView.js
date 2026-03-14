System.register("chunks:///_virtual/GiftCenterLoginGiftView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./UIManager.ts", "./GiftCenterLoginGiftUI.ts"], (function(e) {
        var t, n, i, r, u, o;
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
                    o = e.GiftCenterLoginGiftUI
                }
            ],
            execute: function() {
                i._RF.push({}, "59a7ejZv9RIIZxJ72ilUdGe", "GiftCenterLoginGiftView", void 0);
                e("GiftCenterLoginGiftView", function(e) {
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
                                return "prefabs/giftCenter_1600/ui/LoginGiftView"
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
                        i
                }(r));
                i._RF.pop()
            }
        }
    }
));
