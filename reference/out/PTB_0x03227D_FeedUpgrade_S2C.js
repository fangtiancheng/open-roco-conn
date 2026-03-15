System.register("chunks:///_virtual/PTB_0x03227D_FeedUpgrade_S2C.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./IOError.ts", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts", "./ZoneGuardianPet_RetInfo.ts"], (function(e) {
        var t, i, a, n, r, d, s, l, o;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    a = e.cclegacy
                }
                , function(e) {
                    n = e.IOError
                }
                , function(e) {
                    r = e.ReadUtils
                }
                , function(e) {
                    d = e.BaseMessage
                }
                , function(e) {
                    s = e.WireType
                }
                , function(e) {
                    l = e.WriteUtils
                }
                , function(e) {
                    o = e.ZoneGuardianPet_RetInfo
                }
            ],
            execute: function() {
                a._RF.push({}, "8ef3cq+iUhK56WT5Czy9VcQ", "PTB_0x03227D_FeedUpgrade_S2C", void 0);
                e("PTB_0x03227D_FeedUpgrade_S2C", function(e) {
                    function a() {
                        for (var t, i = arguments.length, a = new Array(i), n = 0; n < i; n++)
                            a[n] = arguments[n];
                        return (t = e.call.apply(e, [this].concat(a)) || this).ret_codefield = void 0,
                            t.guardian_pet_idfield = void 0,
                            t.hasField0 = 0,
                            t.guardian_pet_levelfield = void 0,
                            t.now_experiencefield = void 0,
                            t.next_level_need_experiencefield = void 0,
                            t.panacea_numfield = void 0,
                            t.real_numfield = void 0,
                            t.real_add_expfield = void 0,
                            t
                    }
                    t(a, e);
                    var d = a.prototype;
                    return d.removeRetCode = function() {
                        this.ret_codefield = null
                    }
                        ,
                        d.removeGuardianPetId = function() {
                            this.hasField0 &= 4294967294,
                                this.guardian_pet_idfield = 0
                        }
                        ,
                        d.removeGuardianPetLevel = function() {
                            this.hasField0 &= 4294967293,
                                this.guardian_pet_levelfield = 0
                        }
                        ,
                        d.removeNowExperience = function() {
                            this.hasField0 &= 4294967291,
                                this.now_experiencefield = 0
                        }
                        ,
                        d.removeNextLevelNeedExperience = function() {
                            this.hasField0 &= 4294967287,
                                this.next_level_need_experiencefield = 0
                        }
                        ,
                        d.removePanaceaNum = function() {
                            this.hasField0 &= 4294967279,
                                this.panacea_numfield = 0
                        }
                        ,
                        d.removeRealNum = function() {
                            this.hasField0 &= 4294967263,
                                this.real_numfield = 0
                        }
                        ,
                        d.removeRealAddExp = function() {
                            this.hasField0 &= 4294967231,
                                this.real_add_expfield = 0
                        }
                        ,
                        d.writeToBuffer = function(e) {
                            this.hasRetCode && (l.writeTag(e, s.LENGTH_DELIMITED, 1),
                                l.writeTYPE_MESSAGE(e, this.ret_codefield)),
                            this.hasGuardianPetId && (l.writeTag(e, s.VARINT, 2),
                                l.writeTYPE_UINT32(e, this.guardian_pet_idfield)),
                            this.hasGuardianPetLevel && (l.writeTag(e, s.VARINT, 3),
                                l.writeTYPE_UINT32(e, this.guardian_pet_levelfield)),
                            this.hasNowExperience && (l.writeTag(e, s.VARINT, 4),
                                l.writeTYPE_UINT32(e, this.now_experiencefield)),
                            this.hasNextLevelNeedExperience && (l.writeTag(e, s.VARINT, 5),
                                l.writeTYPE_UINT32(e, this.next_level_need_experiencefield)),
                            this.hasPanaceaNum && (l.writeTag(e, s.VARINT, 6),
                                l.writeTYPE_UINT32(e, this.panacea_numfield)),
                            this.hasRealNum && (l.writeTag(e, s.VARINT, 7),
                                l.writeTYPE_UINT32(e, this.real_numfield)),
                            this.hasRealAddExp && (l.writeTag(e, s.VARINT, 8),
                                l.writeTYPE_UINT32(e, this.real_add_expfield))
                        }
                        ,
                        d.readFromSlice = function(e, t) {
                            for (var i = 0, a = 0, d = 0, s = 0, l = 0, h = 0, c = 0, _ = 0; e.bytesAvailable > t; ) {
                                var u = r.readTYPE_UINT32(e);
                                switch (u >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new n("Bad data format: PTB_0x03227D_FeedUpgrade_S2C.retCode cannot be set twice.");
                                        ++i,
                                            this.retCode = new o,
                                            r.readTYPE_MESSAGE(e, this.retCode);
                                        break;
                                    case 2:
                                        if (0 != a)
                                            throw new n("Bad data format: PTB_0x03227D_FeedUpgrade_S2C.guardianPetId cannot be set twice.");
                                        ++a,
                                            this.guardianPetId = r.readTYPE_UINT32(e);
                                        break;
                                    case 3:
                                        if (0 != d)
                                            throw new n("Bad data format: PTB_0x03227D_FeedUpgrade_S2C.guardianPetLevel cannot be set twice.");
                                        ++d,
                                            this.guardianPetLevel = r.readTYPE_UINT32(e);
                                        break;
                                    case 4:
                                        if (0 != s)
                                            throw new n("Bad data format: PTB_0x03227D_FeedUpgrade_S2C.nowExperience cannot be set twice.");
                                        ++s,
                                            this.nowExperience = r.readTYPE_UINT32(e);
                                        break;
                                    case 5:
                                        if (0 != l)
                                            throw new n("Bad data format: PTB_0x03227D_FeedUpgrade_S2C.nextLevelNeedExperience cannot be set twice.");
                                        ++l,
                                            this.nextLevelNeedExperience = r.readTYPE_UINT32(e);
                                        break;
                                    case 6:
                                        if (0 != h)
                                            throw new n("Bad data format: PTB_0x03227D_FeedUpgrade_S2C.panaceaNum cannot be set twice.");
                                        ++h,
                                            this.panaceaNum = r.readTYPE_UINT32(e);
                                        break;
                                    case 7:
                                        if (0 != c)
                                            throw new n("Bad data format: PTB_0x03227D_FeedUpgrade_S2C.realNum cannot be set twice.");
                                        ++c,
                                            this.realNum = r.readTYPE_UINT32(e);
                                        break;
                                    case 8:
                                        if (0 != _)
                                            throw new n("Bad data format: PTB_0x03227D_FeedUpgrade_S2C.realAddExp cannot be set twice.");
                                        ++_,
                                            this.realAddExp = r.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        r.skip(e, 7 & u)
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
                            key: "hasRealNum",
                            get: function() {
                                return 0 != (32 & this.hasField0)
                            }
                        }, {
                            key: "realNum",
                            get: function() {
                                return this.real_numfield
                            },
                            set: function(e) {
                                this.hasField0 |= 32,
                                    this.real_numfield = e
                            }
                        }, {
                            key: "hasRealAddExp",
                            get: function() {
                                return 0 != (64 & this.hasField0)
                            }
                        }, {
                            key: "realAddExp",
                            get: function() {
                                return this.real_add_expfield
                            },
                            set: function(e) {
                                this.hasField0 |= 64,
                                    this.real_add_expfield = e
                            }
                        }]),
                        a
                }(d));
                a._RF.pop()
            }
        }
    }
));
