System.register("chunks:///_virtual/LadderMatchUIMediator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./Mediator.ts", "./AppConstDef.ts", "./LadderMatchView.ts"], (function(t) {
        var e, i, _, n, o, s;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    _ = t.__global
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
                i._RF.push({}, "1f381eoKx1B05ZfvUnPhRDd", "LadderMatchUIMediator", void 0),
                    t("default", function(t) {
                        function i() {
                            var e;
                            return (e = t.call(this, i.NAME) || this)._view = new s,
                                e
                        }
                        e(i, t);
                        var n = i.prototype;
                        return n.listNotificationInterests = function() {
                            return [o.NN_V_SHOW_LADDER_MATCH_VIEW, o.NN_V_CLOSE_LADDER_MATCH_VIEW, o.NN_V_DESTORY_LADDER_MATCH_VIEW, o.NN_V_UPDATE_USER_INFO_PANEL]
                        }
                            ,
                            n.handleNotification = function(t) {
                                t.getBody();
                                switch (t.getName()) {
                                    case o.NN_V_SHOW_LADDER_MATCH_VIEW:
                                        null != this._view && null != this._view || (this._view = new s),
                                            this._view.show(),
                                            _.UI.createMiniLoading();
                                        break;
                                    case o.NN_V_CLOSE_LADDER_MATCH_VIEW:
                                    case o.NN_V_DESTORY_LADDER_MATCH_VIEW:
                                        this._view && (this._view.destroy(),
                                            this._view = null);
                                        break;
                                    case o.NN_V_UPDATE_USER_INFO_PANEL:
                                        this._view && this._view.updateUserInfoPanel()
                                }
                            }
                            ,
                            i
                    }(n)).NAME = "LadderMatchUIMediator",
                    i._RF.pop()
            }
        }
    }
));
