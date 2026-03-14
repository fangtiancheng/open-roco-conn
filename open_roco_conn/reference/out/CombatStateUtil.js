System.register("chunks:///_virtual/CombatStateUtil.ts", ["cc", "./CombatResType.ts", "./CombatControlBarCommands.ts", "./CombatDefault.ts"], (function(e) {
        var o, t, r, a;
        return {
            setters: [function(e) {
                o = e.cclegacy
            }
                , function(e) {
                    t = e.CombatResType
                }
                , function(e) {
                    r = e.CombatControlBarCommands
                }
                , function(e) {
                    a = e.CombatDefault
                }
            ],
            execute: function() {
                o._RF.push({}, "f23e7nEqh9IsIt7peVzJ3t2", "CombatStateUtil", void 0);
                e("CombatStateUtil", function() {
                    function e() {}
                    return e.controllCombatBar = function(e, o) {
                        Boolean(a.readNumBit(e, 0)) ? 1 == e ? (console.error("禁止SPIRIT"),
                            o.setHandleGray(r.SPIRIT, !0),
                            o.select(r.SPIRIT)) : (console.error("允许SPIRIT"),
                            o.setHandleGray(r.SPIRIT, !1)) : (console.error("禁止SPIRIT"),
                            o.setHandleGray(r.SPIRIT, !0),
                        0 != e && 1 != e && o.select(r.ATTACK)),
                            Boolean(a.readNumBit(e, 1)) ? (console.error("允许捕捉"),
                                o.setHandleGray(r.CATCH, !1)) : (console.error("禁止捕捉"),
                                o.setHandleGray(r.CATCH, !0)),
                            Boolean(a.readNumBit(e, 2)) ? (console.error("允许使用道具"),
                                o.setHandleGray(r.ITEM, !1)) : (console.error("禁止使用道具"),
                                o.setHandleGray(r.ITEM, !0),
                            0 != e && 1 != e && o.select(r.ATTACK)),
                            Boolean(a.readNumBit(e, 3)) ? (t.IS_ESCAPE = !1,
                                console.error("允许逃跑"),
                                o.setHandleGray(r.ESCAPE, !1)) : (t.IS_ESCAPE = !0,
                                console.error("禁止逃跑"),
                                o.setHandleGray(r.ESCAPE, !0)),
                            Boolean(a.readNumBit(e, 4)) ? (console.error("允许ATTACK"),
                                o.setHandleGray(r.ATTACK, !1)) : (console.error("禁止ATTACK"),
                                o.setHandleGray(r.ATTACK, !0),
                            0 != e && 1 != e && o.select(r.ITEM)),
                        0 == e && o.setHandlerEnabled(!1)
                    }
                        ,
                        e
                }());
                o._RF.pop()
            }
        }
    }
));
