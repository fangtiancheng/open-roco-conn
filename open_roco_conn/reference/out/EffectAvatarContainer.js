System.register("chunks:///_virtual/EffectAvatarContainer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AImage.ts"], (function(t) {
        var e, i, n, a, o;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy,
                        n = t.Sprite,
                        a = t.Rect
                }
                , function(t) {
                    o = t.AImage
                }
            ],
            execute: function() {
                i._RF.push({}, "80e41TAG2dJrY/i4Z7fo7pL", "EffectAvatarContainer", void 0);
                t("EffectAvatarContainer", function(t) {
                    function i(e) {
                        var i;
                        return void 0 === e && (e = 0),
                            (i = t.call(this) || this)._tabIndex = 0,
                            i._sliceWidth = 260,
                            i._tabIndex = e,
                            i
                    }
                    e(i, t);
                    var o = i.prototype;
                    return o.onImageLoaded = function(e) {
                        t.prototype.onImageLoaded.call(this, e)
                    }
                        ,
                        o.addImage = function(e) {
                            t.prototype.addImage.call(this, e);
                            var i = this.getComponent(n)
                                , o = i.spriteFrame.texture
                                , r = o.width
                                , s = o.height
                                , c = this._tabIndex * this._sliceWidth
                                , h = new a(c,0,Math.min(this._sliceWidth, r - c),s);
                            i.spriteFrame.rect = h,
                                i.type = n.Type.SIMPLE,
                                i.sizeMode = n.SizeMode.CUSTOM,
                                this.width = h.width,
                                this.height = h.height
                        }
                        ,
                        i
                }(o));
                i._RF.pop()
            }
        }
    }
));
