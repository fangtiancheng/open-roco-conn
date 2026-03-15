System.register("chunks:///_virtual/SpiritMc.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeExtend.ts", "./SpiritAnimationContainerGaf.ts", "./SpiritResAdapter.ts"], (function(i) {
        var t, n, e, s, o, h, a;
        return {
            setters: [function(i) {
                t = i.inheritsLoose,
                    n = i.createClass
            }
                , function(i) {
                    e = i.cclegacy,
                        s = i.isValid
                }
                , function(i) {
                    o = i.NodeExtend
                }
                , function(i) {
                    h = i.SpiritAnimationContainerGaf
                }
                , function(i) {
                    a = i.SpiritResAdapter
                }
            ],
            execute: function() {
                e._RF.push({}, "6b672Lg0XBMd6Jn+Q2hG2Eh", "SpiritMc", void 0);
                i("SpiritMc", function(i) {
                    function e() {
                        var t;
                        return (t = i.call(this) || this)._ui = void 0,
                            t.__id = -1,
                            t._mc = void 0,
                            t._width = 0,
                            t._height = 0,
                            t._spirit = void 0,
                            t.tooltip = "",
                            t._gaf = null,
                            t
                    }
                    t(e, i);
                    var o = e.prototype;
                    return o.dispose = function() {
                        this.clear()
                    }
                        ,
                        o.clear = function() {
                            null != this._mc && (this.contains(this._mc) && this.removeChild(this._mc),
                                a.getInstance().returnSpiritIdleMC(this._mc.name),
                                this._mc = null)
                        }
                        ,
                        o.setMask = function(i, t) {}
                        ,
                        o.place = function(i) {}
                        ,
                        o.cleanContainer = function(i) {}
                        ,
                        o.onLoaded = function(i) {
                            this.clear(),
                            null != i && this.place(i)
                        }
                        ,
                        o.load = function(i) {
                            this.__id != i && (this.__id = i,
                                this.clear(),
                                this.loadIdle(i))
                        }
                        ,
                        o.load1 = function(i) {
                            this.load(i)
                        }
                        ,
                        o.loadIdle = function(i) {
                            this.removeGaf(),
                            !this.parent && this._ui && s(this._ui) && this._ui.addChild(this),
                                i <= 0 ? this.removeIdle() : (this._gaf && this.removeGaf(),
                                    this._gaf = null,
                                this._gaf || (this._gaf = new h,
                                    this._gaf.loadedCallBack = this.onSpiritAnimationLoaded.bind(this),
                                    this._gaf.initWithPetWithGaf(i),
                                    this.addChild(this._gaf)))
                        }
                        ,
                        o.onSpiritAnimationLoaded = function(i) {
                            i && this.playIdle(!0)
                        }
                        ,
                        o.playIdle = function(i) {
                            this._gaf && (1 == i ? this._gaf.play("IDLE") : this._gaf.stop())
                        }
                        ,
                        o.removeIdle = function() {
                            this.removeIdle1()
                        }
                        ,
                        o.removeIdle1 = function() {
                            this.removeGaf()
                        }
                        ,
                        o.removeGaf = function() {
                            this._gaf && (this._gaf.release(),
                                this._gaf.destroy()),
                                this._gaf = null
                        }
                        ,
                        n(e, [{
                            key: "ui",
                            set: function(i) {
                                this._ui = i
                            }
                        }, {
                            key: "display",
                            get: function() {
                                return this
                            }
                        }, {
                            key: "id",
                            get: function() {
                                return this.__id
                            },
                            set: function(i) {
                                this.__id = i
                            }
                        }, {
                            key: "width",
                            get: function() {
                                return this._width
                            },
                            set: function(i) {
                                this._width = i
                            }
                        }, {
                            key: "height",
                            get: function() {
                                return this._height
                            },
                            set: function(i) {
                                this._height = i
                            }
                        }]),
                        e
                }(o));
                e._RF.pop()
            }
        }
    }
));
