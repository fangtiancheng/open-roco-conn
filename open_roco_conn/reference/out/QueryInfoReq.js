System.register("chunks:///_virtual/QueryInfoReq.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts"], (function(e) {
        var t, i, s, r, n, a, o;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    s = e.cclegacy
                }
                , function(e) {
                    r = e.ReadUtils
                }
                , function(e) {
                    n = e.BaseMessage
                }
                , function(e) {
                    a = e.WireType
                }
                , function(e) {
                    o = e.WriteUtils
                }
            ],
            execute: function() {
                s._RF.push({}, "dfaacvjsqxI2o6w66ZX4y8k", "QueryInfoReq", void 0);
                e("QueryInfoReq", function(e) {
                    function s() {
                        for (var t, i = arguments.length, s = new Array(i), r = 0; r < i; r++)
                            s[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(s)) || this).type$field = void 0,
                            t.hasField$0 = 0,
                            t
                    }
                    t(s, e);
                    var n = s.prototype;
                    return n.removeType = function() {
                        this.hasField$0 &= 4294967294,
                            this.type$field = 0
                    }
                        ,
                        n.writeToBuffer = function(e) {
                            this.hasType && (o.writeTag(e, a.VARINT, 1),
                                o.writeTYPE_UINT32(e, this.type$field))
                        }
                        ,
                        n.readFromSlice = function(e, t) {
                            for (var i = 0; e.bytesAvailable > t; ) {
                                var s = r.readTYPE_UINT32(e);
                                switch (s >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: QueryInfoReq.type cannot be set twice.");
                                        ++i,
                                            this.type = r.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        r.skip(e, 7 & s)
                                }
                            }
                        }
                        ,
                        i(s, [{
                            key: "hasType",
                            get: function() {
                                return 0 != (1 & this.hasField$0)
                            }
                        }, {
                            key: "type",
                            get: function() {
                                return this.hasType ? this.type$field : 0
                            },
                            set: function(e) {
                                this.hasField$0 |= 1,
                                    this.type$field = e
                            }
                        }]),
                        s
                }(n));
                s._RF.pop()
            }
        }
    }
));
