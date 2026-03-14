System.register("chunks:///_virtual/P_RoleInfo.ts", ["cc", "./DEFINE.ts"], (function(t) {
        var i, e;
        return {
            setters: [function(t) {
                i = t.cclegacy
            }
                , function(t) {
                    e = t.DEFINE
                }
            ],
            execute: function() {
                i._RF.push({}, "edb92WMXR1F4rvt6cCPZ7tn", "P_RoleInfo", void 0);
                t("P_RoleInfo", function() {
                    function t() {
                        this.uin = void 0,
                            this.nickName = void 0,
                            this.level = void 0,
                            this.avatarVer = void 0,
                            this.position = void 0,
                            this.direction = void 0,
                            this.hasPet = void 0
                    }
                    var i = t.prototype;
                    return i.writeExternal = function(t) {}
                        ,
                        i.readExternal = function(t) {
                            this.uin = t.readUnsignedInt(),
                                this.nickName = e.ReadChars(t, e.L_NICKNAME),
                                this.level = t.readUnsignedShort(),
                                this.avatarVer = t.readUnsignedShort(),
                                this.position = e.ReadPoint(t),
                                this.direction = t.readShort(),
                                this.hasPet = t.readByte()
                        }
                        ,
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
