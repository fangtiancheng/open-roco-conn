System.register("chunks:///_virtual/PTB_0x03227C_GuidanceOperate_S2C.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./IOError.ts", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts", "./ZoneGuardianPet_RetInfo.ts", "./ZoneGuardianPet_ItemInfo.ts"], (function(e) {
        var t, i, n, r, a, s, o, f, d, c;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    r = e.IOError
                }
                , function(e) {
                    a = e.ReadUtils
                }
                , function(e) {
                    s = e.BaseMessage
                }
                , function(e) {
                    o = e.WireType
                }
                , function(e) {
                    f = e.WriteUtils
                }
                , function(e) {
                    d = e.ZoneGuardianPet_RetInfo
                }
                , function(e) {
                    c = e.ZoneGuardianPet_ItemInfo
                }
            ],
            execute: function() {
                n._RF.push({}, "075972EQrFJ/rLbKDssyylc", "PTB_0x03227C_GuidanceOperate_S2C", void 0);
                e("PTB_0x03227C_GuidanceOperate_S2C", function(e) {
                    function n() {
                        for (var t, i = arguments.length, n = new Array(i), r = 0; r < i; r++)
                            n[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(n)) || this).ret_codefield = void 0,
                            t.finish_flagfield = void 0,
                            t.hasField0 = 0,
                            t.itemfield = void 0,
                            t
                    }
                    t(n, e);
                    var s = n.prototype;
                    return s.removeRetCode = function() {
                        this.ret_codefield = null
                    }
                        ,
                        s.removeFinishFlag = function() {
                            this.hasField0 &= 4294967294,
                                this.finish_flagfield = 0
                        }
                        ,
                        s.removeItem = function() {
                            this.itemfield = null
                        }
                        ,
                        s.writeToBuffer = function(e) {
                            this.hasRetCode && (f.writeTag(e, o.LENGTH_DELIMITED, 1),
                                f.writeTYPE_MESSAGE(e, this.ret_codefield)),
                            this.hasFinishFlag && (f.writeTag(e, o.VARINT, 2),
                                f.writeTYPE_UINT32(e, this.finish_flagfield)),
                            this.hasItem && (f.writeTag(e, o.LENGTH_DELIMITED, 3),
                                f.writeTYPE_MESSAGE(e, this.itemfield))
                        }
                        ,
                        s.readFromSlice = function(e, t) {
                            for (var i = 0, n = 0, s = 0; e.bytesAvailable > t; ) {
                                var o = a.readTYPE_UINT32(e);
                                switch (o >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new r("Bad data format: PTB_0x03227C_GuidanceOperate_S2C.retCode cannot be set twice.");
                                        ++i,
                                            this.retCode = new d,
                                            a.readTYPE_MESSAGE(e, this.retCode);
                                        break;
                                    case 2:
                                        if (0 != n)
                                            throw new r("Bad data format: PTB_0x03227C_GuidanceOperate_S2C.finishFlag cannot be set twice.");
                                        ++n,
                                            this.finishFlag = a.readTYPE_UINT32(e);
                                        break;
                                    case 3:
                                        if (0 != s)
                                            throw new r("Bad data format: PTB_0x03227C_GuidanceOperate_S2C.item cannot be set twice.");
                                        ++s,
                                            this.item = new c,
                                            a.readTYPE_MESSAGE(e, this.item);
                                        break;
                                    default:
                                        a.skip(e, 7 & o)
                                }
                            }
                        }
                        ,
                        i(n, [{
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
                            key: "hasFinishFlag",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "finishFlag",
                            get: function() {
                                return this.finish_flagfield
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.finish_flagfield = e
                            }
                        }, {
                            key: "hasItem",
                            get: function() {
                                return null != this.itemfield
                            }
                        }, {
                            key: "item",
                            get: function() {
                                return this.itemfield
                            },
                            set: function(e) {
                                this.itemfield = e
                            }
                        }]),
                        n
                }(s));
                n._RF.pop()
            }
        }
    }
));
