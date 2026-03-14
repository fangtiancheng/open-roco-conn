System.register("chunks:///_virtual/QueryInfoRsp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ReadUtils.ts", "./BaseMessage.ts", "./WireType.ts", "./WriteUtils.ts", "./GiftInfo.ts", "./RetInfo2.ts"], (function(e) {
        var t, i, n, a, s, o, r, f, h;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    a = e.ReadUtils
                }
                , function(e) {
                    s = e.BaseMessage
                }
                , function(e) {
                    o = e.WireType
                }
                , function(e) {
                    r = e.WriteUtils
                }
                , function(e) {
                    f = e.GiftInfo
                }
                , function(e) {
                    h = e.RetInfo
                }
            ],
            execute: function() {
                n._RF.push({}, "a26afAvYH9Htp8pLsp7rdBv", "QueryInfoRsp", void 0);
                e("QueryInfoRsp", function(e) {
                    function n() {
                        for (var t, i = arguments.length, n = new Array(i), a = 0; a < i; a++)
                            n[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(n)) || this).ret_info$field = void 0,
                            t.infos = [],
                            t.login_day$field = void 0,
                            t.hasField$0 = 0,
                            t.newInfos = [],
                            t.new_login_day$field = void 0,
                            t.next_day$field = void 0,
                            t.show_flag$field = void 0,
                            t.dayInfos = [],
                            t.day_type$field = void 0,
                            t
                    }
                    t(n, e);
                    var s = n.prototype;
                    return s.removeRetInfo = function() {
                        this.ret_info$field = null
                    }
                        ,
                        s.removeLoginDay = function() {
                            this.hasField$0 &= 4294967294,
                                this.login_day$field = 0
                        }
                        ,
                        s.removeNewLoginDay = function() {
                            this.hasField$0 &= 4294967293,
                                this.new_login_day$field = 0
                        }
                        ,
                        s.removeNextDay = function() {
                            this.hasField$0 &= 4294967291,
                                this.next_day$field = 0
                        }
                        ,
                        s.removeShowFlag = function() {
                            this.hasField$0 &= 4294967287,
                                this.show_flag$field = 0
                        }
                        ,
                        s.removeDayType = function() {
                            this.hasField$0 &= 4294967279,
                                this.day_type$field = 0
                        }
                        ,
                        s.writeToBuffer = function(e) {
                            this.hasRetInfo && (r.writeTag(e, o.LENGTH_DELIMITED, 1),
                                r.writeTYPE_MESSAGE(e, this.ret_info$field));
                            for (var t = 0; t < this.infos.length; ++t)
                                r.writeTag(e, o.LENGTH_DELIMITED, 2),
                                    r.writeTYPE_MESSAGE(e, this.infos[t]);
                            this.hasLoginDay && (r.writeTag(e, o.VARINT, 3),
                                r.writeTYPE_UINT32(e, this.login_day$field));
                            for (var i = 0; i < this.newInfos.length; ++i)
                                r.writeTag(e, o.LENGTH_DELIMITED, 4),
                                    r.writeTYPE_MESSAGE(e, this.newInfos[i]);
                            this.hasNewLoginDay && (r.writeTag(e, o.VARINT, 5),
                                r.writeTYPE_UINT32(e, this.new_login_day$field)),
                            this.hasNextDay && (r.writeTag(e, o.VARINT, 6),
                                r.writeTYPE_UINT32(e, this.next_day$field)),
                            this.hasShowFlag && (r.writeTag(e, o.VARINT, 7),
                                r.writeTYPE_UINT32(e, this.show_flag$field));
                            for (var n = 0; n < this.dayInfos.length; ++n)
                                r.writeTag(e, o.LENGTH_DELIMITED, 8),
                                    r.writeTYPE_MESSAGE(e, this.dayInfos[n]);
                            this.hasDayType && (r.writeTag(e, o.VARINT, 9),
                                r.writeTYPE_UINT32(e, this.day_type$field))
                        }
                        ,
                        s.readFromSlice = function(e, t) {
                            for (var i = 0, n = 0, s = 0, o = 0, r = 0, d = 0; e.bytesAvailable > t; ) {
                                var l = a.readTYPE_UINT32(e);
                                switch (l >>> 3) {
                                    case 1:
                                        if (0 != i)
                                            throw new Error("Bad data format: QueryInfoRsp.retInfo cannot be set twice.");
                                        ++i,
                                            this.retInfo = new h,
                                            a.readTYPE_MESSAGE(e, this.retInfo);
                                        break;
                                    case 2:
                                        var y = new f;
                                        a.readTYPE_MESSAGE(e, y),
                                            this.infos.push(y);
                                        break;
                                    case 3:
                                        if (0 != n)
                                            throw new Error("Bad data format: QueryInfoRsp.loginDay cannot be set twice.");
                                        ++n,
                                            this.loginDay = a.readTYPE_UINT32(e);
                                        break;
                                    case 4:
                                        var u = new f;
                                        a.readTYPE_MESSAGE(e, u),
                                            this.newInfos.push(u);
                                        break;
                                    case 5:
                                        if (0 != s)
                                            throw new Error("Bad data format: QueryInfoRsp.newLoginDay cannot be set twice.");
                                        ++s,
                                            this.newLoginDay = a.readTYPE_UINT32(e);
                                        break;
                                    case 6:
                                        if (0 != o)
                                            throw new Error("Bad data format: QueryInfoRsp.nextDay cannot be set twice.");
                                        ++o,
                                            this.nextDay = a.readTYPE_UINT32(e);
                                        break;
                                    case 7:
                                        if (0 != r)
                                            throw new Error("Bad data format: QueryInfoRsp.showFlag cannot be set twice.");
                                        ++r,
                                            this.showFlag = a.readTYPE_UINT32(e);
                                        break;
                                    case 8:
                                        var c = new f;
                                        a.readTYPE_MESSAGE(e, c),
                                            this.dayInfos.push(c);
                                        break;
                                    case 9:
                                        if (0 != d)
                                            throw new Error("Bad data format: QueryInfoRsp.dayType cannot be set twice.");
                                        ++d,
                                            this.dayType = a.readTYPE_UINT32(e);
                                        break;
                                    default:
                                        a.skip(e, 7 & l)
                                }
                            }
                        }
                        ,
                        i(n, [{
                            key: "hasRetInfo",
                            get: function() {
                                return null != this.ret_info$field
                            }
                        }, {
                            key: "retInfo",
                            get: function() {
                                return this.ret_info$field
                            },
                            set: function(e) {
                                this.ret_info$field = e
                            }
                        }, {
                            key: "hasLoginDay",
                            get: function() {
                                return 0 != (1 & this.hasField$0)
                            }
                        }, {
                            key: "loginDay",
                            get: function() {
                                return this.hasLoginDay ? this.login_day$field : 0
                            },
                            set: function(e) {
                                this.hasField$0 |= 1,
                                    this.login_day$field = e
                            }
                        }, {
                            key: "hasNewLoginDay",
                            get: function() {
                                return 0 != (2 & this.hasField$0)
                            }
                        }, {
                            key: "newLoginDay",
                            get: function() {
                                return this.hasNewLoginDay ? this.new_login_day$field : 0
                            },
                            set: function(e) {
                                this.hasField$0 |= 2,
                                    this.new_login_day$field = e
                            }
                        }, {
                            key: "hasNextDay",
                            get: function() {
                                return 0 != (4 & this.hasField$0)
                            }
                        }, {
                            key: "nextDay",
                            get: function() {
                                return this.next_day$field
                            },
                            set: function(e) {
                                this.hasField$0 |= 4,
                                    this.next_day$field = e
                            }
                        }, {
                            key: "hasShowFlag",
                            get: function() {
                                return 0 != (8 & this.hasField$0)
                            }
                        }, {
                            key: "showFlag",
                            get: function() {
                                return this.show_flag$field
                            },
                            set: function(e) {
                                this.hasField$0 |= 8,
                                    this.show_flag$field = e
                            }
                        }, {
                            key: "hasDayType",
                            get: function() {
                                return 0 != (16 & this.hasField$0)
                            }
                        }, {
                            key: "dayType",
                            get: function() {
                                return this.day_type$field
                            },
                            set: function(e) {
                                this.hasField$0 |= 16,
                                    this.day_type$field = e
                            }
                        }]),
                        n
                }(s));
                n._RF.pop()
            }
        }
    }
));
