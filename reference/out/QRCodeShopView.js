System.register("chunks:///_virtual/QRCodeShopView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./BasePanel.ts", "./UIManager.ts", "./BuildLogHelper.ts"], (function(n) {
        var o, e, t, i, u, s, c;
        return {
            setters: [function(n) {
                o = n.inheritsLoose,
                    e = n.createClass
            }
                , function(n) {
                    t = n.cclegacy
                }
                , function(n) {
                    i = n.__global
                }
                , function(n) {
                    u = n.BasePanel
                }
                , function(n) {
                    s = n.default
                }
                , function(n) {
                    c = n.default
                }
            ],
            execute: function() {
                t._RF.push({}, "c9ff5q3lzFNiLIQBkTNZXfx", "QRCodeShopView", void 0);
                n("default", function(n) {
                    function t() {
                        return n.apply(this, arguments) || this
                    }
                    o(t, n);
                    var u = t.prototype;
                    return u.afterConstructor = function() {
                        this.__name = "QRCodeShopView"
                    }
                        ,
                        u.onInit = function() {
                            this.initLog()
                        }
                        ,
                        u.onShow = function() {
                            1 == c.IS_LOCAL && console.log("QRCodeShopView==onShow"),
                                i.UI.closeMiniLoading(),
                            this._view && s.gRootCanvas.addChild(this._view)
                        }
                        ,
                        u.onUpdate = function(n) {}
                        ,
                        u.onClose = function() {}
                        ,
                        u.onDestroy = function() {}
                        ,
                        e(t, [{
                            key: "resBundleKey",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return "prefabs/qRCodeShop_1600/QRCodeShopUI_1600"
                            }
                        }]),
                        t
                }(u));
                t._RF.pop()
            }
        }
    }
));
