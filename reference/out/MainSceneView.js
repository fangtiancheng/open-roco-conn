System.register("chunks:///_virtual/MainSceneView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BasePanel.ts", "./UIManager.ts", "./BuildLogHelper.ts"], (function(n) {
        var e, t, i, o, u, c;
        return {
            setters: [function(n) {
                e = n.inheritsLoose,
                    t = n.createClass
            }
                , function(n) {
                    i = n.cclegacy
                }
                , function(n) {
                    o = n.BasePanel
                }
                , function(n) {
                    u = n.default
                }
                , function(n) {
                    c = n.default
                }
            ],
            execute: function() {
                i._RF.push({}, "dcec4mXkvVESJRrja2QAYCo", "MainSceneView", void 0);
                n("default", function(n) {
                    function i() {
                        return n.apply(this, arguments) || this
                    }
                    e(i, n);
                    var o = i.prototype;
                    return o.afterConstructor = function() {
                        this.__name = "MainSceneView"
                    }
                        ,
                        o.onInit = function() {
                            this.initLog()
                        }
                        ,
                        o.onShow = function() {
                            1 == c.IS_LOCAL && console.log("MainSceneView==onShow"),
                            this._view && u.gRootCanvas.addChild(this._view)
                        }
                        ,
                        o.onUpdate = function(n) {}
                        ,
                        o.onClose = function() {}
                        ,
                        o.onDestroy = function() {}
                        ,
                        t(i, [{
                            key: "resBundleKey",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return "prefabs/MainUI_1600"
                            }
                        }]),
                        i
                }(o));
                i._RF.pop()
            }
        }
    }
));
