System.register("chunks:///_virtual/AchieveCfgLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./TitleData.ts", "./ConfigurationLoader.ts", "./GlobalConfig.ts"], (function(e) {
        var t, n, i, a, o, l;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass
            }
                , function(e) {
                    i = e.cclegacy
                }
                , function(e) {
                    a = e.TitleData
                }
                , function(e) {
                    o = e.ConfigurationLoader
                }
                , function(e) {
                    l = e.GlobalConfig
                }
            ],
            execute: function() {
                i._RF.push({}, "a97e6Q/vDZMo7w0Gzyuc1qz", "AchieveCfgLoader", void 0);
                var r = function() {}
                    , c = e("AchieveCfgLoader", function(e) {
                    function i(t) {
                        var n;
                        if ((n = e.call(this) || this)._titleMap = void 0,
                        null == t)
                            throw new Error("AchieveCfgLoader can not be instantiated.");
                        return n
                    }
                    t(i, e);
                    var o = i.prototype;
                    return o.loadFromRemote = function() {
                        var e, t, n = null == (e = l.parsedConfs.achieve_conf) || null == (t = e.data) ? void 0 : t.data;
                        if (n) {
                            this._titleMap = new Map;
                            for (var i = 0; i < n.title.length; i++) {
                                var o = n.title[i];
                                if (o.level instanceof Array)
                                    for (var r = 0; r < o.level.length; r++) {
                                        var c = o.level[r]
                                            , s = new a;
                                        s.setData(o, c),
                                            this._titleMap.set(o.id + "_" + c.id, s)
                                    }
                                else {
                                    var u = new a;
                                    u.setData(o),
                                        this._titleMap.set(o.id + "_" + o.level.id, u)
                                }
                            }
                        }
                    }
                        ,
                        o.getTitleData = function(e, t) {
                            var n = null;
                            return this._titleMap && (n = this._titleMap.get(e + "_" + t)),
                                n
                        }
                        ,
                        n(i, null, [{
                            key: "Instance",
                            get: function() {
                                return null == i.instance && (i.instance = new i(new r),
                                    i.instance.loadFromRemote()),
                                    i.instance
                            }
                        }]),
                        i
                }(o));
                c.ConfigName = "achieve_conf",
                    c.instance = void 0,
                    i._RF.pop()
            }
        }
    }
));
