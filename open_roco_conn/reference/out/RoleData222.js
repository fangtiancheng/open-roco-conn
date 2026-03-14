System.register("chunks:///_virtual/RoleData222.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./RoleData.ts", "./TCPTransmission.ts"], (function(e) {
        var i, t, r, n, a, o, l, u, p, c;
        return {
            setters: [function(e) {
                i = e.applyDecoratedDescriptor,
                    t = e.inheritsLoose,
                    r = e.initializerDefineProperty,
                    n = e.assertThisInitialized
            }
                , function(e) {
                    a = e.cclegacy
                }
                , function(e) {
                    o = e.RoleData
                }
                , function(e) {
                    l = e.DataType,
                        u = e.TCPDataType,
                        p = e.CHARSET,
                        c = e.TCPTransmission
                }
            ],
            execute: function() {
                var b, f, s, y, m, g, T, w, I, z, v, U, h, D, d, R, S, E, k, L, M, C, P, B, V, F, G, Y, x, N, _, j, A, H, K, O, X, W, q, J, Q, Z, $, ee, ie, te, re, ne, ae, oe, le, ue;
                a._RF.push({}, "62a8d7czfpPWYnuj1YDbc6N", "RoleData222", void 0);
                e("RoleData222", (b = l(0, u.UInt32),
                    f = l(1, u.CustomString, null, 16, p.GBK),
                    s = l(2, u.UInt16),
                    y = l(3, u.UInt32),
                    m = l(4, u.UInt16),
                    g = l(5, u.CustomString, null, 32, p.GBK),
                    T = l(6, u.UInt16),
                    w = l(7, u.UInt16),
                    I = l(8, u.UInt16),
                    z = l(9, u.UInt8),
                    v = l(10, u.UInt8),
                    U = l(11, u.UInt32),
                    h = l(12, u.UInt8),
                    D = l(13, u.UInt32),
                    d = l(14, u.UInt16),
                    R = l(15, u.UInt16),
                    S = l(16, u.UInt16),
                    E = l(17, u.UInt16),
                    k = l(18, u.UInt32),
                    L = l(19, u.UInt8),
                    M = l(20, u.UInt16),
                    C = l(21, u.UInt16),
                    P = l(22, u.UInt16),
                    B = l(23, u.UInt16),
                    V = l(24, u.UInt16),
                    (ue = function(e) {
                        function i() {
                            for (var i, t = arguments.length, a = new Array(t), o = 0; o < t; o++)
                                a[o] = arguments[o];
                            return (i = e.call.apply(e, [this].concat(a)) || this).id = 0,
                                i.uin = 0,
                                i.roleType = 0,
                                r(i, "avatarType", G, n(i)),
                                r(i, "nickName", Y, n(i)),
                                r(i, "level", x, n(i)),
                                r(i, "skinType", N, n(i)),
                                r(i, "avatarVersion", _, n(i)),
                                r(i, "avatarURL", j, n(i)),
                                r(i, "locX", A, n(i)),
                                r(i, "locY", H, n(i)),
                                r(i, "direction", K, n(i)),
                                r(i, "stateType", O, n(i)),
                                r(i, "isFlying", X, n(i)),
                                r(i, "flyItem", W, n(i)),
                                r(i, "isSwiming", q, n(i)),
                                r(i, "swimItem", J, n(i)),
                                r(i, "cursedType", Q, n(i)),
                                r(i, "flashType", Z, n(i)),
                                r(i, "summonType", $, n(i)),
                                r(i, "rideType", ee, n(i)),
                                r(i, "spiritID", ie, n(i)),
                                r(i, "isVip", te, n(i)),
                                r(i, "vipLevel", re, n(i)),
                                r(i, "vipExpiringDays", ne, n(i)),
                                r(i, "vipLulu", ae, n(i)),
                                r(i, "isMagicOffset", oe, n(i)),
                                r(i, "pkState", le, n(i)),
                                i
                        }
                        return t(i, e),
                            i.prototype.afterDecode = function() {
                                this.id = this.avatarType,
                                    this.uin = this.avatarType,
                                    this.roleType = this.uin > 1e4 ? o.MEMBER : o.GUEST,
                                    this.avatarType < 1e4 ? this.avatarType = 9527 : 0 == this.avatarVersion && (this.avatarType = this.skinType)
                            }
                            ,
                            i
                    }(c)).GUEST = 0,
                    ue.MEMBER = 1,
                    G = i((F = ue).prototype, "avatarType", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    Y = i(F.prototype, "nickName", [f], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return ""
                        }
                    }),
                    x = i(F.prototype, "level", [s], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    N = i(F.prototype, "skinType", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    _ = i(F.prototype, "avatarVersion", [m], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    j = i(F.prototype, "avatarURL", [g], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return ""
                        }
                    }),
                    A = i(F.prototype, "locX", [T], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    H = i(F.prototype, "locY", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    K = i(F.prototype, "direction", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    O = i(F.prototype, "stateType", [z], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    X = i(F.prototype, "isFlying", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    W = i(F.prototype, "flyItem", [U], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    q = i(F.prototype, "isSwiming", [h], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    J = i(F.prototype, "swimItem", [D], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    Q = i(F.prototype, "cursedType", [d], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    Z = i(F.prototype, "flashType", [R], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    $ = i(F.prototype, "summonType", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    ee = i(F.prototype, "rideType", [E], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    ie = i(F.prototype, "spiritID", [k], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    te = i(F.prototype, "isVip", [L], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    re = i(F.prototype, "vipLevel", [M], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    ne = i(F.prototype, "vipExpiringDays", [C], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    ae = i(F.prototype, "vipLulu", [P], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    oe = i(F.prototype, "isMagicOffset", [B], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    le = i(F.prototype, "pkState", [V], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 0
                        }
                    }),
                    F));
                a._RF.pop()
            }
        }
    }
));
