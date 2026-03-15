System.register("chunks:///_virtual/SecretRealmHasSoulpearlView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./SecretRealmHasSoulpearl.ts", "./SecretRealmView.ts"], (function(e) {
        var t, r, n, a, u, i;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    r = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    a = e.GameView
                }
                , function(e) {
                    u = e.SecretRealmHasSoulpearl
                }
                , function(e) {
                    i = e.SecretRealmMasterView
                }
            ],
            execute: function() {
                n._RF.push({}, "d5902vtH5lP7pYzMYjfsgDN", "SecretRealmHasSoulpearlView", void 0);
                e("SecretRealmHasSoulpearlView", function(e) {
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
                                return "prefabs/secret-realm/secret-realm-has-soulpearl"
                            }
                        }, {
                            key: "guiParent",
                            get: function() {
                                return this.currMediator.getView(i).getSubUIContainer()
                            }
                        }, {
                            key: "gui",
                            get: function() {
                                var e;
                                return null == (e = this.node) ? void 0 : e.getComponent(u)
                            }
                        }]),
                        n
                }(a));
                n._RF.pop()
            }
        }
    }
));
