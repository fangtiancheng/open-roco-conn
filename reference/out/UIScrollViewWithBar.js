System.register("chunks:///_virtual/UIScrollViewWithBar.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var t, r, i, o, l, n, s, c, a, h, u, w, p, V;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    r = e.inheritsLoose,
                    i = e.initializerDefineProperty,
                    o = e.assertThisInitialized,
                    l = e.createClass
            }
                , function(e) {
                    n = e.cclegacy,
                        s = e._decorator,
                        c = e.ScrollView,
                        a = e.Slider,
                        h = e.Layout,
                        u = e.UITransform,
                        w = e.NodeEventType,
                        p = e.EventHandler,
                        V = e.Component
                }
            ],
            execute: function() {
                var g, d, S, f, v, B, C, y, b;
                n._RF.push({}, "25dbbhdaD1FtqwVHDanDXWF", "UIScrollViewWithBar", void 0);
                var T = s.ccclass
                    , D = s.property;
                e("UIScrollViewWithBar", (g = T("UIScrollViewWithBar"),
                    d = D(c),
                    S = D(a),
                g(((b = function(e) {
                    function t() {
                        for (var t, r = arguments.length, l = new Array(r), n = 0; n < r; n++)
                            l[n] = arguments[n];
                        return t = e.call.apply(e, [this].concat(l)) || this,
                            i(t, "scrollView", B, o(t)),
                            i(t, "scrollBar", C, o(t)),
                            i(t, "enableAutoHide", y, o(t)),
                            t._scrollContentTran = void 0,
                            t
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.updateScrollView = function() {
                        this.scrollView && this.scrollView.content && this.scrollView.content.getComponent(h) && (this.scrollView.content.getComponent(h).updateLayout(!0),
                            this.onScrollBarChange(),
                            this.showOrHideScrollBar())
                    }
                        ,
                        n.start = function() {
                            this._scrollContentTran = this.scrollView.content.getComponent(u),
                                this.scrollView.content.on(w.CHILD_ADDED, this.updateScrollView, this),
                                this.scrollView.content.on(w.CHILD_REMOVED, this.updateScrollView, this);
                            var e = new p;
                            e.target = this.node,
                                e.component = "UIScrollViewWithBar",
                                e.handler = "onScrollBarChange",
                                this.scrollBar.slideEvents.push(e);
                            var t = new p;
                            t.target = this.node,
                                t.component = "UIScrollViewWithBar",
                                t.handler = "onScrollViewChange",
                                this.scrollView.scrollEvents.push(t),
                                this.updateScrollView()
                        }
                        ,
                        n.onScrollBarChange = function() {
                            this._scrollContentTran.height - this.scrollView.view.height <= 0 || this.scrollView.scrollToPercentVertical(1 - this.scrollBar.progress)
                        }
                        ,
                        n.onScrollViewChange = function() {
                            this.scrollBar.progress = this.progress
                        }
                        ,
                        n.showOrHideScrollBar = function() {
                            if (this.enableAutoHide) {
                                var e = this._scrollContentTran.height - this.scrollView.view.height;
                                this.scrollBar.node.active = e > 0
                            }
                        }
                        ,
                        l(t, [{
                            key: "scrollViewCom",
                            get: function() {
                                return this.scrollView
                            }
                        }, {
                            key: "progress",
                            get: function() {
                                var e = this._scrollContentTran.height - this.scrollView.view.height;
                                return this.scrollView.content.position.y / e
                            }
                        }]),
                        t
                }(V)).UPDATE_STATE = "UIScrollViewWithBar@UPDATE_STATE",
                    B = t((v = b).prototype, "scrollView", [d], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    C = t(v.prototype, "scrollBar", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    y = t(v.prototype, "enableAutoHide", [D], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return !0
                        }
                    }),
                    f = v)) || f));
                n._RF.pop()
            }
        }
    }
));
