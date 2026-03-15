System.register("chunks:///_virtual/URLRequest.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, u;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    u = t.cclegacy
                }
            ],
            execute: function() {
                u._RF.push({}, "13ba7yx+UBASIqT/95hNuis", "URLRequest", void 0);
                t("URLRequest", function() {
                    function t(t) {
                        this._url = void 0,
                            this._url = t
                    }
                    return e(t, [{
                        key: "url",
                        get: function() {
                            return this._url
                        },
                        set: function(t) {
                            this._url = t
                        }
                    }]),
                        t
                }());
                u._RF.pop()
            }
        }
    }
));
