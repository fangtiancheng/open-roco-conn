System.register("chunks:///_virtual/SpiritSkillSwitchUi.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./AgentNode.ts", "./ResManager.ts", "./NetActionProxy.ts", "./NetEvent.ts", "./CSSwitchSkill.ts", "./Utils.ts", "./SkillContainer.ts"], (function(i) {
        var t, l, n, s, e, h, r, a, o, _, u, c;
        return {
            setters: [function(i) {
                t = i.createClass,
                    l = i.inheritsLoose
            }
                , function(i) {
                    n = i.cclegacy,
                        s = i.NodeEventType
                }
                , function(i) {
                    e = i.Constants
                }
                , function(i) {
                    h = i.AgentNode
                }
                , function(i) {
                    r = i.default
                }
                , function(i) {
                    a = i.NetActionProxy
                }
                , function(i) {
                    o = i.NetEvent
                }
                , function(i) {
                    _ = i.CSSwitchSkill
                }
                , function(i) {
                    u = i.Utils
                }
                , function(i) {
                    c = i.SkillContainer
                }
            ],
            execute: function() {
                n._RF.push({}, "43405Uuo/NNOIoklSfExMxH", "SpiritSkillSwitchUi", void 0);
                i("SpiritSkillSwitchUi", function() {
                    function i() {
                        this._ui = void 0,
                            this._uiM = void 0,
                            this._mySkillContainer = void 0,
                            this._switchSkillContainer = void 0,
                            this._app = void 0,
                            this._ca = void 0,
                            this._isLearn = !1,
                            this._isWakeup = !1,
                            this._spiritVo = void 0,
                            this._wakeupSkillVos = void 0,
                            this._noWakeupSkillVos = void 0,
                            this._allSwitchSkillVo = void 0,
                            this._cskillNum = 0,
                            this._ui = this.ui
                    }
                    var l = i.prototype;
                    return l.init = function() {
                        this._mySkillContainer = new c,
                            this._mySkillContainer.ca = this._ca,
                            this._mySkillContainer.setXY(-220, 188),
                            this._mySkillContainer.showSilder(!1),
                            this._ui.addChildAt(this._mySkillContainer.ui.target, 1),
                            this._switchSkillContainer = new c,
                            this._switchSkillContainer.ca = this._ca,
                            this._switchSkillContainer.setXY(220, 188),
                            this._switchSkillContainer.showSilder(!0),
                            this._ui.addChildAt(this._switchSkillContainer.ui.target, 1),
                            this._ui.switchBtn.on(s.TOUCH_END, this.switchSkillHandler, this),
                            this._ui.learnBtn.on(s.TOUCH_END, this.switchSkillHandler, this)
                    }
                        ,
                        l.onSpiritDataInit = function(i, t) {
                            if (null == i || null == t)
                                return this._mySkillContainer.data = null,
                                    void (this._switchSkillContainer.data = null);
                            this._spiritVo = i,
                                this._allSwitchSkillVo = t,
                                this.compareArray(this._spiritVo.skills, this._allSwitchSkillVo.skills),
                                this._mySkillContainer.data = i.skills,
                                this._switchSkillContainer.data = this._wakeupSkillVos,
                                this._cskillNum = i.skills.length,
                                this.upadteSwitchBtn(this._cskillNum)
                        }
                        ,
                        l.compareArray = function(i, t) {
                            var l, n = 0, s = t.length;
                            for (this._noWakeupSkillVos = new Map,
                                     this._wakeupSkillVos = [],
                                     n = 0; n < s; n++)
                                l = t[n],
                                    this.arrForEach(i, l) ? this._noWakeupSkillVos[l.id] = l : this._wakeupSkillVos.push(l)
                        }
                        ,
                        l.arrForEach = function(i, t) {
                            var l, n = 0, s = i.length;
                            for (n = 0; n < s; n++)
                                if (l = i[n],
                                t.id == l.id)
                                    return !0;
                            return !1
                        }
                        ,
                        l.upadteSwitchBtn = function(i) {
                            i < u.skillNum ? (this._isLearn = !0,
                                this._ui.switchBtn.visible = !1,
                                this._ui.learnBtn.visible = !0) : (this._isLearn = !1,
                                this._ui.switchBtn.visible = !0,
                                this._ui.learnBtn.visible = !1)
                        }
                        ,
                        l.switchSkillHandler = function(i) {
                            !this._isLearn && null == this._mySkillContainer.currentSkillBar || null == this._switchSkillContainer.currentSkillBar || this._isLearn && null == this._switchSkillContainer.currentSkillBar ? this._uiM.addAlertUi(u.ERROR_CODE_6) : this._isLearn || 1 != this._mySkillContainer.currentSkillBar.data.isHeredity ? (this._ui.switchBtn.mouseEnabled = !1,
                                this._isLearn ? this._uiM.addAlertUi(u.ERROR_CODE_0, this.yesSwitchSkill.bind(this), this.noSwitchSkill.bind(this), !1) : (this._isWakeup = this.checkSkill(this._mySkillContainer.currentSkillBar.data),
                                    this._isWakeup ? this._uiM.addAlertUi(u.ERROR_CODE_8, this.yesSwitchSkill.bind(this), this.noSwitchSkill.bind(this), !1) : this._uiM.addAlertUi(u.ERROR_CODE_10, this.yesSwitchSkill.bind(this), this.noSwitchSkill.bind(this), !1))) : this._uiM.addAlertUi(u.ERROR_CODE_11)
                        }
                        ,
                        l.yesSwitchSkill = function() {
                            var i = new _;
                            i.id = this._spiritVo.id,
                                i.index = this._spiritVo.index,
                                this._isLearn ? i.skillIndex = 255 : i.skillIndex = this._mySkillContainer.currentSkillBar.index,
                                i.sskillId = this._switchSkillContainer.currentSkillBar.data.id,
                                this._app.dispatchEvent(new o(o.SEND_SWITCH_SKILL,i)),
                                this._app.addEventListener(o.RET_SWITCH_SKILL_CHECK, this.retSwitchSkillCheck, this)
                        }
                        ,
                        l.checkSkill = function(i) {
                            var t;
                            for (t in this._noWakeupSkillVos)
                                if (Number(t) == i.id)
                                    return !0;
                            return !1
                        }
                        ,
                        l.noSwitchSkill = function() {
                            this._ui.switchBtn.mouseEnabled = !0
                        }
                        ,
                        l.retSwitchSkillCheck = function(i) {
                            this._ui.switchBtn.mouseEnabled = !0;
                            var t = i.data;
                            4 != t.code.code ? 0 == t.code.code ? (this.wakeupSkill(),
                                this.learnSkill(),
                                a.getSpiritBag(),
                                this._app.removeEventListener(o.RET_SWITCH_SKILL_CHECK, this.retSwitchSkillCheck, this)) : this._uiM.addAlertUi(u.ERROR_CODE_1) : this._uiM.addAlertUi(u.ERROR_CODE_4)
                        }
                        ,
                        l.learnSkill = function() {
                            if (0 != this._isLearn) {
                                var i = this._switchSkillContainer.currentSkillBar.data;
                                this._spiritVo.skills.push(i),
                                    this._noWakeupSkillVos[i.id] = i,
                                    this._mySkillContainer.addSkillInfoContainer(i, this._cskillNum + 1, this._cskillNum + 1),
                                    this._switchSkillContainer.deleteSkillInfoContainer(this._switchSkillContainer.currentSkillBar.index),
                                    this._cskillNum++,
                                    this.upadteSwitchBtn(this._cskillNum),
                                    this._uiM.addAlertUi(u.ERROR_CODE_7)
                            }
                        }
                        ,
                        l.wakeupSkill = function() {
                            if (1 != this._isLearn) {
                                this._spiritVo.skills.splice(this._mySkillContainer.currentSkillBar.index - 1, 0, this._switchSkillContainer.currentSkillBar.data),
                                    this._spiritVo.skills.splice(this._mySkillContainer.currentSkillBar.index, 1);
                                var i = this._mySkillContainer.currentSkillBar.data
                                    , t = this._switchSkillContainer.currentSkillBar.data
                                    , l = this._mySkillContainer.currentSkillBar.icon;
                                this._mySkillContainer.currentSkillBar.upadte(this._switchSkillContainer.currentSkillBar.data, this._switchSkillContainer.currentSkillBar.icon),
                                    this._switchSkillContainer.currentSkillBar.upadte(i, l),
                                    this._noWakeupSkillVos[t.id] = t,
                                this._isWakeup || this._switchSkillContainer.deleteSkillInfoContainer(this._switchSkillContainer.currentSkillBar.index),
                                    this._uiM.addAlertUi(u.ERROR_CODE_9)
                            }
                        }
                        ,
                        l.backHandler = function(i) {
                            this._uiM.addSpiritInfoUi()
                        }
                        ,
                        l.removeAll = function() {
                            null != this._ui && null != this._ui.parent && (this._mySkillContainer.removeAll(),
                                this._switchSkillContainer.removeAll(),
                                this._ui.switchBtn.off(s.TOUCH_END, this.switchSkillHandler, this),
                                this._ui.learnBtn.off(s.TOUCH_END, this.switchSkillHandler, this),
                                this._ui.target.parent.removeChild(this._ui.target),
                                this.reset(),
                                this._ui = null,
                                this._uiM = null,
                                this._app = null)
                        }
                        ,
                        l.reset = function() {
                            this._spiritVo = null,
                                this._ca = null,
                                this._mySkillContainer = null,
                                this._switchSkillContainer = null,
                                this._spiritVo = null,
                                this._wakeupSkillVos = null
                        }
                        ,
                        t(i, [{
                            key: "ui",
                            get: function() {
                                return null == this._ui && (this._ui = new k),
                                    this._ui
                            }
                        }, {
                            key: "app",
                            set: function(i) {
                                this._app = i,
                                    this._ca = this._app.getSysApi().getResSysAPI().getResAdapter(e.COMBAT_RES)
                            }
                        }, {
                            key: "uiM",
                            set: function(i) {
                                this._uiM = i
                            }
                        }]),
                        i
                }());
                var k = function(i) {
                    function n() {
                        var t;
                        return (t = i.call(this) || this)._learnBtn = void 0,
                            t._switchBtn = void 0,
                            t._target = r.Instance.getPrefabByName("SpiritBag_1600/SpiritSkillSwitchWindow_1600"),
                            t
                    }
                    return l(n, i),
                        t(n, [{
                            key: "learnBtn",
                            get: function() {
                                return this._learnBtn || (this._learnBtn = new h(this.getChildByName("learnBtn"))),
                                    this._learnBtn
                            }
                        }, {
                            key: "switchBtn",
                            get: function() {
                                return this._switchBtn || (this._switchBtn = new h(this.getChildByName("switchBtn"))),
                                    this._switchBtn
                            }
                        }]),
                        n
                }(h);
                n._RF.pop()
            }
        }
    }
));
