System.register("chunks:///_virtual/UseStriveUIDetail.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./AgentNode.ts", "./NumberStepper.ts", "./TooltipIcon.ts", "./WindowResult.ts", "./CellTypes.ts", "./NetActionProxy.ts", "./WindowMode.ts", "./CFunction.ts", "./LangStrings.ts", "./LangUtils.ts", "./StriveItemDataProxy.ts"], (function(t) {
        var e, i, s, n, _, h, r, a, u, c, o, l, x, g, v, m;
        return {
            setters: [function(t) {
                e = t.createClass,
                    i = t.inheritsLoose
            }
                , function(t) {
                    s = t.cclegacy,
                        n = t.NodeEventType
                }
                , function(t) {
                    _ = t.__global
                }
                , function(t) {
                    h = t.AgentNode
                }
                , function(t) {
                    r = t.NumberStepper
                }
                , function(t) {
                    a = t.TooltipIcon
                }
                , function(t) {
                    u = t.WindowResult
                }
                , function(t) {
                    c = t.CellTypes
                }
                , function(t) {
                    o = t.NetActionProxy
                }
                , function(t) {
                    l = t.WindowMode
                }
                , function(t) {
                    x = t.CFunction
                }
                , function(t) {
                    g = t.LangStrings
                }
                , function(t) {
                    v = t.LangUtils
                }
                , function(t) {
                    m = t.StriveItemDataProxy
                }
            ],
            execute: function() {
                s._RF.push({}, "2841adTKr1IZYGMAwW96qvS", "UseStriveUIDetail", void 0);
                t("UseStriveUIDetail", function() {
                    function t(t) {
                        this._ui = void 0,
                            this._svo = void 0,
                            this._ivo = void 0,
                            this.SINGEL_MAX = 255,
                            this.ALL_MAX = 510,
                            this.CLEAN_ITEM = 1,
                            this.ADD_TEME = 2,
                            this._currentAllstrive = void 0,
                            this._numberStepper = void 0,
                            this._aimage = void 0,
                            this._arrName = ["EnergyText", "PhysicalAttackText", "PhysicalDefenseText", "MagicAttackText", "MagicDefenseText", "SpeedText"],
                            this._arrName2 = ["HP", "PA", "PD", "MA", "MD", "SP"],
                            this._addValue = [0, 0, 0, 0, 0, 0],
                            this._wrongMsg = "",
                            this._addStriveItemData = void 0,
                            this._ui = new p(t),
                            this._ui.btn_ok.on(n.TOUCH_END, this.okUse, this),
                            this._ui.btn_close.on(n.TOUCH_END, this.close, this),
                            this._aimage = new a,
                            this._aimage.x = 170,
                            this._aimage.y = 124,
                            this._aimage.scaleX = 1.5,
                            this._aimage.scaleY = 1.5,
                            this._ui.addChild(this._aimage),
                            this._numberStepper = new r(this._ui.stepperUI)
                    }
                    var i = t.prototype;
                    return i.updateUseNum = function(t) {
                        this._numberStepper.updateUseNum(t)
                    }
                        ,
                        i.dispose = function() {
                            this._ui = null,
                                this._svo = null,
                                this._ivo = null
                        }
                        ,
                        i.reset = function() {
                            this._wrongMsg = "",
                                this._svo = null,
                                this._ivo = null
                        }
                        ,
                        i.okUse = function(t) {
                            var e = this;
                            this._ivo.count <= 0 && (this._wrongMsg = g.NOT_MORE_ITEM),
                                "" != this._wrongMsg ? _.showMsgBox(this._wrongMsg, 1, new x((function() {
                                        e._ui.visible = !1
                                    }
                                ),this)) : 17629187 == this._ivo.id ? _.UI.alert("", "<color=#7d7d7d>确定要遗忘【<color=#FF0000>" + this._svo.name + "</color>】的努力值吗？\n已分配努力值超过50时会损失10% 哦。</color>", l.OK_CANCEL, new x(this.onUseItemResult,this)) : o.useItem(this._svo.id, this._svo.index + 1, c.ITEM, this._ivo.id, this._numberStepper.value)
                        }
                        ,
                        i.onUseItemResult = function(t) {
                            switch (t) {
                                case u.OK:
                                    o.useItem(this._svo.id, this._svo.index + 1, c.ITEM, this._ivo.id, this._numberStepper.value),
                                        _.UI.alert("", "努力值已重置！请点击【培养】重新分配。")
                            }
                        }
                        ,
                        i.showAnimation = function() {
                            for (var t = 0; t < this._arrName2.length; t++)
                                this._addStriveItemData["G" + this._arrName2[t]]
                        }
                        ,
                        i.close = function(t) {
                            this._ui.visible = !1
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
                            key: "spiritData",
                            set: function(t) {
                                null != this._ui && (this._svo = t,
                                    null != t ? (this._ui.EnergyText.text = t.baseHP.toString(),
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
                                        this._currentAllstrive = t.GHP + t.GMD + t.GMA + t.GPA + t.GPD,
                                        this._ui.txt_surplus.text = t.surplus.toString(),
                                        this._addValue = [0, 0, 0, 0, 0, 0]) : (this._ui.EnergyText.text = "",
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
                                        this._ui.StriveMagicDefenseText.text = ""))
                            }
                        }, {
                            key: "itemData",
                            set: function(t) {
                                if (null != this._ui)
                                    if (this._ivo = t,
                                        this._wrongMsg = "",
                                    null != t) {
                                        this._ui.visible = !0,
                                            this._ui.txt_surplusItem.text = t.count.toString(),
                                            this._numberStepper.value = 1,
                                            17629187 == t.id ? this._numberStepper.maxNum = 1 : this._numberStepper.maxNum = t.count,
                                            this._ui.txt_itemName.text = t.itemDes.name,
                                            this._aimage.setPath(t.itemDes.url);
                                        var e = "";
                                        if (this._addStriveItemData = m.getInstance().makeStriveItem(t.id),
                                        this._addStriveItemData.type == this.CLEAN_ITEM)
                                            this._svo.GHP + this._svo.GMA + this._svo.GMD + this._svo.GPA + this._svo.GPD + this._svo.GSP == 0 && (this._wrongMsg = g.CAN_NOT_CLEAN_STRIVE),
                                                this._aimage.tooltip = this._ivo.itemDes.description,
                                                this._ui.visible = !1,
                                                this.okUse(null);
                                        else {
                                            for (var i = 0; i < this._arrName2.length; i++)
                                                if (0 != this._addStriveItemData["G" + this._arrName2[i]]) {
                                                    var s = [];
                                                    s.push(g[this._arrName2[i]]),
                                                        s.push(this._addStriveItemData["G" + this._arrName2[i]]),
                                                        e += v.translate(g.STRIVE_ADD_TIP, s),
                                                        e += "\n",
                                                    this._svo["G" + this._arrName2[i]] >= this.SINGEL_MAX && ((s = []).push(g[this._arrName2[i]]),
                                                        this._wrongMsg = v.translate(g.ADD_STRIVE_SINGEL_FULL, s))
                                                }
                                            this._currentAllstrive + this._svo.surplus >= this.ALL_MAX && (this._wrongMsg = g.ADD_STRIVE_ALL_FULL,
                                                this._ui.visible = !1,
                                                this.okUse(null)),
                                                this._aimage.tooltip = e
                                        }
                                    } else
                                        this._ui.txt_surplusItem.text = "",
                                            this._ui.txt_itemName.text = ""
                            }
                        }]),
                        t
                }());
                var p = function(t) {
                    function s() {
                        for (var e, i = arguments.length, s = new Array(i), n = 0; n < i; n++)
                            s[n] = arguments[n];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._btn_ok = void 0,
                            e._btn_close = void 0,
                            e._stepperUI = void 0,
                            e._EnergyText = void 0,
                            e._SpeedText = void 0,
                            e._PhysicalAttackText = void 0,
                            e._PhysicalDefenseText = void 0,
                            e._MagicAttackText = void 0,
                            e._MagicDefenseText = void 0,
                            e._StriveEnergyText = void 0,
                            e._StriveSpeedText = void 0,
                            e._StrivePhysicalAttackText = void 0,
                            e._StrivePhysicalDefenseText = void 0,
                            e._StriveMagicAttackText = void 0,
                            e._StriveMagicDefenseText = void 0,
                            e._txt_surplus = void 0,
                            e._txt_surplusItem = void 0,
                            e._txt_itemName = void 0,
                            e._mc_upHP = void 0,
                            e._mc_upPA = void 0,
                            e._mc_upPD = void 0,
                            e._mc_upMA = void 0,
                            e._mc_upMD = void 0,
                            e._mc_upSP = void 0,
                            e
                    }
                    return i(s, t),
                        e(s, [{
                            key: "btn_ok",
                            get: function() {
                                return this._btn_ok || (this._btn_ok = new h(this.getChildByName("btn_ok"))),
                                    this._btn_ok
                            }
                        }, {
                            key: "btn_close",
                            get: function() {
                                return this._btn_close || (this._btn_close = new h(this.getChildByName("btn_close"))),
                                    this._btn_close
                            }
                        }, {
                            key: "stepperUI",
                            get: function() {
                                return this._stepperUI || (this._stepperUI = this.getChildByName("stepperUI")),
                                    this._stepperUI
                            }
                        }, {
                            key: "EnergyText",
                            get: function() {
                                return this._EnergyText || (this._EnergyText = new h(this.getChildByName("EnergyText"))),
                                    this._EnergyText
                            }
                        }, {
                            key: "SpeedText",
                            get: function() {
                                return this._SpeedText || (this._SpeedText = new h(this.getChildByName("SpeedText"))),
                                    this._SpeedText
                            }
                        }, {
                            key: "PhysicalAttackText",
                            get: function() {
                                return this._PhysicalAttackText || (this._PhysicalAttackText = new h(this.getChildByName("PhysicalAttackText"))),
                                    this._PhysicalAttackText
                            }
                        }, {
                            key: "PhysicalDefenseText",
                            get: function() {
                                return this._PhysicalDefenseText || (this._PhysicalDefenseText = new h(this.getChildByName("PhysicalDefenseText"))),
                                    this._PhysicalDefenseText
                            }
                        }, {
                            key: "MagicAttackText",
                            get: function() {
                                return this._MagicAttackText || (this._MagicAttackText = new h(this.getChildByName("MagicAttackText"))),
                                    this._MagicAttackText
                            }
                        }, {
                            key: "MagicDefenseText",
                            get: function() {
                                return this._MagicDefenseText || (this._MagicDefenseText = new h(this.getChildByName("MagicDefenseText"))),
                                    this._MagicDefenseText
                            }
                        }, {
                            key: "StriveEnergyText",
                            get: function() {
                                return this._StriveEnergyText || (this._StriveEnergyText = new h(this.getChildByName("StriveEnergyText"))),
                                    this._StriveEnergyText
                            }
                        }, {
                            key: "StriveSpeedText",
                            get: function() {
                                return this._StriveSpeedText || (this._StriveSpeedText = new h(this.getChildByName("StriveSpeedText"))),
                                    this._StriveSpeedText
                            }
                        }, {
                            key: "StrivePhysicalAttackText",
                            get: function() {
                                return this._StrivePhysicalAttackText || (this._StrivePhysicalAttackText = new h(this.getChildByName("StrivePhysicalAttackText"))),
                                    this._StrivePhysicalAttackText
                            }
                        }, {
                            key: "StrivePhysicalDefenseText",
                            get: function() {
                                return this._StrivePhysicalDefenseText || (this._StrivePhysicalDefenseText = new h(this.getChildByName("StrivePhysicalDefenseText"))),
                                    this._StrivePhysicalDefenseText
                            }
                        }, {
                            key: "StriveMagicAttackText",
                            get: function() {
                                return this._StriveMagicAttackText || (this._StriveMagicAttackText = new h(this.getChildByName("StriveMagicAttackText"))),
                                    this._StriveMagicAttackText
                            }
                        }, {
                            key: "StriveMagicDefenseText",
                            get: function() {
                                return this._StriveMagicDefenseText || (this._StriveMagicDefenseText = new h(this.getChildByName("StriveMagicDefenseText"))),
                                    this._StriveMagicDefenseText
                            }
                        }, {
                            key: "txt_surplus",
                            get: function() {
                                return this._txt_surplus || (this._txt_surplus = new h(this.getChildByName("txt_surplus"))),
                                    this._txt_surplus
                            }
                        }, {
                            key: "txt_surplusItem",
                            get: function() {
                                return this._txt_surplusItem || (this._txt_surplusItem = new h(this.getChildByName("txt_surplusItem"))),
                                    this._txt_surplusItem
                            }
                        }, {
                            key: "txt_itemName",
                            get: function() {
                                return this._txt_itemName || (this._txt_itemName = new h(this.getChildByName("txt_itemName"))),
                                    this._txt_itemName
                            }
                        }, {
                            key: "mc_upHP",
                            get: function() {
                                return this._mc_upHP || (this._mc_upHP = new h(this.getChildByName("mc_upHP"))),
                                    this._mc_upHP
                            }
                        }, {
                            key: "mc_upPA",
                            get: function() {
                                return this._mc_upPA || (this._mc_upPA = new h(this.getChildByName("mc_upPA"))),
                                    this._mc_upPA
                            }
                        }, {
                            key: "mc_upPD",
                            get: function() {
                                return this._mc_upPD || (this._mc_upPD = new h(this.getChildByName("mc_upPD"))),
                                    this._mc_upPD
                            }
                        }, {
                            key: "mc_upMA",
                            get: function() {
                                return this._mc_upMA || (this._mc_upMA = new h(this.getChildByName("mc_upMA"))),
                                    this._mc_upMA
                            }
                        }, {
                            key: "mc_upMD",
                            get: function() {
                                return this._mc_upMD || (this._mc_upMD = new h(this.getChildByName("mc_upMD"))),
                                    this._mc_upMD
                            }
                        }, {
                            key: "mc_upSP",
                            get: function() {
                                return this._mc_upSP || (this._mc_upSP = new h(this.getChildByName("mc_upSP"))),
                                    this._mc_upSP
                            }
                        }]),
                        s
                }(h);
                s._RF.pop()
            }
        }
    }
));
