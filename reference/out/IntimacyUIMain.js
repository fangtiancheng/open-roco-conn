System.register("chunks:///_virtual/IntimacyUIMain.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./IntimacyConfig.ts", "./ActivityAPI.ts", "./ResManager.ts", "./WindowBase.ts", "./FilterFactory.ts", "./DEFINE.ts", "./global.ts", "./CGIEvent.ts", "./CGILoader.ts", "./SpiritBagIntimacyIcon.ts", "./NetResult.ts"], (function(t) {
        var i, e, n, s, r, u, h, d, o, _, a, c, C, m, l, B, g, x;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass,
                    n = t.assertThisInitialized
            }
                , function(t) {
                    s = t.cclegacy,
                        r = t.NodeEventType
                }
                , function(t) {
                    u = t.AgentNodeComponent,
                        h = t.AgentNode
                }
                , function(t) {
                    d = t.IntimacyConfig
                }
                , function(t) {
                    o = t.ActivityAPI
                }
                , function(t) {
                    _ = t.default
                }
                , function(t) {
                    a = t.WindowBase
                }
                , function(t) {
                    c = t.FilterFactory
                }
                , function(t) {
                    C = t.DEFINE
                }
                , function(t) {
                    m = t.__global
                }
                , function(t) {
                    l = t.CGIEvent
                }
                , function(t) {
                    B = t.CGILoader
                }
                , function(t) {
                    g = t.SpiritBagIntimacyIcon
                }
                , function(t) {
                    x = t.NetResult
                }
            ],
            execute: function() {
                s._RF.push({}, "a3501Y2iOxJCqdKn4Oghfb/", "IntimacyUIMain", void 0);
                t("IntimacyUIMain", function(t) {
                    function s(i, e) {
                        var s;
                        void 0 === e && (e = !1),
                            (s = t.call(this) || this).m_res = void 0,
                            s.type = 0,
                            s._curCount0 = 0,
                            s._curCount1 = 0,
                            s._curCount2 = 0,
                            s._curCount3 = 0,
                            s._curCount4 = 0,
                            s._spiritID = 0,
                            s._spiritCatchtime = 0,
                            s._spiriCount0 = 0,
                            s._spiriCount1 = 0,
                            s._spiriCount2 = 0,
                            s._spiriCount3 = 0,
                            s._spiriCount4 = 0,
                            s._spiritAddPlan = 0,
                            s._canAddPlan = !1,
                            s._canRefresh = !1,
                            s._typeName = ["亲密", "不弃", "形影", "灵犀", "友好"],
                            s._typeArr = ["00122", "00212", "00221", "01022", "01112", "01121", "01202", "01211", "01220", "02012", "02021", "02102", "02111", "02120", "02201", "02210", "10022", "10112", "10121", "10202", "10211", "10220", "11012", "11021", "11102", "11111", "11120", "11201", "11210", "12002", "12011", "12020", "12101", "12110", "12200", "20012", "20021", "20102", "20111", "20120", "20201", "20210", "21002", "21011", "21020", "21101", "21110", "21200", "22001", "22010", "22100"],
                            s._loader = void 0,
                            s.m_args = void 0,
                            s._spiritData = void 0;
                        var u = _.Instance.getPrefabByName("SpiritBag_1600/IntimacyUI");
                        s.m_res = new y(u),
                            s.addChild(s.m_res.target),
                            s.initialize(i, null, null, null, e);
                        for (var h = 0; h < 5; h++)
                            s.m_res["addBtn" + h].on(r.TOUCH_END, s.onResClick, n(s)),
                                s.m_res["reduceBtn" + h].on(r.TOUCH_END, s.onResClick, n(s)),
                                c.setAshingFilter(s.m_res["reduceBtn" + h], !1),
                                c.setAshingFilter(s.m_res["addBtn" + h], !1),
                                s.m_res["txtNum" + h].text = "0",
                                s.m_res["txtCount" + h].text = "0";
                        return s.m_res.btnClose.on(r.TOUCH_END, s.onResClick, n(s)),
                            s.m_res.btnCancel.on(r.TOUCH_END, s.onResClick, n(s)),
                            s.m_res.saveBtn.on(r.TOUCH_END, s.onResClick, n(s)),
                            c.setAshingFilter(s.m_res.saveBtn, !1),
                            s.m_res.txtSurplus.text = "50",
                            s._loader = new B(C.CGI_ROOT + d.CGI,m.SysAPI.getNetSysAPI().createURLLoader(!0)),
                            s._loader.addEventListener(l.COMPLETE, s.onDataReceived, n(s)),
                            s._loader.addEventListener(l.GOT_ERROR, s.onNetError, n(s)),
                            s.data = null,
                            s
                    }
                    i(s, t);
                    var h = s.prototype;
                    return h.onNetError = function(t) {
                        m.UI.alert("", t.msg)
                    }
                        ,
                        h.dispose = function() {}
                        ,
                        h.onGameCallback = function(t) {
                            t.score
                        }
                        ,
                        h.onNpcCombatCallBack = function(t) {}
                        ,
                        h.updateInfo = function(t) {
                            if (void 0 === t && (t = null),
                                this.m_args = t,
                                this._curCount0 = 0,
                                this._curCount1 = 0,
                                this._curCount2 = 0,
                                this._curCount3 = 0,
                                this._curCount4 = 0,
                                t ? (this._spiritID = t.spiritID,
                                    this._spiritCatchtime = t.spiritCatchtime,
                                    this._spiritAddPlan = t.spiritAddPlan,
                                    this._spiriCount0 = t.spiriCount0,
                                    this._spiriCount1 = t.spiriCount1,
                                    this._spiriCount2 = t.spiriCount2,
                                    this._spiriCount3 = t.spiriCount3,
                                    this._spiriCount4 = t.spiriCount4,
                                    this._spiritData = t.spiritData,
                                    this.data = this._spiritData) : this.data = null,
                            this._spiritAddPlan > 0)
                                if (this._spiritAddPlan > 51)
                                    this._canAddPlan = !1,
                                        this.setBtn(0, 0, 0, 0, 0, !1),
                                        o.showAlert("初始宠物默认满亲密度，无法加点！");
                                else {
                                    this._canAddPlan = !1;
                                    for (var i = [], e = 0; e < this._typeArr[this._spiritAddPlan - 1].length; e++) {
                                        var n = Number(this._typeArr[this._spiritAddPlan - 1].charAt(e));
                                        "NaN" != String(n) && i.push(Number(n))
                                    }
                                    this.setBtn(i[0], i[1], i[2], i[3], i[4], !0)
                                }
                            else
                                this._canAddPlan = !0,
                                    this.setBtn(0, 0, 0, 0, 0, !1)
                        }
                        ,
                        h.onResClick = function(t) {
                            var i = this;
                            t.target;
                            if (0 != t.target.getComponent(u).target.enableTag) {
                                var e = t.target.name;
                                switch (e) {
                                    case "btnClose":
                                    case "btnCancel":
                                        this._canRefresh && o.dispatchGlobalEvent("2114_Save", this.type),
                                            this.close();
                                        break;
                                    case "saveBtn":
                                        o.showConfirmAlert("确定要按这个方案加点吗？保存后不可更改了哦，遗忘亲密度后可以重新培养。", (function() {
                                                var t = "?cmd=" + d.CMD_SAVETYPE + "&id=" + i._spiritID + "&catchtime=" + i._spiritCatchtime + "&addtype=" + (i.checkType() + 1);
                                                i._loader.sendData1(t, d.CMD_SAVETYPE)
                                            }
                                        ));
                                        break;
                                    default:
                                        var n, s = e.charAt(e.length - 1), r = e.slice(0, e.length - 1);
                                        switch (n = parseInt(s),
                                            r) {
                                            case "reduceBtn":
                                                0 == n ? this._curCount0 > 0 && this._curCount0-- : 1 == n ? this._curCount1 > 0 && this._curCount1-- : 2 == n ? this._curCount2 > 0 && this._curCount2-- : 3 == n ? this._curCount3 > 0 && this._curCount3-- : 4 == n && this._curCount4 > 0 && this._curCount4--,
                                                    this.setBtn(this._curCount0, this._curCount1, this._curCount2, this._curCount3, this._curCount4, !1);
                                                break;
                                            case "addBtn":
                                                0 == n ? this._curCount0 + this._curCount1 + this._curCount2 + this._curCount3 + this._curCount4 < 5 && this._curCount0++ : 1 == n ? this._curCount0 + this._curCount1 + this._curCount2 + this._curCount3 + this._curCount4 < 5 && this._curCount1++ : 2 == n ? this._curCount0 + this._curCount1 + this._curCount2 + this._curCount3 + this._curCount4 < 5 && this._curCount2++ : 3 == n ? this._curCount0 + this._curCount1 + this._curCount2 + this._curCount3 + this._curCount4 < 5 && this._curCount3++ : 4 == n && this._curCount0 + this._curCount1 + this._curCount2 + this._curCount3 + this._curCount4 < 5 && this._curCount4++,
                                                    this.setBtn(this._curCount0, this._curCount1, this._curCount2, this._curCount3, this._curCount4, !1)
                                        }
                                }
                            }
                        }
                        ,
                        h.onDataReceived = function(t, i, e) {
                            this.m_res && (this.m_res.visible = !0);
                            var n = new x(t.data)
                                , s = t.data;
                            t.data;
                            if (n.value >= 0 && this.m_res)
                                switch (Number(t.sendType)) {
                                    case d.CMD_SAVETYPE:
                                        for (var r = 0; r < 5; r++)
                                            c.setAshingFilter(this.m_res["reduceBtn" + r], !1),
                                                c.setAshingFilter(this.m_res["addBtn" + r], !1);
                                        c.setAshingFilter(this.m_res.saveBtn, !1);
                                        var u = "?cmd=" + d.CMD_SETTYPE + "&id=" + this._spiritID + "&catchtime=" + this._spiritCatchtime;
                                        this._loader.sendData1(u, d.CMD_SETTYPE);
                                        break;
                                    case d.CMD_SETTYPE:
                                        this._canRefresh = !0;
                                        var h = Number(s.type);
                                        o.showAlert("恭喜你！【" + o.getSpiritName(this._spiritID.toString()) + "】与你达成【" + this._typeName[h - 1] + "】关系！", (function() {}
                                        ));
                                        break;
                                    case d.CMD_GETGIFT:
                                        o.showCgiXmlRewardList(s)
                                }
                            else
                                m.UI.alert("", n.msg)
                        }
                        ,
                        h.checkType = function() {
                            return this._typeArr.indexOf(String(this._curCount0) + String(this._curCount1) + String(this._curCount2) + String(this._curCount3) + String(this._curCount4))
                        }
                        ,
                        h.setBtn = function(t, i, e, n, s, r) {
                            if (this.m_res.txtNum0.text = 10 * t + "",
                                this.m_res.txtNum1.text = 10 * i + "",
                                this.m_res.txtNum2.text = 10 * e + "",
                                this.m_res.txtNum3.text = 10 * n + "",
                                this.m_res.txtNum4.text = 10 * s + "",
                                this.m_res.txtCountAdd0.text = "+" + 10 * t,
                                this.m_res.txtCountAdd1.text = "+" + 10 * i,
                                this.m_res.txtCountAdd2.text = "+" + 10 * e,
                                this.m_res.txtCountAdd3.text = "+" + 10 * n,
                                this.m_res.txtCountAdd4.text = "+" + 10 * s,
                                r ? (this.m_res.txtCount0.text = this._spiriCount0 - 10 * t + "",
                                    this.m_res.txtCount1.text = this._spiriCount1 - 10 * i + "",
                                    this.m_res.txtCount2.text = this._spiriCount2 - 10 * e + "",
                                    this.m_res.txtCount3.text = this._spiriCount3 - 10 * n + "",
                                    this.m_res.txtCount4.text = this._spiriCount4 - 10 * s + "") : (this.m_res.txtCount0.text = this._spiriCount0 + "",
                                    this.m_res.txtCount1.text = this._spiriCount1 + "",
                                    this.m_res.txtCount2.text = this._spiriCount2 + "",
                                    this.m_res.txtCount3.text = this._spiriCount3 + "",
                                    this.m_res.txtCount4.text = this._spiriCount4 + ""),
                                this.m_res.txtSurplus.text = 50 - 10 * (t + i + e + n + s) + "",
                                this._canAddPlan)
                                0 == t ? c.setAshingFilter(this.m_res.reduceBtn0, !1) : c.setAshingFilter(this.m_res.reduceBtn0, !0),
                                    0 == i ? c.setAshingFilter(this.m_res.reduceBtn1, !1) : c.setAshingFilter(this.m_res.reduceBtn1, !0),
                                    0 == e ? (this.m_res.reduceBtn2.gotoAndStop(2),
                                        c.setAshingFilter(this.m_res.reduceBtn2, !1)) : (this.m_res.reduceBtn2.gotoAndStop(1),
                                        c.setAshingFilter(this.m_res.reduceBtn2, !0)),
                                    0 == n ? c.setAshingFilter(this.m_res.reduceBtn3, !1) : c.setAshingFilter(this.m_res.reduceBtn3, !0),
                                    0 == s ? c.setAshingFilter(this.m_res.reduceBtn4, !1) : c.setAshingFilter(this.m_res.reduceBtn4, !0),
                                    t + i + e + n + s >= 5 ? (c.setAshingFilter(this.m_res.addBtn0, !1),
                                        c.setAshingFilter(this.m_res.addBtn1, !1),
                                        c.setAshingFilter(this.m_res.addBtn2, !1),
                                        c.setAshingFilter(this.m_res.addBtn3, !1),
                                        c.setAshingFilter(this.m_res.addBtn4, !1)) : (t > 1 ? c.setAshingFilter(this.m_res.addBtn0, !1) : c.setAshingFilter(this.m_res.addBtn0, !0),
                                        i > 1 ? c.setAshingFilter(this.m_res.addBtn1, !1) : c.setAshingFilter(this.m_res.addBtn1, !0),
                                        e > 1 ? c.setAshingFilter(this.m_res.addBtn2, !1) : c.setAshingFilter(this.m_res.addBtn2, !0),
                                        n > 1 ? c.setAshingFilter(this.m_res.addBtn3, !1) : c.setAshingFilter(this.m_res.addBtn3, !0),
                                        s > 1 ? c.setAshingFilter(this.m_res.addBtn4, !1) : c.setAshingFilter(this.m_res.addBtn4, !0)),
                                    t + i + e + n + s >= 5 ? c.setAshingFilter(this.m_res.saveBtn, !0) : c.setAshingFilter(this.m_res.saveBtn, !1);
                            else {
                                for (var u = 0; u < 5; u++)
                                    c.setAshingFilter(this.m_res["reduceBtn" + u], !1),
                                        c.setAshingFilter(this.m_res["addBtn" + u], !1);
                                c.setAshingFilter(this.m_res.saveBtn, !1)
                            }
                        }
                        ,
                        e(s, [{
                            key: "data",
                            set: function(t) {
                                null == t || null == t ? this.m_res.intimacyMc.intimacy = -1 : 0 == t.affiliation ? t.closeness > 100 ? this.m_res.intimacyMc.intimacy = 100 : this.m_res.intimacyMc.intimacy = t.closeness : t.affiliation > 5 ? this.m_res.intimacyMc.intimacy = 105 : this.m_res.intimacyMc.intimacy = t.affiliation + 100
                            }
                        }]),
                        s
                }(a));
                var y = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), s = 0; s < e; s++)
                            n[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._intimacyMc = void 0,
                            i._btnClose = void 0,
                            i._btnCancel = void 0,
                            i._btnSave = void 0,
                            i._saveBtn = void 0,
                            i._txtSurplus = void 0,
                            i._reduceBtn = void 0,
                            i._addBtn = void 0,
                            i._txtNum0 = void 0,
                            i._txtNum1 = void 0,
                            i._txtNum2 = void 0,
                            i._txtNum3 = void 0,
                            i._txtNum4 = void 0,
                            i._txtCount0 = void 0,
                            i._txtCount1 = void 0,
                            i._txtCount2 = void 0,
                            i._txtCount3 = void 0,
                            i._txtCount4 = void 0,
                            i._txtCountAdd0 = void 0,
                            i._txtCountAdd1 = void 0,
                            i._txtCountAdd2 = void 0,
                            i._txtCountAdd3 = void 0,
                            i._txtCountAdd4 = void 0,
                            i._questionBtn = void 0,
                            i._reduceBtn0 = void 0,
                            i._reduceBtn1 = void 0,
                            i._reduceBtn2 = void 0,
                            i._reduceBtn3 = void 0,
                            i._reduceBtn4 = void 0,
                            i._addBtn0 = void 0,
                            i._addBtn1 = void 0,
                            i._addBtn2 = void 0,
                            i._addBtn3 = void 0,
                            i._addBtn4 = void 0,
                            i
                    }
                    return i(n, t),
                        e(n, [{
                            key: "intimacyMc",
                            get: function() {
                                return this._intimacyMc || (this._intimacyMc = new g(this.getChildByName("intimacyMc"))),
                                    this._intimacyMc
                            }
                        }, {
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new h(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "btnCancel",
                            get: function() {
                                return this._btnCancel || (this._btnCancel = new h(this.getChildByName("btnCancel"))),
                                    this._btnCancel
                            }
                        }, {
                            key: "btnSave",
                            get: function() {
                                return this._btnSave || (this._btnSave = new h(this.getChildByName("btnSave"))),
                                    this._btnSave
                            }
                        }, {
                            key: "saveBtn",
                            get: function() {
                                return this._saveBtn || (this._saveBtn = new h(this.getChildByName("saveBtn"))),
                                    this._saveBtn
                            }
                        }, {
                            key: "txtSurplus",
                            get: function() {
                                return this._txtSurplus || (this._txtSurplus = new h(this.getChildByName("txtSurplus"))),
                                    this._txtSurplus
                            }
                        }, {
                            key: "reduceBtn",
                            get: function() {
                                return this._reduceBtn || (this._reduceBtn = new h(this.getChildByName("reduceBtn"))),
                                    this._reduceBtn
                            }
                        }, {
                            key: "addBtn",
                            get: function() {
                                return this._addBtn || (this._addBtn = new h(this.getChildByName("addBtn"))),
                                    this._addBtn
                            }
                        }, {
                            key: "txtNum0",
                            get: function() {
                                return this._txtNum0 || (this._txtNum0 = new h(this.getChildByName("txtNum0"))),
                                    this._txtNum0
                            }
                        }, {
                            key: "txtNum1",
                            get: function() {
                                return this._txtNum1 || (this._txtNum1 = new h(this.getChildByName("txtNum1"))),
                                    this._txtNum1
                            }
                        }, {
                            key: "txtNum2",
                            get: function() {
                                return this._txtNum2 || (this._txtNum2 = new h(this.getChildByName("txtNum2"))),
                                    this._txtNum2
                            }
                        }, {
                            key: "txtNum3",
                            get: function() {
                                return this._txtNum3 || (this._txtNum3 = new h(this.getChildByName("txtNum3"))),
                                    this._txtNum3
                            }
                        }, {
                            key: "txtNum4",
                            get: function() {
                                return this._txtNum4 || (this._txtNum4 = new h(this.getChildByName("txtNum4"))),
                                    this._txtNum4
                            }
                        }, {
                            key: "txtCount0",
                            get: function() {
                                return this._txtCount0 || (this._txtCount0 = new h(this.getChildByName("txtCount0"))),
                                    this._txtCount0
                            }
                        }, {
                            key: "txtCount1",
                            get: function() {
                                return this._txtCount1 || (this._txtCount1 = new h(this.getChildByName("txtCount1"))),
                                    this._txtCount1
                            }
                        }, {
                            key: "txtCount2",
                            get: function() {
                                return this._txtCount2 || (this._txtCount2 = new h(this.getChildByName("txtCount2"))),
                                    this._txtCount2
                            }
                        }, {
                            key: "txtCount3",
                            get: function() {
                                return this._txtCount3 || (this._txtCount3 = new h(this.getChildByName("txtCount3"))),
                                    this._txtCount3
                            }
                        }, {
                            key: "txtCount4",
                            get: function() {
                                return this._txtCount4 || (this._txtCount4 = new h(this.getChildByName("txtCount4"))),
                                    this._txtCount4
                            }
                        }, {
                            key: "txtCountAdd0",
                            get: function() {
                                return this._txtCountAdd0 || (this._txtCountAdd0 = new h(this.getChildByName("txtCountAdd0"))),
                                    this._txtCountAdd0
                            }
                        }, {
                            key: "txtCountAdd1",
                            get: function() {
                                return this._txtCountAdd1 || (this._txtCountAdd1 = new h(this.getChildByName("txtCountAdd1"))),
                                    this._txtCountAdd1
                            }
                        }, {
                            key: "txtCountAdd2",
                            get: function() {
                                return this._txtCountAdd2 || (this._txtCountAdd2 = new h(this.getChildByName("txtCountAdd2"))),
                                    this._txtCountAdd2
                            }
                        }, {
                            key: "txtCountAdd3",
                            get: function() {
                                return this._txtCountAdd3 || (this._txtCountAdd3 = new h(this.getChildByName("txtCountAdd3"))),
                                    this._txtCountAdd3
                            }
                        }, {
                            key: "txtCountAdd4",
                            get: function() {
                                return this._txtCountAdd4 || (this._txtCountAdd4 = new h(this.getChildByName("txtCountAdd4"))),
                                    this._txtCountAdd4
                            }
                        }, {
                            key: "questionBtn",
                            get: function() {
                                return this._questionBtn || (this._questionBtn = new h(this.getChildByName("questionBtn"))),
                                    this._questionBtn
                            }
                        }, {
                            key: "reduceBtn0",
                            get: function() {
                                return this._reduceBtn0 || (this._reduceBtn0 = new h(this.getChildByName("reduceBtn0"))),
                                    this._reduceBtn0
                            }
                        }, {
                            key: "reduceBtn1",
                            get: function() {
                                return this._reduceBtn1 || (this._reduceBtn1 = new h(this.getChildByName("reduceBtn1"))),
                                    this._reduceBtn1
                            }
                        }, {
                            key: "reduceBtn2",
                            get: function() {
                                return this._reduceBtn2 || (this._reduceBtn2 = new h(this.getChildByName("reduceBtn2"))),
                                    this._reduceBtn2
                            }
                        }, {
                            key: "reduceBtn3",
                            get: function() {
                                return this._reduceBtn3 || (this._reduceBtn3 = new h(this.getChildByName("reduceBtn3"))),
                                    this._reduceBtn3
                            }
                        }, {
                            key: "reduceBtn4",
                            get: function() {
                                return this._reduceBtn4 || (this._reduceBtn4 = new h(this.getChildByName("reduceBtn4"))),
                                    this._reduceBtn4
                            }
                        }, {
                            key: "addBtn0",
                            get: function() {
                                return this._addBtn0 || (this._addBtn0 = new h(this.getChildByName("addBtn0"))),
                                    this._addBtn0
                            }
                        }, {
                            key: "addBtn1",
                            get: function() {
                                return this._addBtn1 || (this._addBtn1 = new h(this.getChildByName("addBtn1"))),
                                    this._addBtn1
                            }
                        }, {
                            key: "addBtn2",
                            get: function() {
                                return this._addBtn2 || (this._addBtn2 = new h(this.getChildByName("addBtn2"))),
                                    this._addBtn2
                            }
                        }, {
                            key: "addBtn3",
                            get: function() {
                                return this._addBtn3 || (this._addBtn3 = new h(this.getChildByName("addBtn3"))),
                                    this._addBtn3
                            }
                        }, {
                            key: "addBtn4",
                            get: function() {
                                return this._addBtn4 || (this._addBtn4 = new h(this.getChildByName("addBtn4"))),
                                    this._addBtn4
                            }
                        }]),
                        n
                }(h);
                s._RF.pop()
            }
        }
    }
));
