System.register("chunks:///_virtual/ProtocolBase.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var o, e;
        return {
            setters: [function(t) {
                o = t.createClass
            }
                , function(t) {
                    e = t.cclegacy
                }
            ],
            execute: function() {
                e._RF.push({}, "9228abl+AZGMJ3R4ATbb4+k", "ProtocolBase", void 0);
                t("ProtocolBase", function() {
                    function t() {}
                    var e = t.prototype;
                    return e.getProtocolId = function() {
                        return null
                    }
                        ,
                        e.toString = function(t) {
                            return "ProtocolBase"
                        }
                        ,
                        o(t, [{
                            key: "length",
                            get: function() {
                                return 0
                            }
                        }]),
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
