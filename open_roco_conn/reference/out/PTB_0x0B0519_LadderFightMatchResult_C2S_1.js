System.register("chunks:///_virtual/PTB_0x0B0519_LadderFightMatchResult_C2S2.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts"], (function(t) {
        var e, i, n, s, a, r, u;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    s = t.ReadUtils
                }
                , function(t) {
                    a = t.BaseMessage
                }
                , function(t) {
                    r = t.WireType
                }
                , function(t) {
                    u = t.WriteUtils
                }
            ],
            execute: function() {
                n._RF.push({}, "ee5d2EAqrRKKp4MStz632W3", "PTB_0x0B0519_LadderFightMatchResult_C2S", void 0);
                t("PTB_0x0B0519_LadderFightMatchResult_C2S", function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this).uinfield = 0,
                            e.hasField0 = 0,
                            e
                    }
                    e(n, t);
                    var a = n.prototype;
                    return a.removeUin = function() {
                        this.hasField0 &= 4294967294,
                            this.uinfield = 0
                    }
                        ,
                        a.writeToBuffer = function(t) {
                            this.hasUin && (u.writeTag(t, r.VARINT, 1),
                                u.writeTYPE_UINT32(t, this.uinfield))
                        }
                        ,
                        a.readFromSlice = function(t, e) {
                            for (var i = 0; t.bytesAvailable > e; ) {
                                var n = s.readTYPE_UINT32(t)
                                    , a = n >>> 3;
                                switch (console.log("PTB_0x0B0519_LadderFightMatchResult_C2S==>tag:", n),
                                    console.log("PTB_0x0B0519_LadderFightMatchResult_C2S==>tagoffset3:", a),
                                    a) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: PTB_0x0B0519_LadderFightMatchResult_C2S.uin cannot be set twice.");
                                        ++i,
                                            this.uin = s.readTYPE_UINT32(t);
                                        break;
                                    default:
                                        s.skip(t, 7 & n)
                                }
                            }
                        }
                        ,
                        i(n, [{
                            key: "hasUin",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "uin",
                            get: function() {
                                return this.uinfield
                            },
                            set: function(t) {
                                this.hasField0 |= 1,
                                    this.uinfield = t
                            }
                        }]),
                        n
                }(a));
                n._RF.pop()
            }
        }
    }
));
