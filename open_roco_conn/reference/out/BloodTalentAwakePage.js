System.register("chunks:///_virtual/BloodTalentAwakePage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./TalenIcon.ts", "./BloodTalenMessage.ts", "./PropsIcon.ts", "./PetAnimation.ts", "./BloodTalenCGI.ts", "./global.ts", "./WindowMode.ts"], (function(e) {
        var t, n, a, i, o, r, l, s, u, c, p, f, d, h, m, b, g, P, v;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    n = e.inheritsLoose,
                    a = e.initializerDefineProperty,
                    i = e.assertThisInitialized,
                    o = e.createClass
            }
                , function(e) {
                    r = e.cclegacy,
                        l = e._decorator,
                        s = e.Label,
                        u = e.Button,
                        c = e.Node
                }
                , function(e) {
                    p = e.GameSubUI
                }
                , function(e) {
                    f = e.TalenIcon
                }
                , function(e) {
                    d = e.BloodTalenMessage
                }
                , function(e) {
                    h = e.PropsIcon
                }
                , function(e) {
                    m = e.PetAnimation,
                        b = e.PetAction
                }
                , function(e) {
                    g = e.ReqTalenAwake
                }
                , function(e) {
                    P = e.__global
                }
                , function(e) {
                    v = e.WindowMode
                }
            ],
            execute: function() {
                var y, I, L, B, w, A, D, T, _, S, k, E, N, R, x, z;
                r._RF.push({}, "29ca8jNTLlCQqrfrd1BgJ9S", "BloodTalentAwakePage", void 0);
                var W = l.ccclass
                    , C = l.property;
                e("BloodTalentAwakePage", (y = C(f),
                    I = C(s),
                    L = C(u),
                    B = C(u),
                    w = C(u),
                    A = C(c),
                    D = C(m),
                W((S = t((_ = function(e) {
                    function t() {
                        for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                            o[r] = arguments[r];
                        return t = e.call.apply(e, [this].concat(o)) || this,
                            a(t, "talenInfo", S, i(t)),
                            a(t, "neddLevelLabel", k, i(t)),
                            a(t, "selectBtn", E, i(t)),
                            a(t, "reelectBtn", N, i(t)),
                            a(t, "awakeBtn", R, i(t)),
                            a(t, "needPropsNode", x, i(t)),
                            a(t, "petAnimation", z, i(t)),
                            t.needPropsList = null,
                            t.params = void 0,
                            t
                    }
                    n(t, e);
                    var r = t.prototype;
                    return r.onLoad = function() {
                        this.onInitNeedPropsList(),
                            this.refresh()
                    }
                        ,
                        r.refresh = function(e) {
                            this.params = e || {
                                petData: {
                                    index: null,
                                    id: null,
                                    level: null
                                },
                                talentData: {
                                    index: null,
                                    type: null,
                                    gift: null,
                                    dressInfo: null,
                                    needProps: []
                                }
                            },
                                this.onRefreshNeedPropsList(this.params.talentData),
                                this.onRefreshTalenInfo(this.params.talentData),
                                this.onRefreshPetInfo(this.params.petData),
                                this.onRefreshAwakeBtnState(this.params.talentData)
                        }
                        ,
                        r.onInitNeedPropsList = function() {
                            var e = this.needPropsNode.children;
                            this.needPropsList = new Array;
                            for (var t = 0; t < e.length; t++) {
                                var n = e[t].getComponent(h);
                                this.needPropsList[t] = n
                            }
                        }
                        ,
                        r.onRefreshNeedPropsList = function(e) {
                            for (var t = e.needProps, n = 0; n < this.needPropsList.length; n++) {
                                var a = this.needPropsList[n]
                                    , i = t[n];
                                a.data = i ? {
                                    id: i.id,
                                    count: i.count + "/" + i.need,
                                    dataSource: i
                                } : {
                                    id: null,
                                    count: null,
                                    dataSource: null
                                }
                            }
                        }
                        ,
                        r.onRefreshTalenInfo = function(e) {
                            var t = e.type;
                            this.talenInfo.data = {
                                id: t
                            },
                                this.reelectBtn.node.active = !!t
                        }
                        ,
                        r.onRefreshPetInfo = function(e) {
                            var t = e.id
                                , n = e.level;
                            this.neddLevelLabel.string = n ? "需求等级:" + n + "/100" : "",
                                t ? this.petAnimation.data = {
                                    id: t,
                                    actionName: b.IDLE
                                } : this.petAnimation.node.removeAllChildren()
                        }
                        ,
                        r.onRefreshAwakeBtnState = function(e) {
                            e.type,
                                e.gift,
                                e.dressInfo
                        }
                        ,
                        r.onSelectBtn = function() {
                            this.notify(d.SHOW_SELECT_PET_VIEW)
                        }
                        ,
                        r.onReelectBtn = function() {
                            var e = this.params.petData;
                            this.notify(d.SHOW_SELECT_TALEN_VIEW, e)
                        }
                        ,
                        r.onAwakeBtn = function() {
                            var e = this;
                            null !== this.params.petData.id ? g({
                                index: this.params.petData.index,
                                bloodindex: this.params.talentData.index
                            }, (function(t) {
                                    if ("0" === t.result.value) {
                                        var n = {
                                            type: e.params.talentData.type
                                        };
                                        e.refresh(),
                                            e.notify(d.SHOW_TALEN_AWAKE_VIEW, n)
                                    } else
                                        P.showMsgBox(t.result.msg)
                                }
                            )) : P.UI.alert("", "请先选择要觉醒的宠物~", v.OK)
                        }
                        ,
                        o(t, [{
                            key: "petData",
                            get: function() {
                                return this.params.petData
                            }
                        }, {
                            key: "talentIndex",
                            get: function() {
                                return this.params.talentData.index
                            }
                        }]),
                        t
                }(p)).prototype, "talenInfo", [y], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    k = t(_.prototype, "neddLevelLabel", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    E = t(_.prototype, "selectBtn", [L], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    N = t(_.prototype, "reelectBtn", [B], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    R = t(_.prototype, "awakeBtn", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    x = t(_.prototype, "needPropsNode", [A], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    z = t(_.prototype, "petAnimation", [D], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    T = _)) || T));
                r._RF.pop()
            }
        }
    }
));
