System.register("chunks:///_virtual/BloodTalentAwakeView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./UIManager.ts", "./BloodTalentAwakeUI.ts"], (function(e) {
        var t, n, o, i, u, a;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass
            }
                , function(e) {
                    o = e.cclegacy
                }
                , function(e) {
                    i = e.GameView
                }
                , function(e) {
                    u = e.default
                }
                , function(e) {
                    a = e.BloodTalentAwakeUI
                }
            ],
            execute: function() {
                o._RF.push({}, "2401coBwb9PKLR5cIbjv2/W", "BloodTalentAwakeView", void 0);
                e("BloodTalentAwakeView", function(e) {
                    function o() {
                        return e.apply(this, arguments) || this
                    }
                    return t(o, e),
                        o.prototype.refreshView = function(e) {
                            this.gui.refresh(e)
                        }
                        ,
                        n(o, [{
                            key: "bundleName",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "prefabPath",
                            get: function() {
                                return "prefabs/bloodTalent/BloodTalentAwakeView"
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
                }(i));
                o._RF.pop()
            }
        }
    }
));
