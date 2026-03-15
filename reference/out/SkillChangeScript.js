System.register("chunks:///_virtual/SkillChangeScript.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./P_ReqCSkill.ts", "./AScript.ts", "./SuccessorEvent.ts", "./SpiritInfoSearch.ts", "./UIMediator.ts"], (function(i) {
        var t, e, s, l, n, r, h;
        return {
            setters: [function(i) {
                t = i.inheritsLoose
            }
                , function(i) {
                    e = i.cclegacy
                }
                , function(i) {
                    s = i.P_ReqCSkill
                }
                , function(i) {
                    l = i.AScript
                }
                , function(i) {
                    n = i.SuccessorEvent
                }
                , function(i) {
                    r = i.SpiritInfoSearch
                }
                , function(i) {
                    h = i.UIMediator
                }
            ],
            execute: function() {
                e._RF.push({}, "e8cf8XnnFVGnr617nndHfVq", "SkillChangeScript", void 0);
                i("SkillChangeScript", function(i) {
                    function e(t) {
                        var e;
                        return void 0 === t && (t = null),
                            (e = i.call(this, t) || this)._skillMeditor = void 0,
                            e._skillChangeData = new s,
                            e._ownSkill = void 0,
                            e._newSkill = void 0,
                            e._currentSkill = 0,
                            e._changeData = [],
                            e._data = void 0,
                            e._spiritName = void 0,
                            e._key = void 0,
                            e._index = void 0,
                            e._spirit = void 0,
                            e._name = "技能更换",
                            e.initUI(),
                            e
                    }
                    t(e, i);
                    var l = e.prototype;
                    return l.initUI = function() {
                        this._skillMeditor = h.getInstance().getMediator(h.GET_NEW_SKILL)
                    }
                        ,
                        l.onChangeSkill = function(i) {
                            this._skillChangeData.oldSkillID = this._skillMeditor.selectedSkill.id,
                                this._skillChangeData.newSkillID = this._skillMeditor.newSkill.id,
                                this._skillChangeData.version = this._key,
                                this._skillChangeData.spiritIndex = this._index,
                                this._system.onChangeSkill(this._skillChangeData, this.skillChangeHandle.bind(this))
                        }
                        ,
                        l.over = function(t) {
                            this._skillMeditor.hide(),
                                this._skillMeditor.removeEventListener(n.GET_NEW_SKILL_CHANGE, this.onChangeSkill, this),
                                this._skillMeditor.removeEventListener(n.GET_NEW_SKILL_NOCHANGE, this.over, this),
                                i.prototype.over.call(this)
                        }
                        ,
                        l.skillChangeHandle = function(i) {
                            i ? (this.copySkill(this._skillMeditor.selectedSkill, this._skillMeditor.newSkill),
                                this._currentSkill++) : CONFIG.DEBUG && console.log("[SkillChangeScript]技能更换失败..", "技能:" + this._skillMeditor.selectedSkill.id, "新技能:" + this._skillMeditor.newSkill.id),
                                this.step()
                        }
                        ,
                        l.copySkill = function(i, t) {
                            i.id = t.id,
                                i.ppLeft = t.ppLeft,
                                i.skillDes = t.skillDes
                        }
                        ,
                        l.setData = function(i, t) {
                            this._data = i,
                                this._key = t,
                                this._index = this._data.index,
                                this._spirit = r.getInstance().getOwnSpiritInfo(this._data.index),
                                this._spiritName = this._spirit.spiritDes.name,
                            null == this._spiritName && (this._spiritName = "未知名称(" + this._data.index + ")"),
                                this._newSkill = this._data.newSKills,
                                this._ownSkill = this._data.currentSkills,
                                this._currentSkill = 0
                        }
                        ,
                        l.execute = function() {
                            this._skillMeditor.setIdle(this._spirit.id, this._spirit.spiritDes.name, this._spirit.spiritDes.features),
                                this._skillMeditor.addEventListener(n.GET_NEW_SKILL_CHANGE, this.onChangeSkill, this),
                                this._skillMeditor.addEventListener(n.GET_NEW_SKILL_NOCHANGE, this.over, this),
                                this.step()
                        }
                        ,
                        l.step = function() {
                            var i;
                            null != (i = this._newSkill[this._currentSkill]) && null != this._spiritName && null != this._ownSkill ? (this._skillMeditor.setData(this._spiritName, i, this._ownSkill),
                                this._skillMeditor.bringToFront(),
                                this._skillMeditor.ishow()) : this.over()
                        }
                        ,
                        e
                }(l));
                e._RF.pop()
            }
        }
    }
));
