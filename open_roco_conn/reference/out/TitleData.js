System.register("chunks:///_virtual/TitleData.ts", ["cc"], (function(t) {
        var i;
        return {
            setters: [function(t) {
                i = t.cclegacy
            }
            ],
            execute: function() {
                i._RF.push({}, "9b806bdLCdCXKWckrWvqpTr", "TitleData", void 0);
                t("TitleData", function() {
                    function t() {
                        this.id = 0,
                            this.type = 0,
                            this.tips = "",
                            this.level = void 0
                    }
                    return t.prototype.setData = function(t, i) {
                        void 0 === i && (i = null),
                            this.id = Number(t.id),
                            this.type = Number(t.type),
                            this.tips = String(t.tips),
                            this.level = i || t.level
                    }
                        ,
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
