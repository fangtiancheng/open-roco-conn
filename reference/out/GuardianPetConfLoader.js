System.register("chunks:///_virtual/GuardianPetConfLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ConfigurationLoader.ts", "./Xml2Json.ts", "./ConfigManager.ts"], (function(n) {
        var t, e, a, o, r, i, u;
        return {
            setters: [function(n) {
                t = n.inheritsLoose,
                    e = n.createClass
            }
                , function(n) {
                    a = n.cclegacy,
                        o = n.TextAsset
                }
                , function(n) {
                    r = n.ConfigurationLoader
                }
                , function(n) {
                    i = n.Xml2Json
                }
                , function(n) {
                    u = n.default
                }
            ],
            execute: function() {
                a._RF.push({}, "2bf73WQAapLWrMAhUQ/TdQO", "GuardianPetConfLoader", void 0);
                var s = function() {}
                    , c = n("GuardianPetConfLoader", function(n) {
                    function a(t) {
                        var e;
                        if ((e = n.call(this) || this)._data = {},
                        null == t)
                            throw new Error("GuardianPetConfLoader can not be instantiated.");
                        return e
                    }
                    t(a, n);
                    var r = a.prototype;
                    return r.loadFromXml = function() {
                        var n = u.Instance.getRes("xml/guardianPet_conf", o);
                        n && (this._data = i.getJsonNew(n.text).GuardianPetConf)
                    }
                        ,
                        r.afterLoad = function() {}
                        ,
                        e(a, [{
                            key: "data",
                            get: function() {
                                return this._data
                            }
                        }], [{
                            key: "Instance",
                            get: function() {
                                return null == a.instance && (a.instance = new a(new s),
                                    a.instance.loadFromXml()),
                                    a.instance
                            }
                        }]),
                        a
                }(r));
                c.instance = void 0,
                    c.ConfigName = "guardianPet_conf",
                    a._RF.pop()
            }
        }
    }
));
