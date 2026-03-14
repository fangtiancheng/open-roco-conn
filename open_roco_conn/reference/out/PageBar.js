System.register("chunks:///_virtual/PageBar.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var a, t, r, i, n, s, o, g, h, l, u;
        return {
            setters: [function(e) {
                a = e.applyDecoratedDescriptor,
                    t = e.inheritsLoose,
                    r = e.initializerDefineProperty,
                    i = e.assertThisInitialized,
                    n = e.createClass
            }
                , function(e) {
                    s = e.cclegacy,
                        o = e._decorator,
                        g = e.Node,
                        h = e.Label,
                        l = e.NodeEventType,
                        u = e.Component
                }
            ],
            execute: function() {
                var c, p, f, P, B, m, v, R;
                s._RF.push({}, "2f898/BVSRGYr6S+19YMeZD", "PageBar", void 0);
                var b = o.ccclass
                    , d = o.property;
                e("PageBar", (c = d(g),
                    p = d(g),
                    f = d(h),
                b((m = a((B = function(e) {
                    function a() {
                        for (var a, t = arguments.length, n = new Array(t), s = 0; s < t; s++)
                            n[s] = arguments[s];
                        return a = e.call.apply(e, [this].concat(n)) || this,
                            r(a, "leftBtn", m, i(a)),
                            r(a, "rightBtn", v, i(a)),
                            r(a, "pageLabel", R, i(a)),
                            a.pageBarParams = null,
                            a
                    }
                    t(a, e);
                    var s = a.prototype;
                    return s.onLoad = function() {
                        this.onInit(),
                            this.leftBtn.on(l.TOUCH_END, this.onLeftBtn, this),
                            this.rightBtn.on(l.TOUCH_END, this.onRightBtn, this)
                    }
                        ,
                        s.onInit = function() {
                            this.pageBarParams = {
                                curPage: 0,
                                totalPage: 1,
                                onChange: function() {}
                            }
                        }
                        ,
                        s.onLeftBtn = function() {
                            this.onRefreshView(this.pageBarParams.curPage - 1)
                        }
                        ,
                        s.onRightBtn = function() {
                            this.onRefreshView(this.pageBarParams.curPage + 1)
                        }
                        ,
                        s.onRefreshView = function(e) {
                            if (e !== this.pageBarParams.curPage || this.pageBarParams.isRefresh) {
                                if (e > this.pageBarParams.totalPage)
                                    return e = this.pageBarParams.totalPage,
                                        void this.onRefreshView(e);
                                if (e < 1)
                                    return e = 1,
                                        void this.onRefreshView(e);
                                this.pageBarParams.isRefresh = !1,
                                    this.pageBarParams.onChange(e)
                            }
                            this.pageBarParams.curPage = e,
                                this.leftBtn.active = e > 1,
                                this.rightBtn.active = e < this.pageBarParams.totalPage,
                            this.pageLabel && (this.pageLabel.string = this.pageBarParams.curPage + "/" + this.pageBarParams.totalPage)
                        }
                        ,
                        n(a, [{
                            key: "data",
                            set: function(e) {
                                e && (e.onChange && (this.pageBarParams.onChange = e.onChange),
                                void 0 !== e.totalPage && (this.pageBarParams.totalPage = e.totalPage),
                                void 0 !== e.isRefresh && (this.pageBarParams.isRefresh = e.isRefresh),
                                void 0 === e.curPage && void 0 === e.totalPage || this.onRefreshView(e.curPage))
                            }
                        }, {
                            key: "curPage",
                            get: function() {
                                return this.pageBarParams.curPage
                            }
                        }]),
                        a
                }(u)).prototype, "leftBtn", [c], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    v = a(B.prototype, "rightBtn", [p], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    R = a(B.prototype, "pageLabel", [f], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    P = B)) || P));
                s._RF.pop()
            }
        }
    }
));
