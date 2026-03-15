System.register("chunks:///_virtual/SecretRealmCallRuleView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./SecretRealmCallRule.ts", "./SecretRealmView.ts"], (function(e) {
        var t, r, n, u, i, l;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    r = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    u = e.GameView
                }
                , function(e) {
                    i = e.SecretRealmCallRule
                }
                , function(e) {
                    l = e.SecretRealmMasterView
                }
            ],
            execute: function() {
                n._RF.push({}, "75aee9rTB5I151y+DQ/40zj", "SecretRealmCallRuleView", void 0);
                e("SecretRealmCallRuleView", function(e) {
                    function n() {
                        return e.apply(this, arguments) || this
                    }
                    return t(n, e),
                        n.prototype.refreshView = function() {
                            var e;
                            null == (e = this.gui) || e.refreshAwakePage()
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
                                return "prefabs/secret-realm/secret-realm-call-rule"
                            }
                        }, {
                            key: "guiParent",
                            get: function() {
                                return this.currMediator.getView(l).getSubUIContainer()
                            }
                        }, {
                            key: "gui",
                            get: function() {
                                var e;
                                return null == (e = this.node) ? void 0 : e.getComponent(i)
                            }
                        }]),
                        n
                }(u));
                n._RF.pop()
            }
        }
    }
));
