System.register("chunks:///_virtual/SpiritImage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeExtend.ts", "./SpiritResAdapter.ts"], (function(t) {
        var i, e, n, s, o, h, r, a, d, u, c;
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
                        r = t.ImageAsset,
                        a = t.SpriteFrame,
                        d = t.Texture2D
                }
                , function(t) {
                    u = t.NodeExtend
                }
                , function(t) {
                    c = t.SpiritResAdapter
                }
            ],
            execute: function() {
                n._RF.push({}, "4210dQzOi9BnrHYtwT+jQ8l", "SpiritImage", void 0);
                t("SpiritImage", function(t) {
                    function n() {
                        var i;
                        return (i = t.call(this) || this)._ui = void 0,
                            i.__id = void 0,
                            i._image = void 0,
                            i._width = void 0,
                            i._height = void 0,
                            i.tooltip = void 0,
                        null == i.getComponent(h) && i.addComponent(h),
                        null == i.getComponent(s) && i.addComponent(s),
                            i
                    }
                    i(n, t);
                    var u = n.prototype;
                    return u.dispose = function() {
                        this.clear(),
                            this._image = null
                    }
                        ,
                        u.load = function(t) {
                            this.clear(),
                            t > 0 && (c.getInstance().getSpiritImage(t, this.onLoaded.bind(this)),
                                this.__id = t)
                        }
                        ,
                        u.load1 = function(t) {
                            this.load(t)
                        }
                        ,
                        u.clear = function() {
                            null != this._image && (this.contains(this._image) && this.removeChild(this._image),
                            null != this.getComponent(s).spriteFrame && this.getComponent(s).spriteFrame.decRef(),
                                this.getComponent(s).spriteFrame = null)
                        }
                        ,
                        u.setMask = function(t, i) {}
                        ,
                        u.place = function(t) {
                            0 != o(this._ui) && ((this.getComponent(s) || this.addComponent(s)).spriteFrame = t,
                                this._ui.addChild(this),
                            this._width > 0 && (this.getComponent(h).width = this._width),
                            this._height > 0 && (this.getComponent(h).height = this._width))
                        }
                        ,
                        u.onLoaded = function(t) {
                            this.clear(),
                                this.clear(),
                            null != t && this.setSource(t)
                        }
                        ,
                        u.setSource = function(t) {
                            0 != o(this) && (this.unload(),
                            (t instanceof r || t instanceof a) && this.addImage(t))
                        }
                        ,
                        u.unload = function() {
                            null != this.getComponent(s).spriteFrame && this.getComponent(s).spriteFrame.decRef(),
                                this.getComponent(s).spriteFrame = null
                        }
                        ,
                        u.addImage = function(t) {
                            if (this._ui && 0 != o(this._ui)) {
                                if (t instanceof r) {
                                    var i = new a
                                        , e = new d;
                                    e.image = t,
                                        i.texture = e,
                                        (n = this.getComponent(s)).spriteFrame = i,
                                        n.spriteFrame.addRef()
                                } else if (t instanceof a) {
                                    var n;
                                    (n = this.getComponent(s)).spriteFrame = t,
                                        n.spriteFrame.addRef()
                                }
                                this._ui.addChild(this)
                            }
                        }
                        ,
                        e(n, [{
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
                }(u));
                n._RF.pop()
            }
        }
    }
));
