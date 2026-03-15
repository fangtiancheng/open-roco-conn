System.register("chunks:///_virtual/PKLosePanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./P_FreeRequest.ts", "./AgentNode.ts", "./WindowBase.ts", "./WindowCloseAction.ts", "./FilterFactory.ts", "./ResManager.ts", "./ReqRecuperate3.ts", "./AvatarPreview.ts", "./DazzleAvatarPreview2.ts", "./AvatarManager.ts", "./SuccessorEvent.ts", "./CombatType.ts", "./FilterUtil.ts"], (function(e) {
        var t, i, n, a, r, s, o, l, c, v, h, u, _, f, g, d, w, P, p;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass,
                    n = e.assertThisInitialized
            }
                , function(e) {
                    a = e.cclegacy,
                        r = e.NodeEventType
                }
                , function(e) {
                    s = e.__global
                }
                , function(e) {
                    o = e.P_FreeRequest
                }
                , function(e) {
                    l = e.AgentNode
                }
                , function(e) {
                    c = e.WindowBase
                }
                , function(e) {
                    v = e.WindowCloseAction
                }
                , function(e) {
                    h = e.FilterFactory
                }
                , function(e) {
                    u = e.default
                }
                , function(e) {
                    _ = e.ReqRecuperate
                }
                , function(e) {
                    f = e.AvatarPreview
                }
                , function(e) {
                    g = e.DazzleAvatarPreview
                }
                , function(e) {
                    d = e.AvatarManager
                }
                , function(e) {
                    w = e.SuccessorEvent
                }
                , function(e) {
                    P = e.CombatType
                }
                , function(e) {
                    p = e.FilterUtil
                }
            ],
            execute: function() {
                a._RF.push({}, "c569dnonFJIwp3f9QDBrW99", "PKLosePanel", void 0),
                    e("PKLosePanel", function(e) {
                        function a(t, i) {
                            var a;
                            void 0 === i && (i = !1),
                                (a = e.call(this) || this)._ui = void 0,
                                a.leftPreview = void 0,
                                a.rightPreview = void 0,
                                a.leftDazzlePreview = void 0,
                                a.rightDazzlePreview = void 0,
                                a.initialize(t, null, null, null, i);
                            var s = u.Instance.getPrefabByName("combatSys_1600/PKLosePanelUI_1600");
                            return a._ui = new y(s),
                                a.addChild(a._ui.target),
                                a.hide(),
                                a.closeAction = v.HIDE,
                                a.moveTo(0, 0),
                                a._ui.sureBtn.on(r.TOUCH_END, a.onSure, n(a)),
                                a._ui.recoverBtn.on(r.TOUCH_END, a.onSure, n(a)),
                                a.leftPreview = new f,
                                a.leftPreview.x = 240,
                                a._ui.avatarLeft.container.addChild(a.leftPreview),
                                a.leftDazzlePreview = new g,
                                a.leftDazzlePreview.x = 240,
                                a._ui.avatarLeft.container.addChild(a.leftDazzlePreview),
                                a._ui.avatarLeft.container.scaleX = -1,
                                a.rightPreview = new f,
                                a.rightPreview.x = 360,
                                a._ui.avatarRight.container.addChild(a.rightPreview),
                                a.rightDazzlePreview = new g,
                                a.rightDazzlePreview.x = 360,
                                a._ui.avatarRight.container.addChild(a.rightDazzlePreview),
                                a
                        }
                        t(a, e);
                        var l = a.prototype;
                        return l.ishow = function() {
                            this.show(),
                                this._ui.imgTitle.gotoAndStop(2),
                                s.MainRoleData.isVip ? (this._ui.recoverBtn.visible = !0,
                                    this._ui.recoverBtn.filters = [],
                                    this._ui.txtTips.visible = !0) : (this._ui.recoverBtn.visible = !0,
                                    this._ui.recoverBtn.filters = p.getGrayFilter(),
                                    this._ui.txtTips.visible = !0),
                                h.setAshingFilter(this._ui.recoverBtn, s.MainRoleData.isVip)
                        }
                            ,
                            l.onSure = function(e) {
                                if (null != e.target)
                                    switch (e.target.name) {
                                        case "sureBtn":
                                            this.dispatchEvent(new w(w.LOSE_SURE));
                                            break;
                                        case "recoverBtn":
                                            if (!s.MainRoleData.isVip)
                                                return;
                                            new o(a.CMD_RECOVER_ALL_SPIRITS,new _,_,this.onReceiveRecoverAllSpirits.bind(this)).send()
                                    }
                            }
                            ,
                            l.onReceiveRecoverAllSpirits = function(e) {
                                null != e && null != e.returnCode && e.returnCode.isError() && s.UI.alert("", e.returnCode.message),
                                    this.dispatchEvent(new w(w.LOSE_SURE))
                            }
                            ,
                            i(a, [{
                                key: "data",
                                set: function(e) {
                                    var t = this;
                                    this.leftDazzlePreview.clear(),
                                        this.leftPreview.clear(),
                                        this.rightDazzlePreview.clear(),
                                        this.rightPreview.clear(),
                                        d.getAvataPreview(s.MainRoleData.id, this.leftPreview, (function() {
                                                t.leftPreview.setAvatar(34078728)
                                            }
                                        )),
                                        d.getDazzleAvataPreview(s.MainRoleData.id, this.leftDazzlePreview),
                                    e.combatType != P.PVP && e.combatType != P.PVT && e.combatType != P.L_PVP && e.combatType != P.MATCH_PVP && e.combatType != P.D_PVP || (d.getAvataPreview(e.opponentID, this.rightPreview, (function() {
                                            t.rightPreview.setAvatar(34078722)
                                        }
                                    )),
                                        d.getDazzleAvataPreview(e.opponentID, this.rightDazzlePreview)),
                                        this._ui.avatarLeft.nickName.text = s.MainRoleData.nickName,
                                        this._ui.avatarRight.nickName.text = e.oppoentName
                                }
                            }]),
                            a
                    }(c)).CMD_RECOVER_ALL_SPIRITS = 720920;
                var m = function(e) {
                    function n() {
                        for (var t, i = arguments.length, n = new Array(i), a = 0; a < i; a++)
                            n[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(n)) || this)._container = void 0,
                            t._nickName = void 0,
                            t
                    }
                    return t(n, e),
                        i(n, [{
                            key: "container",
                            get: function() {
                                return this._container || (this._container = new l(this.getChildByName("container"))),
                                    this._container
                            }
                        }, {
                            key: "nickName",
                            get: function() {
                                return this._nickName || (this._nickName = new l(this.getChildByName("nickName"))),
                                    this._nickName
                            }
                        }]),
                        n
                }(l)
                    , y = function(e) {
                    function n() {
                        for (var t, i = arguments.length, n = new Array(i), a = 0; a < i; a++)
                            n[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(n)) || this)._imgTitle = void 0,
                            t._txtTips = void 0,
                            t._sureBtn = void 0,
                            t._recoverBtn = void 0,
                            t._avatarLeft = void 0,
                            t._avatarRight = void 0,
                            t
                    }
                    return t(n, e),
                        i(n, [{
                            key: "imgTitle",
                            get: function() {
                                return this._imgTitle || (this._imgTitle = new l(this.getChildByName("imgTitle"))),
                                    this._imgTitle
                            }
                        }, {
                            key: "txtTips",
                            get: function() {
                                return this._txtTips || (this._txtTips = new l(this.getChildByName("txtTips"))),
                                    this._txtTips
                            }
                        }, {
                            key: "sureBtn",
                            get: function() {
                                return this._sureBtn || (this._sureBtn = new l(this.getChildByName("sureBtn"))),
                                    this._sureBtn
                            }
                        }, {
                            key: "recoverBtn",
                            get: function() {
                                return this._recoverBtn || (this._recoverBtn = new l(this.getChildByName("recoverBtn"))),
                                    this._recoverBtn
                            }
                        }, {
                            key: "avatarLeft",
                            get: function() {
                                return this._avatarLeft || (this._avatarLeft = new m(this.getChildByName("avatarLeft"))),
                                    this._avatarLeft
                            }
                        }, {
                            key: "avatarRight",
                            get: function() {
                                return this._avatarRight || (this._avatarRight = new m(this.getChildByName("avatarRight"))),
                                    this._avatarRight
                            }
                        }]),
                        n
                }(l);
                a._RF.pop()
            }
        }
    }
));
