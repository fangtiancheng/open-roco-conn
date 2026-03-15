System.register("chunks:///_virtual/CreateRoleMediator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameMediator.ts", "./CreateRoleMessage.ts", "./CreateRoleAlertView.ts", "./CreateRoleView.ts", "./GameAgreementView.ts", "./GameAgreementWarningView.ts"], (function(e) {
        var t, i, r, o, n, s, a, E;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    i = e.cclegacy
                }
                , function(e) {
                    r = e.GameMediator
                }
                , function(e) {
                    o = e.CreateRoleMessage
                }
                , function(e) {
                    n = e.CreateRoleAlertView
                }
                , function(e) {
                    s = e.CreateRoleView
                }
                , function(e) {
                    a = e.GameAgreementView
                }
                , function(e) {
                    E = e.GameAgreementWarningView
                }
            ],
            execute: function() {
                i._RF.push({}, "857bd0d681P87QxmU1Qym7q", "CreateRoleMediator", void 0),
                    e("CreateRoleMediator", function(e) {
                        function i() {
                            return e.call(this, i.NAME) || this
                        }
                        t(i, e);
                        var r = i.prototype;
                        return r.onRegisterView = function() {
                            this.registerView(s),
                                this.registerView(a),
                                this.registerView(E),
                                this.registerView(n)
                        }
                            ,
                            r.onRegisterProtocol = function() {}
                            ,
                            r.onUnregisterProtocol = function() {}
                            ,
                            r.onNotificationInterests = function() {
                                return [o.SHOW_MAIN_VIEW, o.CLOSE_MAIN_VIEW, o.SHOW_AGREEMENT_VIEW, o.CLOSE_AGREEMENT_VIEW, o.SHOW_AGREEMENT_WARNING_VIEW, o.CLOSE_AGREEMENT_WARNING_VIEW, o.SHOW_CREATE_SUCCESS_VIEW]
                            }
                            ,
                            r.onHandleNotification = function(e) {
                                switch (e.getName()) {
                                    case o.SHOW_MAIN_VIEW:
                                        this.getView(s).show();
                                        break;
                                    case o.CLOSE_MAIN_VIEW:
                                        this.getView(s).close();
                                        break;
                                    case o.SHOW_AGREEMENT_VIEW:
                                        this.getView(a).show(),
                                            this.getView(s).warnAgree();
                                        break;
                                    case o.CLOSE_AGREEMENT_VIEW:
                                        this.getView(a).close(),
                                            this.getView(s).warnDefault();
                                        break;
                                    case o.SHOW_AGREEMENT_WARNING_VIEW:
                                        this.getView(E).show(),
                                            this.getView(s).warnNoAgree();
                                        break;
                                    case o.CLOSE_AGREEMENT_WARNING_VIEW:
                                        this.getView(E).close();
                                        break;
                                    case o.SHOW_CREATE_SUCCESS_VIEW:
                                        this.getView(n).show()
                                }
                            }
                            ,
                            i
                    }(r)).NAME = "CreateRoleMediator",
                    i._RF.pop()
            }
        }
    }
));
