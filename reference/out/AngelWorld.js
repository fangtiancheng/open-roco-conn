System.register("chunks:///_virtual/AngelWorld.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CALLBACK.ts", "./CallbackCenter.ts", "./AngelSysEvent.ts", "./EventDispatcher.ts", "./AWDataReceiver.ts", "./AngelRoleSystem.ts", "./AudioPlayer.ts"], (function(e) {
        var n, t, i, o, s, a, c, l, r;
        return {
            setters: [function(e) {
                n = e.inheritsLoose
            }
                , function(e) {
                    t = e.cclegacy
                }
                , function(e) {
                    i = e.CALLBACK
                }
                , function(e) {
                    o = e.CallbackCenter
                }
                , function(e) {
                    s = e.AngelSysEvent
                }
                , function(e) {
                    a = e.EventDispatcher
                }
                , function(e) {
                    c = e.AWDataReceiver
                }
                , function(e) {
                    l = e.AngelRoleSystem
                }
                , function(e) {
                    r = e.AudioPlayer
                }
            ],
            execute: function() {
                t._RF.push({}, "81781t6CXFFt4uLCtQ3KaNu", "AngelWorld", void 0);
                e("AngelWorld", function(e) {
                    function t() {
                        for (var n, t = arguments.length, i = new Array(t), o = 0; o < t; o++)
                            i[o] = arguments[o];
                        return (n = e.call.apply(e, [this].concat(i)) || this).angelSysApi = void 0,
                            n.serverInfo = void 0,
                            n.isSceneInit = !1,
                            n.isOnline = !1,
                            n.changeSceneObj = void 0,
                            n.bgMusic = void 0,
                            n.roleSystem = void 0,
                            n.commUI = void 0,
                            n.uiSysApi = void 0,
                            n.loadingUI = void 0,
                            n.gDispatcer = void 0,
                            n.aWDataRec = void 0,
                            n.changeHandler = void 0,
                            n.loadSceneTime = 0,
                            n.m_lastRequestUin = -1,
                            n
                    }
                    n(t, e);
                    var a = t.prototype;
                    return a.loadScene = function(e, n) {
                        throw new Error("Method not implemented.")
                    }
                        ,
                        a.onChangeSceneRes = function(e) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        a.getNPCSysAPI = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        a.getSceneAPI = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        a.reflashPage = function() {
                            1 == (arguments.length <= 0 ? void 0 : arguments[0]) ? o.notifyEvent(i.ANGEL_SYSTEM_APPLY_CALL_A_PLUGIN_SYNC, ["Home", null]) : this.angelSysApi.getExternalAPI().reflashHTML()
                        }
                        ,
                        a.hiddenLoadingUI = function() {}
                        ,
                        a.showLoadingUI = function(e) {}
                        ,
                        a.onSceneBuilt = function(e) {}
                        ,
                        a.setIsOnline = function() {}
                        ,
                        a.onSceneDataInit = function(e) {
                            if (!this.isSceneInit) {
                                var n = [r.BG_MUSIC_PATH];
                                null != n && null != this.bgMusic && this.bgMusic.setPaths(n, !0),
                                    this.isSceneInit = !0
                            }
                        }
                        ,
                        a.requestChange = function(e) {}
                        ,
                        a.setRender = function(e) {}
                        ,
                        a.call = function(e) {}
                        ,
                        a.getRoleSysAPI = function() {
                            return this.roleSystem
                        }
                        ,
                        a.setAngelSysAPI = function(e) {
                            this.angelSysApi = e
                        }
                        ,
                        a.initialize = function() {
                            this.gDispatcer = this.angelSysApi.getGEventAPI().angelEventDispatcher,
                                this.gDispatcer.addEventListener(s.ON_SCENEDATA_INIT, this.onSceneDataInit, this, !1, 100),
                                this.roleSystem = new l,
                                this.roleSystem.setAngelSysAPI(this.angelSysApi),
                                this.roleSystem.initialize(),
                                this.aWDataRec = new c,
                                this.aWDataRec.setAngelSysAPI(this.angelSysApi),
                                this.aWDataRec.initialize(),
                                this.bgMusic = this.angelSysApi.getMediaSysAPI().getBGAudio()
                        }
                        ,
                        a.finalize = function() {}
                        ,
                        a.changeSceneErrorHandler = function(e) {}
                        ,
                        t
                }(a));
                t._RF.pop()
            }
        }
    }
));
