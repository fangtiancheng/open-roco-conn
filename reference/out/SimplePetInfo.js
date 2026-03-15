System.register("chunks:///_virtual/SimplePetInfo.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts"], (function(e) {
        var t, i, r, a, s, n, h;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    r = e.cclegacy
                }
                , function(e) {
                    a = e.ReadUtils
                }
                , function(e) {
                    s = e.BaseMessage
                }
                , function(e) {
                    n = e.WireType
                }
                , function(e) {
                    h = e.WriteUtils
                }
            ],
            execute: function() {
                r._RF.push({}, "ac1e75wS+ZPpYtLL9lSmtyk", "SimplePetInfo", void 0);
                e("SimplePetInfo", function(e) {
                    function r() {
                        for (var t, i = arguments.length, r = new Array(i), a = 0; a < i; a++)
                            r[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(r)) || this).idfield = void 0,
                            t.hasField0 = 0,
                            t.levelfield = void 0,
                            t.expfield = void 0,
                            t.characterfield = void 0,
                            t
                    }
                    t(r, e);
                    var s = r.prototype;
                    return s.removeId = function() {
                        this.hasField0 &= 4294967294,
                            this.idfield = 0
                    }
                        ,
                        s.removeLevel = function() {
                            this.hasField0 &= 4294967293,
                                this.levelfield = 0
                        }
                        ,
                        s.removeExp = function() {
                            this.hasField0 &= 4294967291,
                                this.expfield = 0
                        }
                        ,
                        s.removeCharacter = function() {
                            this.hasField0 &= 4294967287,
                                this.characterfield = 0
                        }
                        ,
                        s.writeToBuffer = function(e) {
                            this.hasId && (h.writeTag(e, n.VARINT, 1),
                                h.writeTYPE_UINT32(e, this.idfield)),
                            this.hasLevel && (h.writeTag(e, n.VARINT, 2),
                                h.writeTYPE_UINT32(e, this.levelfield)),
                            this.hasExp && (h.writeTag(e, n.VARINT, 3),
                                h.writeTYPE_UINT32(e, this.expfield)),
                            this.hasCharacter && (h.writeTag(e, n.VARINT, 4),
                                h.writeTYPE_UINT32(e, this.characterfield))
                        }
                        ,
                        s.readFromSlice = function(e, t) {
                            for (var i = 0, r = 0, s = 0, n = 0; e.bytesAvailable > t; ) {
                                var h = a.readTYPE_UINT32(e);
                                switch (h >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: SimplePetInfo.id cannot be set twice.");
                                        ++i,
                                            this.id = a.readTYPE_UINT32(e);
                                        break;
                                    case 2:
                                        if (0 != r)
                                            throw new Error("Bad data format: SimplePetInfo.level cannot be set twice.");
                                        ++r,
                                            this.level = a.readTYPE_UINT32(e);
                                        break;
                                    case 3:
                                        if (0 != s)
                                            throw new Error("Bad data format: SimplePetInfo.exp cannot be set twice.");
                                        ++s,
                                            this.exp = a.readTYPE_UINT32(e);
                                        break;
                                    case 4:
                                        if (0 != n)
                                            throw new Error("Bad data format: SimplePetInfo.character cannot be set twice.");
                                        ++n,
                                            this.character = a.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        a.skip(e, 7 & h)
                                }
                            }
                        }
                        ,
                        i(r, [{
                            key: "hasId",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "id",
                            get: function() {
                                return this.hasId ? this.idfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.idfield = e
                            }
                        }, {
                            key: "hasLevel",
                            get: function() {
                                return 0 != (2 & this.hasField0)
                            }
                        }, {
                            key: "level",
                            get: function() {
                                return this.hasLevel ? this.levelfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 2,
                                    this.levelfield = e
                            }
                        }, {
                            key: "hasExp",
                            get: function() {
                                return 0 != (4 & this.hasField0)
                            }
                        }, {
                            key: "exp",
                            get: function() {
                                return this.hasExp ? this.expfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 4,
                                    this.expfield = e
                            }
                        }, {
                            key: "hasCharacter",
                            get: function() {
                                return 0 != (8 & this.hasField0)
                            }
                        }, {
                            key: "character",
                            get: function() {
                                return this.hasCharacter ? this.characterfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 8,
                                    this.characterfield = e
                            }
                        }]),
                        r
                }(s));
                r._RF.pop()
            }
        }
    }
));
