System.register("chunks:///_virtual/BloodTalentSelectPetView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./UIManager.ts", "./BloodTalentSelectPetUI.ts"], (function(e) {
        var t, n, o, l, i, u;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass
            }
                , function(e) {
                    o = e.cclegacy
                }
                , function(e) {
                    l = e.GameView
                }
                , function(e) {
                    i = e.default
                }
                , function(e) {
                    u = e.BloodTalentSelectPetUI
                }
            ],
            execute: function() {
                o._RF.push({}, "f4976zdKl1I2oCVqztydt46", "BloodTalentSelectPetView", void 0);
                e("BloodTalentSelectPetView", function(e) {
                    function o() {
                        return e.apply(this, arguments) || this
                    }
                    return t(o, e),
                        n(o, [{
                            key: "bundleName",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "prefabPath",
                            get: function() {
                                return "prefabs/bloodTalent/BloodTalentSelectPetView"
                            }
                        }, {
                            key: "guiParent",
                            get: function() {
                                return i.gRootCanvas
                            }
                        }, {
                            key: "gui",
                            get: function() {
                                var e;
                                return null == (e = this.node) ? void 0 : e.getComponent(u)
                            }
                        }]),
                        o
                }(l));
                o._RF.pop()
            }
        }
    }
));
