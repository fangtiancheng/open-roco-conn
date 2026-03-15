System.register("chunks:///_virtual/MAlert.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeExtendEx.ts", "./WindowBase.ts", "./WindowCloseAction.ts"], (function(t) {
        var l, i, n, e, s, o;
        return {
            setters: [function(t) {
                l = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy,
                        n = t.NodeEventType,
                        e = t.Label
                }
                , function(t) {
                    t.NodeExtendEx
                }
                , function(t) {
                    s = t.WindowBase
                }
                , function(t) {
                    o = t.WindowCloseAction
                }
            ],
            execute: function() {
                i._RF.push({}, "17347mhMt9M96GHhlMuUEYY", "MAlert", void 0);
                t("MAlert", function(t) {
                    function i(l) {
                        var i;
                        return (i = t.call(this) || this)._ui = void 0,
                            i.content = void 0,
                            i._okBtn = void 0,
                            i._cancelBtn = void 0,
                            i._closeBtn = void 0,
                            i._tileTxt = void 0,
                            i._msgTxt = void 0,
                            i._okHandler = void 0,
                            i._cancelHandler = void 0,
                            i.initialize(l, null, null, null, !0),
                            i
                    }
                    l(i, t);
                    var s = i.prototype;
                    return s.init = function(t, l, i, s, o) {
                        void 0 === l && (l = ""),
                        void 0 === i && (i = ""),
                        void 0 === s && (s = null),
                        void 0 === o && (o = null),
                        t.getChildByName("okBtn") && (this._okBtn = t.getChildByName("okBtn"),
                            this._okBtn.on(n.TOUCH_END, this.clickOkHnadler, this)),
                        t.getChildByName("cancelBtn") && (this._cancelBtn = t.getChildByName("cancelBtn"),
                            this._cancelBtn.on(n.TOUCH_END, this.clickCancelHnadler, this)),
                        t.getChildByName("closeBtn") && (this._closeBtn = t.getChildByName("closeBtn"),
                            this._closeBtn.on(n.TOUCH_END, this.clickCloseHnadler, this)),
                        t.getChildByName("tileTxt") && (this._tileTxt = t.getChildByName("tileTxt").getComponent(e),
                            this._tileTxt.string = l),
                        t.getChildByName("msgTxt") && (this._msgTxt = t.getChildByName("msgTxt").getComponent(e),
                            this._msgTxt.string = i),
                            this._okHandler = s,
                            this._cancelHandler = o,
                            this._ui = t
                    }
                        ,
                        s.show = function() {
                            t.prototype.show.call(this),
                            null != this._ui && (this.addChild(this._ui),
                                this.center())
                        }
                        ,
                        s.clickOkHnadler = function(t) {
                            null != this._okHandler && this._okHandler(),
                                this.closeHandler()
                        }
                        ,
                        s.clickCancelHnadler = function(t) {
                            null != this._cancelHandler && this._cancelHandler(),
                                this.closeHandler()
                        }
                        ,
                        s.closeHandler = function() {
                            this._closeAction == o.CLOSE ? (t.prototype.close.call(this),
                            null != this._okBtn && this._okBtn.off(n.TOUCH_END, this.clickOkHnadler, this),
                            null != this._cancelBtn && this._cancelBtn.off(n.TOUCH_END, this.clickCancelHnadler, this),
                            null != this._closeBtn && this._closeBtn.off(n.TOUCH_END, this.clickCloseHnadler, this),
                                this._okBtn = null,
                                this._cancelBtn = null,
                                this._closeBtn = null,
                                this._okHandler = null,
                                this._cancelHandler = null,
                                this._msgTxt = null,
                                this._tileTxt = null,
                                this._ui = null) : this._closeAction == o.HIDE && (t.prototype.hide.call(this),
                            null != this._msgTxt && (this._msgTxt.string = ""),
                            null != this._tileTxt && (this._tileTxt.string = ""))
                        }
                        ,
                        s.clickCloseHnadler = function(t) {
                            this.closeHandler()
                        }
                        ,
                        i
                }(s));
                i._RF.pop()
            }
        }
    }
));
