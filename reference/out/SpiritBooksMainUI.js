System.register("chunks:///_virtual/SpiritBooksMainUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./SpiritBooksListUI.ts", "./SpiritBooksDataProxy.ts", "./SpiritBooksMessage.ts", "./ConstSpiritBooks.ts", "./global.ts"], (function(t) {
        var o, i, n, e, r, s, a, c, u, l, p, k, h, B;
        return {
            setters: [function(t) {
                o = t.applyDecoratedDescriptor,
                    i = t.inheritsLoose,
                    n = t.initializerDefineProperty,
                    e = t.assertThisInitialized
            }
                , function(t) {
                    r = t.cclegacy,
                        s = t._decorator,
                        a = t.Node,
                        c = t.NodeEventType
                }
                , function(t) {
                    u = t.GameUI
                }
                , function(t) {
                    l = t.SpiritBooksListUI
                }
                , function(t) {
                    p = t.SpiritBooksDataProxy
                }
                , function(t) {
                    k = t.SpiritBooksMessage
                }
                , function(t) {
                    h = t.ConstSpiritBooks
                }
                , function(t) {
                    B = t.__global
                }
            ],
            execute: function() {
                var f, g, I, S, d, b;
                r._RF.push({}, "d9071LW+A5H3KrSwPx61Ikd", "SpiritBooksMainUI", void 0);
                var y = s.ccclass
                    , D = s.property;
                t("SpiritBooksMainUI", (f = D(l),
                    g = D(a),
                y((d = o((S = function(t) {
                    function o() {
                        for (var o, i = arguments.length, r = new Array(i), s = 0; s < i; s++)
                            r[s] = arguments[s];
                        return o = t.call.apply(t, [this].concat(r)) || this,
                            n(o, "spiritBooksListUI", d, e(o)),
                            n(o, "btnClose", b, e(o)),
                            o.totalPage = 3,
                            o
                    }
                    i(o, t);
                    var r = o.prototype;
                    return r.onLoad = function() {
                        p.currentTabIndex = -1,
                            this.btnClose.on(c.TOUCH_END, this.onCloseBtn, this),
                            p.init(),
                            p.callBack = this.onInitPages.bind(this),
                            p.initLocal()
                    }
                        ,
                        r.onCloseBtn = function() {
                            this.notify(k.CLOSE_MAIN_VIEW)
                        }
                        ,
                        r.onToggle = function(t) {
                            var o = t.node.getSiblingIndex();
                            this.changePage(o)
                        }
                        ,
                        r.changePage = function(t) {
                            t < 0 && (t = 0),
                            t >= this.totalPage && (t = this.totalPage),
                            t != p.currentTabIndex && (p.currentTabIndex = t,
                                p.currentBookID = h.SpiritBooksIDArr[t],
                                this.showBook())
                        }
                        ,
                        r.showBook = function() {
                            var t = p.getBookByID(p.currentBookID);
                            this.spiritBooksListUI.setBookID(t)
                        }
                        ,
                        r.onInitPages = function() {
                            p.currentOwnerName = B.MainRoleData.nickName,
                                p.currentOwnerUin = B.MainRoleData.uin,
                                p.getDataFromServer(p.currentOwnerUin, this.onShowBook.bind(this))
                        }
                        ,
                        r.onShowBook = function() {
                            this.changePage(0)
                        }
                        ,
                        r.updateLinkSelectState = function(t) {
                            this.spiritBooksListUI.updateLinkSelectState(t)
                        }
                        ,
                        o
                }(u)).prototype, "spiritBooksListUI", [f], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    b = o(S.prototype, "btnClose", [g], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    I = S)) || I));
                r._RF.pop()
            }
        }
    }
));
