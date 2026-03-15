System.register("chunks:///_virtual/CombatLoadingState.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./LoadTaskEvent.ts", "./global.ts", "./CombatType.ts", "./AngelTcpHelper.ts", "./CombatConfig.ts", "./EffectEvent.ts", "./NpcIconVo.ts", "./CombatStates.ts", "./CombatStateBase.ts", "./StateEvent.ts", "./BuildLogHelper.ts", "./DEFINE.ts", "./AudioPlayer.ts"], (function(t) {
        var e, s, a, o, i, n, c, m, r, _, l, b, d, S, u, g;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    s = t.cclegacy
                }
                , function(t) {
                    a = t.Constants
                }
                , function(t) {
                    o = t.LoadTaskEvent
                }
                , function(t) {
                    i = t.__global
                }
                , function(t) {
                    n = t.CombatType
                }
                , function(t) {
                    c = t.AngelTcpHelper
                }
                , function(t) {
                    m = t.CombatConfig
                }
                , function(t) {
                    r = t.EffectEvent
                }
                , function(t) {
                    _ = t.NpcIconVo
                }
                , function(t) {
                    l = t.CombatStates
                }
                , function(t) {
                    b = t.CombatStateBase
                }
                , function(t) {
                    d = t.StateEvent
                }
                , function(t) {
                    S = t.default
                }
                , function(t) {
                    u = t.DEFINE
                }
                , function(t) {
                    g = t.AudioPlayer
                }
            ],
            execute: function() {
                s._RF.push({}, "afd6dVnXMxEGbJs6nqeZX6e", "CombatLoadingState", void 0);
                t("CombatLoadingState", function(t) {
                    function s() {
                        var e;
                        return (e = t.call(this) || this).isall = !0,
                            e
                    }
                    e(s, t);
                    var b = s.prototype;
                    return b.execute = function() {
                        1 == S.IS_LOCAL && console.info(this.constructor.name + " == execute"),
                            CONFIG.DEBUG,
                            console.log("state [CombatLoadingState] ", "初始化ui，等待加载资源中！"),
                            this._combatSys.getIrd().addEventListener(o.TASK_COMPLETE, this.onCombatResLoaded, this),
                            this._combatSys.getIrd().addEventListener(o.TASK_PROGRESS, this.onProgressHandler, this),
                            this._combatSys.getCommUI().closeAllWindows(),
                            this._combatSys.getSysApi().getExternalAPI().setFrameRate(24),
                            this._combatSys.getVideoModule().addEventListener(r.EFFECT_ALL_END, this.effectAllEnd, this),
                            this._combatSys.getVideoModule().setStartLoading(!0),
                            this._combatSys.getSysApi().setRender(!1),
                        1 == S.IS_LOCAL && console.log("将战斗的舞台加入到显示列表"),
                        this._combatSys.getStageContainer() && this._combatSys.getCombatStage() && null == this._combatSys.getCombatStage().parent && (this._combatSys.getStageContainer().addChild(this._combatSys.getCombatStage()),
                            i.MainRoleData.isInBombat = !0),
                            this._combatSys.getVideoModule().setNpcIcon(this.setLoadUiIcon()),
                            this._combatSys.getSysApi().getMediaSysAPI().getBGAudio().pause(),
                            this.playCombatMusic(),
                            this._combatSys.getResModule().loadCombatRes(this._combatSys.getCurrCombatData())
                    }
                        ,
                        b.setLoadUiIcon = function() {
                            var t = new _;
                            return t.uid = this._combatSys.getCurrCombatData().myInfo.id,
                                t.uname = this._combatSys.getCurrCombatData().myInfo.nickName,
                                t.oid = this._combatSys.getCurrCombatData().rivalInfo.id,
                                t.combatType = this._combatSys.getOpenCombatData().combatType,
                                t.combatType == n.M_PVP || t.combatType == n.H_PVB || t.combatType == n.Q_PVP_T || t.combatType == n.Q_PVP || t.combatType == n.L_PVP || t.combatType == n.MATCH_PVP || t.combatType == n.D_PVP ? t.oname = this._combatSys.getCurrCombatData().rivalInfo.nickName : t.oname = this._combatSys.getOpenCombatData().oppoentName,
                                t.resA = this._combatSys.getSysApi().getResSysAPI().getResAdapter(a.COMBAT_RES),
                                t
                        }
                        ,
                        b.playCombatMusic = function() {
                            var t = ""
                                , e = this._combatSys.getOpenCombatData().combatType;
                            e == n.PVP || e == n.PVT || e == n.L_PVP || e == n.MATCH_PVP || e == n.D_PVP || e == n.STAR_FIGHT || e == n.WAR_FIGHT || e == n.KING_FIGHT || e == n.Q_PVP || e == n.Q_PVP_T ? (t = u.COMM_ROOT + "res/music/CombatBGMusic_pvp.swf",
                                t = g.PVP_MUSIC_PATH) : (e == n.PVB || e == n.EQ_PVE || e == n.A_PVB || e == n.H_PVB || n.M_PVP,
                                t = u.COMM_ROOT + "res/music/CombatBGMusic_pve.swf",
                                t = g.PVE_MUSIC_PATH),
                                this._combatSys.getAudioPlayer().setVolume(this._combatSys.getSysApi().getMediaSysAPI().getGlobalVolume()),
                                this._combatSys.getAudioPlayer().setPaths([t]),
                                this._combatSys.getAudioPlayer().play()
                        }
                        ,
                        b.effectAllEnd = function(t) {
                            t.__this__ ? t.__this__.removeEventListener(r.EFFECT_ALL_END, this.effectAllEnd, this) : t.currentTarget.removeEventListener(r.EFFECT_ALL_END, this.effectAllEnd, this),
                                this._combatSys.getSysApi().setRender(!1),
                            this.isall && this.dispatchEvent(new d(d.STATE_EVENT_END)),
                                this.isall = !0
                        }
                        ,
                        b.onProgressHandler = function(t) {
                            if (null != t.resData) {
                                var e = 0;
                                e = t.resData.itemsTotal <= m.loadCount ? 0 : m.preLoadCount + m.loadCount - t.resData.itemsTotal;
                                var s = t.resData.itemsLoaded - e
                                    , a = t.resData.itemsTotal;
                                this._combatSys.getCurrCombatData().myInfo.loadProgress = Math.abs(s / a * 100) / 100,
                                    this._combatSys.getCurrCombatData().rivalInfo.loadProgress = 1,
                                    this._combatSys.getVideoModule().updateLoading()
                            }
                        }
                        ,
                        b.onCombatResLoaded = function(t) {
                            1 == S.IS_LOCAL && console.log("加载资源进度完成"),
                                c.resEndTimer = (new Date).getTime(),
                            1 == S.IS_LOCAL && console.log("加载资源进度完成===" + c.resBeginTimer + "==" + c.resEndTimer + "==" + (c.resEndTimer - c.resBeginTimer)),
                            this._combatSys.getState() == l.WAITING_LOAD && (this._combatSys.getDpModule().sendRessComplete(!0),
                                this._combatSys.getIrd().removeEventListener(o.TASK_COMPLETE, this.onCombatResLoaded, this),
                                this._combatSys.getIrd().removeEventListener(o.TASK_PROGRESS, this.onProgressHandler, this),
                                this._combatSys.setState(l.WAITING_OTHER),
                            this.isall && this.dispatchEvent(new d(d.STATE_EVENT_END)),
                                this.isall = !0)
                        }
                        ,
                        s
                }(b));
                s._RF.pop()
            }
        }
    }
));
