System.register("chunks:///_virtual/EffectNormal.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseMCProxy.ts"], (function(t) {
        var o, i, e;
        return {
            setters: [function(t) {
                o = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    e = t.BaseMCProxy
                }
            ],
            execute: function() {
                i._RF.push({}, "bdc5dQSUStKm5N7JVsNI/wI", "EffectNormal", void 0);
                t("EffectNormal", function(t) {
                    function i() {
                        return t.call(this) || this
                    }
                    o(i, t);
                    var e = i.prototype;
                    return e.stopNull = function() {
                        this._body1 && (this._body1.active = !1,
                            this._body1.stop())
                    }
                        ,
                        e.spell = function() {
                            if (this._body1) {
                                var t = this._body1.___name___;
                                console.log(t + " =>>>execute spell==="),
                                    this._body1.active = !0,
                                    this._body1.play("Normal")
                            }
                        }
                        ,
                        e.ballAppear = function() {
                            if (this._body1) {
                                var t = this._body1.___name___;
                                console.log(t + " =>>>execute ballAppear==="),
                                    this._body1.active = !0,
                                    this._body1.play("BALL_APPEAR")
                            }
                        }
                        ,
                        e.ballAppear2 = function() {
                            if (this._body1) {
                                var t = this._body1.___name___;
                                console.log(t + " =>>>execute ballAppear2==="),
                                    this._body1.active = !0,
                                    this._body1.play("BALL_APPEAR2")
                            }
                        }
                        ,
                        e.ballRecieve = function() {
                            this._body1 && (this._body1.active = !0,
                                this._body1.play("BALL_RECIEVE"))
                        }
                        ,
                        e.ballGetSuccess = function() {
                            this._body1 && (this._body1.active = !0,
                                this._body1.play("BALL_GETSUCCESS"))
                        }
                        ,
                        e.ballGetFailed = function() {
                            this._body1 && (this._body1.active = !0,
                                this._body1.play("BALL_GETFAILED"))
                        }
                        ,
                        e.ballStay = function() {
                            this._body1 && (this._body1.active = !0,
                                this._body1.play("BALL_STAY"))
                        }
                        ,
                        e.ballSmoke = function() {
                            this._body1 && (this._body1.active = !0,
                                this._body1.play("BALL_SMOKE"))
                        }
                        ,
                        i
                }(e));
                i._RF.pop()
            }
        }
    }
));
