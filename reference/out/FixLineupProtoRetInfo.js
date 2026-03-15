System.register("chunks:///_virtual/FixLineupProtoRetInfo.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts"], (function(e) {
        var t, i, r, s, n, o, a;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    r = e.cclegacy
                }
                , function(e) {
                    s = e.ReadUtils
                }
                , function(e) {
                    n = e.BaseMessage
                }
                , function(e) {
                    o = e.WireType
                }
                , function(e) {
                    a = e.WriteUtils
                }
            ],
            execute: function() {
                r._RF.push({}, "ed686v3fnJDeL4D1lT2MdD6", "FixLineupProtoRetInfo", void 0);
                e("FixLineupProtoRetInfo", function(e) {
                    function r() {
                        for (var t, i = arguments.length, r = new Array(i), s = 0; s < i; s++)
                            r[s] = arguments[s];
                        return (t = e.call.apply(e, [this].concat(r)) || this).ret_codefield = void 0,
                            t.hasField0 = 0,
                            t.ret_msgfield = void 0,
                            t
                    }
                    t(r, e);
                    var n = r.prototype;
                    return n.removeRetCode = function() {
                        this.hasField0 &= 4294967294,
                            this.ret_codefield = 0
                    }
                        ,
                        n.removeRetMsg = function() {
                            this.ret_msgfield = null
                        }
                        ,
                        n.writeToBuffer = function(e) {
                            this.hasRetCode && (a.writeTag(e, o.VARINT, 1),
                                a.writeTYPE_INT32(e, this.ret_codefield)),
                            this.hasRetMsg && (a.writeTag(e, o.LENGTH_DELIMITED, 2),
                                a.writeTYPE_BYTES(e, this.ret_msgfield))
                        }
                        ,
                        n.readFromSlice = function(e, t) {
                            for (var i = 0, r = 0; e.bytesAvailable > t; ) {
                                var n = s.readTYPE_UINT32(e);
                                switch (n >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: RetInfo.retCode cannot be set twice.");
                                        ++i,
                                            this.retCode = s.readTYPE_INT32(e);
                                        break;
                                    case 2:
                                        if (0 != r)
                                            throw new Error("Bad data format: RetInfo.retMsg cannot be set twice.");
                                        ++r,
                                            this.retMsg = s.readTYPE_BYTES(e);
                                        break;
                                    default:
                                        s.skip(e, 7 & n)
                                }
                            }
                        }
                        ,
                        i(r, [{
                            key: "hasRetCode",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "retCode",
                            get: function() {
                                return this.hasRetCode ? this.ret_codefield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.ret_codefield = e
                            }
                        }, {
                            key: "hasRetMsg",
                            get: function() {
                                return null != this.ret_msgfield
                            }
                        }, {
                            key: "retMsg",
                            get: function() {
                                return this.hasRetMsg ? this.ret_msgfield : a.stringToByteArray("")
                            },
                            set: function(e) {
                                this.ret_msgfield = e
                            }
                        }]),
                        r
                }(n));
                r._RF.pop()
            }
        }
    }
));
