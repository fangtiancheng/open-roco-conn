System.register("chunks:///_virtual/ProtocolUtil.ts", ["cc", "./Constants.ts", "./global.ts"], (function(t) {
        var n, r, o;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
                , function(t) {
                    r = t.Constants
                }
                , function(t) {
                    o = t.__global
                }
            ],
            execute: function() {
                n._RF.push({}, "7b801r9kbpP7o3M2FuVMsWM", "ProtocolUtil", void 0),
                    t("ProtocolUtil", function() {
                        function t() {}
                        return t.getUnkownKey = function() {
                            var t = o.SysAPI.getGDataAPI().getGlobalVal(r.CUR_SERVER_INFO);
                            if (t && (t.pskey || t.skey)) {
                                for (var n = t.pskey ? t.pskey : t.skey, e = "", i = 0; i < n.length; i++)
                                    e += "%" + n.charCodeAt(i).toString(16);
                                return e
                            }
                            return ""
                        }
                            ,
                            t.arrayToString = function(n, r, o) {
                                var e = ""
                                    , i = ++o;
                                if (n) {
                                    for (var a = ""; o; )
                                        a += t.TAB_STRING,
                                            o--;
                                    for (var u = n.length, c = 0; c < u; c++)
                                        e += "\n" + a + r + "[" + c + "] :\n" + n[c].toString(i + 1);
                                    e += "\n"
                                }
                                return e
                            }
                            ,
                            t.simpleArrayToString = function(n, r, o) {
                                var e = "";
                                if (o++,
                                    n) {
                                    for (var i = ""; o; )
                                        i += t.TAB_STRING,
                                            o--;
                                    for (var a = n.length, u = 0; u < a; u++)
                                        e += "\n" + i + r + "[" + u + "] = " + n[u]
                                }
                                return e
                            }
                            ,
                            t.getArraySize = function(t) {
                                for (var n = 0, r = 0; r < t.length; r++)
                                    n += t[r].length;
                                return n
                            }
                            ,
                            t
                    }()).TAB_STRING = "    ",
                    n._RF.pop()
            }
        }
    }
));
