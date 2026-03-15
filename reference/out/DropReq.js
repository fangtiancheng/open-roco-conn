System.register("chunks:///_virtual/DropReq.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts"], (function(i) {
        var t, e, s, r, a, n, h;
        return {
            setters: [function(i) {
                t = i.inheritsLoose,
                    e = i.createClass
            }
                , function(i) {
                    s = i.cclegacy
                }
                , function(i) {
                    r = i.ReadUtils
                }
                , function(i) {
                    a = i.BaseMessage
                }
                , function(i) {
                    n = i.WireType
                }
                , function(i) {
                    h = i.WriteUtils
                }
            ],
            execute: function() {
                s._RF.push({}, "a26dcLlcERFN5h2euogKFpz", "DropReq", void 0);
                i("DropReq", function(i) {
                    function s() {
                        for (var t, e = arguments.length, s = new Array(e), r = 0; r < e; r++)
                            s[r] = arguments[r];
                        return (t = i.call.apply(i, [this].concat(s)) || this).idfield = void 0,
                            t.hasField0 = 0,
                            t.serial_numfield = void 0,
                            t.spirit_idfield = void 0,
                            t.spirit_catch_timefield = void 0,
                            t
                    }
                    t(s, i);
                    var a = s.prototype;
                    return a.removeId = function() {
                        this.hasField0 &= 4294967294,
                            this.idfield = 0
                    }
                        ,
                        a.removeSerialNum = function() {
                            this.hasField0 &= 4294967293,
                                this.serial_numfield = 0
                        }
                        ,
                        a.removeSpiritId = function() {
                            this.hasField0 &= 4294967291,
                                this.spirit_idfield = 0
                        }
                        ,
                        a.removeSpiritCatchTime = function() {
                            this.hasField0 &= 4294967287,
                                this.spirit_catch_timefield = 0
                        }
                        ,
                        a.writeToBuffer = function(i) {
                            this.hasId && (h.writeTag(i, n.VARINT, 1),
                                h.writeTYPE_UINT32(i, this.idfield)),
                            this.hasSerialNum && (h.writeTag(i, n.VARINT, 2),
                                h.writeTYPE_UINT32(i, this.serial_numfield)),
                            this.hasSpiritId && (h.writeTag(i, n.VARINT, 3),
                                h.writeTYPE_UINT32(i, this.spirit_idfield)),
                            this.hasSpiritCatchTime && (h.writeTag(i, n.VARINT, 4),
                                h.writeTYPE_UINT32(i, this.spirit_catch_timefield))
                        }
                        ,
                        a.readFromSlice = function(i, t) {
                            for (var e = 0, s = 0, a = 0, n = 0; i.bytesAvailable > t; ) {
                                var h = r.readTYPE_UINT32(i);
                                switch (h >>> 3) {
                                    case 1:
                                        if (0 != e)
                                            throw new Error("Bad data format: DropReq.id cannot be set twice.");
                                        ++e,
                                            this.id = r.readTYPE_UINT32(i);
                                        break;
                                    case 2:
                                        if (0 != s)
                                            throw new Error("Bad data format: DropReq.serialNum cannot be set twice.");
                                        ++s,
                                            this.serialNum = r.readTYPE_UINT32(i);
                                        break;
                                    case 3:
                                        if (0 != a)
                                            throw new Error("Bad data format: DropReq.spiritId cannot be set twice.");
                                        ++a,
                                            this.spiritId = r.readTYPE_UINT32(i);
                                        break;
                                    case 4:
                                        if (0 != n)
                                            throw new Error("Bad data format: DropReq.spiritCatchTime cannot be set twice.");
                                        ++n,
                                            this.spiritCatchTime = r.readTYPE_UINT32(i);
                                        break;
                                    default:
                                        r.skip(i, 7 & h)
                                }
                            }
                        }
                        ,
                        e(s, [{
                            key: "hasId",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "id",
                            get: function() {
                                return this.hasId ? this.idfield : 0
                            },
                            set: function(i) {
                                this.hasField0 |= 1,
                                    this.idfield = i
                            }
                        }, {
                            key: "hasSerialNum",
                            get: function() {
                                return 0 != (2 & this.hasField0)
                            }
                        }, {
                            key: "serialNum",
                            get: function() {
                                return this.hasSerialNum ? this.serial_numfield : 0
                            },
                            set: function(i) {
                                this.hasField0 |= 2,
                                    this.serial_numfield = i
                            }
                        }, {
                            key: "hasSpiritId",
                            get: function() {
                                return 0 != (4 & this.hasField0)
                            }
                        }, {
                            key: "spiritId",
                            get: function() {
                                return this.hasSpiritId ? this.spirit_idfield : 0
                            },
                            set: function(i) {
                                this.hasField0 |= 4,
                                    this.spirit_idfield = i
                            }
                        }, {
                            key: "hasSpiritCatchTime",
                            get: function() {
                                return 0 != (8 & this.hasField0)
                            }
                        }, {
                            key: "spiritCatchTime",
                            get: function() {
                                return this.hasSpiritCatchTime ? this.spirit_catch_timefield : 0
                            },
                            set: function(i) {
                                this.hasField0 |= 8,
                                    this.spirit_catch_timefield = i
                            }
                        }]),
                        s
                }(a));
                s._RF.pop()
            }
        }
    }
));
