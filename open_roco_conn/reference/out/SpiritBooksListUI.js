System.register("chunks:///_virtual/SpiritBooksListUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./SpriteFrameSelector.ts", "./SpiritBookIconItem.ts", "./SpiritBooksDataProxy.ts", "./SpiritBooskDetailUI.ts", "./CGILoader.ts", "./DEFINE.ts", "./global.ts", "./CGIEvent.ts", "./NetResult.ts", "./SpiritSkinDes.ts", "./PetIcon.ts", "./ConstSpiritBooks.ts", "./SearchBarUI.ts"], (function(t) {
        var i, e, n, r, o, a, s, u, c, l, h, p, d, f, g, I, S, b, k, v, P, _, B, m, D;
        return {
            setters: [function(t) {
                i = t.applyDecoratedDescriptor,
                    e = t.inheritsLoose,
                    n = t.initializerDefineProperty,
                    r = t.assertThisInitialized,
                    o = t.createForOfIteratorHelperLoose
            }
                , function(t) {
                    a = t.cclegacy,
                        s = t._decorator,
                        u = t.Label,
                        c = t.Button,
                        l = t.NodeEventType,
                        h = t.Sprite
                }
                , function(t) {
                    p = t.GameSubUI
                }
                , function(t) {
                    d = t.default
                }
                , function(t) {
                    f = t.SpiritIconItem
                }
                , function(t) {
                    g = t.SpiritBooksDataProxy
                }
                , function(t) {
                    I = t.SpiritBooskDetailUI
                }
                , function(t) {
                    S = t.CGILoader
                }
                , function(t) {
                    b = t.DEFINE
                }
                , function(t) {
                    k = t.__global
                }
                , function(t) {
                    v = t.CGIEvent
                }
                , function(t) {
                    P = t.NetResult
                }
                , function(t) {
                    _ = t.SpiritSkinDes
                }
                , function(t) {
                    B = t.PetIcon
                }
                , function(t) {
                    m = t.ConstSpiritBooks
                }
                , function(t) {
                    D = t.SearchBarUI
                }
            ],
            execute: function() {
                var L, x, y, C, E, T, N, U, A, w, R, O, z, M, H, G, F, j, X, Z, q, J, K;
                a._RF.push({}, "048b0qHMiNNi4ZkCg4Aw2lb", "SpiritBooksListUI", void 0);
                var Q = s.ccclass
                    , V = s.property;
                t("SpiritBooksListUI", (L = V(d),
                    x = V(u),
                    y = V(u),
                    C = V(c),
                    E = V(c),
                    T = V(f),
                    N = V(B),
                    U = V(u),
                    A = V(I),
                    w = V(D),
                Q(((K = function(t) {
                    function i() {
                        for (var i, e = arguments.length, o = new Array(e), a = 0; a < e; a++)
                            o[a] = arguments[a];
                        return i = t.call.apply(t, [this].concat(o)) || this,
                            n(i, "title", z, r(i)),
                            n(i, "txtName", M, r(i)),
                            n(i, "txtSpiritCount", H, r(i)),
                            n(i, "btnPrev", G, r(i)),
                            n(i, "btnNext", F, r(i)),
                            n(i, "spiritIconList", j, r(i)),
                            n(i, "PetIconList", X, r(i)),
                            n(i, "txtPageCount", Z, r(i)),
                            n(i, "spiritBooksDetailUI", q, r(i)),
                            n(i, "searchbar", J, r(i)),
                            i.totlePage = 1,
                            i.curPage = 1,
                            i.haveSkin = [],
                            i._currentBook = void 0,
                            i.loader = void 0,
                            i.m_curIndex = 0,
                            i
                    }
                    e(i, t);
                    var a = i.prototype;
                    return a.onLoad = function() {
                        this.addEvents()
                    }
                        ,
                        a.addEvents = function() {
                            this.btnPrev.node.on(l.TOUCH_END, this.onPrev, this),
                                this.btnNext.node.on(l.TOUCH_END, this.onNext, this);
                            for (var t = 0; t < this.spiritIconList.length; t++)
                                this.spiritIconList[t].node.on(l.TOUCH_END, this.onClickItem.bind(this, t), this);
                            this.loader = new S(b.CGI_ROOT + "roco_pet_skin",k.SysAPI.getNetSysAPI().createURLLoader(!0)),
                                this.loader.addEventListener(v.COMPLETE, this.onDataReceive, this),
                                this.loader.addEventListener(v.GOT_ERROR, this.onNetError, this)
                        }
                        ,
                        a.onClickItem = function(t) {
                            this.spiritIconList[this.m_curIndex].selected = !1,
                                this.m_curIndex = t,
                                this.spiritIconList[this.m_curIndex].selected = !0;
                            var i = (this.curPage - 1) * this.spiritIconList.length;
                            i += this.m_curIndex;
                            var e, n, r = this._currentBook.spirits[i];
                            r.id < 1e5 ? (e = g.getSpiritDesbyID(r.id),
                                n = this._currentBook.pager.index(this._currentBook.pageIdx).template) : (e = g.getSpiritDesbyID(Math.floor(r.id / 10) - 1e4),
                                n = this._currentBook.pager.index(this._currentBook.pageIdx).template),
                                this.spiritBooksDetailUI.updateInfo(r.id, e, n),
                            r.id >= 1e5 && (this.spiritBooksDetailUI.skinArr = this.haveSkin)
                        }
                        ,
                        a.onPrev = function() {
                            this.curPage > 1 && (this.curPage--,
                                this.updatePage(),
                                this.updatePageButton(),
                                this.updateSpiritList(),
                                this.onClickItem(0))
                        }
                        ,
                        a.onNext = function() {
                            this.curPage < this.totlePage && (this.curPage++,
                                this.updatePage(),
                                this.updatePageButton(),
                                this.updateSpiritList(),
                                this.onClickItem(0))
                        }
                        ,
                        a.updatePage = function() {
                            this.txtPageCount.string = this.curPage + "/" + this.totlePage
                        }
                        ,
                        a.updatePageButton = function() {
                            this.btnPrev.interactable = this.curPage > 1,
                                this.btnPrev.getComponent(h).grayscale = !this.btnPrev.interactable,
                                this.btnNext.interactable = this.curPage < this.totlePage,
                                this.btnNext.getComponent(h).grayscale = !this.btnNext.interactable
                        }
                        ,
                        a.onDataReceive = function(t) {
                            var i = t.data
                                , e = new P(i);
                            if (e.value >= 0) {
                                if (-1 != String(t.sendType).indexOf("?cmd=3")) {
                                    this.haveSkin = [];
                                    for (var n = Array.isArray(i.lightID) ? i.lightID : [i.lightID], r = n ? n.length : 0, o = 0; o < r; o++)
                                        this.haveSkin.push(Number(n[o]));
                                    this.updateInfo()
                                }
                            } else
                                k.UI.alert("", e.msg)
                        }
                        ,
                        a.onNetError = function(t) {
                            k.UI.alert("", t.msg)
                        }
                        ,
                        a.updateUserInfo = function() {
                            if (this.title.gotoAndStop(g.currentTabIndex + 1),
                                !this._currentBook.isSearch) {
                                for (var t, i = 0, e = 0, n = null, r = o(this._currentBook.spirits); !(t = r()).done; ) {
                                    var a = t.value;
                                    a.id && a.id < 1e5 && (g.getIconState(a.id) == m.STATE_RELEASE || g.getIconState(a.id) == m.STATE_CATCH) && i++,
                                    a.id && e++,
                                        n = a
                                }
                                this.txtName.string = g.currentOwnerName,
                                    n && n.id < 1e5 ? this.txtSpiritCount.string = i + "/" + e : this.txtSpiritCount.string = this.haveSkin.length + "/" + e
                            }
                        }
                        ,
                        a.updateSpiritList = function() {
                            if (this._currentBook) {
                                for (var t = (this.curPage - 1) * this.spiritIconList.length, i = t + this.spiritIconList.length, e = 0, n = t; n < i; n++) {
                                    var r = this.spiritIconList[e];
                                    if (n < this._currentBook.spirits.length) {
                                        r.node.active = !0;
                                        var o = this.PetIconList[e]
                                            , a = this._currentBook.spirits[n];
                                        r.updateInfo(a);
                                        var s = !1
                                            , u = ""
                                            , c = m._url;
                                        if (m.isZoneSpirit(a.id))
                                            _.SpiritSkinTypes[a.id] && (u = _.SpiritSkinTypes[a.id].name),
                                                s = -1 == this.haveSkin.indexOf(a.id);
                                        else {
                                            u = a.isUnknown ? "未知宠物" : g.getSpiritDesbyID(a.id).name;
                                            var l = g.getIconState(a.id);
                                            s = l != m.STATE_CATCH && l != m.STATE_RELEASE
                                        }
                                        c = a.id > 1e5 ? c + a.id.toString() + "-.png" : g.getSpiritDesbyID(a.id).iconSrc,
                                            o.data = {
                                                id: a.id,
                                                name: u,
                                                url: c
                                            },
                                            o.icon.grayscale = s
                                    } else
                                        r.node.active = !1;
                                    e++
                                }
                                this.onClickItem(0)
                            }
                        }
                        ,
                        a.setBookID = function(t) {
                            if (this._currentBook = t,
                                this._currentBook = 10 == t.id ? g._allBook() : 11 == t.id ? g._allSkinBook() : 12 == t.id ? g._allPojianBook() : t,
                            11 == g.currentBookID)
                                if (this.haveSkin.length > 0)
                                    this.updateInfo();
                                else if (g.currentOwnerUin != k.MainRoleData.uin) {
                                    var i = (g.currentOwnerUin + k.MainRoleData.uin - k.MainRoleData.uin % 1e3).toString(16);
                                    this.loader.sendData("?cmd=3&checkdata=" + i)
                                } else
                                    this.loader.sendData("?cmd=3");
                            else
                                this.updateInfo()
                        }
                        ,
                        a.updateInfo = function() {
                            this.curPage = 1,
                                this.totlePage = Math.ceil(this._currentBook.spirits.length / this.spiritIconList.length);
                            var t = this._currentBook.pager.index(this._currentBook.pageIdx);
                            t.template.searchbar ? (this.searchbar.setDefaultText(),
                                this.searchbar.renderSearchAutoCompletePresent(!1),
                                this.searchbar.node.active = !0,
                                this.searchbar.renderSearchAllButtonPresent(t.book.isSearch)) : this.searchbar.node.active = !1,
                                this.updatePage(),
                                this.updatePageButton(),
                                this.updateSpiritList(),
                                this.updateUserInfo()
                        }
                        ,
                        a.renderAll = function() {
                            this._currentBook = g._allBook(),
                                this.updateInfo()
                        }
                        ,
                        a.render = function(t) {
                            this._currentBook = t,
                                this.updateInfo()
                        }
                        ,
                        a.updateLinkSelectState = function(t) {
                            this.spiritBooksDetailUI.updateLinkSelectState(t)
                        }
                        ,
                        i
                }(p)).MAX_ITEM_COUNT = 9,
                    K.DEFAULT_SEARCH_TEXT = "输入名称或属性",
                    z = i((O = K).prototype, "title", [L], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    M = i(O.prototype, "txtName", [x], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    H = i(O.prototype, "txtSpiritCount", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    G = i(O.prototype, "btnPrev", [C], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    F = i(O.prototype, "btnNext", [E], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    j = i(O.prototype, "spiritIconList", [T], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    X = i(O.prototype, "PetIconList", [N], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    Z = i(O.prototype, "txtPageCount", [U], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    q = i(O.prototype, "spiritBooksDetailUI", [A], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    J = i(O.prototype, "searchbar", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    R = O)) || R));
                a._RF.pop()
            }
        }
    }
));
