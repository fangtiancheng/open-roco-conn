System.register("chunks:///_virtual/RewardExchangePanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./UICtlBase.ts", "./CommonAPI.ts", "./ExchangeItem.ts", "./NetResult.ts", "./Config.ts", "./global.ts", "./CGILoader.ts", "./DEFINE.ts", "./CGIEvent.ts", "./Constants.ts", "./SpiritStorageApp.ts"], (function(t) {
        var e, i, s, n, h, a, o, r, _, u, c, m, b, g, d, l, C;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.assertThisInitialized,
                    s = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        h = t.NodeEventType
                }
                , function(t) {
                    a = t.AgentNode
                }
                , function(t) {
                    o = t.UICtlBase
                }
                , function(t) {
                    r = t.CommonAPI
                }
                , function(t) {
                    _ = t.ExchangeItem
                }
                , function(t) {
                    u = t.NetResult
                }
                , function(t) {
                    c = t.Config
                }
                , function(t) {
                    m = t.__global
                }
                , function(t) {
                    b = t.CGILoader
                }
                , function(t) {
                    g = t.DEFINE
                }
                , function(t) {
                    d = t.CGIEvent
                }
                , function(t) {
                    l = t.Constants
                }
                , function(t) {
                    C = t.SpiritStorageApp
                }
            ],
            execute: function() {
                n._RF.push({}, "de0c1PNgTpBq5TeWAT/5HPz", "RewardExchangePanel", void 0);
                t("RewardExchangePanel", function(t) {
                    function s(e) {
                        var s;
                        (s = t.call(this, e) || this)._ui = void 0,
                            s.m_itemData = void 0,
                            s.m_type = 0,
                            s.m_page = 0,
                            s.m_totalPage = 0,
                            s.m_itemList = [],
                            s.m_otherList = [],
                            s.m_totalNum = 0,
                            s.m_curIndex = -1,
                            s._itemListUI = [],
                            s._loader = void 0,
                            s.m_args = void 0,
                            s._ui = new f(e.target),
                            s.updateTabs();
                        for (var n = 0; n < 10; n++) {
                            var h = new _(s._ui.getCtlItem(n));
                            s._itemListUI.push(h)
                        }
                        return s._loader = new b(g.CGI_ROOT + "ladder_exch_shop",m.SysAPI.getNetSysAPI().createURLLoader(!0)),
                            s._loader.addEventListener(d.COMPLETE, s.onRecieveData, i(s)),
                            s._loader.addEventListener(d.GOT_ERROR, s.onNetError, i(s)),
                            s.addEvents(),
                            s
                    }
                    e(s, t);
                    var n = s.prototype;
                    return n.addEvents = function() {
                        this._ui.btnBack.on(h.TOUCH_END, this.onUIClick, this),
                            this._ui.btnForward.on(h.TOUCH_END, this.onUIClick, this),
                            this._ui.btnBuy.on(h.TOUCH_END, this.onUIClick, this),
                            this._ui.btnExchangeScore.on(h.TOUCH_END, this.onUIClick, this),
                            this._ui.btnPetPage.on(h.TOUCH_END, this.onUIClick, this),
                            this._ui.btnOtherPage.on(h.TOUCH_END, this.onUIClick, this);
                        for (var t = 0; t < 10; t++)
                            this._itemListUI[t].ui.btnChoose.on(h.TOUCH_END, this.onUIClick, this)
                    }
                        ,
                        n.delEvents = function() {
                            this._ui.btnBack.off(h.TOUCH_END, this.onUIClick, this),
                                this._ui.btnForward.off(h.TOUCH_END, this.onUIClick, this),
                                this._ui.btnBuy.off(h.TOUCH_END, this.onUIClick, this),
                                this._ui.btnExchangeScore.off(h.TOUCH_END, this.onUIClick, this),
                                this._ui.btnPetPage.off(h.TOUCH_END, this.onUIClick, this),
                                this._ui.btnOtherPage.off(h.TOUCH_END, this.onUIClick, this);
                            for (var t = 0; t < 10; t++)
                                this._itemListUI[t].ui.btnChoose.off(h.TOUCH_END, this.onUIClick, this)
                        }
                        ,
                        n.onNetError = function(t) {
                            m.UI.alert("", t.msg)
                        }
                        ,
                        n.updateTabs = function() {
                            0 == this.m_type ? (this._ui.btnPetPage.visible = !1,
                                this._ui.btnPetChoose.visible = !0,
                                this._ui.btnOtherPage.visible = !0,
                                this._ui.btnOtherChoose.visible = !1) : (this._ui.btnPetPage.visible = !0,
                                this._ui.btnPetChoose.visible = !1,
                                this._ui.btnOtherPage.visible = !1,
                                this._ui.btnOtherChoose.visible = !0)
                        }
                        ,
                        n.dispose = function() {
                            this.delEvents(),
                                t.prototype.dispose.call(this)
                        }
                        ,
                        n.updateInfo = function(t) {
                            void 0 === t && (t = null),
                                this.m_args = t,
                                this._loader.sendData("?cmd=" + c.CMD_QUERY, this.getSendObj())
                        }
                        ,
                        n.getSendObj = function() {
                            var t = new Object
                                , e = m.SysAPI.getGDataAPI().getGlobalVal(l.CUR_SERVER_INFO);
                            return t.unkown = e.pskey ? e.pskey : e.skey,
                                t.skey = e.skey,
                                t.platfrom = C.getPlatfromStr(),
                                t
                        }
                        ,
                        n.onUIClick = function(t) {
                            switch (t.target.name) {
                                case "btnPetPage":
                                    this.refreshPage(0, 0);
                                    break;
                                case "btnOtherPage":
                                    this.refreshPage(1, 0);
                                    break;
                                case "btnBack":
                                    this.m_page--,
                                        this.m_page = Math.max(0, this.m_page),
                                        this.refreshPage(this.m_type, this.m_page);
                                    break;
                                case "btnForward":
                                    this.m_page++,
                                        this.m_page = Math.min(this.m_totalPage - 1, this.m_page),
                                        this.refreshPage(this.m_type, this.m_page);
                                    break;
                                case "btnChoose":
                                    this.m_curIndex = Number(t.target.parent.name.split("_")[1]);
                                    for (var e = 0; e < 10; e++)
                                        e == this.m_curIndex ? this._itemListUI[e].ui.bg.gotoAndStop(2) : this._itemListUI[e].ui.bg.gotoAndStop(1);
                                    break;
                                case "btnBuy":
                                    var i, s, n, h;
                                    if (-1 == this.m_curIndex)
                                        r.showAlert("请选择要兑换的物品~");
                                    else
                                        0 == this.m_type ? (i = this.m_itemData.spirit.node[this.m_curIndex + 10 * this.m_page],
                                            s = r.getSpiritName(i.id),
                                            n = i.need,
                                            h = i.index) : 1 == this.m_type && (i = this.m_otherList[this.m_curIndex + 10 * this.m_page].res,
                                            s = r.getItemName(i.id),
                                            n = i.need,
                                            h = i.index),
                                            r.showConfirmAlert("确认要以" + n + "点梦想积分兑换" + s + "吗？", function() {
                                                var t = this.getSendObj();
                                                t.type = this.m_type,
                                                    t.index = h,
                                                    this._loader.sendData("?cmd=" + c.CMD_SUBMIT, t)
                                            }
                                                .bind(this));
                                    break;
                                case "btnExchangeScore":
                                    this._loader.sendData("?cmd=" + c.CMD_QUERYSCORE, this.getSendObj())
                            }
                        }
                        ,
                        n.refreshPage = function(t, e) {
                            this.m_type = t,
                                this.m_page = e,
                                this.updateTabs(),
                                this.clearPage();
                            var i, s = this.m_itemData.ticket;
                            if (this._ui.btnBuy.visible = s > 0,
                                this._ui.btnBuyGray.visible = 0 == s,
                            0 == t) {
                                i = this.m_itemData.spirit.node.length;
                                for (var n = 0; n < 10; n++) {
                                    var h = n + 10 * e;
                                    if (h < i) {
                                        var a = this.m_itemData.spirit.node[h];
                                        this._itemListUI[n].ui.visible = !0,
                                            this._itemListUI[n].ui.txtPrice.text = a.need,
                                            this._itemListUI[n].setIcon(Number(a.id), 0, n)
                                    } else
                                        this._itemListUI[n].ui.visible = !1,
                                            this._itemListUI[n].ui.txtPrice.text = "";
                                    this._itemListUI[n].ui.bg.gotoAndStop(1)
                                }
                                this.m_totalPage = Math.ceil(i / 10)
                            } else if (1 == t) {
                                i = this.m_otherList.length;
                                for (n = 0; n < 10; n++) {
                                    var o = n + 10 * e;
                                    if (o < i) {
                                        this._itemListUI[n].ui.visible = !0;
                                        var r = this.m_otherList[o].res;
                                        this._itemListUI[n].setIcon(Number(r.id), 1, n),
                                            this._itemListUI[n].ui.txtPrice.text = r.need
                                    } else
                                        this._itemListUI[n].ui.visible = !1,
                                            this._itemListUI[n].ui.txtPrice.text = "";
                                    this._itemListUI[n].ui.bg.gotoAndStop(1)
                                }
                                this.m_totalPage = Math.ceil(i / 10)
                            }
                            this._ui.txtPage.text = e + 1 + "/" + this.m_totalPage
                        }
                        ,
                        n.clearPage = function() {
                            this.m_itemList = [];
                            for (var t = 0; t < 10; t++)
                                this._itemListUI[t].clearIcon()
                        }
                        ,
                        n.onRecieveData = function(t) {
                            var e = new u(t.data)
                                , i = t.data;
                            t.data;
                            if (e.value >= 0 && this._ui)
                                switch (t.sendType) {
                                    case "?cmd=" + c.CMD_QUERY:
                                        this.m_itemData = i,
                                            this.m_otherList = [];
                                        for (var s = ["suit", "item", "farm"], n = 0; n < 3; n++)
                                            for (var h = 0; i[s[n]] && h < i[s[n]].node.length; h++)
                                                this.m_otherList.push({
                                                    res: i[s[n]].node[h],
                                                    type: n
                                                });
                                        this._ui.txtCount.text = "" + i.ticket,
                                            this.m_totalNum = Number(i.ticket),
                                            this.refreshPage(this.m_type, this.m_page);
                                        break;
                                    case "?cmd=" + c.CMD_QUERYSCORE:
                                        if (0 == Number(i.oldticket))
                                            return void r.showAlert("梦想徽章数量不足");
                                        if (Number(i.newticket) >= 999)
                                            return void r.showAlert("梦想积分已达上限，使用后再来兑换吧~");
                                        var a = "";
                                        a = Number(i.oldticket) + Number(i.newticket) > 999 ? "确定消耗" + (999 - Number(i.newticket)) + "个梦想徽章兑换" + (999 - Number(i.newticket)) + "梦想积分吗？" : "确定消耗" + i.oldticket + "个梦想徽章兑换" + i.oldticket + "梦想积分吗？",
                                            r.showConfirmAlert("" + a, function() {
                                                this._loader.sendData("?cmd=" + c.CMD_EXCHANGESCORE, this.getSendObj())
                                            }
                                                .bind(this));
                                        break;
                                    case "?cmd=" + c.CMD_EXCHANGESCORE:
                                        this._ui.txtCount.text = "" + i.newticket;
                                        break;
                                    case "?cmd=" + c.CMD_SUBMIT:
                                        1 != e.value && r.showCgiXmlRewardList(i),
                                            this.m_curIndex = -1,
                                            this._loader.sendData("?cmd=" + c.CMD_QUERY, this.getSendObj());
                                        break;
                                    case "?cmd=" + c.CMD_GETGIFT:
                                        r.showCgiXmlRewardList(i)
                                }
                            else
                                e.msg.length > 0 && m.UI.alert("", e.msg)
                        }
                        ,
                        s
                }(o));
                var f = function(t) {
                    function i() {
                        for (var e, i = arguments.length, s = new Array(i), n = 0; n < i; n++)
                            s[n] = arguments[n];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._btnClose = void 0,
                            e._btnBuy = void 0,
                            e._btnBuyGray = void 0,
                            e._btnExchangeScore = void 0,
                            e._btnBack = void 0,
                            e._btnForward = void 0,
                            e._txtPage = void 0,
                            e._txtCount = void 0,
                            e._btnPetChoose = void 0,
                            e._btnOtherChoose = void 0,
                            e._btnPetPage = void 0,
                            e._btnOtherPage = void 0,
                            e._ctlItems = [],
                            e
                    }
                    return e(i, t),
                        i.prototype.getCtlItem = function(t) {
                            return this._ctlItems[t] || (this._ctlItems[t] = new a(this.getChildByName("item_" + t))),
                                this._ctlItems[t]
                        }
                        ,
                        s(i, [{
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new a(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "btnBuy",
                            get: function() {
                                return this._btnBuy || (this._btnBuy = new a(this.getChildByName("btnBuy"))),
                                    this._btnBuy
                            }
                        }, {
                            key: "btnBuyGray",
                            get: function() {
                                return this._btnBuyGray || (this._btnBuyGray = new a(this.getChildByName("btnBuyGray"))),
                                    this._btnBuyGray
                            }
                        }, {
                            key: "btnExchangeScore",
                            get: function() {
                                return this._btnExchangeScore || (this._btnExchangeScore = new a(this.getChildByName("btnExchangeScore"))),
                                    this._btnExchangeScore
                            }
                        }, {
                            key: "btnBack",
                            get: function() {
                                return this._btnBack || (this._btnBack = new a(this.getChildByName("btnBack"))),
                                    this._btnBack
                            }
                        }, {
                            key: "btnForward",
                            get: function() {
                                return this._btnForward || (this._btnForward = new a(this.getChildByName("btnForward"))),
                                    this._btnForward
                            }
                        }, {
                            key: "txtPage",
                            get: function() {
                                return this._txtPage || (this._txtPage = new a(this.getChildByName("txtPage"))),
                                    this._txtPage
                            }
                        }, {
                            key: "txtCount",
                            get: function() {
                                return this._txtCount || (this._txtCount = new a(this.getChildByName("txtCount"))),
                                    this._txtCount
                            }
                        }, {
                            key: "btnPetChoose",
                            get: function() {
                                return this._btnPetChoose || (this._btnPetChoose = new a(this.getChildByName("btnPetChoose"))),
                                    this._btnPetChoose
                            }
                        }, {
                            key: "btnOtherChoose",
                            get: function() {
                                return this._btnOtherChoose || (this._btnOtherChoose = new a(this.getChildByName("btnOtherChoose"))),
                                    this._btnOtherChoose
                            }
                        }, {
                            key: "btnPetPage",
                            get: function() {
                                return this._btnPetPage || (this._btnPetPage = new a(this.getChildByName("btnPetPage"))),
                                    this._btnPetPage
                            }
                        }, {
                            key: "btnOtherPage",
                            get: function() {
                                return this._btnOtherPage || (this._btnOtherPage = new a(this.getChildByName("btnOtherPage"))),
                                    this._btnOtherPage
                            }
                        }]),
                        i
                }(a);
                n._RF.pop()
            }
        }
    }
));
