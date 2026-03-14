System.register("chunks:///_virtual/ActionRemoveSkillBgSegment.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./VideoEvent.ts"], (function(t) {
        var e, n, i, s;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    i = t.EventDispatcher
                }
                , function(t) {
                    s = t.VideoEvent
                }
            ],
            execute: function() {
                n._RF.push({}, "b3afblIEqVAkqXQjKDZUQVw", "ActionRemoveSkillBgSegment", void 0);
                t("ActionRemoveSkillBgSegment", function(t) {
                    function n(e) {
                        var n;
                        return (n = t.call(this) || this).aPet = void 0,
                            n.screen = void 0,
                            n.uin = 0,
                            n.posType = 0,
                            n.dataObject = void 0,
                            n.skillInfo = void 0,
                            console.log("Segment初始化=>>"),
                            console.log("ActionRemoveSkillBgSegment"),
                            n
                    }
                    e(n, t);
                    var i = n.prototype;
                    return i.ready = function() {
                        this.uin = this.dataObject.offenseID,
                            this.skillInfo = this.dataObject.skillDes,
                            this.aPet = this.screen.getVSpirit(this.uin),
                            this.posType = this.aPet.getPosType()
                    }
                        ,
                        i.setData = function(t) {
                            this.dataObject = t
                        }
                        ,
                        i.setScreen = function(t) {
                            this.screen = t
                        }
                        ,
                        i.start = function() {
                            console.log(this.constructor.name + " 执行=>>start"),
                                this.ready(),
                            4 == this.skillInfo.damageType && this.screen.removeSuperSkillBg(this.posType),
                                this.dispatchEvent(new s(s.ON_SEG_END))
                        }
                        ,
                        i.cancel = function() {}
                        ,
                        i.dispose = function() {
                            this.aPet = null,
                                this.screen = null,
                                this.dataObject = null
                        }
                        ,
                        n
                }(i));
                n._RF.pop()
            }
        }
    }
));
