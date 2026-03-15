System.register("chunks:///_virtual/LoginUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AngelTcpHelper.ts", "./LoginPlugin.ts", "./AgentNode.ts", "./PureNotificationCenter.ts", "./AppConstDef.ts", "./BuildLogHelper.ts", "./AgeTipsNodeLogic.ts", "./GameNoticeNodeLogic.ts", "./GuideNodeLogic.ts", "./LoginUtilView.ts", "./GUIUtils.ts"], (function(e) {
        var t, i, n, o, s, c, g, r, u, h, a, l, d, _, B, N, p, m, C;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    n = e.cclegacy,
                        o = e._decorator,
                        s = e.Label,
                        c = e.NodeEventType,
                        g = e.Toggle,
                        r = e.Component
                }
                , function(e) {
                    u = e.AngelTcpHelper
                }
                , function(e) {
                    h = e.LoginPlugin
                }
                , function(e) {
                    a = e.AgentNode
                }
                , function(e) {
                    l = e.PureNotificationCenter
                }
                , function(e) {
                    d = e.AppConstDef
                }
                , function(e) {
                    _ = e.default
                }
                , function(e) {
                    B = e.AgeTipsNodeLogic
                }
                , function(e) {
                    N = e.GameNoticeNodeLogic
                }
                , function(e) {
                    p = e.GuideNodeLogic
                }
                , function(e) {
                    m = e.LoginUIUtilView
                }
                , function(e) {
                    C = e.GUI
                }
            ],
            execute: function() {
                var f;
                n._RF.push({}, "114f2pSnoVEaq3ygFh8LPaX", "LoginUI", void 0);
                var T = o.ccclass
                    , v = (o.property,
                    o.menu)
                    , L = (e("default", T(f = v("AUI/LoginUI")(f = function(e) {
                    function i() {
                        for (var t, i = arguments.length, n = new Array(i), o = 0; o < i; o++)
                            n[o] = arguments[o];
                        return (t = e.call.apply(e, [this].concat(n)) || this)._plugin = null,
                            t._loginUIUtilView = null,
                            t._ui = void 0,
                            t._root = null,
                            t
                    }
                    t(i, e);
                    var n = i.prototype;
                    return n.printTimerLog = function() {
                        var e = this.node.getChildByName("log");
                        e && (1 == _.IS_LOCAL ? e.active = !0 : e.active = !1);
                        var t = this.node.getChildByName("log").getComponent(s);
                        t && (t.string = "CBT:" + _.TIMER)
                    }
                        ,
                        n.start = function() {
                            var e = this;
                            1 == _.IS_LOCAL && console.log("LoginUI--start"),
                                this._ui = new L(this.node),
                                this._ui.ageTipsNode.target.active = !1,
                                this._ui.gameNoticeNode.target.active = !1,
                                this._ui.guideNode.target.active = !1,
                                this._ui.guideNode.target.on(p.EVENT_ON_CLIICK_AGREEMENT_GUIDE, this.onAgreeGuide, this),
                                this._ui.noticeBtn.on(c.TOUCH_END, this.onClickNoticeBtn, this),
                                this._ui.serviceBtn.on(c.TOUCH_END, this.onClickServiceBtn, this),
                                this._ui.angTipsBtn.on(c.TOUCH_END, this.onClickAgeTipsBtn, this),
                                this._ui.loginBtn.on(c.TOUCH_END, this.onClickLoginBtn, this),
                                this._ui.childSecretBtn.on(c.TOUCH_END, this.onClickChildSecretBtn, this),
                                this._ui.userSecretBtn.on(c.TOUCH_END, this.onClickUserSecretBtn, this),
                                this._ui.userAgreementBtn.on(c.TOUCH_END, this.onClickUserAgreementBtn, this),
                            1 == _.IS_LOCAL && 1 == u.isOpenLoginUtil && (this._loginUIUtilView || (this._loginUIUtilView = new m,
                                this._loginUIUtilView.addParent(this.node)),
                                this._loginUIUtilView.show()),
                                this._plugin = this.getComponent(h) || this.addComponent(h),
                            1 == _.IS_LOCAL && (u.isAutoEnter || u.isDebuggerCombat || u.isDebuggerStorage || u.isDebuggerSpiritBagApp) && setTimeout((function() {
                                    e.onClickRealLoginBtn(null)
                                }
                            ), 200)
                        }
                        ,
                        n.onAgreeGuide = function(e) {
                            this._ui.agreementGuideTog.getComponent(g).isChecked = !0
                        }
                        ,
                        n.onClickRealLoginBtn = function(e) {
                            C.instance.gotoServerListView(),
                                l.sendNotification(d.NN_V_CLOSE_LOGIN_VIEW)
                        }
                        ,
                        n.onClickFastLogin = function(e) {}
                        ,
                        n.showMainUI = function(e) {
                            C.instance.gotoMainView((function() {
                                    return l.sendNotification(d.NN_V_DESTORY_LOGIN_VIEW)
                                }
                            ))
                        }
                        ,
                        n.onClickAgeTipsBtn = function(e) {
                            this._ui.ageTipsNode.target.active = !0
                        }
                        ,
                        n.onClickServiceBtn = function(e) {
                            window.open("https://kf.qq.com/", "_blank")
                        }
                        ,
                        n.onClickNoticeBtn = function(e) {
                            this._ui.gameNoticeNode.show(),
                                this._ui.gameNoticeNode.target.active = !0
                        }
                        ,
                        n.onClickScanBtn = function(e) {}
                        ,
                        n.onClickLoginBtn = function(e) {
                            0 != this._ui.agreementGuideTog.getComponent(g).isChecked ? window.open("//17roco.qq.com/h5/login.html?fromH5=1", "_self") : this._ui.guideNode.target.active = !0
                        }
                        ,
                        n.onClickUserAgreementBtn = function(e) {
                            window.open("http://game.qq.com/contract.shtml", "_blank")
                        }
                        ,
                        n.onClickUserSecretBtn = function(e) {
                            window.open("http://game.qq.com/privacy_guide.shtml", "_blank")
                        }
                        ,
                        n.onClickChildSecretBtn = function(e) {
                            window.open("https://game.qq.com/privacy_guide_children.shtml", "_blank")
                        }
                        ,
                        i
                }(r)) || f) || f),
                    function(e) {
                        function n() {
                            for (var t, i = arguments.length, n = new Array(i), o = 0; o < i; o++)
                                n[o] = arguments[o];
                            return (t = e.call.apply(e, [this].concat(n)) || this)._ageTipsNode = void 0,
                                t._gameNoticeNode = void 0,
                                t._guideNode = void 0,
                                t._agreementGuideTog = void 0,
                                t._noticeBtn = void 0,
                                t._serviceBtn = void 0,
                                t._angTipsBtn = void 0,
                                t._loginBtn = void 0,
                                t._childSecretBtn = void 0,
                                t._userSecretBtn = void 0,
                                t._userAgreementBtn = void 0,
                                t
                        }
                        return t(n, e),
                            i(n, [{
                                key: "ageTipsNode",
                                get: function() {
                                    return this._ageTipsNode || (this._ageTipsNode = new B(this.getChildByName("ageTipsNode"))),
                                        this._ageTipsNode
                                }
                            }, {
                                key: "gameNoticeNode",
                                get: function() {
                                    return this._gameNoticeNode || (this._gameNoticeNode = new N(this.getChildByName("gameNoticeNode"))),
                                        this._gameNoticeNode
                                }
                            }, {
                                key: "guideNode",
                                get: function() {
                                    return this._guideNode || (this._guideNode = new p(this.getChildByName("guideNode"))),
                                        this._guideNode
                                }
                            }, {
                                key: "agreementGuideTog",
                                get: function() {
                                    return this._agreementGuideTog || (this._agreementGuideTog = new a(this.getChildByName("agreementGuideTog"))),
                                        this._agreementGuideTog
                                }
                            }, {
                                key: "noticeBtn",
                                get: function() {
                                    return this._noticeBtn || (this._noticeBtn = new a(this.getChildByName("noticeBtn"))),
                                        this._noticeBtn
                                }
                            }, {
                                key: "serviceBtn",
                                get: function() {
                                    return this._serviceBtn || (this._serviceBtn = new a(this.getChildByName("serviceBtn"))),
                                        this._serviceBtn
                                }
                            }, {
                                key: "angTipsBtn",
                                get: function() {
                                    return this._angTipsBtn || (this._angTipsBtn = new a(this.getChildByName("angTipsBtn"))),
                                        this._angTipsBtn
                                }
                            }, {
                                key: "loginBtn",
                                get: function() {
                                    return this._loginBtn || (this._loginBtn = new a(this.getChildByName("loginBtn"))),
                                        this._loginBtn
                                }
                            }, {
                                key: "childSecretBtn",
                                get: function() {
                                    return this._childSecretBtn || (this._childSecretBtn = new a(this.getChildByName("childSecretBtn"))),
                                        this._childSecretBtn
                                }
                            }, {
                                key: "userSecretBtn",
                                get: function() {
                                    return this._userSecretBtn || (this._userSecretBtn = new a(this.getChildByName("userSecretBtn"))),
                                        this._userSecretBtn
                                }
                            }, {
                                key: "userAgreementBtn",
                                get: function() {
                                    return this._userAgreementBtn || (this._userAgreementBtn = new a(this.getChildByName("userAgreementBtn"))),
                                        this._userAgreementBtn
                                }
                            }]),
                            n
                    }(a));
                n._RF.pop()
            }
        }
    }
));
