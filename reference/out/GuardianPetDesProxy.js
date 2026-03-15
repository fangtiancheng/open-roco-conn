System.register("chunks:///_virtual/GuardianPetDesProxy.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./DEFINE.ts", "./GuardianPetDes.ts"], (function(e) {
        var t, s, n, i, r;
        return {
            setters: [function(e) {
                t = e.createForOfIteratorHelperLoose
            }
                , function(e) {
                    s = e.cclegacy
                }
                , function(e) {
                    n = e.Constants
                }
                , function(e) {
                    i = e.DEFINE
                }
                , function(e) {
                    r = e.GuardianPetDes
                }
            ],
            execute: function() {
                s._RF.push({}, "e9734HFCe1B6rdtWAmbVciB", "GuardianPetDesProxy", void 0);
                e("GuardianPetDesProxy", function() {
                    function e(e) {
                        this.desMaps = void 0,
                            this.phaseLvMaps = void 0,
                            this.lvConsumeMaps = void 0,
                            this.listMaps = void 0,
                            this._highestLv = void 0,
                            this.desMaps = new Map,
                            this.phaseLvMaps = new Map,
                            this.lvConsumeMaps = new Map,
                            this.listMaps = [],
                            this.processXML(e)
                    }
                    var s = e.prototype;
                    return s.processXML = function(e) {
                        var s, n, a, u, o, c = i.COMM_ROOT + "res/guardianPet/", p = e, v = p.propertyDes, h = p.guardianPetDes, d = p.lvPhaseDes, l = p.consumeDes;
                        this._highestLv = p.highestLv.value;
                        for (var f, m = t(h); !(f = m()).done; )
                            for (var g, M = f.value, L = t(v); !(g = L()).done; ) {
                                var D = g.value;
                                s = new r,
                                    n = 100 * Number(M.id) + Number(D.lv),
                                    a = 100 * Number(M.id) + Number(D.phase),
                                    s.phase = Number(D.phase),
                                    s.avatar = this.getAvatarURL(a, c),
                                    s.id = a,
                                    s.name = String(M.name),
                                    s.description = String(M.description),
                                null != s.description && null != s.description || (s.description = ""),
                                    s.energyBonus = D.energy,
                                    s.attackBonus = D.attack,
                                    s.defendBonus = D.defend,
                                    s.magicAttackBonus = D.magicAttack,
                                    s.magicDefendBonus = D.magicDefend,
                                    this.desMaps[n] = s,
                                    this.listMaps.push(s)
                            }
                        for (var P, N = t(d); !(P = N()).done; ) {
                            u = P.value;
                            var b = Number(u.phase)
                                , y = Number(u.lv);
                            this.phaseLvMaps[b] = y
                        }
                        for (var B, A = t(l); !(B = A()).done; ) {
                            o = B.value;
                            var C = Number(o.lv)
                                , _ = Number(o.consume);
                            this.lvConsumeMaps[C] = _
                        }
                    }
                        ,
                        s.insert = function() {
                            return !1
                        }
                        ,
                        s.selectLvByPhase = function(e) {
                            return this.phaseLvMaps[e]
                        }
                        ,
                        s.selectConsumeByLv = function(e) {
                            return this.lvConsumeMaps[e]
                        }
                        ,
                        s.select = function() {
                            return "*" == (arguments.length <= 0 ? void 0 : arguments[0]) ? this.listMaps : this.desMaps[Number(arguments.length <= 0 ? void 0 : arguments[0])]
                        }
                        ,
                        s.getHighestLv = function() {
                            return this._highestLv
                        }
                        ,
                        s.update = function() {
                            return !1
                        }
                        ,
                        s.deleted = function() {
                            return !1
                        }
                        ,
                        s.getAvatarURL = function(e, t) {
                            return t + (e + "") + ".swf"
                        }
                        ,
                        s.getProperty = function() {}
                        ,
                        s.clear = function() {}
                        ,
                        s.getName = function() {
                            return n.GUARDIANPET_DATA
                        }
                        ,
                        e
                }());
                s._RF.pop()
            }
        }
    }
));
