System.register("chunks:///_virtual/CombatResModule.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DEFINE.ts", "./BuffCombatResPool.ts", "./CombatResConvert.ts", "./CombatResType.ts", "./CombatLoadResVO.ts", "./AngelTcpHelper.ts", "./BuildLogHelper.ts", "./InitCombatResConfig.ts", "./CombatConfig.ts", "./FightData.ts", "./PetResCfgLoader.ts", "./CombatUtils.ts"], (function(e) {
        var o, s, t, r, i, l, n, a, u, p, c, P, d, I;
        return {
            setters: [function(e) {
                o = e.createClass
            }
                , function(e) {
                    s = e.cclegacy
                }
                , function(e) {
                    t = e.DEFINE
                }
                , function(e) {
                    r = e.BuffCombatResPool
                }
                , function(e) {
                    i = e.CombatResConvert
                }
                , function(e) {
                    l = e.CombatResType
                }
                , function(e) {
                    n = e.CombatLoadResVO
                }
                , function(e) {
                    a = e.AngelTcpHelper
                }
                , function(e) {
                    u = e.default
                }
                , function(e) {
                    p = e.InitCombatResConfig
                }
                , function(e) {
                    c = e.CombatConfig
                }
                , function(e) {
                    P = e.FightData
                }
                , function(e) {
                    d = e.PetResCfgLoader
                }
                , function(e) {
                    I = e.CombatUtils
                }
            ],
            execute: function() {
                s._RF.push({}, "6918c7z0c9BLZCpRi/lTr9F", "CombatResModule", void 0);
                e("CombatResModule", function() {
                    function e() {
                        this._resAdapter = void 0
                    }
                    var s = e.prototype;
                    return s.preLoadCombatRes = function() {}
                        ,
                        s.loadCombatRes = function(e) {
                            c.isInPreloading = !1;
                            var o = []
                                , s = new p;
                            o = o.concat(s.initRes(this._resAdapter)),
                                this.insertBuffsRes(o),
                                this.insertOnePlayerMustLoaded(e.myInfo, o, l.POLICY_DEFAULT, P.POS_LEFT),
                                this.insertOnePlayerMustLoaded(e.rivalInfo, o, l.POLICY_MODULE_END, P.POS_RIGHT);
                            for (var t = [], r = 0; r < o.length; r++) {
                                var i = o[r];
                                i.type == l.TYPE_SUPER_SKILL_BG ? t.push(i) : 0 == i.assetPath.length || t.push(i)
                            }
                            a.resBeginTimer = (new Date).getTime(),
                                c.loadCount = t.length,
                                this._resAdapter.requestRes(t)
                        }
                        ,
                        s.borrowSpiritMC = function(e) {
                            var o, s;
                            return (s = this._resAdapter.commonCombatResPool.getResPool(e, l.TYPE_SPIRIT)) && s.display ? s.display : (console.error("资源获取失败(borrowSpiritMC)==>>" + e + "==>url==>" + (null == (o = s) ? void 0 : o.url)),
                                null)
                        }
                        ,
                        s.borrowSpiritMCLeft = function(e) {
                            var o, s;
                            return (s = this._resAdapter.commonCombatResPool.getResPool(e, l.TYPE_SPIRIT_LEFT)) && s.display ? s.display : (console.error("资源获取失败(borrowSpiritMCLeft)==>>" + e + "==>url==>" + (null == (o = s) ? void 0 : o.url)),
                                null)
                        }
                        ,
                        s.borrowSpiritMCRight = function(e) {
                            var o, s;
                            return (s = this._resAdapter.commonCombatResPool.getResPool(e, l.TYPE_SPIRIT_RIGHT)) && s.display ? s.display : (console.error("资源获取失败(borrowSpiritMCRight)==>>" + e + "==>url==>" + (null == (o = s) ? void 0 : o.url)),
                                null)
                        }
                        ,
                        s.borrowSpiritMCByType = function(e, o) {
                            var s, t;
                            return (t = this._resAdapter.commonCombatResPool.getResPool(e, o)) && t.display ? t.display : (console.error("资源获取失败(borrowSpiritMCByType)==>>" + e + "==>url==>" + (null == (s = t) ? void 0 : s.url) + "==type==" + o),
                                null)
                        }
                        ,
                        s.giveBackSpiritMC = function(e, o) {
                            void 0 === o && (o = -1),
                            e || u.IS_LOCAL,
                                this._resAdapter.commonCombatResPool.removeResPool(e, o)
                        }
                        ,
                        s.borrowSkillMC = function(e) {
                            var o = this._resAdapter.commonCombatResPool.getResPool(e, l.TYPE_SKILL);
                            return o && o.display ? o.display : (console.error("资源获取失败(borrowSkillMC)==>>" + e + "==>url==>" + (null == o ? void 0 : o.url)),
                                null)
                        }
                        ,
                        s.giveBackSkillMC = function(e, o) {
                            void 0 === o && (o = -1),
                            e || u.IS_LOCAL,
                                this._resAdapter.commonCombatResPool.removeResPool(e, o)
                        }
                        ,
                        s.getSkillICon = function(e) {
                            return this._resAdapter.iconCombatResPool.getResPool(e).display
                        }
                        ,
                        s.getBuffIcon = function(e) {
                            return e = i.buffIdToIconId(e),
                                this._resAdapter.iconCombatResPool.getResPool(e).display
                        }
                        ,
                        s.getCommonIcon = function(e) {
                            return e = 200 + e,
                                this._resAdapter.iconCombatResPool.getResPool(e).display
                        }
                        ,
                        s.borrowSuperSkillBg = function(e) {
                            var o;
                            return null == (o = this._resAdapter.commonCombatResPool.getResPool(e, l.TYPE_SUPER_SKILL_BG)) ? null : o.display
                        }
                        ,
                        s.giveBackSuperSkillBg = function(e, o) {
                            void 0 === o && (o = -1),
                            e || u.IS_LOCAL,
                                this._resAdapter.commonCombatResPool.removeResPool(e, o)
                        }
                        ,
                        s.borrowSpiritIcon = function(e) {
                            var o;
                            return null == (o = this._resAdapter.commonCombatResPool.getResPool(e, l.TYPE_SPIRIT_ICON)) ? (1 == u.IS_LOCAL && u.IS_LOCAL,
                                null) : o.display
                        }
                        ,
                        s.giveBackSpiritIcon = function(e, o) {
                            void 0 === o && (o = -1),
                            e || u.IS_LOCAL,
                                this._resAdapter.commonCombatResPool.removeResPool(e, o)
                        }
                        ,
                        s.removeAllRes = function() {
                            this._resAdapter.stopAllResRequest(),
                                this._resAdapter.commonCombatResPool.removeAllResPool(),
                                this._resAdapter.iconCombatResPool.removeAllResPool()
                        }
                        ,
                        s.insertBuffsRes = function(e) {
                            for (var o = 0; o < r.linkArray.length; o++) {
                                var s = r.linkArray[o]
                                    , i = new n;
                                i.id = s,
                                    i.type = l.TYPE_SKILL,
                                    i.url = t.COMM_ROOT + "res/combat/buffs/buffEffects.swf?" + t.SPIRIT_SKILL_VER,
                                    i.resPool = this._resAdapter.buffCombatResPool,
                                    i.policy = l.POLICY_DEFAULT,
                                    i.resType = n.RES_TYPE_BUFF_ANIMATION,
                                    i.resID = s,
                                    i.isGaf = !0,
                                    i.assetPath = i.assetPath.concat("gaf/buff/buffEffects/buffEffects.gaf.bin"),
                                    console.log("[CombatResModule] 请求加载资源:BUFF[" + i.id + "]", i.linkName + "==>" + i.url),
                                    e.push(i)
                            }
                        }
                        ,
                        s.insertOnePlayerMustLoaded = function(e, o, s, r) {
                            var i = e.spirits
                                , a = I.DISPLAYID_MAPPING[r];
                            (m = new n).id = a,
                                m.url = t.COMM_ROOT + "res/combat/spirits/" + a + "-.swf-false",
                                m.linkName = "Spirit",
                                m.type = r == P.POS_LEFT ? l.TYPE_SPIRIT_BAODI_LEFT : l.TYPE_SPIRIT_BAODI_RIGHT;
                            var u = d.Instance.getPath(a);
                            m.assetPath = m.assetPath.concat("gaf/Pet/" + u),
                                m.resID = a.toString(),
                                m.resPool = this._resAdapter.commonCombatResPool,
                                m.resType = n.RES_TYPE_PET_ANIMATION,
                                m.isGaf = !0,
                                m.policy = s,
                                o.push(m);
                            for (var p = 0; p < i.length; p++) {
                                var c = i[p];
                                CONFIG.DEBUG,
                                    console.log("[CombatResModule] 请求加载资源:精灵ID[" + c.id + "]", c.spiritDes);
                                var m = new n;
                                0 != c.skinID ? (m.id = c.skinID,
                                    m.url = t.COMM_ROOT + "res/combat/spirits/" + c.skinID + "-.swf-false",
                                    c.displayID = m.id) : (m.id = c.id,
                                    m.url = c.spiritDes.src),
                                null == m.id && (m.id = c.displayID,
                                    m.url = c.displayID + ""),
                                    m.linkName = "Spirit",
                                    m.type = r == P.POS_LEFT ? l.TYPE_SPIRIT_LEFT : l.TYPE_SPIRIT_RIGHT;
                                u = d.Instance.getPath(c.displayID);
                                m.assetPath = m.assetPath.concat("gaf/Pet/" + u),
                                    m.resID = c.displayID.toString(),
                                    m.resPool = this._resAdapter.commonCombatResPool,
                                    m.resType = n.RES_TYPE_PET_ANIMATION,
                                    m.isGaf = !0,
                                    m.policy = s,
                                    o.push(m);
                                var f = c.skills;
                                if (null != f && f.length > 0)
                                    for (var R = 0; R < f.length; R++) {
                                        var _ = f[R];
                                        if (CONFIG.DEBUG,
                                            0 != _.skillDes.superFormId ? console.log("[CombatResModule] 请求加载资源:变身宠物ID[" + _.skillDes.superFormId + "]", _.skillDes) : console.log("[CombatResModule] 请求加载资源:技能ID[" + _.id + "]", _.skillDes),
                                        null != _.skillDes.superSkillBgSrc && console.log("[CombatResModule] 请求加载必杀背景资源:技能ID[" + _.id + "]", _.skillDes),
                                        0 != _.skillDes.superFormId) {
                                            m = new n,
                                                0 != c.skinID ? (m.id = 2e5 + 10 * c.id + c.skinID % 10,
                                                    m.url = t.COMM_ROOT + "res/combat/spirits/" + m.id + "-.swf-false") : (m.id = _.skillDes.superFormId,
                                                    m.url = _.skillDes.superFormSrc),
                                                m.linkName = "Spirit",
                                                m.type = r == P.POS_LEFT ? l.TYPE_SPIRIT_LEFT : l.TYPE_SPIRIT_RIGHT;
                                            u = d.Instance.getPath(m.id);
                                            m.assetPath = m.assetPath.concat("gaf/Pet/" + u),
                                                m.resID = m.id,
                                                m.resPool = this._resAdapter.commonCombatResPool,
                                                m.policy = s,
                                                m.resType = n.RES_TYPE_PET_ANIMATION,
                                                m.isGaf = !0,
                                                o.push(m)
                                        }
                                        (m = new n).id = _.id,
                                            m.type = l.TYPE_SKILL,
                                            m.linkName = "Effect",
                                            m.url = _.skillDes.src,
                                            m.resPool = this._resAdapter.commonCombatResPool,
                                            m.policy = s,
                                            m.resID = _.skillDes.resID,
                                            m.assetPath = m.assetPath.concat("gaf/skill/" + m.resID + "/" + m.resID + ".gaf.bin"),
                                            m.resType = n.RES_TYPE_SKILL_ANIMATION,
                                            m.isGaf = !0,
                                        "string" == typeof m.resID && m.resID.length > 0 && o.push(m),
                                        "number" == typeof m.resID && m.resID > 0 && o.push(m),
                                        null == _.skillDes.superSkillBgSrc && "" == _.skillDes.superSkillBgSrc || ((m = new n).id = _.id,
                                            m.linkName = "Image",
                                            m.type = l.TYPE_SUPER_SKILL_BG,
                                            m.url = _.skillDes.superSkillBgSrc,
                                            m.resPool = this._resAdapter.commonCombatResPool,
                                            m.policy = s,
                                            m.resID = m.id,
                                            m.resType = n.RES_TYPE_IMAGE,
                                            o.push(m))
                                    }
                            }
                        }
                        ,
                        o(e, [{
                            key: "resAdapter",
                            set: function(e) {
                                this._resAdapter = e
                            }
                        }]),
                        e
                }());
                s._RF.pop()
            }
        }
    }
));
