System.register("chunks:///_virtual/TooltipIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AImage.ts"], (function(o) {
        var t, i, n;
        return {
            setters: [function(o) {
                t = o.inheritsLoose
            }
                , function(o) {
                    i = o.cclegacy
                }
                , function(o) {
                    n = o.AImage
                }
            ],
            execute: function() {
                i._RF.push({}, "b3493wDX0pG+oP4Sqb6Efj5", "TooltipIcon", void 0);
                o("TooltipIcon", function(o) {
                    function i(t, i, n) {
                        var e;
                        return void 0 === t && (t = 0),
                        void 0 === i && (i = 0),
                        void 0 === n && (n = !1),
                            (e = o.call(this, t, i, n) || this).tooltip = void 0,
                            e.tooltipPos = void 0,
                            e
                    }
                    return t(i, o),
                        i
                }(n));
                i._RF.pop()
            }
        }
    }
));
