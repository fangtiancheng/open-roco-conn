System.register("chunks:///_virtual/PTB_0x0B0520_LadderFightQueryPicResult_S2C.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseMessage.ts", "./WriteUtils.ts", "./ReadUtils.ts", "./WireType.ts", "./RetInfo.ts"], (function(e) {
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
                    r = e.BaseMessage
                }
                , function(e) {
                    o = e.WriteUtils
                }
                , function(e) {
                    s = e.ReadUtils
                }
                , function(e) {
                    f = e.WireType
                }
                , function(e) {
                    a = e.RetInfo
                }
            ],
            execute: function() {
                n._RF.push({}, "0e231cLxl9AmK3qoSLBwIUl", "PTB_0x0B0520_LadderFightQueryPicResult_S2C", void 0);
                e("PTB_0x0B0520_LadderFightQueryPicResult_S2C", function(e) {
                    function n() {
                        for (var t, i = arguments.length, n = new Array(i), r = 0; r < i; r++)
                            n[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(n)) || this).ret_info$field = void 0,
                            t
                    }
                    t(n, e);
                    var r = n.prototype;
                    return r.removeRetInfo = function() {
                        this.ret_info$field = null
                    }
                        ,
                        r.writeToBuffer = function(e) {
                            this.hasRetInfo && (o.writeTag(e, f.LENGTH_DELIMITED, 1),
                                o.writeTYPE_MESSAGE(e, this.ret_info$field))
                        }
                        ,
                        r.readFromSlice = function(e, t) {
                            for (var i = 0; e.bytesAvailable > t; ) {
                                var n = s.readTYPE_UINT32(e);
                                switch (n >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: PTB_0x0B0520_LadderFightQueryPicResult_S2C.retInfo cannot be set twice.");
                                        ++i,
                                            this.retInfo = new a,
                                            s.readTYPE_MESSAGE(e, this.retInfo);
                                        break;
                                    default:
                                        s.skip(e, 7 & n)
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
                }(r));
                n._RF.pop()
            }
        }
    }
));
