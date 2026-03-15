System.register("chunks:///_virtual/NightMediator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Mediator.ts", "./AppConstDef.ts", "./NightView.ts"], (function(t) {
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
                i._RF.push({}, "10254Ma/u5N4b3FlFxedZc7", "NightMediator", void 0),
                    t("default", function(t) {
                        function i() {
                            var e;
                            return (e = t.call(this, i.NAME) || this)._view = new s,
                                e
                        }
                        e(i, t);
                        var n = i.prototype;
                        return n.listNotificationInterests = function() {
                            return [o.NN_V_SHOW_NIGHT_VIEW, o.NN_V_CLOSE_NIGHT_VIEW]
                        }
                            ,
                            n.handleNotification = function(t) {
                                t.getBody();
                                switch (t.getName()) {
                                    case o.NN_V_SHOW_NIGHT_VIEW:
                                        null != this._view && null != this._view || (this._view = new s),
                                            this._view.show();
                                        break;
                                    case o.NN_V_CLOSE_NIGHT_VIEW:
                                        this._view.close();
                                        break;
                                    case o.NN_V_DESTORY_SERVER_LIST_VIEW:
                                        this._view.destroy(),
                                            this._view = null
                                }
                            }
                            ,
                            i
                    }(n)).NAME = "NightMediator",
                    i._RF.pop()
            }
        }
    }
));
