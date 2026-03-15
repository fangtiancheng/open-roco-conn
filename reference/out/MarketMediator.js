System.register("chunks:///_virtual/MarketMediator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameMediator.ts", "./MarketMessage.ts", "./MarketMainView.ts"], (function(e) {
        var t, i, r, o, a, n;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    i = e.cclegacy,
                        r = e._decorator
                }
                , function(e) {
                    o = e.GameMediator
                }
                , function(e) {
                    a = e.MarketMessage
                }
                , function(e) {
                    n = e.MarketMainView
                }
            ],
            execute: function() {
                var s, c;
                i._RF.push({}, "15e9fzUGPlLTJkfJY3rP9kI", "MarketMediator", void 0);
                var u = r.ccclass;
                r.property,
                    e("MarketMediator", u("MarketMediator")(((c = function(e) {
                        function i() {
                            return e.call(this, i.NAME) || this
                        }
                        t(i, e);
                        var r = i.prototype;
                        return r.onRegisterView = function() {
                            this.registerView(n)
                        }
                            ,
                            r.onRegisterProtocol = function() {}
                            ,
                            r.onUnregisterProtocol = function() {}
                            ,
                            r.onNotificationInterests = function() {
                                return [a.SHOW_MAIN_VIEW, a.CLOSE_MAIN_VIEW, a.UPDATE_BUY_SUIT_PRICE, a.OPEN_BUY_SUIT, a.UPDATE_BUY_ITEM_BACK]
                            }
                            ,
                            r.onHandleNotification = function(e) {
                                switch (e.getName()) {
                                    case a.SHOW_MAIN_VIEW:
                                        this.getView(n).show();
                                        break;
                                    case a.CLOSE_MAIN_VIEW:
                                        this.getView(n).close();
                                        break;
                                    case a.UPDATE_BUY_SUIT_PRICE:
                                        this.getView(n).updateSuitPrice(e.getBody());
                                        break;
                                    case a.OPEN_BUY_SUIT:
                                        this.getView(n).openBuySuitUI(e.getBody());
                                        break;
                                    case a.UPDATE_BUY_ITEM_BACK:
                                        this.getView(n).updateBuyItemBack(e.getBody())
                                }
                            }
                            ,
                            i
                    }(o)).NAME = "MarketMediator",
                        s = c)) || s);
                i._RF.pop()
            }
        }
    }
));
