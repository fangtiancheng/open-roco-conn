System.register("chunks:///_virtual/FollowUserProcessor.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./ADFCmdsType.ts", "./P_Char.ts", "./ProtocolHelper.ts"], (function(e) {
        var o, r, t, n, s, c;
        return {
            setters: [function(e) {
                o = e.inheritsLoose
            }
                , function(e) {
                    r = e.cclegacy
                }
                , function(e) {
                    t = e.EventDispatcher
                }
                , function(e) {
                    n = e.ADFCmdsType
                }
                , function(e) {
                    s = e.P_Char
                }
                , function(e) {
                    c = e.ProtocolHelper
                }
            ],
            execute: function() {
                r._RF.push({}, "5f7a6Hx825EkLzKQ+apCmYZ", "FollowUserProcessor", void 0);
                e("FollowUserProcessor", function(e) {
                    function r() {
                        return e.call(this) || this
                    }
                    o(r, e);
                    var t = r.prototype;
                    return t.decode = function(e) {
                        var o = e.body
                            , r = c.ReadCode(o);
                        return r.isError() ? r.message : o.readUnsignedByte()
                    }
                        ,
                        t.encode = function(e, o) {
                            void 0 === o && (o = -1);
                            var r = c.CreateADF(o)
                                , t = new s;
                            return t.num = e,
                                r.body = t,
                                r
                        }
                        ,
                        t.getADFType = function() {
                            return n.T_SPIRIT_FOLLOW_USER
                        }
                        ,
                        r
                }(t));
                r._RF.pop()
            }
        }
    }
));
