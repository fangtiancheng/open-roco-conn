System.register("chunks:///_virtual/SevenHolyLandMediatior.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameMediator.ts", "./SevenHolyLandView.ts", "./SevenHolyLandMessage.ts"], (function(e) {
        var t, n, o, i, a, r;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy,
                        o = e._decorator
                }
                , function(e) {
                    i = e.GameMediator
                }
                , function(e) {
                    a = e.SevenHolyLandView
                }
                , function(e) {
                    r = e.SevenHolyLandMessage
                }
            ],
            execute: function() {
                var s, c;
                n._RF.push({}, "fa5fdIVQaBBQIA5OrSzFGA4", "SevenHolyLandMediatior", void 0);
                var d = o.ccclass;
                o.property,
                    e("SevenHolyLandMediatior", d("SevenHolyLandMediatior")(((c = function(e) {
                        function n() {
                            return e.call(this, n.NAME) || this
                        }
                        t(n, e);
                        var o = n.prototype;
                        return o.onRegisterView = function() {
                            this.registerView(a)
                        }
                            ,
                            o.onRegisterProtocol = function() {}
                            ,
                            o.onUnregisterProtocol = function() {}
                            ,
                            o.onNotificationInterests = function() {
                                return [r.SHOW_MAIN_VIEW, r.CLOSE_MAIN_VIEW, r.SEND_VIP_CHANGE, r.SEND_CHALLENGE_COMBAT]
                            }
                            ,
                            o.onHandleNotification = function(e) {
                                switch (e.getName()) {
                                    case r.SHOW_MAIN_VIEW:
                                        this.getView(a).show();
                                        break;
                                    case r.CLOSE_MAIN_VIEW:
                                        this.getView(a).close();
                                        break;
                                    case r.SEND_VIP_CHANGE:
                                        this.getView(a).sendVipChange(e.getBody());
                                        break;
                                    case r.SEND_CHALLENGE_COMBAT:
                                        this.getView(a).sendCombat(e.getBody())
                                }
                            }
                            ,
                            n
                    }(i)).NAME = "SevenHolyLandMediatior",
                        s = c)) || s);
                n._RF.pop()
            }
        }
    }
));
