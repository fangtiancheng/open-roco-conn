System.register("chunks:///_virtual/UnicodeTranslator.ts", ["cc"], (function(n) {
        var t;
        return {
            setters: [function(n) {
                t = n.cclegacy
            }
            ],
            execute: function() {
                t._RF.push({}, "ecd4aSUSh5BXY5jVYp/f4U/", "UnicodeTranslator", void 0);
                n("UnicodeTranslator", function() {
                    function n() {
                        throw new Error("UnicodeTranslator can not be instantiated.")
                    }
                    return n.getCanNotCatchStr = function() {
                        return "这个宠物\n不可捕捉"
                    }
                        ,
                        n.getIsPvpStr = function() {
                            return "对方宠物\n不可捕捉"
                        }
                        ,
                        n.getIsNpcStr = function() {
                            return "NPC宠物\n不可捕捉"
                        }
                        ,
                        n.getEnemySpiritLevelIsHighThan60Str = function() {
                            return "高于60级的宠物\n不可捕捉"
                        }
                        ,
                        n.getUserSpiritLevelIsTooLowStr = function() {
                            return "背包中没有比对\n方等级高的宠物\n不可捕捉"
                        }
                        ,
                        n.getDefaultCanNotCatchStr = function() {
                            return "不可捕捉"
                        }
                        ,
                        n
                }());
                t._RF.pop()
            }
        }
    }
));
