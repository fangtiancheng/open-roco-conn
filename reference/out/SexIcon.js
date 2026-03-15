System.register("chunks:///_virtual/SexIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./ToolTip.ts", "./LangStrings.ts"], (function(t) {
        var i, n, s, e, o, u;
        return {
            setters: [function(t) {
                i = t.createClass,
                    n = t.inheritsLoose
            }
                , function(t) {
                    s = t.cclegacy
                }
                , function(t) {
                    e = t.AgentNode
                }
                , function(t) {
                    o = t.ToolTipComponent
                }
                , function(t) {
                    u = t.LangStrings
                }
            ],
            execute: function() {
                s._RF.push({}, "7e02frI/bNGR4LiVfv3VGnE", "SexIcon", void 0);
                t("SexIcon", function() {
                    function t(t, i) {
                        void 0 === i && (i = 0),
                            this._ui = void 0,
                            this._ui = new l(t),
                        null != this._ui && (this._ui.mouseChildren = !1,
                            this.sex = i,
                            this._ui.addComponent(o))
                    }
                    var n = t.prototype;
                    return n.setAsNone = function() {
                        null != this._ui && (this._ui.visible = !1)
                    }
                        ,
                        n.setAsMale = function() {
                            null != this._ui && (this._ui.visible = !0,
                                this._ui.gotoAndStop(1),
                                this._ui.tooltip = u.SPIRIT_MALE)
                        }
                        ,
                        n.setAsFemale = function() {
                            null != this._ui && (this._ui.visible = !0,
                                this._ui.gotoAndStop(2),
                                this._ui.tooltip = u.SPIRIT_FEMALE)
                        }
                        ,
                        i(t, [{
                            key: "sex",
                            set: function(t) {
                                switch (t) {
                                    case 1:
                                        this.setAsMale();
                                        break;
                                    case 2:
                                        this.setAsFemale();
                                        break;
                                    default:
                                        this.setAsNone()
                                }
                            }
                        }]),
                        t
                }());
                var l = function(t) {
                    function i() {
                        return t.apply(this, arguments) || this
                    }
                    return n(i, t),
                        i
                }(e);
                s._RF.pop()
            }
        }
    }
));
