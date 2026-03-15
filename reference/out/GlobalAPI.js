System.register("chunks:///_virtual/GlobalAPI.ts", ["cc", "./RoleData.ts"], (function(t) {
        var e, n, r;
        return {
            setters: [function(t) {
                e = t.cclegacy,
                    n = t._decorator
            }
                , function(t) {
                    r = t.RoleData
                }
            ],
            execute: function() {
                e._RF.push({}, "c699fHKhURLeLlXXRjex2X3", "GlobalAPI", void 0);
                n.ccclass,
                    n.property;
                var a = t("GlobalAPI", function() {
                    function t() {}
                    return t.getTimer = function() {
                        return (new Date).getTime()
                    }
                        ,
                        t.getTimerFormat = function() {
                            var t = new Date;
                            return "--timer:==>" + t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0") + " " + String(t.getHours()).padStart(2, "0") + ":" + String(t.getMinutes()).padStart(2, "0") + ":" + String(t.getSeconds()).padStart(2, "0")
                        }
                        ,
                        t.init = function() {}
                        ,
                        t
                }());
                a.isLogin = !1,
                    a.gAngelSysAPI = void 0,
                    a.gAngelUISystem = void 0,
                    a.roleData = new r,
                    a.gAngelExternalManger = void 0,
                    a.gAngelAccessPermission = void 0,
                    e._RF.pop()
            }
        }
    }
));
