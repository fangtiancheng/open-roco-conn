System.register("chunks:///_virtual/AnimationEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(_) {
        var n, e, o, t, E;
        return {
            setters: [function(_) {
                n = _.inheritsLoose
            }
                , function(_) {
                    e = _.cclegacy,
                        o = _._decorator,
                        t = _.Event,
                        E = _.Component
                }
            ],
            execute: function() {
                var i;
                e._RF.push({}, "3f8ccwY0RtLZYv2iVr1LG/v", "AnimationEvent", void 0);
                var s = o.ccclass;
                o.property,
                    _("default", s("AnimationEvent")(i = function(_) {
                        function e() {
                            return _.apply(this, arguments) || this
                        }
                        n(e, _);
                        var o = e.prototype;
                        return o.APPEAR_END = function(_) {
                            var n = this.node.___name___;
                            console.log(n + " =>>>APPEAR_END==="),
                                this.node.dispatchEvent(new t("APPEAR_END"))
                        }
                            ,
                            o.IDLE_END = function(_) {
                                this.node.dispatchEvent(new t("IDLE_END"))
                            }
                            ,
                            o.ATTACK_HIT = function(_) {
                                var n = this.node.___name___;
                                console.log(n + " =>>>ATTACK_HIT==="),
                                    this.node.dispatchEvent(new t("ATTACK_HIT"))
                            }
                            ,
                            o.ATTACK_END = function(_) {
                                var n = this.node.___name___;
                                console.log(n + " =>>>ATTACK_END==="),
                                    this.node.dispatchEvent(new t("ATTACK_END"))
                            }
                            ,
                            o.UNDER_ATTACK_END = function(_) {
                                var n = this.node.___name___;
                                console.log(n + " =>>>UNDER_ATTACK_END==="),
                                    this.node.dispatchEvent(new t("UNDER_ATTACK_END"))
                            }
                            ,
                            o.BEAT_DOWN_END = function(_) {
                                var n = this.node.___name___;
                                console.log(n + " =>>>BEAT_DOWN_END==="),
                                    this.node.dispatchEvent(new t("BEAT_DOWN_END"))
                            }
                            ,
                            o.MISS_END = function(_) {
                                var n = this.node.___name___;
                                console.log(n + " =>>>MISS_END==="),
                                    this.node.dispatchEvent(new t("MISS_END"))
                            }
                            ,
                            o.MAGIC_START = function(_) {
                                var n = this.node.___name___;
                                console.log(n + " =>>>MAGIC_START==="),
                                    this.node.dispatchEvent(new t("MAGIC_START"))
                            }
                            ,
                            o.STB_END = function(_) {
                                var n = this.node.___name___;
                                console.log(n + " =>>>STB_END==="),
                                    this.node.dispatchEvent(new t("STB_END"))
                            }
                            ,
                            o.BTS_END = function(_) {
                                var n = this.node.___name___;
                                console.log(n + " =>>>BTS_END==="),
                                    this.node.dispatchEvent(new t("BTS_END"))
                            }
                            ,
                            o.DEAD_END = function(_) {
                                var n = this.node.___name___;
                                console.log(n + " =>>>DEAD_END==="),
                                    this.node.dispatchEvent(new t("DEAD_END"))
                            }
                            ,
                            o.EBALL_START_APPEAR = function(_) {
                                var n = this.node.___name___;
                                console.log(n + " =>>>EBALL_START_APPEAR==="),
                                    this.node.dispatchEvent(new t("EBALL_START_APPEAR"))
                            }
                            ,
                            o.EMAN_HITBALL = function(_) {
                                var n = this.node.___name___;
                                console.log(n + " =>>>EMAN_HITBALL==="),
                                    this.node.dispatchEvent(new t("EMAN_HITBALL"))
                            }
                            ,
                            o.EBALL_END = function(_) {
                                var n = this.node.___name___;
                                console.log(n + " =>>>EBALL_END==="),
                                    this.node.dispatchEvent(new t("EBALL_END"))
                            }
                            ,
                            o.EMAN_END = function(_) {
                                var n = this.node.___name___;
                                console.log(n + " =>>>EMAN_END==="),
                                    this.node.dispatchEvent(new t("EMAN_END"))
                            }
                            ,
                            o.ESCAES_END = function(_) {
                                var n = this.node.___name___;
                                console.log(n + " =>>>ESCAES_END==="),
                                    this.node.dispatchEvent(new t("ESCAES_END"))
                            }
                            ,
                            o.EMAGIC_HIT = function(_) {
                                var n = this.node.___name___;
                                console.log(n + " =>>>EMAGICHIT==="),
                                    this.node.dispatchEvent(new t("EMAGIC_HIT"))
                            }
                            ,
                            o.EMAGIC_FOCUS_END = function(_) {
                                var n = this.node.___name___;
                                console.log(n + " =>>>EMAGIC_FOCUS_END==="),
                                    this.node.dispatchEvent(new t("EMAGIC_FOCUS_END"))
                            }
                            ,
                            o.EFFECT_END = function(_) {
                                var n = this.node.___name___;
                                console.log(n + " =>>>EFFECT_END==="),
                                    this.node.dispatchEvent(new t("EFFECT_END"))
                            }
                            ,
                            o.EATTACK_END = function(_) {
                                var n = this.node.___name___;
                                console.log(n + " =>>>EATTACK_END==="),
                                    this.node.dispatchEvent(new t("EATTACK_END"))
                            }
                            ,
                            o.EATTACK_HIT = function(_) {
                                var n = this.node.___name___;
                                console.log(n + " =>>>EATTACK_HIT==="),
                                    this.node.dispatchEvent(new t("EATTACK_HIT"))
                            }
                            ,
                            o.MAGIC_END = function(_) {
                                var n = this.node.___name___;
                                console.log(n + " =>>>MAGIC_END==="),
                                    this.node.dispatchEvent(new t("MAGIC_END"))
                            }
                            ,
                            o.EMAGIC_END = function(_) {
                                var n = this.node.___name___;
                                console.log(n + " =>>>EMAGIC_END==="),
                                    this.node.dispatchEvent(new t("EMAGIC_END"))
                            }
                            ,
                            o.EBALL_LIGHT = function(_) {
                                var n = this.node.___name___;
                                console.log(n + " =>>>EBALL_LIGHT==="),
                                    this.node.dispatchEvent(new t("EBALL_LIGHT"))
                            }
                            ,
                            e
                    }(E)) || i);
                e._RF.pop()
            }
        }
    }
));
