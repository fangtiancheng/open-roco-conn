System.register("chunks:///_virtual/SCombatStartState.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatType.ts", "./OpenCombatDes.ts", "./CombatStates.ts", "./CombatStateBase.ts", "./StateEvent.ts", "./CombatLoadingState.ts"], (function(t) {
        var a, e, o, n, s, i, m, c;
        return {
            setters: [function(t) {
                a = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    o = t.CombatType
                }
                , function(t) {
                    n = t.OpenCombatDes
                }
                , function(t) {
                    s = t.CombatStates
                }
                , function(t) {
                    i = t.CombatStateBase
                }
                , function(t) {
                    m = t.StateEvent
                }
                , function(t) {
                    c = t.CombatLoadingState
                }
            ],
            execute: function() {
                e._RF.push({}, "4c6b9yYtetPS6+er57rgZm7", "SCombatStartState", void 0);
                t("SCombatStartState", function(t) {
                    function e() {
                        return t.call(this) || this
                    }
                    a(e, t);
                    var i = e.prototype;
                    return i.execute = function() {
                        if (console.info(this.constructor.name + " == execute"),
                            CONFIG.DEBUG,
                            console.info("state [SCombatStartState] ", "收到战斗开始的反馈，进入战斗！"),
                        this._data.combatType == o.PVT) {
                            var t = this._data
                                , a = new n
                                , e = this._combatSys.getOpenCombatData();
                            a.oppoentName = t.rivalInfo.nickName,
                                a.opponentID = t.rivalInfo.id,
                                a.combatType = o.PVT,
                            e && e.handler && (a.handler = e.handler),
                                this._combatSys.setOpenCombatData(a)
                        }
                        if (this._data.combatType == o.L_PVP) {
                            t = this._data;
                            (a = this._combatSys.getOpenCombatData()).oppoentName = t.rivalInfo.nickName,
                                a.opponentID = t.rivalInfo.id,
                                a.combatType = o.L_PVP,
                                this._combatSys.setOpenCombatData(a)
                        }
                        if (this._data.combatType == o.MATCH_PVP) {
                            t = this._data;
                            (a = this._combatSys.getOpenCombatData()).oppoentName = t.rivalInfo.nickName,
                                a.opponentID = t.rivalInfo.id,
                                a.combatType = o.MATCH_PVP,
                                this._combatSys.setOpenCombatData(a)
                        }
                        if (this._data.combatType == o.D_PVP) {
                            t = this._data;
                            (a = this._combatSys.getOpenCombatData()).oppoentName = t.rivalInfo.nickName,
                                a.opponentID = t.rivalInfo.id,
                                a.combatType = o.D_PVP,
                                this._combatSys.setOpenCombatData(a)
                        }
                        if (this._data.combatType == o.KING_FIGHT) {
                            t = this._data;
                            (a = this._combatSys.getOpenCombatData()).oppoentName = t.rivalInfo.nickName,
                                a.opponentID = t.rivalInfo.id,
                                a.combatType = o.KING_FIGHT,
                                this._combatSys.setOpenCombatData(a)
                        }
                        if (this._data.combatType == o.WAR_FIGHT) {
                            t = this._data;
                            (a = this._combatSys.getOpenCombatData()).oppoentName = t.rivalInfo.nickName,
                                a.opponentID = t.rivalInfo.id,
                                a.combatType = o.WAR_FIGHT,
                                this._combatSys.setOpenCombatData(a)
                        }
                        if (this._data.combatType == o.STAR_FIGHT) {
                            t = this._data;
                            null != (a = this._combatSys.getOpenCombatData()).oppoentName && "" != a.oppoentName || (a.oppoentName = t.rivalInfo.nickName),
                                a.opponentID = t.rivalInfo.id,
                                a.combatType = o.STAR_FIGHT,
                                this._combatSys.setOpenCombatData(a)
                        }
                        this._combatSys.getState() == s.WAITING_START || this._data.combatType == o.PVT ? (this.setWaiting(),
                            this.onFightConnected()) : this.dispatchEvent(new m(m.STATE_EVENT_END))
                    }
                        ,
                        i.onFightConnected = function() {
                            var t = this._data;
                            if (t.code.isError() || 0 != t.code.code)
                                return this._combatSys.callHandler(null),
                                    this._combatSys.setState(s.WAITING_CALL),
                                    "" == t.code.message ? this.msgBox("请求战斗错误！请稍后重试......") : 19 != t.code.code && 71 != t.code.code && this.msgBox(t.code.message),
                                    void this.dispatchEvent(new m(m.STATE_EVENT_END));
                            t.combatType = this._combatSys.getOpenCombatData().combatType,
                                this._combatSys.setCurrCombatData(t),
                                this._combatSys.setState(s.WAITING_LOAD),
                                this._combatSys.getStateTask().pushTask(new c),
                                this.dispatchEvent(new m(m.STATE_EVENT_END))
                        }
                        ,
                        i.setWaiting = function() {
                            this._combatSys.getCommUI()
                        }
                        ,
                        i.msgBox = function(t) {
                            console.log("SCombatStartState==msgBox" + t),
                            null != this._combatSys.getCommUI() && this._combatSys.getCommUI().alert("", t, 1, this._combatSys.getOpenCombatData().alertHandler)
                        }
                        ,
                        e
                }(i));
                e._RF.pop()
            }
        }
    }
));
