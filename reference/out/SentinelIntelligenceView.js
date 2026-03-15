System.register("chunks:///_virtual/SentinelIntelligenceView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./UIManager.ts", "./SentinelIntelligenceMasterUI.ts"], (function(e) {
        var n, t, i, u, r, l;
        return {
            setters: [function(e) {
                n = e.inheritsLoose,
                    t = e.createClass
            }
                , function(e) {
                    i = e.cclegacy
                }
                , function(e) {
                    u = e.GameView
                }
                , function(e) {
                    r = e.default
                }
                , function(e) {
                    l = e.SentinelIntelligenceMasterUI
                }
            ],
            execute: function() {
                i._RF.push({}, "abb1cdk9lZFBqK1DojRd9D0", "SentinelIntelligenceView", void 0);
                e("SentinelIntelligenceView", function(e) {
                    function i() {
                        return e.apply(this, arguments) || this
                    }
                    n(i, e);
                    var u = i.prototype;
                    return u.refreshView = function() {
                        this.gui.refreshAwakePage()
                    }
                        ,
                        u.showSubUI = function(e) {
                            this.gui.showSubUI(e)
                        }
                        ,
                        t(i, [{
                            key: "bundleName",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "prefabPath",
                            get: function() {
                                return "prefabs/sentinel-Intelligence/sentinel-master"
                            }
                        }, {
                            key: "guiParent",
                            get: function() {
                                return r.gRootCanvas
                            }
                        }, {
                            key: "gui",
                            get: function() {
                                var e;
                                return null == (e = this.node) ? void 0 : e.getComponent(l)
                            }
                        }]),
                        i
                }(u));
                i._RF.pop()
            }
        }
    }
));
