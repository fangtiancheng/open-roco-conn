System.register("chunks:///_virtual/ZoneRecoverHpSelectRsp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts", "./ZoneRecoverHpRetInfo.ts"], (function(e) {
        var t, i, n, r, o, s, a, f;
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
                    a = e.WriteUtils
                }
                , function(e) {
                    f = e.ZoneRecoverHpRetInfo
                }
            ],
            execute: function() {
                n._RF.push({}, "54e78bozYJNmJKYbVUwZhL3", "ZoneRecoverHpSelectRsp", void 0);
                e("ZoneRecoverHpSelectRsp", function(e) {
                    function n() {
                        for (var t, i = arguments.length, n = new Array(i), r = 0; r < i; r++)
                            n[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(n)) || this).ret_infofield = void 0,
                            t.statefield = void 0,
                            t.hasField0 = 0,
                            t
                    }
                    t(n, e);
                    var o = n.prototype;
                    return o.removeRetInfo = function() {
                        this.ret_infofield = null
                    }
                        ,
                        o.removeState = function() {
                            this.hasField0 &= 4294967294,
                                this.statefield = 0
                        }
                        ,
                        o.writeToBuffer = function(e) {
                            this.hasRetInfo && (a.writeTag(e, s.LENGTH_DELIMITED, 1),
                                a.writeTYPE_MESSAGE(e, this.ret_infofield)),
                            this.hasState && (a.writeTag(e, s.VARINT, 2),
                                a.writeTYPE_INT32(e, this.statefield))
                        }
                        ,
                        o.readFromSlice = function(e, t) {
                            for (var i = 0, n = 0; e.bytesAvailable > t; ) {
                                var o = r.readTYPE_UINT32(e);
                                switch (o >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: ZoneRecoverHpSelectRsp.retInfo cannot be set twice.");
                                        ++i,
                                            this.retInfo = new f,
                                            r.readTYPE_MESSAGE(e, this.retInfo);
                                        break;
                                    case 2:
                                        if (0 != n)
                                            throw new Error("Bad data format: ZoneRecoverHpSelectRsp.state cannot be set twice.");
                                        ++n,
                                            this.state = r.readTYPE_INT32(e);
                                        break;
                                    default:
                                        r.skip(e, 7 & o)
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
                }(o));
                n._RF.pop()
            }
        }
    }
));
