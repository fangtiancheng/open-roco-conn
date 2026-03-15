System.register("chunks:///_virtual/PTB_0x03227A_QueryStatus0_S2C.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./IOError.ts", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts", "./ZoneGuardianPet_RetInfo.ts"], (function(e) {
        var t, a, i, n, r, s, d, o, l;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    a = e.createClass
            }
                , function(e) {
                    i = e.cclegacy
                }
                , function(e) {
                    n = e.IOError
                }
                , function(e) {
                    r = e.ReadUtils
                }
                , function(e) {
                    s = e.BaseMessage
                }
                , function(e) {
                    d = e.WireType
                }
                , function(e) {
                    o = e.WriteUtils
                }
                , function(e) {
                    l = e.ZoneGuardianPet_RetInfo
                }
            ],
            execute: function() {
                i._RF.push({}, "3f9828j+T5FbZiADmpEU2rO", "PTB_0x03227A_QueryStatus0_S2C", void 0);
                e("PTB_0x03227A_QueryStatus0_S2C", function(e) {
                    function i() {
                        for (var t, a = arguments.length, i = new Array(a), n = 0; n < a; n++)
                            i[n] = arguments[n];
                        return (t = e.call.apply(e, [this].concat(i)) || this).ret_codefield = void 0,
                            t.guardian_pet_idfield = void 0,
                            t.hasField0 = 0,
                            t.guardian_pet_levelfield = void 0,
                            t.now_experiencefield = void 0,
                            t.next_level_need_experiencefield = void 0,
                            t.panacea_numfield = void 0,
                            t.flow_flagfield = void 0,
                            t.day_gift_flagfield = void 0,
                            t.get_panacea_count_each_dayfield = void 0,
                            t
                    }
                    t(i, e);
                    var s = i.prototype;
                    return s.removeRetCode = function() {
                        this.ret_codefield = null
                    }
                        ,
                        s.removeGuardianPetId = function() {
                            this.hasField0 &= 4294967294,
                                this.guardian_pet_idfield = 0
                        }
                        ,
                        s.removeGuardianPetLevel = function() {
                            this.hasField0 &= 4294967293,
                                this.guardian_pet_levelfield = 0
                        }
                        ,
                        s.removeNowExperience = function() {
                            this.hasField0 &= 4294967291,
                                this.now_experiencefield = 0
                        }
                        ,
                        s.removeNextLevelNeedExperience = function() {
                            this.hasField0 &= 4294967287,
                                this.next_level_need_experiencefield = 0
                        }
                        ,
                        s.removePanaceaNum = function() {
                            this.hasField0 &= 4294967279,
                                this.panacea_numfield = 0
                        }
                        ,
                        s.removeFlowFlag = function() {
                            this.hasField0 &= 4294967263,
                                this.flow_flagfield = 0
                        }
                        ,
                        s.removeDayGiftFlag = function() {
                            this.hasField0 &= 4294967231,
                                this.day_gift_flagfield = 0
                        }
                        ,
                        s.removeGetPanaceaCountEachDay = function() {
                            this.hasField0 &= 4294967167,
                                this.get_panacea_count_each_dayfield = 0
                        }
                        ,
                        s.writeToBuffer = function(e) {
                            this.hasRetCode && (o.writeTag(e, d.LENGTH_DELIMITED, 1),
                                o.writeTYPE_MESSAGE(e, this.ret_codefield)),
                            this.hasGuardianPetId && (o.writeTag(e, d.VARINT, 2),
                                o.writeTYPE_UINT32(e, this.guardian_pet_idfield)),
                            this.hasGuardianPetLevel && (o.writeTag(e, d.VARINT, 3),
                                o.writeTYPE_UINT32(e, this.guardian_pet_levelfield)),
                            this.hasNowExperience && (o.writeTag(e, d.VARINT, 4),
                                o.writeTYPE_UINT32(e, this.now_experiencefield)),
                            this.hasNextLevelNeedExperience && (o.writeTag(e, d.VARINT, 5),
                                o.writeTYPE_UINT32(e, this.next_level_need_experiencefield)),
                            this.hasPanaceaNum && (o.writeTag(e, d.VARINT, 6),
                                o.writeTYPE_UINT32(e, this.panacea_numfield)),
                            this.hasFlowFlag && (o.writeTag(e, d.VARINT, 7),
                                o.writeTYPE_UINT32(e, this.flow_flagfield)),
                            this.hasDayGiftFlag && (o.writeTag(e, d.VARINT, 8),
                                o.writeTYPE_UINT32(e, this.day_gift_flagfield)),
                            this.hasGetPanaceaCountEachDay && (o.writeTag(e, d.VARINT, 9),
                                o.writeTYPE_UINT32(e, this.get_panacea_count_each_dayfield))
                        }
                        ,
                        s.readFromSlice = function(e, t) {
                            for (var a = 0, i = 0, s = 0, d = 0, o = 0, c = 0, f = 0, u = 0, h = 0; e.bytesAvailable > t; ) {
                                var _ = r.readTYPE_UINT32(e);
                                switch (_ >>> 3) {
                                    case 1:
                                        if (0 != a)
                                            throw new n("Bad data format: PTB_0x03227A_QueryStatus0_S2C.retCode cannot be set twice.");
                                        ++a,
                                            this.retCode = new l,
                                            r.readTYPE_MESSAGE(e, this.retCode);
                                        break;
                                    case 2:
                                        if (0 != i)
                                            throw new n("Bad data format: PTB_0x03227A_QueryStatus0_S2C.guardianPetId cannot be set twice.");
                                        ++i,
                                            this.guardianPetId = r.readTYPE_UINT32(e);
                                        break;
                                    case 3:
                                        if (0 != s)
                                            throw new n("Bad data format: PTB_0x03227A_QueryStatus0_S2C.guardianPetLevel cannot be set twice.");
                                        ++s,
                                            this.guardianPetLevel = r.readTYPE_UINT32(e);
                                        break;
                                    case 4:
                                        if (0 != d)
                                            throw new n("Bad data format: PTB_0x03227A_QueryStatus0_S2C.nowExperience cannot be set twice.");
                                        ++d,
                                            this.nowExperience = r.readTYPE_UINT32(e);
                                        break;
                                    case 5:
                                        if (0 != o)
                                            throw new n("Bad data format: PTB_0x03227A_QueryStatus0_S2C.nextLevelNeedExperience cannot be set twice.");
                                        ++o,
                                            this.nextLevelNeedExperience = r.readTYPE_UINT32(e);
                                        break;
                                    case 6:
                                        if (0 != c)
                                            throw new n("Bad data format: PTB_0x03227A_QueryStatus0_S2C.panaceaNum cannot be set twice.");
                                        ++c,
                                            this.panaceaNum = r.readTYPE_UINT32(e);
                                        break;
                                    case 7:
                                        if (0 != f)
                                            throw new n("Bad data format: PTB_0x03227A_QueryStatus0_S2C.flowFlag cannot be set twice.");
                                        ++f,
                                            this.flowFlag = r.readTYPE_UINT32(e);
                                        break;
                                    case 8:
                                        if (0 != u)
                                            throw new n("Bad data format: PTB_0x03227A_QueryStatus0_S2C.dayGiftFlag cannot be set twice.");
                                        ++u,
                                            this.dayGiftFlag = r.readTYPE_UINT32(e);
                                        break;
                                    case 9:
                                        if (0 != h)
                                            throw new n("Bad data format: PTB_0x03227A_QueryStatus0_S2C.getPanaceaCountEachDay cannot be set twice.");
                                        ++h,
                                            this.getPanaceaCountEachDay = r.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        r.skip(e, 7 & _)
                                }
                            }
                        }
                        ,
                        a(i, [{
                            key: "hasRetCode",
                            get: function() {
                                return null != this.ret_codefield
                            }
                        }, {
                            key: "retCode",
                            get: function() {
                                return this.ret_codefield
                            },
                            set: function(e) {
                                this.ret_codefield = e
                            }
                        }, {
                            key: "hasGuardianPetId",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "guardianPetId",
                            get: function() {
                                return this.guardian_pet_idfield
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.guardian_pet_idfield = e
                            }
                        }, {
                            key: "hasGuardianPetLevel",
                            get: function() {
                                return 0 != (2 & this.hasField0)
                            }
                        }, {
                            key: "guardianPetLevel",
                            get: function() {
                                return this.guardian_pet_levelfield
                            },
                            set: function(e) {
                                this.hasField0 |= 2,
                                    this.guardian_pet_levelfield = e
                            }
                        }, {
                            key: "hasNowExperience",
                            get: function() {
                                return 0 != (4 & this.hasField0)
                            }
                        }, {
                            key: "nowExperience",
                            get: function() {
                                return this.now_experiencefield
                            },
                            set: function(e) {
                                this.hasField0 |= 4,
                                    this.now_experiencefield = e
                            }
                        }, {
                            key: "hasNextLevelNeedExperience",
                            get: function() {
                                return 0 != (8 & this.hasField0)
                            }
                        }, {
                            key: "nextLevelNeedExperience",
                            get: function() {
                                return this.next_level_need_experiencefield
                            },
                            set: function(e) {
                                this.hasField0 |= 8,
                                    this.next_level_need_experiencefield = e
                            }
                        }, {
                            key: "hasPanaceaNum",
                            get: function() {
                                return 0 != (16 & this.hasField0)
                            }
                        }, {
                            key: "panaceaNum",
                            get: function() {
                                return this.panacea_numfield
                            },
                            set: function(e) {
                                this.hasField0 |= 16,
                                    this.panacea_numfield = e
                            }
                        }, {
                            key: "hasFlowFlag",
                            get: function() {
                                return 0 != (32 & this.hasField0)
                            }
                        }, {
                            key: "flowFlag",
                            get: function() {
                                return this.flow_flagfield
                            },
                            set: function(e) {
                                this.hasField0 |= 32,
                                    this.flow_flagfield = e
                            }
                        }, {
                            key: "hasDayGiftFlag",
                            get: function() {
                                return 0 != (64 & this.hasField0)
                            }
                        }, {
                            key: "dayGiftFlag",
                            get: function() {
                                return this.day_gift_flagfield
                            },
                            set: function(e) {
                                this.hasField0 |= 64,
                                    this.day_gift_flagfield = e
                            }
                        }, {
                            key: "hasGetPanaceaCountEachDay",
                            get: function() {
                                return 0 != (128 & this.hasField0)
                            }
                        }, {
                            key: "getPanaceaCountEachDay",
                            get: function() {
                                return this.get_panacea_count_each_dayfield
                            },
                            set: function(e) {
                                this.hasField0 |= 128,
                                    this.get_panacea_count_each_dayfield = e
                            }
                        }]),
                        i
                }(s));
                i._RF.pop()
            }
        }
    }
));
