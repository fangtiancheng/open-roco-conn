System.register("chunks:///_virtual/AllocateExpRsp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./FightSvrProtoRetInfo.ts", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts", "./SimplePetInfo.ts"], (function(e) {
        var t, i, a, n, r, s, o, f, l;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    a = e.cclegacy
                }
                , function(e) {
                    n = e.FightSvrProto_RetInfo
                }
                , function(e) {
                    r = e.ReadUtils
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
                    l = e.SimplePetInfo
                }
            ],
            execute: function() {
                a._RF.push({}, "7c7acHOmzxMD7DB94X7te4z", "AllocateExpRsp", void 0);
                e("AllocateExpRsp", function(e) {
                    function a() {
                        for (var t, i = arguments.length, a = new Array(i), n = 0; n < i; n++)
                            a[n] = arguments[n];
                        return (t = e.call.apply(e, [this].concat(a)) || this).ret_infofield = void 0,
                            t.petInfos = [],
                            t.remain_expfield = void 0,
                            t.hasField0 = 0,
                            t.max_day_remain_expfield = void 0,
                            t.max_total_remain_expfield = void 0,
                            t
                    }
                    t(a, e);
                    var s = a.prototype;
                    return s.removeRetInfo = function() {
                        this.ret_infofield = null
                    }
                        ,
                        s.removeRemainExp = function() {
                            this.hasField0 &= 4294967294,
                                this.remain_expfield = 0
                        }
                        ,
                        s.removeMaxDayRemainExp = function() {
                            this.hasField0 &= 4294967293,
                                this.max_day_remain_expfield = 0
                        }
                        ,
                        s.removeMaxTotalRemainExp = function() {
                            this.hasField0 &= 4294967291,
                                this.max_total_remain_expfield = 0
                        }
                        ,
                        s.writeToBuffer = function(e) {
                            this.hasRetInfo && (f.writeTag(e, o.LENGTH_DELIMITED, 1),
                                f.writeTYPE_MESSAGE(e, this.ret_infofield));
                            for (var t = 0; t < this.petInfos.length; ++t)
                                f.writeTag(e, o.LENGTH_DELIMITED, 2),
                                    f.writeTYPE_MESSAGE(e, this.petInfos[t]);
                            this.hasRemainExp && (f.writeTag(e, o.VARINT, 3),
                                f.writeTYPE_UINT32(e, this.remain_expfield)),
                            this.hasMaxDayRemainExp && (f.writeTag(e, o.VARINT, 4),
                                f.writeTYPE_UINT32(e, this.max_day_remain_expfield)),
                            this.hasMaxTotalRemainExp && (f.writeTag(e, o.VARINT, 5),
                                f.writeTYPE_UINT32(e, this.max_total_remain_expfield))
                        }
                        ,
                        s.readFromSlice = function(e, t) {
                            for (var i = 0, a = 0, s = 0, o = 0; e.bytesAvailable > t; ) {
                                var f = r.readTYPE_UINT32(e);
                                switch (f >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: AllocateExpRsp.retInfo cannot be set twice.");
                                        ++i,
                                            this.retInfo = new n,
                                            r.readTYPE_MESSAGE(e, this.retInfo);
                                        break;
                                    case 2:
                                        var h = new l;
                                        r.readTYPE_MESSAGE(e, h),
                                            this.petInfos.push(h);
                                        break;
                                    case 3:
                                        if (0 != a)
                                            throw new Error("Bad data format: AllocateExpRsp.remainExp cannot be set twice.");
                                        ++a,
                                            this.remainExp = r.readTYPE_UINT32(e);
                                        break;
                                    case 4:
                                        if (0 != s)
                                            throw new Error("Bad data format: AllocateExpRsp.maxDayRemainExp cannot be set twice.");
                                        ++s,
                                            this.maxDayRemainExp = r.readTYPE_UINT32(e);
                                        break;
                                    case 5:
                                        if (0 != o)
                                            throw new Error("Bad data format: AllocateExpRsp.maxTotalRemainExp cannot be set twice.");
                                        ++o,
                                            this.maxTotalRemainExp = r.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        r.skip(e, 7 & f)
                                }
                            }
                        }
                        ,
                        i(a, [{
                            key: "hasRetInfo",
                            get: function() {
                                return null != this.ret_infofield
                            }
                        }, {
                            key: "retInfo",
                            get: function() {
                                return this.ret_infofield
                            },
                            set: function(e) {
                                this.ret_infofield = e
                            }
                        }, {
                            key: "hasRemainExp",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "remainExp",
                            get: function() {
                                return this.hasRemainExp ? this.remain_expfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.remain_expfield = e
                            }
                        }, {
                            key: "hasMaxDayRemainExp",
                            get: function() {
                                return 0 != (2 & this.hasField0)
                            }
                        }, {
                            key: "maxDayRemainExp",
                            get: function() {
                                return this.hasMaxDayRemainExp ? this.max_day_remain_expfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 2,
                                    this.max_day_remain_expfield = e
                            }
                        }, {
                            key: "hasMaxTotalRemainExp",
                            get: function() {
                                return 0 != (4 & this.hasField0)
                            }
                        }, {
                            key: "maxTotalRemainExp",
                            get: function() {
                                return this.hasMaxTotalRemainExp ? this.max_total_remain_expfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 4,
                                    this.max_total_remain_expfield = e
                            }
                        }]),
                        a
                }(s));
                a._RF.pop()
            }
        }
    }
));
