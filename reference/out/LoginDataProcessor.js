System.register("chunks:///_virtual/LoginDataProcessor.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./ADFCmdsType.ts", "./ProtocolHelper.ts", "./LoginDataBody.ts", "./LoginDataRepply.ts"], (function(o) {
        var n, t, e, r, i, a, c;
        return {
            setters: [function(o) {
                n = o.inheritsLoose
            }
                , function(o) {
                    t = o.cclegacy
                }
                , function(o) {
                    e = o.EventDispatcher
                }
                , function(o) {
                    r = o.ADFCmdsType
                }
                , function(o) {
                    i = o.ProtocolHelper
                }
                , function(o) {
                    a = o.LoginDataBody
                }
                , function(o) {
                    c = o.LoginDataRepply
                }
            ],
            execute: function() {
                t._RF.push({}, "aa9f6WR435H9ZX992B1r21X", "LoginDataProcessor", void 0);
                o("LoginDataProcessor", function(o) {
                    function t() {
                        for (var n, t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                            e[r] = arguments[r];
                        return (n = o.call.apply(o, [this].concat(e)) || this).loginData = new c,
                            n
                    }
                    n(t, o);
                    var e = t.prototype;
                    return e.decode = function(o) {
                        var n = o.body;
                        return CONFIG.DEBUG && console.log("获取到登录返回数据:" + n.buffLen),
                            this.loginData.read(n),
                            this.loginData
                    }
                        ,
                        e.encode = function(o, n) {
                            void 0 === n && (n = -1);
                            var t = o
                                , e = t.uin
                                , r = t.key
                                , c = t.roomID
                                , s = i.CreateADF(n, e)
                                , u = new a;
                            return u.key = r,
                                u.roomID = c,
                                s.body = u,
                                s
                        }
                        ,
                        e.getADFType = function() {
                            return r.T_LoginRoom
                        }
                        ,
                        t
                }(e));
                t._RF.pop()
            }
        }
    }
));
