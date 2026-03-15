System.register("chunks:///_virtual/PTB_0x0B0645_NewEquipMessage_S2C.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts", "./FixLineupProtoRetInfo.ts", "./FixLineupProtoNewEquipInfo.ts"], (function(e) {
        var t, i, n, r, o, s, f, u, a;
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
                    u = e.FixLineupProtoRetInfo
                }
                , function(e) {
                    a = e.FixLineupProtoNewEquipInfo
                }
            ],
            execute: function() {
                n._RF.push({}, "473668Zqe9DvJ2cdIZh9p3l", "PTB_0x0B0645_NewEquipMessage_S2C", void 0);
                e("PTB_0x0B0645_NewEquipMessage_S2C", function(e) {
                    function n() {
                        for (var t, i = arguments.length, n = new Array(i), r = 0; r < i; r++)
                            n[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(n)) || this).ret_infofield = void 0,
                            t.equip = [],
                            t
                    }
                    t(n, e);
                    var o = n.prototype;
                    return o.removeRetInfo = function() {
                        this.ret_infofield = null
                    }
                        ,
                        o.writeToBuffer = function(e) {
                            this.hasRetInfo && (f.writeTag(e, s.LENGTH_DELIMITED, 1),
                                f.writeTYPE_MESSAGE(e, this.ret_infofield));
                            for (var t = 0; t < this.equip.length; ++t)
                                f.writeTag(e, s.LENGTH_DELIMITED, 2),
                                    f.writeTYPE_MESSAGE(e, this.equip[t])
                        }
                        ,
                        o.readFromSlice = function(e, t) {
                            for (var i = 0; e.bytesAvailable > t; ) {
                                var n = r.readTYPE_UINT32(e);
                                switch (n >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: PTB_0x0B0645_NewEquipMessage_S2C.retInfo cannot be set twice.");
                                        ++i,
                                            this.retInfo = new u,
                                            r.readTYPE_MESSAGE(e, this.retInfo);
                                        break;
                                    case 2:
                                        var o = new a;
                                        r.readTYPE_MESSAGE(e, o),
                                            this.equip.push(o);
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
                        n
                }(o));
                n._RF.pop()
            }
        }
    }
));
