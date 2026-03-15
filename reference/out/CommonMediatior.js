System.register("chunks:///_virtual/CommonMediatior.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameMediator.ts", "./CommonMessage.ts", "./BuyItemView.ts"], (function(t) {
        var e, o, i, n, r;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    o = t.cclegacy
                }
                , function(t) {
                    i = t.GameMediator
                }
                , function(t) {
                    n = t.CommonMessage
                }
                , function(t) {
                    r = t.BuyItemView
                }
            ],
            execute: function() {
                o._RF.push({}, "63234lsuDVPOIhcPjWTyHru", "CommonMediatior", void 0),
                    t("CommonMediatior", function(t) {
                        function o() {
                            return t.call(this, o.NAME) || this
                        }
                        e(o, t);
                        var i = o.prototype;
                        return i.onRegisterView = function() {
                            this.registerView(r)
                        }
                            ,
                            i.onRegisterProtocol = function() {}
                            ,
                            i.onUnregisterProtocol = function() {}
                            ,
                            i.onNotificationInterests = function() {
                                return [n.SHOW_BUY_ITEM_VIEW, n.CLOSE_BUY_ITEM_VIEW]
                            }
                            ,
                            i.onHandleNotification = function(t) {
                                switch (t.getName()) {
                                    case n.SHOW_BUY_ITEM_VIEW:
                                        this.getView(r).show(t.getBody());
                                        break;
                                    case n.CLOSE_BUY_ITEM_VIEW:
                                        this.getView(r).close()
                                }
                            }
                            ,
                            o
                    }(i)).NAME = "CommonMediatior",
                    o._RF.pop()
            }
        }
    }
));
