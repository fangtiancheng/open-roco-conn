System.register("chunks:///_virtual/StarsTowerDisintegrateView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./UIManager.ts", "./StarsTowerDisintegrateUI.ts"], (function(e) {
        var t, n, r, i, s, o;
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
                    s = e.default
                }
                , function(e) {
                    o = e.StarsTowerDisintegrateUI
                }
            ],
            execute: function() {
                r._RF.push({}, "5b504NUmZJEtIVntmbmA31n", "StarsTowerDisintegrateView", void 0);
                e("StarsTowerDisintegrateView", function(e) {
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
                                return "prefabs/starsTower/StarsTowerDisintegrateView"
                            }
                        }, {
                            key: "guiParent",
                            get: function() {
                                return s.gRootCanvas
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
