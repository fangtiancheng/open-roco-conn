System.register("chunks:///_virtual/SpiritBooksConfLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ConfigurationLoader.ts", "./GlobalConfig.ts", "./Constants.ts", "./global.ts"], (function(t) {
        var o, n, a, i, e, r, s;
        return {
            setters: [function(t) {
                o = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    a = t.cclegacy
                }
                , function(t) {
                    i = t.ConfigurationLoader
                }
                , function(t) {
                    e = t.GlobalConfig
                }
                , function(t) {
                    r = t.Constants
                }
                , function(t) {
                    s = t.__global
                }
            ],
            execute: function() {
                a._RF.push({}, "68622uxkTpLdptX7ws3E06T", "SpiritBooksConfLoader", void 0);
                var u = function() {};
                t("SpiritBooksConfLoader", function(t) {
                    function a(o) {
                        var n;
                        if ((n = t.call(this) || this)._data = {},
                        null == o)
                            throw new Error("SpiritBooksConfLoader can not be instantiated.");
                        return n
                    }
                    o(a, t);
                    var i = a.prototype;
                    return i.loadFromXml = function() {}
                        ,
                        i.loadFromRemote = function() {
                            if (1 == e.useRemoteConfig) {
                                var t, o, n = null == (t = e.parsedConfs.SpiritBooks) || null == (o = t.data) ? void 0 : o.SpiritBooks;
                                n && (this._remoteData = n,
                                    this._data = n)
                            }
                        }
                        ,
                        i.afterLoad = function() {
                            var t = {
                                SpiritBooks: this.data
                            };
                            s.SysAPI.getGDataAPI().addGlobalVal(r.CONFS, t)
                        }
                        ,
                        n(a, [{
                            key: "data",
                            get: function() {
                                return 1 == e.useRemoteConfig ? this._remoteData : this._data
                            }
                        }], [{
                            key: "Instance",
                            get: function() {
                                return null == a.instance && (a.instance = new a(new u),
                                    a.instance.loadFromXml(),
                                    a.instance.loadFromRemote()),
                                    a.instance
                            }
                        }]),
                        a
                }(i)).instance = void 0,
                    a._RF.pop()
            }
        }
    }
));
