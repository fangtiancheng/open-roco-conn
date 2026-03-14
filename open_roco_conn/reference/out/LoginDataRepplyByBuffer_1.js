System.register("chunks:///_virtual/LoginDataRepplyByBuffer2.ts", ["cc", "./ByteArray.ts", "./RoleData.ts", "./P_ReturnCode.ts"], (function(e) {
        var t, n, r, i;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    n = e.ByteArray
                }
                , function(e) {
                    r = e.RoleData
                }
                , function(e) {
                    i = e.P_ReturnCode
                }
            ],
            execute: function() {
                t._RF.push({}, "43e18FStApBMpu9DGS8hXHm", "LoginDataRepplyByBuffer", void 0);
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
                        var r = t.readUint16();
                        this.returnCode.message = t.readString(r),
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
