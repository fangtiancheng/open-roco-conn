System.register("chunks:///_virtual/GiftCenterMediatior.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameMediator.ts", "./GiftCenterLoginConfig.ts", "./GiftCenterMessage.ts", "./GiftCenterLoginGiftView.ts", "./GiftCenterMainView.ts"], (function(e) {
        var t, i, n, o, r, s, c;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    i = e.cclegacy
                }
                , function(e) {
                    n = e.GameMediator
                }
                , function(e) {
                    o = e.GiftCenterLoginConfig
                }
                , function(e) {
                    r = e.GiftCenterMessage
                }
                , function(e) {
                    s = e.GiftCenterLoginGiftView
                }
                , function(e) {
                    c = e.GiftCenterMainView
                }
            ],
            execute: function() {
                i._RF.push({}, "33676B8iEhCwJOZ88jIyAC8", "GiftCenterMediatior", void 0),
                    e("GiftCenterMediatior", function(e) {
                        function i() {
                            return e.call(this, i.NAME) || this
                        }
                        t(i, e);
                        var n = i.prototype;
                        return n.onRegisterView = function() {
                            this.registerView(c),
                                this.registerView(s)
                        }
                            ,
                            n.onRegisterProtocol = function() {}
                            ,
                            n.onUnregisterProtocol = function() {}
                            ,
                            n.onNotificationInterests = function() {
                                return [r.SHOW_MAIN_VIEW, r.CLOSE_MAIN_VIEW, r.SHOW_LOGIN_GIFT_VIEW, r.CLOSE_LOGIN_GIFT_VIEW]
                            }
                            ,
                            n.onHandleNotification = function(e) {
                                switch (e.getName()) {
                                    case r.SHOW_MAIN_VIEW:
                                        o.CURR_ENTER_MODEL = 1,
                                            this.getView(c).show(e.getBody());
                                        break;
                                    case r.CLOSE_MAIN_VIEW:
                                        this.getView(c).close();
                                        break;
                                    case r.CLOSE_LOGIN_GIFT_VIEW:
                                        this.getView(s).close();
                                        break;
                                    case r.SHOW_LOGIN_GIFT_VIEW:
                                        o.CURR_ENTER_MODEL = 0,
                                            this.getView(s).show(e.getBody())
                                }
                            }
                            ,
                            i
                    }(n)).NAME = "GiftCenterMediatior",
                    i._RF.pop()
            }
        }
    }
));
