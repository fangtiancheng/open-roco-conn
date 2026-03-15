System.register("chunks:///_virtual/NightView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BasePanel.ts", "./UIManager.ts", "./BuildLogHelper.ts"], (function(t) {
        var n, e, i, o, u, s;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    o = t.BasePanel
                }
                , function(t) {
                    u = t.default
                }
                , function(t) {
                    s = t.default
                }
            ],
            execute: function() {
                i._RF.push({}, "987d9n+LoFPvYd3Yv8dKvf0", "NightView", void 0);
                t("default", function(t) {
                    function i() {
                        return t.apply(this, arguments) || this
                    }
                    n(i, t);
                    var o = i.prototype;
                    return o.afterConstructor = function() {
                        this.__name = "NightView"
                    }
                        ,
                        o.onInit = function() {
                            this.initLog()
                        }
                        ,
                        o.onShow = function() {
                            1 == s.IS_LOCAL && console.log("NightView==onShow"),
                            this._view && u.gRootCanvas.addChild(this._view)
                        }
                        ,
                        o.onUpdate = function(t) {}
                        ,
                        o.onClose = function() {}
                        ,
                        o.onDestroy = function() {}
                        ,
                        e(i, [{
                            key: "resBundleKey",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return "prefabs/NightUI_1600"
                            }
                        }]),
                        i
                }(o));
                i._RF.pop()
            }
        }
    }
));
