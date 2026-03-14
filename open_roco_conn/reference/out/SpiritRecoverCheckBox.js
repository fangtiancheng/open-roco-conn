System.register("chunks:///_virtual/SpiritRecoverCheckBox.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./ZoneRecoverHpQueryRsp.ts", "./ZoneRecoverHpSelectRsp.ts", "./NetManager.ts", "./AgentNode.ts"], (function(e) {
        var t, i, n, c, o, s, r, h;
        return {
            setters: [function(e) {
                t = e.createClass,
                    i = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    c = e.__global
                }
                , function(e) {
                    o = e.ZoneRecoverHpQueryRsp
                }
                , function(e) {
                    s = e.ZoneRecoverHpSelectRsp
                }
                , function(e) {
                    r = e.NetManager
                }
                , function(e) {
                    h = e.AgentNode
                }
            ],
            execute: function() {
                n._RF.push({}, "8c881FgRxRLV7b/8uzvhnai", "SpiritRecoverCheckBox", void 0);
                e("SpiritRecoverCheckBox", function() {
                    function e(e) {
                        this._ui = void 0,
                            this._check = void 0,
                            this._ui = new u(e),
                            this._ui.mouseChildren = !1,
                            this._ui.buttonMode = !0,
                            this.setProperty("tooltip", "勾选后可在PVE战斗后自动恢复，PVP仍需要手动恢复"),
                            r.send(206836, null, o, this.queryCallback.bind(this))
                    }
                    var i = e.prototype;
                    return i.clickBox = function() {
                        r.send(206837, null, s, this.callback.bind(this))
                    }
                        ,
                        i.queryCallback = function(e) {
                            c.SysAPI.getUISysAPI().commUIManager.closeMiniLoading(),
                                0 == e.retInfo.retCode ? 1 == e.state ? this.check = !0 : this.check = !1 : e && e.retInfo && 0 != e.retInfo.retCode && c.showMsgBox(e.retInfo.retMsg.readMultiByte(e.retInfo.retMsg.length, "gb2312"))
                        }
                        ,
                        i.callback = function(e) {
                            0 == e.retInfo.retCode ? 1 == e.state ? this.check = !0 : this.check = !1 : e && e.retInfo && 0 != e.retInfo.retCode && c.showMsgBox(e.retInfo.retMsg.readMultiByte(e.retInfo.retMsg.length, "gb2312"))
                        }
                        ,
                        i.setProperty = function(e, t) {
                            null != this._ui && (this._ui[e] = t)
                        }
                        ,
                        t(e, [{
                            key: "check",
                            get: function() {
                                return !!this._ui && this._ui.mcCheck.visible
                            },
                            set: function(e) {
                                this._check = e,
                                this._ui && (this._ui.mcCheck.visible = this._check)
                            }
                        }]),
                        e
                }());
                var u = function(e) {
                    function n() {
                        for (var t, i = arguments.length, n = new Array(i), c = 0; c < i; c++)
                            n[c] = arguments[c];
                        return (t = e.call.apply(e, [this].concat(n)) || this)._mcCheck = void 0,
                            t
                    }
                    return i(n, e),
                        t(n, [{
                            key: "mcCheck",
                            get: function() {
                                return this._mcCheck || (this._mcCheck = new h(this.getChildByName("mcCheck"))),
                                    this._mcCheck
                            }
                        }]),
                        n
                }(h);
                n._RF.pop()
            }
        }
    }
));
