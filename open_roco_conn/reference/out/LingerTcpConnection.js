System.register("chunks:///_virtual/LingerTcpConnection.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GlobalAPI.ts", "./BuildLogHelper.ts", "./Timer.ts", "./TimerEvent.ts", "./ADFCmdsType.ts", "./ProtocolHelper.ts", "./AngelTcpConnection.ts", "./AngelTcpHelper.ts"], (function(n) {
        var t, e, o, i, s, c, r, l, p, u, a;
        return {
            setters: [function(n) {
                t = n.inheritsLoose,
                    e = n.assertThisInitialized
            }
                , function(n) {
                    o = n.cclegacy
                }
                , function(n) {
                    i = n.GlobalAPI
                }
                , function(n) {
                    s = n.default
                }
                , function(n) {
                    c = n.Timer
                }
                , function(n) {
                    r = n.default
                }
                , function(n) {
                    l = n.ADFCmdsType
                }
                , function(n) {
                    p = n.ProtocolHelper
                }
                , function(n) {
                    u = n.AngelTcpConnection
                }
                , function(n) {
                    a = n.AngelTcpHelper
                }
            ],
            execute: function() {
                o._RF.push({}, "456c96oP2pCXqP0Mbo+SZSf", "LingerTcpConnection", void 0),
                    n("LingerTcpConnection", function(n) {
                        function o(t) {
                            var o;
                            return void 0 === t && (t = 0),
                                (o = n.call(this, t) || this).timer = void 0,
                                o.timer = new c(12e3),
                                o.timer.addEventListener(r.TIMER, o.onHelloTime.bind(e(o))),
                                a.tcp = e(o),
                                o
                        }
                        t(o, n);
                        var u = o.prototype;
                        return u.onHelloTime = function() {
                            0 != i.isLogin && this.sendData(p.CreateADF(l.T_HELLO))
                        }
                            ,
                            u.sendInitialData = function() {}
                            ,
                            u.onOpen = function(t) {
                                n.prototype.onOpen.call(this, t),
                                1 == s.IS_LOCAL && console.log("onConnConnected:tgw_l7_forward\r\nHost: " + this.cHost + ":" + this.cPort + "\r\n\r\n"),
                                    this.sendInitialData(),
                                    this.timer.start()
                            }
                            ,
                            o.log = function(n) {}
                            ,
                            u.onClose = function(t) {
                                n.prototype.onClose.call(this, t),
                                    this.timer.stop()
                            }
                            ,
                            u.sendData = function(t) {
                                n.prototype.sendData.call(this, t)
                            }
                            ,
                            u.dispose = function() {
                                n.prototype.dispose.call(this),
                                    this.timer.removeEventListener(r.TIMER, this.onHelloTime.bind(this)),
                                    this.timer = null
                            }
                            ,
                            o
                    }(u)).TIMER = "LingerTcpConnection.timer",
                    o._RF.pop()
            }
        }
    }
));
