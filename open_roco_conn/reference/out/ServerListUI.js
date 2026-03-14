System.register("chunks:///_virtual/ServerListUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./AngelSysEvent.ts", "./global.ts", "./SceneDes.ts", "./ADFCmdsType.ts", "./TCPConnEvent.ts", "./AngelTcpHelper.ts", "./ProtocolHelper.ts", "./LoginReceiver.ts", "./LoginDataProcessor.ts", "./AgentNode.ts", "./GlobalAPI.ts", "./UserData.ts", "./HttpRequest.ts", "./PureNotificationCenter.ts", "./AppConstDef.ts", "./BuildLogHelper.ts", "./ServerListItemUI.ts", "./ServerListCfgLoader.ts", "./CFunction.ts", "./GUIUtils.ts", "./LoginLogLogic.ts"], (function(e) {
        var t, i, n, s, o, r, a, h, g, _, u, l, c, m, d, f, C, v, p, B, b, L, N, R, P, y, D, I, x, T, S, E, w, k;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    i = e.inheritsLoose,
                    n = e.initializerDefineProperty,
                    s = e.assertThisInitialized,
                    o = e.createClass
            }
                , function(e) {
                    r = e.cclegacy,
                        a = e._decorator,
                        h = e.Label,
                        g = e.Node,
                        _ = e.NodeEventType,
                        u = e.color,
                        l = e.Component
                }
                , function(e) {
                    c = e.Constants
                }
                , function(e) {
                    m = e.AngelSysEvent
                }
                , function(e) {
                    d = e.__global
                }
                , function(e) {
                    f = e.SceneDes
                }
                , function(e) {
                    C = e.ADFCmdsType
                }
                , function(e) {
                    v = e.TCPConnEvent
                }
                , function(e) {
                    p = e.AngelTcpHelper
                }
                , function(e) {
                    B = e.ProtocolHelper
                }
                , function(e) {
                    b = e.LoginReceiver
                }
                , function(e) {
                    L = e.LoginDataProcessor
                }
                , function(e) {
                    N = e.AgentNode
                }
                , function(e) {
                    R = e.GlobalAPI
                }
                , function(e) {
                    P = e.UserData
                }
                , function(e) {
                    y = e.HttpRequest
                }
                , function(e) {
                    D = e.PureNotificationCenter
                }
                , function(e) {
                    I = e.AppConstDef
                }
                , function(e) {
                    x = e.default
                }
                , function(e) {
                    T = e.default
                }
                , function(e) {
                    S = e.ServerListCfgLoader
                }
                , function(e) {
                    E = e.CFunction
                }
                , function(e) {
                    w = e.GUI
                }
                , function(e) {
                    k = e.LoginLogLogic
                }
            ],
            execute: function() {
                var O, M, A, U, H, q, z, F, G, V, W;
                r._RF.push({}, "023a9xCFH5AjKwDhmZ9eI1D", "ServerListUI", void 0);
                var Z = a.ccclass
                    , K = a.property
                    , j = a.menu
                    , J = (e("default", (O = j("AUI/ServerListUI"),
                    M = K(h),
                    A = K(g),
                    U = K(T),
                    H = K(g),
                Z(q = O((F = t((z = function(e) {
                    function t() {
                        for (var t, i = arguments.length, o = new Array(i), r = 0; r < i; r++)
                            o[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(o)) || this)._rangeList = {},
                            t._recommendList = {},
                            t._curRecIdx = 0,
                            t._serverListCount = 72,
                            t._uin = P.uin,
                            t._url = "https://dir.17roco.qq.com:8080/",
                            t._defaultCount = 8,
                            t._defaultIndex = 1,
                            t._index = 1,
                            t._page = 0,
                            t._maxPage = 9,
                            t._initReccommendData = !1,
                            t._initRangeData = !1,
                            t._selectedPageName = null,
                            t._recServerName = "",
                            t._initServerList = !1,
                            t._beginID = 0,
                            t._recZid = "1",
                            t._ui = void 0,
                            n(t, "tfRecommend", F, s(t)),
                            n(t, "refreshBtn", G, s(t)),
                            n(t, "serverListItem", V, s(t)),
                            n(t, "pageNodes", W, s(t)),
                            t._reqRangeBegin = 0,
                            t.system = void 0,
                            t.tcpProxy = null,
                            t.receiver = null,
                            t.loginProcessor = null,
                            t._onShowMsgBox = !1,
                            t._roleData = void 0,
                            t
                    }
                    i(t, e);
                    var o = t.prototype;
                    return o.onLoad = function() {
                        this._initReccommendData = !1
                    }
                        ,
                        o.onClickNode = function(e) {
                            var t = e.currentTarget.getComponent(T);
                            this.loginLogic(t.zid)
                        }
                        ,
                        o.start = function() {
                            if (this._ui || (this._ui = new J(this.node)),
                                this._ui)
                                for (var e = 1; e < 10; e++) {
                                    var t = this._ui["server_item" + (e - 1)];
                                    t && t.on(_.TOUCH_END, this.onClickNode, this)
                                }
                            this._ui.logBtn.visible = !1,
                            P.isWhite(P.uin) && (this._ui.logBtn.visible = !0),
                            this._ui.logBtn.hasEventListener(_.TOUCH_END, this.onClickLogBtn, this) || this._ui.logBtn.on(_.TOUCH_END, this.onClickLogBtn, this);
                            for (var i = 0; i < 9; i++) {
                                var n = this._ui["btn_page" + (i + 1)];
                                n && (n.visible = !1,
                                    n.on(_.TOUCH_END, this.onClickPageBtn, this))
                            }
                            this._ui.leftBtn.hasEventListener(_.TOUCH_END, this.onClickLeftBtn, this) || this._ui.leftBtn.on(_.TOUCH_END, this.onClickLeftBtn, this),
                            this._ui.rightBtn.hasEventListener(_.TOUCH_END, this.onClickRightBtn, this) || this._ui.rightBtn.on(_.TOUCH_END, this.onClickRightBtn, this),
                            this._ui.oneBtn.hasEventListener(_.TOUCH_END, this.onClickOneBtn, this) || this._ui.oneBtn.on(_.TOUCH_END, this.onClickOneBtn, this),
                            this._ui.maxBtn.hasEventListener(_.TOUCH_END, this.onClickMaxBtn, this) || this._ui.maxBtn.on(_.TOUCH_END, this.onClickMaxBtn, this),
                                this._initServerList = !1,
                                this.setDefaultPage(),
                                0 == this._initReccommendData ? this.onRequestRecommendData() : this.onRequestDefaultRangeData(),
                                this.start1()
                        }
                        ,
                        o.onDestroy = function() {
                            this.tcpProxy && (this.tcpProxy.removeEventListener(v.TCPCONN_CONNECTED, this.onTCPConnect, this),
                                this.tcpProxy.removeEventListener(v.TCPCONN_ERROR, this.onTCPConnectError, this),
                                this.tcpProxy.removeEventListener(v.TCPCONN_TIMEOUT, this.onTCPConnectTimeOut, this),
                                this.tcpProxy.removeEventListener(v.TCPCONN_CLOSED, this.onTCPConnectClose, this))
                        }
                        ,
                        o.onRequestDefaultRangeData = function() {
                            this.onRequestRangeData(this._defaultIndex + this._beginID, this._defaultCount)
                        }
                        ,
                        o.setDefaultPage = function(e) {
                            void 0 === e && (e = 1),
                                this._page = e,
                                this._index = 1,
                                this.refreshButton(),
                                this.setPageColor(this._selectedPageName ? this._selectedPageName : "btn_page1", 0)
                        }
                        ,
                        o.onRequestRecommendData = function() {
                            var e = {
                                cmd: 0,
                                uin: this._uin
                            };
                            y.Instance.getWithParamsByTxt(this._url, e, this.onRecommendComplete.bind(this), this.onRecommendError.bind(this))
                        }
                        ,
                        o.onRequestRangeData = function(e, t) {
                            e <= 0 && x.IS_LOCAL,
                                this._initServerList = !0,
                                this._reqRangeBegin = e;
                            var i = {
                                cmd: 1,
                                begin: e,
                                count: t,
                                uin: this._uin
                            };
                            y.Instance.getWithParamsByTxt(this._url, i, this.onRangeComplete.bind(this), this.onRangeError.bind(this))
                        }
                        ,
                        o.onRequestFastLoginData = function() {
                            var e = {
                                cmd: 2,
                                uin: this._uin
                            };
                            y.Instance.getWithParamsByTxt(this._url, e, this.onFastLoginComplete.bind(this), this.onFastLoginError.bind(this))
                        }
                        ,
                        o.onRecommendError = function(e) {}
                        ,
                        o.onRecommendComplete = function(e) {
                            1 == x.IS_LOCAL && console.log("onRecommendComplete================" + e),
                                this._initReccommendData = !0;
                            var t = JSON.parse(e);
                            this._beginID = Number(t.angel.beginid.value),
                                this._serverListCount = Number(t.angel.allnum.value),
                                this._maxPage = Math.floor(this._serverListCount / this._defaultCount + 1);
                            var i = t.angel.room;
                            this._recommendList = [];
                            for (var n = 0; n < i.length; n++) {
                                var s = i[n];
                                if (s && s.index > this._beginID)
                                    Number(s.index) >= this._beginID && this._recommendList.push(i[n])
                            }
                            this.updateNumberTab(),
                                this.onClickRefreshBtn(),
                                this.checkLogin()
                        }
                        ,
                        o.onRangeComplete = function(e) {
                            1 == x.IS_LOCAL && console.log("onRangeComplete================" + e);
                            var t = JSON.parse(e);
                            this._rangeList = t.angel.room,
                                this._serverListCount = Number(t.angel.allnum.value),
                                this._maxPage = Math.floor(this._serverListCount / this._defaultCount + 1),
                                this.updateNumberTab(),
                                this._index = this._reqRangeBegin,
                                this.onRefreshRangeData(),
                                this.onRefreshRecommend();
                            var i = Math.floor((this._index - this._beginID) / this._defaultCount) + 1;
                            this.onChangeToPage(i)
                        }
                        ,
                        o.onFastLoginComplete = function(e) {
                            1 == x.IS_LOCAL && console.log("onFastLoginComplete================" + e)
                        }
                        ,
                        o.onRangeError = function(e) {
                            this._rangeList = {},
                                this._index = e.params.begin,
                                this.onRefreshRangeData()
                        }
                        ,
                        o.onFastLoginError = function(e) {
                            this.onClickRefreshBtn()
                        }
                        ,
                        o.onClickTipsBtn = function() {}
                        ,
                        o.getRec = function() {
                            this._curRecIdx++,
                            this._curRecIdx >= this._recommendList.length && (this._curRecIdx = 0);
                            var e = this._recommendList[this._curRecIdx];
                            return this._recZid = e.zid,
                                Number(e.index)
                        }
                        ,
                        o.onClickRefreshBtn = function() {
                            if (0 != this._recommendList.length) {
                                var e = this.getRec();
                                this._recServerName = e + " " + S.Instance.getNameByID(e),
                                    P.recServerIdx = Number(e),
                                    this.onRefreshRecommend();
                                var t = (Math.floor((e - this._beginID) / this._defaultCount) + 1 - 1) * this._defaultCount + this._beginID;
                                this._index == t && 0 != this._initServerList || this.onRequestRangeData(t, this._defaultCount)
                            }
                        }
                        ,
                        o.onRefreshRecommend = function() {
                            if (this._ui.tfRecommend) {
                                this._ui.tfRecommend.string = this._recServerName;
                                var e = this._recServerName.length
                                    , t = -370
                                    , i = t;
                                i = e <= 7 ? t : t + 30 * (e - 7),
                                this.refreshBtn && this.refreshBtn.setPosition(i, this.refreshBtn.getPosition().y)
                            }
                            this.refreshBtn && (this.refreshBtn.active = !0);
                            for (var n = 1; n < 10; n++) {
                                var s = this.serverListItem[n - 1];
                                s && s.refreshRecommend(this._recServerName)
                            }
                        }
                        ,
                        o.onClickEnterBtn = function(e) {
                            this.loginLogic(this._recZid)
                        }
                        ,
                        o.getRoomCfg = function(e) {
                            return this._rangeList.find((function(t) {
                                    return t.index == e
                                }
                            ))
                        }
                        ,
                        o.onRefreshRangeData = function() {
                            for (var e = 1, t = this._index; t < this._index + this._defaultCount; t++,
                                e++) {
                                var i = this.serverListItem[e - 1];
                                if (null != i && null != i) {
                                    var n = this.getRoomCfg(t);
                                    if (null != n) {
                                        i.node.active = !0,
                                            i.zid = n.zid;
                                        var s = t
                                            , o = S.Instance.getNameByID(s);
                                        1 == x.IS_LOCAL && console.log(o);
                                        o = s + " " + o;
                                        i.refreshServerName(o);
                                        n.person = 2;
                                        var r = 1 + Math.ceil(n.person / n.limit * 4);
                                        r <= 4 && (r += 2),
                                            i.mcStar.gotoAndStop(r)
                                    } else
                                        i.node.active = !1
                                }
                            }
                        }
                        ,
                        o.onClickOneBtn = function(e) {
                            0 != this._ui.oneBtn.enableTag && (this._page <= 1 || (this._page > 1 && (this._page = 1),
                                this.refreshButton(),
                                this.setPageColor(this._selectedPageName, 1),
                                this.onRequestRangeData(0 * this._defaultCount + this._beginID, this._defaultCount)))
                        }
                        ,
                        o.onClickMaxBtn = function(e) {
                            0 != this._ui.maxBtn.enableTag && (this._page >= this._maxPage || (this._page < this._maxPage && (this._page = this._maxPage),
                                this.refreshButton(),
                                this.setPageColor(this._selectedPageName, 1),
                                this.onRequestRangeData((this._maxPage - 1) * this._defaultCount + this._beginID, this._defaultCount)))
                        }
                        ,
                        o.onClickLeftBtn = function() {
                            0 != this._ui.leftBtn.enableTag && 1 != this._page && (this._page = this._page - 1,
                                this.refreshButton(),
                                this.setPageColor(this._selectedPageName, 1),
                                this.onRequestRangeData(this._index - this._defaultCount, this._defaultCount))
                        }
                        ,
                        o.onClickRightBtn = function() {
                            0 != this._ui.rightBtn.enableTag && (this._page >= this._maxPage || (this._page = this._page + 1,
                                this.refreshButton(),
                                this.setPageColor(this._selectedPageName, 2),
                                this.onRequestRangeData(this._index + this._defaultCount, this._defaultCount)))
                        }
                        ,
                        o.refreshButton = function() {
                            this._ui.leftBtn && (this._ui.leftBtn.visible = this._page > 1),
                            this._ui.oneBtn && (this._ui.oneBtn.visible = this._page > 1),
                            this._ui.rightBtn && (this._ui.rightBtn.visible = this._page < this._maxPage),
                            this._ui.maxBtn && (this._ui.maxBtn.visible = this._page < this._maxPage)
                        }
                        ,
                        o.onClickPageBtn = function(e) {
                            var t = e.target
                                , i = t.name
                                , n = t.children[0]
                                , s = parseInt(n.getComponent(h).string);
                            1 == x.IS_LOCAL && console.info(n),
                                this._page = s;
                            var o = (s - 1) * this._defaultCount;
                            this._ui.leftBtn && (this._ui.leftBtn.visible = this._page > 1),
                                this.refreshButton(),
                                this.setPageColor(i, 0),
                                this.onRequestRangeData(o + this._beginID, this._defaultCount)
                        }
                        ,
                        o.onChangeToPage = function(e) {
                            null != e && null != e && (e < 1 || this._page != e && (this._page = e,
                            this._ui.leftBtn && (this._ui.leftBtn.visible = this._page > 1),
                                this.refreshButton(),
                                this.setPageColor(this._selectedPageName, 0)))
                        }
                        ,
                        o.setPageColor = function(e, t) {
                            if ("btn_page1" == e && this._page > 1 && (0 == t || 1 == t)) {
                                var i = this._page;
                                i < 9 && (i = 9);
                                for (var n = 1; n < 10; n++) {
                                    (s = this.pageNodes[n - 1].getChildByName("Label")) && (s.getComponent(h).string = i + n - 9 + "")
                                }
                            } else if ("btn_page9" == e && (0 == t || 2 == t))
                                for (n = 1; n < 10; n++) {
                                    null != (s = this.pageNodes[n - 1].getChildByName("Label")) && (s.getComponent(h).string = this._page + n - 1 + "")
                                }
                            for (n = 1; n < 10; n++) {
                                var s;
                                if (null != (s = this.pageNodes[n - 1].getChildByName("Label"))) {
                                    var o = parseInt(s.getComponent(h).string);
                                    this._page == o ? (s.getComponent(h).fontSize = 56,
                                        s.getComponent(h).color = u(107, 222, 250),
                                        this._selectedPageName = "btn_page" + n) : (s.getComponent(h).fontSize = 40,
                                        s.getComponent(h).color = u(255, 255, 255))
                                }
                            }
                        }
                        ,
                        o.loginLogic = function(e) {
                            p.resBeginTimer = (new Date).getTime(),
                                this.loginBegin(e)
                        }
                        ,
                        o.showMainUI = function() {
                            p.resEndTimer = (new Date).getTime(),
                            1 == x.IS_LOCAL && console.log("加载资源进度完成===>" + this.constructor.name + "===>" + p.resBeginTimer + "==" + p.resEndTimer + "==" + (p.resEndTimer - p.resBeginTimer) + "ms"),
                                d.UI.closeMiniLoading1(),
                                w.instance.gotoMainView((function() {
                                        return D.sendNotification(I.NN_V_DESTORY_SERVER_LIST_VIEW)
                                    }
                                ))
                        }
                        ,
                        o.updateNumberTab = function() {
                            for (var e = 0; e < 9; e++) {
                                var t = this._ui["btn_page" + (e + 1)];
                                t && (t.visible = this._maxPage > e)
                            }
                        }
                        ,
                        o.loginBegin = function(e) {
                            d.UI.createMiniLoading1(),
                                this.loginReq(e)
                        }
                        ,
                        o.start1 = function() {
                            this.system = R.gAngelSysAPI,
                                this.receiver = new b,
                                this.receiver.handle = this.dataHandle.bind(this),
                                this.loginProcessor = new L,
                                R.gAngelSysAPI.getNetSysAPI().addDataProcessor(this.loginProcessor),
                                R.gAngelSysAPI.getNetSysAPI().addDataReceiver(this.receiver)
                        }
                        ,
                        o.loginReq = function(e) {
                            P.zid = e,
                            null == this.tcpProxy && (this.tcpProxy = R.gAngelSysAPI.getNetSysAPI().createTCPProxy(),
                                this.tcpProxy.addEventListener(v.TCPCONN_CONNECTED, this.onTCPConnect, this),
                                this.tcpProxy.addEventListener(v.TCPCONN_ERROR, this.onTCPConnectError, this),
                                this.tcpProxy.addEventListener(v.TCPCONN_TIMEOUT, this.onTCPConnectTimeOut, this),
                                this.tcpProxy.addEventListener(v.TCPCONN_CLOSED, this.onTCPConnectClose, this))
                        }
                        ,
                        o.onTCPConnectError = function(e) {
                            var t = this;
                            console.error("onTCPConnectError=" + this._onShowMsgBox),
                            1 != this._onShowMsgBox && (this._onShowMsgBox = !0,
                                d.UI.closeMiniLoading1(),
                                d.showMsgBox("连接服务器失败，请点击确定重新连接！", 2, new E((function(e) {
                                        t._onShowMsgBox = !1,
                                        1 == e && t.loginLogic(P.zid)
                                    }
                                ),this)))
                        }
                        ,
                        o.onTCPConnectTimeOut = function(e) {
                            var t = this;
                            console.error("onTCPConnectTimeOut=" + this._onShowMsgBox),
                            1 != this._onShowMsgBox && (this._onShowMsgBox = !0,
                                d.UI.closeMiniLoading1(),
                                d.showMsgBox("连接服务器超时，请点击确定重新连接！", 2, new E((function(e) {
                                        t._onShowMsgBox = !1,
                                        1 == e && t.loginLogic(P.zid)
                                    }
                                ),this)))
                        }
                        ,
                        o.onTCPConnectClose = function(e) {
                            var t = this;
                            console.error("onTCPConnectClose=" + this._onShowMsgBox),
                            1 != this._onShowMsgBox && (this._onShowMsgBox = !0,
                                d.UI.closeMiniLoading1(),
                                d.showMsgBox("连接服务器失败，请点击确定重新连接！", 2, new E((function(e) {
                                        t._onShowMsgBox = !1,
                                        1 == e && t.loginLogic(P.zid)
                                    }
                                ),this)))
                        }
                        ,
                        o.onTCPConnect = function(e) {
                            1 == x.IS_LOCAL && console.log("WebSocket连接成功" + R.getTimerFormat());
                            e.getTCPID();
                            this.sendLoginConnData(C.T_LoginRoom, {
                                roomID: P.recServerIdx,
                                key: P.sessionKey,
                                uin: P.uin
                            })
                        }
                        ,
                        o.sendLoginConnData = function(e, t) {
                            void 0 === e && (e = -1),
                            void 0 === t && (t = null),
                                this.receiver.sendData(1, e, t)
                        }
                        ,
                        o.dataHandle = function(e, t) {
                            switch (1 == x.IS_LOCAL && console.info("ServerListUI==dataHandle==" + e + "==" + t),
                                e) {
                                case C.T_LoginRoom:
                                    var i = t;
                                    if (CONFIG.DEBUG && console.log("登录返回码:", i.returnCode.message),
                                    -101 == i.returnCode.code)
                                        d.UI.closeMiniLoading1(),
                                            d.showMsgBox("" + i.returnCode.message);
                                    else if (-143 == i.returnCode.code)
                                        d.UI.closeMiniLoading1(),
                                            d.showMsgBox("" + i.returnCode.message);
                                    else if (-103 == i.returnCode.code)
                                        d.UI.closeMiniLoading1(),
                                            d.showMsgBox("" + i.returnCode.message);
                                    else if (-207 == i.returnCode.code)
                                        d.UI.closeMiniLoading1(),
                                            d.showMsgBox("" + i.returnCode.message);
                                    else {
                                        if (!(i.returnCode.code < 0)) {
                                            this._roleData = i.mainRole;
                                            var n = this.system.getGDataAPI();
                                            n.addGlobalVal(c.MAIN_ROLE_INFO, i.mainRole),
                                                R.roleData = i.mainRole;
                                            var s = new f;
                                            s.sceneID = i.sceneID,
                                                s.sceneVersion = i.sceneVer,
                                                n.addGlobalVal(c.WANT_TO_SCENE, s);
                                            var o = new m(m.LOGIN_OK);
                                            o.data = this.getPlugName(),
                                                B.USERUIN = i.mainRole.uin,
                                                this.system.getGEventAPI().angelEventDispatcher.dispatchEvent(o),
                                                R.isLogin = !0,
                                                this.showMainUI();
                                            break
                                        }
                                        d.UI.closeMiniLoading1(),
                                            d.showMsgBox("" + i.returnCode.message)
                                    }
                            }
                        }
                        ,
                        o.checkLogin = function() {
                            var e = this;
                            1 == x.IS_LOCAL && (p.isAutoEnter || p.isDebuggerCombat || p.isDebuggerStorage || p.isDebuggerSpiritBagApp) && setTimeout((function() {
                                    e.onClickRealLoginBtn()
                                }
                            ), 200)
                        }
                        ,
                        o.onClickRealLoginBtn = function() {
                            this.onClickEnterBtn(null)
                        }
                        ,
                        o.getPlugName = function() {
                            return "login"
                        }
                        ,
                        o.onClickLogBtn = function(e) {
                            this._ui.loginLogNode.show()
                        }
                        ,
                        t
                }(l)).prototype, "tfRecommend", [M], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    G = t(z.prototype, "refreshBtn", [A], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    V = t(z.prototype, "serverListItem", [U], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    W = t(z.prototype, "pageNodes", [H], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    q = z)) || q) || q)),
                    function(e) {
                        function t() {
                            for (var t, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                                n[s] = arguments[s];
                            return (t = e.call.apply(e, [this].concat(n)) || this)._leftBtn = void 0,
                                t._rightBtn = void 0,
                                t._oneBtn = void 0,
                                t._maxBtn = void 0,
                                t._btn_page1 = void 0,
                                t._btn_page2 = void 0,
                                t._btn_page3 = void 0,
                                t._btn_page4 = void 0,
                                t._btn_page5 = void 0,
                                t._btn_page6 = void 0,
                                t._btn_page7 = void 0,
                                t._btn_page8 = void 0,
                                t._btn_page9 = void 0,
                                t._server_item1 = void 0,
                                t._server_item2 = void 0,
                                t._server_item3 = void 0,
                                t._server_item4 = void 0,
                                t._server_item5 = void 0,
                                t._server_item6 = void 0,
                                t._server_item7 = void 0,
                                t._server_item8 = void 0,
                                t._tfRecommend = void 0,
                                t._logBtn = void 0,
                                t._loginLogNode = void 0,
                                t
                        }
                        return i(t, e),
                            o(t, [{
                                key: "leftBtn",
                                get: function() {
                                    return this._leftBtn || (this._leftBtn = new N(this.getChildByName("leftBtn"))),
                                        this._leftBtn
                                }
                            }, {
                                key: "rightBtn",
                                get: function() {
                                    return this._rightBtn || (this._rightBtn = new N(this.getChildByName("rightBtn"))),
                                        this._rightBtn
                                }
                            }, {
                                key: "oneBtn",
                                get: function() {
                                    return this._oneBtn || (this._oneBtn = new N(this.getChildByName("oneBtn"))),
                                        this._oneBtn
                                }
                            }, {
                                key: "maxBtn",
                                get: function() {
                                    return this._maxBtn || (this._maxBtn = new N(this.getChildByName("maxBtn"))),
                                        this._maxBtn
                                }
                            }, {
                                key: "btn_page1",
                                get: function() {
                                    return this._btn_page1 || (this._btn_page1 = new N(this.getChildByName("btn_page1"))),
                                        this._btn_page1
                                }
                            }, {
                                key: "btn_page2",
                                get: function() {
                                    return this._btn_page2 || (this._btn_page2 = new N(this.getChildByName("btn_page2"))),
                                        this._btn_page2
                                }
                            }, {
                                key: "btn_page3",
                                get: function() {
                                    return this._btn_page3 || (this._btn_page3 = new N(this.getChildByName("btn_page3"))),
                                        this._btn_page3
                                }
                            }, {
                                key: "btn_page4",
                                get: function() {
                                    return this._btn_page4 || (this._btn_page4 = new N(this.getChildByName("btn_page4"))),
                                        this._btn_page4
                                }
                            }, {
                                key: "btn_page5",
                                get: function() {
                                    return this._btn_page5 || (this._btn_page5 = new N(this.getChildByName("btn_page5"))),
                                        this._btn_page5
                                }
                            }, {
                                key: "btn_page6",
                                get: function() {
                                    return this._btn_page6 || (this._btn_page6 = new N(this.getChildByName("btn_page6"))),
                                        this._btn_page6
                                }
                            }, {
                                key: "btn_page7",
                                get: function() {
                                    return this._btn_page7 || (this._btn_page7 = new N(this.getChildByName("btn_page7"))),
                                        this._btn_page7
                                }
                            }, {
                                key: "btn_page8",
                                get: function() {
                                    return this._btn_page8 || (this._btn_page8 = new N(this.getChildByName("btn_page8"))),
                                        this._btn_page8
                                }
                            }, {
                                key: "btn_page9",
                                get: function() {
                                    return this._btn_page9 || (this._btn_page9 = new N(this.getChildByName("btn_page9"))),
                                        this._btn_page9
                                }
                            }, {
                                key: "server_item1",
                                get: function() {
                                    return this._server_item1 || (this._server_item1 = new N(this.getChildByName("server_item1"))),
                                        this._server_item1
                                }
                            }, {
                                key: "server_item2",
                                get: function() {
                                    return this._server_item2 || (this._server_item2 = new N(this.getChildByName("server_item2"))),
                                        this._server_item2
                                }
                            }, {
                                key: "server_item3",
                                get: function() {
                                    return this._server_item3 || (this._server_item3 = new N(this.getChildByName("server_item3"))),
                                        this._server_item3
                                }
                            }, {
                                key: "server_item4",
                                get: function() {
                                    return this._server_item4 || (this._server_item4 = new N(this.getChildByName("server_item4"))),
                                        this._server_item4
                                }
                            }, {
                                key: "server_item5",
                                get: function() {
                                    return this._server_item5 || (this._server_item5 = new N(this.getChildByName("server_item5"))),
                                        this._server_item5
                                }
                            }, {
                                key: "server_item6",
                                get: function() {
                                    return this._server_item6 || (this._server_item6 = new N(this.getChildByName("server_item6"))),
                                        this._server_item6
                                }
                            }, {
                                key: "server_item7",
                                get: function() {
                                    return this._server_item7 || (this._server_item7 = new N(this.getChildByName("server_item7"))),
                                        this._server_item7
                                }
                            }, {
                                key: "server_item8",
                                get: function() {
                                    return this._server_item8 || (this._server_item8 = new N(this.getChildByName("server_item8"))),
                                        this._server_item8
                                }
                            }, {
                                key: "tfRecommend",
                                get: function() {
                                    return this._tfRecommend || (this._tfRecommend = new N(this.getChildByName("tfRecommend"))),
                                        this._tfRecommend
                                }
                            }, {
                                key: "logBtn",
                                get: function() {
                                    return this._logBtn || (this._logBtn = new N(this.getChildByName("logBtn"))),
                                        this._logBtn
                                }
                            }, {
                                key: "loginLogNode",
                                get: function() {
                                    return this._loginLogNode || (this._loginLogNode = new k(this.getChildByName("LoginLog"))),
                                        this._loginLogNode
                                }
                            }]),
                            t
                    }(N));
                r._RF.pop()
            }
        }
    }
));
