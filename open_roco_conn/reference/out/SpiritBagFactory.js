System.register("chunks:///_virtual/SpiritBagFactory.ts", ["cc", "./global.ts", "./WindowCloseAction.ts", "./LearnNewSkillAnimationPanel.ts", "./RefreshTalentResultPanel.ts", "./SpiritBagPanel.ts"], (function(n) {
        var t, e, i, a, r, o;
        return {
            setters: [function(n) {
                t = n.cclegacy
            }
                , function(n) {
                    e = n.__global
                }
                , function(n) {
                    i = n.WindowCloseAction
                }
                , function(n) {
                    a = n.LearnNewSkillAnimationPanel
                }
                , function(n) {
                    r = n.RefreshTalentResultPanel
                }
                , function(n) {
                    o = n.SpiritBagPanel
                }
            ],
            execute: function() {
                t._RF.push({}, "1190a+T5ZBJG6G/AbDdzDd/", "SpiritBagFactory", void 0);
                n("SpiritBagFactory", function() {
                    function n() {
                        throw new Error("SpiritBagFactory is static class and can not be instantiated.")
                    }
                    return n.createSpiritBagPanel = function() {
                        var n = e.UI.createWindow(o, !0);
                        return n.closeAction = i.HIDE,
                            n.close(),
                            n
                    }
                        ,
                        n.createRefreshTalentAnimationPanel = function(n) {
                            return null
                        }
                        ,
                        n.createRefreshTalentResultPanel = function() {
                            var n = e.UI.createWindow(r);
                            return n.closeAction = i.HIDE,
                                n.close(),
                                n
                        }
                        ,
                        n.createLearnNewSkillAnimationPanel = function(n) {
                            var t = e.UI.createWindow(a);
                            return t.closeAction = i.HIDE,
                                t.onOver = n,
                                t.close(),
                                t
                        }
                        ,
                        n
                }());
                t._RF.pop()
            }
        }
    }
));
