System.register("chunks:///_virtual/SplashSceneMediator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Mediator.ts", "./AppConstDef.ts", "./SplashSceneView.ts"], (function(e) {
        var t, i, n, s, o;
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
                    s = e.AppConstDef
                }
                , function(e) {
                    o = e.default
                }
            ],
            execute: function() {
                i._RF.push({}, "a11afUTY9dGUYklJL4gnCXF", "SplashSceneMediator", void 0),
                    e("default", function(e) {
                        function i() {
                            var t;
                            return (t = e.call(this, i.NAME) || this)._view = new o,
                                t
                        }
                        t(i, e);
                        var n = i.prototype;
                        return n.listNotificationInterests = function() {
                            return [s.NN_V_SHOW_SPLASH_VIEW, s.NN_V_CLOSE_SPLASH_VIEW]
                        }
                            ,
                            n.handleNotification = function(e) {
                                e.getBody();
                                switch (e.getName()) {
                                    case s.NN_V_SHOW_SPLASH_VIEW:
                                        null != this._view && null != this._view || (this._view = new o),
                                            this._view.show();
                                        break;
                                    case s.NN_V_CLOSE_SPLASH_VIEW:
                                        this._view.close();
                                        break;
                                    case s.NN_V_DESTORY_SPLASH_VIEW:
                                        this._view.destroy(),
                                            this._view = null
                                }
                            }
                            ,
                            i
                    }(n)).NAME = "SplashSceneMediator",
                    i._RF.pop()
            }
        }
    }
));
