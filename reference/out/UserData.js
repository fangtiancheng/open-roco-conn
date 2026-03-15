System.register("chunks:///_virtual/UserData.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./global.ts", "./BuildLogHelper.ts", "./XXTEA.ts"], (function(e) {
        var t, n, s, o, i, r, a;
        return {
            setters: [function(e) {
                t = e.createClass
            }
                , function(e) {
                    n = e.cclegacy,
                        s = e.sys
                }
                , function(e) {
                    o = e.Constants
                }
                , function(e) {
                    i = e.__global
                }
                , function(e) {
                    r = e.default
                }
                , function(e) {
                    a = e.XXTEA
                }
            ],
            execute: function() {
                n._RF.push({}, "ece58QThmVB6K3E6y2evh3i", "UserData", void 0);
                var u = e("UserData", function() {
                    function e() {}
                    return e.isWhite = function(t) {
                        if (!t)
                            return !1;
                        for (var n = 0; n < e.whiteArray.length; n++) {
                            var s = e.whiteArray[n];
                            if (t.toString() == a.decode(s.toString()))
                                return !0
                        }
                        return !1
                    }
                        ,
                        e.addLoginLog = function(t) {
                            "string" == typeof t && (e.loginLog += t,
                                e.loginLog += "\n")
                        }
                        ,
                        t(e, null, [{
                            key: "sessionKey",
                            get: function() {
                                return (r.IS_LOCAL ? s.localStorage.getItem("sessionKey") : this._sessionKey) && this._sessionKey,
                                    this._sessionKey
                            },
                            set: function(e) {
                                r.IS_LOCAL && s.localStorage.setItem("sessionKey", e),
                                    this._sessionKey = e
                            }
                        }, {
                            key: "serverInfo",
                            get: function() {
                                return i.SysAPI.getGDataAPI().getGlobalVal(o.CUR_SERVER_INFO)
                            }
                        }]),
                        e
                }());
                u.whiteArray = ["WAXSJJVAB", "BWVLJAJVZ", "BLAJWJWFB"],
                    u.uin = 270855974,
                    u._sessionKey = "F93B98CA8B56B2BF19215A53EE2E561BC3B9DF99DE9DBCC4BD34978AE7E54807",
                    u.skey = "A338BCF057FBA7F3B7515605C03D928E",
                    u.pskey = "CEC82B4C0F90A0FDE409B97BD99A7ADA",
                    u.recServerIdx = 1,
                    u.zid = "1",
                    u.spiritID = 0,
                    u.loginLog = "",
                    u.GameStroyData = null,
                    u.GameStroyDataFlag = !1,
                    n._RF.pop()
            }
        }
    }
));
