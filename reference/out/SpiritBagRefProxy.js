System.register("chunks:///_virtual/SpiritBagRefProxy.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./LangStrings.ts", "./SpiritBagFactory.ts"], (function(n) {
        var e, i, t, a, r;
        return {
            setters: [function(n) {
                e = n.createClass
            }
                , function(n) {
                    i = n.cclegacy
                }
                , function(n) {
                    t = n.__global
                }
                , function(n) {
                    a = n.LangStrings
                }
                , function(n) {
                    r = n.SpiritBagFactory
                }
            ],
            execute: function() {
                i._RF.push({}, "923d4rno61AU7/h3E2ph34C", "SpiritBagRefProxy", void 0);
                var l = n("SpiritBagRefProxy", function() {
                    function n() {
                        throw new Error("SpiritBagRefProxy is static class and can not be instantiated.")
                    }
                    return n.initialize = function() {
                        n._spiritBagPanel = r.createSpiritBagPanel(),
                            n._refreshTalentResultPanel = r.createRefreshTalentResultPanel(),
                            n._learnNewSkillAnimationPanel = r.createLearnNewSkillAnimationPanel(n.onLearnNewSkillAnimationOver)
                    }
                        ,
                        n.dispose = function() {
                            n._spiritBagPanel.dispose(),
                                n._refreshTalentResultPanel.dispose(),
                                n._learnNewSkillAnimationPanel.dispose()
                        }
                        ,
                        n.onRefreshTalentAnimationOver = function() {}
                        ,
                        n.onLearnNewSkillAnimationOver = function() {
                            n.learnNewSkillAnimationPanel.close(),
                                t.showMsgBox(a.SKILL_LEARNED_SUCCESSFUL)
                        }
                        ,
                        e(n, null, [{
                            key: "spiritBagPanel",
                            get: function() {
                                return n._spiritBagPanel
                            }
                        }, {
                            key: "spiritInfo",
                            get: function() {
                                return null
                            }
                        }, {
                            key: "refreshTalentAnimationPanel",
                            get: function() {
                                return n._refreshTalentAnimationPanel
                            }
                        }, {
                            key: "refreshTalentResultPanel",
                            get: function() {
                                return n._refreshTalentResultPanel
                            }
                        }, {
                            key: "learnNewSkillAnimationPanel",
                            get: function() {
                                return n._learnNewSkillAnimationPanel
                            }
                        }]),
                        n
                }());
                l._spiritBagPanel = void 0,
                    l._spiritInfo = void 0,
                    l._refreshTalentAnimationPanel = void 0,
                    l._refreshTalentResultPanel = void 0,
                    l._learnNewSkillAnimationPanel = void 0,
                    i._RF.pop()
            }
        }
    }
));
