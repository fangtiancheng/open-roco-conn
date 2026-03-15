System.register("chunks:///_virtual/OpenCombatDes.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NPCCDConvert.ts"], (function(e) {
        var t, n, o;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    o = e.NPCCDConvert
                }
            ],
            execute: function() {
                n._RF.push({}, "789a02w26pP/5Rm97VVV7MS", "OpenCombatDes", void 0);
                e("OpenCombatDes", function(e) {
                    function n() {
                        for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                            o[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(o)) || this).combatType = 0,
                            t.opponentID = 0,
                            t.catchTime = 0,
                            t.oppoentName = "未知",
                            t.isWait = !1,
                            t.handler = void 0,
                            t.combatServerType = 0,
                            t.alertHandler = void 0,
                            t
                    }
                    return t(n, e),
                        n.prototype.tranNPCClickDes = function(e) {}
                        ,
                        n
                }(o));
                n._RF.pop()
            }
        }
    }
));
