System.register("chunks:///_virtual/BraveTrainingMainView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./UIManager.ts", "./BraveTrainingUI.ts"], (function(n) {
        var e, i, t, r, a, u;
        return {
            setters: [function(n) {
                e = n.inheritsLoose,
                    i = n.createClass
            }
                , function(n) {
                    t = n.cclegacy
                }
                , function(n) {
                    r = n.GameView
                }
                , function(n) {
                    a = n.default
                }
                , function(n) {
                    u = n.BraveTrainingUI
                }
            ],
            execute: function() {
                t._RF.push({}, "77938UWqN1GibPMNbaa+Do2", "BraveTrainingMainView", void 0);
                n("BraveTrainingMainView", function(n) {
                    function t() {
                        return n.apply(this, arguments) || this
                    }
                    return e(t, n),
                        t.prototype.sendCombat = function(n) {
                            this.gui.sendCombat(n)
                        }
                        ,
                        i(t, [{
                            key: "bundleName",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "prefabPath",
                            get: function() {
                                return "prefabs/braveTraining_1600/BraveTrainingMainView_1600"
                            }
                        }, {
                            key: "guiParent",
                            get: function() {
                                return a.gRootCanvas
                            }
                        }, {
                            key: "gui",
                            get: function() {
                                var n;
                                return null == (n = this.node) ? void 0 : n.getComponent(u)
                            }
                        }]),
                        t
                }(r));
                t._RF.pop()
            }
        }
    }
));
