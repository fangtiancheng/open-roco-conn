System.register("chunks:///_virtual/GameStoryMediator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameMediator.ts", "./GameStoryMessage.ts", "./GameStoryChangeStatusProtocol.ts", "./GameStoryQueryStatusProtocol.ts", "./GameStoryChapterView.ts"], (function(t) {
        var o, e, r, i, n, s, a;
        return {
            setters: [function(t) {
                o = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    r = t.GameMediator
                }
                , function(t) {
                    i = t.GameStoryMessage
                }
                , function(t) {
                    n = t.GameStoryChangeStatusProtocol
                }
                , function(t) {
                    s = t.GameStoryQueryStatusProtocol
                }
                , function(t) {
                    a = t.GameStoryChapterView
                }
            ],
            execute: function() {
                e._RF.push({}, "84f8aB/vP1Edo+ZgPMMBCWk", "GameStoryMediator", void 0),
                    t("GameStoryMediator", function(t) {
                        function e() {
                            return t.call(this, e.NAME) || this
                        }
                        o(e, t);
                        var r = e.prototype;
                        return r.onRegisterView = function() {
                            this.registerView(a)
                        }
                            ,
                            r.onRegisterProtocol = function() {
                                this.registerProtocol(s),
                                    this.registerProtocol(n)
                            }
                            ,
                            r.onUnregisterProtocol = function() {
                                this.unregisterProtocol(s),
                                    this.unregisterProtocol(n)
                            }
                            ,
                            r.onNotificationInterests = function() {
                                return [i.START_CHAPTER, i.END_CHAPTER]
                            }
                            ,
                            r.onHandleNotification = function(t) {
                                switch (t.getName()) {
                                    case i.START_CHAPTER:
                                        this.getView(a).show();
                                        break;
                                    case i.END_CHAPTER:
                                        this.getView(a).close()
                                }
                            }
                            ,
                            e
                    }(r)).NAME = "GameStoryMediator",
                    e._RF.pop()
            }
        }
    }
));
