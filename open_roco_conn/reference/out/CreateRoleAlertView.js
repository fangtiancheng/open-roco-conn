System.register("chunks:///_virtual/CreateRoleAlertView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./UIManager.ts", "./CreateRoleAlertUI.ts"], (function(e) {
        var t, n, r, o, i, u;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass
            }
                , function(e) {
                    r = e.cclegacy
                }
                , function(e) {
                    o = e.GameView
                }
                , function(e) {
                    i = e.default
                }
                , function(e) {
                    u = e.CreateRoleAlertUI
                }
            ],
            execute: function() {
                r._RF.push({}, "b730dq9GNZG7a8PPGAYWk25", "CreateRoleAlertView", void 0);
                e("CreateRoleAlertView", function(e) {
                    function r() {
                        return e.apply(this, arguments) || this
                    }
                    return t(r, e),
                        n(r, [{
                            key: "bundleName",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "prefabPath",
                            get: function() {
                                return "prefabs/create_role/CreateRoleAlertView"
                            }
                        }, {
                            key: "guiParent",
                            get: function() {
                                return i.gRootCanvas
                            }
                        }, {
                            key: "gui",
                            get: function() {
                                var e;
                                return null == (e = this.node) ? void 0 : e.getComponent(u)
                            }
                        }]),
                        r
                }(o));
                r._RF.pop()
            }
        }
    }
));
