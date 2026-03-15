System.register("chunks:///_virtual/SpiritBooskDetailUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./SpiritDes.ts", "./PureNotificationCenter.ts", "./AppConstDef.ts", "./SpriteFrameSelector.ts", "./RadarPic.ts", "./SpiritBooksDataProxy.ts", "./ConstSpiritBooks.ts", "./SpiritSkinDes.ts", "./PropertyDes.ts", "./global.ts", "./SpiritBookComplexLink.ts", "./ToolTip.ts", "./BubbleSkinType.ts", "./SpiritGroupIcon2.ts", "./ActivityAPI.ts", "./GUIUtils.ts"], (function(t) {
        var e, i, n, r, o, s, a, c, l, u, h, p, f, g, d, m, D, I, b, v, _, S, y, T, x, k, A, C, U, L;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    i = t.inheritsLoose,
                    n = t.initializerDefineProperty,
                    r = t.assertThisInitialized,
                    o = t.createClass
            }
                , function(t) {
                    s = t.cclegacy,
                        a = t._decorator,
                        c = t.Label,
                        l = t.Node,
                        u = t.Sprite,
                        h = t.RichText,
                        p = t.NodeEventType
                }
                , function(t) {
                    f = t.GameSubUI
                }
                , function(t) {
                    g = t.SpiritDes
                }
                , function(t) {
                    d = t.PureNotificationCenter
                }
                , function(t) {
                    m = t.AppConstDef
                }
                , function(t) {
                    D = t.default
                }
                , function(t) {
                    I = t.RadarPic
                }
                , function(t) {
                    b = t.SpiritBooksDataProxy
                }
                , function(t) {
                    v = t.ConstSpiritBooks
                }
                , function(t) {
                    _ = t.SpiritSkinDes
                }
                , function(t) {
                    S = t.PropertyDes
                }
                , function(t) {
                    y = t.__global
                }
                , function(t) {
                    T = t.SpiritBookComplexLink
                }
                , function(t) {
                    x = t.ToolTipComponent,
                        k = t.TipUtils
                }
                , function(t) {
                    A = t.BubbleSkinType
                }
                , function(t) {
                    C = t.SpiritGroupIcon
                }
                , function(t) {
                    U = t.ActivityAPI
                }
                , function(t) {
                    L = t.GUI
                }
            ],
            execute: function() {
                var w, B, E, N, P, R, W, z, F, H, G, O, K, M, V, j, q, J, Q, X, Y, Z, $, tt, et, it, nt, rt, ot, st, at, ct, lt, ut;
                s._RF.push({}, "7cc4eec/HFEfKgvlyntPILz", "SpiritBooskDetailUI", void 0);
                var ht = a.ccclass
                    , pt = a.property;
                t("SpiritBooskDetailUI", (w = pt(c),
                    B = pt(c),
                    E = pt(c),
                    N = pt(c),
                    P = pt(l),
                    R = pt(l),
                    W = pt(l),
                    z = pt(T),
                    F = pt(D),
                    H = pt(l),
                    G = pt(u),
                    O = pt(I),
                    K = pt(c),
                    M = pt(l),
                    V = pt(h),
                    j = pt(C),
                ht((Q = e((J = function(t) {
                    function e() {
                        for (var e, i = arguments.length, o = new Array(i), s = 0; s < i; s++)
                            o[s] = arguments[s];
                        return e = t.call.apply(t, [this].concat(o)) || this,
                            n(e, "spiritName", Q, r(e)),
                            n(e, "txtHeight", X, r(e)),
                            n(e, "txtWeight", Y, r(e)),
                            n(e, "txtInfo", Z, r(e)),
                            n(e, "mc_allUnknow", $, r(e)),
                            n(e, "btnWarehouse", tt, r(e)),
                            n(e, "mcCanNotEvo", et, r(e)),
                            n(e, "mcLinkUI", it, r(e)),
                            n(e, "propertyIcon", nt, r(e)),
                            n(e, "mcUnfind", rt, r(e)),
                            n(e, "mcIcon", ot, r(e)),
                            n(e, "mcRadar", st, r(e)),
                            n(e, "txtDesTitle", at, r(e)),
                            n(e, "txtHisTitle", ct, r(e)),
                            n(e, "txtGet", lt, r(e)),
                            n(e, "groupIcon", ut, r(e)),
                            e._currentDes = void 0,
                            e._curID = void 0,
                            e._tmpl = void 0,
                            e
                    }
                    i(e, t);
                    var s = e.prototype;
                    return s.onLoad = function() {
                        this.addEvents()
                    }
                        ,
                        s.addEvents = function() {
                            this.btnWarehouse.on(p.TOUCH_END, this.onClickWarehouse, this),
                                this.btnWarehouse.addComponent(x),
                                k.CreateTip(this.btnWarehouse, this.setDefaultColorAndText("去仓库取宠物！"), A.BLACK_TOOLTIP);
                            for (var t = 0; t < this.propertyIcon.length; t++)
                                this.propertyIcon[t].node.addComponent(x),
                                    k.CreateTip(this.propertyIcon[t].node, "", A.BLACK_TOOLTIP);
                            this.groupIcon.node.addComponent(x),
                                k.CreateTip(this.groupIcon.node, "", A.BLACK_TOOLTIP)
                        }
                        ,
                        s.setDefaultColorAndText = function(t) {
                            return "<color=#000000>" + t + "</color>"
                        }
                        ,
                        s.onClickWarehouse = function() {
                            d.sendNotification(m.NN_V_SHOW_SPIRIT_STORAGE_VIEW, this._currentDes.firstID)
                        }
                        ,
                        s.updateInfo = function(t, e, i, n) {
                            if (void 0 === i && (i = null),
                            void 0 === n && (n = !0),
                                this._currentDes = e,
                                this._curID = t,
                                this._tmpl = i,
                                this.updateDes(),
                            t < 1e5) {
                                this.mcLinkUI.node.active = !0,
                                    this.mcLinkUI.setSelectID(e.id);
                                var r = b.getLinkByID(e.firstID);
                                n && this.mcLinkUI.updateInfo(r),
                                    this.setShowGoStorageBtn(r)
                            } else
                                this.mcLinkUI.node.active = !1,
                                    this.btnWarehouse.active = !1,
                                    this.mc_allUnknow.active = !1
                        }
                        ,
                        s.updateDes = function() {
                            for (var t = 0; t < this.propertyIcon.length; t++)
                                this.propertyIcon[t].node.active = !1;
                            if (null == this._currentDes)
                                return this.mcRadar.setData(null),
                                    this.mcRadar.node.setScale(1.5, 1.5, 1.5),
                                    this.spiritName.string = "",
                                    this.txtHeight.string = "",
                                    this.txtWeight.string = "",
                                    this.txtInfo.string = "",
                                    this.txtGet.string = "",
                                    this.mcUnfind.active = !0,
                                    this.mcIcon.node.active = !1,
                                    this.txtDesTitle.string = "",
                                    void (this.txtHisTitle.active = !1);
                            if (this._curID < 1e5) {
                                if (this.txtDesTitle.string = "宠物简介：",
                                    this.txtHisTitle.active = !0,
                                b.getStateByID(this._currentDes.id) == v.STATE_UNKONW)
                                    this.mcRadar.setData(null),
                                        this.mcRadar.node.setScale(1.5, 1.5, 1.5),
                                        this.spiritName.string = this._currentDes.id + " " + this._currentDes.name,
                                        this.txtHeight.string = "--m",
                                        this.txtWeight.string = "--kg",
                                        this.txtInfo.string = "--",
                                        this.mcUnfind.active = !0,
                                        this.mcIcon.node.active = !1,
                                        this.groupIcon.node.active = !1;
                                else {
                                    this.mcRadar.setData(this._currentDes),
                                        this.mcRadar.node.setScale(1.5, 1.5, 1.5),
                                        this.spiritName.string = this._currentDes.id + " " + this._currentDes.name,
                                        this.txtHeight.string = this._currentDes.height,
                                        this.txtWeight.string = this._currentDes.weight,
                                        this.txtInfo.string = "" + this._currentDes.description,
                                        this.mcUnfind.active = !1,
                                        this.mcIcon.node.active = !0,
                                        this.groupIcon.node.active = !0,
                                        this.groupIcon.load(this._currentDes.group[0].id),
                                        this.groupIcon.node.tooltip = this.setDefaultColorAndText(this._currentDes.group[0].name);
                                    var e = U.getSpiritFullAvatar(this._currentDes.id.toString(), "Normal");
                                    this.mcIcon.spriteFrame = null,
                                        L.instance.loadIcon(e, this.mcIcon, (function(t) {
                                                console.log("[bbh] [fullAvatar] setPetData " + e + " success")
                                            }
                                        ), (function(t) {
                                                console.log("[bbh] [fullAvatar] setPetData " + e + " error", t)
                                            }
                                        )),
                                        b.getStateByID(this._currentDes.id) == v.STATE_CATCH || b.getStateByID(this._currentDes.id) == v.STATE_RELEASE ? this.mcIcon.grayscale = !1 : this.mcIcon.grayscale = !0
                                }
                                var i = this._tmpl && this._tmpl.propoLevel && 0 != this._currentDes.propoLevel ? "<font color='#FF0000'>【推荐等级:" + this._currentDes.propoLevel + "级】</font>" : "";
                                b.getStateByID(this._currentDes.id) != v.STATE_CATCH && b.getStateByID(this._currentDes.id) != v.STATE_RELEASE || (i = "");
                                var n = null == this._currentDes.getForm ? "" : "        " + i + this._currentDes.getForm;
                                n = "<outline color=#FFFFFF width=1><color=#8D3D0C>" + n + "</color></outline>",
                                    this.txtGet.string = n
                            } else {
                                this.txtDesTitle.string = "",
                                    this.txtHisTitle.active = !1,
                                    this.mcRadar.setData(this._currentDes),
                                    this.mcRadar.node.setScale(1.5, 1.5, 1.5),
                                    this.spiritName.string = this._currentDes.id + " " + _.SpiritSkinTypes[this._curID].name,
                                    this.txtHeight.string = "",
                                    this.txtWeight.string = "",
                                    this.txtInfo.string = "",
                                    this.mcUnfind.active = !1,
                                    this.txtGet.string = "",
                                    this.mcIcon.node.active = !0,
                                    this.groupIcon.node.active = !0,
                                    this.groupIcon.load(this._currentDes.group[0].id),
                                    this.groupIcon.node.tooltip = this.setDefaultColorAndText(this._currentDes.group[0].name);
                                var r = U.getSpiritFullAvatar(this._curID.toString(), "Normal");
                                this.mcIcon.spriteFrame = null,
                                    L.instance.loadIcon(r, this.mcIcon, (function(t) {
                                            console.log("[bbh] [fullAvatar] setPetData " + r + " success")
                                        }
                                    ), (function(t) {
                                            console.log("[bbh] [fullAvatar] setPetData " + r + " error", t)
                                        }
                                    ))
                            }
                            if (this._currentDes.features)
                                for (var o = 0; o < this._currentDes.features.length; o++) {
                                    var s = this.propertyIcon[o];
                                    s.node.active = !0,
                                        s.gotoAndStop(this._currentDes.features[o].id);
                                    var a = S.FEATURES[Number(this._currentDes.features[o].id)].name;
                                    s.node.tooltip = this.setDefaultColorAndText(a)
                                }
                        }
                        ,
                        s.setShowGoStorageBtn = function(t) {
                            if (null != t)
                                if (b.currentOwnerUin == y.MainRoleData.uin) {
                                    for (var e = 0; e < t.links.length; e++)
                                        if (t.links[e]instanceof g) {
                                            if (b.getStateByID(t.links[e].id) == v.STATE_CATCH)
                                                return void (this.btnWarehouse.active = !0)
                                        } else if (t.links[e])
                                            for (var i = 0; i < t.links[e].length; i++)
                                                this.setShowGoStorageBtn(t.links[e][i]);
                                    this.btnWarehouse.active = !1
                                } else
                                    this.btnWarehouse.active = !1
                        }
                        ,
                        s.updateLinkSelectState = function(t) {
                            if (t) {
                                this.mcLinkUI.updateSelectState(t.linkItem);
                                var e = t.id
                                    , i = b.getSpiritDesbyID(e);
                                this.updateInfo(e, i, null, !1)
                            }
                        }
                        ,
                        o(e, [{
                            key: "skinArr",
                            set: function(t) {
                                -1 != t.indexOf(this._curID) ? this.mcIcon.grayscale = !1 : this.mcIcon.grayscale = !0
                            }
                        }]),
                        e
                }(f)).prototype, "spiritName", [w], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    X = e(J.prototype, "txtHeight", [B], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    Y = e(J.prototype, "txtWeight", [E], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    Z = e(J.prototype, "txtInfo", [N], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    $ = e(J.prototype, "mc_allUnknow", [P], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    tt = e(J.prototype, "btnWarehouse", [R], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    et = e(J.prototype, "mcCanNotEvo", [W], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    it = e(J.prototype, "mcLinkUI", [z], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    nt = e(J.prototype, "propertyIcon", [F], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    rt = e(J.prototype, "mcUnfind", [H], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    ot = e(J.prototype, "mcIcon", [G], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    st = e(J.prototype, "mcRadar", [O], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    at = e(J.prototype, "txtDesTitle", [K], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    ct = e(J.prototype, "txtHisTitle", [M], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    lt = e(J.prototype, "txtGet", [V], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    ut = e(J.prototype, "groupIcon", [j], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    q = J)) || q));
                s._RF.pop()
            }
        }
    }
));
