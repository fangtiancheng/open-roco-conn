System.register("chunks:///_virtual/LoginMediator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Mediator.ts", "./AppConstDef.ts", "./LoginView.ts"], (function(t) {
        var e, i, n, o, s;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    n = t.Mediator
                }
                , function(t) {
                    o = t.AppConstDef
                }
                , function(t) {
                    s = t.default
                }
            ],
            execute: function() {
                i._RF.push({}, "57c76tPoHJBFp5vmuI6XsXe", "LoginMediator", void 0),
                    t("default", function(t) {
                        function i() {
                            var e;
                            return (e = t.call(this, i.NAME) || this)._view = new s,
                                e
                        }
                        e(i, t);
                        var n = i.prototype;
                        return n.listNotificationInterests = function() {
                            return [o.NN_V_SHOW_LOGIN_VIEW, o.NN_V_CLOSE_LOGIN_VIEW, o.NN_V_DESTORY_LOGIN_VIEW]
                        }
                            ,
                            n.handleNotification = function(t) {
                                t.getBody();
                                switch (t.getName()) {
                                    case o.NN_V_SHOW_LOGIN_VIEW:
                                        null != this._view && null != this._view || (this._view = new s),
                                            this._view.show();
                                        break;
                                    case o.NN_V_CLOSE_LOGIN_VIEW:
                                        this._view.close();
                                        break;
                                    case o.NN_V_DESTORY_LOGIN_VIEW:
                                        this._view.destroy(),
                                            this._view = null
                                }
                            }
                            ,
                            i
                    }(n)).NAME = "LoginMediator",
                    i._RF.pop()
            }
        }
    }
));
