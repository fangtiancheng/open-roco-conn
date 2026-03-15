System.register("chunks:///_virtual/GetEquipmentBagRsp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts", "./FightSvrProtoRetInfo.ts"], (function(e) {
        var t, i, n, o, r, s, u, f;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    o = e.ReadUtils
                }
                , function(e) {
                    r = e.BaseMessage
                }
                , function(e) {
                    s = e.WireType
                }
                , function(e) {
                    u = e.WriteUtils
                }
                , function(e) {
                    f = e.FightSvrProto_RetInfo
                }
            ],
            execute: function() {
                n._RF.push({}, "2306cD5pylAyKsG9Z0SNagT", "GetEquipmentBagRsp", void 0);
                e("GetEquipmentBagRsp", function(e) {
                    function n() {
                        for (var t, i = arguments.length, n = new Array(i), o = 0; o < i; o++)
                            n[o] = arguments[o];
                        return (t = e.call.apply(e, [this].concat(n)) || this).ret_infofield = void 0,
                            t.equipment_countfield = void 0,
                            t.hasField0 = 0,
                            t.equipment_infofield = void 0,
                            t.equipmentPosInfo = [],
                            t
                    }
                    t(n, e);
                    var r = n.prototype;
                    return r.removeRetInfo = function() {
                        this.ret_infofield = null
                    }
                        ,
                        r.removeEquipmentCount = function() {
                            this.hasField0 &= 4294967294,
                                this.equipment_countfield = 0
                        }
                        ,
                        r.removeEquipmentInfo = function() {
                            this.equipment_infofield = null
                        }
                        ,
                        r.writeToBuffer = function(e) {
                            this.hasRetInfo && (u.writeTag(e, s.LENGTH_DELIMITED, 1),
                                u.writeTYPE_MESSAGE(e, this.ret_infofield)),
                            this.hasEquipmentCount && (u.writeTag(e, s.VARINT, 2),
                                u.writeTYPE_UINT32(e, this.equipment_countfield)),
                            this.hasEquipmentInfo && (u.writeTag(e, s.LENGTH_DELIMITED, 3),
                                u.writeTYPE_BYTES(e, this.equipment_infofield));
                            for (var t = 0; t < this.equipmentPosInfo.length; ++t)
                                u.writeTag(e, s.LENGTH_DELIMITED, 4),
                                    u.writeTYPE_BYTES(e, this.equipmentPosInfo[t])
                        }
                        ,
                        r.readFromSlice = function(e, t) {
                            for (var i = 0, n = 0, r = 0; e.bytesAvailable > t; ) {
                                var s = o.readTYPE_UINT32(e);
                                switch (s >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: GetEquipmentBagRsp.retInfo cannot be set twice.");
                                        ++i,
                                            this.retInfo = new f,
                                            o.readTYPE_MESSAGE(e, this.retInfo);
                                        break;
                                    case 2:
                                        if (0 != n)
                                            throw new Error("Bad data format: GetEquipmentBagRsp.equipmentCount cannot be set twice.");
                                        ++n,
                                            this.equipmentCount = o.readTYPE_UINT32(e);
                                        break;
                                    case 3:
                                        if (0 != r)
                                            throw new Error("Bad data format: GetEquipmentBagRsp.equipmentInfo cannot be set twice.");
                                        ++r,
                                            this.equipmentInfo = o.readTYPE_BYTES(e);
                                        break;
                                    case 4:
                                        this.equipmentPosInfo.push(o.readTYPE_BYTES(e));
                                        break;
                                    default:
                                        o.skip(e, 7 & s)
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
                        }]),
                        n
                }(r));
                n._RF.pop()
            }
        }
    }
));
