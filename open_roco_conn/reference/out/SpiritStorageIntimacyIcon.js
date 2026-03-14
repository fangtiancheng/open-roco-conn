System.register("chunks:///_virtual/SpiritStorageIntimacyIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./ToolTip.ts"], (function(t) {
        var i, n, e, o, s;
        return {
            setters: [function(t) {
                i = t.createClass,
                    n = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    o = t.AgentNode
                }
                , function(t) {
                    s = t.ToolTipComponent
                }
            ],
            execute: function() {
                e._RF.push({}, "a8320TXldpBiJhtMb0090Dh", "SpiritStorageIntimacyIcon", void 0);
                t("SpiritStorageIntimacyIcon", function() {
                    function t(t, i) {
                        void 0 === i && (i = 0),
                            this._ui = void 0,
                            this._ui = new a(t),
                            this._ui.addComponent(s),
                            this._ui.intimacyBg.gotoAndStop(1),
                            this._ui.txtIntimacy.text = "",
                            this._ui.txtIntimacy.visible = !1,
                        null != this._ui && (this._ui.mouseChildren = !1,
                            this._ui.buttonMode = !0,
                            this.intimacy = i)
                    }
                    return t.prototype.setProperty = function(t, i) {
                        null != this._ui && (this._ui.target[t] = i)
                    }
                        ,
                        i(t, [{
                            key: "intimacy",
                            set: function(t) {
                                switch (t) {
                                    case 105:
                                        this._ui.intimacyBg.gotoAndStop(2),
                                            this._ui.txtIntimacy.visible = !1,
                                            this.setProperty("tooltip", "普通关系");
                                        break;
                                    case 101:
                                        this._ui.intimacyBg.gotoAndStop(3),
                                            this._ui.txtIntimacy.visible = !1,
                                            this.setProperty("tooltip", "精力+10，物防+10");
                                        break;
                                    case 103:
                                        this._ui.intimacyBg.gotoAndStop(4),
                                            this._ui.txtIntimacy.visible = !1,
                                            this.setProperty("tooltip", "精力+10，物攻+10");
                                        break;
                                    case 104:
                                        this._ui.intimacyBg.gotoAndStop(5),
                                            this._ui.txtIntimacy.visible = !1,
                                            this.setProperty("tooltip", "精力+10，魔攻+10");
                                        break;
                                    case 102:
                                        this._ui.intimacyBg.gotoAndStop(6),
                                            this._ui.txtIntimacy.visible = !1,
                                            this.setProperty("tooltip", "精力+10，魔防+10");
                                        break;
                                    default:
                                        t < 1 ? (this._ui.intimacyBg.gotoAndStop(1),
                                            this._ui.intimacyBg.energyLine.gotoAndStop(0)) : (this._ui.intimacyBg.gotoAndStop(1),
                                            this._ui.intimacyBg.energyLine.gotoAndStop(t)),
                                            this._ui.txtIntimacy.text = t + "",
                                            this._ui.txtIntimacy.visible = !0,
                                            this.setProperty("tooltip", "亲密度")
                                }
                            }
                        }]),
                        t
                }());
                var c = function(t) {
                    function e() {
                        for (var i, n = arguments.length, e = new Array(n), o = 0; o < n; o++)
                            e[o] = arguments[o];
                        return (i = t.call.apply(t, [this].concat(e)) || this)._energyLine = void 0,
                            i
                    }
                    return n(e, t),
                        i(e, [{
                            key: "energyLine",
                            get: function() {
                                return this._energyLine || (this._energyLine = new o(this.getChildByName("energyLine"))),
                                    this._energyLine
                            }
                        }]),
                        e
                }(o)
                    , a = function(t) {
                    function e() {
                        for (var i, n = arguments.length, e = new Array(n), o = 0; o < n; o++)
                            e[o] = arguments[o];
                        return (i = t.call.apply(t, [this].concat(e)) || this)._intimacyBg = void 0,
                            i._txtIntimacy = void 0,
                            i
                    }
                    return n(e, t),
                        i(e, [{
                            key: "intimacyBg",
                            get: function() {
                                return this._intimacyBg || (this._intimacyBg = new c(this.getChildByName("intimacyBg"))),
                                    this._intimacyBg
                            }
                        }, {
                            key: "txtIntimacy",
                            get: function() {
                                return this._txtIntimacy || (this._txtIntimacy = new o(this.getChildByName("txtIntimacy"))),
                                    this._txtIntimacy
                            }
                        }]),
                        e
                }(o);
                e._RF.pop()
            }
        }
    }
));
