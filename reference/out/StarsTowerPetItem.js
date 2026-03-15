System.register("chunks:///_virtual/StarsTowerPetItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GUIUtils.ts", "./ActivityAPI.ts", "./GameUI.ts", "./StarsTowerMessage.ts"], (function(t) {
        var e, r, i, n, o, a, s, c, u, l, p, f, h;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    r = t.inheritsLoose,
                    i = t.initializerDefineProperty,
                    n = t.assertThisInitialized
            }
                , function(t) {
                    o = t.cclegacy,
                        a = t._decorator,
                        s = t.Button,
                        c = t.Sprite,
                        u = t.Node
                }
                , function(t) {
                    l = t.GUI
                }
                , function(t) {
                    p = t.ActivityAPI
                }
                , function(t) {
                    f = t.GameSubUI
                }
                , function(t) {
                    h = t.StarsTowerMessage
                }
            ],
            execute: function() {
                var b, y, I, v, m, S, d, g;
                o._RF.push({}, "d7a35R6C5FCWpbDQ6MR5IkL", "StarsTowerPetItem", void 0);
                var w = a.ccclass
                    , T = a.property;
                t("StarsTowerPetItem", (b = T(s),
                    y = T(c),
                    I = T(u),
                w((S = e((m = function(t) {
                    function e() {
                        for (var e, r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                            o[a] = arguments[a];
                        return e = t.call.apply(t, [this].concat(o)) || this,
                            i(e, "button", S, n(e)),
                            i(e, "icon", d, n(e)),
                            i(e, "stars", g, n(e)),
                            e.params = void 0,
                            e
                    }
                    r(e, t);
                    var o = e.prototype;
                    return o.start = function() {
                        this.button.node.on(u.EventType.TOUCH_END, this.onTouch, this)
                    }
                        ,
                        o.refresh = function(t) {
                            this.params = t;
                            var e = p.getSpiritSrc(parseInt(t.spiritid));
                            l.instance.loadIcon(e, this.icon);
                            for (var r = 0; r < this.stars.length; r++) {
                                this.stars[r].active = r < parseInt(t.star)
                            }
                        }
                        ,
                        o.onTouch = function() {
                            "0" !== this.params.lastStar ? this.notify(h.SHOW_CHALLENGE_VIEW, this.params) : p.showAlert("请按照顺序进行挑战")
                        }
                        ,
                        e
                }(f)).prototype, "button", [b], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    d = e(m.prototype, "icon", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    g = e(m.prototype, "stars", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    v = m)) || v));
                o._RF.pop()
            }
        }
    }
));
