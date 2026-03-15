System.register("chunks:///_virtual/LadderMatchUIPlugin.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./LadderMatchSystemDP.ts", "./MainWin.ts", "./PluginFramework.ts", "./DEFINE.ts", "./CGILoader.ts", "./CGIEvent.ts", "./Config.ts"], (function(n) {
        var i, t, e, a, o, s, r, l, c, d;
        return {
            setters: [function(n) {
                i = n.inheritsLoose
            }
                , function(n) {
                    t = n.cclegacy
                }
                , function(n) {
                    e = n.__global
                }
                , function(n) {
                    a = n.LadderMatchSystemDP
                }
                , function(n) {
                    o = n.MainWin
                }
                , function(n) {
                    s = n.PluginFramework
                }
                , function(n) {
                    r = n.DEFINE
                }
                , function(n) {
                    l = n.CGILoader
                }
                , function(n) {
                    c = n.CGIEvent
                }
                , function(n) {
                    d = n.Config
                }
            ],
            execute: function() {
                t._RF.push({}, "4227eWUNhpFZqkbrGMx6p0G", "LadderMatchUIPlugin", void 0),
                    n("default", function(n) {
                        function t() {
                            var i;
                            return (i = n.call(this) || this)._mainPanel = void 0,
                                i.CONFIG_NAME = "LadderMatchConfig",
                                i._loader = void 0,
                                i
                        }
                        i(t, n);
                        var s = t.prototype;
                        return s.start = function() {
                            this.initialize()
                        }
                            ,
                            s.initialize = function() {
                                return this.initLoadConfig(null),
                                    a.initial(),
                                    !0
                            }
                            ,
                            s.finalize = function() {
                                return this._mainPanel && this._mainPanel.dispose(),
                                this._loader && (this._loader.removeEventListener(c.COMPLETE, this.loadResConf, this),
                                    this._loader.removeEventListener(c.GOT_ERROR, this.onNetError, this),
                                    this._loader = null),
                                    a.dispose(),
                                    !0
                            }
                            ,
                            s.loadResConf = function(n) {
                                e.UI.closeMiniLoading(),
                                    d.configData = n.data,
                                    d.init(d.configData),
                                    this.initLoadConfig(null)
                            }
                            ,
                            s.initLoadConfig = function(n) {
                                if (null == d.configData)
                                    return this._loader = new l(r.formatFileVersion("https://res.17roco.qq.com/plugins/LadderMatch/" + this.CONFIG_NAME + ".xml"),e.SysAPI.getNetSysAPI().createURLLoader(!0)),
                                        this._loader.addEventListener(c.COMPLETE, this.loadResConf, this),
                                        this._loader.addEventListener(c.GOT_ERROR, this.onNetError, this),
                                        void this._loader.sendData("");
                                this.createMainWinPanel()
                            }
                            ,
                            s.onNetError = function(n) {
                                e.UI.alert("", n.msg)
                            }
                            ,
                            s.createMainWinPanel = function() {
                                this._mainPanel = e.UI.createWindow(o),
                                    this._mainPanel.setPanelByType(0),
                                    this._mainPanel.show()
                            }
                            ,
                            s.createMainWinPanel1 = function(n) {
                                this._mainPanel = e.UI.createWindow(o),
                                    this._mainPanel.setPanelByType(n),
                                    this._mainPanel.show()
                            }
                            ,
                            s.updateInfoPanel = function() {
                                this._mainPanel && this._mainPanel.onReqUserInfo(0, null, null, null)
                            }
                            ,
                            t
                    }(s)).target = void 0,
                    t._RF.pop()
            }
        }
    }
));
