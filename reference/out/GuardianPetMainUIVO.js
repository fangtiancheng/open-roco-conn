System.register("chunks:///_virtual/GuardianPetMainUIVO.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts"], (function(i) {
        var t, n, a;
        return {
            setters: [function(i) {
                t = i.createClass
            }
                , function(i) {
                    n = i.cclegacy
                }
                , function(i) {
                    a = i.__global
                }
            ],
            execute: function() {
                n._RF.push({}, "fbd35EwYt5E8qUG8LTspE6r", "GuardianPetMainUIVO", void 0);
                var e = i("GuardianPetMainUIVO", function() {
                    function i() {
                        this.cur_exp = void 0,
                            this.nextLv_exp = void 0,
                            this.guardianPetData = void 0,
                            this.isFollowing = void 0,
                            this.pillNum = void 0,
                            this.dailyGiftGot = void 0,
                            this.dailyGiftNum = void 0,
                            this.dataSrc = void 0
                    }
                    return t(i, [{
                        key: "isVip",
                        get: function() {
                            return a.MainRoleData.isVip
                        }
                    }]),
                        i
                }());
                e.DATA_SRC_QUERY = 1,
                    e.DATA_SRC_FEED = 2,
                    e.DATA_SRC_LEVELUP = 3,
                    n._RF.pop()
            }
        }
    }
));
