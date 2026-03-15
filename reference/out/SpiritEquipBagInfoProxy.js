System.register("chunks:///_virtual/SpiritEquipBagInfoProxy.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./SpiritEquipmentInfo.ts", "./GlobalAPI.ts", "./BuildLogHelper.ts"], (function(t) {
        var i, e, n, r, s, u;
        return {
            setters: [function(t) {
                i = t.createClass
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    n = t.Constants
                }
                , function(t) {
                    r = t.SpiritEquipmentInfo
                }
                , function(t) {
                    s = t.GlobalAPI
                }
                , function(t) {
                    u = t.default
                }
            ],
            execute: function() {
                e._RF.push({}, "3aed9vcYSBN16l0nW9pUpxc", "SpiritEquipBagInfoProxy", void 0);
                t("SpiritEquipBagInfoProxy", function() {
                    function t(t, i) {
                        this._db = void 0,
                            this._listdb = void 0;
                        var e = s.getTimer();
                        this._db = new Map,
                            this._listdb = [],
                        0 != t && (this.processEquipData(t, i),
                        CONFIG.DEBUG && console.log("[SpiritDesProxy]解析:", s.getTimer() - e))
                    }
                    var e = t.prototype;
                    return e.processEquipData = function(t, i) {
                        if (!i)
                            throw u.IS_LOCAL,
                                new Error(this.constructor.name + "'s function [processXML] param is illegal");
                        for (var e, n, s = i, o = 0; o < t; o++)
                            n = (e = new r).serverID = Number(s.equip[o].id),
                                e.catchTime = Number(s.equip[o].sernum),
                                e.baseAttr = Number(s.equip[o].battr),
                                e.baseValue = Number(s.equip[o].bvalue),
                                e.specialAttr = Number(s.equip[o].sattr),
                                e.specialValue = Number(s.equip[o].svalue),
                                this._listdb.push(e),
                                this._db[n + "_" + e.catchTime] = e
                    }
                        ,
                        e.insert = function() {
                            return !1
                        }
                        ,
                        e.select = function() {
                            if ("*" == (arguments.length <= 0 ? void 0 : arguments[0]))
                                return this._listdb;
                            if (2 == arguments.length) {
                                var t = arguments.length <= 0 ? void 0 : arguments[0]
                                    , i = arguments.length <= 1 ? void 0 : arguments[1];
                                return this._db[t + "_" + i]
                            }
                            return null
                        }
                        ,
                        e.selectBySpiritData = function(t, i) {
                            for (var e, n = [], r = 0; r < this._listdb.length; r++)
                                (e = this._listdb[r]).spiritID == t && e.spiritCatchTime == i && n.push(e);
                            return n
                        }
                        ,
                        e.update = function() {
                            return !1
                        }
                        ,
                        e.deleted = function() {
                            var t, i = arguments.length <= 0 ? void 0 : arguments[0], e = arguments.length <= 1 ? void 0 : arguments[1];
                            this._db[i + "_" + e] = null;
                            for (var n = 0; n < this._listdb.length; n++)
                                if ((t = this._listdb[n]).serverID == i && t.catchTime == e)
                                    return this._listdb.splice(n, 1),
                                        !0;
                            return !1
                        }
                        ,
                        e.clear = function() {}
                        ,
                        e.getName = function() {
                            return n.SEQUIP_INFO_DATA
                        }
                        ,
                        i(t, [{
                            key: "list",
                            get: function() {
                                return this._listdb
                            }
                        }, {
                            key: "length",
                            get: function() {
                                return this._listdb.length
                            }
                        }]),
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
