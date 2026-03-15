System.register("chunks:///_virtual/MatchCombatPopUp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BasePanel.ts", "./UIManager.ts"], (function(t) {
        var n, e, i, o, s, a, h;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    i = t.cclegacy,
                        o = t.Button,
                        s = t.Label
                }
                , function(t) {
                    a = t.BasePanel
                }
                , function(t) {
                    h = t.default
                }
            ],
            execute: function() {
                i._RF.push({}, "72219KAuftOxLTSycrBGEhK", "MatchCombatPopUp", void 0);
                t("MatchingPopUp", function(t) {
                    function i() {
                        var n;
                        return (n = t.call(this) || this)._topOwner = void 0,
                            n._matchBtn = void 0,
                            n._closeBtn = void 0,
                            n._message = void 0,
                            n.__data = void 0,
                            n
                    }
                    n(i, t);
                    var a = i.prototype;
                    return a.onInit = function() {
                        this.initLog(),
                            this._matchBtn = this._view.getChildByName("continueBtn").getComponent(o),
                            this._matchBtn.node.on(o.EventType.CLICK, this.onClickMatch, this),
                            this._closeBtn = this._view.getChildByName("closeBtn").getComponent(o),
                            this._closeBtn.node.on(o.EventType.CLICK, this.onClickCloseBtn, this),
                            this._message = this._view.getChildByName("tfMessage").getComponent(s),
                        this.__data && this.update()
                    }
                        ,
                        a.onShow = function() {
                            this._view && h.gRootCanvas.addChild(this._view)
                        }
                        ,
                        a.onUpdate = function(t) {
                            t && (this.__data = t),
                            this._view && this.__data && (this._message.string = this.__data)
                        }
                        ,
                        a.onClose = function() {}
                        ,
                        a.onDestroy = function() {
                            this._ui = null
                        }
                        ,
                        a.update = function(t) {
                            t && (this.__data = t),
                            this._view && this.__data && (this._message.string = this.__data)
                        }
                        ,
                        a.onClickMatch = function(t) {
                            this._topOwner.startMatch(),
                                this.close()
                        }
                        ,
                        a.onClickCloseBtn = function(t) {
                            this.close()
                        }
                        ,
                        e(i, [{
                            key: "topOwner",
                            set: function(t) {
                                this._topOwner = t
                            }
                        }, {
                            key: "resBundleKey",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return "prefabs/match/MatchPopUpUI_1600"
                            }
                        }]),
                        i
                }(a));
                i._RF.pop()
            }
        }
    }
));
