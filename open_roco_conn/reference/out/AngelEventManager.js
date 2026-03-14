System.register("chunks:///_virtual/AngelEventManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GlobalAPI.ts", "./BuildLogHelper.ts", "./Timer.ts", "./TimerEvent.ts", "./AngelSysEvent.ts", "./CmdExeDes.ts", "./EventDispatcher.ts"], (function(e) {
        var t, n, i, r, s, o, c, d, a;
        return {
            setters: [function(e) {
                t = e.createClass
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    i = e.GlobalAPI
                }
                , function(e) {
                    r = e.default
                }
                , function(e) {
                    s = e.Timer
                }
                , function(e) {
                    o = e.default
                }
                , function(e) {
                    c = e.AngelSysEvent
                }
                , function(e) {
                    d = e.CmdExeDes
                }
                , function(e) {
                    a = e.EventDispatcher
                }
            ],
            execute: function() {
                n._RF.push({}, "bc3572iYeZKa6Z2idrF6ieF", "AngelEventManager", void 0),
                    e("AngelEventManager", function() {
                        function e() {
                            this._globalDispatcher = void 0,
                                this._commands = void 0,
                                this._cmdListeners = void 0,
                                this._timer = void 0,
                                this._renderTimer = void 0,
                                this._sprite = void 0,
                                this._lastTime = 0,
                                this._globalDispatcher = new a,
                                this._commands = new Map,
                                this._cmdListeners = new Map,
                                this._timer = new s(e.TICK_DELAY),
                                this._timer.start(),
                                this._sprite = new a,
                                this._renderTimer = new s(70),
                                this._renderTimer.start(),
                                this._lastTime = i.getTimer()
                        }
                        var n = e.prototype;
                        return n.onEnterFrame = function(e) {
                            var t = i.getTimer()
                                , n = t - this._lastTime;
                            CONFIG.DEBUG && console.log("===>>>>" + n),
                                this._lastTime = t
                        }
                            ,
                            n.setRenderTimer = function(e) {
                                void 0 === e && (e = !1),
                                    e ? this._renderTimer.start() : this._renderTimer.stop()
                            }
                            ,
                            n.addTickListener = function(e) {}
                            ,
                            n.removeTickListener = function(e) {}
                            ,
                            n.addRenderListener = function(e) {
                                null != e && this._renderTimer.addEventListener(o.TIMER, e.onRender)
                            }
                            ,
                            n.removeRenderListener = function(e) {
                                null != e && this._renderTimer.removeEventListener(o.TIMER, e.onRender)
                            }
                            ,
                            n.addCmdListener = function(e, t) {
                                if (null == t || !t && !t)
                                    throw new Error("注册的CMDLISTENER不是ICmdListener或者IPlugProgram!!");
                                if (null != this._cmdListeners[e])
                                    throw new Error("注册两个ICmdListener都注册了" + e + "的侦听!");
                                this._cmdListeners[e] = t,
                                1 == r.IS_LOCAL && console.info("addCmdListener==" + e)
                            }
                            ,
                            n.removeCmdListener = function(e) {
                                delete this._cmdListeners[e]
                            }
                            ,
                            n.cmdExecuted = function(e, t) {
                                console.info("cmdExecuted==" + e);
                                var n = this._cmdListeners[e];
                                if (null != n)
                                    return console.info("cmdExecuted==find==" + e),
                                        void n.call(t);
                                console.error("没有找到命令侦听对象==cmdExecuted==find==" + e);
                                var i = new c(c.CMDLIS_NOT_FOUND)
                                    , r = new d;
                                r.cmdType = e,
                                    r.arg = t,
                                    i.data = r,
                                    this.angelEventDispatcher.dispatchEvent(i)
                            }
                            ,
                            t(e, [{
                                key: "angelEventDispatcher",
                                get: function() {
                                    return this._globalDispatcher
                                }
                            }]),
                            e
                    }()).TICK_DELAY = 30,
                    n._RF.pop()
            }
        }
    }
));
