System.register("chunks:///_virtual/SellEquipmentRsp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./FightSvrProtoRetInfo.ts", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts"], (function(e) {
        var t, i, n, o, r, s, f, a;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    o = e.FightSvrProto_RetInfo
                }
                , function(e) {
                    r = e.ReadUtils
                }
                , function(e) {
                    s = e.BaseMessage
                }
                , function(e) {
                    f = e.WireType
                }
                , function(e) {
                    a = e.WriteUtils
                }
            ],
            execute: function() {
                n._RF.push({}, "44a82xeTE1A9JcujmTzaSlG", "SellEquipmentRsp", void 0);
                e("SellEquipmentRsp", function(e) {
                    function n() {
                        for (var t, i = arguments.length, n = new Array(i), o = 0; o < i; o++)
                            n[o] = arguments[o];
                        return (t = e.call.apply(e, [this].concat(n)) || this).ret_infofield = void 0,
                            t.moneyfield = void 0,
                            t.hasField0 = 0,
                            t
                    }
                    t(n, e);
                    var s = n.prototype;
                    return s.removeRetInfo = function() {
                        this.ret_infofield = null
                    }
                        ,
                        s.removeMoney = function() {
                            this.hasField0 &= 4294967294,
                                this.moneyfield = 0
                        }
                        ,
                        s.writeToBuffer = function(e) {
                            this.hasRetInfo && (a.writeTag(e, f.LENGTH_DELIMITED, 1),
                                a.writeTYPE_MESSAGE(e, this.ret_infofield)),
                            this.hasMoney && (a.writeTag(e, f.VARINT, 2),
                                a.writeTYPE_UINT32(e, this.moneyfield))
                        }
                        ,
                        s.readFromSlice = function(e, t) {
                            for (var i = 0, n = 0; e.bytesAvailable > t; ) {
                                var s = r.readTYPE_UINT32(e);
                                switch (s >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: SellEquipmentRsp.retInfo cannot be set twice.");
                                        ++i,
                                            this.retInfo = new o,
                                            r.readTYPE_MESSAGE(e, this.retInfo);
                                        break;
                                    case 2:
                                        if (0 != n)
                                            throw new Error("Bad data format: SellEquipmentRsp.money cannot be set twice.");
                                        ++n,
                                            this.money = r.readTYPE_UINT32(e);
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
                            key: "hasMoney",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "money",
                            get: function() {
                                return this.hasMoney ? this.moneyfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.moneyfield = e
                            }
                        }]),
                        n
                }(s));
                n._RF.pop()
            }
        }
    }
));
