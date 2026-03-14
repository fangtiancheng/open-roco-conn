System.register("chunks:///_virtual/InitCombatResConfig.ts", ["cc", "./CombatLoadResVO.ts", "./PReadHelp.ts", "./CombatEffectData.ts"], (function(t) {
        var o, s, e, i;
        return {
            setters: [function(t) {
                o = t.cclegacy
            }
                , function(t) {
                    s = t.CombatLoadResVO
                }
                , function(t) {
                    e = t.PReadHelp
                }
                , function(t) {
                    i = t.CombatEffectData
                }
            ],
            execute: function() {
                o._RF.push({}, "d2e67b2SP9P066UcikAWOzT", "InitCombatResConfig", void 0);
                t("InitCombatResConfig", function() {
                    function t() {
                        this.vo = void 0
                    }
                    var o = t.prototype;
                    return o.initRes = function(t) {
                        var o = [];
                        return o.push(this.addEffect(t, i.BALL_MOVIE)),
                            o.push(this.addEffect(t, i.MAN_MOVIE)),
                            o
                    }
                        ,
                        o.addEffect = function(t, o, i, n) {
                            void 0 === i && (i = "typeskill"),
                            void 0 === n && (n = "Effect");
                            var a = e.sskillProxy.select(o);
                            return this.vo = new s,
                                this.vo.id = o,
                                this.vo.type = i,
                                this.vo.linkName = n,
                                this.vo.url = a.src,
                                this.vo.resPool = t.commonCombatResPool,
                                this.vo.resType = s.RES_TYPE_EFFECT_ANIMATION,
                                this.vo.isGaf = !0,
                                this.vo.resID = a.resID,
                                this.vo.assetPath = this.vo.assetPath.concat("gaf/effect/" + this.vo.resID + "/" + this.vo.resID + ".gaf.bin"),
                                console.log("[CombatResModule] 请求加载资源:EFFECT[" + this.vo.id + "]", this.vo.linkName + "==>" + this.vo.url),
                                this.vo
                        }
                        ,
                        t
                }());
                o._RF.pop()
            }
        }
    }
));
