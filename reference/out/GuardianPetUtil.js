System.register("chunks:///_virtual/GuardianPetUtil.ts", ["cc", "./Constants.ts", "./global.ts", "./BuildLogHelper.ts"], (function(t) {
        var n, e, u, r;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
                , function(t) {
                    e = t.Constants
                }
                , function(t) {
                    u = t.__global
                }
                , function(t) {
                    r = t.default
                }
            ],
            execute: function() {
                n._RF.push({}, "04c7fcY9LFIjooeOXh3qTIn", "GuardianPetUtil", void 0);
                t("GuardianPetUtil", function() {
                    function t() {}
                    return t.getGuardianPetIconID = function(t, n) {
                        if (null == t || null == t)
                            return r.IS_LOCAL,
                                0;
                        if (null == n || null == n)
                            return r.IS_LOCAL,
                                0;
                        var a = 100 * t + n
                            , i = u.SysAPI.getGDataAPI().getDataProxy(e.GUARDIANPET_DATA);
                        if (!i)
                            return r.IS_LOCAL,
                                0;
                        var l = i.select(a);
                        return l ? 100 * t + l.phase : (r.IS_LOCAL,
                            0)
                    }
                        ,
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
