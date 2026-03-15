System.register("chunks:///_virtual/CtlActCoolDown.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UICtlBase.ts", "./Timer.ts", "./TimerEvent.ts", "./ActivityAPI.ts"], (function(t) {
        var i, e, m, o, n, s, r, c, u;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass,
                    m = t.assertThisInitialized
            }
                , function(t) {
                    o = t.cclegacy,
                        n = t.Label
                }
                , function(t) {
                    s = t.UICtlBase
                }
                , function(t) {
                    r = t.Timer
                }
                , function(t) {
                    c = t.default
                }
                , function(t) {
                    u = t.ActivityAPI
                }
            ],
            execute: function() {
                o._RF.push({}, "3fe85yHSElOIZO2j588J7Hv", "CtlActCoolDown", void 0);
                t("CtlActCoolDown", function(t) {
                    function o(i, e, o, s, _) {
                        var h;
                        return void 0 === o && (o = null),
                        void 0 === s && (s = null),
                        void 0 === _ && (_ = null),
                            (h = t.call(this, i, 0, "", o) || this).m_timer = void 0,
                            h.m_count = void 0,
                            h.m_onOver = void 0,
                            h.m_format = void 0,
                            h.m_timeTxt = void 0,
                            h.m_onTick = void 0,
                            h.autoDispose = !0,
                            h.m_onOver = e,
                            h.m_onTick = _,
                            h.m_format = null != s ? s : u.timeFormat,
                        i && i.getChildByName("txtCD") && (h.m_timeTxt = i.getChildByName("txtCD").getComponent(n)),
                            h.m_timer = new r(1050),
                            h.m_timer.addEventListener(c.TIMER, h.onTime.bind(m(h))),
                            h.time = 0,
                            h
                    }
                    i(o, t);
                    var s = o.prototype;
                    return s.onTime = function(t) {
                        this.m_count--,
                        this.m_timeTxt && (this.m_timeTxt.string = Object(this.m_format(this.m_count)).timeStr),
                        null != this.m_onTick && this.m_onTick(this.m_count),
                        this.m_count <= 0 && (this.m_timer.stop(),
                            this.m_onOver())
                    }
                        ,
                        s.pause = function() {
                            this.m_timer.stop()
                        }
                        ,
                        s.resume = function() {
                            this.m_timer.start()
                        }
                        ,
                        s.dispose = function() {
                            0 != this.autoDispose && (this.m_timer && (this.m_timer.removeEventListener(c.TIMER, this.onTime.bind(this)),
                                this.m_timer.stop(),
                                this.m_timer = null),
                                t.prototype.dispose.call(this))
                        }
                        ,
                        e(o, [{
                            key: "time",
                            get: function() {
                                return this.m_count
                            },
                            set: function(t) {
                                this.m_count = t,
                                    this.m_count <= 0 ? (this.m_timer && this.m_timer.stop(),
                                    this.m_timeTxt && (this.m_timeTxt.string = "")) : this.m_count > 0 && (this.m_timeTxt && (this.m_timeTxt.string = Object(this.m_format(this.m_count)).timeStr),
                                    this.m_timer && this.m_timer.start())
                            }
                        }]),
                        o
                }(s));
                o._RF.pop()
            }
        }
    }
));
