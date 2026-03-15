System.register("chunks:///_virtual/PveView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./BasePanel.ts", "./UIManager.ts", "./BuildLogHelper.ts"], (function(n) {
        var e, t, o, i, u, s, c;
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
                    u = n.BasePanel
                }
                , function(n) {
                    s = n.default
                }
                , function(n) {
                    c = n.default
                }
            ],
            execute: function() {
                o._RF.push({}, "0cb03Y2S9xCAZNeq/nWVLut", "PveView", void 0);
                n("default", function(n) {
                    function o() {
                        return n.apply(this, arguments) || this
                    }
                    e(o, n);
                    var u = o.prototype;
                    return u.afterConstructor = function() {
                        this.__name = "PveView"
                    }
                        ,
                        u.onInit = function() {
                            this.initLog()
                        }
                        ,
                        u.onShow = function() {
                            1 == c.IS_LOCAL && console.log("PveView==onShow"),
                                i.UI.closeMiniLoading(),
                            this._view && s.gRootCanvas.addChild(this._view)
                        }
                        ,
                        u.onUpdate = function(n) {}
                        ,
                        u.onClose = function() {}
                        ,
                        u.onDestroy = function() {}
                        ,
                        t(o, [{
                            key: "resBundleKey",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return "prefabs/pve_1600/PveUI_1600"
                            }
                        }]),
                        o
                }(u));
                o._RF.pop()
            }
        }
    }
));
