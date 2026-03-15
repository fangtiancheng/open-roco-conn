System.register("chunks:///_virtual/Notifier.ts", ["cc", "./Facade.ts"], (function(t) {
        var i, n;
        return {
            setters: [function(t) {
                i = t.cclegacy
            }
                , function(t) {
                    n = t.Facade
                }
            ],
            execute: function() {
                i._RF.push({}, "e3272OosqxKO4IdgA694c4w", "Notifier", void 0),
                    t("Notifier", function() {
                        function t() {
                            this.multitonKey = null
                        }
                        var i = t.prototype;
                        return i.initializeNotifier = function(t) {
                            this.multitonKey = t
                        }
                            ,
                            i.sendNotification = function(t, i, n) {
                                void 0 === i && (i = null),
                                void 0 === n && (n = null),
                                this.facade() && this.facade().sendNotification(t, i, n)
                            }
                            ,
                            i.facade = function() {
                                if (null === this.multitonKey)
                                    throw Error(t.MULTITON_MSG);
                                return n.getInstance(this.multitonKey)
                            }
                            ,
                            t
                    }()).MULTITON_MSG = "multitonKey for this Notifier not yet initialized!",
                    i._RF.pop()
            }
        }
    }
));
