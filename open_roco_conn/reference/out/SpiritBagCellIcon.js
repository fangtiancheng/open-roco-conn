System.register("chunks:///_virtual/SpiritBagCellIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AImage.ts", "./Bitmap.ts", "./NodeUtils.ts", "./CellLoadingImage.ts"], (function(t) {
        var i, e, o, n, a, l, s;
        return {
            setters: [function(t) {
                i = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy,
                        o = t.isValid
                }
                , function(t) {
                    n = t.AImage
                }
                , function(t) {
                    a = t.Bitmap
                }
                , function(t) {
                    l = t.NodeUtils
                }
                , function(t) {
                    s = t.CellLoadingImage
                }
            ],
            execute: function() {
                e._RF.push({}, "1368aQ7bGpDTIj99bNJjy4Q", "SpiritBagCellIcon", void 0);
                t("SpiritBagCellIcon", function(t) {
                    function e(i, e) {
                        var o;
                        return (o = t.call(this, i, e) || this)._cellWidth = void 0,
                            o._cellHeight = void 0,
                            o._loadingImage = void 0,
                            o._cellWidth = i,
                            o._cellHeight = e,
                            o._loadingImage = new a(new s),
                            o
                    }
                    i(e, t);
                    var n = e.prototype;
                    return n.reset = function() {
                        t.prototype.reset.call(this),
                            this.removeLoadingImage()
                    }
                        ,
                        n.setPath = function(i) {
                            this.showLoadingImage(),
                                t.prototype.setPath.call(this, i)
                        }
                        ,
                        n.setSource = function(i) {
                            0 != o(this) && (t.prototype.setSource.call(this, i),
                                this.removeLoadingImage())
                        }
                        ,
                        n.onImageLoaded = function(i) {
                            t.prototype.onImageLoaded.call(this, i),
                                this.removeLoadingImage()
                        }
                        ,
                        n.showLoadingImage = function() {
                            null == this._loadingImage || l.contains(this, this._loadingImage) || this.addChild(this._loadingImage)
                        }
                        ,
                        n.removeLoadingImage = function() {
                            null != this._loadingImage && l.contains(this, this._loadingImage) && this.removeChild(this._loadingImage)
                        }
                        ,
                        e
                }(n));
                e._RF.pop()
            }
        }
    }
));
