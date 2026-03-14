System.register("chunks:///_virtual/SpiritIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./DEFINE.ts", "./URLRequest.ts", "./Bitmap.ts", "./IOErrorEvent.ts", "./NewLoader.ts", "./global.ts", "./LoaderEvent.ts", "./ResBaseNode.ts"], (function(t) {
        var e, i, n, o, s, r, l, d, a, c, h, u, p, _, f;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy,
                        n = t.SpriteFrame,
                        o = t.ImageAsset,
                        s = t.UITransform,
                        r = t.Sprite
                }
                , function(t) {
                    l = t.Constants
                }
                , function(t) {
                    d = t.DEFINE
                }
                , function(t) {
                    a = t.URLRequest
                }
                , function(t) {
                    c = t.Bitmap
                }
                , function(t) {
                    h = t.IOErrorEvent
                }
                , function(t) {
                    u = t.NewLoader
                }
                , function(t) {
                    p = t.__global
                }
                , function(t) {
                    _ = t.LoaderEvent
                }
                , function(t) {
                    f = t.ResBaseNode
                }
            ],
            execute: function() {
                i._RF.push({}, "6bfe7Aso9xEYqKOCtvsuNQs", "SpiritIcon", void 0),
                    t("SpiritIcon", function(t) {
                        function i() {
                            var e;
                            return (e = t.call(this) || this)._width = 95,
                                e._height = 95,
                                e._loader = void 0,
                                e.tooltip = "",
                                e.des = void 0,
                                e.id = void 0,
                                e._isStatic = void 0,
                                e._size = void 0,
                                e._mc = void 0,
                                e._onComplete = void 0,
                                e._resAdapter = void 0,
                            null == e.getComponent(s) && e.addComponent(s),
                            null == e.getComponent(r) && e.addComponent(r),
                                e._resAdapter = p.SysAPI.getResSysAPI().getResAdapter(l.COMBAT_RES),
                                e._init(),
                                e
                        }
                        e(i, t);
                        var d = i.prototype;
                        return d._init = function(t, e) {
                            void 0 === t && (t = !1),
                            void 0 === e && (e = 100),
                                this._isStatic = t,
                                this._size = e,
                                this.mouseChildren = !1
                        }
                            ,
                            i.idol = function(t, e, n, o, s) {
                                return void 0 === e && (e = !1),
                                void 0 === n && (n = 100),
                                void 0 === o && (o = null),
                                void 0 === s && (s = null),
                                o || (o = new i),
                                    o._init(e, n),
                                    o.loadIdol(t, s),
                                    o
                            }
                            ,
                            i.icon = function(t, e) {
                                return void 0 === e && (e = null),
                                e || (e = new i),
                                    e.loadIcon(t),
                                    e
                            }
                            ,
                            d.bg = function(t) {}
                            ,
                            d.confLoadComplete = function(t) {
                                if (this.clear(),
                                    this._mc = t,
                                Number(t.name.split("_")[1]) == this.id) {
                                    var e = Number(1 * this._size / t.width * 1);
                                    t.scaleX = e,
                                        t.scaleY = e,
                                        t.x = -t.width / 2,
                                        t.y = -t.height,
                                        this.addChild(t),
                                    this._isStatic && this.stopAll(t)
                                }
                                null != this._onComplete && this._onComplete()
                            }
                            ,
                            d.stopAll = function(t) {}
                            ,
                            d.dispose = function() {
                                this._resAdapter = null,
                                    this.clear()
                            }
                            ,
                            d.loadIdol = function(t, e) {
                                void 0 === e && (e = null),
                                    this.id = t,
                                    this._onComplete = e,
                                    this.clear(),
                                    this.getSpiritIdleMC(t, this.confLoadComplete)
                            }
                            ,
                            d.loadIcon = function(t) {
                                null != i.getPetDes(t) && (this.id = t,
                                this._loader || (this._loader = new u),
                                    this._loader.load(new a(i.getPetDes(t).iconSrc).url),
                                    this._loader.contentLoaderInfo.addEventListener(h.IO_ERROR, this.ioErr, this),
                                    this._loader.contentLoaderInfo.addEventListener(_.COMPLETE, this.completeHandler, this))
                            }
                            ,
                            d.completeHandler = function(t) {
                                this._loader.content instanceof c && (this._loader.content.smoothing = !0),
                                (this._loader.content instanceof n || this._loader.content instanceof o) && this.setSource(this._loader.content)
                            }
                            ,
                            d.autoSize = function() {
                                this._loader && this.parent && (this.width = this.parent.width,
                                    this.height = this.parent.height)
                            }
                            ,
                            d.ioErr = function(t) {
                                console.info(t.text)
                            }
                            ,
                            d.clear = function() {
                                for (; this.numChildren > 0; )
                                    this.removeChildAt(0);
                                try {
                                    this._loader.unload(),
                                        this._loader.contentLoaderInfo.removeEventListener(_.COMPLETE, this.confLoadComplete, this),
                                        this._loader.loaderInfo.removeEventListener(h.IO_ERROR, this.ioErr, this)
                                } catch (t) {
                                    console.log(t.message)
                                }
                            }
                            ,
                            i.getPetDes = function(t) {
                                return p.SysAPI.getGDataAPI().getDataProxy(l.SPIRIT_DATA).select(t)
                            }
                            ,
                            d.getSpiritIdleMC = function(t, e) {
                                return void 0 === e && (e = null),
                                    null == this._resAdapter ? null : this._resAdapter.getSpiritIdleMC(t, e)
                            }
                            ,
                            d.returnSpiritIdleMC = function(t) {
                                null != this._resAdapter && this._resAdapter.returnSpiritIdleMC(t)
                            }
                            ,
                            d.getSpiritImage = function(t, e) {
                                return void 0 === e && (e = null),
                                    null == this._resAdapter ? null : this._resAdapter.getSpiritImage(t, e)
                            }
                            ,
                            d.returnSpiritImage = function(t) {
                                null != this._resAdapter && this._resAdapter.returnSpiritImage(t)
                            }
                            ,
                            d.getSpiritIcon = function(t) {
                                return null == this._resAdapter ? null : this._resAdapter.getSpiritSkillImage(t)
                            }
                            ,
                            i
                    }(f))._url = d.COMM_ROOT + "res/combat/icons/",
                    i._RF.pop()
            }
        }
    }
));
