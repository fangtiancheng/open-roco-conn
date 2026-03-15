System.register("chunks:///_virtual/SpiritInfo.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseMessage.ts", "./WriteUtils.ts", "./ReadUtils.ts", "./WireType.ts"], (function(e) {
        var t, i, s, n, r, a, h;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    s = e.cclegacy
                }
                , function(e) {
                    n = e.BaseMessage
                }
                , function(e) {
                    r = e.WriteUtils
                }
                , function(e) {
                    a = e.ReadUtils
                }
                , function(e) {
                    h = e.WireType
                }
            ],
            execute: function() {
                s._RF.push({}, "cd0f6RPTn5JfbG9srG6LyAq", "SpiritInfo", void 0);
                e("SpiritInfo", function(e) {
                    function s() {
                        for (var t, i = arguments.length, s = new Array(i), n = 0; n < i; n++)
                            s[n] = arguments[n];
                        return (t = e.call.apply(e, [this].concat(s)) || this).pet_idfield = void 0,
                            t.hasField0 = 0,
                            t.pet_levelfield = void 0,
                            t.equipmentId = [],
                            t.now_hpfield = void 0,
                            t.full_hpfield = void 0,
                            t.skinfield = void 0,
                            t
                    }
                    t(s, e);
                    var n = s.prototype;
                    return n.removePetId = function() {
                        this.hasField0 &= 4294967294,
                            this.pet_idfield = 0
                    }
                        ,
                        n.removePetLevel = function() {
                            this.hasField0 &= 4294967293,
                                this.pet_levelfield = 0
                        }
                        ,
                        n.removeNowHp = function() {
                            this.hasField0 &= 4294967291,
                                this.now_hpfield = 0
                        }
                        ,
                        n.removeFullHp = function() {
                            this.hasField0 &= 4294967287,
                                this.full_hpfield = 0
                        }
                        ,
                        n.removeSkin = function() {
                            this.hasField0 &= 4294967279,
                                this.skinfield = 0
                        }
                        ,
                        n.writeToBuffer = function(e) {
                            this.hasPetId && (r.writeTag(e, h.VARINT, 1),
                                r.writeTYPE_UINT32(e, this.pet_idfield)),
                            this.hasPetLevel && (r.writeTag(e, h.VARINT, 2),
                                r.writeTYPE_UINT32(e, this.pet_levelfield));
                            for (var t = 0; t < this.equipmentId.length; ++t)
                                r.writeTag(e, h.VARINT, 3),
                                    r.writeTYPE_UINT32(e, this.equipmentId[t]);
                            this.hasNowHp && (r.writeTag(e, h.VARINT, 4),
                                r.writeTYPE_UINT32(e, this.now_hpfield)),
                            this.hasFullHp && (r.writeTag(e, h.VARINT, 5),
                                r.writeTYPE_UINT32(e, this.full_hpfield)),
                            this.hasSkin && (r.writeTag(e, h.VARINT, 6),
                                r.writeTYPE_UINT32(e, this.skinfield))
                        }
                        ,
                        n.readFromSlice = function(e, t) {
                            for (var i = 0, s = 0, n = 0, r = 0, l = 0; e.bytesAvailable > t; ) {
                                var o = a.readTYPE_UINT32(e);
                                switch (o >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: SpiritInfo.petId cannot be set twice.");
                                        ++i,
                                            this.petId = a.readTYPE_UINT32(e);
                                        break;
                                    case 2:
                                        if (0 != s)
                                            throw new Error("Bad data format: SpiritInfo.petLevel cannot be set twice.");
                                        ++s,
                                            this.petLevel = a.readTYPE_UINT32(e);
                                        break;
                                    case 3:
                                        if ((7 & o) == h.LENGTH_DELIMITED) {
                                            a.readPackedRepeated(e, a.readTYPE_UINT32, this.equipmentId);
                                            break
                                        }
                                        this.equipmentId.push(a.readTYPE_UINT32(e));
                                        break;
                                    case 4:
                                        if (0 != n)
                                            throw new Error("Bad data format: SpiritInfo.nowHp cannot be set twice.");
                                        ++n,
                                            this.nowHp = a.readTYPE_UINT32(e);
                                        break;
                                    case 5:
                                        if (0 != r)
                                            throw new Error("Bad data format: SpiritInfo.fullHp cannot be set twice.");
                                        ++r,
                                            this.fullHp = a.readTYPE_UINT32(e);
                                        break;
                                    case 6:
                                        if (0 != l)
                                            throw new Error("Bad data format: SpiritInfo.skin cannot be set twice.");
                                        ++l,
                                            this.skin = a.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        a.skip(e, 7 & o)
                                }
                            }
                        }
                        ,
                        i(s, [{
                            key: "hasPetId",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "petId",
                            get: function() {
                                return this.hasPetId ? this.pet_idfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.pet_idfield = e
                            }
                        }, {
                            key: "hasPetLevel",
                            get: function() {
                                return 0 != (2 & this.hasField0)
                            }
                        }, {
                            key: "petLevel",
                            get: function() {
                                return this.hasPetLevel ? this.pet_levelfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 2,
                                    this.pet_levelfield = e
                            }
                        }, {
                            key: "hasNowHp",
                            get: function() {
                                return 0 != (4 & this.hasField0)
                            }
                        }, {
                            key: "nowHp",
                            get: function() {
                                return this.hasNowHp ? this.now_hpfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 4,
                                    this.now_hpfield = e
                            }
                        }, {
                            key: "hasFullHp",
                            get: function() {
                                return 0 != (8 & this.hasField0)
                            }
                        }, {
                            key: "fullHp",
                            get: function() {
                                return this.hasFullHp ? this.full_hpfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 8,
                                    this.full_hpfield = e
                            }
                        }, {
                            key: "hasSkin",
                            get: function() {
                                return 0 != (16 & this.hasField0)
                            }
                        }, {
                            key: "skin",
                            get: function() {
                                return this.hasSkin ? this.skinfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 16,
                                    this.skinfield = e
                            }
                        }]),
                        s
                }(n));
                s._RF.pop()
            }
        }
    }
));
