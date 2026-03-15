System.register("chunks:///_virtual/PTB_0x0B064E_LadderFightQuestCancel_S2C.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseMessage.ts", "./WriteUtils.ts", "./ReadUtils.ts", "./WireType.ts", "./RetInfo.ts"], (function(e) {
        var t, i, n, s, r, o, a, h;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    s = e.BaseMessage
                }
                , function(e) {
                    r = e.WriteUtils
                }
                , function(e) {
                    o = e.ReadUtils
                }
                , function(e) {
                    a = e.WireType
                }
                , function(e) {
                    h = e.RetInfo
                }
            ],
            execute: function() {
                n._RF.push({}, "ef671X72ilJ1ZkVLJ5ae9eT", "PTB_0x0B064E_LadderFightQuestCancel_S2C", void 0);
                e("PTB_0x0B064E_LadderFightQuestCancel_S2C", function(e) {
                    function n() {
                        for (var t, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (t = e.call.apply(e, [this].concat(n)) || this).ret_infofield = void 0,
                            t.show_achivementfield = void 0,
                            t.hasField0 = 0,
                            t
                    }
                    t(n, e);
                    var s = n.prototype;
                    return s.removeRetInfo = function() {
                        this.ret_infofield = null
                    }
                        ,
                        s.removeShowAchivement = function() {
                            this.hasField0 &= 4294967294,
                                this.show_achivementfield = 0
                        }
                        ,
                        s.writeToBuffer = function(e) {
                            this.hasRetInfo && (r.writeTag(e, a.LENGTH_DELIMITED, 1),
                                r.writeTYPE_MESSAGE(e, this.ret_infofield)),
                            this.hasShowAchivement && (r.writeTag(e, a.VARINT, 2),
                                r.writeTYPE_UINT32(e, this.show_achivementfield))
                        }
                        ,
                        s.readFromSlice = function(e, t) {
                            for (var i = 0, n = 0; e.bytesAvailable > t; ) {
                                var s = o.readTYPE_UINT32(e);
                                switch (s >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: PTB_0x0B064E_LadderFightQuestCancel_S2C.retInfo cannot be set twice.");
                                        ++i,
                                            this.retInfo = new h,
                                            o.readTYPE_MESSAGE(e, this.retInfo);
                                        break;
                                    case 2:
                                        if (0 != n)
                                            throw new Error("Bad data format: PTB_0x0B064E_LadderFightQuestCancel_S2C.showAchivement cannot be set twice.");
                                        ++n,
                                            this.showAchivement = o.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        o.skip(e, 7 & s)
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
                            key: "hasShowAchivement",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "showAchivement",
                            get: function() {
                                return this.hasShowAchivement ? this.show_achivementfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.show_achivementfield = e
                            }
                        }]),
                        n
                }(s));
                n._RF.pop()
            }
        }
    }
));
