System.register("chunks:///_virtual/CreateRoleView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./UIManager.ts", "./CreateRoleUI.ts"], (function(e) {
        var t, n, r, i, o, u;
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
                    o = e.default
                }
                , function(e) {
                    u = e.CreateRoleUI
                }
            ],
            execute: function() {
                r._RF.push({}, "63055WGfzJH+6h2OmkqghA/", "CreateRoleView", void 0);
                e("CreateRoleView", function(e) {
                    function r() {
                        return e.apply(this, arguments) || this
                    }
                    t(r, e);
                    var i = r.prototype;
                    return i.warnAgree = function() {
                        this.gui.warnAgree()
                    }
                        ,
                        i.warnNoAgree = function() {
                            this.gui.warnNoAgree()
                        }
                        ,
                        i.warnDefault = function() {
                            this.gui.warnDefault()
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
                                return "prefabs/create_role/CreateRoleMainView"
                            }
                        }, {
                            key: "guiParent",
                            get: function() {
                                return o.gRootCanvas
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
