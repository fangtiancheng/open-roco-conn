System.register("chunks:///_virtual/SpiritAnimationLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts", "./SpiritAnimationContainerGaf.ts"], (function(i) {
        var n, t, o, a, e;
        return {
            setters: [function(i) {
                n = i.inheritsLoose
            }
                , function(i) {
                    t = i.cclegacy,
                        o = i.Component
                }
                , function(i) {
                    a = i.default
                }
                , function(i) {
                    e = i.SpiritAnimationContainerGaf
                }
            ],
            execute: function() {
                t._RF.push({}, "5ef92RjK2dJyqPdHmdQVrUu", "SpiritAnimationLoader", void 0);
                i("SpiritAnimationLoader", function(i) {
                    function t() {
                        for (var n, t = arguments.length, o = new Array(t), a = 0; a < t; a++)
                            o[a] = arguments[a];
                        return (n = i.call.apply(i, [this].concat(o)) || this)._spiritIdleID = -1,
                            n._gafAnimation = null,
                            n._oldGafAnimation = null,
                            n._isPlay = !0,
                            n
                    }
                    n(t, i);
                    var o = t.prototype;
                    return o.onDestroy = function() {}
                        ,
                        o.clear = function() {
                            this.removeOldAnimation(),
                                this.removeAnimation(),
                                this._spiritIdleID = -1
                        }
                        ,
                        o.load = function(i, n) {
                            void 0 === n && (n = !1),
                            this._gafAnimation || (this._spiritIdleID = -1),
                            this._spiritIdleID != i && (this._spiritIdleID = i,
                            1 == a.IS_LOCAL && console.log("loadIdle=id=" + i),
                                i <= 0 ? this.removeAnimation() : (this._gafAnimation && (n ? this.removeAnimation() : this.transferAnimation()),
                                this._gafAnimation || (this._gafAnimation = new e,
                                    this._gafAnimation.name = this._spiritIdleID + "_cza",
                                    this._gafAnimation.loadedCallBack = this.onSpiritAnimationLoaded.bind(this),
                                    this._gafAnimation.initWithPetWithGaf(i),
                                    this.node.addChild(this._gafAnimation),
                                    this._gafAnimation.x = -1240,
                                    this._gafAnimation.y = 400,
                                    this._gafAnimation.addComponent(s))))
                        }
                        ,
                        o.transferAnimation = function() {
                            this._oldGafAnimation && this._gafAnimation && this.removeOldAnimation(),
                                this._oldGafAnimation = this._gafAnimation,
                            1 == a.IS_LOCAL && console.error("SpiritAnimationLoader-transferAnimation"),
                            this._oldGafAnimation && (this._oldGafAnimation.loadedCallBack = null),
                                this._gafAnimation = null
                        }
                        ,
                        o.removeOldAnimation = function() {
                            this._oldGafAnimation && (this._oldGafAnimation.release(),
                                this._oldGafAnimation.destroy(),
                            1 == a.IS_LOCAL && console.error("SpiritAnimationLoader-removeOldAnimation")),
                                this._oldGafAnimation = null
                        }
                        ,
                        o.removeAnimation = function() {
                            this._gafAnimation && (this._gafAnimation.release(),
                                this._gafAnimation.destroy()),
                                this._gafAnimation = null,
                                this._spiritIdleID = -1
                        }
                        ,
                        o.onSpiritAnimationLoaded = function(i, n) {
                            i && (n ? n && n == this._gafAnimation && this.play(!0) : this.play(!0),
                                this.removeOldAnimation())
                        }
                        ,
                        o.play = function(i) {
                            1 == a.IS_LOCAL && console.error("SpiritAnimationLoader-playIdle=" + this._spiritIdleID),
                                this._isPlay = i,
                            this._gafAnimation && (1 == i ? this._gafAnimation.play("IDLE") : this._gafAnimation.stop())
                        }
                        ,
                        t
                }(o));
                var s = function(i) {
                    function t() {
                        return i.apply(this, arguments) || this
                    }
                    return n(t, i),
                        t.prototype.onDestroy = function() {
                            this.node instanceof e && 1 == a.IS_LOCAL && console.error("SpiritAnimationLoader-this.-onDestroy=" + this.node.name)
                        }
                        ,
                        t
                }(o);
                t._RF.pop()
            }
        }
    }
));
