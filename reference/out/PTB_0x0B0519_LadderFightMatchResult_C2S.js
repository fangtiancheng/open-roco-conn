System.register("chunks:///_virtual/PTB_0x0B0519_LadderFightMatchResult_C2S.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts"], (function(t) {
        var e, i, s, n, a, r, u;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    s = t.cclegacy
                }
                , function(t) {
                    n = t.ReadUtils
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
                s._RF.push({}, "c93e3iyzYFGGZ/0ZW7Vlf7G", "PTB_0x0B0519_LadderFightMatchResult_C2S", void 0);
                t("PTB_0x0B0519_LadderFightMatchResult_C2S", function(t) {
                    function s() {
                        for (var e, i = arguments.length, s = new Array(i), n = 0; n < i; n++)
                            s[n] = arguments[n];
                        return (e = t.call.apply(t, [this].concat(s)) || this).uinfield = 0,
                            e.hasField0 = 0,
                            e.ftypefield = void 0,
                            e
                    }
                    e(s, t);
                    var a = s.prototype;
                    return a.removeUin = function() {
                        this.hasField0 &= 4294967294,
                            this.uinfield = 0
                    }
                        ,
                        a.removeFtype = function() {
                            this.hasField0 &= 4294967293,
                                this.ftypefield = 0
                        }
                        ,
                        a.writeToBuffer = function(t) {
                            this.hasUin && (u.writeTag(t, r.VARINT, 1),
                                u.writeTYPE_UINT32(t, this.uinfield))
                        }
                        ,
                        a.readFromSlice = function(t, e) {
                            for (var i = 0; t.bytesAvailable > e; ) {
                                var s = n.readTYPE_UINT32(t)
                                    , a = s >>> 3;
                                switch (console.log("PTB_0x0B0519_LadderFightMatchResult_C2S==>tag:", s),
                                    console.log("PTB_0x0B0519_LadderFightMatchResult_C2S==>tagoffset3:", a),
                                    a) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: PTB_0x0B0519_LadderFightMatchResult_C2S.uin cannot be set twice.");
                                        ++i,
                                            this.uin = n.readTYPE_UINT32(t);
                                        break;
                                    default:
                                        n.skip(t, 7 & s)
                                }
                            }
                        }
                        ,
                        i(s, [{
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
                        }, {
                            key: "hasFtype",
                            get: function() {
                                return 0 != (2 & this.hasField0)
                            }
                        }, {
                            key: "ftype",
                            get: function() {
                                return this.ftypefield
                            },
                            set: function(t) {
                                this.hasField0 |= 2,
                                    this.ftypefield = t
                            }
                        }]),
                        s
                }(a));
                s._RF.pop()
            }
        }
    }
));
