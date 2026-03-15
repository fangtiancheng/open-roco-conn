System.register("chunks:///_virtual/RewardPackage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseMessage.ts", "./WriteUtils.ts", "./ReadUtils.ts", "./WireType.ts", "./ItemInfo2.ts"], (function(e) {
        var t, a, r, i, s, n, l, c;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    a = e.createClass
            }
                , function(e) {
                    r = e.cclegacy
                }
                , function(e) {
                    i = e.BaseMessage
                }
                , function(e) {
                    s = e.WriteUtils
                }
                , function(e) {
                    n = e.ReadUtils
                }
                , function(e) {
                    l = e.WireType
                }
                , function(e) {
                    c = e.ItemInfo
                }
            ],
            execute: function() {
                r._RF.push({}, "c5b722vdcVC1JhRezmMqgzx", "RewardPackage", void 0);
                e("RewardPackage", function(e) {
                    function r() {
                        for (var t, a = arguments.length, r = new Array(a), i = 0; i < a; i++)
                            r[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(r)) || this).items = [],
                            t.reward_flag$field = void 0,
                            t.hasField$0 = 0,
                            t
                    }
                    t(r, e);
                    var i = r.prototype;
                    return i.removeRewardFlag = function() {
                        this.hasField$0 &= 4294967294,
                            this.reward_flag$field = 0
                    }
                        ,
                        i.writeToBuffer = function(e) {
                            for (var t = 0; t < this.items.length; ++t)
                                s.writeTag(e, l.LENGTH_DELIMITED, 1),
                                    s.writeTYPE_MESSAGE(e, this.items[t]);
                            this.hasRewardFlag && (s.writeTag(e, l.VARINT, 2),
                                s.writeTYPE_UINT32(e, this.reward_flag$field))
                        }
                        ,
                        i.readFromSlice = function(e, t) {
                            for (var a = 0; e.bytesAvailable > t; ) {
                                var r = n.readTYPE_UINT32(e);
                                switch (r >>> 3) {
                                    case 1:
                                        var i = new c;
                                        n.readTYPE_MESSAGE(e, i),
                                            this.items.push(i);
                                        break;
                                    case 2:
                                        if (0 != a)
                                            throw new Error("Bad data format: RewardPackage.rewardFlag cannot be set twice.");
                                        ++a,
                                            this.rewardFlag = n.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        n.skip(e, 7 & r)
                                }
                            }
                        }
                        ,
                        a(r, [{
                            key: "hasRewardFlag",
                            get: function() {
                                return 0 != (1 & this.hasField$0)
                            }
                        }, {
                            key: "rewardFlag",
                            get: function() {
                                return this.reward_flag$field
                            },
                            set: function(e) {
                                this.hasField$0 |= 1,
                                    this.reward_flag$field = e
                            }
                        }]),
                        r
                }(i));
                r._RF.pop()
            }
        }
    }
));
