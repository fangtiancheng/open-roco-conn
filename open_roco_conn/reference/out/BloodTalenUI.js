System.register("chunks:///_virtual/BloodTalenUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./BloodTalenMessage.ts", "./BloodTalenPageToggle.ts", "./BloodTalentAwakePage.ts", "./BloodTalenExpeditionPage.ts", "./BloodTalenCGI.ts"], (function(e) {
        var t, a, n, i, o, r, l, s, g, c, u, f, h, p, d;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    a = e.inheritsLoose,
                    n = e.initializerDefineProperty,
                    i = e.assertThisInitialized
            }
                , function(e) {
                    o = e.cclegacy,
                        r = e._decorator,
                        l = e.Node,
                        s = e.NodeEventType
                }
                , function(e) {
                    g = e.GameUI
                }
                , function(e) {
                    c = e.BloodTalenMessage,
                        u = e.MainViewPage
                }
                , function(e) {
                    f = e.BloodTalenPageToggle
                }
                , function(e) {
                    h = e.BloodTalentAwakePage
                }
                , function(e) {
                    p = e.BloodTalenExpeditionPage
                }
                , function(e) {
                    d = e.GetTalenAwakeData
                }
            ],
            execute: function() {
                var P, w, I, B, v, y, T, b, k, D;
                o._RF.push({}, "5d9daIO7E1NnquACDGQLBDy", "BloodTalenUI", void 0);
                var x = r.ccclass
                    , A = r.property;
                e("BloodTalenUI", (P = A(l),
                    w = A(h),
                    I = A(p),
                    B = A(f),
                x((T = t((y = function(e) {
                    function t() {
                        for (var t, a = arguments.length, o = new Array(a), r = 0; r < a; r++)
                            o[r] = arguments[r];
                        return t = e.call.apply(e, [this].concat(o)) || this,
                            n(t, "closeBtn", T, i(t)),
                            n(t, "awakePage", b, i(t)),
                            n(t, "expeditionPage", k, i(t)),
                            n(t, "pageList", D, i(t)),
                            t.curPage = null,
                            t
                    }
                    a(t, e);
                    var o = t.prototype;
                    return o.onLoad = function() {
                        this.closeBtn.on(s.TOUCH_END, this.onCloseBtn, this),
                            this.onInitPages()
                    }
                        ,
                        o.onInitPages = function() {
                            for (var e = 0; e < this.pageList.length; e++) {
                                var t = this.pageList[e];
                                t.onChangePage = this.onChangePage.bind(this),
                                    t.node.active = !1
                            }
                        }
                        ,
                        o.onCloseBtn = function() {
                            this.notify(c.CLOSE_MAIN_VIEW)
                        }
                        ,
                        o.onChangePage = function(e) {
                            this.changePage(e)
                        }
                        ,
                        o.changePage = function(e, t) {
                            e < 0 && (e = 0),
                            e >= this.pageList.length && (e = this.pageList.length - 1),
                            this.curPage && (this.curPage.node.active = !1);
                            var a = this.pageList[e];
                            this.curPage = a,
                                this.curPage.node.active = !0,
                                this.curPage.setChecked(e),
                            !0 !== t && e === u.AWAKE && this.refreshAwakePage()
                        }
                        ,
                        o.refreshAwakePage = function(e) {
                            var t = this;
                            if (e) {
                                var a = {
                                    petData: e.petData,
                                    talentData: e.talentData
                                };
                                this.awakePage.refresh(a)
                            } else {
                                if (null === this.awakePage.petData.index)
                                    return;
                                d({
                                    index: this.awakePage.petData.index
                                }, (function(e) {
                                        if ("0" === e.result.value) {
                                            var a = (e.bloodInfo instanceof Array ? e.bloodInfo : [e.bloodInfo])[t.awakePage.talentIndex];
                                            t.refreshAwakePage({
                                                petData: t.awakePage.petData,
                                                talentData: {
                                                    index: t.awakePage.talentIndex,
                                                    type: a.type,
                                                    gift: a.gift,
                                                    dressInfo: e.dressInfo,
                                                    needProps: a.Item
                                                }
                                            })
                                        }
                                    }
                                ))
                            }
                        }
                        ,
                        o.refreshExpeditionPage = function() {
                            this.expeditionPage.refresh()
                        }
                        ,
                        t
                }(g)).prototype, "closeBtn", [P], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    b = t(y.prototype, "awakePage", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    k = t(y.prototype, "expeditionPage", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    D = t(y.prototype, "pageList", [B], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    v = y)) || v));
                o._RF.pop()
            }
        }
    }
));
