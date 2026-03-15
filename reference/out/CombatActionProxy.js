System.register("chunks:///_virtual/CombatActionProxy.ts", ["cc", "./CFunction.ts", "./UseSkillType.ts", "./CombatDataProxy.ts"], (function(n) {
        var t, e, i, o;
        return {
            setters: [function(n) {
                t = n.cclegacy
            }
                , function(n) {
                    e = n.CFunction
                }
                , function(n) {
                    i = n.UseSkillType
                }
                , function(n) {
                    o = n.CombatDataProxy
                }
            ],
            execute: function() {
                t._RF.push({}, "eb6edN1PhRBm42AJBcYbKoQ", "CombatActionProxy", void 0),
                    n("CombatActionProxy", function() {
                        function n() {
                            throw new Error("CombatActionProxy can not be instantiated.")
                        }
                        return n.initialize = function(t) {
                            n._plugin = t
                        }
                            ,
                            n.attack = function(t) {
                                var e = o.getCurrentSpirit();
                                null != e && n._plugin.onUseSkill(i.SKILL, e.index, t)
                            }
                            ,
                            n.catchPreviewRate = function(t) {
                                n._plugin.getVideoModule().videoScreen.getSpiritUI(1).catchPreviewRate(t)
                            }
                            ,
                            n.useItem = function(t) {
                                var e = o.getCurrentSpirit();
                                null != e && n._plugin.onUseSkill(i.USEITEM, e.index, t)
                            }
                            ,
                            n.changeSpirit = function(t) {
                                var e = o.getCurrentSpirit();
                                null != e && n._plugin.onUseSkill(i.CHANGESPIRIT, e.index, t)
                            }
                            ,
                            n.escape = function() {
                                var t = o.getCurrentSpirit();
                                null != t ? (n._plugin.onUseSkill(i.ESCAPE, t.index, 0),
                                    console.error("逃跑协议发送成功")) : console.error("逃跑协议发送失败")
                            }
                            ,
                            n.requestItems = function(t) {
                                n._plugin.reqUseItems(new e(t))
                            }
                            ,
                            n
                    }())._plugin = void 0,
                    t._RF.pop()
            }
        }
    }
));
