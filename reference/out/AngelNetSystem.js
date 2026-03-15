System.register("chunks:///_virtual/AngelNetSystem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GlobalAPI.ts", "./Constants.ts", "./AngelDataEvent.ts", "./AngelNetSysEvent.ts", "./EventDispatcher.ts", "./TCPConnEvent.ts", "./P_FreeRequest.ts", "./NetManager.ts", "./ADFProcessors.ts", "./ADFReceivers.ts", "./AngelURLLoader.ts", "./LingerTcpConnection.ts", "./ReflashKeyLoader.ts", "./UNLingerTcpConnetion.ts"], (function(t) {
        var e, n, s, o, i, r, a, c, h, l, d, u, p, C, P, v, g;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createForOfIteratorHelperLoose
            }
                , function(t) {
                    s = t.cclegacy
                }
                , function(t) {
                    o = t.GlobalAPI
                }
                , function(t) {
                    i = t.Constants
                }
                , function(t) {
                    r = t.AngelDataEvent
                }
                , function(t) {
                    a = t.AngelNetSysEvent
                }
                , function(t) {
                    c = t.EventDispatcher
                }
                , function(t) {
                    h = t.TCPConnEvent
                }
                , function(t) {
                    l = t.P_FreeRequest
                }
                , function(t) {
                    d = t.NetManager
                }
                , function(t) {
                    u = t.ADFProcessors
                }
                , function(t) {
                    p = t.ADFReceivers
                }
                , function(t) {
                    C = t.AngelURLLoader
                }
                , function(t) {
                    P = t.LingerTcpConnection
                }
                , function(t) {
                    v = t.ReflashKeyLoader
                }
                , function(t) {
                    g = t.UNLingerTcpConnetion
                }
            ],
            execute: function() {
                s._RF.push({}, "a48b38lus5GyKRiMdcM8ivJ", "AngelNetSystem", void 0);
                var f = t("AngelNetSystem", function(t) {
                    function s() {
                        for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                            s[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(s)) || this).adfProcessors = void 0,
                            e.adfReceivers = void 0,
                            e.tcpProxy = void 0,
                            e.httpProxy = void 0,
                            e.reflashLoader = void 0,
                            e.tcpID = 0,
                            e.tcpProxyMap = void 0,
                            e.angelSysApi = void 0,
                            e.gDispatcher = void 0,
                            e.closeSocketMsg = "",
                            e
                    }
                    e(s, t);
                    var c = s.prototype;
                    return c.onPushChildWard = function(t, e) {
                        206321 == t && (this.closeSocketMsg = s.MSG_CLOSE_SCOKET_CHILDWARD,
                            d.BeKickedOff = !0)
                    }
                        ,
                        c.onConnStateChange = function(t) {
                            var e = new a(a.ON_STATE_CHANGE);
                            switch (t.type) {
                                case h.TCPCONN_CONNECTED:
                                    e.currState = a.NS_CONNETED,
                                        console.log("[AngelNetSystem] tcpID:" + t.getTCPID() + "连接成功!" + o.getTimerFormat());
                                    break;
                                case h.TCPCONN_CLOSED:
                                    e.currState = a.NS_CLOSED,
                                        e.message = this.closeSocketMsg,
                                        console.error("[AngelNetSystem] tcpID:" + t.getTCPID() + "连接关闭!" + o.getTimerFormat());
                                    break;
                                case h.TCPCONN_ERROR:
                                    e.currState = a.NS_ERROR,
                                        e.message = t.message,
                                        console.error("[AngelNetSystem] tcpID:" + t.getTCPID() + "连接错误,             message:" + t.message + o.getTimerFormat())
                            }
                            e.data = t.getTCPID(),
                                this.gDispatcher.dispatchEvent(e)
                        }
                        ,
                        c.sendADFHandler = function(t) {
                            this.trySendData(t.dataType, t.data)
                        }
                        ,
                        c.onReceiveADFHandler = function(t) {
                            var e = t.data;
                            if (null != e) {
                                var n = this.adfProcessors.decode(e);
                                e.body = n,
                                    this.adfReceivers.onDataReceive(e)
                            } else
                                console.log("[NetSystem] AngelNetSystem收到一个空的ADF!!")
                        }
                        ,
                        c.setAngelSysAPI = function(t) {
                            this.angelSysApi = t
                        }
                        ,
                        c.initialize = function() {
                            this.gDispatcher = this.angelSysApi.getGEventAPI().angelEventDispatcher,
                                this.adfProcessors = new u,
                                this.adfReceivers = new p(this),
                                l.setNetSys(this),
                                this.tcpProxyMap = new Map;
                            var t = this.angelSysApi.getGDataAPI().getGlobalVal(i.CUR_SERVER_INFO);
                            this.reflashLoader = new v(t),
                                this.reflashLoader.start(),
                            CONFIG.DEBUG && console.log("[NetSystem] add ProtoBufDataReceiver")
                        }
                        ,
                        c.createTCPProxy = function(t) {
                            return void 0 === t && (t = !0),
                                this.tcpID++,
                                this.tcpProxy = t ? new P(this.tcpID) : new g(this.tcpID),
                                this.tcpProxy.addEventListener(h.TCPCONN_CONNECTED, this.onConnStateChange, this),
                                this.tcpProxy.addEventListener(h.TCPCONN_TIMEOUT, this.onConnStateChange, this),
                                this.tcpProxy.addEventListener(h.TCPCONN_CLOSED, this.onConnStateChange, this),
                                this.tcpProxy.addEventListener(h.TCPCONN_ERROR, this.onConnStateChange, this),
                                this.tcpProxy.addEventListener(h.TCPCONN_ONADF, this.onReceiveADFHandler, this),
                                this.tcpProxyMap[this.tcpProxy.getID()] = this.tcpProxy,
                                this.tcpProxy
                        }
                        ,
                        c.setMainTcpProxy = function(t) {
                            var e = this.getTCPProxy(this.tcpID);
                            null != e && (this.tcpProxy = e)
                        }
                        ,
                        c.disposeTCPProxy = function(t) {
                            var e = this.tcpProxyMap[this.tcpID];
                            null != e && (e.removeEventListener(h.TCPCONN_CONNECTED, this.onConnStateChange, this),
                                e.removeEventListener(h.TCPCONN_TIMEOUT, this.onConnStateChange, this),
                                e.removeEventListener(h.TCPCONN_CLOSED, this.onConnStateChange, this),
                                e.removeEventListener(h.TCPCONN_ERROR, this.onConnStateChange, this),
                                e.removeEventListener(h.TCPCONN_ONADF, this.onReceiveADFHandler, this),
                                e.dispose(),
                                console.log("[AngelNetSystem] this.tcpID:" + e.getID() + "被系统回收！")),
                                delete this.tcpProxyMap[this.tcpID]
                        }
                        ,
                        c.connect = function(t, e) {
                            this.tcpProxy.connect(t, e)
                        }
                        ,
                        c.isConnected = function() {
                            return null != this.tcpProxy && this.tcpProxy.isConnected()
                        }
                        ,
                        c.finalize = function() {
                            null != this.adfProcessors && (this.adfReceivers.removeEventListener(r.TRYSENDADF, this.sendADFHandler, this),
                                this.adfProcessors.dispose(),
                                this.adfReceivers.dispose(),
                                this.adfProcessors = null,
                                this.adfReceivers = null),
                                this.tcpProxy = null;
                            for (var t, e = n(this.tcpProxyMap.values()); !(t = e()).done; ) {
                                var s = t.value;
                                null != s && this.disposeTCPProxy(s.getID())
                            }
                            null != this.httpProxy && (this.httpProxy.dispose(),
                                this.httpProxy = null)
                        }
                        ,
                        c.getHttpProxy = function() {
                            return this.httpProxy
                        }
                        ,
                        c.addDataProcessor = function(t) {
                            null != t && this.adfProcessors.add(t)
                        }
                        ,
                        c.removeDataProcessor = function(t) {
                            null != t && this.adfProcessors.remove(t)
                        }
                        ,
                        c.getTCPProxy = function(t) {
                            return void 0 === t && (t = -1),
                                -1 == t ? this.tcpProxy : this.tcpProxyMap[t]
                        }
                        ,
                        c.trySendData = function(t, e, n, o) {
                            void 0 === n && (n = !1),
                            void 0 === o && (o = -1),
                                s.__SerialNum++;
                            var i = this.adfProcessors.encode(e, t, n ? s.__SerialNum : 0)
                                , r = this.getTCPProxy(o);
                            if (0 == r.isConnected() || null == i) {
                                if (!r)
                                    return 0;
                                r.sendData(i)
                            } else
                                r.sendData(i);
                            return s.__SerialNum
                        }
                        ,
                        c.addDataReceiver = function(t) {
                            null != t && this.adfReceivers.add(t)
                        }
                        ,
                        c.removeDataReceiver = function(t) {
                            null != t && this.adfReceivers.remove(t)
                        }
                        ,
                        c.sendHttpRequest = function(t) {
                            return null == this.httpProxy ? "" : this.httpProxy.sendHttpRequest(t)
                        }
                        ,
                        c.cancelHttpRequest = function(t) {
                            return null != this.httpProxy && this.httpProxy.cancelHttpRequest(t)
                        }
                        ,
                        c.getURLLoader = function() {
                            var t = this.angelSysApi.getGDataAPI().getGlobalVal(i.CUR_SERVER_INFO);
                            return new C(t)
                        }
                        ,
                        c.createURLLoader = function(t, e) {
                            void 0 === t && (t = !1),
                            void 0 === e && (e = -1);
                            var n = this.getURLLoader();
                            return n.setNoCache(t),
                                n.setTimeOut(e),
                                n
                        }
                        ,
                        s
                }(c));
                f.VERSION = "1.0",
                    f.__SerialNum = 0,
                    f.MSG_CLOSE_SCOKET_CHILDWARD = "您的账号已被家长设定为暂时无法登录游戏。如有疑问，请拨打服务热线0755-86013799进行咨询。共筑绿色健康游戏环境，感谢您的理解与支持。",
                    s._RF.pop()
            }
        }
    }
));
