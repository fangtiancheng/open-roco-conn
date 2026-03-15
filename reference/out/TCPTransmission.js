System.register("chunks:///_virtual/TCPTransmission.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, r, n, a, i;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    r = t.inheritsLoose,
                    n = t.initializerDefineProperty,
                    a = t.assertThisInitialized
            }
                , function(t) {
                    i = t.cclegacy
                }
            ],
            execute: function() {
                var o, s, u, c, f, l, w, b, h, y, T, U, p, d, g, v, D, C, m, k, P, I;
                t("DataType", A),
                    i._RF.push({}, "011d2m2cR5LHLzIDVNk33IY", "TCPTransmission", void 0);
                var S = t("TCPDataType", function(t) {
                    return t.buff = "buff",
                        t.String = "String",
                        t.CustomString = "CustomString",
                        t.UInt32 = "UInt32",
                        t.UInt16 = "UInt16",
                        t.UInt8 = "UInt8",
                        t.UInt64 = "UInt64",
                        t.Boolean = "boolean",
                        t.TCPDataType = "TCPDataType",
                        t.Array = "Array",
                        t
                }({}));
                t("CHARSET", function(t) {
                    return t.UTF8 = "utf-8",
                        t.GBK = "gbk",
                        t
                }({}));
                function A(t, e, r, n, a) {
                    return void 0 === n && (n = 0),
                    void 0 === a && (a = "utf-8"),
                        function(i, o) {
                            var s = "__data_types__";
                            i[s] || (i[s] = []),
                                i[s].push([o, t, e, r, n, a]),
                                i[s].sort((function(t, e) {
                                        return t[1] - e[1]
                                    }
                                ))
                        }
                }
                var B = t("TCPTransmission", function() {
                    function t() {}
                    var e = t.prototype;
                    return e.writeUint8 = function(t, e, r) {
                        return isNaN(t) && (t = 0),
                            t = Math.floor(t),
                            new DataView(r.buffer).setUint8(e, t),
                            e += 1
                    }
                        ,
                        e.writeUint16 = function(t, e, r) {
                            return isNaN(t) && (t = 0),
                                t = Math.floor(t),
                                new DataView(r.buffer).setUint16(e, t),
                                e += 2
                        }
                        ,
                        e.writeUint32 = function(t, e, r) {
                            return isNaN(t) && (t = 0),
                                t = Math.floor(t),
                                new DataView(r.buffer).setUint32(e, t),
                                e += 4
                        }
                        ,
                        e.writeUint64 = function(t, e, r) {
                            isNaN(t) && (t = 0),
                                t = Math.floor(t);
                            var n = new DataView(r.buffer)
                                , a = Math.floor(t / Math.pow(2, 32))
                                , i = t % Math.pow(2, 32);
                            return n.setUint32(e, a),
                                e += 4,
                                n.setUint32(e, i),
                                e += 4
                        }
                        ,
                        e.writeBoolean = function(t, e, r) {
                            "boolean" != typeof t && (console.error("ArrayBuffer写入类型错误!!!"),
                                t = !1);
                            var n = t ? 1 : 0;
                            return new DataView(r.buffer).setUint8(e, n),
                                e += 1
                        }
                        ,
                        e.writeString = function(t, e, r, n) {
                            t = t || "";
                            var a = new DataView(n.buffer);
                            if (e > 0) {
                                a.setUint16(r, t.length),
                                    r += 2;
                                var i = (new TextEncoder).encode(t);
                                n.set(i, r),
                                    r += e
                            } else {
                                a.setUint16(r, t.length),
                                    r += 2;
                                var o = (new TextEncoder).encode(t);
                                n.set(o, r),
                                    r += t.length
                            }
                            return r
                        }
                        ,
                        e.writeCustomString = function(t, e, r, n) {
                            t = t || "";
                            var a = new DataView(n.buffer);
                            if (e > 0) {
                                var i = (new TextEncoder).encode(t);
                                n.set(i, r),
                                    r += e
                            } else {
                                a.setUint16(r, t.length),
                                    r += 2;
                                var o = (new TextEncoder).encode(t);
                                n.set(o, r),
                                    r += t.length
                            }
                            return r
                        }
                        ,
                        e.writeBuff = function(t, e, r, n) {
                            return t = t || new Uint8Array(e),
                                n.set(t, r),
                                r += e || t.length
                        }
                        ,
                        e.writeTCPDataType = function(e, r, n, a) {
                            if (!(e instanceof t))
                                throw new Error("TCPDataType is not TCPTransmission, the TCPDataType.TCPDataType must be TCPTransmission");
                            var i = e.encode();
                            if (0 == i.byteLength)
                                throw new Error("TCPDataType is not TCPTransmission, the TCPDataType.TCPDataType must be TCPTransmission");
                            return a.set(new Uint8Array(i), n),
                                n += i.byteLength
                        }
                        ,
                        e.writeArray = function(e, r, n, a, i) {
                            e = e || [],
                                new DataView(i.buffer).setUint32(a, e.length),
                                a += 4;
                            for (var o = 0; o < e.length; o++) {
                                var s = e[o];
                                switch (r) {
                                    case S.UInt8:
                                        a = this.writeUint8(s, a, i);
                                        break;
                                    case S.UInt16:
                                        a = this.writeUint16(s, a, i);
                                        break;
                                    case S.UInt32:
                                        a = this.writeUint32(s, a, i);
                                        break;
                                    case S.UInt64:
                                        a = this.writeUint64(s, a, i);
                                        break;
                                    case S.Boolean:
                                        a = this.writeBoolean(s, a, i);
                                        break;
                                    case S.String:
                                        a = this.writeString(s, n, a, i);
                                        break;
                                    case S.CustomString:
                                        a = this.writeCustomString(s, n, a, i);
                                        break;
                                    case S.Array:
                                        a = this.writeArray(s, r, n, a, i)
                                }
                                var u = r;
                                if (r == S.TCPDataType || "function" == typeof r && new u instanceof t) {
                                    var c = this.writeTCPDataType(s, r, a, i);
                                    n ? a += n : a = c
                                }
                            }
                            return a
                        }
                        ,
                        e.readUint8 = function(t, e) {
                            return [new DataView(e.buffer).getUint8(t), t += 1]
                        }
                        ,
                        e.readUint16 = function(t, e) {
                            return [new DataView(e.buffer).getUint16(t), t += 2]
                        }
                        ,
                        e.readUint32 = function(t, e) {
                            return [new DataView(e.buffer).getUint32(t), t += 4]
                        }
                        ,
                        e.readUint64 = function(t, e) {
                            var r = new DataView(e.buffer)
                                , n = r.getUint32(t);
                            t += 4;
                            var a = r.getUint32(t);
                            return t += 4,
                                [n * Math.pow(2, 32) + a, t]
                        }
                        ,
                        e.readBoolean = function(t, e) {
                            var r = new DataView(e.buffer).getUint8(t)
                                , n = !1;
                            return 0 == r ? n = !1 : 1 == r ? n = !0 : (n = !0,
                                console.error("readBoolean 参数错误！！！")),
                                [n, t += 1]
                        }
                        ,
                        e.readString = function(t, e, r, n) {
                            var a = new DataView(r.buffer)
                                , i = e || a.getUint16(t);
                            return t += 2,
                                [new TextDecoder(n.length > 0 ? n : "utf-8").decode(r.slice(t, t + i)), t += e || i]
                        }
                        ,
                        e.readCustomString = function(t, e, r, n) {
                            new DataView(r.buffer);
                            var a = e
                                , i = new TextDecoder(n.length > 0 ? n : "utf-8")
                                , o = r.slice(t, t + a);
                            return [i.decode(o), t += e || a]
                        }
                        ,
                        e.readBuff = function(t, e, r) {
                            return [r.slice(t, t + e), t += e]
                        }
                        ,
                        e.readTCPDataType = function(t, e, r) {
                            var n = new e
                                , a = n.decode(r.slice(t))
                                , i = a[0];
                            a[1];
                            return [n, t += i]
                        }
                        ,
                        e.readArray = function(e, r, n, a, i, o) {
                            for (var s = [], u = 0; u < r; u++) {
                                var c = null
                                    , f = 0;
                                switch (n) {
                                    case S.UInt8:
                                        var l = this.readUint8(e, i);
                                        c = l[0],
                                            f = l[1];
                                        break;
                                    case S.UInt16:
                                        var w = this.readUint16(e, i);
                                        c = w[0],
                                            f = w[1];
                                        break;
                                    case S.UInt32:
                                        var b = this.readUint32(e, i);
                                        c = b[0],
                                            f = b[1];
                                        break;
                                    case S.UInt64:
                                        var h = this.readUint64(e, i);
                                        c = h[0],
                                            f = h[1];
                                        break;
                                    case S.Boolean:
                                        var y = this.readBoolean(e, i);
                                        c = y[0],
                                            f = y[1];
                                        break;
                                    case S.String:
                                        var T = this.readString(e, a, i, o);
                                        c = T[0],
                                            f = T[1];
                                        break;
                                    case S.CustomString:
                                        var U = this.readCustomString(e, a, i, o);
                                        c = U[0],
                                            f = U[1];
                                        break;
                                    case S.TCPDataType:
                                        var p = this.readTCPDataType(e, n, i);
                                        c = p[0],
                                            f = p[1];
                                        break;
                                    case S.Array:
                                        var d, g = this.readUint32(e, i);
                                        d = g[0],
                                            f = g[1];
                                        var v = this.readArray(f, d, n, a, i, o);
                                        c = v[0],
                                            f = v[1]
                                }
                                var D = n;
                                if (n == S.TCPDataType || "function" == typeof n && new D instanceof t) {
                                    var C = this.readTCPDataType(e, n, i);
                                    c = C[0],
                                        f = C[1],
                                    a && (f = a)
                                }
                                s.push(c),
                                    e = f
                            }
                            return [s, e]
                        }
                        ,
                        e.encode = function() {
                            for (var t = this.__data_types__, e = new Uint8Array(4096), r = e.byteOffset, n = 0; n < t.length; n++) {
                                var a = t[n]
                                    , i = a[0]
                                    , o = (a[1],
                                    a[2])
                                    , s = a[3]
                                    , u = a[4]
                                    , c = (a[5],
                                    this[i]);
                                switch (o) {
                                    case S.UInt8:
                                        r = this.writeUint8(c, r, e);
                                        break;
                                    case S.UInt16:
                                        r = this.writeUint16(c, r, e);
                                        break;
                                    case S.UInt32:
                                        r = this.writeUint32(c, r, e);
                                        break;
                                    case S.UInt64:
                                        r = this.writeUint64(c, r, e);
                                        break;
                                    case S.Boolean:
                                        r = this.writeBoolean(c, r, e);
                                        break;
                                    case S.String:
                                        r = this.writeString(c, u, r, e);
                                        break;
                                    case S.CustomString:
                                        r = this.writeCustomString(c, u, r, e);
                                        break;
                                    case S.buff:
                                        r = this.writeBuff(c, u, r, e);
                                        break;
                                    case S.TCPDataType:
                                        r = this.writeTCPDataType(c, s, r, e);
                                        break;
                                    case S.Array:
                                        r = this.writeArray(c, s, u, r, e)
                                }
                            }
                            return e.buffer.slice(0, r)
                        }
                        ,
                        e.decode = function(t) {
                            var e = this.__data_types__;
                            null != e && null != e || (e = []);
                            for (var r = t.byteOffset, n = 0; n < e.length; n++) {
                                var a = e[n]
                                    , i = a[0]
                                    , o = (a[1],
                                    a[2])
                                    , s = a[3]
                                    , u = a[4]
                                    , c = a[5]
                                    , f = 0
                                    , l = null;
                                switch (o) {
                                    case S.UInt8:
                                        var w = this.readUint8(r, t);
                                        l = w[0],
                                            f = w[1];
                                        break;
                                    case S.UInt16:
                                        var b = this.readUint16(r, t);
                                        l = b[0],
                                            f = b[1];
                                        break;
                                    case S.UInt32:
                                        var h = this.readUint32(r, t);
                                        l = h[0],
                                            f = h[1];
                                        break;
                                    case S.UInt64:
                                        var y = this.readUint64(r, t);
                                        l = y[0],
                                            f = y[1];
                                        break;
                                    case S.Boolean:
                                        var T = this.readBoolean(r, t);
                                        l = T[0],
                                            f = T[1];
                                        break;
                                    case S.String:
                                        var U = this.readString(r, u, t, c);
                                        l = U[0],
                                            f = U[1];
                                        break;
                                    case S.CustomString:
                                        var p = this.readCustomString(r, u, t, c);
                                        l = p[0],
                                            f = p[1];
                                        break;
                                    case S.buff:
                                        var d = this.readBuff(r, u, t);
                                        l = d[0],
                                            f = d[1];
                                        break;
                                    case S.TCPDataType:
                                        var g = this.readTCPDataType(r, s, t);
                                        l = g[0],
                                            f = g[1];
                                        break;
                                    case S.Array:
                                        var v, D = this.readUint32(r, t);
                                        v = D[0],
                                            f = D[1];
                                        var C = this.readArray(f, v, s, u, t, c);
                                        l = C[0],
                                            f = C[1]
                                }
                                r = f,
                                    this[i] = l
                            }
                            return this.afterDecode(t),
                                [r, this]
                        }
                        ,
                        e.afterDecode = function(t) {}
                        ,
                        t
                }())
                    , _ = t("SubDemoTCPTransmission", (o = A(1, S.UInt8),
                    u = e((s = function(t) {
                        function e() {
                            for (var e, r = arguments.length, i = new Array(r), o = 0; o < r; o++)
                                i[o] = arguments[o];
                            return e = t.call.apply(t, [this].concat(i)) || this,
                                n(e, "uint8", u, a(e)),
                                e
                        }
                        return r(e, t),
                            e
                    }(B)).prototype, "uint8", [o], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    s))
                    , V = t("DemoTCPTransmission", (c = A(1, S.UInt8),
                    f = A(2, S.UInt16),
                    l = A(3, S.UInt32),
                    w = A(4, S.UInt64),
                    b = A(5, S.String, null, 10),
                    h = A(6, S.TCPDataType, _),
                    y = A(7, S.Array, S.UInt8),
                    T = A(8, S.Array, S.String, 10),
                    U = A(9, S.Array, _, 0),
                    d = e((p = function(t) {
                        function e() {
                            for (var e, r = arguments.length, i = new Array(r), o = 0; o < r; o++)
                                i[o] = arguments[o];
                            return e = t.call.apply(t, [this].concat(i)) || this,
                                n(e, "uint8", d, a(e)),
                                n(e, "uint16", g, a(e)),
                                n(e, "uint32", v, a(e)),
                                n(e, "uint64", D, a(e)),
                                n(e, "string", C, a(e)),
                                n(e, "tcpDataType", m, a(e)),
                                n(e, "array", k, a(e)),
                                n(e, "arrayString", P, a(e)),
                                n(e, "arrayTCPDataType", I, a(e)),
                                e
                        }
                        return r(e, t),
                            e
                    }(B)).prototype, "uint8", [c], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    g = e(p.prototype, "uint16", [f], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    v = e(p.prototype, "uint32", [l], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    D = e(p.prototype, "uint64", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    C = e(p.prototype, "string", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return ""
                        }
                    }),
                    m = e(p.prototype, "tcpDataType", [h], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return new _
                        }
                    }),
                    k = e(p.prototype, "array", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    P = e(p.prototype, "arrayString", [T], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    I = e(p.prototype, "arrayTCPDataType", [U], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    p));
                t("DemoTest", function() {
                    function t() {}
                    return t.test = function() {
                        var t = new V;
                        t.uint8 = 11,
                            t.uint16 = 22222,
                            t.uint32 = 3333333333,
                            t.uint64 = 0x3dadd6acaf11c800,
                            t.string = "Hello World",
                            t.array = [10, 20, 30, 40, 50],
                            t.arrayString = ["Hello", "World"];
                        var e = new _;
                        e.uint8 = 1;
                        var r = new _;
                        r.uint8 = 2,
                            t.arrayTCPDataType = [e, r];
                        var n = t.encode();
                        console.log(n);
                        var a = (new V).decode(new Uint8Array(n));
                        console.log(a)
                    }
                        ,
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
