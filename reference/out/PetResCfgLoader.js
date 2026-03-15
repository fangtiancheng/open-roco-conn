System.register("chunks:///_virtual/PetResCfgLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ConfigurationLoader.ts", "./ConfigManager.ts", "./BuildLogHelper.ts", "./Constants.ts", "./global.ts"], (function(e) {
        var t, n, a, o, s, r, i, u, f;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass
            }
                , function(e) {
                    a = e.cclegacy,
                        o = e.JsonAsset
                }
                , function(e) {
                    s = e.ConfigurationLoader
                }
                , function(e) {
                    r = e.default
                }
                , function(e) {
                    i = e.default
                }
                , function(e) {
                    u = e.Constants
                }
                , function(e) {
                    f = e.__global
                }
            ],
            execute: function() {
                a._RF.push({}, "c45583IkKpIaLcYorR3S0kO", "PetResCfgLoader", void 0);
                var c = function() {}
                    , g = e("PetResCfgLoader", function(e) {
                    function a(t) {
                        var n;
                        if ((n = e.call(this) || this)._data = void 0,
                        null == t)
                            throw new Error("PetResCfgLoader can not be instantiated.");
                        return n
                    }
                    t(a, e);
                    var s = a.prototype;
                    return s.loadFromJson = function() {
                        var e = [];
                        this._data = new Map;
                        var t = r.Instance.getRes("json/petResConfig", o);
                        if (t)
                            for (var n = 0; n < t.json.petlist.length; n++) {
                                var a = t.json.petlist[n];
                                a && (this._data.has(a.swfID) && e.push(a.swfID + "==" + a.swfName),
                                    this._data.set(a.swfID, a.swfName))
                            }
                        for (var s = 0; s < e.length; s++) {
                            var u = e[s];
                            1 == i.IS_LOCAL && console.error("PetResCfgLoader==" + u)
                        }
                        e.length > 0 && i.IS_LOCAL
                    }
                        ,
                        s.getResID = function(e) {
                            1 == i.IS_LOCAL && console.debug("PetResCfgLoader==getResID==" + e);
                            var t = "number" == typeof e ? e : isNaN(Number(e)) ? 0 : Number(e)
                                , n = 0
                                , a = f.SysAPI.getGDataAPI().getDataProxy(u.SPIRIT_DATA);
                            if (a) {
                                var o = a.select(t);
                                o && (n = o.resID)
                            }
                            return n
                        }
                        ,
                        s.getPath = function(e) {
                            var t = ""
                                , n = this.getResID(e) || e;
                            return 1 == i.IS_LOCAL && console.debug("PetResCfgLoader==resID==" + n),
                            this._data && (null != (t = this._data.get(n.toString())) && null != t || (console.error("PetResCfgLoader-undefine=>" + n),
                                t = this._data.get("9999"))),
                            1 == i.IS_LOCAL && console.debug("PetResCfgLoader==path==" + t),
                                t
                        }
                        ,
                        n(a, [{
                            key: "data",
                            get: function() {
                                return this._data
                            }
                        }], [{
                            key: "Instance",
                            get: function() {
                                return null == a.instance && (a.instance = new a(new c),
                                    a.instance.loadFromJson()),
                                    a.instance
                            }
                        }]),
                        a
                }(s));
                g.ConfigName = "petResConfig",
                    g.instance = void 0,
                    a._RF.pop()
            }
        }
    }
));
