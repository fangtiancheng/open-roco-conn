System.register("chunks:///_virtual/SpiritBasicDetail.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./OpenAsWinDes.ts", "./AgentNode.ts", "./BagDataProxy.ts", "./SpiritDataReader.ts", "./LangStrings.ts", "./NetActionProxy.ts", "./DynamicButton.ts", "./SpiritDetailSkill.ts", "./ToolTip.ts", "./FilterFactory.ts"], (function(t) {
        var i, e, n, l, s, o, _, u, x, h, c, p, r, a, d;
        return {
            setters: [function(t) {
                i = t.createClass,
                    e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy,
                        l = t.Vec2
                }
                , function(t) {
                    s = t.__global
                }
                , function(t) {
                    o = t.OpenAsWinDes
                }
                , function(t) {
                    _ = t.AgentNode
                }
                , function(t) {
                    u = t.BagDataProxy
                }
                , function(t) {
                    x = t.SpiritDataReader
                }
                , function(t) {
                    h = t.LangStrings
                }
                , function(t) {
                    c = t.NetActionProxy
                }
                , function(t) {
                    p = t.DynamicButton
                }
                , function(t) {
                    r = t.SpiritDetailSkill
                }
                , function(t) {
                    a = t.ToolTipComponent
                }
                , function(t) {
                    d = t.FilterFactory
                }
            ],
            execute: function() {
                n._RF.push({}, "48a3ahosARJ6pAow84PQ/S9", "SpiritBasicDetail", void 0),
                    t("SpiritBasicDetail", function() {
                        function t(t) {
                            this._ui = void 0,
                                this._skills = void 0,
                                this._button = void 0,
                                this._ui = new T(t),
                                this._ui.nextExpText.text = "",
                                this._ui.needExpText.text = "",
                                this._ui.expTypeText.text = "",
                                this._button = new p(this._ui.btn_skill),
                                this._button.target.addComponent(a),
                                this._button.setProperty("tooltip", h.OPEN_SKILL_APP),
                                this._ui.btn_skill.mouseChildren = !1,
                                this._ui.evolutionIcon.mouseChildren = !1,
                                this.initSkills(),
                                this.data = null
                        }
                        var e = t.prototype;
                        return e.clickUI = function(t) {
                            switch (t.target) {
                                case this._ui.btn_skill:
                                    var i = new o;
                                    i.winPos = new l(270,66),
                                        i.name = "",
                                        i.src = "SpiritSkillWakeupApp",
                                        i.params = {
                                            selectIndex: u.selectedIndex,
                                            callback: this.closeSpiritSkillWakeupApp.bind(this)
                                        },
                                        i.isModal = !0,
                                        i.cache = !1,
                                        s.openAsWin(i)
                            }
                        }
                            ,
                            e.showSpiritSkillWakeup = function() {}
                            ,
                            e.closeSpiritSkillWakeupApp = function() {
                                c.getSpiritBag()
                            }
                            ,
                            e.dispose = function() {
                                this.data = null,
                                    this.disposeSkills(),
                                    this._ui = null
                            }
                            ,
                            e.initSkills = function() {
                                if (null != this._ui) {
                                    this._skills = [];
                                    for (var i = 0; i < t.SPIRIT_SKILL_NUM; ++i) {
                                        var e = this._ui.getChildByName("skill" + i);
                                        this._skills[i] = new r(e)
                                    }
                                }
                            }
                            ,
                            e.disposeSkills = function() {
                                if (null != this._skills)
                                    for (var t = this._skills.length, i = 0; i < t; ++i)
                                        null != this._skills[i] && this._skills[i].dispose()
                            }
                            ,
                            e.setSkillData = function(t) {
                                if (null != this._skills)
                                    for (var i = this._skills.length, e = 0; e < i; ++e)
                                        null != this._skills[e] && (this._skills[e].data = null != t ? t[e] : null)
                            }
                            ,
                            i(t, [{
                                key: "target",
                                get: function() {
                                    return this._ui
                                }
                            }, {
                                key: "data",
                                set: function(t) {
                                    if (null != this._ui)
                                        if (null != t) {
                                            this._ui.idText.text = "ID:" + t.id.toString(),
                                                this._ui.levelText.text = "Lv." + t.level.toString(),
                                                this._ui.mc_exp.txt_lv.text = "Lv." + t.level.toString(),
                                                d.setAshingFilter(this._ui.btn_expAlloc, t.level < 100);
                                            var i = x.getNextLvMaxExp(t.id, t.level)
                                                , e = i - t.expToNextLevel
                                                , n = Math.floor(100 * e / i)
                                                , l = x.getLvMaxSumExp(t.id, 100) - e;
                                            this._ui.mc_exp.txt_num.text = e + "/" + i,
                                                this._ui.mc_exp.mc_bar.gotoAndStop(n),
                                                this._ui.nextExpText.text = l + "",
                                                this._ui.needExpText.text = t.expToNextLevel + "",
                                                this._ui.expTypeText.text = "经验类型：" + x.getExpType(t.id);
                                            var s = t.evolution;
                                            if (null != t.evolution) {
                                                var o = Number(s.split(" ")[0]);
                                                t.level >= o && (s = o + "级进化成" + s.split(" ")[2])
                                            }
                                            this._ui.evolutionIcon.tooltip = null != s ? s : h.CANT_EVOLVE,
                                                this._ui.evolutionIcon.gotoAndStop(null != t.evolution ? 1 : 2),
                                                this._ui.evolutionIcon.visible = !0,
                                            null != t.skills && this.setSkillData(t.skills)
                                        } else
                                            this._ui.idText.text = "",
                                                this._ui.levelText.text = "",
                                                this._ui.nextExpText.text = "",
                                                this._ui.needExpText.text = "",
                                                this._ui.expTypeText.text = "",
                                                this._ui.evolutionIcon.tooltip = null,
                                                this._ui.evolutionIcon.gotoAndStop(2),
                                                this._ui.evolutionIcon.visible = !1,
                                                this._ui.mc_exp.mc_bar.gotoAndStop(0),
                                                this._ui.mc_exp.txt_lv.text = "",
                                                this._ui.mc_exp.txt_num.text = "",
                                                this.setSkillData(null)
                                }
                            }]),
                            t
                    }()).SPIRIT_SKILL_NUM = 4;
                var v = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), l = 0; l < e; l++)
                            n[l] = arguments[l];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._mc_bar = void 0,
                            i._txt_num = void 0,
                            i._txt_lv = void 0,
                            i
                    }
                    return e(n, t),
                        i(n, [{
                            key: "mc_bar",
                            get: function() {
                                return this._mc_bar || (this._mc_bar = new _(this.getChildByName("mc_bar"))),
                                    this._mc_bar
                            }
                        }, {
                            key: "txt_num",
                            get: function() {
                                return this._txt_num || (this._txt_num = new _(this.getChildByName("txt_num"))),
                                    this._txt_num
                            }
                        }, {
                            key: "txt_lv",
                            get: function() {
                                return this._txt_lv || (this._txt_lv = new _(this.getChildByName("txt_lv"))),
                                    this._txt_lv
                            }
                        }]),
                        n
                }(_)
                    , T = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), l = 0; l < e; l++)
                            n[l] = arguments[l];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._btn_expAlloc = void 0,
                            i._nextExpText = void 0,
                            i._needExpText = void 0,
                            i._expTypeText = void 0,
                            i._btn_skill = void 0,
                            i._evolutionIcon = void 0,
                            i._idText = void 0,
                            i._levelText = void 0,
                            i._mc_exp = void 0,
                            i
                    }
                    return e(n, t),
                        i(n, [{
                            key: "btn_expAlloc",
                            get: function() {
                                return this._btn_expAlloc || (this._btn_expAlloc = new _(this.getChildByName("btn_expAlloc"))),
                                    this._btn_expAlloc
                            }
                        }, {
                            key: "nextExpText",
                            get: function() {
                                return this._nextExpText || (this._nextExpText = new _(this.getChildByName("nextExpText"))),
                                    this._nextExpText
                            }
                        }, {
                            key: "needExpText",
                            get: function() {
                                return this._needExpText || (this._needExpText = new _(this.getChildByName("needExpText"))),
                                    this._needExpText
                            }
                        }, {
                            key: "expTypeText",
                            get: function() {
                                return this._expTypeText || (this._expTypeText = new _(this.getChildByName("expTypeText"))),
                                    this._expTypeText
                            }
                        }, {
                            key: "btn_skill",
                            get: function() {
                                return this._btn_skill || (this._btn_skill = new _(this.getChildByName("btn_skill"))),
                                    this._btn_skill
                            }
                        }, {
                            key: "evolutionIcon",
                            get: function() {
                                return this._evolutionIcon || (this._evolutionIcon = new _(this.getChildByName("evolutionIcon")),
                                    this._evolutionIcon.addComponent(a)),
                                    this._evolutionIcon
                            }
                        }, {
                            key: "idText",
                            get: function() {
                                return this._idText || (this._idText = new _(this.getChildByName("idText"))),
                                    this._idText
                            }
                        }, {
                            key: "levelText",
                            get: function() {
                                return this._levelText || (this._levelText = new _(this.getChildByName("levelText"))),
                                    this._levelText
                            }
                        }, {
                            key: "mc_exp",
                            get: function() {
                                return this._mc_exp || (this._mc_exp = new v(this.getChildByName("mc_exp"))),
                                    this._mc_exp
                            }
                        }]),
                        n
                }(_);
                n._RF.pop()
            }
        }
    }
));
