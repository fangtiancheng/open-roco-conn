System.register("chunks:///_virtual/SimpleLoading1.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts", "./Timer.ts", "./TimerEvent.ts", "./WindowBase.ts", "./WindowType.ts"], (function(t) {
        var e, i, s, n, r, o, a, c, p;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy,
                        s = t.Animation,
                        n = t.ProgressBar
                }
                , function(t) {
                    r = t.default
                }
                , function(t) {
                    o = t.Timer
                }
                , function(t) {
                    a = t.default
                }
                , function(t) {
                    c = t.WindowBase
                }
                , function(t) {
                    p = t.WindowType
                }
            ],
            execute: function() {
                i._RF.push({}, "0a9a5lGnppJKpomlDltZG7w", "SimpleLoading1", void 0);
                t("SimpleLoading1", function(t) {
                    function i(e, i) {
                        var o;
                        return void 0 === i && (i = !1),
                            (o = t.call(this) || this).bg = void 0,
                            o.content = void 0,
                            o._target = void 0,
                            o._progressBar = void 0,
                            o._timer1 = void 0,
                            o._progress = 0,
                            o._target = r.Instance.getPrefabByName("base/simpleLoadingUI1"),
                            o.addChild(o._target),
                            o.content = o._target.getChildByName("animation").getComponent(s),
                            o._progressBar = o._target.getChildByName("bar").getComponent(n),
                            o.initialize(e, null, null, null, i),
                            o.center(),
                            o
                    }
                    e(i, t);
                    var c = i.prototype;
                    return c.close = function() {
                        t.prototype.close.call(this),
                            this.content.stop()
                    }
                        ,
                        c.show = function() {
                            t.prototype.show.call(this),
                                this.content.play(),
                                this.startTimer()
                        }
                        ,
                        c.hide = function() {
                            this.content.stop(),
                                t.prototype.hide.call(this),
                                this.stopTimer()
                        }
                        ,
                        c.setProgress = function(t) {}
                        ,
                        c.setTipText = function(t) {}
                        ,
                        c.setLabel = function(t, e) {}
                        ,
                        c.setBackGround = function(t) {}
                        ,
                        c.setCancelEnabled = function(t, e) {}
                        ,
                        c.getType = function() {
                            return p.SIMPLE_LOADING1
                        }
                        ,
                        c.startTimer = function() {
                            this._timer1 || (this._timer1 = new o(20),
                                this._timer1.addEventListener(a.TIMER, this.action1.bind(this))),
                                this._progress = 0,
                                this.progressBar(),
                                this._timer1.start()
                        }
                        ,
                        c.stopTimer = function() {
                            this._timer1 && (this._timer1.stop(),
                                this._timer1.removeEventListener(a.TIMER, this.action1.bind(this)),
                                this._timer1 = null),
                                this._progress = 0
                        }
                        ,
                        c.action1 = function(t) {
                            this._progress = this._progress + .0032,
                            this._progress > 1 && (this._progress = .002),
                                this.progressBar()
                        }
                        ,
                        c.progressBar = function() {
                            this._progressBar && (this._progressBar.progress = this._progress)
                        }
                        ,
                        i
                }(c));
                i._RF.pop()
            }
        }
    }
));
