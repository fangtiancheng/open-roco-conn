System.register("chunks:///_virtual/AImage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts", "./Constants.ts", "./ResLoadTask.ts", "./CFunction.ts", "./NodeExtend.ts"], (function(t) {
        var e, i, n, s, o, a, r, l, h, c, u, m, g, d, f, p, L, C;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass,
                    n = t.assertThisInitialized
            }
                , function(t) {
                    s = t.cclegacy,
                        o = t.ImageAsset,
                        a = t.SpriteFrame,
                        r = t.Texture2D,
                        l = t.Sprite,
                        h = t.UITransform,
                        c = t.isValid,
                        u = t.assetManager,
                        m = t.Event,
                        g = t.Vec2
                }
                , function(t) {
                    d = t.default
                }
                , function(t) {
                    f = t.Constants
                }
                , function(t) {
                    p = t.ResLoadTask
                }
                , function(t) {
                    L = t.CFunction
                }
                , function(t) {
                    C = t.NodeExtend
                }
            ],
            execute: function() {
                s._RF.push({}, "a55fbTYu61G9aHMojrMaNPw", "AImage", void 0);
                var I = t("AImageEvent", function(t) {
                    function i(e, i, n, s) {
                        return void 0 === n && (n = !1),
                        t.call(this, e, n) || this
                    }
                    return e(i, t),
                        i
                }(m));
                I.COMPLETE = "AImageEvent.COMPLETE",
                    t("AImage", function(t) {
                        function s(e, i, o) {
                            var a;
                            if (void 0 === e && (e = 0),
                            void 0 === i && (i = 0),
                            void 0 === o && (o = !1),
                                (a = t.call(this) || this).content = void 0,
                                a.task = void 0,
                                a.isLoading = !1,
                                a.imgSize = void 0,
                                a.imgGC = !0,
                                a.cachePath = !1,
                                a.src = "",
                                a.imgCache = void 0,
                                a._src = "",
                            null == s.RLTM)
                                throw new Error("[Image] #########Error此类只能在系统内使用!!");
                            return null == a.getComponent(h) && a.addComponent(h),
                            null == a.getComponent(l) && a.addComponent(l),
                                a.width = 0,
                                a.height = 0,
                                a.imgSize = new g(e,i),
                                a.cachePath = o,
                                a.task = new p,
                                a.task.resType = f.SMALL_RES,
                                a.task.paths = [""],
                                a.task.completeHandler = new L(a.onImageLoaded,n(a)),
                                a.task.errorHandler = new L(a.onImageLoadedError,n(a)),
                                a
                        }
                        e(s, t),
                            s.setRLTM = function(t) {
                                null == s.RLTM && null != t && (s.RLTM = t)
                            }
                        ;
                        var m = s.prototype;
                        return m.addImage = function(t) {
                            if (t instanceof o) {
                                var e = new a;
                                e.packable = !1;
                                var i = new r;
                                i.image = t,
                                    e.texture = i,
                                    (n = this.getComponent(l)).spriteFrame = e,
                                    n.spriteFrame.addRef()
                            } else if (t instanceof a) {
                                var n;
                                (n = this.getComponent(l)).spriteFrame = t,
                                    n.spriteFrame.addRef()
                            }
                            this.imgSize.x > 0 && (this.getComponent(h).width = this.imgSize.x),
                            this.imgSize.y > 0 && (this.getComponent(h).height = this.imgSize.y)
                        }
                            ,
                            m.onImageLoaded = function(t) {
                                1 == d.IS_LOCAL && console.log("onImageLoaded====" + this.src),
                                    this.isLoading = !1;
                                var e = t.resData;
                                if (null != e)
                                    if (e.content instanceof o) {
                                        var i = s.fillSpriteFrame(e.content);
                                        null != i ? (null != this.imgCache && (i = this.imgCache.save(this.src, i)),
                                            this.addImage(i)) : 1 == d.IS_LOCAL && console.log("[Image] " + this.task.paths[0] + "非图片类型!")
                                    } else
                                        1 == d.IS_LOCAL && console.log("[Image] " + this.task.paths[0] + "非图片类型!");
                                this.dispatchEvent(new I(I.COMPLETE))
                            }
                            ,
                            m.onImageLoadedError = function(t) {
                                console.log("onImageLoadedError====" + this.src),
                                    this.isLoading = !1,
                                    console.log("[Image] " + t.message)
                            }
                            ,
                            m.setImageCache = function(t) {
                                if (null != t) {
                                    if (null != this.imgCache)
                                        throw new Error("[AImage] 已经存在一个缓存!");
                                    this.imgCache = t,
                                        this.imgGC = !1
                                }
                            }
                            ,
                            m.getImage = function() {
                                return this
                            }
                            ,
                            m.setPath = function(t) {
                                1 == d.IS_LOCAL && console.info("AImage==setPath" + t),
                                    this.cachePath && this.src == t ? 1 == d.IS_LOCAL && console.log("setPath==" + t + "==被return了") : (1 == d.IS_LOCAL && console.log("setPath==" + t),
                                        this.src = t,
                                        this.loadRemote(t))
                            }
                            ,
                            m.setSource = function(t) {
                                0 != c(this) && (this.unload(),
                                    t instanceof o || t instanceof a ? this.addImage(t) : 1 == d.IS_LOCAL && console.log("[Image] " + this.task.paths[0] + "非图片类型!"))
                            }
                            ,
                            m.unload = function() {
                                if (0 != c(this)) {
                                    if (this.src = "",
                                    this.isLoading && (s.RLTM.delLoadTask(this.task),
                                        this.isLoading = !1),
                                    null != this.sprite.spriteFrame) {
                                        this.sprite.spriteFrame.decRef(),
                                            this.sprite.spriteFrame.destroy();
                                        var t, e = this.sprite.spriteFrame.texture;
                                        if (this.sprite.spriteFrame.packable)
                                            e = null == (t = this.sprite.spriteFrame.original) ? void 0 : t._texture;
                                        e && e.destroy()
                                    }
                                    this.sprite.spriteFrame = null
                                }
                            }
                            ,
                            m.reset = function() {
                                this.unload(),
                                    this.imgCache = null,
                                    this.imgGC = !0
                            }
                            ,
                            m.loadRemote = function(t) {
                                var e = this;
                                if (this._src = t,
                                    t.length,
                                t.startsWith("http://") || t.startsWith("https://")) {
                                    "https://res.17roco.qq.com/res/combat/icons/95-.png" == t && d.IS_LOCAL;
                                    u.loadRemote(t, null, (function(t, i) {
                                            if (t && (d.IS_LOCAL,
                                            1 == d.IS_LOCAL))
                                                throw new Error("assetManager.loadRemote failed.");
                                            e.setSource(i)
                                        }
                                    ))
                                } else if (d.IS_LOCAL,
                                1 == d.IS_LOCAL)
                                    throw new Error("[" + this.constructor.name + "]'s function [loadRemote]'s param \"src\" is wrong.")
                            }
                            ,
                            s.fillSpriteFrame = function(t) {
                                if (null == t || null == t)
                                    return null;
                                if (t instanceof o) {
                                    var e = new a;
                                    e.packable = !1;
                                    var i = new r;
                                    return i.image = t,
                                        e.texture = i,
                                        e
                                }
                                return null
                            }
                            ,
                            i(s, [{
                                key: "sprite",
                                get: function() {
                                    return null == this.getComponent(l) && this.addComponent(l),
                                        this.getComponent(l)
                                }
                            }]),
                            s
                    }(C)).RLTM = void 0,
                    s._RF.pop()
            }
        }
    }
));
