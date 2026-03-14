System.register("chunks:///_virtual/SecretRealmRewardEggView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./SecretRealmRewardEgg.ts", "./SecretRealmView.ts"], (function(e) {
        var t, r, n, i, a, u;
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
                    a = e.SecretRealmRewardEgg
                }
                , function(e) {
                    u = e.SecretRealmMasterView
                }
            ],
            execute: function() {
                n._RF.push({}, "140e3BHAohGip4qAdIbCa+d", "SecretRealmRewardEggView", void 0);
                e("SecretRealmRewardEggView", function(e) {
                    function n() {
                        return e.apply(this, arguments) || this
                    }
                    return t(n, e),
                        n.prototype.refreshView = function(e) {
                            var t;
                            null == (t = this.gui) || t.refreshAwakePage(e)
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
                                return "prefabs/secret-realm/secret-realm-reward-egg"
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
                        n
                }(i));
                n._RF.pop()
            }
        }
    }
));
