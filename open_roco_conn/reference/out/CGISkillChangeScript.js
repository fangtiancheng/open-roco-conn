System.register("chunks:///_virtual/CGISkillChangeScript.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./global.ts", "./SpiritSkillInfo.ts", "./CFunction.ts", "./CGIRequest.ts", "./ErrorEvent.ts", "./SuccessorEvent.ts", "./SkillChangeScript.ts", "./SkillChangePanel.ts", "./SkillStudyRequest.ts"], (function(i) {
        var t, e, s, n, l, o, h, r, a, c, u, S, d, _;
        return {
            setters: [function(i) {
                t = i.inheritsLoose,
                    e = i.assertThisInitialized
            }
                , function(i) {
                    s = i.cclegacy,
                        n = i.Event
                }
                , function(i) {
                    l = i.Constants
                }
                , function(i) {
                    o = i.__global
                }
                , function(i) {
                    h = i.SpiritSkillInfo
                }
                , function(i) {
                    r = i.CFunction
                }
                , function(i) {
                    a = i.CGIRequest
                }
                , function(i) {
                    c = i.ErrorEvent
                }
                , function(i) {
                    u = i.SuccessorEvent
                }
                , function(i) {
                    S = i.SkillChangeScript
                }
                , function(i) {
                    d = i.SkillChangePanel
                }
                , function(i) {
                    _ = i.SkillStudyRequest
                }
            ],
            execute: function() {
                s._RF.push({}, "6b36aRZiftF+JQRLVExfcOT", "CGISkillChangeScript", void 0),
                    i("CGISkillChangeScript", function(i) {
                        function s(t) {
                            var s;
                            return void 0 === t && (t = null),
                                (s = i.call(this, t) || this).spirit = void 0,
                                s._petID = void 0,
                                s._catchTime = void 0,
                                s._cmdStr = void 0,
                                s._descbak = void 0,
                                s._requestChangeSkill = new _,
                                s.success = 0,
                                s.initUI(),
                                s._requestChangeSkill.addEventListener(a.FINISH, s.onFinish, e(s)),
                                s._requestChangeSkill.addEventListener(c.ERROR, s.onError, e(s)),
                                s._requestChangeSkill.initialize(o.SysAPI.getNetSysAPI().createURLLoader(!0)),
                                s
                        }
                        t(s, i);
                        var S = s.prototype;
                        return S.onError = function(i) {
                            this.success = 0,
                                o.showMsgBox(this._requestChangeSkill.msg, 1, new r(this.closeAPP,this))
                        }
                            ,
                            S.initUI = function() {
                                this._skillMeditor = o.SysAPI.getUISysAPI().commUIManager.createWindow(d, !0),
                                    this._descbak = this._skillMeditor._ui.desc.text
                            }
                            ,
                            S.onFinish = function(i) {
                                this.success = 1,
                                    this._skillMeditor._ui.noChangeBtn.mouseEnabled = !0,
                                    this._skillMeditor._ui.desc.text = this._descbak,
                                    setTimeout(this.close.bind(this), 500)
                            }
                            ,
                            S.close = function() {
                                this.closeAPP(null),
                                    o.showMsgBox("技能替换成功!", 1, new r(this.closeAPP,this))
                            }
                            ,
                            S.closeAPP = function(i) {
                                this._skillMeditor.hide(),
                                    this.dispatchEvent(new n(s.CLOSE))
                            }
                            ,
                            S.onChangeSkill = function(i) {
                                this._skillChangeData.oldSkillID = this._skillMeditor.selectedSkill.id,
                                    this._skillChangeData.newSkillID = this._skillMeditor.newSkill.id,
                                    this._requestChangeSkill.doLoad(this._cmdStr, this._petID, this._catchTime, this._skillChangeData.oldSkillID, this._skillChangeData.newSkillID)
                            }
                            ,
                            S.initialize = function(t) {
                                i.prototype.initialize.call(this, t),
                                    this._requestChangeSkill.initialize(o.SysAPI.getNetSysAPI().createURLLoader(!0))
                            }
                            ,
                            S.setCGIData = function(i, t, e, s, n) {
                                this._cmdStr = i,
                                    this._petID = t,
                                    this._catchTime = e;
                                var h = o.SysAPI.getGDataAPI().getDataProxy(l.SPIRIT_DATA);
                                this.spirit = h.select(t),
                                    null == this.spirit ? this._spiritName = "未知名称" : this._spiritName = this.spirit.name,
                                    this._newSkill = this.getSkills(n),
                                    this._ownSkill = this.getSkills(s),
                                    this._skillMeditor._ui.noChangeBtn.mouseEnabled = !1
                            }
                            ,
                            S.getSkills = function(i) {
                                for (var t, e, s = [], n = 0; n < i.length; n++)
                                    t = i[n],
                                        (e = new h).id = t.id,
                                        e.ppLeft = t.pp,
                                        e.skillDes = this.getSkillDes(t.id),
                                        s.push(e);
                                return s
                            }
                            ,
                            S.getSkillDes = function(i) {
                                return o.SysAPI.getGDataAPI().getDataProxy(l.SSKILL_DATA).select(i)
                            }
                            ,
                            S.execute = function() {
                                this._skillMeditor.show(),
                                    this._skillMeditor.setIdle(this.spirit.id, this.spirit.name, this.spirit.features),
                                    this._skillMeditor.addEventListener(u.GET_NEW_SKILL_CHANGE, this.onChangeSkill, this),
                                    this._skillMeditor.addEventListener(u.GET_NEW_SKILL_NOCHANGE, this.over, this),
                                    this.step()
                            }
                            ,
                            s
                    }(S)).CLOSE = "CGISkillChangeScript.Close",
                    s._RF.pop()
            }
        }
    }
));
