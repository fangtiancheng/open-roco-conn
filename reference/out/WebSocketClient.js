System.register("chunks:///_virtual/WebSocketClient.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./tagLoginPkg.ts", "./UserData.ts", "./GlobalTimer.ts", "./ADFH5.ts", "./tagADFHeadH5.ts", "./ADFCmdsType.ts"], (function(n) {
        var e, t, o, s, i, r, c, a;
        return {
            setters: [function(n) {
                e = n.createClass
            }
                , function(n) {
                    t = n.cclegacy
                }
                , function(n) {
                    o = n.tagLoginPkg
                }
                , function(n) {
                    s = n.UserData
                }
                , function(n) {
                    i = n.GlobalTimer
                }
                , function(n) {
                    r = n.ADFH5
                }
                , function(n) {
                    c = n.tagADFHeadH5
                }
                , function(n) {
                    a = n.ADFCmdsType
                }
            ],
            execute: function() {
                t._RF.push({}, "fd464cY86lGjqqwe3VhpPwX", "WebSocketClient", void 0);
                var l = n("WebSocketClient", function() {
                    function n() {
                        this.ws = null,
                            this.state = 0,
                            this._name = "WebSocketClient"
                    }
                    var t = n.prototype;
                    return t.connect = function(n) {
                        console.log("tcp reconnect WebSocketClient"),
                            console.log("connect : ", this._name),
                            this.ws = new WebSocket(n),
                            this.ws.binaryType = "arraybuffer",
                            this.ws.onopen = this.onOpen.bind(this),
                            this.ws.onmessage = this.onMessage.bind(this),
                            this.ws.onerror = this.onError.bind(this),
                            this.ws.onclose = this.onClose.bind(this)
                    }
                        ,
                        t.send = function(n, e) {
                            if (void 0 === e && (e = 0),
                            n instanceof r) {
                                for (var t = n.encode(), o = new Uint8Array(t), s = "", i = "0x0" + e.toString(16).padStart(5, "0"), c = 0; c < o.byteLength; c++)
                                    s += o[c].toString(16).padStart(2, "0") + " ";
                                console.log("cmd=" + i + "  sendTCPTransmission : ", s),
                                    this.ws.send(t)
                            } else {
                                for (var a = new Uint8Array(n), l = "", g = "0x0" + e.toString(16).padStart(5, "0"), d = 0; d < a.byteLength; d++)
                                    l += a[d].toString(16).padStart(2, "0") + " ";
                                console.log("cmd=" + g + "  sendArrayBuffer : ", l),
                                    this.ws.send(n)
                            }
                        }
                        ,
                        t.onOpen = function(e) {
                            console.log("onOpen : ", e);
                            var t = r.create(o);
                            t.head.uin = s.uin,
                                t.body.ushRoom = 1,
                                t.body.szKey = (new TextEncoder).encode("0EBA356EFA935DAC2041AE79C9A25D84D354747EB23BECA6FB6250902CE54557"),
                                n.Instance.send(t, a.T_LoginRoom),
                                this.state = 1,
                                i.unregisterTimer(n.TIMER_WEBSOCKETCLIENT),
                                i.registerTimer(n.TIMER_WEBSOCKETCLIENT, 5e3, (function() {
                                        n.Instance.sayHello()
                                    }
                                ), this)
                        }
                        ,
                        t.onMessage = function(n) {
                            console.log("onMessage : ", n),
                                r.create().decode(n.data)
                        }
                        ,
                        t.onError = function(n) {
                            console.log("onError : ", n)
                        }
                        ,
                        t.onClose = function(n) {
                            console.log("onClose : ", n)
                        }
                        ,
                        t.sendLog = function(n, e) {
                            void 0 === e && (e = "");
                            for (var t = new Uint8Array(n), o = "", s = 0; s < t.byteLength; s++)
                                o += t[s].toString(16).padStart(2, "0") + " ";
                            console.log("sendLog : " + e, o)
                        }
                        ,
                        t.sendLogByU8 = function(n, e) {
                            void 0 === e && (e = "");
                            for (var t = "", o = 0; o < n.byteLength; o++)
                                t += n[o].toString(16).padStart(2, "0") + " ";
                            console.log("sendLogByU8 : " + e, t)
                        }
                        ,
                        t.sayHello = function() {
                            if (console.log("sayHello...", this.state, this._name),
                            1 == this.state) {
                                var n = new c;
                                n.uin = s.uin,
                                    n.cmdID = a.T_HELLO,
                                    n.length = 0;
                                var e = n.encode();
                                this.send(e, a.T_HELLO)
                            }
                        }
                        ,
                        e(n, [{
                            key: "name",
                            set: function(n) {
                                this._name = n
                            }
                        }], [{
                            key: "Instance",
                            get: function() {
                                return this._instance || (this._instance = new n,
                                    this._instance.name = "WebSocketClient-new"),
                                    this._instance
                            }
                        }]),
                        n
                }());
                l.TIMER_WEBSOCKETCLIENT = "WebSocketClient-TIMER",
                    l._instance = null,
                    t._RF.pop()
            }
        }
    }
));
