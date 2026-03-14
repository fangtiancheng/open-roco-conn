System.register("chunks:///_virtual/ExpAllocatorApp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./AgentNode.ts", "./NodeExtend.ts", "./ToolTip.ts", "./WindowResult.ts", "./CFunction.ts", "./FilterFactory.ts", "./ResManager.ts", "./LangStrings.ts", "./NetActionProxy.ts", "./SpiritBagRefProxy.ts", "./ExpAllocatorDataProxy.ts", "./NetProxy.ts"], (function(t) {
        var i, e, n, s, _, a, o, r, d, h, x, u, c, l, p, g, f, P;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass,
                    n = t.assertThisInitialized
            }
                , function(t) {
                    s = t.cclegacy,
                        _ = t.NodeEventType
                }
                , function(t) {
                    a = t.__global
                }
                , function(t) {
                    o = t.AgentNode
                }
                , function(t) {
                    r = t.NodeExtend
                }
                , function(t) {
                    d = t.ToolTipComponent
                }
                , function(t) {
                    h = t.WindowResult
                }
                , function(t) {
                    x = t.CFunction
                }
                , function(t) {
                    u = t.FilterFactory
                }
                , function(t) {
                    c = t.default
                }
                , function(t) {
                    l = t.LangStrings
                }
                , function(t) {
                    p = t.NetActionProxy
                }
                , function(t) {
                    g = t.SpiritBagRefProxy
                }
                , function(t) {
                    f = t.ExpAllocatorDataProxy
                }
                , function(t) {
                    P = t.NetProxy
                }
            ],
            execute: function() {
                s._RF.push({}, "5e6c6jzhVFJm6prXGxKetW+", "ExpAllocatorApp", void 0);
                var E = t("ExpAllocatorApp", function(t) {
                    function s() {
                        var i;
                        return (i = t.call(this) || this)._ui = void 0,
                            i._tickTimer = void 0,
                            i._isAdd = !0,
                            i._netProxy = void 0,
                            i._dataProxy = void 0,
                            i._data = void 0,
                            i._currentPet = void 0,
                            i._lastAddIndex = void 0,
                            i._uiContainer = void 0,
                            i._selectIndex = 0,
                            i._spiritData = void 0,
                            i._spiritIndex = 0,
                            i._addExp = 0,
                            i._netProxy = new P,
                            i._dataProxy = new f,
                            i._ui = new v,
                            i._ui.evolutionIcon.mouseChildren = !1,
                            i._ui.closeBtn.on(_.TOUCH_END, i.onClose, n(i)),
                            i._ui.mc_bar.gotoAndStop(0),
                            i._ui.txtExpPercent.text = "--/--",
                            i._ui.btn_add_1.on(_.TOUCH_END, i.clickUI, n(i)),
                            i._ui.btn_add_5.on(_.TOUCH_END, i.clickUI, n(i)),
                            i._ui.btn_add_10.on(_.TOUCH_END, i.clickUI, n(i)),
                            i._ui.btn_add_max.on(_.TOUCH_END, i.clickUI, n(i)),
                            i.addChild(i._ui.target),
                            i.initFeatureIcons(),
                            i._netProxy.getUIdata(i.getData.bind(n(i))),
                            i
                    }
                    i(s, t);
                    var o = s.prototype;
                    return o.onClose = function(t) {
                        g.spiritBagPanel.goBack()
                    }
                        ,
                        o.setEvolutionIcon = function(t) {
                            if (null != this._ui)
                                if (this._ui.evolutionIcon.visible = null != t,
                                null != t) {
                                    var i = t.evolution;
                                    if (null != t.evolution) {
                                        var e = Number(i.split(" ")[0]);
                                        t.level >= e && (i = e + "级进化成" + i.split(" ")[2])
                                    }
                                    this._ui.evolutionIcon.tooltip = null != i ? i : l.CANT_EVOLVE,
                                        this._ui.evolutionIcon.gotoAndStop(null != t.evolution ? 1 : 2),
                                        this._ui.evolutionIcon.visible = !0
                                } else
                                    this._ui.evolutionIcon.tooltip = null,
                                        this._ui.evolutionIcon.gotoAndStop(2),
                                        this._ui.evolutionIcon.visible = !1
                        }
                        ,
                        o.updateData = function() {
                            this._netProxy.getUIdata(this.getData.bind(this))
                        }
                        ,
                        o.reset = function() {}
                        ,
                        o.dispose = function() {}
                        ,
                        o.show = function() {
                            this._uiContainer.visible = !0,
                                this.visible = !0
                        }
                        ,
                        o.hide = function() {
                            this._uiContainer.visible = !1,
                                this.visible = !1
                        }
                        ,
                        o.setSelectIndex = function(t) {
                            this._selectIndex = t
                        }
                        ,
                        o.allocExpByIndex = function(t) {
                            if (this._selectIndex != t && t >= 0 && t <= 5) {
                                if (this._selectIndex = t,
                                null == this._data)
                                    return;
                                this.setPet(this._data.petInfos[this._selectIndex])
                            }
                        }
                        ,
                        o.addNumChangehandle = function(t) {
                            var i = f.getLvMaxSumExp(this._currentPet.id, 100) - this._currentPet.exp;
                            i = this._data.remainExp < i ? this._data.remainExp : i,
                                Number(this._ui.txt_addExp.text) > i ? this._ui.txt_addExp.text = i.toString() : Number(this._ui.txt_addExp.text) < 0 && (this._ui.txt_addExp.text = "0")
                        }
                        ,
                        o.getData = function(t) {
                            if (a.SysAPI.getUISysAPI().commUIManager.closeMiniLoading(),
                            0 != t.retInfo.retCode)
                                return t && t.retInfo && 0 != t.retInfo.retCode && a.showMsgBox(t.retInfo.retMsg.readMultiByte(t.retInfo.retMsg.length, "gb2312")),
                                    void g.spiritBagPanel.goBack();
                            this.addChild(this._ui.target),
                                this._data = t,
                                this._dataProxy.srData = this._data,
                                this.render(),
                                -1 != this._selectIndex ? this.setPet(this._data.petInfos[this._selectIndex]) : this.setPet(this._data.petInfos[0])
                        }
                        ,
                        o.render = function() {
                            var t;
                            this._ui.txt_todayCanGet.text = this._data.maxDayRemainExp.toString();
                            var i = 1 - this._data.remainExp / 15e6;
                            i = i <= 0 ? 0 : i,
                                this._ui.txtExpPoolPercent.text = this._data.remainExp + "/15000000";
                            for (var e = 0; e < 6; e++)
                                (t = this._data.petInfos[e]) && (f.getPetDes(t.id),
                                    f.getLvMaxSumExp(t.id, t.level))
                        }
                        ,
                        o.setFeatureIcons = function(t) {}
                        ,
                        o.initFeatureIcons = function() {}
                        ,
                        o.setPet = function(t) {
                            if (t) {
                                this._currentPet = t;
                                var i = f.getPetDes(t.id);
                                this._ui.txt_name.text = i.name,
                                    this._ui.txt_lv.text = "Lv." + t.level.toString(),
                                    this._ui.txtExp100.text = this._dataProxy.isButtnCanUse100(this._currentPet) + "",
                                    this._ui.txtExpNext.text = this._dataProxy.isButtnCanUseNext(this._currentPet) + "";
                                f.getUpLvNeedExp(t.id, t.level, t.exp);
                                t.level >= 100 ? this._ui.txtExpPercent.text = "满级宠物不需要再提升等级哦！" : this._ui.txtExpPercent.text = f.getCurrentExpString(this._currentPet.id, this._currentPet.level, this._currentPet.exp),
                                    this._ui.mc_bar.gotoAndStop(f.getExpPrecent(this._currentPet.id, this._currentPet.level, this._currentPet.exp)),
                                    u.setAshingFilter(this._ui.btn_add_1, this._dataProxy.isButtnCanUse(this._currentPet, 1)),
                                    u.setAshingFilter(this._ui.btn_add_5, this._dataProxy.isButtnCanUse(this._currentPet, 5)),
                                    u.setAshingFilter(this._ui.btn_add_10, this._dataProxy.isButtnCanUse(this._currentPet, 10)),
                                    u.setAshingFilter(this._ui.btn_add_max, this._dataProxy.isButtnCanUse(this._currentPet, 100 - this._currentPet.level))
                            } else
                                this._ui.txt_name.text = "",
                                    this._ui.txt_lv.text = "",
                                    u.setAshingFilter(this._ui.btn_add_1, !1),
                                    u.setAshingFilter(this._ui.btn_add_5, !1),
                                    u.setAshingFilter(this._ui.btn_add_10, !1),
                                    u.setAshingFilter(this._ui.btn_add_max, !1),
                                    this._ui.txtExp100.text = "",
                                    this._ui.txtExpNext.text = ""
                        }
                        ,
                        o.tick = function(t) {
                            this._isAdd ? this._ui.txt_addExp.text = (Number(this._ui.txt_addExp.text) + 1).toString() : this._ui.txt_addExp.text = (Number(this._ui.txt_addExp.text) - 1).toString(),
                                Number(this._ui.txt_addExp.text) > this._data.remainExp ? this._ui.txt_addExp.text = this._data.remainExp.toString() : Number(this._ui.txt_addExp.text) < 0 && (this._ui.txt_addExp.text = "0")
                        }
                        ,
                        o.upOutHandle = function(t) {}
                        ,
                        o.overOutHandle = function(t) {}
                        ,
                        o.downHandle = function(t) {}
                        ,
                        o.clickUI = function(t) {
                            switch (t.target) {
                                case this._ui.btn_add_1.target:
                                    if (0 == this._ui.btn_add_1.enableTag)
                                        return;
                                    this.showConfirm(this._dataProxy.getAddExp(this._currentPet, 1));
                                    break;
                                case this._ui.btn_add_5.target:
                                    if (0 == this._ui.btn_add_5.enableTag)
                                        return;
                                    this.showConfirm(this._dataProxy.getAddExp(this._currentPet, 5));
                                    break;
                                case this._ui.btn_add_10.target:
                                    if (0 == this._ui.btn_add_10.enableTag)
                                        return;
                                    this.showConfirm(this._dataProxy.getAddExp(this._currentPet, 10));
                                    break;
                                case this._ui.btn_add_max.target:
                                    if (0 == this._ui.btn_add_max.enableTag)
                                        return;
                                    this.showConfirm(this._dataProxy.getAddExp(this._currentPet, 100 - this._currentPet.level))
                            }
                        }
                        ,
                        o.setSpiritMC = function(t) {}
                        ,
                        o.showConfirm = function(t) {
                            this._spiritIndex = this.index + 1,
                                this._addExp = t,
                            t > this._dataProxy.getAddExp(this._currentPet, 100 - this._currentPet.level) && (t = this._dataProxy.getAddExp(this._currentPet, 100 - this._currentPet.level));
                            var i = this._dataProxy.getAddtoLv(this._currentPet, t)
                                , e = (this._dataProxy.getPetEvolutionDes(this._currentPet.id, i),
                                f.getPetDes(this._currentPet.id),
                            "确定要花费" + t + "点经验值，为" + this._ui.txt_name.text + "升" + (i - this._currentPet.level) + "级吗？");
                            a.showMsgBox(e, 2, new x(this.useExp,this))
                        }
                        ,
                        o.useExp = function(t) {
                            t == h.OK && this._netProxy.useExp(this._spiritIndex, this._addExp, this.useExpCallback.bind(this))
                        }
                        ,
                        o.useExpCallback = function(t) {
                            if (this._netProxy.setWaiting(!1),
                            t && t.retInfo && 0 != t.retInfo.retCode && a.showMsgBox(t.retInfo.retMsg.readMultiByte(t.retInfo.retMsg.length, "gb2312")),
                            0 == t.retInfo.retCode) {
                                this._lastAddIndex = this._spiritIndex,
                                    this._data.remainExp = t.remainExp,
                                    this._data.petInfos = t.petInfos,
                                    this._data.maxDayRemainExp = t.maxDayRemainExp,
                                    this._data.maxTotalRemainExp = t.maxTotalRemainExp;
                                var i = this._lastAddIndex - 1;
                                this.render(),
                                    this.setPet(this._data.petInfos[i]),
                                    p.getSpiritBag()
                            }
                        }
                        ,
                        e(s, [{
                            key: "uiContainer",
                            set: function(t) {
                                this._uiContainer = new I(t),
                                    this._uiContainer.addChild(this)
                            }
                        }, {
                            key: "spiritData",
                            set: function(t) {
                                this._spiritData = t,
                                    this._spiritData ? (0 != this._spiritData.skinID ? this.setSpiritMC(this._spiritData.skinID) : this.setSpiritMC(this._spiritData.id),
                                        this.setFeatureIcons(this._spiritData.features),
                                        this.setEvolutionIcon(this._spiritData)) : (this.setFeatureIcons(null),
                                        this.setEvolutionIcon(null),
                                        this.setSpiritMC(0))
                            }
                        }, {
                            key: "index",
                            get: function() {
                                for (var t = 0; t < this._data.petInfos.length; t++)
                                    if (this._currentPet == this._data.petInfos[t])
                                        return t;
                                return 0
                            }
                        }]),
                        s
                }(r));
                E.SPIRIT_X = 60,
                    E.SPIRIT_Y = 90,
                    E.SPIRIT_SCALE_WIDTH = 1.2,
                    E.SPIRIT_SCALE_HEIGHT = 1.2,
                    E.SPIRIT_SKILL_WIDTH = 30,
                    E.SPIRIT_SKILL_HEIGHT = 30,
                    E.SPIRIT_SKILL_X = 205,
                    E.SPIRIT_SKILL_Y = 18;
                var v = function(t) {
                    function n() {
                        var i;
                        return (i = t.call(this) || this)._closeBtn = void 0,
                            i._evolutionIcon = void 0,
                            i._mc_bar = void 0,
                            i._txtExpPercent = void 0,
                            i._txt_addExp = void 0,
                            i._txtExpPoolPercent = void 0,
                            i._txtExp100 = void 0,
                            i._txtExpNext = void 0,
                            i._txt_todayCanGet = void 0,
                            i._btn_add_1 = void 0,
                            i._btn_add_5 = void 0,
                            i._btn_add_10 = void 0,
                            i._btn_add_max = void 0,
                            i._txt_name = void 0,
                            i._txt_lv = void 0,
                            i._target = c.Instance.getPrefabByName("SpiritBag_1600/UIres_1600"),
                            i
                    }
                    return i(n, t),
                        e(n, [{
                            key: "closeBtn",
                            get: function() {
                                return this._closeBtn || (this._closeBtn = new o(this.getChildByName("closeBtn"))),
                                    this._closeBtn
                            }
                        }, {
                            key: "evolutionIcon",
                            get: function() {
                                return this._evolutionIcon || (this._evolutionIcon = new o(this.getChildByName("evolutionIcon")),
                                    this._evolutionIcon.addComponent(d)),
                                    this._evolutionIcon
                            }
                        }, {
                            key: "mc_bar",
                            get: function() {
                                return this._mc_bar || (this._mc_bar = new o(this.getChildByName("mc_bar"))),
                                    this._mc_bar
                            }
                        }, {
                            key: "txtExpPercent",
                            get: function() {
                                return this._txtExpPercent || (this._txtExpPercent = new o(this.getChildByName("txtExpPercent"))),
                                    this._txtExpPercent
                            }
                        }, {
                            key: "txt_addExp",
                            get: function() {
                                return this._txt_addExp || (this._txt_addExp = new o(this.getChildByName("txt_addExp"))),
                                    this._txt_addExp
                            }
                        }, {
                            key: "txtExpPoolPercent",
                            get: function() {
                                return this._txtExpPoolPercent || (this._txtExpPoolPercent = new o(this.getChildByName("txtExpPoolPercent"))),
                                    this._txtExpPoolPercent
                            }
                        }, {
                            key: "txtExp100",
                            get: function() {
                                return this._txtExp100 || (this._txtExp100 = new o(this.getChildByName("txtExp100"))),
                                    this._txtExp100
                            }
                        }, {
                            key: "txtExpNext",
                            get: function() {
                                return this._txtExpNext || (this._txtExpNext = new o(this.getChildByName("txtExpNext"))),
                                    this._txtExpNext
                            }
                        }, {
                            key: "txt_todayCanGet",
                            get: function() {
                                return this._txt_todayCanGet || (this._txt_todayCanGet = new o(this.getChildByName("txt_todayCanGet"))),
                                    this._txt_todayCanGet
                            }
                        }, {
                            key: "btn_add_1",
                            get: function() {
                                return this._btn_add_1 || (this._btn_add_1 = new o(this.getChildByName("btn_add_1"))),
                                    this._btn_add_1
                            }
                        }, {
                            key: "btn_add_5",
                            get: function() {
                                return this._btn_add_5 || (this._btn_add_5 = new o(this.getChildByName("btn_add_5"))),
                                    this._btn_add_5
                            }
                        }, {
                            key: "btn_add_10",
                            get: function() {
                                return this._btn_add_10 || (this._btn_add_10 = new o(this.getChildByName("btn_add_10"))),
                                    this._btn_add_10
                            }
                        }, {
                            key: "btn_add_max",
                            get: function() {
                                return this._btn_add_max || (this._btn_add_max = new o(this.getChildByName("btn_add_max"))),
                                    this._btn_add_max
                            }
                        }, {
                            key: "txt_name",
                            get: function() {
                                return this._txt_name || (this._txt_name = new o(this.getChildByName("txt_name"))),
                                    this._txt_name
                            }
                        }, {
                            key: "txt_lv",
                            get: function() {
                                return this._txt_lv || (this._txt_lv = new o(this.getChildByName("txt_lv"))),
                                    this._txt_lv
                            }
                        }]),
                        n
                }(o)
                    , I = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    return i(e, t),
                        e
                }(o);
                s._RF.pop()
            }
        }
    }
));
