System.register("chunks:///_virtual/GuardianPetGCObject.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./GuardianPetActGCManager.ts"], (function(t) {
        var e, n, i, a, r;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.assertThisInitialized
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    a = t.EventDispatcher
                }
                , function(t) {
                    r = t.GuardianPetActGCManager
                }
            ],
            execute: function() {
                i._RF.push({}, "734d7NFXY5Dl7vNTSZEjejd", "GuardianPetGCObject", void 0);
                t("GuardianPetGCObject", function(t) {
                    function i(e) {
                        var i;
                        return i = t.call(this) || this,
                        e && r.addGuardianPetGCObject(e, n(i)),
                            i
                    }
                    return e(i, t),
                        i.prototype.dispose = function() {}
                        ,
                        i
                }(a));
                i._RF.pop()
            }
        }
    }
));
