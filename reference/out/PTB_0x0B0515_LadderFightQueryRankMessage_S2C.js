System.register("chunks:///_virtual/PTB_0x0B0515_LadderFightQueryRankMessage_S2C.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseMessage.ts", "./WriteUtils.ts", "./ReadUtils.ts", "./WireType.ts", "./RetInfo.ts", "./UserSimpleInfo.ts"], (function(e) {
        var t, n, i, r, a, s, o, f, h;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass
            }
                , function(e) {
                    i = e.cclegacy
                }
                , function(e) {
                    r = e.BaseMessage
                }
                , function(e) {
                    a = e.WriteUtils
                }
                , function(e) {
                    s = e.ReadUtils
                }
                , function(e) {
                    o = e.WireType
                }
                , function(e) {
                    f = e.RetInfo
                }
                , function(e) {
                    h = e.UserSimpleInfo
                }
            ],
            execute: function() {
                i._RF.push({}, "5b48cqkxZ5Os76gmvtseuK7", "PTB_0x0B0515_LadderFightQueryRankMessage_S2C", void 0);
                e("PTB_0x0B0515_LadderFightQueryRankMessage_S2C", function(e) {
                    function i() {
                        for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++)
                            i[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(i)) || this).ret_infofield = void 0,
                            t.userInfo = [],
                            t.rank_levelfield = void 0,
                            t.hasField0 = 0,
                            t.rank_changefield = void 0,
                            t
                    }
                    t(i, e);
                    var r = i.prototype;
                    return r.removeRetInfo = function() {
                        this.ret_infofield = null
                    }
                        ,
                        r.removeRankLevel = function() {
                            this.hasField0 &= 4294967294,
                                this.rank_levelfield = 0
                        }
                        ,
                        r.removeRankChange = function() {
                            this.hasField0 &= 4294967293,
                                this.rank_changefield = 0
                        }
                        ,
                        r.writeToBuffer = function(e) {
                            this.hasRetInfo && (a.writeTag(e, o.LENGTH_DELIMITED, 1),
                                a.writeTYPE_MESSAGE(e, this.ret_infofield));
                            for (var t = 0; t < this.userInfo.length; ++t)
                                a.writeTag(e, o.LENGTH_DELIMITED, 2),
                                    a.writeTYPE_MESSAGE(e, this.userInfo[t]);
                            this.hasRankLevel && (a.writeTag(e, o.VARINT, 3),
                                a.writeTYPE_UINT32(e, this.rank_levelfield)),
                            this.hasRankChange && (a.writeTag(e, o.VARINT, 4),
                                a.writeTYPE_INT32(e, this.rank_changefield))
                        }
                        ,
                        r.readFromSlice = function(e, t) {
                            for (var n = 0, i = 0, r = 0; e.bytesAvailable > t; ) {
                                var a = s.readTYPE_UINT32(e);
                                switch (a >>> 3) {
                                    case 1:
                                        if (0 != n)
                                            throw new Error("Bad data format: PTB_0x0B0515_LadderFightQueryRankMessage_S2C.retInfo cannot be set twice.");
                                        ++n,
                                            this.retInfo = new f,
                                            s.readTYPE_MESSAGE(e, this.retInfo);
                                        break;
                                    case 2:
                                        var o = new h;
                                        s.readTYPE_MESSAGE(e, o),
                                            this.userInfo.push(o);
                                        break;
                                    case 3:
                                        if (0 != i)
                                            throw new Error("Bad data format: PTB_0x0B0515_LadderFightQueryRankMessage_S2C.rankLevel cannot be set twice.");
                                        ++i,
                                            this.rankLevel = s.readTYPE_UINT32(e);
                                        break;
                                    case 4:
                                        if (0 != r)
                                            throw new Error("Bad data format: PTB_0x0B0515_LadderFightQueryRankMessage_S2C.rankChange cannot be set twice.");
                                        ++r,
                                            this.rankChange = s.readTYPE_INT32(e);
                                        break;
                                    default:
                                        s.skip(e, 7 & a)
                                }
                            }
                        }
                        ,
                        n(i, [{
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
                            key: "hasRankLevel",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "rankLevel",
                            get: function() {
                                return this.rank_levelfield
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.rank_levelfield = e
                            }
                        }, {
                            key: "hasRankChange",
                            get: function() {
                                return 0 != (2 & this.hasField0)
                            }
                        }, {
                            key: "rankChange",
                            get: function() {
                                return this.rank_changefield
                            },
                            set: function(e) {
                                this.hasField0 |= 2,
                                    this.rank_changefield = e
                            }
                        }]),
                        i
                }(r));
                i._RF.pop()
            }
        }
    }
));
