System.register("chunks:///_virtual/ShowItemAwards.ts", ["cc", "./global.ts"], (function(t) {
        var e, n;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
                , function(t) {
                    n = t.__global
                }
            ],
            execute: function() {
                e._RF.push({}, "02aa8RsOl9CgKfvZO7TzicE", "ShowItemAwards", void 0);
                t("ShowItemAwards", (function(t, e) {
                        void 0 === e && (e = null),
                            e ? n.showItemPanel(t, e.handler) : n.showItemPanel(t)
                    }
                ));
                e._RF.pop()
            }
        }
    }
));
