System.register("chunks:///_virtual/SpiritBookTemplateDetail.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpiritBookTemplateElement.ts"], (function(e) {
        var t, o, r;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    o = e.cclegacy
                }
                , function(e) {
                    r = e.SpiritBookTemplateElement
                }
            ],
            execute: function() {
                o._RF.push({}, "5462ayhrvpIO4AUL7MMlw5y", "SpiritBookTemplateDetail", void 0),
                    e("SpiritBookTemplateDetail", function(e) {
                        function o(t) {
                            var o;
                            return void 0 === t && (t = null),
                                (o = e.call(this, t) || this).source = "",
                                o.autoselected = !0,
                            t && (t.hasOwnProperty("src") && (o.source = t.src),
                            t.hasOwnProperty("autoselected") && (o.autoselected = "true" === t.autoselected)),
                                o
                        }
                        return t(o, e),
                            o
                    }(r)).TYPE_POP = "pop",
                    o._RF.pop()
            }
        }
    }
));
