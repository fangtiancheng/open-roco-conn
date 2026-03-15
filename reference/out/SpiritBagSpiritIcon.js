System.register("chunks:///_virtual/SpiritBagSpiritIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeExtend.ts", "./ResManager.ts"], (function(t) {
        var i, e, n, s, o, h, a, r, u, c, d;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        s = t.Sprite,
                        o = t.isValid,
                        h = t.UITransform,
                        a = t.ImageAsset,
                        r = t.SpriteFrame,
                        u = t.Texture2D
                }
                , function(t) {
                    c = t.NodeExtend
                }
                , function(t) {
                    d = t.default
                }
            ],
            execute: function() {
                n._RF.push({}, "f6d8arra9JAxKZD4eLTosar", "SpiritBagSpiritIcon", void 0);
                t("SpiritBagSpiritIcon", function(t) {
                    function n() {
                        var i;
                        return (i = t.call(this) || this)._ui = void 0,
                            i.__id = void 0,
                            i._image = void 0,
                            i._width = void 0,
                            i._height = void 0,
                            i.tooltip = void 0,
                            i._scaleParam = 1,
                            i.mouseChildren = !1,
                        null == i.getComponent(h) && i.addComponent(h),
                        null == i.getComponent(s) && i.addComponent(s),
                            i
                    }
                    i(n, t);
                    var c = n.prototype;
                    return c.dispose = function() {
                        this.clear(),
                            this._image = null
                    }
                        ,
                        c.load = function(t) {
                            var i = this;
                            this.clear(),
                            t > 0 && (d.Instance.loadingRes("combatIcon", "ICON_" + t, (function(t, e) {
                                    e && i.setSource(e)
                                }
                            )),
                                this.__id = t)
                        }
                        ,
                        c.load1 = function(t) {
                            var i = this;
                            this.clear(),
                            t > 0 && (d.Instance.loadingRes("combatIcon1", "ICON_" + t, (function(t, e) {
                                    e && i.setSource(e)
                                }
                            )),
                                this.__id = t)
                        }
                        ,
                        c.clear = function() {
                            null != this.getComponent(s).spriteFrame && this.getComponent(s).spriteFrame.decRef(),
                                this.getComponent(s).spriteFrame = null
                        }
                        ,
                        c.setMask = function(t, i) {}
                        ,
                        c.place = function(t) {
                            null != this._ui && null != t && (this._ui && 0 != o(this._ui) && ((this.getComponent(s) || this.addComponent(s)).spriteFrame = t,
                                this._ui.addChild(this),
                            this._width > 0 && (this.getComponent(h).width = this._width),
                            this._height > 0 && (this.getComponent(h).height = this._width)))
                        }
                        ,
                        c.setSource = function(t) {
                            0 != o(this) && (this.unload(),
                            (t instanceof a || t instanceof r) && this.addImage(t))
                        }
                        ,
                        c.unload = function() {
                            null != this.getComponent(s).spriteFrame && this.getComponent(s).spriteFrame.decRef(),
                                this.getComponent(s).spriteFrame = null
                        }
                        ,
                        c.addImage = function(t) {
                            if (this._ui && 0 != o(this._ui)) {
                                if (t instanceof a) {
                                    var i = new r
                                        , e = new u;
                                    e.image = t,
                                        i.texture = e,
                                        (n = this.getComponent(s)).spriteFrame = i,
                                        n.spriteFrame.addRef()
                                } else if (t instanceof r) {
                                    var n;
                                    (n = this.getComponent(s)).spriteFrame = t,
                                        n.spriteFrame.addRef()
                                }
                                this._ui.addChild(this),
                                this._width > 0 && (this.getComponent(h).width = this._width),
                                this._height > 0 && (this.getComponent(h).height = this._height),
                                    this.getComponent(h).width = this.getComponent(h).width * this._scaleParam,
                                    this.getComponent(h).height = this.getComponent(h).height * this._scaleParam
                            }
                        }
                        ,
                        e(n, [{
                            key: "scaleParam",
                            get: function() {
                                return this._scaleParam
                            },
                            set: function(t) {
                                this._scaleParam = t
                            }
                        }, {
                            key: "ui",
                            set: function(t) {
                                this._ui = t
                            }
                        }, {
                            key: "display",
                            get: function() {
                                return this
                            }
                        }, {
                            key: "id",
                            get: function() {
                                return this.__id
                            },
                            set: function(t) {
                                this.__id = t
                            }
                        }, {
                            key: "width",
                            get: function() {
                                return this._width
                            },
                            set: function(t) {
                                this._width = t
                            }
                        }, {
                            key: "height",
                            get: function() {
                                return this._height
                            },
                            set: function(t) {
                                this._height = t
                            }
                        }]),
                        n
                }(c));
                n._RF.pop()
            }
        }
    }
));
