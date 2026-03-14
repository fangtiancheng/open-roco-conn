System.register("chunks:///_virtual/XML.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts"], (function(t) {
        var n, e, c;
        return {
            setters: [function(t) {
                n = t.createClass
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    c = t.default
                }
            ],
            execute: function() {
                e._RF.push({}, "8acdegPfZ9Jqr73CJqty6gL", "XML", void 0);
                t("XML", function() {
                    function t(t) {
                        this._data = void 0,
                            this._data = t
                    }
                    return n(t, [{
                        key: "data",
                        get: function() {
                            return this._data
                        },
                        set: function(t) {
                            throw c.IS_LOCAL,
                                new Error("[" + this.constructor.name + "]'s function [set data] can not be call")
                        }
                    }]),
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
