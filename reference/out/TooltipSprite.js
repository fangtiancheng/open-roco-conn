System.register("chunks:///_virtual/TooltipSprite.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, o, i;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    o = t.cclegacy,
                        i = t.Node
                }
            ],
            execute: function() {
                o._RF.push({}, "c080fvXOBRNc4YpHpjehpb2", "TooltipSprite", void 0);
                t("TooltipSprite", function(t) {
                    function o() {
                        for (var e, o = arguments.length, i = new Array(o), n = 0; n < o; n++)
                            i[n] = arguments[n];
                        return (e = t.call.apply(t, [this].concat(i)) || this).tooltip = "",
                            e
                    }
                    return e(o, t),
                        o
                }(i));
                o._RF.pop()
            }
        }
    }
));
