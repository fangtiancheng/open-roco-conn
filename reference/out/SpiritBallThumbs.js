System.register("chunks:///_virtual/SpiritBallThumbs.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./SpiritBallThumb.ts"], (function(t) {
        var i, s, u, n, h;
        return {
            setters: [function(t) {
                i = t.createClass,
                    s = t.inheritsLoose
            }
                , function(t) {
                    u = t.cclegacy
                }
                , function(t) {
                    n = t.AgentNode
                }
                , function(t) {
                    h = t.SpiritBallThumb
                }
            ],
            execute: function() {
                u._RF.push({}, "5f5c2/+/sxPdpdmN8YNTjvp", "SpiritBallThumbs", void 0),
                    t("SpiritBallThumbs", function() {
                        function t(t) {
                            this._ui = void 0,
                                this._thumbs = void 0,
                                this._ui = new o(t),
                                this._ui.visible = !1,
                                this.initThumbInfos(),
                                this.data = null
                        }
                        var s = t.prototype;
                        return s.dispose = function() {
                            this.data = null,
                                this.disposeThumbInfos()
                        }
                            ,
                            s.initThumbInfos = function() {
                                this._ui.mouseEnabled = !1,
                                    this._ui.mouseChildren = !1,
                                    this._thumbs = [];
                                for (var i = 0; i < t.THUMB_INFO_NUM; ++i)
                                    this._thumbs[i] = new h(this._ui["thumbInfo" + i])
                            }
                            ,
                            s.disposeThumbInfos = function() {
                                for (var t, i = this._thumbs.length, s = 0; s < i; ++s)
                                    null != (t = this._thumbs[s]) && t.dispose();
                                this._thumbs = []
                            }
                            ,
                            i(t, [{
                                key: "data",
                                set: function(t) {
                                    for (var i = this._thumbs.length, s = 0; s < i; ++s)
                                        null != this._thumbs[s] && (this._thumbs[s].data = null != t ? t[s] : null)
                                }
                            }]),
                            t
                    }()).THUMB_INFO_NUM = 6;
                var o = function(t) {
                    function i() {
                        return t.apply(this, arguments) || this
                    }
                    return s(i, t),
                        i
                }(n);
                u._RF.pop()
            }
        }
    }
));
