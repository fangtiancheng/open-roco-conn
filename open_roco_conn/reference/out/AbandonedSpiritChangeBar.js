System.register("chunks:///_virtual/AbandonedSpiritChangeBar.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpiritChangeBar.ts"], (function(t) {
        var n, e, i, r;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    r = t.SpiritChangeBar
                }
            ],
            execute: function() {
                i._RF.push({}, "cc3767eaHVNXKDgp4Vx0k0a", "AbandonedSpiritChangeBar", void 0);
                t("AbandonedSpiritChangeBar", function(t) {
                    function i(n) {
                        return t.call(this, n) || this
                    }
                    n(i, t);
                    var r = i.prototype;
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
                        e(i, [{
                            key: "display",
                            get: function() {
                                return this
                            }
                        }]),
                        i
                }(r));
                i._RF.pop()
            }
        }
    }
));
