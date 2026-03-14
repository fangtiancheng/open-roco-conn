System.register("chunks:///_virtual/ServerInfo.ts", ["cc"], (function(t) {
        var s;
        return {
            setters: [function(t) {
                s = t.cclegacy
            }
            ],
            execute: function() {
                s._RF.push({}, "651fdyrmYNC94W8HyuqHlRL", "ServerInfo", void 0);
                t("ServerInfo", (function() {
                        this.dirHost = "127.0.0.1",
                            this.dirPort = 443,
                            this.roomHost = "127.0.0.1",
                            this.roomPort = 443,
                            this.roomName = "",
                            this.roomID = 0,
                            this.sessionKey = "",
                            this.skey = "",
                            this.pskey = "",
                            this.uin = 0,
                            this.isFirstLogin = !1,
                            this.date = new Date,
                            this.logHost = "127.0.0.1",
                            this.logPort = 843
                    }
                ));
                s._RF.pop()
            }
        }
    }
));
