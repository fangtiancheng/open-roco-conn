System.register("chunks:///_virtual/SpiritEquipmengConfLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ConfigurationLoader.ts", "./Xml2Json.ts", "./ConfigManager.ts", "./GlobalConfig.ts"], (function(n) {
        var t, e, i, o, a, r, u, s;
        return {
            setters: [function(n) {
                t = n.inheritsLoose,
                    e = n.createClass
            }
                , function(n) {
                    i = n.cclegacy,
                        o = n.TextAsset
                }
                , function(n) {
                    a = n.ConfigurationLoader
                }
                , function(n) {
                    r = n.Xml2Json
                }
                , function(n) {
                    u = n.default
                }
                , function(n) {
                    s = n.GlobalConfig
                }
            ],
            execute: function() {
                i._RF.push({}, "8353d3/yaxGbKSWkevyJACv", "SpiritEquipmengConfLoader", void 0);
                var c = function() {}
                    , f = n("SpiritEquipmengConfLoader", function(n) {
                    function i(t) {
                        var e;
                        if ((e = n.call(this) || this)._data = {},
                        null == t)
                            throw new Error("SpiritEquipmengConfLoader can not be instantiated.");
                        return e
                    }
                    t(i, n);
                    var a = i.prototype;
                    return a.loadFromXml = function() {
                        var n = u.Instance.getRes("xml/spiritEquipment_conf", o);
                        n && (this._data = r.getJsonNew(n.text).SpiritEquipmentConfig),
                            this.executeRemoteData()
                    }
                        ,
                        a.executeRemoteData = function() {
                            if (1 == s.useRemoteConfig) {
                                var n, t, e = null == (n = s.parsedConfs.spiritEquipment_conf) || null == (t = n.data) ? void 0 : t.SpiritEquipmentConfig;
                                this._remoteData = e
                            }
                        }
                        ,
                        a.afterLoad = function() {}
                        ,
                        e(i, [{
                            key: "data",
                            get: function() {
                                return 1 == s.useRemoteConfig ? this._remoteData : this._data
                            }
                        }], [{
                            key: "Instance",
                            get: function() {
                                return null == i.instance && (i.instance = new i(new c),
                                    i.instance.loadFromXml()),
                                    i.instance
                            }
                        }]),
                        i
                }(a));
                f.instance = void 0,
                    f.ConfigName = "spiritEquipment_conf",
                    i._RF.pop()
            }
        }
    }
));
