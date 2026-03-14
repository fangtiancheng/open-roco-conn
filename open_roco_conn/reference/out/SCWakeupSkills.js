System.register("chunks:///_virtual/SCWakeupSkills.ts", ["cc", "./ProtocolHelper.ts", "./SpiritSkillWakeupApp.ts", "./SpiritSkillVo.ts", "./WakeupSkillVo.ts"], (function(e) {
        var i, t, n, o, s;
        return {
            setters: [function(e) {
                i = e.cclegacy
            }
                , function(e) {
                    t = e.ProtocolHelper
                }
                , function(e) {
                    n = e.SpiritSkillWakeupApp
                }
                , function(e) {
                    o = e.SpiritSkillVo
                }
                , function(e) {
                    s = e.WakeupSkillVo
                }
            ],
            execute: function() {
                i._RF.push({}, "cfa483U2bFPwrEg3V+55WjI", "SCWakeupSkills", void 0);
                e("SCWakeupSkills", function() {
                    function e() {
                        this.vo = void 0
                    }
                    var i = e.prototype;
                    return i.IAngelDataInputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataInputJudge")
                    }
                        ,
                        i.read = function(e) {
                            this.vo = new s,
                                this.vo.code = t.ReadCode(e),
                                this.vo.id = e.readUnsignedInt(),
                                this.vo.index = e.readUnsignedByte();
                            for (var i, r = e.readUnsignedShort(), l = 0; l < r; l++)
                                (i = new o).id = e.readUnsignedShort(),
                                    i.PP = e.readUnsignedByte(),
                                    i.isHeredity = e.readUnsignedByte(),
                                    i.index = l + 1,
                                    i.des = n.skillProxy.select(i.id),
                                    this.vo.skills.push(i)
                        }
                        ,
                        e
                }());
                i._RF.pop()
            }
        }
    }
));
