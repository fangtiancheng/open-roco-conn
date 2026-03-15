System.register("chunks:///_virtual/ClickRestoreSpiritItemLogic.ts", ["cc", "./global.ts", "./P_FreeRequest.ts", "./WindowMode.ts", "./WindowResult.ts", "./CFunction.ts", "./LangStrings.ts", "./LangUtils.ts", "./NetActionProxy.ts", "./ReqRecuperate2.ts", "./CellTypes.ts"], (function(e) {
        var t, i, n, s, o, r, l, u, c, a, R;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    i = e.__global
                }
                , function(e) {
                    n = e.P_FreeRequest
                }
                , function(e) {
                    s = e.WindowMode
                }
                , function(e) {
                    o = e.WindowResult
                }
                , function(e) {
                    r = e.CFunction
                }
                , function(e) {
                    l = e.LangStrings
                }
                , function(e) {
                    u = e.LangUtils
                }
                , function(e) {
                    c = e.NetActionProxy
                }
                , function(e) {
                    a = e.ReqRecuperate
                }
                , function(e) {
                    R = e.CellTypes
                }
            ],
            execute: function() {
                t._RF.push({}, "c4239PAV51APrOvqlM/umZF", "ClickRestoreSpiritItemLogic", void 0),
                    e("ClickRestoreSpiritItemLogic", function() {
                        function e(e) {
                            this._useItemProxy = void 0,
                                this._useItemProxy = e
                        }
                        var t = e.prototype;
                        return t.dispose = function() {}
                            ,
                            t.restore = function(e) {
                                this.prompt(e)
                            }
                            ,
                            t.prompt = function(t) {
                                if (null != t) {
                                    var o, c = null != t.name ? t.name : l.UNKNOWN_SPIRIT;
                                    if (i.MainRoleData.isVip)
                                        i.UI.createMiniLoading(),
                                            new n(e.CMD_RECOVER_ALL_SPIRITS,new a,a,this.onReceiveRecoverAllSpirits.bind(this)).send();
                                    else
                                        this.isSpiritWounded(t) ? (o = u.translate(l.SURE_TO_RESTORE_SPIRIT, [this.calcRestoreMoney(t), c]),
                                            i.UI.alert("", o, s.OK_CANCEL, new r(this.onRestoreDialogResult,this))) : (o = l.SPIRIT_NEED_NOT_RESTORE_HP_AND_PP,
                                            i.UI.alert("", o, s.OK, null))
                                }
                            }
                            ,
                            t.onReceiveRecoverAllSpirits = function(e) {
                                i.UI.closeMiniLoading(),
                                null != e && null != e.returnCode && e.returnCode.isError() && i.UI.alert("", e.returnCode.message),
                                    c.getSpiritBag()
                            }
                            ,
                            t.requestUseItem = function(e, t, i) {
                                void 0 === i && (i = 1),
                                null != this._useItemProxy && this._useItemProxy.consume(e, t, i)
                            }
                            ,
                            t.onRestoreDialogResult = function(e) {
                                switch (e) {
                                    case o.OK:
                                        this.requestUseItem(R.RESTORE_SINGLE_SPIRIT, 0)
                                }
                            }
                            ,
                            t.isSpiritWounded = function(e) {
                                if (null == e || null == e.skills)
                                    return !1;
                                if (e.maxHP > e.HP)
                                    return !0;
                                for (var t = e.skills.length, i = 0; i < t; ++i)
                                    if (e.skills[i].PPMax > e.skills[i].PP)
                                        return !0;
                                return !1
                            }
                            ,
                            t.calcRestoreMoney = function(e) {
                                if (null == e || null == e.skills)
                                    return 0;
                                for (var t = e.skills.length, i = 0, n = 0; n < t; ++n)
                                    e.skills[n].PPMax - e.skills[n].PP > i && (i = e.skills[n].PPMax - e.skills[n].PP);
                                return Math.floor((e.maxHP - e.HP) / 10) + 4 * i + 1
                            }
                            ,
                            e
                    }()).CMD_RECOVER_ALL_SPIRITS = 720920,
                    t._RF.pop()
            }
        }
    }
));
