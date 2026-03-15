System.register("chunks:///_virtual/SpiritInfoUi.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./NodeExtend.ts", "./SpiritSkillWakeupApp.ts", "./NetEvent.ts", "./CSWakeupSkills.ts", "./Utils.ts"], (function(i) {
        var t, n, s, e, r, u, p, o;
        return {
            setters: [function(i) {
                t = i.createClass
            }
                , function(i) {
                    n = i.cclegacy
                }
                , function(i) {
                    s = i.Constants
                }
                , function(i) {
                    e = i.NodeExtend
                }
                , function(i) {
                    r = i.SpiritSkillWakeupApp
                }
                , function(i) {
                    u = i.NetEvent
                }
                , function(i) {
                    p = i.CSWakeupSkills
                }
                , function(i) {
                    o = i.Utils
                }
            ],
            execute: function() {
                n._RF.push({}, "864d17p73hOJpNqLkVir1Eq", "SpiritInfoUi", void 0);
                i("SpiritInfoUi", function() {
                    function i() {
                        this._ui = void 0,
                            this._app = void 0,
                            this._ca = void 0,
                            this._uiM = void 0,
                            this._currentSpiritMc = void 0,
                            this._currentVo = void 0,
                            this._spiritsInfoVo = void 0,
                            this._spirits = [],
                            this.snum = 6,
                            this._ui = new e
                    }
                    var n = i.prototype;
                    return n.init = function() {}
                        ,
                        n.onSpiritDataInit = function(i) {
                            this._app.getSysApi().getUISysAPI().commUIManager.closeMiniLoading(),
                                this._spiritsInfoVo = i.data,
                                this._spirits = this._spiritsInfoVo.spirits;
                            for (var t = this._spirits.length, n = 0; n < this.snum; n++)
                                ;
                            t > 0 ? (this._currentVo = this._spirits[0],
                            -1 != r.openIndex && (this._currentVo = this._spirits[r.openIndex],
                                this.getWakeupSkill(r.openIndex))) : (r.openIndex = -1,
                                this._uiM.addSpiritSkillSwitchUi(null, null))
                        }
                        ,
                        n.clickSpiritMc = function(i) {
                            if (null != this._currentSpiritMc) {
                                i.currentTarget;
                                this._currentSpiritMc
                            }
                        }
                        ,
                        n.enterHandler = function(i) {
                            if (null != this._currentSpiritMc) {
                                var t = new p;
                                t.id = this._currentVo.id,
                                    t.index = this._currentVo.index,
                                    this._app.dispatchEvent(new u(u.SEND_GET_WAKEUP_SKILLS,t))
                            } else
                                this._uiM.addAlertUi(o.ERROR_CODE_2)
                        }
                        ,
                        n.getWakeupSkill = function(i) {
                            if (this._currentVo = this._spirits[i],
                            null != this._currentVo) {
                                var t = new p;
                                t.id = this._currentVo.id,
                                    t.index = this._currentVo.index,
                                    this._app.dispatchEvent(new u(u.SEND_GET_WAKEUP_SKILLS,t))
                            }
                        }
                        ,
                        n.retWakeupSkillsHandler = function(i) {
                            var t = i.data;
                            null != t && (t.skills.length <= 0 ? this._uiM.addAlertUi(o.ERROR_CODE_5) : this._uiM.addSpiritSkillSwitchUi(this._currentVo, t))
                        }
                        ,
                        n.closeHandler = function(i) {
                            this._uiM.reset(),
                                this.removeAll()
                        }
                        ,
                        n.removeAll = function() {
                            this.reset(),
                                this._app.removeEventListener(u.RET_GET_SPIRITS_INFO, this.onSpiritDataInit, this),
                                this._app.removeEventListener(u.RET_WAKEUP_SKILLS, this.retWakeupSkillsHandler, this),
                                this._app = null,
                                this._uiM = null,
                                this._ca = null,
                                this._currentSpiritMc = null,
                                this._currentVo = null,
                                this._spirits = null
                        }
                        ,
                        n.reset = function() {
                            null != this._ui.parent && this._ui.parent.removeChild(this._ui)
                        }
                        ,
                        t(i, [{
                            key: "ui",
                            get: function() {
                                return this._ui
                            }
                        }, {
                            key: "app",
                            set: function(i) {
                                this._app = i,
                                    this._ca = this._app.getSysApi().getResSysAPI().getResAdapter(s.COMBAT_RES),
                                    this._app.addEventListener(u.RET_GET_SPIRITS_INFO, this.onSpiritDataInit, this),
                                    this._app.addEventListener(u.RET_WAKEUP_SKILLS, this.retWakeupSkillsHandler, this)
                            }
                        }, {
                            key: "uiM",
                            set: function(i) {
                                this._uiM = i
                            }
                        }]),
                        i
                }());
                n._RF.pop()
            }
        }
    }
));
