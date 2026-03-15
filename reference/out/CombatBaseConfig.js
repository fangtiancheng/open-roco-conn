System.register("chunks:///_virtual/CombatBaseConfig.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DEFINE.ts", "./ConfigManager.ts"], (function(i) {
        var t, n, s, o, e;
        return {
            setters: [function(i) {
                t = i.createClass
            }
                , function(i) {
                    n = i.cclegacy,
                        s = i.JsonAsset
                }
                , function(i) {
                    o = i.DEFINE
                }
                , function(i) {
                    e = i.default
                }
            ],
            execute: function() {
                n._RF.push({}, "fd3e5RuOxNMBIHkn4TTqmpt", "CombatBaseConfig", void 0);
                i("CombatBaseConfig", function() {
                    function i() {
                        this._isInitaled = void 0,
                            this._params = void 0,
                            this.configNames = void 0,
                            this._callBack = void 0,
                            this._dic = void 0,
                            this._loadCount = 0,
                            this._configCount = 0,
                            this.configData = void 0
                    }
                    var n = i.prototype;
                    return n.init = function(i, t) {
                        if (void 0 === t && (t = null),
                            this._callBack = t,
                            this._isInitaled)
                            this._callBack && this._callBack();
                        else {
                            this.configNames = i;
                            this._configCount = i.length;
                            for (var n = 0; n < this._configCount; n++) {
                                o.PLUGIN_ROOT,
                                    i[n],
                                    o.ANGEL_VERSION;
                                var a = "json/" + i[n]
                                    , c = e.Instance.getRes(a, s);
                                c && this.loadResConf(c, i[n])
                            }
                        }
                        return this._isInitaled
                    }
                        ,
                        n.loadResConf = function(i, t) {
                            this.parseConfig(i, t)
                        }
                        ,
                        n.parseConfig = function(i, t) {}
                        ,
                        t(i, [{
                            key: "dictionary",
                            get: function() {
                                return null == this._dic && (this._dic = new Map),
                                    this._dic
                            },
                            set: function(i) {
                                this._dic = i
                            }
                        }]),
                        i
                }());
                n._RF.pop()
            }
        }
    }
));
