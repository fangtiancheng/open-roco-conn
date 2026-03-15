System.register("chunks:///_virtual/PTB_0x03227E_SkinOperate_C2S.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./IOError.ts", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts"], (function(e) {
        var t, i, r, s, n, a, o, d;
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
                    a = e.BaseMessage
                }
                , function(e) {
                    o = e.WireType
                }
                , function(e) {
                    d = e.WriteUtils
                }
            ],
            execute: function() {
                r._RF.push({}, "fb9f34o+XlMnYsrufLoTsRu", "PTB_0x03227E_SkinOperate_C2S", void 0);
                e("PTB_0x03227E_SkinOperate_C2S", function(e) {
                    function r() {
                        for (var t, i = arguments.length, r = new Array(i), s = 0; s < i; s++)
                            r[s] = arguments[s];
                        return (t = e.call.apply(e, [this].concat(r)) || this).typefield = void 0,
                            t.hasField0 = 0,
                            t.req_pet_idfield = void 0,
                            t
                    }
                    t(r, e);
                    var a = r.prototype;
                    return a.removeType = function() {
                        this.hasField0 &= 4294967294,
                            this.typefield = 0
                    }
                        ,
                        a.removeReqPetId = function() {
                            this.hasField0 &= 4294967293,
                                this.req_pet_idfield = 0
                        }
                        ,
                        a.writeToBuffer = function(e) {
                            this.hasType && (d.writeTag(e, o.VARINT, 1),
                                d.writeTYPE_UINT32(e, this.typefield)),
                            this.hasReqPetId && (d.writeTag(e, o.VARINT, 2),
                                d.writeTYPE_UINT32(e, this.req_pet_idfield))
                        }
                        ,
                        a.readFromSlice = function(e, t) {
                            for (var i = 0, r = 0; e.bytesAvailable > t; ) {
                                var a = n.readTYPE_UINT32(e);
                                switch (a >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new s("Bad data format: PTB_0x03227E_SkinOperate_C2S.type cannot be set twice.");
                                        ++i,
                                            this.type = n.readTYPE_UINT32(e);
                                        break;
                                    case 2:
                                        if (0 != r)
                                            throw new s("Bad data format: PTB_0x03227E_SkinOperate_C2S.reqPetId cannot be set twice.");
                                        ++r,
                                            this.reqPetId = n.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        n.skip(e, 7 & a)
                                }
                            }
                        }
                        ,
                        i(r, [{
                            key: "hasType",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "type",
                            get: function() {
                                return this.typefield
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.typefield = e
                            }
                        }, {
                            key: "hasReqPetId",
                            get: function() {
                                return 0 != (2 & this.hasField0)
                            }
                        }, {
                            key: "reqPetId",
                            get: function() {
                                return this.req_pet_idfield
                            },
                            set: function(e) {
                                this.hasField0 |= 2,
                                    this.req_pet_idfield = e
                            }
                        }]),
                        r
                }(a));
                r._RF.pop()
            }
        }
    }
));
