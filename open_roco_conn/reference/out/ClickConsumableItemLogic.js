System.register("chunks:///_virtual/ClickConsumableItemLogic.ts", ["cc", "./global.ts", "./ItemSubtypes.ts", "./WindowMode.ts", "./WindowResult.ts", "./CFunction.ts", "./ItemShellDataProxy.ts", "./LangStrings.ts", "./LangUtils.ts", "./SpiritBagRefProxy.ts", "./CellTypes.ts", "./LearnSkillLogic.ts"], (function(e) {
        var t, s, i, n, o, l, a, c, u, r, m, I;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    s = e.__global
                }
                , function(e) {
                    i = e.ItemSubtypes
                }
                , function(e) {
                    n = e.WindowMode
                }
                , function(e) {
                    o = e.WindowResult
                }
                , function(e) {
                    l = e.CFunction
                }
                , function(e) {
                    a = e.ItemShellDataProxy
                }
                , function(e) {
                    c = e.LangStrings
                }
                , function(e) {
                    u = e.LangUtils
                }
                , function(e) {
                    r = e.SpiritBagRefProxy
                }
                , function(e) {
                    m = e.CellTypes
                }
                , function(e) {
                    I = e.LearnSkillLogic
                }
            ],
            execute: function() {
                t._RF.push({}, "81c062rJyFIY52N5OeE72xs", "ClickConsumableItemLogic", void 0);
                e("ClickConsumableItemLogic", function() {
                    function e(e) {
                        this._useItemProxy = void 0,
                            this._dialogItemId = void 0,
                            this._learnSkillLogic = void 0,
                            this._useItemProxy = e,
                            this._learnSkillLogic = new I
                    }
                    var t = e.prototype;
                    return t.dispose = function() {
                        this._learnSkillLogic.dispose()
                    }
                        ,
                        t.consume = function(e, t) {
                            if (null != e)
                                switch (e.itemDes.subtype) {
                                    case i.COMBAT_HP:
                                        this.consumeHPItem(e.itemDes, t);
                                        break;
                                    case i.COMBAT_PP:
                                        this.consumePPItem(e.itemDes, t);
                                        break;
                                    case i.COMBAT_RESTORE:
                                    case i.COMBAT_CATCH:
                                    case i.COMBAT_MIXED:
                                        break;
                                    case i.COMBAT_EXP:
                                    case i.COMBAT_PERCENTAGE_EXP:
                                    case i.COMBAT_ABSOLUTE_PERCENTAGE_EXP:
                                        this.consumeExpItem(e, t);
                                        break;
                                    case i.COMBAT_ABSOLUTELY_CATCH:
                                        break;
                                    case i.COMBAT_REFRESH_TALENT:
                                        this.consumeRefreshTalentItem(e.itemDes, t);
                                        break;
                                    case i.COMBAT_LEARN_SKILL:
                                        this.consumeLearnSkillItem(e.itemDes, t);
                                        break;
                                    case i.COMBAT_STRIVE:
                                    case i.COMBAT_STRIVE_REFRESH:
                                        this.consumeAddStrive(e, t)
                                }
                        }
                        ,
                        t.consumeHPItem = function(e, t) {
                            if (this.canUseHPItem(t)) {
                                var s = "确定要恢复【<color=#FF0000>" + t.name + "</color>】的精力吗？";
                                this.requestUseItemByReq(s, m.ITEM, e.id)
                            } else
                                this.displayAlertMessage(c.SPIRIT_NEED_NOT_RESTORE_HP)
                        }
                        ,
                        t.consumePPItem = function(e, t) {
                            if (this.canUsePPItem(t)) {
                                var s = "确定要恢复【<color=#FF0000>" + t.name + "</color>】的PP吗？";
                                this.requestUseItemByReq(s, m.ITEM, e.id)
                            } else
                                this.displayAlertMessage(c.SPIRIT_NEED_NOT_RESTORE_PP)
                        }
                        ,
                        t.consumeExpItem = function(e, t) {
                            this.canUseExpItem(t) ? r.spiritBagPanel.useManyAddExpItemPanel.show(e, t, this.confirmUseExpItemNum.bind(this)) : this.displayAlertMessage(c.SPIRIT_NEED_NO_EXP)
                        }
                        ,
                        t.confirmUseExpItemNum = function(e, t) {
                            this.requestUseItem(m.ITEM, e.itemDes.id, t)
                        }
                        ,
                        t.consumeRefreshTalentItem = function(e, t) {
                            this._dialogItemId = e.id,
                                this.promptRefreshTalentItem(t)
                        }
                        ,
                        t.consumeLearnSkillItem = function(e, t) {
                            this._learnSkillLogic.consume(e, t)
                        }
                        ,
                        t.consumeAddStrive = function(e, t) {
                            null != t ? t.surplus > 0 ? s.showMsgBox("这个宠物有剩余未分配努力值，先分配后再使用努力果吧。") : (a.currentStriveItem = e,
                                r.spiritBagPanel.useStriveUI.spiritData = t,
                                r.spiritBagPanel.useStriveUI.itemData = e,
                                a.currentStriveItem = e) : s.showMsgBox("请先选择一只宠物把！")
                        }
                        ,
                        t.promptRefreshTalentItem = function(e) {
                            if (null != e) {
                                var t, i = null != e.name ? e.name : c.UNKNOWN_SPIRIT;
                                t = u.translate(c.SURE_TO_REFRESH_SPIRIT_TALENT, i),
                                    s.UI.alert("", t, n.OK_CANCEL, new l(this.onRefreshTalentItemDialog,this))
                            }
                        }
                        ,
                        t.onRefreshTalentItemDialog = function(e) {
                            switch (e) {
                                case o.OK:
                                    this.requestUseItem(m.ITEM, this._dialogItemId)
                            }
                        }
                        ,
                        t.canUseHPItem = function(e) {
                            return null != e && e.maxHP > e.HP
                        }
                        ,
                        t.canUsePPItem = function(e) {
                            if (null == e || null == e.skills)
                                return !1;
                            for (var t = e.skills.length, s = 0; s < t; ++s)
                                if (e.skills[s].PPMax > e.skills[s].PP)
                                    return !0;
                            return !1
                        }
                        ,
                        t.canUseExpItem = function(e) {
                            return null != e && e.level < 100
                        }
                        ,
                        t.displayAlertMessage = function(e) {
                            s.UI.alert("", e, n.OK, null)
                        }
                        ,
                        t.requestUseItem = function(e, t, s) {
                            void 0 === s && (s = 1),
                            null != this._useItemProxy && this._useItemProxy.consume(e, t, s)
                        }
                        ,
                        t.requestUseItemByReq = function(e, t, i, o) {
                            var a = this;
                            void 0 === o && (o = 1),
                                s.UI.alert("", e, n.OK_CANCEL, new l((function(e) {
                                        1 == e && a.requestUseItem(t, i, o)
                                    }
                                ),this))
                        }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
