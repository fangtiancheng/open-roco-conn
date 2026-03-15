System.register("chunks:///_virtual/tagRecommendReqData.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./TCPTransmission.ts"], (function(t) {
        var e, n, o, r, i, u, a, s;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    n = t.inheritsLoose,
                    o = t.initializerDefineProperty,
                    r = t.assertThisInitialized
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    u = t.DataType,
                        a = t.TCPDataType,
                        s = t.TCPTransmission
                }
            ],
            execute: function() {
                var c, l, m, p, f, R, b, y, C;
                i._RF.push({}, "55e3bhJnoJMY7t8S4PMICHH", "tagRecommendReqData", void 0);
                t("tagRecommendReqData", (c = u(1, a.UInt16),
                    l = u(2, a.UInt16),
                    m = u(3, a.UInt16),
                    p = u(4, a.UInt16),
                    R = e((f = function(t) {
                        function e() {
                            for (var e, n = arguments.length, i = new Array(n), u = 0; u < n; u++)
                                i[u] = arguments[u];
                            return e = t.call.apply(t, [this].concat(i)) || this,
                                o(e, "usHistoryRoomCount", R, r(e)),
                                o(e, "usHotRoomCount", b, r(e)),
                                o(e, "usLessRoomCount", y, r(e)),
                                o(e, "usOtherRoomCount", C, r(e)),
                                e
                        }
                        return n(e, t),
                            e
                    }(s)).prototype, "usHistoryRoomCount", [c], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    b = e(f.prototype, "usHotRoomCount", [l], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    y = e(f.prototype, "usLessRoomCount", [m], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    C = e(f.prototype, "usOtherRoomCount", [p], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    f));
                i._RF.pop()
            }
        }
    }
));
