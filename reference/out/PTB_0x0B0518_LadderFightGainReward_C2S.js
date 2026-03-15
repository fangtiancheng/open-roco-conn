System.register("chunks:///_virtual/PTB_0x0B0518_LadderFightGainReward_C2S.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseMessage.ts", "./WriteUtils.ts", "./ReadUtils.ts", "./WireType.ts"], (function(e) {
        var t, i, r, a, n, s, o;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    r = e.cclegacy
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
            ],
            execute: function() {
                r._RF.push({}, "2d06fZjC39P5pMgdR7XESWm", "PTB_0x0B0518_LadderFightGainReward_C2S", void 0);
                e("PTB_0x0B0518_LadderFightGainReward_C2S", function(e) {
                    function r() {
                        for (var t, i = arguments.length, r = new Array(i), a = 0; a < i; a++)
                            r[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(r)) || this).type$field = void 0,
                            t.hasField$0 = 0,
                            t
                    }
                    t(r, e);
                    var a = r.prototype;
                    return a.removeType = function() {
                        this.hasField$0 &= 4294967294,
                            this.type$field = 0
                    }
                        ,
                        a.writeToBuffer = function(e) {
                            this.hasType && (n.writeTag(e, o.VARINT, 1),
                                n.writeTYPE_UINT32(e, this.type$field))
                        }
                        ,
                        a.readFromSlice = function(e, t) {
                            for (var i = 0; e.bytesAvailable > t; ) {
                                var r = s.readTYPE_UINT32(e);
                                switch (r >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: PTB_0x0B0518_LadderFightGainReward_C2S.type cannot be set twice.");
                                        ++i,
                                            this.type = s.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        s.skip(e, 7 & r)
                                }
                            }
                        }
                        ,
                        i(r, [{
                            key: "hasType",
                            get: function() {
                                return 0 != (1 & this.hasField$0)
                            }
                        }, {
                            key: "type",
                            get: function() {
                                return this.type$field
                            },
                            set: function(e) {
                                this.hasField$0 |= 1,
                                    this.type$field = e
                            }
                        }]),
                        r
                }(a));
                r._RF.pop()
            }
        }
    }
));
