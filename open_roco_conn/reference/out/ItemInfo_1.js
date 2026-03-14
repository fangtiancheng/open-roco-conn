System.register("chunks:///_virtual/ItemInfo2.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseMessage.ts", "./WriteUtils.ts", "./ReadUtils.ts", "./WireType.ts"], (function(t) {
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
                    s = t.BaseMessage
                }
                , function(t) {
                    r = t.WriteUtils
                }
                , function(t) {
                    o = t.ReadUtils
                }
                , function(t) {
                    a = t.WireType
                }
            ],
            execute: function() {
                n._RF.push({}, "848bfj68C5J64K2LSvNlIE9", "ItemInfo", void 0);
                t("ItemInfo", function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this).item_idfield = void 0,
                            e.hasField0 = 0,
                            e.item_countfield = void 0,
                            e.typefield = void 0,
                            e
                    }
                    e(n, t);
                    var s = n.prototype;
                    return s.removeItemId = function() {
                        this.hasField0 &= 4294967294,
                            this.item_idfield = 0
                    }
                        ,
                        s.removeItemCount = function() {
                            this.hasField0 &= 4294967293,
                                this.item_countfield = 0
                        }
                        ,
                        s.removeType = function() {
                            this.hasField0 &= 4294967291,
                                this.typefield = 0
                        }
                        ,
                        s.writeToBuffer = function(t) {
                            this.hasItemId && (r.writeTag(t, a.VARINT, 1),
                                r.writeTYPE_UINT32(t, this.item_idfield)),
                            this.hasItemCount && (r.writeTag(t, a.VARINT, 2),
                                r.writeTYPE_INT32(t, this.item_countfield)),
                            this.hasType && (r.writeTag(t, a.VARINT, 3),
                                r.writeTYPE_UINT32(t, this.typefield))
                        }
                        ,
                        s.readFromSlice = function(t, e) {
                            for (var i = 0, n = 0, s = 0; t.bytesAvailable > e; ) {
                                var r = o.readTYPE_UINT32(t);
                                switch (r >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: ItemInfo.itemId cannot be set twice.");
                                        ++i,
                                            this.itemId = o.readTYPE_UINT32(t);
                                        break;
                                    case 2:
                                        if (0 != n)
                                            throw new Error("Bad data format: ItemInfo.itemCount cannot be set twice.");
                                        ++n,
                                            this.itemCount = o.readTYPE_INT32(t);
                                        break;
                                    case 3:
                                        if (0 != s)
                                            throw new Error("Bad data format: ItemInfo.type cannot be set twice.");
                                        ++s,
                                            this.type = o.readTYPE_UINT32(t);
                                        break;
                                    default:
                                        o.skip(t, 7 & r)
                                }
                            }
                        }
                        ,
                        i(n, [{
                            key: "hasItemId",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "itemId",
                            get: function() {
                                return this.hasItemId ? this.item_idfield : 0
                            },
                            set: function(t) {
                                this.hasField0 |= 1,
                                    this.item_idfield = t
                            }
                        }, {
                            key: "hasItemCount",
                            get: function() {
                                return 0 != (2 & this.hasField0)
                            }
                        }, {
                            key: "itemCount",
                            get: function() {
                                return this.hasItemCount ? this.item_countfield : 0
                            },
                            set: function(t) {
                                this.hasField0 |= 2,
                                    this.item_countfield = t
                            }
                        }, {
                            key: "hasType",
                            get: function() {
                                return 0 != (4 & this.hasField0)
                            }
                        }, {
                            key: "type",
                            get: function() {
                                return this.hasType ? this.typefield : 0
                            },
                            set: function(t) {
                                this.hasField0 |= 4,
                                    this.typefield = t
                            }
                        }]),
                        n
                }(s));
                n._RF.pop()
            }
        }
    }
));
