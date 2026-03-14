System.register("chunks:///_virtual/PTB_0x032820_Query_S2C.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./IOError.ts", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts", "./ZoneMainInterface_RetInfo.ts"], (function(e) {
        var t, n, r, i, o, s, a, f, u;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass
            }
                , function(e) {
                    r = e.cclegacy
                }
                , function(e) {
                    i = e.IOError
                }
                , function(e) {
                    o = e.ReadUtils
                }
                , function(e) {
                    s = e.BaseMessage
                }
                , function(e) {
                    a = e.WireType
                }
                , function(e) {
                    f = e.WriteUtils
                }
                , function(e) {
                    u = e.ZoneMainInterface_RetInfo
                }
            ],
            execute: function() {
                r._RF.push({}, "e25a5li4xxMH70HY3hUpw0U", "PTB_0x032820_Query_S2C", void 0);
                e("PTB_0x032820_Query_S2C", function(e) {
                    function r() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                            r[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(r)) || this).ret_infofield = void 0,
                            t.buttonChose = [],
                            t
                    }
                    t(r, e);
                    var s = r.prototype;
                    return s.removeRetInfo = function() {
                        this.ret_infofield = null
                    }
                        ,
                        s.writeToBuffer = function(e) {
                            this.hasRetInfo && (f.writeTag(e, a.LENGTH_DELIMITED, 1),
                                f.writeTYPE_MESSAGE(e, this.ret_infofield));
                            for (var t = 0; t < this.buttonChose.length; ++t)
                                f.writeTag(e, a.VARINT, 2),
                                    f.writeTYPE_UINT32(e, this.buttonChose[t])
                        }
                        ,
                        s.readFromSlice = function(e, t) {
                            for (var n = 0; e.bytesAvailable > t; ) {
                                var r = o.readTYPE_UINT32(e);
                                switch (r >>> 3) {
                                    case 1:
                                        if (0 != n)
                                            throw new i("Bad data format: PTB_0x032820_Query_S2C.retInfo cannot be set twice.");
                                        ++n,
                                            this.retInfo = new u,
                                            o.readTYPE_MESSAGE(e, this.retInfo);
                                        break;
                                    case 2:
                                        if ((7 & r) == a.LENGTH_DELIMITED) {
                                            o.readPackedRepeated(e, o.readTYPE_UINT32, this.buttonChose);
                                            break
                                        }
                                        this.buttonChose.push(o.readTYPE_UINT32(e));
                                        break;
                                    default:
                                        o.skip(e, 7 & r)
                                }
                            }
                        }
                        ,
                        n(r, [{
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
                        }]),
                        r
                }(s));
                r._RF.pop()
            }
        }
    }
));
