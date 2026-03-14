System.register("chunks:///_virtual/SpiritBagGetEquipmentBagRsp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./IOError.ts", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts", "./FightSvrProtoRetInfo.ts"], (function(e) {
        var t, i, n, s, o, a, r, u, f;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    s = e.IOError
                }
                , function(e) {
                    o = e.ReadUtils
                }
                , function(e) {
                    a = e.BaseMessage
                }
                , function(e) {
                    r = e.WireType
                }
                , function(e) {
                    u = e.WriteUtils
                }
                , function(e) {
                    f = e.FightSvrProto_RetInfo
                }
            ],
            execute: function() {
                n._RF.push({}, "4a7f1pBUapDZZD7NhNl/WdH", "SpiritBagGetEquipmentBagRsp", void 0);
                e("SpiritBagGetEquipmentBagRsp", function(e) {
                    function n() {
                        for (var t, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (t = e.call.apply(e, [this].concat(n)) || this).ret_infofield = void 0,
                            t.equipment_countfield = void 0,
                            t.hasField0 = 0,
                            t.equipment_infofield = void 0,
                            t.equipmentPosInfo = [],
                            t.all_numfield = void 0,
                            t.needfield = void 0,
                            t
                    }
                    t(n, e);
                    var a = n.prototype;
                    return a.removeRetInfo = function() {
                        this.ret_infofield = null
                    }
                        ,
                        a.removeEquipmentCount = function() {
                            this.hasField0 &= 4294967294,
                                this.equipment_countfield = 0
                        }
                        ,
                        a.removeEquipmentInfo = function() {
                            this.equipment_infofield = null
                        }
                        ,
                        a.removeAllNum = function() {
                            this.hasField0 &= 4294967293,
                                this.all_numfield = 0
                        }
                        ,
                        a.removeNeed = function() {
                            this.hasField0 &= 4294967291,
                                this.needfield = 0
                        }
                        ,
                        a.writeToBuffer = function(e) {
                            this.hasRetInfo && (u.writeTag(e, r.LENGTH_DELIMITED, 1),
                                u.writeTYPE_MESSAGE(e, this.ret_infofield)),
                            this.hasEquipmentCount && (u.writeTag(e, r.VARINT, 2),
                                u.writeTYPE_UINT32(e, this.equipment_countfield)),
                            this.hasEquipmentInfo && (u.writeTag(e, r.LENGTH_DELIMITED, 3),
                                u.writeTYPE_BYTES(e, this.equipment_infofield));
                            for (var t = 0; t < this.equipmentPosInfo.length; ++t)
                                u.writeTag(e, r.LENGTH_DELIMITED, 4),
                                    u.writeTYPE_BYTES(e, this.equipmentPosInfo[t]);
                            this.hasAllNum && (u.writeTag(e, r.VARINT, 5),
                                u.writeTYPE_UINT32(e, this.all_numfield)),
                            this.hasNeed && (u.writeTag(e, r.VARINT, 6),
                                u.writeTYPE_UINT32(e, this.needfield))
                        }
                        ,
                        a.readFromSlice = function(e, t) {
                            for (var i = 0, n = 0, a = 0, r = 0, u = 0; e.bytesAvailable > t; ) {
                                var l = o.readTYPE_UINT32(e);
                                switch (l >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new s("Bad data format: SpiritBagGetEquipmentBagRsp.retInfo cannot be set twice.");
                                        ++i,
                                            this.retInfo = new f,
                                            o.readTYPE_MESSAGE(e, this.retInfo);
                                        break;
                                    case 2:
                                        if (0 != n)
                                            throw new s("Bad data format: SpiritBagGetEquipmentBagRsp.equipmentCount cannot be set twice.");
                                        ++n,
                                            this.equipmentCount = o.readTYPE_UINT32(e);
                                        break;
                                    case 3:
                                        if (0 != a)
                                            throw new s("Bad data format: SpiritBagGetEquipmentBagRsp.equipmentInfo cannot be set twice.");
                                        ++a,
                                            this.equipmentInfo = o.readTYPE_BYTES(e);
                                        break;
                                    case 4:
                                        this.equipmentPosInfo.push(o.readTYPE_BYTES(e));
                                        break;
                                    case 5:
                                        if (0 != r)
                                            throw new s("Bad data format: SpiritBagGetEquipmentBagRsp.allNum cannot be set twice.");
                                        ++r,
                                            this.allNum = o.readTYPE_UINT32(e);
                                        break;
                                    case 6:
                                        if (0 != u)
                                            throw new s("Bad data format: SpiritBagGetEquipmentBagRsp.need cannot be set twice.");
                                        ++u,
                                            this.need = o.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        o.skip(e, 7 & l)
                                }
                            }
                        }
                        ,
                        i(n, [{
                            key: "hasRetInfo",
                            get: function() {
                                return null != this.ret_infofield
                            }
                        }, {
                            key: "retInfo",
                            get: function() {
                                return this.ret_infofield
                            },
                            set: function(e) {
                                this.ret_infofield = e
                            }
                        }, {
                            key: "hasEquipmentCount",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "equipmentCount",
                            get: function() {
                                return this.hasEquipmentCount ? this.equipment_countfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.equipment_countfield = e
                            }
                        }, {
                            key: "hasEquipmentInfo",
                            get: function() {
                                return null != this.equipment_infofield
                            }
                        }, {
                            key: "equipmentInfo",
                            get: function() {
                                return this.hasEquipmentInfo ? this.equipment_infofield : u.stringToByteArray("")
                            },
                            set: function(e) {
                                this.equipment_infofield = e
                            }
                        }, {
                            key: "hasAllNum",
                            get: function() {
                                return 0 != (2 & this.hasField0)
                            }
                        }, {
                            key: "allNum",
                            get: function() {
                                return this.hasAllNum ? this.all_numfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 2,
                                    this.all_numfield = e
                            }
                        }, {
                            key: "hasNeed",
                            get: function() {
                                return 0 != (4 & this.hasField0)
                            }
                        }, {
                            key: "need",
                            get: function() {
                                return this.hasNeed ? this.needfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 4,
                                    this.needfield = e
                            }
                        }]),
                        n
                }(a));
                n._RF.pop()
            }
        }
    }
));
