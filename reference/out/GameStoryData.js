System.register("chunks:///_virtual/GameStoryData.ts", ["cc"], (function(t) {
        var e;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
            ],
            execute: function() {
                e._RF.push({}, "def13E53BpEiLYRuFyerV3T", "GameStoryData", void 0);
                t("GameStoryStepType", function(t) {
                    return t.Wait = "Wait",
                        t.AnimationCreate = "AnimationCreate",
                        t.AnimationGotoAndStop = "AnimationGotoAndStop",
                        t.NodeClick = "NodeClick",
                        t.ButtonClick = "ButtonClick",
                        t
                }({}));
                e._RF.pop()
            }
        }
    }
));
