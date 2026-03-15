System.register("chunks:///_virtual/AImage1.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts", "./Constants.ts", "./ResLoadTask.ts", "./CFunction.ts", "./NodeExtend.ts"], (function(t) {
        var e, i, n, s, o, a, r, h, c, l, u, g, d, m, f, p, L;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.assertThisInitialized
            }
                , function(t) {
                    n = t.cclegacy,
                        s = t.ImageAsset,
                        o = t.SpriteFrame,
                        a = t.Texture2D,
                        r = t.Sprite,
                        h = t.UITransform,
                        c = t.isValid,
                        l = t.assetManager,
                        u = t.Event,
                        g = t.Vec2
                }
                , function(t) {
                    d = t.default
                }
                , function(t) {
                    m = t.Constants
                }
                , function(t) {
                    f = t.ResLoadTask
                }
                , function(t) {
                    p = t.CFunction
                }
                , function(t) {
                    L = t.NodeExtend
                }
            ],
            execute: function() {
                n._RF.push({}, "74652c+2TdC067QCGFD5asH", "AImage1", void 0);
                var C = t("AImageEvent", function(t) {
                    function i(e, i, n, s) {
                        return void 0 === n && (n = !1),
                        t.call(this, e, n) || this
                    }
                    return e(i, t),
                        i
                }(u));
                C.COMPLETE = "AImageEvent.COMPLETE",
                    t("AImage", function(t) {
                        function n(e, s, o) {
                            var a;
                            if (void 0 === e && (e = 0),
                            void 0 === s && (s = 0),
                            void 0 === o && (o = !1),
                                (a = t.call(this) || this).imgSize = void 0,
                                a.src = "",
                                a.imgGC = !0,
                                a.isLoading = !1,
                                a.cachePath = !1,
                                a.task = void 0,
                                a.imgCache = void 0,
                            null == n.RLTM)
                                throw new Error("[Image] #########Error此类只能在系统内使用!!");
                            return null == a.getComponent(h) && a.addComponent(h),
                            null == a.getComponent(r) && a.addComponent(r),
                                a.width = 0,
                                a.height = 0,
                                a.imgSize = new g(e,s),
                                a.cachePath = o,
                                a.task = new f,
                                a.task.resType = m.SMALL_RES,
                                a.task.paths = [""],
                                a.task.completeHandler = new p(a.onImageLoaded,i(a)),
                                a.task.errorHandler = new p(a.onImageLoadedError,i(a)),
                                a
                        }
                        e(n, t),
                            n.setRLTM = function(t) {
                                null == n.RLTM && null != t && (n.RLTM = t)
                            }
                        ;
                        var u = n.prototype;
                        return u.addImage = function(t) {
                            if (t instanceof s) {
                                var e = new o
                                    , i = new a;
                                i.image = t,
                                    e.texture = i,
                                    (n = this.getComponent(r)).spriteFrame = e,
                                    n.spriteFrame.addRef()
                            } else if (t instanceof o) {
                                var n;
                                (n = this.getComponent(r)).spriteFrame = t,
                                    n.spriteFrame.addRef()
                            }
                            this.imgSize.x > 0 && (this.getComponent(h).width = this.imgSize.x),
                            this.imgSize.y > 0 && (this.getComponent(h).height = this.imgSize.y)
                        }
                            ,
                            u.onImageLoaded = function(t) {
                                console.log("onImageLoaded====" + this.src),
                                    this.isLoading = !1;
                                var e = t.resData;
                                if (null != e)
                                    if (e.content instanceof s) {
                                        var i = n.fillSpriteFrame(e.content);
                                        null != i ? (null != this.imgCache && (i = this.imgCache.save(this.src, i)),
                                            this.addImage(i)) : console.log("[Image] " + this.task.paths[0] + "非图片类型!")
                                    } else
                                        console.log("[Image] " + this.task.paths[0] + "非图片类型!");
                                this.dispatchEvent(new C(C.COMPLETE))
                            }
                            ,
                            u.onImageLoadedError = function(t) {
                                console.log("onImageLoadedError====" + this.src),
                                    this.isLoading = !1,
                                    console.log("[Image] " + t.message)
                            }
                            ,
                            u.setImageCache = function(t) {
                                if (null != t) {
                                    if (null != this.imgCache)
                                        throw new Error("[AImage] 已经存在一个缓存!");
                                    this.imgCache = t,
                                        this.imgGC = !1
                                }
                            }
                            ,
                            u.getImage = function() {
                                return this
                            }
                            ,
                            u.setPath = function(t) {
                                if (!this.cachePath || this.src != t) {
                                    if (this.task.paths[0] = t,
                                    null != this.imgCache) {
                                        var e = this.imgCache.find(t);
                                        if (null != e)
                                            return this.setSource(e),
                                                void (this.src = t)
                                    }
                                    this.unload(),
                                        n.RLTM.addLoadTask(this.task),
                                        this.isLoading = !0,
                                        this.src = t
                                }
                            }
                            ,
                            u.setSource = function(t) {
                                0 != c(this) && (this.unload(),
                                    t instanceof s || t instanceof o ? this.addImage(t) : console.log("[Image] " + this.task.paths[0] + "非图片类型!"))
                            }
                            ,
                            u.unload = function() {
                                0 != c(this) && (this.src = "",
                                this.isLoading && (n.RLTM.delLoadTask(this.task),
                                    this.isLoading = !1),
                                null != this.getComponent(r).spriteFrame && this.imgGC && this.getComponent(r).spriteFrame.decRef(),
                                    this.getComponent(r).spriteFrame = null)
                            }
                            ,
                            u.reset = function() {
                                this.unload(),
                                    this.imgCache = null,
                                    this.imgGC = !0
                            }
                            ,
                            u.loadRemote = function(t) {
                                var e = this;
                                "https://res.17roco.qq.com/res/combat/icons/95-.png" == t && d.IS_LOCAL;
                                l.loadRemote(t, null, (function(t, i) {
                                        if (t && (d.IS_LOCAL,
                                        1 == d.IS_LOCAL))
                                            throw new Error("assetManager.loadRemote failed.");
                                        e.setSource(i)
                                    }
                                ))
                            }
                            ,
                            n.fillSpriteFrame = function(t) {
                                if (null == t || null == t)
                                    return null;
                                if (t instanceof s) {
                                    var e = new o
                                        , i = new a;
                                    return i.image = t,
                                        e.texture = i,
                                        e
                                }
                                return null
                            }
                            ,
                            n
                    }(L)).RLTM = void 0,
                    n._RF.pop()
            }
        }
    }
));
