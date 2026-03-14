System.register("chunks:///_virtual/HandBookPetList.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./PageBar.ts", "./PetIcon.ts"], (function(t) {
        var e, i, n, o, r, a, s, c, l, h;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    i = t.inheritsLoose,
                    n = t.initializerDefineProperty,
                    o = t.assertThisInitialized
            }
                , function(t) {
                    r = t.cclegacy,
                        a = t._decorator,
                        s = t.Node,
                        c = t.Component
                }
                , function(t) {
                    l = t.PageBar
                }
                , function(t) {
                    h = t.PetIcon
                }
            ],
            execute: function() {
                var u, d, f, L, p, g;
                r._RF.push({}, "c9e195ltBdI24mnLs662LzG", "HandBookPetList", void 0);
                var m = a.ccclass
                    , v = a.property;
                t("HandBookPetList", (u = v(l),
                    d = v(s),
                m((p = e((L = function(t) {
                    function e() {
                        for (var e, i = arguments.length, r = new Array(i), a = 0; a < i; a++)
                            r[a] = arguments[a];
                        return e = t.call.apply(t, [this].concat(r)) || this,
                            n(e, "pageBar", p, o(e)),
                            n(e, "itemListNode", g, o(e)),
                            e.itemList = [],
                            e.dataList = void 0,
                            e
                    }
                    i(e, t);
                    var r = e.prototype;
                    return r.onLoad = function() {
                        this.onInitItemList()
                    }
                        ,
                        r.onDestroy = function() {}
                        ,
                        r.onInitItemList = function() {
                            var t = this.itemListNode.children;
                            this.itemList = new Array(t.length);
                            for (var e = 0; e < t.length; e++) {
                                var i = t[e].getComponent(h);
                                this.itemList[e] = i
                            }
                        }
                        ,
                        r.refreshView = function(t) {
                            t && void 0 !== t.list && this.onRefreshItemList(t.list)
                        }
                        ,
                        r.onRefreshItemList = function(t) {
                            null === t && (t = []),
                                this.dataList = t;
                            var e = Math.ceil(this.dataList.length / this.itemList.length);
                            this.pageBar.data = {
                                curPage: 1,
                                totalPage: e <= 0 ? 1 : e,
                                onChange: this.onChange.bind(this),
                                isRefresh: !0
                            }
                        }
                        ,
                        r.onChange = function(t) {
                            for (var e = (t - 1) * this.itemList.length, i = 0; i < this.itemList.length; i++) {
                                var n = this.itemList[i]
                                    , o = this.dataList[i + e];
                                o ? (n.data = {
                                    id: o
                                },
                                    n.node.active = !0) : n.node.active = !1
                            }
                        }
                        ,
                        e
                }(c)).prototype, "pageBar", [u], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    g = e(L.prototype, "itemListNode", [d], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    f = L)) || f));
                r._RF.pop()
            }
        }
    }
));
