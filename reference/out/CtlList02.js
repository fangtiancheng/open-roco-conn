System.register("chunks:///_virtual/CtlList02.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CtlList.ts"], (function(t) {
        var i, s, e;
        return {
            setters: [function(t) {
                i = t.inheritsLoose
            }
                , function(t) {
                    s = t.cclegacy
                }
                , function(t) {
                    e = t.CtlList
                }
            ],
            execute: function() {
                s._RF.push({}, "52466x5gvZPOq3sJJP0vJWm", "CtlList02", void 0);
                t("CtlList02", function(t) {
                    function s(i, s, e, l, o, r, a, n) {
                        var u;
                        return void 0 === e && (e = 0),
                        void 0 === l && (l = ""),
                        void 0 === o && (o = null),
                        void 0 === r && (r = null),
                        void 0 === a && (a = !0),
                        void 0 === n && (n = !0),
                            (u = t.call(this, i, s, e, l, o, r, a) || this).isPass = void 0,
                            u.isShowCost = void 0,
                            u.isShowCost = n,
                            u
                    }
                    i(s, t);
                    var e = s.prototype;
                    return e.updateView = function() {
                        this.isPass = !0;
                        for (var t, i = 0; i < this.m_lstItem.length; ++i)
                            if (t = this.m_lstItem[i],
                            i + 0 < this.m_lstData.length) {
                                var s = this.m_lstData[i + 0];
                                t.data = s,
                                    t.visible = !0
                            } else
                                t.data = null,
                                    t.visible = !1;
                        for (i = 0; i < this.m_lstItem.length; ++i)
                            null != (t = this.m_lstItem[i]).spiritData && (!t.visible_mcX && this.isRepeatSpirit(t) && t.setRepeatSpiritState(),
                                t.setSpiritCostVisible(this.isShowCost),
                            t.visible_mcX && (this.isPass = !1))
                    }
                        ,
                        e.isRepeatSpirit = function(t) {
                            for (var i, s = 0; s < this.m_lstItem.length; ++s)
                                if ((i = this.m_lstItem[s]) != t && i.spiritData && i.spiritData.petId == t.spiritData.petId)
                                    return !0;
                            return !1
                        }
                        ,
                        s
                }(e));
                s._RF.pop()
            }
        }
    }
));
