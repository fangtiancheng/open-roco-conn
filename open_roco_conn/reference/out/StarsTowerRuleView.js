System.register("chunks:///_virtual/StarsTowerRuleView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./UIManager.ts", "./StarsTowerRuleUI.ts"], (function(e) {
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
                    i = e.StarsTowerRuleUI
                }
            ],
            execute: function() {
                r._RF.push({}, "169d5WIHfpBE6TmUdYRxxYl", "StarsTowerRuleView", void 0);
                e("StarsTowerRuleView", function(e) {
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
                                return "prefabs/starsTower/StarsTowerRuleView"
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
