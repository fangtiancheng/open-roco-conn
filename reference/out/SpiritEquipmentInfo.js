System.register("chunks:///_virtual/SpiritEquipmentInfo.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ByteArray.ts", "./Constants.ts", "./global.ts"], (function(t) {
        var e, i, s, r, n;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    s = t.ByteArray
                }
                , function(t) {
                    r = t.Constants
                }
                , function(t) {
                    n = t.__global
                }
            ],
            execute: function() {
                i._RF.push({}, "fec7fy3UNxH74XfiIpJSy6Y", "SpiritEquipmentInfo", void 0);
                t("SpiritEquipmentInfo", function() {
                    function t() {
                        this.id = 0,
                            this.type = 0,
                            this.quality = 0,
                            this.price = 0,
                            this.baseAttr = 0,
                            this.baseValue = 0,
                            this.specialAttr = 0,
                            this.specialValue = 0,
                            this._serverID = 0,
                            this.catchTime = 0,
                            this.des = void 0,
                            this.spiritID = 0,
                            this.spiritCatchTime = 0,
                            this.selectValue = 0
                    }
                    return t.getIdByServerId = function(t) {
                        return 1048575 & t
                    }
                        ,
                        t.getTypeByServerId = function(t) {
                            return t >> 20 & 7
                        }
                        ,
                        t.getQualityByServerId = function(t) {
                            return t >> 23 & 7
                        }
                        ,
                        e(t, [{
                            key: "serverID",
                            get: function() {
                                return this._serverID
                            },
                            set: function(e) {
                                if (this._serverID = e,
                                0 != this._serverID) {
                                    this.id = t.getIdByServerId(this._serverID),
                                        this.type = t.getTypeByServerId(this._serverID),
                                        this.quality = t.getQualityByServerId(this._serverID);
                                    var i = n.SysAPI.getGDataAPI().getDataProxy(r.SEQUIP_DES_DATA);
                                    if (this.des = i.select(this.type, this.id),
                                    null != this.des) {
                                        this.price = this.des.price[this.quality - 1];
                                        var u = new s;
                                        u.writeByte(0),
                                            u.writeByte(this.type),
                                            u.writeByte(this.des.level),
                                            u.writeByte(this.quality),
                                            u.position = 0,
                                            this.selectValue = u.readUnsignedInt()
                                    }
                                }
                            }
                        }]),
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
