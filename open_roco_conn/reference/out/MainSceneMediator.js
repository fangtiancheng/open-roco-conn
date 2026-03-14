System.register("chunks:///_virtual/MainSceneMediator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Mediator.ts", "./AppConstDef.ts", "./MainSceneView.ts"], (function(e) {
        var t, i, n, o, s;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    i = e.cclegacy
                }
                , function(e) {
                    n = e.Mediator
                }
                , function(e) {
                    o = e.AppConstDef
                }
                , function(e) {
                    s = e.default
                }
            ],
            execute: function() {
                i._RF.push({}, "9d4deXTpvtPIbT5UOKV7xUg", "MainSceneMediator", void 0),
                    e("default", function(e) {
                        function i() {
                            var t;
                            return (t = e.call(this, i.NAME) || this)._view = void 0,
                                t
                        }
                        t(i, e);
                        var n = i.prototype;
                        return n.listNotificationInterests = function() {
                            return [o.NN_V_SHOW_MAIN_SCENE_VIEW, o.NN_V_CLOSE_MAIN_SCENE_VIEW]
                        }
                            ,
                            n.handleNotification = function(e) {
                                e.getBody();
                                switch (e.getName()) {
                                    case o.NN_V_SHOW_MAIN_SCENE_VIEW:
                                        null != this._view && null != this._view || (this._view = new s),
                                            this._view.show();
                                        break;
                                    case o.NN_V_CLOSE_MAIN_SCENE_VIEW:
                                        this._view.close()
                                }
                            }
                            ,
                            i
                    }(n)).NAME = "MainSceneMediator",
                    i._RF.pop()
            }
        }
    }
));
