System.register("chunks:///_virtual/PTB_0x0B0521_LadderFightPushReward_S2C.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseMessage.ts", "./WriteUtils.ts", "./ReadUtils.ts", "./WireType.ts", "./ItemInfo2.ts"], (function(e) {
        var t, i, s, r, a, n, h, d;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    s = e.cclegacy
                }
                , function(e) {
                    r = e.BaseMessage
                }
                , function(e) {
                    a = e.WriteUtils
                }
                , function(e) {
                    n = e.ReadUtils
                }
                , function(e) {
                    h = e.WireType
                }
                , function(e) {
                    d = e.ItemInfo
                }
            ],
            execute: function() {
                s._RF.push({}, "a7300MXcGJF87w4AZgjefBn", "PTB_0x0B0521_LadderFightPushReward_S2C", void 0);
                e("PTB_0x0B0521_LadderFightPushReward_S2C", function(e) {
                    function s() {
                        for (var t, i = arguments.length, s = new Array(i), r = 0; r < i; r++)
                            s[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(s)) || this).items = [],
                            t.finishAchivement = [],
                            t.finishQuest = [],
                            t.dream_point$field = void 0,
                            t.hasField$0 = 0,
                            t.ftype$field = void 0,
                            t
                    }
                    t(s, e);
                    var r = s.prototype;
                    return r.removeDreamPoint = function() {
                        this.hasField$0 &= 4294967294,
                            this.dream_point$field = 0
                    }
                        ,
                        r.removeFtype = function() {
                            this.hasField$0 &= 4294967293,
                                this.ftype$field = 0
                        }
                        ,
                        r.writeToBuffer = function(e) {
                            for (var t = 0; t < this.items.length; ++t)
                                a.writeTag(e, h.LENGTH_DELIMITED, 1),
                                    a.writeTYPE_MESSAGE(e, this.items[t]);
                            for (var i = 0; i < this.finishAchivement.length; ++i)
                                a.writeTag(e, h.VARINT, 2),
                                    a.writeTYPE_UINT32(e, this.finishAchivement[i]);
                            for (var s = 0; s < this.finishQuest.length; ++s)
                                a.writeTag(e, h.VARINT, 3),
                                    a.writeTYPE_UINT32(e, this.finishQuest[s]);
                            this.hasDreamPoint && (a.writeTag(e, h.VARINT, 4),
                                a.writeTYPE_UINT32(e, this.dream_point$field)),
                            this.hasFtype && (a.writeTag(e, h.VARINT, 5),
                                a.writeTYPE_UINT32(e, this.ftype$field))
                        }
                        ,
                        r.readFromSlice = function(e, t) {
                            for (var i = 0, s = 0; e.bytesAvailable > t; ) {
                                var r = n.readTYPE_UINT32(e);
                                switch (r >>> 3) {
                                    case 1:
                                        var a = new d;
                                        n.readTYPE_MESSAGE(e, a),
                                            this.items.push(a);
                                        break;
                                    case 2:
                                        if ((7 & r) == h.LENGTH_DELIMITED) {
                                            n.readPackedRepeated(e, n.readTYPE_UINT32, this.finishAchivement);
                                            break
                                        }
                                        this.finishAchivement.push(n.readTYPE_UINT32(e));
                                        break;
                                    case 3:
                                        if ((7 & r) == h.LENGTH_DELIMITED) {
                                            n.readPackedRepeated(e, n.readTYPE_UINT32, this.finishQuest);
                                            break
                                        }
                                        this.finishQuest.push(n.readTYPE_UINT32(e));
                                        break;
                                    case 4:
                                        if (0 != i)
                                            throw new Error("Bad data format: PTB_0x0B0521_LadderFightPushReward_S2C.dreamPoint cannot be set twice.");
                                        ++i,
                                            this.dreamPoint = n.readTYPE_UINT32(e);
                                        break;
                                    case 5:
                                        if (0 != s)
                                            throw new Error("Bad data format: PTB_0x0B0521_LadderFightPushReward_S2C.ftype cannot be set twice.");
                                        ++s,
                                            this.ftype = n.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        n.skip(e, 7 & r)
                                }
                            }
                        }
                        ,
                        i(s, [{
                            key: "hasDreamPoint",
                            get: function() {
                                return 0 != (1 & this.hasField$0)
                            }
                        }, {
                            key: "dreamPoint",
                            get: function() {
                                return this.dream_point$field
                            },
                            set: function(e) {
                                this.hasField$0 |= 1,
                                    this.dream_point$field = e
                            }
                        }, {
                            key: "hasFtype",
                            get: function() {
                                return 0 != (2 & this.hasField$0)
                            }
                        }, {
                            key: "ftype",
                            get: function() {
                                return this.ftype$field
                            },
                            set: function(e) {
                                this.hasField$0 |= 2,
                                    this.ftype$field = e
                            }
                        }]),
                        s
                }(r));
                s._RF.pop()
            }
        }
    }
));
