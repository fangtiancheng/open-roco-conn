System.register("chunks:///_virtual/ItemInfo.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts"], (function(t) {
        var e, i, n, s, r, o, a;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    s = t.ReadUtils
                }
                , function(t) {
                    r = t.BaseMessage
                }
                , function(t) {
                    o = t.WireType
                }
                , function(t) {
                    a = t.WriteUtils
                }
            ],
            execute: function() {
                n._RF.push({}, "b0dcaUYZt1PEKzDdFOpRGVK", "ItemInfo", void 0);
                t("ItemInfo", function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this).id$field = void 0,
                            e.hasField$0 = 0,
                            e.count$field = void 0,
                            e.type$field = void 0,
                            e
                    }
                    e(n, t);
                    var r = n.prototype;
                    return r.removeId = function() {
                        this.hasField$0 &= 4294967294,
                            this.id$field = 0
                    }
                        ,
                        r.removeCount = function() {
                            this.hasField$0 &= 4294967293,
                                this.count$field = 0
                        }
                        ,
                        r.removeType = function() {
                            this.hasField$0 &= 4294967291,
                                this.type$field = 0
                        }
                        ,
                        r.writeToBuffer = function(t) {
                            this.hasId && (a.writeTag(t, o.VARINT, 1),
                                a.writeTYPE_UINT32(t, this.id$field)),
                            this.hasCount && (a.writeTag(t, o.VARINT, 2),
                                a.writeTYPE_UINT32(t, this.count$field)),
                            this.hasType && (a.writeTag(t, o.VARINT, 3),
                                a.writeTYPE_UINT32(t, this.type$field))
                        }
                        ,
                        r.readFromSlice = function(t, e) {
                            for (var i = 0, n = 0, r = 0; t.bytesAvailable > e; ) {
                                var o = s.readTYPE_UINT32(t);
                                switch (o >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: ItemInfo.id cannot be set twice.");
                                        ++i,
                                            this.id = s.readTYPE_UINT32(t);
                                        break;
                                    case 2:
                                        if (0 != n)
                                            throw new Error("Bad data format: ItemInfo.count cannot be set twice.");
                                        ++n,
                                            this.count = s.readTYPE_UINT32(t);
                                        break;
                                    case 3:
                                        if (0 != r)
                                            throw new Error("Bad data format: ItemInfo.type cannot be set twice.");
                                        ++r,
                                            this.type = s.readTYPE_UINT32(t);
                                        break;
                                    default:
                                        s.skip(t, 7 & o)
                                }
                            }
                        }
                        ,
                        i(n, [{
                            key: "hasId",
                            get: function() {
                                return 0 != (1 & this.hasField$0)
                            }
                        }, {
                            key: "id",
                            get: function() {
                                return this.hasId ? this.id$field : 0
                            },
                            set: function(t) {
                                this.hasField$0 |= 1,
                                    this.id$field = t
                            }
                        }, {
                            key: "hasCount",
                            get: function() {
                                return 0 != (2 & this.hasField$0)
                            }
                        }, {
                            key: "count",
                            get: function() {
                                return this.hasCount ? this.count$field : 0
                            },
                            set: function(t) {
                                this.hasField$0 |= 2,
                                    this.count$field = t
                            }
                        }, {
                            key: "hasType",
                            get: function() {
                                return 0 != (4 & this.hasField$0)
                            }
                        }, {
                            key: "type",
                            get: function() {
                                return this.hasType ? this.type$field : 0
                            },
                            set: function(t) {
                                this.hasField$0 |= 4,
                                    this.type$field = t
                            }
                        }]),
                        n
                }(r));
                n._RF.pop()
            }
        }
    }
));
