System.register("chunks:///_virtual/LoginVipRewardUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./GiftCenterCommonTips.ts", "./GiftCenterLoginConfig.ts"], (function(i) {
        var n, t, o, e, r, s, c, a, u, h, p, f;
        return {
            setters: [function(i) {
                n = i.applyDecoratedDescriptor,
                    t = i.inheritsLoose,
                    o = i.initializerDefineProperty,
                    e = i.assertThisInitialized
            }
                , function(i) {
                    r = i.cclegacy,
                        s = i._decorator,
                        c = i.Node,
                        a = i.sys,
                        u = i.NodeEventType
                }
                , function(i) {
                    h = i.GameSubUI
                }
                , function(i) {
                    p = i.GiftCenterCommonTips
                }
                , function(i) {
                    f = i.GiftCenterLoginConfig
                }
            ],
            execute: function() {
                var l, T, d, C, g, b;
                r._RF.push({}, "aaf8beSwydK/rgaMRaZz9Zd", "LoginVipRewardUI", void 0);
                var y = s.ccclass
                    , R = s.property;
                i("LoginVipRewardUI", (l = R(p),
                    T = R(c),
                y((g = n((C = function(i) {
                    function n() {
                        for (var n, t = arguments.length, r = new Array(t), s = 0; s < t; s++)
                            r[s] = arguments[s];
                        return n = i.call.apply(i, [this].concat(r)) || this,
                            o(n, "iconTips", g, e(n)),
                            o(n, "icons", b, e(n)),
                            n
                    }
                    t(n, i);
                    var r = n.prototype;
                    return r.onLoad = function() {
                        for (var i = 0; i < 8; i++)
                            a.platform === a.Platform.MOBILE_BROWSER ? (this.icons[i].on(u.TOUCH_START, this.onTouchStart.bind(this, i), this, !0),
                                this.icons[i].on(u.TOUCH_CANCEL, this.onTouchCancel.bind(this, i), this, !0)) : (this.icons[i].on(u.MOUSE_ENTER, this.onTouchStart.bind(this, i), this),
                                this.icons[i].on(u.MOUSE_LEAVE, this.onTouchCancel.bind(this, i), this)),
                                this.iconTips[i].setTips(f.VIP_REWARD[i])
                    }
                        ,
                        r.onTouchStart = function(i) {
                            this.iconTips[i].node.active = !0
                        }
                        ,
                        r.onTouchCancel = function(i) {
                            this.iconTips[i].node.active = !1
                        }
                        ,
                        n
                }(h)).prototype, "iconTips", [l], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }),
                    b = n(C.prototype, "icons", [T], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    d = C)) || d));
                r._RF.pop()
            }
        }
    }
));
