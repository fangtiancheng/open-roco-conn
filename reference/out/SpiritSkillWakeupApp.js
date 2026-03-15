System.register("chunks:///_virtual/SpiritSkillWakeupApp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./global.ts", "./AgentNode.ts", "./NodeExtend.ts", "./NetEvent.ts", "./NetModule.ts", "./UiModule.ts", "./SpiritBagRefProxy.ts"], (function(i) {
        var t, n, e, s, o, u, l, c, r, a, p, h;
        return {
            setters: [function(i) {
                t = i.inheritsLoose,
                    n = i.createClass
            }
                , function(i) {
                    e = i.cclegacy,
                        s = i.NodeEventType
                }
                , function(i) {
                    o = i.Constants
                }
                , function(i) {
                    u = i.__global
                }
                , function(i) {
                    l = i.AgentNode
                }
                , function(i) {
                    c = i.NodeExtend
                }
                , function(i) {
                    r = i.NetEvent
                }
                , function(i) {
                    a = i.NetModule
                }
                , function(i) {
                    p = i.UiModule
                }
                , function(i) {
                    h = i.SpiritBagRefProxy
                }
            ],
            execute: function() {
                e._RF.push({}, "84b77JwSK5P/5XmpzOcxBQ+", "SpiritSkillWakeupApp", void 0);
                var _ = function(i) {
                    function e() {
                        for (var t, n = arguments.length, e = new Array(n), s = 0; s < n; s++)
                            e[s] = arguments[s];
                        return (t = i.call.apply(i, [this].concat(e)) || this)._closeBtn = void 0,
                            t
                    }
                    return t(e, i),
                        n(e, [{
                            key: "closeBtn",
                            get: function() {
                                return this._closeBtn || (this._closeBtn = new l(this.getChildByName("closeBtn"))),
                                    this._closeBtn
                            }
                        }]),
                        e
                }(l)
                    , f = i("SpiritSkillWakeupApp", function(i) {
                    t(l, i);
                    var e = l.prototype;
                    function l() {
                        var t;
                        return (t = i.call(this) || this)._sysApi = void 0,
                            t._uiM = void 0,
                            t._netM = void 0,
                            t._ui = void 0,
                            t.setAngelSysAPI(u.SysAPI),
                            t.initialize(),
                            t
                    }
                    return e.onClose = function(i) {
                        h.spiritBagPanel.goBack()
                    }
                        ,
                        e.setCurSpiritSkill = function(i) {
                            l.openIndex = i,
                            this._uiM && this._uiM.setWakeupSpirit(l.openIndex)
                        }
                        ,
                        e.changeSkillLogic = function(i) {
                            l.openIndex = i,
                            this._uiM && this._uiM.setWakeupSpirit(l.openIndex)
                        }
                        ,
                        e.removeAllSwitchSkill = function() {
                            this._uiM && this._uiM.reset()
                        }
                        ,
                        e.show = function() {
                            this._ui.visible = !0,
                                this.visible = !0
                        }
                        ,
                        e.hide = function() {
                            this._ui.visible = !1,
                                this.visible = !1
                        }
                        ,
                        e.initialize = function() {
                            this._netM = new a,
                                this._netM.app = this,
                                this._netM.initialize(),
                                this._uiM = new p,
                                this._uiM.app = this,
                                this._uiM.initialize()
                        }
                        ,
                        e.updateData = function() {
                            this.dispatchEvent(new r(r.SEND_GET_SPIRITS_INFO,null))
                        }
                        ,
                        e.activate = function() {
                            this._uiM.addSpiritInfoUi()
                        }
                        ,
                        e.inactivate = function() {}
                        ,
                        e.setup = function() {
                            this.initialize()
                        }
                        ,
                        e.dispose = function() {
                            this._netM.reset(),
                                this._uiM.reset(),
                                this._sysApi = null,
                                l.spiritProxy = null,
                                l.skillProxy = null,
                                this._uiM = null,
                                this._netM = null
                        }
                        ,
                        e.setParams = function(i) {}
                        ,
                        e.setAngelSysAPI = function(i) {
                            this._sysApi = i,
                                l.spiritProxy = this._sysApi.getGDataAPI().getDataProxy(o.SPIRIT_DATA),
                                l.skillProxy = this._sysApi.getGDataAPI().getDataProxy(o.SSKILL_DATA)
                        }
                        ,
                        e.getSysApi = function() {
                            return this._sysApi
                        }
                        ,
                        n(l, [{
                            key: "ui",
                            set: function(i) {
                                this._ui = new _(i),
                                    i.addChild(this),
                                    this._ui.closeBtn.on(s.TOUCH_END, this.onClose, this)
                            }
                        }]),
                        l
                }(c));
                f.spiritProxy = void 0,
                    f.skillProxy = void 0,
                    f.openIndex = -1,
                    e._RF.pop()
            }
        }
    }
));
