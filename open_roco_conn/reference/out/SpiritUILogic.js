System.register("chunks:///_virtual/SpiritUILogic.ts", ["cc", "./CombatType.ts", "./CombatResType.ts", "./ToolTip.ts", "./SpriteFrameSelector.ts", "./CombatDataProxy.ts", "./CombatImage.ts", "./PlayerInfoUILogic.ts"], (function(t) {
        var i, e, s, o, n, a, l, h, r, c, _, f, p;
        return {
            setters: [function(t) {
                i = t.cclegacy,
                    e = t.Label,
                    s = t.color,
                    o = t.sys,
                    n = t.NodeEventType,
                    a = t.Vec2
            }
                , function(t) {
                    l = t.CombatType
                }
                , function(t) {
                    h = t.CombatResType
                }
                , function(t) {
                    r = t.ToolTipComponent
                }
                , function(t) {
                    c = t.default
                }
                , function(t) {
                    _ = t.CombatDataProxy
                }
                , function(t) {
                    f = t.CombatImage
                }
                , function(t) {
                    p = t.PlayerInfoUILogic
                }
            ],
            execute: function() {
                i._RF.push({}, "c908aUO651A/Y8tU3NgV9OX", "SpiritUILogic", void 0);
                var v = t("SpiritUILogic", function() {
                    function t(t, i) {
                        this.info = void 0,
                            this._playerInfo = void 0,
                            this._nameTxt = void 0,
                            this._levelTxt = void 0,
                            this._hpTxt = void 0,
                            this._intimacyTxt = void 0,
                            this._intimacyBg = void 0,
                            this._balls = void 0,
                            this._spirits = void 0,
                            this._star = void 0,
                            this._vsMc = void 0,
                            this._spInfo = void 0,
                            this._spIcons = void 0,
                            this.icon = void 0,
                            this.combatType = -1,
                            this._levelTfb = void 0,
                            this._curIndex = 0,
                            this._len = 0,
                            this._baseRate = 0,
                            this.colorArr = [16777215, 16711680, 16740721, 6665473],
                            this._curIndex = i;
                        var s = t.getChildByName("playerInfo_" + i);
                        this._playerInfo = new p(s,i),
                            this._nameTxt = t.getChildByName("name_" + i + "_txt").getComponent(e),
                            this._levelTxt = t.getChildByName("level_" + i + "_txt").getComponent(e),
                            this._hpTxt = t.getChildByName("hp_" + i + "_txt").getComponent(e),
                            this._intimacyTxt = t.getChildByName("intimacy_" + i + "_txt").getComponent(e),
                            this._intimacyBg = t.getChildByName("intimacy" + i),
                            this._vsMc = t.getChildByName("vsMc"),
                            this._spInfo = t.getChildByName("spInfo_" + i),
                            this._spInfo.active = !1,
                            this._balls = [],
                            this._spIcons = [];
                        for (var l = 0; l < 6; l++) {
                            var h = new f(80,80);
                            this._spIcons.push(h);
                            var _ = s.getChildByName("spirit_" + i + "_" + l).getComponent(c);
                            _.gotoAndStop(1),
                                this._balls.push(_),
                                o.platform == o.Platform.MOBILE_BROWSER ? this._balls[l].node.on(n.TOUCH_START, this.overBall, this) : this._balls[l].node.on(n.MOUSE_ENTER, this.overBall, this),
                                o.platform == o.Platform.MOBILE_BROWSER ? (this._balls[l].node.on(n.TOUCH_CANCEL, this.outBall, this),
                                    this._balls[l].node.on(n.TOUCH_END, this.outBall, this)) : this._balls[l].node.on(n.MOUSE_LEAVE, this.outBall, this)
                        }
                        this._star = t.getChildByName("star_" + i),
                        this._star.getComponent(r) || this._star.addComponent(r),
                            this._star.tooltipPos = new a(2,0),
                            this._star.tooltip = "捕获概率0%",
                            this.reset()
                    }
                    var i = t.prototype;
                    return i.overBall = function(t) {
                        2 != _.getCombatData().combatSPMsgType && (this._spInfo.active = !0)
                    }
                        ,
                        i.outBall = function(t) {
                            this._spInfo.active = !1
                        }
                        ,
                        i.upateSPState = function(i, e) {
                            if (-1 != e.indexOf(1))
                                for (var s = 0; s < e.length; s++)
                                    if (s < this._len) {
                                        var o = this._balls[s]
                                            , n = this._spInfo.getChildByName("cell" + s);
                                        o.selectedIndex != t.BALL_STATE_NOW && o.gotoAndStop(0 == e[s] || 2 == e[s] ? t.BALL_STATE_EMPTY : t.BALL_STATE_NORMAL);
                                        var a = n.getChildByName("bg").getComponent(c);
                                        1 != a.currentFrame && (2 == e[s] ? a.gotoAndStop(3) : 3 == e[s] ? a.gotoAndStop(2) : 0 == e[s] ? a.gotoAndStop(5) : 1 == e[s] && a.gotoAndStop(4));
                                        var l = n.getChildByName("c");
                                        2 == e[s] || 3 == e[s] ? l.active = !0 : (0 == e[s] || 1 == e[s]) && (l.active = !1),
                                            l.active = !0;
                                        for (var h = 0; h < 4; h++) {
                                            var r = n.getChildByName("txtSkill" + h);
                                            l.active ? r.active = !0 : r.active = !1
                                        }
                                    }
                        }
                        ,
                        i.upateSpiritsState = function(i, s) {
                            if (void 0 === i && (i = -1),
                            void 0 === s && (s = null),
                            null != s && (this._spirits = s),
                            null != this._spirits) {
                                -1 != i && (this.combatType = i);
                                for (var o = this._spirits.length, n = 0; n < 6; n++) {
                                    var a = this._balls[n]
                                        , r = this._spInfo.getChildByName("cell" + n)
                                        , f = r.getChildByName("bg").getComponent(c)
                                        , p = r.getChildByName("c");
                                    if (this.combatType,
                                        l.PVE,
                                        a.node.active = !0,
                                    n < o) {
                                        var v = this._spirits[n];
                                        if (null == v)
                                            continue;
                                        if (null == a)
                                            continue;
                                        var d = 1 == this._curIndex ? _.getCombatData().myCurSpirit.index : _.getCombatData().rivalCurSpirit.index;
                                        v.index == d ? a.gotoAndStop(t.BALL_STATE_NOW) : a.gotoAndStop(0 == v.curHP ? t.BALL_STATE_EMPTY : t.BALL_STATE_NORMAL),
                                            r.active = !0,
                                            0 == v.curHP ? f.gotoAndStop(5) : v.index == d ? (p.active = !0,
                                                f.gotoAndStop(1)) : f.gotoAndStop(4);
                                        var m = this._spIcons[n];
                                        this.cleanContainer(p),
                                            0 != this._spirits[n].skinID ? m.setSpiritIcon(this._spirits[n].skinID) : m.setSpiritIcon(this._spirits[n].spiritDes.id),
                                            p.addChild(m),
                                            v.curHP;
                                        for (var u = 0; u < 4; u++) {
                                            var g = r.getChildByName("txtSkill" + u);
                                            if (u < v.skills.length) {
                                                g.active = !0;
                                                var T = v.skills[u];
                                                g.getComponent(e).string = "" + T.skillDes.name != null ? T.skillDes.name : "",
                                                    n == d - 1 || v.index == d || p.active ? g.active = !0 : g.active = !1
                                            } else
                                                g.active = !1,
                                                    g.getComponent(e).string = ""
                                        }
                                        -1 != i && (n == d - 1 ? (p.active = !0,
                                            f.gotoAndStop(1)) : (p.active = !1,
                                            f.gotoAndStop(4)))
                                    } else {
                                        this.cleanContainer(p),
                                            r.active = !0,
                                            f.gotoAndStop(3);
                                        for (u = 0; u < 4; u++) {
                                            (g = r.getChildByName("txtSkill" + u)).active = !1,
                                                g.getComponent(e).string = ""
                                        }
                                    }
                                }
                                2 == this._curIndex && this.combatType == l.PVE && h.IS_CATCH ? this._star.active = !0 : this._star.active = !1
                            }
                        }
                        ,
                        i.removeSpIcon = function(t) {
                            null != t && null != t.parent && t.parent.removeChild(t)
                        }
                        ,
                        i.cleanContainer = function(t) {
                            for (var i = t.children.length, e = 0; e < i; e++)
                                t.removeChild(t.children[0])
                        }
                        ,
                        i.catchRate = function(t) {
                            this._baseRate = t,
                            this._baseRate < 0 && (this._baseRate = 0),
                            this._baseRate > 100 && (this._baseRate = 100),
                                this._star.tooltip = "捕获概率" + t + "%"
                        }
                        ,
                        i.catchPreviewRate = function(t) {}
                        ,
                        i.transData = function(t) {}
                        ,
                        i.setSpiritInfo = function(t, i) {
                            if (void 0 === i && (i = 0),
                                this.info = t,
                                this._nameTxt.string = this.info.spiritDes.name,
                                this._levelTxt.string = "" + this.info.level,
                                0 == this.info.affiliation ? (this.info.closeness > 100 ? this._intimacyTxt.string = "100" : this._intimacyTxt.string = this.info.closeness + "",
                                    this._intimacyTxt.node.active = !0) : this._intimacyTxt.node.active = !1,
                            0 == i)
                                this._levelTxt.color = s(255, 255, 255);
                            else {
                                var e = this.info.level - i;
                                this._levelTxt.color = e <= -5 ? s(101, 181, 1) : e < 5 ? s(255, 255, 255) : e <= 10 ? s(255, 113, 113) : s(255, 0, 0)
                            }
                            0 != t.skinID ? this._playerInfo.setSpiritID(t.skinID) : this._playerInfo.setSpiritID(this.info.id),
                                this._playerInfo.setPetPropertyIcon(this.info.spiritDes.features),
                                this._playerInfo.setSpiritEquipmentInfo(this.info.equips),
                                this._playerInfo.setTalent(t.talentType, t.talentLevel),
                                this._playerInfo.setIntimacy(this.info.closeness, this.info.affiliation),
                                this.updateHP()
                        }
                        ,
                        i.setAvataInfo = function(t, i, e) {
                            i != l.PVP && i != l.PVT && i != l.L_PVP && i != l.D_PVP ? this._vsMc.active = !1 : this._vsMc.active = !0,
                                this._playerInfo.setAvatarIcon(this.info.id, i, e),
                                this._vsMc.active = !1
                        }
                        ,
                        i.updateHP = function() {
                            this._hpTxt.string = this.info.curHP + "/" + this.info.maxHP,
                                this._playerInfo.setHP(this.info.curHP / this.info.maxHP)
                        }
                        ,
                        i.setMaxHP = function(t) {
                            this.info.maxHP = t
                        }
                        ,
                        i.setHP = function(t) {
                            this.info.curHP = t,
                                this.updateHP()
                        }
                        ,
                        i.addBuff = function(t, i) {
                            this._playerInfo.addBuffICon(t, i)
                        }
                        ,
                        i.removeBuff = function(t) {
                            this._playerInfo.removeBuffIcon(t)
                        }
                        ,
                        i.removeAllBuff = function() {
                            this._playerInfo.removeAllBuffIcon()
                        }
                        ,
                        i.removeAllBuffForSuperform = function() {
                            this._playerInfo.removeAllBuffIconForSuperform()
                        }
                        ,
                        i.getSpiritInfo = function() {
                            return this.info
                        }
                        ,
                        i.setGuardianInfo = function(t) {}
                        ,
                        i.reset = function() {
                            this.info = null,
                                this._playerInfo.reset(),
                                this._nameTxt.string = "",
                                this._levelTxt.string = "",
                                this._intimacyTxt.string = "",
                                this._hpTxt.string = "";
                            for (var t = 0; t < 6; t++) {
                                this._balls[t].gotoAndStop(1)
                            }
                            this._star.tooltip = "捕获概率0%",
                                this._baseRate = 0,
                                this._spirits = null
                        }
                        ,
                        t
                }());
                v.BALL_STATE_NULL = 1,
                    v.BALL_STATE_EMPTY = 2,
                    v.BALL_STATE_NORMAL = 3,
                    v.BALL_STATE_NOW = 4,
                    i._RF.pop()
            }
        }
    }
));
