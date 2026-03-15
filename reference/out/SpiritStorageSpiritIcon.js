System.register("chunks:///_virtual/SpiritStorageSpiritIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DEFINE.ts", "./AImage.ts", "./AgentNode.ts"], (function(i) {
        var t, e, n, o, r, s, c, a, l, m, h, p, g;
        return {
            setters: [function(i) {
                t = i.inheritsLoose,
                    e = i.createClass,
                    n = i.assertThisInitialized
            }
                , function(i) {
                    o = i.cclegacy,
                        r = i.Node,
                        s = i.UITransform,
                        c = i.Sprite,
                        a = i.SpriteFrame,
                        l = i.Texture2D,
                        m = i.ImageAsset
                }
                , function(i) {
                    h = i.DEFINE
                }
                , function(i) {
                    p = i.AImage
                }
                , function(i) {
                    g = i.AgentNode
                }
            ],
            execute: function() {
                o._RF.push({}, "5f54dUsTWNLxrV89A3imlkH", "SpiritStorageSpiritIcon", void 0);
                i("SpiritStorageSpiritIcon", function(i) {
                    function o(t, e) {
                        var o;
                        return (o = i.call(this) || this).icon = void 0,
                            o.iconmc = void 0,
                            o.sName = void 0,
                            o.grade = void 0,
                            o.getTime = void 0,
                            o.thisid = void 0,
                            o.talentType = void 0,
                            o.talentLevel = void 0,
                            o.skinID = void 0,
                            o.myBitmapName = "",
                            o.par = void 0,
                            o.loaded = !1,
                            e.agent = n(o),
                            o.par = t,
                            o._target = e,
                            o.iconmc = new f(e),
                            o
                    }
                    t(o, i);
                    var g = o.prototype;
                    return g.setCellBgByID = function(i) {
                        for (; this.iconmc.spiritCellBg.children.length > 0; ) {
                            var t = this.iconmc.spiritCellBg.children[0];
                            this.iconmc.spiritCellBg.removeChild(t)
                        }
                        this.iconmc.spiritCellBg.image = new p(0,0,!0),
                            this.iconmc.spiritCellBg.image.x = 0,
                            this.iconmc.spiritCellBg.image.y = 0,
                            this.iconmc.spiritCellBg.addChild(this.iconmc.spiritCellBg.image),
                            this.iconmc.spiritCellBg.image.setPath(h.COMM_ROOT + "apps/spiritStorageBg/spiritCellBG/" + i + "_big.png")
                    }
                        ,
                        g.getABitmap = function(i) {
                            this.iconmc.mcIcon.target.removeAllChildren(),
                                this.loaded = !1,
                                this.par._ca.getSpiritImage(i, this.onLoaded.bind(this)),
                                this.iconmc.nameTxt.text = this.sName
                        }
                        ,
                        g.onLoaded = function(i) {
                            if (this.iconmc) {
                                this.icon = new r,
                                    this.icon.addComponent(s),
                                    this.icon.addComponent(c);
                                var t = new a
                                    , e = new l;
                                e.image = i,
                                    t.texture = e;
                                var n = this.icon.getComponent(c);
                                n.spriteFrame = t,
                                    n.spriteFrame.addRef(),
                                    this.iconmc.mcIcon.addChild(this.icon),
                                    this.icon.getComponent(s).setContentSize(82, 82)
                            }
                            this.loaded = !0
                        }
                        ,
                        g.addImage = function(i) {
                            if (i instanceof m) {
                                var t = new a
                                    , e = new l;
                                e.image = i,
                                    t.texture = e,
                                    (n = this.icon.getComponent(c)).spriteFrame = t,
                                    n.spriteFrame.addRef()
                            } else if (i instanceof a) {
                                var n;
                                (n = this.icon.getComponent(c)).spriteFrame = i,
                                    n.spriteFrame.addRef()
                            }
                        }
                        ,
                        g.del = function() {
                            "" != this.myBitmapName && this.par._ca.returnSpiritImage(this.myBitmapName),
                                this.icon = null,
                                this.iconmc = null,
                                this.par = null
                        }
                        ,
                        e(o, [{
                            key: "select",
                            set: function(i) {
                                this.iconmc.spiritCellBg.gotoAndStop(1 == i ? 2 : 1)
                            }
                        }]),
                        o
                }(g));
                var d = function(i) {
                    function e() {
                        return i.apply(this, arguments) || this
                    }
                    return t(e, i),
                        e
                }(g)
                    , u = function(i) {
                    function e() {
                        for (var t, e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                            n[o] = arguments[o];
                        return (t = i.call.apply(i, [this].concat(n)) || this).image = void 0,
                            t
                    }
                    return t(e, i),
                        e
                }(g)
                    , f = function(i) {
                    function n() {
                        for (var t, e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                            n[o] = arguments[o];
                        return (t = i.call.apply(i, [this].concat(n)) || this)._spiritCellBg = void 0,
                            t._mcIcon = void 0,
                            t._nameTxt = void 0,
                            t
                    }
                    return t(n, i),
                        e(n, [{
                            key: "spiritCellBg",
                            get: function() {
                                return this._spiritCellBg || (this._spiritCellBg = new u(this.getChildByName("spiritCellBg"))),
                                    this._spiritCellBg
                            }
                        }, {
                            key: "mcIcon",
                            get: function() {
                                return this._mcIcon || (this._mcIcon = new d(this.getChildByName("mcIcon"))),
                                    this._mcIcon
                            }
                        }, {
                            key: "nameTxt",
                            get: function() {
                                return this._nameTxt || (this._nameTxt = new g(this.getChildByName("nameTxt"))),
                                    this._nameTxt
                            }
                        }]),
                        n
                }(g);
                o._RF.pop()
            }
        }
    }
));
