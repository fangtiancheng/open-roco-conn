System.register("chunks:///_virtual/SevenHolyLandView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SevenHolyLandUI.ts", "./GameView.ts", "./UIManager.ts"], (function(e) {
        var n, t, o, i, a, r, u;
        return {
            setters: [function(e) {
                n = e.inheritsLoose,
                    t = e.createClass
            }
                , function(e) {
                    o = e.cclegacy,
                        i = e._decorator
                }
                , function(e) {
                    a = e.SevenHolyLandUI
                }
                , function(e) {
                    r = e.GameView
                }
                , function(e) {
                    u = e.default
                }
            ],
            execute: function() {
                var s;
                o._RF.push({}, "fc7cb6Bk8NGJqtBFH6JAGGZ", "SevenHolyLandView", void 0);
                var c = i.ccclass;
                i.property,
                    e("SevenHolyLandView", c("SevenHolyLandView")(s = function(e) {
                        function o() {
                            return e.apply(this, arguments) || this
                        }
                        n(o, e);
                        var i = o.prototype;
                        return i.sendVipChange = function(e) {
                            this.gui.sendVipChange(e)
                        }
                            ,
                            i.sendCombat = function(e) {
                                this.gui.sendCombat(e)
                            }
                            ,
                            t(o, [{
                                key: "bundleName",
                                get: function() {
                                    return "gui"
                                }
                            }, {
                                key: "prefabPath",
                                get: function() {
                                    return "prefabs/sevenHolyLand_1600/sevenHolyLandMainUI_1600"
                                }
                            }, {
                                key: "guiParent",
                                get: function() {
                                    return u.gRootCanvas
                                }
                            }, {
                                key: "gui",
                                get: function() {
                                    var e;
                                    return null == (e = this.node) ? void 0 : e.getComponent(a)
                                }
                            }]),
                            o
                    }(r)) || s);
                o._RF.pop()
            }
        }
    }
));
