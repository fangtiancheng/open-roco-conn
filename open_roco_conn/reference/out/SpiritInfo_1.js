System.register("chunks:///_virtual/SpiritInfo2.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts"], (function(t) {
        var i, e, s, r, a, n, o;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    s = t.cclegacy
                }
                , function(t) {
                    r = t.ReadUtils
                }
                , function(t) {
                    a = t.BaseMessage
                }
                , function(t) {
                    n = t.WireType
                }
                , function(t) {
                    o = t.WriteUtils
                }
            ],
            execute: function() {
                s._RF.push({}, "6c6941hwShNTZ+2ekQqKuNV", "SpiritInfo", void 0);
                t("PTB_0x0B0512_GetStorageList_PUSH_SpiritInfo", function(t) {
                    function s() {
                        for (var i, e = arguments.length, s = new Array(e), r = 0; r < e; r++)
                            s[r] = arguments[r];
                        return (i = t.call.apply(t, [this].concat(s)) || this).spirit_idfield = void 0,
                            i.hasField0 = 0,
                            i.catch_timefield = void 0,
                            i.storage_timefield = void 0,
                            i.sexfield = void 0,
                            i
                    }
                    i(s, t);
                    var a = s.prototype;
                    return a.removeSpiritId = function() {
                        this.hasField0 &= 4294967294,
                            this.spirit_idfield = 0
                    }
                        ,
                        a.removeCatchTime = function() {
                            this.hasField0 &= 4294967293,
                                this.catch_timefield = 0
                        }
                        ,
                        a.removeStorageTime = function() {
                            this.hasField0 &= 4294967291,
                                this.storage_timefield = 0
                        }
                        ,
                        a.removeSex = function() {
                            this.hasField0 &= 4294967287,
                                this.sexfield = 0
                        }
                        ,
                        a.writeToBuffer = function(t) {
                            this.hasSpiritId && (o.writeTag(t, n.VARINT, 1),
                                o.writeTYPE_UINT32(t, this.spirit_idfield)),
                            this.hasCatchTime && (o.writeTag(t, n.VARINT, 2),
                                o.writeTYPE_UINT32(t, this.catch_timefield)),
                            this.hasStorageTime && (o.writeTag(t, n.VARINT, 3),
                                o.writeTYPE_UINT32(t, this.storage_timefield)),
                            this.hasSex && (o.writeTag(t, n.VARINT, 4),
                                o.writeTYPE_UINT32(t, this.sexfield))
                        }
                        ,
                        a.readFromSlice = function(t, i) {
                            for (var e = 0, s = 0, a = 0, n = 0; t.bytesAvailable > i; ) {
                                var o = r.readTYPE_UINT32(t);
                                switch (o >>> 3) {
                                    case 1:
                                        if (0 != e)
                                            throw new Error("Bad data format: PTB_0x0B0512_GetStorageList_PUSH_SpiritInfo.spiritId cannot be set twice.");
                                        ++e,
                                            this.spiritId = r.readTYPE_UINT32(t);
                                        break;
                                    case 2:
                                        if (0 != s)
                                            throw new Error("Bad data format: PTB_0x0B0512_GetStorageList_PUSH_SpiritInfo.catchTime cannot be set twice.");
                                        ++s,
                                            this.catchTime = r.readTYPE_UINT32(t);
                                        break;
                                    case 3:
                                        if (0 != a)
                                            throw new Error("Bad data format: PTB_0x0B0512_GetStorageList_PUSH_SpiritInfo.storageTime cannot be set twice.");
                                        ++a,
                                            this.storageTime = r.readTYPE_UINT32(t);
                                        break;
                                    case 4:
                                        if (0 != n)
                                            throw new Error("Bad data format: PTB_0x0B0512_GetStorageList_PUSH_SpiritInfo.sex cannot be set twice.");
                                        ++n,
                                            this.sex = r.readTYPE_UINT32(t);
                                        break;
                                    default:
                                        r.skip(t, 7 & o)
                                }
                            }
                        }
                        ,
                        e(s, [{
                            key: "hasSpiritId",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "spiritId",
                            get: function() {
                                return this.spirit_idfield
                            },
                            set: function(t) {
                                this.hasField0 |= 1,
                                    this.spirit_idfield = t
                            }
                        }, {
                            key: "hasCatchTime",
                            get: function() {
                                return 0 != (2 & this.hasField0)
                            }
                        }, {
                            key: "catchTime",
                            get: function() {
                                return this.catch_timefield
                            },
                            set: function(t) {
                                this.hasField0 |= 2,
                                    this.catch_timefield = t
                            }
                        }, {
                            key: "hasStorageTime",
                            get: function() {
                                return 0 != (4 & this.hasField0)
                            }
                        }, {
                            key: "storageTime",
                            get: function() {
                                return this.storage_timefield
                            },
                            set: function(t) {
                                this.hasField0 |= 4,
                                    this.storage_timefield = t
                            }
                        }, {
                            key: "hasSex",
                            get: function() {
                                return 0 != (8 & this.hasField0)
                            }
                        }, {
                            key: "sex",
                            get: function() {
                                return this.sexfield
                            },
                            set: function(t) {
                                this.hasField0 |= 8,
                                    this.sexfield = t
                            }
                        }]),
                        s
                }(a));
                s._RF.pop()
            }
        }
    }
));
