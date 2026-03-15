System.register("chunks:///_virtual/GiftCenterMainUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./GiftCenterLuoKeGiftUI.ts", "./GiftCenterLoginGiftUI.ts", "./GiftCenterOnlineGiftUI.ts", "./GiftCenterMessage.ts"], (function(t) {
        var e, n, i, o, a, r, c, s, f, u, g, p;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    n = t.inheritsLoose,
                    i = t.initializerDefineProperty,
                    o = t.assertThisInitialized
            }
                , function(t) {
                    a = t.cclegacy,
                        r = t._decorator,
                        c = t.Node
                }
                , function(t) {
                    s = t.GameUI
                }
                , function(t) {
                    f = t.GiftCenterLuoKeGiftUI
                }
                , function(t) {
                    u = t.GiftCenterLoginGiftUI
                }
                , function(t) {
                    g = t.GiftCenterOnlineGiftUI
                }
                , function(t) {
                    p = t.GiftCenterMessage
                }
            ],
            execute: function() {
                var h, l, I, G;
                a._RF.push({}, "597faawGqJOEIv7xXbkIE88", "GiftCenterMainUI", void 0);
                var L = r.ccclass
                    , d = r.property;
                t("GiftCenterMainUI", (h = d(c),
                L((G = e((I = function(t) {
                    function e() {
                        for (var e, n = arguments.length, a = new Array(n), r = 0; r < n; r++)
                            a[r] = arguments[r];
                        return e = t.call.apply(t, [this].concat(a)) || this,
                            i(e, "pageList", G, o(e)),
                            e.curPage = null,
                            e
                    }
                    n(e, t);
                    var a = e.prototype;
                    return a.onLoad = function() {
                        this.onInitPages()
                    }
                        ,
                        a.onToggle = function(t) {
                            var e = t.node.getSiblingIndex();
                            this.changePage(e)
                        }
                        ,
                        a.changePage = function(t) {
                            t < 0 && (t = 0),
                            t >= this.pageList.length && (t = this.pageList.length - 1);
                            var e = this.pageList[t];
                            e != this.curPage && (this.curPage && (this.curPage.active = !1),
                                this.curPage = e,
                                this.curPage.active = !0,
                                this.updateInfo(t))
                        }
                        ,
                        a.onInitPages = function() {
                            this.changePage(0)
                        }
                        ,
                        a.updateInfo = function(t) {
                            this.notify(p.CLOSE_LOGIN_GIFT_VIEW);
                            var e = this.pageList[t];
                            e.components.forEach((function(t) {
                                    t instanceof f && t.updateInfo(null)
                                }
                            )),
                                e.components.forEach((function(t) {
                                        t instanceof u && t.updateInfo()
                                    }
                                )),
                                e.components.forEach((function(t) {
                                        t instanceof g && t.updateInfo()
                                    }
                                ))
                        }
                        ,
                        e
                }(s)).prototype, "pageList", [h], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }),
                    l = I)) || l));
                a._RF.pop()
            }
        }
    }
));
