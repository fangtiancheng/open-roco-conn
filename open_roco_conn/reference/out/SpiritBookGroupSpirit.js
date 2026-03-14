System.register("chunks:///_virtual/SpiritBookGroupSpirit.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpiritBooksDataProxy.ts"], (function(t) {
        var i, r, n;
        return {
            setters: [function(t) {
                i = t.createClass
            }
                , function(t) {
                    r = t.cclegacy
                }
                , function(t) {
                    n = t.SpiritBooksDataProxy
                }
            ],
            execute: function() {
                r._RF.push({}, "473cc/jBBlGCpfTcT8kp3hX", "SpiritBookGroupSpirit", void 0);
                t("SpiritBookGroupSpirit", function() {
                    function t(t) {
                        void 0 === t && (t = null),
                            this.id = 0,
                            this.isStarred = !1,
                            this.isUnknown = !1,
                            this.isNew = !1,
                        t && (t.hasOwnProperty("nid") ? this.id = parseInt(t.nid) || 0 : this.id = parseInt(t.id) || 0,
                        t.hasOwnProperty("star") && (this.isStarred = "true" === t.star),
                        t.hasOwnProperty("unknown") && (this.isUnknown = "true" === t.unknown),
                        t.hasOwnProperty("newed") && (this.isNew = "true" === t.newed))
                    }
                    return i(t, [{
                        key: "des",
                        get: function() {
                            return n.getSpiritDesbyID(this.id)
                        }
                    }]),
                        t
                }());
                r._RF.pop()
            }
        }
    }
));
