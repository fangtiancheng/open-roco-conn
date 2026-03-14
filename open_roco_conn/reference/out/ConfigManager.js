System.register("chunks:///_virtual/ConfigManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResEvent.ts", "./AchieveCfgLoader.ts", "./GameNoticeCfgLoader.ts", "./PetAnimationCfgLoader.ts", "./PetResCfgLoader.ts", "./ServerListCfgLoader.ts", "./SpiritAnimationCfgLoader.ts", "./SpiritConfCfgLoader.ts", "./ItemConfigLoader.ts", "./StriveItemConfLoader.ts", "./SpiritSkillConfLoader.ts", "./SpiritEquipmengConfLoader.ts", "./GuardianPetConfLoader.ts", "./BuildLogHelper.ts", "./GuardianPetVipAvatarConfLoader.ts", "./FurnitureConstInfoCfgLoader.ts", "./DazzleDressSetCfgLoader.ts", "./DazzleDressCfgLoader.ts", "./QueueConfs.ts", "./GlobalConfig.ts", "./GameBannerCfgLoader.ts", "./TimerUtils.ts", "./SpiritBooksConfLoader.ts"], (function(n) {
        var t, o, i, e, s, a, r, f, c, u, L, g, d, h, l, C, p, I, _, v, m, S, A, G, D, F, P, E;
        return {
            setters: [function(n) {
                t = n.inheritsLoose,
                    o = n.createForOfIteratorHelperLoose
            }
                , function(n) {
                    i = n.cclegacy,
                        e = n.resources,
                        s = n.Component
                }
                , function(n) {
                    a = n.ResEvent
                }
                , function(n) {
                    r = n.AchieveCfgLoader
                }
                , function(n) {
                    f = n.GameNoticeCfgLoader
                }
                , function(n) {
                    c = n.PetAnimationCfgLoader
                }
                , function(n) {
                    u = n.PetResCfgLoader
                }
                , function(n) {
                    L = n.ServerListCfgLoader
                }
                , function(n) {
                    g = n.SpiritAnimationCfgLoader
                }
                , function(n) {
                    d = n.SpiritConfCfgLoader
                }
                , function(n) {
                    h = n.ItemConfigLoader
                }
                , function(n) {
                    l = n.StriveItemConfLoader
                }
                , function(n) {
                    C = n.SpiritSkillConfLoader
                }
                , function(n) {
                    p = n.SpiritEquipmengConfLoader
                }
                , function(n) {
                    I = n.GuardianPetConfLoader
                }
                , function(n) {
                    _ = n.default
                }
                , function(n) {
                    v = n.GuardianPetVipAvatarConfLoader
                }
                , function(n) {
                    m = n.FurnitureConstInfoCfgLoader
                }
                , function(n) {
                    S = n.DazzleDressSetCfgLoader
                }
                , function(n) {
                    A = n.DazzleDressCfgLoader
                }
                , function(n) {
                    G = n.QueueConfs
                }
                , function(n) {
                    D = n.GlobalConfig
                }
                , function(n) {
                    F = n.GameBannerCfgLoader
                }
                , function(n) {
                    P = n.TimerUtils
                }
                , function(n) {
                    E = n.SpiritBooksConfLoader
                }
            ],
            execute: function() {
                i._RF.push({}, "e4fc5Hmni9G8auFWQp/thJ9", "ConfigManager", void 0),
                    n("default", function(n) {
                        function i() {
                            for (var t, o = arguments.length, i = new Array(o), e = 0; e < o; e++)
                                i[e] = arguments[e];
                            return (t = n.call.apply(n, [this].concat(i)) || this)._configList = [],
                                t.resList = {},
                                t
                        }
                        t(i, n);
                        var s = i.prototype;
                        return s.onLoad = function() {
                            null === i.Instance ? (i.Instance = this,
                                i.Instance.init()) : this.destroy()
                        }
                            ,
                            s.init = function() {
                                this._configList = [],
                                    this.loadConfig()
                            }
                            ,
                            s.push = function() {
                                this._configList.length > 0 || (this._configList.push(L.Instance),
                                    this._configList.push(f.Instance),
                                    this._configList.push(F.Instance),
                                    this._configList.push(r.Instance),
                                    this._configList.push(c.Instance),
                                    this._configList.push(u.Instance),
                                    this._configList.push(g.Instance),
                                    this._configList.push(d.Instance),
                                    this._configList.push(h.Instance),
                                    this._configList.push(l.Instance),
                                    this._configList.push(C.Instance),
                                    this._configList.push(p.Instance),
                                    this._configList.push(I.Instance),
                                    this._configList.push(v.Instance),
                                    this._configList.push(m.Instance),
                                    this._configList.push(m.Instance),
                                    this._configList.push(A.Instance),
                                    this._configList.push(S.Instance),
                                    this._configList.push(E.Instance))
                            }
                            ,
                            s.afterLoader = function() {
                                this.push();
                                for (var n = 0; n < this._configList.length; n++)
                                    this._configList[n].afterLoad()
                            }
                            ,
                            s.loadConfig = function() {
                                var n = new G;
                                n.addConf("config", "https://res.17roco.qq.com/conf/Angel.config?60450", !0),
                                    n.start(this.onAllConfsLoaded.bind(this), this.onConfsLoadError.bind(this))
                            }
                            ,
                            s.onAllConfsLoaded = function(n) {
                                D.parsedConfs = n,
                                    D.useRemoteConfig = !0,
                                1 == _.IS_LOCAL && console.log("[AngelAppInstall] 程序相关的配置文件加载完毕!!"),
                                    this.loadConfigFromLocal()
                            }
                            ,
                            s.onConfsLoadError = function(n) {
                                D.useRemoteConfig = !1,
                                    this.loadConfigFromLocal()
                            }
                            ,
                            s.loadConfigFromLocal = function() {
                                var n = this;
                                e.loadDir("./", (function(n, t, o) {}
                                ), (function(t, i) {
                                        for (var s, r = e.getDirWithPath("./"), f = {}, c = o(r); !(s = c()).done; ) {
                                            var u = s.value;
                                            f[u.uuid] = u
                                        }
                                        for (var L, g = {}, d = o(i); !(L = d()).done; ) {
                                            var h = L.value
                                                , l = f[h._uuid].path;
                                            g[l] || (g[l] = []),
                                            1 == _.IS_LOCAL && console.info("configmanager=resList=Load=" + l),
                                                g[l].push(h)
                                        }
                                        P.EndTimer("loadConfigFromLocal1"),
                                            n.resList = g,
                                            n.node.dispatchEvent(new a(a.CONFIG_DONE)),
                                            n.push()
                                    }
                                ))
                            }
                            ,
                            s.getRes = function(n, t) {
                                var i = this.resList[n];
                                if (!i)
                                    return null;
                                for (var e, s = o(i); !(e = s()).done; ) {
                                    var a = e.value;
                                    if (a instanceof t)
                                        return a
                                }
                                return null
                            }
                            ,
                            i
                    }(s)).Instance = null,
                    i._RF.pop()
            }
        }
    }
));
