System.register("chunks:///_virtual/ServerListCfgLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ConfigurationLoader.ts", "./ConfigManager.ts"], (function(t) {
        var n, e, r, o, a, i;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    r = t.cclegacy,
                        o = t.JsonAsset
                }
                , function(t) {
                    a = t.ConfigurationLoader
                }
                , function(t) {
                    i = t.default
                }
            ],
            execute: function() {
                r._RF.push({}, "cd4c2OBUeBKBbzEMCfiCsyy", "ServerListCfgLoader", void 0);
                var s = function() {};
                t("ServerListCfgLoader", function(t) {
                    function r(n) {
                        var e;
                        if ((e = t.call(this) || this)._data = {},
                        null == n)
                            throw new Error("ServerListCfgLoader can not be instantiated.");
                        return e
                    }
                    n(r, t);
                    var a = r.prototype;
                    return a.loadFromJson = function() {
                        var t = i.Instance.getRes("json/RoomList2", o);
                        t && (this._data = t.json)
                    }
                        ,
                        a.getNameByID = function(t) {
                            var n = t - 1
                                , e = this._data.xml.Row[n];
                            return e && Number(e.Cell[0]) == Number(t) ? e.Cell[1].toString() : "未知名称"
                        }
                        ,
                        a.getTotal = function() {
                            return this._data.xml.Row.length
                        }
                        ,
                        e(r, [{
                            key: "data",
                            get: function() {
                                return this._data
                            }
                        }], [{
                            key: "Instance",
                            get: function() {
                                return null == r.instance && (r.instance = new r(new s),
                                    r.instance.loadFromJson()),
                                    r.instance
                            }
                        }]),
                        r
                }(a)).instance = void 0,
                    r._RF.pop()
            }
        }
    }
));
