System.register("chunks:///_virtual/BaseMessage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ByteArray.ts", "./BuildLogHelper.ts", "./IllegalOperationError.ts", "./ADF.ts", "./EventDispatcher.ts", "./ProtocolHelper.ts", "./P_ReturnCode.ts", "./WritingBuffer.ts"], (function(e) {
        var t, n, r, o, i, s, c, a, u, l, f;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass
            }
                , function(e) {
                    r = e.cclegacy
                }
                , function(e) {
                    o = e.ByteArray
                }
                , function(e) {
                    i = e.default
                }
                , function(e) {
                    s = e.IllegalOperationError
                }
                , function(e) {
                    c = e.ADF
                }
                , function(e) {
                    a = e.EventDispatcher
                }
                , function(e) {
                    u = e.ProtocolHelper
                }
                , function(e) {
                    l = e.P_ReturnCode
                }
                , function(e) {
                    f = e.WritingBuffer
                }
            ],
            execute: function() {
                r._RF.push({}, "6e23bGiKuJJ2aJRE0Q5WZtY", "BaseMessage", void 0);
                e("BaseMessage", function(e) {
                    function r() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                            r[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(r)) || this)._type = 0,
                            t._data = new o,
                            t
                    }
                    t(r, e);
                    var a = r.prototype;
                    return a.decode = function(e) {
                        return this.readExternal(e.body),
                        1 == i.IS_LOCAL && console.log("[Message]decode:", this._type.toString(16)),
                            this
                    }
                        ,
                        a.encode = function(e, t) {
                            var n;
                            return void 0 === t && (t = -1),
                            1 == i.IS_LOCAL && console.log("[Message]encode:", this._type.toString(16)),
                                (n = e && e instanceof c ? e : u.CreateADF(t)).body = new o,
                                this.writeExternal(n.body),
                                n
                        }
                        ,
                        a.getADFType = function() {
                            return 1 == i.IS_LOCAL && console.log("[Message]:", this._type),
                                this._type
                        }
                        ,
                        a.toString = function() {
                            return "BaseMessage"
                        }
                        ,
                        a.setADFType = function(e) {
                            this._type = e
                        }
                        ,
                        a.readFromSlice = function(e, t) {
                            throw new s("Not implemented.")
                        }
                        ,
                        a.readExternal = function(e) {
                            this.readFromSlice(e, 0)
                        }
                        ,
                        a.writeToBuffer = function(e) {
                            throw new s("Not implemented.")
                        }
                        ,
                        a.writeExternal = function(e) {
                            var t = new f;
                            this.writeToBuffer(t),
                                t.toNormal(e)
                        }
                        ,
                        n(r, [{
                            key: "code",
                            get: function() {
                                if (this.retInfo) {
                                    var e = this.retInfo
                                        , t = new l;
                                    return t.code = e.retCode,
                                    0 != t.code && (t.message = e.retMsg.readMultiByte(e.retMsg.length, "gb2312")),
                                        t
                                }
                                return null
                            }
                        }]),
                        r
                }(a));
                r._RF.pop()
            }
        }
    }
));
