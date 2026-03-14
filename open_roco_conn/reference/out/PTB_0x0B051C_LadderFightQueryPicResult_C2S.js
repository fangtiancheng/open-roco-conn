System.register("chunks:///_virtual/PTB_0x0B051C_LadderFightQueryPicResult_C2S.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseMessage.ts", "./ReadUtils.ts", "./WireType.ts", "./WriteUtils.ts"], (function(e) {
        var t, i, s, r, n, a, c;
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
                    n = e.ReadUtils
                }
                , function(e) {
                    a = e.WireType
                }
                , function(e) {
                    c = e.WriteUtils
                }
            ],
            execute: function() {
                s._RF.push({}, "aec77vhC51JYbWtqUmNDsNx", "PTB_0x0B051C_LadderFightQueryPicResult_C2S", void 0);
                e("PTB_0x0B051C_LadderFightQueryPicResult_C2S", function(e) {
                    function s() {
                        for (var t, i = arguments.length, s = new Array(i), r = 0; r < i; r++)
                            s[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(s)) || this).stepfield = void 0,
                            t.hasField0 = 0,
                            t
                    }
                    t(s, e);
                    var r = s.prototype;
                    return r.removeStep = function() {
                        this.hasField0 &= 4294967294,
                            this.stepfield = 0
                    }
                        ,
                        r.writeToBuffer = function(e) {
                            this.hasStep && (c.writeTag(e, a.VARINT, 1),
                                c.writeTYPE_UINT32(e, this.stepfield))
                        }
                        ,
                        r.readFromSlice = function(e, t) {
                            for (var i = 0; e.bytesAvailable > t; ) {
                                var s = n.readTYPE_UINT32(e);
                                switch (s >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: PTB_0x0B051C_LadderFightQueryPicResult_C2S.step cannot be set twice.");
                                        ++i,
                                            this.step = n.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        n.skip(e, 7 & s)
                                }
                            }
                        }
                        ,
                        i(s, [{
                            key: "hasStep",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "step",
                            get: function() {
                                return this.stepfield
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.stepfield = e
                            }
                        }]),
                        s
                }(r));
                s._RF.pop()
            }
        }
    }
));
