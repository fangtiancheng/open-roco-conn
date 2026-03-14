System.register("chunks:///_virtual/ZoneRecoverHpQueryRsp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts", "./ZoneRecoverHpRetInfo.ts"], (function(e) {
        var t, i, n, r, s, o, a, f;
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
                    s = e.BaseMessage
                }
                , function(e) {
                    o = e.WireType
                }
                , function(e) {
                    a = e.WriteUtils
                }
                , function(e) {
                    f = e.ZoneRecoverHpRetInfo
                }
            ],
            execute: function() {
                n._RF.push({}, "57ba7ct49NMEL00cIqLLyhm", "ZoneRecoverHpQueryRsp", void 0);
                e("ZoneRecoverHpQueryRsp", function(e) {
                    function n() {
                        for (var t, i = arguments.length, n = new Array(i), r = 0; r < i; r++)
                            n[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(n)) || this).ret_infofield = void 0,
                            t.statefield = void 0,
                            t.hasField0 = 0,
                            t
                    }
                    t(n, e);
                    var s = n.prototype;
                    return s.removeRetInfo = function() {
                        this.ret_infofield = null
                    }
                        ,
                        s.removeState = function() {
                            this.hasField0 &= 4294967294,
                                this.statefield = 0
                        }
                        ,
                        s.writeToBuffer = function(e) {
                            this.hasRetInfo && (a.writeTag(e, o.LENGTH_DELIMITED, 1),
                                a.writeTYPE_MESSAGE(e, this.ret_infofield)),
                            this.hasState && (a.writeTag(e, o.VARINT, 2),
                                a.writeTYPE_INT32(e, this.statefield))
                        }
                        ,
                        s.readFromSlice = function(e, t) {
                            for (var i = 0, n = 0; e.bytesAvailable > t; ) {
                                var s = r.readTYPE_UINT32(e);
                                switch (s >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: ZoneRecoverHpQueryRsp.retInfo cannot be set twice.");
                                        ++i,
                                            this.retInfo = new f,
                                            r.readTYPE_MESSAGE(e, this.retInfo);
                                        break;
                                    case 2:
                                        if (0 != n)
                                            throw new Error("Bad data format: ZoneRecoverHpQueryRsp.state cannot be set twice.");
                                        ++n,
                                            this.state = r.readTYPE_INT32(e);
                                        break;
                                    default:
                                        r.skip(e, 7 & s)
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
                            set: function(e) {
                                this.ret_infofield = e
                            }
                        }, {
                            key: "hasState",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "state",
                            get: function() {
                                return this.statefield
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.statefield = e
                            }
                        }]),
                        n
                }(s));
                n._RF.pop()
            }
        }
    }
));
