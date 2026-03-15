System.register("chunks:///_virtual/ListView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var i, e, n, o, s, l, r, a, h, c, p, u, d, f, g, m, w, y;
        return {
            setters: [function(t) {
                i = t.applyDecoratedDescriptor,
                    e = t.inheritsLoose,
                    n = t.initializerDefineProperty,
                    o = t.assertThisInitialized,
                    s = t.createForOfIteratorHelperLoose,
                    l = t.asyncToGenerator,
                    r = t.regeneratorRuntime
            }
                , function(t) {
                    a = t.cclegacy,
                        h = t._decorator,
                        c = t.Prefab,
                        p = t.ScrollView,
                        u = t.NodePool,
                        d = t.UITransform,
                        f = t.Vec3,
                        g = t.instantiate,
                        m = t.Node,
                        w = t.sys,
                        y = t.Component
                }
            ],
            execute: function() {
                var _, C, b, v, T, V, I, z;
                a._RF.push({}, "53cf6V70uVHq6K6bzpwF997", "ListView", void 0);
                var U = h.ccclass
                    , N = h.property;
                t("ListView", (_ = N(c),
                    C = N(p),
                U((T = i((v = function(t) {
                    function i() {
                        for (var i, e = arguments.length, s = new Array(e), l = 0; l < e; l++)
                            s[l] = arguments[l];
                        return i = t.call.apply(t, [this].concat(s)) || this,
                            n(i, "itemTemplate", T, o(i)),
                            n(i, "scrollView", V, o(i)),
                            n(i, "spacing", I, o(i)),
                            n(i, "spawnCount", z, o(i)),
                            i.horizontal = !1,
                            i.content = null,
                            i.adapter = null,
                            i._items = new u,
                            i._filledIds = {},
                            i._itemHeight = 1,
                            i._itemWidth = 1,
                            i._itemsVisible = 1,
                            i.lastStartIndex = -1,
                            i.scrollTopNotifyed = !1,
                            i.scrollBottomNotifyed = !1,
                            i.pullDownCallback = null,
                            i.pullUpCallback = null,
                            i.initialize = !1,
                            i
                    }
                    e(i, t);
                    var a = i.prototype;
                    return a.onLoad = function() {
                        this.init()
                    }
                        ,
                        a.start = function() {}
                        ,
                        a.init = function() {
                            this.initialize || (this.initView(),
                                this.addEvent(),
                                this.initialize = !0)
                        }
                        ,
                        a.initView = function() {
                            if (this.scrollView) {
                                this.content = this.scrollView.content,
                                    this.horizontal = this.scrollView.horizontal;
                                var t = this.content.getParent().getComponent(d);
                                this.horizontal ? (this.scrollView.vertical = !1,
                                    this.content.getComponent(d).anchorX = 0,
                                    this.content.getComponent(d).anchorY = t.anchorY,
                                    this.content.position = new f(0 - t.width * t.anchorX,0,0)) : (this.scrollView.vertical = !0,
                                    this.content.getComponent(d).anchorX = t.anchorX,
                                    this.content.getComponent(d).anchorY = 1,
                                    this.content.position = new f(0,t.height * t.anchorY,0))
                            }
                            var i = this._items.get() || g(this.itemTemplate);
                            this._items.put(i),
                                this._itemHeight = i.getComponent(d).height || 10,
                                this._itemWidth = i.getComponent(d).width || 10,
                                this.horizontal ? this._itemsVisible = Math.ceil(this.content.getParent().getComponent(d).width / this._itemWidth) : this._itemsVisible = Math.ceil(this.content.getParent().getComponent(d).height / this._itemHeight)
                        }
                        ,
                        a.setAdapter = function() {
                            var t = l(r().mark((function t(i) {
                                    return r().wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                    case 0:
                                                        if (this.adapter !== i) {
                                                            t.next = 3;
                                                            break
                                                        }
                                                        return this.notifyUpdate(),
                                                            t.abrupt("return");
                                                    case 3:
                                                        if (this.adapter = i,
                                                        null != this.adapter) {
                                                            t.next = 7;
                                                            break
                                                        }
                                                        return console.error("adapter 为空."),
                                                            t.abrupt("return");
                                                    case 7:
                                                        if (null != this.itemTemplate) {
                                                            t.next = 10;
                                                            break
                                                        }
                                                        return console.error("Listview 未设置待显示的Item模板."),
                                                            t.abrupt("return");
                                                    case 10:
                                                        this.notifyUpdate();
                                                    case 11:
                                                    case "end":
                                                        return t.stop()
                                                }
                                        }
                                    ), t, this)
                                }
                            )));
                            return function(i) {
                                return t.apply(this, arguments)
                            }
                        }(),
                        a.getItemIndex = function(t) {
                            return Math.floor(Math.abs(t / (this._itemHeight + this.spacing)))
                        }
                        ,
                        a.getPositionInView = function(t) {
                            var i = t.getParent().getComponent(d).convertToWorldSpaceAR(t.position);
                            return this.scrollView.node.getComponent(d).convertToNodeSpaceAR(i)
                        }
                        ,
                        a.notifyUpdate = function(t) {
                            var i = this;
                            null != this.adapter ? null != this.content ? (t && t.length > 0 ? t.forEach((function(t) {
                                    i._filledIds.hasOwnProperty(t) && delete i._filledIds[t]
                                }
                            )) : Object.keys(this._filledIds).forEach((function(t) {
                                    delete i._filledIds[t]
                                }
                            )),
                                this.recycleAll(),
                                this.lastStartIndex = -1,
                                this.horizontal ? this.content.getComponent(d).width = this.adapter.getCount() * (this._itemWidth + this.spacing) + this.spacing : this.content.getComponent(d).height = this.adapter.getCount() * (this._itemHeight + this.spacing) + this.spacing,
                                this.scrollView.scrollToTop()) : console.log("notifyUpdate", "this.content is null") : console.log("notifyUpdate", "this.adapter is null")
                        }
                        ,
                        a.scrollToTop = function(t) {
                            void 0 === t && (t = !1),
                                this.scrollView.scrollToTop(t ? 1 : 0)
                        }
                        ,
                        a.scrollToBottom = function(t) {
                            void 0 === t && (t = !1),
                                this.scrollView.scrollToBottom(t ? 1 : 0)
                        }
                        ,
                        a.scrollToLeft = function(t) {
                            void 0 === t && (t = !1),
                                this.scrollView.scrollToLeft(t ? 1 : 0)
                        }
                        ,
                        a.scrollToRight = function(t) {
                            void 0 === t && (t = !1),
                                this.scrollView.scrollToRight(t ? 1 : 0)
                        }
                        ,
                        a.pullDown = function(t, i) {
                            this.pullDownCallback = t.bind(i)
                        }
                        ,
                        a.pullUp = function(t, i) {
                            this.pullUpCallback = t.bind(i)
                        }
                        ,
                        a.update = function(t) {
                            var i = this.checkNeedUpdate();
                            i >= 0 && this.updateView(i)
                        }
                        ,
                        a._layoutVertical = function(t, i) {
                            this.content.addChild(t),
                                t._tag = i,
                                this._filledIds[i] = i,
                                t.setPosition(0, -t.getComponent(d).height * (.5 + i) - this.spacing * (i + 1))
                        }
                        ,
                        a._layoutHorizontal = function(t, i) {
                            this.content.addChild(t),
                                t._tag = i,
                                this._filledIds[i] = i,
                                t.setPosition(t.getComponent(d).width * (t.getComponent(d).anchorX + i) + this.spacing * i, 0)
                        }
                        ,
                        a.getRecycleItems = function(t, i) {
                            var e = this
                                , n = this.content.children
                                , o = [];
                            return n.forEach((function(n) {
                                    (n._tag < t || n._tag > i) && (o.push(n),
                                        delete e._filledIds[n._tag])
                                }
                            )),
                                o
                        }
                        ,
                        a.recycleAll = function() {
                            var t = this
                                , i = this.content.children;
                            null != i && null != i && (this.content.removeAllChildren(),
                                i.forEach((function(i) {
                                        t._items.put(i)
                                    }
                                )))
                        }
                        ,
                        a.updateView = function(t) {
                            var i = this
                                , e = t
                                , n = e + this._itemsVisible + (this.spawnCount || 2)
                                , o = this.adapter.getCount();
                            if (!(e >= o)) {
                                n > o ? (n = o,
                                e > 0 && !this.scrollBottomNotifyed && (this.notifyScrollToBottom(),
                                    this.scrollBottomNotifyed = !0)) : this.scrollBottomNotifyed = !1,
                                    this.getRecycleItems(e - (this.spawnCount || 2), n).forEach((function(t) {
                                            i._items.put(t)
                                        }
                                    ));
                                for (var l, r = this.findUpdateIndex(e, n), a = s(r); !(l = a()).done; ) {
                                    var h = l.value
                                        , c = this.adapter._getView(this._items.get() || g(this.itemTemplate), h);
                                    this.horizontal ? this._layoutHorizontal(c, h) : this._layoutVertical(c, h)
                                }
                            }
                        }
                        ,
                        a.checkNeedUpdate = function() {
                            if (null == this.adapter)
                                return -1;
                            var t = this.horizontal ? -this.content.position.x - this.content.getParent().getComponent(d).width * this.content.getParent().getComponent(d).anchorX : this.content.position.y - this.content.getParent().getComponent(d).height * this.content.getParent().getComponent(d).anchorY
                                , i = Math.floor(t / ((this.horizontal ? this._itemWidth : this._itemHeight) + this.spacing));
                            return i < 0 && !this.scrollTopNotifyed ? (this.notifyScrollToTop(),
                                this.scrollTopNotifyed = !0,
                                i) : (i > 0 && (this.scrollTopNotifyed = !1),
                                this.lastStartIndex != i ? (this.lastStartIndex = i,
                                    i) : -1)
                        }
                        ,
                        a.findUpdateIndex = function(t, i) {
                            for (var e = [], n = t; n < i; n++)
                                this._filledIds.hasOwnProperty(n) || e.push(n);
                            return e
                        }
                        ,
                        a.notifyScrollToTop = function() {
                            !this.adapter || this.adapter.getCount() <= 0 || this.pullDownCallback && this.pullDownCallback()
                        }
                        ,
                        a.notifyScrollToBottom = function() {
                            !this.adapter || this.adapter.getCount() <= 0 || this.pullUpCallback && this.pullUpCallback()
                        }
                        ,
                        a.addEvent = function() {
                            var t = this;
                            this.content.on(this.isMobile() ? m.EventType.TOUCH_END : m.EventType.MOUSE_UP, (function() {
                                    t.scrollTopNotifyed = !1,
                                        t.scrollBottomNotifyed = !1
                                }
                            ), this),
                                this.content.on(this.isMobile() ? m.EventType.TOUCH_CANCEL : m.EventType.MOUSE_LEAVE, (function() {
                                        t.scrollTopNotifyed = !1,
                                            t.scrollBottomNotifyed = !1
                                    }
                                ), this)
                        }
                        ,
                        a.isMobile = function() {
                            return w.isMobile
                        }
                        ,
                        i
                }(y)).prototype, "itemTemplate", [_], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    V = i(v.prototype, "scrollView", [C], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    I = i(v.prototype, "spacing", [N], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 1
                        }
                    }),
                    z = i(v.prototype, "spawnCount", [N], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return 2
                        }
                    }),
                    b = v)) || b)),
                    t("AbsAdapter", function() {
                        function t() {
                            this.dataSet = []
                        }
                        var i = t.prototype;
                        return i.setDataSet = function(t) {
                            this.dataSet = t
                        }
                            ,
                            i.getCount = function() {
                                return this.dataSet.length
                            }
                            ,
                            i.getItem = function(t) {
                                return this.dataSet[t]
                            }
                            ,
                            i._getView = function(t, i) {
                                return this.updateView(t, i),
                                    t
                            }
                            ,
                            t
                    }());
                a._RF.pop()
            }
        }
    }
));
