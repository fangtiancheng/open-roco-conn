System.register("chunks:///_virtual/BloodTalentSelectPetUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./BloodTalenMessage.ts", "./BloodTalentSelectPetItem.ts", "./BloodTalenCGI.ts", "./global.ts"], (function(t) {
        var e, n, o, i, l, s, a, r, c, u, f, h, d, p;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    n = t.inheritsLoose,
                    o = t.initializerDefineProperty,
                    i = t.assertThisInitialized
            }
                , function(t) {
                    l = t.cclegacy,
                        s = t._decorator,
                        a = t.Button,
                        r = t.Node,
                        c = t.NodeEventType
                }
                , function(t) {
                    u = t.GameUI
                }
                , function(t) {
                    f = t.BloodTalenMessage
                }
                , function(t) {
                    h = t.BloodTalentSelectPetItem
                }
                , function(t) {
                    d = t.GetTalenAwakePetData
                }
                , function(t) {
                    p = t.__global
                }
            ],
            execute: function() {
                var P, v, L, T, I, g;
                l._RF.push({}, "99597z9q1VOJJhvIc1Ha1Ov", "BloodTalentSelectPetUI", void 0);
                var E = s.ccclass
                    , _ = s.property;
                t("BloodTalentSelectPetUI", (P = _(a),
                    v = _(r),
                E((I = e((T = function(t) {
                    function e() {
                        for (var e, n = arguments.length, l = new Array(n), s = 0; s < n; s++)
                            l[s] = arguments[s];
                        return e = t.call.apply(t, [this].concat(l)) || this,
                            o(e, "confirmBtn", I, i(e)),
                            o(e, "petNode", g, i(e)),
                            e.petList = null,
                            e.selectedPet = null,
                            e
                    }
                    n(e, t);
                    var l = e.prototype;
                    return l.onLoad = function() {
                        this.onInitPetList()
                    }
                        ,
                        l.start = function() {
                            this.onRefreshPetData()
                        }
                        ,
                        l.onInitPetList = function() {
                            var t = this.petNode.children;
                            this.petList = new Array(t.length);
                            for (var e = 0; e < t.length; e++) {
                                var n = t[e]
                                    , o = n.getComponent(h);
                                this.petList[e] = o,
                                    n.on(c.TOUCH_END, this.onSelectPet, this)
                            }
                        }
                        ,
                        l.onRefreshPetData = function() {
                            var t = this;
                            d((function(e) {
                                    "0" === e.result.value ? t.onRefreshPetList(e.PetInfo) : t.onRefreshPetList([])
                                }
                            ))
                        }
                        ,
                        l.onRefreshPetList = function(t) {
                            for (var e = 0; e < this.petList.length; e++) {
                                var n = this.petList[e]
                                    , o = t[e];
                                n.data = o ? {
                                    petData: o,
                                    selected: !1
                                } : null
                            }
                        }
                        ,
                        l.onClose = function() {
                            this.notify(f.CLOSE_SELECT_PET_VIEW)
                        }
                        ,
                        l.onConfirm = function() {
                            if (this.selectedPet) {
                                this.notify(f.CLOSE_SELECT_PET_VIEW);
                                var t = this.selectedPet.data.petData;
                                this.notify(f.SHOW_SELECT_TALEN_VIEW, t)
                            } else
                                p.UI.alert("", "请选择一只宠物！")
                        }
                        ,
                        l.onSelectPet = function(t) {
                            var e = t.target.getComponent(h);
                            this.selectedPet !== e && null !== e.id && (this.selectedPet && (this.selectedPet.data = {
                                selected: !1
                            }),
                                this.selectedPet = e,
                                this.selectedPet.data = {
                                    selected: !0
                                })
                        }
                        ,
                        e
                }(u)).prototype, "confirmBtn", [P], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    g = e(T.prototype, "petNode", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    L = T)) || L));
                l._RF.pop()
            }
        }
    }
));
