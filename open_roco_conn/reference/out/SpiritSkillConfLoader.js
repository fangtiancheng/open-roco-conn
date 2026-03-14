System.register("chunks:///_virtual/SpiritSkillConfLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ConfigurationLoader.ts", "./Xml2Json.ts", "./ConfigManager.ts", "./GlobalConfig.ts"], (function(t) {
        var n, i, e, o, a, r, l, s;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    e = t.cclegacy,
                        o = t.TextAsset
                }
                , function(t) {
                    a = t.ConfigurationLoader
                }
                , function(t) {
                    r = t.Xml2Json
                }
                , function(t) {
                    l = t.default
                }
                , function(t) {
                    s = t.GlobalConfig
                }
            ],
            execute: function() {
                e._RF.push({}, "497dbnbYzxAN71GDvuOSXwY", "SpiritSkillConfLoader", void 0);
                var u = function() {}
                    , c = t("SpiritSkillConfLoader", function(t) {
                    function e(n) {
                        var i;
                        if ((i = t.call(this) || this)._data = {},
                        null == n)
                            throw new Error("SpiritSkillConfLoader can not be instantiated.");
                        return i
                    }
                    n(e, t);
                    var a = e.prototype;
                    return a.loadFromXml = function() {
                        var t = l.Instance.getRes("xml/spiritSkill_conf", o);
                        t && (this._data = r.getJsonNew(t.text).SpiritSkillConfig),
                            this.executeRemoteData()
                    }
                        ,
                        a.executeRemoteData = function() {
                            if (1 == s.useRemoteConfig) {
                                var t, n, i = null == (t = s.parsedConfs.spiritSkill_conf) || null == (n = t.data) ? void 0 : n.SpiritSkillConfig;
                                this._remoteData = i
                            }
                        }
                        ,
                        a.afterLoad = function() {}
                        ,
                        i(e, [{
                            key: "data",
                            get: function() {
                                return 1 == s.useRemoteConfig ? this._remoteData : this._data
                            }
                        }], [{
                            key: "Instance",
                            get: function() {
                                return null == e.instance && (e.instance = new e(new u),
                                    e.instance.loadFromXml()),
                                    e.instance
                            }
                        }]),
                        e
                }(a));
                c.instance = void 0,
                    c.ConfigName = "spiritSkill_conf",
                    e._RF.pop()
            }
        }
    }
));
