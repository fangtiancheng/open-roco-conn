System.register("chunks:///_virtual/UiModule.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./NodeUtils.ts", "./AlertUi.ts", "./SpiritInfoUi.ts", "./SpiritSkillSwitchUi.ts"], (function(i) {
        var t, s, l, n, r, e, h;
        return {
            setters: [function(i) {
                t = i.createClass
            }
                , function(i) {
                    s = i.cclegacy
                }
                , function(i) {
                    l = i.__global
                }
                , function(i) {
                    n = i.NodeUtils
                }
                , function(i) {
                    r = i.AlertUi
                }
                , function(i) {
                    e = i.SpiritInfoUi
                }
                , function(i) {
                    h = i.SpiritSkillSwitchUi
                }
            ],
            execute: function() {
                s._RF.push({}, "6ac2bRJtwxKircGHzJheAWW", "UiModule", void 0);
                i("UiModule", function() {
                    function i() {
                        this._app = void 0,
                            this._spiritSkillSwitchUi = void 0,
                            this._spiritInfoUi = void 0,
                            this._alertUi = void 0
                    }
                    var s = i.prototype;
                    return s.initialize = function() {
                        this._spiritSkillSwitchUi = new h,
                            this._spiritSkillSwitchUi.app = this._app,
                            this._spiritSkillSwitchUi.uiM = this,
                            this._spiritInfoUi = new e,
                            this._spiritInfoUi.app = this._app,
                            this._spiritInfoUi.uiM = this,
                            this._alertUi = new r,
                            this.addSpiritInfoUi()
                    }
                        ,
                        s.addSpiritInfoUi = function() {
                            this._spiritSkillSwitchUi.removeAll(),
                                this._app.addChild(this._spiritInfoUi.ui),
                                this._spiritInfoUi.init()
                        }
                        ,
                        s.setWakeupSpirit = function(i) {
                            this._spiritInfoUi.getWakeupSkill(i)
                        }
                        ,
                        s.addSpiritSkillSwitchUi = function(i, t) {
                            this._spiritInfoUi.reset(),
                                this._spiritSkillSwitchUi.removeAll(),
                                this._app.addChild(this._spiritSkillSwitchUi.ui.target),
                                this._spiritSkillSwitchUi.app = this._app,
                                this._spiritSkillSwitchUi.uiM = this,
                                this._spiritSkillSwitchUi.init(),
                                this._spiritSkillSwitchUi.onSpiritDataInit(i, t)
                        }
                        ,
                        s.addAlertUi = function(i, t, s, r) {
                            if (void 0 === t && (t = null),
                            void 0 === s && (s = null),
                            void 0 === r && (r = !0),
                                this._alertUi.init(i, t, s, r),
                            null == this._alertUi.ui.parent) {
                                var e = l.SysAPI.getUISysAPI().getEffectContainer(1);
                                e.addChild(this._alertUi.ui.target);
                                var h = n.getChildIndex(e, this._alertUi.ui.target);
                                n.addChildAt(e, this._alertUi.getBlackground(), h)
                            }
                        }
                        ,
                        s.reset = function() {
                            this._alertUi.reset(),
                                this._spiritSkillSwitchUi.reset(),
                                this._spiritInfoUi.reset(),
                                this._app = null,
                                this._alertUi = null,
                                this._spiritSkillSwitchUi = null,
                                this._spiritInfoUi = null
                        }
                        ,
                        t(i, [{
                            key: "app",
                            set: function(i) {
                                this._app = i
                            }
                        }]),
                        i
                }());
                s._RF.pop()
            }
        }
    }
));
