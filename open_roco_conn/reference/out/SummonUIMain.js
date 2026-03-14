System.register("chunks:///_virtual/SummonUIMain.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ActivityAPI.ts", "./ActivityCommonLogicUIBase.ts", "./CtlActCoolDown.ts", "./SpiritEquipmentInfo.ts", "./DefaultImgCache.ts", "./IConItem.ts", "./ActGCManager.ts", "./NetResult.ts", "./AgentNode.ts", "./ResManager.ts", "./SummonConfig.ts", "./NodeExtendEx.ts", "./BuildLogHelper.ts", "./SpiritAnimationNodeAgent.ts", "./global.ts"], (function(t) {
        var e, i, n, s, o, r, h, a, l, _, m, c, u, d, g, f, b, y, x, C, p, v, N, k, w;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass,
                    n = t.assertThisInitialized
            }
                , function(t) {
                    s = t.cclegacy,
                        o = t.Vec2,
                        r = t.Rect,
                        h = t.NodeEventType,
                        a = t.EditBox,
                        l = t.isValid
                }
                , function(t) {
                    _ = t.ActivityAPI
                }
                , function(t) {
                    m = t.ActivityCommonLogicUIBase
                }
                , function(t) {
                    c = t.CtlActCoolDown
                }
                , function(t) {
                    u = t.SpiritEquipmentInfo
                }
                , function(t) {
                    d = t.DefaultImgCache
                }
                , function(t) {
                    g = t.IConItem
                }
                , function(t) {
                    f = t.ActGCManager
                }
                , function(t) {
                    b = t.NetResult
                }
                , function(t) {
                    y = t.AgentNodeComponent,
                        x = t.AgentNode
                }
                , function(t) {
                    C = t.default
                }
                , function(t) {
                    p = t.SummonConfig
                }
                , function(t) {
                    v = t.NodeExtendEx
                }
                , function(t) {
                    N = t.default
                }
                , function(t) {
                    k = t.SpiritAnimationNodeAgent
                }
                , function(t) {
                    w = t.__global
                }
            ],
            execute: function() {
                s._RF.push({}, "879472DiiFHjJss2apkOmVD", "SummonUIMain", void 0);
                t("SummonUIMain", function(t) {
                    function s(e) {
                        var i;
                        (i = t.call(this, e) || this).m_res1 = void 0,
                            i.m_xml = void 0,
                            i.m_data = void 0,
                            i.m_recordData = void 0,
                            i.m_poolIndex = 0,
                            i.m_isCurrentPoolOpen = !1,
                            i.m_wishIndex = -1,
                            i.m_exchangePage = 0,
                            i.m_exchangeTab = 2,
                            i.m_recordPage = 0,
                            i.m_recordType = 0,
                            i.m_recordMaxPage = 0,
                            i.m_infoTab = 0,
                            i.m_infoPage = 0,
                            i.m_buyCount = 0,
                            i.m_buyIndex = 0,
                            i.m_rewardIndex = 0,
                            i.m_wishData = [],
                            i.m_wishItemList = [],
                            i.m_poolInfo = void 0,
                            i.m_poolPage = 0,
                            i.imageCache = new d,
                            i.m_ctlCD = void 0,
                            i.REWARD_ID = [2991, 3e3, 3005, 3014, 2996, 3040, 3049, 3052, 3073, 3060, 3087, 3093],
                            i.m_args = void 0,
                            i.m_res1 = new Q,
                            i.m_res1.ctlExchange.btnCloseExchange.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlExchange.btnItemLast.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlExchange.btnItemNext.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlExchange.tokenItem_0.btnAdd.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlExchange.tokenItem_1.btnAdd.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlExchange.tokenItem_2.btnAdd.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlExchange.tokenItem_3.btnAdd.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlExchange.item_0.getState.btnGet.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlExchange.item_1.getState.btnGet.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlExchange.item_2.getState.btnGet.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlExchange.item_3.getState.btnGet.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlExchange.ctlBuy.btnBuyMin.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlExchange.ctlBuy.btnBuyAdd.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlExchange.ctlBuy.btnBuy.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlExchange.ctlBuy.btnCloseBuy.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.btnClose.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.btnLastPoolPage.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.btnNextPoolPage.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.btnDraw_1.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.btnDraw_10.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.summonTab_0.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.summonTab_1.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.summonTab_2.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.summonTab_3.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.tokenItem_0.btnAdd.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.btnRecord.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.btnInfo.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.btnExchange.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.btnWish.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.ctlWish.confirmState.btnConfirm.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.ctlWish.confirmState.btnGiveup.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.ctlWish.btnCloseWish.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlInfo.btnCloseInfo.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlInfo.infoTab_0.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlInfo.infoTab_1.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlInfo.infoTab_2.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlInfo.btnInfoLast.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlInfo.btnInfoNext.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.ctlReward.btnCloseReward.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.ctlReward.btnCloseReward1.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.ctlRecord.btnCloseRecord.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.ctlRecord.btnLastRecord.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.ctlRecord.btnNextRecord.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.ctlRecord.btnList.on(h.TOUCH_END, i.onResClick, n(i)),
                            i.setMainUI(i.m_res1.target),
                            i.m_res1.visible = !1;
                        for (var s = 0; s < 4; s++)
                            s < 3 && (i.m_res1.ctlInfo["infoTab_" + s].buttonMode = !0,
                                i.m_res1.ctlInfo["infoTab_" + s].mouseChildren = !1),
                                i.m_res1.ctlFull["summonTab_" + s].gotoAndStop(1),
                                i.m_res1.ctlFull["summonTab_" + s].mouseChildren = !1,
                                i.m_res1.ctlFull["summonTab_" + s].visible = !1;
                        return i.m_res1.ctlFull.rewardIcon.clear(),
                            i.m_res1.ctlExchange.visible = !1,
                            i.m_res1.ctlExchange.ctlBuy.visible = !1,
                            i.m_res1.ctlInfo.visible = !1,
                            i.m_res1.ctlFull.ctlRecord.visible = !1,
                            i.m_res1.ctlFull.ctlReward.visible = !1,
                            i.m_res1.ctlFull.ctlWish.visible = !1,
                            i.m_res1.ctlFull.rewardAnima.visible = !1,
                            i.m_res1.ctlExchange.ctlBuy.txtNum.on(a.EventType.TEXT_CHANGED, i.onChange, n(i)),
                            i.m_ctlCD = new c(null,null,n(i),null,i.onTick.bind(n(i))),
                            i
                    }
                    e(s, t);
                    var l = s.prototype;
                    return l.onTick = function(t) {
                        t % 10 != 0 && 0 != t || (0 == t && this.m_res1.ctlFull.rewardIcon.clear(),
                        1 == N.IS_LOCAL && console.error("当前许愿宠物111==" + this.m_wishData[this.m_rewardIndex].id),
                            this.m_res1.ctlFull.rewardIcon.load(this.m_wishData[this.m_rewardIndex].id),
                            this.m_rewardIndex = this.m_rewardIndex == this.m_wishData.length - 1 ? 0 : this.m_rewardIndex + 1)
                    }
                        ,
                        l.onChange = function(t) {
                            var e = Number(this.m_res1.ctlExchange.ctlBuy.txtNum.text);
                            0 == e && (e = 1),
                            e > 99 && (e = 99),
                                this.m_buyCount = e,
                                this.m_res1.ctlExchange.ctlBuy.txtNum.text = e.toString(),
                                this.m_res1.ctlExchange.ctlBuy.txtCost.text = "*" + Number(this.m_data.recycleinfo.need[this.m_buyIndex]) * e
                        }
                        ,
                        l.dispose = function() {
                            this.m_ctlCD.dispose(),
                                f.dispose(this),
                                this.unsetMainUI(),
                                t.prototype.dispose.call(this)
                        }
                        ,
                        l.onGameCallback = function(t) {
                            t.score > 0 && this.send(p.CMD_SUBMIT, null, null, null, !0, !0)
                        }
                        ,
                        l.onNpcCombatCallBack = function(t) {}
                        ,
                        l.updateInfo = function(t) {
                            void 0 === t && (t = null),
                                this.m_args = t,
                                this.isOpenFromTimePaper = "newsOpen" == t,
                                this.send(p.CMD_QUERY, null, null, null, !0, !0)
                        }
                        ,
                        l.onResClick = function(t) {
                            var e = this
                                , i = t.target
                                , n = t.target.name;
                            switch (1 == N.IS_LOCAL && console.info("onResClick-" + n),
                                n) {
                                case "btnClose":
                                    this.close();
                                    break;
                                case "btnGoto":
                                    this.close(),
                                        _.enterScene(p.ActMainScene);
                                    break;
                                case "btnCloseReward":
                                case "btnCloseReward1":
                                    this.m_res1.ctlFull.ctlReward.visible = !1;
                                    break;
                                case "btnWish":
                                    if (!this.m_isCurrentPoolOpen)
                                        return void _.showAlert("当前召唤已结束~");
                                    this.m_res1.ctlFull.ctlWish.visible = !0;
                                    break;
                                case "btnCloseWish":
                                    this.m_res1.ctlFull.ctlWish.visible = !1;
                                    break;
                                case "btnConfirm":
                                    if (-1 == this.m_wishIndex)
                                        return void _.showAlert("请先选择要许愿的内容~");
                                    this.send(p.CMD_WISH, "&version=" + (this.m_poolIndex + 1) + "&index=" + (this.m_wishIndex + 1), 1, null, !0, !0);
                                    break;
                                case "btnGiveup":
                                    this.send(p.CMD_WISH, "&version=" + (this.m_poolIndex + 1) + "&index=0", 0, null, !0, !0);
                                    break;
                                case "btnExchange":
                                    this.updateExchange(2),
                                        this.updateExchangePage(0);
                                    break;
                                case "btnCloseExchange":
                                    this.m_res1.ctlFull.visible = !0,
                                        this.m_res1.ctlExchange.visible = !1;
                                    break;
                                case "btnItemNext":
                                    var s = 0;
                                    0 == this.m_exchangeTab ? s = Math.floor(this.m_data.magicinfo.id.length / 6) : 1 == this.m_exchangeTab ? s = Math.floor(this.m_data.propsinfo.id.length / 6) : 2 == this.m_exchangeTab && (s = Math.floor(this.m_data.recycleinfo.id.length / 6));
                                    var o = Math.min(s, this.m_exchangePage + 1);
                                    this.updateExchangePage(o);
                                    break;
                                case "btnItemLast":
                                    o = Math.max(0, this.m_exchangePage - 1);
                                    this.updateExchangePage(o);
                                    break;
                                case "btnGet":
                                    var r = Number(i.parent.parent.name.split("_")[1]) + 6 * this.m_exchangePage;
                                    if (2 == this.m_exchangeTab)
                                        this.m_buyIndex = r,
                                            this.updateBuy(1),
                                            this.cleanContainer(this.m_res1.ctlExchange.ctlBuy.token.container),
                                            this.addIcon(Number(this.m_data.recycleinfo.id[r]), 2, this.m_res1.ctlExchange.ctlBuy.token.container, -33.4, -57);
                                    else {
                                        var h;
                                        0 == this.m_exchangeTab ? h = this.m_data.magicinfo : 1 == this.m_exchangeTab ? h = this.m_data.propsinfo : 2 == this.m_exchangeTab && (h = this.m_data.recycleinfo);
                                        var a, l = 2 == this.m_exchangeTab ? 67374890 : Number(h.id[r]), m = Number(h.type[r]);
                                        a = 99 == l ? "玛那" : 0 == l ? "随机史诗装备" : _.getAnyItemName(m, l);
                                        var c = 2 == this.m_exchangeTab ? Number(h.add[r]) : Number(h.count[r])
                                            , u = 0;
                                        u = 0 == this.m_exchangeTab ? 99 : 1 == this.m_exchangeTab ? Number(h.rid[r]) : Number(h.id[r]);
                                        var d = 1 == this.m_exchangeTab ? Number(h.rtype[r]) : Number(h.type[r])
                                            , g = 99 == u ? "玛那" : _.getAnyItemName(d, u)
                                            , f = 1 == this.m_exchangeTab ? Number(h.rneed[r]) : Number(h.need[r]);
                                        _.showConfirmAlert("请问是否消耗【" + g + "】*" + f + "兑换【" + a + "】*" + c, (function() {
                                                e.send(3 + e.m_exchangeTab, "&version=" + (e.m_poolIndex + 1) + "&index=" + (r + 1) + "&num=1", null, null, !0, !0)
                                            }
                                        ))
                                    }
                                    break;
                                case "btnCloseBuy":
                                    this.m_res1.ctlExchange.ctlBuy.visible = !1;
                                    break;
                                case "btnBuyAdd":
                                    this.updateBuy(this.m_buyCount + 1);
                                    break;
                                case "btnBuyMin":
                                    this.updateBuy(this.m_buyCount - 1);
                                    break;
                                case "btnBuy":
                                    o = Number(this.m_res1.ctlExchange.ctlBuy.txtNum.text);
                                    this.m_res1.ctlExchange.ctlBuy.visible = !1,
                                        this.send(3 + this.m_exchangeTab, "&version=" + (this.m_poolIndex + 1) + "&index=" + (this.m_buyIndex + 1) + "&num=" + o, null, null, !0, !0);
                                    break;
                                case "btnAdd":
                                    var b = i.getComponent(y).target.parent.getComponent(y).target;
                                    (b instanceof M || b instanceof j) && b.txtType.text,
                                        w.showMsgBox("请前往flash主版本商城获得！");
                                    break;
                                case "btnRecord":
                                    this.send(p.CMD_RECORD, null, null, null, !0, !0);
                                    break;
                                case "btnCloseRecord":
                                    this.m_res1.ctlFull.ctlRecord.visible = !1;
                                    break;
                                case "btnList":
                                    this.m_res1.ctlFull.ctlRecord.ctlList.visible = !this.m_res1.ctlFull.ctlRecord.ctlList.visible;
                                    break;
                                case "btnNextRecord":
                                    o = Math.min(0 == this.m_recordMaxPage ? 0 : this.m_recordMaxPage - 1, this.m_recordPage + 1);
                                    this.updateRecord(o);
                                    break;
                                case "btnLastRecord":
                                    o = Math.max(0, this.m_recordPage - 1);
                                    this.updateRecord(o);
                                    break;
                                case "btnInfo":
                                    this.updateInfomation(1),
                                        this.updateInfoPage(0);
                                    break;
                                case "btnInfoNext":
                                    this.updateInfoPage(this.m_infoPage + 1);
                                    break;
                                case "btnInfoLast":
                                    this.updateInfoPage(this.m_infoPage - 1);
                                    break;
                                case "btnCloseInfo":
                                    this.m_res1.ctlFull.visible = !0,
                                        this.m_res1.ctlInfo.visible = !1;
                                    break;
                                case "btnNextPoolPage":
                                    s = Math.ceil(this.m_poolInfo.length / 4) - 1;
                                    this.updatePoolPage(Math.min(s, this.m_poolPage + 1), 0);
                                    r = this.m_poolInfo.length - 4 * this.m_poolPage - 1;
                                    this.updatePool(this.m_poolInfo[r]);
                                    break;
                                case "btnLastPoolPage":
                                    this.updatePoolPage(Math.max(0, this.m_poolPage - 1), 0);
                                    r = this.m_poolInfo.length - 4 * this.m_poolPage - 1;
                                    this.updatePool(this.m_poolInfo[r]);
                                    break;
                                default:
                                    var x = i.getComponent(y).target
                                        , C = n.split("_")
                                        , v = 0;
                                    if (2 == C.length)
                                        switch (v = parseInt(C[1]),
                                            C[0]) {
                                            case "item":
                                                if (!x.buttonMode)
                                                    return;
                                                if (1 == this.m_xml.lotteryinfo[this.m_poolIndex].succ || 0 != this.m_xml.lotteryinfo[this.m_poolIndex].wish)
                                                    return;
                                                this.wishChoose(v);
                                                break;
                                            case "btnDraw":
                                                if (!this.m_isCurrentPoolOpen)
                                                    return void _.showAlert("当前召唤已结束~");
                                                if (Number(this.m_data.lotteryinfo[this.m_poolIndex].viplimit) > Number(this.m_xml.vip))
                                                    return void (1 == this.m_data.lotteryinfo[this.m_poolIndex].viplimit ? _.showVipConfirm() : 5 == this.m_data.lotteryinfo[this.m_poolIndex].viplimit ? _.showAlert("该召唤仅限VIP5用户参与") : _.showAlert("该召唤仅限VIP" + this.m_data.lotteryinfo[this.m_poolIndex].viplimit + "及以上用户参与"));
                                                o = 1 == v ? 1 : 10;
                                                _.showConfirmAlert("是否确认消耗" + o + "个【" + _.getItemName(Number(this.m_xml.lotteryinfo[this.m_poolIndex].resid)) + "】召唤" + o + "次？", (function() {
                                                        Number(e.m_xml.lotteryinfo[e.m_poolIndex].count) < o ? _.showAlert(_.getItemName(Number(e.m_xml.lotteryinfo[e.m_poolIndex].resid)) + "数量不足") : e.send(p.CMD_SUBMIT, "&version=" + (e.m_poolIndex + 1) + "&type=" + v, null, null, !0, !0)
                                                    }
                                                ));
                                                break;
                                            case "exchangeTab":
                                                this.updateExchange(v),
                                                    this.updateExchangePage(0);
                                                break;
                                            case "infoTab":
                                                this.updateInfomation(v),
                                                    this.updateInfoPage(0);
                                                break;
                                            case "summonTab":
                                                if (!x.buttonMode)
                                                    return;
                                                r = this.m_poolInfo.length - (4 * this.m_poolPage + v) - 1;
                                                this.updatePoolPage(this.m_poolPage, v),
                                                    this.updatePool(this.m_poolInfo[r]);
                                                break;
                                            case "btnList":
                                                this.m_res1.ctlFull.ctlRecord.ctlList.visible = !this.m_res1.ctlFull.ctlRecord.ctlList.visible,
                                                    this.m_recordType = v,
                                                    this.updateRecord(0)
                                        }
                            }
                        }
                        ,
                        l.distributePointsInRectangle = function(t, e) {
                            for (var i = [], n = 0; n < e; n++) {
                                var s = 142 * (n % 7) - 426
                                    , r = 22 + -140 * Math.floor(n / 7);
                                i.push(new o(s,r))
                            }
                            return i
                        }
                        ,
                        l.updatePool = function(t) {
                            if (this.m_poolIndex = t,
                                this.m_isCurrentPoolOpen = !1,
                                this.m_xml.hasOwnProperty("lotteryinfo"))
                                for (var e = 0; e < this.m_xml.lotteryinfo.length; e++)
                                    if (this.m_poolIndex + 1 == Number(this.m_xml.lotteryinfo[this.m_poolIndex].lotteryver)) {
                                        this.m_isCurrentPoolOpen = !0;
                                        break
                                    }
                            this.updateWish(),
                                this.cleanContainer(this.m_res1.ctlFull.token_1),
                                this.cleanContainer(this.m_res1.ctlFull.token_10),
                                this.addIcon(Number(this.m_xml.lotteryinfo[this.m_poolIndex].resid), 2, this.m_res1.ctlFull.token_1, -33.4, -57),
                                this.addIcon(Number(this.m_xml.lotteryinfo[this.m_poolIndex].resid), 2, this.m_res1.ctlFull.token_10, -33.4, -57),
                                this.updateToken([{
                                    id: Number(this.m_xml.lotteryinfo[this.m_poolIndex].resid),
                                    type: 2,
                                    num: Number(this.m_xml.lotteryinfo[this.m_poolIndex].count)
                                }], this.m_res1.ctlFull, 1);
                            var i = new Date(1e3 * Number(this.m_data.lotteryinfo[t].etime));
                            i.getFullYear() >= 2030 ? this.m_res1.ctlFull.txtCloseTime.text = "关闭时间：长期开放" : this.m_res1.ctlFull.txtCloseTime.text = "关闭时间：" + i.getFullYear() + "年" + (i.getMonth() + 1) + "月" + i.getDate() + "日" + i.getHours() + "点",
                                this.m_res1.ctlFull.txtCount.text = "今日已召唤：" + this.m_xml.lotteryinfo[this.m_poolIndex].lotterytimes + "/" + this.m_data.lotteryinfo[this.m_poolIndex].dmax
                        }
                        ,
                        l.updateBuy = function(t) {
                            this.m_buyCount = Math.max(1, t),
                                this.m_res1.ctlExchange.ctlBuy.visible = !0,
                                this.m_res1.ctlExchange.ctlBuy.txtNum.text = t.toString(),
                                this.m_res1.ctlExchange.ctlBuy.txtCost.text = "*" + Number(this.m_data.recycleinfo.need[this.m_buyIndex]) * t
                        }
                        ,
                        l.cleanContainer = function(t) {
                            for (var e = 0; e < t.children.length; e++)
                                t.removeChildAt(0, !0)
                        }
                        ,
                        l.addIcon = function(t, e, i, n, s, o, r) {
                            if (void 0 === o && (o = 0),
                            void 0 === r && (r = 1),
                            1 == N.IS_LOCAL && t <= 10)
                                throw new Error("addIcon Error.");
                            if (t = "number" == typeof t ? t : isNaN(Number(t)) ? 0 : Number(t),
                                e = "number" == typeof e ? e : isNaN(Number(e)) ? 0 : Number(e),
                                o = "number" == typeof o ? o : isNaN(Number(o)) ? 0 : Number(o),
                                i.mouseChildren = !1,
                            4 == e) {
                                var h = _.getSpiritIcon(t);
                                i.addChild(h)
                            } else if (3 == e) {
                                var a = new g(60,60);
                                a.setImageCache(this.imageCache),
                                    a.setData({
                                        src: _.getFurnitureSrc(t)
                                    }),
                                    i.addChild(a)
                            } else if (6 == e) {
                                var l = new u;
                                l.serverID = t;
                                var m = new g;
                                m.setData({
                                    src: l.des.src
                                }),
                                    i.addChild(m)
                            } else if (99 == e) {
                                var c = new $;
                                i.addChild(c)
                            } else {
                                var d = _.getItemIcon(t);
                                d.scaleX = r,
                                    d.scaleY = r,
                                    i.addChild(d)
                            }
                            var f = 99 == e ? "玛那" : _.getAnyItemName(e, t);
                            0 != o && (f += "*" + o),
                                i.tooltip = f,
                                i.width
                        }
                        ,
                        l.updateToken = function(t, e, i) {
                            for (var n = 0; n < i; n++)
                                this.cleanContainer(e["tokenItem_" + n].token.container),
                                    t.length > n ? (0 == t[n].id ? (e["tokenItem_" + n].token.mana.visible = !0,
                                        e["tokenItem_" + n].token.mana.tooltip = "玛那",
                                        e["tokenItem_" + n].txtNum.text = t[n].num.toString(),
                                        e["tokenItem_" + n].btnAdd.visible = !0) : (e["tokenItem_" + n].token.mana.visible = !1,
                                        this.addIcon(t[n].id, t[n].type, e["tokenItem_" + n].token.container, -33.4, -57),
                                        e["tokenItem_" + n].txtNum.text = t[n].num.toString(),
                                        67371891 == t[n].id || 67374896 == t[n].id ? e["tokenItem_" + n].btnAdd.visible = !0 : e["tokenItem_" + n].btnAdd.visible = !1),
                                        e["tokenItem_" + n].txtType.text = t[n].id.toString(),
                                        e["tokenItem_" + n].visible = !0) : e["tokenItem_" + n].visible = !1,
                                    e["tokenItem_" + n].txtType.alpha = 0
                        }
                        ,
                        l.clearItem = function() {
                            for (var t = 0; t < this.m_wishItemList.length; t++)
                                this.m_wishItemList[t] && this.m_wishItemList[t].destory();
                            this.m_wishItemList = []
                        }
                        ,
                        l.updateWish = function() {
                            if (!this.m_isCurrentPoolOpen)
                                return this.m_res1.ctlFull.btnInfo.visible = !1,
                                    void (this.m_res1.ctlFull.btnWish.visible = !1);
                            this.m_res1.ctlFull.btnInfo.visible = !0,
                                this.m_res1.ctlFull.btnWish.visible = !0,
                                this.m_wishData = [];
                            for (var t = 0; t < this.m_data.lotteryinfo[this.m_poolIndex].id.length; t++)
                                1 == this.m_data.lotteryinfo[this.m_poolIndex].wish[t] && this.m_wishData.push({
                                    id: Number(this.m_data.lotteryinfo[this.m_poolIndex].id[t]),
                                    type: this.m_data.lotteryinfo[this.m_poolIndex].type[t],
                                    count: this.m_data.lotteryinfo[this.m_poolIndex].count[t]
                                });
                            this.clearItem();
                            var e = this.distributePointsInRectangle(new r(185,210,590,150), this.m_wishData.length);
                            for (t = 0; t < this.m_wishData.length; t++) {
                                var i = new J;
                                i.x = e[t].x,
                                    i.y = e[t].y,
                                    i.buttonMode = !0,
                                    i.mouseChildren = !1,
                                    i.name = "item_" + t,
                                    i.on(h.TOUCH_END, this.onResClick, this),
                                    this.m_res1.ctlFull.ctlWish.addChild(i.target),
                                    this.m_wishItemList.push(i)
                            }
                            this.m_res1.ctlFull.ctlWish.setChildIndex(this.m_res1.ctlFull.ctlWish.wishTip.target, this.m_res1.ctlFull.ctlWish.numChildren - 1);
                            var n = !1;
                            for (t = 0; t < this.m_wishItemList.length; t++)
                                this.cleanContainer(this.m_wishItemList[t].container),
                                    this.m_wishItemList[t].visible = !0,
                                    0 != this.m_xml.lotteryinfo[this.m_poolIndex].wish || 1 == this.m_xml.lotteryinfo[this.m_poolIndex].succ ? (n = !0,
                                        this.m_wishItemList[t].visible = !1) : (this.m_wishItemList[t].tooltip = _.getSpiritName(this.m_wishData[t].id.toString()),
                                        this.addIcon(this.m_wishData[t].id, this.m_wishData[t].type, this.m_wishItemList[t].container, -33.4, -57, this.m_wishData[t].count, 1.5),
                                        Number(this.m_xml.lotteryinfo[this.m_poolIndex].wish) == t + 1 ? this.m_wishItemList[t].gotoAndStop(2) : this.m_wishItemList[t].gotoAndStop(1));
                            if (n) {
                                this.m_res1.ctlFull.rewardIcon.clear(),
                                    this.cleanContainer(this.m_res1.ctlFull.ctlWish.itemWish.container);
                                var s = Number(this.m_xml.lotteryinfo[this.m_poolIndex].wish) - 1;
                                this.m_ctlCD.time = 0,
                                1 == N.IS_LOCAL && console.debug("当前许愿宠物==" + this.m_wishData[s].id),
                                    this.m_res1.ctlFull.rewardIcon.load(this.m_wishData[s].id),
                                    this.m_res1.ctlFull.txtWish.text = "当前许愿宠物：" + _.getSpiritName(this.m_wishData[s].id.toString()),
                                    this.m_res1.ctlFull.ctlWish.itemWish.gotoAndStop(2),
                                    this.m_res1.ctlFull.ctlWish.itemWish.visible = !0,
                                    this.addIcon(this.m_wishData[s].id, this.m_wishData[s].type, this.m_res1.ctlFull.ctlWish.itemWish.container, -33.4, -57, this.m_wishData[s].count, 1.5)
                            } else
                                this.m_rewardIndex = 0,
                                    this.m_ctlCD.time = 9999,
                                    this.onTick(0),
                                    this.m_res1.ctlFull.txtWish.text = "",
                                    this.m_res1.ctlFull.ctlWish.itemWish.visible = !1;
                            1 == this.m_xml.lotteryinfo[this.m_poolIndex].succ ? (this.m_res1.ctlFull.ctlWish.des.gotoAndStop(3),
                                this.m_res1.ctlFull.ctlWish.confirmState.gotoAndStop(3)) : 0 != this.m_xml.lotteryinfo[this.m_poolIndex].wish ? (this.m_res1.ctlFull.ctlWish.des.gotoAndStop(2),
                                this.m_res1.ctlFull.ctlWish.confirmState.gotoAndStop(2)) : (this.m_res1.ctlFull.ctlWish.des.gotoAndStop(1),
                                this.m_res1.ctlFull.ctlWish.confirmState.gotoAndStop(1))
                        }
                        ,
                        l.wishChoose = function(t) {
                            this.m_wishIndex = t;
                            for (var e = 0; e < this.m_wishItemList.length; e++)
                                t == e ? this.m_wishItemList[e].gotoAndStop(2) : this.m_wishItemList[e].gotoAndStop(1)
                        }
                        ,
                        l.updateExchange = function(t) {
                            var e, i;
                            this.m_exchangeTab = t;
                            var n = [];
                            if (0 == t ? (e = this.m_data.magicinfo,
                                i = this.m_xml.magicinfo) : 1 == t ? (e = this.m_data.propsinfo,
                                i = this.m_xml.propsinfo) : 2 == t && (e = this.m_data.recycleinfo,
                                i = this.m_xml.recycleinfo),
                            0 == t)
                                n = [{
                                    id: 0,
                                    type: 0,
                                    num: Number(this.m_xml.magic)
                                }];
                            else
                                for (var s = 0, o = 0; o < (0 | (null == (r = e.id) ? void 0 : r.length)); o++) {
                                    for (var r, h = !1, a = Number(1 == t ? e.rid[o] : e.id[o]), l = Number(1 == t ? e.rtype[o] : e.type[o]), _ = 0; _ < n.length; _++)
                                        if (n[_] == a) {
                                            h = !0;
                                            break
                                        }
                                    h || (n.push({
                                        id: a,
                                        type: l,
                                        num: i.num[s]
                                    }),
                                        s++)
                                }
                            this.m_res1.ctlFull.visible = !1,
                                this.m_res1.ctlExchange.visible = !0,
                                this.updateToken(n, this.m_res1.ctlExchange, 4)
                        }
                        ,
                        l.updateExchangePage = function(t) {
                            var e, i;
                            this.m_exchangePage = t,
                                0 == this.m_exchangeTab ? (e = this.m_data.magicinfo,
                                    i = this.m_xml.magicinfo) : 1 == this.m_exchangeTab ? (e = this.m_data.propsinfo,
                                    i = this.m_xml.propsinfo) : 2 == this.m_exchangeTab && (e = this.m_data.recycleinfo,
                                    i = this.m_xml.recycleinfo);
                            for (var n = 0; n < 4; n++) {
                                var s = 4 * t + n;
                                if (this.cleanContainer(this.m_res1.ctlExchange["item_" + n].container),
                                    this.m_res1.ctlExchange["item_" + n].mana.visible = !1,
                                    this.m_res1.ctlExchange["item_" + n].randomEq.visible = !1,
                                    e.max[s]) {
                                    if (this.m_res1.ctlExchange["item_" + n].visible = !0,
                                    2 == this.m_exchangeTab)
                                        this.addIcon(67374890, 2, this.m_res1.ctlExchange["item_" + n].container, -33.4, -65, Number(e.add[s]), 1.1);
                                    else {
                                        var o = 0;
                                        0 == e.id[s] ? (this.m_res1.ctlExchange["item_" + n].randomEq.visible = !0,
                                            this.m_res1.ctlExchange["item_" + n].randomEq.tooltip = "随机史诗装备*1") : (o = Number(e.id[s]),
                                            this.addIcon(o, Number(e.type[s]), this.m_res1.ctlExchange["item_" + n].container, -33.4, -65, Number(e.count[s]), 1.1))
                                    }
                                    for (null != i.times && null != i.times || (i.times = []); i.times.length <= s; )
                                        i.times.push("0");
                                    if (Number(i.times[s]) >= Number(e.max[s]) && 0 != e.max[s] || Number(i.dtimes[s]) >= Number(e.daymax[s]) && 0 != e.daymax[s] ? this.m_res1.ctlExchange["item_" + n].getState.gotoAndStop(2) : this.m_res1.ctlExchange["item_" + n].getState.gotoAndStop(1),
                                        this.cleanContainer(this.m_res1.ctlExchange["item_" + n].token.container),
                                    0 == this.m_exchangeTab)
                                        this.m_res1.ctlExchange["item_" + n].token.mana.visible = !0;
                                    else {
                                        o = 1 == this.m_exchangeTab ? e.rid[s] : e.id[s];
                                        var r = 1 == this.m_exchangeTab ? e.rtype[s] : e.type[s];
                                        this.m_res1.ctlExchange["item_" + n].token.mana.visible = !1,
                                            this.addIcon(o, r, this.m_res1.ctlExchange["item_" + n].token.container, -33.4, -57)
                                    }
                                    0 != e.daymax[s] && (this.m_res1.ctlExchange["item_" + n].txtLimit.text = "(今日:" + i.dtimes[s] + "/" + e.daymax[s] + ")"),
                                    0 != e.max[s] && (this.m_res1.ctlExchange["item_" + n].txtLimit.text = "(" + i.times[s] + "/" + e.max[s] + ")"),
                                        this.m_res1.ctlExchange["item_" + n].txtCost.text = 1 == this.m_exchangeTab ? e.rneed[s] : e.need[s]
                                } else
                                    this.m_res1.ctlExchange["item_" + n].visible = !1
                            }
                            var h = Math.floor(e.id.length / 6) + 1;
                            this.m_res1.ctlExchange.txtPage.text = t + 1 + "/" + h
                        }
                        ,
                        l.updateRecord = function(t) {
                            this.m_recordPage = t;
                            for (var e = [], i = 0, n = 0; n < (0 | (null == (s = this.m_recordData.id) ? void 0 : s.length)); n++) {
                                var s;
                                0 == this.m_recordType ? e[n] = {
                                    id: this.m_recordData.id[n],
                                    type: this.m_recordData.type[n],
                                    count: this.m_recordData.count[n],
                                    title: this.m_recordData.title[n],
                                    year: this.m_recordData.year[n],
                                    mon: this.m_recordData.mon[n],
                                    day: this.m_recordData.day[n]
                                } : this.m_recordData.version[n] == this.m_recordType && (e[i] = {
                                    id: this.m_recordData.id[n],
                                    type: this.m_recordData.type[n],
                                    count: this.m_recordData.count[n],
                                    title: this.m_recordData.title[n],
                                    year: this.m_recordData.year[n],
                                    mon: this.m_recordData.mon[n],
                                    day: this.m_recordData.day[n]
                                },
                                    i++)
                            }
                            for (n = 0; n < 4; n++) {
                                i = 4 * this.m_recordPage + n;
                                this.cleanContainer(this.m_res1.ctlFull.ctlRecord["record_" + n].item.container),
                                    e.length > i ? (this.m_res1.ctlFull.ctlRecord["record_" + n].visible = !0,
                                        this.addIcon(Number(e[i].id), Number(e[i].type), this.m_res1.ctlFull.ctlRecord["record_" + n].item.container, -33.4, -57),
                                        this.m_res1.ctlFull.ctlRecord["record_" + n].txtType.text = e[i].title,
                                        this.m_res1.ctlFull.ctlRecord["record_" + n].txtItem.text = _.getAnyItemName(Number(e[i].type), Number(e[i].id)) + "X" + (4 == e[i].type ? 1 : e[i].count),
                                        this.m_res1.ctlFull.ctlRecord["record_" + n].txtTime.text = e[i].year + "." + e[i].mon + "." + e[i].day) : this.m_res1.ctlFull.ctlRecord["record_" + n].visible = !1
                            }
                            this.m_recordMaxPage = Math.ceil(e.length / 4),
                                this.m_res1.ctlFull.ctlRecord.ctlList.visible = !1,
                                this.m_res1.ctlFull.ctlRecord.txtPage.text = t + 1 + "/" + this.m_recordMaxPage
                        }
                        ,
                        l.updateInfomation = function(t) {
                            this.m_infoTab = t;
                            for (var e = 0; e < 3; e++)
                                t == e ? this.m_res1.ctlInfo["infoTab_" + e].gotoAndStop(1) : this.m_res1.ctlInfo["infoTab_" + e].gotoAndStop(2);
                            this.m_res1.ctlFull.visible = !1,
                                this.m_res1.ctlInfo.visible = !0
                        }
                        ,
                        l.updateInfoPage = function(t) {
                            var e;
                            0 == this.m_infoTab ? e = this.m_data.lotteryinfo[this.m_poolIndex].recommend.toString() : 1 == this.m_infoTab ? e = this.m_data.lotteryinfo[this.m_poolIndex].info.toString() : 2 == this.m_infoTab && (e = this.m_data.lotteryinfo[this.m_poolIndex].reward.toString());
                            var i = e.split("#");
                            this.m_infoPage = Math.max(0, t),
                                this.m_infoPage = Math.min(i.length - 1, this.m_infoPage),
                                this.m_res1.ctlInfo.txtInfo.text = i[this.m_infoPage],
                                this.m_res1.ctlInfo.txtPage.text = this.m_infoPage + 1 + "/" + i.length
                        }
                        ,
                        l.updatePoolPage = function(t, e) {
                            this.m_poolPage = t;
                            for (var i = 0; i < 4; i++) {
                                var n = this.m_poolInfo.length - (4 * t + i) - 1;
                                n >= 0 ? (e == i ? (this.m_res1.ctlFull["summonTab_" + i].gotoAndStop(2),
                                    this.m_res1.ctlFull["summonTab_" + i].buttonMode = !1) : (this.m_res1.ctlFull["summonTab_" + i].gotoAndStop(1),
                                    this.m_res1.ctlFull["summonTab_" + i].buttonMode = !0),
                                    0 == this.m_data.lotteryinfo[this.m_poolInfo[n]].viplimit ? this.m_res1.ctlFull["summonTab_" + i].item.gotoAndStop(1) : this.m_res1.ctlFull["summonTab_" + i].item.gotoAndStop(2),
                                    this.m_res1.ctlFull["summonTab_" + i].item.txtName.text = this.m_data.lotteryinfo[this.m_poolInfo[n]].title,
                                    this.m_res1.ctlFull["summonTab_" + i].visible = !0) : this.m_res1.ctlFull["summonTab_" + i].visible = !1
                            }
                            this.m_res1.ctlFull.btnLastPoolPage.visible = 0 != t,
                                t == Math.ceil(this.m_poolInfo.length / 4) - 1 ? this.m_res1.ctlFull.btnNextPoolPage.visible = !1 : this.m_res1.ctlFull.btnNextPoolPage.visible = !0
                        }
                        ,
                        l.onDataReceived = function(e, i, n) {
                            var s = this;
                            void 0 === n && (n = null),
                                t.prototype.onDataReceived.call(this, e, i, n),
                            this.m_res1 && (this.m_res1.visible = !0);
                            var o = new b(e)
                                , r = e;
                            if (o.value >= 0 && this.m_res1)
                                switch (i) {
                                    case p.CMD_QUERY:
                                        this.m_xml = tt(r),
                                            this.m_data = tt(_.getGlobalValue("draw2023")),
                                            this.send(p.CMD_DATA, null, null, null, !0, !0);
                                        break;
                                    case p.CMD_DATA:
                                        this.m_data = tt(r),
                                            _.setGlobalValue("draw2023", r),
                                            this.m_poolInfo = [];
                                        for (var a = 0, l = 0; l < this.m_data.lotteryinfo.length; l++)
                                            if (0 != this.m_data.lotteryinfo[l].lotteryver) {
                                                this.m_poolInfo.push(l);
                                                var m = new K;
                                                m.x = 0,
                                                    m.y = 54 * a * -1 + 80,
                                                    m.buttonMode = !0,
                                                    m.mouseChildren = !1,
                                                    m.name = "btnList_" + this.m_data.lotteryinfo[l].lotteryver,
                                                    m.on(h.TOUCH_END, this.onResClick, this),
                                                    m.txtType.text = this.m_data.lotteryinfo[l].title,
                                                    this.m_res1.ctlFull.ctlRecord.ctlList.addChild(m.target),
                                                    a++
                                            }
                                        this.m_res1.ctlFull.ctlRecord.ctlList.frame.height = 54 * a,
                                            this.updatePoolPage(0, 0),
                                            this.updatePool(this.m_poolInfo[this.m_poolInfo.length - 1]);
                                        break;
                                    case p.CMD_WISH:
                                        0 == n ? _.showAlert("许愿内容已取消~") : _.showAlert("许愿成功~"),
                                            this.m_xml = tt(r),
                                            this.m_wishIndex = -1,
                                            this.updateWish();
                                        break;
                                    case p.CMD_SUBMIT:
                                        this.m_res1.ctlFull.rewardAnima.visible = !0,
                                            r = tt(r),
                                            setTimeout((function() {
                                                    s.m_res1.ctlFull.rewardAnima.visible = !1,
                                                        s.m_res1.ctlFull.rewardAnima.gotoAndStop(1);
                                                    for (var t = 0; t < 14; t++)
                                                        s.cleanContainer(s.m_res1.ctlFull.ctlReward["item_" + t].container),
                                                            r.getid.length > t ? (s.addIcon(Number(r.getid[t]), Number(r.gettype[t]), s.m_res1.ctlFull.ctlReward["item_" + t].container, -33.4, -57, 4 == r.gettype[t] ? 1 : Number(r.getcount[t])),
                                                                s.m_res1.ctlFull.ctlReward["item_" + t].visible = !0,
                                                                s.m_res1.ctlFull.ctlReward["item_" + t].txtNum.text = "x" + (4 == r.gettype[t] ? 1 : r.getcount[t])) : s.m_res1.ctlFull.ctlReward["item_" + t].visible = !1;
                                                    0 == s.m_xml.show && _.showAlert("若道具上限或宠物仓库已满，将下发至邮箱，请注意及时查收及清空邮箱。"),
                                                        s.m_xml.lotteryinfo = r.lotteryinfo,
                                                        s.m_xml.magicinfo = r.magicinfo,
                                                        s.m_xml.count = r.count,
                                                        s.m_xml.magic = r.magic,
                                                        s.m_xml.show = r.show,
                                                        s.updateWish(),
                                                        s.m_res1.ctlFull.ctlReward.visible = !0,
                                                        s.m_res1.ctlFull.txtCount.text = "今日已召唤：" + s.m_xml.lotteryinfo[s.m_poolIndex].lotterytimes + "/" + s.m_data.lotteryinfo[s.m_poolIndex].dmax,
                                                        s.updateToken([{
                                                            id: Number(s.m_xml.lotteryinfo[s.m_poolIndex].resid),
                                                            type: 2,
                                                            num: Number(s.m_xml.lotteryinfo[s.m_poolIndex].count)
                                                        }], s.m_res1.ctlFull, 1)
                                                }
                                            ), 500);
                                        break;
                                    case 4:
                                    case 5:
                                    case p.CMD_GETGIFT:
                                        _.showCgiXmlRewardList(r),
                                            this.m_xml = tt(r),
                                            this.updateExchange(this.m_exchangeTab),
                                            this.updateExchangePage(this.m_exchangePage),
                                            this.updateToken([{
                                                id: Number(this.m_xml.lotteryinfo[this.m_poolIndex].resid),
                                                type: 2,
                                                num: Number(this.m_xml.lotteryinfo[this.m_poolIndex].count)
                                            }], this.m_res1.ctlFull, 1);
                                        break;
                                    case p.CMD_RECORD:
                                        this.m_recordData = tt(r),
                                            this.m_recordType = 0,
                                            this.updateRecord(0),
                                            this.m_res1.ctlFull.ctlRecord.visible = !0
                                }
                            else
                                -2 != o.value || 4 != i && 5 != i && 6 != i || _.showConfirmAlert("你的洛克钻不足哦，快去充值吧~", (function() {
                                        _.navigateToURL("http://pay.qq.com/ipay/index.shtml?c=lkmzty", "_blank")
                                    }
                                ))
                        }
                        ,
                        i(s, [{
                            key: "CONFIG",
                            get: function() {
                                return p
                            }
                        }]),
                        s
                }(m));
                var I = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._frame = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "frame",
                            get: function() {
                                return this._frame || (this._frame = new x(this.getChildByName("frame"))),
                                    this._frame
                            }
                        }]),
                        n
                }(x)
                    , T = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._container = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "container",
                            get: function() {
                                return this._container || (this._container = new x(this.getChildByName("container"))),
                                    this._container
                            }
                        }]),
                        n
                }(x)
                    , B = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._item = void 0,
                            e._txtItem = void 0,
                            e._txtTime = void 0,
                            e._txtType = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "item",
                            get: function() {
                                return this._item || (this._item = new T(this.getChildByName("item"))),
                                    this._item
                            }
                        }, {
                            key: "txtItem",
                            get: function() {
                                return this._txtItem || (this._txtItem = new x(this.getChildByName("txtItem"))),
                                    this._txtItem
                            }
                        }, {
                            key: "txtTime",
                            get: function() {
                                return this._txtTime || (this._txtTime = new x(this.getChildByName("txtTime"))),
                                    this._txtTime
                            }
                        }, {
                            key: "txtType",
                            get: function() {
                                return this._txtType || (this._txtType = new x(this.getChildByName("txtType"))),
                                    this._txtType
                            }
                        }]),
                        n
                }(x)
                    , R = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._btnCloseRecord = void 0,
                            e._ctlList = void 0,
                            e._btnList = void 0,
                            e._txtPage = void 0,
                            e._btnLastRecord = void 0,
                            e._btnNextRecord = void 0,
                            e._record_0 = void 0,
                            e._record_1 = void 0,
                            e._record_2 = void 0,
                            e._record_3 = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "btnCloseRecord",
                            get: function() {
                                return this._btnCloseRecord || (this._btnCloseRecord = new x(this.getChildByName("btnCloseRecord"))),
                                    this._btnCloseRecord
                            }
                        }, {
                            key: "ctlList",
                            get: function() {
                                return this._ctlList || (this._ctlList = new I(this.getChildByName("ctlList"))),
                                    this._ctlList
                            }
                        }, {
                            key: "btnList",
                            get: function() {
                                return this._btnList || (this._btnList = new x(this.getChildByName("btnList"))),
                                    this._btnList
                            }
                        }, {
                            key: "txtPage",
                            get: function() {
                                return this._txtPage || (this._txtPage = new x(this.getChildByName("txtPage"))),
                                    this._txtPage
                            }
                        }, {
                            key: "btnLastRecord",
                            get: function() {
                                return this._btnLastRecord || (this._btnLastRecord = new x(this.getChildByName("btnLastRecord"))),
                                    this._btnLastRecord
                            }
                        }, {
                            key: "btnNextRecord",
                            get: function() {
                                return this._btnNextRecord || (this._btnNextRecord = new x(this.getChildByName("btnNextRecord"))),
                                    this._btnNextRecord
                            }
                        }, {
                            key: "record_0",
                            get: function() {
                                return this._record_0 || (this._record_0 = new B(this.getChildByName("record_0"))),
                                    this._record_0
                            }
                        }, {
                            key: "record_1",
                            get: function() {
                                return this._record_1 || (this._record_1 = new B(this.getChildByName("record_1"))),
                                    this._record_1
                            }
                        }, {
                            key: "record_2",
                            get: function() {
                                return this._record_2 || (this._record_2 = new B(this.getChildByName("record_2"))),
                                    this._record_2
                            }
                        }, {
                            key: "record_3",
                            get: function() {
                                return this._record_3 || (this._record_3 = new B(this.getChildByName("record_3"))),
                                    this._record_3
                            }
                        }]),
                        n
                }(x)
                    , E = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._txtNum = void 0,
                            e._container = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "txtNum",
                            get: function() {
                                return this._txtNum || (this._txtNum = new x(this.getChildByName("txtNum"))),
                                    this._txtNum
                            }
                        }, {
                            key: "container",
                            get: function() {
                                return this._container || (this._container = new x(this.getChildByName("container"))),
                                    this._container
                            }
                        }]),
                        n
                }(x)
                    , P = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._btnCloseReward = void 0,
                            e._btnCloseReward1 = void 0,
                            e._item_0 = void 0,
                            e._item_1 = void 0,
                            e._item_2 = void 0,
                            e._item_3 = void 0,
                            e._item_4 = void 0,
                            e._item_5 = void 0,
                            e._item_6 = void 0,
                            e._item_7 = void 0,
                            e._item_8 = void 0,
                            e._item_9 = void 0,
                            e._item_10 = void 0,
                            e._item_11 = void 0,
                            e._item_12 = void 0,
                            e._item_13 = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "btnCloseReward",
                            get: function() {
                                return this._btnCloseReward || (this._btnCloseReward = new x(this.getChildByName("btnCloseReward"))),
                                    this._btnCloseReward
                            }
                        }, {
                            key: "btnCloseReward1",
                            get: function() {
                                return this._btnCloseReward1 || (this._btnCloseReward1 = new x(this.getChildByName("btnCloseReward1"))),
                                    this._btnCloseReward1
                            }
                        }, {
                            key: "item_0",
                            get: function() {
                                return this._item_0 || (this._item_0 = new E(this.getChildByName("item_0"))),
                                    this._item_0
                            }
                        }, {
                            key: "item_1",
                            get: function() {
                                return this._item_1 || (this._item_1 = new E(this.getChildByName("item_1"))),
                                    this._item_1
                            }
                        }, {
                            key: "item_2",
                            get: function() {
                                return this._item_2 || (this._item_2 = new E(this.getChildByName("item_2"))),
                                    this._item_2
                            }
                        }, {
                            key: "item_3",
                            get: function() {
                                return this._item_3 || (this._item_3 = new E(this.getChildByName("item_3"))),
                                    this._item_3
                            }
                        }, {
                            key: "item_4",
                            get: function() {
                                return this._item_4 || (this._item_4 = new E(this.getChildByName("item_4"))),
                                    this._item_4
                            }
                        }, {
                            key: "item_5",
                            get: function() {
                                return this._item_5 || (this._item_5 = new E(this.getChildByName("item_5"))),
                                    this._item_5
                            }
                        }, {
                            key: "item_6",
                            get: function() {
                                return this._item_6 || (this._item_6 = new E(this.getChildByName("item_6"))),
                                    this._item_6
                            }
                        }, {
                            key: "item_7",
                            get: function() {
                                return this._item_7 || (this._item_7 = new E(this.getChildByName("item_7"))),
                                    this._item_7
                            }
                        }, {
                            key: "item_8",
                            get: function() {
                                return this._item_8 || (this._item_8 = new E(this.getChildByName("item_8"))),
                                    this._item_8
                            }
                        }, {
                            key: "item_9",
                            get: function() {
                                return this._item_9 || (this._item_9 = new E(this.getChildByName("item_9"))),
                                    this._item_9
                            }
                        }, {
                            key: "item_10",
                            get: function() {
                                return this._item_10 || (this._item_10 = new E(this.getChildByName("item_10"))),
                                    this._item_10
                            }
                        }, {
                            key: "item_11",
                            get: function() {
                                return this._item_11 || (this._item_11 = new E(this.getChildByName("item_11"))),
                                    this._item_11
                            }
                        }, {
                            key: "item_12",
                            get: function() {
                                return this._item_12 || (this._item_12 = new E(this.getChildByName("item_12"))),
                                    this._item_12
                            }
                        }, {
                            key: "item_13",
                            get: function() {
                                return this._item_13 || (this._item_13 = new E(this.getChildByName("item_13"))),
                                    this._item_13
                            }
                        }]),
                        n
                }(x)
                    , D = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._container = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "container",
                            get: function() {
                                return this._container || (this._container = new x(this.getChildByName("container"))),
                                    this._container
                            }
                        }]),
                        n
                }(x)
                    , A = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._btnConfirm = void 0,
                            e._btnGiveup = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "btnConfirm",
                            get: function() {
                                return this._btnConfirm || (this._btnConfirm = new x(this.getChildByName("btnConfirm"))),
                                    this._btnConfirm
                            }
                        }, {
                            key: "btnGiveup",
                            get: function() {
                                return this._btnGiveup || (this._btnGiveup = new x(this.getChildByName("btnGiveup"))),
                                    this._btnGiveup
                            }
                        }]),
                        n
                }(x)
                    , F = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._btnCloseWish = void 0,
                            e._wishTip = void 0,
                            e._des = void 0,
                            e._confirmState = void 0,
                            e._itemWish = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "btnCloseWish",
                            get: function() {
                                return this._btnCloseWish || (this._btnCloseWish = new x(this.getChildByName("btnCloseWish"))),
                                    this._btnCloseWish
                            }
                        }, {
                            key: "wishTip",
                            get: function() {
                                return this._wishTip || (this._wishTip = new x(this.getChildByName("wishTip"))),
                                    this._wishTip
                            }
                        }, {
                            key: "des",
                            get: function() {
                                return this._des || (this._des = new x(this.getChildByName("des"))),
                                    this._des
                            }
                        }, {
                            key: "confirmState",
                            get: function() {
                                return this._confirmState || (this._confirmState = new A(this.getChildByName("confirmState"))),
                                    this._confirmState
                            }
                        }, {
                            key: "itemWish",
                            get: function() {
                                return this._itemWish || (this._itemWish = new D(this.getChildByName("itemWish"))),
                                    this._itemWish
                            }
                        }]),
                        n
                }(x)
                    , L = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._txtName = void 0,
                            e._item = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "txtName",
                            get: function() {
                                return this._txtName = new x(this.item.getChildByName("txtName")),
                                    this._txtName
                            }
                        }, {
                            key: "item",
                            get: function() {
                                return this._item = this.getCurrentNode(),
                                    this._item
                            }
                        }]),
                        n
                }(x)
                    , S = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._item = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "item",
                            get: function() {
                                var t = this.getCurrentNode();
                                if (t) {
                                    var e = t.getComponent(y);
                                    return e ? e.target : new L(t)
                                }
                                return this._item
                            }
                        }]),
                        n
                }(x)
                    , W = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._container = void 0,
                            e._mana = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "container",
                            get: function() {
                                return this._container || (this._container = new x(this.getChildByName("container"))),
                                    this._container
                            }
                        }, {
                            key: "mana",
                            get: function() {
                                return this._mana || (this._mana = new x(this.getChildByName("mana"))),
                                    this._mana
                            }
                        }]),
                        n
                }(x)
                    , M = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._token = void 0,
                            e._txtNum = void 0,
                            e._txtType = void 0,
                            e._btnAdd = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "token",
                            get: function() {
                                return this._token || (this._token = new W(this.getChildByName("token"))),
                                    this._token
                            }
                        }, {
                            key: "txtNum",
                            get: function() {
                                return this._txtNum || (this._txtNum = new x(this.getChildByName("txtNum"))),
                                    this._txtNum
                            }
                        }, {
                            key: "txtType",
                            get: function() {
                                return this._txtType || (this._txtType = new x(this.getChildByName("txtType"))),
                                    this._txtType
                            }
                        }, {
                            key: "btnAdd",
                            get: function() {
                                return this._btnAdd || (this._btnAdd = new x(this.getChildByName("btnAdd"))),
                                    this._btnAdd
                            }
                        }]),
                        n
                }(x)
                    , O = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._btnClose = void 0,
                            e._txtCount = void 0,
                            e._token_1 = void 0,
                            e._token_10 = void 0,
                            e._txtCloseTime = void 0,
                            e._txtWish = void 0,
                            e._rewardIcon = void 0,
                            e._btnLastPoolPage = void 0,
                            e._btnNextPoolPage = void 0,
                            e._btnDraw_1 = void 0,
                            e._btnDraw_10 = void 0,
                            e._btnInfo = void 0,
                            e._btnWish = void 0,
                            e._btnRecord = void 0,
                            e._btnExchange = void 0,
                            e._ctlRecord = void 0,
                            e._ctlReward = void 0,
                            e._ctlWish = void 0,
                            e._rewardAnima = void 0,
                            e._summonTab_0 = void 0,
                            e._summonTab_1 = void 0,
                            e._summonTab_2 = void 0,
                            e._summonTab_3 = void 0,
                            e._tokenItem_0 = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new x(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "txtCount",
                            get: function() {
                                return this._txtCount || (this._txtCount = new x(this.getChildByName("txtCount"))),
                                    this._txtCount
                            }
                        }, {
                            key: "token_1",
                            get: function() {
                                return this._token_1 || (this._token_1 = new x(this.getChildByName("token_1"))),
                                    this._token_1
                            }
                        }, {
                            key: "token_10",
                            get: function() {
                                return this._token_10 || (this._token_10 = new x(this.getChildByName("token_10"))),
                                    this._token_10
                            }
                        }, {
                            key: "txtCloseTime",
                            get: function() {
                                return this._txtCloseTime || (this._txtCloseTime = new x(this.getChildByName("txtCloseTime"))),
                                    this._txtCloseTime
                            }
                        }, {
                            key: "txtWish",
                            get: function() {
                                return this._txtWish || (this._txtWish = new x(this.getChildByName("txtWish"))),
                                    this._txtWish
                            }
                        }, {
                            key: "rewardIcon",
                            get: function() {
                                return this._rewardIcon || (this._rewardIcon = new k(this.getChildByName("rewardIcon"))),
                                    this._rewardIcon
                            }
                        }, {
                            key: "btnLastPoolPage",
                            get: function() {
                                return this._btnLastPoolPage || (this._btnLastPoolPage = new x(this.getChildByName("btnLastPoolPage"))),
                                    this._btnLastPoolPage
                            }
                        }, {
                            key: "btnNextPoolPage",
                            get: function() {
                                return this._btnNextPoolPage || (this._btnNextPoolPage = new x(this.getChildByName("btnNextPoolPage"))),
                                    this._btnNextPoolPage
                            }
                        }, {
                            key: "btnDraw_1",
                            get: function() {
                                return this._btnDraw_1 || (this._btnDraw_1 = new x(this.getChildByName("btnDraw_1"))),
                                    this._btnDraw_1
                            }
                        }, {
                            key: "btnDraw_10",
                            get: function() {
                                return this._btnDraw_10 || (this._btnDraw_10 = new x(this.getChildByName("btnDraw_10"))),
                                    this._btnDraw_10
                            }
                        }, {
                            key: "btnInfo",
                            get: function() {
                                return this._btnInfo || (this._btnInfo = new x(this.getChildByName("btnInfo"))),
                                    this._btnInfo
                            }
                        }, {
                            key: "btnWish",
                            get: function() {
                                return this._btnWish || (this._btnWish = new x(this.getChildByName("btnWish"))),
                                    this._btnWish
                            }
                        }, {
                            key: "btnRecord",
                            get: function() {
                                return this._btnRecord || (this._btnRecord = new x(this.getChildByName("btnRecord"))),
                                    this._btnRecord
                            }
                        }, {
                            key: "btnExchange",
                            get: function() {
                                return this._btnExchange || (this._btnExchange = new x(this.getChildByName("btnExchange"))),
                                    this._btnExchange
                            }
                        }, {
                            key: "ctlRecord",
                            get: function() {
                                return this._ctlRecord || (this._ctlRecord = new R(this.getChildByName("ctlRecord"))),
                                    this._ctlRecord
                            }
                        }, {
                            key: "ctlReward",
                            get: function() {
                                return this._ctlReward || (this._ctlReward = new P(this.getChildByName("ctlReward"))),
                                    this._ctlReward
                            }
                        }, {
                            key: "ctlWish",
                            get: function() {
                                return this._ctlWish || (this._ctlWish = new F(this.getChildByName("ctlWish"))),
                                    this._ctlWish
                            }
                        }, {
                            key: "rewardAnima",
                            get: function() {
                                return this._rewardAnima || (this._rewardAnima = new x(this.getChildByName("rewardAnima"))),
                                    this._rewardAnima
                            }
                        }, {
                            key: "summonTab_0",
                            get: function() {
                                return this._summonTab_0 || (this._summonTab_0 = new S(this.getChildByName("summonTab_0"))),
                                    this._summonTab_0
                            }
                        }, {
                            key: "summonTab_1",
                            get: function() {
                                return this._summonTab_1 || (this._summonTab_1 = new S(this.getChildByName("summonTab_1"))),
                                    this._summonTab_1
                            }
                        }, {
                            key: "summonTab_2",
                            get: function() {
                                return this._summonTab_2 || (this._summonTab_2 = new S(this.getChildByName("summonTab_2"))),
                                    this._summonTab_2
                            }
                        }, {
                            key: "summonTab_3",
                            get: function() {
                                return this._summonTab_3 || (this._summonTab_3 = new S(this.getChildByName("summonTab_3"))),
                                    this._summonTab_3
                            }
                        }, {
                            key: "tokenItem_0",
                            get: function() {
                                return this._tokenItem_0 || (this._tokenItem_0 = new M(this.getChildByName("tokenItem_0"))),
                                    this._tokenItem_0
                            }
                        }]),
                        n
                }(x)
                    , U = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._btnCloseInfo = void 0,
                            e._txtInfo = void 0,
                            e._txtPage = void 0,
                            e._infoTab_0 = void 0,
                            e._infoTab_1 = void 0,
                            e._infoTab_2 = void 0,
                            e._btnInfoLast = void 0,
                            e._btnInfoNext = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "btnCloseInfo",
                            get: function() {
                                return this._btnCloseInfo || (this._btnCloseInfo = new x(this.getChildByName("btnCloseInfo"))),
                                    this._btnCloseInfo
                            }
                        }, {
                            key: "txtInfo",
                            get: function() {
                                return this._txtInfo || (this._txtInfo = new x(this.getChildByName("txtInfo"))),
                                    this._txtInfo
                            }
                        }, {
                            key: "txtPage",
                            get: function() {
                                return this._txtPage || (this._txtPage = new x(this.getChildByName("txtPage"))),
                                    this._txtPage
                            }
                        }, {
                            key: "infoTab_0",
                            get: function() {
                                return this._infoTab_0 || (this._infoTab_0 = new x(this.getChildByName("infoTab_0"))),
                                    this._infoTab_0
                            }
                        }, {
                            key: "infoTab_1",
                            get: function() {
                                return this._infoTab_1 || (this._infoTab_1 = new x(this.getChildByName("infoTab_1"))),
                                    this._infoTab_1
                            }
                        }, {
                            key: "infoTab_2",
                            get: function() {
                                return this._infoTab_2 || (this._infoTab_2 = new x(this.getChildByName("infoTab_2"))),
                                    this._infoTab_2
                            }
                        }, {
                            key: "btnInfoLast",
                            get: function() {
                                return this._btnInfoLast || (this._btnInfoLast = new x(this.getChildByName("btnInfoLast"))),
                                    this._btnInfoLast
                            }
                        }, {
                            key: "btnInfoNext",
                            get: function() {
                                return this._btnInfoNext || (this._btnInfoNext = new x(this.getChildByName("btnInfoNext"))),
                                    this._btnInfoNext
                            }
                        }]),
                        n
                }(x)
                    , H = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._container = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "container",
                            get: function() {
                                return this._container || (this._container = new x(this.getChildByName("container"))),
                                    this._container
                            }
                        }]),
                        n
                }(x)
                    , G = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._btnBuyMin = void 0,
                            e._btnBuyAdd = void 0,
                            e._btnBuy = void 0,
                            e._btnCloseBuy = void 0,
                            e._txtNum = void 0,
                            e._txtCost = void 0,
                            e._token = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "btnBuyMin",
                            get: function() {
                                return this._btnBuyMin || (this._btnBuyMin = new x(this.getChildByName("btnBuyMin"))),
                                    this._btnBuyMin
                            }
                        }, {
                            key: "btnBuyAdd",
                            get: function() {
                                return this._btnBuyAdd || (this._btnBuyAdd = new x(this.getChildByName("btnBuyAdd"))),
                                    this._btnBuyAdd
                            }
                        }, {
                            key: "btnBuy",
                            get: function() {
                                return this._btnBuy || (this._btnBuy = new x(this.getChildByName("btnBuy"))),
                                    this._btnBuy
                            }
                        }, {
                            key: "btnCloseBuy",
                            get: function() {
                                return this._btnCloseBuy || (this._btnCloseBuy = new x(this.getChildByName("btnCloseBuy"))),
                                    this._btnCloseBuy
                            }
                        }, {
                            key: "txtNum",
                            get: function() {
                                return this._txtNum || (this._txtNum = new x(this.getChildByName("txtNum"))),
                                    this._txtNum
                            }
                        }, {
                            key: "txtCost",
                            get: function() {
                                return this._txtCost || (this._txtCost = new x(this.getChildByName("txtCost"))),
                                    this._txtCost
                            }
                        }, {
                            key: "token",
                            get: function() {
                                return this._token || (this._token = new H(this.getChildByName("token"))),
                                    this._token
                            }
                        }]),
                        n
                }(x)
                    , q = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._btnGet = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "btnGet",
                            get: function() {
                                return this._btnGet || (this._btnGet = new x(this.getChildByName("btnGet"))),
                                    this._btnGet
                            }
                        }]),
                        n
                }(x)
                    , V = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._container = void 0,
                            e._mana = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "container",
                            get: function() {
                                return this._container || (this._container = new x(this.getChildByName("container"))),
                                    this._container
                            }
                        }, {
                            key: "mana",
                            get: function() {
                                return this._mana || (this._mana = new x(this.getChildByName("mana"))),
                                    this._mana
                            }
                        }]),
                        n
                }(x)
                    , j = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._token = void 0,
                            e._txtNum = void 0,
                            e._txtType = void 0,
                            e._btnAdd = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "token",
                            get: function() {
                                return this._token || (this._token = new V(this.getChildByName("token"))),
                                    this._token
                            }
                        }, {
                            key: "txtNum",
                            get: function() {
                                return this._txtNum || (this._txtNum = new x(this.getChildByName("txtNum"))),
                                    this._txtNum
                            }
                        }, {
                            key: "txtType",
                            get: function() {
                                return this._txtType || (this._txtType = new x(this.getChildByName("txtType"))),
                                    this._txtType
                            }
                        }, {
                            key: "btnAdd",
                            get: function() {
                                return this._btnAdd || (this._btnAdd = new x(this.getChildByName("btnAdd"))),
                                    this._btnAdd
                            }
                        }]),
                        n
                }(x)
                    , Y = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._container = void 0,
                            e._mana = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "container",
                            get: function() {
                                return this._container || (this._container = new x(this.getChildByName("container"))),
                                    this._container
                            }
                        }, {
                            key: "mana",
                            get: function() {
                                return this._mana || (this._mana = new x(this.getChildByName("mana"))),
                                    this._mana
                            }
                        }]),
                        n
                }(x)
                    , X = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._container = void 0,
                            e._mana = void 0,
                            e._randomEq = void 0,
                            e._txtLimit = void 0,
                            e._txtCost = void 0,
                            e._getState = void 0,
                            e._token = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "container",
                            get: function() {
                                return this._container || (this._container = new x(this.getChildByName("container"))),
                                    this._container
                            }
                        }, {
                            key: "mana",
                            get: function() {
                                return this._mana || (this._mana = new x(this.getChildByName("mana"))),
                                    this._mana
                            }
                        }, {
                            key: "randomEq",
                            get: function() {
                                return this._randomEq || (this._randomEq = new x(this.getChildByName("randomEq"))),
                                    this._randomEq
                            }
                        }, {
                            key: "txtLimit",
                            get: function() {
                                return this._txtLimit || (this._txtLimit = new x(this.getChildByName("txtLimit"))),
                                    this._txtLimit
                            }
                        }, {
                            key: "txtCost",
                            get: function() {
                                return this._txtCost || (this._txtCost = new x(this.getChildByName("txtCost"))),
                                    this._txtCost
                            }
                        }, {
                            key: "getState",
                            get: function() {
                                return this._getState || (this._getState = new q(this.getChildByName("getState"))),
                                    this._getState
                            }
                        }, {
                            key: "token",
                            get: function() {
                                return this._token || (this._token = new Y(this.getChildByName("token"))),
                                    this._token
                            }
                        }]),
                        n
                }(x)
                    , z = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._btnItemLast = void 0,
                            e._btnItemNext = void 0,
                            e._btnCloseExchange = void 0,
                            e._txtPage = void 0,
                            e._ctlBuy = void 0,
                            e._tokenItem_0 = void 0,
                            e._tokenItem_1 = void 0,
                            e._tokenItem_2 = void 0,
                            e._tokenItem_3 = void 0,
                            e._item_0 = void 0,
                            e._item_1 = void 0,
                            e._item_2 = void 0,
                            e._item_3 = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "btnItemLast",
                            get: function() {
                                return this._btnItemLast || (this._btnItemLast = new x(this.getChildByName("btnItemLast"))),
                                    this._btnItemLast
                            }
                        }, {
                            key: "btnItemNext",
                            get: function() {
                                return this._btnItemNext || (this._btnItemNext = new x(this.getChildByName("btnItemNext"))),
                                    this._btnItemNext
                            }
                        }, {
                            key: "btnCloseExchange",
                            get: function() {
                                return this._btnCloseExchange || (this._btnCloseExchange = new x(this.getChildByName("btnCloseExchange"))),
                                    this._btnCloseExchange
                            }
                        }, {
                            key: "txtPage",
                            get: function() {
                                return this._txtPage || (this._txtPage = new x(this.getChildByName("txtPage"))),
                                    this._txtPage
                            }
                        }, {
                            key: "ctlBuy",
                            get: function() {
                                return this._ctlBuy || (this._ctlBuy = new G(this.getChildByName("ctlBuy"))),
                                    this._ctlBuy
                            }
                        }, {
                            key: "tokenItem_0",
                            get: function() {
                                return this._tokenItem_0 || (this._tokenItem_0 = new j(this.getChildByName("tokenItem_0"))),
                                    this._tokenItem_0
                            }
                        }, {
                            key: "tokenItem_1",
                            get: function() {
                                return this._tokenItem_1 || (this._tokenItem_1 = new j(this.getChildByName("tokenItem_1"))),
                                    this._tokenItem_1
                            }
                        }, {
                            key: "tokenItem_2",
                            get: function() {
                                return this._tokenItem_2 || (this._tokenItem_2 = new j(this.getChildByName("tokenItem_2"))),
                                    this._tokenItem_2
                            }
                        }, {
                            key: "tokenItem_3",
                            get: function() {
                                return this._tokenItem_3 || (this._tokenItem_3 = new j(this.getChildByName("tokenItem_3"))),
                                    this._tokenItem_3
                            }
                        }, {
                            key: "item_0",
                            get: function() {
                                return this._item_0 || (this._item_0 = new X(this.getChildByName("item_0"))),
                                    this._item_0
                            }
                        }, {
                            key: "item_1",
                            get: function() {
                                return this._item_1 || (this._item_1 = new X(this.getChildByName("item_1"))),
                                    this._item_1
                            }
                        }, {
                            key: "item_2",
                            get: function() {
                                return this._item_2 || (this._item_2 = new X(this.getChildByName("item_2"))),
                                    this._item_2
                            }
                        }, {
                            key: "item_3",
                            get: function() {
                                return this._item_3 || (this._item_3 = new X(this.getChildByName("item_3"))),
                                    this._item_3
                            }
                        }]),
                        n
                }(x)
                    , Q = function(t) {
                    function s() {
                        var e;
                        return (e = t.call(this) || this)._ctlFull = void 0,
                            e._ctlInfo = void 0,
                            e._ctlExchange = void 0,
                            e._target = C.Instance.getPrefabByName("summon_1600/UIResMain_1600"),
                        e._target && l(e._target) && null == e._target.getComponent(y) && (e._target.addComponent(y).target = n(e)),
                            e
                    }
                    return e(s, t),
                        i(s, [{
                            key: "ctlFull",
                            get: function() {
                                return this._ctlFull || (this._ctlFull = new O(this.getChildByName("ctlFull"))),
                                    this._ctlFull
                            }
                        }, {
                            key: "ctlInfo",
                            get: function() {
                                return this._ctlInfo || (this._ctlInfo = new U(this.getChildByName("ctlInfo"))),
                                    this._ctlInfo
                            }
                        }, {
                            key: "ctlExchange",
                            get: function() {
                                return this._ctlExchange || (this._ctlExchange = new z(this.getChildByName("ctlExchange"))),
                                    this._ctlExchange
                            }
                        }]),
                        s
                }(x)
                    , $ = function(t) {
                    function n() {
                        var e;
                        return (e = t.call(this) || this).onPreRequest(),
                            e
                    }
                    e(n, t);
                    var s = n.prototype;
                    return s.dispose = function() {}
                        ,
                        s.afterLoaded = function() {
                            this.init()
                        }
                        ,
                        s.init = function() {
                            this._isInit
                        }
                        ,
                        s.onInit = function() {
                            this.addChild(this._view)
                        }
                        ,
                        i(n, [{
                            key: "resBundleKey",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return "prefabs/spriteStore/summon_1600/prefabs/Mana"
                            }
                        }]),
                        n
                }(v)
                    , J = function(t) {
                    function s() {
                        var e;
                        return (e = t.call(this) || this)._container = void 0,
                            e._target = C.Instance.getPrefabByName("summon_1600/prefabs/CtlItemChooseItem"),
                        e._target && null == e._target.getComponent(y) && (e._target.addComponent(y).target = n(e)),
                            e
                    }
                    return e(s, t),
                        i(s, [{
                            key: "container",
                            get: function() {
                                return this._container || (this._container = new x(this.getChildByName("container"))),
                                    this._container
                            }
                        }]),
                        s
                }(x)
                    , K = function(t) {
                    function s() {
                        var e;
                        return (e = t.call(this) || this)._txtType = void 0,
                            e._target = C.Instance.getPrefabByName("summon_1600/prefabs/RecordMenuItem"),
                        e._target && null == e._target.getComponent(y) && (e._target.addComponent(y).target = n(e)),
                            e
                    }
                    return e(s, t),
                        i(s, [{
                            key: "txtType",
                            get: function() {
                                return this._txtType || (this._txtType = new x(this.getChildByName("txtType"))),
                                    this._txtType
                            }
                        }]),
                        s
                }(x);
                function Z(t) {
                    return new Proxy(t,{
                        get: function(t, e, i) {
                            if ("symbol" == typeof e || e in t || "number" == typeof e && !isNaN(e)) {
                                if ("number" == typeof e && !isNaN(e))
                                    return t[e];
                                var n = Reflect.get(t, e, i);
                                return "function" == typeof n ? n.bind(t) : n
                            }
                            if (t.length > 0 && null !== t[0] && "object" == typeof t[0]) {
                                if (t.length >= 2 && (N.IS_LOCAL,
                                1 == N.IS_LOCAL))
                                    throw new Error("Method Error.");
                                return t[0][e]
                            }
                        }
                    })
                }
                var tt = t("createSmartProxy", (function t(e) {
                        return "object" != typeof e || null === e ? Array.isArray(e) ? Z(e) : e : new Proxy(e,{
                            get: function(e, i) {
                                var n = !("string" != typeof i || !i.startsWith("$"))
                                    , s = e[i = "string" == typeof i && i.startsWith("$") ? i.substring(1) : i];
                                return null == s || null == s ? t(s) : n ? s : Array.isArray(s) ? Z(s) : "object" == typeof s && null !== s ? t(s) : s
                            }
                        })
                    }
                ));
                s._RF.pop()
            }
        }
    }
));
