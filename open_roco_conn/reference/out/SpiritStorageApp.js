System.register("chunks:///_virtual/SpiritStorageApp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CALLBACK.ts", "./CallbackCenter.ts", "./Constants.ts", "./global.ts", "./SpiritEquipInfoProxy.ts", "./NotifyDef.ts", "./ADFCmdsType.ts", "./AngelTcpHelper.ts", "./P_FreeRequest.ts", "./P_UInt.ts", "./NetManager.ts", "./AnimationLoader.ts", "./CFunction.ts", "./GlobalAPI.ts", "./NotificationCenter.ts", "./CGIUtil.ts", "./XML.ts", "./PureNotificationCenter.ts", "./AppConstDef.ts", "./BuildLogHelper.ts", "./SpiritAnimationContainerGaf.ts", "./AbandonedStorage.ts", "./GetEquipmentBagRsp.ts", "./PTB_0x0B0512_GetStorageList_PUSH.ts", "./NetDefine.ts", "./NetResult2.ts", "./P_DGetSpiritsDetail.ts", "./P_DGetSpiritsList.ts", "./P_DiscardSpiritProcessor.ts", "./P_FarmGard.ts", "./P_PutInBag.ts", "./P_ReleasingSpirit.ts", "./P_ReqSpiritsDetail.ts", "./P_STGetBagSpirits.ts", "./SpiritStorageResAdapter.ts", "./NotSpiritTips.ts", "./SearchBarSprite.ts", "./SearchData.ts", "./SpiritChangeBar.ts", "./SpiritContainer.ts", "./SpiritInformationBar.ts", "./UIExpanLimitAlert.ts", "./UIStorageExpandPanel.ts", "./SpiritKey.ts", "./STSpiritInfo.ts", "./SpiritStorageUISafeCodeShow.ts"], (function(i) {
        var t, e, r, a, n, s, o, h, c, l, d, p, u, S, m, _, f, g, I, B, y, P, T, C, v, D, A, b, w, x, L, E, U, N, R, G, M, O, F, k, q, H, V, K, z, j, W, X, Q, J, Y, Z, $, ii, ti;
        return {
            setters: [function(i) {
                t = i.applyDecoratedDescriptor,
                    e = i.inheritsLoose,
                    r = i.initializerDefineProperty,
                    a = i.assertThisInitialized,
                    n = i.createClass
            }
                , function(i) {
                    s = i.cclegacy,
                        o = i._decorator,
                        h = i.Prefab,
                        c = i.NodeEventType,
                        l = i.Component
                }
                , function(i) {
                    d = i.CALLBACK
                }
                , function(i) {
                    p = i.CallbackCenter
                }
                , function(i) {
                    u = i.Constants
                }
                , function(i) {
                    S = i.__global
                }
                , function(i) {
                    m = i.SpiritEquipInfoProxy
                }
                , function(i) {
                    _ = i.NotifyDef
                }
                , function(i) {
                    f = i.ADFCmdsType
                }
                , null, function(i) {
                    g = i.P_FreeRequest
                }
                , function(i) {
                    I = i.P_UInt
                }
                , function(i) {
                    B = i.NetManager
                }
                , function(i) {
                    y = i.AnimationLoader
                }
                , function(i) {
                    P = i.CFunction
                }
                , function(i) {
                    T = i.GlobalAPI
                }
                , function(i) {
                    C = i.NotificationCenter
                }
                , function(i) {
                    v = i.CGIUtil
                }
                , function(i) {
                    D = i.XML
                }
                , function(i) {
                    A = i.PureNotificationCenter
                }
                , function(i) {
                    b = i.AppConstDef
                }
                , function(i) {
                    w = i.default
                }
                , function(i) {
                    x = i.SpiritAnimationContainerGaf
                }
                , function(i) {
                    L = i.AbandonedStorage
                }
                , function(i) {
                    E = i.GetEquipmentBagRsp
                }
                , function(i) {
                    U = i.PTB_0x0B0512_GetStorageList_PUSH
                }
                , function(i) {
                    N = i.NetDefine
                }
                , function(i) {
                    R = i.NetResult
                }
                , function(i) {
                    G = i.P_DGetSpiritsDetail
                }
                , function(i) {
                    M = i.P_DGetSpiritsList
                }
                , function(i) {
                    O = i.P_DiscardSpiritProcessor
                }
                , function(i) {
                    F = i.P_FarmGard
                }
                , function(i) {
                    k = i.P_PutInBag
                }
                , function(i) {
                    q = i.P_ReleasingSpirit
                }
                , function(i) {
                    H = i.P_ReqSpiritsDetail
                }
                , function(i) {
                    V = i.P_STGetBagSpirits
                }
                , function(i) {
                    K = i.SpiritStorageResAdapter
                }
                , function(i) {
                    z = i.NotSpiritTips
                }
                , function(i) {
                    j = i.SearchBarSprite
                }
                , function(i) {
                    W = i.SearchData
                }
                , function(i) {
                    X = i.SpiritChangeBar
                }
                , function(i) {
                    Q = i.SpiritContainer
                }
                , function(i) {
                    J = i.SpiritInformationBar
                }
                , function(i) {
                    Y = i.UIExpanLimitAlert
                }
                , function(i) {
                    Z = i.UIStorageExpandPanel
                }
                , function(i) {
                    $ = i.SpiritKey
                }
                , function(i) {
                    ii = i.STSpiritInfo
                }
                , function(i) {
                    ti = i.SpiritStorageUISafeCodeShow
                }
            ],
            execute: function() {
                var ei, ri, ai, ni, si, oi, hi;
                s._RF.push({}, "ecedeUDgCBD16iBVfUwaBVx", "SpiritStorageApp", void 0);
                var ci = o.ccclass
                    , li = o.property
                    , di = o.menu;
                i("SpiritStorageApp", (ei = di("AUI/SpiritStorageApp"),
                    ri = li(h),
                    ai = li(h),
                ci(ni = ei((oi = t((si = function(i) {
                    function t() {
                        var t;
                        return (t = i.call(this) || this).closehandler = void 0,
                            t._searchBar = void 0,
                            t._containerBar = void 0,
                            t._informationBar = void 0,
                            t._changeBar = void 0,
                            t._ca = void 0,
                            t.sysApi = void 0,
                            t.commUI = void 0,
                            t.canbutton = !0,
                            t._abandonedStorage = void 0,
                            t._params1 = -1,
                            t._notSpiritTips = void 0,
                            t._uiExpanLimitAlert = void 0,
                            t._uiPutCloudShow = void 0,
                            t._uiStorageExpandPanel = void 0,
                            t._uiSafeCodeShow = void 0,
                            t._numDiamond = 20,
                            t._curCapacity = void 0,
                            t._extraStorage = void 0,
                            t._extraStorageLimit = 200,
                            t._uiSkinStoreShow = void 0,
                            t.OriginalStorage = 500,
                            t._cgiLdr = void 0,
                            t._toDeletedId = void 0,
                            t._toDeletedCaughtTime = void 0,
                            t.canRefresh = !1,
                            t.needSafeCode = !0,
                            t.bgArr = [-1, -1, -1],
                            t.x = void 0,
                            t.y = void 0,
                            t._this = void 0,
                            r(t, "spiritIconPrefab", oi, a(t)),
                            r(t, "spiritContainerMcPrefab", hi, a(t)),
                            t._spiritContainer = null,
                            t._start = !1,
                            t._isPlay = !0,
                            t._gaf = null,
                            t
                    }
                    e(t, i);
                    var s = t.prototype;
                    return s.onStart = function() {
                        0 != this._start && (1 == w.IS_LOCAL && console.info("SpiritStorageApp==onStart"),
                        this._searchBar && this._searchBar.reset1(),
                            this.activate(),
                            this.init1())
                    }
                        ,
                        s.start = function() {
                            1 == w.IS_LOCAL && console.info("SpiritStorageApp==start"),
                                K.getInstance(),
                                this.setAngelSysAPI(T.gAngelSysAPI),
                                this.onShow(),
                                this.activate(),
                                this.addCloseHandler(null),
                            this._searchBar && this._searchBar.reset1(),
                                this._start = !0
                        }
                        ,
                        s.onDestroy = function() {
                            this.dispose()
                        }
                        ,
                        s.onShow = function() {
                            this._containerBar = new Q(this),
                                this.node.addChild(this._containerBar),
                                this._informationBar = new J(this),
                                this.node.addChild(this._informationBar),
                                this._searchBar = new j(this),
                                this.node.addChild(this._searchBar),
                                this._changeBar = new X(this),
                                this.node.addChild(this._changeBar),
                                this._changeBar.visible = !1,
                                this._abandonedStorage = new L(this),
                                this._abandonedStorage.application = this,
                                this._abandonedStorage.container = this.node,
                                this._abandonedStorage.initialize(),
                                this._notSpiritTips = new z,
                                this.node.addChild(this._notSpiritTips),
                                this._uiSafeCodeShow = new ti(this),
                                this.node.addChild(this._uiSafeCodeShow),
                                this._uiSafeCodeShow.visible = !1,
                                this._uiExpanLimitAlert = new Y(this),
                                this.node.addChild(this._uiExpanLimitAlert),
                                this._uiExpanLimitAlert.visible = !1,
                                this._uiStorageExpandPanel = new Z(this),
                                this.node.addChild(this._uiStorageExpandPanel),
                                this._uiStorageExpandPanel.visible = !1,
                                this._uiStorageExpandPanel.onExpandStorage.add(this.onExpandStorageHandler.bind(this)),
                                this._cgiLdr = new v,
                                this._cgiLdr.cgiCallbackFun = this.onCgiCallback.bind(this),
                                this._cgiLdr.cgiSendData("storage_change_skin?cmd=1" + t.getPlatfromStr())
                        }
                        ,
                        s.changeSkin = function(i) {
                            this._containerBar.setBgStyleByArr(i),
                                this._informationBar.setBgStyleByID(i[2])
                        }
                        ,
                        s.addDataProcessor = function(i, t, e, r) {
                            void 0 === r && (r = !0),
                                B.addDataProcessor(i, t, e, r)
                        }
                        ,
                        s.onSuccess = function(i, t) {
                            this.onDataReceived(t, i)
                        }
                        ,
                        s.removeDataProcessor = function(i, t) {
                            B.removeDataProcessor(i, t)
                        }
                        ,
                        s.onDataReceived = function(i, t) {
                            var e = i;
                            if (0 == new R(i).value)
                                switch (t) {
                                    case 722194:
                                        this.commUI.closeMiniLoading();
                                        var r = e
                                            , a = this.convertToSpiritInfo(r.spiritInfo);
                                        this.handleExtraSpriteList(a),
                                        1 == r.reponseFlag && this.init();
                                        break;
                                    case 722195:
                                        this.commUI.closeMiniLoading();
                                        var n = e
                                            , s = this.convertToSpiritInfo(n.spiritInfo);
                                        this.handleExtraSpriteListForPutInBagLogic(s)
                                }
                            else
                                this.commUI.closeMiniLoading(),
                                    this.init()
                        }
                        ,
                        s.convertToSpiritInfo = function(i) {
                            for (var t = [], e = 0; e < i.length; e++) {
                                var r = new ii
                                    , a = i[e];
                                r.catchTime = a.catchTime,
                                    r.addSTTime = a.storageTime,
                                    r.id = a.spiritId;
                                var n = a.sex;
                                r.sex = 7 & n,
                                    r.talentType = n >> 3 & 255,
                                    r.talentLevel = n >> 11 & 7,
                                    r.level = n >> 14 & 255,
                                    r.skinID = 0 != (n >> 22 & 15) ? 1e5 + 10 * a.spiritId + ((n >> 22 & 15) - 1) : 0;
                                var s = N.sDesProxy;
                                null != s && (r.spiritDes = s.select(a.spiritId)),
                                r.spiritDes && (r.height = Number(r.spiritDes.height.split("m")[0]),
                                    r.weight = Number(r.spiritDes.weight.split("kg")[0])),
                                    t.push(r)
                            }
                            return t
                        }
                        ,
                        s.getSpiritName = function(i) {
                            var t = S.SysAPI.getGDataAPI().getDataProxy(u.SPIRIT_DATA).select(Number(i));
                            return null == t ? "" : t.name
                        }
                        ,
                        s.handleExtraSpriteList = function(i) {
                            if (null != (i = i)) {
                                if (W.allSpirits = W.allSpirits.concat(i),
                                    W.allSpirits.sort((function(i, t) {
                                            var e = i.addSTTime;
                                            return t.addSTTime - e
                                        }
                                    )),
                                    W.searchedSpirits = W.allSpirits,
                                -1 != this._params1) {
                                    var t = W.serchByfirstID(this._params1);
                                    this._notSpiritTips.visible = 0 == t.length,
                                        W.searchedSpirits = t
                                }
                            } else
                                W.allSpirits = [],
                                    W.searchedSpirits = [];
                            this.curCapacity = this._extraStorage + this.OriginalStorage,
                                this.curCapacity < 1e3 ? this._informationBar.putToCloudShow(!1) : this._informationBar.putToCloudShow(!0)
                        }
                        ,
                        s.handleExtraSpriteListForPutInBagLogic = function(i) {
                            null != i && (W.allSpirits = W.allSpirits.concat(i),
                                W.allSpirits.sort((function(i, t) {
                                        var e = i.addSTTime;
                                        return t.addSTTime - e
                                    }
                                )),
                                W.searchedSpirits = W.allSpirits,
                                this.updateCurCapacityTextField(),
                            (1 == this.canRefresh || W.allSpirits.length < 750) && this.sortBySearch(),
                                this.showChangeBar(!1),
                                this._informationBar.putIned = !1,
                                this.canRefresh = !0)
                        }
                        ,
                        s.init = function() {
                            this._searchBar && this._searchBar.init(),
                            this._containerBar && this._containerBar.init(),
                            this._informationBar && this._informationBar.init(),
                            this._changeBar && this._changeBar.init(),
                                this.sortBySearch()
                        }
                        ,
                        s.init1 = function() {
                            this._searchBar && this._changeBar.init1()
                        }
                        ,
                        s.onGotSpiritList = function(i) {
                            w.IS_LOCAL,
                                this.commUI.closeMiniLoading();
                            var t = i.spirits;
                            if (null != t) {
                                if (W.allSpirits = t,
                                    W.allSpirits.sort((function(i, t) {
                                            var e = i.addSTTime;
                                            return t.addSTTime - e
                                        }
                                    )),
                                    W.searchedSpirits = W.allSpirits,
                                -1 != this._params1) {
                                    var e = W.serchByfirstID(this._params1);
                                    this._notSpiritTips.visible = 0 == e.length,
                                        W.searchedSpirits = e
                                }
                            } else
                                W.allSpirits = [],
                                    W.searchedSpirits = [];
                            this.init()
                        }
                        ,
                        s.getItemData = function() {
                            var i = this;
                            this.commUI.createMiniLoading(),
                                B.send(721028, null, E, (function(t) {
                                        if (0 != t.retInfo.retCode) {
                                            var e = t.retInfo.retMsg.readMultiByte(t.retInfo.retMsg.length, "gb2312");
                                            return S.showMsgBox(e),
                                                W.allEquip = new m(0,null),
                                                void i.showNormalStorage()
                                        }
                                        0 == t.equipmentCount ? W.allEquip = new m(0,null) : (S.SysAPI.getGDataAPI().addDataProxy(new m(t.equipmentCount,t.equipmentInfo)),
                                            W.allEquip = S.SysAPI.getGDataAPI().getDataProxy(u.SEQUIP_INFO_DATA)),
                                            i.showNormalStorage()
                                    }
                                ))
                        }
                        ,
                        s.onGotSpiritDetail = function(i) {
                            var t = i.code;
                            if (t.isError())
                                return this.commUI.closeMiniLoading(),
                                    void this.commUI.alert("", t.message);
                            this._informationBar.idled && this.commUI.closeMiniLoading(),
                                W.detailVo = i.spirits[0],
                                this._informationBar.removeText(),
                                this._informationBar.writeText(),
                                this._informationBar.getDataed = !0
                        }
                        ,
                        s.onReleaseRes = function(i) {
                            if (this.commUI.closeMiniLoading(),
                            -4 == i.code.code && (this.needSafeCode = !0,
                                this._uiSafeCodeShow.visible = !0,
                                this._uiSafeCodeShow.init()),
                                i.code.isError())
                                return this.sysApi.getUISysAPI().commUIManager.alert("", i.code.message, 1, new P(this.owlDialogResultHandler2,this)),
                                    void console.log("[Angle]:放生失败！");
                            this.needSafeCode = !1,
                                W.remove(i.key),
                                this.updateCurCapacityTextField(),
                                console.log("[SpiritStorageApp] 放生好了!!"),
                            W.searchedSpirits.length > 0 && (W.tempSpiritId = W.searchedSpirits[0].id,
                                W.tempSpiritTime = W.searchedSpirits[0].catchTime,
                                W.tempSpiritName = W.searchedSpirits[0].spiritDes.name,
                                W.tempSpiritTalentType = W.searchedSpirits[0].talentType,
                                W.tempSpiritTalentLevel = W.searchedSpirits[0].talentLevel,
                                W.tempSpiritSkinID = W.searchedSpirits[0].skinID,
                                this.sortBySearch()),
                            0 == W.searchedSpirits.length && this.sortBySearch()
                        }
                        ,
                        s.showChangeBar = function(i) {
                            i ? (this._changeBar.visible = !0,
                                this.canbutton = !1) : (this._changeBar.visible = !1,
                                this.canbutton = !0)
                        }
                        ,
                        s.requestSPiritDetail = function(i, t) {
                            var e = new H;
                            e.fill([new $(i,t)]),
                                new g(N.GET_DETAIL_INFO,e,G,this.onGotSpiritDetail.bind(this)).send()
                        }
                        ,
                        s.requestBagSpirits = function() {
                            this.commUI.createMiniLoading(),
                                new g(f.T_SPIRIT_BAG_DATA,new I,V,this.onGotBagSpirits.bind(this)).send()
                        }
                        ,
                        s.onGotBagSpirits = function(i) {
                            this.commUI.closeMiniLoading();
                            var t = i.code;
                            t.isError() ? this.commUI.alert("", t.message) : null != i.spirits && (i.spirits.length >= 6 ? (this.showChangeBar(!0),
                                W.changeSpirits = [],
                                W.changeSpirits = i.spirits,
                                this._changeBar.refresh(),
                                this._informationBar.putIned = !1) : this.requestPutInBag(W.tempSpiritId, W.tempSpiritTime))
                        }
                        ,
                        s.requestPutInBag = function(i, t, e) {
                            void 0 === e && (e = 0),
                                this.canRefresh = !1,
                                this.commUI.createMiniLoading();
                            var r = new k;
                            r.key = new $(i,t),
                                r.posIndex = e,
                                new g(N.ADD_TO_BAG,r,k,this.onPutInBagDone.bind(this)).send()
                        }
                        ,
                        s.onPutInBagDone = function(i) {
                            this.commUI.closeMiniLoading();
                            var t = i.code;
                            t.isError() ? this.commUI.alert("", t.message) : (W.allSpirits = i.spirits,
                                W.searchedSpirits = i.spirits)
                        }
                        ,
                        s.requestDiscardSpirit = function() {
                            this.commUI.createMiniLoading();
                            var i = new O;
                            i.id = W.tempSpiritId,
                                i.caughtTime = W.tempSpiritTime,
                                this.setDeleteSTSpiritInfo(i.id, i.caughtTime),
                                new g(N.PUTOUT_TO_HOME,i,O,this.onDiscardSpiritDone.bind(this)).send()
                        }
                        ,
                        s.onDiscardSpiritDone = function(i) {
                            this.commUI.closeMiniLoading(),
                                this._informationBar.putInHome = !1;
                            var t = i.code;
                            t.isError() ? this.commUI.alert("", t.message) : this.deleteSTSpiritInfoFromList()
                        }
                        ,
                        s.deleteSTSpiritInfoFromList = function() {
                            for (var i, t = 0; t < W.allSpirits.length; t++)
                                if ((i = W.allSpirits[t]).id == this._toDeletedId && i.catchTime == this._toDeletedCaughtTime) {
                                    W.allSpirits.splice(t, 1);
                                    break
                                }
                            W.searchedSpirits = W.allSpirits,
                                this.updateCurCapacityTextField(),
                                this.sortBySearch()
                        }
                        ,
                        s.setDeleteSTSpiritInfo = function(i, t) {
                            this._toDeletedId = i,
                                this._toDeletedCaughtTime = t
                        }
                        ,
                        s.requestFarmGard = function() {
                            console.log("请求放入庄园"),
                                this.commUI.createMiniLoading();
                            var i = new F;
                            i.id = W.tempSpiritId,
                                i.caughtTime = W.tempSpiritTime,
                                new g(N.PUTOUT_TO_FARM,i,F,this.onFarmGard.bind(this)).send()
                        }
                        ,
                        s.onFarmGard = function(i) {
                            console.log("获得放入庄园数据"),
                                this.commUI.closeMiniLoading(),
                                this._informationBar.putInHome = !1;
                            var t = i.code;
                            t.isError() ? this.commUI.alert("", t.message) : (W.allSpirits = i.spirits,
                                W.searchedSpirits = i.spirits,
                                this.updateCurCapacityTextField(),
                                this.sortBySearch())
                        }
                        ,
                        s.windows2 = function() {
                            this.sysApi.getUISysAPI().commUIManager.alert("", "【" + W.tempSpiritName + "】要开始家里的成长锻炼吗？", 2, new P(this.owlDialogResultHandler3,this))
                        }
                        ,
                        s.windows3 = function() {
                            this.sysApi.getUISysAPI().commUIManager.alert("", "要让这只宠物驻守农场吗？", 2, new P(this.owlDialogResultHandler4,this))
                        }
                        ,
                        s.owlDialogResultHandler3 = function(i) {
                            1 == i ? this.requestDiscardSpirit() : 2 == i && (this._informationBar.putInHome = !1)
                        }
                        ,
                        s.owlDialogResultHandler4 = function(i) {
                            1 == i ? this.requestFarmGard() : 2 == i && (this._informationBar.putInHome = !1)
                        }
                        ,
                        s.getCurrentpage = function() {
                            return this._containerBar.currentPage
                        }
                        ,
                        s.windows1 = function() {
                            this.sysApi.getUISysAPI().commUIManager.alert("", "确定要放生这只宠物吗？", 2, new P(this.owlDialogResultHandler,this))
                        }
                        ,
                        s.owlDialogResultHandler = function(i) {
                            1 == i && (this.needSafeCode ? this._cgiLdr.cgiSendData("warehouse_security_code?cmd=9" + t.getPlatfromStr()) : this.reqSPiritRelease(W.tempSpiritId, W.tempSpiritTime))
                        }
                        ,
                        s.owlDialogResultHandler2 = function(i) {}
                        ,
                        s.reqSPiritRelease = function(i, t) {
                            this.commUI.createMiniLoading();
                            var e = new q;
                            e.key = new $(i,t),
                                e.safeCode = 0,
                                new g(N.RELEASE_SPIRIT,e,q,this.onReleaseRes.bind(this)).send()
                        }
                        ,
                        s.sureSPiritRelease = function(i) {
                            this.commUI.createMiniLoading();
                            var t = new q;
                            t.key = new $(W.tempSpiritId,W.tempSpiritTime),
                                t.safeCode = i,
                                new g(N.RELEASE_SPIRIT,t,q,this.onReleaseRes.bind(this)).send()
                        }
                        ,
                        s.refreshContainer = function() {
                            this._notSpiritTips && (this._notSpiritTips.visible = !1),
                            this._containerBar && this._containerBar.refresh()
                        }
                        ,
                        s.refreshInformationBar = function() {
                            this._informationBar && this._informationBar.refresh()
                        }
                        ,
                        s.addCloseHandler = function(i) {
                            this.closehandler = i,
                                this._informationBar.mainBar.closeBtn.on(c.TOUCH_END, this.onClose1, this),
                                this._abandonedStorage.addCloseHandler(this.onClose1.bind(this))
                        }
                        ,
                        s.onClose1 = function(i) {
                            p.notifyEvent(d.ANGEL_APP_ON_CLOSE, "SpiritStorageApp"),
                                A.sendNotification(b.NN_V_UPDATE_USER_INFO_PANEL),
                                A.sendNotification(b.NN_V_CLOSE_SPIRIT_STORAGE_VIEW),
                            this.closehandler && this.closehandler(i)
                        }
                        ,
                        s.setAngelSysAPI = function(i) {
                            this.sysApi = i,
                                this._ca = this.sysApi.getResSysAPI().getResAdapter(u.COMBAT_RES)
                        }
                        ,
                        s.setIdle = function() {
                            this._informationBar.mainBar.propertyIcon.gotoAndStop(this._informationBar.mainBar.propertyIcon.totalFrames),
                                this._informationBar.mainBar.propertyIcon2.gotoAndStop(this._informationBar.mainBar.propertyIcon2.totalFrames),
                                this._informationBar.mainBar.propertyIcon3.gotoAndStop(this._informationBar.mainBar.propertyIcon3.totalFrames),
                                this._informationBar.mainBar.spiritNameText.text = W.tempSpiritName,
                                this._informationBar.setTalent(),
                            this._informationBar.idled && this._ca.returnSpiritIdleMC(W.tempSpiritIdleName),
                                this._informationBar.idled = !1,
                                0 != W.tempSpiritSkinID ? this.loadIdle(W.tempSpiritSkinID) : this.loadIdle(W.tempSpiritId)
                        }
                        ,
                        s.playIdle = function(i) {
                            this.playIdle1(i);
                            this._informationBar.mainBar.spiritLittleMc.getComponent(y)
                        }
                        ,
                        s.playIdle1 = function(i) {
                            this._isPlay = i,
                            this._gaf && (1 == i ? this._gaf.play("IDLE") : (this._gaf.gotoAndStopGaf("Spirit", 1),
                                this._gaf.visible = !0))
                        }
                        ,
                        s.loadIdle = function(i) {
                            this.loadIdle1(i)
                        }
                        ,
                        s.loadIdle1 = function(i) {
                            this.removeIdle(),
                            this._gaf || (this._gaf = new x,
                                this._gaf.loadedCallBack = this.onSpiritAnimationLoaded.bind(this),
                                this._gaf.initWithPetWithGaf(i),
                                this._informationBar.mainBar.spiritLittleMc.addChild(this._gaf),
                                this._gaf.x = -1240,
                                this._gaf.y = 400),
                                this.onload()
                        }
                        ,
                        s.onSpiritAnimationLoaded = function(i) {
                            i && (this._gaf.visible = !0,
                                this.playIdle(this._isPlay))
                        }
                        ,
                        s.removeIdle = function() {
                            this.removeIdle1()
                        }
                        ,
                        s.removeIdle1 = function() {
                            this._gaf && (this._gaf.release(),
                                this._gaf.destroy()),
                                this._gaf = null
                        }
                        ,
                        s.onload = function() {
                            this._informationBar && (this._informationBar.idled,
                                this._informationBar.idled = !0),
                            1 == this._informationBar.getDataed && this.commUI.closeMiniLoading()
                        }
                        ,
                        s.setup = function() {
                            S.showMsgBox("setup is called."),
                                N.sDesProxy = this.sysApi.getGDataAPI().getDataProxy(u.SPIRIT_DATA),
                                N.sSkillDesProxy = this.sysApi.getGDataAPI().getDataProxy(u.SSKILL_DATA),
                                this.commUI = this.sysApi.getUISysAPI().commUIManager
                        }
                        ,
                        s.getDisplay = function() {
                            return this.node
                        }
                        ,
                        s.activate = function() {
                            this.sysApi = S.SysAPI,
                                N.sDesProxy = this.sysApi.getGDataAPI().getDataProxy(u.SPIRIT_DATA),
                                N.sSkillDesProxy = this.sysApi.getGDataAPI().getDataProxy(u.SSKILL_DATA),
                                this.commUI = this.sysApi.getUISysAPI().commUIManager,
                                this.addDataProcessor(722194, U, this.onSuccess.bind(this), !0),
                                this.addDataProcessor(722195, U, this.onSuccess.bind(this), !0),
                                this.getItemData(),
                            this._notSpiritTips && (this._notSpiritTips.visible = !1)
                        }
                        ,
                        s.sortBySearch = function() {
                            if (-1 != this._params1) {
                                var i = W.serchByfirstID(this._params1);
                                this._notSpiritTips.visible = 0 == i.length,
                                    W.searchedSpirits = i,
                                    this._searchBar.refreshTime()
                            } else
                                7 == W.curSearchType ? this._searchBar.searchByName(W.curSearchName) : (W.searchedSpirits = [],
                                    this._searchBar.refreshProperty1(W.curSearchProperty),
                                    1 == W.curOtherSearchType ? this._searchBar.refreshSex1(W.curSearchSex) : 2 == W.curOtherSearchType ? this._searchBar.refreshGroup(W.curSearchGroup) : 3 == W.curOtherSearchType && this._searchBar.refreshByEquipType1(W.curSearchEquipType),
                                    this.refreshContainer())
                        }
                        ,
                        s.search = function() {
                            7 == W.curSearchType ? this._searchBar.searchByName(W.curSearchName) : (W.searchedSpirits = [],
                                this._searchBar.refreshProperty1(W.curSearchProperty),
                                1 == W.curOtherSearchType ? this._searchBar.refreshSex1(W.curSearchSex) : 2 == W.curOtherSearchType ? this._searchBar.refreshGroup(W.curSearchGroup) : 3 == W.curOtherSearchType && this._searchBar.refreshByEquipType1(W.curSearchEquipType),
                                this.refreshContainer())
                        }
                        ,
                        s.inactivate = function() {
                            this.removeDataProcessor(722194, this.onSuccess),
                                this.removeDataProcessor(722195, this.onSuccess),
                                W.del()
                        }
                        ,
                        s.getBGRect = function() {
                            return null
                        }
                        ,
                        s.getCloseBtnPos = function() {
                            return null
                        }
                        ,
                        s.dispose = function() {
                            this.removeDataProcessor(722194, this.onSuccess),
                                this.removeDataProcessor(722195, this.onSuccess),
                                W.del(),
                            this._searchBar && (this._searchBar.del(),
                                this._searchBar = null),
                            this._containerBar && (this._containerBar.del(),
                                this._containerBar = null),
                            this._informationBar && (this._informationBar.mainBar.closeBtn.off(c.TOUCH_END, this.closehandler, this),
                                this._informationBar.del(),
                                this._informationBar = null),
                                this._ca = null,
                                this.sysApi = null,
                                this.commUI = null,
                                this._abandonedStorage.removeCloseHandler(this.closehandler),
                                this._abandonedStorage.dispose(),
                                this._uiExpanLimitAlert = null,
                                this._uiPutCloudShow = null,
                                this._uiSkinStoreShow = null,
                            this._uiStorageExpandPanel && (this._uiStorageExpandPanel.onExpandStorage.removeAll(),
                                this._uiStorageExpandPanel = null),
                                this._cgiLdr = null
                        }
                        ,
                        s.showNormalStorage = function() {
                            this.hideAbandonedStorage(),
                                this._containerBar.visible = !0,
                                this._informationBar.visible = !0,
                                this._searchBar.reset(),
                                this._searchBar.visible = !0,
                                this._changeBar.visible = !1,
                                W.curSearchType = 0,
                                W.curOtherSearchType = 0,
                                W.curSearchProperty = "";
                            var i = new M;
                            i.flag = 0;
                            var t = new M;
                            i.flag = 0,
                                new g(N.GET_SPIRIT_LIST,i,t,this.onGetOriginalSpriteList.bind(this)).send()
                        }
                        ,
                        s.onPutToCloud = function() {
                            this._uiPutCloudShow.visible = !0
                        }
                        ,
                        s.surePutToCloud = function() {
                            for (var i = -1, e = 0; e < W.allSpirits.length; e++)
                                W.allSpirits[e].id == W.tempSpiritId && W.allSpirits[e].catchTime == W.tempSpiritTime && (i = e);
                            -1 != i && (0 == W.allSpirits[i].weaponFlag && 0 == W.allSpirits[i].armorFlag && 0 == W.allSpirits[i].jewelryFlag ? this._cgiLdr.cgiSendData("spirit_cloud_storage?cmd=1&id=" + W.tempSpiritId + "&catchtime=" + W.tempSpiritTime + t.getPlatfromStr()) : S.UI.alert("", "携带装备宠物无法寄存，请脱下所有装备后重试！"))
                        }
                        ,
                        s.onGetOriginalSpriteList = function(i) {
                            this.extraStorageLimit = i.numExtraStorageLimit,
                                this._extraStorage = i.numExtraStorage,
                                this.curCapacity = this._extraStorage + this.OriginalStorage,
                                this.curCapacity < 1e3 ? this._informationBar.putToCloudShow(!1) : this._informationBar.putToCloudShow(!0);
                            var t = i.spirits;
                            if (null != t) {
                                if (W.allSpirits = t,
                                    W.allSpirits.sort((function(i, t) {
                                            var e = i.addSTTime;
                                            return t.addSTTime - e
                                        }
                                    )),
                                    W.searchedSpirits = W.allSpirits,
                                -1 != this._params1) {
                                    var e = W.serchByfirstID(this._params1);
                                    this._notSpiritTips.visible = 0 == e.length,
                                        W.searchedSpirits = e
                                }
                            } else
                                W.allSpirits = [],
                                    W.searchedSpirits = []
                        }
                        ,
                        s.hideNormalStorage = function() {
                            this._containerBar.visible = !1,
                                this._informationBar.visible = !1,
                                this._searchBar.visible = !1,
                                this._changeBar.visible = !1
                        }
                        ,
                        s.showAbandonedStorage = function() {
                            this.hideNormalStorage(),
                                this._abandonedStorage.reset(),
                                this._abandonedStorage.show(this.bgArr),
                                this._abandonedStorage.requestSpiritList()
                        }
                        ,
                        s.hideAbandonedStorage = function() {
                            this._abandonedStorage || w.IS_LOCAL,
                                this._abandonedStorage.hide()
                        }
                        ,
                        s.setParams = function(i) {
                            this._params1 = "number" == typeof i ? i : -1
                        }
                        ,
                        s.getDiamond = function() {
                            this._cgiLdr.cgiSendData("buy_extra_storage_space?cmd=0" + t.getPlatfromStr())
                        }
                        ,
                        s.showSkinStoreUI = function() {}
                        ,
                        s.showExpandStorage = function() {
                            this.getDiamond(),
                                this._extraStorage == this._extraStorageLimit ? (this._uiExpanLimitAlert.visible = !0,
                                    this._uiExpanLimitAlert.text = this._extraStorageLimit + this.OriginalStorage + "") : this.setStorageExpandPanelVisible(!0)
                        }
                        ,
                        s.updateCurCapacityTextField = function() {
                            this._containerBar.curCapacity = W.allSpirits.length + "/" + this.curCapacity
                        }
                        ,
                        s.onCgiCallback = function(i) {
                            var e = new D(i.data).data;
                            if (0 != Number(e.result.value))
                                return -1 != String(i.sendType).indexOf("spirit_cloud_storage?cmd=1") || -1 != String(i.sendType).indexOf("warehouse_security_code?cmd=9") ? void S.UI.alert("", String(e.result.msg)) : void 0;
                            if (-1 != String(i.sendType).indexOf("storage_change_skin?cmd=1")) {
                                for (var r = [], a = 0; a < e.id.length; a++)
                                    r.push(Number(e.id[a]));
                                this.changeSkin(r)
                            }
                            if (-1 != String(i.sendType).indexOf("warehouse_security_code?cmd=9") && (1 == Number(e.open) && 0 == Number(e.need) ? (this._uiSafeCodeShow.visible = !0,
                                this._uiSafeCodeShow.init(),
                                this.needSafeCode = !0) : this.reqSPiritRelease(W.tempSpiritId, W.tempSpiritTime)),
                            -1 != String(i.sendType).indexOf("spirit_cloud_storage?cmd=1")) {
                                S.showMsgBox("寄存成功，可在家园打开“云仓”查看已寄存宠物信息！");
                                var n = new M;
                                n.flag = 0,
                                    new g(N.GET_SPIRIT_LIST,n,M,this.onGetOriginalSpriteList.bind(this)).send()
                            }
                            switch (i.sendType) {
                                case "buy_extra_storage_space?cmd=0" + t.getPlatfromStr():
                                    this._numDiamond = Number(e.roco_diamond_num);
                                    break;
                                case "buy_extra_storage_space?cmd=1" + t.getPlatfromStr():
                                    this.commUI.closeMiniLoading(),
                                        this._numDiamond = Number(e.roco_diamond_num),
                                        this._extraStorage = Number(e.extra_storage_space_num),
                                        this.curCapacity = this._extraStorage + this.OriginalStorage,
                                        this.curCapacity < 1e3 ? this._informationBar.putToCloudShow(!1) : this._informationBar.putToCloudShow(!0),
                                        S.showMsgBox("扩容成功"),
                                        this.setStorageExpandPanelVisible(!1),
                                        C.sendNotification(_.MAIN_UI_DIAMOND_CHANGED, this._numDiamond)
                            }
                        }
                        ,
                        s.setStorageExpandPanelVisible = function(i) {
                            i ? (this._uiStorageExpandPanel.visible = !0,
                                this._uiStorageExpandPanel.num = 1) : this._uiStorageExpandPanel.visible = !1
                        }
                        ,
                        s.onExpandStorageHandler = function(i) {
                            var e = new Object;
                            e.num = i,
                                this.commUI.createMiniLoading(),
                                this._cgiLdr.cgiSendData("buy_extra_storage_space?cmd=1" + t.getPlatfromStr(), e)
                        }
                        ,
                        t.getPlatfromStr = function() {
                            return "&platfrom=" + t.platformValue.toString()
                        }
                        ,
                        n(t, [{
                            key: "numDiamond",
                            get: function() {
                                return this._numDiamond
                            },
                            set: function(i) {
                                this._numDiamond = i
                            }
                        }, {
                            key: "curCapacity",
                            get: function() {
                                return this._curCapacity
                            },
                            set: function(i) {
                                this._curCapacity = i,
                                    this.updateCurCapacityTextField(),
                                    this._uiStorageExpandPanel.curCapacity = this._curCapacity,
                                    this._uiStorageExpandPanel.upperLimit = this._extraStorageLimit - this._extraStorage
                            }
                        }, {
                            key: "extraStorageLimit",
                            get: function() {
                                return this._extraStorageLimit
                            },
                            set: function(i) {
                                this._extraStorageLimit = i
                            }
                        }], [{
                            key: "platformValue",
                            get: function() {
                                return 1e4
                            }
                        }]),
                        t
                }(l)).prototype, "spiritIconPrefab", [ri], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    hi = t(si.prototype, "spiritContainerMcPrefab", [ai], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    ni = si)) || ni) || ni));
                s._RF.pop()
            }
        }
    }
));
