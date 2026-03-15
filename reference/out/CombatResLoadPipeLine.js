System.register("chunks:///_virtual/CombatResLoadPipeLine.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AngelTcpHelper.ts"], (function(e) {
        var o, t, n;
        return {
            setters: [function(e) {
                o = e.createClass
            }
                , function(e) {
                    t = e.cclegacy
                }
                , function(e) {
                    n = e.AngelTcpHelper
                }
            ],
            execute: function() {
                t._RF.push({}, "43596W7A5pLLq9w0W7Tw91B", "CombatResLoadPipeLine", void 0);
                var i = e("CombatResLoadPipeLine", function() {
                    function e() {}
                    return e.init = function() {
                        1 == n.isRunCombatResLoadPipeLine && e._combatSys.getResModule().preLoadCombatRes()
                    }
                        ,
                        o(e, null, [{
                            key: "combatSys",
                            set: function(o) {
                                e._combatSys = o
                            }
                        }]),
                        e
                }());
                i.SEND_SPIRIT_BAG = 722458,
                    i.CombatInfo = void 0,
                    i._combatSys = void 0,
                    t._RF.pop()
            }
        }
    }
));
