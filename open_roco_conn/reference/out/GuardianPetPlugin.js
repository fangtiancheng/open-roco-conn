System.register("chunks:///_virtual/GuardianPetPlugin.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./ADFCmdsType.ts", "./NetManager.ts", "./CommFunction.ts", "./GuardianPetInfo.ts", "./GuardianPetWindowManager.ts", "./PTB_0x03227C_GuidanceOperate_C2S.ts", "./PTB_0x03227C_GuidanceOperate_S2C.ts"], (function(n) {
        var t, e, i, a, u, o, s, r, c, l;
        return {
            setters: [function(n) {
                t = n.createClass
            }
                , function(n) {
                    e = n.cclegacy
                }
                , function(n) {
                    i = n.__global
                }
                , function(n) {
                    a = n.ADFCmdsType
                }
                , function(n) {
                    u = n.NetManager
                }
                , function(n) {
                    o = n.CommFunction
                }
                , function(n) {
                    s = n.GuardianPetInfo
                }
                , function(n) {
                    r = n.GuardianPetWindowManager
                }
                , function(n) {
                    c = n.PTB_0x03227C_GuidanceOperate_C2S
                }
                , function(n) {
                    l = n.PTB_0x03227C_GuidanceOperate_S2C
                }
            ],
            execute: function() {
                e._RF.push({}, "89c760fAhlKiqlkMHkripdd", "GuardianPetPlugin", void 0),
                    n("GuardianPetPlugin", function() {
                        function n() {
                            this.ICON_X = 615,
                                this.ICON_Y = 5,
                                this._guardianPetInfo = void 0,
                                this.m_plugName = void 0
                        }
                        var e = n.prototype;
                        return e.initialize = function() {
                            return !0
                        }
                            ,
                            e.initIcon = function() {}
                            ,
                            e.openMainUI = function() {
                                this.queryAppPlayState()
                            }
                            ,
                            e.queryAppPlayState = function() {
                                o.setWaiting(!0);
                                var n = new c;
                                n.type = 0,
                                    u.send(a.T_GUARDIANPET_GUIDANCE, n, l, this.protoHandler.bind(this))
                            }
                            ,
                            e.protoHandler = function(n) {
                                o.setWaiting(!1),
                                    0 == n.retCode.retCode ? (i.showItemPanel([{
                                        id: n.item.id,
                                        count: n.item.count
                                    }]),
                                        r.getInstance().finishFlag = n.finishFlag,
                                        r.getInstance().openMainWind()) : i.showMsgBox(n.retCode.retMsg)
                            }
                            ,
                            e.appComplete = function() {
                                o.setWaiting(!0);
                                var n = new c;
                                n.type = 1,
                                    u.send(a.T_GUARDIANPET_GUIDANCE, n, l, this.protoHandler.bind(this))
                            }
                            ,
                            e.finalize = function() {
                                return this.m_plugName = null,
                                    !0
                            }
                            ,
                            e.call = function(n) {
                                if ("ui" == n)
                                    this.openMainUI();
                                else {
                                    var t = Number(n);
                                    t > 0 && (null == this._guardianPetInfo && (this._guardianPetInfo = new s),
                                        this._guardianPetInfo.open(t))
                                }
                            }
                            ,
                            e.setAngelSysAPI = function(n) {}
                            ,
                            e.getEDispatcher = function() {
                                return null
                            }
                            ,
                            e.setPlugName = function(n) {
                                this.m_plugName = n
                            }
                            ,
                            e.getPlugName = function() {
                                return this.m_plugName
                            }
                            ,
                            t(n, null, [{
                                key: "instance",
                                get: function() {
                                    return this._instance || (this._instance = new n),
                                        this._instance
                                }
                            }]),
                            n
                    }())._instance = void 0,
                    e._RF.pop()
            }
        }
    }
));
