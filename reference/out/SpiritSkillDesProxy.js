System.register("chunks:///_virtual/SpiritSkillDesProxy.ts", ["cc", "./GlobalAPI.ts", "./BuildLogHelper.ts", "./Constants.ts", "./DEFINE.ts", "./PropertyDes.ts", "./SpiritSkillDes.ts", "./TalentDes.ts"], (function(e) {
        var r, t, i, n, s, o, c, a;
        return {
            setters: [function(e) {
                r = e.cclegacy
            }
                , function(e) {
                    t = e.GlobalAPI
                }
                , function(e) {
                    i = e.default
                }
                , function(e) {
                    n = e.Constants
                }
                , function(e) {
                    s = e.DEFINE
                }
                , function(e) {
                    o = e.PropertyDes
                }
                , function(e) {
                    c = e.SpiritSkillDes
                }
                , function(e) {
                    a = e.TalentDes
                }
            ],
            execute: function() {
                r._RF.push({}, "508f9e0qCVKZb7BhuMgtL3e", "SpiritSkillDesProxy", void 0);
                e("SpiritSkillDesProxy", function() {
                    function e(e) {
                        this.db = void 0,
                            this.db = new Map;
                        var r = t.getTimer();
                        this.processXML(e),
                        CONFIG.DEBUG && console.log("[SpiritSkillDesProxy]解析:", t.getTimer() - r)
                    }
                    var r = e.prototype;
                    return r.processXML = function(e) {
                        if (!e)
                            throw i.IS_LOCAL,
                                new Error(this.constructor.name + "'s function [processXML] param is illegal");
                        var r = e;
                        s.SPIRIT_SKILL_VER = r.version,
                            o.BUFFS = [];
                        for (var t = r.PropertyDes, n = 0; n < t.length; n++) {
                            var p = new o;
                            p.id = Number(t[n].id ? t[n].id : 0),
                                p.name = String(t[n].name ? t[n].name : ""),
                                o.BUFFS[p.id] = p
                        }
                        var u = r.talentDes;
                        for (n = 0; n < u.length; n++) {
                            var l = new a;
                            l.id = Number(u[n].id),
                                l.name = String(u[n].name),
                                l.description = String(u[n].des ? u[n].des : ""),
                                a.SET[l.id] = l
                        }
                        var S = s.COMM_ROOT + "res/combat/"
                            , d = r.SpiritSkillDes;
                        for (n = 0; n < d.length; n++) {
                            var m = new c;
                            m.id = Number(d[n].id),
                                m.name = String(d[n].name),
                                m.description = String(d[n].description),
                                m.description2 = String(d[n].description2 ? d[n].description2 : ""),
                                m.power = d[n].power,
                                m.ppMax = Number(d[n].ppMax),
                                m.src = S + "effects/" + String(d[n].src) + "?" + s.SPIRIT_SKILL_VER,
                                m.resID = String(d[n].src).replace("_.swf", "").replace(".swf", ""),
                                m.property = o.FEATURES[Number(d[n].property)],
                                m.attackType = Number(d[n].attackType),
                                m.linkName = "Effect",
                                m.speed = Number(d[n].speed),
                                m.damageType = Number(d[n].damageType),
                                m.catchRate = Number(d[n].catchRate ? d[n].catchRate : 0),
                                4 == m.damageType ? m.superSkillBgSrc = S + "skillBg/" + m.id + ".jpg?" + s.SPIRIT_SKILL_VER : m.superSkillBgSrc = "https://res.17roco.qq.com/res/combat/skillBg/1117.jpg",
                            null != d[n].superFormID && (m.superFormId = Number(d[n].superFormID)),
                            null != d[n].superFormSrc && (m.superFormSrc = S + "spirits/" + String(d[n].superFormSrc) + "?" + s.SPIRIT_VER),
                                this.db[m.id] = m
                        }
                    }
                        ,
                        r.insert = function() {
                            return !1
                        }
                        ,
                        r.select = function() {
                            for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
                                r[t] = arguments[t];
                            return this.db[r[0]]
                        }
                        ,
                        r.update = function() {
                            return !1
                        }
                        ,
                        r.deleted = function() {
                            return !1
                        }
                        ,
                        r.clear = function() {}
                        ,
                        r.getName = function() {
                            return n.SSKILL_DATA
                        }
                        ,
                        e
                }());
                r._RF.pop()
            }
        }
    }
));
