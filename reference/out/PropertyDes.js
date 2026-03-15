System.register("chunks:///_virtual/PropertyDes.ts", ["cc"], (function(t) {
        var e;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
            ],
            execute: function() {
                e._RF.push({}, "092dbSbXCFHGoiInB3iwUzI", "PropertyDes", void 0);
                var r = t("PropertyDes", function() {
                    function t() {
                        this.id = 0,
                            this.name = ""
                    }
                    return t.prototype.toString = function() {
                        return this.name
                    }
                        ,
                        t.getTemperStr = function(e) {
                            return e > 0 && e <= t.TEMPERS.length ? t.TEMPERS[e - 1] : "未知"
                        }
                        ,
                        t.getTemperDesHtmlStr = function(e) {
                            var r = "";
                            if (e > 0 && e <= t.TEMPERS.length) {
                                var n = this.TEMPER_DES[e - 1];
                                r += "(",
                                    1 == n.length ? r += n[0] : r += n[0] + "↑ " + n[1] + "↓",
                                    r += ")"
                            }
                            return r
                        }
                        ,
                        t.getTemperDesHtmlStr1 = function(e) {
                            var r = "";
                            if (e > 0 && e <= t.TEMPERS.length) {
                                var n = this.TEMPER_DES[e - 1];
                                1 == n.length ? r += n[0] : r += n[0] + "↑，" + n[1] + "↓"
                            }
                            return r
                        }
                        ,
                        t
                }());
                r.FEATURES = void 0,
                    r.BUFFS = void 0,
                    r.GroupTypes = void 0,
                    r.TEMPERS = ["孤僻", "固执", "调皮", "勇敢", "大胆", "淘气", "无虑", "悠闲", "保守", "稳重", "马虎", "冷静", "沉着", "温顺", "慎重", "狂妄", "胆小", "急躁", "开朗", "天真", "坦率", "害羞", "认真", "实干", "浮躁"],
                    r.TEMPER_DES = [["物攻", "物防"], ["物攻", "魔攻"], ["物攻", "魔防"], ["物攻", "速度"], ["物防", "物攻"], ["物防", "魔攻"], ["物防", "魔防"], ["物防", "速度"], ["魔攻", "物攻"], ["魔攻", "物防"], ["魔攻", "魔防"], ["魔攻", "速度"], ["魔防", "物攻"], ["魔防", "物防"], ["魔防", "魔攻"], ["魔防", "速度"], ["速度", "物攻"], ["速度", "物防"], ["速度", "魔攻"], ["速度", "魔防"], ["能力不变"], ["能力不变"], ["能力不变"], ["能力不变"], ["能力不变"]],
                    r.EQUIPMENT_PROPETY = void 0,
                    r.EQUIPMENT_TYPE = ["武器", "防具", "饰品"],
                    e._RF.pop()
            }
        }
    }
));
