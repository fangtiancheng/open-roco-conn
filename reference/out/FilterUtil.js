System.register("chunks:///_virtual/FilterUtil.ts", ["cc"], (function(t) {
        var r, e;
        return {
            setters: [function(t) {
                r = t.cclegacy,
                    e = t.Sprite
            }
            ],
            execute: function() {
                r._RF.push({}, "b8079JfLA5G7LnOtdhFY/kD", "FilterUtil", void 0),
                    t("FilterUtil", function() {
                        function t() {}
                        return t.getGrayFilter = function() {
                            return [255, 255, 255]
                        }
                            ,
                            t.recursiveGrayOut = function(t, r) {
                                var n = t.getComponent(e);
                                n && (n.grayscale = r)
                            }
                            ,
                            t.gray = function(r, e) {
                                t.recursiveGrayOut(r, e),
                                    r.children.forEach((function(r) {
                                            t.gray(r, e)
                                        }
                                    ))
                            }
                            ,
                            t
                    }()).ms_filterGray = void 0,
                    r._RF.pop()
            }
        }
    }
));
