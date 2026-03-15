System.register("chunks:///_virtual/PetAnimationData.ts", ["cc"], (function(t) {
        var e;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
            ],
            execute: function() {
                e._RF.push({}, "c1be9Gu4TVMa7EkDCxxIPV3", "PetAnimationData", void 0),
                    t("PetAnimationData", function() {
                        function t() {
                            this.id = 0,
                                this.totalFrame = 0,
                                this.name = "",
                                this.res_list = void 0,
                                this.eventFrame = void 0
                        }
                        return t.prototype.setData = function(e) {
                            this.id = Number(e.i),
                                this.totalFrame = Number(e.t),
                                this.name = t.AnimationNameArr[e.n],
                                this.res_list = [];
                            for (var i = 0; i < e.r; i++) {
                                var a = this.name + "-" + i;
                                this.res_list.push("pet/" + this.id + "/" + a)
                            }
                            this.eventFrame = [];
                            for (var n = 0; n < e.e.length; n++) {
                                var r = e.e[n]
                                    , A = t.AnimationNameArr[r.n]
                                    , s = {
                                    name: A,
                                    frame: Number(r.f),
                                    params: [A]
                                };
                                this.eventFrame.push(s)
                            }
                        }
                            ,
                            t
                    }()).AnimationNameArr = ["IDLE", "STB", "BTS", "APPEAR", "ATTACK", "UNDER_ATTACK", "BEAT_DOWN", "MISS", "MAGIC_START", "MAGIC_FOCUS", "MAGIC_END", "DEAD", "ATTACK_HIT", "STB_END", "BTS_END", "APPEAR_END", "ATTACK_END", "UNDER_ATTACK_END", "BEAT_DOWN_END", "MISS_END", "DEAD_END", "DEAD_END"],
                    e._RF.pop()
            }
        }
    }
));
