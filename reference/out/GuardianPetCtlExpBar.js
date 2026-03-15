System.register("chunks:///_virtual/GuardianPetCtlExpBar.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GuardianPetUICtlBase.ts", "./FrameEvent.ts", "./ProgressBarNode.ts"], (function(t) {
        var r, e, s, a, i, n, o, u;
        return {
            setters: [function(t) {
                r = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    s = t.cclegacy,
                        a = t.tween,
                        i = t.ProgressBar
                }
                , function(t) {
                    n = t.GuardianPetUICtlBase
                }
                , function(t) {
                    o = t.default
                }
                , function(t) {
                    u = t.ProgressBarNode
                }
            ],
            execute: function() {
                s._RF.push({}, "8045f2u10lMnLH0lXOW4kie", "GuardianPetCtlExpBar", void 0);
                t("GuardianPetCtlExpBar", function(t) {
                    r(n, t);
                    var s = n.prototype;
                    function n(r, e, s, a) {
                        var n;
                        return void 0 === e && (e = 0),
                        void 0 === s && (s = ""),
                        void 0 === a && (a = null),
                            (n = t.call(this, r, e, s, a) || this)._curProgress = 0,
                            n._targetFrame = void 0,
                            n._curFrame = void 0,
                            n._callback = void 0,
                            n._bar = null,
                            n.res.gotoAndStop(1),
                            n._bar = r.getComponent(i),
                            n
                    }
                    return s.createAgentNode = function(t) {
                        return new c(t)
                    }
                        ,
                        s.onEnterFrame = function(t) {
                            this.res.currentFrame >= this._targetFrame && (this.res.stop(),
                                this.res.removeEventListener(o.ENTER_FRAME, this.onEnterFrame, this),
                            null != this._callback && (this._callback(),
                                this._callback = null))
                        }
                        ,
                        s.animationToProgress = function(t, r) {
                            void 0 === r && (r = null),
                                this._callback = r;
                            var e = Number(t * this.res.totalFrames);
                            e != this._curFrame && (this._targetFrame = e > this.res.totalFrames ? this.res.totalFrames : e,
                                this.res.currentFrame < this.res.totalFrames ? (this.res.removeEventListener(o.ENTER_FRAME, this.onEnterFrame, this),
                                    this.res.addEventListener(o.ENTER_FRAME, this.onEnterFrame, this),
                                    this.res.play()) : this.res.gotoAndStop(this.res.totalFrames)),
                                this._curProgress = t,
                                this._curFrame = this._targetFrame,
                                a(this._bar).to(.2, {
                                    progress: .01 * this._curFrame
                                }).start()
                        }
                        ,
                        s.setProgress = function(t) {
                            var r = Number(t * this.res.totalFrames);
                            this._targetFrame = r > this.res.totalFrames ? this.res.totalFrames : r,
                                this.res.gotoAndStop(this._targetFrame),
                                this._curFrame = this._targetFrame
                        }
                        ,
                        e(n, [{
                            key: "res",
                            get: function() {
                                return this.m_res
                            }
                        }, {
                            key: "curProgress",
                            get: function() {
                                return this._curProgress
                            }
                        }]),
                        n
                }(n));
                var c = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    return r(e, t),
                        e
                }(u);
                s._RF.pop()
            }
        }
    }
));
