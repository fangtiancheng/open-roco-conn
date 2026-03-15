System.register("chunks:///_virtual/LosePanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./P_FreeRequest.ts", "./AgentNode.ts", "./WindowBase.ts", "./WindowCloseAction.ts", "./ResManager.ts", "./ReqRecuperate3.ts", "./SuccessorEvent.ts"], (function(e) {
        var t, i, n, s, o, r, u, c, l, a, _, h, v;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass,
                    n = e.assertThisInitialized
            }
                , function(e) {
                    s = e.cclegacy,
                        o = e.NodeEventType
                }
                , function(e) {
                    r = e.__global
                }
                , function(e) {
                    u = e.P_FreeRequest
                }
                , function(e) {
                    c = e.AgentNode
                }
                , function(e) {
                    l = e.WindowBase
                }
                , function(e) {
                    a = e.WindowCloseAction
                }
                , function(e) {
                    _ = e.default
                }
                , function(e) {
                    h = e.ReqRecuperate
                }
                , function(e) {
                    v = e.SuccessorEvent
                }
            ],
            execute: function() {
                s._RF.push({}, "dcddaZgl9lJQrYQI21DaAGA", "LosePanel", void 0),
                    e("LosePanel", function(e) {
                        function s(t, i) {
                            var s;
                            void 0 === i && (i = !1),
                                (s = e.call(this) || this)._ui = void 0,
                                s.m_type = 0,
                                s.initialize(t, null, null, null, i);
                            var r = _.Instance.getPrefabByName("combatSys_1600/LosePanelUI_1600");
                            return s._ui = new f(r),
                                s.addChild(s._ui.target),
                                s.hide(),
                                s.closeAction = a.HIDE,
                                s.moveTo(0, 0),
                                s._ui.sureBtn.on(o.TOUCH_END, s.onSure, n(s)),
                                s._ui.recoverBtn.on(o.TOUCH_END, s.onSure, n(s)),
                                s._ui.tfTips.visible = !0,
                                s
                        }
                        t(s, e);
                        var c = s.prototype;
                        return c.setType = function(e) {
                            this.m_type = e,
                                this._ui.tfTips.visible = 1 == e
                        }
                            ,
                            c.ishow = function() {
                                this.show(),
                                    2 == this.m_type ? (this._ui.sureBtn.x = 0,
                                        this._ui.recoverBtn.visible = !1) : r.MainRoleData.isVip ? (this._ui.sureBtn.x = -200,
                                        this._ui.recoverBtn.visible = !0) : (this._ui.sureBtn.x = 0,
                                        this._ui.recoverBtn.visible = !1)
                            }
                            ,
                            c.onSure = function(e) {
                                if (null != e.target)
                                    switch (e.target.name) {
                                        case "sureBtn":
                                            this.dispatchEvent(new v(v.LOSE_SURE));
                                            break;
                                        case "recoverBtn":
                                            new u(s.CMD_RECOVER_ALL_SPIRITS,new h,h,this.onReceiveRecoverAllSpirits.bind(this)).send()
                                    }
                            }
                            ,
                            c.onReceiveRecoverAllSpirits = function(e) {
                                null != e && null != e.returnCode && e.returnCode.isError() && r.UI.alert("", e.returnCode.message),
                                    this.dispatchEvent(new v(v.LOSE_SURE))
                            }
                            ,
                            i(s, [{
                                key: "text",
                                set: function(e) {
                                    this._ui.textBox.text = e
                                }
                            }]),
                            s
                    }(l)).CMD_RECOVER_ALL_SPIRITS = 720920;
                var f = function(e) {
                    function n() {
                        for (var t, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (t = e.call.apply(e, [this].concat(n)) || this)._sureBtn = void 0,
                            t._recoverBtn = void 0,
                            t._textBox = void 0,
                            t._tfTips = void 0,
                            t
                    }
                    return t(n, e),
                        i(n, [{
                            key: "sureBtn",
                            get: function() {
                                return this._sureBtn || (this._sureBtn = new c(this.getChildByName("sureBtn"))),
                                    this._sureBtn
                            }
                        }, {
                            key: "recoverBtn",
                            get: function() {
                                return this._recoverBtn || (this._recoverBtn = new c(this.getChildByName("recoverBtn"))),
                                    this._recoverBtn
                            }
                        }, {
                            key: "textBox",
                            get: function() {
                                return this._textBox || (this._textBox = new c(this.getChildByName("textBox"))),
                                    this._textBox
                            }
                        }, {
                            key: "tfTips",
                            get: function() {
                                return this._tfTips || (this._tfTips = new c(this.getChildByName("tfTips"))),
                                    this._tfTips
                            }
                        }]),
                        n
                }(c);
                s._RF.pop()
            }
        }
    }
));
