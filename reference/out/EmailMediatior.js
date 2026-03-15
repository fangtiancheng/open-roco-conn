System.register("chunks:///_virtual/EmailMediatior.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameMediator.ts", "./EmailMessage.ts", "./EmailDelProtocol.ts", "./EmailGetAttachmentProtocol.ts", "./EmailOpenProtocol.ts", "./EmailQueryListProtocol.ts", "./MessageBoxProtocol.ts", "./EmailMainView.ts"], (function(t) {
        var o, i, e, r, n, s, c, a, l, u;
        return {
            setters: [function(t) {
                o = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    e = t.GameMediator
                }
                , function(t) {
                    r = t.EmailMessage
                }
                , function(t) {
                    n = t.EmailDelProtocol
                }
                , function(t) {
                    s = t.EmailGetAttachmentProtocol
                }
                , function(t) {
                    c = t.EmailOpenProtocol
                }
                , function(t) {
                    a = t.EmailQueryListProtocol
                }
                , function(t) {
                    l = t.MessageBoxProtocol
                }
                , function(t) {
                    u = t.EmailMainView
                }
            ],
            execute: function() {
                i._RF.push({}, "d8b2cqaza9PDIbUSqT/1C3a", "EmailMediatior", void 0),
                    t("EmailMediatior", function(t) {
                        function i() {
                            return t.call(this, i.NAME) || this
                        }
                        o(i, t);
                        var e = i.prototype;
                        return e.onRegisterView = function() {
                            this.registerView(u)
                        }
                            ,
                            e.onRegisterProtocol = function() {
                                this.registerProtocol(a),
                                    this.registerProtocol(c),
                                    this.registerProtocol(s),
                                    this.registerProtocol(n),
                                    this.registerProtocol(l)
                            }
                            ,
                            e.onUnregisterProtocol = function() {}
                            ,
                            e.onNotificationInterests = function() {
                                return [r.SHOW_MAIN_VIEW, r.CLOSE_MAIN_VIEW]
                            }
                            ,
                            e.onHandleNotification = function(t) {
                                switch (t.getName()) {
                                    case r.SHOW_MAIN_VIEW:
                                        this.getView(u).show(t.getBody());
                                        break;
                                    case r.CLOSE_MAIN_VIEW:
                                        this.getView(u).close()
                                }
                            }
                            ,
                            i
                    }(e)).NAME = "EmailMediatiorMediatior",
                    i._RF.pop()
            }
        }
    }
));
