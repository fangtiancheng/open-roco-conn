System.register("chunks:///_virtual/SpiritBookComplexLink.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpiritBooksLinkItem.ts", "./SpiritDes.ts", "./SpiritBooksDataProxy.ts", "./SpiritBooskDetailUI.ts", "./ConstSpiritBooks.ts"], (function(t) {
        var i, e, n, o, r, s, l, a, c, h, u, p, k, f, I, m, _;
        return {
            setters: [function(t) {
                i = t.applyDecoratedDescriptor,
                    e = t.inheritsLoose,
                    n = t.initializerDefineProperty,
                    o = t.assertThisInitialized
            }
                , function(t) {
                    r = t.cclegacy,
                        s = t._decorator,
                        l = t.Prefab,
                        a = t.Node,
                        c = t.Graphics,
                        h = t.Color,
                        u = t.instantiate,
                        p = t.Component
                }
                , function(t) {
                    k = t.SpiritBooksLinkItem
                }
                , function(t) {
                    f = t.SpiritDes
                }
                , function(t) {
                    I = t.SpiritBooksDataProxy
                }
                , function(t) {
                    m = t.SpiritBooskDetailUI
                }
                , function(t) {
                    _ = t.ConstSpiritBooks
                }
            ],
            execute: function() {
                var d, C, v, P, g, T, A, S, L;
                r._RF.push({}, "df4a3MbCjNJTJ4qJisoQ6+f", "SpiritBookComplexLink", void 0);
                var y = s.ccclass
                    , E = s.property;
                t("SpiritBookComplexLink", (d = y("SpiritBookComplexLink"),
                    C = E(l),
                    v = E({
                        type: l
                    }),
                    P = E(a),
                d((A = i((T = function(t) {
                    function i() {
                        for (var i, e = arguments.length, r = new Array(e), s = 0; s < e; s++)
                            r[s] = arguments[s];
                        return i = t.call.apply(t, [this].concat(r)) || this,
                            n(i, "mcArrow", A, o(i)),
                            n(i, "spiritBooksLinkItemPrefab", S, o(i)),
                            n(i, "linkCon", L, o(i)),
                            i.CON_WIDTH = 464,
                            i.CON_HEIGHT = 380,
                            i.ITEM_WH = 60,
                            i.ITEM_GAP_X = 60,
                            i._currLinkItem = null,
                            i._currentSelectID = 0,
                            i._currentVO = null,
                            i.itemPool = [],
                            i.arrowPool = [],
                            i
                    }
                    e(i, t);
                    var r = i.prototype;
                    return r.onLoad = function() {
                        this.addEvents()
                    }
                        ,
                        r.addEvents = function() {}
                        ,
                        r.updateSelectState = function(t) {
                            this._currLinkItem && (this._currLinkItem.select = !1),
                                this._currLinkItem = t
                        }
                        ,
                        r.setSelectID = function(t) {
                            this._currentSelectID = t
                        }
                        ,
                        r.updateInfo = function(t) {
                            this._currentVO = t,
                                t.firstID > 0 ? this.node.parent.getComponent(m).mc_allUnknow.active = I.getIconState(t.firstID) == _.STATE_UNKONW : this.node.parent.getComponent(m).mc_allUnknow.active = !1,
                                this.clearAllNodes();
                            for (var i = 0, e = 0; e < t.links.length; e++)
                                if (Array.isArray(t.links[e])) {
                                    i = t.links[e].length;
                                    break
                                }
                            for (var n = this.CON_HEIGHT / 2, o = (this.CON_WIDTH - this.ITEM_WH * t.level - this.ITEM_GAP_X * (t.level - 1) + this.ITEM_WH) / 2 - 10, r = 0; r < t.links.length; r++) {
                                if (t.links[r]instanceof f) {
                                    var s = t.links[r]
                                        , l = this.getLinkItem()
                                        , u = l.getComponent(k);
                                    if (u.updateInfo(s),
                                        l.setPosition(o, -(n - 30), 0),
                                    s.id === this._currentSelectID && (u.select = !0,
                                        this._currLinkItem = u),
                                    0 !== r) {
                                        var p = this.getArrow();
                                        p.setPosition(o - (this.ITEM_WH + this.ITEM_GAP_X) / 2, -(n - 34), 0),
                                            this.linkCon.addChild(p)
                                    }
                                    o = o + this.ITEM_WH + this.ITEM_GAP_X,
                                        this.linkCon.addChild(l)
                                }
                                if (Array.isArray(t.links[r]))
                                    for (var d = t.links[r], C = 0; C < d.length; C++) {
                                        var v = d[C]
                                            , P = (C + 1) * (this.CON_HEIGHT / (i + 1))
                                            , g = o;
                                        if (0 === C) {
                                            var T = new a("Line")
                                                , A = T.addComponent(c);
                                            A.fillColor = new h(238,106,51,255),
                                                A.strokeColor = new h(238,106,51,255),
                                                A.lineWidth = 5,
                                                A.moveTo(0, 0);
                                            var S = (i - 1) * (this.CON_HEIGHT / (i + 1)) + 1;
                                            A.lineTo(0, -S),
                                                A.stroke(),
                                                T.setPosition(g - (this.ITEM_WH + this.ITEM_GAP_X) / 2 - 10, -(P - 35), 0),
                                                this.linkCon.addChild(T)
                                        }
                                        for (var L = 0; L < v.links.length; L++) {
                                            var y = v.links[L]
                                                , E = this.getLinkItem()
                                                , w = E.getComponent(k);
                                            w.updateInfo(y),
                                                E.setPosition(g, -(P - 30), 0),
                                            y.id === this._currentSelectID && (w.select = !0);
                                            var H = this.getArrow();
                                            H.setPosition(g - (this.ITEM_WH + this.ITEM_GAP_X) / 2, -(P - 34), 0),
                                                g = g + this.ITEM_WH + this.ITEM_GAP_X,
                                                this.linkCon.addChild(H),
                                                this.linkCon.addChild(E)
                                        }
                                    }
                            }
                        }
                        ,
                        r.getLinkItem = function() {
                            return this.itemPool.length > 0 ? this.itemPool.pop() : u(this.spiritBooksLinkItemPrefab)
                        }
                        ,
                        r.recycleLinkItem = function(t) {
                            t.removeFromParent();
                            var i = t.getComponent(k);
                            i && (i.select = !1),
                                this.itemPool.push(t)
                        }
                        ,
                        r.getArrow = function() {
                            return this.arrowPool.length > 0 ? this.arrowPool.pop() : u(this.mcArrow)
                        }
                        ,
                        r.recycleArrow = function(t) {
                            t.removeFromParent(),
                                this.arrowPool.push(t)
                        }
                        ,
                        r.clearAllNodes = function() {
                            for (var t = [].concat(this.linkCon.children), i = 0; i < t.length; i++) {
                                var e = t[i];
                                e.getComponent(k) ? this.recycleLinkItem(e) : e.getComponent(c) || this.recycleArrow(e)
                            }
                            this.linkCon.removeAllChildren()
                        }
                        ,
                        i
                }(p)).prototype, "mcArrow", [C], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    S = i(T.prototype, "spiritBooksLinkItemPrefab", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    L = i(T.prototype, "linkCon", [P], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    g = T)) || g));
                r._RF.pop()
            }
        }
    }
));
