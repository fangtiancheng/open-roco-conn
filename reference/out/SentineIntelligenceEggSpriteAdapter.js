System.register("chunks:///_virtual/SentineIntelligenceEggSpriteAdapter.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var t, i, n, s, d, r, o, a, c;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    i = e.inheritsLoose,
                    n = e.initializerDefineProperty,
                    s = e.assertThisInitialized
            }
                , function(e) {
                    d = e.cclegacy,
                        r = e._decorator,
                        o = e.SpriteFrame,
                        a = e.Sprite,
                        c = e.Component
                }
            ],
            execute: function() {
                var p, I, l, h, x;
                d._RF.push({}, "a6cb7JiOalAkYJFRVkpxKGy", "SentineIntelligenceEggSpriteAdapter", void 0);
                var g = r.ccclass
                    , u = r.property;
                e("SentineIntelligenceEggSpriteAdapter", (p = g("SentineIntelligenceEggSpriteAdapter"),
                    I = u(o),
                p((x = t((h = function(e) {
                    function t() {
                        for (var t, i = arguments.length, d = new Array(i), r = 0; r < i; r++)
                            d[r] = arguments[r];
                        return t = e.call.apply(e, [this].concat(d)) || this,
                            n(t, "icon", x, s(t)),
                            t.id2Index = new Map,
                            t
                    }
                    i(t, e);
                    var d = t.prototype;
                    return d.initId2Index = function() {
                        this.id2Index.set(67305568, 0),
                            this.id2Index.set(67374601, 1),
                            this.id2Index.set(67374644, 2),
                            this.id2Index.set(67374842, 3),
                            this.id2Index.set(67374682, 4),
                            this.id2Index.set(67305573, 5),
                            this.id2Index.set(67374993, 6),
                            this.id2Index.set(67374994, 7),
                            this.id2Index.set(67374995, 8),
                            this.id2Index.set(67305572, 9),
                            this.id2Index.set(67374766, 10),
                            this.id2Index.set(67374655, 11),
                            this.id2Index.set(67305569, 12),
                            this.id2Index.set(67305570, 13),
                            this.id2Index.set(67305571, 14),
                            this.id2Index.set(67374998, 15),
                            this.id2Index.set(67375003, 16),
                            this.id2Index.set(67375014, 17),
                            this.id2Index.set(67375017, 18),
                            this.id2Index.set(67375024, 19),
                            this.id2Index.set(67375026, 20)
                    }
                        ,
                        d.onLoad = function() {
                            this.initId2Index()
                        }
                        ,
                        d.updateSprite = function(e) {
                            console.log("[jinlong] [sentinel-Intelligence] [SentineIntelligenceEggSpriteAdapter] [updateSprite] eggId " + e),
                            0 === this.id2Index.size && this.initId2Index();
                            var t = this.getComponent(a)
                                , i = this.id2Index.get(e);
                            if (void 0 !== i) {
                                var n = this.icon[i];
                                n && (t.spriteFrame = n)
                            }
                        }
                        ,
                        t
                }(c)).prototype, "icon", [I], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }),
                    l = h)) || l));
                d._RF.pop()
            }
        }
    }
));
