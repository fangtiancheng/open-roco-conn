System.register("chunks:///_virtual/SpiritAnimationCfgLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpiritAnimationData.ts", "./ConfigurationLoader.ts", "./ConfigManager.ts"], (function(n) {
        var t, a, i, e, o, r, s;
        return {
            setters: [function(n) {
                t = n.inheritsLoose,
                    a = n.createClass
            }
                , function(n) {
                    i = n.cclegacy,
                        e = n.JsonAsset
                }
                , function(n) {
                    o = n.SpiritAnimationData
                }
                , function(n) {
                    r = n.ConfigurationLoader
                }
                , function(n) {
                    s = n.default
                }
            ],
            execute: function() {
                i._RF.push({}, "37beeSfJPNBFqvxSjxfon1k", "SpiritAnimationCfgLoader", void 0);
                var f = function() {};
                n("SpiritAnimationCfgLoader", function(n) {
                    function i(t) {
                        var a;
                        if ((a = n.call(this) || this)._animationMap = new Map,
                            a._animationMap_1600 = new Map,
                            a._animationSkillMap = new Map,
                            a._animationWeatherMap = new Map,
                            a._animationEffectMap = new Map,
                            a._animationBuffMap = new Map,
                        null == t)
                            throw new Error("SpiritAnimationCfgLoader can not be instantiated.");
                        return a
                    }
                    t(i, n);
                    var r = i.prototype;
                    return r.loadFromJson = function() {
                        var n;
                        if (n = s.Instance.getRes("json/ani", e))
                            for (var t = 0; t < n.json.length; t++)
                                for (var a = n.json[t][1], i = 0; i < a.length; i++) {
                                    var r = a[i]
                                        , f = new o;
                                    f.setData(r, "pet/"),
                                        this._animationMap.set(f.id + "_" + f.name, f)
                                }
                        if (n = s.Instance.getRes("json/petAnimation_1600", e)) {
                            this._animationMap_1600 = new Map;
                            for (var l = 0; l < n.json.length; l++) {
                                var u = n.json[l];
                                if (u) {
                                    var c = new o;
                                    c.setData2(u, "pet_1600/"),
                                        this._animationMap_1600.set(c.id + "_" + c.name, c)
                                }
                            }
                        }
                        if (n = s.Instance.getRes("json/skillAni", e))
                            for (var m = 0; m < n.json.length; m++)
                                for (var p = n.json[m][1], _ = 0; _ < p.length; _++) {
                                    var h = p[_]
                                        , g = new o;
                                    g.setData(h, "skill/"),
                                        this._animationSkillMap.set(g.id + "_" + g.name, g)
                                }
                        if (n = s.Instance.getRes("json/weatherAni", e))
                            for (var v = 0; v < n.json.length; v++)
                                for (var M = n.json[v][1], j = 0; j < M.length; j++) {
                                    var d = M[j]
                                        , w = new o;
                                    w.setData(d, "weather/"),
                                        this._animationWeatherMap.set(w.id + "_" + w.name, w)
                                }
                        if (n = s.Instance.getRes("json/effectAni", e))
                            for (var A = 0; A < n.json.length; A++)
                                for (var D = n.json[A][1], S = 0; S < D.length; S++) {
                                    var k = D[S]
                                        , C = new o;
                                    C.setData(k, "effect/"),
                                        this._animationEffectMap.set(C.id + "_" + C.name, C)
                                }
                        if (n = s.Instance.getRes("json/buffAni", e))
                            for (var L = 0; L < n.json.length; L++)
                                for (var R = n.json[L][1], I = 0; I < R.length; I++) {
                                    var B = R[I]
                                        , W = new o;
                                    W.setData(B, "buff/"),
                                        this._animationBuffMap.set(W.id + "_" + W.name, W)
                                }
                    }
                        ,
                        r.getPetAnimationData = function(n, t) {
                            return this.getPetAnimationData_1600(n, t)
                        }
                        ,
                        r.getPetAnimationData_1600 = function(n, t) {
                            var a = null;
                            return this._animationMap_1600 && (a = this._animationMap_1600.get(n + "_" + t)),
                                a
                        }
                        ,
                        r.getSkillAnimationData = function(n, t) {
                            var a = null;
                            return this._animationMap && (a = this._animationSkillMap.get(n + "_" + t)),
                                a
                        }
                        ,
                        r.getEffectAnimationData = function(n, t) {
                            var a = null;
                            return this._animationMap && (a = this._animationEffectMap.get(n + "_" + t)),
                                a
                        }
                        ,
                        r.getWeatherAnimationData = function(n, t) {
                            var a = null;
                            return this._animationWeatherMap && (a = this._animationWeatherMap.get(n + "_" + t)),
                                a
                        }
                        ,
                        r.getBuffAnimationData = function(n, t) {
                            var a = null;
                            return this._animationWeatherMap && (a = this._animationBuffMap.get(n + "_" + t)),
                                a
                        }
                        ,
                        a(i, null, [{
                            key: "Instance",
                            get: function() {
                                return null == i.instance && (i.instance = new i(new f),
                                    i.instance.loadFromJson()),
                                    i.instance
                            }
                        }]),
                        i
                }(r)).instance = void 0,
                    i._RF.pop()
            }
        }
    }
));
