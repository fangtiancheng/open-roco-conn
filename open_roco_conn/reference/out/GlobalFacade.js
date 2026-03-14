System.register("chunks:///_virtual/GlobalFacade.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./LoginMediator.ts", "./MainSceneMediator.ts", "./MatchCombatMediator.ts", "./NightMediator.ts", "./ServerListMediator.ts", "./SpiritBagMediator.ts", "./SpiritStorageMediator.ts", "./SplashSceneMediator.ts", "./Facade.ts", "./LadderMatchUIMediator.ts", "./CreateRoleMediator.ts", "./GameStoryMediator.ts", "./MarketMediator.ts", "./BloodTalenMediatior.ts", "./CommonMediatior.ts", "./SentinelIntelligenceMediator.ts", "./GiftCenterMediatior.ts", "./EmailMediatior.ts", "./StarsTowerMediatior.ts", "./PveMediator.ts", "./VersusMediator.ts", "./QRCodeShopMediator.ts", "./LuluMediator.ts", "./BraveTrainingMediator.ts", "./SevenHolyLandMediatior.ts", "./SecretRealmMediatior.ts", "./SpiritBooksMediator.ts"], (function(t) {
        var e, i, r, n, o, a, s, d, M, l, c, u, f, h, g, w, p, S, m, v, y, C, B, F, G, L, R, k, z;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    r = t.default
                }
                , function(t) {
                    n = t.default
                }
                , function(t) {
                    o = t.default
                }
                , function(t) {
                    a = t.default
                }
                , function(t) {
                    s = t.default
                }
                , function(t) {
                    d = t.default
                }
                , function(t) {
                    M = t.default
                }
                , function(t) {
                    l = t.default
                }
                , function(t) {
                    c = t.Facade
                }
                , function(t) {
                    u = t.default
                }
                , function(t) {
                    f = t.CreateRoleMediator
                }
                , function(t) {
                    h = t.GameStoryMediator
                }
                , function(t) {
                    g = t.MarketMediator
                }
                , function(t) {
                    w = t.BloodTalenMediatior
                }
                , function(t) {
                    p = t.CommonMediatior
                }
                , function(t) {
                    S = t.SentinelIntelligenceMediator
                }
                , function(t) {
                    m = t.GiftCenterMediatior
                }
                , function(t) {
                    v = t.EmailMediatior
                }
                , function(t) {
                    y = t.StarsTowerMediatior
                }
                , function(t) {
                    C = t.default
                }
                , function(t) {
                    B = t.default
                }
                , function(t) {
                    F = t.default
                }
                , function(t) {
                    G = t.default
                }
                , function(t) {
                    L = t.BraveTrainingMediator
                }
                , function(t) {
                    R = t.SevenHolyLandMediatior
                }
                , function(t) {
                    k = t.SecretRealmMediatior
                }
                , function(t) {
                    z = t.SpiritBooksMediator
                }
            ],
            execute: function() {
                i._RF.push({}, "c4175GGh/FHFZlM9+lBgkP5", "GlobalFacade", void 0);
                t("default", function(t) {
                    function i(e) {
                        return t.call(this, e) || this
                    }
                    e(i, t),
                        i.getInstance = function(t) {
                            return null == i.instanceMap[t] && (i.instanceMap[t] = new i(t)),
                            i.instanceMap[t]instanceof i || (delete i.instanceMap[t],
                                i.instanceMap[t] = new i(t)),
                                i.instanceMap[t]
                        }
                    ;
                    var c = i.prototype;
                    return c.initializeModel = function() {
                        t.prototype.initializeModel.call(this)
                    }
                        ,
                        c.initializeController = function() {
                            t.prototype.initializeController.call(this)
                        }
                        ,
                        c.initializeView = function() {
                            t.prototype.initializeView.call(this),
                                this.registerMediator(new a),
                                this.registerMediator(new l),
                                this.registerMediator(new r),
                                this.registerMediator(new s),
                                this.registerMediator(new f),
                                this.registerMediator(new p),
                                this.registerMediator(new h),
                                this.registerMediator(new o),
                                this.registerMediator(new n),
                                this.registerMediator(new M),
                                this.registerMediator(new d),
                                this.registerMediator(new u),
                                this.registerMediator(new w),
                                this.registerMediator(new S),
                                this.registerMediator(new m),
                                this.registerMediator(new v),
                                this.registerMediator(new g),
                                this.registerMediator(new y),
                                this.registerMediator(new B),
                                this.registerMediator(new C),
                                this.registerMediator(new L),
                                this.registerMediator(new R),
                                this.registerMediator(new k),
                                this.registerMediator(new z),
                                this.registerMediator(new F),
                                this.registerMediator(new G)
                        }
                        ,
                        i
                }(c));
                i._RF.pop()
            }
        }
    }
));
