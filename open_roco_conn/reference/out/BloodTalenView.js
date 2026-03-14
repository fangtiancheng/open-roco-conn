System.register("chunks:///_virtual/BloodTalenView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./BloodTalenUI.ts", "./UIManager.ts", "./BloodTalenMessage.ts"], (function(e) {
        var t, n, o, i, a, u, r;
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
                    a = e.BloodTalenUI
                }
                , function(e) {
                    u = e.default
                }
                , function(e) {
                    r = e.MainViewPage
                }
            ],
            execute: function() {
                o._RF.push({}, "210dcIWW6NNjpSGiTN+T5MG", "BloodTalenView", void 0);
                e("BloodTalenView", function(e) {
                    function o() {
                        return e.apply(this, arguments) || this
                    }
                    return t(o, e),
                        o.prototype.refreshView = function(e) {
                            e || (e = {
                                selectPage: r.HAND_BOOK
                            }),
                                this.gui.changePage(e.selectPage, !0),
                                e.selectPage == r.AWAKE ? this.gui.refreshAwakePage(e) : e.selectPage == r.EXPEDITION && this.gui.refreshExpeditionPage()
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
                                return "prefabs/bloodTalent/BloodTalentView"
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
