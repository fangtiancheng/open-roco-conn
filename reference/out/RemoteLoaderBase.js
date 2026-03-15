System.register("chunks:///_virtual/RemoteLoaderBase.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts"], (function(e) {
        var t, n, o, r, a, i, s, u, l, c, d;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy,
                        o = e._decorator,
                        r = e.Sprite,
                        a = e.assetManager,
                        i = e.isValid,
                        s = e.ImageAsset,
                        u = e.SpriteFrame,
                        l = e.Texture2D,
                        c = e.Component
                }
                , function(e) {
                    d = e.default
                }
            ],
            execute: function() {
                n._RF.push({}, "1114c2aNm5H4Loo0Z01iFz3", "RemoteLoaderBase", void 0);
                o.ccclass,
                    o.property,
                    e("RemoteLoaderBase", function(e) {
                        function n() {
                            for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                                o[r] = arguments[r];
                            return (t = e.call.apply(e, [this].concat(o)) || this).debugger = void 0,
                                t
                        }
                        t(n, e);
                        var o = n.prototype;
                        return o.onLoad = function() {
                            var e, t;
                            null != (null == (e = this.node) ? void 0 : e.getComponent(r)) || null == (t = this.node) || t.addComponent(r)
                        }
                            ,
                            o.load = function(e) {
                                var t = this;
                                a.loadRemote(e, null, (function(e, n) {
                                        if (e && (d.IS_LOCAL,
                                        1 == d.IS_LOCAL))
                                            throw new Error("assetManager.loadBundle failed.");
                                        t.setSource(n)
                                    }
                                ))
                            }
                            ,
                            o.setSource = function(e) {
                                0 != i(this) && (this.unload(),
                                (e instanceof s || e instanceof u) && this.addImage(e))
                            }
                            ,
                            o.unload = function() {
                                null != this.getComponent(r).spriteFrame && this.getComponent(r).spriteFrame.decRef(),
                                    this.getComponent(r).spriteFrame = null
                            }
                            ,
                            o.addImage = function(e) {
                                if (e instanceof s) {
                                    var t = new u
                                        , n = new l;
                                    n.image = e,
                                        t.texture = n,
                                        (o = this.getComponent(r)).spriteFrame = t,
                                        o.spriteFrame.addRef()
                                } else if (e instanceof u) {
                                    var o;
                                    (o = this.getComponent(r)).spriteFrame = e,
                                        o.spriteFrame.addRef()
                                }
                            }
                            ,
                            n
                    }(c));
                n._RF.pop()
            }
        }
    }
));
