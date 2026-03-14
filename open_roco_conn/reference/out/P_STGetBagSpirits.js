System.register("chunks:///_virtual/P_STGetBagSpirits.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./P_GetBagSpirits.ts", "./STSpiritDetail.ts"], (function(t) {
        var i, e, r, n;
        return {
            setters: [function(t) {
                i = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    r = t.P_GetBagSpirits
                }
                , function(t) {
                    n = t.STSpiritDetail
                }
            ],
            execute: function() {
                e._RF.push({}, "486b7e1PFNJFaS7OCXX91Qu", "P_STGetBagSpirits", void 0);
                t("P_STGetBagSpirits", function(t) {
                    function e() {
                        var i;
                        return (i = t.call(this) || this).spiritDataCls = n,
                            i
                    }
                    return i(e, t),
                        e
                }(r));
                e._RF.pop()
            }
        }
    }
));
