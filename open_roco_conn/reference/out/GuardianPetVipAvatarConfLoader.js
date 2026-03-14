System.register("chunks:///_virtual/GuardianPetVipAvatarConfLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ConfigurationLoader.ts", "./Xml2Json.ts", "./ConfigManager.ts"], (function(n) {
        var t, a, e, o, i, r, u;
        return {
            setters: [function(n) {
                t = n.inheritsLoose,
                    a = n.createClass
            }
                , function(n) {
                    e = n.cclegacy,
                        o = n.TextAsset
                }
                , function(n) {
                    i = n.ConfigurationLoader
                }
                , function(n) {
                    r = n.Xml2Json
                }
                , function(n) {
                    u = n.default
                }
            ],
            execute: function() {
                e._RF.push({}, "79e12xokfBDxZVSjjiwclR3", "GuardianPetVipAvatarConfLoader", void 0);
                var c = function() {}
                    , s = n("GuardianPetVipAvatarConfLoader", function(n) {
                    function e(t) {
                        var a;
                        if ((a = n.call(this) || this)._data = {},
                        null == t)
                            throw new Error("GuardianPetVipAvatarConfLoader can not be instantiated.");
                        return a
                    }
                    t(e, n);
                    var i = e.prototype;
                    return i.loadFromXml = function() {
                        var n = u.Instance.getRes("xml/guardianPetVipAvatar_conf", o);
                        n && (this._data = r.getJsonNew(n.text).vipAvatar)
                    }
                        ,
                        i.afterLoad = function() {}
                        ,
                        a(e, [{
                            key: "data",
                            get: function() {
                                return this._data
                            }
                        }], [{
                            key: "Instance",
                            get: function() {
                                return null == e.instance && (e.instance = new e(new c),
                                    e.instance.loadFromXml()),
                                    e.instance
                            }
                        }]),
                        e
                }(i));
                s.instance = void 0,
                    s.ConfigName = "guardianPetVipAvatar_conf",
                    e._RF.pop()
            }
        }
    }
));
