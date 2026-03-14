System.register("chunks:///_virtual/SecretRealmRewardItemView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./SecretRealmRewardItem.ts", "./SecretRealmView.ts"], (function(e) {
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
                    a = e.SecretRealmRewardItem
                }
                , function(e) {
                    u = e.SecretRealmMasterView
                }
            ],
            execute: function() {
                n._RF.push({}, "79fe3npxJ1H0509LaUkT14O", "SecretRealmRewardItemView", void 0);
                e("SecretRealmRewardItemView", function(e) {
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
                                return "prefabs/secret-realm/secret-realm-reward-item"
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
