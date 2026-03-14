System.register("chunks:///_virtual/AllocateExpReq.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts"], (function(e) {
        var t, i, a, l, n, s, o;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    a = e.cclegacy
                }
                , function(e) {
                    l = e.ReadUtils
                }
                , function(e) {
                    n = e.BaseMessage
                }
                , function(e) {
                    s = e.WireType
                }
                , function(e) {
                    o = e.WriteUtils
                }
            ],
            execute: function() {
                a._RF.push({}, "04899+eTkxF66yxoXVJG54X", "AllocateExpReq", void 0);
                e("AllocateExpReq", function(e) {
                    function a() {
                        for (var t, i = arguments.length, a = new Array(i), l = 0; l < i; l++)
                            a[l] = arguments[l];
                        return (t = e.call.apply(e, [this].concat(a)) || this).indexfield = void 0,
                            t.hasField0 = 0,
                            t.allocate_expfield = void 0,
                            t
                    }
                    t(a, e);
                    var n = a.prototype;
                    return n.removeIndex = function() {
                        this.hasField0 &= 4294967294,
                            this.indexfield = 0
                    }
                        ,
                        n.removeAllocateExp = function() {
                            this.hasField0 &= 4294967293,
                                this.allocate_expfield = 0
                        }
                        ,
                        n.writeToBuffer = function(e) {
                            this.hasIndex && (o.writeTag(e, s.VARINT, 1),
                                o.writeTYPE_UINT32(e, this.indexfield)),
                            this.hasAllocateExp && (o.writeTag(e, s.VARINT, 2),
                                o.writeTYPE_UINT32(e, this.allocate_expfield))
                        }
                        ,
                        n.readFromSlice = function(e, t) {
                            for (var i = 0, a = 0; e.bytesAvailable > t; ) {
                                var n = l.readTYPE_UINT32(e);
                                switch (n >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: AllocateExpReq.index cannot be set twice.");
                                        ++i,
                                            this.index = l.readTYPE_UINT32(e);
                                        break;
                                    case 2:
                                        if (0 != a)
                                            throw new Error("Bad data format: AllocateExpReq.allocateExp cannot be set twice.");
                                        ++a,
                                            this.allocateExp = l.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        l.skip(e, 7 & n)
                                }
                            }
                        }
                        ,
                        i(a, [{
                            key: "hasIndex",
                            get: function() {
                                return 0 != (1 & this.hasField0)
                            }
                        }, {
                            key: "index",
                            get: function() {
                                return this.hasIndex ? this.indexfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 1,
                                    this.indexfield = e
                            }
                        }, {
                            key: "hasAllocateExp",
                            get: function() {
                                return 0 != (2 & this.hasField0)
                            }
                        }, {
                            key: "allocateExp",
                            get: function() {
                                return this.hasAllocateExp ? this.allocate_expfield : 0
                            },
                            set: function(e) {
                                this.hasField0 |= 2,
                                    this.allocate_expfield = e
                            }
                        }]),
                        a
                }(n));
                a._RF.pop()
            }
        }
    }
));
