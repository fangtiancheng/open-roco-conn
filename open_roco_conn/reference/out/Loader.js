System.register("chunks:///_virtual/Loader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeExtend.ts", "./BuildLogHelper.ts", "./RemoteResDestory.ts"], (function(e) {
        var t, o, n, r, i, s, a, u, l, d, c, f, m;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    o = e.cclegacy,
                        n = e._decorator,
                        r = e.isValid,
                        i = e.assetManager,
                        s = e.ImageAsset,
                        a = e.SpriteFrame,
                        u = e.Texture2D,
                        l = e.Sprite,
                        d = e.UITransform
                }
                , function(e) {
                    c = e.NodeExtend
                }
                , function(e) {
                    f = e.default
                }
                , function(e) {
                    m = e.RemoteResDestory
                }
            ],
            execute: function() {
                o._RF.push({}, "196e6if9X1ARoAVR4UloJaX", "Loader", void 0);
                n.ccclass,
                    n.property,
                    e("Loader", function(e) {
                        function o() {
                            var t;
                            return (t = e.call(this) || this)._url = void 0,
                                t.addComponent(m),
                            null == t.getComponent(d) && t.addComponent(d),
                            null == t.getComponent(l) && t.addComponent(l),
                                t
                        }
                        t(o, e);
                        var n = o.prototype;
                        return n.load = function(e) {
                            0 != r(this) && (this._url = e.url,
                            this._url && this.loadRemote(this._url))
                        }
                            ,
                            n.loadRemote = function(e) {
                                var t = this;
                                if (0 != r(this)) {
                                    i.loadRemote(e, null, (function(e, o) {
                                            if (e && (f.IS_LOCAL,
                                            1 == f.IS_LOCAL))
                                                throw new Error("assetManager.loadBundle failed.");
                                            t.setSource(o)
                                        }
                                    ))
                                }
                            }
                            ,
                            n.setSource = function(e) {
                                0 != r(this) && (this.unload(),
                                e instanceof s && this.addImage(e))
                            }
                            ,
                            n.addImage = function(e) {
                                if (e instanceof s) {
                                    var t = new a
                                        , o = new u;
                                    o.image = e,
                                        t.texture = o;
                                    var n = this.getComponent(l);
                                    n.spriteFrame = t,
                                        n.spriteFrame.addRef()
                                }
                            }
                            ,
                            n.unload = function() {
                                0 != r(this) && (null != this.getComponent(l).spriteFrame && this.getComponent(l).spriteFrame.decRef(),
                                    this.getComponent(l).spriteFrame = null)
                            }
                            ,
                            o
                    }(c));
                o._RF.pop()
            }
        }
    }
));
