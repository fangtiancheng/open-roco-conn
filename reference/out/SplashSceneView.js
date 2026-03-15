System.register("chunks:///_virtual/SplashSceneView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BasePanel.ts", "./UIManager.ts", "./BuildLogHelper.ts"], (function(n) {
        var e, t, o, i, s, u;
        return {
            setters: [function(n) {
                e = n.inheritsLoose,
                    t = n.createClass
            }
                , function(n) {
                    o = n.cclegacy
                }
                , function(n) {
                    i = n.BasePanel
                }
                , function(n) {
                    s = n.default
                }
                , function(n) {
                    u = n.default
                }
            ],
            execute: function() {
                o._RF.push({}, "c7f40RZ7DlB04H+a8FVJhUC", "SplashSceneView", void 0);
                n("default", function(n) {
                    function o() {
                        return n.apply(this, arguments) || this
                    }
                    e(o, n);
                    var i = o.prototype;
                    return i.afterConstructor = function() {
                        this.__name = "SplashSceneView"
                    }
                        ,
                        i.onInit = function() {
                            this.initLog()
                        }
                        ,
                        i.onShow = function() {
                            1 == u.IS_LOCAL && console.log("SplashSceneView==onShow"),
                            this._view && s.gRootCanvas.addChild(this._view)
                        }
                        ,
                        i.onUpdate = function(n) {}
                        ,
                        i.onClose = function() {}
                        ,
                        i.onDestroy = function() {}
                        ,
                        t(o, [{
                            key: "resBundleKey",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return "prefabs/SplashUI_1600"
                            }
                        }]),
                        o
                }(i));
                o._RF.pop()
            }
        }
    }
));
