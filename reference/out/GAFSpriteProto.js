System.register("chunks:///_virtual/GAFSpriteProto.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GAFSprite.ts", "./GAFProto.ts"], (function(t) {
        var e, r, s, n, i;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    r = t.cclegacy,
                        s = t.assert
                }
                , function(t) {
                    n = t.GAFSprite
                }
                , function(t) {
                    i = t.GAFProto
                }
            ],
            execute: function() {
                r._RF.push({}, "8b1faFeyNhLYpJnMSyLpPRK", "GAFSpriteProto", void 0);
                t("GAFSpriteProto", function(t) {
                    function r(e, r, s, n) {
                        var i;
                        return (i = t.call(this, e) || this).asset = void 0,
                            i.atlasFrames = void 0,
                            i.elementAtlasIdRef = void 0,
                            i.asset = r,
                            i.atlasFrames = s,
                            i.elementAtlasIdRef = n,
                            i
                    }
                    e(r, t);
                    var i = r.prototype;
                    return i.getFrames = function() {
                        return this.atlasFrames
                    }
                        ,
                        i.getIdRef = function() {
                            return this.elementAtlasIdRef
                        }
                        ,
                        i.getAsset = function() {
                            return this.asset
                        }
                        ,
                        i._gafConstruct = function() {
                            var t = this.getAsset()._usedAtlasScale
                                , e = new n(this,t);
                            return e._init(),
                                e
                        }
                        ,
                        i.getFrame = function() {
                            var t = this.getAsset()._usedAtlasScale;
                            s(0 != t, "error: 图集缩放为零");
                            var e = this.getFrames()[t];
                            return s(null != e, "error: 找不到用于缩放 `" + t + "` 的帧"),
                                e[this.getIdRef()]
                        }
                        ,
                        i.getAnchor = function() {
                            return this.getFrame()._gafAnchor
                        }
                        ,
                        i.getScale = function() {
                            return this.getFrame()._scale_
                        }
                        ,
                        r
                }(i));
                r._RF.pop()
            }
        }
    }
));
