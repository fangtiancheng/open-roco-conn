System.register("chunks:///_virtual/PTB_0x03227F_GetDayGift_S2C.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./IOError.ts", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts", "./ZoneGuardianPet_ItemInfo.ts", "./ZoneGuardianPet_RetInfo.ts"], (function(e) {
        var t, i, n, r, o, a, s, f, c, u;
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
                    o = e.ReadUtils
                }
                , function(e) {
                    a = e.BaseMessage
                }
                , function(e) {
                    s = e.WireType
                }
                , function(e) {
                    f = e.WriteUtils
                }
                , function(e) {
                    c = e.ZoneGuardianPet_ItemInfo
                }
                , function(e) {
                    u = e.ZoneGuardianPet_RetInfo
                }
            ],
            execute: function() {
                n._RF.push({}, "c1ec9OX7HBAlZu/XbqoavAd", "PTB_0x03227F_GetDayGift_S2C", void 0);
                e("PTB_0x03227F_GetDayGift_S2C", function(e) {
                    function n() {
                        for (var t, i = arguments.length, n = new Array(i), r = 0; r < i; r++)
                            n[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(n)) || this).ret_codefield = void 0,
                            t.itemfield = void 0,
                            t
                    }
                    t(n, e);
                    var a = n.prototype;
                    return a.removeRetCode = function() {
                        this.ret_codefield = null
                    }
                        ,
                        a.removeItem = function() {
                            this.itemfield = null
                        }
                        ,
                        a.writeToBuffer = function(e) {
                            this.hasRetCode && (f.writeTag(e, s.LENGTH_DELIMITED, 1),
                                f.writeTYPE_MESSAGE(e, this.ret_codefield)),
                            this.hasItem && (f.writeTag(e, s.LENGTH_DELIMITED, 2),
                                f.writeTYPE_MESSAGE(e, this.itemfield))
                        }
                        ,
                        a.readFromSlice = function(e, t) {
                            for (var i = 0, n = 0; e.bytesAvailable > t; ) {
                                var a = o.readTYPE_UINT32(e);
                                switch (a >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new r("Bad data format: PTB_0x03227F_GetDayGift_S2C.retCode cannot be set twice.");
                                        ++i,
                                            this.retCode = new u,
                                            o.readTYPE_MESSAGE(e, this.retCode);
                                        break;
                                    case 2:
                                        if (0 != n)
                                            throw new r("Bad data format: PTB_0x03227F_GetDayGift_S2C.item cannot be set twice.");
                                        ++n,
                                            this.item = new c,
                                            o.readTYPE_MESSAGE(e, this.item);
                                        break;
                                    default:
                                        o.skip(e, 7 & a)
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
                }(a));
                n._RF.pop()
            }
        }
    }
));
