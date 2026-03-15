System.register("chunks:///_virtual/PTB_0x03227B_QueryStatus1_S2C.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./IOError.ts", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts", "./ZoneGuardianPet_RetInfo.ts"], (function(e) {
        var t, i, a, r, n, o, s, d, u;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    a = e.cclegacy
                }
                , function(e) {
                    r = e.IOError
                }
                , function(e) {
                    n = e.ReadUtils
                }
                , function(e) {
                    o = e.BaseMessage
                }
                , function(e) {
                    s = e.WireType
                }
                , function(e) {
                    d = e.WriteUtils
                }
                , function(e) {
                    u = e.ZoneGuardianPet_RetInfo
                }
            ],
            execute: function() {
                a._RF.push({}, "b4e4d4NF8hMV6ygLpVMfHqj", "PTB_0x03227B_QueryStatus1_S2C", void 0);
                e("PTB_0x03227B_QueryStatus1_S2C", function(e) {
                    function a() {
                        for (var t, i = arguments.length, a = new Array(i), r = 0; r < i; r++)
                            a[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(a)) || this).ret_codefield = void 0,
                            t.guardian_pet_idfield = void 0,
                            t.hasField0 = 0,
                            t.guardian_pet_levelfield = void 0,
                            t.roco_namefield = void 0,
                            t
                    }
                    t(a, e);
                    var o = a.prototype;
                    return o.removeRetCode = function() {
                        this.ret_codefield = null
                    }
                        ,
                        o.removeGuardianPetId = function() {
                            this.hasField0 &= 4294967294,
                                this.guardian_pet_idfield = 0
                        }
                        ,
                        o.removeGuardianPetLevel = function() {
                            this.hasField0 &= 4294967293,
                                this.guardian_pet_levelfield = 0
                        }
                        ,
                        o.removeRocoName = function() {
                            this.roco_namefield = null
                        }
                        ,
                        o.writeToBuffer = function(e) {
                            this.hasRetCode && (d.writeTag(e, s.LENGTH_DELIMITED, 1),
                                d.writeTYPE_MESSAGE(e, this.ret_codefield)),
                            this.hasGuardianPetId && (d.writeTag(e, s.VARINT, 2),
                                d.writeTYPE_UINT32(e, this.guardian_pet_idfield)),
                            this.hasGuardianPetLevel && (d.writeTag(e, s.VARINT, 3),
                                d.writeTYPE_UINT32(e, this.guardian_pet_levelfield)),
                            this.hasRocoName && (d.writeTag(e, s.LENGTH_DELIMITED, 4),
                                d.writeTYPE_STRING(e, this.roco_namefield))
                        }
                        ,
                        o.readFromSlice = function(e, t) {
                            for (var i = 0, a = 0, o = 0, s = 0; e.bytesAvailable > t; ) {
                                var d = n.readTYPE_UINT32(e);
                                switch (d >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new r("Bad data format: PTB_0x03227B_QueryStatus1_S2C.retCode cannot be set twice.");
                                        ++i,
                                            this.retCode = new u,
                                            n.readTYPE_MESSAGE(e, this.retCode);
                                        break;
                                    case 2:
                                        if (0 != a)
                                            throw new r("Bad data format: PTB_0x03227B_QueryStatus1_S2C.guardianPetId cannot be set twice.");
                                        ++a,
                                            this.guardianPetId = n.readTYPE_UINT32(e);
                                        break;
                                    case 3:
                                        if (0 != o)
                                            throw new r("Bad data format: PTB_0x03227B_QueryStatus1_S2C.guardianPetLevel cannot be set twice.");
                                        ++o,
                                            this.guardianPetLevel = n.readTYPE_UINT32(e);
                                        break;
                                    case 4:
                                        if (0 != s)
                                            throw new r("Bad data format: PTB_0x03227B_QueryStatus1_S2C.rocoName cannot be set twice.");
                                        ++s,
                                            this.rocoName = n.readTYPE_STRING(e);
                                        break;
                                    default:
                                        n.skip(e, 7 & d)
                                }
                            }
                        }
                        ,
                        i(a, [{
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
                            key: "hasRocoName",
                            get: function() {
                                return null != this.roco_namefield
                            }
                        }, {
                            key: "rocoName",
                            get: function() {
                                return this.hasRocoName ? this.roco_namefield : ""
                            },
                            set: function(e) {
                                this.roco_namefield = e
                            }
                        }]),
                        a
                }(o));
                a._RF.pop()
            }
        }
    }
));
