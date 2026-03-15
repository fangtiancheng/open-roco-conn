System.register("chunks:///_virtual/ResBaseNode.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts", "./NodeExtend.ts"], (function(e) {
        var t, n, o, i, s, r, a, u, c, d, l;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy,
                        o = e._decorator,
                        i = e.assetManager,
                        s = e.isValid,
                        r = e.ImageAsset,
                        a = e.SpriteFrame,
                        u = e.Sprite,
                        c = e.Texture2D
                }
                , function(e) {
                    d = e.default
                }
                , function(e) {
                    l = e.NodeExtend
                }
            ],
            execute: function() {
                n._RF.push({}, "0597emOEgdApJPRi3c7u0il", "ResBaseNode", void 0);
                o.ccclass,
                    o.property,
                    e("ResBaseNode", function(e) {
                        function n() {
                            return e.apply(this, arguments) || this
                        }
                        t(n, e);
                        var o = n.prototype;
                        return o.load = function(e) {
                            var t = this;
                            i.loadRemote(e, null, (function(e, n) {
                                    if (e && (d.IS_LOCAL,
                                    1 == d.IS_LOCAL))
                                        throw new Error("assetManager.loadBundle failed.");
                                    t.setSource(n)
                                }
                            ))
                        }
                            ,
                            o.setSource = function(e) {
                                0 != s(this) && (this.unload(),
                                (e instanceof r || e instanceof a) && this.addImage(e))
                            }
                            ,
                            o.unload = function() {
                                null != this.getComponent(u).spriteFrame && this.getComponent(u).spriteFrame.decRef(),
                                    this.getComponent(u).spriteFrame = null
                            }
                            ,
                            o.addImage = function(e) {
                                if (e instanceof r) {
                                    var t = new a
                                        , n = new c;
                                    n.image = e,
                                        t.texture = n,
                                        (o = this.getComponent(u)).spriteFrame = t,
                                        o.spriteFrame.addRef()
                                } else if (e instanceof a) {
                                    var o;
                                    (o = this.getComponent(u)).spriteFrame = e,
                                        o.spriteFrame.addRef()
                                }
                            }
                            ,
                            n
                    }(l));
                n._RF.pop()
            }
        }
    }
));
