System.register("chunks:///_virtual/GameProtocol.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ProtocolHelper.ts", "./ByteArray.ts", "./GlobalAPI.ts"], (function(e) {
        var t, n, r, o, a;
        return {
            setters: [function(e) {
                t = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    r = e.ProtocolHelper
                }
                , function(e) {
                    o = e.ByteArray
                }
                , function(e) {
                    a = e.GlobalAPI
                }
            ],
            execute: function() {
                n._RF.push({}, "b1d5dtN4odP0po0rXO+XQR3", "GameProtocol", void 0);
                e("GameNetRequest", function() {
                    function e() {}
                    var n = e.prototype;
                    return n.IAngelDataOutputJudge = function() {
                        throw new Error("Method not implemented.")
                    }
                        ,
                        n.encode = function(e) {
                            this.writeToBuffer(e.body)
                        }
                        ,
                        t(e, [{
                            key: "length",
                            get: function() {
                                throw new Error("Method not implemented.")
                            }
                        }]),
                        e
                }()),
                    e("GameNetResponse", function() {
                        function e() {
                            this.code = null
                        }
                        return e.prototype.decode = function(e) {
                            var t = e.body;
                            void 0 !== this.code && (this.code = r.ReadCode(t),
                                this.code.isError()) || this.readFromSlice(t, 0)
                        }
                            ,
                            e
                    }()),
                    e("GameProtocol", function() {
                        function e() {
                            this.listener = new Map,
                                this.handler = []
                        }
                        var t = e.prototype;
                        return t.encode = function(e, t) {
                            var n = r.CreateADF(t);
                            return n.body = new o,
                                e.encode(n),
                                n
                        }
                            ,
                            t.decode = function(e) {
                                var t = new (0,
                                    this.response);
                                return t.decode(e),
                                    this.receive(e.head, t),
                                    e.body
                            }
                            ,
                            t.send = function(e, t, n) {
                                var r = a.gAngelSysAPI.getNetSysAPI().trySendData(this.getADFType(), e, !0);
                                t && this.listener.set(r, {
                                    callback: t,
                                    target: n
                                })
                            }
                            ,
                            t.on = function(e, t) {
                                this.handler.push({
                                    callback: e,
                                    target: t
                                })
                            }
                            ,
                            t.off = function(e, t) {
                                for (var n = this.handler.length - 1; n >= 0; n--) {
                                    var r = this.handler[n];
                                    r.callback === e && r.target === t && this.handler.splice(n, 1)
                                }
                            }
                            ,
                            t.receive = function(e, t) {
                                var n = this.listener.get(e.uiSerialNum);
                                n && (n.target ? n.callback.call(n.target, t) : n.callback(t),
                                    this.listener.delete(e.uiSerialNum));
                                for (var r = this.handler.length - 1; r >= 0; r--) {
                                    var o = this.handler[r];
                                    o.target ? o.callback.call(o.target, t) : o.callback(t)
                                }
                            }
                            ,
                            e
                    }());
                n._RF.pop()
            }
        }
    }
));
