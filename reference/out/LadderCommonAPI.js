System.register("chunks:///_virtual/LadderCommonAPI.ts", ["cc", "./global.ts", "./OpenCombatDes.ts"], (function(n) {
        var t, o, e;
        return {
            setters: [function(n) {
                t = n.cclegacy
            }
                , function(n) {
                    o = n.__global
                }
                , function(n) {
                    e = n.OpenCombatDes
                }
            ],
            execute: function() {
                t._RF.push({}, "85f411QzWBOxKtSlXJ0Tpry", "LadderCommonAPI", void 0);
                n("LadderCommonAPI", function() {
                    function n() {}
                    return n.startNpcCombat = function(n, t, a) {
                        var c = new e;
                        c.combatType = t,
                            c.opponentID = n,
                            c.oppoentName = "",
                            c.handler = a,
                            o.openCombat(c)
                    }
                        ,
                        n
                }());
                t._RF.pop()
            }
        }
    }
));
