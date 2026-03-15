System.register("chunks:///_virtual/ItemIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GUIUtils.ts", "./Icon.ts", "./ItemIconTips.ts", "./UIManager.ts"], (function(t) {
        var i, n, s, o, e, r, c, a, h, u, p, l, f, d, m, T, I, y;
        return {
            setters: [function(t) {
                i = t.applyDecoratedDescriptor,
                    n = t.inheritsLoose,
                    s = t.initializerDefineProperty,
                    o = t.assertThisInitialized,
                    e = t.createClass
            }
                , function(t) {
                    r = t.cclegacy,
                        c = t._decorator,
                        a = t.Node,
                        h = t.Prefab,
                        u = t.Sprite,
                        p = t.sys,
                        l = t.NodeEventType,
                        f = t.instantiate,
                        d = t.Component
                }
                , function(t) {
                    m = t.GUI
                }
                , function(t) {
                    T = t.Icon
                }
                , function(t) {
                    I = t.ItemIconTips
                }
                , function(t) {
                    y = t.default
                }
            ],
            execute: function() {
                var g, v, _, b, U, S, w, E;
                r._RF.push({}, "3f78aQ23RtB9pSMrTi1Lm7T", "ItemIcon", void 0);
                var C = c.ccclass
                    , O = c.property;
                t("ItemIcon", (g = O(a),
                    v = O(h),
                    _ = O(u),
                C((S = i((U = function(t) {
                    function i() {
                        for (var i, n = arguments.length, e = new Array(n), r = 0; r < n; r++)
                            e[r] = arguments[r];
                        return i = t.call.apply(t, [this].concat(e)) || this,
                            s(i, "tipsTarget", S, o(i)),
                            s(i, "tipsPrefab", w, o(i)),
                            s(i, "icon", E, o(i)),
                            i._iconItem = void 0,
                            i._url = null,
                            i.currUrl = void 0,
                            i.tips = void 0,
                            i.isShowTips = void 0,
                            i
                    }
                    n(i, t);
                    var r = i.prototype;
                    return r.onLoad = function() {
                        p.platform === p.Platform.MOBILE_BROWSER ? (this.node.on(l.TOUCH_START, this.onTouchStart, this, !0),
                            this.node.on(l.TOUCH_CANCEL, this.onTouchCancel, this, !0),
                            this.node.on(l.TOUCH_END, this.onTouchEnd, this, !0)) : (this.node.on(l.MOUSE_ENTER, this.onOver, this),
                            this.node.on(l.MOUSE_LEAVE, this.onOut, this)),
                            this.params.createTips = function(t, i) {
                                return 0 === i.length ? null : f(i[0])
                            }
                            ,
                            this.onInitParams(this.params)
                    }
                        ,
                        r.onEnable = function() {
                            this.refreshIcon()
                        }
                        ,
                        r.onDestroy = function() {
                            this.tips && (this.tips.node.parent.removeChild(this.tips.node),
                                this.tips.destroy()),
                            this.icon && this.icon.spriteFrame && (this.icon.spriteFrame.texture.destroy(),
                                this.icon.spriteFrame.destroy(),
                                this.icon.spriteFrame = null)
                        }
                        ,
                        r.onOver = function() {
                            this.showTips(50)
                        }
                        ,
                        r.onOut = function() {
                            this.closeTips()
                        }
                        ,
                        r.onTouchStart = function() {
                            this.showTips(1e3)
                        }
                        ,
                        r.onTouchCancel = function() {
                            this.closeTips()
                        }
                        ,
                        r.onTouchEnd = function() {
                            this.closeTips()
                        }
                        ,
                        r.showTips = function(t) {
                            var i = this;
                            this.params.showTips && null !== this.data.id && (this.isShowTips = !0,
                                setTimeout((function() {
                                        if (i.isShowTips && i.node.isValid && !i.tips) {
                                            var t = i.params.createTips(i.iconItem, i.tipsPrefab);
                                            if (t) {
                                                for (var n = t.components, s = 0; s < n.length; s++) {
                                                    var o = n[s];
                                                    if (o instanceof I) {
                                                        i.tips = o;
                                                        break
                                                    }
                                                }
                                                y.gTips.addChild(t),
                                                    i.tips.data = i.data,
                                                    i.tips.updatePosition(i.tipsTarget)
                                            }
                                        }
                                    }
                                ), t))
                        }
                        ,
                        r.closeTips = function() {
                            this.params.showTips && (this.isShowTips = !1,
                            this.tips && y.gTips.removeChild(this.tips.node),
                                this.tips = null)
                        }
                        ,
                        r.onUpdateIcon = function(t) {
                            this._url !== t && this.icon && (this._url = t,
                                this.refreshIcon())
                        }
                        ,
                        r.onInitParams = function(t) {}
                        ,
                        r.refreshIcon = function() {
                            this.isValid && this.currUrl !== this._url && this.icon && (this.currUrl = this._url,
                                this.currUrl && "" !== this.currUrl ? m.instance.loadIcon(this.currUrl, this.icon) : this.icon.spriteFrame = null)
                        }
                        ,
                        e(i, [{
                            key: "id",
                            get: function() {
                                return this.iconItem.id
                            }
                        }, {
                            key: "dataSource",
                            get: function() {
                                return this.iconItem.dataSource
                            }
                        }, {
                            key: "params",
                            get: function() {
                                return this.iconItem.params
                            },
                            set: function(t) {
                                this.iconItem.params = t
                            }
                        }, {
                            key: "data",
                            get: function() {
                                return this.iconItem.data
                            },
                            set: function(t) {
                                this.iconItem.data = t
                            }
                        }, {
                            key: "iconItem",
                            get: function() {
                                return this._iconItem ? this._iconItem : this._iconItem = new T(this)
                            }
                        }]),
                        i
                }(d)).prototype, "tipsTarget", [g], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    w = i(U.prototype, "tipsPrefab", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    E = i(U.prototype, "icon", [_], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    b = U)) || b));
                r._RF.pop()
            }
        }
    }
));
