System.register("chunks:///_virtual/NotificationCenter.ts", ["cc", "./EventDispatcher.ts"], (function(t) {
        var n, e, i;
        return {
            setters: [function(t) {
                n = t.cclegacy,
                    e = t.Event
            }
                , function(t) {
                    i = t.EventDispatcher
                }
            ],
            execute: function() {
                n._RF.push({}, "0c960kY+RBPMInLeVBxV0Cb", "NotificationCenter", void 0),
                    t("NotificationCenter", function() {
                        function t(t) {
                            throw new Error("NotificationCenter can not be instantiate.")
                        }
                        return t.addNotification = function(n, e, i) {
                            t._dispatcher.addEventListener(n, e, i)
                        }
                            ,
                            t.sendNotification = function(n, i) {
                                t._dispatcher.dispatchEvent(new e(n), i)
                            }
                            ,
                            t.removeNotification = function(n, e, i) {
                                t._dispatcher.removeEventListener(n, e, i)
                            }
                            ,
                            t
                    }())._dispatcher = new i,
                    n._RF.pop()
            }
        }
    }
));
