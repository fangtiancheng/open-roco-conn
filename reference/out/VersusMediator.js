System.register("chunks:///_virtual/VersusMediator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Mediator.ts", "./AppConstDef.ts", "./VersusView.ts", "./global.ts"], (function(t) {
        var e, i, n, s, o, _;
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
                    s = t.AppConstDef
                }
                , function(t) {
                    o = t.default
                }
                , function(t) {
                    _ = t.__global
                }
            ],
            execute: function() {
                i._RF.push({}, "4a126rOK9VJ/ZKpiApaFlSE", "VersusMediator", void 0),
                    t("default", function(t) {
                        function i() {
                            var e;
                            return (e = t.call(this, i.NAME) || this)._view = void 0,
                                e
                        }
                        e(i, t);
                        var n = i.prototype;
                        return n.listNotificationInterests = function() {
                            return [s.NN_V_SHOW_VERSUS_VIEW, s.NN_V_CLOSE_VERSUS_VIEW, s.NN_V_DESTORY_VERSUS_VIEW]
                        }
                            ,
                            n.handleNotification = function(t) {
                                t.getBody();
                                switch (t.getName()) {
                                    case s.NN_V_SHOW_VERSUS_VIEW:
                                        _.UI.createMiniLoading(),
                                        null == this._view && (this._view = new o),
                                            this._view.show();
                                        break;
                                    case s.NN_V_CLOSE_VERSUS_VIEW:
                                    case s.NN_V_DESTORY_VERSUS_VIEW:
                                        this._view.destroy(),
                                            this._view = null
                                }
                            }
                            ,
                            i
                    }(n)).NAME = "VersusMediator",
                    i._RF.pop()
            }
        }
    }
));
