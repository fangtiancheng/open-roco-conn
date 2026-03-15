System.register("chunks:///_virtual/SystemSettingUIMain.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SystemSettingConfig.ts", "./AngelSysEvent.ts", "./ActivityAPI.ts", "./global.ts", "./SysEventDes.ts", "./PTB_0x032820_Query_C2S.ts", "./PTB_0x032820_Query_S2C.ts", "./AgentNode.ts", "./CGI.ts", "./ActGCManager.ts", "./NetResult.ts", "./ActivityCommonLogicUIBase.ts", "./ResManager.ts", "./CtlActCoolDown.ts", "./LocalStorageManager.ts"], (function(t) {
        var e, n, s, o, i, a, l, _, h, d, r, c, g, C, u, B, m, f, N, y, S, b, v;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass,
                    s = t.assertThisInitialized
            }
                , function(t) {
                    o = t.cclegacy,
                        i = t.EditBox,
                        a = t.NodeEventType,
                        l = t.isValid
                }
                , function(t) {
                    _ = t.SystemSettingConfig
                }
                , function(t) {
                    h = t.AngelSysEvent
                }
                , function(t) {
                    d = t.ActivityAPI
                }
                , function(t) {
                    r = t.__global
                }
                , function(t) {
                    c = t.SysEventDes
                }
                , function(t) {
                    g = t.PTB_0x032820_Query_C2S
                }
                , function(t) {
                    C = t.PTB_0x032820_Query_S2C
                }
                , function(t) {
                    u = t.AgentNodeComponent,
                        B = t.AgentNode
                }
                , function(t) {
                    m = t.CGI
                }
                , function(t) {
                    f = t.ActGCManager
                }
                , function(t) {
                    N = t.NetResult
                }
                , function(t) {
                    y = t.ActivityCommonLogicUIBase
                }
                , function(t) {
                    S = t.default
                }
                , function(t) {
                    b = t.CtlActCoolDown
                }
                , function(t) {
                    v = t.LocalStorageManager
                }
            ],
            execute: function() {
                o._RF.push({}, "6ab390a3GpEYrRzto8ngL0O", "SystemSettingUIMain", void 0),
                    t("SystemSettingUIMain", function(t) {
                        function o(e) {
                            var n;
                            return (n = t.call(this, e) || this).m_res1 = void 0,
                                n.m_flags = {
                                    voice: !0,
                                    talk: !1,
                                    role: !0,
                                    invite: !0
                                },
                                n.m_flags1 = {
                                    spmode: 0,
                                    effmode: 0,
                                    msgmode: 0
                                },
                                n.m_flags2 = {
                                    spbook: 0,
                                    tower: 0,
                                    hileader: 0,
                                    department: 0,
                                    birth: 0
                                },
                                n.m_flags3 = {
                                    safecode: !0,
                                    start: 0,
                                    countdown: 0
                                },
                                n.m_ctlCD = void 0,
                                n.changeFlg = !1,
                                n.cchangeFlg = !1,
                                n.needQuery = !1,
                                n.needRefreshUI = !1,
                                n.curPage = 0,
                                n.m_args = void 0,
                                n.angelSysEvent = void 0,
                                n.sysEventDes = void 0,
                                n.m_res1 = new T,
                                n.m_res1.ctlFull.btnClose.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.btnLinkTreaty.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.btnLinkPrivacy.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.btnLinkChild.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.btnLinkAttation.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.btnGotoPage_1.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.btnGotoPage_2.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.btnGotoPage_3.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.btnGotoPage_4.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.btnGotoPage_5.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.btnSelector.btnGotoPage_5.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node1.soundBTN.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node1.muteBTN.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node1.popSet.shieldBTN.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node1.popSet.unshieldBTN.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node1.caninviteBTN0.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node1.caninviteBTN1.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node1.showRoleBTN.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node1.hideRoleBTN.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node2.msgModeBTN0.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node2.msgModeBTN1.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node2.spModeBTN0.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node2.spModeBTN1.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node2.spModeBTN2.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node2.efModeBTN0.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node2.efModeBTN1.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node2.efModeBTN2.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node3.privacyBTN0.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node3.privacyBTN1.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node3.privacyBTN2.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node3.privacyBTN3.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node3.privacyBTN4.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node3.privacyBTN5.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node3.privacyBTN6.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node3.privacyBTN7.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node3.privacyBTN8.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node3.privacyBTN9.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node4.useCodeBTN.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node4.unCodeBTN.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node4.btnReset.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node4.btnOut.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node4.safeCodeContent.node2.stateBtn.btnCancelCode.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node4.safeCodeContent.node2.stateBtn.btnForceClose.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node5.btnGotoPage_6.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node5.btnGotoPage_7.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node5.btnGotoPage_8.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlFull.node5.btnGotoPage_9.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlAttation.btnUp.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlAttation.btnDown.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlAttation.btnClose.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlSafeCode.node1.btnSureSet.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlSafeCode.node2.btnCloseSetCode.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlSafeCode.node3.btnSureNoCode.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlSafeCode.node3.btnForget.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlSafeCode.node4.btnSureCheck.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlSafeCode.node5.btnCloseSetCode.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlSafeCode.node6.btnSureChange.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlSafeCode.node8.btnCloseSetCode.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlSafeCode.btnCloseSetCode.on(a.TOUCH_END, n.onResClick, s(n)),
                                n.m_res1.ctlSafeCode.node1.txtSafeCode.on(i.EventType.TEXT_CHANGED, n.onEditBoxChanged, s(n)),
                                n.m_res1.ctlSafeCode.node1.txtCheckSafeCode.on(i.EventType.TEXT_CHANGED, n.onEditBoxChanged, s(n)),
                                n.m_res1.ctlSafeCode.node3.txtCloseCheckSafeCode.on(i.EventType.TEXT_CHANGED, n.onEditBoxChanged, s(n)),
                                n.m_res1.ctlSafeCode.node6.txtOldSafeCode.on(i.EventType.TEXT_CHANGED, n.onEditBoxChanged, s(n)),
                                n.m_res1.ctlSafeCode.node6.txtNewSafeCode.on(i.EventType.TEXT_CHANGED, n.onEditBoxChanged, s(n)),
                                n.m_res1.ctlSafeCode.node6.txtCheckNewSafeCode.on(i.EventType.TEXT_CHANGED, n.onEditBoxChanged, s(n)),
                                n.m_res1.ctlSafeCode.node7.txtCloseCheckSafeCode.on(i.EventType.TEXT_CHANGED, n.onEditBoxChanged, s(n)),
                                n.setMainUI(n.m_res1.target),
                                n.m_res1.ctlAttation.visible = !1,
                                n.m_ctlCD = new b(n.m_res1.ctlFull.cdMsg,n.query.bind(s(n)),s(n)),
                                n.m_ctlCD.time = 0,
                                n.m_ctlCD.visible = !1,
                                n.m_res1.ctlSafeCode.visible = !1,
                                r.SysAPI.getMediaSysAPI().getMute() ? n.m_flags.voice = !1 : n.m_flags.voice = !0,
                                n.updateBtn(),
                                n
                        }
                        e(o, t);
                        var l = o.prototype;
                        return l.onEditBoxChanged = function(t) {
                            if (t instanceof i) {
                                var e = t.string.replace(/\D/g, "");
                                t.string = e,
                                    t.blur(),
                                    t.focus()
                            }
                        }
                            ,
                            l.query = function() {
                                this.send(this.CONFIG.CMD_QUERY)
                            }
                            ,
                            l.updateBtn = function() {
                                if (this.m_ctlCD.visible = !1,
                                    this.m_res1.ctlFull.gotoAndStop(this.curPage + 1),
                                    this.m_res1.ctlFull.btnSelector.gotoAndStop(this.curPage + 1),
                                this.curPage < 5)
                                    for (var t = 0; t < 5; t++)
                                        t == this.curPage ? this.m_res1.ctlFull["gotoPageBtn" + t].gotoAndStop(2) : this.m_res1.ctlFull["gotoPageBtn" + t].gotoAndStop(1);
                                if (0 == this.curPage)
                                    this.m_flags.role ? (this.m_res1.ctlFull.node1.stateBtn2_1.gotoAndStop(2),
                                        this.m_res1.ctlFull.node1.stateBtn2_0.gotoAndStop(1),
                                        this.m_res1.ctlFull.node1.popSet.visible = !0,
                                        this.m_flags.talk ? (this.m_res1.ctlFull.node1.popSet.stateBtn1_1.gotoAndStop(2),
                                            this.m_res1.ctlFull.node1.popSet.stateBtn1_0.gotoAndStop(1)) : (this.m_res1.ctlFull.node1.popSet.stateBtn1_1.gotoAndStop(1),
                                            this.m_res1.ctlFull.node1.popSet.stateBtn1_0.gotoAndStop(2))) : (this.m_res1.ctlFull.node1.stateBtn2_1.gotoAndStop(1),
                                        this.m_res1.ctlFull.node1.stateBtn2_0.gotoAndStop(2),
                                        this.m_res1.ctlFull.node1.popSet.visible = !1,
                                        this.m_res1.ctlFull.node1.popSet.stateBtn1_1.gotoAndStop(1),
                                        this.m_res1.ctlFull.node1.popSet.stateBtn1_0.gotoAndStop(2)),
                                        this.m_flags.voice ? (this.m_res1.ctlFull.node1.stateBtn0_1.gotoAndStop(2),
                                            this.m_res1.ctlFull.node1.stateBtn0_0.gotoAndStop(1)) : (this.m_res1.ctlFull.node1.stateBtn0_1.gotoAndStop(1),
                                            this.m_res1.ctlFull.node1.stateBtn0_0.gotoAndStop(2)),
                                        this.m_flags.invite ? (this.m_res1.ctlFull.node1.stateBtn3_1.gotoAndStop(2),
                                            this.m_res1.ctlFull.node1.stateBtn3_0.gotoAndStop(1)) : (this.m_res1.ctlFull.node1.stateBtn3_1.gotoAndStop(1),
                                            this.m_res1.ctlFull.node1.stateBtn3_0.gotoAndStop(2));
                                else if (1 == this.curPage) {
                                    v.Instance.getItem(o.SPMODE_KEY_STATIC, !1) ? (this.m_res1.ctlFull.node2.stateBtn0_1.gotoAndStop(1),
                                        this.m_res1.ctlFull.node2.stateBtn0_0.gotoAndStop(1),
                                        this.m_res1.ctlFull.node2.stateBtn0_2.gotoAndStop(2)) : 0 == this.m_flags1.spmode ? (this.m_res1.ctlFull.node2.stateBtn0_1.gotoAndStop(1),
                                        this.m_res1.ctlFull.node2.stateBtn0_0.gotoAndStop(2),
                                        this.m_res1.ctlFull.node2.stateBtn0_2.gotoAndStop(1)) : (this.m_res1.ctlFull.node2.stateBtn0_1.gotoAndStop(2),
                                        this.m_res1.ctlFull.node2.stateBtn0_0.gotoAndStop(1),
                                        this.m_res1.ctlFull.node2.stateBtn0_2.gotoAndStop(1)),
                                        0 == this.m_flags1.effmode ? (this.m_res1.ctlFull.node2.stateBtn1_1.gotoAndStop(1),
                                            this.m_res1.ctlFull.node2.stateBtn1_0.gotoAndStop(2),
                                            this.m_res1.ctlFull.node2.stateBtn1_2.gotoAndStop(1)) : 1 == this.m_flags1.effmode ? (this.m_res1.ctlFull.node2.stateBtn1_1.gotoAndStop(2),
                                            this.m_res1.ctlFull.node2.stateBtn1_0.gotoAndStop(1),
                                            this.m_res1.ctlFull.node2.stateBtn1_2.gotoAndStop(1)) : (this.m_res1.ctlFull.node2.stateBtn1_1.gotoAndStop(1),
                                            this.m_res1.ctlFull.node2.stateBtn1_0.gotoAndStop(1),
                                            this.m_res1.ctlFull.node2.stateBtn1_2.gotoAndStop(2)),
                                        0 == this.m_flags1.msgmode ? (this.m_res1.ctlFull.node2.stateBtn2_1.gotoAndStop(1),
                                            this.m_res1.ctlFull.node2.stateBtn2_0.gotoAndStop(2)) : (this.m_res1.ctlFull.node2.stateBtn2_1.gotoAndStop(2),
                                            this.m_res1.ctlFull.node2.stateBtn2_0.gotoAndStop(1))
                                } else
                                    2 == this.curPage ? (0 == this.m_flags2.birth ? (this.m_res1.ctlFull.node3.stateBtn4_1.gotoAndStop(1),
                                        this.m_res1.ctlFull.node3.stateBtn4_0.gotoAndStop(2)) : (this.m_res1.ctlFull.node3.stateBtn4_1.gotoAndStop(2),
                                        this.m_res1.ctlFull.node3.stateBtn4_0.gotoAndStop(1)),
                                        0 == this.m_flags2.spbook ? (this.m_res1.ctlFull.node3.stateBtn0_1.gotoAndStop(1),
                                            this.m_res1.ctlFull.node3.stateBtn0_0.gotoAndStop(2)) : (this.m_res1.ctlFull.node3.stateBtn0_1.gotoAndStop(2),
                                            this.m_res1.ctlFull.node3.stateBtn0_0.gotoAndStop(1)),
                                        0 == this.m_flags2.tower ? (this.m_res1.ctlFull.node3.stateBtn1_1.gotoAndStop(1),
                                            this.m_res1.ctlFull.node3.stateBtn1_0.gotoAndStop(2)) : (this.m_res1.ctlFull.node3.stateBtn1_1.gotoAndStop(2),
                                            this.m_res1.ctlFull.node3.stateBtn1_0.gotoAndStop(1)),
                                        0 == this.m_flags2.hileader ? (this.m_res1.ctlFull.node3.stateBtn2_1.gotoAndStop(1),
                                            this.m_res1.ctlFull.node3.stateBtn2_0.gotoAndStop(2)) : (this.m_res1.ctlFull.node3.stateBtn2_1.gotoAndStop(2),
                                            this.m_res1.ctlFull.node3.stateBtn2_0.gotoAndStop(1)),
                                        0 == this.m_flags2.department ? (this.m_res1.ctlFull.node3.stateBtn3_1.gotoAndStop(1),
                                            this.m_res1.ctlFull.node3.stateBtn3_0.gotoAndStop(2)) : (this.m_res1.ctlFull.node3.stateBtn3_1.gotoAndStop(2),
                                            this.m_res1.ctlFull.node3.stateBtn3_0.gotoAndStop(1))) : 3 == this.curPage && (this.m_flags3.safecode ? (this.m_res1.ctlFull.node4.setCodeBtn0.gotoAndStop(2),
                                        this.m_res1.ctlFull.node4.btnReset.visible = !0,
                                        this.m_res1.ctlFull.node4.setCodeBtn1.gotoAndStop(1)) : (this.m_res1.ctlFull.node4.setCodeBtn0.gotoAndStop(1),
                                        this.m_res1.ctlFull.node4.btnReset.visible = !1,
                                        this.m_res1.ctlFull.node4.setCodeBtn1.gotoAndStop(2)),
                                        this.m_res1.ctlFull.node4.safeCodeContent.gotoAndStop(Number(this.m_flags3.start) + 1),
                                        0 == Number(this.m_flags3.start) ? this.m_ctlCD.visible = !1 : 0 == Number(this.m_flags3.countdown) ? (this.m_ctlCD.visible = !1,
                                            this.m_res1.ctlFull.node4.safeCodeContent.node2.countdownTitle.visible = !1,
                                            this.m_res1.ctlFull.node4.safeCodeContent.node2.stateBtn.gotoAndStop(2)) : (this.m_ctlCD.visible = !0,
                                            this.m_res1.ctlFull.node4.safeCodeContent.node2.countdownTitle.visible = !0,
                                            this.m_res1.ctlFull.node4.safeCodeContent.node2.stateBtn.gotoAndStop(1)))
                            }
                            ,
                            l.dispose = function() {
                                f.dispose(this),
                                    this.unsetMainUI(),
                                    t.prototype.dispose.call(this)
                            }
                            ,
                            l.updateInfo = function(t) {
                                void 0 === t && (t = null),
                                    this.m_args = t,
                                    this.isOpenFromTimePaper = "newsOpen" == t,
                                    this.changeFlg = !1,
                                    this.needQuery = !0;
                                var e = new g;
                                e.uitype = 0,
                                    this.needRefreshUI = !0,
                                    this.send(206880, e, null, C, !0, !0)
                            }
                            ,
                            l.onResClick = function(t) {
                                t.target;
                                var e = t.target.name;
                                switch (e) {
                                    case "btnClose":
                                        if (this.m_res1.ctlAttation.visible)
                                            this.m_res1.ctlAttation.visible = !1;
                                        else {
                                            if (this.changeFlg && this.changeBtnByValue((this.m_flags.invite ? "1" : "0") + (this.m_flags.voice ? "0" : "1") + (this.m_flags.talk ? "1" : "0") + (this.m_flags.role ? "0" : "1")),
                                                this.cchangeFlg) {
                                                var n = this.m_flags2.birth + "" + this.m_flags2.department + this.m_flags2.hileader + this.m_flags2.tower + this.m_flags2.spbook;
                                                this.send(_.CMD_UPREPORT, "&type=" + this.m_flags1.spmode + "&type1=" + this.m_flags1.effmode + "&type2=" + parseInt(n, 2) + "&type3=" + this.m_flags1.msgmode, null, null, !0, !0)
                                            }
                                            this.close()
                                        }
                                        break;
                                    case "btnLinkAttation":
                                        this.m_res1.ctlAttation.visible = !0,
                                            this.m_res1.ctlAttation.gotoAndStop(1),
                                            this.m_res1.ctlAttation.btnUp.visible = !1,
                                            this.m_res1.ctlAttation.btnDown.visible = !0;
                                        break;
                                    case "btnUp":
                                        this.m_res1.ctlAttation.gotoAndStop(1),
                                            this.m_res1.ctlAttation.btnUp.visible = !1,
                                            this.m_res1.ctlAttation.btnDown.visible = !0;
                                        break;
                                    case "btnDown":
                                        this.m_res1.ctlAttation.gotoAndStop(2),
                                            this.m_res1.ctlAttation.btnUp.visible = !0,
                                            this.m_res1.ctlAttation.btnDown.visible = !1;
                                        break;
                                    case "btnDownland":
                                        d.navigateToURL(_.ActLink1),
                                            m.call("machine_speed_combat?cmd=0" + d.getSkeyStr() + d.getPlatfromStr(), d.delegateFunc(this.onDataReceived.bind(this), null), 0);
                                        break;
                                    case "btnShow":
                                        d.navigateToURL(_.ActLink);
                                        break;
                                    case "btnOut":
                                    case "btnQuery":
                                        break;
                                    case "muteBTN":
                                        this.m_flags.voice && (this.m_flags.voice = !1,
                                            r.SysAPI.getMediaSysAPI().setMute(!0),
                                            this.updateBtn());
                                        break;
                                    case "soundBTN":
                                        this.m_flags.voice || (this.m_flags.voice = !0,
                                            r.SysAPI.getMediaSysAPI().setMute(!1),
                                            this.updateBtn());
                                        break;
                                    case "shieldBTN":
                                        this.m_flags.talk || (this.changeFlg = !0,
                                            this.m_flags.talk = !0,
                                        this.m_flags.role || (this.m_flags.role = !0,
                                            this.angelSysEvent = new h(h.ON_SYS_EVENT),
                                            this.sysEventDes = new c,
                                            this.sysEventDes.type = c.ROLE_SET_VISIBLE,
                                            this.sysEventDes.data = !0,
                                            this.angelSysEvent.data = this.sysEventDes,
                                            r.GEventAPI.angelEventDispatcher.dispatchEvent(this.angelSysEvent)),
                                            r.SysAPI.getWorldAPI().getRoleSysAPI().unshieldAction(8),
                                            this.updateBtn());
                                        break;
                                    case "unshieldBTN":
                                        this.m_flags.talk && (this.changeFlg = !0,
                                            this.m_flags.talk = !1,
                                            r.SysAPI.getWorldAPI().getRoleSysAPI().shieldAction(8),
                                            this.updateBtn());
                                        break;
                                    case "showRoleBTN":
                                        this.m_flags.role || (this.changeFlg = !0,
                                            this.m_flags.role = !0,
                                            this.angelSysEvent = new h(h.ON_SYS_EVENT),
                                            this.sysEventDes = new c,
                                            this.sysEventDes.type = c.ROLE_SET_VISIBLE,
                                            this.sysEventDes.data = !0,
                                            this.angelSysEvent.data = this.sysEventDes,
                                            r.GEventAPI.angelEventDispatcher.dispatchEvent(this.angelSysEvent),
                                        this.m_flags.talk || (this.m_flags.talk = !0,
                                            r.SysAPI.getWorldAPI().getRoleSysAPI().unshieldAction(8)),
                                            this.updateBtn());
                                        break;
                                    case "hideRoleBTN":
                                        this.m_flags.role && (this.changeFlg = !0,
                                            this.m_flags.role = !1,
                                            this.angelSysEvent = new h(h.ON_SYS_EVENT),
                                            this.sysEventDes = new c,
                                            this.sysEventDes.type = c.ROLE_SET_VISIBLE,
                                            this.sysEventDes.data = !1,
                                            this.angelSysEvent.data = this.sysEventDes,
                                            r.GEventAPI.angelEventDispatcher.dispatchEvent(this.angelSysEvent),
                                        this.m_flags.talk && (this.m_flags.talk = !1,
                                            r.SysAPI.getWorldAPI().getRoleSysAPI().shieldAction(8)),
                                            this.updateBtn());
                                        break;
                                    case "useCodeBTN":
                                        this.m_res1.ctlSafeCode.gotoAndStop(1),
                                            this.m_res1.ctlSafeCode.visible = !0,
                                            this.m_res1.ctlSafeCode.node1.txtSafeCode.text = "",
                                            this.m_res1.ctlSafeCode.node1.txtCheckSafeCode.text = "";
                                        break;
                                    case "btnSureSet":
                                        "" == this.m_res1.ctlSafeCode.node1.txtSafeCode.text ? d.showAlert("请输入安全码~") : 6 != String(this.m_res1.ctlSafeCode.node1.txtSafeCode.text).length ? d.showAlert("请输入6位安全码~") : this.m_res1.ctlSafeCode.node1.txtCheckSafeCode.text == this.m_res1.ctlSafeCode.node1.txtSafeCode.text ? this.send(_.CMD_SETCODE, "&index=" + this.m_res1.ctlSafeCode.node1.txtSafeCode.text, null, null, !0, !0) : (d.showAlert("两次输入安全码不一致，请重新输入~"),
                                            this.m_res1.ctlSafeCode.node1.txtCheckSafeCode.text = "");
                                        break;
                                    case "unCodeBTN":
                                        this.m_res1.ctlSafeCode.gotoAndStop(3),
                                            this.m_res1.ctlSafeCode.visible = !0,
                                            this.m_res1.ctlSafeCode.node3.txtCloseCheckSafeCode.text = "";
                                        break;
                                    case "btnSureNoCode":
                                        "" == this.m_res1.ctlSafeCode.node3.txtCloseCheckSafeCode.text ? d.showAlert("请输入安全码~") : 6 != String(this.m_res1.ctlSafeCode.node3.txtCloseCheckSafeCode.text).length ? d.showAlert("请输入6位安全码~") : this.send(_.CMD_NOCODE, "&index=" + this.m_res1.ctlSafeCode.node3.txtCloseCheckSafeCode.text, null, null, !0, !0);
                                        break;
                                    case "btnForget":
                                        this.m_res1.ctlSafeCode.gotoAndStop(4),
                                            this.m_res1.ctlSafeCode.visible = !0,
                                            this.m_res1.ctlSafeCode.node4.txtIDCard.text = "",
                                            this.m_res1.ctlSafeCode.node4.txtName.text = "";
                                        break;
                                    case "btnSureCheck":
                                        "" == this.m_res1.ctlSafeCode.node4.txtIDCard.text ? d.showAlert("请输入18位身份证号~") : "" == this.m_res1.ctlSafeCode.node4.txtName.text ? d.showAlert("请输入姓名~") : this.send(_.FORGETCODE, "&cid=" + this.m_res1.ctlSafeCode.node4.txtIDCard.text + "&name =" + this.m_res1.ctlSafeCode.node4.txtName.text, null, null, !0, !0);
                                        break;
                                    case "btnSureApply":
                                        this.m_res1.ctlSafeCode.visible = !1;
                                        break;
                                    case "btnForceClose":
                                        this.send(_.CMD_FORCECLOSE, null, null, null, !0, !0);
                                        break;
                                    case "btnReset":
                                        this.m_res1.ctlSafeCode.gotoAndStop(6),
                                            this.m_res1.ctlSafeCode.visible = !0,
                                            this.m_res1.ctlSafeCode.node6.txtOldSafeCode.text = "",
                                            this.m_res1.ctlSafeCode.node6.txtNewSafeCode.text = "",
                                            this.m_res1.ctlSafeCode.node6.txtCheckNewSafeCode.text = "";
                                        break;
                                    case "btnSureChange":
                                        "" == this.m_res1.ctlSafeCode.node6.txtOldSafeCode.text ? d.showAlert("请输入旧密码~") : "" == this.m_res1.ctlSafeCode.node6.txtNewSafeCode.text ? d.showAlert("请输入新密码~") : 6 != String(this.m_res1.ctlSafeCode.node6.txtNewSafeCode.text).length || 6 != String(this.m_res1.ctlSafeCode.node6.txtOldSafeCode.text).length ? d.showAlert("请输入6位安全码~") : this.m_res1.ctlSafeCode.node6.txtNewSafeCode.text == this.m_res1.ctlSafeCode.node6.txtCheckNewSafeCode.text ? this.send(_.CMD_CHANGECODE, "&indexOld=" + this.m_res1.ctlSafeCode.node6.txtOldSafeCode.text + "&index=" + this.m_res1.ctlSafeCode.node6.txtNewSafeCode.text, null, null, !0, !0) : d.showAlert("新安全码输入不一致，请重新输入~");
                                        break;
                                    case "btnCancelCode":
                                        this.send(_.CMD_CANCELNOCODE, null, null, null, !0, !0);
                                        break;
                                    case "btnCloseSetCode":
                                        this.m_res1.ctlSafeCode.visible = !1;
                                        break;
                                    case "btnLinkTreaty":
                                        d.navigateToURL("http://game.qq.com/contract.shtml");
                                        break;
                                    case "btnLinkPrivacy":
                                        d.navigateToURL("http://game.qq.com/privacy_guide.shtml");
                                        break;
                                    case "btnLinkChild":
                                        d.navigateToURL("https://game.qq.com/privacy_guide_children.shtml");
                                        break;
                                    case "spModeBTN":
                                        2 == (s = Number(t.target.parent.name.split("_")[1])) ? v.Instance.setItem(o.SPMODE_KEY_STATIC, !0) : (this.m_flags1.spmode != s && (this.cchangeFlg = !0,
                                            this.m_flags1.spmode = s),
                                            v.Instance.setItem(o.SPMODE_KEY_STATIC, !1)),
                                            this.updateBtn();
                                        break;
                                    case "efModeBTN":
                                        var s = Number(t.target.parent.name.split("_")[1]);
                                        this.m_flags1.effmode != s && (this.cchangeFlg = !0,
                                            this.m_flags1.effmode = s),
                                            this.updateBtn();
                                        break;
                                    case "msgModeBTN":
                                        s = Number(t.target.parent.name.split("_")[1]);
                                        this.m_flags1.msgmode != s && (this.cchangeFlg = !0,
                                            this.m_flags1.msgmode = s),
                                            this.updateBtn();
                                        break;
                                    case "caninviteBTN":
                                        1 == (s = Number(t.target.parent.name.split("_")[1])) ? this.m_flags.invite || (this.changeFlg = !0,
                                            this.m_flags.invite = !0) : this.m_flags.invite && (this.changeFlg = !0,
                                            this.m_flags.invite = !1),
                                            this.updateBtn();
                                        break;
                                    case "privacyBTN":
                                        s = Number(t.target.parent.name.split("_")[0].split("stateBtn")[1]);
                                        var i = Number(t.target.parent.name.split("_")[1]);
                                        0 == s ? this.m_flags2.spbook != i && (this.cchangeFlg = !0,
                                            this.m_flags2.spbook = i) : 1 == s ? this.m_flags2.tower != i && (this.cchangeFlg = !0,
                                            this.m_flags2.tower = i) : 2 == s ? this.m_flags2.hileader != i && (this.cchangeFlg = !0,
                                            this.m_flags2.hileader = i) : 3 == s ? this.m_flags2.department != i && (this.cchangeFlg = !0,
                                            this.m_flags2.department = i) : 4 == s && this.m_flags2.birth != i && (this.cchangeFlg = !0,
                                            this.m_flags2.birth = i),
                                            this.updateBtn();
                                        break;
                                    default:
                                        var a, l = e.split("_");
                                        if (2 == l.length)
                                            switch (a = parseInt(l[1]),
                                                l[0]) {
                                                case "btnGoto":
                                                    this.m_app && this.m_app.close(),
                                                        d.enterScene(a);
                                                    break;
                                                case "btnGotoPage":
                                                    this.curPage = a - 1,
                                                        this.updateBtn()
                                            }
                                }
                            }
                            ,
                            l.changeBtnByValue = function(t) {
                                var e = new g;
                                e.uitype = 1,
                                    e.uivalue = parseInt(t, 2),
                                    this.needRefreshUI = !1,
                                    this.send(206880, e, null, C, !0, !0)
                            }
                            ,
                            l.onDataReceived = function(e, n, s) {
                                void 0 === s && (s = null),
                                    t.prototype.onDataReceived.call(this, e, n, s),
                                this.m_res1 && (this.m_res1.visible = !0);
                                var o = e;
                                if (new N(e).value >= 0 && this.m_res1)
                                    switch (n) {
                                        case _.CMD_QUERY:
                                            this.m_flags3.safecode = 1 == Number(o.open),
                                                this.m_flags3.start = Number(o.start),
                                                this.m_flags3.countdown = Number(o.countdown),
                                                this.m_flags1.spmode = Number(o.type[0]),
                                                this.m_flags1.effmode = Number(o.type[1]),
                                                this.m_flags1.msgmode = Number(o.type[2]),
                                                this.m_flags2.birth = Number(o.state[4]),
                                                this.m_flags2.spbook = Number(o.state[0]),
                                                this.m_flags2.tower = Number(o.state[1]),
                                                this.m_flags2.hileader = Number(o.state[2]),
                                                this.m_flags2.department = Number(o.state[3]),
                                                0 == Number(this.m_flags3.start) || 0 == Number(this.m_flags3.countdown) ? this.m_ctlCD.time = 0 : this.m_ctlCD.time = Number(o.countdown),
                                                this.m_ctlCD.visible = !1,
                                                this.updateBtn();
                                            break;
                                        case 206880:
                                            var i = e;
                                            0 == i.buttonChose[1] ? this.m_flags.talk = !1 : 1 == i.buttonChose[1] && (this.m_flags.talk = !0),
                                                0 == i.buttonChose[2] ? this.m_flags.role = !0 : 1 == i.buttonChose[2] && (this.m_flags.role = !1),
                                                1 == i.buttonChose[3] ? this.m_flags.invite = !0 : this.m_flags.invite = !1,
                                            this.needRefreshUI && this.updateBtn(),
                                            this.needQuery && (this.needQuery = !1,
                                                this.send(_.CMD_QUERY, null, null, null, !0, !0));
                                            break;
                                        case _.CMD_SETCODE:
                                            d.setGlobalValue("3101", "NeedCheckSafeCode"),
                                                this.m_res1.ctlSafeCode.gotoAndStop(2),
                                                this.m_res1.ctlSafeCode.visible = !0,
                                                this.send(_.CMD_QUERY, null, null, null, !0, !0);
                                            break;
                                        case _.CMD_NOCODE:
                                            d.setGlobalValue("3101", "NeedCheckSafeCode"),
                                                this.m_res1.ctlSafeCode.gotoAndStop(8),
                                                this.m_res1.ctlSafeCode.node8.txtMsg.text = "安全码保护已关闭",
                                                this.send(_.CMD_QUERY, null, null, null, !0, !0);
                                            break;
                                        case _.FORGETCODE:
                                            this.m_res1.ctlSafeCode.gotoAndStop(5),
                                                this.m_res1.ctlSafeCode.visible = !0,
                                                this.send(_.CMD_QUERY, null, null, null, !0, !0);
                                            break;
                                        case _.CMD_CHANGECODE:
                                            d.setGlobalValue("3101", "NeedCheckSafeCode"),
                                                this.m_res1.ctlSafeCode.gotoAndStop(8),
                                                this.m_res1.ctlSafeCode.node8.txtMsg.text = "修改密码成功",
                                                this.send(_.CMD_QUERY, null, null, null, !0, !0);
                                            break;
                                        case _.CMD_CANCELNOCODE:
                                            this.m_res1.ctlSafeCode.gotoAndStop(8),
                                                this.m_res1.ctlSafeCode.node8.txtMsg.text = "撤销成功",
                                                this.send(_.CMD_QUERY, null, null, null, !0, !0);
                                            break;
                                        case _.CMD_FORCECLOSE:
                                            d.setGlobalValue("3101", "NeedCheckSafeCode"),
                                                this.m_res1.ctlSafeCode.gotoAndStop(8),
                                                this.m_res1.ctlSafeCode.node8.txtMsg.text = "安全码保护已强制关闭",
                                                this.send(_.CMD_QUERY, null, null, null, !0, !0);
                                            break;
                                        case _.CMD_GETGIFT:
                                            d.showCgiXmlRewardList(o)
                                    }
                            }
                            ,
                            n(o, [{
                                key: "CONFIG",
                                get: function() {
                                    return _
                                }
                            }]),
                            o
                    }(y)).SPMODE_KEY_STATIC = "spmode_key_static";
                var p = function(t) {
                    function s() {
                        for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                            s[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._btnClose = void 0,
                            e._btnUp = void 0,
                            e._btnDown = void 0,
                            e
                    }
                    return e(s, t),
                        n(s, [{
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new B(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "btnUp",
                            get: function() {
                                return this._btnUp || (this._btnUp = new B(this.getChildByName("btnUp"))),
                                    this._btnUp
                            }
                        }, {
                            key: "btnDown",
                            get: function() {
                                return this._btnDown || (this._btnDown = new B(this.getChildByName("btnDown"))),
                                    this._btnDown
                            }
                        }]),
                        s
                }(B)
                    , T = function(t) {
                    function o() {
                        var e;
                        return (e = t.call(this) || this)._ctlAttation = void 0,
                            e._ctlFull = void 0,
                            e._ctlSafeCode = void 0,
                            e._target = S.Instance.getPrefabByName("systemSetting/UIResMain_1600"),
                        e._target && l(e._target) && null == e._target.getComponent(u) && (e._target.addComponent(u).target = s(e)),
                            e
                    }
                    return e(o, t),
                        n(o, [{
                            key: "ctlAttation",
                            get: function() {
                                return this._ctlAttation || (this._ctlAttation = new p(this.getChildByName("ctlAttation"))),
                                    this._ctlAttation
                            }
                        }, {
                            key: "ctlFull",
                            get: function() {
                                return this._ctlFull || (this._ctlFull = new A(this.getChildByName("ctlFull"))),
                                    this._ctlFull
                            }
                        }, {
                            key: "ctlSafeCode",
                            get: function() {
                                return this._ctlSafeCode || (this._ctlSafeCode = new q(this.getChildByName("ctlSafeCode"))),
                                    this._ctlSafeCode
                            }
                        }]),
                        o
                }(B)
                    , k = function(t) {
                    function s() {
                        for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                            s[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._stateBtn1_1 = void 0,
                            e._stateBtn1_0 = void 0,
                            e._shieldBTN = void 0,
                            e._unshieldBTN = void 0,
                            e
                    }
                    return e(s, t),
                        n(s, [{
                            key: "stateBtn1_1",
                            get: function() {
                                return this._stateBtn1_1 || (this._stateBtn1_1 = new B(this.getChildByName("stateBtn1_1"))),
                                    this._stateBtn1_1
                            }
                        }, {
                            key: "stateBtn1_0",
                            get: function() {
                                return this._stateBtn1_0 || (this._stateBtn1_0 = new B(this.getChildByName("stateBtn1_0"))),
                                    this._stateBtn1_0
                            }
                        }, {
                            key: "shieldBTN",
                            get: function() {
                                return this._shieldBTN || (this._shieldBTN = new B(this.getChildByName("shieldBTN"))),
                                    this._shieldBTN
                            }
                        }, {
                            key: "unshieldBTN",
                            get: function() {
                                return this._unshieldBTN || (this._unshieldBTN = new B(this.getChildByName("unshieldBTN"))),
                                    this._unshieldBTN
                            }
                        }]),
                        s
                }(B)
                    , w = function(t) {
                    function s() {
                        for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                            s[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._btnGotoPage_5 = void 0,
                            e
                    }
                    return e(s, t),
                        n(s, [{
                            key: "btnGotoPage_5",
                            get: function() {
                                return this._btnGotoPage_5 || (this._btnGotoPage_5 = new B(this.getChildByName("btnGotoPage_5"))),
                                    this._btnGotoPage_5
                            }
                        }]),
                        s
                }(B)
                    , A = function(t) {
                    function s() {
                        for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                            s[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._btnSelector = void 0,
                            e._btnClose = void 0,
                            e._btnLinkTreaty = void 0,
                            e._btnLinkPrivacy = void 0,
                            e._btnLinkChild = void 0,
                            e._btnLinkAttation = void 0,
                            e._btnGotoPage_1 = void 0,
                            e._btnGotoPage_2 = void 0,
                            e._btnGotoPage_3 = void 0,
                            e._btnGotoPage_4 = void 0,
                            e._btnGotoPage_5 = void 0,
                            e._cdMsg = void 0,
                            e._gotoPageBtn0 = void 0,
                            e._gotoPageBtn1 = void 0,
                            e._gotoPageBtn2 = void 0,
                            e._gotoPageBtn3 = void 0,
                            e._gotoPageBtn4 = void 0,
                            e._gotoPageBtn5 = void 0,
                            e._node1 = void 0,
                            e._node2 = void 0,
                            e._node3 = void 0,
                            e._node4 = void 0,
                            e._node5 = void 0,
                            e
                    }
                    return e(s, t),
                        n(s, [{
                            key: "btnSelector",
                            get: function() {
                                return this._btnSelector || (this._btnSelector = new w(this.getChildByName("btnSelector"))),
                                    this._btnSelector
                            }
                        }, {
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new B(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "btnLinkTreaty",
                            get: function() {
                                return this._btnLinkTreaty || (this._btnLinkTreaty = new B(this.getChildByName("btnLinkTreaty"))),
                                    this._btnLinkTreaty
                            }
                        }, {
                            key: "btnLinkPrivacy",
                            get: function() {
                                return this._btnLinkPrivacy || (this._btnLinkPrivacy = new B(this.getChildByName("btnLinkPrivacy"))),
                                    this._btnLinkPrivacy
                            }
                        }, {
                            key: "btnLinkChild",
                            get: function() {
                                return this._btnLinkChild || (this._btnLinkChild = new B(this.getChildByName("btnLinkChild"))),
                                    this._btnLinkChild
                            }
                        }, {
                            key: "btnLinkAttation",
                            get: function() {
                                return this._btnLinkAttation || (this._btnLinkAttation = new B(this.getChildByName("btnLinkAttation"))),
                                    this._btnLinkAttation
                            }
                        }, {
                            key: "btnGotoPage_1",
                            get: function() {
                                return this._btnGotoPage_1 || (this._btnGotoPage_1 = new B(this.getChildByName("btnGotoPage_1"))),
                                    this._btnGotoPage_1
                            }
                        }, {
                            key: "btnGotoPage_2",
                            get: function() {
                                return this._btnGotoPage_2 || (this._btnGotoPage_2 = new B(this.getChildByName("btnGotoPage_2"))),
                                    this._btnGotoPage_2
                            }
                        }, {
                            key: "btnGotoPage_3",
                            get: function() {
                                return this._btnGotoPage_3 || (this._btnGotoPage_3 = new B(this.getChildByName("btnGotoPage_3"))),
                                    this._btnGotoPage_3
                            }
                        }, {
                            key: "btnGotoPage_4",
                            get: function() {
                                return this._btnGotoPage_4 || (this._btnGotoPage_4 = new B(this.getChildByName("btnGotoPage_4"))),
                                    this._btnGotoPage_4
                            }
                        }, {
                            key: "btnGotoPage_5",
                            get: function() {
                                return this._btnGotoPage_5 || (this._btnGotoPage_5 = new B(this.getChildByName("btnGotoPage_5"))),
                                    this._btnGotoPage_5
                            }
                        }, {
                            key: "cdMsg",
                            get: function() {
                                return this._cdMsg || (this._cdMsg = new B(this.getChildByName("cdMsg"))),
                                    this._cdMsg
                            }
                        }, {
                            key: "gotoPageBtn0",
                            get: function() {
                                return this._gotoPageBtn0 || (this._gotoPageBtn0 = new B(this.getChildByName("gotoPageBtn0"))),
                                    this._gotoPageBtn0
                            }
                        }, {
                            key: "gotoPageBtn1",
                            get: function() {
                                return this._gotoPageBtn1 || (this._gotoPageBtn1 = new B(this.getChildByName("gotoPageBtn1"))),
                                    this._gotoPageBtn1
                            }
                        }, {
                            key: "gotoPageBtn2",
                            get: function() {
                                return this._gotoPageBtn2 || (this._gotoPageBtn2 = new B(this.getChildByName("gotoPageBtn2"))),
                                    this._gotoPageBtn2
                            }
                        }, {
                            key: "gotoPageBtn3",
                            get: function() {
                                return this._gotoPageBtn3 || (this._gotoPageBtn3 = new B(this.getChildByName("gotoPageBtn3"))),
                                    this._gotoPageBtn3
                            }
                        }, {
                            key: "gotoPageBtn4",
                            get: function() {
                                return this._gotoPageBtn4 || (this._gotoPageBtn4 = new B(this.getChildByName("gotoPageBtn4"))),
                                    this._gotoPageBtn4
                            }
                        }, {
                            key: "gotoPageBtn5",
                            get: function() {
                                return this._gotoPageBtn5 || (this._gotoPageBtn5 = new B(this.getChildByName("gotoPageBtn5"))),
                                    this._gotoPageBtn5
                            }
                        }, {
                            key: "node1",
                            get: function() {
                                return this._node1 || (this._node1 = new E(this.getChildByName("node1"))),
                                    this._node1
                            }
                        }, {
                            key: "node2",
                            get: function() {
                                return this._node2 || (this._node2 = new F(this.getChildByName("node2"))),
                                    this._node2
                            }
                        }, {
                            key: "node3",
                            get: function() {
                                return this._node3 || (this._node3 = new P(this.getChildByName("node3"))),
                                    this._node3
                            }
                        }, {
                            key: "node4",
                            get: function() {
                                return this._node4 || (this._node4 = new D(this.getChildByName("node4"))),
                                    this._node4
                            }
                        }, {
                            key: "node5",
                            get: function() {
                                return this._node5 || (this._node5 = new x(this.getChildByName("node5"))),
                                    this._node5
                            }
                        }]),
                        s
                }(B)
                    , E = function(t) {
                    function s() {
                        for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                            s[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._popSet = void 0,
                            e._soundBTN = void 0,
                            e._muteBTN = void 0,
                            e._showRoleBTN = void 0,
                            e._hideRoleBTN = void 0,
                            e._caninviteBTN0 = void 0,
                            e._caninviteBTN1 = void 0,
                            e._stateBtn0_0 = void 0,
                            e._stateBtn0_1 = void 0,
                            e._stateBtn2_0 = void 0,
                            e._stateBtn2_1 = void 0,
                            e._stateBtn3_0 = void 0,
                            e._stateBtn3_1 = void 0,
                            e
                    }
                    return e(s, t),
                        n(s, [{
                            key: "popSet",
                            get: function() {
                                return this._popSet || (this._popSet = new k(this.getChildByName("popSet"))),
                                    this._popSet
                            }
                        }, {
                            key: "soundBTN",
                            get: function() {
                                return this._soundBTN || (this._soundBTN = new B(this.getChildByName("soundBTN"))),
                                    this._soundBTN
                            }
                        }, {
                            key: "muteBTN",
                            get: function() {
                                return this._muteBTN || (this._muteBTN = new B(this.getChildByName("muteBTN"))),
                                    this._muteBTN
                            }
                        }, {
                            key: "showRoleBTN",
                            get: function() {
                                return this._showRoleBTN || (this._showRoleBTN = new B(this.getChildByName("showRoleBTN"))),
                                    this._showRoleBTN
                            }
                        }, {
                            key: "hideRoleBTN",
                            get: function() {
                                return this._hideRoleBTN || (this._hideRoleBTN = new B(this.getChildByName("hideRoleBTN"))),
                                    this._hideRoleBTN
                            }
                        }, {
                            key: "caninviteBTN0",
                            get: function() {
                                return this._caninviteBTN0 || (this._caninviteBTN0 = new B(this.stateBtn3_0.getChildByName("caninviteBTN"))),
                                    this._caninviteBTN0
                            }
                        }, {
                            key: "caninviteBTN1",
                            get: function() {
                                return this._caninviteBTN1 || (this._caninviteBTN1 = new B(this.stateBtn3_1.getChildByName("caninviteBTN"))),
                                    this._caninviteBTN1
                            }
                        }, {
                            key: "stateBtn0_0",
                            get: function() {
                                return this._stateBtn0_0 || (this._stateBtn0_0 = new B(this.getChildByName("stateBtn0_0"))),
                                    this._stateBtn0_0
                            }
                        }, {
                            key: "stateBtn0_1",
                            get: function() {
                                return this._stateBtn0_1 || (this._stateBtn0_1 = new B(this.getChildByName("stateBtn0_1"))),
                                    this._stateBtn0_1
                            }
                        }, {
                            key: "stateBtn2_0",
                            get: function() {
                                return this._stateBtn2_0 || (this._stateBtn2_0 = new B(this.getChildByName("stateBtn2_0"))),
                                    this._stateBtn2_0
                            }
                        }, {
                            key: "stateBtn2_1",
                            get: function() {
                                return this._stateBtn2_1 || (this._stateBtn2_1 = new B(this.getChildByName("stateBtn2_1"))),
                                    this._stateBtn2_1
                            }
                        }, {
                            key: "stateBtn3_0",
                            get: function() {
                                return this._stateBtn3_0 || (this._stateBtn3_0 = new B(this.getChildByName("stateBtn3_0"))),
                                    this._stateBtn3_0
                            }
                        }, {
                            key: "stateBtn3_1",
                            get: function() {
                                return this._stateBtn3_1 || (this._stateBtn3_1 = new B(this.getChildByName("stateBtn3_1"))),
                                    this._stateBtn3_1
                            }
                        }]),
                        s
                }(B)
                    , F = function(t) {
                    function s() {
                        for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                            s[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._spModeBTN0 = void 0,
                            e._spModeBTN1 = void 0,
                            e._spModeBTN2 = void 0,
                            e._efModeBTN0 = void 0,
                            e._efModeBTN1 = void 0,
                            e._efModeBTN2 = void 0,
                            e._msgModeBTN0 = void 0,
                            e._msgModeBTN1 = void 0,
                            e._stateBtn0_0 = void 0,
                            e._stateBtn0_1 = void 0,
                            e._stateBtn0_2 = void 0,
                            e._stateBtn1_0 = void 0,
                            e._stateBtn1_1 = void 0,
                            e._stateBtn1_2 = void 0,
                            e._stateBtn2_0 = void 0,
                            e._stateBtn2_1 = void 0,
                            e
                    }
                    return e(s, t),
                        n(s, [{
                            key: "spModeBTN0",
                            get: function() {
                                return this._spModeBTN0 || (this._spModeBTN0 = new B(this.stateBtn0_0.getChildByName("spModeBTN"))),
                                    this._spModeBTN0
                            }
                        }, {
                            key: "spModeBTN1",
                            get: function() {
                                return this._spModeBTN1 || (this._spModeBTN1 = new B(this.stateBtn0_1.getChildByName("spModeBTN"))),
                                    this._spModeBTN1
                            }
                        }, {
                            key: "spModeBTN2",
                            get: function() {
                                return this._spModeBTN2 || (this._spModeBTN2 = new B(this.stateBtn0_2.getChildByName("spModeBTN"))),
                                    this._spModeBTN2
                            }
                        }, {
                            key: "efModeBTN0",
                            get: function() {
                                return this._efModeBTN0 || (this._efModeBTN0 = new B(this.stateBtn1_0.getChildByName("efModeBTN"))),
                                    this._efModeBTN0
                            }
                        }, {
                            key: "efModeBTN1",
                            get: function() {
                                return this._efModeBTN1 || (this._efModeBTN1 = new B(this.stateBtn1_1.getChildByName("efModeBTN"))),
                                    this._efModeBTN1
                            }
                        }, {
                            key: "efModeBTN2",
                            get: function() {
                                return this._efModeBTN2 || (this._efModeBTN2 = new B(this.stateBtn1_2.getChildByName("efModeBTN"))),
                                    this._efModeBTN2
                            }
                        }, {
                            key: "msgModeBTN0",
                            get: function() {
                                return this._msgModeBTN0 || (this._msgModeBTN0 = new B(this.stateBtn2_0.getChildByName("msgModeBTN"))),
                                    this._msgModeBTN0
                            }
                        }, {
                            key: "msgModeBTN1",
                            get: function() {
                                return this._msgModeBTN1 || (this._msgModeBTN1 = new B(this.stateBtn2_1.getChildByName("msgModeBTN"))),
                                    this._msgModeBTN1
                            }
                        }, {
                            key: "stateBtn0_0",
                            get: function() {
                                return this._stateBtn0_0 || (this._stateBtn0_0 = new B(this.getChildByName("stateBtn0_0"))),
                                    this._stateBtn0_0
                            }
                        }, {
                            key: "stateBtn0_1",
                            get: function() {
                                return this._stateBtn0_1 || (this._stateBtn0_1 = new B(this.getChildByName("stateBtn0_1"))),
                                    this._stateBtn0_1
                            }
                        }, {
                            key: "stateBtn0_2",
                            get: function() {
                                return this._stateBtn0_2 || (this._stateBtn0_2 = new B(this.getChildByName("stateBtn0_2"))),
                                    this._stateBtn0_2
                            }
                        }, {
                            key: "stateBtn1_0",
                            get: function() {
                                return this._stateBtn1_0 || (this._stateBtn1_0 = new B(this.getChildByName("stateBtn1_0"))),
                                    this._stateBtn1_0
                            }
                        }, {
                            key: "stateBtn1_1",
                            get: function() {
                                return this._stateBtn1_1 || (this._stateBtn1_1 = new B(this.getChildByName("stateBtn1_1"))),
                                    this._stateBtn1_1
                            }
                        }, {
                            key: "stateBtn1_2",
                            get: function() {
                                return this._stateBtn1_2 || (this._stateBtn1_2 = new B(this.getChildByName("stateBtn1_2"))),
                                    this._stateBtn1_2
                            }
                        }, {
                            key: "stateBtn2_0",
                            get: function() {
                                return this._stateBtn2_0 || (this._stateBtn2_0 = new B(this.getChildByName("stateBtn2_0"))),
                                    this._stateBtn2_0
                            }
                        }, {
                            key: "stateBtn2_1",
                            get: function() {
                                return this._stateBtn2_1 || (this._stateBtn2_1 = new B(this.getChildByName("stateBtn2_1"))),
                                    this._stateBtn2_1
                            }
                        }]),
                        s
                }(B)
                    , P = function(t) {
                    function s() {
                        for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                            s[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._privacyBTN0 = void 0,
                            e._privacyBTN1 = void 0,
                            e._privacyBTN2 = void 0,
                            e._privacyBTN3 = void 0,
                            e._privacyBTN4 = void 0,
                            e._privacyBTN5 = void 0,
                            e._privacyBTN6 = void 0,
                            e._privacyBTN7 = void 0,
                            e._privacyBTN8 = void 0,
                            e._privacyBTN9 = void 0,
                            e._stateBtn0_0 = void 0,
                            e._stateBtn0_1 = void 0,
                            e._stateBtn1_0 = void 0,
                            e._stateBtn1_1 = void 0,
                            e._stateBtn2_0 = void 0,
                            e._stateBtn2_1 = void 0,
                            e._stateBtn3_0 = void 0,
                            e._stateBtn3_1 = void 0,
                            e._stateBtn4_0 = void 0,
                            e._stateBtn4_1 = void 0,
                            e
                    }
                    return e(s, t),
                        n(s, [{
                            key: "privacyBTN0",
                            get: function() {
                                return this._privacyBTN0 || (this._privacyBTN0 = new B(this.stateBtn0_0.getChildByName("privacyBTN"))),
                                    this._privacyBTN0
                            }
                        }, {
                            key: "privacyBTN1",
                            get: function() {
                                return this._privacyBTN1 || (this._privacyBTN1 = new B(this.stateBtn0_1.getChildByName("privacyBTN"))),
                                    this._privacyBTN1
                            }
                        }, {
                            key: "privacyBTN2",
                            get: function() {
                                return this._privacyBTN2 || (this._privacyBTN2 = new B(this.stateBtn1_0.getChildByName("privacyBTN"))),
                                    this._privacyBTN2
                            }
                        }, {
                            key: "privacyBTN3",
                            get: function() {
                                return this._privacyBTN3 || (this._privacyBTN3 = new B(this.stateBtn1_1.getChildByName("privacyBTN"))),
                                    this._privacyBTN3
                            }
                        }, {
                            key: "privacyBTN4",
                            get: function() {
                                return this._privacyBTN4 || (this._privacyBTN4 = new B(this.stateBtn2_0.getChildByName("privacyBTN"))),
                                    this._privacyBTN4
                            }
                        }, {
                            key: "privacyBTN5",
                            get: function() {
                                return this._privacyBTN5 || (this._privacyBTN5 = new B(this.stateBtn2_1.getChildByName("privacyBTN"))),
                                    this._privacyBTN5
                            }
                        }, {
                            key: "privacyBTN6",
                            get: function() {
                                return this._privacyBTN6 || (this._privacyBTN6 = new B(this.stateBtn3_0.getChildByName("privacyBTN"))),
                                    this._privacyBTN6
                            }
                        }, {
                            key: "privacyBTN7",
                            get: function() {
                                return this._privacyBTN7 || (this._privacyBTN7 = new B(this.stateBtn3_1.getChildByName("privacyBTN"))),
                                    this._privacyBTN7
                            }
                        }, {
                            key: "privacyBTN8",
                            get: function() {
                                return this._privacyBTN8 || (this._privacyBTN8 = new B(this.stateBtn4_0.getChildByName("privacyBTN"))),
                                    this._privacyBTN8
                            }
                        }, {
                            key: "privacyBTN9",
                            get: function() {
                                return this._privacyBTN9 || (this._privacyBTN9 = new B(this.stateBtn4_1.getChildByName("privacyBTN"))),
                                    this._privacyBTN9
                            }
                        }, {
                            key: "stateBtn0_0",
                            get: function() {
                                return this._stateBtn0_0 || (this._stateBtn0_0 = new B(this.getChildByName("stateBtn0_0"))),
                                    this._stateBtn0_0
                            }
                        }, {
                            key: "stateBtn0_1",
                            get: function() {
                                return this._stateBtn0_1 || (this._stateBtn0_1 = new B(this.getChildByName("stateBtn0_1"))),
                                    this._stateBtn0_1
                            }
                        }, {
                            key: "stateBtn1_0",
                            get: function() {
                                return this._stateBtn1_0 || (this._stateBtn1_0 = new B(this.getChildByName("stateBtn1_0"))),
                                    this._stateBtn1_0
                            }
                        }, {
                            key: "stateBtn1_1",
                            get: function() {
                                return this._stateBtn1_1 || (this._stateBtn1_1 = new B(this.getChildByName("stateBtn1_1"))),
                                    this._stateBtn1_1
                            }
                        }, {
                            key: "stateBtn2_0",
                            get: function() {
                                return this._stateBtn2_0 || (this._stateBtn2_0 = new B(this.getChildByName("stateBtn2_0"))),
                                    this._stateBtn2_0
                            }
                        }, {
                            key: "stateBtn2_1",
                            get: function() {
                                return this._stateBtn2_1 || (this._stateBtn2_1 = new B(this.getChildByName("stateBtn2_1"))),
                                    this._stateBtn2_1
                            }
                        }, {
                            key: "stateBtn3_0",
                            get: function() {
                                return this._stateBtn3_0 || (this._stateBtn3_0 = new B(this.getChildByName("stateBtn3_0"))),
                                    this._stateBtn3_0
                            }
                        }, {
                            key: "stateBtn3_1",
                            get: function() {
                                return this._stateBtn3_1 || (this._stateBtn3_1 = new B(this.getChildByName("stateBtn3_1"))),
                                    this._stateBtn3_1
                            }
                        }, {
                            key: "stateBtn4_0",
                            get: function() {
                                return this._stateBtn4_0 || (this._stateBtn4_0 = new B(this.getChildByName("stateBtn4_0"))),
                                    this._stateBtn4_0
                            }
                        }, {
                            key: "stateBtn4_1",
                            get: function() {
                                return this._stateBtn4_1 || (this._stateBtn4_1 = new B(this.getChildByName("stateBtn4_1"))),
                                    this._stateBtn4_1
                            }
                        }]),
                        s
                }(B)
                    , D = function(t) {
                    function s() {
                        for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                            s[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._useCodeBTN = void 0,
                            e._unCodeBTN = void 0,
                            e._setCodeBtn0 = void 0,
                            e._setCodeBtn1 = void 0,
                            e._btnReset = void 0,
                            e._btnOut = void 0,
                            e._safeCodeContent = void 0,
                            e
                    }
                    return e(s, t),
                        n(s, [{
                            key: "useCodeBTN",
                            get: function() {
                                return this._useCodeBTN || (this._useCodeBTN = new B(this.getChildByName("useCodeBTN"))),
                                    this._useCodeBTN
                            }
                        }, {
                            key: "unCodeBTN",
                            get: function() {
                                return this._unCodeBTN || (this._unCodeBTN = new B(this.getChildByName("unCodeBTN"))),
                                    this._unCodeBTN
                            }
                        }, {
                            key: "setCodeBtn0",
                            get: function() {
                                return this._setCodeBtn0 || (this._setCodeBtn0 = new B(this.getChildByName("setCodeBtn0"))),
                                    this._setCodeBtn0
                            }
                        }, {
                            key: "setCodeBtn1",
                            get: function() {
                                return this._setCodeBtn1 || (this._setCodeBtn1 = new B(this.getChildByName("setCodeBtn1"))),
                                    this._setCodeBtn1
                            }
                        }, {
                            key: "btnReset",
                            get: function() {
                                return this._btnReset || (this._btnReset = new B(this.getChildByName("btnReset"))),
                                    this._btnReset
                            }
                        }, {
                            key: "btnOut",
                            get: function() {
                                return this._btnOut || (this._btnOut = new B(this.getChildByName("btnOut"))),
                                    this._btnOut
                            }
                        }, {
                            key: "safeCodeContent",
                            get: function() {
                                return this._safeCodeContent || (this._safeCodeContent = new O(this.getChildByName("safeCodeContent"))),
                                    this._safeCodeContent
                            }
                        }]),
                        s
                }(B)
                    , x = function(t) {
                    function s() {
                        for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                            s[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._btnGotoPage_6 = void 0,
                            e._btnGotoPage_7 = void 0,
                            e._btnGotoPage_8 = void 0,
                            e._btnGotoPage_9 = void 0,
                            e
                    }
                    return e(s, t),
                        n(s, [{
                            key: "btnGotoPage_6",
                            get: function() {
                                return this._btnGotoPage_6 || (this._btnGotoPage_6 = new B(this.getChildByName("btnGotoPage_6"))),
                                    this._btnGotoPage_6
                            }
                        }, {
                            key: "btnGotoPage_7",
                            get: function() {
                                return this._btnGotoPage_7 || (this._btnGotoPage_7 = new B(this.getChildByName("btnGotoPage_7"))),
                                    this._btnGotoPage_7
                            }
                        }, {
                            key: "btnGotoPage_8",
                            get: function() {
                                return this._btnGotoPage_8 || (this._btnGotoPage_8 = new B(this.getChildByName("btnGotoPage_8"))),
                                    this._btnGotoPage_8
                            }
                        }, {
                            key: "btnGotoPage_9",
                            get: function() {
                                return this._btnGotoPage_9 || (this._btnGotoPage_9 = new B(this.getChildByName("btnGotoPage_9"))),
                                    this._btnGotoPage_9
                            }
                        }]),
                        s
                }(B)
                    , R = function(t) {
                    function s() {
                        for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                            s[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._btnCancelCode = void 0,
                            e._btnForceClose = void 0,
                            e
                    }
                    return e(s, t),
                        n(s, [{
                            key: "btnCancelCode",
                            get: function() {
                                return this._btnCancelCode || (this._btnCancelCode = new B(this.getChildByName("btnCancelCode"))),
                                    this._btnCancelCode
                            }
                        }, {
                            key: "btnForceClose",
                            get: function() {
                                return this._btnForceClose || (this._btnForceClose = new B(this.getChildByName("btnForceClose"))),
                                    this._btnForceClose
                            }
                        }]),
                        s
                }(B)
                    , M = function(t) {
                    function s() {
                        for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                            s[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._countdownTitle = void 0,
                            e._stateBtn = void 0,
                            e
                    }
                    return e(s, t),
                        n(s, [{
                            key: "countdownTitle",
                            get: function() {
                                return this._countdownTitle || (this._countdownTitle = new B(this.getChildByName("countdownTitle"))),
                                    this._countdownTitle
                            }
                        }, {
                            key: "stateBtn",
                            get: function() {
                                return this._stateBtn || (this._stateBtn = new R(this.getChildByName("stateBtn"))),
                                    this._stateBtn
                            }
                        }]),
                        s
                }(B)
                    , O = function(t) {
                    function s() {
                        for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                            s[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._node2 = void 0,
                            e
                    }
                    return e(s, t),
                        n(s, [{
                            key: "node2",
                            get: function() {
                                return this._node2 || (this._node2 = new M(this.getChildByName("node2"))),
                                    this._node2
                            }
                        }]),
                        s
                }(B)
                    , G = function(t) {
                    function s() {
                        for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                            s[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._btnSureSet = void 0,
                            e._txtSafeCode = void 0,
                            e._txtCheckSafeCode = void 0,
                            e
                    }
                    return e(s, t),
                        n(s, [{
                            key: "btnSureSet",
                            get: function() {
                                return this._btnSureSet || (this._btnSureSet = new B(this.getChildByName("btnSureSet"))),
                                    this._btnSureSet
                            }
                        }, {
                            key: "txtSafeCode",
                            get: function() {
                                return this._txtSafeCode || (this._txtSafeCode = new B(this.getChildByName("txtSafeCode"))),
                                    this._txtSafeCode
                            }
                        }, {
                            key: "txtCheckSafeCode",
                            get: function() {
                                return this._txtCheckSafeCode || (this._txtCheckSafeCode = new B(this.getChildByName("txtCheckSafeCode"))),
                                    this._txtCheckSafeCode
                            }
                        }]),
                        s
                }(B)
                    , U = function(t) {
                    function s() {
                        for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                            s[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._btnCloseSetCode = void 0,
                            e
                    }
                    return e(s, t),
                        n(s, [{
                            key: "btnCloseSetCode",
                            get: function() {
                                return this._btnCloseSetCode || (this._btnCloseSetCode = new B(this.getChildByName("btnCloseSetCode"))),
                                    this._btnCloseSetCode
                            }
                        }]),
                        s
                }(B)
                    , I = function(t) {
                    function s() {
                        for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                            s[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._btnSureNoCode = void 0,
                            e._btnForget = void 0,
                            e._txtCloseCheckSafeCode = void 0,
                            e
                    }
                    return e(s, t),
                        n(s, [{
                            key: "btnSureNoCode",
                            get: function() {
                                return this._btnSureNoCode || (this._btnSureNoCode = new B(this.getChildByName("btnSureNoCode"))),
                                    this._btnSureNoCode
                            }
                        }, {
                            key: "btnForget",
                            get: function() {
                                return this._btnForget || (this._btnForget = new B(this.getChildByName("btnForget"))),
                                    this._btnForget
                            }
                        }, {
                            key: "txtCloseCheckSafeCode",
                            get: function() {
                                return this._txtCloseCheckSafeCode || (this._txtCloseCheckSafeCode = new B(this.getChildByName("txtCloseCheckSafeCode"))),
                                    this._txtCloseCheckSafeCode
                            }
                        }]),
                        s
                }(B)
                    , H = function(t) {
                    function s() {
                        for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                            s[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._btnSureCheck = void 0,
                            e._btnForget = void 0,
                            e._txtIDCard = void 0,
                            e._txtName = void 0,
                            e
                    }
                    return e(s, t),
                        n(s, [{
                            key: "btnSureCheck",
                            get: function() {
                                return this._btnSureCheck || (this._btnSureCheck = new B(this.getChildByName("btnSureCheck"))),
                                    this._btnSureCheck
                            }
                        }, {
                            key: "btnForget",
                            get: function() {
                                return this._btnForget || (this._btnForget = new B(this.getChildByName("btnForget"))),
                                    this._btnForget
                            }
                        }, {
                            key: "txtIDCard",
                            get: function() {
                                return this._txtIDCard || (this._txtIDCard = new B(this.getChildByName("txtIDCard"))),
                                    this._txtIDCard
                            }
                        }, {
                            key: "txtName",
                            get: function() {
                                return this._txtName || (this._txtName = new B(this.getChildByName("txtName"))),
                                    this._txtName
                            }
                        }]),
                        s
                }(B)
                    , L = function(t) {
                    function s() {
                        for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                            s[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._btnCloseSetCode = void 0,
                            e
                    }
                    return e(s, t),
                        n(s, [{
                            key: "btnCloseSetCode",
                            get: function() {
                                return this._btnCloseSetCode || (this._btnCloseSetCode = new B(this.getChildByName("btnCloseSetCode"))),
                                    this._btnCloseSetCode
                            }
                        }]),
                        s
                }(B)
                    , Q = function(t) {
                    function s() {
                        for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                            s[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._txtOldSafeCode = void 0,
                            e._txtNewSafeCode = void 0,
                            e._txtCheckNewSafeCode = void 0,
                            e._btnSureChange = void 0,
                            e
                    }
                    return e(s, t),
                        n(s, [{
                            key: "txtOldSafeCode",
                            get: function() {
                                return this._txtOldSafeCode || (this._txtOldSafeCode = new B(this.getChildByName("txtOldSafeCode"))),
                                    this._txtOldSafeCode
                            }
                        }, {
                            key: "txtNewSafeCode",
                            get: function() {
                                return this._txtNewSafeCode || (this._txtNewSafeCode = new B(this.getChildByName("txtNewSafeCode"))),
                                    this._txtNewSafeCode
                            }
                        }, {
                            key: "txtCheckNewSafeCode",
                            get: function() {
                                return this._txtCheckNewSafeCode || (this._txtCheckNewSafeCode = new B(this.getChildByName("txtCheckNewSafeCode"))),
                                    this._txtCheckNewSafeCode
                            }
                        }, {
                            key: "btnSureChange",
                            get: function() {
                                return this._btnSureChange || (this._btnSureChange = new B(this.getChildByName("btnSureChange"))),
                                    this._btnSureChange
                            }
                        }]),
                        s
                }(B)
                    , Y = function(t) {
                    function s() {
                        for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                            s[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._txtCloseCheckSafeCode = void 0,
                            e
                    }
                    return e(s, t),
                        n(s, [{
                            key: "txtCloseCheckSafeCode",
                            get: function() {
                                return this._txtCloseCheckSafeCode || (this._txtCloseCheckSafeCode = new B(this.getChildByName("txtCloseCheckSafeCode"))),
                                    this._txtCloseCheckSafeCode
                            }
                        }]),
                        s
                }(B)
                    , V = function(t) {
                    function s() {
                        for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                            s[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._btnCloseSetCode = void 0,
                            e._txtMsg = void 0,
                            e
                    }
                    return e(s, t),
                        n(s, [{
                            key: "btnCloseSetCode",
                            get: function() {
                                return this._btnCloseSetCode || (this._btnCloseSetCode = new B(this.getChildByName("btnCloseSetCode"))),
                                    this._btnCloseSetCode
                            }
                        }, {
                            key: "txtMsg",
                            get: function() {
                                return this._txtMsg || (this._txtMsg = new B(this.getChildByName("txtMsg"))),
                                    this._txtMsg
                            }
                        }]),
                        s
                }(B)
                    , q = function(t) {
                    function s() {
                        for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                            s[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._btnCloseSetCode = void 0,
                            e._node1 = void 0,
                            e._node2 = void 0,
                            e._node3 = void 0,
                            e._node4 = void 0,
                            e._node5 = void 0,
                            e._node6 = void 0,
                            e._node7 = void 0,
                            e._node8 = void 0,
                            e
                    }
                    return e(s, t),
                        n(s, [{
                            key: "btnCloseSetCode",
                            get: function() {
                                return this._btnCloseSetCode || (this._btnCloseSetCode = new B(this.getChildByName("btnCloseSetCode"))),
                                    this._btnCloseSetCode
                            }
                        }, {
                            key: "node1",
                            get: function() {
                                return this._node1 || (this._node1 = new G(this.getChildByName("node1"))),
                                    this._node1
                            }
                        }, {
                            key: "node2",
                            get: function() {
                                return this._node2 || (this._node2 = new U(this.getChildByName("node2"))),
                                    this._node2
                            }
                        }, {
                            key: "node3",
                            get: function() {
                                return this._node3 || (this._node3 = new I(this.getChildByName("node3"))),
                                    this._node3
                            }
                        }, {
                            key: "node4",
                            get: function() {
                                return this._node4 || (this._node4 = new H(this.getChildByName("node4"))),
                                    this._node4
                            }
                        }, {
                            key: "node5",
                            get: function() {
                                return this._node5 || (this._node5 = new L(this.getChildByName("node5"))),
                                    this._node5
                            }
                        }, {
                            key: "node6",
                            get: function() {
                                return this._node6 || (this._node6 = new Q(this.getChildByName("node6"))),
                                    this._node6
                            }
                        }, {
                            key: "node7",
                            get: function() {
                                return this._node7 || (this._node7 = new Y(this.getChildByName("node7"))),
                                    this._node7
                            }
                        }, {
                            key: "node8",
                            get: function() {
                                return this._node8 || (this._node8 = new V(this.getChildByName("node8"))),
                                    this._node8
                            }
                        }]),
                        s
                }(B);
                o._RF.pop()
            }
        }
    }
));
