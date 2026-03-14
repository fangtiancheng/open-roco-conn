System.register("chunks:///_virtual/SpiritBooksMediator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameMediator.ts", "./SpiritBooksMessage.ts", "./SpiritBooksMainView.ts"], (function(t) {
        var i, e, o, n, s;
        return {
            setters: [function(t) {
                i = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    o = t.GameMediator
                }
                , function(t) {
                    n = t.SpiritBooksMessage
                }
                , function(t) {
                    s = t.SpiritBooksMainView
                }
            ],
            execute: function() {
                e._RF.push({}, "040a19FN1VKzp6fJFhjRjUt", "SpiritBooksMediator", void 0),
                    t("SpiritBooksMediator", function(t) {
                        function e() {
                            return t.call(this, e.NAME) || this
                        }
                        i(e, t);
                        var o = e.prototype;
                        return o.onRegisterView = function() {
                            this.registerView(s)
                        }
                            ,
                            o.onRegisterProtocol = function() {}
                            ,
                            o.onUnregisterProtocol = function() {}
                            ,
                            o.onNotificationInterests = function() {
                                return [n.SHOW_MAIN_VIEW, n.CLOSE_MAIN_VIEW, n.UPDATE_SELECT_STATE]
                            }
                            ,
                            o.onHandleNotification = function(t) {
                                switch (t.getName()) {
                                    case n.SHOW_MAIN_VIEW:
                                        this.getView(s).show(t.getBody());
                                        break;
                                    case n.CLOSE_MAIN_VIEW:
                                        this.getView(s).close();
                                        break;
                                    case n.UPDATE_SELECT_STATE:
                                        this.getView(s).updateLinkSelectState(t.getBody())
                                }
                            }
                            ,
                            e
                    }(o)).NAME = "SpiritBooksMediator",
                    e._RF.pop()
            }
        }
    }
));
