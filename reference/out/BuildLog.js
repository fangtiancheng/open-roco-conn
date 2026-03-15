System.register("chunks:///_virtual/BuildLog.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AngelTcpHelper.ts", "./BuildLogHelper.ts"], (function(e) {
        var o, t, i, r, n, u;
        return {
            setters: [function(e) {
                o = e.inheritsLoose
            }
                , function(e) {
                    t = e.cclegacy,
                        i = e._decorator,
                        r = e.Component
                }
                , function(e) {
                    n = e.AngelTcpHelper
                }
                , function(e) {
                    u = e.default
                }
            ],
            execute: function() {
                var s;
                t._RF.push({}, "3528bTS5UNN0LBMI4vDuAyu", "BuildLog", void 0);
                var l = i.ccclass;
                i.property,
                    e("default", l("BuildLog")(s = function(e) {
                        function t() {
                            return e.apply(this, arguments) || this
                        }
                        return o(t, e),
                            t.prototype.show = function() {
                                1 == u.publish && (u.IS_LOCAL = !1,
                                    n.isRunCombatResLoadPipeLine = !0),
                                    console.log("Current Build Timer==>" + u.TIMER),
                                    console.log("Version from==>" + u.repositoryName),
                                0 == u.IS_LOCAL && (n.isAutoEnter = !1,
                                    n.isDebuggerCombat = !1,
                                    n.isDebuggerStorage = !1,
                                    n.isDebuggerSpiritBagApp = !1),
                                0 == u.publish && 1 == n.isDebuggerCombat && (n.isRunCombatResLoadPipeLine = !0)
                            }
                            ,
                            t
                    }(r)) || s);
                t._RF.pop()
            }
        }
    }
));
