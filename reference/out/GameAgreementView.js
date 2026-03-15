System.register("chunks:///_virtual/GameAgreementView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./GameAgreementUI.ts", "./UIManager.ts"], (function(e) {
        var t, n, r, i, u, a;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass
            }
                , function(e) {
                    r = e.cclegacy
                }
                , function(e) {
                    i = e.GameView
                }
                , function(e) {
                    u = e.GameAgreementUI
                }
                , function(e) {
                    a = e.default
                }
            ],
            execute: function() {
                r._RF.push({}, "ee68aCrXFtFe4qWrVyNzvfx", "GameAgreementView", void 0);
                e("GameAgreementView", function(e) {
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
                                return "prefabs/create_role/GameAgreementView"
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
