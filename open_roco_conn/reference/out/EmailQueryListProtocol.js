System.register("chunks:///_virtual/EmailQueryListProtocol.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameProtocol.ts", "./ProtoBuff.ts", "./ProtoBundle.js", "./ProtoBundle.mjs_cjs=&original=.js"], (function(t) {
        var o, e, n, r, u, s, i;
        return {
            setters: [function(t) {
                o = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    r = t.GameProtocol
                }
                , function(t) {
                    u = t.ProtoRequest,
                        s = t.ProtoResponse
                }
                , function(t) {
                    i = t.default
                }
                , null],
            execute: function() {
                n._RF.push({}, "3c71fHLg1JDVbHTGXXFx1NY", "EmailQueryListProtocol", void 0);
                var c = t("EmailQueryListReq", function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    return o(e, t),
                        e.prototype.getRequestCls = function() {
                            return null
                        }
                        ,
                        e
                }(u))
                    , l = t("EmailQueryListRsp", function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    return o(e, t),
                        e.prototype.getResponseCls = function() {
                            return i.MailBoxProto.QueryListRsp
                        }
                        ,
                        e
                }(s));
                t("EmailQueryListProtocol", function(t) {
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    o(n, t);
                    var r = n.prototype;
                    return r.getADFType = function() {
                        return 1703936
                    }
                        ,
                        r.request = function(t, o) {
                            var e = new c;
                            this.send(e, t, o)
                        }
                        ,
                        e(n, [{
                            key: "response",
                            get: function() {
                                return l
                            }
                        }]),
                        n
                }(r));
                n._RF.pop()
            }
        }
    }
));
