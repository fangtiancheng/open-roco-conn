System.register("chunks:///_virtual/ActivityUIBase.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClassUtil.ts", "./ActivityAPI.ts", "./ActivityBusinessBase.ts"], (function(t) {
        var i, s, n, e, o, p;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    s = t.assertThisInitialized
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    e = t.ClassUtil
                }
                , function(t) {
                    o = t.ActivityAPI
                }
                , function(t) {
                    p = t.ActivityBusinessBase
                }
            ],
            execute: function() {
                n._RF.push({}, "2b8a8g6zYtD9Je+q8JP1FXK", "ActivityUIBase", void 0);
                t("ActivityUIBase", function(t) {
                    function n(i) {
                        var n;
                        return (n = t.call(this) || this).m_app = void 0,
                            n.m_app = i,
                            n.m_app.addChild(s(n)),
                            n
                    }
                    i(n, t);
                    var p = n.prototype;
                    return p.dispose = function() {
                        this.destroy(),
                            this.m_app = null
                    }
                        ,
                        p.hide = function() {
                            this.parent && this.parent.removeChild(this)
                        }
                        ,
                        p.close = function() {
                            this.m_app && this.m_app.close()
                        }
                        ,
                        p.open = function(t) {
                            void 0 === t && (t = null);
                            var i = e.getName(this)
                                , s = {};
                            s.ui = i,
                                s.args = t,
                                o.openActivityAppWithParams(this.CONFIG.ActId, this.CONFIG.ActMainApp, s)
                        }
                        ,
                        p.openUI = function(t, i, s) {
                            void 0 === s && (s = !1),
                            this.m_app && this.m_app.openUI && this.m_app.openUI(t, i, s)
                        }
                        ,
                        p.enableButton = function(t, i) {}
                        ,
                        n
                }(p));
                n._RF.pop()
            }
        }
    }
));
