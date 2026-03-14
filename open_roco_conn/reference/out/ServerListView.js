System.register("chunks:///_virtual/ServerListView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BasePanel.ts", "./UIManager.ts", "./BuildLogHelper.ts"], (function(e) {
        var t, n, i, o, r, s;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass
            }
                , function(e) {
                    i = e.cclegacy
                }
                , function(e) {
                    o = e.BasePanel
                }
                , function(e) {
                    r = e.default
                }
                , function(e) {
                    s = e.default
                }
            ],
            execute: function() {
                i._RF.push({}, "36749bob5BP8ofpT2gkUfL2", "ServerListView", void 0);
                e("default", function(e) {
                    function i() {
                        return e.apply(this, arguments) || this
                    }
                    t(i, e);
                    var o = i.prototype;
                    return o.afterConstructor = function() {
                        this.__name = "ServerListView"
                    }
                        ,
                        o.onInit = function() {
                            this.initLog()
                        }
                        ,
                        o.onShow = function() {
                            1 == s.IS_LOCAL && console.log("ServerListView==onShow"),
                            this._view && r.gRootCanvas.addChild(this._view)
                        }
                        ,
                        o.onUpdate = function(e) {}
                        ,
                        o.onClose = function() {}
                        ,
                        o.onDestroy = function() {}
                        ,
                        n(i, [{
                            key: "resBundleKey",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return "prefabs/serverList_1600/ServerListUI_1600"
                            }
                        }]),
                        i
                }(o));
                i._RF.pop()
            }
        }
    }
));
