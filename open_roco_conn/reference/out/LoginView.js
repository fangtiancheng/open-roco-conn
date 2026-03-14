System.register("chunks:///_virtual/LoginView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BasePanel.ts", "./UIManager.ts", "./BuildLogHelper.ts"], (function(n) {
        var t, e, o, i, u, s;
        return {
            setters: [function(n) {
                t = n.inheritsLoose,
                    e = n.createClass
            }
                , function(n) {
                    o = n.cclegacy
                }
                , function(n) {
                    i = n.BasePanel
                }
                , function(n) {
                    u = n.default
                }
                , function(n) {
                    s = n.default
                }
            ],
            execute: function() {
                o._RF.push({}, "92e7dKe0bBCAqXh7kBTtyh1", "LoginView", void 0);
                n("default", function(n) {
                    function o() {
                        return n.apply(this, arguments) || this
                    }
                    t(o, n);
                    var i = o.prototype;
                    return i.afterConstructor = function() {
                        this.__name = "LoginView"
                    }
                        ,
                        i.onInit = function() {
                            this.initLog()
                        }
                        ,
                        i.onShow = function() {
                            1 == s.IS_LOCAL && console.log("LoginView==onShow"),
                            this._view && u.gRootCanvas.addChild(this._view)
                        }
                        ,
                        i.onUpdate = function(n) {}
                        ,
                        i.onClose = function() {}
                        ,
                        i.onDestroy = function() {}
                        ,
                        e(o, [{
                            key: "resBundleKey",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return "prefabs/LoginUI_1600"
                            }
                        }]),
                        o
                }(i));
                o._RF.pop()
            }
        }
    }
));
