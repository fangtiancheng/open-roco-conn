System.register("chunks:///_virtual/PTB_0x03227C_GuidanceOperate_C2S.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./IOError.ts", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts"], (function(e) {
        var t, i, r, n, a, s, o, c;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    r = e.cclegacy
                }
                , function(e) {
                    n = e.IOError
                }
                , function(e) {
                    a = e.ReadUtils
                }
                , function(e) {
                    s = e.BaseMessage
                }
                , function(e) {
                    o = e.WireType
                }
                , function(e) {
                    c = e.WriteUtils
                }
            ],
            execute: function() {
                r._RF.push({}, "a44aar6q/BOhIQCIlWBi5RT", "PTB_0x03227C_GuidanceOperate_C2S", void 0);
                e("PTB_0x03227C_GuidanceOperate_C2S", function(e) {
                    function r() {
                        for (var t, i = arguments.length, r = new Array(i), n = 0; n < i; n++)
                            r[n] = arguments[n];
                        return (t = e.call.apply(e, [this].concat(r)) || this).typefield = void 0,
                            t.hasField0 = 0,
                            t
                    }
                    t(r, e);
                    var s = r.prototype;
                    return s.removeType = function() {
                        this.hasField0 &= 4294967294,
                            this.typefield = 0
                    }
                        ,
                        s.writeToBuffer = function(e) {
                            this.hasType && (c.writeTag(e, o.VARINT, 1),
                                c.writeTYPE_UINT32(e, this.typefield))
                        }
                        ,
                        s.readFromSlice = function(e, t) {
                            for (var i = 0; e.bytesAvailable > t; ) {
                                var r = a.readTYPE_UINT32(e);
                                switch (r >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new n("Bad data format: PTB_0x03227C_GuidanceOperate_C2S.type cannot be set twice.");
                                        ++i,
                                            this.type = a.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        a.skip(e, 7 & r)
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
                }(s));
                r._RF.pop()
            }
        }
    }
));
