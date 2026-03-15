System.register("chunks:///_virtual/FixTemperUIMain.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ActivityAPI.ts", "./global.ts", "./ActivityCommonLogicUIBase.ts", "./PropertyDes.ts", "./ActGCManager.ts", "./NetResult.ts", "./AgentNode.ts", "./ResManager.ts", "./FixTemperConfig.ts", "./SpiritAnimationNodeAgent.ts", "./FixTemperCtlAlertChooseSpirit.ts", "./NotificationCenter.ts", "./NotifyDef.ts"], (function(t) {
        var e, n, i, c, l, s, h, o, _, r, u, a, d, g, m, C, p, b, y, I;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass,
                    i = t.assertThisInitialized
            }
                , function(t) {
                    c = t.cclegacy,
                        l = t.NodeEventType,
                        s = t.isValid
                }
                , function(t) {
                    h = t.ActivityAPI
                }
                , function(t) {
                    o = t.__global
                }
                , function(t) {
                    _ = t.ActivityCommonLogicUIBase
                }
                , function(t) {
                    r = t.PropertyDes
                }
                , function(t) {
                    u = t.ActGCManager
                }
                , function(t) {
                    a = t.NetResult
                }
                , function(t) {
                    d = t.AgentNodeComponent,
                        g = t.AgentNode
                }
                , function(t) {
                    m = t.default
                }
                , function(t) {
                    C = t.FixTemperConfig
                }
                , function(t) {
                    p = t.SpiritAnimationNodeAgent
                }
                , function(t) {
                    b = t.FixTemperCtlAlertChooseSpirit
                }
                , function(t) {
                    y = t.NotificationCenter
                }
                , function(t) {
                    I = t.NotifyDef
                }
            ],
            execute: function() {
                c._RF.push({}, "394dcWEGctJMo62S8Y8kQ41", "FixTemperUIMain", void 0),
                    t("FixTemperUIMain", function(t) {
                        function c(e) {
                            var n;
                            (n = t.call(this, e) || this).m_res1 = void 0,
                                n.m_ctlChoose = void 0,
                                n.m_id = 0,
                                n.m_time = void 0,
                                n.m_per = void 0,
                                n.m_curPer = void 0,
                                n.m_pageLeng = 12,
                                n.m_spids = [],
                                n.m_curPage = -1,
                                n.m_totalPage = 1,
                                n.m_curPage1 = -1,
                                n.m_totalPage1 = 6,
                                n.m_args = void 0,
                                n.m_res1 = new T,
                                n.setMainUI(n.m_res1.target),
                                n.m_res1.ctlFull.btnClose.on(l.TOUCH_END, n.onResClick, i(n)),
                                n.m_res1.ctlFull.ctlIntroduce.btnClose.on(l.TOUCH_END, n.onResClick, i(n)),
                                n.m_res1.ctlFull.ctlBan.btnClose.on(l.TOUCH_END, n.onResClick, i(n)),
                                n.m_res1.ctlFull.ctlRand.btnClose.on(l.TOUCH_END, n.onResClick, i(n)),
                                n.m_res1.ctlFull.ctlRand.btnRand.on(l.TOUCH_END, n.onResClick, i(n)),
                                n.m_res1.ctlFull.ctlOver.btnClose.on(l.TOUCH_END, n.onResClick, i(n)),
                                n.m_res1.ctlFull.ctlCP.btnClose.on(l.TOUCH_END, n.onResClick, i(n)),
                                n.m_res1.ctlFull.ctlCP.btnCP.on(l.TOUCH_END, n.onResClick, i(n)),
                                n.m_res1.ctlFull.btnShowIntroduce.on(l.TOUCH_END, n.onResClick, i(n)),
                                n.m_res1.ctlFull.btnToCS.on(l.TOUCH_END, n.onResClick, i(n)),
                                n.m_res1.ctlFull.btnToCP.on(l.TOUCH_END, n.onResClick, i(n)),
                                n.m_res1.ctlFull.btnToRand.on(l.TOUCH_END, n.onResClick, i(n)),
                                n.m_res1.ctlFull.btnToBan.on(l.TOUCH_END, n.onResClick, i(n)),
                                n.m_res1.ctlFull.ctlBan.btnUp.on(l.TOUCH_END, n.onResClick, i(n)),
                                n.m_res1.ctlFull.ctlBan.btnDown.on(l.TOUCH_END, n.onResClick, i(n)),
                                n.m_res1.ctlFull.ctlIntroduce.btnUp1.on(l.TOUCH_END, n.onResClick, i(n)),
                                n.m_res1.ctlFull.ctlIntroduce.btnDown1.on(l.TOUCH_END, n.onResClick, i(n)),
                                n.m_ctlChoose = new b(n.m_res1.ctlFull.ctlChoose,n.onSubmit.bind(i(n)),i(n)),
                                n.m_res1.ctlFull.visible = !1,
                                n.m_res1.ctlFull.ctlOver.visible = !1,
                                n.m_res1.ctlFull.ctlRand.visible = !1,
                                n.m_res1.ctlFull.ctlCP.visible = !1,
                                n.m_res1.ctlFull.ctlIntroduce.visible = !1,
                                n.m_res1.ctlFull.ctlBan.visible = !1,
                                n.m_res1.ctlFull.ctlCP.ctlTxt.mouseChildren = !1,
                                n.m_res1.ctlFull.ctlCP.ctlTxt.mouseEnabled = !1;
                            for (var c = 0; c < 25; c++)
                                n.m_res1.ctlFull.ctlCP["ctlIcn" + c].gotoAndStop(1),
                                    n.m_res1.ctlFull.ctlCP["ctlIcn" + c].btnCho.on(l.TOUCH_END, n.onResClick, i(n));
                            for (c = 0; c < n.m_pageLeng; c++)
                                n.m_res1.ctlFull.ctlBan["p" + c].visible = !1;
                            return n
                        }
                        e(c, t);
                        var s = c.prototype;
                        return s.onSubmit = function(t, e, n, i) {
                            this.m_id = t,
                                this.m_time = e,
                                this.m_per = i - 1,
                                this.m_res1.ctlFull.ctlSp.clear(),
                                this.m_res1.ctlFull.ctlSp.load(this.m_id)
                        }
                            ,
                            s.dispose = function() {
                                u.dispose(this),
                                    this.unsetMainUI(),
                                    this.m_res1,
                                    this.m_res1 = null,
                                    t.prototype.dispose.call(this)
                            }
                            ,
                            s.updateInfo = function(t) {
                                void 0 === t && (t = null),
                                    this.m_args = t,
                                    this.isOpenFromTimePaper = "newsOpen" == t,
                                    this.m_res1.ctlFull.visible = !0,
                                    this.send(C.CMD_QUERY_LIST, null, null, null, !0, !0)
                            }
                            ,
                            s.onOK = function() {
                                h.navigateToVipPay()
                            }
                            ,
                            s.initPage = function(t) {
                                if (void 0 === t && (t = null),
                                null == t)
                                    this.m_spids = c.m_spidStr.split("|");
                                else {
                                    this.m_spids = [];
                                    for (var e = 0; e < t.id.length; e++)
                                        this.m_spids.push(Number(t.id[e]))
                                }
                                for (var n = 0; n < this.m_spids.length; n++)
                                    this.delSameSpiritId(this.m_spids[n]);
                                this.m_totalPage = Math.ceil(this.m_spids.length / this.m_pageLeng),
                                    this.m_curPage = -1,
                                    this.updatePage(0),
                                    this.m_curPage1 = -1,
                                    this.updatePage1(0)
                            }
                            ,
                            s.delSameSpiritId = function(t) {
                                for (var e = 0, n = 0; n < this.m_spids.length; n++)
                                    this.m_spids[n] == t && (e > 0 && (this.m_spids.splice(n, 1),
                                        n--),
                                        e++)
                            }
                            ,
                            s.updatePage = function(t) {
                                if (t < 0 && (t = 0),
                                t > this.m_totalPage - 1 && (t = this.m_totalPage - 1),
                                t != this.m_curPage) {
                                    this.m_curPage = t,
                                        this.m_res1.ctlFull.ctlBan.txtPage.text = Number(this.m_curPage + 1) + "/" + this.m_totalPage;
                                    for (var e = this.m_pageLeng, n = e * this.m_curPage, i = 0; i < e; i++)
                                        n + i < this.m_spids.length ? (this.cleanMC(this.m_res1.ctlFull.ctlBan["p" + i].ctn),
                                            this.m_res1.ctlFull.ctlBan["p" + i].ctn.addChild(h.getSpiritIcon(this.m_spids[n + i])),
                                            this.m_res1.ctlFull.ctlBan["p" + i].txtName.text = h.getSpiritName(this.m_spids[n + i]),
                                            this.m_res1.ctlFull.ctlBan["p" + i].visible = !0) : this.m_res1.ctlFull.ctlBan["p" + i].visible = !1
                                }
                            }
                            ,
                            s.updatePage1 = function(t) {
                                t < 0 && (t = 0),
                                t > this.m_totalPage1 - 1 && (t = this.m_totalPage1 - 1),
                                t != this.m_curPage1 && (this.m_curPage1 = t,
                                    this.m_res1.ctlFull.ctlIntroduce.txtPage.text = Number(this.m_curPage1 + 1) + "/" + this.m_totalPage1,
                                    this.m_res1.ctlFull.ctlIntroduce.gotoAndStop(this.m_curPage1 + 1),
                                    this.m_res1.ctlFull.ctlIntroduce.bg1.visible = this.m_curPage1 >= 0 && this.m_curPage1 <= 4,
                                    this.m_res1.ctlFull.ctlIntroduce.bg2.visible = 5 == this.m_curPage1)
                            }
                            ,
                            s.cleanMC = function(t) {
                                for (; t.numChildren > 0; )
                                    t.removeChildAt(0, !0)
                            }
                            ,
                            s.onResClick = function(t) {
                                var e, n = t.target, i = t.target.name;
                                switch (i) {
                                    case "btnClose":
                                        this.m_res1.ctlFull.ctlCP.visible ? this.m_res1.ctlFull.ctlCP.visible = !1 : this.m_res1.ctlFull.ctlRand.visible ? this.m_res1.ctlFull.ctlRand.visible = !1 : this.m_res1.ctlFull.ctlOver.visible ? this.m_res1.ctlFull.ctlOver.visible = !1 : this.m_res1.ctlFull.ctlIntroduce.visible ? this.m_res1.ctlFull.ctlIntroduce.visible = !1 : this.m_res1.ctlFull.ctlBan.visible ? this.m_res1.ctlFull.ctlBan.visible = !1 : this.close();
                                        break;
                                    case "btnUp":
                                        this.updatePage(this.m_curPage - 1);
                                        break;
                                    case "btnDown":
                                        this.updatePage(this.m_curPage + 1);
                                        break;
                                    case "btnUp1":
                                        this.updatePage1(this.m_curPage1 - 1);
                                        break;
                                    case "btnDown1":
                                        this.updatePage1(this.m_curPage1 + 1);
                                        break;
                                    case "btnGoto":
                                        this.close(),
                                            h.enterScene(C.ActMainScene);
                                        break;
                                    case "btnShowIntroduce":
                                        this.m_res1.ctlFull.ctlIntroduce.visible = !0,
                                            this.updatePage1(0);
                                        break;
                                    case "btnToCS":
                                        o.MainRoleData.isVip ? this.send(C.CMD_QUERY, null, null, null, !0, !0) : o.showVipConfirm();
                                        break;
                                    case "btnToRand":
                                        0 == this.m_id ? h.showAlert("请先放入宠物！") : (this.m_res1.ctlFull.ctlRand.txtPer.text = r.TEMPERS[this.m_per],
                                            this.m_res1.ctlFull.ctlRand.visible = !0);
                                        break;
                                    case "btnToCP":
                                        if (0 == this.m_id)
                                            h.showAlert("请先放入宠物！");
                                        else {
                                            for (e = 0; e < 25; e++)
                                                this.m_res1.ctlFull.ctlCP["ctlIcn" + e].gotoAndStop(1);
                                            this.m_res1.ctlFull.ctlCP["ctlIcn" + this.m_per].gotoAndStop(3),
                                                this.m_res1.ctlFull.ctlCP.visible = !0,
                                                this.m_curPer = -1
                                        }
                                        break;
                                    case "btnToBan":
                                        this.m_res1.ctlFull.ctlBan.visible = !0;
                                        break;
                                    case "btnRand":
                                        this.send(C.CMD_SUBMIT, "&type=0&spirit_id=" + this.m_id + "&catch_time=" + this.m_time, null, null, !0, !0);
                                        break;
                                    case "btnCP":
                                        if (-1 == this.m_curPer)
                                            return void h.showAlert("请先选择一种性格！");
                                        this.send(C.CMD_SUBMIT, "&type=1&spirit_id=" + this.m_id + "&catch_time=" + this.m_time + "&personality=" + Number(this.m_curPer + 1), null, null, !0, !0);
                                        break;
                                    case "btnCho":
                                        var c = Number(String(n.parent.name).split("ctlIcn")[1]);
                                        -1 != this.m_curPer && this.m_res1.ctlFull.ctlCP["ctlIcn" + this.m_curPer].gotoAndStop(1),
                                            this.m_curPer = c,
                                            this.m_res1.ctlFull.ctlCP["ctlIcn" + this.m_curPer].gotoAndStop(2);
                                        break;
                                    default:
                                        var l, s = i.split("_");
                                        if (2 == s.length)
                                            switch (l = parseInt(s[1]),
                                                s[0]) {
                                                case "btnGoto":
                                                    this.m_app && this.m_app.close(),
                                                        h.enterScene(l)
                                            }
                                }
                            }
                            ,
                            s.onDataReceived = function(e, n, i) {
                                void 0 === i && (i = null),
                                    t.prototype.onDataReceived.call(this, e, n, i),
                                this.m_res1 && (this.m_res1.visible = !0);
                                var c = e;
                                if (new a(e).value >= 0 && this.m_res1)
                                    switch (n) {
                                        case C.CMD_QUERY_LIST:
                                            this.initPage(c),
                                            this.m_args && this.onSubmit(this.m_args.id, this.m_args.catch_time, this.m_args.need_money, Number(this.m_args.prs));
                                            break;
                                        case C.CMD_QUERY:
                                            this.m_ctlChoose.show(c);
                                            break;
                                        case C.CMD_SUBMIT:
                                            this.m_res1.ctlFull.ctlCP.visible = !1,
                                                this.m_res1.ctlFull.ctlRand.visible = !1;
                                            var l = Number(c.personality[0]) - 1;
                                            this.m_res1.ctlFull.ctlOver.txtPer.text = r.TEMPERS[this.m_per],
                                                this.m_per = l,
                                                this.m_res1.ctlFull.ctlOver.txtNext.text = r.TEMPERS[this.m_per],
                                                this.m_res1.ctlFull.ctlOver.visible = !0,
                                                y.sendNotification(I.MAIN_UI_UPDATE_DIAMOND)
                                    }
                            }
                            ,
                            n(c, [{
                                key: "CONFIG",
                                get: function() {
                                    return C
                                }
                            }]),
                            c
                    }(_)).m_spidStr = "1875|1738|1792|1822|1915|1906|1731|1911|1958|1949|1960|1799|1937|1913|1914|1916|2050|2080|2128|2162|2165|2166|2153|2200|2224|2232|2190|2106|2241|2261|2254|2252|2289|2243|2269|2303|2293|2273|2296|2274|2275|2302|2320|2193|2218|2327|2369|2331|2326|2333|2334|2335|2336|2384|2278|2276|2277|2370|2362|2347|2268|2337|2338|2346|2390|2339|2391|2340|2341|2392|2380|3117|3164|3128|2630|2634|2723|2751";
                var v = function(t) {
                    function i() {
                        for (var e, n = arguments.length, i = new Array(n), c = 0; c < n; c++)
                            i[c] = arguments[c];
                        return (e = t.call.apply(t, [this].concat(i)) || this)._ctlSelected = void 0,
                            e._container = void 0,
                            e._txtLevel = void 0,
                            e._txtPRS = void 0,
                            e._txtName = void 0,
                            e
                    }
                    return e(i, t),
                        n(i, [{
                            key: "ctlSelected",
                            get: function() {
                                return this._ctlSelected || (this._ctlSelected = new g(this.getChildByName("ctlSelected"))),
                                    this._ctlSelected
                            }
                        }, {
                            key: "container",
                            get: function() {
                                return this._container || (this._container = new p(this.getChildByName("container"))),
                                    this._container
                            }
                        }, {
                            key: "txtLevel",
                            get: function() {
                                return this._txtLevel || (this._txtLevel = new g(this.getChildByName("txtLevel"))),
                                    this._txtLevel
                            }
                        }, {
                            key: "txtPRS",
                            get: function() {
                                return this._txtPRS || (this._txtPRS = new g(this.getChildByName("txtPRS"))),
                                    this._txtPRS
                            }
                        }, {
                            key: "txtName",
                            get: function() {
                                return this._txtName || (this._txtName = new g(this.getChildByName("txtName"))),
                                    this._txtName
                            }
                        }]),
                        i
                }(g)
                    , f = function(t) {
                    function i() {
                        for (var e, n = arguments.length, i = new Array(n), c = 0; c < n; c++)
                            i[c] = arguments[c];
                        return (e = t.call.apply(t, [this].concat(i)) || this)._btnClose_chooseSP = void 0,
                            e._btnSubmit_chooseSP = void 0,
                            e._ctlSp0 = void 0,
                            e._ctlSp1 = void 0,
                            e._ctlSp2 = void 0,
                            e._ctlSp3 = void 0,
                            e._ctlSp4 = void 0,
                            e._ctlSp5 = void 0,
                            e
                    }
                    return e(i, t),
                        n(i, [{
                            key: "btnClose_chooseSP",
                            get: function() {
                                return this._btnClose_chooseSP || (this._btnClose_chooseSP = new g(this.getChildByName("btnClose_chooseSP"))),
                                    this._btnClose_chooseSP
                            }
                        }, {
                            key: "btnSubmit_chooseSP",
                            get: function() {
                                return this._btnSubmit_chooseSP || (this._btnSubmit_chooseSP = new g(this.getChildByName("btnSubmit_chooseSP"))),
                                    this._btnSubmit_chooseSP
                            }
                        }, {
                            key: "ctlSp0",
                            get: function() {
                                return this._ctlSp0 || (this._ctlSp0 = new v(this.getChildByName("ctlSp0"))),
                                    this._ctlSp0
                            }
                        }, {
                            key: "ctlSp1",
                            get: function() {
                                return this._ctlSp1 || (this._ctlSp1 = new v(this.getChildByName("ctlSp1"))),
                                    this._ctlSp1
                            }
                        }, {
                            key: "ctlSp2",
                            get: function() {
                                return this._ctlSp2 || (this._ctlSp2 = new v(this.getChildByName("ctlSp2"))),
                                    this._ctlSp2
                            }
                        }, {
                            key: "ctlSp3",
                            get: function() {
                                return this._ctlSp3 || (this._ctlSp3 = new v(this.getChildByName("ctlSp3"))),
                                    this._ctlSp3
                            }
                        }, {
                            key: "ctlSp4",
                            get: function() {
                                return this._ctlSp4 || (this._ctlSp4 = new v(this.getChildByName("ctlSp4"))),
                                    this._ctlSp4
                            }
                        }, {
                            key: "ctlSp5",
                            get: function() {
                                return this._ctlSp5 || (this._ctlSp5 = new v(this.getChildByName("ctlSp5"))),
                                    this._ctlSp5
                            }
                        }]),
                        i
                }(g)
                    , N = function(t) {
                    function i() {
                        for (var e, n = arguments.length, i = new Array(n), c = 0; c < n; c++)
                            i[c] = arguments[c];
                        return (e = t.call.apply(t, [this].concat(i)) || this)._btnClose = void 0,
                            e._txtPer = void 0,
                            e._txtNext = void 0,
                            e
                    }
                    return e(i, t),
                        n(i, [{
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new g(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "txtPer",
                            get: function() {
                                return this._txtPer || (this._txtPer = new g(this.getChildByName("txtPer"))),
                                    this._txtPer
                            }
                        }, {
                            key: "txtNext",
                            get: function() {
                                return this._txtNext || (this._txtNext = new g(this.getChildByName("txtNext"))),
                                    this._txtNext
                            }
                        }]),
                        i
                }(g)
                    , P = function(t) {
                    function i() {
                        for (var e, n = arguments.length, i = new Array(n), c = 0; c < n; c++)
                            i[c] = arguments[c];
                        return (e = t.call.apply(t, [this].concat(i)) || this)._btnCho = void 0,
                            e
                    }
                    return e(i, t),
                        n(i, [{
                            key: "btnCho",
                            get: function() {
                                return this._btnCho || (this._btnCho = new g(this.getChildByName("btnCho"))),
                                    this._btnCho
                            }
                        }]),
                        i
                }(g)
                    , w = function(t) {
                    function i() {
                        for (var e, n = arguments.length, i = new Array(n), c = 0; c < n; c++)
                            i[c] = arguments[c];
                        return (e = t.call.apply(t, [this].concat(i)) || this)._btnCP = void 0,
                            e._btnClose = void 0,
                            e._ctlTxt = void 0,
                            e._ctlIcn0 = void 0,
                            e._ctlIcn1 = void 0,
                            e._ctlIcn2 = void 0,
                            e._ctlIcn3 = void 0,
                            e._ctlIcn4 = void 0,
                            e._ctlIcn5 = void 0,
                            e._ctlIcn6 = void 0,
                            e._ctlIcn7 = void 0,
                            e._ctlIcn8 = void 0,
                            e._ctlIcn9 = void 0,
                            e._ctlIcn10 = void 0,
                            e._ctlIcn11 = void 0,
                            e._ctlIcn12 = void 0,
                            e._ctlIcn13 = void 0,
                            e._ctlIcn14 = void 0,
                            e._ctlIcn15 = void 0,
                            e._ctlIcn16 = void 0,
                            e._ctlIcn17 = void 0,
                            e._ctlIcn18 = void 0,
                            e._ctlIcn19 = void 0,
                            e._ctlIcn20 = void 0,
                            e._ctlIcn21 = void 0,
                            e._ctlIcn22 = void 0,
                            e._ctlIcn23 = void 0,
                            e._ctlIcn24 = void 0,
                            e._ctlIcn25 = void 0,
                            e
                    }
                    return e(i, t),
                        n(i, [{
                            key: "btnCP",
                            get: function() {
                                return this._btnCP || (this._btnCP = new g(this.getChildByName("btnCP"))),
                                    this._btnCP
                            }
                        }, {
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new g(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "ctlTxt",
                            get: function() {
                                return this._ctlTxt || (this._ctlTxt = new g(this.getChildByName("ctlTxt"))),
                                    this._ctlTxt
                            }
                        }, {
                            key: "ctlIcn0",
                            get: function() {
                                return this._ctlIcn0 || (this._ctlIcn0 = new P(this.getChildByName("ctlIcn0"))),
                                    this._ctlIcn0
                            }
                        }, {
                            key: "ctlIcn1",
                            get: function() {
                                return this._ctlIcn1 || (this._ctlIcn1 = new P(this.getChildByName("ctlIcn1"))),
                                    this._ctlIcn1
                            }
                        }, {
                            key: "ctlIcn2",
                            get: function() {
                                return this._ctlIcn2 || (this._ctlIcn2 = new P(this.getChildByName("ctlIcn2"))),
                                    this._ctlIcn2
                            }
                        }, {
                            key: "ctlIcn3",
                            get: function() {
                                return this._ctlIcn3 || (this._ctlIcn3 = new P(this.getChildByName("ctlIcn3"))),
                                    this._ctlIcn3
                            }
                        }, {
                            key: "ctlIcn4",
                            get: function() {
                                return this._ctlIcn4 || (this._ctlIcn4 = new P(this.getChildByName("ctlIcn4"))),
                                    this._ctlIcn4
                            }
                        }, {
                            key: "ctlIcn5",
                            get: function() {
                                return this._ctlIcn5 || (this._ctlIcn5 = new P(this.getChildByName("ctlIcn5"))),
                                    this._ctlIcn5
                            }
                        }, {
                            key: "ctlIcn6",
                            get: function() {
                                return this._ctlIcn6 || (this._ctlIcn6 = new P(this.getChildByName("ctlIcn6"))),
                                    this._ctlIcn6
                            }
                        }, {
                            key: "ctlIcn7",
                            get: function() {
                                return this._ctlIcn7 || (this._ctlIcn7 = new P(this.getChildByName("ctlIcn7"))),
                                    this._ctlIcn7
                            }
                        }, {
                            key: "ctlIcn8",
                            get: function() {
                                return this._ctlIcn8 || (this._ctlIcn8 = new P(this.getChildByName("ctlIcn8"))),
                                    this._ctlIcn8
                            }
                        }, {
                            key: "ctlIcn9",
                            get: function() {
                                return this._ctlIcn9 || (this._ctlIcn9 = new P(this.getChildByName("ctlIcn9"))),
                                    this._ctlIcn9
                            }
                        }, {
                            key: "ctlIcn10",
                            get: function() {
                                return this._ctlIcn10 || (this._ctlIcn10 = new P(this.getChildByName("ctlIcn10"))),
                                    this._ctlIcn10
                            }
                        }, {
                            key: "ctlIcn11",
                            get: function() {
                                return this._ctlIcn11 || (this._ctlIcn11 = new P(this.getChildByName("ctlIcn11"))),
                                    this._ctlIcn11
                            }
                        }, {
                            key: "ctlIcn12",
                            get: function() {
                                return this._ctlIcn12 || (this._ctlIcn12 = new P(this.getChildByName("ctlIcn12"))),
                                    this._ctlIcn12
                            }
                        }, {
                            key: "ctlIcn13",
                            get: function() {
                                return this._ctlIcn13 || (this._ctlIcn13 = new P(this.getChildByName("ctlIcn13"))),
                                    this._ctlIcn13
                            }
                        }, {
                            key: "ctlIcn14",
                            get: function() {
                                return this._ctlIcn14 || (this._ctlIcn14 = new P(this.getChildByName("ctlIcn14"))),
                                    this._ctlIcn14
                            }
                        }, {
                            key: "ctlIcn15",
                            get: function() {
                                return this._ctlIcn15 || (this._ctlIcn15 = new P(this.getChildByName("ctlIcn15"))),
                                    this._ctlIcn15
                            }
                        }, {
                            key: "ctlIcn16",
                            get: function() {
                                return this._ctlIcn16 || (this._ctlIcn16 = new P(this.getChildByName("ctlIcn16"))),
                                    this._ctlIcn16
                            }
                        }, {
                            key: "ctlIcn17",
                            get: function() {
                                return this._ctlIcn17 || (this._ctlIcn17 = new P(this.getChildByName("ctlIcn17"))),
                                    this._ctlIcn17
                            }
                        }, {
                            key: "ctlIcn18",
                            get: function() {
                                return this._ctlIcn18 || (this._ctlIcn18 = new P(this.getChildByName("ctlIcn18"))),
                                    this._ctlIcn18
                            }
                        }, {
                            key: "ctlIcn19",
                            get: function() {
                                return this._ctlIcn19 || (this._ctlIcn19 = new P(this.getChildByName("ctlIcn19"))),
                                    this._ctlIcn19
                            }
                        }, {
                            key: "ctlIcn20",
                            get: function() {
                                return this._ctlIcn20 || (this._ctlIcn20 = new P(this.getChildByName("ctlIcn20"))),
                                    this._ctlIcn20
                            }
                        }, {
                            key: "ctlIcn21",
                            get: function() {
                                return this._ctlIcn21 || (this._ctlIcn21 = new P(this.getChildByName("ctlIcn21"))),
                                    this._ctlIcn21
                            }
                        }, {
                            key: "ctlIcn22",
                            get: function() {
                                return this._ctlIcn22 || (this._ctlIcn22 = new P(this.getChildByName("ctlIcn22"))),
                                    this._ctlIcn22
                            }
                        }, {
                            key: "ctlIcn23",
                            get: function() {
                                return this._ctlIcn23 || (this._ctlIcn23 = new P(this.getChildByName("ctlIcn23"))),
                                    this._ctlIcn23
                            }
                        }, {
                            key: "ctlIcn24",
                            get: function() {
                                return this._ctlIcn24 || (this._ctlIcn24 = new P(this.getChildByName("ctlIcn24"))),
                                    this._ctlIcn24
                            }
                        }, {
                            key: "ctlIcn25",
                            get: function() {
                                return this._ctlIcn25 || (this._ctlIcn25 = new P(this.getChildByName("ctlIcn25"))),
                                    this._ctlIcn25
                            }
                        }]),
                        i
                }(g)
                    , k = function(t) {
                    function i() {
                        for (var e, n = arguments.length, i = new Array(n), c = 0; c < n; c++)
                            i[c] = arguments[c];
                        return (e = t.call.apply(t, [this].concat(i)) || this)._btnRand = void 0,
                            e._btnClose = void 0,
                            e._txtPer = void 0,
                            e
                    }
                    return e(i, t),
                        n(i, [{
                            key: "btnRand",
                            get: function() {
                                return this._btnRand || (this._btnRand = new g(this.getChildByName("btnRand"))),
                                    this._btnRand
                            }
                        }, {
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new g(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "txtPer",
                            get: function() {
                                return this._txtPer || (this._txtPer = new g(this.getChildByName("txtPer"))),
                                    this._txtPer
                            }
                        }]),
                        i
                }(g)
                    , S = function(t) {
                    function i() {
                        for (var e, n = arguments.length, i = new Array(n), c = 0; c < n; c++)
                            i[c] = arguments[c];
                        return (e = t.call.apply(t, [this].concat(i)) || this)._btnClose = void 0,
                            e._bg1 = void 0,
                            e._bg2 = void 0,
                            e._txtPage = void 0,
                            e._btnUp1 = void 0,
                            e._btnDown1 = void 0,
                            e
                    }
                    return e(i, t),
                        n(i, [{
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new g(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "bg1",
                            get: function() {
                                return this._bg1 || (this._bg1 = new g(this.getChildByName("bg1"))),
                                    this._bg1
                            }
                        }, {
                            key: "bg2",
                            get: function() {
                                return this._bg2 || (this._bg2 = new g(this.getChildByName("bg2"))),
                                    this._bg2
                            }
                        }, {
                            key: "txtPage",
                            get: function() {
                                return this._txtPage || (this._txtPage = new g(this.getChildByName("txtPage"))),
                                    this._txtPage
                            }
                        }, {
                            key: "btnUp1",
                            get: function() {
                                return this._btnUp1 || (this._btnUp1 = new g(this.getChildByName("btnUp1"))),
                                    this._btnUp1
                            }
                        }, {
                            key: "btnDown1",
                            get: function() {
                                return this._btnDown1 || (this._btnDown1 = new g(this.getChildByName("btnDown1"))),
                                    this._btnDown1
                            }
                        }]),
                        i
                }(g)
                    , B = function(t) {
                    function i() {
                        for (var e, n = arguments.length, i = new Array(n), c = 0; c < n; c++)
                            i[c] = arguments[c];
                        return (e = t.call.apply(t, [this].concat(i)) || this)._ctn = void 0,
                            e._txtName = void 0,
                            e
                    }
                    return e(i, t),
                        n(i, [{
                            key: "ctn",
                            get: function() {
                                return this._ctn || (this._ctn = new g(this.getChildByName("ctn"))),
                                    this._ctn
                            }
                        }, {
                            key: "txtName",
                            get: function() {
                                return this._txtName || (this._txtName = new g(this.getChildByName("txtName"))),
                                    this._txtName
                            }
                        }]),
                        i
                }(g)
                    , x = function(t) {
                    function i() {
                        for (var e, n = arguments.length, i = new Array(n), c = 0; c < n; c++)
                            i[c] = arguments[c];
                        return (e = t.call.apply(t, [this].concat(i)) || this)._btnClose = void 0,
                            e._txtPage = void 0,
                            e._btnUp = void 0,
                            e._btnDown = void 0,
                            e._p0 = void 0,
                            e._p1 = void 0,
                            e._p2 = void 0,
                            e._p3 = void 0,
                            e._p4 = void 0,
                            e._p5 = void 0,
                            e._p6 = void 0,
                            e._p7 = void 0,
                            e._p8 = void 0,
                            e._p9 = void 0,
                            e._p10 = void 0,
                            e._p11 = void 0,
                            e
                    }
                    return e(i, t),
                        n(i, [{
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new g(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "txtPage",
                            get: function() {
                                return this._txtPage || (this._txtPage = new g(this.getChildByName("txtPage"))),
                                    this._txtPage
                            }
                        }, {
                            key: "btnUp",
                            get: function() {
                                return this._btnUp || (this._btnUp = new g(this.getChildByName("btnUp"))),
                                    this._btnUp
                            }
                        }, {
                            key: "btnDown",
                            get: function() {
                                return this._btnDown || (this._btnDown = new g(this.getChildByName("btnDown"))),
                                    this._btnDown
                            }
                        }, {
                            key: "p0",
                            get: function() {
                                return this._p0 || (this._p0 = new B(this.getChildByName("p0"))),
                                    this._p0
                            }
                        }, {
                            key: "p1",
                            get: function() {
                                return this._p1 || (this._p1 = new B(this.getChildByName("p1"))),
                                    this._p1
                            }
                        }, {
                            key: "p2",
                            get: function() {
                                return this._p2 || (this._p2 = new B(this.getChildByName("p2"))),
                                    this._p2
                            }
                        }, {
                            key: "p3",
                            get: function() {
                                return this._p3 || (this._p3 = new B(this.getChildByName("p3"))),
                                    this._p3
                            }
                        }, {
                            key: "p4",
                            get: function() {
                                return this._p4 || (this._p4 = new B(this.getChildByName("p4"))),
                                    this._p4
                            }
                        }, {
                            key: "p5",
                            get: function() {
                                return this._p5 || (this._p5 = new B(this.getChildByName("p5"))),
                                    this._p5
                            }
                        }, {
                            key: "p6",
                            get: function() {
                                return this._p6 || (this._p6 = new B(this.getChildByName("p6"))),
                                    this._p6
                            }
                        }, {
                            key: "p7",
                            get: function() {
                                return this._p7 || (this._p7 = new B(this.getChildByName("p7"))),
                                    this._p7
                            }
                        }, {
                            key: "p8",
                            get: function() {
                                return this._p8 || (this._p8 = new B(this.getChildByName("p8"))),
                                    this._p8
                            }
                        }, {
                            key: "p9",
                            get: function() {
                                return this._p9 || (this._p9 = new B(this.getChildByName("p9"))),
                                    this._p9
                            }
                        }, {
                            key: "p10",
                            get: function() {
                                return this._p10 || (this._p10 = new B(this.getChildByName("p10"))),
                                    this._p10
                            }
                        }, {
                            key: "p11",
                            get: function() {
                                return this._p11 || (this._p11 = new B(this.getChildByName("p11"))),
                                    this._p11
                            }
                        }]),
                        i
                }(g)
                    , F = function(t) {
                    function i() {
                        for (var e, n = arguments.length, i = new Array(n), c = 0; c < n; c++)
                            i[c] = arguments[c];
                        return (e = t.call.apply(t, [this].concat(i)) || this)._btnClose = void 0,
                            e._btnShowIntroduce = void 0,
                            e._ctlBan = void 0,
                            e._ctlChoose = void 0,
                            e._ctlOver = void 0,
                            e._ctlCP = void 0,
                            e._ctlRand = void 0,
                            e._ctlIntroduce = void 0,
                            e._ctlSp = void 0,
                            e._btnToCS = void 0,
                            e._btnToCP = void 0,
                            e._btnToRand = void 0,
                            e._btnToBan = void 0,
                            e._txtPage = void 0,
                            e
                    }
                    return e(i, t),
                        n(i, [{
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new g(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "btnShowIntroduce",
                            get: function() {
                                return this._btnShowIntroduce || (this._btnShowIntroduce = new g(this.getChildByName("btnShowIntroduce"))),
                                    this._btnShowIntroduce
                            }
                        }, {
                            key: "ctlBan",
                            get: function() {
                                return this._ctlBan || (this._ctlBan = new x(this.getChildByName("ctlBan"))),
                                    this._ctlBan
                            }
                        }, {
                            key: "ctlChoose",
                            get: function() {
                                return this._ctlChoose || (this._ctlChoose = new f(this.getChildByName("ctlChoose"))),
                                    this._ctlChoose
                            }
                        }, {
                            key: "ctlOver",
                            get: function() {
                                return this._ctlOver || (this._ctlOver = new N(this.getChildByName("ctlOver"))),
                                    this._ctlOver
                            }
                        }, {
                            key: "ctlCP",
                            get: function() {
                                return this._ctlCP || (this._ctlCP = new w(this.getChildByName("ctlCP"))),
                                    this._ctlCP
                            }
                        }, {
                            key: "ctlRand",
                            get: function() {
                                return this._ctlRand || (this._ctlRand = new k(this.getChildByName("ctlRand"))),
                                    this._ctlRand
                            }
                        }, {
                            key: "ctlIntroduce",
                            get: function() {
                                return this._ctlIntroduce || (this._ctlIntroduce = new S(this.getChildByName("ctlIntroduce"))),
                                    this._ctlIntroduce
                            }
                        }, {
                            key: "ctlSp",
                            get: function() {
                                return this._ctlSp || (this._ctlSp = new p(this.getChildByName("ctlSp"))),
                                    this._ctlSp
                            }
                        }, {
                            key: "btnToCS",
                            get: function() {
                                return this._btnToCS || (this._btnToCS = new g(this.getChildByName("btnToCS"))),
                                    this._btnToCS
                            }
                        }, {
                            key: "btnToCP",
                            get: function() {
                                return this._btnToCP || (this._btnToCP = new g(this.getChildByName("btnToCP"))),
                                    this._btnToCP
                            }
                        }, {
                            key: "btnToRand",
                            get: function() {
                                return this._btnToRand || (this._btnToRand = new g(this.getChildByName("btnToRand"))),
                                    this._btnToRand
                            }
                        }, {
                            key: "btnToBan",
                            get: function() {
                                return this._btnToBan || (this._btnToBan = new g(this.getChildByName("btnToBan"))),
                                    this._btnToBan
                            }
                        }, {
                            key: "txtPage",
                            get: function() {
                                return this._txtPage || (this._txtPage = new g(this.getChildByName("txtPage"))),
                                    this._txtPage
                            }
                        }]),
                        i
                }(g)
                    , T = function(t) {
                    function c() {
                        var e;
                        return (e = t.call(this) || this)._ctlFull = void 0,
                            e._target = m.Instance.getPrefabByName("fixTemper/UIResMain_1600"),
                        e._target && s(e._target) && null == e._target.getComponent(d) && (e._target.addComponent(d).target = i(e)),
                            e
                    }
                    return e(c, t),
                        n(c, [{
                            key: "ctlFull",
                            get: function() {
                                return this._ctlFull || (this._ctlFull = new F(this.getChildByName("ctlFull"))),
                                    this._ctlFull
                            }
                        }]),
                        c
                }(g);
                c._RF.pop()
            }
        }
    }
));
