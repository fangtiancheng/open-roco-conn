System.register("chunks:///_virtual/PTB_0x032820_Query_C2S.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./IOError.ts", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts"], (function(e) {
        var i, t, s, u, a, r, n, l;
        return {
            setters: [function(e) {
                i = e.inheritsLoose,
                    t = e.createClass
            }
                , function(e) {
                    s = e.cclegacy
                }
                , function(e) {
                    u = e.IOError
                }
                , function(e) {
                    a = e.ReadUtils
                }
                , function(e) {
                    r = e.BaseMessage
                }
                , function(e) {
                    n = e.WireType
                }
                , function(e) {
                    l = e.WriteUtils
                }
            ],
            execute: function() {
                s._RF.push({}, "f6a36soeTpOS7UZYVvMVHZW", "PTB_0x032820_Query_C2S", void 0);
                e("PTB_0x032820_Query_C2S", function(e) {
                    function s() {
                        for (var i, t = arguments.length, s = new Array(t), u = 0; u < t; u++)
                            s[u] = arguments[u];
                        return (i = e.call.apply(e, [this].concat(s)) || this).uitypefield = void 0,
                            i.hasField0 = 0,
                            i.uivaluefield = void 0,
                            i
                    }
                    i(s, e);
                    var r = s.prototype;
                    return r.removeUitype = function() {
                        this.hasField0 &= 4294967294,
                            this.uitypefield = 0
                    }
                        ,
                        r.removeUivalue = function() {
                            this.hasField0 &= 4294967293,
                                this.uivaluefield = 0
                        }
                        ,
                        r.writeToBuffer = function(e) {
                            this.hasUitype && (l.writeTag(e, n.VARINT, 1),
                                l.writeTYPE_UINT32(e, this.uitypefield)),
                            this.hasUivalue && (l.writeTag(e, n.VARINT, 2),
                                l.writeTYPE_UINT32(e, this.uivaluefield))
                        }
                        ,
                        r.readFromSlice = function(e, i) {
                            for (var t = 0, s = 0; e.bytesAvailable > i; ) {
                                var r = a.readTYPE_UINT32(e);
                                switch (r >>> 3) {
                                    case 1:
                                        if (0 != t)
                                            throw new u("Bad data format: PTB_0x032820_Query_C2S.uitype cannot be set twice.");
                                        ++t,
                                            this.uitype = a.readTYPE_UINT32(e);
                                        break;
                                    case 2:
                                        if (0 != s)
                                            throw new u("Bad data format: PTB_0x032820_Query_C2S.uivalue cannot be set twice.");
                                        ++s,
                                            this.uivalue = a.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        a.skip(e, 7 & r)
                                }
                            }
                        }
                        ,
                        t(s, [{
                            key: "hasUitype",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "uitype",
                            get: function() {
                                return this.uitypefield
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.uitypefield = e
                            }
                        }, {
                            key: "hasUivalue",
                            get: function() {
                                return 0 != (2 & this.hasField0)
                            }
                        }, {
                            key: "uivalue",
                            get: function() {
                                return this.uivaluefield
                            },
                            set: function(e) {
                                this.hasField0 |= 2,
                                    this.uivaluefield = e
                            }
                        }]),
                        s
                }(r));
                s._RF.pop()
            }
        }
    }
));
