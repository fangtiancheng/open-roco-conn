System.register("chunks:///_virtual/EmailDelProtocol.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameProtocol.ts", "./ProtoBuff.ts", "./ProtoBundle.js", "./ProtoBundle.mjs_cjs=&original=.js"], (function(t) {
        var o, e, n, r, u, i, l;
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
                        i = t.ProtoResponse
                }
                , function(t) {
                    l = t.default
                }
                , null],
            execute: function() {
                n._RF.push({}, "819e93J0mVGMq5EufqgML9J", "EmailDelProtocol", void 0);
                var s = t("EmailDelReq", function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    return o(e, t),
                        e.prototype.getRequestCls = function() {
                            return l.MailBoxProto.DelMailReq
                        }
                        ,
                        e
                }(u))
                    , c = t("EmailDelRsp", function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    return o(e, t),
                        e.prototype.getResponseCls = function() {
                            return l.MailBoxProto.DelMailRsp
                        }
                        ,
                        e
                }(i));
                t("EmailDelProtocol", function(t) {
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    o(n, t);
                    var r = n.prototype;
                    return r.getADFType = function() {
                        return 1703939
                    }
                        ,
                        r.request = function(t, o, e) {
                            var n = new s;
                            this.send(n, o, e)
                        }
                        ,
                        e(n, [{
                            key: "response",
                            get: function() {
                                return c
                            }
                        }]),
                        n
                }(r));
                n._RF.pop()
            }
        }
    }
));
