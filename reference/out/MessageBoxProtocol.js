System.register("chunks:///_virtual/MessageBoxProtocol.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameProtocol.ts", "./ProtoBuff.ts", "./ProtoBundle.js", "./ProtoBundle.mjs_cjs=&original=.js"], (function(e) {
        var t, o, n, s, r, u, i;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    o = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    s = e.GameProtocol
                }
                , function(e) {
                    r = e.ProtoRequest,
                        u = e.ProtoResponse
                }
                , function(e) {
                    i = e.default
                }
                , null],
            execute: function() {
                n._RF.push({}, "9403a6i+91OkrZEJdlrF5f8", "MessageBoxProtocol", void 0);
                var c = e("MessageBoxReq", function(e) {
                    function o() {
                        return e.apply(this, arguments) || this
                    }
                    return t(o, e),
                        o.prototype.getRequestCls = function() {
                            return i.AngelMessageBox.PTB_0x181000_QueryStatus_Message_S2C
                        }
                        ,
                        o
                }(r))
                    , a = e("MessageBoxRsp", function(e) {
                    function o() {
                        return e.apply(this, arguments) || this
                    }
                    return t(o, e),
                        o.prototype.getResponseCls = function() {
                            return i.AngelMessageBox.PTB_0x181001_Update_Message_PUSH
                        }
                        ,
                        o
                }(u));
                e("MessageBoxProtocol", function(e) {
                    function n() {
                        return e.apply(this, arguments) || this
                    }
                    t(n, e);
                    var s = n.prototype;
                    return s.getADFType = function() {
                        return 1576961
                    }
                        ,
                        s.request = function(e, t, o) {
                            var n = new c;
                            this.send(n, t, o)
                        }
                        ,
                        o(n, [{
                            key: "response",
                            get: function() {
                                return a
                            }
                        }]),
                        n
                }(s));
                n._RF.pop()
            }
        }
    }
));
