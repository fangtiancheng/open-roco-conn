System.register("chunks:///_virtual/SpiritPropertyTranslator.ts", ["cc", "./Constants.ts", "./global.ts", "./PropertyDes.ts", "./LangStrings.ts"], (function(t) {
        var e, r, n, a, o;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
                , function(t) {
                    r = t.Constants
                }
                , function(t) {
                    n = t.__global
                }
                , function(t) {
                    a = t.PropertyDes
                }
                , function(t) {
                    o = t.LangStrings
                }
            ],
            execute: function() {
                e._RF.push({}, "92691BpQkdC2pK9Y+UkPWw9", "SpiritPropertyTranslator", void 0);
                var i = t("SpiritPropertyTranslator", function() {
                    function t() {
                        throw new Error("SpiritPropertyParser class can not be instantiated.")
                    }
                    return t.getTemper = function(t) {
                        return t > 0 && t <= a.TEMPERS.length ? a.TEMPERS[t - 1] : o.UNKNOWN
                    }
                        ,
                        t.getCaughtTime = function(t) {
                            var e = new Date(1e3 * t);
                            return e.getFullYear() + o.YEAR + (e.getMonth() + 1) + o.MONTH + e.getDate() + o.DAY
                        }
                        ,
                        t.getCaughtLocation = function(t) {
                            try {
                                return n.SysAPI.getGDataAPI().getDataProxy(r.SCENE_DATA).select(t).sceneName
                            } catch (t) {}
                            return o.UNKNOWN
                        }
                        ,
                        t.getValidCaughtLocation = function(e) {
                            var r = this.getCaughtLocation(e);
                            return e != t.NEWBIE_SCENE_ID && e != t.FREE_SPIRIT_SCENE_ID ? r : o.ROCO_GIFT
                        }
                        ,
                        t.getCaughtDescriptionStr = function(e, r) {
                            var n = this.getCaughtTime(e);
                            this.getCaughtLocation(r);
                            return r != t.NEWBIE_SCENE_ID && t.FREE_SPIRIT_SCENE_ID,
                                n
                        }
                        ,
                        t.getMasterName = function(t) {
                            try {
                                return n.SysAPI.getGDataAPI().getDataProxy(r.ROLE_DATA).select(t).nickName
                            } catch (t) {}
                            return o.UNKNOWN
                        }
                        ,
                        t
                }());
                i.NEWBIE_SCENE_ID = 10001,
                    i.FREE_SPIRIT_SCENE_ID = 19999,
                    e._RF.pop()
            }
        }
    }
));
