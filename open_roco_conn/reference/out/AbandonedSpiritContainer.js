System.register("chunks:///_virtual/AbandonedSpiritContainer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpiritContainer.ts"], (function(t) {
        var n, i, e, r;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    r = t.SpiritContainer
                }
            ],
            execute: function() {
                e._RF.push({}, "6c4caNKZApENacjrZjwWQMV", "AbandonedSpiritContainer", void 0);
                t("AbandonedSpiritContainer", function(t) {
                    function e(n) {
                        return t.call(this, n) || this
                    }
                    n(e, t);
                    var r = e.prototype;
                    return r.afterLoaded = function() {
                        t.prototype.afterLoaded.call(this),
                            this.reform()
                    }
                        ,
                        r.reform = function() {
                            this._isInit
                        }
                        ,
                        r.dispose = function() {}
                        ,
                        i(e, [{
                            key: "display",
                            get: function() {
                                return this
                            }
                        }]),
                        e
                }(r));
                e._RF.pop()
            }
        }
    }
));
