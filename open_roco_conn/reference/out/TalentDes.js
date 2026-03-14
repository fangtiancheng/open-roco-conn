System.register("chunks:///_virtual/TalentDes.ts", ["cc"], (function(t) {
        var e;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
            ],
            execute: function() {
                e._RF.push({}, "3cd1bZqcZNG84F43RHgEHq4", "TalentDes", void 0),
                    t("TalentDes", function() {
                        function t() {
                            this.id = 0,
                                this.name = "",
                                this.description = ""
                        }
                        return t.getName = function(e) {
                            return null == t.SET[e] && (e = 0),
                                t.SET[e].name
                        }
                            ,
                            t
                    }()).SET = {},
                    e._RF.pop()
            }
        }
    }
));
