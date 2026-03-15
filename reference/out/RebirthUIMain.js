System.register("chunks:///_virtual/RebirthUIMain.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./ActivityAPI.ts", "./global.ts", "./ActivityCommonLogicUIBase.ts", "./XML.ts", "./ActGCManager.ts", "./NetResult.ts", "./AgentNode.ts", "./ResManager.ts", "./RebirthConfig.ts", "./CtlAlertEvolveSpirit.ts", "./SpiritAnimationNodeAgent.ts", "./ButtonHelper.ts", "./WindowMode.ts", "./BuildLogHelper.ts"], (function(t) {
        var e, i, n, s, l, r, h, o, _, c, u, m, a, g, p, d, C, y, x, S, b, f;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass,
                    n = t.assertThisInitialized
            }
                , function(t) {
                    s = t.cclegacy,
                        l = t.NodeEventType,
                        r = t.isValid
                }
                , function(t) {
                    h = t.Constants
                }
                , function(t) {
                    o = t.ActivityAPI
                }
                , function(t) {
                    _ = t.__global
                }
                , function(t) {
                    c = t.ActivityCommonLogicUIBase
                }
                , function(t) {
                    u = t.XML
                }
                , function(t) {
                    m = t.ActGCManager
                }
                , function(t) {
                    a = t.NetResult
                }
                , function(t) {
                    g = t.AgentNodeComponent,
                        p = t.AgentNode
                }
                , function(t) {
                    d = t.default
                }
                , function(t) {
                    C = t.RebirthConfig
                }
                , function(t) {
                    y = t.CtlAlertEvolveSpirit
                }
                , function(t) {
                    x = t.SpiritAnimationNodeAgent
                }
                , function(t) {
                    S = t.ButtonHelper
                }
                , function(t) {
                    b = t.WindowMode
                }
                , function(t) {
                    f = t.default
                }
            ],
            execute: function() {
                s._RF.push({}, "1a2acj032pMQaSswT4EiZQu", "RebirthUIMain", void 0);
                t("RebirthUIMain", function(t) {
                    function s(e) {
                        var i;
                        (i = t.call(this, e) || this).m_res1 = void 0,
                            i.m_ctlAlertUp = void 0,
                            i.sp = void 0,
                            i.itemXml = void 0,
                            i.curChoose = -1,
                            i.canSynFlg = !1,
                            i.curPage = 1,
                            i.totalPage = 0,
                            i.petLen = 0,
                            i.lastPetShowFlg = !1,
                            i.spList = void 0,
                            i.m_args = void 0,
                            i.m_res1 = new A,
                            i.setMainUI(i.m_res1.target),
                            i.m_res1.ctlFull.btnClose.on(l.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.btnShow.on(l.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.btnGetItem.on(l.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.btnInputPet.on(l.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlFull.btnStart.on(l.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlGetItem.btnCloseGetItem.on(l.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlGetItem.btnGoto.on(l.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlGetItem.btnSyn.on(l.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlGetItem.btnSign.on(l.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlGetItem.btnFight.on(l.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlAlert.btnCloseAlert.on(l.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlAlert.btnUp.on(l.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlAlert.btnDown.on(l.TOUCH_END, i.onResClick, n(i)),
                            i.m_res1.ctlAlert.visible = !1,
                            i.m_res1.ctlGetItem.visible = !1,
                            i.m_res1.ctlGetItem.signBtn.gotoAndStop(1),
                            i.m_res1.ctlGetItem.SynBtn.gotoAndStop(1),
                            i.m_res1.ctlGetItem.txtCurItem0.text = "0",
                            i.m_res1.ctlGetItem.txtCurItem1.text = "0",
                            i.m_res1.ctlGetItem.txtCurItem2.text = "0",
                            i.m_res1.ctlGetItem.txtCurItemClip.text = "0个",
                            i.m_res1.ctlGetItem.txtDayLimit.text = "0/5",
                            i.m_res1.ctlGetItem.gotoFightBtn.gotoAndStop(1),
                            i.m_res1.ctlFull.item_0.gotoAndStop(1),
                            i.m_res1.ctlFull.item_1.gotoAndStop(1),
                            i.m_res1.ctlFull.item_2.gotoAndStop(1),
                            i.m_res1.ctlFull.item_0.txt.text = "橙色精粹",
                            i.m_res1.ctlFull.item_1.txt.text = "紫色精粹",
                            i.m_res1.ctlFull.item_2.txt.text = "蓝色精粹",
                            i.m_res1.ctlFull.petMainShow.container.clear(),
                            i.m_res1.ctlFull.txtOldPetName.text = "",
                            i.m_res1.ctlFull.txtOldPetIndex.text = "",
                            i.m_res1.ctlFull.txtOldPetType.text = "",
                            i.m_res1.ctlFull.txtCurPetName.text = "",
                            i.m_res1.ctlFull.txtCurPetIndex.text = "",
                            i.m_res1.ctlFull.txtCurPetType.text = "",
                            i.m_res1.ctlFull.txtPetSkill.text = "",
                            i.m_ctlAlertUp = new y(i.m_res1.ctlChoose,n(i),i.onEvolve.bind(n(i)),i.onLevel.bind(n(i)),0,"");
                        for (var s = _.SysAPI.getGDataAPI().getGlobalVal(h.CONFS), r = new u(s[C.CONF_NAME]).data, o = 0; o < r.SpiritBook.length; o++)
                            "12" == r.SpiritBook[o].id && (i.spList = r.SpiritBook[o].groups.group.spirit);
                        return i
                    }
                    e(s, t);
                    var r = s.prototype;
                    return r.onLevel = function(t) {}
                        ,
                        r.onEvolve = function(t) {
                            this.sp = t;
                            for (var e = 0; e < this.spList.length; e++)
                                if (Number(this.sp.id) == this.spList[e].id) {
                                    this.curChoose = e,
                                        this.m_res1.ctlFull.txtOldPetName.text = o.getSpiritName(this.spList[e].id + ""),
                                        this.m_res1.ctlFull.txtOldPetIndex.text = this.spList[e].id + "",
                                        this.m_res1.ctlFull.txtOldPetType.text = this.sp.level,
                                        this.m_res1.ctlFull.txtCurPetName.text = o.getSpiritName(this.spList[e].nid + ""),
                                        this.m_res1.ctlFull.txtCurPetIndex.text = this.spList[e].nid + "",
                                        this.m_res1.ctlFull.txtCurPetType.text = "1";
                                    var i = this.spList[e].skill;
                                    this.m_res1.ctlFull.txtPetSkill.text = i.replace(/,/g, "\n")
                                }
                            this.setItemShow(),
                                this.setStartBtn()
                        }
                        ,
                        r.dispose = function() {
                            m.dispose(this),
                                this.unsetMainUI(),
                                t.prototype.dispose.call(this)
                        }
                        ,
                        r.onGameCallback = function(t) {
                            t.score > 0 && this.send(C.CMD_SUBMIT, null, null, null, !0, !0)
                        }
                        ,
                        r.onNpcCombatCallBack = function(t) {}
                        ,
                        r.updateInfo = function(t) {
                            void 0 === t && (t = null),
                                this.m_args = t,
                                this.isOpenFromTimePaper = "newsOpen" == t,
                                C.CGI = "three_color_rebirth",
                                this.send(C.CMD_QUERY, null, null, null, !0, !0)
                        }
                        ,
                        r.onResClick = function(t) {
                            t.target;
                            var e = t.target.name;
                            switch (e) {
                                case "btnClose":
                                    this.close();
                                    break;
                                case "btnGoto":
                                    _.UI.alert("", "该功能暂时未实装！", b.OK);
                                    break;
                                case "btnCloseAlert":
                                    this.m_res1.ctlAlert.visible = !1;
                                    break;
                                case "btnShow":
                                    this.m_res1.ctlAlert.visible = !0;
                                    break;
                                case "btnFight":
                                    _.UI.alert("", "该功能暂时未实装！", b.OK);
                                    break;
                                case "btnGetItem":
                                    this.m_res1.ctlGetItem.visible = !0;
                                    break;
                                case "btnSignItem":
                                    C.CGI = "three_color_rebirth",
                                        this.send(C.CMD_SUBMIT, null, null, null, !0, !0);
                                    break;
                                case "btnCloseGetItem":
                                    this.m_res1.ctlGetItem.visible = !1;
                                    break;
                                case "btnInputPet":
                                    C.CGI = "three_color_rebirth",
                                        this.send(C.CMD_QUERY_BAG, null, null, null, !0, !1, !1);
                                    break;
                                case "btnStart":
                                    if (0 == this.m_res1.ctlFull.btnStart.enableTag)
                                        return;
                                    null != this.sp ? (this.curChoose < 12 ? C.CGI = "three_color_rebirth" : C.CGI = "three_color_rebirth1",
                                        this.send(C.CMD_UP, "&id=" + this.sp.id + "&catchtime=" + this.sp.catch_time, null, null, !0)) : o.showAlert("请选择要进行重生的宠物");
                                    break;
                                case "btnUp":
                                    this.curPage > 1 && (this.curPage--,
                                        this.setPage(this.curPage));
                                    break;
                                case "btnDown":
                                    this.curPage < this.totalPage && (this.curPage++,
                                        this.setPage(this.curPage),
                                        this.curPage,
                                        this.totalPage);
                                    break;
                                case "btnSign":
                                    C.CGI = "three_color_rebirth",
                                        this.send(C.CMD_SUBMIT, null, null, null, !0, !0);
                                    break;
                                case "btnSyn":
                                    C.CGI = "three_color_rebirth",
                                        this.send(C.CMD_SYN, null, null, null, !0, !0);
                                    break;
                                default:
                                    var i = e.split("_");
                                    if (2 == i.length)
                                        switch (parseInt(i[1]),
                                            i[0]) {
                                            case "btnSign":
                                                C.CGI = "three_color_rebirth",
                                                    this.send(C.CMD_SUBMIT, null, null, null, !0, !0)
                                        }
                            }
                        }
                        ,
                        r.onDataReceived = function(e, i, n) {
                            void 0 === n && (n = null),
                                t.prototype.onDataReceived.call(this, e, i, n),
                            this.m_res1 && (this.m_res1.visible = !0);
                            var s = new a(e)
                                , l = e;
                            if (s.value >= 0 && this.m_res1)
                                switch (i) {
                                    case C.CMD_QUERY:
                                        l = M(l),
                                            this.itemXml = l,
                                            this.m_res1.ctlGetItem.txtCurItem0.text = l.crystal.num[0] + "个",
                                            this.m_res1.ctlGetItem.txtCurItem1.text = l.crystal.num[1] + "个",
                                            this.m_res1.ctlGetItem.txtCurItem2.text = l.crystal.num[2] + "个",
                                            this.setItemShow(),
                                            this.m_res1.ctlGetItem.txtSign.text = this.itemXml.sign.num + "/3",
                                            0 == Number(l.sign.reward) ? 1 == Number(l.sign.today) ? this.m_res1.ctlGetItem.signBtn.gotoAndStop(3) : this.m_res1.ctlGetItem.signBtn.gotoAndStop(2) : this.m_res1.ctlGetItem.signBtn.gotoAndStop(4),
                                            this.m_res1.ctlGetItem.txtCurItemClip.text = l.clip + "个",
                                            Number(l.clip) > 0 ? this.m_res1.ctlGetItem.SynBtn.gotoAndStop(2) : this.m_res1.ctlGetItem.SynBtn.gotoAndStop(1);
                                        var r = 5 - Number(l.daytimes);
                                        r <= 0 ? this.m_res1.ctlGetItem.gotoFightBtn.gotoAndStop(1) : this.m_res1.ctlGetItem.gotoFightBtn.gotoAndStop(2),
                                            this.m_res1.ctlGetItem.txtDayLimit.text = r + "/5",
                                            1 == Number(l.flag) ? this.lastPetShowFlg = !0 : this.lastPetShowFlg = !1,
                                            this.petLen = l.rebirth.length,
                                            this.totalPage = Math.ceil(l.rebirth.length / 12),
                                            this.setPage(this.curPage),
                                        this.m_args && this.onEvolve(this.m_args),
                                            this.m_args = null;
                                        break;
                                    case C.CMD_SUBMIT:
                                    case C.CMD_SYN:
                                        1 != s.value && o.showCgiXmlRewardList(l),
                                            C.CGI = "three_color_rebirth",
                                            this.send(C.CMD_QUERY, null, null, null, !0, !0);
                                        break;
                                    case C.CMD_QUERY_BAG:
                                        this.m_ctlAlertUp.show(l);
                                        break;
                                    case C.CMD_UP:
                                        1 != s.value && 0 != Number(l.newpetid) && o.showAlert("恭喜，重生成功，新宠物已经放入你的背包！"),
                                            this.m_res1.ctlFull.txtOldPetName.text = "",
                                            this.m_res1.ctlFull.txtOldPetIndex.text = "",
                                            this.m_res1.ctlFull.txtOldPetType.text = "",
                                            this.m_res1.ctlFull.txtCurPetName.text = "",
                                            this.m_res1.ctlFull.txtCurPetIndex.text = "",
                                            this.m_res1.ctlFull.txtCurPetType.text = "",
                                            this.m_res1.ctlFull.txtPetSkill.text = "",
                                            this.m_res1.ctlFull.petMainShow.container.clear(),
                                            this.curChoose = -1,
                                            C.CGI = "three_color_rebirth",
                                            this.send(C.CMD_QUERY, null, null, null, !0, !0)
                                }
                        }
                        ,
                        r.setItemShow = function() {
                            var t = ["橙色精粹", "紫色精粹", "蓝色精粹"];
                            if (-1 != this.curChoose) {
                                for (var e = 0; e < this.itemXml.crystal.num.length; e++)
                                    Number(this.itemXml.crystal.num[e]) >= Number(this.itemXml.need[this.curChoose].num[e]) ? this.m_res1.ctlFull["item_" + e].gotoAndStop(2) : this.m_res1.ctlFull["item_" + e].gotoAndStop(1),
                                        this.m_res1.ctlFull["item_" + e].txt.text = t[e] + ":" + this.itemXml.need[this.curChoose].num[e];
                                Number(this.itemXml.crystal.num[0]) >= Number(this.itemXml.need[this.curChoose].num[0]) && Number(this.itemXml.crystal.num[1]) >= Number(this.itemXml.need[this.curChoose].num[1]) && Number(this.itemXml.crystal.num[2]) >= Number(this.itemXml.need[this.curChoose].num[2]) ? this.canSynFlg = !0 : this.canSynFlg = !1
                            } else
                                this.m_res1.ctlFull.item_0.txt.text = "橙色精粹",
                                    this.m_res1.ctlFull.item_1.txt.text = "紫色精粹",
                                    this.m_res1.ctlFull.item_2.txt.text = "蓝色精粹",
                                    this.canSynFlg = !1
                        }
                        ,
                        r.setPage = function(t) {
                            this.m_res1.ctlAlert.txtPage.text = t + "/" + this.totalPage;
                            for (var e = 0; e < 12; e++)
                                this.cleanContainer(this.m_res1.ctlAlert["sp" + e].container),
                                    this.m_res1.ctlAlert["sp" + e].txtName.text = "";
                            var i = 12 * (t - 1)
                                , n = 0;
                            n = t == this.totalPage ? this.petLen : 12 * t;
                            for (var s = i; s < n; s++) {
                                var l = o.getSpiritIcon(this.spList[s].id);
                                this.m_res1.ctlAlert["sp" + (s - i)].container.addChild(l),
                                    this.m_res1.ctlAlert["sp" + (s - i)].txtName.text = o.getSpiritName(this.spList[s].id + "")
                            }
                        }
                        ,
                        r.cleanContainer = function(t) {
                            for (var e = 0; e < t.children.length; e++)
                                t.removeChildAt(0, !0)
                        }
                        ,
                        r.setStartBtn = function() {
                            this.canSynFlg && null != this.sp ? S.setButton(this.m_res1.ctlFull.btnStart) : S.setButtonGray(this.m_res1.ctlFull.btnStart),
                                null != this.sp ? (this.m_res1.ctlFull.petMainShow.container.clear(),
                                1934 == this.sp.id || this.sp.id,
                                    this.m_res1.ctlFull.petMainShow.container.load(this.sp.id)) : this.m_res1.ctlFull.petMainShow.container.clear()
                        }
                        ,
                        i(s, [{
                            key: "CONFIG",
                            get: function() {
                                return C
                            }
                        }]),
                        s
                }(c));
                var N = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._btnGoto = void 0,
                            e._signBtn = void 0,
                            e._txtSign = void 0,
                            e._getItemBtn = void 0,
                            e._SynBtn = void 0,
                            e._btnSign = void 0,
                            e._btnSyn = void 0,
                            e._txtCurItem0 = void 0,
                            e._txtCurItem1 = void 0,
                            e._txtCurItem2 = void 0,
                            e._txtCurItemClip = void 0,
                            e._txtDayLimit = void 0,
                            e._gotoFightBtn = void 0,
                            e._btnFight = void 0,
                            e._btnCloseGetItem = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "btnGoto",
                            get: function() {
                                return this._btnGoto || (this._btnGoto = new p(this.getChildByName("btnGoto"))),
                                    this._btnGoto
                            }
                        }, {
                            key: "signBtn",
                            get: function() {
                                return this._signBtn || (this._signBtn = new p(this.getChildByName("signBtn"))),
                                    this._signBtn
                            }
                        }, {
                            key: "txtSign",
                            get: function() {
                                return this._txtSign || (this._txtSign = new p(this.getChildByName("txtSign"))),
                                    this._txtSign
                            }
                        }, {
                            key: "getItemBtn",
                            get: function() {
                                return this._getItemBtn || (this._getItemBtn = new p(this.getChildByName("getItemBtn"))),
                                    this._getItemBtn
                            }
                        }, {
                            key: "SynBtn",
                            get: function() {
                                return this._SynBtn || (this._SynBtn = new p(this.getChildByName("SynBtn"))),
                                    this._SynBtn
                            }
                        }, {
                            key: "btnSign",
                            get: function() {
                                return this._btnSign || (this._btnSign = new p(this.getChildByName("signBtn").getChildByName("btnSign"))),
                                    this._btnSign
                            }
                        }, {
                            key: "btnSyn",
                            get: function() {
                                return this._btnSyn || (this._btnSyn = new p(this.getChildByName("SynBtn").getChildByName("btnSyn"))),
                                    this._btnSyn
                            }
                        }, {
                            key: "txtCurItem0",
                            get: function() {
                                return this._txtCurItem0 || (this._txtCurItem0 = new p(this.getChildByName("txtCurItem0"))),
                                    this._txtCurItem0
                            }
                        }, {
                            key: "txtCurItem1",
                            get: function() {
                                return this._txtCurItem1 || (this._txtCurItem1 = new p(this.getChildByName("txtCurItem1"))),
                                    this._txtCurItem1
                            }
                        }, {
                            key: "txtCurItem2",
                            get: function() {
                                return this._txtCurItem2 || (this._txtCurItem2 = new p(this.getChildByName("txtCurItem2"))),
                                    this._txtCurItem2
                            }
                        }, {
                            key: "txtCurItemClip",
                            get: function() {
                                return this._txtCurItemClip || (this._txtCurItemClip = new p(this.getChildByName("txtCurItemClip"))),
                                    this._txtCurItemClip
                            }
                        }, {
                            key: "txtDayLimit",
                            get: function() {
                                return this._txtDayLimit || (this._txtDayLimit = new p(this.getChildByName("txtDayLimit"))),
                                    this._txtDayLimit
                            }
                        }, {
                            key: "gotoFightBtn",
                            get: function() {
                                return this._gotoFightBtn || (this._gotoFightBtn = new p(this.getChildByName("gotoFightBtn"))),
                                    this._gotoFightBtn
                            }
                        }, {
                            key: "btnFight",
                            get: function() {
                                return this._btnFight || (this._btnFight = new p(this.getChildByName("gotoFightBtn").getChildByName("btnFight"))),
                                    this._btnFight
                            }
                        }, {
                            key: "btnCloseGetItem",
                            get: function() {
                                return this._btnCloseGetItem || (this._btnCloseGetItem = new p(this.getChildByName("btnCloseGetItem"))),
                                    this._btnCloseGetItem
                            }
                        }]),
                        n
                }(p)
                    , I = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._txt = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "txt",
                            get: function() {
                                return this._txt || (this._txt = new p(this.getChildByName("txt"))),
                                    this._txt
                            }
                        }]),
                        n
                }(p)
                    , v = function(t) {
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
                }(p)
                    , w = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._btnClose = void 0,
                            e._item_0 = void 0,
                            e._item_1 = void 0,
                            e._item_2 = void 0,
                            e._inputPetBtn = void 0,
                            e._petMainShow = void 0,
                            e._txtOldPetName = void 0,
                            e._txtOldPetIndex = void 0,
                            e._txtOldPetType = void 0,
                            e._txtCurPetName = void 0,
                            e._txtCurPetIndex = void 0,
                            e._txtCurPetType = void 0,
                            e._txtPetSkill = void 0,
                            e._petShow = void 0,
                            e._btnShow = void 0,
                            e._btnGetItem = void 0,
                            e._btnInputPet = void 0,
                            e._btnStart = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new p(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "item_0",
                            get: function() {
                                return this._item_0 || (this._item_0 = new I(this.getChildByName("item_0"))),
                                    this._item_0
                            }
                        }, {
                            key: "item_1",
                            get: function() {
                                return this._item_1 || (this._item_1 = new I(this.getChildByName("item_1"))),
                                    this._item_1
                            }
                        }, {
                            key: "item_2",
                            get: function() {
                                return this._item_2 || (this._item_2 = new I(this.getChildByName("item_2"))),
                                    this._item_2
                            }
                        }, {
                            key: "inputPetBtn",
                            get: function() {
                                return this._inputPetBtn || (this._inputPetBtn = new p(this.getChildByName("inputPetBtn"))),
                                    this._inputPetBtn
                            }
                        }, {
                            key: "petMainShow",
                            get: function() {
                                return this._petMainShow || (this._petMainShow = new v(this.getChildByName("petMainShow"))),
                                    this._petMainShow
                            }
                        }, {
                            key: "txtOldPetName",
                            get: function() {
                                return this._txtOldPetName || (this._txtOldPetName = new p(this.getChildByName("txtOldPetName"))),
                                    this._txtOldPetName
                            }
                        }, {
                            key: "txtOldPetIndex",
                            get: function() {
                                return this._txtOldPetIndex || (this._txtOldPetIndex = new p(this.getChildByName("txtOldPetIndex"))),
                                    this._txtOldPetIndex
                            }
                        }, {
                            key: "txtOldPetType",
                            get: function() {
                                return this._txtOldPetType || (this._txtOldPetType = new p(this.getChildByName("txtOldPetType"))),
                                    this._txtOldPetType
                            }
                        }, {
                            key: "txtCurPetName",
                            get: function() {
                                return this._txtCurPetName || (this._txtCurPetName = new p(this.getChildByName("txtCurPetName"))),
                                    this._txtCurPetName
                            }
                        }, {
                            key: "txtCurPetIndex",
                            get: function() {
                                return this._txtCurPetIndex || (this._txtCurPetIndex = new p(this.getChildByName("txtCurPetIndex"))),
                                    this._txtCurPetIndex
                            }
                        }, {
                            key: "txtCurPetType",
                            get: function() {
                                return this._txtCurPetType || (this._txtCurPetType = new p(this.getChildByName("txtCurPetType"))),
                                    this._txtCurPetType
                            }
                        }, {
                            key: "txtPetSkill",
                            get: function() {
                                return this._txtPetSkill || (this._txtPetSkill = new p(this.getChildByName("txtPetSkill"))),
                                    this._txtPetSkill
                            }
                        }, {
                            key: "petShow",
                            get: function() {
                                return this._petShow || (this._petShow = new p(this.getChildByName("petShow"))),
                                    this._petShow
                            }
                        }, {
                            key: "btnShow",
                            get: function() {
                                return this._btnShow || (this._btnShow = new p(this.getChildByName("btnShow"))),
                                    this._btnShow
                            }
                        }, {
                            key: "btnGetItem",
                            get: function() {
                                return this._btnGetItem || (this._btnGetItem = new p(this.getChildByName("btnGetItem"))),
                                    this._btnGetItem
                            }
                        }, {
                            key: "btnInputPet",
                            get: function() {
                                return this._btnInputPet || (this._btnInputPet = new p(this.getChildByName("btnInputPet"))),
                                    this._btnInputPet
                            }
                        }, {
                            key: "btnStart",
                            get: function() {
                                return this._btnStart || (this._btnStart = new p(this.getChildByName("btnStart"))),
                                    this._btnStart
                            }
                        }]),
                        n
                }(p)
                    , B = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._ctlSelected = void 0,
                            e._container = void 0,
                            e._txtLevel = void 0,
                            e._txtPRS = void 0,
                            e._txtName = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "ctlSelected",
                            get: function() {
                                return this._ctlSelected || (this._ctlSelected = new p(this.getChildByName("ctlSelected"))),
                                    this._ctlSelected
                            }
                        }, {
                            key: "container",
                            get: function() {
                                return this._container || (this._container = new x(this.getChildByName("container"))),
                                    this._container
                            }
                        }, {
                            key: "txtLevel",
                            get: function() {
                                return this._txtLevel || (this._txtLevel = new p(this.getChildByName("txtLevel"))),
                                    this._txtLevel
                            }
                        }, {
                            key: "txtPRS",
                            get: function() {
                                return this._txtPRS || (this._txtPRS = new p(this.getChildByName("txtPRS"))),
                                    this._txtPRS
                            }
                        }, {
                            key: "txtName",
                            get: function() {
                                return this._txtName || (this._txtName = new p(this.getChildByName("txtName"))),
                                    this._txtName
                            }
                        }]),
                        n
                }(p)
                    , P = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._btnClose_chooseSP = void 0,
                            e._btnSubmit_chooseSP = void 0,
                            e._ctlSp0 = void 0,
                            e._ctlSp1 = void 0,
                            e._ctlSp2 = void 0,
                            e._ctlSp3 = void 0,
                            e._ctlSp4 = void 0,
                            e._ctlSp5 = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "btnClose_chooseSP",
                            get: function() {
                                return this._btnClose_chooseSP || (this._btnClose_chooseSP = new p(this.getChildByName("btnClose_chooseSP"))),
                                    this._btnClose_chooseSP
                            }
                        }, {
                            key: "btnSubmit_chooseSP",
                            get: function() {
                                return this._btnSubmit_chooseSP || (this._btnSubmit_chooseSP = new p(this.getChildByName("btnSubmit_chooseSP"))),
                                    this._btnSubmit_chooseSP
                            }
                        }, {
                            key: "ctlSp0",
                            get: function() {
                                return this._ctlSp0 || (this._ctlSp0 = new B(this.getChildByName("ctlSp0"))),
                                    this._ctlSp0
                            }
                        }, {
                            key: "ctlSp1",
                            get: function() {
                                return this._ctlSp1 || (this._ctlSp1 = new B(this.getChildByName("ctlSp1"))),
                                    this._ctlSp1
                            }
                        }, {
                            key: "ctlSp2",
                            get: function() {
                                return this._ctlSp2 || (this._ctlSp2 = new B(this.getChildByName("ctlSp2"))),
                                    this._ctlSp2
                            }
                        }, {
                            key: "ctlSp3",
                            get: function() {
                                return this._ctlSp3 || (this._ctlSp3 = new B(this.getChildByName("ctlSp3"))),
                                    this._ctlSp3
                            }
                        }, {
                            key: "ctlSp4",
                            get: function() {
                                return this._ctlSp4 || (this._ctlSp4 = new B(this.getChildByName("ctlSp4"))),
                                    this._ctlSp4
                            }
                        }, {
                            key: "ctlSp5",
                            get: function() {
                                return this._ctlSp5 || (this._ctlSp5 = new B(this.getChildByName("ctlSp5"))),
                                    this._ctlSp5
                            }
                        }]),
                        n
                }(p)
                    , k = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._ctlSp = void 0,
                            e._txtName = void 0,
                            e._container = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "ctlSp",
                            get: function() {
                                return this._ctlSp || (this._ctlSp = new B(this.getChildByName("ctlSp"))),
                                    this._ctlSp
                            }
                        }, {
                            key: "txtName",
                            get: function() {
                                return this._txtName || (this._txtName = new p(this.getChildByName("txtName"))),
                                    this._txtName
                            }
                        }, {
                            key: "container",
                            get: function() {
                                return this._container || (this._container = new p(this.getChildByName("container"))),
                                    this._container
                            }
                        }]),
                        n
                }(p)
                    , F = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._txtPage = void 0,
                            e._btnCloseAlert = void 0,
                            e._btnUp = void 0,
                            e._btnDown = void 0,
                            e._sp0 = void 0,
                            e._sp1 = void 0,
                            e._sp2 = void 0,
                            e._sp3 = void 0,
                            e._sp4 = void 0,
                            e._sp5 = void 0,
                            e._sp6 = void 0,
                            e._sp7 = void 0,
                            e._sp8 = void 0,
                            e._sp9 = void 0,
                            e._sp10 = void 0,
                            e._sp11 = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "txtPage",
                            get: function() {
                                return this._txtPage || (this._txtPage = new p(this.getChildByName("txtPage"))),
                                    this._txtPage
                            }
                        }, {
                            key: "btnCloseAlert",
                            get: function() {
                                return this._btnCloseAlert || (this._btnCloseAlert = new p(this.getChildByName("btnCloseAlert"))),
                                    this._btnCloseAlert
                            }
                        }, {
                            key: "btnUp",
                            get: function() {
                                return this._btnUp || (this._btnUp = new p(this.getChildByName("btnUp"))),
                                    this._btnUp
                            }
                        }, {
                            key: "btnDown",
                            get: function() {
                                return this._btnDown || (this._btnDown = new p(this.getChildByName("btnDown"))),
                                    this._btnDown
                            }
                        }, {
                            key: "sp0",
                            get: function() {
                                return this._sp0 || (this._sp0 = new k(this.getChildByName("sp0"))),
                                    this._sp0
                            }
                        }, {
                            key: "sp1",
                            get: function() {
                                return this._sp1 || (this._sp1 = new k(this.getChildByName("sp1"))),
                                    this._sp1
                            }
                        }, {
                            key: "sp2",
                            get: function() {
                                return this._sp2 || (this._sp2 = new k(this.getChildByName("sp2"))),
                                    this._sp2
                            }
                        }, {
                            key: "sp3",
                            get: function() {
                                return this._sp3 || (this._sp3 = new k(this.getChildByName("sp3"))),
                                    this._sp3
                            }
                        }, {
                            key: "sp4",
                            get: function() {
                                return this._sp4 || (this._sp4 = new k(this.getChildByName("sp4"))),
                                    this._sp4
                            }
                        }, {
                            key: "sp5",
                            get: function() {
                                return this._sp5 || (this._sp5 = new k(this.getChildByName("sp5"))),
                                    this._sp5
                            }
                        }, {
                            key: "sp6",
                            get: function() {
                                return this._sp6 || (this._sp6 = new k(this.getChildByName("sp6"))),
                                    this._sp6
                            }
                        }, {
                            key: "sp7",
                            get: function() {
                                return this._sp7 || (this._sp7 = new k(this.getChildByName("sp7"))),
                                    this._sp7
                            }
                        }, {
                            key: "sp8",
                            get: function() {
                                return this._sp8 || (this._sp8 = new k(this.getChildByName("sp8"))),
                                    this._sp8
                            }
                        }, {
                            key: "sp9",
                            get: function() {
                                return this._sp9 || (this._sp9 = new k(this.getChildByName("sp9"))),
                                    this._sp9
                            }
                        }, {
                            key: "sp10",
                            get: function() {
                                return this._sp10 || (this._sp10 = new k(this.getChildByName("sp10"))),
                                    this._sp10
                            }
                        }, {
                            key: "sp11",
                            get: function() {
                                return this._sp11 || (this._sp11 = new k(this.getChildByName("sp11"))),
                                    this._sp11
                            }
                        }]),
                        n
                }(p)
                    , A = function(t) {
                    function s() {
                        var e;
                        return (e = t.call(this) || this)._ctlFull = void 0,
                            e._ctlGetItem = void 0,
                            e._ctlChoose = void 0,
                            e._ctlAlert = void 0,
                            e._target = d.Instance.getPrefabByName("rebirth/UIResMain_1600"),
                        e._target && r(e._target) && null == e._target.getComponent(g) && (e._target.addComponent(g).target = n(e)),
                            e
                    }
                    return e(s, t),
                        i(s, [{
                            key: "ctlFull",
                            get: function() {
                                return this._ctlFull || (this._ctlFull = new w(this.getChildByName("ctlFull"))),
                                    this._ctlFull
                            }
                        }, {
                            key: "ctlGetItem",
                            get: function() {
                                return this._ctlGetItem || (this._ctlGetItem = new N(this.getChildByName("ctlGetItem"))),
                                    this._ctlGetItem
                            }
                        }, {
                            key: "ctlChoose",
                            get: function() {
                                return this._ctlChoose || (this._ctlChoose = new P(this.getChildByName("ctlChoose"))),
                                    this._ctlChoose
                            }
                        }, {
                            key: "ctlAlert",
                            get: function() {
                                return this._ctlAlert || (this._ctlAlert = new F(this.getChildByName("ctlAlert"))),
                                    this._ctlAlert
                            }
                        }]),
                        s
                }(p);
                function G(t) {
                    return new Proxy(t,{
                        get: function(t, e, i) {
                            if ("symbol" == typeof e || e in t || "number" == typeof e && !isNaN(e)) {
                                if ("number" == typeof e && !isNaN(e))
                                    return t[e];
                                var n = Reflect.get(t, e, i);
                                return "function" == typeof n ? n.bind(t) : n
                            }
                            if (t.length > 0 && null !== t[0] && "object" == typeof t[0]) {
                                if (t.length >= 2 && (f.IS_LOCAL,
                                1 == f.IS_LOCAL))
                                    throw new Error("Method Error.");
                                return t[0][e]
                            }
                        }
                    })
                }
                var M = t("createSmartProxy", (function t(e) {
                        return "object" != typeof e || null === e ? Array.isArray(e) ? G(e) : e : new Proxy(e,{
                            get: function(e, i) {
                                var n = !("string" != typeof i || !i.startsWith("$"))
                                    , s = e[i = "string" == typeof i && i.startsWith("$") ? i.substring(1) : i];
                                return null == s || null == s ? t(s) : n ? s : Array.isArray(s) ? G(s) : "object" == typeof s && null !== s ? t(s) : s
                            }
                        })
                    }
                ));
                s._RF.pop()
            }
        }
    }
));
