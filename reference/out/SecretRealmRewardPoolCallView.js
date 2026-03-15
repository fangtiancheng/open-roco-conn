System.register("chunks:///_virtual/SecretRealmRewardPoolCallView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./SecretRealmRewardPoolCall.ts", "./SecretRealmView.ts"], (function(e) {
        var t, r, n, l, a, i;
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
                    a = e.SecretRealmRewardPoolCall
                }
                , function(e) {
                    i = e.SecretRealmMasterView
                }
            ],
            execute: function() {
                n._RF.push({}, "54446SB2NpBppTOh1tJj24L", "SecretRealmRewardPoolCallView", void 0);
                e("SecretRealmRewardPoolCallView", function(e) {
                    function n() {
                        return e.apply(this, arguments) || this
                    }
                    t(n, e);
                    var l = n.prototype;
                    return l.refreshView = function() {
                        var e;
                        null == (e = this.gui) || e.refreshAwakePage()
                    }
                        ,
                        l.updateSelectSoulpearl = function(e) {
                            var t;
                            null == (t = this.gui) || t.updateSelectSoulpearl(e)
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
                                return "prefabs/secret-realm/secret-realm-rewardpool-call"
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
                                return null == (e = this.node) ? void 0 : e.getComponent(a)
                            }
                        }]),
                        n
                }(l));
                n._RF.pop()
            }
        }
    }
));
