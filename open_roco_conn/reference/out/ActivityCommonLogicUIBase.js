System.register("chunks:///_virtual/ActivityCommonLogicUIBase.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./XML.ts", "./ActivityAPI.ts", "./ActivityUIBase.ts", "./BaseMessage.ts", "./TCP.ts", "./NetResult.ts", "./CGI2.ts"], (function(e) {
        var t, i, n, o, s, c, u, a, l, h;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    o = e.XML
                }
                , function(e) {
                    s = e.ActivityAPI
                }
                , function(e) {
                    c = e.ActivityUIBase
                }
                , function(e) {
                    u = e.BaseMessage
                }
                , function(e) {
                    a = e.TCP
                }
                , function(e) {
                    l = e.NetResult
                }
                , function(e) {
                    h = e.CGI2
                }
            ],
            execute: function() {
                n._RF.push({}, "fe552BYGQlOXJ5h02TNqS57", "ActivityCommonLogicUIBase", void 0);
                e("ActivityCommonLogicUIBase", function(e) {
                    function n(t) {
                        var i;
                        return (i = e.call(this, t) || this).m_res = void 0,
                            i.showCache = {},
                            i.popupCache = {},
                            i.frameCache = {},
                            i.nodeCache = {},
                            i.tipsCache = {},
                            i.protoCache = {},
                            i.togglePopupCache = {},
                            i.popupCloseCallback = {},
                            i._isOpenFromTimePaper = void 0,
                            i
                    }
                    t(n, e);
                    var c = n.prototype;
                    return c.setData = function(e, t) {
                        var i = new o(t);
                        i && this._onDataReceived(i, e)
                    }
                        ,
                        c.setMainUI = function(e) {
                            this.m_res = e,
                                this.addChild(this.m_res),
                                this.dfs(this.m_res),
                                this.dfs2(this.m_res)
                        }
                        ,
                        c.unsetMainUI = function() {
                            this.m_res = null,
                                this.showCache = null,
                                this.popupCache = null,
                                this.frameCache = null,
                                this.nodeCache = null,
                                this.tipsCache = null,
                                this.togglePopupCache = null
                        }
                        ,
                        c.dfs = function(e) {}
                        ,
                        c.dfs2 = function(e) {}
                        ,
                        c.checkTime = function(e) {}
                        ,
                        c.checkName = function(e) {}
                        ,
                        c.checkTips = function(e) {}
                        ,
                        c.onTipsTargetMouseOver = function(e) {}
                        ,
                        c.onTipsTargetMouseOut = function(e) {}
                        ,
                        c.checkShow = function(e) {}
                        ,
                        c.checkFrame = function(e) {}
                        ,
                        c.checkPopup = function(e) {}
                        ,
                        c.checkTogglePopup = function(e) {}
                        ,
                        c.onPopupClosed = function(e) {}
                        ,
                        c._onResClick = function(e) {
                            this.onResClick(e)
                        }
                        ,
                        c.onResClick = function(e) {}
                        ,
                        c.send = function(e, t, i, n, o, c, l, r) {
                            void 0 === t && (t = null),
                            void 0 === i && (i = null),
                            void 0 === n && (n = null),
                            void 0 === o && (o = !1),
                            void 0 === c && (c = !1),
                            void 0 === l && (l = !0),
                            void 0 === r && (r = !1),
                                null != n || t instanceof u ? a.call(e, t, n, s.delegateFunc(this._onDataReceived.bind(this), i), e, o, c, l) : (null == t && (t = ""),
                                    -1 == e ? h.call(this.CONFIG.CGI + "?" + t + s.getSkeyStr() + s.getPlatfromStr(), s.delegateFunc(this._onDataReceived.bind(this), i), e, l, c, o, r) : h.call(this.CONFIG.CGI + "?cmd=" + e + t + s.getSkeyStr() + s.getPlatfromStr(), s.delegateFunc(this._onDataReceived.bind(this), i), e, l, c, o, r))
                        }
                        ,
                        c._onDataReceived = function(e, t, i) {
                            void 0 === i && (i = null),
                            this.m_res && (this.m_res.active = !0);
                            new l(e);
                            this.onDataReceived(e, t, i)
                        }
                        ,
                        i(n, [{
                            key: "isOpenFromTimePaper",
                            get: function() {
                                return this._isOpenFromTimePaper
                            },
                            set: function(e) {
                                this._isOpenFromTimePaper = e
                            }
                        }]),
                        n
                }(c));
                n._RF.pop()
            }
        }
    }
));
