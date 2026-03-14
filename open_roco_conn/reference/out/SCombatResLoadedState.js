System.register("chunks:///_virtual/SCombatResLoadedState.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./ToolTip.ts", "./AngelCombatVideo.ts", "./CombatStates.ts", "./CombatStateBase.ts", "./StateEvent.ts", "./CombatSpiritOutState.ts"], (function(t) {
        var e, o, a, s, i, n, S, c, l;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    o = t.cclegacy
                }
                , function(t) {
                    a = t.__global
                }
                , function(t) {
                    s = t.ToolTip
                }
                , function(t) {
                    i = t.AngelCombatVideo
                }
                , function(t) {
                    n = t.CombatStates
                }
                , function(t) {
                    S = t.CombatStateBase
                }
                , function(t) {
                    c = t.StateEvent
                }
                , function(t) {
                    l = t.CombatSpiritOutState
                }
            ],
            execute: function() {
                o._RF.push({}, "0960asBGhNBoIs8g6iuGFGh", "SCombatResLoadedState", void 0);
                t("SCombatResLoadedState", function(t) {
                    function o() {
                        return t.call(this) || this
                    }
                    e(o, t);
                    var S = o.prototype;
                    return S.execute = function() {
                        if (console.info(this.constructor.name + " == execute"),
                        this._combatSys.getState() == n.WAITING_OTHER) {
                            var t = this._data;
                            if (console.log("SCombatResLoadedState==>P_ReturnCode返回值code=" + t.code + "=message=" + t.message),
                            0 != t.code)
                                return CONFIG.DEBUG,
                                    console.log("state [SCombatResLoadedState] ", "紧急情况，资源加载错误！！！"),
                                    void this.readyToExitCombat();
                            CONFIG.DEBUG,
                                console.log("state [SCombatResLoadedState] ", "对战双方的资源全部加载完毕！vs~！！！"),
                                this._combatSys.getVideoModule().setStartLoading(!1),
                                this._combatSys.addEventListener(c.ALL_VIDEO_END, this.allVideoEndHandler, this),
                                this._combatSys.getVideoModule().playCombatRecord(null, i.VIDEO_COMBAT_START),
                                this._combatSys.setState(n.SPIRIT_OUT)
                        } else
                            this.dispatchEvent(new c(c.STATE_EVENT_END))
                    }
                        ,
                        S.allVideoEndHandler = function(t) {
                            console.log("SCombatResLoadedState==>>ALL_VIDEO_END"),
                                this._combatSys.removeEventListener(c.ALL_VIDEO_END, this.allVideoEndHandler, this),
                                this._combatSys.getStateTask().pushTask(new l),
                                this.dispatchEvent(new c(c.STATE_EVENT_END))
                        }
                        ,
                        S.readyToExitCombat = function() {
                            null != this._combatSys && this._combatSys.getState() != n.WAITING_CALL && (CONFIG.DEBUG,
                                console.log("[SCombatResLoadedState]", "退出战斗！"),
                                this._combatSys.getSysApi().setRender(!0),
                                this._combatSys.getSysApi().getExternalAPI().setFrameRate(),
                            this._combatSys.getStageContainer() && this._combatSys.getCombatStage() && this._combatSys.getCombatStage().parent == this._combatSys.getStageContainer() && (this._combatSys.getStageContainer().removeChild(this._combatSys.getCombatStage()),
                                a.MainRoleData.isInBombat = !1),
                                this._combatSys.getResModule().removeAllRes(),
                                this._combatSys.getDpModule().reset(),
                                this._combatSys.getVideoModule().reset(),
                                this._combatSys.getControllBar().reset(),
                            null != this._data && this._data.hasOwnProperty("combatResInfo") && this._combatSys.callHandler(this._data.combatResInfo),
                                this._combatSys.getAudioPlayer().stop(),
                                this._combatSys.getSysApi().getMediaSysAPI().getBGAudio().play(),
                                this._combatSys.setState(n.WAITING_CALL),
                                s.getInstance().hiddenTips(),
                                this._combatSys.getCommUI().alert("", "资源加载错误或是超时，请重新请求战斗！"))
                        }
                        ,
                        o
                }(S));
                o._RF.pop()
            }
        }
    }
));
