System.register("chunks:///_virtual/BraveTrainingMediator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameMediator.ts", "./BraveTrainingMessage.ts", "./BraveTrainingMainView.ts"], (function(e) {
        var i, n, t, r, o;
        return {
            setters: [function(e) {
                i = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    t = e.GameMediator
                }
                , function(e) {
                    r = e.BraveTrainingMessage
                }
                , function(e) {
                    o = e.BraveTrainingMainView
                }
            ],
            execute: function() {
                n._RF.push({}, "b9a70TTuddLxaS/mlwCt0RC", "BraveTrainingMediator", void 0),
                    e("BraveTrainingMediator", function(e) {
                        function n() {
                            return e.call(this, n.NAME) || this
                        }
                        i(n, e);
                        var t = n.prototype;
                        return t.onRegisterView = function() {
                            this.registerView(o)
                        }
                            ,
                            t.onRegisterProtocol = function() {}
                            ,
                            t.onUnregisterProtocol = function() {}
                            ,
                            t.onNotificationInterests = function() {
                                return [r.SHOW_MAIN_VIEW, r.CLOSE_MAIN_VIEW, r.BATTLE_START]
                            }
                            ,
                            t.onHandleNotification = function(e) {
                                switch (e.getName()) {
                                    case r.SHOW_MAIN_VIEW:
                                        this.getView(o).show(e.getBody());
                                        break;
                                    case r.CLOSE_MAIN_VIEW:
                                        this.getView(o).close();
                                        break;
                                    case r.BATTLE_START:
                                        this.getView(o).sendCombat(e.getBody())
                                }
                            }
                            ,
                            n
                    }(t)).NAME = "BraveTrainingMediator",
                    n._RF.pop()
            }
        }
    }
));
