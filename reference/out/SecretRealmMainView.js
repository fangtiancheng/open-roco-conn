System.register("chunks:///_virtual/SecretRealmMainView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./SecretRealmMainUI.ts", "./SecretRealmView.ts"], (function(e) {
        var t, n, r, i, a, u;
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
                    a = e.SecretRealmMainUI
                }
                , function(e) {
                    u = e.SecretRealmMasterView
                }
            ],
            execute: function() {
                r._RF.push({}, "1d8b7owtIhDi7z2FUTs7N+U", "SecretRealmMainView", void 0);
                e("SecretRealmMainView", function(e) {
                    function r() {
                        return e.apply(this, arguments) || this
                    }
                    return t(r, e),
                        r.prototype.refreshView = function() {
                            var e;
                            null == (e = this.gui) || e.refreshAwakePage()
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
                                return "prefabs/secret-realm/secret-realm-main"
                            }
                        }, {
                            key: "guiParent",
                            get: function() {
                                return this.currMediator.getView(u).getSubUIContainer()
                            }
                        }, {
                            key: "gui",
                            get: function() {
                                var e;
                                return null == (e = this.node) ? void 0 : e.getComponent(a)
                            }
                        }]),
                        r
                }(i));
                r._RF.pop()
            }
        }
    }
));
