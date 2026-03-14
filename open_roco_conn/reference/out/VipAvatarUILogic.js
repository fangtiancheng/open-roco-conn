System.register("chunks:///_virtual/VipAvatarUILogic.ts", ["cc", "./global.ts", "./ADFCmdsType.ts", "./NetManager.ts", "./WindowCloseAction.ts", "./CommFunction.ts", "./GuardianPetSkinWindow.ts", "./PTB_0x03227E_SkinOperate_C2S.ts", "./PTB_0x03227E_SkinOperate_S2C.ts"], (function(i) {
        var t, n, o, a, e, r, s, c, v;
        return {
            setters: [function(i) {
                t = i.cclegacy
            }
                , function(i) {
                    n = i.__global
                }
                , function(i) {
                    o = i.ADFCmdsType
                }
                , function(i) {
                    a = i.NetManager
                }
                , function(i) {
                    e = i.WindowCloseAction
                }
                , function(i) {
                    r = i.CommFunction
                }
                , function(i) {
                    s = i.GuardianPetSkinWindow
                }
                , function(i) {
                    c = i.PTB_0x03227E_SkinOperate_C2S
                }
                , function(i) {
                    v = i.PTB_0x03227E_SkinOperate_S2C
                }
            ],
            execute: function() {
                t._RF.push({}, "490d5PCJR1Pqa0VQTphhptt", "VipAvatarUILogic", void 0);
                i("VipAvatarUILogic", function() {
                    function i() {
                        this._vipAvatarWindow = void 0,
                            this._vipAvatarWindow = n.UI.createWindow(s, !0),
                            this._vipAvatarWindow.closeAction = e.HIDE,
                            this._vipAvatarWindow.close(),
                            this._vipAvatarWindow.uiLogic = this
                    }
                    var t = i.prototype;
                    return t.dispose = function() {
                        this._vipAvatarWindow.closeAction = e.CLOSE,
                            this._vipAvatarWindow.close(),
                            this._vipAvatarWindow = null
                    }
                        ,
                        t.opened = function() {
                            return null != this._vipAvatarWindow && this._vipAvatarWindow.visible
                        }
                        ,
                        t.open = function() {
                            var i = Number(arguments.length <= 0 ? void 0 : arguments[0]);
                            this._vipAvatarWindow.curBaseId = i,
                                this._vipAvatarWindow.show()
                        }
                        ,
                        t.operateVipAvatar = function(i, t) {
                            r.setWaiting(!0);
                            var n = new c;
                            n.reqPetId = i,
                                n.type = t,
                                a.send(o.T_GUARDIANPET_CHANGEAVATAR, n, v, this.protoHandler.bind(this))
                        }
                        ,
                        t.protoHandler = function(i) {
                            r.setWaiting(!1),
                                0 == i.retCode.retCode ? this._vipAvatarWindow.curBaseId = i.guardianPetId : n.showMsgBox(i.retCode.retMsg)
                        }
                        ,
                        t.close = function() {
                            this._vipAvatarWindow && this._vipAvatarWindow.closeCurWin()
                        }
                        ,
                        i
                }());
                t._RF.pop()
            }
        }
    }
));
