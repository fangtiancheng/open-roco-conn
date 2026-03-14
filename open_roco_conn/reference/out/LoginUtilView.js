System.register("chunks:///_virtual/LoginUtilView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BasePanel.ts"], (function(t) {
        var n, i, e, o, s;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    e = t.cclegacy,
                        o = t.isValid
                }
                , function(t) {
                    s = t.BasePanel
                }
            ],
            execute: function() {
                e._RF.push({}, "ff5459MkJtL0KqsuEdwZY1m", "LoginUtilView", void 0);
                t("LoginUIUtilView", function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    n(e, t);
                    var s = e.prototype;
                    return s.onInit = function() {}
                        ,
                        s.onShow = function() {
                            this._root && o(this._root) && this._view && o(this._view) && this._root.addChild(this._view)
                        }
                        ,
                        s.onUpdate = function(t) {}
                        ,
                        s.onClose = function() {}
                        ,
                        s.onDestroy = function() {}
                        ,
                        i(e, [{
                            key: "resBundleKey",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return "prefabs/LoginUIUtil_1600"
                            }
                        }]),
                        e
                }(s));
                e._RF.pop()
            }
        }
    }
));
