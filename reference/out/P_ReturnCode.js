System.register("chunks:///_virtual/P_ReturnCode.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DEFINE.ts", "./IExternalizable.ts", "./ByteArray.ts"], (function(e) {
        var t, n, r, i, o, s;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass
            }
                , function(e) {
                    r = e.cclegacy
                }
                , function(e) {
                    i = e.DEFINE
                }
                , function(e) {
                    o = e.IExternalizable
                }
                , function(e) {
                    s = e.ByteArray
                }
            ],
            execute: function() {
                r._RF.push({}, "507fewJ87VAbJB/crMibofO", "P_ReturnCode", void 0),
                    e("P_ReturnCode", function(e) {
                        function r() {
                            for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                                r[i] = arguments[i];
                            return (t = e.call.apply(e, [this].concat(r)) || this).code = -1,
                                t.message = "",
                                t
                        }
                        t(r, e);
                        var o = r.prototype;
                        return o.writeExternal = function(e) {}
                            ,
                            o.readExternal = function(e) {
                                this.code = e.readInt();
                                var t = e.readUnsignedShort();
                                this.message = e.readMultiByte(t, i.CHARSET)
                            }
                            ,
                            o.isError = function() {
                                return this.code != r.OK
                            }
                            ,
                            n(r, [{
                                key: "length",
                                get: function() {
                                    if (this.message) {
                                        var e = new s;
                                        return e.writeMultiByte(this.message, i.CHARSET),
                                        6 + e.length
                                    }
                                    return 4
                                }
                            }]),
                            r
                    }(o)).OK = 0,
                    r._RF.pop()
            }
        }
    }
));
