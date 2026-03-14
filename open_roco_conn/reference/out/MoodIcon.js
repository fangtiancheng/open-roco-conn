System.register("chunks:///_virtual/MoodIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./LangStrings.ts"], (function(t) {
        var i, o, s, e, n;
        return {
            setters: [function(t) {
                i = t.createClass,
                    o = t.inheritsLoose
            }
                , function(t) {
                    s = t.cclegacy
                }
                , function(t) {
                    e = t.AgentNode
                }
                , function(t) {
                    n = t.LangStrings
                }
            ],
            execute: function() {
                s._RF.push({}, "0a121V9RXdMqr5FCCntNd0w", "MoodIcon", void 0);
                var u = function(t) {
                    function i() {
                        return t.apply(this, arguments) || this
                    }
                    return o(i, t),
                        i
                }(e);
                t("MoodIcon", function() {
                    function t() {
                        this._ui = void 0
                    }
                    var o = t.prototype;
                    return o.MoodIcon = function(t) {
                        this._ui = new u(t),
                            this._ui.gotoAndStop(1),
                        null != this._ui && (this._ui.mouseChildren = !1)
                    }
                        ,
                        o.setProperty = function(t, i) {
                            null != this._ui && (this._ui[t] = i)
                        }
                        ,
                        i(t, [{
                            key: "mood",
                            set: function(t) {
                                switch (t) {
                                    case 1:
                                        this._ui.visible = !0,
                                            this._ui.gotoAndStop(1),
                                            this.setProperty("tooltip", n.SPIRIT_MOOD_0);
                                        break;
                                    case 2:
                                        this._ui.visible = !0,
                                            this._ui.gotoAndStop(2),
                                            this.setProperty("tooltip", n.SPIRIT_MOOD_1);
                                        break;
                                    case 3:
                                        this._ui.visible = !0,
                                            this._ui.gotoAndStop(3),
                                            this.setProperty("tooltip", n.SPIRIT_MOOD_2);
                                        break;
                                    case 4:
                                        this._ui.visible = !0,
                                            this._ui.gotoAndStop(4),
                                            this.setProperty("tooltip", n.SPIRIT_MOOD_3);
                                        break;
                                    case 5:
                                        this._ui.visible = !0,
                                            this._ui.gotoAndStop(5),
                                            this.setProperty("tooltip", n.SPIRIT_MOOD_4);
                                        break;
                                    default:
                                        this._ui.visible = !1
                                }
                            }
                        }]),
                        t
                }());
                s._RF.pop()
            }
        }
    }
));
