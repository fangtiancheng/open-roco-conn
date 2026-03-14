System.register("chunks:///_virtual/SellEquipmentReq.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./IOError.ts", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts"], (function(e) {
        var i, t, s, r, a, n, d, l;
        return {
            setters: [function(e) {
                i = e.inheritsLoose,
                    t = e.createClass
            }
                , function(e) {
                    s = e.cclegacy
                }
                , function(e) {
                    r = e.IOError
                }
                , function(e) {
                    a = e.ReadUtils
                }
                , function(e) {
                    n = e.BaseMessage
                }
                , function(e) {
                    d = e.WireType
                }
                , function(e) {
                    l = e.WriteUtils
                }
            ],
            execute: function() {
                s._RF.push({}, "3ec67BA5WtHv5sxu61YDWXd", "SellEquipmentReq", void 0);
                e("SellEquipmentReq", function(e) {
                    function s() {
                        for (var i, t = arguments.length, s = new Array(t), r = 0; r < t; r++)
                            s[r] = arguments[r];
                        return (i = e.call.apply(e, [this].concat(s)) || this).idfield = void 0,
                            i.hasField0 = 0,
                            i.serial_numfield = void 0,
                            i.passwordfield = void 0,
                            i
                    }
                    i(s, e);
                    var n = s.prototype;
                    return n.removeId = function() {
                        this.hasField0 &= 4294967294,
                            this.idfield = 0
                    }
                        ,
                        n.removeSerialNum = function() {
                            this.hasField0 &= 4294967293,
                                this.serial_numfield = 0
                        }
                        ,
                        n.removePassword = function() {
                            this.hasField0 &= 4294967291,
                                this.passwordfield = 0
                        }
                        ,
                        n.writeToBuffer = function(e) {
                            this.hasId && (l.writeTag(e, d.VARINT, 1),
                                l.writeTYPE_UINT32(e, this.idfield)),
                            this.hasSerialNum && (l.writeTag(e, d.VARINT, 2),
                                l.writeTYPE_UINT32(e, this.serial_numfield)),
                            this.hasPassword && (l.writeTag(e, d.VARINT, 3),
                                l.writeTYPE_UINT32(e, this.passwordfield))
                        }
                        ,
                        n.readFromSlice = function(e, i) {
                            for (var t = 0, s = 0, n = 0; e.bytesAvailable > i; ) {
                                var d = a.readTYPE_UINT32(e);
                                switch (d >>> 3) {
                                    case 1:
                                        if (0 != t)
                                            throw new r("Bad data format: SellEquipmentReq.id cannot be set twice.");
                                        ++t,
                                            this.id = a.readTYPE_UINT32(e);
                                        break;
                                    case 2:
                                        if (0 != s)
                                            throw new r("Bad data format: SellEquipmentReq.serialNum cannot be set twice.");
                                        ++s,
                                            this.serialNum = a.readTYPE_UINT32(e);
                                        break;
                                    case 3:
                                        if (0 != n)
                                            throw new r("Bad data format: SellEquipmentReq.password cannot be set twice.");
                                        ++n,
                                            this.password = a.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        a.skip(e, 7 & d)
                                }
                            }
                        }
                        ,
                        t(s, [{
                            key: "hasId",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "id",
                            get: function() {
                                return this.hasId ? this.idfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.idfield = e
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
                            set: function(e) {
                                this.hasField0 |= 2,
                                    this.serial_numfield = e
                            }
                        }, {
                            key: "hasPassword",
                            get: function() {
                                return 0 != (4 & this.hasField0)
                            }
                        }, {
                            key: "password",
                            get: function() {
                                return this.hasPassword ? this.passwordfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 4,
                                    this.passwordfield = e
                            }
                        }]),
                        s
                }(n));
                s._RF.pop()
            }
        }
    }
));
