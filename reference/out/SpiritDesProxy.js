System.register("chunks:///_virtual/SpiritDesProxy.ts", ["cc", "./GlobalAPI.ts", "./BuildLogHelper.ts", "./Constants.ts", "./DEFINE.ts", "./PropertyDes.ts", "./SpiritDes.ts", "./SpiritSkinDes.ts"], (function(e) {
        var r, t, i, n, o, s, u, l;
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
                    o = e.DEFINE
                }
                , function(e) {
                    s = e.PropertyDes
                }
                , function(e) {
                    u = e.SpiritDes
                }
                , function(e) {
                    l = e.SpiritSkinDes
                }
            ],
            execute: function() {
                r._RF.push({}, "fee0aem+HZNuZqpAjp0ExlP", "SpiritDesProxy", void 0);
                e("SpiritDesProxy", function() {
                    function e(e) {
                        this.db = void 0,
                            this.listdb = void 0;
                        var r = t.getTimer();
                        this.db = new Map,
                            this.listdb = [],
                            this.processXML(e),
                        CONFIG.DEBUG && console.log("[SpiritDesProxy]解析:", t.getTimer() - r)
                    }
                    var r = e.prototype;
                    return r.removeSuffix = function(e, r) {
                        return e.endsWith(r) ? e.slice(0, -r.length) : e
                    }
                        ,
                        r.processXML = function(e) {
                            if (!e)
                                throw i.IS_LOCAL,
                                    new Error(this.constructor.name + "'s function [processXML] param is illegal");
                            var r = e;
                            o.SPIRIT_VER = r.version,
                                s.FEATURES = [];
                            for (var t = r.PropertyDes, n = t.length, a = 0; a < n; a++) {
                                (p = new s).id = Number(t[a].id),
                                    p.name = String(t[a].name),
                                    s.FEATURES[p.id] = p
                            }
                            s.GroupTypes = [];
                            var m = r.groupTypeDes;
                            n = m.length;
                            for (a = 0; a < n; a++) {
                                var p;
                                (p = new s).id = Number(m[a].id),
                                    p.name = String(m[a].name),
                                    s.GroupTypes[p.id] = p
                            }
                            l.SpiritSkinTypes = new Map;
                            var c = r.spiritSkinDes;
                            n = c.length;
                            for (a = 0; a < n; a++) {
                                var g, d = c[a], S = new l;
                                S.id = Number(d.id),
                                    S.name = String(d.name),
                                    S.quality = Number(0 | (null == (g = d) ? void 0 : g.quality)),
                                    S.description = String(d.description) ? String(d.description) : "",
                                    S.getForm = String(d.getForm) ? String(d.getForm) : "",
                                    l.SpiritSkinTypes[S.id] = S
                            }
                            var v = o.COMM_ROOT + "res/combat/"
                                , f = o.COMM_ROOT + "res/spirit/"
                                , b = r.SpiritDes;
                            for (a = n = b.length - 1; a >= 0; a--) {
                                var h = new u;
                                h.id = Number(b[a].id),
                                    h.resID = h.id;
                                var I = String(b[a].src);
                                if (I.endsWith("-.swf") && (h.resID = Number(this.removeSuffix(I, "-.swf"))),
                                null != h.resID && null != h.resID || i.IS_LOCAL,
                                    h.name = String(b[a].name),
                                    h.src = v + "spirits/" + String(b[a].src) + "?" + o.SPIRIT_VER,
                                    h.iconSrc = v + "icons/" + String(b[a].iconSrc) + "?" + o.SPIRIT_VER,
                                    h.previewSrc = v + "previews/" + String(b[a].previewSrc) + "?" + o.SPIRIT_VER,
                                    h.linkName = "Spirit",
                                    h.description = String(b[a].description),
                                    h.features = [],
                                    h.skinnum = Number(b[a].skinnum),
                                    null != b[a].avatar ? h.avatar = f + String(b[a].avatar) + "?" + o.SPIRIT_VER : h.avatar = this.getAvatarURL(h.id, f) + "?" + o.SPIRIT_VER,
                                null != b[a].evolution) {
                                    var D = String(b[a].evolution).split("|");
                                    h.evolutionLevel = Number(D[0]),
                                        h.evolutionID = Number(D[1]);
                                    var N = this.db[h.evolutionID];
                                    h.evolution = D[0] + "级进化成" + (null != N ? N.name : "未知")
                                }
                                h.mType = "2" == String(b[a].mType) ? 2 : 0;
                                var T = Number(b[a].mSpeed);
                                h.mSpeed = 0 == T ? 2 : T,
                                    h.height = b[a].height,
                                    h.weight = b[a].weight,
                                    h.color = b[a].color,
                                    h.interest = b[a].interest,
                                    h.habitat = b[a].habitat,
                                    h.catchrate = b[a].catchrate,
                                    h.bossPhyle = b[a].bossPhyle,
                                    h.bossReward = b[a].bossReward;
                                var y = 0;
                                null != b[a].sceneId && (h.sceneId = Number(b[a].sceneId)),
                                null != b[a].condition && (h.condition = b[a].condition),
                                null != b[a].requireLevel && (h.requireLevel = b[a].requireLevel);
                                for (var w = String(b[a].features).split(","), E = 0; E < w.length; E++)
                                    0 != (y = Number(w[E])) && h.features.push(s.FEATURES[y]);
                                var R = String(b[a].group).split(",");
                                for (E = 0; E < R.length; E++)
                                    0 != (y = Number(R[E])) && h.group.push(s.GroupTypes[y]);
                                null != b[a].wg && (h.wg = Number(b[a].wg)),
                                null != b[a].mg && (h.mg = Number(b[a].mg)),
                                null != b[a].mk && (h.mk = Number(b[a].mk)),
                                null != b[a].sd && (h.sd = Number(b[a].sd)),
                                null != b[a].fy && (h.fy = Number(b[a].fy)),
                                null != b[a].wg && (h.sm = Number(b[a].sm)),
                                null != b[a].reward && (h.reward = Number(b[a].reward)),
                                null != b[a].EvolutionFormID && (h.EvolutionFormID = Number(b[a].EvolutionFormID)),
                                null != b[a].EvolutiontoIDs && (h.EvolutiontoIDs = String(b[a].EvolutiontoIDs).split("|")),
                                null != b[a].getForm && (h.getForm = String(b[a].getForm)),
                                null != b[a].state && (h.state = Number(b[a].state)),
                                null != b[a].startTime && (h.startTime = String(b[a].startTime)),
                                null != b[a].endTime && (h.endTime = String(b[a].endTime)),
                                null != b[a].firstID && (h.firstID = Number(b[a].firstID)),
                                null != b[a].propoLevel && (h.propoLevel = Number(b[a].propoLevel)),
                                null != b[a].isInBook && (h.isInBook = 0 == b[a].isInBook),
                                    h.expType = Number(b[a].expType),
                                    this.listdb.push(h),
                                    this.db[h.id] = h
                            }
                        }
                        ,
                        r.getAvatarURL = function(e, r) {
                            var t = e + "";
                            return 1 == t.length ? t = "00" + t : 2 == t.length && (t = "0" + t),
                            r + t + "-.swf"
                        }
                        ,
                        r.insert = function() {
                            return !1
                        }
                        ,
                        r.select = function() {
                            return "*" == (arguments.length <= 0 ? void 0 : arguments[0]) ? this.listdb : this.db[Number(arguments.length <= 0 ? void 0 : arguments[0])]
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
                            return n.SPIRIT_DATA
                        }
                        ,
                        e
                }());
                r._RF.pop()
            }
        }
    }
));
