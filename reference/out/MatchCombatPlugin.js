System.register("chunks:///_virtual/MatchCombatPlugin.ts", ["cc", "./MatchCombatMainWin.ts"], (function(t) {
        var n, e, o;
        return {
            setters: [function(t) {
                n = t.cclegacy,
                    e = t._decorator
            }
                , function(t) {
                    o = t.MatchCombatMainWin
                }
            ],
            execute: function() {
                n._RF.push({}, "184d8VZBNpDoL4mfVmaoVni", "MatchCombatPlugin", void 0);
                e.ccclass,
                    e.property,
                    e.menu,
                    t("default", function() {
                        function t() {
                            this._mainPanel = void 0,
                                this._mainPanel = new o
                        }
                        var n = t.prototype;
                        return n.initialize = function() {
                            throw new Error("Method not implemented.")
                        }
                            ,
                            n.finalize = function() {
                                throw new Error("Method not implemented.")
                            }
                            ,
                            n.call = function(t) {
                                throw new Error("Method not implemented.")
                            }
                            ,
                            n.getEDispatcher = function() {
                                throw new Error("Method not implemented.")
                            }
                            ,
                            n.setPlugName = function(t) {
                                throw new Error("Method not implemented.")
                            }
                            ,
                            n.getPlugName = function() {
                                throw new Error("Method not implemented.")
                            }
                            ,
                            n.setAngelSysAPI = function(t) {
                                throw new Error("Method not implemented.")
                            }
                            ,
                            n.show = function(t) {
                                this._mainPanel.show()
                            }
                            ,
                            n.close = function() {
                                this._mainPanel && this._mainPanel.close()
                            }
                            ,
                            t
                    }());
                n._RF.pop()
            }
        }
    }
));
