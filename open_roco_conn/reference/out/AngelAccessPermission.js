System.register("chunks:///_virtual/AngelAccessPermission.ts", ["cc", "./Constants.ts", "./RoleData.ts"], (function(s) {
        var t, n, e;
        return {
            setters: [function(s) {
                t = s.cclegacy
            }
                , function(s) {
                    n = s.Constants
                }
                , function(s) {
                    e = s.RoleData
                }
            ],
            execute: function() {
                t._RF.push({}, "c787dRsXNhD96/o5R596aBs", "AngelAccessPermission", void 0);
                s("AngelAccessPermission", function() {
                    function s() {
                        this.sysApi = void 0,
                            this.commUI = void 0
                    }
                    var t = s.prototype;
                    return t.canAccess = function(s, t, i, o) {
                        var c;
                        return void 0 === t && (t = !0),
                        void 0 === i && (i = ""),
                        this.sysApi.getGDataAPI().getGlobalVal(n.MAIN_ROLE_INFO).roleType > e.GUEST || (t ? (null == (c = this.commUI) || c.alert("", "" == i ? "游客不允许此操作!!" : i),
                            !1) : void 0)
                    }
                        ,
                        t.setAngelSysAPI = function(s) {
                            this.sysApi = s,
                                this.commUI = this.sysApi.getUISysAPI().commUIManager
                        }
                        ,
                        s
                }());
                t._RF.pop()
            }
        }
    }
));
