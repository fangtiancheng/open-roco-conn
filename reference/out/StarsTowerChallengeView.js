System.register("chunks:///_virtual/StarsTowerChallengeView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./StarsTowerChallengeUI.ts", "./UIManager.ts"], (function(e) {
        var t, n, r, i, o, u;
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
                    o = e.StarsTowerChallengeUI
                }
                , function(e) {
                    u = e.default
                }
            ],
            execute: function() {
                r._RF.push({}, "769e8xRFhZPpJ3diB/AHtlW", "StarsTowerChallengeView", void 0);
                e("StarsTowerChallengeView", function(e) {
                    function r() {
                        return e.apply(this, arguments) || this
                    }
                    return t(r, e),
                        r.prototype.refreshView = function(e) {
                            this.gui.refresh(e)
                        }
                        ,
                        n(r, [{
                            key: "bundleName",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "prefabPath",
                            get: function() {
                                return "prefabs/starsTower/StarsTowerChallengeView"
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
                                return null == (e = this.node) ? void 0 : e.getComponent(o)
                            }
                        }]),
                        r
                }(i));
                r._RF.pop()
            }
        }
    }
));
