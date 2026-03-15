System.register("chunks:///_virtual/LuluView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./BasePanel.ts", "./UIManager.ts", "./BuildLogHelper.ts"], (function(n) {
        var t, e, o, u, i, s, l;
        return {
            setters: [function(n) {
                t = n.inheritsLoose,
                    e = n.createClass
            }
                , function(n) {
                    o = n.cclegacy
                }
                , function(n) {
                    u = n.__global
                }
                , function(n) {
                    i = n.BasePanel
                }
                , function(n) {
                    s = n.default
                }
                , function(n) {
                    l = n.default
                }
            ],
            execute: function() {
                o._RF.push({}, "86c65jh7NBAsb0Aer5Dwz6y", "LuluView", void 0);
                n("default", function(n) {
                    function o() {
                        return n.apply(this, arguments) || this
                    }
                    t(o, n);
                    var i = o.prototype;
                    return i.afterConstructor = function() {
                        this.__name = "LuluView"
                    }
                        ,
                        i.onInit = function() {
                            this.initLog()
                        }
                        ,
                        i.onShow = function() {
                            1 == l.IS_LOCAL && console.log("LuluView==onShow"),
                                u.UI.closeMiniLoading(),
                            this._view && s.gRootCanvas.addChild(this._view)
                        }
                        ,
                        i.onUpdate = function(n) {}
                        ,
                        i.onClose = function() {}
                        ,
                        i.onDestroy = function() {}
                        ,
                        e(o, [{
                            key: "resBundleKey",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return "prefabs/lulu_1600/LuluUI_1600"
                            }
                        }]),
                        o
                }(i));
                o._RF.pop()
            }
        }
    }
));
