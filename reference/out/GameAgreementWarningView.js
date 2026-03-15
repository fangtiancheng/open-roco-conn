System.register("chunks:///_virtual/GameAgreementWarningView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./UIManager.ts", "./GameAgreementWarningUI.ts"], (function(e) {
        var n, t, r, i, a, u;
        return {
            setters: [function(e) {
                n = e.inheritsLoose,
                    t = e.createClass
            }
                , function(e) {
                    r = e.cclegacy
                }
                , function(e) {
                    i = e.GameView
                }
                , function(e) {
                    a = e.default
                }
                , function(e) {
                    u = e.GameAgreementWarningUI
                }
            ],
            execute: function() {
                r._RF.push({}, "eba44ZypNZEg7w7jCLSGOZF", "GameAgreementWarningView", void 0);
                e("GameAgreementWarningView", function(e) {
                    function r() {
                        return e.apply(this, arguments) || this
                    }
                    return n(r, e),
                        t(r, [{
                            key: "bundleName",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "prefabPath",
                            get: function() {
                                return "prefabs/create_role/GameAgreementWarningView"
                            }
                        }, {
                            key: "guiParent",
                            get: function() {
                                return a.gRootCanvas
                            }
                        }, {
                            key: "gui",
                            get: function() {
                                var e;
                                return null == (e = this.node) ? void 0 : e.getComponent(u)
                            }
                        }]),
                        r
                }(i));
                r._RF.pop()
            }
        }
    }
));
