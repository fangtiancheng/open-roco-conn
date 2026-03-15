System.register("chunks:///_virtual/ProtoBundle.js", ["./cjs-loader.mjs", "./minimal.js"], (function(e, t) {
        var n, o;
        return {
            setters: [function(e) {
                n = e.default
            }
                , function(e) {
                    o = e.__cjsMetaURL
                }
            ],
            execute: function() {
                e("default", void 0);
                var r = e("__cjsMetaURL", t.meta.url);
                n.define(r, (function(t, n, o, r, i) {
                        var a, u, l, s = n("protobufjs/minimal"), c = s.Reader, f = s.Writer, p = s.util, d = s.roots.default || (s.roots.default = {});
                        d.MailBoxProto = ((a = {}).RetInfo = function() {
                            function e(e) {
                                if (e)
                                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                        null != e[t[n]] && (this[t[n]] = e[t[n]])
                            }
                            return e.prototype.retCode = 0,
                                e.prototype.retMsg = p.newBuffer([]),
                                e.create = function(t) {
                                    return new e(t)
                                }
                                ,
                                e.encode = function(e, t) {
                                    return t || (t = f.create()),
                                    null != e.retCode && Object.hasOwnProperty.call(e, "retCode") && t.uint32(8).int32(e.retCode),
                                    null != e.retMsg && Object.hasOwnProperty.call(e, "retMsg") && t.uint32(18).bytes(e.retMsg),
                                        t
                                }
                                ,
                                e.encodeDelimited = function(e, t) {
                                    return this.encode(e, t).ldelim()
                                }
                                ,
                                e.decode = function(e, t) {
                                    e instanceof c || (e = c.create(e));
                                    for (var n = void 0 === t ? e.len : e.pos + t, o = new d.MailBoxProto.RetInfo; e.pos < n; ) {
                                        var r = e.uint32();
                                        switch (r >>> 3) {
                                            case 1:
                                                o.retCode = e.int32();
                                                break;
                                            case 2:
                                                o.retMsg = e.bytes();
                                                break;
                                            default:
                                                e.skipType(7 & r)
                                        }
                                    }
                                    return o
                                }
                                ,
                                e.decodeDelimited = function(e) {
                                    return e instanceof c || (e = new c(e)),
                                        this.decode(e, e.uint32())
                                }
                                ,
                                e.verify = function(e) {
                                    return "object" != typeof e || null === e ? "object expected" : null != e.retCode && e.hasOwnProperty("retCode") && !p.isInteger(e.retCode) ? "retCode: integer expected" : null != e.retMsg && e.hasOwnProperty("retMsg") && !(e.retMsg && "number" == typeof e.retMsg.length || p.isString(e.retMsg)) ? "retMsg: buffer expected" : null
                                }
                                ,
                                e.fromObject = function(e) {
                                    if (e instanceof d.MailBoxProto.RetInfo)
                                        return e;
                                    var t = new d.MailBoxProto.RetInfo;
                                    return null != e.retCode && (t.retCode = 0 | e.retCode),
                                    null != e.retMsg && ("string" == typeof e.retMsg ? p.base64.decode(e.retMsg, t.retMsg = p.newBuffer(p.base64.length(e.retMsg)), 0) : e.retMsg.length >= 0 && (t.retMsg = e.retMsg)),
                                        t
                                }
                                ,
                                e.toObject = function(e, t) {
                                    t || (t = {});
                                    var n = {};
                                    return t.defaults && (n.retCode = 0,
                                        t.bytes === String ? n.retMsg = "" : (n.retMsg = [],
                                        t.bytes !== Array && (n.retMsg = p.newBuffer(n.retMsg)))),
                                    null != e.retCode && e.hasOwnProperty("retCode") && (n.retCode = e.retCode),
                                    null != e.retMsg && e.hasOwnProperty("retMsg") && (n.retMsg = t.bytes === String ? p.base64.encode(e.retMsg, 0, e.retMsg.length) : t.bytes === Array ? Array.prototype.slice.call(e.retMsg) : e.retMsg),
                                        n
                                }
                                ,
                                e.prototype.toJSON = function() {
                                    return this.constructor.toObject(this, s.util.toJSONOptions)
                                }
                                ,
                                e.getTypeUrl = function(e) {
                                    return void 0 === e && (e = "type.googleapis.com"),
                                    e + "/MailBoxProto.RetInfo"
                                }
                                ,
                                e
                        }(),
                            a.MailBaseInfo = function() {
                                function e(e) {
                                    if (e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.serialNum = 0,
                                    e.prototype.sendTime = 0,
                                    e.prototype.deadLine = 0,
                                    e.prototype.state = 0,
                                    e.prototype.title = p.newBuffer([]),
                                    e.prototype.sender = p.newBuffer([]),
                                    e.prototype.attach = 0,
                                    e.create = function(t) {
                                        return new e(t)
                                    }
                                    ,
                                    e.encode = function(e, t) {
                                        return t || (t = f.create()),
                                        null != e.serialNum && Object.hasOwnProperty.call(e, "serialNum") && t.uint32(8).uint32(e.serialNum),
                                        null != e.sendTime && Object.hasOwnProperty.call(e, "sendTime") && t.uint32(16).int32(e.sendTime),
                                        null != e.deadLine && Object.hasOwnProperty.call(e, "deadLine") && t.uint32(24).int32(e.deadLine),
                                        null != e.state && Object.hasOwnProperty.call(e, "state") && t.uint32(32).uint32(e.state),
                                        null != e.title && Object.hasOwnProperty.call(e, "title") && t.uint32(42).bytes(e.title),
                                        null != e.sender && Object.hasOwnProperty.call(e, "sender") && t.uint32(50).bytes(e.sender),
                                        null != e.attach && Object.hasOwnProperty.call(e, "attach") && t.uint32(56).uint32(e.attach),
                                            t
                                    }
                                    ,
                                    e.encodeDelimited = function(e, t) {
                                        return this.encode(e, t).ldelim()
                                    }
                                    ,
                                    e.decode = function(e, t) {
                                        e instanceof c || (e = c.create(e));
                                        for (var n = void 0 === t ? e.len : e.pos + t, o = new d.MailBoxProto.MailBaseInfo; e.pos < n; ) {
                                            var r = e.uint32();
                                            switch (r >>> 3) {
                                                case 1:
                                                    o.serialNum = e.uint32();
                                                    break;
                                                case 2:
                                                    o.sendTime = e.int32();
                                                    break;
                                                case 3:
                                                    o.deadLine = e.int32();
                                                    break;
                                                case 4:
                                                    o.state = e.uint32();
                                                    break;
                                                case 5:
                                                    o.title = e.bytes();
                                                    break;
                                                case 6:
                                                    o.sender = e.bytes();
                                                    break;
                                                case 7:
                                                    o.attach = e.uint32();
                                                    break;
                                                default:
                                                    e.skipType(7 & r)
                                            }
                                        }
                                        return o
                                    }
                                    ,
                                    e.decodeDelimited = function(e) {
                                        return e instanceof c || (e = new c(e)),
                                            this.decode(e, e.uint32())
                                    }
                                    ,
                                    e.verify = function(e) {
                                        return "object" != typeof e || null === e ? "object expected" : null != e.serialNum && e.hasOwnProperty("serialNum") && !p.isInteger(e.serialNum) ? "serialNum: integer expected" : null != e.sendTime && e.hasOwnProperty("sendTime") && !p.isInteger(e.sendTime) ? "sendTime: integer expected" : null != e.deadLine && e.hasOwnProperty("deadLine") && !p.isInteger(e.deadLine) ? "deadLine: integer expected" : null != e.state && e.hasOwnProperty("state") && !p.isInteger(e.state) ? "state: integer expected" : null != e.title && e.hasOwnProperty("title") && !(e.title && "number" == typeof e.title.length || p.isString(e.title)) ? "title: buffer expected" : null != e.sender && e.hasOwnProperty("sender") && !(e.sender && "number" == typeof e.sender.length || p.isString(e.sender)) ? "sender: buffer expected" : null != e.attach && e.hasOwnProperty("attach") && !p.isInteger(e.attach) ? "attach: integer expected" : null
                                    }
                                    ,
                                    e.fromObject = function(e) {
                                        if (e instanceof d.MailBoxProto.MailBaseInfo)
                                            return e;
                                        var t = new d.MailBoxProto.MailBaseInfo;
                                        return null != e.serialNum && (t.serialNum = e.serialNum >>> 0),
                                        null != e.sendTime && (t.sendTime = 0 | e.sendTime),
                                        null != e.deadLine && (t.deadLine = 0 | e.deadLine),
                                        null != e.state && (t.state = e.state >>> 0),
                                        null != e.title && ("string" == typeof e.title ? p.base64.decode(e.title, t.title = p.newBuffer(p.base64.length(e.title)), 0) : e.title.length >= 0 && (t.title = e.title)),
                                        null != e.sender && ("string" == typeof e.sender ? p.base64.decode(e.sender, t.sender = p.newBuffer(p.base64.length(e.sender)), 0) : e.sender.length >= 0 && (t.sender = e.sender)),
                                        null != e.attach && (t.attach = e.attach >>> 0),
                                            t
                                    }
                                    ,
                                    e.toObject = function(e, t) {
                                        t || (t = {});
                                        var n = {};
                                        return t.defaults && (n.serialNum = 0,
                                            n.sendTime = 0,
                                            n.deadLine = 0,
                                            n.state = 0,
                                            t.bytes === String ? n.title = "" : (n.title = [],
                                            t.bytes !== Array && (n.title = p.newBuffer(n.title))),
                                            t.bytes === String ? n.sender = "" : (n.sender = [],
                                            t.bytes !== Array && (n.sender = p.newBuffer(n.sender))),
                                            n.attach = 0),
                                        null != e.serialNum && e.hasOwnProperty("serialNum") && (n.serialNum = e.serialNum),
                                        null != e.sendTime && e.hasOwnProperty("sendTime") && (n.sendTime = e.sendTime),
                                        null != e.deadLine && e.hasOwnProperty("deadLine") && (n.deadLine = e.deadLine),
                                        null != e.state && e.hasOwnProperty("state") && (n.state = e.state),
                                        null != e.title && e.hasOwnProperty("title") && (n.title = t.bytes === String ? p.base64.encode(e.title, 0, e.title.length) : t.bytes === Array ? Array.prototype.slice.call(e.title) : e.title),
                                        null != e.sender && e.hasOwnProperty("sender") && (n.sender = t.bytes === String ? p.base64.encode(e.sender, 0, e.sender.length) : t.bytes === Array ? Array.prototype.slice.call(e.sender) : e.sender),
                                        null != e.attach && e.hasOwnProperty("attach") && (n.attach = e.attach),
                                            n
                                    }
                                    ,
                                    e.prototype.toJSON = function() {
                                        return this.constructor.toObject(this, s.util.toJSONOptions)
                                    }
                                    ,
                                    e.getTypeUrl = function(e) {
                                        return void 0 === e && (e = "type.googleapis.com"),
                                        e + "/MailBoxProto.MailBaseInfo"
                                    }
                                    ,
                                    e
                            }(),
                            a.Attach = function() {
                                function e(e) {
                                    if (e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.serialNum = 0,
                                    e.prototype.type = 0,
                                    e.prototype.id = 0,
                                    e.prototype.count = 0,
                                    e.prototype.state = 0,
                                    e.create = function(t) {
                                        return new e(t)
                                    }
                                    ,
                                    e.encode = function(e, t) {
                                        return t || (t = f.create()),
                                        null != e.serialNum && Object.hasOwnProperty.call(e, "serialNum") && t.uint32(8).uint32(e.serialNum),
                                        null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(16).uint32(e.type),
                                        null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(24).uint32(e.id),
                                        null != e.count && Object.hasOwnProperty.call(e, "count") && t.uint32(32).uint32(e.count),
                                        null != e.state && Object.hasOwnProperty.call(e, "state") && t.uint32(40).uint32(e.state),
                                            t
                                    }
                                    ,
                                    e.encodeDelimited = function(e, t) {
                                        return this.encode(e, t).ldelim()
                                    }
                                    ,
                                    e.decode = function(e, t) {
                                        e instanceof c || (e = c.create(e));
                                        for (var n = void 0 === t ? e.len : e.pos + t, o = new d.MailBoxProto.Attach; e.pos < n; ) {
                                            var r = e.uint32();
                                            switch (r >>> 3) {
                                                case 1:
                                                    o.serialNum = e.uint32();
                                                    break;
                                                case 2:
                                                    o.type = e.uint32();
                                                    break;
                                                case 3:
                                                    o.id = e.uint32();
                                                    break;
                                                case 4:
                                                    o.count = e.uint32();
                                                    break;
                                                case 5:
                                                    o.state = e.uint32();
                                                    break;
                                                default:
                                                    e.skipType(7 & r)
                                            }
                                        }
                                        return o
                                    }
                                    ,
                                    e.decodeDelimited = function(e) {
                                        return e instanceof c || (e = new c(e)),
                                            this.decode(e, e.uint32())
                                    }
                                    ,
                                    e.verify = function(e) {
                                        return "object" != typeof e || null === e ? "object expected" : null != e.serialNum && e.hasOwnProperty("serialNum") && !p.isInteger(e.serialNum) ? "serialNum: integer expected" : null != e.type && e.hasOwnProperty("type") && !p.isInteger(e.type) ? "type: integer expected" : null != e.id && e.hasOwnProperty("id") && !p.isInteger(e.id) ? "id: integer expected" : null != e.count && e.hasOwnProperty("count") && !p.isInteger(e.count) ? "count: integer expected" : null != e.state && e.hasOwnProperty("state") && !p.isInteger(e.state) ? "state: integer expected" : null
                                    }
                                    ,
                                    e.fromObject = function(e) {
                                        if (e instanceof d.MailBoxProto.Attach)
                                            return e;
                                        var t = new d.MailBoxProto.Attach;
                                        return null != e.serialNum && (t.serialNum = e.serialNum >>> 0),
                                        null != e.type && (t.type = e.type >>> 0),
                                        null != e.id && (t.id = e.id >>> 0),
                                        null != e.count && (t.count = e.count >>> 0),
                                        null != e.state && (t.state = e.state >>> 0),
                                            t
                                    }
                                    ,
                                    e.toObject = function(e, t) {
                                        t || (t = {});
                                        var n = {};
                                        return t.defaults && (n.serialNum = 0,
                                            n.type = 0,
                                            n.id = 0,
                                            n.count = 0,
                                            n.state = 0),
                                        null != e.serialNum && e.hasOwnProperty("serialNum") && (n.serialNum = e.serialNum),
                                        null != e.type && e.hasOwnProperty("type") && (n.type = e.type),
                                        null != e.id && e.hasOwnProperty("id") && (n.id = e.id),
                                        null != e.count && e.hasOwnProperty("count") && (n.count = e.count),
                                        null != e.state && e.hasOwnProperty("state") && (n.state = e.state),
                                            n
                                    }
                                    ,
                                    e.prototype.toJSON = function() {
                                        return this.constructor.toObject(this, s.util.toJSONOptions)
                                    }
                                    ,
                                    e.getTypeUrl = function(e) {
                                        return void 0 === e && (e = "type.googleapis.com"),
                                        e + "/MailBoxProto.Attach"
                                    }
                                    ,
                                    e
                            }(),
                            a.MailDetail = function() {
                                function e(e) {
                                    if (this.attach = [],
                                        e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.baseInfo = null,
                                    e.prototype.content = p.newBuffer([]),
                                    e.prototype.attach = p.emptyArray,
                                    e.create = function(t) {
                                        return new e(t)
                                    }
                                    ,
                                    e.encode = function(e, t) {
                                        if (t || (t = f.create()),
                                        null != e.baseInfo && Object.hasOwnProperty.call(e, "baseInfo") && d.MailBoxProto.MailBaseInfo.encode(e.baseInfo, t.uint32(10).fork()).ldelim(),
                                        null != e.content && Object.hasOwnProperty.call(e, "content") && t.uint32(18).bytes(e.content),
                                        null != e.attach && e.attach.length)
                                            for (var n = 0; n < e.attach.length; ++n)
                                                d.MailBoxProto.Attach.encode(e.attach[n], t.uint32(26).fork()).ldelim();
                                        return t
                                    }
                                    ,
                                    e.encodeDelimited = function(e, t) {
                                        return this.encode(e, t).ldelim()
                                    }
                                    ,
                                    e.decode = function(e, t) {
                                        e instanceof c || (e = c.create(e));
                                        for (var n = void 0 === t ? e.len : e.pos + t, o = new d.MailBoxProto.MailDetail; e.pos < n; ) {
                                            var r = e.uint32();
                                            switch (r >>> 3) {
                                                case 1:
                                                    o.baseInfo = d.MailBoxProto.MailBaseInfo.decode(e, e.uint32());
                                                    break;
                                                case 2:
                                                    o.content = e.bytes();
                                                    break;
                                                case 3:
                                                    o.attach && o.attach.length || (o.attach = []),
                                                        o.attach.push(d.MailBoxProto.Attach.decode(e, e.uint32()));
                                                    break;
                                                default:
                                                    e.skipType(7 & r)
                                            }
                                        }
                                        return o
                                    }
                                    ,
                                    e.decodeDelimited = function(e) {
                                        return e instanceof c || (e = new c(e)),
                                            this.decode(e, e.uint32())
                                    }
                                    ,
                                    e.verify = function(e) {
                                        if ("object" != typeof e || null === e)
                                            return "object expected";
                                        if (null != e.baseInfo && e.hasOwnProperty("baseInfo") && (n = d.MailBoxProto.MailBaseInfo.verify(e.baseInfo)))
                                            return "baseInfo." + n;
                                        if (null != e.content && e.hasOwnProperty("content") && !(e.content && "number" == typeof e.content.length || p.isString(e.content)))
                                            return "content: buffer expected";
                                        if (null != e.attach && e.hasOwnProperty("attach")) {
                                            if (!Array.isArray(e.attach))
                                                return "attach: array expected";
                                            for (var t = 0; t < e.attach.length; ++t) {
                                                var n;
                                                if (n = d.MailBoxProto.Attach.verify(e.attach[t]))
                                                    return "attach." + n
                                            }
                                        }
                                        return null
                                    }
                                    ,
                                    e.fromObject = function(e) {
                                        if (e instanceof d.MailBoxProto.MailDetail)
                                            return e;
                                        var t = new d.MailBoxProto.MailDetail;
                                        if (null != e.baseInfo) {
                                            if ("object" != typeof e.baseInfo)
                                                throw TypeError(".MailBoxProto.MailDetail.baseInfo: object expected");
                                            t.baseInfo = d.MailBoxProto.MailBaseInfo.fromObject(e.baseInfo)
                                        }
                                        if (null != e.content && ("string" == typeof e.content ? p.base64.decode(e.content, t.content = p.newBuffer(p.base64.length(e.content)), 0) : e.content.length >= 0 && (t.content = e.content)),
                                            e.attach) {
                                            if (!Array.isArray(e.attach))
                                                throw TypeError(".MailBoxProto.MailDetail.attach: array expected");
                                            t.attach = [];
                                            for (var n = 0; n < e.attach.length; ++n) {
                                                if ("object" != typeof e.attach[n])
                                                    throw TypeError(".MailBoxProto.MailDetail.attach: object expected");
                                                t.attach[n] = d.MailBoxProto.Attach.fromObject(e.attach[n])
                                            }
                                        }
                                        return t
                                    }
                                    ,
                                    e.toObject = function(e, t) {
                                        t || (t = {});
                                        var n = {};
                                        if ((t.arrays || t.defaults) && (n.attach = []),
                                        t.defaults && (n.baseInfo = null,
                                            t.bytes === String ? n.content = "" : (n.content = [],
                                            t.bytes !== Array && (n.content = p.newBuffer(n.content)))),
                                        null != e.baseInfo && e.hasOwnProperty("baseInfo") && (n.baseInfo = d.MailBoxProto.MailBaseInfo.toObject(e.baseInfo, t)),
                                        null != e.content && e.hasOwnProperty("content") && (n.content = t.bytes === String ? p.base64.encode(e.content, 0, e.content.length) : t.bytes === Array ? Array.prototype.slice.call(e.content) : e.content),
                                        e.attach && e.attach.length) {
                                            n.attach = [];
                                            for (var o = 0; o < e.attach.length; ++o)
                                                n.attach[o] = d.MailBoxProto.Attach.toObject(e.attach[o], t)
                                        }
                                        return n
                                    }
                                    ,
                                    e.prototype.toJSON = function() {
                                        return this.constructor.toObject(this, s.util.toJSONOptions)
                                    }
                                    ,
                                    e.getTypeUrl = function(e) {
                                        return void 0 === e && (e = "type.googleapis.com"),
                                        e + "/MailBoxProto.MailDetail"
                                    }
                                    ,
                                    e
                            }(),
                            a.ItemInfo = function() {
                                function e(e) {
                                    if (e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.itemType = 0,
                                    e.prototype.id = 0,
                                    e.prototype.count = 0,
                                    e.create = function(t) {
                                        return new e(t)
                                    }
                                    ,
                                    e.encode = function(e, t) {
                                        return t || (t = f.create()),
                                        null != e.itemType && Object.hasOwnProperty.call(e, "itemType") && t.uint32(8).uint32(e.itemType),
                                        null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(16).uint32(e.id),
                                        null != e.count && Object.hasOwnProperty.call(e, "count") && t.uint32(24).uint32(e.count),
                                            t
                                    }
                                    ,
                                    e.encodeDelimited = function(e, t) {
                                        return this.encode(e, t).ldelim()
                                    }
                                    ,
                                    e.decode = function(e, t) {
                                        e instanceof c || (e = c.create(e));
                                        for (var n = void 0 === t ? e.len : e.pos + t, o = new d.MailBoxProto.ItemInfo; e.pos < n; ) {
                                            var r = e.uint32();
                                            switch (r >>> 3) {
                                                case 1:
                                                    o.itemType = e.uint32();
                                                    break;
                                                case 2:
                                                    o.id = e.uint32();
                                                    break;
                                                case 3:
                                                    o.count = e.uint32();
                                                    break;
                                                default:
                                                    e.skipType(7 & r)
                                            }
                                        }
                                        return o
                                    }
                                    ,
                                    e.decodeDelimited = function(e) {
                                        return e instanceof c || (e = new c(e)),
                                            this.decode(e, e.uint32())
                                    }
                                    ,
                                    e.verify = function(e) {
                                        return "object" != typeof e || null === e ? "object expected" : null != e.itemType && e.hasOwnProperty("itemType") && !p.isInteger(e.itemType) ? "itemType: integer expected" : null != e.id && e.hasOwnProperty("id") && !p.isInteger(e.id) ? "id: integer expected" : null != e.count && e.hasOwnProperty("count") && !p.isInteger(e.count) ? "count: integer expected" : null
                                    }
                                    ,
                                    e.fromObject = function(e) {
                                        if (e instanceof d.MailBoxProto.ItemInfo)
                                            return e;
                                        var t = new d.MailBoxProto.ItemInfo;
                                        return null != e.itemType && (t.itemType = e.itemType >>> 0),
                                        null != e.id && (t.id = e.id >>> 0),
                                        null != e.count && (t.count = e.count >>> 0),
                                            t
                                    }
                                    ,
                                    e.toObject = function(e, t) {
                                        t || (t = {});
                                        var n = {};
                                        return t.defaults && (n.itemType = 0,
                                            n.id = 0,
                                            n.count = 0),
                                        null != e.itemType && e.hasOwnProperty("itemType") && (n.itemType = e.itemType),
                                        null != e.id && e.hasOwnProperty("id") && (n.id = e.id),
                                        null != e.count && e.hasOwnProperty("count") && (n.count = e.count),
                                            n
                                    }
                                    ,
                                    e.prototype.toJSON = function() {
                                        return this.constructor.toObject(this, s.util.toJSONOptions)
                                    }
                                    ,
                                    e.getTypeUrl = function(e) {
                                        return void 0 === e && (e = "type.googleapis.com"),
                                        e + "/MailBoxProto.ItemInfo"
                                    }
                                    ,
                                    e
                            }(),
                            a.QueryListRsp = function() {
                                function e(e) {
                                    if (this.mailBaseInfo = [],
                                        e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.retInfo = null,
                                    e.prototype.mailBaseInfo = p.emptyArray,
                                    e.create = function(t) {
                                        return new e(t)
                                    }
                                    ,
                                    e.encode = function(e, t) {
                                        if (t || (t = f.create()),
                                        null != e.retInfo && Object.hasOwnProperty.call(e, "retInfo") && d.MailBoxProto.RetInfo.encode(e.retInfo, t.uint32(10).fork()).ldelim(),
                                        null != e.mailBaseInfo && e.mailBaseInfo.length)
                                            for (var n = 0; n < e.mailBaseInfo.length; ++n)
                                                d.MailBoxProto.MailBaseInfo.encode(e.mailBaseInfo[n], t.uint32(18).fork()).ldelim();
                                        return t
                                    }
                                    ,
                                    e.encodeDelimited = function(e, t) {
                                        return this.encode(e, t).ldelim()
                                    }
                                    ,
                                    e.decode = function(e, t) {
                                        e instanceof c || (e = c.create(e));
                                        for (var n = void 0 === t ? e.len : e.pos + t, o = new d.MailBoxProto.QueryListRsp; e.pos < n; ) {
                                            var r = e.uint32();
                                            switch (r >>> 3) {
                                                case 1:
                                                    o.retInfo = d.MailBoxProto.RetInfo.decode(e, e.uint32());
                                                    break;
                                                case 2:
                                                    o.mailBaseInfo && o.mailBaseInfo.length || (o.mailBaseInfo = []),
                                                        o.mailBaseInfo.push(d.MailBoxProto.MailBaseInfo.decode(e, e.uint32()));
                                                    break;
                                                default:
                                                    e.skipType(7 & r)
                                            }
                                        }
                                        return o
                                    }
                                    ,
                                    e.decodeDelimited = function(e) {
                                        return e instanceof c || (e = new c(e)),
                                            this.decode(e, e.uint32())
                                    }
                                    ,
                                    e.verify = function(e) {
                                        if ("object" != typeof e || null === e)
                                            return "object expected";
                                        if (null != e.retInfo && e.hasOwnProperty("retInfo") && (n = d.MailBoxProto.RetInfo.verify(e.retInfo)))
                                            return "retInfo." + n;
                                        if (null != e.mailBaseInfo && e.hasOwnProperty("mailBaseInfo")) {
                                            if (!Array.isArray(e.mailBaseInfo))
                                                return "mailBaseInfo: array expected";
                                            for (var t = 0; t < e.mailBaseInfo.length; ++t) {
                                                var n;
                                                if (n = d.MailBoxProto.MailBaseInfo.verify(e.mailBaseInfo[t]))
                                                    return "mailBaseInfo." + n
                                            }
                                        }
                                        return null
                                    }
                                    ,
                                    e.fromObject = function(e) {
                                        if (e instanceof d.MailBoxProto.QueryListRsp)
                                            return e;
                                        var t = new d.MailBoxProto.QueryListRsp;
                                        if (null != e.retInfo) {
                                            if ("object" != typeof e.retInfo)
                                                throw TypeError(".MailBoxProto.QueryListRsp.retInfo: object expected");
                                            t.retInfo = d.MailBoxProto.RetInfo.fromObject(e.retInfo)
                                        }
                                        if (e.mailBaseInfo) {
                                            if (!Array.isArray(e.mailBaseInfo))
                                                throw TypeError(".MailBoxProto.QueryListRsp.mailBaseInfo: array expected");
                                            t.mailBaseInfo = [];
                                            for (var n = 0; n < e.mailBaseInfo.length; ++n) {
                                                if ("object" != typeof e.mailBaseInfo[n])
                                                    throw TypeError(".MailBoxProto.QueryListRsp.mailBaseInfo: object expected");
                                                t.mailBaseInfo[n] = d.MailBoxProto.MailBaseInfo.fromObject(e.mailBaseInfo[n])
                                            }
                                        }
                                        return t
                                    }
                                    ,
                                    e.toObject = function(e, t) {
                                        t || (t = {});
                                        var n = {};
                                        if ((t.arrays || t.defaults) && (n.mailBaseInfo = []),
                                        t.defaults && (n.retInfo = null),
                                        null != e.retInfo && e.hasOwnProperty("retInfo") && (n.retInfo = d.MailBoxProto.RetInfo.toObject(e.retInfo, t)),
                                        e.mailBaseInfo && e.mailBaseInfo.length) {
                                            n.mailBaseInfo = [];
                                            for (var o = 0; o < e.mailBaseInfo.length; ++o)
                                                n.mailBaseInfo[o] = d.MailBoxProto.MailBaseInfo.toObject(e.mailBaseInfo[o], t)
                                        }
                                        return n
                                    }
                                    ,
                                    e.prototype.toJSON = function() {
                                        return this.constructor.toObject(this, s.util.toJSONOptions)
                                    }
                                    ,
                                    e.getTypeUrl = function(e) {
                                        return void 0 === e && (e = "type.googleapis.com"),
                                        e + "/MailBoxProto.QueryListRsp"
                                    }
                                    ,
                                    e
                            }(),
                            a.OpenMailReq = function() {
                                function e(e) {
                                    if (e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.serialNum = 0,
                                    e.create = function(t) {
                                        return new e(t)
                                    }
                                    ,
                                    e.encode = function(e, t) {
                                        return t || (t = f.create()),
                                        null != e.serialNum && Object.hasOwnProperty.call(e, "serialNum") && t.uint32(8).uint32(e.serialNum),
                                            t
                                    }
                                    ,
                                    e.encodeDelimited = function(e, t) {
                                        return this.encode(e, t).ldelim()
                                    }
                                    ,
                                    e.decode = function(e, t) {
                                        e instanceof c || (e = c.create(e));
                                        for (var n = void 0 === t ? e.len : e.pos + t, o = new d.MailBoxProto.OpenMailReq; e.pos < n; ) {
                                            var r = e.uint32();
                                            switch (r >>> 3) {
                                                case 1:
                                                    o.serialNum = e.uint32();
                                                    break;
                                                default:
                                                    e.skipType(7 & r)
                                            }
                                        }
                                        return o
                                    }
                                    ,
                                    e.decodeDelimited = function(e) {
                                        return e instanceof c || (e = new c(e)),
                                            this.decode(e, e.uint32())
                                    }
                                    ,
                                    e.verify = function(e) {
                                        return "object" != typeof e || null === e ? "object expected" : null != e.serialNum && e.hasOwnProperty("serialNum") && !p.isInteger(e.serialNum) ? "serialNum: integer expected" : null
                                    }
                                    ,
                                    e.fromObject = function(e) {
                                        if (e instanceof d.MailBoxProto.OpenMailReq)
                                            return e;
                                        var t = new d.MailBoxProto.OpenMailReq;
                                        return null != e.serialNum && (t.serialNum = e.serialNum >>> 0),
                                            t
                                    }
                                    ,
                                    e.toObject = function(e, t) {
                                        t || (t = {});
                                        var n = {};
                                        return t.defaults && (n.serialNum = 0),
                                        null != e.serialNum && e.hasOwnProperty("serialNum") && (n.serialNum = e.serialNum),
                                            n
                                    }
                                    ,
                                    e.prototype.toJSON = function() {
                                        return this.constructor.toObject(this, s.util.toJSONOptions)
                                    }
                                    ,
                                    e.getTypeUrl = function(e) {
                                        return void 0 === e && (e = "type.googleapis.com"),
                                        e + "/MailBoxProto.OpenMailReq"
                                    }
                                    ,
                                    e
                            }(),
                            a.OpenMailRsp = function() {
                                function e(e) {
                                    if (e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.retInfo = null,
                                    e.prototype.mailDetail = null,
                                    e.create = function(t) {
                                        return new e(t)
                                    }
                                    ,
                                    e.encode = function(e, t) {
                                        return t || (t = f.create()),
                                        null != e.retInfo && Object.hasOwnProperty.call(e, "retInfo") && d.MailBoxProto.RetInfo.encode(e.retInfo, t.uint32(10).fork()).ldelim(),
                                        null != e.mailDetail && Object.hasOwnProperty.call(e, "mailDetail") && d.MailBoxProto.MailDetail.encode(e.mailDetail, t.uint32(18).fork()).ldelim(),
                                            t
                                    }
                                    ,
                                    e.encodeDelimited = function(e, t) {
                                        return this.encode(e, t).ldelim()
                                    }
                                    ,
                                    e.decode = function(e, t) {
                                        e instanceof c || (e = c.create(e));
                                        for (var n = void 0 === t ? e.len : e.pos + t, o = new d.MailBoxProto.OpenMailRsp; e.pos < n; ) {
                                            var r = e.uint32();
                                            switch (r >>> 3) {
                                                case 1:
                                                    o.retInfo = d.MailBoxProto.RetInfo.decode(e, e.uint32());
                                                    break;
                                                case 2:
                                                    o.mailDetail = d.MailBoxProto.MailDetail.decode(e, e.uint32());
                                                    break;
                                                default:
                                                    e.skipType(7 & r)
                                            }
                                        }
                                        return o
                                    }
                                    ,
                                    e.decodeDelimited = function(e) {
                                        return e instanceof c || (e = new c(e)),
                                            this.decode(e, e.uint32())
                                    }
                                    ,
                                    e.verify = function(e) {
                                        return "object" != typeof e || null === e ? "object expected" : null != e.retInfo && e.hasOwnProperty("retInfo") && (t = d.MailBoxProto.RetInfo.verify(e.retInfo)) ? "retInfo." + t : null != e.mailDetail && e.hasOwnProperty("mailDetail") && (t = d.MailBoxProto.MailDetail.verify(e.mailDetail)) ? "mailDetail." + t : null;
                                        var t
                                    }
                                    ,
                                    e.fromObject = function(e) {
                                        if (e instanceof d.MailBoxProto.OpenMailRsp)
                                            return e;
                                        var t = new d.MailBoxProto.OpenMailRsp;
                                        if (null != e.retInfo) {
                                            if ("object" != typeof e.retInfo)
                                                throw TypeError(".MailBoxProto.OpenMailRsp.retInfo: object expected");
                                            t.retInfo = d.MailBoxProto.RetInfo.fromObject(e.retInfo)
                                        }
                                        if (null != e.mailDetail) {
                                            if ("object" != typeof e.mailDetail)
                                                throw TypeError(".MailBoxProto.OpenMailRsp.mailDetail: object expected");
                                            t.mailDetail = d.MailBoxProto.MailDetail.fromObject(e.mailDetail)
                                        }
                                        return t
                                    }
                                    ,
                                    e.toObject = function(e, t) {
                                        t || (t = {});
                                        var n = {};
                                        return t.defaults && (n.retInfo = null,
                                            n.mailDetail = null),
                                        null != e.retInfo && e.hasOwnProperty("retInfo") && (n.retInfo = d.MailBoxProto.RetInfo.toObject(e.retInfo, t)),
                                        null != e.mailDetail && e.hasOwnProperty("mailDetail") && (n.mailDetail = d.MailBoxProto.MailDetail.toObject(e.mailDetail, t)),
                                            n
                                    }
                                    ,
                                    e.prototype.toJSON = function() {
                                        return this.constructor.toObject(this, s.util.toJSONOptions)
                                    }
                                    ,
                                    e.getTypeUrl = function(e) {
                                        return void 0 === e && (e = "type.googleapis.com"),
                                        e + "/MailBoxProto.OpenMailRsp"
                                    }
                                    ,
                                    e
                            }(),
                            a.GetAttachReq = function() {
                                function e(e) {
                                    if (e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.serialNum = 0,
                                    e.prototype.attachId = 0,
                                    e.create = function(t) {
                                        return new e(t)
                                    }
                                    ,
                                    e.encode = function(e, t) {
                                        return t || (t = f.create()),
                                        null != e.serialNum && Object.hasOwnProperty.call(e, "serialNum") && t.uint32(8).uint32(e.serialNum),
                                        null != e.attachId && Object.hasOwnProperty.call(e, "attachId") && t.uint32(16).uint32(e.attachId),
                                            t
                                    }
                                    ,
                                    e.encodeDelimited = function(e, t) {
                                        return this.encode(e, t).ldelim()
                                    }
                                    ,
                                    e.decode = function(e, t) {
                                        e instanceof c || (e = c.create(e));
                                        for (var n = void 0 === t ? e.len : e.pos + t, o = new d.MailBoxProto.GetAttachReq; e.pos < n; ) {
                                            var r = e.uint32();
                                            switch (r >>> 3) {
                                                case 1:
                                                    o.serialNum = e.uint32();
                                                    break;
                                                case 2:
                                                    o.attachId = e.uint32();
                                                    break;
                                                default:
                                                    e.skipType(7 & r)
                                            }
                                        }
                                        return o
                                    }
                                    ,
                                    e.decodeDelimited = function(e) {
                                        return e instanceof c || (e = new c(e)),
                                            this.decode(e, e.uint32())
                                    }
                                    ,
                                    e.verify = function(e) {
                                        return "object" != typeof e || null === e ? "object expected" : null != e.serialNum && e.hasOwnProperty("serialNum") && !p.isInteger(e.serialNum) ? "serialNum: integer expected" : null != e.attachId && e.hasOwnProperty("attachId") && !p.isInteger(e.attachId) ? "attachId: integer expected" : null
                                    }
                                    ,
                                    e.fromObject = function(e) {
                                        if (e instanceof d.MailBoxProto.GetAttachReq)
                                            return e;
                                        var t = new d.MailBoxProto.GetAttachReq;
                                        return null != e.serialNum && (t.serialNum = e.serialNum >>> 0),
                                        null != e.attachId && (t.attachId = e.attachId >>> 0),
                                            t
                                    }
                                    ,
                                    e.toObject = function(e, t) {
                                        t || (t = {});
                                        var n = {};
                                        return t.defaults && (n.serialNum = 0,
                                            n.attachId = 0),
                                        null != e.serialNum && e.hasOwnProperty("serialNum") && (n.serialNum = e.serialNum),
                                        null != e.attachId && e.hasOwnProperty("attachId") && (n.attachId = e.attachId),
                                            n
                                    }
                                    ,
                                    e.prototype.toJSON = function() {
                                        return this.constructor.toObject(this, s.util.toJSONOptions)
                                    }
                                    ,
                                    e.getTypeUrl = function(e) {
                                        return void 0 === e && (e = "type.googleapis.com"),
                                        e + "/MailBoxProto.GetAttachReq"
                                    }
                                    ,
                                    e
                            }(),
                            a.GetAttachRsp = function() {
                                function e(e) {
                                    if (e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.retInfo = null,
                                    e.prototype.flag = 0,
                                    e.prototype.itemInfo = null,
                                    e.create = function(t) {
                                        return new e(t)
                                    }
                                    ,
                                    e.encode = function(e, t) {
                                        return t || (t = f.create()),
                                        null != e.retInfo && Object.hasOwnProperty.call(e, "retInfo") && d.MailBoxProto.RetInfo.encode(e.retInfo, t.uint32(10).fork()).ldelim(),
                                        null != e.flag && Object.hasOwnProperty.call(e, "flag") && t.uint32(16).uint32(e.flag),
                                        null != e.itemInfo && Object.hasOwnProperty.call(e, "itemInfo") && d.MailBoxProto.ItemInfo.encode(e.itemInfo, t.uint32(26).fork()).ldelim(),
                                            t
                                    }
                                    ,
                                    e.encodeDelimited = function(e, t) {
                                        return this.encode(e, t).ldelim()
                                    }
                                    ,
                                    e.decode = function(e, t) {
                                        e instanceof c || (e = c.create(e));
                                        for (var n = void 0 === t ? e.len : e.pos + t, o = new d.MailBoxProto.GetAttachRsp; e.pos < n; ) {
                                            var r = e.uint32();
                                            switch (r >>> 3) {
                                                case 1:
                                                    o.retInfo = d.MailBoxProto.RetInfo.decode(e, e.uint32());
                                                    break;
                                                case 2:
                                                    o.flag = e.uint32();
                                                    break;
                                                case 3:
                                                    o.itemInfo = d.MailBoxProto.ItemInfo.decode(e, e.uint32());
                                                    break;
                                                default:
                                                    e.skipType(7 & r)
                                            }
                                        }
                                        return o
                                    }
                                    ,
                                    e.decodeDelimited = function(e) {
                                        return e instanceof c || (e = new c(e)),
                                            this.decode(e, e.uint32())
                                    }
                                    ,
                                    e.verify = function(e) {
                                        return "object" != typeof e || null === e ? "object expected" : null != e.retInfo && e.hasOwnProperty("retInfo") && (t = d.MailBoxProto.RetInfo.verify(e.retInfo)) ? "retInfo." + t : null != e.flag && e.hasOwnProperty("flag") && !p.isInteger(e.flag) ? "flag: integer expected" : null != e.itemInfo && e.hasOwnProperty("itemInfo") && (t = d.MailBoxProto.ItemInfo.verify(e.itemInfo)) ? "itemInfo." + t : null;
                                        var t
                                    }
                                    ,
                                    e.fromObject = function(e) {
                                        if (e instanceof d.MailBoxProto.GetAttachRsp)
                                            return e;
                                        var t = new d.MailBoxProto.GetAttachRsp;
                                        if (null != e.retInfo) {
                                            if ("object" != typeof e.retInfo)
                                                throw TypeError(".MailBoxProto.GetAttachRsp.retInfo: object expected");
                                            t.retInfo = d.MailBoxProto.RetInfo.fromObject(e.retInfo)
                                        }
                                        if (null != e.flag && (t.flag = e.flag >>> 0),
                                        null != e.itemInfo) {
                                            if ("object" != typeof e.itemInfo)
                                                throw TypeError(".MailBoxProto.GetAttachRsp.itemInfo: object expected");
                                            t.itemInfo = d.MailBoxProto.ItemInfo.fromObject(e.itemInfo)
                                        }
                                        return t
                                    }
                                    ,
                                    e.toObject = function(e, t) {
                                        t || (t = {});
                                        var n = {};
                                        return t.defaults && (n.retInfo = null,
                                            n.flag = 0,
                                            n.itemInfo = null),
                                        null != e.retInfo && e.hasOwnProperty("retInfo") && (n.retInfo = d.MailBoxProto.RetInfo.toObject(e.retInfo, t)),
                                        null != e.flag && e.hasOwnProperty("flag") && (n.flag = e.flag),
                                        null != e.itemInfo && e.hasOwnProperty("itemInfo") && (n.itemInfo = d.MailBoxProto.ItemInfo.toObject(e.itemInfo, t)),
                                            n
                                    }
                                    ,
                                    e.prototype.toJSON = function() {
                                        return this.constructor.toObject(this, s.util.toJSONOptions)
                                    }
                                    ,
                                    e.getTypeUrl = function(e) {
                                        return void 0 === e && (e = "type.googleapis.com"),
                                        e + "/MailBoxProto.GetAttachRsp"
                                    }
                                    ,
                                    e
                            }(),
                            a.DelMailReq = function() {
                                function e(e) {
                                    if (this.serialNum = [],
                                        e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.serialNum = p.emptyArray,
                                    e.create = function(t) {
                                        return new e(t)
                                    }
                                    ,
                                    e.encode = function(e, t) {
                                        if (t || (t = f.create()),
                                        null != e.serialNum && e.serialNum.length)
                                            for (var n = 0; n < e.serialNum.length; ++n)
                                                t.uint32(8).uint32(e.serialNum[n]);
                                        return t
                                    }
                                    ,
                                    e.encodeDelimited = function(e, t) {
                                        return this.encode(e, t).ldelim()
                                    }
                                    ,
                                    e.decode = function(e, t) {
                                        e instanceof c || (e = c.create(e));
                                        for (var n = void 0 === t ? e.len : e.pos + t, o = new d.MailBoxProto.DelMailReq; e.pos < n; ) {
                                            var r = e.uint32();
                                            switch (r >>> 3) {
                                                case 1:
                                                    if (o.serialNum && o.serialNum.length || (o.serialNum = []),
                                                    2 == (7 & r))
                                                        for (var i = e.uint32() + e.pos; e.pos < i; )
                                                            o.serialNum.push(e.uint32());
                                                    else
                                                        o.serialNum.push(e.uint32());
                                                    break;
                                                default:
                                                    e.skipType(7 & r)
                                            }
                                        }
                                        return o
                                    }
                                    ,
                                    e.decodeDelimited = function(e) {
                                        return e instanceof c || (e = new c(e)),
                                            this.decode(e, e.uint32())
                                    }
                                    ,
                                    e.verify = function(e) {
                                        if ("object" != typeof e || null === e)
                                            return "object expected";
                                        if (null != e.serialNum && e.hasOwnProperty("serialNum")) {
                                            if (!Array.isArray(e.serialNum))
                                                return "serialNum: array expected";
                                            for (var t = 0; t < e.serialNum.length; ++t)
                                                if (!p.isInteger(e.serialNum[t]))
                                                    return "serialNum: integer[] expected"
                                        }
                                        return null
                                    }
                                    ,
                                    e.fromObject = function(e) {
                                        if (e instanceof d.MailBoxProto.DelMailReq)
                                            return e;
                                        var t = new d.MailBoxProto.DelMailReq;
                                        if (e.serialNum) {
                                            if (!Array.isArray(e.serialNum))
                                                throw TypeError(".MailBoxProto.DelMailReq.serialNum: array expected");
                                            t.serialNum = [];
                                            for (var n = 0; n < e.serialNum.length; ++n)
                                                t.serialNum[n] = e.serialNum[n] >>> 0
                                        }
                                        return t
                                    }
                                    ,
                                    e.toObject = function(e, t) {
                                        t || (t = {});
                                        var n = {};
                                        if ((t.arrays || t.defaults) && (n.serialNum = []),
                                        e.serialNum && e.serialNum.length) {
                                            n.serialNum = [];
                                            for (var o = 0; o < e.serialNum.length; ++o)
                                                n.serialNum[o] = e.serialNum[o]
                                        }
                                        return n
                                    }
                                    ,
                                    e.prototype.toJSON = function() {
                                        return this.constructor.toObject(this, s.util.toJSONOptions)
                                    }
                                    ,
                                    e.getTypeUrl = function(e) {
                                        return void 0 === e && (e = "type.googleapis.com"),
                                        e + "/MailBoxProto.DelMailReq"
                                    }
                                    ,
                                    e
                            }(),
                            a.DelMailRsp = function() {
                                function e(e) {
                                    if (e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.retInfo = null,
                                    e.create = function(t) {
                                        return new e(t)
                                    }
                                    ,
                                    e.encode = function(e, t) {
                                        return t || (t = f.create()),
                                        null != e.retInfo && Object.hasOwnProperty.call(e, "retInfo") && d.MailBoxProto.RetInfo.encode(e.retInfo, t.uint32(10).fork()).ldelim(),
                                            t
                                    }
                                    ,
                                    e.encodeDelimited = function(e, t) {
                                        return this.encode(e, t).ldelim()
                                    }
                                    ,
                                    e.decode = function(e, t) {
                                        e instanceof c || (e = c.create(e));
                                        for (var n = void 0 === t ? e.len : e.pos + t, o = new d.MailBoxProto.DelMailRsp; e.pos < n; ) {
                                            var r = e.uint32();
                                            switch (r >>> 3) {
                                                case 1:
                                                    o.retInfo = d.MailBoxProto.RetInfo.decode(e, e.uint32());
                                                    break;
                                                default:
                                                    e.skipType(7 & r)
                                            }
                                        }
                                        return o
                                    }
                                    ,
                                    e.decodeDelimited = function(e) {
                                        return e instanceof c || (e = new c(e)),
                                            this.decode(e, e.uint32())
                                    }
                                    ,
                                    e.verify = function(e) {
                                        if ("object" != typeof e || null === e)
                                            return "object expected";
                                        if (null != e.retInfo && e.hasOwnProperty("retInfo")) {
                                            var t = d.MailBoxProto.RetInfo.verify(e.retInfo);
                                            if (t)
                                                return "retInfo." + t
                                        }
                                        return null
                                    }
                                    ,
                                    e.fromObject = function(e) {
                                        if (e instanceof d.MailBoxProto.DelMailRsp)
                                            return e;
                                        var t = new d.MailBoxProto.DelMailRsp;
                                        if (null != e.retInfo) {
                                            if ("object" != typeof e.retInfo)
                                                throw TypeError(".MailBoxProto.DelMailRsp.retInfo: object expected");
                                            t.retInfo = d.MailBoxProto.RetInfo.fromObject(e.retInfo)
                                        }
                                        return t
                                    }
                                    ,
                                    e.toObject = function(e, t) {
                                        t || (t = {});
                                        var n = {};
                                        return t.defaults && (n.retInfo = null),
                                        null != e.retInfo && e.hasOwnProperty("retInfo") && (n.retInfo = d.MailBoxProto.RetInfo.toObject(e.retInfo, t)),
                                            n
                                    }
                                    ,
                                    e.prototype.toJSON = function() {
                                        return this.constructor.toObject(this, s.util.toJSONOptions)
                                    }
                                    ,
                                    e.getTypeUrl = function(e) {
                                        return void 0 === e && (e = "type.googleapis.com"),
                                        e + "/MailBoxProto.DelMailRsp"
                                    }
                                    ,
                                    e
                            }(),
                            a),
                            d.AngelMessageBox = ((u = {}).RetInfo = function() {
                                function e(e) {
                                    if (e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.retCode = 0,
                                    e.prototype.retMsg = "",
                                    e.create = function(t) {
                                        return new e(t)
                                    }
                                    ,
                                    e.encode = function(e, t) {
                                        return t || (t = f.create()),
                                        null != e.retCode && Object.hasOwnProperty.call(e, "retCode") && t.uint32(8).int32(e.retCode),
                                        null != e.retMsg && Object.hasOwnProperty.call(e, "retMsg") && t.uint32(18).string(e.retMsg),
                                            t
                                    }
                                    ,
                                    e.encodeDelimited = function(e, t) {
                                        return this.encode(e, t).ldelim()
                                    }
                                    ,
                                    e.decode = function(e, t) {
                                        e instanceof c || (e = c.create(e));
                                        for (var n = void 0 === t ? e.len : e.pos + t, o = new d.AngelMessageBox.RetInfo; e.pos < n; ) {
                                            var r = e.uint32();
                                            switch (r >>> 3) {
                                                case 1:
                                                    o.retCode = e.int32();
                                                    break;
                                                case 2:
                                                    o.retMsg = e.string();
                                                    break;
                                                default:
                                                    e.skipType(7 & r)
                                            }
                                        }
                                        return o
                                    }
                                    ,
                                    e.decodeDelimited = function(e) {
                                        return e instanceof c || (e = new c(e)),
                                            this.decode(e, e.uint32())
                                    }
                                    ,
                                    e.verify = function(e) {
                                        return "object" != typeof e || null === e ? "object expected" : null != e.retCode && e.hasOwnProperty("retCode") && !p.isInteger(e.retCode) ? "retCode: integer expected" : null != e.retMsg && e.hasOwnProperty("retMsg") && !p.isString(e.retMsg) ? "retMsg: string expected" : null
                                    }
                                    ,
                                    e.fromObject = function(e) {
                                        if (e instanceof d.AngelMessageBox.RetInfo)
                                            return e;
                                        var t = new d.AngelMessageBox.RetInfo;
                                        return null != e.retCode && (t.retCode = 0 | e.retCode),
                                        null != e.retMsg && (t.retMsg = String(e.retMsg)),
                                            t
                                    }
                                    ,
                                    e.toObject = function(e, t) {
                                        t || (t = {});
                                        var n = {};
                                        return t.defaults && (n.retCode = 0,
                                            n.retMsg = ""),
                                        null != e.retCode && e.hasOwnProperty("retCode") && (n.retCode = e.retCode),
                                        null != e.retMsg && e.hasOwnProperty("retMsg") && (n.retMsg = e.retMsg),
                                            n
                                    }
                                    ,
                                    e.prototype.toJSON = function() {
                                        return this.constructor.toObject(this, s.util.toJSONOptions)
                                    }
                                    ,
                                    e.getTypeUrl = function(e) {
                                        return void 0 === e && (e = "type.googleapis.com"),
                                        e + "/AngelMessageBox.RetInfo"
                                    }
                                    ,
                                    e
                            }(),
                                u.Empty = function() {
                                    function e(e) {
                                        if (e)
                                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                                    }
                                    return e.create = function(t) {
                                        return new e(t)
                                    }
                                        ,
                                        e.encode = function(e, t) {
                                            return t || (t = f.create()),
                                                t
                                        }
                                        ,
                                        e.encodeDelimited = function(e, t) {
                                            return this.encode(e, t).ldelim()
                                        }
                                        ,
                                        e.decode = function(e, t) {
                                            e instanceof c || (e = c.create(e));
                                            for (var n = void 0 === t ? e.len : e.pos + t, o = new d.AngelMessageBox.Empty; e.pos < n; ) {
                                                var r = e.uint32();
                                                e.skipType(7 & r)
                                            }
                                            return o
                                        }
                                        ,
                                        e.decodeDelimited = function(e) {
                                            return e instanceof c || (e = new c(e)),
                                                this.decode(e, e.uint32())
                                        }
                                        ,
                                        e.verify = function(e) {
                                            return "object" != typeof e || null === e ? "object expected" : null
                                        }
                                        ,
                                        e.fromObject = function(e) {
                                            return e instanceof d.AngelMessageBox.Empty ? e : new d.AngelMessageBox.Empty
                                        }
                                        ,
                                        e.toObject = function() {
                                            return {}
                                        }
                                        ,
                                        e.prototype.toJSON = function() {
                                            return this.constructor.toObject(this, s.util.toJSONOptions)
                                        }
                                        ,
                                        e.getTypeUrl = function(e) {
                                            return void 0 === e && (e = "type.googleapis.com"),
                                            e + "/AngelMessageBox.Empty"
                                        }
                                        ,
                                        e
                                }(),
                                u.MessageEntity = function() {
                                    function e(e) {
                                        if (e)
                                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                                    }
                                    return e.prototype.type = 0,
                                        e.prototype.operate = 0,
                                        e.prototype.total = 0,
                                        e.prototype.current = 0,
                                        e.prototype.petid = 0,
                                        e.create = function(t) {
                                            return new e(t)
                                        }
                                        ,
                                        e.encode = function(e, t) {
                                            return t || (t = f.create()),
                                            null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(8).uint32(e.type),
                                            null != e.operate && Object.hasOwnProperty.call(e, "operate") && t.uint32(16).uint32(e.operate),
                                            null != e.total && Object.hasOwnProperty.call(e, "total") && t.uint32(24).uint32(e.total),
                                            null != e.current && Object.hasOwnProperty.call(e, "current") && t.uint32(32).uint32(e.current),
                                            null != e.petid && Object.hasOwnProperty.call(e, "petid") && t.uint32(40).uint32(e.petid),
                                                t
                                        }
                                        ,
                                        e.encodeDelimited = function(e, t) {
                                            return this.encode(e, t).ldelim()
                                        }
                                        ,
                                        e.decode = function(e, t) {
                                            e instanceof c || (e = c.create(e));
                                            for (var n = void 0 === t ? e.len : e.pos + t, o = new d.AngelMessageBox.MessageEntity; e.pos < n; ) {
                                                var r = e.uint32();
                                                switch (r >>> 3) {
                                                    case 1:
                                                        o.type = e.uint32();
                                                        break;
                                                    case 2:
                                                        o.operate = e.uint32();
                                                        break;
                                                    case 3:
                                                        o.total = e.uint32();
                                                        break;
                                                    case 4:
                                                        o.current = e.uint32();
                                                        break;
                                                    case 5:
                                                        o.petid = e.uint32();
                                                        break;
                                                    default:
                                                        e.skipType(7 & r)
                                                }
                                            }
                                            return o
                                        }
                                        ,
                                        e.decodeDelimited = function(e) {
                                            return e instanceof c || (e = new c(e)),
                                                this.decode(e, e.uint32())
                                        }
                                        ,
                                        e.verify = function(e) {
                                            return "object" != typeof e || null === e ? "object expected" : null != e.type && e.hasOwnProperty("type") && !p.isInteger(e.type) ? "type: integer expected" : null != e.operate && e.hasOwnProperty("operate") && !p.isInteger(e.operate) ? "operate: integer expected" : null != e.total && e.hasOwnProperty("total") && !p.isInteger(e.total) ? "total: integer expected" : null != e.current && e.hasOwnProperty("current") && !p.isInteger(e.current) ? "current: integer expected" : null != e.petid && e.hasOwnProperty("petid") && !p.isInteger(e.petid) ? "petid: integer expected" : null
                                        }
                                        ,
                                        e.fromObject = function(e) {
                                            if (e instanceof d.AngelMessageBox.MessageEntity)
                                                return e;
                                            var t = new d.AngelMessageBox.MessageEntity;
                                            return null != e.type && (t.type = e.type >>> 0),
                                            null != e.operate && (t.operate = e.operate >>> 0),
                                            null != e.total && (t.total = e.total >>> 0),
                                            null != e.current && (t.current = e.current >>> 0),
                                            null != e.petid && (t.petid = e.petid >>> 0),
                                                t
                                        }
                                        ,
                                        e.toObject = function(e, t) {
                                            t || (t = {});
                                            var n = {};
                                            return t.defaults && (n.type = 0,
                                                n.operate = 0,
                                                n.total = 0,
                                                n.current = 0,
                                                n.petid = 0),
                                            null != e.type && e.hasOwnProperty("type") && (n.type = e.type),
                                            null != e.operate && e.hasOwnProperty("operate") && (n.operate = e.operate),
                                            null != e.total && e.hasOwnProperty("total") && (n.total = e.total),
                                            null != e.current && e.hasOwnProperty("current") && (n.current = e.current),
                                            null != e.petid && e.hasOwnProperty("petid") && (n.petid = e.petid),
                                                n
                                        }
                                        ,
                                        e.prototype.toJSON = function() {
                                            return this.constructor.toObject(this, s.util.toJSONOptions)
                                        }
                                        ,
                                        e.getTypeUrl = function(e) {
                                            return void 0 === e && (e = "type.googleapis.com"),
                                            e + "/AngelMessageBox.MessageEntity"
                                        }
                                        ,
                                        e
                                }(),
                                u.PTB_0x181000_QueryStatus_Message_S2C = function() {
                                    function e(e) {
                                        if (this.entity = [],
                                            e)
                                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                                    }
                                    return e.prototype.ret = null,
                                        e.prototype.entity = p.emptyArray,
                                        e.create = function(t) {
                                            return new e(t)
                                        }
                                        ,
                                        e.encode = function(e, t) {
                                            if (t || (t = f.create()),
                                            null != e.ret && Object.hasOwnProperty.call(e, "ret") && d.AngelMessageBox.RetInfo.encode(e.ret, t.uint32(10).fork()).ldelim(),
                                            null != e.entity && e.entity.length)
                                                for (var n = 0; n < e.entity.length; ++n)
                                                    d.AngelMessageBox.MessageEntity.encode(e.entity[n], t.uint32(18).fork()).ldelim();
                                            return t
                                        }
                                        ,
                                        e.encodeDelimited = function(e, t) {
                                            return this.encode(e, t).ldelim()
                                        }
                                        ,
                                        e.decode = function(e, t) {
                                            e instanceof c || (e = c.create(e));
                                            for (var n = void 0 === t ? e.len : e.pos + t, o = new d.AngelMessageBox.PTB_0x181000_QueryStatus_Message_S2C; e.pos < n; ) {
                                                var r = e.uint32();
                                                switch (r >>> 3) {
                                                    case 1:
                                                        o.ret = d.AngelMessageBox.RetInfo.decode(e, e.uint32());
                                                        break;
                                                    case 2:
                                                        o.entity && o.entity.length || (o.entity = []),
                                                            o.entity.push(d.AngelMessageBox.MessageEntity.decode(e, e.uint32()));
                                                        break;
                                                    default:
                                                        e.skipType(7 & r)
                                                }
                                            }
                                            return o
                                        }
                                        ,
                                        e.decodeDelimited = function(e) {
                                            return e instanceof c || (e = new c(e)),
                                                this.decode(e, e.uint32())
                                        }
                                        ,
                                        e.verify = function(e) {
                                            if ("object" != typeof e || null === e)
                                                return "object expected";
                                            if (null != e.ret && e.hasOwnProperty("ret") && (n = d.AngelMessageBox.RetInfo.verify(e.ret)))
                                                return "ret." + n;
                                            if (null != e.entity && e.hasOwnProperty("entity")) {
                                                if (!Array.isArray(e.entity))
                                                    return "entity: array expected";
                                                for (var t = 0; t < e.entity.length; ++t) {
                                                    var n;
                                                    if (n = d.AngelMessageBox.MessageEntity.verify(e.entity[t]))
                                                        return "entity." + n
                                                }
                                            }
                                            return null
                                        }
                                        ,
                                        e.fromObject = function(e) {
                                            if (e instanceof d.AngelMessageBox.PTB_0x181000_QueryStatus_Message_S2C)
                                                return e;
                                            var t = new d.AngelMessageBox.PTB_0x181000_QueryStatus_Message_S2C;
                                            if (null != e.ret) {
                                                if ("object" != typeof e.ret)
                                                    throw TypeError(".AngelMessageBox.PTB_0x181000_QueryStatus_Message_S2C.ret: object expected");
                                                t.ret = d.AngelMessageBox.RetInfo.fromObject(e.ret)
                                            }
                                            if (e.entity) {
                                                if (!Array.isArray(e.entity))
                                                    throw TypeError(".AngelMessageBox.PTB_0x181000_QueryStatus_Message_S2C.entity: array expected");
                                                t.entity = [];
                                                for (var n = 0; n < e.entity.length; ++n) {
                                                    if ("object" != typeof e.entity[n])
                                                        throw TypeError(".AngelMessageBox.PTB_0x181000_QueryStatus_Message_S2C.entity: object expected");
                                                    t.entity[n] = d.AngelMessageBox.MessageEntity.fromObject(e.entity[n])
                                                }
                                            }
                                            return t
                                        }
                                        ,
                                        e.toObject = function(e, t) {
                                            t || (t = {});
                                            var n = {};
                                            if ((t.arrays || t.defaults) && (n.entity = []),
                                            t.defaults && (n.ret = null),
                                            null != e.ret && e.hasOwnProperty("ret") && (n.ret = d.AngelMessageBox.RetInfo.toObject(e.ret, t)),
                                            e.entity && e.entity.length) {
                                                n.entity = [];
                                                for (var o = 0; o < e.entity.length; ++o)
                                                    n.entity[o] = d.AngelMessageBox.MessageEntity.toObject(e.entity[o], t)
                                            }
                                            return n
                                        }
                                        ,
                                        e.prototype.toJSON = function() {
                                            return this.constructor.toObject(this, s.util.toJSONOptions)
                                        }
                                        ,
                                        e.getTypeUrl = function(e) {
                                            return void 0 === e && (e = "type.googleapis.com"),
                                            e + "/AngelMessageBox.PTB_0x181000_QueryStatus_Message_S2C"
                                        }
                                        ,
                                        e
                                }(),
                                u.PTB_0x181001_Update_Message_PUSH = function() {
                                    function e(e) {
                                        if (e)
                                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                                    }
                                    return e.prototype.operateType = 0,
                                        e.prototype.entity = null,
                                        e.create = function(t) {
                                            return new e(t)
                                        }
                                        ,
                                        e.encode = function(e, t) {
                                            return t || (t = f.create()),
                                            null != e.operateType && Object.hasOwnProperty.call(e, "operateType") && t.uint32(8).uint32(e.operateType),
                                            null != e.entity && Object.hasOwnProperty.call(e, "entity") && d.AngelMessageBox.MessageEntity.encode(e.entity, t.uint32(18).fork()).ldelim(),
                                                t
                                        }
                                        ,
                                        e.encodeDelimited = function(e, t) {
                                            return this.encode(e, t).ldelim()
                                        }
                                        ,
                                        e.decode = function(e, t) {
                                            e instanceof c || (e = c.create(e));
                                            for (var n = void 0 === t ? e.len : e.pos + t, o = new d.AngelMessageBox.PTB_0x181001_Update_Message_PUSH; e.pos < n; ) {
                                                var r = e.uint32();
                                                switch (r >>> 3) {
                                                    case 1:
                                                        o.operateType = e.uint32();
                                                        break;
                                                    case 2:
                                                        o.entity = d.AngelMessageBox.MessageEntity.decode(e, e.uint32());
                                                        break;
                                                    default:
                                                        e.skipType(7 & r)
                                                }
                                            }
                                            return o
                                        }
                                        ,
                                        e.decodeDelimited = function(e) {
                                            return e instanceof c || (e = new c(e)),
                                                this.decode(e, e.uint32())
                                        }
                                        ,
                                        e.verify = function(e) {
                                            if ("object" != typeof e || null === e)
                                                return "object expected";
                                            if (null != e.operateType && e.hasOwnProperty("operateType") && !p.isInteger(e.operateType))
                                                return "operateType: integer expected";
                                            if (null != e.entity && e.hasOwnProperty("entity")) {
                                                var t = d.AngelMessageBox.MessageEntity.verify(e.entity);
                                                if (t)
                                                    return "entity." + t
                                            }
                                            return null
                                        }
                                        ,
                                        e.fromObject = function(e) {
                                            if (e instanceof d.AngelMessageBox.PTB_0x181001_Update_Message_PUSH)
                                                return e;
                                            var t = new d.AngelMessageBox.PTB_0x181001_Update_Message_PUSH;
                                            if (null != e.operateType && (t.operateType = e.operateType >>> 0),
                                            null != e.entity) {
                                                if ("object" != typeof e.entity)
                                                    throw TypeError(".AngelMessageBox.PTB_0x181001_Update_Message_PUSH.entity: object expected");
                                                t.entity = d.AngelMessageBox.MessageEntity.fromObject(e.entity)
                                            }
                                            return t
                                        }
                                        ,
                                        e.toObject = function(e, t) {
                                            t || (t = {});
                                            var n = {};
                                            return t.defaults && (n.operateType = 0,
                                                n.entity = null),
                                            null != e.operateType && e.hasOwnProperty("operateType") && (n.operateType = e.operateType),
                                            null != e.entity && e.hasOwnProperty("entity") && (n.entity = d.AngelMessageBox.MessageEntity.toObject(e.entity, t)),
                                                n
                                        }
                                        ,
                                        e.prototype.toJSON = function() {
                                            return this.constructor.toObject(this, s.util.toJSONOptions)
                                        }
                                        ,
                                        e.getTypeUrl = function(e) {
                                            return void 0 === e && (e = "type.googleapis.com"),
                                            e + "/AngelMessageBox.PTB_0x181001_Update_Message_PUSH"
                                        }
                                        ,
                                        e
                                }(),
                                u),
                            d.ZoneNoviceRevision = ((l = {}).RetInfo = function() {
                                function e(e) {
                                    if (e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.retCode = 0,
                                    e.prototype.retMsg = p.newBuffer([]),
                                    e.create = function(t) {
                                        return new e(t)
                                    }
                                    ,
                                    e.encode = function(e, t) {
                                        return t || (t = f.create()),
                                        null != e.retCode && Object.hasOwnProperty.call(e, "retCode") && t.uint32(8).int32(e.retCode),
                                        null != e.retMsg && Object.hasOwnProperty.call(e, "retMsg") && t.uint32(18).bytes(e.retMsg),
                                            t
                                    }
                                    ,
                                    e.encodeDelimited = function(e, t) {
                                        return this.encode(e, t).ldelim()
                                    }
                                    ,
                                    e.decode = function(e, t) {
                                        e instanceof c || (e = c.create(e));
                                        for (var n = void 0 === t ? e.len : e.pos + t, o = new d.ZoneNoviceRevision.RetInfo; e.pos < n; ) {
                                            var r = e.uint32();
                                            switch (r >>> 3) {
                                                case 1:
                                                    o.retCode = e.int32();
                                                    break;
                                                case 2:
                                                    o.retMsg = e.bytes();
                                                    break;
                                                default:
                                                    e.skipType(7 & r)
                                            }
                                        }
                                        return o
                                    }
                                    ,
                                    e.decodeDelimited = function(e) {
                                        return e instanceof c || (e = new c(e)),
                                            this.decode(e, e.uint32())
                                    }
                                    ,
                                    e.verify = function(e) {
                                        return "object" != typeof e || null === e ? "object expected" : null != e.retCode && e.hasOwnProperty("retCode") && !p.isInteger(e.retCode) ? "retCode: integer expected" : null != e.retMsg && e.hasOwnProperty("retMsg") && !(e.retMsg && "number" == typeof e.retMsg.length || p.isString(e.retMsg)) ? "retMsg: buffer expected" : null
                                    }
                                    ,
                                    e.fromObject = function(e) {
                                        if (e instanceof d.ZoneNoviceRevision.RetInfo)
                                            return e;
                                        var t = new d.ZoneNoviceRevision.RetInfo;
                                        return null != e.retCode && (t.retCode = 0 | e.retCode),
                                        null != e.retMsg && ("string" == typeof e.retMsg ? p.base64.decode(e.retMsg, t.retMsg = p.newBuffer(p.base64.length(e.retMsg)), 0) : e.retMsg.length >= 0 && (t.retMsg = e.retMsg)),
                                            t
                                    }
                                    ,
                                    e.toObject = function(e, t) {
                                        t || (t = {});
                                        var n = {};
                                        return t.defaults && (n.retCode = 0,
                                            t.bytes === String ? n.retMsg = "" : (n.retMsg = [],
                                            t.bytes !== Array && (n.retMsg = p.newBuffer(n.retMsg)))),
                                        null != e.retCode && e.hasOwnProperty("retCode") && (n.retCode = e.retCode),
                                        null != e.retMsg && e.hasOwnProperty("retMsg") && (n.retMsg = t.bytes === String ? p.base64.encode(e.retMsg, 0, e.retMsg.length) : t.bytes === Array ? Array.prototype.slice.call(e.retMsg) : e.retMsg),
                                            n
                                    }
                                    ,
                                    e.prototype.toJSON = function() {
                                        return this.constructor.toObject(this, s.util.toJSONOptions)
                                    }
                                    ,
                                    e.getTypeUrl = function(e) {
                                        return void 0 === e && (e = "type.googleapis.com"),
                                        e + "/ZoneNoviceRevision.RetInfo"
                                    }
                                    ,
                                    e
                            }(),
                                l.ItemInfo = function() {
                                    function e(e) {
                                        if (e)
                                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                                    }
                                    return e.prototype.id = 0,
                                        e.prototype.count = 0,
                                        e.prototype.type = 0,
                                        e.create = function(t) {
                                            return new e(t)
                                        }
                                        ,
                                        e.encode = function(e, t) {
                                            return t || (t = f.create()),
                                            null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(8).uint32(e.id),
                                            null != e.count && Object.hasOwnProperty.call(e, "count") && t.uint32(16).uint32(e.count),
                                            null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(24).uint32(e.type),
                                                t
                                        }
                                        ,
                                        e.encodeDelimited = function(e, t) {
                                            return this.encode(e, t).ldelim()
                                        }
                                        ,
                                        e.decode = function(e, t) {
                                            e instanceof c || (e = c.create(e));
                                            for (var n = void 0 === t ? e.len : e.pos + t, o = new d.ZoneNoviceRevision.ItemInfo; e.pos < n; ) {
                                                var r = e.uint32();
                                                switch (r >>> 3) {
                                                    case 1:
                                                        o.id = e.uint32();
                                                        break;
                                                    case 2:
                                                        o.count = e.uint32();
                                                        break;
                                                    case 3:
                                                        o.type = e.uint32();
                                                        break;
                                                    default:
                                                        e.skipType(7 & r)
                                                }
                                            }
                                            return o
                                        }
                                        ,
                                        e.decodeDelimited = function(e) {
                                            return e instanceof c || (e = new c(e)),
                                                this.decode(e, e.uint32())
                                        }
                                        ,
                                        e.verify = function(e) {
                                            return "object" != typeof e || null === e ? "object expected" : null != e.id && e.hasOwnProperty("id") && !p.isInteger(e.id) ? "id: integer expected" : null != e.count && e.hasOwnProperty("count") && !p.isInteger(e.count) ? "count: integer expected" : null != e.type && e.hasOwnProperty("type") && !p.isInteger(e.type) ? "type: integer expected" : null
                                        }
                                        ,
                                        e.fromObject = function(e) {
                                            if (e instanceof d.ZoneNoviceRevision.ItemInfo)
                                                return e;
                                            var t = new d.ZoneNoviceRevision.ItemInfo;
                                            return null != e.id && (t.id = e.id >>> 0),
                                            null != e.count && (t.count = e.count >>> 0),
                                            null != e.type && (t.type = e.type >>> 0),
                                                t
                                        }
                                        ,
                                        e.toObject = function(e, t) {
                                            t || (t = {});
                                            var n = {};
                                            return t.defaults && (n.id = 0,
                                                n.count = 0,
                                                n.type = 0),
                                            null != e.id && e.hasOwnProperty("id") && (n.id = e.id),
                                            null != e.count && e.hasOwnProperty("count") && (n.count = e.count),
                                            null != e.type && e.hasOwnProperty("type") && (n.type = e.type),
                                                n
                                        }
                                        ,
                                        e.prototype.toJSON = function() {
                                            return this.constructor.toObject(this, s.util.toJSONOptions)
                                        }
                                        ,
                                        e.getTypeUrl = function(e) {
                                            return void 0 === e && (e = "type.googleapis.com"),
                                            e + "/ZoneNoviceRevision.ItemInfo"
                                        }
                                        ,
                                        e
                                }(),
                                l.QueryAwardStatusRsp = function() {
                                    function e(e) {
                                        if (e)
                                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                                    }
                                    return e.prototype.retInfo = null,
                                        e.prototype.status = 0,
                                        e.create = function(t) {
                                            return new e(t)
                                        }
                                        ,
                                        e.encode = function(e, t) {
                                            return t || (t = f.create()),
                                            null != e.retInfo && Object.hasOwnProperty.call(e, "retInfo") && d.ZoneNoviceRevision.RetInfo.encode(e.retInfo, t.uint32(10).fork()).ldelim(),
                                            null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(16).uint32(e.status),
                                                t
                                        }
                                        ,
                                        e.encodeDelimited = function(e, t) {
                                            return this.encode(e, t).ldelim()
                                        }
                                        ,
                                        e.decode = function(e, t) {
                                            e instanceof c || (e = c.create(e));
                                            for (var n = void 0 === t ? e.len : e.pos + t, o = new d.ZoneNoviceRevision.QueryAwardStatusRsp; e.pos < n; ) {
                                                var r = e.uint32();
                                                switch (r >>> 3) {
                                                    case 1:
                                                        o.retInfo = d.ZoneNoviceRevision.RetInfo.decode(e, e.uint32());
                                                        break;
                                                    case 2:
                                                        o.status = e.uint32();
                                                        break;
                                                    default:
                                                        e.skipType(7 & r)
                                                }
                                            }
                                            return o
                                        }
                                        ,
                                        e.decodeDelimited = function(e) {
                                            return e instanceof c || (e = new c(e)),
                                                this.decode(e, e.uint32())
                                        }
                                        ,
                                        e.verify = function(e) {
                                            if ("object" != typeof e || null === e)
                                                return "object expected";
                                            if (null != e.retInfo && e.hasOwnProperty("retInfo")) {
                                                var t = d.ZoneNoviceRevision.RetInfo.verify(e.retInfo);
                                                if (t)
                                                    return "retInfo." + t
                                            }
                                            return null != e.status && e.hasOwnProperty("status") && !p.isInteger(e.status) ? "status: integer expected" : null
                                        }
                                        ,
                                        e.fromObject = function(e) {
                                            if (e instanceof d.ZoneNoviceRevision.QueryAwardStatusRsp)
                                                return e;
                                            var t = new d.ZoneNoviceRevision.QueryAwardStatusRsp;
                                            if (null != e.retInfo) {
                                                if ("object" != typeof e.retInfo)
                                                    throw TypeError(".ZoneNoviceRevision.QueryAwardStatusRsp.retInfo: object expected");
                                                t.retInfo = d.ZoneNoviceRevision.RetInfo.fromObject(e.retInfo)
                                            }
                                            return null != e.status && (t.status = e.status >>> 0),
                                                t
                                        }
                                        ,
                                        e.toObject = function(e, t) {
                                            t || (t = {});
                                            var n = {};
                                            return t.defaults && (n.retInfo = null,
                                                n.status = 0),
                                            null != e.retInfo && e.hasOwnProperty("retInfo") && (n.retInfo = d.ZoneNoviceRevision.RetInfo.toObject(e.retInfo, t)),
                                            null != e.status && e.hasOwnProperty("status") && (n.status = e.status),
                                                n
                                        }
                                        ,
                                        e.prototype.toJSON = function() {
                                            return this.constructor.toObject(this, s.util.toJSONOptions)
                                        }
                                        ,
                                        e.getTypeUrl = function(e) {
                                            return void 0 === e && (e = "type.googleapis.com"),
                                            e + "/ZoneNoviceRevision.QueryAwardStatusRsp"
                                        }
                                        ,
                                        e
                                }(),
                                l.GetAwardReq = function() {
                                    function e(e) {
                                        if (e)
                                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                                    }
                                    return e.prototype.which = 0,
                                        e.create = function(t) {
                                            return new e(t)
                                        }
                                        ,
                                        e.encode = function(e, t) {
                                            return t || (t = f.create()),
                                            null != e.which && Object.hasOwnProperty.call(e, "which") && t.uint32(8).uint32(e.which),
                                                t
                                        }
                                        ,
                                        e.encodeDelimited = function(e, t) {
                                            return this.encode(e, t).ldelim()
                                        }
                                        ,
                                        e.decode = function(e, t) {
                                            e instanceof c || (e = c.create(e));
                                            for (var n = void 0 === t ? e.len : e.pos + t, o = new d.ZoneNoviceRevision.GetAwardReq; e.pos < n; ) {
                                                var r = e.uint32();
                                                switch (r >>> 3) {
                                                    case 1:
                                                        o.which = e.uint32();
                                                        break;
                                                    default:
                                                        e.skipType(7 & r)
                                                }
                                            }
                                            return o
                                        }
                                        ,
                                        e.decodeDelimited = function(e) {
                                            return e instanceof c || (e = new c(e)),
                                                this.decode(e, e.uint32())
                                        }
                                        ,
                                        e.verify = function(e) {
                                            return "object" != typeof e || null === e ? "object expected" : null != e.which && e.hasOwnProperty("which") && !p.isInteger(e.which) ? "which: integer expected" : null
                                        }
                                        ,
                                        e.fromObject = function(e) {
                                            if (e instanceof d.ZoneNoviceRevision.GetAwardReq)
                                                return e;
                                            var t = new d.ZoneNoviceRevision.GetAwardReq;
                                            return null != e.which && (t.which = e.which >>> 0),
                                                t
                                        }
                                        ,
                                        e.toObject = function(e, t) {
                                            t || (t = {});
                                            var n = {};
                                            return t.defaults && (n.which = 0),
                                            null != e.which && e.hasOwnProperty("which") && (n.which = e.which),
                                                n
                                        }
                                        ,
                                        e.prototype.toJSON = function() {
                                            return this.constructor.toObject(this, s.util.toJSONOptions)
                                        }
                                        ,
                                        e.getTypeUrl = function(e) {
                                            return void 0 === e && (e = "type.googleapis.com"),
                                            e + "/ZoneNoviceRevision.GetAwardReq"
                                        }
                                        ,
                                        e
                                }(),
                                l.GetAwardRsp = function() {
                                    function e(e) {
                                        if (this.items = [],
                                            e)
                                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                                    }
                                    return e.prototype.retInfo = null,
                                        e.prototype.items = p.emptyArray,
                                        e.create = function(t) {
                                            return new e(t)
                                        }
                                        ,
                                        e.encode = function(e, t) {
                                            if (t || (t = f.create()),
                                            null != e.retInfo && Object.hasOwnProperty.call(e, "retInfo") && d.ZoneNoviceRevision.RetInfo.encode(e.retInfo, t.uint32(10).fork()).ldelim(),
                                            null != e.items && e.items.length)
                                                for (var n = 0; n < e.items.length; ++n)
                                                    d.ZoneNoviceRevision.ItemInfo.encode(e.items[n], t.uint32(18).fork()).ldelim();
                                            return t
                                        }
                                        ,
                                        e.encodeDelimited = function(e, t) {
                                            return this.encode(e, t).ldelim()
                                        }
                                        ,
                                        e.decode = function(e, t) {
                                            e instanceof c || (e = c.create(e));
                                            for (var n = void 0 === t ? e.len : e.pos + t, o = new d.ZoneNoviceRevision.GetAwardRsp; e.pos < n; ) {
                                                var r = e.uint32();
                                                switch (r >>> 3) {
                                                    case 1:
                                                        o.retInfo = d.ZoneNoviceRevision.RetInfo.decode(e, e.uint32());
                                                        break;
                                                    case 2:
                                                        o.items && o.items.length || (o.items = []),
                                                            o.items.push(d.ZoneNoviceRevision.ItemInfo.decode(e, e.uint32()));
                                                        break;
                                                    default:
                                                        e.skipType(7 & r)
                                                }
                                            }
                                            return o
                                        }
                                        ,
                                        e.decodeDelimited = function(e) {
                                            return e instanceof c || (e = new c(e)),
                                                this.decode(e, e.uint32())
                                        }
                                        ,
                                        e.verify = function(e) {
                                            if ("object" != typeof e || null === e)
                                                return "object expected";
                                            if (null != e.retInfo && e.hasOwnProperty("retInfo") && (n = d.ZoneNoviceRevision.RetInfo.verify(e.retInfo)))
                                                return "retInfo." + n;
                                            if (null != e.items && e.hasOwnProperty("items")) {
                                                if (!Array.isArray(e.items))
                                                    return "items: array expected";
                                                for (var t = 0; t < e.items.length; ++t) {
                                                    var n;
                                                    if (n = d.ZoneNoviceRevision.ItemInfo.verify(e.items[t]))
                                                        return "items." + n
                                                }
                                            }
                                            return null
                                        }
                                        ,
                                        e.fromObject = function(e) {
                                            if (e instanceof d.ZoneNoviceRevision.GetAwardRsp)
                                                return e;
                                            var t = new d.ZoneNoviceRevision.GetAwardRsp;
                                            if (null != e.retInfo) {
                                                if ("object" != typeof e.retInfo)
                                                    throw TypeError(".ZoneNoviceRevision.GetAwardRsp.retInfo: object expected");
                                                t.retInfo = d.ZoneNoviceRevision.RetInfo.fromObject(e.retInfo)
                                            }
                                            if (e.items) {
                                                if (!Array.isArray(e.items))
                                                    throw TypeError(".ZoneNoviceRevision.GetAwardRsp.items: array expected");
                                                t.items = [];
                                                for (var n = 0; n < e.items.length; ++n) {
                                                    if ("object" != typeof e.items[n])
                                                        throw TypeError(".ZoneNoviceRevision.GetAwardRsp.items: object expected");
                                                    t.items[n] = d.ZoneNoviceRevision.ItemInfo.fromObject(e.items[n])
                                                }
                                            }
                                            return t
                                        }
                                        ,
                                        e.toObject = function(e, t) {
                                            t || (t = {});
                                            var n = {};
                                            if ((t.arrays || t.defaults) && (n.items = []),
                                            t.defaults && (n.retInfo = null),
                                            null != e.retInfo && e.hasOwnProperty("retInfo") && (n.retInfo = d.ZoneNoviceRevision.RetInfo.toObject(e.retInfo, t)),
                                            e.items && e.items.length) {
                                                n.items = [];
                                                for (var o = 0; o < e.items.length; ++o)
                                                    n.items[o] = d.ZoneNoviceRevision.ItemInfo.toObject(e.items[o], t)
                                            }
                                            return n
                                        }
                                        ,
                                        e.prototype.toJSON = function() {
                                            return this.constructor.toObject(this, s.util.toJSONOptions)
                                        }
                                        ,
                                        e.getTypeUrl = function(e) {
                                            return void 0 === e && (e = "type.googleapis.com"),
                                            e + "/ZoneNoviceRevision.GetAwardRsp"
                                        }
                                        ,
                                        e
                                }(),
                                l.RecoverHpRsp = function() {
                                    function e(e) {
                                        if (e)
                                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                                    }
                                    return e.prototype.retInfo = null,
                                        e.create = function(t) {
                                            return new e(t)
                                        }
                                        ,
                                        e.encode = function(e, t) {
                                            return t || (t = f.create()),
                                            null != e.retInfo && Object.hasOwnProperty.call(e, "retInfo") && d.ZoneNoviceRevision.RetInfo.encode(e.retInfo, t.uint32(10).fork()).ldelim(),
                                                t
                                        }
                                        ,
                                        e.encodeDelimited = function(e, t) {
                                            return this.encode(e, t).ldelim()
                                        }
                                        ,
                                        e.decode = function(e, t) {
                                            e instanceof c || (e = c.create(e));
                                            for (var n = void 0 === t ? e.len : e.pos + t, o = new d.ZoneNoviceRevision.RecoverHpRsp; e.pos < n; ) {
                                                var r = e.uint32();
                                                switch (r >>> 3) {
                                                    case 1:
                                                        o.retInfo = d.ZoneNoviceRevision.RetInfo.decode(e, e.uint32());
                                                        break;
                                                    default:
                                                        e.skipType(7 & r)
                                                }
                                            }
                                            return o
                                        }
                                        ,
                                        e.decodeDelimited = function(e) {
                                            return e instanceof c || (e = new c(e)),
                                                this.decode(e, e.uint32())
                                        }
                                        ,
                                        e.verify = function(e) {
                                            if ("object" != typeof e || null === e)
                                                return "object expected";
                                            if (null != e.retInfo && e.hasOwnProperty("retInfo")) {
                                                var t = d.ZoneNoviceRevision.RetInfo.verify(e.retInfo);
                                                if (t)
                                                    return "retInfo." + t
                                            }
                                            return null
                                        }
                                        ,
                                        e.fromObject = function(e) {
                                            if (e instanceof d.ZoneNoviceRevision.RecoverHpRsp)
                                                return e;
                                            var t = new d.ZoneNoviceRevision.RecoverHpRsp;
                                            if (null != e.retInfo) {
                                                if ("object" != typeof e.retInfo)
                                                    throw TypeError(".ZoneNoviceRevision.RecoverHpRsp.retInfo: object expected");
                                                t.retInfo = d.ZoneNoviceRevision.RetInfo.fromObject(e.retInfo)
                                            }
                                            return t
                                        }
                                        ,
                                        e.toObject = function(e, t) {
                                            t || (t = {});
                                            var n = {};
                                            return t.defaults && (n.retInfo = null),
                                            null != e.retInfo && e.hasOwnProperty("retInfo") && (n.retInfo = d.ZoneNoviceRevision.RetInfo.toObject(e.retInfo, t)),
                                                n
                                        }
                                        ,
                                        e.prototype.toJSON = function() {
                                            return this.constructor.toObject(this, s.util.toJSONOptions)
                                        }
                                        ,
                                        e.getTypeUrl = function(e) {
                                            return void 0 === e && (e = "type.googleapis.com"),
                                            e + "/ZoneNoviceRevision.RecoverHpRsp"
                                        }
                                        ,
                                        e
                                }(),
                                l.SceneQueryRsp = function() {
                                    function e(e) {
                                        if (e)
                                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                                    }
                                    return e.prototype.retInfo = null,
                                        e.prototype.gender = 0,
                                        e.create = function(t) {
                                            return new e(t)
                                        }
                                        ,
                                        e.encode = function(e, t) {
                                            return t || (t = f.create()),
                                            null != e.retInfo && Object.hasOwnProperty.call(e, "retInfo") && d.ZoneNoviceRevision.RetInfo.encode(e.retInfo, t.uint32(10).fork()).ldelim(),
                                            null != e.gender && Object.hasOwnProperty.call(e, "gender") && t.uint32(16).uint32(e.gender),
                                                t
                                        }
                                        ,
                                        e.encodeDelimited = function(e, t) {
                                            return this.encode(e, t).ldelim()
                                        }
                                        ,
                                        e.decode = function(e, t) {
                                            e instanceof c || (e = c.create(e));
                                            for (var n = void 0 === t ? e.len : e.pos + t, o = new d.ZoneNoviceRevision.SceneQueryRsp; e.pos < n; ) {
                                                var r = e.uint32();
                                                switch (r >>> 3) {
                                                    case 1:
                                                        o.retInfo = d.ZoneNoviceRevision.RetInfo.decode(e, e.uint32());
                                                        break;
                                                    case 2:
                                                        o.gender = e.uint32();
                                                        break;
                                                    default:
                                                        e.skipType(7 & r)
                                                }
                                            }
                                            return o
                                        }
                                        ,
                                        e.decodeDelimited = function(e) {
                                            return e instanceof c || (e = new c(e)),
                                                this.decode(e, e.uint32())
                                        }
                                        ,
                                        e.verify = function(e) {
                                            if ("object" != typeof e || null === e)
                                                return "object expected";
                                            if (null != e.retInfo && e.hasOwnProperty("retInfo")) {
                                                var t = d.ZoneNoviceRevision.RetInfo.verify(e.retInfo);
                                                if (t)
                                                    return "retInfo." + t
                                            }
                                            return null != e.gender && e.hasOwnProperty("gender") && !p.isInteger(e.gender) ? "gender: integer expected" : null
                                        }
                                        ,
                                        e.fromObject = function(e) {
                                            if (e instanceof d.ZoneNoviceRevision.SceneQueryRsp)
                                                return e;
                                            var t = new d.ZoneNoviceRevision.SceneQueryRsp;
                                            if (null != e.retInfo) {
                                                if ("object" != typeof e.retInfo)
                                                    throw TypeError(".ZoneNoviceRevision.SceneQueryRsp.retInfo: object expected");
                                                t.retInfo = d.ZoneNoviceRevision.RetInfo.fromObject(e.retInfo)
                                            }
                                            return null != e.gender && (t.gender = e.gender >>> 0),
                                                t
                                        }
                                        ,
                                        e.toObject = function(e, t) {
                                            t || (t = {});
                                            var n = {};
                                            return t.defaults && (n.retInfo = null,
                                                n.gender = 0),
                                            null != e.retInfo && e.hasOwnProperty("retInfo") && (n.retInfo = d.ZoneNoviceRevision.RetInfo.toObject(e.retInfo, t)),
                                            null != e.gender && e.hasOwnProperty("gender") && (n.gender = e.gender),
                                                n
                                        }
                                        ,
                                        e.prototype.toJSON = function() {
                                            return this.constructor.toObject(this, s.util.toJSONOptions)
                                        }
                                        ,
                                        e.getTypeUrl = function(e) {
                                            return void 0 === e && (e = "type.googleapis.com"),
                                            e + "/ZoneNoviceRevision.SceneQueryRsp"
                                        }
                                        ,
                                        e
                                }(),
                                l.QueryStatusRsp = function() {
                                    function e(e) {
                                        if (e)
                                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                                    }
                                    return e.prototype.retInfo = null,
                                        e.prototype.flag = 0,
                                        e.prototype.status = 0,
                                        e.create = function(t) {
                                            return new e(t)
                                        }
                                        ,
                                        e.encode = function(e, t) {
                                            return t || (t = f.create()),
                                            null != e.retInfo && Object.hasOwnProperty.call(e, "retInfo") && d.ZoneNoviceRevision.RetInfo.encode(e.retInfo, t.uint32(10).fork()).ldelim(),
                                            null != e.flag && Object.hasOwnProperty.call(e, "flag") && t.uint32(16).uint32(e.flag),
                                            null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(24).uint32(e.status),
                                                t
                                        }
                                        ,
                                        e.encodeDelimited = function(e, t) {
                                            return this.encode(e, t).ldelim()
                                        }
                                        ,
                                        e.decode = function(e, t) {
                                            e instanceof c || (e = c.create(e));
                                            for (var n = void 0 === t ? e.len : e.pos + t, o = new d.ZoneNoviceRevision.QueryStatusRsp; e.pos < n; ) {
                                                var r = e.uint32();
                                                switch (r >>> 3) {
                                                    case 1:
                                                        o.retInfo = d.ZoneNoviceRevision.RetInfo.decode(e, e.uint32());
                                                        break;
                                                    case 2:
                                                        o.flag = e.uint32();
                                                        break;
                                                    case 3:
                                                        o.status = e.uint32();
                                                        break;
                                                    default:
                                                        e.skipType(7 & r)
                                                }
                                            }
                                            return o
                                        }
                                        ,
                                        e.decodeDelimited = function(e) {
                                            return e instanceof c || (e = new c(e)),
                                                this.decode(e, e.uint32())
                                        }
                                        ,
                                        e.verify = function(e) {
                                            if ("object" != typeof e || null === e)
                                                return "object expected";
                                            if (null != e.retInfo && e.hasOwnProperty("retInfo")) {
                                                var t = d.ZoneNoviceRevision.RetInfo.verify(e.retInfo);
                                                if (t)
                                                    return "retInfo." + t
                                            }
                                            return null != e.flag && e.hasOwnProperty("flag") && !p.isInteger(e.flag) ? "flag: integer expected" : null != e.status && e.hasOwnProperty("status") && !p.isInteger(e.status) ? "status: integer expected" : null
                                        }
                                        ,
                                        e.fromObject = function(e) {
                                            if (e instanceof d.ZoneNoviceRevision.QueryStatusRsp)
                                                return e;
                                            var t = new d.ZoneNoviceRevision.QueryStatusRsp;
                                            if (null != e.retInfo) {
                                                if ("object" != typeof e.retInfo)
                                                    throw TypeError(".ZoneNoviceRevision.QueryStatusRsp.retInfo: object expected");
                                                t.retInfo = d.ZoneNoviceRevision.RetInfo.fromObject(e.retInfo)
                                            }
                                            return null != e.flag && (t.flag = e.flag >>> 0),
                                            null != e.status && (t.status = e.status >>> 0),
                                                t
                                        }
                                        ,
                                        e.toObject = function(e, t) {
                                            t || (t = {});
                                            var n = {};
                                            return t.defaults && (n.retInfo = null,
                                                n.flag = 0,
                                                n.status = 0),
                                            null != e.retInfo && e.hasOwnProperty("retInfo") && (n.retInfo = d.ZoneNoviceRevision.RetInfo.toObject(e.retInfo, t)),
                                            null != e.flag && e.hasOwnProperty("flag") && (n.flag = e.flag),
                                            null != e.status && e.hasOwnProperty("status") && (n.status = e.status),
                                                n
                                        }
                                        ,
                                        e.prototype.toJSON = function() {
                                            return this.constructor.toObject(this, s.util.toJSONOptions)
                                        }
                                        ,
                                        e.getTypeUrl = function(e) {
                                            return void 0 === e && (e = "type.googleapis.com"),
                                            e + "/ZoneNoviceRevision.QueryStatusRsp"
                                        }
                                        ,
                                        e
                                }(),
                                l.ChangeStatusRsp = function() {
                                    function e(e) {
                                        if (e)
                                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                                    }
                                    return e.prototype.retInfo = null,
                                        e.prototype.status = 0,
                                        e.create = function(t) {
                                            return new e(t)
                                        }
                                        ,
                                        e.encode = function(e, t) {
                                            return t || (t = f.create()),
                                            null != e.retInfo && Object.hasOwnProperty.call(e, "retInfo") && d.ZoneNoviceRevision.RetInfo.encode(e.retInfo, t.uint32(10).fork()).ldelim(),
                                            null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(16).uint32(e.status),
                                                t
                                        }
                                        ,
                                        e.encodeDelimited = function(e, t) {
                                            return this.encode(e, t).ldelim()
                                        }
                                        ,
                                        e.decode = function(e, t) {
                                            e instanceof c || (e = c.create(e));
                                            for (var n = void 0 === t ? e.len : e.pos + t, o = new d.ZoneNoviceRevision.ChangeStatusRsp; e.pos < n; ) {
                                                var r = e.uint32();
                                                switch (r >>> 3) {
                                                    case 1:
                                                        o.retInfo = d.ZoneNoviceRevision.RetInfo.decode(e, e.uint32());
                                                        break;
                                                    case 2:
                                                        o.status = e.uint32();
                                                        break;
                                                    default:
                                                        e.skipType(7 & r)
                                                }
                                            }
                                            return o
                                        }
                                        ,
                                        e.decodeDelimited = function(e) {
                                            return e instanceof c || (e = new c(e)),
                                                this.decode(e, e.uint32())
                                        }
                                        ,
                                        e.verify = function(e) {
                                            if ("object" != typeof e || null === e)
                                                return "object expected";
                                            if (null != e.retInfo && e.hasOwnProperty("retInfo")) {
                                                var t = d.ZoneNoviceRevision.RetInfo.verify(e.retInfo);
                                                if (t)
                                                    return "retInfo." + t
                                            }
                                            return null != e.status && e.hasOwnProperty("status") && !p.isInteger(e.status) ? "status: integer expected" : null
                                        }
                                        ,
                                        e.fromObject = function(e) {
                                            if (e instanceof d.ZoneNoviceRevision.ChangeStatusRsp)
                                                return e;
                                            var t = new d.ZoneNoviceRevision.ChangeStatusRsp;
                                            if (null != e.retInfo) {
                                                if ("object" != typeof e.retInfo)
                                                    throw TypeError(".ZoneNoviceRevision.ChangeStatusRsp.retInfo: object expected");
                                                t.retInfo = d.ZoneNoviceRevision.RetInfo.fromObject(e.retInfo)
                                            }
                                            return null != e.status && (t.status = e.status >>> 0),
                                                t
                                        }
                                        ,
                                        e.toObject = function(e, t) {
                                            t || (t = {});
                                            var n = {};
                                            return t.defaults && (n.retInfo = null,
                                                n.status = 0),
                                            null != e.retInfo && e.hasOwnProperty("retInfo") && (n.retInfo = d.ZoneNoviceRevision.RetInfo.toObject(e.retInfo, t)),
                                            null != e.status && e.hasOwnProperty("status") && (n.status = e.status),
                                                n
                                        }
                                        ,
                                        e.prototype.toJSON = function() {
                                            return this.constructor.toObject(this, s.util.toJSONOptions)
                                        }
                                        ,
                                        e.getTypeUrl = function(e) {
                                            return void 0 === e && (e = "type.googleapis.com"),
                                            e + "/ZoneNoviceRevision.ChangeStatusRsp"
                                        }
                                        ,
                                        e
                                }(),
                                l.QualifyingNotify = function() {
                                    function e(e) {
                                        if (e)
                                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                                    }
                                    return e.prototype.flag = 0,
                                        e.create = function(t) {
                                            return new e(t)
                                        }
                                        ,
                                        e.encode = function(e, t) {
                                            return t || (t = f.create()),
                                            null != e.flag && Object.hasOwnProperty.call(e, "flag") && t.uint32(8).uint32(e.flag),
                                                t
                                        }
                                        ,
                                        e.encodeDelimited = function(e, t) {
                                            return this.encode(e, t).ldelim()
                                        }
                                        ,
                                        e.decode = function(e, t) {
                                            e instanceof c || (e = c.create(e));
                                            for (var n = void 0 === t ? e.len : e.pos + t, o = new d.ZoneNoviceRevision.QualifyingNotify; e.pos < n; ) {
                                                var r = e.uint32();
                                                switch (r >>> 3) {
                                                    case 1:
                                                        o.flag = e.uint32();
                                                        break;
                                                    default:
                                                        e.skipType(7 & r)
                                                }
                                            }
                                            return o
                                        }
                                        ,
                                        e.decodeDelimited = function(e) {
                                            return e instanceof c || (e = new c(e)),
                                                this.decode(e, e.uint32())
                                        }
                                        ,
                                        e.verify = function(e) {
                                            return "object" != typeof e || null === e ? "object expected" : null != e.flag && e.hasOwnProperty("flag") && !p.isInteger(e.flag) ? "flag: integer expected" : null
                                        }
                                        ,
                                        e.fromObject = function(e) {
                                            if (e instanceof d.ZoneNoviceRevision.QualifyingNotify)
                                                return e;
                                            var t = new d.ZoneNoviceRevision.QualifyingNotify;
                                            return null != e.flag && (t.flag = e.flag >>> 0),
                                                t
                                        }
                                        ,
                                        e.toObject = function(e, t) {
                                            t || (t = {});
                                            var n = {};
                                            return t.defaults && (n.flag = 0),
                                            null != e.flag && e.hasOwnProperty("flag") && (n.flag = e.flag),
                                                n
                                        }
                                        ,
                                        e.prototype.toJSON = function() {
                                            return this.constructor.toObject(this, s.util.toJSONOptions)
                                        }
                                        ,
                                        e.getTypeUrl = function(e) {
                                            return void 0 === e && (e = "type.googleapis.com"),
                                            e + "/ZoneNoviceRevision.QualifyingNotify"
                                        }
                                        ,
                                        e
                                }(),
                                l.OpenLadderRsp = function() {
                                    function e(e) {
                                        if (e)
                                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                                    }
                                    return e.prototype.retInfo = null,
                                        e.prototype.status = 0,
                                        e.create = function(t) {
                                            return new e(t)
                                        }
                                        ,
                                        e.encode = function(e, t) {
                                            return t || (t = f.create()),
                                            null != e.retInfo && Object.hasOwnProperty.call(e, "retInfo") && d.ZoneNoviceRevision.RetInfo.encode(e.retInfo, t.uint32(10).fork()).ldelim(),
                                            null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(16).uint32(e.status),
                                                t
                                        }
                                        ,
                                        e.encodeDelimited = function(e, t) {
                                            return this.encode(e, t).ldelim()
                                        }
                                        ,
                                        e.decode = function(e, t) {
                                            e instanceof c || (e = c.create(e));
                                            for (var n = void 0 === t ? e.len : e.pos + t, o = new d.ZoneNoviceRevision.OpenLadderRsp; e.pos < n; ) {
                                                var r = e.uint32();
                                                switch (r >>> 3) {
                                                    case 1:
                                                        o.retInfo = d.ZoneNoviceRevision.RetInfo.decode(e, e.uint32());
                                                        break;
                                                    case 2:
                                                        o.status = e.uint32();
                                                        break;
                                                    default:
                                                        e.skipType(7 & r)
                                                }
                                            }
                                            return o
                                        }
                                        ,
                                        e.decodeDelimited = function(e) {
                                            return e instanceof c || (e = new c(e)),
                                                this.decode(e, e.uint32())
                                        }
                                        ,
                                        e.verify = function(e) {
                                            if ("object" != typeof e || null === e)
                                                return "object expected";
                                            if (null != e.retInfo && e.hasOwnProperty("retInfo")) {
                                                var t = d.ZoneNoviceRevision.RetInfo.verify(e.retInfo);
                                                if (t)
                                                    return "retInfo." + t
                                            }
                                            return null != e.status && e.hasOwnProperty("status") && !p.isInteger(e.status) ? "status: integer expected" : null
                                        }
                                        ,
                                        e.fromObject = function(e) {
                                            if (e instanceof d.ZoneNoviceRevision.OpenLadderRsp)
                                                return e;
                                            var t = new d.ZoneNoviceRevision.OpenLadderRsp;
                                            if (null != e.retInfo) {
                                                if ("object" != typeof e.retInfo)
                                                    throw TypeError(".ZoneNoviceRevision.OpenLadderRsp.retInfo: object expected");
                                                t.retInfo = d.ZoneNoviceRevision.RetInfo.fromObject(e.retInfo)
                                            }
                                            return null != e.status && (t.status = e.status >>> 0),
                                                t
                                        }
                                        ,
                                        e.toObject = function(e, t) {
                                            t || (t = {});
                                            var n = {};
                                            return t.defaults && (n.retInfo = null,
                                                n.status = 0),
                                            null != e.retInfo && e.hasOwnProperty("retInfo") && (n.retInfo = d.ZoneNoviceRevision.RetInfo.toObject(e.retInfo, t)),
                                            null != e.status && e.hasOwnProperty("status") && (n.status = e.status),
                                                n
                                        }
                                        ,
                                        e.prototype.toJSON = function() {
                                            return this.constructor.toObject(this, s.util.toJSONOptions)
                                        }
                                        ,
                                        e.getTypeUrl = function(e) {
                                            return void 0 === e && (e = "type.googleapis.com"),
                                            e + "/ZoneNoviceRevision.OpenLadderRsp"
                                        }
                                        ,
                                        e
                                }(),
                                l.QueryIconRsp = function() {
                                    function e(e) {
                                        if (e)
                                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                                    }
                                    return e.prototype.retInfo = null,
                                        e.prototype.status = 0,
                                        e.create = function(t) {
                                            return new e(t)
                                        }
                                        ,
                                        e.encode = function(e, t) {
                                            return t || (t = f.create()),
                                            null != e.retInfo && Object.hasOwnProperty.call(e, "retInfo") && d.ZoneNoviceRevision.RetInfo.encode(e.retInfo, t.uint32(10).fork()).ldelim(),
                                            null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(16).uint32(e.status),
                                                t
                                        }
                                        ,
                                        e.encodeDelimited = function(e, t) {
                                            return this.encode(e, t).ldelim()
                                        }
                                        ,
                                        e.decode = function(e, t) {
                                            e instanceof c || (e = c.create(e));
                                            for (var n = void 0 === t ? e.len : e.pos + t, o = new d.ZoneNoviceRevision.QueryIconRsp; e.pos < n; ) {
                                                var r = e.uint32();
                                                switch (r >>> 3) {
                                                    case 1:
                                                        o.retInfo = d.ZoneNoviceRevision.RetInfo.decode(e, e.uint32());
                                                        break;
                                                    case 2:
                                                        o.status = e.uint32();
                                                        break;
                                                    default:
                                                        e.skipType(7 & r)
                                                }
                                            }
                                            return o
                                        }
                                        ,
                                        e.decodeDelimited = function(e) {
                                            return e instanceof c || (e = new c(e)),
                                                this.decode(e, e.uint32())
                                        }
                                        ,
                                        e.verify = function(e) {
                                            if ("object" != typeof e || null === e)
                                                return "object expected";
                                            if (null != e.retInfo && e.hasOwnProperty("retInfo")) {
                                                var t = d.ZoneNoviceRevision.RetInfo.verify(e.retInfo);
                                                if (t)
                                                    return "retInfo." + t
                                            }
                                            return null != e.status && e.hasOwnProperty("status") && !p.isInteger(e.status) ? "status: integer expected" : null
                                        }
                                        ,
                                        e.fromObject = function(e) {
                                            if (e instanceof d.ZoneNoviceRevision.QueryIconRsp)
                                                return e;
                                            var t = new d.ZoneNoviceRevision.QueryIconRsp;
                                            if (null != e.retInfo) {
                                                if ("object" != typeof e.retInfo)
                                                    throw TypeError(".ZoneNoviceRevision.QueryIconRsp.retInfo: object expected");
                                                t.retInfo = d.ZoneNoviceRevision.RetInfo.fromObject(e.retInfo)
                                            }
                                            return null != e.status && (t.status = e.status >>> 0),
                                                t
                                        }
                                        ,
                                        e.toObject = function(e, t) {
                                            t || (t = {});
                                            var n = {};
                                            return t.defaults && (n.retInfo = null,
                                                n.status = 0),
                                            null != e.retInfo && e.hasOwnProperty("retInfo") && (n.retInfo = d.ZoneNoviceRevision.RetInfo.toObject(e.retInfo, t)),
                                            null != e.status && e.hasOwnProperty("status") && (n.status = e.status),
                                                n
                                        }
                                        ,
                                        e.prototype.toJSON = function() {
                                            return this.constructor.toObject(this, s.util.toJSONOptions)
                                        }
                                        ,
                                        e.getTypeUrl = function(e) {
                                            return void 0 === e && (e = "type.googleapis.com"),
                                            e + "/ZoneNoviceRevision.QueryIconRsp"
                                        }
                                        ,
                                        e
                                }(),
                                l),
                            o.exports = d,
                            e("default", o.exports)
                    }
                ), (function() {
                        return {
                            "protobufjs/minimal": o
                        }
                    }
                ))
            }
        }
    }
));
