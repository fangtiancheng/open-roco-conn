System.register("chunks:///_virtual/FightSvrProtoRetInfo.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./WireType.ts", "./WriteUtils.ts", "./RetInfoBase.ts"], (function(t) {
        var e, r, i, s, o, n, a;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    r = t.createClass
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    s = t.ReadUtils
                }
                , function(t) {
                    o = t.WireType
                }
                , function(t) {
                    n = t.WriteUtils
                }
                , function(t) {
                    a = t.RetInfoBase
                }
            ],
            execute: function() {
                i._RF.push({}, "093ebWCHutMca+5/esqq3Y9", "FightSvrProtoRetInfo", void 0);
                t("FightSvrProto_RetInfo", function(t) {
                    function i() {
                        return t.apply(this, arguments) || this
                    }
                    e(i, t);
                    var a = i.prototype;
                    return a.writeToBuffer = function(t) {
                        this.hasRetCode && (n.writeTag(t, o.VARINT, 1),
                            n.writeTYPE_INT32(t, this.ret_codefield)),
                        this.hasRetMsg && (n.writeTag(t, o.LENGTH_DELIMITED, 2),
                            n.writeTYPE_BYTES(t, this.ret_msgfield))
                    }
                        ,
                        a.readFromSlice = function(t, e) {
                            for (var r = 0, i = 0; t.bytesAvailable > e; ) {
                                var o = s.readTYPE_UINT32(t);
                                switch (o >>> 3) {
                                    case 1:
                                        if (0 != r)
                                            throw new Error("Bad data format: RetInfo.retCode cannot be set twice.");
                                        ++r,
                                            this.retCode = s.readTYPE_INT32(t);
                                        break;
                                    case 2:
                                        if (0 != i)
                                            throw new Error("Bad data format: RetInfo.retMsg cannot be set twice.");
                                        ++i,
                                            this.retMsg = s.readTYPE_BYTES(t);
                                        break;
                                    default:
                                        s.skip(t, 7 & o)
                                }
                            }
                        }
                        ,
                        r(i, [{
                            key: "retMsg",
                            get: function() {
                                return this.hasRetMsg ? this.ret_msgfield : n.stringToByteArray("")
                            },
                            set: function(t) {
                                this.ret_msgfield = t
                            }
                        }]),
                        i
                }(a));
                i._RF.pop()
            }
        }
    }
));
