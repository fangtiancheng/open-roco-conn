System.register("chunks:///_virtual/TextHelper.ts", ["cc"], (function(e) {
        var t, o, n;
        return {
            setters: [function(e) {
                t = e.cclegacy,
                    o = e.Label,
                    n = e.Color
            }
            ],
            execute: function() {
                t._RF.push({}, "7e20eEn4k5HQ7PacsM8Unjc", "TextHelper", void 0);
                e("TextHelper", function() {
                    function e() {}
                    return e.setTextColor = function(e, t, r) {
                        if (void 0 === r && (r = 255),
                            !(e instanceof o))
                            throw new TypeError("text must be an instance of cc.Label");
                        if (t < 0 || t > 16777215)
                            throw new RangeError("color must be a valid hex color value (0x000000 to 0xFFFFFF)");
                        if (r < 0 || r > 255)
                            throw new RangeError("alpha must be a valid value (0 to 255)");
                        try {
                            var c = new n(t >> 16 & 255,t >> 8 & 255,255 & t,r);
                            e.color = c
                        } catch (e) {
                            console.error("Failed to set text color:", e)
                        }
                    }
                        ,
                        e.setTextFontSize = function(e, t) {}
                        ,
                        e.setTextFontStyle = function(e, t) {}
                        ,
                        e.setTextOpacity = function(e, t) {
                            e.opacity = t
                        }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
