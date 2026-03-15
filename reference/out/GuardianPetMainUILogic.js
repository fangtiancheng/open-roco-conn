System.register("chunks:///_virtual/GuardianPetMainUILogic.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./global.ts", "./ADFCmdsType.ts", "./NetManager.ts", "./WindowCloseAction.ts", "./CommFunction.ts", "./GuardianPetData.ts", "./GuardianPetMainUIVO.ts", "./GuardianPetMainWindow.ts", "./PTB_0x03227A_QueryStatus0_S2C.ts", "./PTB_0x03227D_FeedUpgrade_C2S.ts", "./PTB_0x03227D_FeedUpgrade_S2C.ts", "./PTB_0x03227F_GetDayGift_S2C.ts", "./PTB_0x032280_FollowOperate_C2S.ts"], (function(t) {
        var n, e, i, a, o, s, d, r, u, _, c, l, g, P, h, w;
        return {
            setters: [function(t) {
                n = t.createClass
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    i = t.Constants
                }
                , function(t) {
                    a = t.__global
                }
                , function(t) {
                    o = t.ADFCmdsType
                }
                , function(t) {
                    s = t.NetManager
                }
                , function(t) {
                    d = t.WindowCloseAction
                }
                , function(t) {
                    r = t.CommFunction
                }
                , function(t) {
                    u = t.GuardianPetData
                }
                , function(t) {
                    _ = t.GuardianPetMainUIVO
                }
                , function(t) {
                    c = t.GuardianPetMainWindow
                }
                , function(t) {
                    l = t.PTB_0x03227A_QueryStatus0_S2C
                }
                , function(t) {
                    g = t.PTB_0x03227D_FeedUpgrade_C2S
                }
                , function(t) {
                    P = t.PTB_0x03227D_FeedUpgrade_S2C
                }
                , function(t) {
                    h = t.PTB_0x03227F_GetDayGift_S2C
                }
                , function(t) {
                    w = t.PTB_0x032280_FollowOperate_C2S
                }
            ],
            execute: function() {
                e._RF.push({}, "97f1f5YGoFGM4DLG/q+JF98", "GuardianPetMainUILogic", void 0);
                t("GuardianPetMainUILogic", function() {
                    function t() {
                        this._mainWindow = void 0,
                            this._fromFeed = !1,
                            this._mainWindow = a.UI.createWindow(c, !0),
                            this._mainWindow.closeAction = d.HIDE,
                            this._mainWindow.uiLogic = this,
                            this._mainWindow.close()
                    }
                    var e = t.prototype;
                    return e.dispose = function() {
                        this._mainWindow.closeAction = d.CLOSE,
                            this._mainWindow.close(),
                            this._mainWindow = null
                    }
                        ,
                        e.opened = function() {
                            return null != this._mainWindow && this._mainWindow.visible
                        }
                        ,
                        e.open = function() {
                            this.queryInfo(),
                            this._mainWindow && (this._mainWindow.data = null,
                                this._mainWindow.show())
                        }
                        ,
                        e.close = function() {
                            this._mainWindow && this._mainWindow.closeCurWin()
                        }
                        ,
                        e.queryInfo = function() {
                            r.setWaiting(!0),
                                s.send(o.T_GUARDIANPET_QUERYUI, null, l, this.protoHandler.bind(this))
                        }
                        ,
                        e.feed = function() {
                            this._fromFeed = !0,
                                r.setWaiting(!0);
                            var t = new g;
                            t.type = 0,
                                s.send(o.T_GUARDIANPET_OPERA, t, P, this.protoHandler.bind(this))
                        }
                        ,
                        e.multfeed = function(t) {
                            this._fromFeed = !0,
                                r.setWaiting(!0);
                            var n = new g;
                            n.type = 2,
                                n.num = t,
                                s.send(o.T_GUARDIANPET_OPERA, n, P, this.protoHandler.bind(this))
                        }
                        ,
                        e.levelUp = function() {
                            this._fromFeed = !1,
                                r.setWaiting(!0);
                            var t = new g;
                            t.type = 1,
                                s.send(o.T_GUARDIANPET_OPERA, t, P, this.protoHandler.bind(this))
                        }
                        ,
                        e.getDailyGift = function() {
                            r.setWaiting(!0),
                                s.send(o.T_GUARDIANPET_GETDAILYGIFT, null, h, this.protoHandler.bind(this))
                        }
                        ,
                        e.setFollowState = function() {
                            var t = new w;
                            t.type = this._mainWindow.getFollowState(),
                                s.send(o.T_GUARDIANPET_FOLLOW, t, null, null)
                        }
                        ,
                        e.protoHandler = function(t) {
                            var n, e, o, s = t.constructor;
                            if (r.setWaiting(!1),
                            0 == t.retCode.retCode)
                                switch (s) {
                                    case l:
                                        (e = new _).cur_exp = t.nowExperience,
                                            e.nextLv_exp = t.nextLevelNeedExperience,
                                            e.guardianPetData = new u,
                                            e.guardianPetData.level = t.guardianPetLevel,
                                            e.guardianPetData.typeID = t.guardianPetId,
                                            n = 100 * t.guardianPetId + t.guardianPetLevel,
                                            o = a.SysAPI.getGDataAPI().getDataProxy(i.GUARDIANPET_DATA).select(n),
                                            e.guardianPetData.guardianPetDes = o,
                                            e.pillNum = t.panaceaNum,
                                            e.isFollowing = t.flowFlag,
                                            e.dailyGiftGot = t.dayGiftFlag,
                                            e.dailyGiftNum = t.getPanaceaCountEachDay,
                                            e.dataSrc = _.DATA_SRC_QUERY,
                                        this._mainWindow && (this._mainWindow.data = e);
                                        break;
                                    case P:
                                        (e = new _).cur_exp = t.nowExperience,
                                            e.nextLv_exp = t.nextLevelNeedExperience,
                                            e.guardianPetData = new u,
                                            e.guardianPetData.level = t.guardianPetLevel,
                                            e.guardianPetData.typeID = t.guardianPetId,
                                            n = 100 * t.guardianPetId + t.guardianPetLevel,
                                            o = a.SysAPI.getGDataAPI().getDataProxy(i.GUARDIANPET_DATA).select(n),
                                            e.guardianPetData.guardianPetDes = o,
                                            e.pillNum = t.panaceaNum,
                                            e.dataSrc = this._fromFeed ? _.DATA_SRC_FEED : _.DATA_SRC_LEVELUP,
                                        this._mainWindow && (this._mainWindow.data = e);
                                        break;
                                    case h:
                                        var d = t.item;
                                        a.showItemPanel([{
                                            id: d.id,
                                            count: d.count
                                        }]),
                                        this._mainWindow && (this._mainWindow.dailyGiftGot = 1,
                                            this._mainWindow.hideAlert(),
                                            this._mainWindow.getPill())
                                }
                            else
                                switch (t.retCode.retMsg = t.retCode.retMsg.replace(/<br>/g, "\n"),
                                    t.retCode.retMsg = t.retCode.retMsg.replace(/<br\/>/g, "\n"),
                                    a.showMsgBox(t.retCode.retMsg),
                                    s) {
                                    case l:
                                        close();
                                        break;
                                    case P:
                                        break;
                                    case h:
                                        this._mainWindow && this._mainWindow.hideAlert()
                                }
                        }
                        ,
                        n(t, [{
                            key: "mainWindow",
                            get: function() {
                                return this._mainWindow
                            }
                        }]),
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
