System.register("chunks:///_virtual/PTB_0x0B0641_FixupBeforeFightReqMessage_S2C.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts", "./RetInfo.ts"], (function(e) {
        var t, i, n, r, o, s, f, a;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    r = e.ReadUtils
                }
                , function(e) {
                    o = e.BaseMessage
                }
                , function(e) {
                    s = e.WireType
                }
                , function(e) {
                    f = e.WriteUtils
                }
                , function(e) {
                    a = e.RetInfo
                }
            ],
            execute: function() {
                n._RF.push({}, "8b43f+XOUdI76SQRsX48eOv", "PTB_0x0B0641_FixupBeforeFightReqMessage_S2C", void 0);
                e("PTB_0x0B0641_FixupBeforeFightReqMessage_S2C", function(e) {
                    function n() {
                        for (var t, i = arguments.length, n = new Array(i), r = 0; r < i; r++)
                            n[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(n)) || this).ret_info$field = void 0,
                            t
                    }
                    t(n, e);
                    var o = n.prototype;
                    return o.removeRetInfo = function() {
                        this.ret_info$field = null
                    }
                        ,
                        o.writeToBuffer = function(e) {
                            this.hasRetInfo && (f.writeTag(e, s.LENGTH_DELIMITED, 1),
                                f.writeTYPE_MESSAGE(e, this.ret_info$field))
                        }
                        ,
                        o.readFromSlice = function(e, t) {
                            for (var i = 0; e.bytesAvailable > t; ) {
                                var n = r.readTYPE_UINT32(e);
                                switch (n >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: PTB_0x0B0641_FixupBeforeFightReqMessage_S2C.retInfo cannot be set twice.");
                                        ++i,
                                            this.retInfo = new a,
                                            r.readTYPE_MESSAGE(e, this.retInfo);
                                        break;
                                    default:
                                        r.skip(e, 7 & n)
                                }
                            }
                        }
                        ,
                        i(n, [{
                            key: "hasRetInfo",
                            get: function() {
                                return null != this.ret_info$field
                            }
                        }, {
                            key: "retInfo",
                            get: function() {
                                return this.ret_info$field
                            },
                            set: function(e) {
                                this.ret_info$field = e
                            }
                        }]),
                        n
                }(o));
                n._RF.pop()
            }
        }
    }
));
