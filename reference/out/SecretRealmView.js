System.register("chunks:///_virtual/SecretRealmView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./UIManager.ts", "./SecretRealmMasterUI.ts"], (function(e) {
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
                    u = e.default
                }
                , function(e) {
                    a = e.SecretRealmMasterUI
                }
            ],
            execute: function() {
                r._RF.push({}, "078ff09NPFIzZJ3BIcvHY53", "SecretRealmView", void 0);
                e("SecretRealmMasterView", function(e) {
                    function r() {
                        return e.apply(this, arguments) || this
                    }
                    t(r, e);
                    var i = r.prototype;
                    return i.refreshView = function() {
                        this.gui.refreshAwakePage()
                    }
                        ,
                        i.getSubUIContainer = function() {
                            return this.gui.node.getChildByName("subui")
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
                                return "prefabs/secret-realm/secret-realm-master"
                            }
                        }, {
                            key: "guiParent",
                            get: function() {
                                return u.gRootCanvas
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
