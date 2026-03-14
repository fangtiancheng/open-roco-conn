System.register("chunks:///_virtual/LoginDataRepplyByBuffer.ts", ["cc", "./ByteBuffer.ts", "./P_ReturnCode222.ts", "./RoleData222.ts"], (function(e) {
        var t, n, i, r;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    n = e.ByteBuffer
                }
                , function(e) {
                    i = e.P_ReturnCode222
                }
                , function(e) {
                    r = e.RoleData222
                }
            ],
            execute: function() {
                t._RF.push({}, "46451dZiAxOuo2e27B53zs0", "LoginDataRepplyByBuffer", void 0);
                e("LoginDataRepplyByBuffer", function() {
                    function e() {
                        this.returnCode = new i,
                            this.roomID = 0,
                            this.sceneID = 0,
                            this.sceneVer = 0,
                            this.mainRole = new r
                    }
                    return e.prototype.decode = function(e) {
                        var t = new n(e);
                        this.returnCode.code = t.readUint32();
                        var i = t.readUint16();
                        this.returnCode.message = t.readString(i),
                            this.roomID = t.readUint16(),
                            this.sceneID = t.readUint16(),
                            this.sceneVer = t.readUint16(),
                            this.mainRole.avatarType = t.readUint32(),
                            this.mainRole.nickName = t.readString(16)
                    }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
