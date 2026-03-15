System.register("chunks:///_virtual/ui3101.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseApp.ts", "./ActivityAPI.ts", "./SystemSettingConfig.ts", "./SystemSettingUIMain.ts", "./global.ts"], (function(t) {
        var i, n, e, s, o, r, a, u, c, p;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    n = t.createForOfIteratorHelperLoose,
                    e = t.createClass,
                    s = t.assertThisInitialized
            }
                , function(t) {
                    o = t.cclegacy
                }
                , function(t) {
                    r = t.BaseAPP
                }
                , function(t) {
                    a = t.ActivityAPI
                }
                , function(t) {
                    u = t.SystemSettingConfig
                }
                , function(t) {
                    c = t.SystemSettingUIMain
                }
                , function(t) {
                    p = t.__global
                }
            ],
            execute: function() {
                o._RF.push({}, "9a28baSiOFMK5DKQ7D+bbK8", "ui3101", void 0);
                var l = function() {};
                function f(t) {
                    return "function" == typeof t && !!t.prototype && t.prototype.constructor === t
                }
                t("ui3101", function(t) {
                    function o(i) {
                        var e;
                        (e = t.call(this) || this).m_UIClassList = [c, "UIApp"],
                            e.m_List = new Map,
                            e.m_CLS = new Map,
                            u.init(),
                            e.addCloseHandler(e.onClose.bind(s(e)));
                        for (var o, r = n(e.m_UIClassList); !(o = r()).done; ) {
                            var a = o.value;
                            if (f(a)) {
                                var p = "SystemSettingUIMain"
                                    , l = p.lastIndexOf("::");
                                -1 != l && (p = p.substr(l + 2)),
                                    e.m_CLS[p] = a
                            } else
                                "string" == typeof a && (e.m_CLS[a] = a)
                        }
                        return e
                    }
                    i(o, t);
                    var r = o.prototype;
                    return r.onClose = function() {
                        this.disposeChildren(),
                            this.removeFromParent()
                    }
                        ,
                        r.dispose = function() {
                            for (var t in this.m_List) {
                                var i = this.m_List[t];
                                i && i.dispose && "function" == typeof i.dispose && i.dispose()
                            }
                            this.m_List = null,
                                this.m_CLS = null
                        }
                        ,
                        r.disposeChildren = function() {
                            for (var t in this.m_List) {
                                var i = this.m_List[t];
                                i && i.dispose && "function" == typeof i.dispose && i.dispose()
                            }
                            this.m_List = new Map
                        }
                        ,
                        r.openUI = function(t, i, e) {
                            if (void 0 === e && (e = !1),
                            this.parent || this.container.addChild(this),
                                e)
                                for (var s, o = n(this.m_List.values()); !(s = o()).done; ) {
                                    var r = s.value;
                                    r.parent && r.parent.removeChild(r)
                                }
                            var c = this.m_List[t];
                            if (c)
                                this.addChild(c);
                            else {
                                var p = this.m_CLS[t];
                                f(p) ? ((c = new p(this)).updateInfo && c.updateInfo(i),
                                    this.m_List[t] = c) : "string" == typeof p && a.openActivityAppWithParams(u.ActId, p, i)
                            }
                        }
                        ,
                        r.setParams = function(t) {
                            var i, n;
                            "string" == typeof t ? i = t : t && t.ui && (i = t.ui,
                                n = t.args),
                            "newsOpen" != i && "NpcClick" != i && "IconClick" != i || (null == n && (n = i),
                                i = "SystemSettingUIMain"),
                                this.openUI(i, n, !0)
                        }
                        ,
                        e(o, [{
                            key: "container",
                            get: function() {
                                return p.SysAPI.getUISysAPI().getWindowContainer()
                            }
                        }], [{
                            key: "Instance",
                            get: function() {
                                return null == o.instance && (o.instance = new o(new l)),
                                    o.instance
                            }
                        }]),
                        o
                }(r)).instance = void 0,
                    o._RF.pop()
            }
        }
    }
));
