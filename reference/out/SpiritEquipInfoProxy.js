System.register("chunks:///_virtual/SpiritEquipInfoProxy.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GlobalAPI.ts", "./Constants.ts", "./global.ts", "./SpiritEquipmentInfo.ts"], (function(t) {
        var i, e, n, r, s, o;
        return {
            setters: [function(t) {
                i = t.createClass
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    n = t.GlobalAPI
                }
                , function(t) {
                    r = t.Constants
                }
                , function(t) {
                    s = t.__global
                }
                , function(t) {
                    o = t.SpiritEquipmentInfo
                }
            ],
            execute: function() {
                e._RF.push({}, "49327/8bLNOYpWQ0LZzuDYv", "SpiritEquipInfoProxy", void 0);
                t("SpiritEquipInfoProxy", function() {
                    function t(t, i) {
                        this.db = void 0,
                            this.listdb = void 0;
                        var e = n.getTimer();
                        this.db = new Map,
                            this.listdb = [],
                        0 != t && (this.processBytesArray(t, i),
                        CONFIG.DEBUG && console.log("[SpiritDesProxy]解析:", n.getTimer() - e))
                    }
                    var e = t.prototype;
                    return e.processBytesArray = function(t, i) {
                        s.SysAPI.getGDataAPI().getDataProxy(r.SEQUIP_DES_DATA);
                        for (var e, n, l = 0; l < t; l++)
                            n = (e = new o).serverID = i.readInt(),
                                e.catchTime = i.readUnsignedInt(),
                                e.baseAttr = i.readUnsignedByte(),
                                e.baseValue = i.readUnsignedByte(),
                                e.specialAttr = i.readUnsignedByte(),
                                e.specialValue = i.readUnsignedByte(),
                                e.spiritID = i.readUnsignedInt(),
                                e.spiritCatchTime = i.readUnsignedInt(),
                                this.listdb.push(e),
                                this.db[n + "_" + e.catchTime] = e
                    }
                        ,
                        e.insert = function() {
                            return !1
                        }
                        ,
                        e.select = function() {
                            if ("*" == (arguments.length <= 0 ? void 0 : arguments[0]))
                                return this.listdb;
                            if (2 == arguments.length) {
                                var t = arguments.length <= 0 ? void 0 : arguments[0]
                                    , i = arguments.length <= 1 ? void 0 : arguments[1];
                                return this.db[t + "_" + i]
                            }
                            return null
                        }
                        ,
                        e.selectBySpiritData = function(t, i) {
                            for (var e, n = [], r = 0; r < this.listdb.length; r++)
                                (e = this.listdb[r]).spiritID == t && e.spiritCatchTime == i && n.push(e);
                            return n
                        }
                        ,
                        e.update = function() {
                            return !1
                        }
                        ,
                        e.deleted = function() {
                            var t, i = arguments.length <= 0 ? void 0 : arguments[0], e = arguments.length <= 1 ? void 0 : arguments[1];
                            this.db[i + "_" + e] = null;
                            for (var n = 0; n < this.listdb.length; n++)
                                if ((t = this.listdb[n]).serverID == i && t.catchTime == e)
                                    return this.listdb.splice(n, 1),
                                        !0;
                            return !1
                        }
                        ,
                        e.clear = function() {}
                        ,
                        e.getName = function() {
                            return r.SEQUIP_INFO_DATA
                        }
                        ,
                        i(t, [{
                            key: "list",
                            get: function() {
                                return this.listdb
                            }
                        }, {
                            key: "length",
                            get: function() {
                                return this.listdb.length
                            }
                        }]),
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
