System.register("chunks:///_virtual/CombatResVO.ts", ["cc"], (function(t) {
        var i;
        return {
            setters: [function(t) {
                i = t.cclegacy
            }
            ],
            execute: function() {
                i._RF.push({}, "e1709TnwN5BiqoldK88UHtG", "CombatResVO", void 0);
                t("CombatResVO", function() {
                    function t() {
                        this.id = 0,
                            this.type = "",
                            this.url = "",
                            this.Cls = null,
                            this.display = void 0,
                            this.policy = 0,
                            this.useCount = 0,
                            this.iscopy = !1,
                            this.resName = ""
                    }
                    return t.prototype.copy = function(t) {
                        this.id = t.id,
                            this.type = t.type,
                            this.url = t.url,
                            this.display = t.display,
                            this.policy = t.policy,
                            this.useCount = t.useCount,
                            this.iscopy = t.iscopy
                    }
                        ,
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
