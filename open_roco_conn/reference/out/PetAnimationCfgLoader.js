System.register("chunks:///_virtual/PetAnimationCfgLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./PetAnimationData.ts", "./ConfigurationLoader.ts", "./ConfigManager.ts"], (function(n) {
        var t, a, i, e, o, s, r;
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
                    o = n.PetAnimationData
                }
                , function(n) {
                    s = n.ConfigurationLoader
                }
                , function(n) {
                    r = n.default
                }
            ],
            execute: function() {
                i._RF.push({}, "3f4faHwpBdMy7ke8fGINTZA", "PetAnimationCfgLoader", void 0);
                var u = function() {};
                n("PetAnimationCfgLoader", function(n) {
                    function i(t) {
                        var a;
                        if ((a = n.call(this) || this)._animationMap = void 0,
                            a._animationMap_1600 = void 0,
                        null == t)
                            throw new Error("PetAnimationCfgLoader can not be instantiated.");
                        return a
                    }
                    t(i, n);
                    var s = i.prototype;
                    return s.loadFromJson = function() {
                        var n;
                        if (n = r.Instance.getRes("json/petAnimation", e)) {
                            this._animationMap = new Map;
                            for (var t = 0; t < n.json.length; t++) {
                                var a = n.json[t];
                                if (a) {
                                    var i = new o;
                                    i.setData(a),
                                        this._animationMap.set(i.id + "_" + i.name, i)
                                }
                            }
                        }
                        if (n = r.Instance.getRes("json/petAnimation_1600", e)) {
                            this._animationMap_1600 = new Map;
                            for (var s = 0; s < n.json.length; s++) {
                                var u = n.json[s];
                                if (u) {
                                    var c = new o;
                                    c.setData(u),
                                        this._animationMap_1600.set(c.id + "_" + c.name, c)
                                }
                            }
                        }
                    }
                        ,
                        s.getPetAnimationData = function(n, t) {
                            var a = null;
                            return this._animationMap && (a = this._animationMap.get(n + "_" + t)),
                                a
                        }
                        ,
                        s.getPetAnimationData_1600 = function(n, t) {
                            var a = null;
                            return this._animationMap_1600 && (a = this._animationMap_1600.get(n + "_" + t)),
                                a
                        }
                        ,
                        a(i, null, [{
                            key: "Instance",
                            get: function() {
                                return null == i.instance && (i.instance = new i(new u),
                                    i.instance.loadFromJson()),
                                    i.instance
                            }
                        }]),
                        i
                }(s)).instance = void 0,
                    i._RF.pop()
            }
        }
    }
));
