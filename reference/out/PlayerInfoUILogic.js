System.register("chunks:///_virtual/PlayerInfoUILogic.ts", ["cc", "./DEFINE.ts", "./GuardianPetDes.ts", "./PropertyDes.ts", "./TalentDes.ts", "./AImage.ts", "./BubbleSkinType.ts", "./EquipmentIcon.ts", "./NodeSelector.ts", "./PrefabSelector.ts", "./SpriteFrameSelector.ts", "./BuildLogHelper.ts", "./CombatDataProxy.ts", "./CombatImage.ts", "./ScreenUILogicStaticNode.ts"], (function(t) {
        var e, i, n, s, o, a, r, h, c, p, u, l, _, g, d, I, f, E, B, m, C, y, v;
        return {
            setters: [function(t) {
                e = t.cclegacy,
                    i = t.Tween,
                    n = t.tween,
                    s = t.sys,
                    o = t.NodeEventType,
                    a = t.ProgressBar,
                    r = t.UITransform,
                    h = t.Label,
                    c = t.Sprite
            }
                , function(t) {
                    p = t.DEFINE
                }
                , function(t) {
                    u = t.GuardianPetDes
                }
                , function(t) {
                    l = t.PropertyDes
                }
                , function(t) {
                    _ = t.TalentDes
                }
                , function(t) {
                    g = t.AImage
                }
                , function(t) {
                    d = t.BubbleSkinType
                }
                , function(t) {
                    I = t.EquipmentIcon
                }
                , function(t) {
                    f = t.default
                }
                , function(t) {
                    E = t.default
                }
                , function(t) {
                    B = t.default
                }
                , function(t) {
                    m = t.default
                }
                , function(t) {
                    C = t.CombatDataProxy
                }
                , function(t) {
                    y = t.CombatImage
                }
                , function(t) {
                    v = t.ScreenUILogicStaticNode
                }
            ],
            execute: function() {
                e._RF.push({}, "36cb8cWFq1BKK5Kcv8u36KF", "PlayerInfoUILogic", void 0);
                var O = t("PlayerInfoUILogic", function() {
                    function t(t, e) {
                        var i;
                        this._target = void 0,
                            this._bar = void 0,
                            this._barBgRed = void 0,
                            this._barBgGreen = void 0,
                            this._icon = void 0,
                            this._avatarIcon = void 0,
                            this._pIds = [],
                            this._equipInfo = [],
                            this.petPropertyIcons = void 0,
                            this._guardianPetDes = void 0,
                            this._buffIcons = void 0,
                            this._playerIndex = 0,
                            this._buffContainer = void 0,
                            this._curEqIcon0 = void 0,
                            this._curEqIcon1 = void 0,
                            this._curEqIcon2 = void 0,
                            this._ppStates = void 0,
                            this._currBIcons = void 0,
                            this.lastHPFrame = 100,
                            this._playerIndex = e,
                            this._target = t,
                            this._bar = this._target.getChildByName("bar").getComponent(a),
                            this._barBgRed = this._target.getChildByName("barBgRed").getComponent(a),
                            this._barBgGreen = this._target.getChildByName("barBgGreen").getComponent(a),
                            this._bar.progress = 1,
                            this._barBgRed.progress = 1,
                            this._barBgGreen.progress = 1,
                            this._icon = new y(130,130),
                            this._target.getChildByName("headLoader").addChild(this._icon),
                            this._buffContainer = this._target.getChildByName("buffLoader"),
                            this._buffIcons = [],
                            this._currBIcons = [],
                            this._ppStates = [];
                        for (var n = 0; n < 20; n++)
                            if ((i = new y).scaleParam = 1.2,
                                this._buffIcons.push(i),
                            n < 4) {
                                var s = this._target.getChildByName("pp" + n);
                                this._ppStates.push(s),
                                    this._ppStates[n].getComponent(B).gotoAndStop(2),
                                    this._ppStates[n].active = !1
                            }
                        for (this.petPropertyIcons = [],
                                 n = 0; n < 2; n++)
                            (i = new y(25,25)).setPosition(0, 0),
                                this._target.getChildByName("propertyIcon" + n).addChild(i),
                                this.petPropertyIcons.push(i)
                    }
                    var e = t.prototype;
                    return e.addBuffICon = function(e, i) {
                        for (var n = 0; n < this._currBIcons.length; n++) {
                            if (this._currBIcons[n].id == e)
                                return CONFIG.DEBUG,
                                    void console.log("[PlayerInfoUILogic] 已经存在一个相同的BUFF!图标")
                        }
                        if (0 != this._buffIcons.length) {
                            var s = this._buffIcons.shift();
                            s.setBuffIcon(e),
                                this._currBIcons.push({
                                    id: e,
                                    icon: s
                                });
                            var o = this._currBIcons.length;
                            s.x = (Math.floor(o / t.BUFf_ICON_ONE) > 0 ? 84 + 2 * t.BUFf_ICON_WIDTH + 27 * (o - t.BUFf_ICON_ONE * Math.floor(o / t.BUFf_ICON_ONE)) : 111 + 27 * o) - 139,
                                s.y = -(t.BUFf_ICON_HEIGHT + 3) * Math.floor(o / t.BUFf_ICON_ONE) + 6,
                                this._buffContainer.addChild(s),
                                s.tooltipType = d.COMBAT_ITEMS,
                                s.tooltip = "<color=#FF7A22>" + i + "</color>",
                                CONFIG.DEBUG,
                                console.log("[PlayerInfoUILogic] 添加一个新的BUFF图标!==id==" + e + "==name" + i),
                                this.updateBuffIconsPos()
                        }
                    }
                        ,
                        e.removeBuffIcon = function(e) {
                            if (0 != this._currBIcons.length) {
                                CONFIG.DEBUG,
                                    console.log("[PlayerInfoUILogic] 删除一个BUFF!==id==" + e);
                                for (var i = 0, n = 0; n < this._currBIcons.length; n++) {
                                    var s = this._currBIcons[n]
                                        , o = s.icon;
                                    s.id == e ? (o.tooltip = null,
                                        this._buffContainer.removeChild(o),
                                        o.unload(),
                                        this._buffIcons.push(o),
                                        this._currBIcons.splice(n, 1),
                                        n--) : (i++,
                                        o.x = (Math.floor(i / t.BUFf_ICON_ONE) > 0 ? 84 + 2 * t.BUFf_ICON_WIDTH + 27 * (i - t.BUFf_ICON_ONE * Math.floor(i / t.BUFf_ICON_ONE)) : 111 + 27 * i) - 139,
                                        o.y = -(t.BUFf_ICON_HEIGHT + 3) * Math.floor(i / t.BUFf_ICON_ONE) + 6)
                                }
                                this.updateBuffIconsPos()
                            }
                        }
                        ,
                        e.updateBuffIconsPos = function() {
                            for (var e = 0, i = 0; i < this._currBIcons.length; i++) {
                                var n = this._currBIcons[i].icon;
                                e++,
                                    n.x = (Math.floor(e / t.BUFf_ICON_ONE) > 0 ? 84 + 2 * t.BUFf_ICON_WIDTH + 27 * (e - t.BUFf_ICON_ONE * Math.floor(e / t.BUFf_ICON_ONE)) : 111 + 27 * e) - 139,
                                    n.y = -(t.BUFf_ICON_HEIGHT + 3) * Math.floor(e / t.BUFf_ICON_ONE) + 6
                            }
                        }
                        ,
                        e.removeAllBuffIcon = function() {
                            if (0 != this._currBIcons.length)
                                for (var t = 0; t < this._currBIcons.length; t++) {
                                    var e = this._currBIcons[t].icon;
                                    this._buffContainer.removeChild(e),
                                        e.unload(),
                                        this._buffIcons.push(e),
                                        this._currBIcons.splice(t, 1),
                                        t--
                                }
                        }
                        ,
                        e.removeAllBuffIconForSuperform = function() {
                            if (0 != this._currBIcons.length)
                                for (var t = 0; t < this._currBIcons.length; t++)
                                    if (this._currBIcons[t].id < 14 || this._currBIcons[t].id > 20) {
                                        var e = this._currBIcons[t].icon;
                                        this._buffContainer.removeChild(e),
                                            e.unload(),
                                            this._buffIcons.push(e),
                                            this._currBIcons.splice(t, 1),
                                            t--
                                    }
                        }
                        ,
                        e.getTarget = function() {
                            return this._target
                        }
                        ,
                        e.checkHpBarTween = function() {
                            i.stopAllByTarget(this._bar),
                                i.stopAllByTarget(this._barBgRed),
                                i.stopAllByTarget(this._barBgGreen),
                                this._bar.progress = .01 * this.lastHPFrame,
                                this._barBgRed.progress = .01 * this.lastHPFrame,
                                this._barBgGreen.progress = .01 * this.lastHPFrame
                        }
                        ,
                        e.setHP = function(t) {
                            this.checkHpBarTween();
                            var e = 100 * t
                                , i = .8 * Math.abs(e - this.lastHPFrame) / 100 + .4;
                            e < this.lastHPFrame ? (this._barBgGreen.node.active = !1,
                                this._barBgGreen.progress = .01 * e,
                                n(this._bar).to(.2, {
                                    progress: .01 * e
                                }).start(),
                                n(this._barBgRed).to(i, {
                                    progress: .01 * e
                                }).start(),
                                this._barBgRed.node.active = !0) : e > this.lastHPFrame ? (this._barBgRed.node.active = !1,
                                this._barBgRed.progress = .01 * e,
                                n(this._barBgGreen).to(.2, {
                                    progress: .01 * e
                                }).start(),
                                n(this._bar).to(i, {
                                    progress: .01 * e
                                }).start(),
                                this._barBgGreen.node.active = !0) : (this._bar.progress = .01 * e,
                                this._barBgGreen.node.active = !1,
                                this._barBgRed.node.active = !1),
                                this.lastHPFrame = e
                        }
                        ,
                        e.setSpiritID = function(t) {
                            this._icon.setSpiritIcon(t)
                        }
                        ,
                        e.setPetPropertyIcon = function(t) {
                            var e, i = 0;
                            for (this._pIds = t,
                                     i = 0; i < this.petPropertyIcons.length; i++)
                                e = this.petPropertyIcons[i],
                                    null != t && i < t.length ? (e.setSkillIcon(t[i].id),
                                        this._target.getChildByName("propertyIcon" + i).active = !0) : (e.dispose(),
                                        this._target.getChildByName("propertyIcon" + i).active = !1),
                                    s.platform == s.Platform.MOBILE_BROWSER ? (e.hasEventListener(o.TOUCH_START, this.onPropertyOver, this) || e.on(o.TOUCH_START, this.onPropertyOver, this),
                                    e.hasEventListener(o.TOUCH_CANCEL, this.onPropertyOut, this) || e.on(o.TOUCH_CANCEL, this.onPropertyOut, this),
                                    e.hasEventListener(o.TOUCH_END, this.onPropertyOut, this) || e.on(o.TOUCH_END, this.onPropertyOut, this)) : (e.hasEventListener(o.MOUSE_ENTER, this.onPropertyOver, this) || e.on(o.MOUSE_ENTER, this.onPropertyOver, this),
                                    e.hasEventListener(o.MOUSE_LEAVE, this.onPropertyOut, this) || e.on(o.MOUSE_LEAVE, this.onPropertyOut, this))
                        }
                        ,
                        e.onPropertyOver = function(t) {
                            var e = v.PropertyTips
                                , i = Number(t.target.parent.name.split("propertyIcon")[1]);
                            if (this._pIds[i]) {
                                if (1 == this._playerIndex) {
                                    var n = 0 == i ? -416 : -372;
                                    e.setPosition(n, e.getPosition().y)
                                } else {
                                    n = 0 == i ? 416 : 372;
                                    e.setPosition(n, e.getPosition().y)
                                }
                                e.getComponent(E).gotoAndStop(this._pIds[i].id),
                                    e.active = !0
                            }
                        }
                        ,
                        e.onPropertyOut = function(t) {
                            var e = v.PropertyTips;
                            e.active && (e.active = !1)
                        }
                        ,
                        e.setIntimacy = function(t, e) {
                            var i = e
                                , n = v["IntimacyRes" + this._playerIndex].getComponent(B)
                                , s = 0;
                            s = 0 == i ? t > 100 ? 100 : t : i > 5 ? 105 : i + 100,
                                n.gotoAndStop(1);
                            var o = null
                                , r = v["IntimacyRes" + this._playerIndex].getChildByName("energyLine");
                            switch (r && (o = r.getComponent(a)) && (o.progress = 0),
                                s) {
                                case 105:
                                    n.gotoAndStop(2),
                                        v["IntimacyTips" + this._playerIndex].mouseChildren = !1,
                                        v["IntimacyTips" + this._playerIndex].tooltip = "亲密度";
                                    break;
                                case 101:
                                    n.gotoAndStop(3),
                                        v["IntimacyTips" + this._playerIndex].mouseChildren = !1,
                                        v["IntimacyTips" + this._playerIndex].tooltip = "精力+10，物防+10";
                                    break;
                                case 103:
                                    n.gotoAndStop(4),
                                        v["IntimacyTips" + this._playerIndex].mouseChildren = !1,
                                        v["IntimacyTips" + this._playerIndex].tooltip = "精力+10，物攻+10";
                                    break;
                                case 104:
                                    n.gotoAndStop(5),
                                        v["IntimacyTips" + this._playerIndex].mouseChildren = !1,
                                        v["IntimacyTips" + this._playerIndex].tooltip = "精力+10，魔攻+10";
                                    break;
                                case 102:
                                    n.gotoAndStop(6),
                                        v["IntimacyTips" + this._playerIndex].mouseChildren = !1,
                                        v["IntimacyTips" + this._playerIndex].tooltip = "精力+10，魔防+10";
                                    break;
                                default:
                                    n.gotoAndStop(1),
                                        t < 1 ? o && (o.progress = 0) : o && (o.progress = .01 * t),
                                        v["IntimacyTips" + this._playerIndex].mouseChildren = !1,
                                        v["IntimacyTips" + this._playerIndex].tooltip = "亲密度"
                            }
                        }
                        ,
                        e.setTalent = function(t, e) {
                            var i, n = v["EquipBarRes" + this._playerIndex].getChildByName("e4");
                            null == n.image ? (i = new g(30,30,!0),
                                n.addChild(i),
                                n.image = i) : i = n.image;
                            var a = n.getChildByName("mcTooltip")
                                , u = a.getChildByName("mcWake")
                                , l = a.getChildByName("bg")
                                , d = a.getChildByName("txtTalentDes")
                                , I = a.getChildByName("txtTalentName")
                                , E = a.getChildByName("mcLabel")
                                , B = t;
                            0 == t ? (n.active = !1,
                                u.getComponent(f).gotoAndStop(3),
                                u.setPosition(u.getPosition().x, 74),
                                l.getComponent(r).height = 60,
                                d.active = !1,
                                I.active = !1,
                                E.active = !1) : 200 == t ? (n.active = !1,
                                u.getComponent(f).gotoAndStop(4),
                                u.setPosition(u.getPosition().x, 74),
                                l.getComponent(r).height = 60,
                                d.active = !1,
                                I.active = !1,
                                E.active = !1) : (n.active = !0,
                                e > 0 ? (d.active = !0,
                                    I.active = !0,
                                    E.active = !0,
                                    d.getComponent(h).string = _.SET[t].description,
                                    I.getComponent(h).string = "血脉天赋：" + _.getName(t),
                                    u.getComponent(f).gotoAndStop(e > 0 ? 2 : 1),
                                    u.setPosition(u.getPosition().x, -172),
                                    l.getComponent(r).height = 300) : (u.getComponent(f).gotoAndStop(5),
                                    u.setPosition(u.getPosition().x, 74),
                                    l.getComponent(r).height = 60,
                                    d.active = !1,
                                    I.active = !1,
                                    E.active = !1,
                                    B = 201)),
                                i.setPath(p.COMM_ROOT + "res/talent/" + B + "_small.png"),
                                i.getComponent(c).grayscale = !(e >= 0 && t > 0),
                                a.active = !1,
                            n.hasEventListener(o.MOUSE_ENTER, this.onTalentOver, this) || n.on(o.MOUSE_ENTER, this.onTalentOver, this),
                            n.hasEventListener(o.MOUSE_LEAVE, this.onTalentOut, this) || n.on(o.MOUSE_LEAVE, this.onTalentOut, this),
                                s.platform == s.Platform.MOBILE_BROWSER ? (n.hasEventListener(o.TOUCH_START, this.onTalentOver, this) || n.on(o.TOUCH_START, this.onTalentOver, this),
                                n.hasEventListener(o.TOUCH_CANCEL, this.onTalentOut, this) || n.on(o.TOUCH_CANCEL, this.onTalentOut, this),
                                n.hasEventListener(o.TOUCH_END, this.onTalentOut, this) || n.on(o.TOUCH_END, this.onTalentOut, this)) : (n.hasEventListener(o.MOUSE_ENTER, this.onTalentOver, this) || n.on(o.MOUSE_ENTER, this.onTalentOver, this),
                                n.hasEventListener(o.MOUSE_LEAVE, this.onTalentOut, this) || n.on(o.MOUSE_LEAVE, this.onTalentOut, this))
                        }
                        ,
                        e.onTalentOver = function(t) {
                            v["EquipBarRes" + this._playerIndex].getChildByName("e4").getChildByName("mcTooltip").active = !0
                        }
                        ,
                        e.onTalentOut = function(t) {
                            v["EquipBarRes" + this._playerIndex].getChildByName("e4").getChildByName("mcTooltip").active = !1
                        }
                        ,
                        e.setSpiritEquipmentInfo = function(t) {
                            var e = C.getCombatData();
                            if (1 == this._playerIndex) {
                                var i = e.myInfo
                                    , n = new u;
                                n.energyBonus = i.guardianPetEnergy,
                                    n.attackBonus = i.guardianPetAttack,
                                    n.defendBonus = i.guardianPetDefend,
                                    n.magicAttackBonus = i.guardianPetMA,
                                    n.magicDefendBonus = i.guardianPetMD,
                                    this.setGuardianPetData(n),
                                    this.updateEquips(t),
                                    v["IntimacyRes" + this._playerIndex].active = !0,
                                    v["IntimacyTips" + this._playerIndex].active = !0
                            } else {
                                var s = e.rivalInfo
                                    , o = new u;
                                o.energyBonus = s.guardianPetEnergy,
                                    o.attackBonus = s.guardianPetAttack,
                                    o.defendBonus = s.guardianPetDefend,
                                    o.magicAttackBonus = s.guardianPetMA,
                                    o.magicDefendBonus = s.guardianPetMD,
                                    this.setGuardianPetData(o),
                                    this.updateEquips(t)
                            }
                        }
                        ,
                        e.updateEquips = function(t) {
                            var e, i;
                            v["EquipBarRes" + this._playerIndex].active = !0,
                                this._equipInfo = [];
                            for (var n = 0; n < l.EQUIPMENT_TYPE.length; n++) {
                                if (e = t[n],
                                    i = this["_curEqIcon" + n],
                                    this._equipInfo.push(e),
                                null == e.des || null == e.des)
                                    v["EquipBarRes" + this._playerIndex].getChildByName("e" + n).getChildByName("bg").active = !0,
                                    null != i && i.update(null);
                                else if (v["EquipBarRes" + this._playerIndex].getChildByName("e" + n).getChildByName("bg").active = !1,
                                null == i) {
                                    var a = v["EquipBarRes" + this._playerIndex].getChildByName("e" + n);
                                    this["_curEqIcon" + n] = new I(e,a,30,30)
                                } else
                                    i.update(e);
                                a = v["EquipBarRes" + this._playerIndex].getChildByName("e" + n);
                                s.platform == s.Platform.MOBILE_BROWSER ? (a.hasEventListener(o.TOUCH_START, this.onEquipOver, this) || a.on(o.TOUCH_START, this.onEquipOver, this),
                                a.hasEventListener(o.TOUCH_CANCEL, this.onEquipOut, this) || a.on(o.TOUCH_CANCEL, this.onEquipOut, this),
                                a.hasEventListener(o.TOUCH_END, this.onEquipOut, this) || a.on(o.TOUCH_END, this.onEquipOut, this)) : (a.hasEventListener(o.MOUSE_ENTER, this.onEquipOver, this) || a.on(o.MOUSE_ENTER, this.onEquipOver, this),
                                a.hasEventListener(o.MOUSE_LEAVE, this.onEquipOut, this) || a.on(o.MOUSE_LEAVE, this.onEquipOut, this))
                            }
                            var r = v["EquipBarRes" + this._playerIndex].getChildByName("e3");
                            s.platform == s.Platform.MOBILE_BROWSER ? (r.on(o.TOUCH_START, this.onIconOver, this),
                                r.on(o.TOUCH_CANCEL, this.onIconOut, this),
                                r.on(o.TOUCH_END, this.onIconOut, this)) : (r.on(o.MOUSE_ENTER, this.onIconOver, this),
                                r.on(o.MOUSE_LEAVE, this.onIconOut, this))
                        }
                        ,
                        e.onEquipOver = function(t) {
                            var e = Number(t.target.name.split("e")[1])
                                , i = v["EquipBarRes" + this._playerIndex].getChildByName("equipTips");
                            i.active = !0;
                            var n, s, o = [[0, 44, 88], [0, -44, -88]][this._playerIndex - 1][e];
                            (i.setPosition(o, i.getPosition().y),
                            null == this._equipInfo[e].des || null == this._equipInfo[e].des) ? (i.getChildByName("txtName").getComponent(h).string = "" + l.EQUIPMENT_TYPE[e],
                                i.getChildByName("txtDes").getComponent(h).string = "无") : (i.getChildByName("txtName").getComponent(h).string = "" + (null == (n = this._equipInfo[e]) || null == (s = n.des) ? void 0 : s.name),
                            this._equipInfo[e] || m.IS_LOCAL,
                            this._equipInfo[e].des || m.IS_LOCAL,
                                i.getChildByName("txtDes").getComponent(h).string = l.EQUIPMENT_PROPETY[this._equipInfo[e].baseAttr].name + "：+" + this._equipInfo[e].baseValue + "\n" + (0 == this._equipInfo[e].specialValue ? "" : l.EQUIPMENT_PROPETY[this._equipInfo[e].specialAttr].name + "：+" + this._equipInfo[e].specialValue))
                        }
                        ,
                        e.onEquipOut = function(t) {
                            v["EquipBarRes" + this._playerIndex].getChildByName("equipTips").active = !1
                        }
                        ,
                        e.onIconOver = function(t) {
                            v["EquipBarRes" + this._playerIndex].getChildByName("infoTips").active = !0
                        }
                        ,
                        e.onIconOut = function(t) {
                            v["EquipBarRes" + this._playerIndex].getChildByName("infoTips").active = !1
                        }
                        ,
                        e.setGuardianPetData = function(t) {
                            this._guardianPetDes = t;
                            var e = v["EquipBarRes" + this._playerIndex].getChildByName("infoTips");
                            e.getChildByName("txtName").getComponent(h).string = "守护兽",
                                e.getChildByName("txtEnergy").getComponent(h).string = "精力：+" + this._guardianPetDes.energyBonus,
                                e.getChildByName("txtAttack").getComponent(h).string = "物攻：+" + this._guardianPetDes.attackBonus,
                                e.getChildByName("txtMA").getComponent(h).string = "魔攻：+" + this._guardianPetDes.magicAttackBonus,
                                e.getChildByName("txtDF").getComponent(h).string = "物防：+" + this._guardianPetDes.defendBonus,
                                e.getChildByName("txtMD").getComponent(h).string = "魔防：+" + this._guardianPetDes.magicDefendBonus
                        }
                        ,
                        e.setAvatarIcon = function(t, e, i) {
                            this._target.getChildByName("avatarMc").active = !1
                        }
                        ,
                        e.removeAvatarIcon = function() {
                            null != this._avatarIcon && this._avatarIcon.parent.removeChild(this._avatarIcon)
                        }
                        ,
                        e.reset = function() {
                            this._bar.progress = 0,
                                this.removeAllBuffIcon();
                            var t = v["EquipBarRes" + this._playerIndex].getChildByName("e3");
                            s.platform == s.Platform.MOBILE_BROWSER ? (t.off(o.TOUCH_START, this.onIconOver, this),
                                t.off(o.TOUCH_CANCEL, this.onIconOut, this),
                                t.off(o.TOUCH_END, this.onIconOut, this)) : (t.off(o.MOUSE_ENTER, this.onIconOver, this),
                                t.off(o.MOUSE_LEAVE, this.onIconOut, this))
                        }
                        ,
                        t
                }());
                O.BUFf_ICON_HEIGHT = 24,
                    O.BUFf_ICON_WIDTH = 32.4,
                    O.BUFf_ICON_ONE = 19,
                    e._RF.pop()
            }
        }
    }
));
