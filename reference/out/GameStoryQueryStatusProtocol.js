System.register("chunks:///_virtual/GameStoryQueryStatusProtocol.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameProtocol.ts", "./ProtoBuff.ts", "./ProtoBundle.js", "./ProtoBundle.mjs_cjs=&original=.js"], (function(t) {
        var e, o, n, r, u, s, i;
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
                        s = t.ProtoResponse
                }
                , function(t) {
                    i = t.default
                }
                , null],
            execute: function() {
                n._RF.push({}, "44245aJC8JF4Z+O31/Lbp7S", "GameStoryQueryStatusProtocol", void 0);
                var c = t("GameStoryQueryStatusReq", function(t) {
                    function o() {
                        return t.apply(this, arguments) || this
                    }
                    return e(o, t),
                        o.prototype.getRequestCls = function() {
                            return null
                        }
                        ,
                        o
                }(u))
                    , a = t("GameStoryQueryStatusRsp", function(t) {
                    function o() {
                        return t.apply(this, arguments) || this
                    }
                    return e(o, t),
                        o.prototype.getResponseCls = function() {
                            return i.ZoneNoviceRevision.QueryStatusRsp
                        }
                        ,
                        o
                }(s));
                t("GameStoryQueryStatusProtocol", function(t) {
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    e(n, t);
                    var r = n.prototype;
                    return r.getADFType = function() {
                        return 206033
                    }
                        ,
                        r.requestPetBag = function(t, e) {
                            var o = new c;
                            this.send(o, t, e)
                        }
                        ,
                        o(n, [{
                            key: "response",
                            get: function() {
                                return a
                            }
                        }]),
                        n
                }(r));
                n._RF.pop()
            }
        }
    }
));
