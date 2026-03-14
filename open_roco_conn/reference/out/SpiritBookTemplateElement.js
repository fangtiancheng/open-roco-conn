System.register("chunks:///_virtual/SpiritBookTemplateElement.ts", ["cc"], (function(t) {
        var e, i;
        return {
            setters: [function(t) {
                e = t.cclegacy,
                    i = t._decorator
            }
            ],
            execute: function() {
                e._RF.push({}, "ad50bQ5hhVPb71bcnV3vyyX", "SpiritBookTemplateElement", void 0);
                i.ccclass,
                    i.property,
                    t("SpiritBookTemplateElement", function() {
                        function t(t) {
                            if (void 0 === t && (t = null),
                                this.x = 0,
                                this.y = 0,
                                this.type = void 0,
                                t) {
                                if (t.hasOwnProperty("pos")) {
                                    var e = String(t.pos).split(",");
                                    this.x = parseInt(e[0]) || 0,
                                        this.y = e.length > 1 && parseInt(e[1]) || 0
                                }
                                t.hasOwnProperty("type") && (this.type = t.type)
                            }
                        }
                        return t.prototype.clone = function(t) {
                            t.x = this.x,
                                t.y = this.y,
                                t.type = this.type
                        }
                            ,
                            t
                    }());
                e._RF.pop()
            }
        }
    }
));
