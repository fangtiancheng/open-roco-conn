System.register("chunks:///_virtual/Bitmap.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts", "./NodeExtend.ts", "./BuildLogHelper.ts"], (function(e) {
        var t, n, o, i, s, a, r, p, u, c, l, d;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy,
                        o = e.isValid,
                        i = e.ImageAsset,
                        s = e.SpriteFrame,
                        a = e.Sprite,
                        r = e.Texture2D,
                        p = e.UITransform,
                        u = e.Node
                }
                , function(e) {
                    c = e.default
                }
                , function(e) {
                    l = e.NodeExtend
                }
                , function(e) {
                    d = e.default
                }
            ],
            execute: function() {
                n._RF.push({}, "4936fo7vMBDtqiVqeGyPVNs", "Bitmap", void 0);
                e("Bitmap", function(e) {
                    function n(t) {
                        var n;
                        if ((n = e.call(this) || this).tooltip = "",
                            n.tooltipType = 0,
                            n._res = void 0,
                        null == n.getComponent(p) && n.addComponent(p),
                        null == n.getComponent(a) && n.addComponent(a),
                            t)
                            if (t instanceof u)
                                n.addChild(t);
                            else if (t instanceof s) {
                                (n.getComponent(a) || n.addComponent(a)).spriteFrame = t
                            }
                        return n
                    }
                    t(n, e);
                    var l = n.prototype;
                    return l.loadSpiritGroupImage = function(e) {
                        var t = this;
                        e += 500,
                        1 == d.IS_LOCAL && console.log("setSkillIcon==>" + e),
                            c.Instance.loadingRes("combatIcon", "ICON_" + e, (function(e, n) {
                                    n && t.setSource(n)
                                }
                            ))
                    }
                        ,
                        l.setSource = function(e) {
                            0 != o(this) && (this.unload(),
                            (e instanceof i || e instanceof s) && this.addImage(e))
                        }
                        ,
                        l.unload = function() {
                            null != this.getComponent(a).spriteFrame && this.getComponent(a).spriteFrame.decRef(),
                                this.getComponent(a).spriteFrame = null
                        }
                        ,
                        l.addImage = function(e) {
                            if (e instanceof i) {
                                var t = new s
                                    , n = new r;
                                n.image = e,
                                    t.texture = n,
                                    (o = this.getComponent(a)).spriteFrame = t,
                                    o.spriteFrame.addRef()
                            } else if (e instanceof s) {
                                var o;
                                (o = this.getComponent(a)).spriteFrame = e,
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
