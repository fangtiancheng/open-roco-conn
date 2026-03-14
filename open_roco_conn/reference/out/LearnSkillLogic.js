System.register("chunks:///_virtual/LearnSkillLogic.ts", ["cc", "./global.ts", "./LearnSkillProxy.ts"], (function(n) {
        var i, o, l;
        return {
            setters: [function(n) {
                i = n.cclegacy
            }
                , function(n) {
                    o = n.__global
                }
                , function(n) {
                    l = n.LearnSkillProxy
                }
            ],
            execute: function() {
                i._RF.push({}, "719bcNoxYlNoI2g5pa9ILjU", "LearnSkillLogic", void 0);
                n("LearnSkillLogic", function() {
                    function n() {
                        this._learnSkillProxy = void 0,
                            this._learnSkillProxy = new l
                    }
                    var i = n.prototype;
                    return i.dispose = function() {
                        this._learnSkillProxy.dispose()
                    }
                        ,
                        i.consume = function(n, i) {
                            null != i ? this._learnSkillProxy.requestConsumable(n.id, i.index) : o.showMsgBox("请先选择一个宠物！")
                        }
                        ,
                        n
                }());
                i._RF.pop()
            }
        }
    }
));
