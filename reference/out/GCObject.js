System.register("chunks:///_virtual/GCObject.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./ActGCManager.ts"], (function(t) {
        var e, n, c, i, s;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.assertThisInitialized
            }
                , function(t) {
                    c = t.cclegacy
                }
                , function(t) {
                    i = t.EventDispatcher
                }
                , function(t) {
                    s = t.ActGCManager
                }
            ],
            execute: function() {
                c._RF.push({}, "9b2fc53aCBEkJejSuX1N+zD", "GCObject", void 0);
                t("GCObject", function(t) {
                    function c(e) {
                        var c;
                        return c = t.call(this) || this,
                        e && s.addGCObject(e, n(c)),
                            c
                    }
                    return e(c, t),
                        c.prototype.dispose = function() {}
                        ,
                        c
                }(i));
                c._RF.pop()
            }
        }
    }
));
