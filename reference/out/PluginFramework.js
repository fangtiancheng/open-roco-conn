System.register("chunks:///_virtual/PluginFramework.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(n) {
        var e, t, r;
        return {
            setters: [function(n) {
                e = n.inheritsLoose
            }
                , function(n) {
                    t = n.cclegacy,
                        r = n.Component
                }
            ],
            execute: function() {
                t._RF.push({}, "9283bCqeg1Cx42ZRajem0CN", "PluginFramework", void 0);
                n("PluginFramework", function(n) {
                    function t() {
                        for (var e, t = arguments.length, r = new Array(t), i = 0; i < t; i++)
                            r[i] = arguments[i];
                        return (e = n.call.apply(n, [this].concat(r)) || this).__name = void 0,
                            e
                    }
                    e(t, n);
                    var r = t.prototype;
                    return r.initialize = function() {
                        return !1
                    }
                        ,
                        r.finalize = function() {
                            return !1
                        }
                        ,
                        r.call = function(n) {}
                        ,
                        r.getEDispatcher = function() {
                            return null
                        }
                        ,
                        r.setPlugName = function(n) {
                            this.__name = n
                        }
                        ,
                        r.getPlugName = function() {
                            return this.__name
                        }
                        ,
                        r.setAngelSysAPI = function(n) {}
                        ,
                        t
                }(r));
                t._RF.pop()
            }
        }
    }
));
