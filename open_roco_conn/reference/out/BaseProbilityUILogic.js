System.register("chunks:///_virtual/BaseProbilityUILogic.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./global.ts", "./PropertyDes.ts", "./EquipmentType.ts", "./SpiritEquipInfoProxy.ts", "./NetManager.ts", "./AgentNode.ts", "./EquipmentIcon.ts", "./GetEquipmentBagRsp.ts", "./EquipIconTipsWithSpiritBag.ts", "./EquipIconCompareTipsWithSpiritBag.ts"], (function(t) {
        var i, e, r, n, s, u, h, o, a, c, p, _, T, l, x, m, S, g;
        return {
            setters: [function(t) {
                i = t.createClass,
                    e = t.inheritsLoose
            }
                , function(t) {
                    r = t.cclegacy,
                        n = t.NodeEventType,
                        s = t.Vec2,
                        u = t.UITransform,
                        h = t.view
                }
                , function(t) {
                    o = t.Constants
                }
                , function(t) {
                    a = t.__global
                }
                , function(t) {
                    c = t.PropertyDes
                }
                , function(t) {
                    p = t.EquipmentType
                }
                , function(t) {
                    _ = t.SpiritEquipInfoProxy
                }
                , function(t) {
                    T = t.NetManager
                }
                , function(t) {
                    l = t.AgentNode
                }
                , function(t) {
                    x = t.EquipmentIcon
                }
                , function(t) {
                    m = t.GetEquipmentBagRsp
                }
                , function(t) {
                    S = t.EquipIconTipsWithSpiritBag
                }
                , function(t) {
                    g = t.EquipIconCompareTipsWithSpiritBag
                }
            ],
            execute: function() {
                r._RF.push({}, "69e9cWutuZA/Zd6vfDU21I4", "BaseProbilityUILogic", void 0);
                t("BaseProbilityUILogic", function() {
                    function t(t) {
                        this._ui = void 0,
                            this._curClickItem = void 0,
                            this._curSpiritData = void 0,
                            this._curSpiritEquipData = void 0,
                            this._curItemTooltips = void 0,
                            this._compareTooltips = void 0,
                            this._itemData = void 0,
                            this._curEqIcon0 = void 0,
                            this._curEqIcon1 = void 0,
                            this._curEqIcon2 = void 0,
                            this._ui = new d(t),
                            this._curItemTooltips = new S,
                            this._compareTooltips = new g
                    }
                    var e = t.prototype;
                    return e.dispose = function() {
                        this.cleanResData()
                    }
                        ,
                        e.reset = function() {}
                        ,
                        e.resetCurSpirit = function() {
                            var t;
                            this._ui.hpText.text = "",
                                this._ui.paText.text = "",
                                this._ui.pdText.text = "",
                                this._ui.maText.text = "",
                                this._ui.mdText.text = "",
                                this._ui.spText.text = "",
                                this._ui.hitText.text = "",
                                this._ui.dodgeText.text = "",
                                this._ui.critText.text = "";
                            for (var i = 0; i < c.EQUIPMENT_TYPE.length; i++)
                                (t = this["_curEqIcon" + i]) && (t.off(n.TOUCH_END, this.curItemClcikHandler, this),
                                    t.off(n.MOUSE_ENTER, this.curItemOverHandler, this),
                                    t.off(n.MOUSE_LEAVE, this.curItemOutHandler, this),
                                    t.dispose(),
                                    this._ui["equip" + i].hasOwnProperty("iconContainer") ? this._ui["equip" + i].iconContainer.contains(t) && this._ui["equip" + i].iconContainer.removeChild(t) : this._ui["equip" + i].contains(t) && this._ui["equip" + i].removeChild(t)),
                                    this["_curEqIcon" + i] = null;
                            this._curSpiritData = null,
                                this._curSpiritEquipData = null
                        }
                        ,
                        e.cleanResData = function() {
                            this.resetCurSpirit(),
                                this._itemData = null,
                                this._curClickItem = null
                        }
                        ,
                        e.showSpiritEquitment = function() {
                            if (null != this._curSpiritData)
                                if (null != this._itemData) {
                                    var t;
                                    this._curSpiritEquipData = this._itemData.selectBySpiritData(this._curSpiritData.id, this._curSpiritData.caughtTime);
                                    for (var i = [], e = 1; e <= c.EQUIPMENT_PROPETY.length; e++) {
                                        i.push(0);
                                        for (var r = 0; r < this._curSpiritEquipData.length; r++)
                                            e == (t = this._curSpiritEquipData[r]).baseAttr && (i[e - 1] += t.baseValue),
                                            e == t.specialAttr && (i[e - 1] += t.specialValue)
                                    }
                                    i[0] > 0 ? this._ui.paText.htmlText = this._curSpiritData.PA.toString() + "<font color='#339900'>+" + i[0] + "</font>" : this._ui.paText.htmlText = this._curSpiritData.PA.toString(),
                                        i[1] > 0 ? this._ui.pdText.htmlText = this._curSpiritData.PD.toString() + "<font color='#339900'>+" + i[1] + "</font>" : this._ui.pdText.htmlText = this._curSpiritData.PD.toString(),
                                        i[2] > 0 ? this._ui.maText.htmlText = this._curSpiritData.MA.toString() + "<font color='#339900'>+" + i[2] + "</font>" : this._ui.maText.htmlText = this._curSpiritData.MA.toString(),
                                        i[3] > 0 ? this._ui.mdText.htmlText = this._curSpiritData.MD.toString() + "<font color='#339900'>+" + i[3] + "</font>" : this._ui.mdText.htmlText = this._curSpiritData.MD.toString(),
                                        i[4] > 0 ? this._ui.spText.htmlText = this._curSpiritData.SP.toString() + "<font color='#339900'>+" + i[4] + "</font>" : this._ui.spText.htmlText = this._curSpiritData.SP.toString(),
                                        i[5] > 0 ? this._ui.hpText.htmlText = this._curSpiritData.baseHP.toString() + "<font color='#339900'>+" + i[5] + "</font>" : this._ui.hpText.htmlText = this._curSpiritData.baseHP.toString(),
                                        i[6] > 0 ? this._ui.hitText.htmlText = this._curSpiritData.HIT.toString() + "<font color='#339900'>+" + i[6] + "</font>" : this._ui.hitText.htmlText = this._curSpiritData.HIT.toString(),
                                        i[7] > 0 ? this._ui.dodgeText.htmlText = this._curSpiritData.DODGE.toString() + "<font color='#339900'>+" + i[7] + "</font>" : this._ui.dodgeText.htmlText = this._curSpiritData.DODGE.toString(),
                                        i[8] > 0 ? this._ui.critText.htmlText = this._curSpiritData.CRIT.toString() + "<font color='#339900'>+" + i[8] + "</font>" : this._ui.critText.htmlText = this._curSpiritData.CRIT.toString()
                                } else
                                    this._ui.paText.htmlText = this._curSpiritData.PA.toString(),
                                        this._ui.pdText.htmlText = this._curSpiritData.PD.toString(),
                                        this._ui.maText.htmlText = this._curSpiritData.MA.toString(),
                                        this._ui.mdText.htmlText = this._curSpiritData.MD.toString(),
                                        this._ui.hpText.htmlText = this._curSpiritData.baseHP.toString(),
                                        this._ui.spText.htmlText = this._curSpiritData.SP.toString(),
                                        this._ui.hitText.htmlText = this._curSpiritData.HIT.toString(),
                                        this._ui.dodgeText.htmlText = this._curSpiritData.DODGE.toString(),
                                        this._ui.critText.htmlText = this._curSpiritData.CRIT.toString();
                            this.setCurEquipmentIconByType(p.WEAPON_TYPE),
                                this.setCurEquipmentIconByType(p.ARMOR_TYPE),
                                this.setCurEquipmentIconByType(p.JEWELRY_TYPE)
                        }
                        ,
                        e.setCurEquipmentIconByType = function(t) {
                            var i, e = this["_curEqIcon" + t];
                            null == (i = this.getCurSpiritEquipmentByType(t)) ? (this._ui["equip" + t].mouseChildren = !1,
                            null != e && e.update(null)) : (this._ui["equip" + t].mouseChildren = !0,
                                this._ui["equip" + t].tooltip = null,
                                null == e ? (this["_curEqIcon" + t] = new x(i,this._ui["equip" + t],this._ui["equip" + t].width,this._ui["equip" + t].height),
                                    (e = this["_curEqIcon" + t]).on(n.TOUCH_END, this.curItemClcikHandler, this),
                                    e.on(n.MOUSE_ENTER, this.curItemOverHandler, this),
                                    e.on(n.MOUSE_LEAVE, this.curItemOutHandler, this)) : e.update(i))
                        }
                        ,
                        e.getCurSpiritEquipmentByType = function(t) {
                            if (null == this._itemData)
                                return null;
                            if (null == this._curSpiritEquipData)
                                return null;
                            for (var i, e = 0; e < this._curSpiritEquipData.length; e++)
                                if ((i = this._curSpiritEquipData[e]).type == t)
                                    return i;
                            return null
                        }
                        ,
                        e.getItemData = function() {
                            var t = this;
                            null == this._itemData && (a.UI.createMiniLoading(),
                                T.send(721028, null, m, (function(i) {
                                        if (a.UI.closeMiniLoading(),
                                        0 != i.retInfo.retCode) {
                                            var e = i.retInfo.retMsg.readMultiByte(i.retInfo.retMsg.length, "gb2312");
                                            return a.showMsgBox(e),
                                                void (t._itemData = new _(0,null))
                                        }
                                        0 != i.equipmentCount ? (a.SysAPI.getGDataAPI().addDataProxy(new _(i.equipmentCount,i.equipmentInfo)),
                                            t._itemData = a.SysAPI.getGDataAPI().getDataProxy(o.SEQUIP_INFO_DATA),
                                            t._itemData.list.sort((function(t, i) {
                                                    var e = t.selectValue;
                                                    return i.selectValue - e
                                                }
                                            )),
                                            t.showEquipment()) : t._itemData = new _(0,null)
                                    }
                                )))
                        }
                        ,
                        e.showEquipment = function() {
                            this.showSpiritEquitment()
                        }
                        ,
                        e.curItemClcikHandler = function(t) {
                            this._curClickItem = t.currentTarget
                        }
                        ,
                        e.curItemOverHandler = function(t) {
                            var i = t.currentTarget
                                , e = new s(0,Math.ceil(i.getComponent(u).height / 2))
                                , r = i.getWorldPosition();
                            e.x += r.x,
                                e.y += r.y,
                                e.x -= h.getVisibleSize().width / 2,
                                e.y -= h.getVisibleSize().height / 2,
                                e.x += -50,
                                e.y += 20,
                                this._curItemTooltips.show(e.x, e.y, i.data)
                        }
                        ,
                        e.curItemOutHandler = function(t) {
                            this._curItemTooltips.hide()
                        }
                        ,
                        i(t, [{
                            key: "spiritData",
                            set: function(t) {
                                null != t ? (this._curSpiritData = t,
                                    this._ui.hpText.htmlText = this._curSpiritData.baseHP.toString(),
                                    this._ui.paText.htmlText = this._curSpiritData.PA.toString(),
                                    this._ui.pdText.htmlText = this._curSpiritData.PD.toString(),
                                    this._ui.maText.htmlText = this._curSpiritData.MA.toString(),
                                    this._ui.mdText.htmlText = this._curSpiritData.MD.toString(),
                                    this._ui.spText.htmlText = this._curSpiritData.SP.toString(),
                                    this._ui.hitText.htmlText = this._curSpiritData.HIT.toString(),
                                    this._ui.dodgeText.htmlText = this._curSpiritData.DODGE.toString(),
                                    this._ui.critText.htmlText = this._curSpiritData.CRIT.toString(),
                                    this.showSpiritEquitment()) : this.resetCurSpirit()
                            }
                        }, {
                            key: "visible",
                            get: function() {
                                return this._ui.visible
                            },
                            set: function(t) {
                                this._ui.visible = t
                            }
                        }]),
                        t
                }());
                var d = function(t) {
                    function r() {
                        for (var i, e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                            r[n] = arguments[n];
                        return (i = t.call.apply(t, [this].concat(r)) || this)._hpText = void 0,
                            i._paText = void 0,
                            i._pdText = void 0,
                            i._maText = void 0,
                            i._mdText = void 0,
                            i._spText = void 0,
                            i._hitText = void 0,
                            i._dodgeText = void 0,
                            i._critText = void 0,
                            i
                    }
                    return e(r, t),
                        i(r, [{
                            key: "hpText",
                            get: function() {
                                return this._hpText || (this._hpText = new l(this.getChildByName("hpText"))),
                                    this._hpText
                            }
                        }, {
                            key: "paText",
                            get: function() {
                                return this._paText || (this._paText = new l(this.getChildByName("paText"))),
                                    this._paText
                            }
                        }, {
                            key: "pdText",
                            get: function() {
                                return this._pdText || (this._pdText = new l(this.getChildByName("pdText"))),
                                    this._pdText
                            }
                        }, {
                            key: "maText",
                            get: function() {
                                return this._maText || (this._maText = new l(this.getChildByName("maText"))),
                                    this._maText
                            }
                        }, {
                            key: "mdText",
                            get: function() {
                                return this._mdText || (this._mdText = new l(this.getChildByName("mdText"))),
                                    this._mdText
                            }
                        }, {
                            key: "spText",
                            get: function() {
                                return this._spText || (this._spText = new l(this.getChildByName("spText"))),
                                    this._spText
                            }
                        }, {
                            key: "hitText",
                            get: function() {
                                return this._hitText || (this._hitText = new l(this.getChildByName("hitText"))),
                                    this._hitText
                            }
                        }, {
                            key: "dodgeText",
                            get: function() {
                                return this._dodgeText || (this._dodgeText = new l(this.getChildByName("dodgeText"))),
                                    this._dodgeText
                            }
                        }, {
                            key: "critText",
                            get: function() {
                                return this._critText || (this._critText = new l(this.getChildByName("critText"))),
                                    this._critText
                            }
                        }]),
                        r
                }(l);
                r._RF.pop()
            }
        }
    }
));
