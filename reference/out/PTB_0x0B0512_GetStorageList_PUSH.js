System.register("chunks:///_virtual/PTB_0x0B0512_GetStorageList_PUSH.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts", "./FightSvrProtoRetInfo.ts", "./SpiritInfo2.ts"], (function(e) {
        var t, i, r, a, o, s, n, d, f;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    r = e.cclegacy
                }
                , function(e) {
                    a = e.ReadUtils
                }
                , function(e) {
                    o = e.BaseMessage
                }
                , function(e) {
                    s = e.WireType
                }
                , function(e) {
                    n = e.WriteUtils
                }
                , function(e) {
                    d = e.FightSvrProto_RetInfo
                }
                , function(e) {
                    f = e.PTB_0x0B0512_GetStorageList_PUSH_SpiritInfo
                }
            ],
            execute: function() {
                r._RF.push({}, "f2e44H6vRlFM6rDiE7fYMlv", "PTB_0x0B0512_GetStorageList_PUSH", void 0);
                e("PTB_0x0B0512_GetStorageList_PUSH", function(e) {
                    function r() {
                        for (var t, i = arguments.length, r = new Array(i), a = 0; a < i; a++)
                            r[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(r)) || this).ret_infofield = void 0,
                            t.already_add_storage_numfield = void 0,
                            t.hasField0 = 0,
                            t.max_add_storage_numfield = void 0,
                            t.reponse_flagfield = void 0,
                            t.spiritInfo = [],
                            t
                    }
                    t(r, e);
                    var o = r.prototype;
                    return o.removeFightSvrProto_RetInfo = function() {
                        this.ret_infofield = null
                    }
                        ,
                        o.removeAlreadyAddStorageNum = function() {
                            this.hasField0 &= 4294967294,
                                this.already_add_storage_numfield = 0
                        }
                        ,
                        o.removeMaxAddStorageNum = function() {
                            this.hasField0 &= 4294967293,
                                this.max_add_storage_numfield = 0
                        }
                        ,
                        o.removeReponseFlag = function() {
                            this.hasField0 &= 4294967291,
                                this.reponse_flagfield = 0
                        }
                        ,
                        o.writeToBuffer = function(e) {
                            this.hasFightSvrProto_RetInfo && (n.writeTag(e, s.LENGTH_DELIMITED, 1),
                                n.writeTYPE_MESSAGE(e, this.ret_infofield)),
                            this.hasAlreadyAddStorageNum && (n.writeTag(e, s.VARINT, 2),
                                n.writeTYPE_UINT32(e, this.already_add_storage_numfield)),
                            this.hasMaxAddStorageNum && (n.writeTag(e, s.VARINT, 3),
                                n.writeTYPE_UINT32(e, this.max_add_storage_numfield)),
                            this.hasReponseFlag && (n.writeTag(e, s.VARINT, 4),
                                n.writeTYPE_UINT32(e, this.reponse_flagfield));
                            for (var t = 0; t < this.spiritInfo.length; ++t)
                                n.writeTag(e, s.LENGTH_DELIMITED, 5),
                                    n.writeTYPE_MESSAGE(e, this.spiritInfo[t])
                        }
                        ,
                        o.readFromSlice = function(e, t) {
                            for (var i = 0, r = 0, o = 0, s = 0; e.bytesAvailable > t; ) {
                                var n = a.readTYPE_UINT32(e);
                                switch (n >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: PTB_0x0B0512_GetStorageList_PUSH.retInfo cannot be set twice.");
                                        ++i,
                                            this.retInfo = new d,
                                            a.readTYPE_MESSAGE(e, this.retInfo);
                                        break;
                                    case 2:
                                        if (0 != r)
                                            throw new Error("Bad data format: PTB_0x0B0512_GetStorageList_PUSH.alreadyAddStorageNum cannot be set twice.");
                                        ++r,
                                            this.alreadyAddStorageNum = a.readTYPE_UINT32(e);
                                        break;
                                    case 3:
                                        if (0 != o)
                                            throw new Error("Bad data format: PTB_0x0B0512_GetStorageList_PUSH.maxAddStorageNum cannot be set twice.");
                                        ++o,
                                            this.maxAddStorageNum = a.readTYPE_UINT32(e);
                                        break;
                                    case 4:
                                        if (0 != s)
                                            throw new Error("Bad data format: PTB_0x0B0512_GetStorageList_PUSH.reponseFlag cannot be set twice.");
                                        ++s,
                                            this.reponseFlag = a.readTYPE_UINT32(e);
                                        break;
                                    case 5:
                                        var _ = new f;
                                        a.readTYPE_MESSAGE(e, _),
                                            this.spiritInfo.push(_);
                                        break;
                                    default:
                                        a.skip(e, 7 & n)
                                }
                            }
                        }
                        ,
                        i(r, [{
                            key: "hasFightSvrProto_RetInfo",
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
                            key: "hasAlreadyAddStorageNum",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "alreadyAddStorageNum",
                            get: function() {
                                return this.already_add_storage_numfield
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.already_add_storage_numfield = e
                            }
                        }, {
                            key: "hasMaxAddStorageNum",
                            get: function() {
                                return 0 != (2 & this.hasField0)
                            }
                        }, {
                            key: "maxAddStorageNum",
                            get: function() {
                                return this.max_add_storage_numfield
                            },
                            set: function(e) {
                                this.hasField0 |= 2,
                                    this.max_add_storage_numfield = e
                            }
                        }, {
                            key: "hasReponseFlag",
                            get: function() {
                                return 0 != (4 & this.hasField0)
                            }
                        }, {
                            key: "reponseFlag",
                            get: function() {
                                return this.reponse_flagfield
                            },
                            set: function(e) {
                                this.hasField0 |= 4,
                                    this.reponse_flagfield = e
                            }
                        }]),
                        r
                }(o));
                r._RF.pop()
            }
        }
    }
));
