System.register("chunks:///_virtual/CellIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts", "./AImage.ts", "./Bitmap.ts", "./DefaultImgCache.ts", "./NodeUtils.ts"], (function(t) {
        var e, i, o, n, a, l, s;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    o = t.default
                }
                , function(t) {
                    n = t.AImage
                }
                , function(t) {
                    a = t.Bitmap
                }
                , function(t) {
                    l = t.DefaultImgCache
                }
                , function(t) {
                    s = t.NodeUtils
                }
            ],
            execute: function() {
                i._RF.push({}, "6a914lBZ8JNU6fTCbJBf/78", "CellIcon", void 0);
                var g = t("CellIcon", function(t) {
                    function i() {
                        var e;
                        return (e = t.call(this, i.CELL_WIDTH, i.CELL_HEIGHT) || this)._cellWidth = void 0,
                            e._cellHeight = void 0,
                            e._loadingImage = void 0,
                            e.tooltip = void 0,
                            e._cellWidth = e.width,
                            e._cellHeight = e.height,
                            e._loadingImage = new a(null),
                            e._loadingImage.x = e._cellWidth - e._loadingImage.width >> 1,
                            e._loadingImage.y = e._cellHeight - e._loadingImage.height >> 1,
                            e.setImageCache(i.IMAGE_CACHE),
                            e
                    }
                    e(i, t);
                    var n = i.prototype;
                    return n.setPath = function(e) {
                        if (e.length <= 0) {
                            if (o.IS_LOCAL,
                            1 == o.IS_LOCAL)
                                throw new Error("[" + this.constructor.name + "]'s function [loadRemote]'s param \"src\" is wrong.")
                        } else if (e.startsWith("http://") || e.startsWith("https://"))
                            this.showLoadingImage(),
                                t.prototype.setPath.call(this, e);
                        else if (o.IS_LOCAL,
                        1 == o.IS_LOCAL)
                            throw new Error("[" + this.constructor.name + "]'s function [loadRemote]'s param \"src\" is wrong.")
                    }
                        ,
                        n.setSource = function(e) {
                            t.prototype.setSource.call(this, e),
                                this.removeLoadingImage()
                        }
                        ,
                        n.clear = function() {
                            this.unload(),
                                this.removeLoadingImage()
                        }
                        ,
                        n.onImageLoaded = function(e) {
                            t.prototype.onImageLoaded.call(this, e),
                                this.removeLoadingImage()
                        }
                        ,
                        n.showLoadingImage = function() {
                            null == this._loadingImage || s.contains(this, this._loadingImage) || this.addChild(this._loadingImage)
                        }
                        ,
                        n.removeLoadingImage = function() {
                            null != this._loadingImage && s.contains(this, this._loadingImage) && this.removeChild(this._loadingImage)
                        }
                        ,
                        i
                }(n));
                g.CELL_WIDTH = 60,
                    g.CELL_HEIGHT = 60,
                    g.IMAGE_CACHE = new l,
                    i._RF.pop()
            }
        }
    }
));
