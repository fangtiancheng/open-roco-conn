System.register("chunks:///_virtual/UIMediator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CALLBACK.ts", "./CallbackCenter.ts", "./GuideModuleName.ts", "./GuideTargetName.ts", "./EventDispatcher.ts", "./CatchSuccessPanel.ts", "./ConfirmPanel.ts", "./EvolutionPanel.ts", "./ExpPanel.ts", "./GetNewSkillTipPanel.ts", "./LevelUpPanel.ts", "./LosePanel.ts", "./PKLosePanel.ts", "./PKVictoryPanel.ts", "./PromptPanel.ts", "./TemperPanel.ts"], (function(t) {
        var i, e, n, o, s, a, r, c, d, l, w, u, P, _, L, E, h, f, T;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.assertThisInitialized
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    o = t.CALLBACK
                }
                , function(t) {
                    s = t.CallbackCenter
                }
                , function(t) {
                    a = t.GuideModuleName
                }
                , function(t) {
                    r = t.GuideTargetName
                }
                , function(t) {
                    c = t.EventDispatcher
                }
                , function(t) {
                    d = t.CatchSuccessPanel
                }
                , function(t) {
                    l = t.ConfirmPanel
                }
                , function(t) {
                    w = t.EvolutionPanel
                }
                , function(t) {
                    u = t.ExpPanel
                }
                , function(t) {
                    P = t.GetNewSkillTipPanel
                }
                , function(t) {
                    _ = t.LevelUpPanel
                }
                , function(t) {
                    L = t.LosePanel
                }
                , function(t) {
                    E = t.PKLosePanel
                }
                , function(t) {
                    h = t.PKVictoryPanel
                }
                , function(t) {
                    f = t.PromptPanel
                }
                , function(t) {
                    T = t.TemperPanel
                }
            ],
            execute: function() {
                n._RF.push({}, "9ac75O2BDtGr5b5G9y1jcqd", "UIMediator", void 0);
                var p = t("UIMediator", function(t) {
                    function n(i) {
                        var n;
                        return (n = t.call(this) || this)._windowList = new Map,
                            n._system = void 0,
                            n._initialized = !1,
                            s.notifyEvent(o.ANGEL_NEWBIE_GUIDE_ON_REGISTER, [a.COMBAT, e(n)]),
                            n
                    }
                    i(n, t),
                        n.getInstance = function() {
                            return this._instance || (this._instance = new n(new I)),
                                this._instance
                        }
                    ;
                    var c = n.prototype;
                    return c.initialize = function(t) {
                        this._system = t;
                        var i = this._system.getSysApi().getUISysAPI().commUIManager;
                        for (var e in 0 == this._initialized && (this._windowList[n.LEVEL_UP] = i.createWindow(_, !0),
                            this._windowList[n.CATCH_SUCCESS] = i.createWindow(d, !0),
                            this._windowList[n.CONFIRM] = i.createWindow(l, !0),
                            this._windowList[n.LOSE] = i.createWindow(L, !0),
                            this._windowList[n.PROMPT] = i.createWindow(f, !0),
                            this._windowList[n.EXP_UPDATE] = i.createWindow(u, !0),
                            this._windowList[n.EVOLUTION] = i.createWindow(w, !0),
                            this._windowList[n.NEW_SKILL_TIP] = i.createWindow(P, !0),
                            this._windowList[n.PKVICTORY] = i.createWindow(h, !0),
                            this._windowList[n.PKLOSE] = i.createWindow(E, !0),
                            this._windowList[n.TEMPER_UP] = i.createWindow(T, !0),
                            this._initialized = !0),
                            this._windowList) {
                            var o = this._windowList[e];
                            o && o.hide()
                        }
                    }
                        ,
                        c.getMediator = function(t) {
                            return this._windowList[t] ? this._windowList[t] : null
                        }
                        ,
                        c.getGuideTarget = function(t) {
                            switch (t) {
                                case r.OK + "_0":
                                    if (this.getMediator(n.EXP_UPDATE) && this.getMediator(n.EXP_UPDATE).isShow)
                                        return this.getMediator(n.EXP_UPDATE).getGuideTarget(r.OK);
                                case r.OK + "_1":
                                    if (this.getMediator(n.LEVEL_UP))
                                        return this.getMediator(n.LEVEL_UP).getGuideTarget(r.OK);
                                case r.OK + "_2":
                                    if (this.getMediator(n.NEW_SKILL_TIP))
                                        return this.getMediator(n.NEW_SKILL_TIP).getGuideTarget(r.OK)
                            }
                            return null
                        }
                        ,
                        n
                }(c));
                p.LEVEL_UP = "levelUpWindow",
                    p.CATCH_SUCCESS = "catchSuccessWindow",
                    p.CONFIRM = "confirmWindow",
                    p.GET_NEW_SKILL = "getNewSkillWindow",
                    p.LOSE = "loseWindow",
                    p.PROMPT = "promptWindow",
                    p.VICTORY = "victoryWindow",
                    p.EXP_UPDATE = "expUpdate",
                    p.EVOLUTION = "evolution",
                    p.NEW_SKILL_TIP = "newSkillTip",
                    p.TEMPER_UP = "temperUpdate",
                    p.PKVICTORY = "pkvictoryWindow",
                    p.PKLOSE = "pkloseWindow",
                    p._instance = void 0;
                var I = function() {};
                n._RF.pop()
            }
        }
    }
));
