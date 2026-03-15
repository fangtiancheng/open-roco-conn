System.register("chunks:///_virtual/SecretRealmSelectSoulpearlView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./SecretRealmSelectSoulpearl.ts", "./SecretRealmView.ts"], (function(e) {
        var t, r, n, l, u, i;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    r = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    l = e.GameView
                }
                , function(e) {
                    u = e.SecretRealmSelectSoulpearl
                }
                , function(e) {
                    i = e.SecretRealmMasterView
                }
            ],
            execute: function() {
                n._RF.push({}, "add57nP/y9Lfab8dqEBSUaE", "SecretRealmSelectSoulpearlView", void 0);
                e("SecretRealmSelectSoulpearlView", function(e) {
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
                                return "prefabs/secret-realm/secret-realm-challgenge-select-soulpearl"
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
                }(l));
                n._RF.pop()
            }
        }
    }
));
