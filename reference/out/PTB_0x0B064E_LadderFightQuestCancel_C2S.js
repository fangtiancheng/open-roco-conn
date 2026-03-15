System.register("chunks:///_virtual/PTB_0x0B064E_LadderFightQuestCancel_C2S.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseMessage.ts", "./WriteUtils.ts", "./ReadUtils.ts", "./WireType.ts"], (function(e) {
        var t, i, r, s, n, a, d;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    r = e.cclegacy
                }
                , function(e) {
                    s = e.BaseMessage
                }
                , function(e) {
                    n = e.WriteUtils
                }
                , function(e) {
                    a = e.ReadUtils
                }
                , function(e) {
                    d = e.WireType
                }
            ],
            execute: function() {
                r._RF.push({}, "85ad4Sn1aBNwIYwhjqQu1Em", "PTB_0x0B064E_LadderFightQuestCancel_C2S", void 0);
                e("PTB_0x0B064E_LadderFightQuestCancel_C2S", function(e) {
                    function r() {
                        for (var t, i = arguments.length, r = new Array(i), s = 0; s < i; s++)
                            r[s] = arguments[s];
                        return (t = e.call.apply(e, [this].concat(r)) || this).req_idfield = void 0,
                            t.hasField0 = 0,
                            t
                    }
                    t(r, e);
                    var s = r.prototype;
                    return s.removeReqId = function() {
                        this.hasField0 &= 4294967294,
                            this.req_idfield = 0
                    }
                        ,
                        s.writeToBuffer = function(e) {
                            this.hasReqId && (n.writeTag(e, d.VARINT, 1),
                                n.writeTYPE_UINT32(e, this.req_idfield))
                        }
                        ,
                        s.readFromSlice = function(e, t) {
                            for (var i = 0; e.bytesAvailable > t; ) {
                                var r = a.readTYPE_UINT32(e);
                                switch (r >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: PTB_0x0B064E_LadderFightQuestCancel_C2S.reqId cannot be set twice.");
                                        ++i,
                                            this.reqId = a.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        a.skip(e, 7 & r)
                                }
                            }
                        }
                        ,
                        i(r, [{
                            key: "hasReqId",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "reqId",
                            get: function() {
                                return this.req_idfield
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.req_idfield = e
                            }
                        }]),
                        r
                }(s));
                r._RF.pop()
            }
        }
    }
));
