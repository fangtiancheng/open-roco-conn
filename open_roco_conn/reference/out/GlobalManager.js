System.register("chunks:///_virtual/GlobalManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CallbackCenter.ts", "./ResEvent.ts", "./global.ts", "./ProtocolHelper.ts", "./UserData.ts", "./SpiritAnimationContainer.ts", "./SpiritAnimationContainerGaf.ts", "./AngelMain.ts", "./GlobalAPI.ts", "./ConfigManager.ts", "./PureNotificationCenter.ts", "./ReBirthDataProxy.ts"], (function(n) {
        var t, e, o, i, a, s, c, r, l, u, f, g, h, D, p, _, C;
        return {
            setters: [function(n) {
                t = n.inheritsLoose
            }
                , function(n) {
                    e = n.cclegacy,
                        o = n._decorator,
                        i = n.Node,
                        a = n.Component
                }
                , function(n) {
                    s = n.CallbackCenter
                }
                , function(n) {
                    c = n.ResEvent
                }
                , function(n) {
                    r = n.__global
                }
                , function(n) {
                    l = n.ProtocolHelper
                }
                , function(n) {
                    u = n.UserData
                }
                , function(n) {
                    f = n.SpiritAnimationContainer
                }
                , function(n) {
                    g = n.SpiritAnimationContainerGaf
                }
                , function(n) {
                    h = n.AngelMain
                }
                , function(n) {
                    D = n.GlobalAPI
                }
                , function(n) {
                    p = n.default
                }
                , function(n) {
                    _ = n.PureNotificationCenter
                }
                , function(n) {
                    C = n.ReBirthDataProxy
                }
            ],
            execute: function() {
                e._RF.push({}, "d56d3OZXxBDBJxFb8CdNSqC", "GlobalManager", void 0);
                o.ccclass,
                    o.property,
                    n("GlobalManager", function(n) {
                        function e() {
                            for (var t, e = arguments.length, o = new Array(e), i = 0; i < e; i++)
                                o[i] = arguments[i];
                            return (t = n.call.apply(n, [this].concat(o)) || this)._configDone = !1,
                                t._gameResPkgDone = !1,
                                t
                        }
                        t(e, n);
                        var o = e.prototype;
                        return o.start = function() {
                            f.initMap(),
                                g.initMap(),
                                C.initialize(),
                                this.node.on(c.CONFIG_DONE, this.onConfigDone, this),
                                this.node.on(c.GAME_RES_PKG_DONE, this.onGameResPkgDone, this),
                                l.USERUIN = u.uin,
                                s.init(new i, new Object)
                        }
                            ,
                            o.onConfigDone = function(n) {
                                this._configDone = !0,
                                    this.checkResDone()
                            }
                            ,
                            o.onGameResPkgDone = function(n) {
                                this._gameResPkgDone = !0,
                                    this.checkResDone()
                            }
                            ,
                            o.checkResDone = function() {
                                this._gameResPkgDone && this._configDone && (D.gAngelSysAPI = new h,
                                    r.initialize(D.gAngelSysAPI),
                                    p.Instance.afterLoader(),
                                    _.sendNotification("GlobalManagerDeon"),
                                    this.node.dispatchEvent(new c(c.ALL_RES_DONE)))
                            }
                            ,
                            e.LoginSuccessLogic = function() {
                                C.query()
                            }
                            ,
                            e
                    }(a));
                e._RF.pop()
            }
        }
    }
));
