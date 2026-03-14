System.register("chunks:///_virtual/ui1112.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseApp.ts", "./ActivityAPI.ts", "./FixTemperUIMain.ts", "./FixTemperConfig.ts", "./global.ts", "./NotifyDef.ts", "./NotificationCenter.ts"], (function(t) {
        var i, n, e, s, o, r, a, c, u, f, p, l;
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
                    c = t.FixTemperUIMain
                }
                , function(t) {
                    u = t.FixTemperConfig
                }
                , function(t) {
                    f = t.__global
                }
                , function(t) {
                    p = t.NotifyDef
                }
                , function(t) {
                    l = t.NotificationCenter
                }
            ],
            execute: function() {
                function d(t) {
                    return "function" == typeof t && !!t.prototype && t.prototype.constructor === t
                }
                o._RF.push({}, "c5e77Oe2tZMfYevPZSz/6bl", "ui1112", void 0);
                var h = function() {};
                t("ui1112", function(t) {
                    function o(i) {
                        var e;
                        (e = t.call(this) || this).m_UIClassList = [c, "UIApp"],
                            e.m_List = new Map,
                            e.m_CLS = new Map,
                            u.init(),
                            e.addCloseHandler(e.onClose.bind(s(e)));
                        for (var o, r = n(e.m_UIClassList); !(o = r()).done; ) {
                            var a = o.value;
                            if (d(a)) {
                                var f = "FixTemperUIMain"
                                    , p = f.lastIndexOf("::");
                                -1 != p && (f = f.substr(p + 2)),
                                    e.m_CLS[f] = a
                            } else
                                "string" == typeof a && (e.m_CLS[a] = a)
                        }
                        return e
                    }
                    i(o, t);
                    var r = o.prototype;
                    return r.onClose = function() {
                        this.disposeChildren(),
                            this.removeFromParent(),
                            l.sendNotification(p.SPIRIT_BAG_UPDATE)
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
                                var f = this.m_CLS[t];
                                d(f) ? ((c = new f(this)).updateInfo && c.updateInfo(i),
                                    this.m_List[t] = c) : "string" == typeof f && a.openActivityAppWithParams(u.ActId, f, i)
                            }
                        }
                        ,
                        r.setParams = function(t) {
                            var i, n;
                            "string" == typeof t ? i = t : t && t.ui && (i = t.ui,
                                n = t.args),
                            "newsOpen" != i && "NpcClick" != i && "IconClick" != i || (null == n && (n = i),
                                i = "FixTemperUIMain"),
                                this.openUI(i, n, !0)
                        }
                        ,
                        e(o, [{
                            key: "container",
                            get: function() {
                                return f.SysAPI.getUISysAPI().getWindowContainer()
                            }
                        }], [{
                            key: "Instance",
                            get: function() {
                                return null == o.instance && (o.instance = new o(new h)),
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
