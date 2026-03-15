System.register("chunks:///_virtual/UNLingerTcpConnetion.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ByteArray.ts", "./AngelTcpConnection.ts"], (function(n) {
        var t, o, i, e;
        return {
            setters: [function(n) {
                t = n.inheritsLoose
            }
                , function(n) {
                    o = n.cclegacy
                }
                , function(n) {
                    i = n.ByteArray
                }
                , function(n) {
                    e = n.AngelTcpConnection
                }
            ],
            execute: function() {
                o._RF.push({}, "9ae22uoQX5DEIbfD7kxyOor", "UNLingerTcpConnetion", void 0);
                n("UNLingerTcpConnetion", function(n) {
                    function o(t) {
                        var o;
                        return void 0 === t && (t = 0),
                            (o = n.call(this, t) || this).isConnecting = !1,
                            o
                    }
                    t(o, n);
                    var e = o.prototype;
                    return e.onError = function(t) {
                        this.isConnecting = !1,
                            n.prototype.onError.call(this, t)
                    }
                        ,
                        e.sendInitialData = function() {
                            var n = new i;
                            n.writeMultiByte("tgw_l7_forward\r\nHost: dir.17roco.qq.com:443\r\n\r\n", "utf-8"),
                                this._ws.send(n.buffer)
                        }
                        ,
                        e.onOpen = function(t) {
                            n.prototype.onOpen.call(this, t),
                                this.sendInitialData(),
                                this.isConnecting = !1
                        }
                        ,
                        e.connect = function(t, o) {
                            this.cHost = t,
                                this.cPort = o,
                                this.reset(),
                                n.prototype.connect.call(this, this.cHost, this.cPort)
                        }
                        ,
                        e.sendData = function(t) {
                            this.isConnected() ? n.prototype.sendData.call(this, t) : this.isConnecting || (this.reconnect(),
                                this.isConnecting = !0)
                        }
                        ,
                        e.reconnect = function() {
                            this.isConnecting = !0,
                                n.prototype.reconnect.call(this)
                        }
                        ,
                        e.reset = function() {
                            close(),
                                this.isConnecting = !1
                        }
                        ,
                        o
                }(e));
                o._RF.pop()
            }
        }
    }
));
