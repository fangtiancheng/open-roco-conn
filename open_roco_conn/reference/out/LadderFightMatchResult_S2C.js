System.register("chunks:///_virtual/LadderFightMatchResult_S2C.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./TCPTransmission.ts", "./RetInfoH5.ts"], (function(t) {
        var e, n, i, r, a, o, c, u, p;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    n = t.inheritsLoose,
                    i = t.initializerDefineProperty,
                    r = t.assertThisInitialized
            }
                , function(t) {
                    a = t.cclegacy
                }
                , function(t) {
                    o = t.DataType,
                        c = t.TCPDataType,
                        u = t.TCPTransmission
                }
                , function(t) {
                    p = t.RetInfoH5
                }
            ],
            execute: function() {
                var l, s, f, y, h, T, d;
                a._RF.push({}, "684c0TnV3ZA9p0Q/BvApOWE", "LadderFightMatchResult_S2C", void 0);
                t("LadderFightMatchResult_S2C", (l = o(0, c.TCPDataType, p),
                    s = o(1, c.UInt32),
                    f = o(2, c.UInt32),
                    h = e((y = function(t) {
                        function e() {
                            for (var e, n = arguments.length, a = new Array(n), o = 0; o < n; o++)
                                a[o] = arguments[o];
                            return e = t.call.apply(t, [this].concat(a)) || this,
                                i(e, "tcpDataType", h, r(e)),
                                i(e, "type", T, r(e)),
                                i(e, "npc_id", d, r(e)),
                                e
                        }
                        return n(e, t),
                            e
                    }(u)).prototype, "tcpDataType", [l], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return new p
                        }
                    }),
                    T = e(y.prototype, "type", [s], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    d = e(y.prototype, "npc_id", [f], {
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
