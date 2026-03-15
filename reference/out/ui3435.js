System.register("chunks:///_virtual/ui3435.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseApp.ts", "./ActivityAPI.ts", "./global.ts", "./SummonConfig.ts", "./SummonUIMain.ts"], (function(t) {
        var n, i, s, e, o, r, a, u, c, p;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    i = t.createForOfIteratorHelperLoose,
                    s = t.createClass,
                    e = t.assertThisInitialized
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
                    u = t.__global
                }
                , function(t) {
                    c = t.SummonConfig
                }
                , function(t) {
                    p = t.SummonUIMain
                }
            ],
            execute: function() {
                function f(t) {
                    return "function" == typeof t && !!t.prototype && t.prototype.constructor === t
                }
                o._RF.push({}, "011cb66cnFNK6BTNhOIGfX5", "ui3435", void 0);
                var l = function() {};
                t("ui3435", function(t) {
                    function o(n) {
                        var s;
                        (s = t.call(this) || this).m_UIClassList = [p, "UIApp"],
                            s.m_List = new Map,
                            s.m_CLS = new Map,
                            c.init(),
                            s.addCloseHandler(s.onClose.bind(e(s)));
                        for (var o, r = i(s.m_UIClassList); !(o = r()).done; ) {
                            var a = o.value;
                            if (f(a)) {
                                var u = "SummonUIMain"
                                    , l = u.lastIndexOf("::");
                                -1 != l && (u = u.substr(l + 2)),
                                    s.m_CLS[u] = a
                            } else
                                "string" == typeof a && (s.m_CLS[a] = a)
                        }
                        return s
                    }
                    n(o, t);
                    var r = o.prototype;
                    return r.onClose = function() {
                        this.disposeChildren(),
                            this.removeFromParent()
                    }
                        ,
                        r.dispose = function() {
                            for (var t in this.m_List) {
                                var n = this.m_List[t];
                                n && n.dispose && "function" == typeof n.dispose && n.dispose()
                            }
                            this.m_List = null,
                                this.m_CLS = null
                        }
                        ,
                        r.disposeChildren = function() {
                            for (var t in this.m_List) {
                                var n = this.m_List[t];
                                n && n.dispose && "function" == typeof n.dispose && n.dispose()
                            }
                            this.m_List = new Map
                        }
                        ,
                        r.openUI = function(t, n, s) {
                            if (void 0 === s && (s = !1),
                            this.parent || this.container.addChild(this),
                                s)
                                for (var e, o = i(this.m_List.values()); !(e = o()).done; ) {
                                    var r = e.value;
                                    r.parent && r.parent.removeChild(r)
                                }
                            var u = this.m_List[t];
                            if (u)
                                this.addChild(u);
                            else {
                                var p = this.m_CLS[t];
                                f(p) ? ((u = new p(this)).updateInfo && u.updateInfo(n),
                                    this.m_List[t] = u) : "string" == typeof p && a.openActivityAppWithParams(c.ActId, p, n)
                            }
                        }
                        ,
                        r.setParams = function(t) {
                            var n, i;
                            "string" == typeof t ? n = t : t && t.ui && (n = t.ui,
                                i = t.args),
                            "newsOpen" != n && "NpcClick" != n && "IconClick" != n || (null == i && (i = n),
                                n = "SummonUIMain"),
                                this.openUI(n, i, !0)
                        }
                        ,
                        s(o, [{
                            key: "container",
                            get: function() {
                                return u.SysAPI.getUISysAPI().getWindowContainer()
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
