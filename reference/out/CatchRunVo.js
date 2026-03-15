System.register("chunks:///_virtual/CatchRunVo.ts", ["cc"], (function(t) {
        var n;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
            ],
            execute: function() {
                n._RF.push({}, "3a7dfyjqxNHzLsqQu3YOAoL", "CatchRunVo", void 0);
                t("CatchRunVo", function() {
                    function t() {
                        this.aim = 0,
                            this.isSuccess = void 0,
                            this.ballId = 0
                    }
                    return t.prototype.toString = function() {
                        return "逃跑表现:\n攻方:" + this.aim + "\n是否成功:" + this.isSuccess
                    }
                        ,
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
