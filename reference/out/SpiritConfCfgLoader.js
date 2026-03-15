System.register("chunks:///_virtual/SpiritConfCfgLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./ConfigurationLoader.ts", "./Xml2Json.ts", "./ConfigManager.ts", "./Constants.ts", "./GlobalConfig.ts"], (function(t) {
        var n, o, e, i, a, r, s, f, c, u;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    o = t.createClass
            }
                , function(t) {
                    e = t.cclegacy,
                        i = t.TextAsset
                }
                , function(t) {
                    a = t.__global
                }
                , function(t) {
                    r = t.ConfigurationLoader
                }
                , function(t) {
                    s = t.Xml2Json
                }
                , function(t) {
                    f = t.default
                }
                , function(t) {
                    c = t.Constants
                }
                , function(t) {
                    u = t.GlobalConfig
                }
            ],
            execute: function() {
                e._RF.push({}, "21b9cklU+NAM7HT45WOOnRJ", "SpiritConfCfgLoader", void 0);
                var l = function() {};
                t("SpiritConfCfgLoader", function(t) {
                    function e(n) {
                        var o;
                        if ((o = t.call(this) || this)._data = {},
                        null == n)
                            throw new Error("SpiritConfCfgLoader can not be instantiated.");
                        return o
                    }
                    n(e, t);
                    var r = e.prototype;
                    return r.loadFromXml = function() {
                        var t = f.Instance.getRes("xml/spirit_conf", i);
                        t && (this._data = s.getJsonNew(t.text).SpiritConfig),
                            this.executeRemoteData()
                    }
                        ,
                        r.executeRemoteData = function() {
                            if (1 == u.useRemoteConfig) {
                                var t, n, o = null == (t = u.parsedConfs.spirit_conf) || null == (n = t.data) ? void 0 : n.SpiritConfig;
                                this._remoteData = o
                            }
                        }
                        ,
                        r.afterLoad = function() {
                            var t = {
                                spirit_conf: this._data
                            };
                            a.SysAPI.getGDataAPI().addGlobalVal(c.CONFS, t)
                        }
                        ,
                        o(e, [{
                            key: "data",
                            get: function() {
                                return 1 == u.useRemoteConfig ? this._remoteData : this._data
                            }
                        }], [{
                            key: "Instance",
                            get: function() {
                                return null == e.instance && (e.instance = new e(new l),
                                    e.instance.loadFromXml()),
                                    e.instance
                            }
                        }]),
                        e
                }(r)).instance = void 0,
                    e._RF.pop()
            }
        }
    }
));
