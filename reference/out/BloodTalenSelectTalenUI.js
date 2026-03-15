System.register("chunks:///_virtual/BloodTalenSelectTalenUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./PageBar.ts", "./BloodTalenMessage.ts", "./BloodTalenSelectTalenItem.ts", "./TalenIcon.ts", "./BloodTalenCGI.ts"], (function(e) {
        var t, n, a, i, o, l, s, r, c, u, h, f, d, g, p, T;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    n = e.inheritsLoose,
                    a = e.initializerDefineProperty,
                    i = e.assertThisInitialized
            }
                , function(e) {
                    o = e.cclegacy,
                        l = e._decorator,
                        s = e.Node,
                        r = e.Label,
                        c = e.NodeEventType
                }
                , function(e) {
                    u = e.GameUI
                }
                , function(e) {
                    h = e.PageBar
                }
                , function(e) {
                    f = e.BloodTalenMessage,
                        d = e.MainViewPage
                }
                , function(e) {
                    g = e.BloodTalenSelectTalenItem
                }
                , function(e) {
                    p = e.TalenIcon
                }
                , function(e) {
                    T = e.GetTalenAwakeData
                }
            ],
            execute: function() {
                var L, I, v, y, C, B, b, m, E, D;
                o._RF.push({}, "6c0a8ClDDNA0JA0RpWx2RZM", "BloodTalenSelectTalenUI", void 0);
                var _ = l.ccclass
                    , A = l.property;
                e("BloodTalenSelectTalenUI", (L = A(s),
                    I = A(s),
                    v = A(h),
                    y = A(r),
                _((b = t((B = function(e) {
                    function t() {
                        for (var t, n = arguments.length, o = new Array(n), l = 0; l < n; l++)
                            o[l] = arguments[l];
                        return t = e.call.apply(e, [this].concat(o)) || this,
                            a(t, "closeBtn", b, i(t)),
                            a(t, "talenNode", m, i(t)),
                            a(t, "pageBar", E, i(t)),
                            a(t, "talenDesc", D, i(t)),
                            t.talenList = null,
                            t.dataList = null,
                            t.params = void 0,
                            t.dressInfo = void 0,
                            t
                    }
                    n(t, e);
                    var o = t.prototype;
                    return o.onLoad = function() {
                        this.closeBtn.on(c.TOUCH_END, this.onClose, this),
                            this.talenDesc.string = "",
                            this.onInitTalenList()
                    }
                        ,
                        o.onInitTalenList = function() {
                            var e = this.talenNode.children;
                            this.talenList = new Array(e.length);
                            for (var t = 0; t < e.length; t++) {
                                var n = e[t].getComponent(g);
                                this.talenList[t] = n,
                                    n.icon.node.on(c.TOUCH_END, this.onClickTalen, this)
                            }
                        }
                        ,
                        o.refresh = function(e) {
                            var t = this;
                            this.params = e,
                                this.dressInfo = "0",
                                T({
                                    index: e.index
                                }, (function(e) {
                                        "0" === e.result.value ? (t.dressInfo = e.dressInfo,
                                            t.onRefreshTalenList(e.bloodInfo)) : t.onRefreshTalenList([])
                                    }
                                ))
                        }
                        ,
                        o.onRefreshTalenList = function(e) {
                            this.dataList = e instanceof Array ? e : [e];
                            var t = Math.ceil(this.dataList.length / this.talenList.length);
                            this.pageBar.data = {
                                curPage: 1,
                                totalPage: t <= 0 ? 1 : t,
                                onChange: this.onChangePage.bind(this)
                            }
                        }
                        ,
                        o.onClose = function() {
                            this.notify(f.CLOSE_SELECT_TALEN_VIEW)
                        }
                        ,
                        o.onClickTalen = function(e) {
                            var t = e.target.getComponent(p);
                            this.talenDesc.string = t.data.desc
                        }
                        ,
                        o.onChangePage = function(e) {
                            for (var t = (e - 1) * this.talenList.length, n = 0; n < this.talenList.length; n++) {
                                var a = this.talenList[n]
                                    , i = this.dataList[n + t];
                                i ? (a.node.active = !0,
                                    a.data = {
                                        index: n,
                                        type: i.type,
                                        gift: i.gift,
                                        dressInfo: this.dressInfo,
                                        needProps: i.Item,
                                        onClick: this.onClickAwakeBtn.bind(this)
                                    }) : a.node.active = !1
                            }
                        }
                        ,
                        o.onClickAwakeBtn = function(e) {
                            this.notify(f.CLOSE_SELECT_TALEN_VIEW);
                            var t = {
                                selectPage: d.AWAKE,
                                petData: this.params,
                                talentData: e.data
                            };
                            this.notify(f.SHOW_MAIN_VIEW, t)
                        }
                        ,
                        t
                }(u)).prototype, "closeBtn", [L], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    m = t(B.prototype, "talenNode", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    E = t(B.prototype, "pageBar", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    D = t(B.prototype, "talenDesc", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    C = B)) || C));
                o._RF.pop()
            }
        }
    }
));
