System.register("chunks:///_virtual/SpiritAnimationData.ts", ["cc", "./BuildLogHelper.ts"], (function(t) {
        var e, i;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
                , function(t) {
                    i = t.default
                }
            ],
            execute: function() {
                e._RF.push({}, "cb112cDYXdAJ4aGpXuYfBpj", "SpiritAnimationData", void 0),
                    t("SpiritAnimationData", function() {
                        function t() {
                            this.id = 0,
                                this.totalFrame = 0,
                                this.name = "",
                                this.res_list = void 0,
                                this.eventFrame = void 0,
                                this.eventFrameLog = new Map
                        }
                        var e = t.prototype;
                        return e.setData = function(t, e) {
                            this.id = Number(t.id),
                                this.totalFrame = Number(t.totalFrame),
                                this.name = String(t.name),
                                this.res_list = [];
                            for (var a = 0; a < t.res_list.length; a++) {
                                var r = t.res_list[a];
                                this.res_list.push("" + e + this.id + "/" + r + ".plist")
                            }
                            this.eventFrame = [];
                            for (var n = 0; n < t.eventFrame.length; n++) {
                                var s = t.eventFrame[n]
                                    , m = s.name + (s.name + "_") + Number(s.frame)
                                    , h = this.eventFrameLog[m];
                                if (null != h || null != h)
                                    1 == i.IS_LOCAL && console.error("重复帧动画name==>" + m + "==>" + this.id);
                                else {
                                    var o = {
                                        name: s.name,
                                        frame: Number(s.frame),
                                        params: [s.name]
                                    };
                                    this.eventFrame.push(o),
                                        this.eventFrameLog[m] = m
                                }
                            }
                        }
                            ,
                            e.setData2 = function(e, i) {
                                this.id = Number(e.i),
                                    this.totalFrame = Number(e.t),
                                    this.name = t.AnimationNameArr[e.n],
                                    this.res_list = [];
                                for (var a = 0; a < e.r; a++) {
                                    var r = this.name + "-" + a;
                                    this.res_list.push("" + i + this.id + "/" + r + ".plist")
                                }
                                this.eventFrame = [];
                                for (var n = 0; n < e.e.length; n++) {
                                    var s = e.e[n]
                                        , m = t.AnimationNameArr[s.n]
                                        , h = {
                                        name: m,
                                        frame: Number(s.f),
                                        params: [m]
                                    };
                                    this.eventFrame.push(h)
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
