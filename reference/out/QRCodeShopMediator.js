System.register("chunks:///_virtual/QRCodeShopMediator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Mediator.ts", "./AppConstDef.ts", "./QRCodeShopView.ts", "./global.ts"], (function(t) {
        var e, i, o, n, _, s;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    o = t.Mediator
                }
                , function(t) {
                    n = t.AppConstDef
                }
                , function(t) {
                    _ = t.default
                }
                , function(t) {
                    s = t.__global
                }
            ],
            execute: function() {
                i._RF.push({}, "7a1c5cVNDZDCbWCnY4xa5iD", "QRCodeShopMediator", void 0),
                    t("default", function(t) {
                        function i() {
                            var e;
                            return (e = t.call(this, i.NAME) || this)._view = void 0,
                                e
                        }
                        e(i, t);
                        var o = i.prototype;
                        return o.listNotificationInterests = function() {
                            return [n.NN_V_SHOW_QRCODESHOP_VIEW, n.NN_V_CLOSE_QRCODESHOP_VIEW, n.NN_V_DESTORY_QRCODESHOP_VIEW]
                        }
                            ,
                            o.handleNotification = function(t) {
                                t.getBody();
                                switch (t.getName()) {
                                    case n.NN_V_SHOW_QRCODESHOP_VIEW:
                                        s.UI.createMiniLoading(),
                                        null == this._view && (this._view = new _),
                                            this._view.show();
                                        break;
                                    case n.NN_V_CLOSE_QRCODESHOP_VIEW:
                                    case n.NN_V_DESTORY_QRCODESHOP_VIEW:
                                        this._view.destroy(),
                                            this._view = null
                                }
                            }
                            ,
                            i
                    }(o)).NAME = "QRCodeShopMediator",
                    i._RF.pop()
            }
        }
    }
));
