System.register("chunks:///_virtual/SpiritNormal.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseMCProxy.ts", "./FightData.ts"], (function(t) {
        var i, o, s, e, _;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    o = t.createClass
            }
                , function(t) {
                    s = t.cclegacy
                }
                , function(t) {
                    e = t.BaseMCProxy
                }
                , function(t) {
                    _ = t.FightData
                }
            ],
            execute: function() {
                s._RF.push({}, "d975d1D+GpC8amRxAijcs+g", "SpiritNormal", void 0);
                t("SpiritNormal", function(t) {
                    function s() {
                        for (var i, o = arguments.length, s = new Array(o), e = 0; e < o; e++)
                            s[e] = arguments[e];
                        return (i = t.call.apply(t, [this].concat(s)) || this).info = void 0,
                            i.posType = 0,
                            i._isIdle = !1,
                            i._nameLog = "",
                            i._log = "",
                            i
                    }
                    i(s, t);
                    var e = s.prototype;
                    return e.stopNull = function() {
                        if (this._body1) {
                            var t = this._body1.___name___;
                            console.log(t + " =>>>execute stopNull==="),
                                this._body1.active = !1,
                                this._body1.stop()
                        }
                    }
                        ,
                        e.getIdle = function() {
                            return this._isIdle
                        }
                        ,
                        e.idle = function() {
                            if (console.log(this._log + "播放 idle"),
                                this._isIdle = !0,
                                this._body1) {
                                var t = this._body1.___name___;
                                console.log(t + " =>>>execute idle==="),
                                    this._body1.active = !0,
                                    this._body1.play("IDLE")
                            }
                        }
                        ,
                        e.stb = function() {
                            if (console.log(this._log + "播放 stb"),
                                this._isIdle = !1,
                                this._body1) {
                                var t = this._body1.___name___;
                                console.log(t + " =>>>execute stb==="),
                                    this._body1.active = !0,
                                    this._body1.play("STB"),
                                    this.bringVSpiritToFront1()
                            }
                        }
                        ,
                        e.bts = function() {
                            if (console.log(this._log + "播放 bts"),
                                this._isIdle = !1,
                                this._body1) {
                                var t = this._body1.___name___;
                                console.log(t + " =>>>execute bts==="),
                                    this._body1.active = !0,
                                    this._body1.play("BTS"),
                                    this.bringVSpiritToFront1()
                            }
                        }
                        ,
                        e.appear = function() {
                            if (console.log(this._log + "播放 appear"),
                                this._isIdle = !1,
                                this._body1) {
                                var t = this._body1.___name___;
                                console.log(t + " =>>>execute appear==="),
                                    this._body1.active = !0,
                                    this._body1.play("APPEAR"),
                                    this.bringVSpiritToFront1()
                            }
                        }
                        ,
                        e.attack = function() {
                            if (console.log(this._log + "播放 attack"),
                                this._isIdle = !1,
                                this._body1) {
                                var t = this._body1.___name___;
                                console.log(t + " =>>>execute attack==="),
                                    this._body1.active = !0,
                                    this._body1.play("ATTACK"),
                                    this.bringVSpiritToFront1()
                            }
                        }
                        ,
                        e.underAttack = function() {
                            if (console.log(this._log + "播放 under_attack"),
                                this._isIdle = !1,
                                this._body1) {
                                var t = this._body1.___name___;
                                console.log(t + " =>>>execute underAttack==="),
                                    this._body1.active = !0,
                                    this._body1.play("UNDER_ATTACK"),
                                    this.bringVSpiritToFront1()
                            }
                        }
                        ,
                        e.beatDown = function() {
                            if (console.log(this._log + "播放 beat_down"),
                                this._isIdle = !1,
                                this._body1) {
                                var t = this._body1.___name___;
                                console.log(t + " =>>>execute beatDown==="),
                                    this._body1.active = !0,
                                    this._body1.play("BEAT_DOWN"),
                                    this.bringVSpiritToFront1()
                            }
                        }
                        ,
                        e.miss = function() {
                            if (console.log(this._log + "播放 miss"),
                                this._isIdle = !1,
                                this._body1) {
                                var t = this._body1.___name___;
                                console.log(t + " =>>>execute miss==="),
                                    this._body1.active = !0,
                                    this._body1.play("MISS"),
                                    this.bringVSpiritToFront1()
                            }
                        }
                        ,
                        e.magicStart = function() {
                            console.log(this._log + "播放 magic_start"),
                                this._isIdle = !1,
                            this._body1 && (this._body1.active = !0,
                                this._body1.play("MAGIC_START"),
                                this.bringVSpiritToFront1())
                        }
                        ,
                        e.magicFocus = function() {
                            console.log(this._log + "播放 magic_focus"),
                                this._isIdle = !1,
                            this._body1 && (this._body1.active = !0,
                                this._body1.play("MAGIC_FOCUS"),
                                this.bringVSpiritToFront1())
                        }
                        ,
                        e.magicEnd = function() {
                            console.log(this._log + "播放 magic_end"),
                                this._isIdle = !1,
                            this._body1 && (this._body1.active = !0,
                                this._body1.play("MAGIC_END"),
                                this.bringVSpiritToFront1())
                        }
                        ,
                        e.dead = function() {
                            console.log(this._log + "播放 dead"),
                                this._isIdle = !1,
                            this._body1 && (this._body1.active = !0,
                                this._body1.play("DEAD"),
                                this.bringVSpiritToFront1())
                        }
                        ,
                        e.changeHead = function() {
                            this._body1 && this._body1.setScale(-1 * this._body1.getScale().x, 1)
                        }
                        ,
                        e.changeAlpha = function() {}
                        ,
                        e.run = function(t) {
                            this._body1 && (this._body1.active = !0,
                                this._body1.setPosition(this._body1.getPosition().x - t, this._body1.getPosition().y))
                        }
                        ,
                        e.getPosType = function() {
                            return this.posType
                        }
                        ,
                        e.setPosType = function(t) {
                            this.posType = t,
                                this._log = t == _.POS_LEFT ? "左方" : "右方"
                        }
                        ,
                        e.getData = function() {
                            return this.info
                        }
                        ,
                        e.setData = function(t) {
                            this.info = t
                        }
                        ,
                        e.finalize = function() {
                            this.info = null,
                                this.posType = -1
                        }
                        ,
                        o(s, [{
                            key: "nameLog",
                            get: function() {
                                return this._nameLog
                            },
                            set: function(t) {
                                this._nameLog = t,
                                this._body1 && (this._body1.nameLog = t)
                            }
                        }]),
                        s
                }(e));
                s._RF.pop()
            }
        }
    }
));
