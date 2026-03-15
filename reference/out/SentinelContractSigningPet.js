System.register("chunks:///_virtual/SentinelContractSigningPet.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SentinelContractSigningPetIcon.ts", "./Icon.ts", "./PropertyDes.ts"], (function(t) {
        var e, n, i, r, a, o, c, l, s, h, g, u, p;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    n = t.inheritsLoose,
                    i = t.initializerDefineProperty,
                    r = t.assertThisInitialized
            }
                , function(t) {
                    a = t.cclegacy,
                        o = t._decorator,
                        c = t.Label,
                        l = t.Sprite,
                        s = t.Toggle,
                        h = t.Component
                }
                , function(t) {
                    g = t.SentinelContractSigningPetIcon
                }
                , function(t) {
                    u = t.IconType
                }
                , function(t) {
                    p = t.PropertyDes
                }
            ],
            execute: function() {
                var d, v, f, m, y, b, S, C, P, T, F, E;
                a._RF.push({}, "e7781/sENNAj7ac6ja1fbCE", "SentinelContractSigningPet", void 0);
                var L = o.ccclass
                    , w = o.property;
                t("SentinelContractSigningPet", (d = L("SentinelContractSigningPet"),
                    v = w(c),
                    f = w(l),
                    m = w(c),
                    y = w(l),
                d(((E = function(t) {
                    function e() {
                        for (var e, n = arguments.length, a = new Array(n), o = 0; o < n; o++)
                            a[o] = arguments[o];
                        return e = t.call.apply(t, [this].concat(a)) || this,
                            i(e, "level", C, r(e)),
                            i(e, "icon", P, r(e)),
                            i(e, "character", T, r(e)),
                            i(e, "characterBg", F, r(e)),
                            e.index = 0,
                            e.data = null,
                            e.characterFormat = "",
                            e.levelFormat = "",
                            e
                    }
                    n(e, t);
                    var a = e.prototype;
                    return a.onLoad = function() {
                        this.characterFormat = this.character.string,
                            this.levelFormat = this.level.string,
                            this.node.on(s.EventType.TOGGLE, this.onToggle, this)
                    }
                        ,
                        a.onToggle = function() {
                            var t = this.node.getComponent(s);
                            this.node.emit(e.TOGGLE, this, t.isChecked)
                        }
                        ,
                        a.setPetData = function(t, e) {
                            if (!t)
                                return this.data = null,
                                    this.level.string = "",
                                    this.character.string = "",
                                    this.icon.node.active = !1,
                                    this.characterBg.node.active = !1,
                                    void (this.node.getComponent(s).enabled = !1);
                            this.node.active = !0,
                                this.characterBg.node.active = !0,
                                this.icon.node.active = !0,
                                this.node.getComponent(s).enabled = !0,
                                this.index = e,
                                this.data = t,
                                this.level.string = this.levelFormat.replace("{0}", t.level);
                            var n = t.personality
                                , i = p.getTemperStr(parseInt(n));
                            this.character.string = this.characterFormat.replace("{0}", i);
                            var r = {
                                type: u.PET,
                                showTips: !1
                            }
                                , a = {
                                id: t.id
                            }
                                , o = this.icon.getComponent(g);
                            o.params = r,
                                o.data = a
                        }
                        ,
                        e
                }(h)).TOGGLE = "toggle@SentinelContractSigningPet",
                    C = e((S = E).prototype, "level", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    P = e(S.prototype, "icon", [f], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    T = e(S.prototype, "character", [m], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    F = e(S.prototype, "characterBg", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    b = S)) || b));
                a._RF.pop()
            }
        }
    }
));
