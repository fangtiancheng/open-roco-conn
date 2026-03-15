System.register("chunks:///_virtual/StarsTowerSweepRuleView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./UIManager.ts", "./StarsTowerSweepRuleUI.ts"], (function(e) {
        var t, n, r, u, o, i;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass
            }
                , function(e) {
                    r = e.cclegacy
                }
                , function(e) {
                    u = e.GameView
                }
                , function(e) {
                    o = e.default
                }
                , function(e) {
                    i = e.StarsTowerSweepRuleUI
                }
            ],
            execute: function() {
                r._RF.push({}, "34563kAvCdHNJpCSY1WNAJ4", "StarsTowerSweepRuleView", void 0);
                e("StarsTowerSweepRuleView", function(e) {
                    function r() {
                        return e.apply(this, arguments) || this
                    }
                    return t(r, e),
                        n(r, [{
                            key: "bundleName",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "prefabPath",
                            get: function() {
                                return "prefabs/starsTower/StarsTowerSweepRuleView"
                            }
                        }, {
                            key: "guiParent",
                            get: function() {
                                return o.gRootCanvas
                            }
                        }, {
                            key: "gui",
                            get: function() {
                                var e;
                                return null == (e = this.node) ? void 0 : e.getComponent(i)
                            }
                        }]),
                        r
                }(u));
                r._RF.pop()
            }
        }
    }
));
