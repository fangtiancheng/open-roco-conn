System.register("chunks:///_virtual/EquipmentIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AImage.ts", "./NodeExtend.ts", "./IconQualityRes.ts"], (function(t) {
        var i, e, n, a, h, s, o, d, l, _;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass,
                    n = t.assertThisInitialized
            }
                , function(t) {
                    a = t.cclegacy,
                        h = t.Vec2,
                        s = t.UITransform,
                        o = t.view
                }
                , function(t) {
                    d = t.AImage
                }
                , function(t) {
                    l = t.NodeExtend
                }
                , function(t) {
                    _ = t.IconQualityRes
                }
            ],
            execute: function() {
                a._RF.push({}, "48ddbZs8TpNlYxFy9dWr5X8", "EquipmentIcon", void 0);
                t("EquipmentIcon", function(t) {
                    function a(i, e, a, h) {
                        var s;
                        return (s = t.call(this) || this)._container = void 0,
                            s._image = void 0,
                            s._width = 0,
                            s._height = 0,
                            s._data = void 0,
                            s._qMC = void 0,
                            s._imageContainer = void 0,
                            s.width = 96,
                            s.height = 96,
                            s._data = i,
                            s._container = e,
                            e.addChild(n(s)),
                            s._width = a,
                            s._height = h,
                            s._qMC = new _,
                            s._qMC.width = s._width,
                            s._qMC.height = s._height,
                            s.addChild(s._qMC),
                            s._imageContainer = new l,
                            s.addChild(s._imageContainer),
                            s._qMC.gotoAndStop(s._data.quality),
                            null == s._data.des ? n(s) : (s._image = new d(s._width,s._height),
                                s._image.setPath(s._data.des.src),
                                s._imageContainer.addChild(s._image),
                                s)
                    }
                    i(a, t);
                    var g = a.prototype;
                    return g.update = function(t) {
                        null != t ? (null == t.des ? this.cleanImage() : null != this._data && null != this._data.des && this._data.des.src == t.des.src || (this.cleanImage(),
                            this._image = new d(this._width,this._height),
                            this._image.setPath(t.des.src),
                            this._imageContainer.addChild(this._image)),
                            this._qMC.gotoAndStop(t.quality)) : (this.cleanImage(),
                            this._qMC.gotoAndStop(this._qMC.totalFrames)),
                            this._data = t
                    }
                        ,
                        g.cleanImage = function() {
                            null != this._image && (this._image.unload(),
                            this._image.parent && this._image.parent == this._imageContainer && this._imageContainer.removeChild(this._image)),
                                this._image = null
                        }
                        ,
                        g.dispose = function() {
                            this.cleanImage(),
                                this._data = null,
                                this._container = null
                        }
                        ,
                        g.localToGlobal = function(t) {
                            var i = new h(0,Math.ceil(this.getComponent(s).height / 2))
                                , e = this.getWorldPosition();
                            return i.x += e.x,
                                i.y += e.y,
                                i.x -= o.getVisibleSize().width / 2,
                                i.y -= o.getVisibleSize().height / 2,
                                i.x += 32,
                                i.y += -72,
                                i
                        }
                        ,
                        g.localToGlobalWithMenu = function(t) {
                            var i = new h(0,Math.ceil(this.getComponent(s).height / 2))
                                , e = this.getWorldPosition();
                            return i.x += e.x,
                                i.y += e.y,
                                i.x -= o.getVisibleSize().width / 2,
                                i.y -= o.getVisibleSize().height / 2,
                                i.x += t.x,
                                i.y += t.y,
                                i
                        }
                        ,
                        e(a, [{
                            key: "data",
                            get: function() {
                                return this._data
                            }
                        }, {
                            key: "container",
                            get: function() {
                                return this._container
                            }
                        }]),
                        a
                }(l));
                a._RF.pop()
            }
        }
    }
));
