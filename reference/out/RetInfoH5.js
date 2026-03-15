System.register("chunks:///_virtual/RetInfoH5.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./ByteBuffer.ts", "./BuildLogHelper.ts", "./TCPTransmission.ts"], (function(e) {
        var t, r, n, i, s, o, a, c, u, l, f, h, d;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    r = e.inheritsLoose,
                    n = e.createClass,
                    i = e.initializerDefineProperty,
                    s = e.assertThisInitialized
            }
                , function(e) {
                    o = e.cclegacy
                }
                , function(e) {
                    a = e.ReadUtils
                }
                , function(e) {
                    c = e.ByteBuffer
                }
                , function(e) {
                    u = e.default
                }
                , function(e) {
                    l = e.DataType,
                        f = e.CHARSET,
                        h = e.TCPDataType,
                        d = e.TCPTransmission
                }
            ],
            execute: function() {
                var g, p, y;
                o._RF.push({}, "974086oYFND6JqqycF+80+S", "RetInfoH5", void 0);
                e("nameInfo", (g = l(0, h.String, null, 0, f.GBK),
                    y = t((p = function(e) {
                        function t() {
                            for (var t, r = arguments.length, n = new Array(r), o = 0; o < r; o++)
                                n[o] = arguments[o];
                            return t = e.call.apply(e, [this].concat(n)) || this,
                                i(t, "ret_msg", y, s(t)),
                                t
                        }
                        return r(t, e),
                            t
                    }(d)).prototype, "ret_msg", [g], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return ""
                        }
                    }),
                    p)),
                    e("RetInfoH5", function(e) {
                        function t() {
                            for (var t, r = arguments.length, n = new Array(r), i = 0; i < r; i++)
                                n[i] = arguments[i];
                            return (t = e.call.apply(e, [this].concat(n)) || this).ret_code = 0,
                                t.ret_msg = "",
                                t.code = 0,
                                t.hasField = 0,
                                t
                        }
                        r(t, e);
                        var i = t.prototype;
                        return i.afterDecode = function(e) {
                            var t = new c(e.buffer);
                            this.readFromSlice(t, 0)
                        }
                            ,
                            i.readFromSlice = function(e, t) {
                                for (var r = 0, n = 0; e.bytesAvailable > t; ) {
                                    var i = a.readTYPE_UINT32(e)
                                        , s = i >>> 3;
                                    switch (console.log("tag", i),
                                        console.log("tagoffset3", s),
                                        s) {
                                        case 1:
                                            0 != r && u.IS_LOCAL,
                                                ++r,
                                                this.retCode = a.readTYPE_UINT32(e);
                                            break;
                                        case 2:
                                            0 != n && u.IS_LOCAL,
                                                ++n,
                                                this.retMsg = a.readTYPE_STRING(e);
                                            break;
                                        default:
                                            a.skip(e, 7 & i)
                                    }
                                }
                            }
                            ,
                            i.removeRetCode = function() {
                                this.hasField &= 4294967294,
                                    this.ret_code = 0
                            }
                            ,
                            i.removeRetMsg = function() {
                                this.ret_msg = null
                            }
                            ,
                            n(t, [{
                                key: "hasRetCode",
                                get: function() {
                                    return 0 != (1 & this.hasField)
                                }
                            }, {
                                key: "retCode",
                                get: function() {
                                    return this.hasRetCode ? this.ret_code : 0
                                },
                                set: function(e) {
                                    this.hasField |= 1,
                                        this.ret_code = e
                                }
                            }, {
                                key: "hasRetMsg",
                                get: function() {
                                    return null != this.ret_msg
                                }
                            }, {
                                key: "retMsg",
                                get: function() {
                                    return this.hasRetMsg ? this.ret_msg : ""
                                },
                                set: function(e) {
                                    this.ret_msg = e
                                }
                            }]),
                            t
                    }(d));
                o._RF.pop()
            }
        }
    }
));
