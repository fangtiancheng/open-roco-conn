System.register("chunks:///_virtual/PTB_0x0B064D_LadderFightQuestCancel_C2S.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseMessage.ts", "./WriteUtils.ts", "./ReadUtils.ts", "./WireType.ts"], (function(e) {
        var t, i, n, r, s, a, d;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    r = e.BaseMessage
                }
                , function(e) {
                    s = e.WriteUtils
                }
                , function(e) {
                    a = e.ReadUtils
                }
                , function(e) {
                    d = e.WireType
                }
            ],
            execute: function() {
                n._RF.push({}, "d3cb1E2nAlPhrHIkfX5bEPq", "PTB_0x0B064D_LadderFightQuestCancel_C2S", void 0);
                e("PTB_0x0B064D_LadderFightQuestCancel_C2S", function(e) {
                    function n() {
                        for (var t, i = arguments.length, n = new Array(i), r = 0; r < i; r++)
                            n[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(n)) || this).req_indexfield = void 0,
                            t.hasField0 = 0,
                            t
                    }
                    t(n, e);
                    var r = n.prototype;
                    return r.removeReqIndex = function() {
                        this.hasField0 &= 4294967294,
                            this.req_indexfield = 0
                    }
                        ,
                        r.writeToBuffer = function(e) {
                            this.hasReqIndex && (s.writeTag(e, d.VARINT, 1),
                                s.writeTYPE_UINT32(e, this.req_indexfield))
                        }
                        ,
                        r.readFromSlice = function(e, t) {
                            for (var i = 0; e.bytesAvailable > t; ) {
                                var n = a.readTYPE_UINT32(e);
                                switch (n >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: PTB_0x0B064D_LadderFightQuestCancel_C2S.reqIndex cannot be set twice.");
                                        ++i,
                                            this.reqIndex = a.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        a.skip(e, 7 & n)
                                }
                            }
                        }
                        ,
                        i(n, [{
                            key: "hasReqIndex",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "reqIndex",
                            get: function() {
                                return this.req_indexfield
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.req_indexfield = e
                            }
                        }]),
                        n
                }(r));
                n._RF.pop()
            }
        }
    }
));
