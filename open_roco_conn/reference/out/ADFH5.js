System.register("chunks:///_virtual/ADFH5.ts", ["cc", "./LoginDataRepplyByBuffer.ts", "./ProtoManager.ts", "./LadderMatchNetCmdsType.ts", "./tagADFHeadH5.ts", "./ADFCmdsType.ts"], (function(e) {
        var t, n, a, d, i;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    e.LoginDataRepplyByBuffer
                }
                , function(e) {
                    n = e.default
                }
                , function(e) {
                    a = e.LadderMatchNetCmdsType
                }
                , function(e) {
                    d = e.tagADFHeadH5
                }
                , function(e) {
                    i = e.ADFCmdsType
                }
            ],
            execute: function() {
                t._RF.push({}, "ace96UdafhIW7yejpbTWaTS", "ADFH5", void 0);
                e("ADFH5", function() {
                    function e() {
                        this.head = new d,
                            this.body = null
                    }
                    e.create = function(t) {
                        var n, a = new e, d = null == (n = i.ALL_FREE_TS_WITH_CLASS.find((function(e) {
                                return e[1] == t
                            }
                        ))) ? void 0 : n[0];
                        return t && (a.body = new t),
                        t && !d && console.error("未找到对应的协议ID，cls = ", t),
                            a.head.cmdID = d,
                            a
                    }
                    ;
                    var t = e.prototype;
                    return t.encode = function() {
                        var e = this.body.encode();
                        this.head.length = e.byteLength;
                        for (var t = this.head.encode(), n = new ArrayBuffer(t.byteLength + e.byteLength), a = new DataView(n), d = new DataView(t), i = new DataView(e), o = 0; o < t.byteLength; o++)
                            a.setUint8(o, d.getUint8(o));
                        for (var r = 0; r < e.byteLength; r++)
                            a.setUint8(r + t.byteLength, i.getUint8(r));
                        return n
                    }
                        ,
                        t.decode = function(e) {
                            var t, o = this;
                            this.sendLogByU8(new Uint8Array(e), "解析协议体成功before");
                            var r = e.slice(0, d.HeadLen)
                                , s = new Uint8Array(r);
                            this.head.decode(s);
                            var c = e.slice(d.HeadLen, d.HeadLen + this.head.length)
                                , h = new Uint8Array(c)
                                , u = null == (t = i.ALL_FREE_TS_WITH_CLASS_REPPY.find((function(e) {
                                    return e[0] == o.head.cmdID
                                }
                            ))) ? void 0 : t[1];
                            if (u) {
                                this.head.cmdID,
                                    i.T_LoginRoom;
                                var y = "0x0" + this.head.cmdID.toString(16).padStart(5, "0")
                                    , f = "解析协议体成功,cmdID=" + this.head.cmdID + "=hex=" + y;
                                this.sendLogByU8(h, f),
                                    this.body = new u,
                                    this.body.decode(h),
                                    console.log(this.body)
                            } else {
                                var g = "0x0" + this.head.cmdID.toString(16).padStart(5, "0");
                                if (console.error("未找到对应的协议体,cmdID=" + this.head.cmdID + "=hex=" + g),
                                this.head.cmdID == a.T_Match)
                                    n.Instance.DeserializeMsg("PTB_0x0B0519_LadderFightMatchResult_S2C", h)
                            }
                            return this
                        }
                        ,
                        t.sendLogByU8 = function(e, t) {
                            void 0 === t && (t = "");
                            for (var n = "", a = 0; a < e.byteLength; a++)
                                n += e[a].toString(16).padStart(2, "0") + " ";
                            console.log("sendLogByU8 : " + t, n)
                        }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
