System.register("chunks:///_virtual/LadderFightMatchResult_C2S.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./TCPTransmission.ts"], (function(t) {
        var e, i, n, r, a, s, o, c;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    i = t.inheritsLoose,
                    n = t.initializerDefineProperty,
                    r = t.assertThisInitialized
            }
                , function(t) {
                    a = t.cclegacy
                }
                , function(t) {
                    s = t.DataType,
                        o = t.TCPDataType,
                        c = t.TCPTransmission
                }
            ],
            execute: function() {
                var u, l, h;
                a._RF.push({}, "aa029i6HQ5Iyo6V2JhI3Ych", "LadderFightMatchResult_C2S", void 0);
                t("LadderFightMatchResult_C2S", (u = s(0, o.UInt32),
                    h = e((l = function(t) {
                        function e() {
                            for (var e, i = arguments.length, a = new Array(i), s = 0; s < i; s++)
                                a[s] = arguments[s];
                            return e = t.call.apply(t, [this].concat(a)) || this,
                                n(e, "uin", h, r(e)),
                                e
                        }
                        return i(e, t),
                            e
                    }(c)).prototype, "uin", [u], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    l));
                a._RF.pop()
            }
        }
    }
));
