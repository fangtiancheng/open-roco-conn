System.register("chunks:///_virtual/FixLineupProtoNewEquipInfo.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts"], (function(e) {
        var i, t, a, s, n, r, h;
        return {
            setters: [function(e) {
                i = e.inheritsLoose,
                    t = e.createClass
            }
                , function(e) {
                    a = e.cclegacy
                }
                , function(e) {
                    s = e.ReadUtils
                }
                , function(e) {
                    n = e.BaseMessage
                }
                , function(e) {
                    r = e.WireType
                }
                , function(e) {
                    h = e.WriteUtils
                }
            ],
            execute: function() {
                a._RF.push({}, "67072KRzONKhbrPByyWjcEv", "FixLineupProtoNewEquipInfo", void 0);
                e("FixLineupProtoNewEquipInfo", function(e) {
                    function a() {
                        for (var i, t = arguments.length, a = new Array(t), s = 0; s < t; s++)
                            a[s] = arguments[s];
                        return (i = e.call.apply(e, [this].concat(a)) || this).awake_afield = void 0,
                            i.hasField0 = 0,
                            i.awake_bfield = void 0,
                            i.awake_cfield = void 0,
                            i.awake_dfield = void 0,
                            i.equip_afield = void 0,
                            i.equip_bfield = void 0,
                            i.equip_cfield = void 0,
                            i.equip_dfield = void 0,
                            i.equip_efield = void 0,
                            i
                    }
                    i(a, e);
                    var n = a.prototype;
                    return n.removeAwakeA = function() {
                        this.hasField0 &= 4294967294,
                            this.awake_afield = 0
                    }
                        ,
                        n.removeAwakeB = function() {
                            this.hasField0 &= 4294967293,
                                this.awake_bfield = 0
                        }
                        ,
                        n.removeAwakeC = function() {
                            this.hasField0 &= 4294967291,
                                this.awake_cfield = 0
                        }
                        ,
                        n.removeAwakeD = function() {
                            this.hasField0 &= 4294967287,
                                this.awake_dfield = 0
                        }
                        ,
                        n.removeEquipA = function() {
                            this.hasField0 &= 4294967279,
                                this.equip_afield = 0
                        }
                        ,
                        n.removeEquipB = function() {
                            this.hasField0 &= 4294967263,
                                this.equip_bfield = 0
                        }
                        ,
                        n.removeEquipC = function() {
                            this.hasField0 &= 4294967231,
                                this.equip_cfield = 0
                        }
                        ,
                        n.removeEquipD = function() {
                            this.hasField0 &= 4294967167,
                                this.equip_dfield = 0
                        }
                        ,
                        n.removeEquipE = function() {
                            this.hasField0 &= 4294967039,
                                this.equip_efield = 0
                        }
                        ,
                        n.writeToBuffer = function(e) {
                            this.hasAwakeA && (h.writeTag(e, r.VARINT, 1),
                                h.writeTYPE_UINT32(e, this.awake_afield)),
                            this.hasAwakeB && (h.writeTag(e, r.VARINT, 2),
                                h.writeTYPE_UINT32(e, this.awake_bfield)),
                            this.hasAwakeC && (h.writeTag(e, r.VARINT, 3),
                                h.writeTYPE_UINT32(e, this.awake_cfield)),
                            this.hasAwakeD && (h.writeTag(e, r.VARINT, 4),
                                h.writeTYPE_UINT32(e, this.awake_dfield)),
                            this.hasEquipA && (h.writeTag(e, r.VARINT, 5),
                                h.writeTYPE_UINT32(e, this.equip_afield)),
                            this.hasEquipB && (h.writeTag(e, r.VARINT, 6),
                                h.writeTYPE_UINT32(e, this.equip_bfield)),
                            this.hasEquipC && (h.writeTag(e, r.VARINT, 7),
                                h.writeTYPE_UINT32(e, this.equip_cfield)),
                            this.hasEquipD && (h.writeTag(e, r.VARINT, 8),
                                h.writeTYPE_UINT32(e, this.equip_dfield)),
                            this.hasEquipE && (h.writeTag(e, r.VARINT, 9),
                                h.writeTYPE_UINT32(e, this.equip_efield))
                        }
                        ,
                        n.readFromSlice = function(e, i) {
                            for (var t = 0, a = 0, n = 0, r = 0, h = 0, u = 0, o = 0, f = 0, d = 0; e.bytesAvailable > i; ) {
                                var w = s.readTYPE_UINT32(e);
                                switch (w >>> 3) {
                                    case 1:
                                        if (0 != t)
                                            throw new Error("Bad data format: FixLineupProtoNewEquipInfo.awakeA cannot be set twice.");
                                        ++t,
                                            this.awakeA = s.readTYPE_UINT32(e);
                                        break;
                                    case 2:
                                        if (0 != a)
                                            throw new Error("Bad data format: FixLineupProtoNewEquipInfo.awakeB cannot be set twice.");
                                        ++a,
                                            this.awakeB = s.readTYPE_UINT32(e);
                                        break;
                                    case 3:
                                        if (0 != n)
                                            throw new Error("Bad data format: FixLineupProtoNewEquipInfo.awakeC cannot be set twice.");
                                        ++n,
                                            this.awakeC = s.readTYPE_UINT32(e);
                                        break;
                                    case 4:
                                        if (0 != r)
                                            throw new Error("Bad data format: FixLineupProtoNewEquipInfo.awakeD cannot be set twice.");
                                        ++r,
                                            this.awakeD = s.readTYPE_UINT32(e);
                                        break;
                                    case 5:
                                        if (0 != h)
                                            throw new Error("Bad data format: FixLineupProtoNewEquipInfo.equipA cannot be set twice.");
                                        ++h,
                                            this.equipA = s.readTYPE_UINT32(e);
                                        break;
                                    case 6:
                                        if (0 != u)
                                            throw new Error("Bad data format: FixLineupProtoNewEquipInfo.equipB cannot be set twice.");
                                        ++u,
                                            this.equipB = s.readTYPE_UINT32(e);
                                        break;
                                    case 7:
                                        if (0 != o)
                                            throw new Error("Bad data format: FixLineupProtoNewEquipInfo.equipC cannot be set twice.");
                                        ++o,
                                            this.equipC = s.readTYPE_UINT32(e);
                                        break;
                                    case 8:
                                        if (0 != f)
                                            throw new Error("Bad data format: FixLineupProtoNewEquipInfo.equipD cannot be set twice.");
                                        ++f,
                                            this.equipD = s.readTYPE_UINT32(e);
                                        break;
                                    case 9:
                                        if (0 != d)
                                            throw new Error("Bad data format: FixLineupProtoNewEquipInfo.equipE cannot be set twice.");
                                        ++d,
                                            this.equipE = s.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        s.skip(e, 7 & w)
                                }
                            }
                        }
                        ,
                        t(a, [{
                            key: "hasAwakeA",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "awakeA",
                            get: function() {
                                return this.hasAwakeA ? this.awake_afield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.awake_afield = e
                            }
                        }, {
                            key: "hasAwakeB",
                            get: function() {
                                return 0 != (2 & this.hasField0)
                            }
                        }, {
                            key: "awakeB",
                            get: function() {
                                return this.hasAwakeB ? this.awake_bfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 2,
                                    this.awake_bfield = e
                            }
                        }, {
                            key: "hasAwakeC",
                            get: function() {
                                return 0 != (4 & this.hasField0)
                            }
                        }, {
                            key: "awakeC",
                            get: function() {
                                return this.hasAwakeC ? this.awake_cfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 4,
                                    this.awake_cfield = e
                            }
                        }, {
                            key: "hasAwakeD",
                            get: function() {
                                return 0 != (8 & this.hasField0)
                            }
                        }, {
                            key: "awakeD",
                            get: function() {
                                return this.hasAwakeD ? this.awake_dfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 8,
                                    this.awake_dfield = e
                            }
                        }, {
                            key: "hasEquipA",
                            get: function() {
                                return 0 != (16 & this.hasField0)
                            }
                        }, {
                            key: "equipA",
                            get: function() {
                                return this.hasEquipA ? this.equip_afield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 16,
                                    this.equip_afield = e
                            }
                        }, {
                            key: "hasEquipB",
                            get: function() {
                                return 0 != (32 & this.hasField0)
                            }
                        }, {
                            key: "equipB",
                            get: function() {
                                return this.hasEquipB ? this.equip_bfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 32,
                                    this.equip_bfield = e
                            }
                        }, {
                            key: "hasEquipC",
                            get: function() {
                                return 0 != (64 & this.hasField0)
                            }
                        }, {
                            key: "equipC",
                            get: function() {
                                return this.hasEquipC ? this.equip_cfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 64,
                                    this.equip_cfield = e
                            }
                        }, {
                            key: "hasEquipD",
                            get: function() {
                                return 0 != (128 & this.hasField0)
                            }
                        }, {
                            key: "equipD",
                            get: function() {
                                return this.hasEquipD ? this.equip_dfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 128,
                                    this.equip_dfield = e
                            }
                        }, {
                            key: "hasEquipE",
                            get: function() {
                                return 0 != (256 & this.hasField0)
                            }
                        }, {
                            key: "equipE",
                            get: function() {
                                return this.hasEquipE ? this.equip_efield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 256,
                                    this.equip_efield = e
                            }
                        }]),
                        a
                }(n));
                a._RF.pop()
            }
        }
    }
));
