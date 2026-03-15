System.register("chunks:///_virtual/VideoConverterDef.ts", ["cc"], (function(e) {
        var i;
        return {
            setters: [function(e) {
                i = e.cclegacy
            }
            ],
            execute: function() {
                i._RF.push({}, "ebf65xX8+1HWqEbTBDDFxuL", "VideoConverterDef", void 0);
                e("VideoConverterDef", function() {
                    function e() {}
                    return e.setPPLeft = function(e, i) {
                        if (e.isPP) {
                            var r = 0
                                , t = 0;
                            if (e.id == i.myInfo.id) {
                                var n = i.myInfo.spirits[e.index - 1];
                                if (null != n)
                                    for (r = n.skills.length,
                                             t = 0; t < r; t++)
                                        n.skills[t].ppLeft = e.ppVar[t]
                            } else
                                for (r = i.rivalCurSpirit.skills.length,
                                         t = 0; t < r; t++)
                                    i.rivalCurSpirit.skills[t].ppLeft = e.ppVar[t]
                        }
                    }
                        ,
                        e
                }());
                i._RF.pop()
            }
        }
    }
));
