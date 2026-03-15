System.register("chunks:///_virtual/PTB_0x032280_FollowOperate_C2S.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./IOError.ts", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts"], (function(e) {
        var t, i, r, s, n, o, a, l;
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
                    l = e.WriteUtils
                }
            ],
            execute: function() {
                r._RF.push({}, "522d4H8y11E2Ydlo5nKAHS6", "PTB_0x032280_FollowOperate_C2S", void 0);
                e("PTB_0x032280_FollowOperate_C2S", function(e) {
                    function r() {
                        for (var t, i = arguments.length, r = new Array(i), s = 0; s < i; s++)
                            r[s] = arguments[s];
                        return (t = e.call.apply(e, [this].concat(r)) || this).typefield = void 0,
                            t.hasField0 = 0,
                            t
                    }
                    t(r, e);
                    var o = r.prototype;
                    return o.removeType = function() {
                        this.hasField0 &= 4294967294,
                            this.typefield = 0
                    }
                        ,
                        o.writeToBuffer = function(e) {
                            this.hasType && (l.writeTag(e, a.VARINT, 1),
                                l.writeTYPE_UINT32(e, this.typefield))
                        }
                        ,
                        o.readFromSlice = function(e, t) {
                            for (var i = 0; e.bytesAvailable > t; ) {
                                var r = n.readTYPE_UINT32(e);
                                switch (r >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new s("Bad data format: PTB_0x032280_FollowOperate_C2S.type cannot be set twice.");
                                        ++i,
                                            this.type = n.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        n.skip(e, 7 & r)
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
                        }]),
                        r
                }(o));
                r._RF.pop()
            }
        }
    }
));
