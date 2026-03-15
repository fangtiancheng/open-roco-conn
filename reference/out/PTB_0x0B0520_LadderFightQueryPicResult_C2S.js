System.register("chunks:///_virtual/PTB_0x0B0520_LadderFightQueryPicResult_C2S.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseMessage.ts", "./WriteUtils.ts", "./ReadUtils.ts", "./WireType.ts"], (function(e) {
        var t, i, s, r, n, a, u;
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
                    n = e.WriteUtils
                }
                , function(e) {
                    a = e.ReadUtils
                }
                , function(e) {
                    u = e.WireType
                }
            ],
            execute: function() {
                s._RF.push({}, "b41f5lbnf1DNKiXRACx0IMx", "PTB_0x0B0520_LadderFightQueryPicResult_C2S", void 0);
                e("PTB_0x0B0520_LadderFightQueryPicResult_C2S", function(e) {
                    function s() {
                        for (var t, i = arguments.length, s = new Array(i), r = 0; r < i; r++)
                            s[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(s)) || this).step$field = void 0,
                            t.hasField$0 = 0,
                            t
                    }
                    t(s, e);
                    var r = s.prototype;
                    return r.removeStep = function() {
                        this.hasField$0 &= 4294967294,
                            this.step$field = 0
                    }
                        ,
                        r.writeToBuffer = function(e) {
                            this.hasStep && (n.writeTag(e, u.VARINT, 1),
                                n.writeTYPE_UINT32(e, this.step$field))
                        }
                        ,
                        r.readFromSlice = function(e, t) {
                            for (var i = 0; e.bytesAvailable > t; ) {
                                var s = a.readTYPE_UINT32(e);
                                switch (s >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: PTB_0x0B0520_LadderFightQueryPicResult_C2S.step cannot be set twice.");
                                        ++i,
                                            this.step = a.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        a.skip(e, 7 & s)
                                }
                            }
                        }
                        ,
                        i(s, [{
                            key: "hasStep",
                            get: function() {
                                return 0 != (1 & this.hasField$0)
                            }
                        }, {
                            key: "step",
                            get: function() {
                                return this.step$field
                            },
                            set: function(e) {
                                this.hasField$0 |= 1,
                                    this.step$field = e
                            }
                        }]),
                        s
                }(r));
                s._RF.pop()
            }
        }
    }
));
