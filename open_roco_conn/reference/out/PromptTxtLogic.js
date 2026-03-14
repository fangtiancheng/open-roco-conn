System.register("chunks:///_virtual/PromptTxtLogic.ts", ["cc", "./SpriteFrameSelector.ts", "./Timer.ts", "./TimerEvent.ts"], (function(t) {
        var i, n, o, e, s, r;
        return {
            setters: [function(t) {
                i = t.cclegacy,
                    n = t.Label,
                    o = t.Animation
            }
                , function(t) {
                    e = t.default
                }
                , function(t) {
                    s = t.Timer
                }
                , function(t) {
                    r = t.default
                }
            ],
            execute: function() {
                i._RF.push({}, "4b7b8vgrF9AwYbf8Fu6rSsm", "PromptTxtLogic", void 0);
                t("PromptTxtLogic", function() {
                    function t(t) {
                        this._parent = void 0,
                            this._callBack = void 0,
                            this._timer = void 0,
                            this._totalCount = 0,
                            this._tfb = void 0,
                            this._countDownMC = void 0,
                            this._countDownSpriteFrameSelector = void 0,
                            this._parent = t,
                            this._timer = new s(1e3),
                            this._timer.addEventListener(r.TIMER, this.onTimerHandler.bind(this)),
                            this._tfb = this._parent.getChildByName("prompt_txt").getComponent(n),
                            this._tfb.string = "",
                            this._countDownMC = this._parent.getChildByName("countDownMC").getComponent(o),
                            this._countDownSpriteFrameSelector = this._parent.getChildByName("countDownMC").getComponent(e),
                            this._countDownSpriteFrameSelector.gotoAndStop(1),
                            this.reset()
                    }
                    var i = t.prototype;
                    return i.onTimerHandler = function(t) {
                        this._totalCount -= 1,
                            this._tfb.string = "",
                        0 == this._totalCount && (null != this._callBack && this._callBack(),
                            this._callBack = null,
                            this._timer.reset())
                    }
                        ,
                        i.showCountDown = function(t, i) {
                            void 0 === t && (t = 10),
                            void 0 === i && (i = null),
                                this._tfb.node.active = !0,
                                0 != t ? (this._totalCount = t,
                                    this._callBack = i,
                                    this._countDownMC.play(),
                                    this._timer.start()) : this._timer.stop()
                        }
                        ,
                        i.showTxt = function(t) {
                            this._tfb.node.active = !0,
                                this._timer.reset(),
                                this._timer.stop(),
                                this._tfb.string = t,
                                this._countDownMC.stop(),
                                this._countDownSpriteFrameSelector.gotoAndStop(1)
                        }
                        ,
                        i.hidden = function() {
                            this._tfb.node.active = !1,
                                this._timer.reset(),
                                this._callBack = null
                        }
                        ,
                        i.getTxt = function() {
                            return this._tfb
                        }
                        ,
                        i.reset = function() {
                            this._countDownMC.stop(),
                                this._countDownSpriteFrameSelector.gotoAndStop(1),
                                this._tfb.string = "",
                                this.hidden()
                        }
                        ,
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
