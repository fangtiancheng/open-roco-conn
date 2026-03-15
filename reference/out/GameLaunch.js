System.register("chunks:///_virtual/GameLaunch.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameApp.ts", "./ResManager.ts", "./EventManager.ts", "./UIManager.ts", "./HttpRequest.ts", "./ConfigManager.ts", "./GlobalGameInfo.ts", "./GlobalTimer.ts", "./DEFINE.ts", "./UserData.ts", "./CDNLoadPlistPipeLine.ts", "./BuildLog.ts", "./GameTest.ts", "./BuildLogHelper.ts", "./PureNotificationCenter.ts", "./StringUtil.ts", "./GlobalManager.ts", "./GlobalAPI.ts", "./AdapterManager.ts"], (function(n) {
        var t, e, o, i, a, s, l, u, c, r, d, f, g, p, h, L, C, I, m, _, v, G, S, k;
        return {
            setters: [function(n) {
                t = n.inheritsLoose
            }
                , function(n) {
                    e = n.cclegacy,
                        o = n._decorator,
                        i = n.profiler,
                        a = n.Component
                }
                , function(n) {
                    s = n.default
                }
                , function(n) {
                    l = n.default
                }
                , function(n) {
                    u = n.default
                }
                , function(n) {
                    c = n.default
                }
                , function(n) {
                    r = n.HttpRequest
                }
                , function(n) {
                    d = n.default
                }
                , function(n) {
                    f = n.default
                }
                , function(n) {
                    g = n.GlobalTimer
                }
                , function(n) {
                    p = n.DEFINE
                }
                , function(n) {
                    h = n.UserData
                }
                , function(n) {
                    L = n.CDNLoadPlistPipeLine
                }
                , function(n) {
                    C = n.default
                }
                , function(n) {
                    I = n.default
                }
                , function(n) {
                    m = n.default
                }
                , function(n) {
                    _ = n.PureNotificationCenter
                }
                , function(n) {
                    v = n.StringUtil
                }
                , function(n) {
                    G = n.GlobalManager
                }
                , function(n) {
                    S = n.GlobalAPI
                }
                , function(n) {
                    k = n.AdapterManager
                }
            ],
            execute: function() {
                var A, y;
                e._RF.push({}, "e00b29D/8BFLK2IBmVgiHDc", "GameLaunch", void 0);
                var b = o.ccclass;
                o.property,
                    n("default", b("GameLaunch")(((y = function(n) {
                        function e() {
                            return n.apply(this, arguments) || this
                        }
                        t(e, n);
                        var o = e.prototype;
                        return o.onLoad = function() {
                            k.init(),
                                this.node.addComponent(C).show(),
                                p.init(),
                                1 == m.IS_LOCAL && 0 == m.publish ? i.showStats() : i.hideStats(),
                                L.init(),
                            1 == m.IS_LOCAL && console.log("GameLanch_onLoad_coolie==>>", document.cookie);
                            var n = v.getCookie("skey");
                            if (null != n && n.length > 0) {
                                f.IsLoginIn = !0;
                                var t = v.getCookie("angel_uin");
                                if (t) {
                                    var o = this.parseUin(t);
                                    1 == m.IS_LOCAL && console.log("angel_uin==>" + o),
                                        h.uin = o,
                                    h.isWhite(h.uin) && i.showStats()
                                } else
                                    1 == m.IS_LOCAL && console.log("angel_uin==>null");
                                var a = v.getCookie("angel_key");
                                a ? (1 == m.IS_LOCAL && console.log("angel_key==>" + o),
                                    h.sessionKey = a) : 1 == m.IS_LOCAL && console.log("angel_key==>null")
                            } else if (1 == m.IS_LOCAL)
                                f.IsLoginIn = !0;
                            else {
                                var A = v.getCookie("creat")
                                    , y = v.getCookie("relogin");
                                f.IsLoginIn = "1" === A && "1" != y
                            }
                            null === e.Instance ? (e.Instance = this,
                                S.init(),
                                _.init(),
                                this.node.addComponent(l),
                                this.node.addComponent(G),
                                this.node.addComponent(u),
                                this.node.addComponent(c),
                                this.node.addComponent(r),
                                this.node.addComponent(d),
                                this.node.addComponent(I),
                                g.init(),
                                this.node.addComponent(s)) : this.destroy()
                        }
                            ,
                            o.start = function() {
                                s.Instance.CheckNight()
                            }
                            ,
                            o.parseUin = function(n) {
                                var t = 0;
                                if (n && n.length > 0) {
                                    var e = n.match(/\d+/);
                                    t = parseInt(e[0], 10)
                                } else
                                    t = 0;
                                return t
                            }
                            ,
                            e
                    }(a)).Instance = null,
                        A = y)) || A);
                e._RF.pop()
            }
        }
    }
));
