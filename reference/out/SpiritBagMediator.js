System.register("chunks:///_virtual/SpiritBagMediator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./Mediator.ts", "./AppConstDef.ts", "./SpiritBagView.ts"], (function(t) {
        var i, e, n, _, o, s;
        return {
            setters: [function(t) {
                i = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    n = t.__global
                }
                , function(t) {
                    _ = t.Mediator
                }
                , function(t) {
                    o = t.AppConstDef
                }
                , function(t) {
                    s = t.default
                }
            ],
            execute: function() {
                e._RF.push({}, "41a1cbBDE1I8ZgBpDlLsnL4", "SpiritBagMediator", void 0),
                    t("default", function(t) {
                        function e() {
                            var i;
                            return (i = t.call(this, e.NAME) || this)._view = null,
                                i
                        }
                        i(e, t);
                        var _ = e.prototype;
                        return _.listNotificationInterests = function() {
                            return [o.NN_V_SHOW_SPIRIT_BAG_VIEW, o.NN_V_CLOSE_SPIRIT_BAG_VIEW, o.NN_V_DESTORY_SPIRIT_BAG_VIEW]
                        }
                            ,
                            _.handleNotification = function(t) {
                                t.getBody();
                                switch (t.getName()) {
                                    case o.NN_V_SHOW_SPIRIT_BAG_VIEW:
                                        null != this._view && null != this._view || (this._view = new s),
                                            this._view.show(),
                                            n.UI.createMiniLoading();
                                        break;
                                    case o.NN_V_CLOSE_SPIRIT_BAG_VIEW:
                                    case o.NN_V_DESTORY_SPIRIT_BAG_VIEW:
                                        this._view.destroy(),
                                            this._view = null
                                }
                            }
                            ,
                            e
                    }(_)).NAME = "SpiritBagMediator",
                    e._RF.pop()
            }
        }
    }
));
