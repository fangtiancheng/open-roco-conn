System.register("chunks:///_virtual/SpiritPropertiesDetail.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./CFunction.ts", "./BagDataProxy.ts", "./BagFunctionProxy.ts", "./NetActionProxy.ts", "./FilterFactory.ts", "./AgentNode.ts", "./SpiritBagRefProxy.ts", "./WindowResult.ts", "./WindowMode.ts", "./ItemShellDataProxy.ts", "./CellTypes.ts"], (function(t) {
        var e, i, s, n, h, a, r, _, l, d, u, c, o, g, x, v, y, T;
        return {
            setters: [function(t) {
                e = t.createClass,
                    i = t.inheritsLoose
            }
                , function(t) {
                    s = t.cclegacy,
                        n = t.Slider,
                        h = t.NodeEventType,
                        a = t.Button
                }
                , function(t) {
                    r = t.__global
                }
                , function(t) {
                    _ = t.CFunction
                }
                , function(t) {
                    l = t.BagDataProxy
                }
                , function(t) {
                    d = t.BagFunctionProxy
                }
                , function(t) {
                    u = t.NetActionProxy
                }
                , function(t) {
                    c = t.FilterFactory
                }
                , function(t) {
                    o = t.AgentNode
                }
                , function(t) {
                    g = t.SpiritBagRefProxy
                }
                , function(t) {
                    x = t.WindowResult
                }
                , function(t) {
                    v = t.WindowMode
                }
                , function(t) {
                    y = t.ItemShellDataProxy
                }
                , function(t) {
                    T = t.CellTypes
                }
            ],
            execute: function() {
                s._RF.push({}, "59fcbG5uKJHi55rDtzZ0yqM", "SpiritPropertiesDetail", void 0);
                t("SpiritPropertiesDetail", function() {
                    function t(t) {
                        this._ui = void 0,
                            this._explain = void 0,
                            this._vo = void 0,
                            this.SINGEL_MAX = 255,
                            this.ALL_MAX = 510,
                            this._currentAllstrive = void 0,
                            this._surplus = void 0,
                            this._realSurplus = 0,
                            this._ivo = void 0,
                            this._arrName = ["EnergyText", "PhysicalAttackText", "PhysicalDefenseText", "MagicAttackText", "MagicDefenseText", "SpeedText"],
                            this._arrName2 = ["HP", "PA", "PD", "MA", "MD", "SP"],
                            this._curValue = void 0,
                            this._addValue = [0, 0, 0, 0, 0, 0],
                            this._cancelfun = void 0,
                            this._wrongMsg = "",
                            this._ui = new f(t),
                            this._explain = new S(this._ui.explain),
                            this._explain.visible = !1;
                        this._ui.target.addComponent(n);
                        this.data = null,
                            this._ui.closeBtn.on(h.TOUCH_END, this.onClose, this),
                            this._ui.explainBtn.on(h.TOUCH_END, this.onExplain, this),
                            this._ui.saveChangeBtn.on(a.EventType.CLICK, this.saveChange, this),
                            this._ui.forgetBtn.on(a.EventType.CLICK, this.forget, this),
                            this._explain.closeBtn.on(h.TOUCH_END, this.onCloseExplain, this);
                        var e = 0;
                        for (e = 0; e < 6; e++)
                            this._ui["btn_" + e].on(a.EventType.CLICK, this.addStrive, this),
                                this._ui["btnm_" + e].on(a.EventType.CLICK, this.minStrive, this),
                                this._ui["Strive" + this._arrName[e]].maxChars = 3;
                        this._ui.slider0.on("slide", this.onSlider, this),
                            this._ui.slider1.on("slide", this.onSlider, this),
                            this._ui.slider2.on("slide", this.onSlider, this),
                            this._ui.slider3.on("slide", this.onSlider, this),
                            this._ui.slider4.on("slide", this.onSlider, this),
                            this._ui.slider5.on("slide", this.onSlider, this),
                            d.striveChangeFun = new _(this.leaveFun,this)
                    }
                    var i = t.prototype;
                    return i.initUI = function() {}
                        ,
                        i.onSlider = function(t) {
                            var e = Number(t.node.name[t.node.name.length - 1])
                                , i = this._addValue[e]
                                , s = i + this._surplus
                                , n = s / this._realSurplus
                                , h = t.progress;
                            if (h > n && (h = n),
                            s > 0) {
                                var a = Math.ceil(h * this._realSurplus)
                                    , r = a / this._realSurplus;
                                t.progress = r;
                                var _ = a - i;
                                this.updateNewStrive(Number(e), _)
                            } else
                                t.progress = 0
                        }
                        ,
                        i.onExplain = function(t) {
                            this._explain.visible = !0
                        }
                        ,
                        i.onClose = function(t) {
                            g.spiritBagPanel.goBack()
                        }
                        ,
                        i.onCloseExplain = function(t) {
                            this._explain && (this._explain.visible = !1)
                        }
                        ,
                        i.show = function() {
                            this.data = this._vo,
                                this.checkStrive(),
                                this._ui.visible = !0
                        }
                        ,
                        i.hide = function() {
                            this._ui.visible = !1
                        }
                        ,
                        i.showHideHelp = function(t) {}
                        ,
                        i.dispose = function() {
                            this._ui = null,
                                this.data = null
                        }
                        ,
                        i.checkStrive = function() {
                            this._ivo = null;
                            for (var t = 0; t < y.data.length; t++) {
                                var e = y.data[t];
                                e && 17629187 == e.id && (this._ivo = e)
                            }
                        }
                        ,
                        i.addStrive = function(t) {
                            var e = t.node.name.split("_")[1];
                            this.updateNewStrive(Number(e), 1)
                        }
                        ,
                        i.minStrive = function(t) {
                            var e = t.node.name.split("_")[1];
                            this.updateNewStrive(Number(e), -1)
                        }
                        ,
                        i.changeStrive = function(t) {
                            for (var e, i = -1, s = 0; s < this._arrName.length; s++)
                                if (-1 != t.currentTarget.name.indexOf(this._arrName[s])) {
                                    i = s;
                                    break
                                }
                            var n = this._vo["G" + this._arrName2[i]]
                                , h = Number(this._ui.txt_surplus.text);
                            e = Number(t.currentTarget.text) - (this._curValue[i] + this._addValue[i]),
                                t.currentTarget.text = this._curValue[i] + this._addValue[i] + "",
                            e < -this._addValue[i] && (e = -this._addValue[i]),
                            e > h && (e = h),
                            n + this._addValue[i] + e > this.SINGEL_MAX && (e = this.SINGEL_MAX - n - this._addValue[i]),
                            this._currentAllstrive + e > this.ALL_MAX && (e = this.ALL_MAX - this._currentAllstrive),
                                this.updateNewStrive(i, e)
                        }
                        ,
                        i.calculateNewValue = function(t) {
                            var e, i = this._vo["G" + this._arrName2[t]] + this._addValue[t];
                            return e = 0 == t ? this._vo.level * (2 * this._vo["Z" + this._arrName2[t]] + this._vo["T" + this._arrName2[t]] + i / 4) / 100 + this._vo.level + 10 : (this._vo.level * (2 * this._vo["Z" + this._arrName2[t]] + this._vo["T" + this._arrName2[t]] + i / 4) / 100 + 5) * this._vo["X" + this._arrName2[t]],
                                e = Math.floor(e)
                        }
                        ,
                        i.updateNewStrive = function(t, e) {
                            var i = this._ui[this._arrName[t]]
                                , s = this._ui["addStrive" + this._arrName[t]]
                                , n = this._vo["G" + this._arrName2[t]];
                            if (!((n + this._addValue[t] >= this.SINGEL_MAX || this._currentAllstrive >= this.ALL_MAX) && e > 0)) {
                                n + this._addValue[t] + e > this.SINGEL_MAX && (e = this.SINGEL_MAX - n - this._addValue[t]),
                                this._currentAllstrive + e > this.ALL_MAX && (e = this.ALL_MAX - this._currentAllstrive),
                                    this._addValue[t] = this._addValue[t] + e,
                                    this._surplus = this._surplus - e,
                                    this._ui.txt_surplus.text = this._surplus.toString(),
                                    s.text = "+" + this._addValue[t].toString(),
                                    this.updateButtonState(),
                                    l.striveChange = this.isChange(),
                                    i.text = this.calculateNewValue(t) + "";
                                var h = this._addValue[t];
                                this._ui["slider" + t].progress = h / this._realSurplus
                            }
                        }
                        ,
                        i.resetSilder = function() {
                            this._ui.slider0.progress = 0,
                                this._ui.slider1.progress = 0,
                                this._ui.slider2.progress = 0,
                                this._ui.slider3.progress = 0,
                                this._ui.slider4.progress = 0,
                                this._ui.slider5.progress = 0
                        }
                        ,
                        i.updateButtonState = function() {
                            var t, e = 0;
                            for (e = 0; e < 6; e++)
                                t = null != this._vo && this._vo["G" + this._arrName2[e]] + this._addValue[e] < this.SINGEL_MAX && this._surplus > 0 && this._currentAllstrive < this.ALL_MAX,
                                    c.setAshingFilter(this._ui["btn_" + e], t),
                                    c.setAshingFilter(this._ui["btnm_" + e], this._addValue[e] > 0);
                            c.setAshingFilter(this._ui.saveChangeBtn, this.isChange()),
                                c.setAshingFilter(this._ui.forgetBtn, this._currentAllstrive > 0)
                        }
                        ,
                        i.isChange = function() {
                            var t = 0;
                            for (t = 0; t < 6; t++)
                                if (this._addValue[t] > 0)
                                    return !0;
                            return !1
                        }
                        ,
                        i.reset = function() {
                            this.data = this._vo,
                                l.striveChange = !1
                        }
                        ,
                        i.leaveFun = function(t) {}
                        ,
                        i.excuCancelFun = function() {
                            this.reset(),
                                this._cancelfun()
                        }
                        ,
                        i.saveChange = function(t) {
                            0 != this._ui.saveChangeBtn.enableTag && r.showMsgBox("确定要保存修改后的努力值设置吗?", 2, new _(this.okfun,this))
                        }
                        ,
                        i.forget = function(t) {
                            0 != this._ui.forgetBtn.enableTag && (this._ivo || (this._wrongMsg = "没有遗忘果实，无法遗忘已分配努力值！"),
                                "" != this._wrongMsg ? r.showMsgBox(this._wrongMsg, 1, new _((function() {}
                                ))) : 17629187 == this._ivo.id && r.UI.alert("", "确定消耗1个遗忘果实，遗忘【" + this._vo.name + "】已分配的努力值吗？", v.OK_CANCEL, new _(this.onUseItemResult,this)))
                        }
                        ,
                        i.onUseItemResult = function(t) {
                            switch (t) {
                                case x.OK:
                                    u.useItem(this._vo.id, this._vo.index + 1, T.ITEM, this._ivo.id, 1),
                                        r.UI.alert("", "努力值已重置！请点击【培养】重新分配。")
                            }
                        }
                        ,
                        i.okfun = function(t) {
                            if (t == x.OK) {
                                var e = new Object;
                                e.index = this._vo.index + 1,
                                    e.GHP = this._addValue[0],
                                    e.GPA = this._addValue[1],
                                    e.GPD = this._addValue[2],
                                    e.GMA = this._addValue[3],
                                    e.GMD = this._addValue[4],
                                    e.GSP = this._addValue[5],
                                    u.saveStriveAdd(e)
                            }
                        }
                        ,
                        e(t, [{
                            key: "visible",
                            get: function() {
                                return this._ui.visible
                            },
                            set: function(t) {
                                this._ui.visible = t
                            }
                        }, {
                            key: "itemData",
                            set: function(t) {
                                null != this._ui && (this._ivo = t,
                                    this._wrongMsg = "")
                            }
                        }, {
                            key: "spiritData",
                            set: function(t) {
                                this.data = t
                            }
                        }, {
                            key: "data",
                            set: function(t) {
                                null != this._ui && (this._vo = t,
                                    null != t && null != t ? (this.checkStrive(),
                                        this._ui.EnergyText.text = t.baseHP.toString(),
                                        this._ui.SpeedText.text = t.SP.toString(),
                                        this._ui.PhysicalAttackText.text = t.PA.toString(),
                                        this._ui.PhysicalDefenseText.text = t.PD.toString(),
                                        this._ui.MagicAttackText.text = t.MA.toString(),
                                        this._ui.MagicDefenseText.text = t.MD.toString(),
                                        this._ui.StriveEnergyText.text = t.GHP.toString(),
                                        this._ui.StriveSpeedText.text = t.GSP.toString(),
                                        this._ui.StrivePhysicalAttackText.text = t.GPA.toString(),
                                        this._ui.StrivePhysicalDefenseText.text = t.GPD.toString(),
                                        this._ui.StriveMagicAttackText.text = t.GMA.toString(),
                                        this._ui.StriveMagicDefenseText.text = t.GMD.toString(),
                                        this._ui.addStriveEnergyText.text = "+0",
                                        this._ui.addStriveSpeedText.text = "+0",
                                        this._ui.addStrivePhysicalAttackText.text = "+0",
                                        this._ui.addStrivePhysicalDefenseText.text = "+0",
                                        this._ui.addStriveMagicAttackText.text = "+0",
                                        this._ui.addStriveMagicDefenseText.text = "+0",
                                        this._currentAllstrive = t.GHP + t.GMD + t.GMA + t.GPA + t.GPD + t.GSP,
                                        this._surplus = t.surplus,
                                        this._realSurplus = t.surplus,
                                        this._ui.txt_surplus.text = this._surplus.toString(),
                                        this._ui.allEnergyText.text = this._currentAllstrive.toString(),
                                        this._ui.manMC.visible = this._currentAllstrive >= this.ALL_MAX,
                                        this._curValue = [t.GHP, t.GPA, t.GPD, t.GMA, t.GMD, t.GSP],
                                        this._addValue = [0, 0, 0, 0, 0, 0],
                                        l.striveChange = !1,
                                        this.updateButtonState(),
                                        this.resetSilder()) : (this._ui.EnergyText.text = "",
                                        this._ui.SpeedText.text = "",
                                        this._ui.PhysicalAttackText.text = "",
                                        this._ui.PhysicalDefenseText.text = "",
                                        this._ui.MagicAttackText.text = "",
                                        this._ui.MagicDefenseText.text = "",
                                        this._ui.StriveEnergyText.text = "",
                                        this._ui.StriveSpeedText.text = "",
                                        this._ui.StrivePhysicalAttackText.text = "",
                                        this._ui.StrivePhysicalDefenseText.text = "",
                                        this._ui.StriveMagicAttackText.text = "",
                                        this._ui.StriveMagicDefenseText.text = "",
                                        this._ui.addStriveEnergyText.text = "+0",
                                        this._ui.addStriveSpeedText.text = "+0",
                                        this._ui.addStrivePhysicalAttackText.text = "+0",
                                        this._ui.addStrivePhysicalDefenseText.text = "+0",
                                        this._ui.addStriveMagicAttackText.text = "+0",
                                        this._ui.addStriveMagicDefenseText.text = "+0",
                                        this._ui.txt_surplus.text = "",
                                        this._ui.allEnergyText.text = "",
                                        this._ui.manMC.visible = !1,
                                        this.updateButtonState(),
                                        this.resetSilder(),
                                        c.setAshingFilter(this._ui.saveChangeBtn, !1),
                                        c.setAshingFilter(this._ui.forgetBtn, !1)))
                            }
                        }]),
                        t
                }());
                var S = function(t) {
                    function s() {
                        for (var e, i = arguments.length, s = new Array(i), n = 0; n < i; n++)
                            s[n] = arguments[n];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._closeBtn = void 0,
                            e
                    }
                    return i(s, t),
                        e(s, [{
                            key: "closeBtn",
                            get: function() {
                                return this._closeBtn || (this._closeBtn = new o(this.getChildByName("closeBtn"))),
                                    this._closeBtn
                            }
                        }]),
                        s
                }(o)
                    , f = function(t) {
                    function s() {
                        for (var e, i = arguments.length, s = new Array(i), n = 0; n < i; n++)
                            s[n] = arguments[n];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._EnergyText = void 0,
                            e._SpeedText = void 0,
                            e._PhysicalAttackText = void 0,
                            e._PhysicalDefenseText = void 0,
                            e._MagicAttackText = void 0,
                            e._MagicDefenseText = void 0,
                            e._talentedEnergyText = void 0,
                            e._talentedSpeedText = void 0,
                            e._talentedPhysicalAttackText = void 0,
                            e._talentedPhysicalDefenseText = void 0,
                            e._talentedMagicAttackText = void 0,
                            e._talentedMagicDefenseText = void 0,
                            e._StriveEnergyText = void 0,
                            e._StriveSpeedText = void 0,
                            e._StrivePhysicalAttackText = void 0,
                            e._StrivePhysicalDefenseText = void 0,
                            e._StriveMagicAttackText = void 0,
                            e._StriveMagicDefenseText = void 0,
                            e._addStriveEnergyText = void 0,
                            e._addStriveSpeedText = void 0,
                            e._addStrivePhysicalAttackText = void 0,
                            e._addStrivePhysicalDefenseText = void 0,
                            e._addStriveMagicAttackText = void 0,
                            e._addStriveMagicDefenseText = void 0,
                            e._saveChangeBtn = void 0,
                            e._forgetBtn = void 0,
                            e._txt_surplus = void 0,
                            e._allEnergyText = void 0,
                            e._manMC = void 0,
                            e._btnm_0 = void 0,
                            e._btnm_1 = void 0,
                            e._btnm_2 = void 0,
                            e._btnm_3 = void 0,
                            e._btnm_4 = void 0,
                            e._btnm_5 = void 0,
                            e._btn_0 = void 0,
                            e._btn_1 = void 0,
                            e._btn_2 = void 0,
                            e._btn_3 = void 0,
                            e._btn_4 = void 0,
                            e._btn_5 = void 0,
                            e._explain = void 0,
                            e._explainBtn = void 0,
                            e._closeBtn = void 0,
                            e._slider0 = void 0,
                            e._slider1 = void 0,
                            e._slider2 = void 0,
                            e._slider3 = void 0,
                            e._slider4 = void 0,
                            e._slider5 = void 0,
                            e
                    }
                    return i(s, t),
                        e(s, [{
                            key: "EnergyText",
                            get: function() {
                                return this._EnergyText || (this._EnergyText = new o(this.getChildByName("EnergyText"))),
                                    this._EnergyText
                            }
                        }, {
                            key: "SpeedText",
                            get: function() {
                                return this._SpeedText || (this._SpeedText = new o(this.getChildByName("SpeedText"))),
                                    this._SpeedText
                            }
                        }, {
                            key: "PhysicalAttackText",
                            get: function() {
                                return this._PhysicalAttackText || (this._PhysicalAttackText = new o(this.getChildByName("PhysicalAttackText"))),
                                    this._PhysicalAttackText
                            }
                        }, {
                            key: "PhysicalDefenseText",
                            get: function() {
                                return this._PhysicalDefenseText || (this._PhysicalDefenseText = new o(this.getChildByName("PhysicalDefenseText"))),
                                    this._PhysicalDefenseText
                            }
                        }, {
                            key: "MagicAttackText",
                            get: function() {
                                return this._MagicAttackText || (this._MagicAttackText = new o(this.getChildByName("MagicAttackText"))),
                                    this._MagicAttackText
                            }
                        }, {
                            key: "MagicDefenseText",
                            get: function() {
                                return this._MagicDefenseText || (this._MagicDefenseText = new o(this.getChildByName("MagicDefenseText"))),
                                    this._MagicDefenseText
                            }
                        }, {
                            key: "talentedEnergyText",
                            get: function() {
                                return this._talentedEnergyText || (this._talentedEnergyText = new o(this.getChildByName("talentedEnergyText"))),
                                    this._talentedEnergyText
                            }
                        }, {
                            key: "talentedSpeedText",
                            get: function() {
                                return this._talentedSpeedText || (this._talentedSpeedText = new o(this.getChildByName("talentedSpeedText"))),
                                    this._talentedSpeedText
                            }
                        }, {
                            key: "talentedPhysicalAttackText",
                            get: function() {
                                return this._talentedPhysicalAttackText || (this._talentedPhysicalAttackText = new o(this.getChildByName("talentedPhysicalAttackText"))),
                                    this._talentedPhysicalAttackText
                            }
                        }, {
                            key: "talentedPhysicalDefenseText",
                            get: function() {
                                return this._talentedPhysicalDefenseText || (this._talentedPhysicalDefenseText = new o(this.getChildByName("talentedPhysicalDefenseText"))),
                                    this._talentedPhysicalDefenseText
                            }
                        }, {
                            key: "talentedMagicAttackText",
                            get: function() {
                                return this._talentedMagicAttackText || (this._talentedMagicAttackText = new o(this.getChildByName("talentedMagicAttackText"))),
                                    this._talentedMagicAttackText
                            }
                        }, {
                            key: "talentedMagicDefenseText",
                            get: function() {
                                return this._talentedMagicDefenseText || (this._talentedMagicDefenseText = new o(this.getChildByName("talentedMagicDefenseText"))),
                                    this._talentedMagicDefenseText
                            }
                        }, {
                            key: "StriveEnergyText",
                            get: function() {
                                return this._StriveEnergyText || (this._StriveEnergyText = new o(this.getChildByName("StriveEnergyText"))),
                                    this._StriveEnergyText
                            }
                        }, {
                            key: "StriveSpeedText",
                            get: function() {
                                return this._StriveSpeedText || (this._StriveSpeedText = new o(this.getChildByName("StriveSpeedText"))),
                                    this._StriveSpeedText
                            }
                        }, {
                            key: "StrivePhysicalAttackText",
                            get: function() {
                                return this._StrivePhysicalAttackText || (this._StrivePhysicalAttackText = new o(this.getChildByName("StrivePhysicalAttackText"))),
                                    this._StrivePhysicalAttackText
                            }
                        }, {
                            key: "StrivePhysicalDefenseText",
                            get: function() {
                                return this._StrivePhysicalDefenseText || (this._StrivePhysicalDefenseText = new o(this.getChildByName("StrivePhysicalDefenseText"))),
                                    this._StrivePhysicalDefenseText
                            }
                        }, {
                            key: "StriveMagicAttackText",
                            get: function() {
                                return this._StriveMagicAttackText || (this._StriveMagicAttackText = new o(this.getChildByName("StriveMagicAttackText"))),
                                    this._StriveMagicAttackText
                            }
                        }, {
                            key: "StriveMagicDefenseText",
                            get: function() {
                                return this._StriveMagicDefenseText || (this._StriveMagicDefenseText = new o(this.getChildByName("StriveMagicDefenseText"))),
                                    this._StriveMagicDefenseText
                            }
                        }, {
                            key: "addStriveEnergyText",
                            get: function() {
                                return this._addStriveEnergyText || (this._addStriveEnergyText = new o(this.getChildByName("addStriveEnergyText"))),
                                    this._addStriveEnergyText
                            }
                        }, {
                            key: "addStriveSpeedText",
                            get: function() {
                                return this._addStriveSpeedText || (this._addStriveSpeedText = new o(this.getChildByName("addStriveSpeedText"))),
                                    this._addStriveSpeedText
                            }
                        }, {
                            key: "addStrivePhysicalAttackText",
                            get: function() {
                                return this._addStrivePhysicalAttackText || (this._addStrivePhysicalAttackText = new o(this.getChildByName("addStrivePhysicalAttackText"))),
                                    this._addStrivePhysicalAttackText
                            }
                        }, {
                            key: "addStrivePhysicalDefenseText",
                            get: function() {
                                return this._addStrivePhysicalDefenseText || (this._addStrivePhysicalDefenseText = new o(this.getChildByName("addStrivePhysicalDefenseText"))),
                                    this._addStrivePhysicalDefenseText
                            }
                        }, {
                            key: "addStriveMagicAttackText",
                            get: function() {
                                return this._addStriveMagicAttackText || (this._addStriveMagicAttackText = new o(this.getChildByName("addStriveMagicAttackText"))),
                                    this._addStriveMagicAttackText
                            }
                        }, {
                            key: "addStriveMagicDefenseText",
                            get: function() {
                                return this._addStriveMagicDefenseText || (this._addStriveMagicDefenseText = new o(this.getChildByName("addStriveMagicDefenseText"))),
                                    this._addStriveMagicDefenseText
                            }
                        }, {
                            key: "saveChangeBtn",
                            get: function() {
                                return this._saveChangeBtn || (this._saveChangeBtn = new o(this.getChildByName("saveChangeBtn"))),
                                    this._saveChangeBtn
                            }
                        }, {
                            key: "forgetBtn",
                            get: function() {
                                return this._forgetBtn || (this._forgetBtn = new o(this.getChildByName("forgetBtn"))),
                                    this._forgetBtn
                            }
                        }, {
                            key: "txt_surplus",
                            get: function() {
                                return this._txt_surplus || (this._txt_surplus = new o(this.getChildByName("txt_surplus"))),
                                    this._txt_surplus
                            }
                        }, {
                            key: "allEnergyText",
                            get: function() {
                                return this._allEnergyText || (this._allEnergyText = new o(this.getChildByName("allEnergyText"))),
                                    this._allEnergyText
                            }
                        }, {
                            key: "manMC",
                            get: function() {
                                return this._manMC || (this._manMC = new o(this.getChildByName("manMC"))),
                                    this._manMC
                            }
                        }, {
                            key: "btnm_0",
                            get: function() {
                                return this._btnm_0 || (this._btnm_0 = new o(this.getChildByName("btnm_0"))),
                                    this._btnm_0
                            }
                        }, {
                            key: "btnm_1",
                            get: function() {
                                return this._btnm_1 || (this._btnm_1 = new o(this.getChildByName("btnm_1"))),
                                    this._btnm_1
                            }
                        }, {
                            key: "btnm_2",
                            get: function() {
                                return this._btnm_2 || (this._btnm_2 = new o(this.getChildByName("btnm_2"))),
                                    this._btnm_2
                            }
                        }, {
                            key: "btnm_3",
                            get: function() {
                                return this._btnm_3 || (this._btnm_3 = new o(this.getChildByName("btnm_3"))),
                                    this._btnm_3
                            }
                        }, {
                            key: "btnm_4",
                            get: function() {
                                return this._btnm_4 || (this._btnm_4 = new o(this.getChildByName("btnm_4"))),
                                    this._btnm_4
                            }
                        }, {
                            key: "btnm_5",
                            get: function() {
                                return this._btnm_5 || (this._btnm_5 = new o(this.getChildByName("btnm_5"))),
                                    this._btnm_5
                            }
                        }, {
                            key: "btn_0",
                            get: function() {
                                return this._btn_0 || (this._btn_0 = new o(this.getChildByName("btn_0"))),
                                    this._btn_0
                            }
                        }, {
                            key: "btn_1",
                            get: function() {
                                return this._btn_1 || (this._btn_1 = new o(this.getChildByName("btn_1"))),
                                    this._btn_1
                            }
                        }, {
                            key: "btn_2",
                            get: function() {
                                return this._btn_2 || (this._btn_2 = new o(this.getChildByName("btn_2"))),
                                    this._btn_2
                            }
                        }, {
                            key: "btn_3",
                            get: function() {
                                return this._btn_3 || (this._btn_3 = new o(this.getChildByName("btn_3"))),
                                    this._btn_3
                            }
                        }, {
                            key: "btn_4",
                            get: function() {
                                return this._btn_4 || (this._btn_4 = new o(this.getChildByName("btn_4"))),
                                    this._btn_4
                            }
                        }, {
                            key: "btn_5",
                            get: function() {
                                return this._btn_5 || (this._btn_5 = new o(this.getChildByName("btn_5"))),
                                    this._btn_5
                            }
                        }, {
                            key: "explain",
                            get: function() {
                                return this._explain || (this._explain = this.getChildByName("explain")),
                                    this._explain
                            }
                        }, {
                            key: "explainBtn",
                            get: function() {
                                return this._explainBtn || (this._explainBtn = new o(this.getChildByName("explainBtn"))),
                                    this._explainBtn
                            }
                        }, {
                            key: "closeBtn",
                            get: function() {
                                return this._closeBtn || (this._closeBtn = new o(this.getChildByName("closeBtn"))),
                                    this._closeBtn
                            }
                        }, {
                            key: "slider0",
                            get: function() {
                                return this._slider0 || (this._slider0 = new o(this.getChildByName("slider0"))),
                                    this._slider0
                            }
                        }, {
                            key: "slider1",
                            get: function() {
                                return this._slider1 || (this._slider1 = new o(this.getChildByName("slider1"))),
                                    this._slider1
                            }
                        }, {
                            key: "slider2",
                            get: function() {
                                return this._slider2 || (this._slider2 = new o(this.getChildByName("slider2"))),
                                    this._slider2
                            }
                        }, {
                            key: "slider3",
                            get: function() {
                                return this._slider3 || (this._slider3 = new o(this.getChildByName("slider3"))),
                                    this._slider3
                            }
                        }, {
                            key: "slider4",
                            get: function() {
                                return this._slider4 || (this._slider4 = new o(this.getChildByName("slider4"))),
                                    this._slider4
                            }
                        }, {
                            key: "slider5",
                            get: function() {
                                return this._slider5 || (this._slider5 = new o(this.getChildByName("slider5"))),
                                    this._slider5
                            }
                        }]),
                        s
                }(o);
                s._RF.pop()
            }
        }
    }
));
