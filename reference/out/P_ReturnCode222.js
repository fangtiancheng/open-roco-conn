System.register("chunks:///_virtual/P_ReturnCode222.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./TCPTransmission.ts"], (function(e) {
        var t, n, r, o, i, a, c, s;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    n = e.inheritsLoose,
                    r = e.initializerDefineProperty,
                    o = e.assertThisInitialized
            }
                , function(e) {
                    i = e.cclegacy
                }
                , function(e) {
                    a = e.DataType,
                        c = e.TCPDataType,
                        s = e.TCPTransmission
                }
            ],
            execute: function() {
                var u, l, d, p, f, y;
                i._RF.push({}, "0372eLmmE9ADo7QNWwj0Pfd", "P_ReturnCode222", void 0);
                e("P_ReturnCode222", (u = a(1, c.UInt32),
                    l = a(2, c.String),
                    (y = function(e) {
                        function t() {
                            for (var t, n = arguments.length, i = new Array(n), a = 0; a < n; a++)
                                i[a] = arguments[a];
                            return t = e.call.apply(e, [this].concat(i)) || this,
                                r(t, "code", p, o(t)),
                                r(t, "message", f, o(t)),
                                t
                        }
                        n(t, e);
                        var i = t.prototype;
                        return i.isError = function() {
                            return this.code != t.OK
                        }
                            ,
                            i.decode = function(t) {
                                return this.sendLogByU8(t, "decode"),
                                    e.prototype.decode.call(this, t)
                            }
                            ,
                            i.encode = function() {
                                var t = e.prototype.encode.call(this);
                                return this.sendLogByU8(new Uint8Array(t), "encode"),
                                    t
                            }
                            ,
                            i.sendLogByU8 = function(e, t) {
                                void 0 === t && (t = "");
                                for (var n = "", r = 0; r < e.byteLength; r++)
                                    n += e[r].toString().padStart(2, "0") + " ";
                                console.log("P_ReturnCode-Uint8Array : " + t, n)
                            }
                            ,
                            t
                    }(s)).OK = 0,
                    p = t((d = y).prototype, "code", [u], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    f = t(d.prototype, "message", [l], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return ""
                        }
                    }),
                    d));
                i._RF.pop()
            }
        }
    }
));
