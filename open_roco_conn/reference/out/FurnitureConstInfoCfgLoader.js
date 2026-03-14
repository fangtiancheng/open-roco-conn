System.register("chunks:///_virtual/FurnitureConstInfoCfgLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ConfigurationLoader.ts", "./Xml2Json.ts", "./ConfigManager.ts", "./GlobalConfig.ts"], (function(n) {
        var t, e, o, r, a, i, u, s;
        return {
            setters: [function(n) {
                t = n.inheritsLoose,
                    e = n.createClass
            }
                , function(n) {
                    o = n.cclegacy,
                        r = n.TextAsset
                }
                , function(n) {
                    a = n.ConfigurationLoader
                }
                , function(n) {
                    i = n.Xml2Json
                }
                , function(n) {
                    u = n.default
                }
                , function(n) {
                    s = n.GlobalConfig
                }
            ],
            execute: function() {
                o._RF.push({}, "d9f9b6ItPpEy66/PX8L7rGt", "FurnitureConstInfoCfgLoader", void 0);
                var f = function() {}
                    , c = n("FurnitureConstInfoCfgLoader", function(n) {
                    function o(t) {
                        var e;
                        if ((e = n.call(this) || this)._data = {},
                        null == t)
                            throw new Error("FurnitureConstInfoCfgLoader can not be instantiated.");
                        return e
                    }
                    t(o, n);
                    var a = o.prototype;
                    return a.loadFromXml = function() {
                        var n = u.Instance.getRes("xml/FurnitureConstInfo", r);
                        n && (this._data = i.getJsonNew(n.text).FurnitureArray),
                            this.executeRemoteData()
                    }
                        ,
                        a.executeRemoteData = function() {
                            if (1 == s.useRemoteConfig) {
                                var n, t, e = null == (n = s.parsedConfs.FurnitureConstInfo) || null == (t = n.data) ? void 0 : t.FurnitureArray;
                                this._remoteData = e
                            }
                        }
                        ,
                        a.afterLoad = function() {}
                        ,
                        e(o, [{
                            key: "data",
                            get: function() {
                                return 1 == s.useRemoteConfig ? this._remoteData : this._data
                            }
                        }], [{
                            key: "Instance",
                            get: function() {
                                return null == o.instance && (o.instance = new o(new f),
                                    o.instance.loadFromXml()),
                                    o.instance
                            }
                        }]),
                        o
                }(a));
                c.instance = void 0,
                    c.ConfigName = "spiritEquipment_conf",
                    o._RF.pop()
            }
        }
    }
));
