System.register("chunks:///_virtual/VideoBuffConverter.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatResConvert.ts", "./PReadHelp.ts", "./BuffAffect.ts", "./ActionBuffSegment.ts", "./BuffVo.ts", "./VideoConverterBase.ts", "./VideoRemoveBuffConverter.ts"], (function(e) {
        var t, n, f, o, r, i, u, s, c;
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
                    r = e.BuffAffect
                }
                , function(e) {
                    i = e.ActionBuffSegment
                }
                , function(e) {
                    u = e.BuffVo
                }
                , function(e) {
                    s = e.VideoConverterBase
                }
                , function(e) {
                    c = e.VideoRemoveBuffConverter
                }
            ],
            execute: function() {
                n._RF.push({}, "eb4a7i38IZOzr5f6GTu8EP4", "VideoBuffConverter", void 0);
                e("VideoBuffConverter", function(e) {
                    function n() {
                        return e.call(this) || this
                    }
                    t(n, e);
                    var s = n.prototype;
                    return s.getSegments = function() {
                        var e, t = [], n = this._data;
                        if (e = this.getActionBuffSegment(n, !0),
                            t.push(e),
                            n.isOtherPro) {
                            var f = new r;
                            f.id = n.otherId,
                                f.index = n.otherIndex,
                                f.buffId = -1,
                                f.hpVar = n.otherHpVar,
                                f.proVars = n.otherProVars,
                                e = this.getActionBuffSegment(f, !1),
                                t.push(e)
                        }
                        if (1 == n.isremove) {
                            var o = new c;
                            o.screen = this._screen,
                                o.data = n,
                                o.combatData = this._combatData,
                                t = t.concat(o.getSegments()),
                                o.rest()
                        }
                        return t
                    }
                        ,
                        s.getActionBuffSegment = function(e, t) {
                            void 0 === t && (t = !0);
                            var n = new i
                                , r = new u;
                            if (r.id = e.id,
                                r.index = e.index,
                                r.addBuffIcon = t,
                                console.info("getActionBuffSegment==buffid==" + e.buffId),
                            -1 != e.buffId) {
                                r.buffId = f.addBidToEid(e.buffId),
                                    r.hpVar = e.hpVar;
                                var s = o.sskillProxy.select(r.buffId);
                                r.description2 = s.description2,
                                    r.buffName = s.description
                            } else
                                r.buffId = -1,
                                    r.hpVar = e.hpVar;
                            return n.setScreen(this._screen),
                                n.setData(r),
                                n
                        }
                        ,
                        n
                }(s));
                n._RF.pop()
            }
        }
    }
));
