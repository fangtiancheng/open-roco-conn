System.register("chunks:///_virtual/DazzleDressCfgLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ConfigurationLoader.ts", "./Xml2Json.ts", "./ConfigManager.ts", "./GlobalConfig.ts"], (function(e) {
        var n, t, a, o, s, r, i, l;
        return {
            setters: [function(e) {
                n = e.inheritsLoose,
                    t = e.createClass
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
                a._RF.push({}, "d03f4yi73FMEK/e68oMp6KS", "DazzleDressCfgLoader", void 0);
                var u = function() {}
                    , c = e("DazzleDressCfgLoader", function(e) {
                    function a(n) {
                        var t;
                        if ((t = e.call(this) || this)._data = {},
                        null == n)
                            throw new Error("DazzleDressCfgLoader can not be instantiated.");
                        return t
                    }
                    n(a, e);
                    var s = a.prototype;
                    return s.loadFromXml = function() {
                        var e = i.Instance.getRes("xml/DazzleDress", o);
                        e && (this._data = r.getJsonNew(e.text).DazzleDress)
                    }
                        ,
                        s.loadRemoteData = function() {
                            if (1 == l.useRemoteConfig) {
                                var e, n, t = null == (e = l.parsedConfs.DazzleDress) || null == (n = e.data) ? void 0 : n.DazzleDress;
                                this._remoteData = t
                            }
                        }
                        ,
                        s.afterLoad = function() {}
                        ,
                        t(a, [{
                            key: "data",
                            get: function() {
                                return 1 == l.useRemoteConfig ? this._remoteData : this._data
                            }
                        }], [{
                            key: "Instance",
                            get: function() {
                                return null == a.instance && (a.instance = new a(new u),
                                    a.instance.loadFromXml(),
                                    a.instance.loadRemoteData()),
                                    a.instance
                            }
                        }]),
                        a
                }(s));
                c.ConfigName = "DazzleDress",
                    c.instance = void 0,
                    a._RF.pop()
            }
        }
    }
));
