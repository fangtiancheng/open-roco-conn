System.register("chunks:///_virtual/BloodTalenSelectTalenView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameView.ts", "./UIManager.ts", "./BloodTalenSelectTalenUI.ts"], (function(e) {
        var n, t, o, l, i, a;
        return {
            setters: [function(e) {
                n = e.inheritsLoose,
                    t = e.createClass
            }
                , function(e) {
                    o = e.cclegacy
                }
                , function(e) {
                    l = e.GameView
                }
                , function(e) {
                    i = e.default
                }
                , function(e) {
                    a = e.BloodTalenSelectTalenUI
                }
            ],
            execute: function() {
                o._RF.push({}, "9ba594oSMtN/4v+x+D5UECV", "BloodTalenSelectTalenView", void 0);
                e("BloodTalenSelectTalenView", function(e) {
                    function o() {
                        return e.apply(this, arguments) || this
                    }
                    return n(o, e),
                        o.prototype.refreshView = function(e) {
                            this.gui.refresh(e)
                        }
                        ,
                        t(o, [{
                            key: "bundleName",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "prefabPath",
                            get: function() {
                                return "prefabs/bloodTalent/BloodTalenSelectTalenView"
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
                                return null == (e = this.node) ? void 0 : e.getComponent(a)
                            }
                        }]),
                        o
                }(l));
                o._RF.pop()
            }
        }
    }
));
