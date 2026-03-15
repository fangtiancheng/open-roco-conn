System.register("chunks:///_virtual/SpiritBookGroup.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpiritBookGroupSpirit.ts"], (function(i) {
        var t, r, o;
        return {
            setters: [function(i) {
                t = i.createForOfIteratorHelperLoose
            }
                , function(i) {
                    r = i.cclegacy
                }
                , function(i) {
                    o = i.SpiritBookGroupSpirit
                }
            ],
            execute: function() {
                r._RF.push({}, "427b2vBmYhKrIQ3QteIBj4u", "SpiritBookGroup", void 0);
                i("SpiritBookGroup", (function(i) {
                        if (void 0 === i && (i = null),
                            this.templateId = 0,
                            this.spirits = [],
                        i && (this.templateId = parseInt(i.tmpl) || 0,
                            i.spirit))
                            for (var r, p = Array.isArray(i.spirit) ? i.spirit : [i.spirit], e = t(p); !(r = e()).done; ) {
                                var s = r.value;
                                this.spirits.push(new o(s))
                            }
                    }
                ));
                r._RF.pop()
            }
        }
    }
));
