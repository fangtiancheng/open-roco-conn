System.register("chunks:///_virtual/SpiritAnimationComponent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts", "./SpiritAnimation.ts", "./GAFAnimation.ts", "./PetResCfgLoader.ts"], (function(t) {
        var n, o, i, e, a, s, r, l, c, d, u;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    o = t.createClass,
                    i = t.asyncToGenerator,
                    e = t.regeneratorRuntime
            }
                , function(t) {
                    a = t.cclegacy,
                        s = t.AnimationClip,
                        r = t.Component
                }
                , function(t) {
                    l = t.default
                }
                , function(t) {
                    c = t.SpiritAnimation
                }
                , function(t) {
                    d = t.GAFAnimation
                }
                , function(t) {
                    u = t.PetResCfgLoader
                }
            ],
            execute: function() {
                a._RF.push({}, "cec48TMp/FPUYExRKiftimw", "SpiritAnimationComponent", void 0),
                    t("SpiritAnimationComponent", function(t) {
                        function a() {
                            var n;
                            return (n = t.call(this) || this)._resType = 0,
                                n._nameLog = "",
                                n._resID = -1,
                                n._autoPlay = void 0,
                                n._action = void 0,
                                n.mode = c.SPIRITANIMATION_MODE_COMBAT,
                                n.loadedCallBack = null,
                                n.success = null,
                                n
                        }
                        n(a, t);
                        var r = a.prototype;
                        return r.loadSpirit = function(t, n, o, i) {
                            if (void 0 === n && (n = !1),
                            void 0 === o && (o = !1),
                            void 0 === i && (i = ""),
                            this._resID != t) {
                                1 == n && this.clear(),
                                    this._resID = t,
                                    this._autoPlay = o,
                                    this._action = i;
                                var e = this.node.getComponent(d) || this.node.addComponent(d)
                                    , a = u.Instance.getPath(t);
                                e.loadWithAnyPlist("", ["gaf/Pet/" + a], [], 24, s.WrapMode.Loop, this.onGAFMvLoadSuccess.bind(this), this.onGAFMvLoadFail.bind(this), this)
                            }
                        }
                            ,
                            r.loadSpiritSnyc = function() {
                                var t = i(e().mark((function t(n, o) {
                                        var i, a;
                                        return e().wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                        case 0:
                                                            if (this._resID != n) {
                                                                t.next = 3;
                                                                break
                                                            }
                                                            return t.abrupt("return");
                                                        case 3:
                                                            return this._resID = n,
                                                                i = this.node.getComponent(d) || this.node.addComponent(d),
                                                                a = u.Instance.getPath(n),
                                                                t.next = 8,
                                                                i.syncLoadWithAnyPlist("", ["gaf/Pet/" + a], [], 24, s.WrapMode.Loop);
                                                        case 8:
                                                            t.sent.err ? this.loadedCallBack && this.loadedCallBack(!1, this) : (this.loadedCallBack && this.loadedCallBack(!0, this),
                                                            1 == this._autoPlay && this.play(this._action));
                                                        case 10:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                            }
                                        ), t, this)
                                    }
                                )));
                                return function(n, o) {
                                    return t.apply(this, arguments)
                                }
                            }(),
                            r.onGAFMvLoadSuccess = function(t) {
                                this.node.active = !1,
                                this.loadedCallBack && this.loadedCallBack(!0, this),
                                1 == this._autoPlay && this.play(this._action)
                            }
                            ,
                            r.onGAFMvLoadFail = function() {
                                this.loadedCallBack && this.loadedCallBack(!1, this)
                            }
                            ,
                            r.unload = function() {}
                            ,
                            r.play = function(t) {
                                this.node.active = !0,
                                    this.playGaf("Spirit", t)
                            }
                            ,
                            r.playGaf = function(t, n) {
                                this.node.active = !0,
                                1 == l.IS_LOCAL && console.log("SpiritAnimationComponent=playGaf=" + t + "==" + n + "=nameLog=" + this._nameLog);
                                var o = this.node.getComponent(d);
                                o || l.IS_LOCAL,
                                    o.play(t, n)
                            }
                            ,
                            r.stop = function() {
                                this.node.getComponent(d).stop()
                            }
                            ,
                            r.gotoAndStopGaf = function(t, n) {
                                return this.node.active = !0,
                                    this.node.getComponent(d).gotoAndStop(t, n)
                            }
                            ,
                            r.clear = function() {
                                this.loadedCallBack = null;
                                var t = this.node.getComponent(d);
                                t && t.destroy()
                            }
                            ,
                            r.onDestroy = function() {}
                            ,
                            o(a, [{
                                key: "resType",
                                get: function() {
                                    return this._resType
                                },
                                set: function(t) {
                                    null != t && null != t || l.IS_LOCAL,
                                        this._resType = t
                                }
                            }, {
                                key: "nameLog",
                                get: function() {
                                    return this._nameLog
                                },
                                set: function(t) {
                                    this._nameLog = t
                                }
                            }]),
                            a
                    }(r)).ANIMATION_NAME_PET = ["IDLE", "STB", "BTS", "APPEAR", "ATTACK", "UNDER_ATTACK", "BEAT_DOWN", "MISS", "MAGIC_START", "MAGIC_FOCUS", "MAGIC_END", "DEAD"],
                    a._RF.pop()
            }
        }
    }
));
