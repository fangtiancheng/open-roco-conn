System.register("chunks:///_virtual/NetModule.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AbstractDataReceiver.ts", "./P_FreeRequest.ts", "./NetEvent.ts", "./NetCmdsType.ts", "./SCGetSpiritsInfo.ts", "./SCSwitchSkill.ts", "./SCWakeupSkills.ts"], (function(t) {
        var e, i, s, n, S, a, p, r, o, _;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    s = t.cclegacy
                }
                , function(t) {
                    n = t.AbstractDataReceiver
                }
                , function(t) {
                    S = t.P_FreeRequest
                }
                , function(t) {
                    a = t.NetEvent
                }
                , function(t) {
                    p = t.NetCmdsType
                }
                , function(t) {
                    r = t.SCGetSpiritsInfo
                }
                , function(t) {
                    o = t.SCSwitchSkill
                }
                , function(t) {
                    _ = t.SCWakeupSkills
                }
            ],
            execute: function() {
                s._RF.push({}, "34791mtQ8JCnIn0PW4AetJv", "NetModule", void 0);
                t("NetModule", function(t) {
                    function s() {
                        var e;
                        return (e = t.call(this) || this)._app = void 0,
                            e
                    }
                    e(s, t);
                    var n = s.prototype;
                    return n.initialize = function() {
                        this._app.getSysApi().getNetSysAPI().addDataReceiver(this),
                            this._app.addEventListener(a.SEND_GET_SPIRITS_INFO, this.sendGetSpiritsInfo, this),
                            this._app.addEventListener(a.SEND_GET_WAKEUP_SKILLS, this.sendGetWakeupSkills, this),
                            this._app.addEventListener(a.SEND_SWITCH_SKILL, this.sendSwitchSkill, this)
                    }
                        ,
                        n.onDataReceive = function(t, e) {
                            if (null != this._app && null != e)
                                switch (t) {
                                    case p.TYPE_GETSPIRITSINFO:
                                        this._app.dispatchEvent(new a(a.RET_GET_SPIRITS_INFO,e.vo));
                                        break;
                                    case p.TYPE_SWITCHSKILL:
                                        this._app.dispatchEvent(new a(a.RET_SWITCH_SKILL_CHECK,e.vo));
                                        break;
                                    case p.TYPE_WAKEUPSKILLS:
                                        this._app.dispatchEvent(new a(a.RET_WAKEUP_SKILLS,e.vo))
                                }
                        }
                        ,
                        n.getAcceptTypes = function() {
                            return [p.TYPE_GETSPIRITSINFO, p.TYPE_SWITCHSKILL, p.TYPE_WAKEUPSKILLS]
                        }
                        ,
                        n.remove = function() {
                            this._app.removeEventListener(a.SEND_GET_SPIRITS_INFO, this.sendGetSpiritsInfo, this),
                                this._app.removeEventListener(a.SEND_GET_WAKEUP_SKILLS, this.sendGetWakeupSkills, this),
                                this._app.removeEventListener(a.SEND_SWITCH_SKILL, this.sendSwitchSkill, this),
                                this._app.getSysApi().getNetSysAPI().removeDataReceiver(this)
                        }
                        ,
                        n.reset = function() {
                            this.remove(),
                                this._app = null
                        }
                        ,
                        n.sendGetSpiritsInfo = function(t) {
                            var e = new S;
                            e.data = null,
                                e.respondCls = r,
                                this.sendDataToServer(p.TYPE_GETSPIRITSINFO, e)
                        }
                        ,
                        n.sendGetWakeupSkills = function(t) {
                            var e = new S
                                , i = t.data;
                            e.data = i,
                                e.respondCls = _,
                                this.sendDataToServer(p.TYPE_WAKEUPSKILLS, e)
                        }
                        ,
                        n.sendSwitchSkill = function(t) {
                            var e = new S
                                , i = t.data;
                            e.data = i,
                                e.respondCls = o,
                                this.sendDataToServer(p.TYPE_SWITCHSKILL, e)
                        }
                        ,
                        i(s, [{
                            key: "app",
                            set: function(t) {
                                this._app = t
                            }
                        }]),
                        s
                }(n));
                s._RF.pop()
            }
        }
    }
));
