System.register("chunks:///_virtual/AttackVo.ts", ["cc"], (function(s) {
        var t;
        return {
            setters: [function(s) {
                t = s.cclegacy
            }
            ],
            execute: function() {
                t._RF.push({}, "d53b5uEVjhJ246BUj45UmeX", "AttackVo", void 0);
                s("AttackVo", function() {
                    function s() {
                        this.isPlayEffect = void 0,
                            this.isPlaySPAction = void 0,
                            this.isOnlyHit = !1,
                            this.offenseID = 0,
                            this.offenseIndex = 0,
                            this.defenseID = 0,
                            this.defenseIndex = 0,
                            this.skillDes = void 0,
                            this.isHurt = void 0,
                            this.isShaut = void 0,
                            this.isMiss = void 0,
                            this.defenseHPV = void 0,
                            this.offenseHPV = void 0,
                            this.skillBgFlag = 0,
                            this.myProxy = 0,
                            this.otherProxy = 0,
                            this.myDetreat = 0,
                            this.otherDetreat = 0,
                            this.myIntensify = 0,
                            this.otherIntensify = 0,
                            this.myImbuff = 0,
                            this.otherImbuff = 0,
                            this.myImdebuff = 0,
                            this.otherImdebuff = 0,
                            this.myusePP = 0,
                            this.otherusePP = 0,
                            this.myImexpel = 0,
                            this.otherImexpel = 0,
                            this.restrainId = 0,
                            this.immunityInfoArray = void 0
                    }
                    return s.prototype.toString = function() {
                        return null != this.defenseHPV && (CONFIG.DEBUG,
                            console.log("\n守方血量:" + this.defenseHPV.hitTimes + "," + this.defenseHPV.hpV + "," + this.defenseHPV.hpLeft)),
                        null != this.offenseHPV && (CONFIG.DEBUG,
                            console.log("\n攻方血量:" + this.offenseHPV.hitTimes + "," + this.offenseHPV.hpV + "," + this.offenseHPV.hpLeft)),
                        "打击表现:\n攻方:" + this.offenseID + "," + this.offenseIndex + "\n防守方:" + this.defenseID + "," + this.defenseIndex + "\n技能:" + this.skillDes.id + "," + this.skillDes.name + "\n伤害:" + this.isHurt + "\n暴击:" + this.isShaut + "\nMISS:" + this.isMiss
                    }
                        ,
                        s
                }());
                t._RF.pop()
            }
        }
    }
));
