System.register("chunks:///_virtual/ZoneGuardianPet_ItemInfo.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./IOError.ts", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts"], (function(t) {
        var e, i, n, s, o, r, a, u;
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
                    o = t.ReadUtils
                }
                , function(t) {
                    r = t.BaseMessage
                }
                , function(t) {
                    a = t.WireType
                }
                , function(t) {
                    u = t.WriteUtils
                }
            ],
            execute: function() {
                n._RF.push({}, "f2615KZc+NENZtW0PFs48/B", "ZoneGuardianPet_ItemInfo", void 0);
                t("ZoneGuardianPet_ItemInfo", function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this).idfield = void 0,
                            e.hasField0 = 0,
                            e.countfield = void 0,
                            e
                    }
                    e(n, t);
                    var r = n.prototype;
                    return r.removeId = function() {
                        this.hasField0 &= 4294967294,
                            this.idfield = 0
                    }
                        ,
                        r.removeCount = function() {
                            this.hasField0 &= 4294967293,
                                this.countfield = 0
                        }
                        ,
                        r.writeToBuffer = function(t) {
                            this.hasId && (u.writeTag(t, a.VARINT, 1),
                                u.writeTYPE_UINT32(t, this.idfield)),
                            this.hasCount && (u.writeTag(t, a.VARINT, 2),
                                u.writeTYPE_INT32(t, this.countfield))
                        }
                        ,
                        r.readFromSlice = function(t, e) {
                            for (var i = 0, n = 0; t.bytesAvailable > e; ) {
                                var r = o.readTYPE_UINT32(t);
                                switch (r >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new s("Bad data format: ItemInfo.id cannot be set twice.");
                                        ++i,
                                            this.id = o.readTYPE_UINT32(t);
                                        break;
                                    case 2:
                                        if (0 != n)
                                            throw new s("Bad data format: ItemInfo.count cannot be set twice.");
                                        ++n,
                                            this.count = o.readTYPE_INT32(t);
                                        break;
                                    default:
                                        o.skip(t, 7 & r)
                                }
                            }
                        }
                        ,
                        i(n, [{
                            key: "hasId",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "id",
                            get: function() {
                                return this.hasId ? this.idfield : 0
                            },
                            set: function(t) {
                                this.hasField0 |= 1,
                                    this.idfield = t
                            }
                        }, {
                            key: "hasCount",
                            get: function() {
                                return 0 != (2 & this.hasField0)
                            }
                        }, {
                            key: "count",
                            get: function() {
                                return this.hasCount ? this.countfield : 0
                            },
                            set: function(t) {
                                this.hasField0 |= 2,
                                    this.countfield = t
                            }
                        }]),
                        n
                }(r));
                n._RF.pop()
            }
        }
    }
));
