System.register("chunks:///_virtual/tagADFHeadH5.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./TCPTransmission.ts"], (function(e) {
        var i, n, t, r, a, o, u, l;
        return {
            setters: [function(e) {
                i = e.applyDecoratedDescriptor,
                    n = e.inheritsLoose,
                    t = e.initializerDefineProperty,
                    r = e.assertThisInitialized
            }
                , function(e) {
                    a = e.cclegacy
                }
                , function(e) {
                    o = e.DataType,
                        u = e.TCPDataType,
                        l = e.TCPTransmission
                }
            ],
            execute: function() {
                var c, p, s, f, b, g, m, y, d, h, D, I, z, H, v, w;
                a._RF.push({}, "98931R7XgNPWIeGUARpDjM8", "tagADFHeadH5", void 0);
                var T = e("tagADFHeadH5", (c = o(0, u.UInt16),
                    p = o(1, u.UInt16),
                    s = o(2, u.UInt32),
                    f = o(3, u.UInt32),
                    b = o(4, u.UInt32),
                    g = o(5, u.UInt16),
                    m = o(6, u.UInt16),
                    (w = function(e) {
                        function i() {
                            for (var i, n = arguments.length, a = new Array(n), o = 0; o < n; o++)
                                a[o] = arguments[o];
                            return i = e.call.apply(e, [this].concat(a)) || this,
                                t(i, "magic", d, r(i)),
                                t(i, "version", h, r(i)),
                                t(i, "cmdID", D, r(i)),
                                t(i, "uin", I, r(i)),
                                t(i, "uiSerialNum", z, r(i)),
                                t(i, "checkSum", H, r(i)),
                                t(i, "length", v, r(i)),
                                i
                        }
                        return n(i, e),
                            i
                    }(l)).NotEnBytes = 0,
                    w.MagicError = -1,
                    w.HeadReady = 1,
                    w.HeadLen = 20,
                    w.magic = 38183,
                    d = i((y = w).prototype, "magic", [c], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return T.magic
                        }
                    }),
                    h = i(y.prototype, "version", [p], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    D = i(y.prototype, "cmdID", [s], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    I = i(y.prototype, "uin", [f], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    z = i(y.prototype, "uiSerialNum", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    H = i(y.prototype, "checkSum", [g], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    v = i(y.prototype, "length", [m], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    y));
                a._RF.pop()
            }
        }
    }
));
