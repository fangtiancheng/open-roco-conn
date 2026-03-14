System.register("chunks:///_virtual/Proxy.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Notifier.ts"], (function(t) {
        var n, o, e;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    o = t.cclegacy
                }
                , function(t) {
                    e = t.Notifier
                }
            ],
            execute: function() {
                o._RF.push({}, "ae18d/NZGRK8bTsEjZBcZD6", "Proxy", void 0),
                    t("Proxy", function(t) {
                        function o(n, e) {
                            var r;
                            return void 0 === n && (n = null),
                            void 0 === e && (e = null),
                                (r = t.call(this) || this).proxyName = null,
                                r.data = null,
                                r.proxyName = null != n ? n : o.NAME,
                            null != e && r.setData(e),
                                r
                        }
                        n(o, t);
                        var e = o.prototype;
                        return e.getProxyName = function() {
                            return this.proxyName
                        }
                            ,
                            e.setData = function(t) {
                                this.data = t
                            }
                            ,
                            e.getData = function() {
                                return this.data
                            }
                            ,
                            e.onRegister = function() {}
                            ,
                            e.onRemove = function() {}
                            ,
                            o
                    }(e)).NAME = "Proxy",
                    o._RF.pop()
            }
        }
    }
));
