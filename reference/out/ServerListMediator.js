System.register("chunks:///_virtual/ServerListMediator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Mediator.ts", "./AppConstDef.ts", "./ServerListView.ts"], (function(t) {
        var e, i, _, n, s;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    _ = t.Mediator
                }
                , function(t) {
                    n = t.AppConstDef
                }
                , function(t) {
                    s = t.default
                }
            ],
            execute: function() {
                i._RF.push({}, "fd3abPwxcdKJb9WaIVzqEEm", "ServerListMediator", void 0),
                    t("default", function(t) {
                        function i() {
                            var e;
                            return (e = t.call(this, i.NAME) || this)._view = new s,
                                e
                        }
                        e(i, t);
                        var _ = i.prototype;
                        return _.listNotificationInterests = function() {
                            return [n.NN_V_SHOW_SERVER_LIST_VIEW, n.NN_V_CLOSE_SERVER_LIST_VIEW, n.NN_V_DESTORY_SERVER_LIST_VIEW]
                        }
                            ,
                            _.handleNotification = function(t) {
                                t.getBody();
                                switch (t.getName()) {
                                    case n.NN_V_SHOW_SERVER_LIST_VIEW:
                                        null != this._view && null != this._view || (this._view = new s),
                                            this._view.show();
                                        break;
                                    case n.NN_V_CLOSE_SERVER_LIST_VIEW:
                                        this._view.close();
                                        break;
                                    case n.NN_V_DESTORY_SERVER_LIST_VIEW:
                                        this._view.destroy(),
                                            this._view = null
                                }
                            }
                            ,
                            i
                    }(_)).NAME = "ServerListMediator",
                    i._RF.pop()
            }
        }
    }
));
