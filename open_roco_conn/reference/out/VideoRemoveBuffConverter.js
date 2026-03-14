System.register("chunks:///_virtual/VideoRemoveBuffConverter.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatResConvert.ts", "./PReadHelp.ts", "./AttackAffect.ts", "./BuffAffect.ts", "./CombatDefault.ts", "./HPVar.ts", "./ActionBuffSegment.ts", "./BuffVo.ts", "./VideoConverterBase.ts"], (function(e) {
        var t, n, f, o, i, s, r, u, c, a, d;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    f = e.CombatResConvert
                }
                , function(e) {
                    o = e.PReadHelp
                }
                , function(e) {
                    i = e.AttackAffect
                }
                , function(e) {
                    s = e.BuffAffect
                }
                , function(e) {
                    r = e.CombatDefault
                }
                , function(e) {
                    u = e.HPVar
                }
                , function(e) {
                    c = e.ActionBuffSegment
                }
                , function(e) {
                    a = e.BuffVo
                }
                , function(e) {
                    d = e.VideoConverterBase
                }
            ],
            execute: function() {
                n._RF.push({}, "0061eUJR9ZKCZrR8y0FdHeB", "VideoRemoveBuffConverter", void 0);
                e("VideoRemoveBuffConverter", function(e) {
                    function n() {
                        return e.call(this) || this
                    }
                    t(n, e);
                    var d = n.prototype;
                    return d.getSegments = function() {
                        return this._data instanceof i ? (console.info("VideoRemoveBuffConverter==getSegments1"),
                            this.byBuffInfoToSegments(this._data)) : this._data instanceof s ? (console.info("VideoRemoveBuffConverter==getSegments2"),
                            this.byBuffAffectToSegments(this._data)) : (console.info("VideoRemoveBuffConverter==getSegments3"),
                            [])
                    }
                        ,
                        d.byBuffInfoToSegments = function(e) {
                            var t = [];
                            if (e && e.buffVars) {
                                var n, f = e.buffVars.length, o = 0;
                                for (o = 0; o < f; o++)
                                    (n = e.buffVars[o]).buffType == r.BUFF_REMOVE ? t.push(this.getActionBuffSegment(e, n)) : (n.buffType,
                                        r.BUFF_ADD)
                            }
                            return t
                        }
                        ,
                        d.getActionBuffSegment = function(e, t) {
                            var n = new c
                                , i = new a;
                            i.id = e.id,
                                i.index = e.index,
                                i.addBuffIcon = !1,
                                i.buffId = f.delBidToEid(t.id),
                                i.isPlay = 3 != this._combatData.combatEFType;
                            var s = o.sskillProxy.select(i.buffId);
                            return i.description2 = s.description2,
                                i.buffName = s.description,
                                i.hpVar = new u,
                                n.setScreen(this._screen),
                                n.setData(i),
                                n
                        }
                        ,
                        d.byBuffAffectToSegments = function(e) {
                            var t = []
                                , n = new c
                                , i = new a;
                            i.id = e.id,
                                i.index = e.index,
                                i.addBuffIcon = !1,
                                i.buffId = f.delBidToEid(e.buffId),
                                i.isPlay = 3 != this._combatData.combatEFType;
                            var s = o.sskillProxy.select(i.buffId);
                            return i.description2 = s.description2,
                                i.buffName = s.description,
                                i.hpVar = new u,
                                n.setScreen(this._screen),
                                n.setData(i),
                                t.push(n),
                                t
                        }
                        ,
                        n
                }(d));
                n._RF.pop()
            }
        }
    }
));
