System.register("chunks:///_virtual/EmailMainView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./EmailMainUI.ts", "./UIManager.ts"], (function(e) {
        var n, t, i, a, u, r;
        return {
            setters: [function(e) {
                n = e.inheritsLoose,
                    t = e.createClass
            }
                , function(e) {
                    i = e.cclegacy
                }
                , function(e) {
                    a = e.GameView
                }
                , function(e) {
                    u = e.EmailMainUI
                }
                , function(e) {
                    r = e.default
                }
            ],
            execute: function() {
                i._RF.push({}, "83100dAbglL2afJS5s+X8XG", "EmailMainView", void 0);
                e("EmailMainView", function(e) {
                    function i() {
                        return e.apply(this, arguments) || this
                    }
                    return n(i, e),
                        i.prototype.refreshView = function() {
                            this.gui.refreshAwakePage()
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
                                return "prefabs/email/Email_Main"
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
                                return null == (e = this.node) ? void 0 : e.getComponent(u)
                            }
                        }]),
                        i
                }(a));
                i._RF.pop()
            }
        }
    }
));
