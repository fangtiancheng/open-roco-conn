System.register("chunks:///_virtual/PTB_0x03227E_SkinOperate_S2C.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./IOError.ts", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts", "./ZoneGuardianPet_RetInfo.ts"], (function(e) {
        var t, i, r, n, a, d, o, s, u;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    r = e.cclegacy
                }
                , function(e) {
                    n = e.IOError
                }
                , function(e) {
                    a = e.ReadUtils
                }
                , function(e) {
                    d = e.BaseMessage
                }
                , function(e) {
                    o = e.WireType
                }
                , function(e) {
                    s = e.WriteUtils
                }
                , function(e) {
                    u = e.ZoneGuardianPet_RetInfo
                }
            ],
            execute: function() {
                r._RF.push({}, "96e40v3rgJK46J26Y2FbOSF", "PTB_0x03227E_SkinOperate_S2C", void 0);
                e("PTB_0x03227E_SkinOperate_S2C", function(e) {
                    function r() {
                        for (var t, i = arguments.length, r = new Array(i), n = 0; n < i; n++)
                            r[n] = arguments[n];
                        return (t = e.call.apply(e, [this].concat(r)) || this).ret_codefield = void 0,
                            t.guardian_pet_idfield = void 0,
                            t.hasField0 = 0,
                            t
                    }
                    t(r, e);
                    var d = r.prototype;
                    return d.removeRetCode = function() {
                        this.ret_codefield = null
                    }
                        ,
                        d.removeGuardianPetId = function() {
                            this.hasField0 &= 4294967294,
                                this.guardian_pet_idfield = 0
                        }
                        ,
                        d.writeToBuffer = function(e) {
                            this.hasRetCode && (s.writeTag(e, o.LENGTH_DELIMITED, 1),
                                s.writeTYPE_MESSAGE(e, this.ret_codefield)),
                            this.hasGuardianPetId && (s.writeTag(e, o.VARINT, 2),
                                s.writeTYPE_UINT32(e, this.guardian_pet_idfield))
                        }
                        ,
                        d.readFromSlice = function(e, t) {
                            for (var i = 0, r = 0; e.bytesAvailable > t; ) {
                                var d = a.readTYPE_UINT32(e);
                                switch (d >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new n("Bad data format: PTB_0x03227E_SkinOperate_S2C.retCode cannot be set twice.");
                                        ++i,
                                            this.retCode = new u,
                                            a.readTYPE_MESSAGE(e, this.retCode);
                                        break;
                                    case 2:
                                        if (0 != r)
                                            throw new n("Bad data format: PTB_0x03227E_SkinOperate_S2C.guardianPetId cannot be set twice.");
                                        ++r,
                                            this.guardianPetId = a.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        a.skip(e, 7 & d)
                                }
                            }
                        }
                        ,
                        i(r, [{
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
                        }]),
                        r
                }(d));
                r._RF.pop()
            }
        }
    }
));
