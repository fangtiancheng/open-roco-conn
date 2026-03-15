System.register("chunks:///_virtual/CommonDataAPI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./AbstractDataReceiver.ts", "./ADFCmdsType.ts", "./RoleDetailProcessor.ts"], (function(t) {
        var e, a, s, n, i, o, r, _;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    a = t.createClass,
                    s = t.assertThisInitialized
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    i = t.Constants
                }
                , function(t) {
                    o = t.AbstractDataReceiver
                }
                , function(t) {
                    r = t.ADFCmdsType
                }
                , function(t) {
                    _ = t.RoleDetailProcessor
                }
            ],
            execute: function() {
                n._RF.push({}, "fb107Yk0pRL8ZMXV/qrarRN", "CommonDataAPI", void 0);
                t("CommonDataAPI", function(t) {
                    function n(e) {
                        var a;
                        return (a = t.call(this) || this).__heroData = void 0,
                            a.__netSysApi = void 0,
                            a.__handlerMaps = void 0,
                            a.setAngelSysAPI(e),
                            a.__netSysApi = a.sysApi.getNetSysAPI(),
                            a.__netSysApi.addDataProcessor(new _),
                            a.__netSysApi.addDataReceiver(s(a)),
                            a.__handlerMaps = new Map,
                            a
                    }
                    e(n, t);
                    var o = n.prototype;
                    return o.onDataReceive = function(t, e) {
                        var a;
                        switch (t) {
                            case r.T_GET_USER_DETAIL:
                                var s = e.serNum;
                                a = this.__handlerMaps[s],
                                    delete this.__handlerMaps[s],
                                null != a && a(e)
                        }
                    }
                        ,
                        o.requestRoleDetail = function(t, e) {
                            void 0 === e && (e = 0),
                            0 == e && (e = this.MainRoleData.uin),
                            null != t && (this.sendDataWithSerNum(r.T_GET_USER_DETAIL, e),
                            0 != this.serNum && (this.__handlerMaps[this.serNum] = t))
                        }
                        ,
                        o.getAcceptTypes = function() {
                            return [r.T_GET_USER_DETAIL]
                        }
                        ,
                        a(n, [{
                            key: "MainRoleData",
                            get: function() {
                                return null == this.__heroData && (this.__heroData = this.sysApi.getGDataAPI().getGlobalVal(i.MAIN_ROLE_INFO)),
                                    this.__heroData
                            }
                        }]),
                        n
                }(o));
                n._RF.pop()
            }
        }
    }
));
