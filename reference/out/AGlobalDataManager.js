System.register("chunks:///_virtual/AGlobalDataManager.ts", ["cc", "./Constants.ts", "./AngelItemDataProxy.ts", "./SpiritDesProxy.ts", "./SpiritEqDesProxy.ts", "./SpiritSkillDesProxy.ts", "./SpiritConfCfgLoader.ts", "./ItemConfigLoader.ts", "./SpiritSkillConfLoader.ts", "./SpiritEquipmengConfLoader.ts", "./GuardianPetDesProxy.ts", "./FurnitureDataProxy.ts", "./GuardianPetConfLoader.ts", "./FurnitureConstInfoCfgLoader.ts", "./GuardianPetVipAvatarConfLoader.ts", "./GuardianPetVipAvatarDesProxy.ts", "./DazzleDressCfgLoader.ts", "./DazzleDressSetCfgLoader.ts", "./DazzleDressDataProxy.ts", "./DazzleDressSuitDataProxy.ts", "./DressUpItemDataProxy.ts"], (function(t) {
        var a, n, o, i, e, r, s, l, d, u, D, f, c, y, P, x, g, p, h, C, S;
        return {
            setters: [function(t) {
                a = t.cclegacy
            }
                , function(t) {
                    n = t.Constants
                }
                , function(t) {
                    o = t.AngelItemDataProxy
                }
                , function(t) {
                    i = t.SpiritDesProxy
                }
                , function(t) {
                    e = t.SpiritEqDesProxy
                }
                , function(t) {
                    r = t.SpiritSkillDesProxy
                }
                , function(t) {
                    s = t.SpiritConfCfgLoader
                }
                , function(t) {
                    l = t.ItemConfigLoader
                }
                , function(t) {
                    d = t.SpiritSkillConfLoader
                }
                , function(t) {
                    u = t.SpiritEquipmengConfLoader
                }
                , function(t) {
                    D = t.GuardianPetDesProxy
                }
                , function(t) {
                    f = t.FurnitureDataProxy
                }
                , function(t) {
                    c = t.GuardianPetConfLoader
                }
                , function(t) {
                    y = t.FurnitureConstInfoCfgLoader
                }
                , function(t) {
                    P = t.GuardianPetVipAvatarConfLoader
                }
                , function(t) {
                    x = t.GuardianPetVipAvatarDesProxy
                }
                , function(t) {
                    g = t.DazzleDressCfgLoader
                }
                , function(t) {
                    p = t.DazzleDressSetCfgLoader
                }
                , function(t) {
                    h = t.DazzleDressDataProxy
                }
                , function(t) {
                    C = t.DazzleDressSuitDataProxy
                }
                , function(t) {
                    S = t.DressUpItemDataProxy
                }
            ],
            execute: function() {
                a._RF.push({}, "f0b9ddKHt1DWbkGpl0QfJ3U", "AGlobalDataManager", void 0);
                t("AGlobalDataManager", function() {
                    function t() {
                        this.proxyList = void 0,
                            this.globalData = void 0
                    }
                    var a = t.prototype;
                    return a.addDataProxy = function(t) {
                        var a = t.getName();
                        this.proxyList[a] = t
                    }
                        ,
                        a.initialize = function() {
                            this.proxyList = new Map,
                                this.globalData = new Map;
                            var t = arguments.length <= 0 ? void 0 : arguments[0];
                            this.addGlobalVal(n.CONFS, arguments.length <= 0 ? void 0 : arguments[0]);
                            var a = t[n.CUR_SERVER_INFO];
                            this.addGlobalVal(n.CUR_SERVER_INFO, a),
                                t[n.CUR_SERVER_INFO] = null,
                                this.addDataProxy(new o(l.Instance.data)),
                                this.addDataProxy(new i(s.Instance.data)),
                                this.addDataProxy(new D(c.Instance.data)),
                                this.addDataProxy(new x(P.Instance.data)),
                                this.addDataProxy(new r(d.Instance.data)),
                                this.addDataProxy(new e(u.Instance.data)),
                                this.addDataProxy(new f(y.Instance.data)),
                                this.addDataProxy(new S);
                            var L = new C(p.Instance.data);
                            this.addDataProxy(L),
                                this.addDataProxy(new h(L,g.Instance.data))
                        }
                        ,
                        a.getDataProxy = function(t) {
                            return this.proxyList[t] ? this.proxyList[t] : null
                        }
                        ,
                        a.finalize = function() {}
                        ,
                        a.addGlobalVal = function(t, a) {
                            this.globalData[t] || (this.globalData[t] = new Object);
                            var n = this.globalData[t];
                            n = Object.assign(n, a)
                        }
                        ,
                        a.getGlobalVal = function(t) {
                            return this.globalData[t] ? this.globalData[t] : null
                        }
                        ,
                        a.removeGlobalVal = function(t) {
                            return !!this.globalData[t] && (delete this.globalData[t],
                                !0)
                        }
                        ,
                        a.getLocalDataProxy = function() {
                            return this.getDataProxy(n.SO_DATA)
                        }
                        ,
                        t
                }());
                a._RF.pop()
            }
        }
    }
));
