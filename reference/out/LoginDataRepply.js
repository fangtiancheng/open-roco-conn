System.register("chunks:///_virtual/LoginDataRepply.ts", ["cc", "./ProtocolHelper.ts"], (function(e) {
        var t, n;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    n = e.ProtocolHelper
                }
            ],
            execute: function() {
                t._RF.push({}, "c5b3dnoCUFPKbVdyozuJ+/v", "LoginDataRepply", void 0);
                e("LoginDataRepply", function() {
                    function e() {
                        this.returnCode = void 0,
                            this.roomID = 0,
                            this.sceneID = 0,
                            this.sceneVer = 0,
                            this.mainRole = void 0,
                            this.firstLogin = 0,
                            this.sessionKey = ""
                    }
                    var t = e.prototype;
                    return t.IAngelDataInputJudge = function() {
                        CONFIG.DEBUG && console.log("[" + this.constructor.name + "]==i am a IAngelDataInputJudge")
                    }
                        ,
                        t.read = function(e) {
                            this.returnCode = n.ReadCode(e),
                            0 == this.returnCode.isError() && (this.roomID = e.readUnsignedShort(),
                                this.sceneID = e.readUnsignedShort(),
                                this.sceneVer = e.readUnsignedShort(),
                                this.mainRole = n.ReadRoleData(e),
                                this.firstLogin = e.readUnsignedByte(),
                                this.mainRole.flag = e.readUnsignedInt())
                        }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
