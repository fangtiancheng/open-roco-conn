System.register("chunks:///_virtual/SentinelIntelligenceEggPet.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ActivityAPI.ts", "./GUIUtils.ts"], (function(t) {
        var e, i, n, r, o, a, l, c, u, s, p;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    i = t.inheritsLoose,
                    n = t.initializerDefineProperty,
                    r = t.assertThisInitialized
            }
                , function(t) {
                    o = t.cclegacy,
                        a = t._decorator,
                        l = t.Label,
                        c = t.Sprite,
                        u = t.Component
                }
                , function(t) {
                    s = t.ActivityAPI
                }
                , function(t) {
                    p = t.GUI
                }
            ],
            execute: function() {
                var g, b, m, f, h, v, y, P, I, S, F;
                o._RF.push({}, "d447ctptwNNPZLIlzNLcOEp", "SentinelIntelligenceEggPet", void 0);
                var N = a.ccclass
                    , d = a.property;
                t("SentinelIntelligenceEggPet", (g = N("SentinelIntelligenceEggPet"),
                    b = d(l),
                    m = d(c),
                    f = d(l),
                    h = d(l),
                g((P = e((y = function(t) {
                    function e() {
                        for (var e, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
                            o[a] = arguments[a];
                        return e = t.call.apply(t, [this].concat(o)) || this,
                            n(e, "petName", P, r(e)),
                            n(e, "icon", I, r(e)),
                            n(e, "probability", S, r(e)),
                            n(e, "evolutionTarget", F, r(e)),
                            e.backupProbabilityFormat = "",
                            e.backupEvolutionFormat = "",
                            e.backupNameFormat = "",
                            e
                    }
                    i(e, t);
                    var o = e.prototype;
                    return o.onLoad = function() {
                        this.backupProbabilityFormat = this.probability.string,
                            this.backupEvolutionFormat = this.evolutionTarget.string,
                            this.backupNameFormat = this.petName.string
                    }
                        ,
                        o.setPetData = function(t) {
                            var e = s.getSpiritDes(t.spriteId.toString());
                            if (this.petName.string = this.backupNameFormat.replace("{0}", e.name),
                                this.probability.string = this.backupProbabilityFormat.replace("{0}", t.hatchProbability.toString()),
                                e.evolutionID) {
                                var i = s.getSpiritName(e.evolutionID.toString());
                                this.evolutionTarget.string = this.backupEvolutionFormat.replace("{0}", i)
                            } else
                                this.evolutionTarget.string = "";
                            var n = s.getSpiritFullAvatar(t.spriteId.toString(), "Normal");
                            p.instance.loadIcon(n, this.icon, (function(t) {
                                    console.log("[jinlong] [SentinelIntelligenceEggPet] setPetData " + n + " success")
                                }
                            ), (function(t) {
                                    console.log("[jinlong] [SentinelIntelligenceEggPet] setPetData " + n + " error", t)
                                }
                            ))
                        }
                        ,
                        e
                }(u)).prototype, "petName", [b], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    I = e(y.prototype, "icon", [m], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    S = e(y.prototype, "probability", [f], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    F = e(y.prototype, "evolutionTarget", [h], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    v = y)) || v));
                o._RF.pop()
            }
        }
    }
));
