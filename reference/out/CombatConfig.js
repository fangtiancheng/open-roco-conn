System.register("chunks:///_virtual/CombatConfig.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatBaseConfig.ts"], (function(e) {
        var t, n, o;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    o = e.CombatBaseConfig
                }
            ],
            execute: function() {
                n._RF.push({}, "c3028o0VLJKeLoSD66273j7", "CombatConfig", void 0);
                var a = e("CombatConfig", function(e) {
                    function n() {
                        var t;
                        if ((t = e.call(this) || this)._weathers = void 0,
                            n.instance)
                            throw new Error("CombatConfig is singleton class and allready exists!");
                        return t._weathers = new Map,
                            t
                    }
                    t(n, e),
                        n.getInstance = function() {
                            return n.instance || (n.instance = new n),
                                n.instance
                        }
                    ;
                    var o = n.prototype;
                    return o.parseConfig = function(e, t) {
                        if ("CombatConfig" == t)
                            for (var n = e.json, o = n.Weathers.Weather.length, a = 0; a < o; ++a)
                                this._weathers[n.Weathers.Weather[a].id] = n.Weathers.Weather[a].tooltip
                    }
                        ,
                        o.getWeatherTips = function(e) {
                            return null == this._weathers[e] || null == this._weathers[e] ? "" : this._weathers[e]
                        }
                        ,
                        n
                }(o));
                a.instance = void 0,
                    a.isInPreloading = !0,
                    a.preloadCounter = 0,
                    a.preLoadCount = 0,
                    a.loadCount = 0,
                    n._RF.pop()
            }
        }
    }
));
