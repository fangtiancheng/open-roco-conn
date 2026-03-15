System.register("chunks:///_virtual/CreateRoleUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./AnimationGAF.ts", "./CGI.ts", "./global.ts", "./CreateRoleMessage.ts", "./CrateRoleCatEffect.ts"], (function(e) {
        var t, n, i, o, a, r, l, s, c, u, g, f, h, m, b, p, C, d, R, y, E, T;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    n = e.inheritsLoose,
                    i = e.initializerDefineProperty,
                    o = e.assertThisInitialized
            }
                , function(e) {
                    a = e.cclegacy,
                        r = e._decorator,
                        l = e.JsonAsset,
                        s = e.Node,
                        c = e.EditBox,
                        u = e.Button,
                        g = e.ToggleContainer,
                        f = e.Sprite,
                        h = e.SpriteFrame,
                        m = e.NodeEventType,
                        b = e.Toggle
                }
                , function(e) {
                    p = e.GameUI
                }
                , function(e) {
                    C = e.AnimationGAF,
                        d = e.AnimationGAFEvent
                }
                , function(e) {
                    R = e.CGI
                }
                , function(e) {
                    y = e.__global
                }
                , function(e) {
                    E = e.CreateRoleMessage
                }
                , function(e) {
                    T = e.CrateRoleCatEffect
                }
            ],
            execute: function() {
                var v, k, w, A, I, L, N, B, _, M, S, z, G, F, U, D, H, O, x, W, P, V, j, q, J, Y, K, Q, X, Z, $;
                a._RF.push({}, "85d57e0tq5I0r3yWn6x8uGi", "CreateRoleUI", void 0);
                var ee = r.ccclass
                    , te = r.property;
                e("CreateRoleUI", (v = ee("CreateRoleUI"),
                    k = te(l),
                    w = te(s),
                    A = te(c),
                    I = te(u),
                    L = te(g),
                    N = te(u),
                    B = te(u),
                    _ = te(g),
                    M = te(f),
                    S = te(f),
                    z = te(h),
                    G = te(h),
                    F = te(C),
                    U = te(T),
                v((O = t((H = function(e) {
                    function t() {
                        for (var t, n = arguments.length, a = new Array(n), r = 0; r < n; r++)
                            a[r] = arguments[r];
                        return t = e.call.apply(e, [this].concat(a)) || this,
                            i(t, "nameCfg", O, o(t)),
                            i(t, "inputMask", x, o(t)),
                            i(t, "nameLabel", W, o(t)),
                            i(t, "nameRandomBtn", P, o(t)),
                            i(t, "skinToggleContainer", V, o(t)),
                            i(t, "skinRandomBtn", j, o(t)),
                            i(t, "createBtn", q, o(t)),
                            i(t, "roleToggleContainer", J, o(t)),
                            i(t, "girlRole", Y, o(t)),
                            i(t, "boyRole", K, o(t)),
                            i(t, "girlRoleList", Q, o(t)),
                            i(t, "boyRoleList", X, o(t)),
                            i(t, "roleAnimation", Z, o(t)),
                            i(t, "catEffect", $, o(t)),
                            t.curRoleToggle = null,
                            t.curSkinToggle = null,
                            t
                    }
                    n(t, e);
                    var a = t.prototype;
                    return a.onLoad = function() {
                        this.boyRole.node.parent.active = !1,
                            this.girlRole.node.parent.active = !1,
                            this.onRoleToggleContainerEvent(),
                            this.onSkinToggleContainerEvent(),
                            this.createBtn.node.on(m.TOUCH_END, this.onCreateBtn, this),
                            this.nameRandomBtn.node.on(m.TOUCH_END, this.onNameRandomBtn, this),
                            this.skinRandomBtn.node.on(m.TOUCH_END, this.onSkinRandomBtn, this),
                            this.roleAnimation.node.on(d.FRAME_EVENT, this.onFrameEvent, this),
                            this.nameLabel.node.on("text-changed", this.onNameLabelChange, this),
                            this.inputMask.active = !0
                    }
                        ,
                        a.update = function(e) {}
                        ,
                        a.onPlayRoleAni = function() {
                            this.roleAnimation.create("create_role_boy_and_girl"),
                                this.roleAnimation.fps = 24,
                                this.catEffect.createCat(),
                                this.catEffect.warnDefault()
                        }
                        ,
                        a.onRoleToggleContainerEvent = function() {
                            for (var e = this.roleToggleContainer.toggleItems, t = 0; t < e.length; t++)
                                e[t].node.on(b.EventType.TOGGLE, this.onRoleToggle, this)
                        }
                        ,
                        a.onSkinToggleContainerEvent = function() {
                            for (var e = this.skinToggleContainer.toggleItems, t = 0; t < e.length; t++)
                                e[t].node.on(b.EventType.TOGGLE, this.onSkinToggle, this)
                        }
                        ,
                        a.onCreateBtn = function() {
                            var e = this
                                , t = this.nameLabel.string;
                            if (t.length < 1)
                                this.catEffect.warnNoName();
                            else {
                                for (var n = 1, i = this.skinToggleContainer.toggleItems, o = 0; o < i.length; o++)
                                    if (i[o].isChecked) {
                                        n = o + 1;
                                        break
                                    }
                                var a = this.roleToggleContainer.toggleItems[0].isChecked ? 0 : 1;
                                this.inputMask.active = !0,
                                    this.catEffect.warnCreating(),
                                    R.CreateRole(t, n, a, (function(t) {
                                            e.inputMask.active = !1,
                                                "0" === t.result.value ? (e.catEffect.warnCreateSucc(),
                                                    e.notify(E.SHOW_CREATE_SUCCESS_VIEW)) : (e.catEffect.warnCreateFail(),
                                                    y.showMsgBox(t.result.msg))
                                        }
                                    ), (function(t) {
                                            e.inputMask.active = !1,
                                                y.showMsgBox("网络繁忙，请稍后再试！")
                                        }
                                    ))
                            }
                        }
                        ,
                        a.onNameRandomBtn = function() {
                            this.nameLabel.string = this.randomName(this.roleToggleContainer.toggleItems[0].isChecked ? 0 : 1)
                        }
                        ,
                        a.onSkinRandomBtn = function() {
                            var e = this.girlRoleList.length - 1
                                , t = Math.floor(Math.random() * (e - 0 + 1)) + 0;
                            this.skinToggleContainer.toggleItems[t].isChecked = !0
                        }
                        ,
                        a.onNameLabelChange = function() {
                            this.checkNameValidity()
                        }
                        ,
                        a.onRoleToggle = function(e) {
                            this.curRoleToggle != e && (this.curRoleToggle = e,
                                this.nameLabel.string = this.randomName(this.roleToggleContainer.toggleItems[0].isChecked ? 0 : 1))
                        }
                        ,
                        a.onSkinToggle = function(e) {
                            this.curSkinToggle != e && (this.curSkinToggle = e,
                                this.onUpdateRole())
                        }
                        ,
                        a.onUpdateRole = function() {
                            for (var e = 0, t = this.skinToggleContainer.toggleItems, n = 0; n < t.length; n++)
                                if (t[n].isChecked) {
                                    e = n;
                                    break
                                }
                            this.girlRole.spriteFrame = this.girlRoleList[e],
                                this.boyRole.spriteFrame = this.boyRoleList[e]
                        }
                        ,
                        a.onPlayRoleAniComplete = function() {
                            var e = this;
                            this.nameLabel.string = this.randomName(this.roleToggleContainer.toggleItems[0].isChecked ? 0 : 1),
                                this.roleAnimation.stop(!0),
                                this.roleAnimation.node.active = !1,
                                setTimeout((function() {
                                        e.notify(E.SHOW_AGREEMENT_VIEW),
                                            e.inputMask.active = !1
                                    }
                                ), 1e3)
                        }
                        ,
                        a.onFrameEvent = function(e) {
                            "BOY_HIDE" == e.tag ? this.boyRole.node.parent.active = !0 : "GIRL_HIDE" == e.tag && (this.girlRole.node.parent.active = !0,
                                this.onPlayRoleAniComplete())
                        }
                        ,
                        a.randomName = function(e) {
                            var t = this.nameCfg.json
                                , n = 0 == e ? t.BoyNames : t.GirlNames
                                , i = n.length - 1;
                            return n[Math.floor(Math.random() * (i - 0 + 1)) + 0]
                        }
                        ,
                        a.checkNameValidity = function() {
                            for (var e = 0, t = this.nameLabel.string, n = 0; n < t.length; n++)
                                if (t.charCodeAt(n) > 128 ? e += 2 : e++,
                                e > 10)
                                    return this.nameLabel.string = t.substring(0, n),
                                        this.catEffect.warnTooManyWords(),
                                        !1;
                            return !0
                        }
                        ,
                        a.warnAgree = function() {
                            this.catEffect.warnAgree()
                        }
                        ,
                        a.warnNoAgree = function() {
                            this.catEffect.warnNoAgree()
                        }
                        ,
                        a.warnDefault = function() {
                            this.catEffect.warnDefault()
                        }
                        ,
                        t
                }(p)).prototype, "nameCfg", [k], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    x = t(H.prototype, "inputMask", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    W = t(H.prototype, "nameLabel", [A], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    P = t(H.prototype, "nameRandomBtn", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    V = t(H.prototype, "skinToggleContainer", [L], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    j = t(H.prototype, "skinRandomBtn", [N], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    q = t(H.prototype, "createBtn", [B], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    J = t(H.prototype, "roleToggleContainer", [_], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    Y = t(H.prototype, "girlRole", [M], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    K = t(H.prototype, "boyRole", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    Q = t(H.prototype, "girlRoleList", [z], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    X = t(H.prototype, "boyRoleList", [G], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    Z = t(H.prototype, "roleAnimation", [F], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    $ = t(H.prototype, "catEffect", [U], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    D = H)) || D));
                a._RF.pop()
            }
        }
    }
));
