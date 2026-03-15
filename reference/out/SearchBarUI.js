System.register("chunks:///_virtual/SearchBarUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpiritBookGroupSpirit.ts", "./SpiritBooksDataProxy.ts", "./PropertyDes.ts", "./SpiritBooksListUI.ts"], (function(t) {
        var e, r, i, n, s, o, a, c, h, l, u, p, S, d, f, A;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    r = t.inheritsLoose,
                    i = t.initializerDefineProperty,
                    n = t.assertThisInitialized,
                    s = t.createForOfIteratorHelperLoose
            }
                , function(t) {
                    o = t.cclegacy,
                        a = t._decorator,
                        c = t.Node,
                        h = t.EditBox,
                        l = t.Label,
                        u = t.NodeEventType,
                        p = t.Component
                }
                , function(t) {
                    S = t.SpiritBookGroupSpirit
                }
                , function(t) {
                    d = t.SpiritBooksDataProxy
                }
                , function(t) {
                    f = t.PropertyDes
                }
                , function(t) {
                    A = t.SpiritBooksListUI
                }
            ],
            execute: function() {
                var g, E, C, T, b, D, x, m, v, y, _, B, L;
                o._RF.push({}, "1565cFLx+RKy4/nnkxk1Bxx", "SearchBarUI", void 0);
                var I = a.ccclass
                    , k = a.property;
                t("SearchBarUI", (g = I("SearchBarUI"),
                    E = k(c),
                    C = k(c),
                    T = k(h),
                    b = k(c),
                    D = k(l),
                g((v = e((m = function(t) {
                    function e() {
                        for (var e, r = arguments.length, s = new Array(r), o = 0; o < r; o++)
                            s[o] = arguments[o];
                        return e = t.call.apply(t, [this].concat(s)) || this,
                            i(e, "btnAll", v, n(e)),
                            i(e, "btnSearch", y, n(e)),
                            i(e, "txtSearch", _, n(e)),
                            i(e, "mcSearchAC", B, n(e)),
                            i(e, "txtAcList", L, n(e)),
                            e.DEFAULT_SEARCH_TEXT = "输入名称或属性",
                            e.scheduledCallbackTarget = null,
                            e.lastSearch = "",
                            e
                    }
                    r(e, t);
                    var o = e.prototype;
                    return o.onLoad = function() {
                        this.addEvents()
                    }
                        ,
                        o.addEvents = function() {
                            this.btnAll.on(u.TOUCH_END, this.onAll, this),
                                this.btnSearch.on(u.TOUCH_END, this.onSearch, this),
                                this.txtSearch.node.on(h.EventType.TEXT_CHANGED, this.onTextChange, this),
                                this.txtSearch.node.on(h.EventType.EDITING_DID_BEGAN, this.onEditingDigBegan, this),
                                this.txtSearch.node.on(h.EventType.EDITING_DID_ENDED, this.onEditingDigEnded, this);
                            for (var t = 0; t < this.txtAcList.length; t++)
                                this.txtAcList[t].node.on(u.TOUCH_END, this.onAcList.bind(this, t), this)
                        }
                        ,
                        o.onAll = function() {
                            this.renderSearchAutoCompletePresent(!1),
                                this.node.parent.getComponent(A).renderAll()
                        }
                        ,
                        o.onSearch = function() {
                            this.renderSearchAutoCompletePresent(!1),
                                this.renderSearch(this.txtSearch.string)
                        }
                        ,
                        o.renderSearch = function(t) {
                            if ((t = t.replace(/ /g, "")) && t != this.DEFAULT_SEARCH_TEXT) {
                                var e = d.getBookByID(10);
                                e.isSearch = !0,
                                    e.groups[0].spirits = this.search(t),
                                    e.refresh(),
                                    this.node.parent.getComponent(A).render(e),
                                    this.renderSearchAllButtonPresent(!0)
                            }
                        }
                        ,
                        o.renderSearchAllButtonPresent = function(t) {
                            this.btnAll.active = t
                        }
                        ,
                        o.setDefaultText = function() {
                            this.txtSearch.string = this.DEFAULT_SEARCH_TEXT
                        }
                        ,
                        o.onEditingDigBegan = function() {
                            this.txtSearch.string = ""
                        }
                        ,
                        o.onEditingDigEnded = function() {
                            this.txtSearch.string.replace(/ /g, "") || (this.txtSearch.string = this.DEFAULT_SEARCH_TEXT)
                        }
                        ,
                        o.onTextChange = function(t) {
                            this.searchAutoComplete(this.txtSearch.string)
                        }
                        ,
                        o.onAcList = function(t) {
                            this.txtSearch.string = this.txtAcList[t].string,
                                this.renderSearchAutoCompletePresent(!1),
                                this.onSearch()
                        }
                        ,
                        o.searchAutoComplete = function(t) {
                            var e = this;
                            t = t.replace(/ /g, ""),
                            this.searchACTimerCallback && this.unschedule(this.searchACTimerCallback),
                                this.scheduleOnce((function() {
                                        return e.searchACTimerCallback(t)
                                    }
                                ), .3)
                        }
                        ,
                        o.searchACTimerCallback = function(t) {
                            if (t && t !== this.DEFAULT_SEARCH_TEXT) {
                                if (t !== this.lastSearch) {
                                    this.renderSearchAutoCompletePresent(!0);
                                    var e = this.search(t, 6);
                                    if (e.length)
                                        for (var r = 0; r < 6; r++) {
                                            var i = "";
                                            r < e.length && (e[r]instanceof f ? i = e[r].name + "属性宠物" : e[r]instanceof S && (i = e[r].des.name)),
                                                this.txtAcList[r].string = i
                                        }
                                    else
                                        this.renderSearchAutoCompletePresent(!1);
                                    this.lastSearch = t
                                }
                            } else
                                this.renderSearchAutoCompletePresent(!1),
                                    this.lastSearch = t
                        }
                        ,
                        o.renderSearchAutoCompletePresent = function(t) {
                            this.mcSearchAC.active = t
                        }
                        ,
                        o.search = function(t, e) {
                            void 0 === e && (e = 0);
                            var r, i = [];
                            if (/^[0-9]*$/g.test(t)) {
                                var n = d.getSpiritDesbyID(parseInt(t));
                                n && n.isInBook && ((r = new S).id = n.id,
                                    i.push(r))
                            } else {
                                var o = d._searchForProperies(t);
                                e && o && i.push(o);
                                for (var a, c = d._spiritsInBook(), h = s(c); !(a = h()).done; ) {
                                    var l = a.value;
                                    if ((-1 !== l.des.name.indexOf(t) || !e && o && l.des.features[0].id === o.id) && i.push(l),
                                    e && i.length >= e)
                                        break
                                }
                            }
                            return i
                        }
                        ,
                        e
                }(p)).prototype, "btnAll", [E], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    y = e(m.prototype, "btnSearch", [C], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    _ = e(m.prototype, "txtSearch", [T], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    B = e(m.prototype, "mcSearchAC", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    L = e(m.prototype, "txtAcList", [D], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    x = m)) || x));
                o._RF.pop()
            }
        }
    }
));
