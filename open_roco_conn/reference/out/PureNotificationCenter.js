System.register("chunks:///_virtual/PureNotificationCenter.ts", ["cc", "./GlobalFacade.ts"], (function(t) {
        var n, e;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
                , function(t) {
                    e = t.default
                }
            ],
            execute: function() {
                n._RF.push({}, "c3297aVUvlDV55ee+ztDy34", "PureNotificationCenter", void 0),
                    t("PureNotificationCenter", function() {
                        function t(t) {
                            throw new Error("PureNotificationCenter can not be instantiate.")
                        }
                        return t.init = function() {
                            t._facade = new e("MainCore")
                        }
                            ,
                            t.sendNotification = function(n, e, i) {
                                void 0 === e && (e = null),
                                void 0 === i && (i = null),
                                    t._facade.sendNotification(n, e, i)
                            }
                            ,
                            t
                    }())._facade = void 0,
                    n._RF.pop()
            }
        }
    }
));
