System.register("chunks:///_virtual/ZoneMainInterface_RetInfo.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./IOError.ts", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts"], (function(e) {
        var t, i, r, s, n, o, a, f;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    r = e.cclegacy
                }
                , function(e) {
                    s = e.IOError
                }
                , function(e) {
                    n = e.ReadUtils
                }
                , function(e) {
                    o = e.BaseMessage
                }
                , function(e) {
                    a = e.WireType
                }
                , function(e) {
                    f = e.WriteUtils
                }
            ],
            execute: function() {
                r._RF.push({}, "a9eebuO+KZHrpksxSu7h3Yz", "ZoneMainInterface_RetInfo", void 0);
                e("ZoneMainInterface_RetInfo", function(e) {
                    function r() {
                        for (var t, i = arguments.length, r = new Array(i), s = 0; s < i; s++)
                            r[s] = arguments[s];
                        return (t = e.call.apply(e, [this].concat(r)) || this).ret_codefield = void 0,
                            t.hasField0 = 0,
                            t.ret_msgfield = void 0,
                            t
                    }
                    t(r, e);
                    var o = r.prototype;
                    return o.removeRetCode = function() {
                        this.hasField0 &= 4294967294,
                            this.ret_codefield = 0
                    }
                        ,
                        o.removeRetMsg = function() {
                            this.ret_msgfield = null
                        }
                        ,
                        o.writeToBuffer = function(e) {
                            this.hasRetCode && (f.writeTag(e, a.VARINT, 1),
                                f.writeTYPE_INT32(e, this.ret_codefield)),
                            this.hasRetMsg && (f.writeTag(e, a.LENGTH_DELIMITED, 2),
                                f.writeTYPE_BYTES(e, this.ret_msgfield))
                        }
                        ,
                        o.readFromSlice = function(e, t) {
                            for (var i = 0, r = 0; e.bytesAvailable > t; ) {
                                var o = n.readTYPE_UINT32(e);
                                switch (o >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new s("Bad data format: RetInfo.retCode cannot be set twice.");
                                        ++i,
                                            this.retCode = n.readTYPE_INT32(e);
                                        break;
                                    case 2:
                                        if (0 != r)
                                            throw new s("Bad data format: RetInfo.retMsg cannot be set twice.");
                                        ++r,
                                            this.retMsg = n.readTYPE_BYTES(e);
                                        break;
                                    default:
                                        n.skip(e, 7 & o)
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
                                return this.hasRetMsg ? this.ret_msgfield : f.stringToByteArray("")
                            },
                            set: function(e) {
                                this.ret_msgfield = e
                            }
                        }]),
                        r
                }(o));
                r._RF.pop()
            }
        }
    }
));
