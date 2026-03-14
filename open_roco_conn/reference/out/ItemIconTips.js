System.register("chunks:///_virtual/ItemIconTips.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./IconTips.ts", "./GUIUtils.ts", "./UIManager.ts"], (function(t) {
        var i, n, e, o, r, s, c, a, u, l, h, p, d, f;
        return {
            setters: [function(t) {
                i = t.applyDecoratedDescriptor,
                    n = t.inheritsLoose,
                    e = t.initializerDefineProperty,
                    o = t.assertThisInitialized,
                    r = t.createClass
            }
                , function(t) {
                    s = t.cclegacy,
                        c = t._decorator,
                        a = t.Sprite,
                        u = t.Camera,
                        l = t.UITransform,
                        h = t.Component
                }
                , function(t) {
                    p = t.IconTips
                }
                , function(t) {
                    d = t.GUI
                }
                , function(t) {
                    f = t.default
                }
            ],
            execute: function() {
                var I, U, m, y;
                s._RF.push({}, "30586agrqpIep4Tilbq6czT", "ItemIconTips", void 0);
                var g = c.ccclass
                    , T = c.property;
                t("ItemIconTips", (I = T(a),
                g((y = i((m = function(t) {
                    function i() {
                        for (var i, n = arguments.length, r = new Array(n), s = 0; s < n; s++)
                            r[s] = arguments[s];
                        return i = t.call.apply(t, [this].concat(r)) || this,
                            e(i, "icon", y, o(i)),
                            i._iconTips = void 0,
                            i._url = null,
                            i.currUrl = void 0,
                            i
                    }
                    n(i, t);
                    var s = i.prototype;
                    return s.onEnable = function() {
                        this.refreshIcon()
                    }
                        ,
                        s.updatePosition = function(t) {
                            var i = f.gRoot.parent.getChildByName("Main Camera").getComponent(u)
                                , n = t.worldPosition
                                , e = t.getComponent(l)
                                , o = this.node.getComponent(l)
                                , r = i.convertToUINode(n, this.node.parent);
                            r.x > 0 ? r.x -= e.width / 2 + o.width / 2 : r.x += e.width / 2 + o.width / 2,
                                r.y > 0 ? r.y -= e.height : r.y += e.height,
                                this.node.setPosition(r.x, r.y)
                        }
                        ,
                        s.onUpdateIcon = function(t) {
                            this._url !== t && (this._url = t,
                                this.refreshIcon())
                        }
                        ,
                        s.onUpdateData = function(t) {}
                        ,
                        s.onUpdateView = function(t) {}
                        ,
                        s.refreshIcon = function() {
                            this.icon && this.isValid && this.currUrl !== this._url && (this.currUrl = this._url,
                                this.currUrl && "" !== this.currUrl ? d.instance.loadIcon(this.currUrl, this.icon) : this.icon.spriteFrame = null)
                        }
                        ,
                        r(i, [{
                            key: "tipsItem",
                            get: function() {
                                return this._iconTips ? this._iconTips : this._iconTips = new p(this)
                            }
                        }, {
                            key: "data",
                            set: function(t) {
                                this.onUpdateData(t),
                                    this.tipsItem.data = t,
                                    this.onUpdateView(t)
                            }
                        }]),
                        i
                }(h)).prototype, "icon", [I], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    U = m)) || U));
                s._RF.pop()
            }
        }
    }
));
