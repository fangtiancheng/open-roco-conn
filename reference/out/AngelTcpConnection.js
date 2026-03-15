System.register("chunks:///_virtual/AngelTcpConnection.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GlobalAPI.ts", "./UserData.ts", "./ByteArray.ts", "./BuildLogHelper.ts", "./CALLBACK.ts", "./CallbackCenter.ts", "./DEFINE.ts", "./ADF.ts", "./ADFHead.ts", "./EventDispatcher.ts", "./ByteBuffer.ts", "./ADFCmdsType.ts", "./FreePBRequestProxy.ts", "./TCPConnEvent.ts", "./AngelTcpHelper.ts"], (function(n) {
        var t, e, o, i, s, r, a, c, l, d, h, A, _, f, u, g, y;
        return {
            setters: [function(n) {
                t = n.inheritsLoose
            }
                , function(n) {
                    e = n.cclegacy
                }
                , function(n) {
                    o = n.GlobalAPI
                }
                , function(n) {
                    i = n.UserData
                }
                , function(n) {
                    s = n.ByteArray
                }
                , function(n) {
                    r = n.default
                }
                , function(n) {
                    a = n.CALLBACK
                }
                , function(n) {
                    c = n.CallbackCenter
                }
                , function(n) {
                    l = n.DEFINE
                }
                , function(n) {
                    d = n.ADF
                }
                , function(n) {
                    h = n.ADFHead
                }
                , function(n) {
                    A = n.EventDispatcher
                }
                , function(n) {
                    _ = n.ByteBuffer
                }
                , function(n) {
                    f = n.ADFCmdsType
                }
                , function(n) {
                    u = n.FreePBRequestProxy
                }
                , function(n) {
                    g = n.TCPConnEvent
                }
                , function(n) {
                    y = n.AngelTcpHelper
                }
            ],
            execute: function() {
                e._RF.push({}, "799d0OnyOhDz5KpLVhjOUkT", "AngelTcpConnection", void 0);
                var C = n("AngelTcpConnection", function(n) {
                    function e(t) {
                        var o;
                        return void 0 === t && (t = 0),
                            (o = n.call(this) || this).policyPort = 843,
                            o.cHost = "",
                            o.cPort = 0,
                            o.inByteBuff = void 0,
                            o.emptyADF = void 0,
                            o.onADFEvent = void 0,
                            o.__id = 0,
                            o._name = "AngelTcpConnection",
                            o._ws = null,
                            o._state = 0,
                            e._constructorCounter++,
                            o._name = o._name + e._constructorCounter,
                            o.__id = t,
                            o.inByteBuff = new _,
                            o.inByteBuff.allocate(0),
                            o.onADFEvent = new g(g.TCPCONN_ONADF,o.__id),
                            o.setPolicyPort(l.POLICYPORT),
                            o.connect(e.HOST, e.PORT),
                            y.init(),
                            console.log("[AngelTcpConnection] name：", o._name),
                            o
                    }
                    t(e, n);
                    var A = e.prototype;
                    return A.tryReadADFHead = function(n) {
                        for (var t = h.canRead(n); t != h.NotEnBytes; ) {
                            if (t == h.HeadReady) {
                                var e = new h;
                                return e.readExternal(n),
                                CONFIG.DEBUG && console.log("[AngelTcpConnection] 收到的包头文件：", e.cmdID.toString(16)),
                                    e
                            }
                            t = h.canRead(n)
                        }
                        return null
                    }
                        ,
                        A.tryReadADFBody = function(n) {
                            if (n.bytesAvailable >= this.inByteBuff.limit) {
                                this.inByteBuff.fill(n),
                                    this.emptyADF.body = this.inByteBuff,
                                    this.onADFEvent.data = this.emptyADF;
                                var t = this.inByteBuff.copyToByteArray();
                                return u.isProtoBufId(this.emptyADF.head.cmdID) ? c.notifyEvent(a.ANGEL_NET_ON_GET_A_PROTOBUF_RAW_DATA, [t, this.emptyADF.head]) : c.notifyEvent(a.ANGEL_NET_ON_GET_A_SOCKET_RAW_DATA, [t, this.emptyADF.head]),
                                    c.notifyEvent(a.ANGEL_NET_ON_GET_A_RAW_DATA, [t, this.emptyADF.head]),
                                    this.dispatchEvent(this.onADFEvent),
                                    !0
                            }
                            return !1
                        }
                        ,
                        A.getID = function() {
                            return this.__id
                        }
                        ,
                        A.setTimeOut = function(n) {}
                        ,
                        A.setPolicyPort = function(n) {
                            this.policyPort = n
                        }
                        ,
                        A.isConnected = function() {
                            return this._ws.readyState == WebSocket.OPEN
                        }
                        ,
                        A.sendData = function(n) {
                            var t = this;
                            if (this._ws.readyState == WebSocket.OPEN) {
                                if (CONFIG.DEBUG && (console.log("[AngelTcpConnection] name==" + this._name),
                                    console.log("[AngelTcpConnection] TCP[" + this.__id + "]向服务器发送CMDTYPE:0x0" + n.head.cmdID.toString(16) + o.getTimerFormat())),
                                n.head.cmdID == f.T_LoginRoom) {
                                    var e = o.getTimerFormat() + "[AngelTcpConnection] TCP[" + this.__id + "]向服务器发送CMDTYPE:0x0" + n.head.cmdID.toString(16) + ";";
                                    i.addLoginLog(e)
                                }
                                var l = new s;
                                n.writeExternal(l);
                                for (var d = new Uint8Array(l.buffer), h = "", A = 0; A < d.byteLength; A++)
                                    h += d[A].toString(16).padStart(2, "0") + " ";
                                1 == r.IS_LOCAL && console.log("sendArrayBuffer : ", h),
                                    u.isProtoBufId(n.head.cmdID) ? c.notifyEvent(a.ANGEL_NET_ON_SEND_A_PROTOBUF_RAW_DATA, [l, n], this) : c.notifyEvent(a.ANGEL_NET_ON_SEND_A_SOCKET_RAW_DATA, [l, n], this),
                                    c.notifyEvent(a.ANGEL_NET_ON_SEND_A_RAW_DATA, [l, n], this);
                                var _ = y.getByteArray(n.head.cmdID);
                                if (_)
                                    return void setTimeout((function() {
                                            t.onMessage(_)
                                        }
                                    ), 500);
                                this._ws.send(l.buffer)
                            } else
                                CONFIG.DEBUG && console.log("[AngelTcpConnection] 错误: 尝试向一个非连接的SOCKET上写数据 !== " + this._ws.readyState + "== name == " + this._name + " ")
                        }
                        ,
                        A.close = function() {
                            null != this._ws && this._ws.readyState == WebSocket.OPEN && this._ws.close()
                        }
                        ,
                        A.dispose = function() {
                            this._ws.readyState == WebSocket.OPEN && this._ws.close(),
                                this._ws = null
                        }
                        ,
                        A.connect = function(n, t) {
                            this.cHost = n,
                                this.cPort = t,
                                this.reconnect()
                        }
                        ,
                        A.reconnect = function() {
                            console.log("tcp reconnect");
                            var n = "wss://zone" + i.zid + ".17roco.qq.com:" + this.cPort;
                            this._ws = new WebSocket(n),
                                this._ws.binaryType = "arraybuffer",
                                this._ws.onopen = this.onOpen.bind(this),
                                this._ws.onmessage = this.onMessage.bind(this),
                                this._ws.onerror = this.onError.bind(this),
                                this._ws.onclose = this.onClose.bind(this);
                            var t = o.getTimerFormat() + "AngelTcpConnection-reconnect-id=" + this.__id + ";";
                            i.addLoginLog(t);
                            t = o.getTimerFormat() + "AngelTcpConnection-reconnect-url=" + n + ";";
                            i.addLoginLog(t)
                        }
                        ,
                        A.onOpen = function(n) {
                            var t = o.getTimerFormat() + "AngelTcpConnection-onOpen-id=" + this.__id + ";";
                            i.addLoginLog(t),
                                console.log("AngelTcpConnection=onOpen=readyState=" + this._ws.readyState + "=name=" + this._name);
                            var e = new g(g.TCPCONN_CONNECTED,this.__id);
                            this.dispatchEvent(e)
                        }
                        ,
                        A.onMessage = function(n) {
                            1 == r.IS_LOCAL && console.log("onMessage : ", n);
                            var t = null;
                            n instanceof MessageEvent && (t = n.data);
                            var e = "";
                            n instanceof ArrayBuffer && (t = n,
                                e = "这是一个本地回包"),
                            CONFIG.DEBUG && console.log(e + "[AngelTcpConnection] TCP[" + this.__id + "]收到服务端数据:" + t.length + "ADF: " + this.emptyADF);
                            for (var o = new s(t), i = "[", a = new Uint8Array(t), c = 0; c < a.byteLength; c++)
                                c == a.byteLength - 1 ? i += "0x" + a[c].toString(16).padStart(2, "0") : i += "0x" + a[c].toString(16).padStart(2, "0") + ", ";
                            if (i += "]",
                            1 == r.IS_LOCAL && console.log("收到服务端数据:==  " + i),
                            null == this.emptyADF) {
                                var l = this.tryReadADFHead(o);
                                if (null != l) {
                                    var h = "0x0" + l.cmdID.toString(16).padStart(5, "0");
                                    1 == r.IS_LOCAL && console.log("[AngelTcpConnection] TCP[" + this.__id + "]收到服务端数据: adfhead=" + l + "adfcmdID=" + h),
                                        this.emptyADF = new d,
                                        this.emptyADF.head = l,
                                        this.inByteBuff.allocate(l.length),
                                        l.cmdID
                                }
                            }
                            if (null != this.emptyADF) {
                                if (this.tryReadADFBody(o) && (this.emptyADF = null,
                                o.bytesAvailable > 0))
                                    throw new Error("on message error!!!")
                            } else
                                r.IS_LOCAL
                        }
                        ,
                        A.onError = function(n) {
                            var t = o.getTimerFormat() + "AngelTcpConnection-onError-id=" + this.__id + ";";
                            i.addLoginLog(t),
                                console.error("AngelTcpConnection==onError==" + n);
                            var e = new g(g.TCPCONN_ERROR,this.__id);
                            e.message = "[AngelTcpConnection] [error]",
                                this.dispatchEvent(e)
                        }
                        ,
                        A.onClose = function(n) {
                            var t = o.getTimerFormat() + "AngelTcpConnection-onClose-id=" + this.__id + "=code=" + n.code + "=reason=" + n.reason + "=wasClean==" + n.wasClean + ";";
                            i.addLoginLog(t),
                                console.error("AngelTcpConnection==onClose==code==" + n.code),
                                console.error("AngelTcpConnection==onClose==reason==" + n.reason),
                                console.error("AngelTcpConnection==onClose=wasClean==" + n.wasClean);
                            var e = new g(g.TCPCONN_CLOSED,this.__id);
                            this.dispatchEvent(e)
                        }
                        ,
                        A.executeCombat = function() {
                            for (var n = new Uint8Array([149, 39, 0, 0, 0, 11, 0, 1, 77, 239, 10, 137, 0, 0, 0, 0, 0, 0, 2, 68, 0, 0, 0, 0, 0, 0, 2, 93, 3, 77, 239, 10, 137, 0, 10, 197, 183, 206, 196, 223, 192, 223, 192, 223, 192, 1, 0, 6, 0, 0, 11, 140, 100, 2, 1, 192, 1, 192, 0, 0, 0, 3, 2, 16, 20, 0, 2, 22, 25, 0, 0, 203, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 25, 100, 1, 1, 187, 1, 187, 0, 0, 0, 4, 3, 100, 15, 0, 3, 194, 5, 0, 4, 73, 5, 0, 4, 75, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 75, 100, 2, 1, 197, 1, 197, 0, 0, 0, 2, 5, 10, 10, 0, 5, 158, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 139, 100, 2, 1, 173, 1, 173, 0, 0, 0, 3, 1, 138, 20, 0, 1, 158, 20, 0, 3, 194, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 110, 100, 1, 0, 247, 0, 247, 0, 0, 0, 3, 0, 161, 30, 0, 0, 12, 20, 0, 0, 166, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 98, 100, 2, 1, 60, 1, 60, 0, 0, 0, 3, 0, 110, 15, 0, 0, 141, 20, 0, 1, 163, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 0, 12, 54, 216, 0, 4, 210, 176, 185, 214, 1, 0, 1, 0, 0, 43, 12, 70, 1, 2, 255, 2, 255, 0, 0, 0, 3, 1, 96, 0, 0, 0, 28, 0, 0, 1, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]).buffer, t = new s(n), e = "[", o = new Uint8Array(n), i = 0; i < o.byteLength; i++)
                                e += o[i].toString(16).padStart(2, "0") + ", ";
                            if (e += "]",
                            1 == r.IS_LOCAL && console.log("收到服务端数据:==" + e),
                            null == this.emptyADF) {
                                var a = this.tryReadADFHead(t);
                                if (null != a) {
                                    var c = "0x0" + a.cmdID.toString(16).padStart(5, "0");
                                    1 == r.IS_LOCAL && console.log("[AngelTcpConnection] TCP[" + this.__id + "]收到服务端数据: adfhead=" + a + "adfcmdID=" + c),
                                        this.emptyADF = new d,
                                        this.emptyADF.head = a,
                                        this.inByteBuff.allocate(a.length)
                                }
                            }
                            if (null != this.emptyADF && this.tryReadADFBody(t) && (this.emptyADF = null,
                            t.bytesAvailable > 0))
                                throw new Error("on message error!!!")
                        }
                        ,
                        e
                }(A));
                C.HOST = "wss://zone1.17roco.qq.com",
                    C.PORT = 80,
                    C._constructorCounter = 0,
                    e._RF.pop()
            }
        }
    }
));
