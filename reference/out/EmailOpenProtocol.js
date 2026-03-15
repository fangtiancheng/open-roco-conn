System.register("chunks:///_virtual/EmailOpenProtocol.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameProtocol.ts", "./ProtoBuff.ts", "./ProtoBundle.js", "./ProtoBundle.mjs_cjs=&original=.js"], (function(t) {
        var n, o, e, r, i, u, s;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    o = t.createClass
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    r = t.GameProtocol
                }
                , function(t) {
                    i = t.ProtoRequest,
                        u = t.ProtoResponse
                }
                , function(t) {
                    s = t.default
                }
                , null],
            execute: function() {
                e._RF.push({}, "a8f8ae5+LpENrdbJGTNqiwT", "EmailOpenProtocol", void 0);
                var l = t("EmailOpenReq", function(t) {
                    function o() {
                        return t.apply(this, arguments) || this
                    }
                    return n(o, t),
                        o.prototype.getRequestCls = function() {
                            return s.MailBoxProto.OpenMailReq
                        }
                        ,
                        o
                }(i))
                    , c = t("EmailOpenRsp", function(t) {
                    function o() {
                        return t.apply(this, arguments) || this
                    }
                    return n(o, t),
                        o.prototype.getResponseCls = function() {
                            return s.MailBoxProto.OpenMailRsp
                        }
                        ,
                        o
                }(u));
                t("EmailOpenProtocol", function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    n(e, t);
                    var r = e.prototype;
                    return r.getADFType = function() {
                        return 1703937
                    }
                        ,
                        r.request = function(t, n, o) {
                            var e = new l;
                            this.send(e, n, o)
                        }
                        ,
                        o(e, [{
                            key: "response",
                            get: function() {
                                return c
                            }
                        }]),
                        e
                }(r));
                e._RF.pop()
            }
        }
    }
));
