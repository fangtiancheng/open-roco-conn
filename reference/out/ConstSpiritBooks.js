System.register("chunks:///_virtual/ConstSpiritBooks.ts", ["cc", "./DEFINE.ts"], (function(t) {
        var o, r, i;
        return {
            setters: [function(t) {
                o = t.cclegacy,
                    r = t._decorator
            }
                , function(t) {
                    i = t.DEFINE
                }
            ],
            execute: function() {
                o._RF.push({}, "eebce+kyUlFq62H1zRgsj7Q", "ConstSpiritBooks", void 0);
                r.ccclass,
                    r.property;
                var n = t("ConstSpiritBooks", function() {
                    function t() {}
                    return t.isZoneSpirit = function(t) {
                        return t > 1e5 && t < 3e5
                    }
                        ,
                        t
                }());
                n.CONF_NAME = "SpiritBooks",
                    n.BOOK_TYPE_NORMAL = 1,
                    n.BOOK_TYPE_YUNYIN = 2,
                    n.UNDEFINE = -1,
                    n.STATE_UNKONW = 0,
                    n.STATE_FIND = 1,
                    n.STATE_CATCH = 2,
                    n.STATE_RELEASE = 3,
                    n.SpiritBooksIDArr = [1, 11, 12, 10],
                    n._url = i.COMM_ROOT + "res/combat/icons/",
                    o._RF.pop()
            }
        }
    }
));
