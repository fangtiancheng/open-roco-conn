System.register("chunks:///_virtual/ProtoBuff.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameProtocol.ts", "./ProtoBundle.mjs_cjs=&original=.js", "./ProtoBundle.js"], (function(t) {
        var e, o, n, r, s;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    o = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    r = t.GameNetRequest,
                        s = t.GameNetResponse
                }
                , null, function(e) {
                    t("proto", e.default)
                }
            ],
            execute: function() {
                n._RF.push({}, "fb086NwXf9FWqBeGt6BpQjU", "ProtoBuff", void 0);
                t("ProtoRequest", function(t) {
                    function o() {
                        var e;
                        (e = t.call(this) || this).data = void 0;
                        var o = e.getRequestCls();
                        return o && (e.data = new o),
                            e
                    }
                    return e(o, t),
                        o.prototype.writeToBuffer = function(t) {
                            var e = this.getRequestCls();
                            if (e && this.data)
                                for (var o = e.encode(this.data).finish(), n = 0; n < o.length; n++)
                                    t.writeInt8(o[n])
                        }
                        ,
                        o
                }(r)),
                    t("ProtoResponse", function(t) {
                        function n() {
                            for (var e, o = arguments.length, n = new Array(o), r = 0; r < o; r++)
                                n[r] = arguments[r];
                            return (e = t.call.apply(t, [this].concat(n)) || this)._data = void 0,
                                e
                        }
                        e(n, t);
                        var r = n.prototype;
                        return r.decode = function(t) {
                            var e = t.body
                                , o = this.getResponseCls();
                            o && (this._data = o.decode(e.bytes, t.head.length))
                        }
                            ,
                            r.readFromSlice = function(t, e) {}
                            ,
                            o(n, [{
                                key: "data",
                                get: function() {
                                    return this._data
                                }
                            }]),
                            n
                    }(s));
                n._RF.pop()
            }
        }
    }
));
