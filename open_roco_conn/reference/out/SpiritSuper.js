System.register("chunks:///_virtual/SpiritSuper.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseMCProxy.ts", "./FightData.ts"], (function(i) {
        var t, o, s, n, h;
        return {
            setters: [function(i) {
                t = i.inheritsLoose,
                    o = i.createClass
            }
                , function(i) {
                    s = i.cclegacy
                }
                , function(i) {
                    n = i.BaseMCProxy
                }
                , function(i) {
                    h = i.FightData
                }
            ],
            execute: function() {
                s._RF.push({}, "b5c2aAc4xFH55MZmc0cifD1", "SpiritSuper", void 0);
                i("SpiritSuper", function(i) {
                    function s() {
                        var t;
                        return (t = i.call(this) || this).info = void 0,
                            t.posType = 0,
                            t._isIdle = !1,
                            t._nameLog = "",
                            t._log = "",
                            t
                    }
                    t(s, i);
                    var n = s.prototype;
                    return n.transform = function() {
                        console.log(this._log + "播放 transform"),
                            this._isIdle = !1,
                        this._body1 && (this._body1.active = !0,
                            this._body1.play("TRANSFORM"),
                            this.bringVSpiritToFront1())
                    }
                        ,
                        n.antiTransform = function() {
                            console.log(this._log + "播放 antiTransform"),
                                this._isIdle = !1,
                            this._body1 && (this._body1.active = !0,
                                this._body1.play("ANTITRANSFORM"),
                                this.bringVSpiritToFront1())
                        }
                        ,
                        n.getIdle = function() {
                            return this._isIdle
                        }
                        ,
                        n.idle = function() {
                            console.log(this._log + "播放 idle"),
                                this._isIdle = !0,
                            this._body1 && (this._body1.active = !0,
                                this._body1.play("IDLE"),
                                this.bringVSpiritToFront1())
                        }
                        ,
                        n.stb = function() {
                            console.log(this._log + "播放 stb"),
                                this._isIdle = !1,
                            this._body1 && (this._body1.active = !0,
                                this._body1.play("STB"),
                                this.bringVSpiritToFront1())
                        }
                        ,
                        n.bts = function() {
                            console.log(this._log + "播放 bts"),
                                this._isIdle = !1,
                            this._body1 && (this._body1.active = !0,
                                this._body1.play("BTS"),
                                this.bringVSpiritToFront1())
                        }
                        ,
                        n.appear = function() {
                            console.log(this._log + "播放 appear"),
                                this._isIdle = !1,
                            this._body1 && (this._body1.active = !0,
                                this._body1.play("APPEAR"),
                                this.bringVSpiritToFront1())
                        }
                        ,
                        n.attack = function() {
                            console.log(this._log + "播放 attack"),
                                this._isIdle = !1,
                            this._body1 && (this._body1.active = !0,
                                this._body1.play("ATTACK"),
                                this.bringVSpiritToFront1())
                        }
                        ,
                        n.underAttack = function() {
                            console.log(this._log + "播放 under_attack"),
                                this._isIdle = !1,
                            this._body1 && (this._body1.active = !0,
                                this._body1.play("UNDER_ATTACK"),
                                this.bringVSpiritToFront1())
                        }
                        ,
                        n.beatDown = function() {
                            console.log(this._log + "播放 beat_down"),
                                this._isIdle = !1,
                            this._body1 && (this._body1.active = !0,
                                this._body1.play("BEAT_DOWN"),
                                this.bringVSpiritToFront1())
                        }
                        ,
                        n.miss = function() {
                            console.log(this._log + "播放 miss"),
                                this._isIdle = !1,
                            this._body1 && (this._body1.active = !0,
                                this._body1.play("MISS"),
                                this.bringVSpiritToFront1())
                        }
                        ,
                        n.magicStart = function() {
                            console.log(this._log + "播放 magic_start"),
                                this._isIdle = !1,
                            this._body1 && (this._body1.active = !0,
                                this._body1.play("MAGIC_START"),
                                this.bringVSpiritToFront1())
                        }
                        ,
                        n.magicFocus = function() {
                            console.log(this._log + "播放 magic_focus"),
                                this._isIdle = !1,
                            this._body1 && (this._body1.active = !0,
                                this._body1.play("MAGIC_FOCUS"),
                                this.bringVSpiritToFront1())
                        }
                        ,
                        n.magicEnd = function() {
                            console.log(this._log + "播放 magic_end"),
                                this._isIdle = !1,
                            this._body1 && (this._body1.active = !0,
                                this._body1.play("MAGIC_END"),
                                this.bringVSpiritToFront1())
                        }
                        ,
                        n.dead = function() {
                            console.log(this._log + "播放 dead"),
                                this._isIdle = !1,
                            this._body1 && (this._body1.active = !0,
                                this._body1.play("DEAD"),
                                this.bringVSpiritToFront1())
                        }
                        ,
                        n.stopNull = function() {
                            this._body1 && (this._body1.active = !1,
                                this._body1.stop())
                        }
                        ,
                        n.run = function(i) {
                            this._body1 && (this._body1.active = !0,
                                this._body1.setPosition(this._body1.getPosition().x - i, this._body1.getPosition().y))
                        }
                        ,
                        n.changeHead = function() {
                            this._body1 && this._body1.setScale(-1 * this._body1.getScale().x, 1)
                        }
                        ,
                        n.changeAlpha = function() {}
                        ,
                        n.getPosType = function() {
                            return this.posType
                        }
                        ,
                        n.setPosType = function(i) {
                            this.posType = i,
                                i == h.POS_LEFT ? this._log = "左方" : i == h.POS_RIGHT && (this._log = "右方")
                        }
                        ,
                        n.getData = function() {
                            return this.info
                        }
                        ,
                        n.setData = function(i) {
                            this.info = i
                        }
                        ,
                        n.finalize = function() {
                            this.info = null,
                                this.posType = -1
                        }
                        ,
                        o(s, [{
                            key: "nameLog",
                            get: function() {
                                return this._nameLog
                            },
                            set: function(i) {
                                this._nameLog = i,
                                this._body1 && (this._body1.nameLog = i)
                            }
                        }]),
                        s
                }(n));
                s._RF.pop()
            }
        }
    }
));
