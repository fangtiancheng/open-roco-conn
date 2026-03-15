System.register("chunks:///_virtual/SpiritChangeIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./NodeExtendEx.ts"], (function(t) {
        var i, n, e, o, c, a, r, s, h, m, l;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    e = t.cclegacy,
                        o = t.Node,
                        c = t.UITransform,
                        a = t.Sprite,
                        r = t.SpriteFrame,
                        s = t.Texture2D,
                        h = t.instantiate
                }
                , function(t) {
                    m = t.AgentNode
                }
                , function(t) {
                    l = t.NodeExtendEx
                }
            ],
            execute: function() {
                e._RF.push({}, "60d4eoAa9dNDZKUWVEl1giE", "SpiritChangeIcon", void 0);
                t("SpiritChangeIcon", function(t) {
                    i(m, t);
                    var e = m.prototype;
                    function m(i) {
                        var n;
                        (n = t.call(this) || this).icon = null,
                            n.iconmc = void 0,
                            n.sName = void 0,
                            n.level = void 0,
                            n.currentHp = void 0,
                            n.maxHp = void 0,
                            n.thisid = void 0,
                            n.myBitmapName = void 0,
                            n.par = void 0,
                            n.loaded = !1,
                            n.width = 178,
                            n.height = 160,
                            n.par = i;
                        var e = h(n.par.spiritContainerMcPrefab);
                        return n.initView(e),
                            n
                    }
                    return e.afterLoaded = function() {
                        this.init()
                    }
                        ,
                        e.init = function() {
                            this._isInit
                        }
                        ,
                        e.dispose = function() {}
                        ,
                        e.onInit = function() {
                            this.iconmc = new f(this._view),
                                this.addChild(this.iconmc.target)
                        }
                        ,
                        e.getABitmap = function(t) {
                            for (var i = 0; i < this.iconmc.mcIcon.numChildren; i++) {
                                var n = this.iconmc.mcIcon.getChildAt(0);
                                this.iconmc.mcIcon.removeChild(n)
                            }
                            this.loaded = !1,
                                this.par._ca.getSpiritImage(t, this.onLoaded.bind(this))
                        }
                        ,
                        e.onLoaded = function(t) {
                            if (this.iconmc) {
                                this.icon = new o,
                                    this.icon.addComponent(c),
                                    this.icon.addComponent(a);
                                var i = new r
                                    , n = new s;
                                n.image = t,
                                    i.texture = n;
                                var e = this.icon.getComponent(a);
                                e.spriteFrame = i,
                                    e.spriteFrame.addRef(),
                                    this.iconmc.mcIcon.addChild(this.icon),
                                    this.icon.getComponent(c).setContentSize(88, 88),
                                    this.icon.setScale(.76, .76),
                                    this.icon.setPosition(0, 0),
                                "" != this.myBitmapName && this.par._ca.returnSpiritImage(this.myBitmapName),
                                    this.myBitmapName = t.name
                            }
                            this.loaded = !0
                        }
                        ,
                        e.del = function() {
                            "" != this.myBitmapName && this.par._ca.returnSpiritImage(this.myBitmapName),
                                this.iconmc = null,
                                this.par = null
                        }
                        ,
                        n(m, [{
                            key: "resBundleKey",
                            get: function() {
                                return ""
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return ""
                            }
                        }]),
                        m
                }(l));
                var d = function(t) {
                    function e() {
                        for (var i, n = arguments.length, e = new Array(n), o = 0; o < n; o++)
                            e[o] = arguments[o];
                        return (i = t.call.apply(t, [this].concat(e)) || this)._iconlayer = void 0,
                            i
                    }
                    return i(e, t),
                        n(e, [{
                            key: "iconlayer",
                            get: function() {
                                return this._iconlayer || (this._iconlayer = new m(this.getChildByName("iconlayer"))),
                                    this._iconlayer
                            }
                        }]),
                        e
                }(m)
                    , u = function(t) {
                    function e() {
                        for (var i, n = arguments.length, e = new Array(n), o = 0; o < n; o++)
                            e[o] = arguments[o];
                        return (i = t.call.apply(t, [this].concat(e)) || this)._iconlayerMask = void 0,
                            i
                    }
                    return i(e, t),
                        n(e, [{
                            key: "iconlayerMask",
                            get: function() {
                                return this._iconlayerMask || (this._iconlayerMask = new d(this.getChildByName("iconlayerMask"))),
                                    this._iconlayerMask
                            }
                        }]),
                        e
                }(m)
                    , f = function(t) {
                    function e() {
                        for (var i, n = arguments.length, e = new Array(n), o = 0; o < n; o++)
                            e[o] = arguments[o];
                        return (i = t.call.apply(t, [this].concat(e)) || this)._mcIcon = void 0,
                            i._nmtxt = void 0,
                            i._backmc = void 0,
                            i._nametxt = void 0,
                            i._lifttxt = void 0,
                            i._lifemc = void 0,
                            i
                    }
                    return i(e, t),
                        n(e, [{
                            key: "mcIcon",
                            get: function() {
                                return this._mcIcon || (this._mcIcon = new u(this.getChildByName("mcIcon"))),
                                    this._mcIcon
                            }
                        }, {
                            key: "nmtxt",
                            get: function() {
                                return this._nmtxt || (this._nmtxt = new m(this.getChildByName("nmtxt"))),
                                    this._nmtxt
                            }
                        }, {
                            key: "backmc",
                            get: function() {
                                return this._backmc || (this._backmc = new m(this.getChildByName("backmc"))),
                                    this._backmc
                            }
                        }, {
                            key: "nametxt",
                            get: function() {
                                return this._nametxt || (this._nametxt = new m(this.getChildByName("nametxt"))),
                                    this._nametxt
                            }
                        }, {
                            key: "lifttxt",
                            get: function() {
                                return this._lifttxt || (this._lifttxt = new m(this.getChildByName("lifttxt"))),
                                    this._lifttxt
                            }
                        }, {
                            key: "lifemc",
                            get: function() {
                                return this._lifemc || (this._lifemc = new m(this.getChildByName("lifemc"))),
                                    this._lifemc
                            }
                        }]),
                        e
                }(m);
                e._RF.pop()
            }
        }
    }
));
