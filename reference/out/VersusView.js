System.register("chunks:///_virtual/VersusView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./BasePanel.ts", "./UIManager.ts", "./BuildLogHelper.ts"], (function(n) {
        var e, t, o, i, s, u, r;
        return {
            setters: [function(n) {
                e = n.inheritsLoose,
                    t = n.createClass
            }
                , function(n) {
                    o = n.cclegacy
                }
                , function(n) {
                    i = n.__global
                }
                , function(n) {
                    s = n.BasePanel
                }
                , function(n) {
                    u = n.default
                }
                , function(n) {
                    r = n.default
                }
            ],
            execute: function() {
                o._RF.push({}, "60892nBvS5Md5jdgqRnDmyE", "VersusView", void 0);
                n("default", function(n) {
                    function o() {
                        return n.apply(this, arguments) || this
                    }
                    e(o, n);
                    var s = o.prototype;
                    return s.afterConstructor = function() {
                        this.__name = "VersusView"
                    }
                        ,
                        s.onInit = function() {
                            this.initLog()
                        }
                        ,
                        s.onShow = function() {
                            1 == r.IS_LOCAL && console.log("VersusView==onShow"),
                                i.UI.closeMiniLoading(),
                            this._view && u.gRootCanvas.addChild(this._view)
                        }
                        ,
                        s.onUpdate = function(n) {}
                        ,
                        s.onClose = function() {}
                        ,
                        s.onDestroy = function() {}
                        ,
                        t(o, [{
                            key: "resBundleKey",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return "prefabs/versus_1600/VersusUI_1600"
                            }
                        }]),
                        o
                }(s));
                o._RF.pop()
            }
        }
    }
));
