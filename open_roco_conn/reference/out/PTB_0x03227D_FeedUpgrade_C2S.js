System.register("chunks:///_virtual/PTB_0x03227D_FeedUpgrade_C2S.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./IOError.ts", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts"], (function(e) {
        var t, i, n, s, r, a, o, u;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    s = e.IOError
                }
                , function(e) {
                    r = e.ReadUtils
                }
                , function(e) {
                    a = e.BaseMessage
                }
                , function(e) {
                    o = e.WireType
                }
                , function(e) {
                    u = e.WriteUtils
                }
            ],
            execute: function() {
                n._RF.push({}, "604cbmjpJRC34zz4toLojDN", "PTB_0x03227D_FeedUpgrade_C2S", void 0);
                e("PTB_0x03227D_FeedUpgrade_C2S", function(e) {
                    function n() {
                        for (var t, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (t = e.call.apply(e, [this].concat(n)) || this).typefield = void 0,
                            t.hasField0 = 0,
                            t.numfield = void 0,
                            t
                    }
                    t(n, e);
                    var a = n.prototype;
                    return a.removeType = function() {
                        this.hasField0 &= 4294967294,
                            this.typefield = 0
                    }
                        ,
                        a.removeNum = function() {
                            this.hasField0 &= 4294967293,
                                this.numfield = 0
                        }
                        ,
                        a.writeToBuffer = function(e) {
                            this.hasType && (u.writeTag(e, o.VARINT, 1),
                                u.writeTYPE_UINT32(e, this.typefield)),
                            this.hasNum && (u.writeTag(e, o.VARINT, 2),
                                u.writeTYPE_UINT32(e, this.numfield))
                        }
                        ,
                        a.readFromSlice = function(e, t) {
                            for (var i = 0, n = 0; e.bytesAvailable > t; ) {
                                var a = r.readTYPE_UINT32(e);
                                switch (a >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new s("Bad data format: PTB_0x03227D_FeedUpgrade_C2S.type cannot be set twice.");
                                        ++i,
                                            this.type = r.readTYPE_UINT32(e);
                                        break;
                                    case 2:
                                        if (0 != n)
                                            throw new s("Bad data format: PTB_0x03227D_FeedUpgrade_C2S.num cannot be set twice.");
                                        ++n,
                                            this.num = r.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        r.skip(e, 7 & a)
                                }
                            }
                        }
                        ,
                        i(n, [{
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
                            key: "hasNum",
                            get: function() {
                                return 0 != (2 & this.hasField0)
                            }
                        }, {
                            key: "num",
                            get: function() {
                                return this.numfield
                            },
                            set: function(e) {
                                this.hasField0 |= 2,
                                    this.numfield = e
                            }
                        }]),
                        n
                }(a));
                n._RF.pop()
            }
        }
    }
));
