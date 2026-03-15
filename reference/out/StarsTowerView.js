System.register("chunks:///_virtual/StarsTowerView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./StarsTowerUI.ts", "./UIManager.ts"], (function(e) {
        var t, r, n, i, o, u;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    r = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    i = e.GameView
                }
                , function(e) {
                    o = e.StarsTowerUI
                }
                , function(e) {
                    u = e.default
                }
            ],
            execute: function() {
                n._RF.push({}, "99f67YC4qdI64hQtPn/kb/Z", "StarsTowerView", void 0);
                e("StarsTowerView", function(e) {
                    function n() {
                        return e.apply(this, arguments) || this
                    }
                    return t(n, e),
                        n.prototype.refreshView = function(e) {
                            var t = e.params
                                , r = e.pageIndex;
                            this.gui.refresh(t, r)
                        }
                        ,
                        r(n, [{
                            key: "bundleName",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "prefabPath",
                            get: function() {
                                return "prefabs/starsTower/StarsTowerView"
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
                        n
                }(i));
                n._RF.pop()
            }
        }
    }
));
