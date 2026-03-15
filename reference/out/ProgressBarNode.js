System.register("chunks:///_virtual/ProgressBarNode.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts", "./AgentNode.ts"], (function(t) {
        var r, e, n, s, o, a, i, c, u;
        return {
            setters: [function(t) {
                r = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        s = t.isValid,
                        o = t.tween,
                        a = t.Tween,
                        i = t.ProgressBar
                }
                , function(t) {
                    c = t.default
                }
                , function(t) {
                    u = t.AgentNode
                }
            ],
            execute: function() {
                n._RF.push({}, "e5073qDUAdD1Y2T2bY0z990", "ProgressBarNode", void 0);
                t("ProgressBarNode", function(t) {
                    function n(r) {
                        var e;
                        return (e = t.call(this, r) || this)._bar = void 0,
                        r && s(r) && (e._bar = e._target.getComponent(i)),
                            e
                    }
                    r(n, t);
                    var u = n.prototype;
                    return u.play = function() {
                        if (this._target || c.IS_LOCAL,
                            s(this._target)) {
                            if (!this._target || !this._bar)
                                throw new Error("[" + this.constructor.name + "]'s function [play]'s param [this._target] is null.");
                            o(this._bar).to(.2, {
                                progress: 1
                            }).start()
                        }
                    }
                        ,
                        u.stop = function() {
                            if (this._target || c.IS_LOCAL,
                                s(this._target)) {
                                if (!this._target || !this._bar)
                                    throw new Error("[" + this.constructor.name + "]'s function [play]'s param [this._target] is null.");
                                a.stopAllByTarget(this._bar)
                            }
                        }
                        ,
                        e(n, [{
                            key: "currentFrame",
                            get: function() {
                                return 100 * this._bar.progress
                            },
                            set: function(t) {
                                throw new Error("[" + this.constructor.name + "]'s function [set currentFrame] cannot be call.")
                            }
                        }, {
                            key: "totalFrames",
                            get: function() {
                                return 100
                            },
                            set: function(t) {
                                throw new Error("[" + this.constructor.name + "]'s function [set targetFrame] cannot be call.")
                            }
                        }]),
                        n
                }(u));
                n._RF.pop()
            }
        }
    }
));
