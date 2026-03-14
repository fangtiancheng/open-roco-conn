System.register("chunks:///_virtual/GameStoryChangeStatusProtocol.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameProtocol.ts", "./ProtoBuff.ts", "./ProtoBundle.js", "./ProtoBundle.mjs_cjs=&original=.js"], (function(t) {
        var e, n, o, r, u, s, i;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    o = t.cclegacy
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
                o._RF.push({}, "0e2f4gxFmBIfImvgiyV0mO0", "GameStoryChangeStatusProtocol", void 0);
                var a = t("GameStoryChangeStatusReq", function(t) {
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    return e(n, t),
                        n.prototype.getRequestCls = function() {
                            return null
                        }
                        ,
                        n
                }(u))
                    , c = t("GameStoryChangeStatusRsp", function(t) {
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    return e(n, t),
                        n.prototype.getResponseCls = function() {
                            return i.ZoneNoviceRevision.ChangeStatusRsp
                        }
                        ,
                        n
                }(s));
                t("GameStoryChangeStatusProtocol", function(t) {
                    function o() {
                        return t.apply(this, arguments) || this
                    }
                    e(o, t);
                    var r = o.prototype;
                    return r.getADFType = function() {
                        return 206034
                    }
                        ,
                        r.requestPetBag = function(t, e) {
                            var n = new a;
                            this.send(n, t, e)
                        }
                        ,
                        n(o, [{
                            key: "response",
                            get: function() {
                                return c
                            }
                        }]),
                        o
                }(r));
                o._RF.pop()
            }
        }
    }
));
