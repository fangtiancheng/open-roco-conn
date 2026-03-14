System.register("chunks:///_virtual/DazzleDressSetCfgLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ConfigurationLoader.ts", "./Xml2Json.ts", "./ConfigManager.ts", "./GlobalConfig.ts"], (function(e) {
        var t, n, a, o, s, r, i, l;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass
            }
                , function(e) {
                    a = e.cclegacy,
                        o = e.TextAsset
                }
                , function(e) {
                    s = e.ConfigurationLoader
                }
                , function(e) {
                    r = e.Xml2Json
                }
                , function(e) {
                    i = e.default
                }
                , function(e) {
                    l = e.GlobalConfig
                }
            ],
            execute: function() {
                a._RF.push({}, "bfdd5y2rfZIBqeqhpB6iMt8", "DazzleDressSetCfgLoader", void 0);
                var u = function() {}
                    , c = e("DazzleDressSetCfgLoader", function(e) {
                    function a(t) {
                        var n;
                        if ((n = e.call(this) || this)._data = {},
                        null == t)
                            throw new Error("DazzleDressSetCfgLoader can not be instantiated.");
                        return n
                    }
                    t(a, e);
                    var s = a.prototype;
                    return s.loadFromXml = function() {
                        var e = i.Instance.getRes("xml/DazzleDressSet", o);
                        e && (this._data = r.getJsonNew(e.text).DazzleDressSet),
                            this.executeRemoteData()
                    }
                        ,
                        s.executeRemoteData = function() {
                            if (1 == l.useRemoteConfig) {
                                var e, t, n = null == (e = l.parsedConfs.DazzleDressSet) || null == (t = e.data) ? void 0 : t.DazzleDressSet;
                                this._remoteData = n
                            }
                        }
                        ,
                        s.afterLoad = function() {}
                        ,
                        n(a, [{
                            key: "data",
                            get: function() {
                                return 1 == l.useRemoteConfig ? this._remoteData : this._data
                            }
                        }], [{
                            key: "Instance",
                            get: function() {
                                return null == a.instance && (a.instance = new a(new u),
                                    a.instance.loadFromXml()),
                                    a.instance
                            }
                        }]),
                        a
                }(s));
                c.instance = void 0,
                    c.ConfigName = "DazzleDressSet",
                    a._RF.pop()
            }
        }
    }
));
