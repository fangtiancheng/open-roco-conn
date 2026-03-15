System.register("chunks:///_virtual/ui2114.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseApp.ts", "./global.ts", "./WindowCloseAction.ts", "./IntimacyUIMain.ts"], (function(n) {
        var i, t, s, e, o, u, c;
        return {
            setters: [function(n) {
                i = n.inheritsLoose,
                    t = n.createClass
            }
                , function(n) {
                    s = n.cclegacy
                }
                , function(n) {
                    e = n.BaseAPP
                }
                , function(n) {
                    o = n.__global
                }
                , function(n) {
                    u = n.WindowCloseAction
                }
                , function(n) {
                    c = n.IntimacyUIMain
                }
            ],
            execute: function() {
                s._RF.push({}, "43b44mqMvZK4boeYXzkMNVO", "ui2114", void 0);
                var l = function() {};
                n("ui2114", function(n) {
                    function s(i) {
                        var t;
                        if ((t = n.call(this) || this).m_UIClassList = [c, "UIApp"],
                            t.m_List = new Map,
                            t.m_CLS = new Map,
                            t._ui = void 0,
                        null == i)
                            throw new Error("PetEvoAndSkill can not be instantiated.");
                        return t
                    }
                    i(s, n);
                    var e = s.prototype;
                    return e.dispose = function() {
                        this.m_List = null,
                            this.m_CLS = null,
                        this._ui && this._ui.close()
                    }
                        ,
                        e.openUI = function(n, i, t) {
                            null == this._ui ? (this._ui = o.UI.createWindow(c, !0),
                            null != this._ui && (this._ui.closeAction = u.HIDE,
                                this._ui.center(),
                                this._ui.bringToFront(),
                                this._ui.show(),
                                this._ui.updateInfo(i))) : (this._ui.show(),
                                this._ui.updateInfo(i))
                        }
                        ,
                        e.setParams = function(n) {
                            var i, t;
                            "string" == typeof n ? i = n : n && n.ui && (i = n.ui,
                                t = n.args),
                            "newsOpen" != i && "NpcClick" != i && "IconClick" != i || (null == t && (t = i),
                                i = "UIMain"),
                                this.openUI(i, t, !0)
                        }
                        ,
                        t(s, null, [{
                            key: "Instance",
                            get: function() {
                                return null == s.instance && (s.instance = new s(new l)),
                                    s.instance
                            }
                        }]),
                        s
                }(e)).instance = void 0,
                    s._RF.pop()
            }
        }
    }
));
