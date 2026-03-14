System.register("chunks:///_virtual/QuestInfo2.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts"], (function(t) {
        var e, i, s, a, n, r, u;
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
                    u = t.WriteUtils
                }
            ],
            execute: function() {
                s._RF.push({}, "a1980yuSqdPJYcGxhZqoWQ4", "QuestInfo", void 0);
                t("QuestInfo", function(t) {
                    function s() {
                        for (var e, i = arguments.length, s = new Array(i), a = 0; a < i; a++)
                            s[a] = arguments[a];
                        return (e = t.call.apply(t, [this].concat(s)) || this).statusfield = void 0,
                            e.hasField0 = 0,
                            e.idfield = void 0,
                            e.give_upfield = void 0,
                            e
                    }
                    e(s, t);
                    var n = s.prototype;
                    return n.removeStatus = function() {
                        this.hasField0 &= 4294967294,
                            this.statusfield = 0
                    }
                        ,
                        n.removeId = function() {
                            this.hasField0 &= 4294967293,
                                this.idfield = 0
                        }
                        ,
                        n.removeGiveUp = function() {
                            this.hasField0 &= 4294967291,
                                this.give_upfield = 0
                        }
                        ,
                        n.writeToBuffer = function(t) {
                            this.hasStatus && (u.writeTag(t, r.VARINT, 1),
                                u.writeTYPE_UINT32(t, this.statusfield)),
                            this.hasId && (u.writeTag(t, r.VARINT, 2),
                                u.writeTYPE_UINT32(t, this.idfield)),
                            this.hasGiveUp && (u.writeTag(t, r.VARINT, 3),
                                u.writeTYPE_UINT32(t, this.give_upfield))
                        }
                        ,
                        n.readFromSlice = function(t, e) {
                            for (var i = 0, s = 0, n = 0; t.bytesAvailable > e; ) {
                                var r = a.readTYPE_UINT32(t);
                                switch (r >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: QuestInfo.status cannot be set twice.");
                                        ++i,
                                            this.status = a.readTYPE_UINT32(t);
                                        break;
                                    case 2:
                                        if (0 != s)
                                            throw new Error("Bad data format: QuestInfo.id cannot be set twice.");
                                        ++s,
                                            this.id = a.readTYPE_UINT32(t);
                                        break;
                                    case 3:
                                        if (0 != n)
                                            throw new Error("Bad data format: QuestInfo.giveUp cannot be set twice.");
                                        ++n,
                                            this.giveUp = a.readTYPE_UINT32(t);
                                        break;
                                    default:
                                        a.skip(t, 7 & r)
                                }
                            }
                        }
                        ,
                        i(s, [{
                            key: "hasStatus",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "status",
                            get: function() {
                                return this.hasStatus ? this.statusfield : 0
                            },
                            set: function(t) {
                                this.hasField0 |= 1,
                                    this.statusfield = t
                            }
                        }, {
                            key: "hasId",
                            get: function() {
                                return 0 != (2 & this.hasField0)
                            }
                        }, {
                            key: "id",
                            get: function() {
                                return this.hasId ? this.idfield : 0
                            },
                            set: function(t) {
                                this.hasField0 |= 2,
                                    this.idfield = t
                            }
                        }, {
                            key: "hasGiveUp",
                            get: function() {
                                return 0 != (4 & this.hasField0)
                            }
                        }, {
                            key: "giveUp",
                            get: function() {
                                return this.hasGiveUp ? this.give_upfield : 0
                            },
                            set: function(t) {
                                this.hasField0 |= 4,
                                    this.give_upfield = t
                            }
                        }]),
                        s
                }(n));
                s._RF.pop()
            }
        }
    }
));
