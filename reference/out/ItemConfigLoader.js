System.register("chunks:///_virtual/ItemConfigLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ConfigurationLoader.ts", "./Xml2Json.ts", "./ConfigManager.ts", "./GlobalConfig.ts"], (function(t) {
        var n, e, o, a, i, r, s, f;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    o = t.cclegacy,
                        a = t.TextAsset
                }
                , function(t) {
                    i = t.ConfigurationLoader
                }
                , function(t) {
                    r = t.Xml2Json
                }
                , function(t) {
                    s = t.default
                }
                , function(t) {
                    f = t.GlobalConfig
                }
            ],
            execute: function() {
                o._RF.push({}, "ffc81RXdZpLfbmFIqq8jKZS", "ItemConfigLoader", void 0);
                var u = function() {};
                t("ItemConfigLoader", function(t) {
                    function o(n) {
                        var e;
                        if ((e = t.call(this) || this)._data = {},
                        null == n)
                            throw new Error("ItemConfigLoader can not be instantiated.");
                        return e
                    }
                    n(o, t);
                    var i = o.prototype;
                    return i.loadFromXml = function() {
                        var t = s.Instance.getRes("xml/ItemConfig", a);
                        t && (this._data = r.getJsonNew(t.text).ItemConfig),
                            this.executeRemoteData()
                    }
                        ,
                        i.executeRemoteData = function() {
                            if (1 == f.useRemoteConfig) {
                                var t, n, e = null == (t = f.parsedConfs.ItemConfig) || null == (n = t.data) ? void 0 : n.ItemConfig;
                                this._remoteData = e
                            }
                        }
                        ,
                        i.afterLoad = function() {}
                        ,
                        e(o, [{
                            key: "data",
                            get: function() {
                                return 1 == f.useRemoteConfig ? this._remoteData : this._data
                            }
                        }], [{
                            key: "Instance",
                            get: function() {
                                return null == o.instance && (o.instance = new o(new u),
                                    o.instance.loadFromXml()),
                                    o.instance
                            }
                        }]),
                        o
                }(i)).instance = void 0,
                    o._RF.pop()
            }
        }
    }
));
