System.register("chunks:///_virtual/P_DetailRoleInfo.ts", ["cc", "./DEFINE.ts"], (function(e) {
        var t, i;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    i = e.DEFINE
                }
            ],
            execute: function() {
                t._RF.push({}, "ec111Cj3NpM0b4+8n9NB2jR", "P_DetailRoleInfo", void 0);
                e("P_DetailRoleInfo", function() {
                    function e() {
                        this.sex = void 0,
                            this.nickName = void 0,
                            this.level = void 0,
                            this.avatarVer = void 0
                    }
                    var t = e.prototype;
                    return t.writeExternal = function(e) {}
                        ,
                        t.readExternal = function(e) {
                            this.sex = e.readByte(),
                                this.nickName = i.ReadChars(e, i.L_NICKNAME),
                                this.level = e.readUnsignedShort(),
                                this.avatarVer = e.readUnsignedShort()
                        }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
