System.register("chunks:///_virtual/SpiritStorageMediator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./Mediator.ts", "./AppConstDef.ts", "./SpiritStorageAppView.ts"], (function(t) {
        var i, e, n, o, _, r;
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
                    o = t.Mediator
                }
                , function(t) {
                    _ = t.AppConstDef
                }
                , function(t) {
                    r = t.default
                }
            ],
            execute: function() {
                e._RF.push({}, "999c5XH09ZIZYyzqhDC7B/m", "SpiritStorageMediator", void 0),
                    t("default", function(t) {
                        function e() {
                            var i;
                            return (i = t.call(this, e.NAME) || this)._view = new r,
                                i
                        }
                        i(e, t);
                        var o = e.prototype;
                        return o.listNotificationInterests = function() {
                            return [_.NN_V_SHOW_SPIRIT_STORAGE_VIEW, _.NN_V_CLOSE_SPIRIT_STORAGE_VIEW, _.NN_V_DESTORY_SPIRIT_STORAGE_VIEW]
                        }
                            ,
                            o.handleNotification = function(t) {
                                var i = t.getBody();
                                switch (t.getName()) {
                                    case _.NN_V_SHOW_SPIRIT_STORAGE_VIEW:
                                        null != this._view && null != this._view || (this._view = new r),
                                            this._view.show(i),
                                            n.UI.createMiniLoading();
                                        break;
                                    case _.NN_V_CLOSE_SPIRIT_STORAGE_VIEW:
                                        this._view.close();
                                        break;
                                    case _.NN_V_DESTORY_SPIRIT_STORAGE_VIEW:
                                        this._view.destroy(),
                                            this._view = null
                                }
                            }
                            ,
                            e
                    }(o)).NAME = "SpiritStorageMediator",
                    e._RF.pop()
            }
        }
    }
));
