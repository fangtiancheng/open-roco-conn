System.register("chunks:///_virtual/HandBookTalenList.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./PageBar.ts", "./TalenIcon.ts", "./HandBookTalenItem.ts"], (function(t) {
        var e, i, n, o, s, a, r, c, l, d, h, u;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    i = t.inheritsLoose,
                    n = t.initializerDefineProperty,
                    o = t.assertThisInitialized
            }
                , function(t) {
                    s = t.cclegacy,
                        a = t._decorator,
                        r = t.Node,
                        c = t.NodeEventType,
                        l = t.Component
                }
                , function(t) {
                    d = t.PageBar
                }
                , function(t) {
                    h = t.TalenIcon
                }
                , function(t) {
                    u = t.HandBookTalenItem
                }
            ],
            execute: function() {
                var m, f, p, I, g, v;
                s._RF.push({}, "5c5ddOvdHJOCJ5D2xrBBocp", "HandBookTalenList", void 0);
                var L = a.ccclass
                    , C = a.property;
                t("HandBookTalenList", (m = C(d),
                    f = C(r),
                L((g = e((I = function(t) {
                    function e() {
                        for (var e, i = arguments.length, s = new Array(i), a = 0; a < i; a++)
                            s[a] = arguments[a];
                        return e = t.call.apply(t, [this].concat(s)) || this,
                            n(e, "pageBar", g, o(e)),
                            n(e, "itemListNode", v, o(e)),
                            e.itemList = [],
                            e.dataList = void 0,
                            e.selectedItem = void 0,
                            e.onClickItem = function() {}
                            ,
                            e
                    }
                    i(e, t);
                    var s = e.prototype;
                    return s.onLoad = function() {
                        this.onInitItemList()
                    }
                        ,
                        s.onDestroy = function() {
                            this.onClickItem = null
                        }
                        ,
                        s.onInitItemList = function() {
                            var t = this.itemListNode.children;
                            this.itemList = new Array(t.length);
                            for (var e = 0; e < t.length; e++) {
                                var i = t[e]
                                    , n = i.getComponent(u);
                                n.selected.active = 0 === e,
                                n.selected.active && (this.selectedItem = n);
                                var o = i.getComponent(h);
                                this.itemList[e] = o,
                                    o.node.on(c.TOUCH_END, this.onItem, this)
                            }
                        }
                        ,
                        s.refreshView = function(t) {
                            t && (void 0 !== t.list && this.onRefreshItemList(t.list),
                            void 0 !== t.onClick && (this.onClickItem = t.onClick),
                            void 0 !== t.selectIndex && this.onRefreshSelected(t.selectIndex))
                        }
                        ,
                        s.onRefreshItemList = function(t) {
                            null === t && (t = []),
                                this.dataList = t;
                            var e = Math.ceil(this.dataList.length / this.itemList.length);
                            this.pageBar.data = {
                                curPage: 1,
                                totalPage: e <= 0 ? 1 : e,
                                onChange: this.onChange.bind(this)
                            }
                        }
                        ,
                        s.onRefreshSelected = function(t) {
                            this.onClickItem(this.dataList[t])
                        }
                        ,
                        s.onChange = function(t) {
                            for (var e = (t - 1) * this.itemList.length, i = 0; i < this.itemList.length; i++) {
                                var n = this.itemList[i]
                                    , o = this.dataList[i + e];
                                n.data = o ? {
                                    id: o.tid,
                                    dataSource: o
                                } : {
                                    id: null,
                                    dataSource: null
                                }
                            }
                            if (this.selectedItem.selected.active) {
                                var s = this.selectedItem.node.getComponent(h);
                                this.onClickItem(s.dataSource)
                            }
                        }
                        ,
                        s.onItem = function(t) {
                            var e = t.target
                                , i = e.getComponent(h);
                            this.selectedItem && (this.selectedItem.selected.active = !1),
                                this.selectedItem = e.getComponent(u),
                                this.selectedItem.selected.active = !0,
                                this.onClickItem(i.dataSource)
                        }
                        ,
                        e
                }(l)).prototype, "pageBar", [m], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    v = e(I.prototype, "itemListNode", [f], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    p = I)) || p));
                s._RF.pop()
            }
        }
    }
));
