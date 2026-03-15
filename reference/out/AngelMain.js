System.register("chunks:///_virtual/AngelMain.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./AngelNetSysEvent.ts", "./AngelSysEvent.ts", "./global.ts", "./ServerInfo.ts", "./EventDispatcher.ts", "./AngelExternalManger.ts", "./GlobalConfig.ts", "./CFunction.ts", "./ConfigLoader.ts", "./StringUtil.ts", "./UserData.ts", "./BuildLogHelper.ts", "./AngelWorld.ts", "./AngelEventManager.ts", "./AngelNetSystem.ts", "./AngelTcpConnection.ts", "./MediaSysManager.ts", "./AGlobalDataManager.ts", "./AngelAccessPermission.ts", "./AngelResourceSystem.ts", "./AngelUISystem.ts", "./UIManager.ts", "./AngelCombatResAdapter.ts"], (function(n) {
        var e, t, i, s, o, l, r, a, g, A, u, c, f, p, d, h, y, S, v, C, I, m, P, E, M, b, L;
        return {
            setters: [function(n) {
                e = n.inheritsLoose,
                    t = n.assertThisInitialized
            }
                , function(n) {
                    i = n.cclegacy
                }
                , function(n) {
                    s = n.Constants
                }
                , function(n) {
                    o = n.AngelNetSysEvent
                }
                , function(n) {
                    l = n.AngelSysEvent
                }
                , function(n) {
                    r = n.__global
                }
                , function(n) {
                    a = n.ServerInfo
                }
                , function(n) {
                    g = n.EventDispatcher
                }
                , function(n) {
                    A = n.AngelExternalManger
                }
                , function(n) {
                    u = n.GlobalConfig
                }
                , function(n) {
                    c = n.CFunction
                }
                , function(n) {
                    f = n.ConfigLoader
                }
                , function(n) {
                    p = n.StringUtil
                }
                , function(n) {
                    d = n.UserData
                }
                , function(n) {
                    h = n.default
                }
                , function(n) {
                    y = n.AngelWorld
                }
                , function(n) {
                    S = n.AngelEventManager
                }
                , function(n) {
                    v = n.AngelNetSystem
                }
                , function(n) {
                    C = n.AngelTcpConnection
                }
                , function(n) {
                    I = n.MediaSysManager
                }
                , function(n) {
                    m = n.AGlobalDataManager
                }
                , function(n) {
                    P = n.AngelAccessPermission
                }
                , function(n) {
                    E = n.AngelResourceSystem
                }
                , function(n) {
                    M = n.AngelUISystem
                }
                , function(n) {
                    b = n.default
                }
                , function(n) {
                    L = n.AngelCombatResAdapter
                }
            ],
            execute: function() {
                i._RF.push({}, "2eed9bO4G9B7K1RA/KD/KcW", "AngelMain", void 0);
                n("AngelMain", function(n) {
                    function i() {
                        var e;
                        return (e = n.call(this) || this).resourceSysApi = void 0,
                            e.uiSysApi = void 0,
                            e.netSysApi = void 0,
                            e.plugManagerApi = void 0,
                            e.gEventApi = void 0,
                            e.gDataApi = void 0,
                            e.worldApi = void 0,
                            e.extenrlApi = void 0,
                            e.accPermission = void 0,
                            e.mediaSysApi = void 0,
                            e.msgApi = void 0,
                            e.globalConf = void 0,
                            e.isRender = !0,
                            e.globalConf = new u,
                            e.globalConf.addEventListener(f.CONF_LOAD_OK, e.loadAllConfs, t(e)),
                            e.globalConf.loadConfByBundle("json/Global"),
                            e
                    }
                    e(i, n);
                    var g = i.prototype;
                    return g.loadAllConfs = function(n) {
                        this.initialize()
                    }
                        ,
                        g.onLogined = function() {
                            var n = new y;
                            this.worldApi = n,
                                n.setAngelSysAPI(this),
                                n.initialize(),
                                this.gEventApi.angelEventDispatcher.addEventListener(o.ON_STATE_CHANGE, this.onSystemNetClosed, this)
                        }
                        ,
                        g.onSystemNetClosed = function(n) {
                            r.SysAPI.getUISysAPI().commUIManager.alert("", "网络连接关闭!", 1, new c(this.reflashHTML,this))
                        }
                        ,
                        g.reflashHTML = function(n) {
                            this.extenrlApi.reflashHTML()
                        }
                        ,
                        g.setRender = function(n) {}
                        ,
                        g.getIsRender = function() {
                            return this.isRender
                        }
                        ,
                        g.initialize = function() {
                            this.gEventApi = new S,
                                this.extenrlApi = new A(this),
                                this.extenrlApi.setAngelSysAPI(this),
                                this.uiSysApi = new M,
                                this.uiSysApi.initialize(b.gWindow);
                            var n = p.getCookie("angel_uin")
                                , e = null == n ? 0 : Number(n)
                                , t = p.getCookie("angel_key")
                                , i = new a;
                            i.dirHost = this.globalConf.DirServer.host,
                                i.dirPort = this.globalConf.DirServer.port,
                                i.sessionKey = t,
                                i.uin = e,
                                i.skey = p.getCookie("skey"),
                                i.pskey = p.getCookie("pskey"),
                            1 == h.IS_LOCAL && (i.skey = d.skey,
                                i.pskey = d.pskey);
                            var o = new Object;
                            0 == e && (i.uin = d.uin),
                            "" == t && (i.sessionKey = d.sessionKey),
                                o[s.CUR_SERVER_INFO] = i,
                                this.gDataApi = new m,
                                this.gDataApi.initialize(o),
                                this.resourceSysApi = new E,
                                this.resourceSysApi.addResAdapter(new L),
                                this.uiSysApi.bindSystemResApi(this.resourceSysApi),
                                this.netSysApi = new v,
                                this.netSysApi.setAngelSysAPI(this),
                                this.netSysApi.initialize(C);
                            var r = new P;
                            r.setAngelSysAPI(this),
                                this.accPermission = r,
                                this.mediaSysApi = new I,
                                this.mediaSysApi.setAngelSysAPI(this),
                                this.gEventApi.angelEventDispatcher.addEventListener(l.LOGIN_OK, this.onLoginedHandler, this),
                                this.msgApi = null
                        }
                        ,
                        g.onLoginedHandler = function(n) {
                            console.log("[AngelMain] 已经登录成功了...."),
                                this.onLogined()
                        }
                        ,
                        g.onLoginInstalled = function(n) {
                            console.log("[AngelMain] plug install:" + n.getPlugName())
                        }
                        ,
                        g.finalize = function() {}
                        ,
                        g.getMSGAPI = function() {
                            return this.msgApi
                        }
                        ,
                        g.getWorldAPI = function() {
                            return this.worldApi
                        }
                        ,
                        g.getNetSysAPI = function() {
                            return this.netSysApi
                        }
                        ,
                        g.getGDataAPI = function() {
                            return this.gDataApi
                        }
                        ,
                        g.getUISysAPI = function() {
                            return this.uiSysApi
                        }
                        ,
                        g.getGEventAPI = function() {
                            return this.gEventApi
                        }
                        ,
                        g.getMediaSysAPI = function() {
                            return this.mediaSysApi
                        }
                        ,
                        g.getResSysAPI = function() {
                            return this.resourceSysApi
                        }
                        ,
                        g.getPlugSysAPI = function() {
                            return this.plugManagerApi
                        }
                        ,
                        g.getExternalAPI = function() {
                            return this.extenrlApi
                        }
                        ,
                        g.getAccessPermission = function() {
                            return this.accPermission
                        }
                        ,
                        i
                }(g));
                i._RF.pop()
            }
        }
    }
));
