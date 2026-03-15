System.register("chunks:///_virtual/VideoCombatStartConverter.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ActionStartSegment.ts", "./StartVo.ts", "./VideoConverterBase.ts"], (function(t) {
        var e, n, r, o, i;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    r = t.ActionStartSegment
                }
                , function(t) {
                    o = t.StartVo
                }
                , function(t) {
                    i = t.VideoConverterBase
                }
            ],
            execute: function() {
                n._RF.push({}, "951ff5PUGFBg4mFkD+qhYlb", "VideoCombatStartConverter", void 0);
                t("VideoCombatStartConverter", function(t) {
                    function n() {
                        return t.call(this) || this
                    }
                    e(n, t);
                    var i = n.prototype;
                    return i.getSegments = function() {
                        var t, e = [];
                        return null != (t = this.getAStartSegment(this._combatData)) && e.push(t),
                            e
                    }
                        ,
                        i.getAStartSegment = function(t) {
                            CONFIG.DEBUG,
                                console.log("[VideoConverter] ", "处理一个出场的动画！");
                            var e = new r
                                , n = new o;
                            return n.combatType = t.combatType,
                                n.selfInfo = t.myInfo,
                                n.opponentInfo = t.rivalInfo,
                                n.myCurSpirit = t.myCurSpirit,
                                n.opponentSpirit = t.rivalCurSpirit,
                                e.setScreen(this._screen),
                                e.setData(n),
                                e
                        }
                        ,
                        n
                }(i));
                n._RF.pop()
            }
        }
    }
));
