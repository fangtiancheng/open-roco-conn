System.register("chunks:///_virtual/NormalLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NewLoader.ts"], (function(t) {
        var e, n, r, o;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    r = t.cclegacy
                }
                , function(t) {
                    o = t.NewLoader
                }
            ],
            execute: function() {
                r._RF.push({}, "a7bfcIFiBJD47EJNms/7Sx4", "NormalLoader", void 0);
                t("NormalLoader", function(t) {
                    function r() {
                        return t.apply(this, arguments) || this
                    }
                    e(r, t);
                    var o = r.prototype;
                    return o.getContent = function() {
                        return this._content
                    }
                        ,
                        o.getED = function() {
                            return this
                        }
                        ,
                        o.getURL = function() {
                            return this.__url
                        }
                        ,
                        n(r, [{
                            key: "type",
                            get: function() {
                                return 1
                            }
                        }]),
                        r
                }(o));
                r._RF.pop()
            }
        }
    }
));
