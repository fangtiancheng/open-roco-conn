System.register("chunks:///_virtual/MatchCombatMainWin.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseEvent.ts", "./BasePanel.ts", "./UIManager.ts", "./MatchCombatConfig.ts", "./MatchCombatPopUp.ts", "./MatchCombatUIResMain.ts"], (function(t) {
        var n, i, o, a, e, s, c, h, u;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    o = t.cclegacy
                }
                , function(t) {
                    a = t.ViewEvent
                }
                , function(t) {
                    e = t.BasePanel
                }
                , function(t) {
                    s = t.default
                }
                , function(t) {
                    c = t.MatchCombatConfig
                }
                , function(t) {
                    h = t.MatchingPopUp
                }
                , function(t) {
                    u = t.MatchCombatUIResMain
                }
            ],
            execute: function() {
                o._RF.push({}, "b2894wNtClEOZqmOO3QNoGI", "MatchCombatMainWin", void 0);
                t("MatchCombatMainWin", function(t) {
                    n(e, t);
                    var o = e.prototype;
                    function e() {
                        var n;
                        return (n = t.call(this) || this)._mainUI = void 0,
                            n._matchingPopUp = void 0,
                            n
                    }
                    return o.onInit = function() {
                        this.initLog(),
                        this._mainUI || (this._mainUI = new u,
                            this._mainUI.topOwner = this,
                            this._mainUI.addParent(this._view),
                            this._mainUI.addEventListener(a.EVENT, this.onEvent, this)),
                            this._mainUI.show()
                    }
                        ,
                        o.onShow = function() {
                            this._view && s.gRootCanvas.addChild(this._view)
                        }
                        ,
                        o.onUpdate = function(t) {}
                        ,
                        o.onClose = function() {}
                        ,
                        o.onDestroy = function() {}
                        ,
                        o.startMatch = function() {
                            this._mainUI.startMatch()
                        }
                        ,
                        o.showAlert = function(t) {
                            this.onShowPopUI(t)
                        }
                        ,
                        o.onEvent = function(t) {
                            switch (t.name) {
                                case u.ON_CLOSE:
                                    if (c.checkMatching())
                                        return;
                                    this.close();
                                    break;
                                case u.ON_SHOW_POP_UI:
                                    this.onShowPopUI(null == t ? void 0 : t.data)
                            }
                        }
                        ,
                        o.onShowPopUI = function(t) {
                            this._matchingPopUp || (this._matchingPopUp = new h,
                                this._matchingPopUp.topOwner = this,
                                this._matchingPopUp.addParent(this._view)),
                                this._matchingPopUp.show(),
                                this._matchingPopUp.update(t)
                        }
                        ,
                        o.onUIClick = function(t) {
                            t.target.name
                        }
                        ,
                        i(e, [{
                            key: "resBundleKey",
                            get: function() {
                                return ""
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return ""
                            }
                        }]),
                        e
                }(e));
                o._RF.pop()
            }
        }
    }
));
