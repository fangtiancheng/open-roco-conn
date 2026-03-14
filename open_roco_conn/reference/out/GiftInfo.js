System.register("chunks:///_virtual/GiftInfo.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts", "./ItemInfo.ts"], (function(t) {
        var e, i, s, a, n, r, o, f;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    s = t.cclegacy
                }
                , function(t) {
                    a = t.ReadUtils
                }
                , function(t) {
                    n = t.BaseMessage
                }
                , function(t) {
                    r = t.WireType
                }
                , function(t) {
                    o = t.WriteUtils
                }
                , function(t) {
                    f = t.ItemInfo
                }
            ],
            execute: function() {
                s._RF.push({}, "5f342KLoolG4oVJ+3HgYQgQ", "GiftInfo", void 0);
                t("GiftInfo", function(t) {
                    function s() {
                        for (var e, i = arguments.length, s = new Array(i), a = 0; a < i; a++)
                            s[a] = arguments[a];
                        return (e = t.call.apply(t, [this].concat(s)) || this).day$field = void 0,
                            e.hasField$0 = 0,
                            e.state$field = void 0,
                            e.items = [],
                            e
                    }
                    e(s, t);
                    var n = s.prototype;
                    return n.removeDay = function() {
                        this.hasField$0 &= 4294967294,
                            this.day$field = 0
                    }
                        ,
                        n.removeState = function() {
                            this.hasField$0 &= 4294967293,
                                this.state$field = 0
                        }
                        ,
                        n.writeToBuffer = function(t) {
                            this.hasDay && (o.writeTag(t, r.VARINT, 1),
                                o.writeTYPE_UINT32(t, this.day$field)),
                            this.hasState && (o.writeTag(t, r.VARINT, 2),
                                o.writeTYPE_UINT32(t, this.state$field));
                            for (var e = 0; e < this.items.length; ++e)
                                o.writeTag(t, r.LENGTH_DELIMITED, 3),
                                    o.writeTYPE_MESSAGE(t, this.items[e])
                        }
                        ,
                        n.readFromSlice = function(t, e) {
                            for (var i = 0, s = 0; t.bytesAvailable > e; ) {
                                var n = a.readTYPE_UINT32(t);
                                switch (n >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: GiftInfo.day cannot be set twice.");
                                        ++i,
                                            this.day = a.readTYPE_UINT32(t);
                                        break;
                                    case 2:
                                        if (0 != s)
                                            throw new Error("Bad data format: GiftInfo.state cannot be set twice.");
                                        ++s,
                                            this.state = a.readTYPE_UINT32(t);
                                        break;
                                    case 3:
                                        var r = new f;
                                        a.readTYPE_MESSAGE(t, r),
                                            this.items.push(r);
                                        break;
                                    default:
                                        a.skip(t, 7 & n)
                                }
                            }
                        }
                        ,
                        i(s, [{
                            key: "hasDay",
                            get: function() {
                                return 0 != (1 & this.hasField$0)
                            }
                        }, {
                            key: "day",
                            get: function() {
                                return this.hasDay ? this.day$field : 0
                            },
                            set: function(t) {
                                this.hasField$0 |= 1,
                                    this.day$field = t
                            }
                        }, {
                            key: "hasState",
                            get: function() {
                                return 0 != (2 & this.hasField$0)
                            }
                        }, {
                            key: "state",
                            get: function() {
                                return this.hasState ? this.state$field : 0
                            },
                            set: function(t) {
                                this.hasField$0 |= 2,
                                    this.state$field = t
                            }
                        }]),
                        s
                }(n));
                s._RF.pop()
            }
        }
    }
));
