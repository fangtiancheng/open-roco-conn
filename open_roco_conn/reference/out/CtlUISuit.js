System.register("chunks:///_virtual/CtlUISuit.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./MarketConfig.ts", "./global.ts", "./Constants.ts", "./MarketSuitItemUI.ts"], (function(t) {
        var e, i, n, r, a, o, s, u, c, l, f, h;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    i = t.inheritsLoose,
                    n = t.initializerDefineProperty,
                    r = t.assertThisInitialized,
                    a = t.createClass
            }
                , function(t) {
                    o = t.cclegacy,
                        s = t._decorator,
                        u = t.Component
                }
                , function(t) {
                    c = t.MarketConfig
                }
                , function(t) {
                    l = t.__global
                }
                , function(t) {
                    f = t.Constants
                }
                , function(t) {
                    h = t.MarketSuitItemUI
                }
            ],
            execute: function() {
                var p, I, S, g;
                o._RF.push({}, "9b7d4hbEOhAbohJ6HOPAaD6", "CtlUISuit", void 0);
                var d = s.ccclass
                    , m = s.property;
                t("CtlUISuit", (p = m(h),
                d((g = e((S = function(t) {
                    function e() {
                        for (var e, i = arguments.length, a = new Array(i), o = 0; o < i; o++)
                            a[o] = arguments[o];
                        return e = t.call.apply(t, [this].concat(a)) || this,
                            n(e, "ctlSuitItem", g, r(e)),
                            e.m_data = void 0,
                            e
                    }
                    i(e, t);
                    var o = e.prototype;
                    return o.onLoad = function() {}
                        ,
                        o.setData = function(t) {
                            this.m_data = t,
                                this.rushUI()
                        }
                        ,
                        e.getDazzleScore = function(t) {
                            var e = l.SysAPI.getGDataAPI().getDataProxy(f.DAZZLE_DRESS_DATA).select(t);
                            return null != e ? e.score : 0
                        }
                        ,
                        e.getSuitDazzleScore = function(t) {
                            var e = 0
                                , i = t.items.length;
                            i > 8 && (i = 8);
                            for (var n = 0; n < i; n++)
                                e += this.getDazzleScore(t.items[n].id);
                            return e
                        }
                        ,
                        o.rushUI = function() {
                            for (var t = 0; t < c.SUIT_MAX_NUM_PERPAGE; t++)
                                if (t < this.m_data.length) {
                                    var e = this.m_data[t];
                                    this.ctlSuitItem[t].rushUI(e)
                                } else
                                    this.ctlSuitItem[t].visible = !1
                        }
                        ,
                        o.dispose = function() {}
                        ,
                        a(e, [{
                            key: "data",
                            get: function() {
                                return this.m_data
                            }
                        }]),
                        e
                }(u)).prototype, "ctlSuitItem", [p], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }),
                    I = S)) || I));
                o._RF.pop()
            }
        }
    }
));
