System.register("chunks:///_virtual/StarsTowerUpgradePetItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./ActivityAPI.ts", "./GUIUtils.ts"], (function(e) {
        var t, i, r, n, a, l, s, c, o, u, p, f, d;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    i = e.inheritsLoose,
                    r = e.initializerDefineProperty,
                    n = e.assertThisInitialized,
                    a = e.createClass
            }
                , function(e) {
                    l = e.cclegacy,
                        s = e._decorator,
                        c = e.Sprite,
                        o = e.Label,
                        u = e.Node
                }
                , function(e) {
                    p = e.GameSubUI
                }
                , function(e) {
                    f = e.ActivityAPI
                }
                , function(e) {
                    d = e.GUI
                }
            ],
            execute: function() {
                var g, h, b, v, m, y, I, S;
                l._RF.push({}, "d461es7ZtdB/bnG+S6/Dxl1", "StarsTowerUpgradePetItem", void 0);
                var L = s.ccclass
                    , U = s.property;
                e("StarsTowerUpgradePetItem", (g = U(c),
                    h = U(o),
                    b = U(u),
                L((y = t((m = function(e) {
                    function t() {
                        for (var t, i = arguments.length, a = new Array(i), l = 0; l < i; l++)
                            a[l] = arguments[l];
                        return t = e.call.apply(e, [this].concat(a)) || this,
                            r(t, "icon", y, n(t)),
                            r(t, "levelLabel", I, n(t)),
                            r(t, "selectedFlag", S, n(t)),
                            t.params = void 0,
                            t
                    }
                    return i(t, e),
                        a(t, [{
                            key: "data",
                            get: function() {
                                return this.params
                            },
                            set: function(e) {
                                if (this.params = e,
                                    this.params) {
                                    this.levelLabel.string = "LV." + this.params.level;
                                    var t = f.getSpiritSrc(parseInt(this.params.id));
                                    d.instance.loadIcon(t, this.icon)
                                } else
                                    this.levelLabel.string = "",
                                        this.icon.spriteFrame = null
                            }
                        }, {
                            key: "selected",
                            get: function() {
                                return this.selectedFlag.active
                            },
                            set: function(e) {
                                this.selectedFlag.active = e
                            }
                        }]),
                        t
                }(p)).prototype, "icon", [g], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    I = t(m.prototype, "levelLabel", [h], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    S = t(m.prototype, "selectedFlag", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    v = m)) || v));
                l._RF.pop()
            }
        }
    }
));
