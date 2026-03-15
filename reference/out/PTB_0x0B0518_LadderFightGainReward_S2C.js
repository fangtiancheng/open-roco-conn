System.register("chunks:///_virtual/PTB_0x0B0518_LadderFightGainReward_S2C.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseMessage.ts", "./WriteUtils.ts", "./ReadUtils.ts", "./WireType.ts", "./RetInfo.ts", "./ItemInfo2.ts"], (function(e) {
        var t, r, i, a, n, s, o, f, d;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    r = e.createClass
            }
                , function(e) {
                    i = e.cclegacy
                }
                , function(e) {
                    a = e.BaseMessage
                }
                , function(e) {
                    n = e.WriteUtils
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
                    d = e.ItemInfo
                }
            ],
            execute: function() {
                i._RF.push({}, "0a8efDYuC9Kvba1FBI3r8Ii", "PTB_0x0B0518_LadderFightGainReward_S2C", void 0);
                e("PTB_0x0B0518_LadderFightGainReward_S2C", function(e) {
                    function i() {
                        for (var t, r = arguments.length, i = new Array(r), a = 0; a < r; a++)
                            i[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(i)) || this).ret_info$field = void 0,
                            t.rewardFlags = [],
                            t.rewardItems = [],
                            t
                    }
                    t(i, e);
                    var a = i.prototype;
                    return a.removeRetInfo = function() {
                        this.ret_info$field = null
                    }
                        ,
                        a.writeToBuffer = function(e) {
                            this.hasRetInfo && (n.writeTag(e, o.LENGTH_DELIMITED, 1),
                                n.writeTYPE_MESSAGE(e, this.ret_info$field));
                            for (var t = 0; t < this.rewardFlags.length; ++t)
                                n.writeTag(e, o.VARINT, 2),
                                    n.writeTYPE_UINT32(e, this.rewardFlags[t]);
                            for (var r = 0; r < this.rewardItems.length; ++r)
                                n.writeTag(e, o.LENGTH_DELIMITED, 3),
                                    n.writeTYPE_MESSAGE(e, this.rewardItems[r])
                        }
                        ,
                        a.readFromSlice = function(e, t) {
                            for (var r = 0; e.bytesAvailable > t; ) {
                                var i = s.readTYPE_UINT32(e);
                                switch (i >>> 3) {
                                    case 1:
                                        if (0 != r)
                                            throw new Error("Bad data format: PTB_0x0B0518_LadderFightGainReward_S2C.retInfo cannot be set twice.");
                                        ++r,
                                            this.retInfo = new f,
                                            s.readTYPE_MESSAGE(e, this.retInfo);
                                        break;
                                    case 2:
                                        if ((7 & i) == o.LENGTH_DELIMITED) {
                                            s.readPackedRepeated(e, s.readTYPE_UINT32, this.rewardFlags);
                                            break
                                        }
                                        this.rewardFlags.push(s.readTYPE_UINT32(e));
                                        break;
                                    case 3:
                                        var a = new d;
                                        s.readTYPE_MESSAGE(e, a),
                                            this.rewardItems.push(a);
                                        break;
                                    default:
                                        s.skip(e, 7 & i)
                                }
                            }
                        }
                        ,
                        r(i, [{
                            key: "hasRetInfo",
                            get: function() {
                                return null != this.ret_info$field
                            }
                        }, {
                            key: "retInfo",
                            get: function() {
                                return this.ret_info$field
                            },
                            set: function(e) {
                                this.ret_info$field = e
                            }
                        }]),
                        i
                }(a));
                i._RF.pop()
            }
        }
    }
));
