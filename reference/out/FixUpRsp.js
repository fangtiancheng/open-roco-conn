System.register("chunks:///_virtual/FixUpRsp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./FightSvrProtoRetInfo.ts", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts"], (function(t) {
        var e, i, n, r, o, s, f, a;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    r = t.FightSvrProto_RetInfo
                }
                , function(t) {
                    o = t.ReadUtils
                }
                , function(t) {
                    s = t.BaseMessage
                }
                , function(t) {
                    f = t.WireType
                }
                , function(t) {
                    a = t.WriteUtils
                }
            ],
            execute: function() {
                n._RF.push({}, "b8d1fvITJZC1p2SVLBfbcgT", "FixUpRsp", void 0);
                t("FixUpRsp", function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++)
                            n[r] = arguments[r];
                        return (e = t.call.apply(t, [this].concat(n)) || this).ret_infofield = void 0,
                            e
                    }
                    e(n, t);
                    var s = n.prototype;
                    return s.removeRetInfo = function() {
                        this.ret_infofield = null
                    }
                        ,
                        s.writeToBuffer = function(t) {
                            this.hasRetInfo && (a.writeTag(t, f.LENGTH_DELIMITED, 1),
                                a.writeTYPE_MESSAGE(t, this.ret_infofield))
                        }
                        ,
                        s.readFromSlice = function(t, e) {
                            for (var i = 0; t.bytesAvailable > e; ) {
                                var n = o.readTYPE_UINT32(t);
                                switch (n >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: FixUpRsp.retInfo cannot be set twice.");
                                        ++i,
                                            this.retInfo = new r,
                                            o.readTYPE_MESSAGE(t, this.retInfo);
                                        break;
                                    default:
                                        o.skip(t, 7 & n)
                                }
                            }
                        }
                        ,
                        i(n, [{
                            key: "hasRetInfo",
                            get: function() {
                                return null != this.ret_infofield
                            }
                        }, {
                            key: "retInfo",
                            get: function() {
                                return this.ret_infofield
                            },
                            set: function(t) {
                                this.ret_infofield = t
                            }
                        }]),
                        n
                }(s));
                n._RF.pop()
            }
        }
    }
));
