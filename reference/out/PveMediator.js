System.register("chunks:///_virtual/PveMediator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Mediator.ts", "./AppConstDef.ts", "./PveView.ts", "./global.ts"], (function(t) {
        var e, i, n, o, _, s;
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
                    _ = t.default
                }
                , function(t) {
                    s = t.__global
                }
            ],
            execute: function() {
                i._RF.push({}, "ad2fanIeKNHuqyNY/UxtdLh", "PveMediator", void 0),
                    t("default", function(t) {
                        function i() {
                            var e;
                            return (e = t.call(this, i.NAME) || this)._view = void 0,
                                e
                        }
                        e(i, t);
                        var n = i.prototype;
                        return n.listNotificationInterests = function() {
                            return [o.NN_V_SHOW_PVE_VIEW, o.NN_V_CLOSE_PVE_VIEW, o.NN_V_DESTORY_PVE_VIEW]
                        }
                            ,
                            n.handleNotification = function(t) {
                                t.getBody();
                                switch (t.getName()) {
                                    case o.NN_V_SHOW_PVE_VIEW:
                                        s.UI.createMiniLoading(),
                                        null == this._view && (this._view = new _),
                                            this._view.show();
                                        break;
                                    case o.NN_V_CLOSE_PVE_VIEW:
                                    case o.NN_V_DESTORY_PVE_VIEW:
                                        this._view.destroy(),
                                            this._view = null
                                }
                            }
                            ,
                            i
                    }(n)).NAME = "PveMediator",
                    i._RF.pop()
            }
        }
    }
));
