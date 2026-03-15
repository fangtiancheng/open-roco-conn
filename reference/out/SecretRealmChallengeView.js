System.register("chunks:///_virtual/SecretRealmChallengeView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./SecretRealmchallenge.ts", "./SecretRealmView.ts"], (function(e) {
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
                    u = e.SecretRealmchallenge
                }
                , function(e) {
                    a = e.SecretRealmMasterView
                }
            ],
            execute: function() {
                r._RF.push({}, "f5d671EuxZDkqsy9g7k+Zol", "SecretRealmChallengeView", void 0);
                e("SecretRealmChallengeView", function(e) {
                    function r() {
                        return e.apply(this, arguments) || this
                    }
                    return t(r, e),
                        r.prototype.refreshView = function(e) {
                            var t;
                            null == (t = this.gui) || t.refreshAwakePage(e)
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
                                return "prefabs/secret-realm/secret-realm-challenge"
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
