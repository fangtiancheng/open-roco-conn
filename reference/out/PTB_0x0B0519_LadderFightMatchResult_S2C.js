System.register("chunks:///_virtual/PTB_0x0B0519_LadderFightMatchResult_S2C.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts", "./RetInfo.ts"], (function(t) {
        var e, i, n, r, s, a, o, f;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    r = t.ReadUtils
                }
                , function(t) {
                    s = t.BaseMessage
                }
                , function(t) {
                    a = t.WireType
                }
                , function(t) {
                    o = t.WriteUtils
                }
                , function(t) {
                    f = t.RetInfo
                }
            ],
            execute: function() {
                n._RF.push({}, "a6d57UHdH5F5KXqIg7BOPft", "PTB_0x0B0519_LadderFightMatchResult_S2C", void 0);
                t("PTB_0x0B0519_LadderFightMatchResult_S2C", function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++)
                            n[r] = arguments[r];
                        return (e = t.call.apply(t, [this].concat(n)) || this).ret_infofield = void 0,
                            e.typefield = 0,
                            e.hasField0 = 0,
                            e.npc_idfield = 0,
                            e
                    }
                    e(n, t);
                    var s = n.prototype;
                    return s.removeRetInfo = function() {
                        this.ret_infofield = null
                    }
                        ,
                        s.removeType = function() {
                            this.hasField0 &= 4294967294,
                                this.typefield = 0
                        }
                        ,
                        s.removeNpcId = function() {
                            this.hasField0 &= 4294967293,
                                this.npc_idfield = 0
                        }
                        ,
                        s.writeToBuffer = function(t) {
                            this.hasRetInfo && (o.writeTag(t, a.LENGTH_DELIMITED, 1),
                                o.writeTYPE_MESSAGE(t, this.ret_infofield)),
                            this.hasType && (o.writeTag(t, a.VARINT, 2),
                                o.writeTYPE_UINT32(t, this.typefield)),
                            this.hasNpcId && (o.writeTag(t, a.VARINT, 3),
                                o.writeTYPE_UINT32(t, this.npc_idfield))
                        }
                        ,
                        s.readFromSlice = function(t, e) {
                            for (var i = 0, n = 0, s = 0; t.bytesAvailable > e; ) {
                                var a = r.readTYPE_UINT32(t)
                                    , o = a >>> 3;
                                switch (console.log("PTB_0x0B0519_LadderFightMatchResult_S2C==>tag:", a),
                                    console.log("PTB_0x0B0519_LadderFightMatchResult_S2C==>tagoffset3:", o),
                                    o) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: PTB_0x0B0519_LadderFightMatchResult_S2C.retInfo cannot be set twice.");
                                        ++i,
                                            this.retInfo = new f,
                                            r.readTYPE_MESSAGE(t, this.retInfo);
                                        break;
                                    case 2:
                                        if (0 != n)
                                            throw new Error("Bad data format: PTB_0x0B0519_LadderFightMatchResult_S2C.type cannot be set twice.");
                                        ++n,
                                            this.type = r.readTYPE_UINT32(t);
                                        break;
                                    case 3:
                                        if (0 != s)
                                            throw new Error("Bad data format: PTB_0x0B0519_LadderFightMatchResult_S2C.npcId cannot be set twice.");
                                        ++s,
                                            this.npcId = r.readTYPE_UINT32(t);
                                        break;
                                    default:
                                        r.skip(t, 7 & a)
                                }
                            }
                        }
                        ,
                        i(n, [{
                            key: "hasRetInfo",
                            get: function() {
                                return null != this.ret_infofield
                            }
                        }, {
                            key: "retInfo",
                            get: function() {
                                return this.ret_infofield
                            },
                            set: function(t) {
                                this.ret_infofield = t
                            }
                        }, {
                            key: "hasType",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "type",
                            get: function() {
                                return this.typefield
                            },
                            set: function(t) {
                                this.hasField0 |= 1,
                                    this.typefield = t
                            }
                        }, {
                            key: "hasNpcId",
                            get: function() {
                                return 0 != (2 & this.hasField0)
                            }
                        }, {
                            key: "npcId",
                            get: function() {
                                return this.npc_idfield
                            },
                            set: function(t) {
                                this.hasField0 |= 2,
                                    this.npc_idfield = t
                            }
                        }]),
                        n
                }(s));
                n._RF.pop()
            }
        }
    }
));
