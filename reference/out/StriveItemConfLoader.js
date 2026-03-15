System.register("chunks:///_virtual/StriveItemConfLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./ConfigurationLoader.ts", "./Xml2Json.ts", "./Constants.ts", "./ConfigManager.ts"], (function(t) {
        var n, e, o, a, i, r, s, c, f;
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
                    i = t.__global
                }
                , function(t) {
                    r = t.ConfigurationLoader
                }
                , function(t) {
                    s = t.Xml2Json
                }
                , function(t) {
                    c = t.Constants
                }
                , function(t) {
                    f = t.default
                }
            ],
            execute: function() {
                o._RF.push({}, "106fe8AdfFCMLGa9VaNJf1l", "StriveItemConfLoader", void 0);
                var u = function() {}
                    , l = t("StriveItemConfLoader", function(t) {
                    function o(n) {
                        var e;
                        if ((e = t.call(this) || this)._data = {},
                        null == n)
                            throw new Error("StriveItemConfLoader can not be instantiated.");
                        return e
                    }
                    n(o, t);
                    var r = o.prototype;
                    return r.loadFromXml = function() {
                        var t = f.Instance.getRes("xml/striveItem_conf", a);
                        t && (this._data = s.getJsonNew(t.text).StriveItemConfig)
                    }
                        ,
                        r.afterLoad = function() {
                            var t = {
                                striveItem_conf: this._data
                            };
                            i.SysAPI.getGDataAPI().addGlobalVal(c.CONFS, t)
                        }
                        ,
                        e(o, [{
                            key: "data",
                            get: function() {
                                return this._data
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
                }(r));
                l.instance = void 0,
                    l.ConfigName = "striveItem_conf",
                    o._RF.pop()
            }
        }
    }
));
