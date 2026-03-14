System.register("chunks:///_virtual/LoadInfoLogic.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpriteFrameSelector.ts", "./CombatNpcIconProxy.ts"], (function(t) {
        var o, i, n, s, e, r;
        return {
            setters: [function(t) {
                o = t.createClass
            }
                , function(t) {
                    i = t.cclegacy,
                        n = t.Label,
                        s = t.ProgressBar
                }
                , function(t) {
                    e = t.default
                }
                , function(t) {
                    r = t.CombatNpcIconProxy
                }
            ],
            execute: function() {
                i._RF.push({}, "163e7gn5GVBTopQUQRH5/un", "LoadInfoLogic", void 0);
                t("LoadInfoLogic", function() {
                    function t(t, o) {
                        this._bar = void 0,
                            this._spiritItems = void 0,
                            this._iconMcProxy = void 0,
                            this.combatInfo = void 0,
                            this._iconMc = void 0,
                            this._target = void 0,
                            this._nameTxt = void 0,
                            this._loadTxt_tfb = void 0,
                            this._target = t,
                            this._loadTxt_tfb = t.getChildByName("load_" + o + "_txt").getComponent(n),
                            this._bar = t.getChildByName("player_" + o + "_bar").getComponent(s),
                            this._bar.progress = 0,
                            this._iconMc = t.getChildByName("loader").getChildByName("iconMc_" + o),
                            this._nameTxt = t.getChildByName("nameTxt").getComponent(n),
                            this._iconMcProxy = new r,
                            this._iconMcProxy.iconMc = this._iconMc,
                            this._spiritItems = [];
                        for (var i = "spirit_" + o + "_", a = 0; a < 6; a++) {
                            var c = t.getChildByName(i + a).getComponent(e);
                            c.gotoAndStop(1),
                                c.node.active = !0,
                                this._spiritItems.push(c)
                        }
                    }
                    var i = t.prototype;
                    return i.setCombatInfo = function(t) {
                        this.combatInfo = t;
                        for (var o = this.combatInfo.spirits, i = o.length, n = 0; n < i && n < 6; n++) {
                            var s = this._spiritItems[n]
                                , e = o[n];
                            null != e && s.gotoAndStop(0 == e.curHP ? 2 : 3)
                        }
                        this.updateProgress()
                    }
                        ,
                        i.updateProgress = function() {
                            if (null == this.combatInfo)
                                return this._loadTxt_tfb.string = "0%",
                                    void (this._bar.progress = 0);
                            var t = this.combatInfo.loadProgress;
                            t > 1 && (t = 1);
                            var o = Math.floor(100 * this.combatInfo.loadProgress);
                            this._loadTxt_tfb.string = o + "%",
                                this._bar.progress = .01 * o
                        }
                        ,
                        i.setNpcIcon = function(t, o, i, n, s) {
                            this._nameTxt.string = o,
                                this._iconMcProxy.setIcon(t, o, i, n, s)
                        }
                        ,
                        i.getCombatInfo = function() {
                            return this.combatInfo
                        }
                        ,
                        i.reset = function() {
                            for (var t = 0; t < 6; t++) {
                                this._spiritItems[t].gotoAndStop(1)
                            }
                            this._iconMcProxy.rest(),
                                this._loadTxt_tfb.string = "0%",
                                this.combatInfo = null
                        }
                        ,
                        i.setPosition = function(t, o) {
                            null != t && null != t && null != o && null != o && this._target && this._target.setPosition(t, o)
                        }
                        ,
                        o(t, [{
                            key: "target",
                            get: function() {
                                return this._target
                            }
                        }]),
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
