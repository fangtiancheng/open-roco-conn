System.register("chunks:///_virtual/SecretRealmRewardMonsterView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./SecretRealmRewardMonster.ts", "./SecretRealmView.ts"], (function(e) {
        var t, r, n, i, u, a;
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
                    u = e.SecretRealmRewardMonster
                }
                , function(e) {
                    a = e.SecretRealmMasterView
                }
            ],
            execute: function() {
                n._RF.push({}, "2301fu+1FJLXbq0pxn0WvLA", "SecretRealmRewardMonsterView", void 0);
                e("SecretRealmRewardMonsterView", function(e) {
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
                                return "prefabs/secret-realm/secret-realm-reward-monster"
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
                        n
                }(i));
                n._RF.pop()
            }
        }
    }
));
