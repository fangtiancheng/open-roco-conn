System.register("chunks:///_virtual/SecretRealmMainRuleView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./SecretRealmMainRuleUI.ts", "./SecretRealmView.ts"], (function(e) {
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
                    u = e.SecretRealmMainRuleUI
                }
                , function(e) {
                    a = e.SecretRealmMasterView
                }
            ],
            execute: function() {
                r._RF.push({}, "71515SkVkNGBZsQNJ3OXv9k", "SecretRealmMainRuleView", void 0);
                e("SecretRealmMainRuleView", function(e) {
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
                                return "prefabs/secret-realm/secret-realm-main-rule"
                            }
                        }, {
                            key: "guiParent",
                            get: function() {
                                return this.currMediator.getView(a).getSubUIContainer()
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
