System.register("chunks:///_virtual/SCSwitchSkill.ts", ["cc", "./ProtocolHelper.ts", "./SwitchSkillVo.ts"], (function(t) {
        var e, i, n;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
                , function(t) {
                    i = t.ProtocolHelper
                }
                , function(t) {
                    n = t.SwitchSkillVo
                }
            ],
            execute: function() {
                e._RF.push({}, "91d2eLRNlJNoIqmlD/0pMfL", "SCSwitchSkill", void 0);
                t("SCSwitchSkill", function() {
                    function t() {
                        this.vo = void 0
                    }
                    var e = t.prototype;
                    return e.IAngelDataInputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataInputJudge")
                    }
                        ,
                        e.read = function(t) {
                            this.vo = new n,
                                this.vo.code = i.ReadCode(t),
                                this.vo.id = t.readUnsignedInt(),
                                this.vo.index = t.readUnsignedByte(),
                                this.vo.skillIndex = t.readUnsignedByte(),
                                this.vo.skillId = t.readUnsignedShort()
                        }
                        ,
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
