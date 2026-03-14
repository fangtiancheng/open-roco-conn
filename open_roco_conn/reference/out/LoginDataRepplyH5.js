System.register("chunks:///_virtual/LoginDataRepplyH5.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./TCPTransmission.ts", "./P_ReturnCode222.ts", "./RoleData222.ts"], (function(e) {
        var n, t, r, i, a, o, u, l, c, p;
        return {
            setters: [function(e) {
                n = e.applyDecoratedDescriptor,
                    t = e.inheritsLoose,
                    r = e.initializerDefineProperty,
                    i = e.assertThisInitialized
            }
                , function(e) {
                    a = e.cclegacy
                }
                , function(e) {
                    o = e.DataType,
                        u = e.TCPDataType,
                        l = e.TCPTransmission
                }
                , function(e) {
                    c = e.P_ReturnCode222
                }
                , function(e) {
                    p = e.RoleData222
                }
            ],
            execute: function() {
                var s, f, y, b, D, T, g, m, R, C, P;
                a._RF.push({}, "a279aZkH3BCZ4+zGT5q+NFA", "LoginDataRepplyH5", void 0);
                e("LoginDataRepplyH5", (s = o(0, u.TCPDataType, c),
                    f = o(1, u.UInt16),
                    y = o(2, u.UInt16),
                    b = o(3, u.UInt16),
                    D = o(4, u.TCPDataType, p),
                    g = n((T = function(e) {
                        function n() {
                            for (var n, t = arguments.length, a = new Array(t), o = 0; o < t; o++)
                                a[o] = arguments[o];
                            return n = e.call.apply(e, [this].concat(a)) || this,
                                r(n, "returnCode", g, i(n)),
                                r(n, "roomID", m, i(n)),
                                r(n, "sceneID", R, i(n)),
                                r(n, "sceneVer", C, i(n)),
                                r(n, "mainRole", P, i(n)),
                                n
                        }
                        return t(n, e),
                            n
                    }(l)).prototype, "returnCode", [s], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return new c
                        }
                    }),
                    m = n(T.prototype, "roomID", [f], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    R = n(T.prototype, "sceneID", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    C = n(T.prototype, "sceneVer", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    P = n(T.prototype, "mainRole", [D], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return new p
                        }
                    }),
                    T));
                a._RF.pop()
            }
        }
    }
));
