System.register("chunks:///_virtual/StarsTowerUpgradePetUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./StarsTowerUpgradePetItem.ts", "./StarsTowerMessage.ts", "./StarsTowerCGI.ts", "./global.ts", "./ActivityAPI.ts"], (function(t) {
        var e, n, o, i, r, s, a, l, c, u, f, p, h, m;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    n = t.inheritsLoose,
                    o = t.initializerDefineProperty,
                    i = t.assertThisInitialized
            }
                , function(t) {
                    r = t.cclegacy,
                        s = t._decorator,
                        a = t.Node,
                        l = t.NodeEventType
                }
                , function(t) {
                    c = t.GameUI
                }
                , function(t) {
                    u = t.StarsTowerUpgradePetItem
                }
                , function(t) {
                    f = t.StarsTowerMessage
                }
                , function(t) {
                    p = t.FullLevel
                }
                , function(t) {
                    h = t.__global
                }
                , function(t) {
                    m = t.ActivityAPI
                }
            ],
            execute: function() {
                var I, d, g, P, B, U, v, y, w, C;
                r._RF.push({}, "9fef79rChVHYp+/jXnUEl1M", "StarsTowerUpgradePetUI", void 0);
                var _ = s.ccclass
                    , b = s.property;
                t("StarsTowerUpgradePetUI", (I = b(a),
                    d = b(a),
                    g = b(a),
                    P = b(u),
                _((v = e((U = function(t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), s = 0; s < n; s++)
                            r[s] = arguments[s];
                        return e = t.call.apply(t, [this].concat(r)) || this,
                            o(e, "closeBtn", v, i(e)),
                            o(e, "confirmButton", y, i(e)),
                            o(e, "cancelButton", w, i(e)),
                            o(e, "petItems", C, i(e)),
                            e.params = null,
                            e.selectedPetItem = null,
                            e
                    }
                    n(e, t);
                    var r = e.prototype;
                    return r.start = function() {
                        this.closeBtn.on(l.TOUCH_END, this.onCloseBtn, this),
                            this.cancelButton.on(l.TOUCH_END, this.onCancelButton, this),
                            this.confirmButton.on(l.TOUCH_END, this.onConfirmButton, this);
                        for (var t = this.petItems.length, e = 0; e < t; e++) {
                            this.petItems[e].node.on(l.TOUCH_END, this.onPetItem, this)
                        }
                    }
                        ,
                        r.onCloseBtn = function() {
                            this.notify(f.CLOSE_UPGRADE_PET_VIEW)
                        }
                        ,
                        r.refresh = function(t) {
                            t && (this.params = t),
                                this.updateView()
                        }
                        ,
                        r.updateView = function() {
                            this.onUpdatePetItems(this.params)
                        }
                        ,
                        r.onUpdatePetItems = function(t) {
                            var e, n = t.PetInfo;
                            e = n instanceof Array ? n : [n];
                            for (var o = this.petItems.length, i = 0; i < o; i++) {
                                var r = this.petItems[i]
                                    , s = e[i];
                                r.data = s
                            }
                        }
                        ,
                        r.onCancelButton = function() {
                            this.onCloseBtn()
                        }
                        ,
                        r.onConfirmButton = function() {
                            var t = this;
                            if (this.selectedPetItem) {
                                var e = this.selectedPetItem.data;
                                m.showConfirmAlert("确定要把宠物：" + m.getSpiritName(e.id + "") + "升到满级吗？\n（确定后不可返回，请玩家谨慎选择！）", (function() {
                                        p(e.id, e.catch_time, (function(e) {
                                                e.result.code < 0 ? h.showMsgBox(e.result.msg) : (t.notify(f.SHOW_MAIN_VIEW),
                                                    t.onCloseBtn())
                                            }
                                        ))
                                    }
                                ))
                            } else
                                h.UI.alert("", "请选择一只宠物！")
                        }
                        ,
                        r.onPetItem = function(t) {
                            var e = t.target.getComponent(u);
                            e.data && this.selectedPetItem != e && (this.selectedPetItem && (this.selectedPetItem.selected = !1),
                                this.selectedPetItem = e,
                                this.selectedPetItem.selected = !0)
                        }
                        ,
                        e
                }(c)).prototype, "closeBtn", [I], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    y = e(U.prototype, "confirmButton", [d], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    w = e(U.prototype, "cancelButton", [g], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    C = e(U.prototype, "petItems", [P], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    B = U)) || B));
                r._RF.pop()
            }
        }
    }
));
