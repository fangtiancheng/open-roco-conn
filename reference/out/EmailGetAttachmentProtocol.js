System.register("chunks:///_virtual/EmailGetAttachmentProtocol.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameProtocol.ts", "./ProtoBuff.ts", "./ProtoBundle.js", "./ProtoBundle.mjs_cjs=&original=.js"], (function(t) {
        var e, o, n, r, u, i, s;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    o = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    r = t.GameProtocol
                }
                , function(t) {
                    u = t.ProtoRequest,
                        i = t.ProtoResponse
                }
                , function(t) {
                    s = t.default
                }
                , null],
            execute: function() {
                n._RF.push({}, "0993dWSGLRKXZH3gkDB4zlz", "EmailGetAttachmentProtocol", void 0);
                var c = t("EmailGetAttachmentReq", function(t) {
                    function o() {
                        return t.apply(this, arguments) || this
                    }
                    return e(o, t),
                        o.prototype.getRequestCls = function() {
                            return s.MailBoxProto.GetAttachReq
                        }
                        ,
                        o
                }(u))
                    , l = t("EmailGetAttachmentRsp", function(t) {
                    function o() {
                        return t.apply(this, arguments) || this
                    }
                    return e(o, t),
                        o.prototype.getResponseCls = function() {
                            return s.MailBoxProto.GetAttachRsp
                        }
                        ,
                        o
                }(i));
                t("EmailGetAttachmentProtocol", function(t) {
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    e(n, t);
                    var r = n.prototype;
                    return r.getADFType = function() {
                        return 1703938
                    }
                        ,
                        r.request = function(t, e, o) {
                            var n = new c;
                            this.send(n, e, o)
                        }
                        ,
                        o(n, [{
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
