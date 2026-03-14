System.register("chunks:///_virtual/LoginPlugin.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(n) {
        var e, t, o;
        return {
            setters: [function(n) {
                e = n.inheritsLoose
            }
                , function(n) {
                    t = n.cclegacy,
                        o = n.Component
                }
            ],
            execute: function() {
                t._RF.push({}, "9709f7QLc1JVKnnDamnWBKD", "LoginPlugin", void 0);
                n("LoginPlugin", function(n) {
                    function t() {
                        for (var e, t = arguments.length, o = new Array(t), i = 0; i < t; i++)
                            o[i] = arguments[i];
                        return (e = n.call.apply(n, [this].concat(o)) || this).roomLoginConn = void 0,
                            e.zoneBeginTime = 0,
                            e.isDirConnect = !1,
                            e.m_isAgree = !0,
                            e._isLoginComponentInitialized = !1,
                            e
                    }
                    e(t, n);
                    var o = t.prototype;
                    return o.initialize = function() {
                        throw new Error("Method not implemented.")
                    }
                        ,
                        o.finalize = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.call = function(n) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.getEDispatcher = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.setPlugName = function(n) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.getPlugName = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.setAngelSysAPI = function(n) {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        o.connectSvr = function(n, e, t) {}
                        ,
                        t
                }(o));
                t._RF.pop()
            }
        }
    }
));
