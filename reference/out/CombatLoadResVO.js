System.register("chunks:///_virtual/CombatLoadResVO.ts", ["cc"], (function(t) {
        var s;
        return {
            setters: [function(t) {
                s = t.cclegacy
            }
            ],
            execute: function() {
                s._RF.push({}, "4a126oDLuxFapERFogva4TO", "CombatLoadResVO", void 0);
                var i = t("CombatLoadResVO", function() {
                    function t() {
                        this.id = 0,
                            this.type = "",
                            this.key = "",
                            this.resPool = void 0,
                            this.policy = 0,
                            this.url = "",
                            this.linkName = "",
                            this.callBack = null,
                            this.bundleName = "",
                            this.resID = "",
                            this.resType = 0,
                            this.isGaf = !1,
                            this.assetPath = []
                    }
                    return t.prototype.toString = function() {
                        return this.url
                    }
                        ,
                        t
                }());
                i.RES_TYPE_PET_ANIMATION = 1,
                    i.RES_TYPE_SKILL_ANIMATION = 2,
                    i.RES_TYPE_EFFECT_ANIMATION = 3,
                    i.RES_TYPE_BUFF_ANIMATION = 4,
                    i.RES_TYPE_IMAGE = 5,
                    s._RF.pop()
            }
        }
    }
));
