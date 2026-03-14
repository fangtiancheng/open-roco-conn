System.register("chunks:///_virtual/PTB_0x03227B_QueryStatus1_C2S.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./IOError.ts", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts"], (function(t) {
        var e, i, n, s, r, u, a, o;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    s = t.IOError
                }
                , function(t) {
                    r = t.ReadUtils
                }
                , function(t) {
                    u = t.BaseMessage
                }
                , function(t) {
                    a = t.WireType
                }
                , function(t) {
                    o = t.WriteUtils
                }
            ],
            execute: function() {
                n._RF.push({}, "9ba6e24uQpCYpi4riReSusV", "PTB_0x03227B_QueryStatus1_C2S", void 0);
                t("PTB_0x03227B_QueryStatus1_C2S", function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this).uinfield = void 0,
                            e.hasField0 = 0,
                            e
                    }
                    e(n, t);
                    var u = n.prototype;
                    return u.removeUin = function() {
                        this.hasField0 &= 4294967294,
                            this.uinfield = 0
                    }
                        ,
                        u.writeToBuffer = function(t) {
                            this.hasUin && (o.writeTag(t, a.VARINT, 1),
                                o.writeTYPE_UINT32(t, this.uinfield))
                        }
                        ,
                        u.readFromSlice = function(t, e) {
                            for (var i = 0; t.bytesAvailable > e; ) {
                                var n = r.readTYPE_UINT32(t);
                                switch (n >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new s("Bad data format: PTB_0x03227B_QueryStatus1_C2S.uin cannot be set twice.");
                                        ++i,
                                            this.uin = r.readTYPE_UINT32(t);
                                        break;
                                    default:
                                        r.skip(t, 7 & n)
                                }
                            }
                        }
                        ,
                        i(n, [{
                            key: "hasUin",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "uin",
                            get: function() {
                                return this.uinfield
                            },
                            set: function(t) {
                                this.hasField0 |= 1,
                                    this.uinfield = t
                            }
                        }]),
                        n
                }(u));
                n._RF.pop()
            }
        }
    }
));
