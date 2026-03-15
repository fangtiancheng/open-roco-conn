System.register("chunks:///_virtual/EmailIconEntrance.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./PureNotificationCenter.ts", "./EmailMessage.ts", "./EmailQueryListProtocol.ts", "./GameProtocolManager.ts", "./NotificationCenter.ts", "./MessageBoxProtocol.ts"], (function(t) {
        var n, e, o, i, a, r, c, l, s, u, f, d, E, p, g, m, h;
        return {
            setters: [function(t) {
                n = t.applyDecoratedDescriptor,
                    e = t.inheritsLoose,
                    o = t.initializerDefineProperty,
                    i = t.assertThisInitialized
            }
                , function(t) {
                    a = t.cclegacy,
                        r = t._decorator,
                        c = t.Node,
                        l = t.Label,
                        s = t.NodeEventType,
                        u = t.Component
                }
                , function(t) {
                    f = t.PureNotificationCenter
                }
                , function(t) {
                    d = t.EmailMessage
                }
                , function(t) {
                    E = t.EmailQueryListProtocol,
                        p = t.EmailQueryListReq
                }
                , function(t) {
                    g = t.GameProtocolManager
                }
                , function(t) {
                    m = t.NotificationCenter
                }
                , function(t) {
                    h = t.MessageBoxProtocol
                }
            ],
            execute: function() {
                var P, y, I, v, T, C, b, M, N, S;
                a._RF.push({}, "311c4JmUApGo6BXrRY8PZ0B", "EmailIconEntrance", void 0);
                var _ = r.ccclass
                    , A = r.property;
                t("EmailIconEntrance", (P = _("EmailIconEntrance"),
                    y = A(c),
                    I = A(c),
                    v = A(l),
                P(((S = function(t) {
                    function n() {
                        for (var n, e = arguments.length, a = new Array(e), r = 0; r < e; r++)
                            a[r] = arguments[r];
                        return n = t.call.apply(t, [this].concat(a)) || this,
                            o(n, "mailIcon", b, i(n)),
                            o(n, "redPoint", M, i(n)),
                            o(n, "unReadCount", N, i(n)),
                            n
                    }
                    e(n, t);
                    var a = n.prototype;
                    return a.onLoad = function() {
                        this.mailIcon.on(s.TOUCH_END, this.onTouchEnd, this),
                            m.addNotification(n.UPDATE_STATE, this.UpdateIconEntranceState, this),
                            this.UpdateIconEntranceState(),
                            this.listenMessageBox()
                    }
                        ,
                        a.onTouchEnd = function() {
                            console.log("点击邮箱图标"),
                                f.sendNotification(d.SHOW_MAIN_VIEW)
                        }
                        ,
                        a.UpdateIconEntranceState = function() {
                            var t = this
                                , n = g.instance.getPropocol(E)
                                , e = new p;
                            n.send(e, (function(n) {
                                    if (0 == n.data.retInfo.retCode) {
                                        console.log("EmailQueryListProtocol success");
                                        var e = n.data.mailBaseInfo.filter((function(t) {
                                                return 0 == t.state
                                            }
                                        ));
                                        t.unReadCount.string = e.length.toString(),
                                            t.unReadCount.node.active = e.length > 0,
                                            t.redPoint.active = e.length > 0
                                    } else
                                        console.log("EmailQueryListProtocol error: " + n.data.retInfo.retCode)
                                }
                            ))
                        }
                        ,
                        a.listenMessageBox = function() {
                            var t = this;
                            g.instance.getPropocol(h).on((function(n) {
                                    var e;
                                    21 == (null == (e = n.data.entity) ? void 0 : e.type) && t.UpdateIconEntranceState()
                                }
                            ))
                        }
                        ,
                        n
                }(u)).UPDATE_STATE = "EmailIconEntrance@UPDATE_STATE",
                    b = n((C = S).prototype, "mailIcon", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    M = n(C.prototype, "redPoint", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    N = n(C.prototype, "unReadCount", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    T = C)) || T));
                a._RF.pop()
            }
        }
    }
));
