System.register("chunks:///_virtual/GlobalTimer.ts", ["cc", "./BuildLogHelper.ts"], (function(t) {
        var e, i, n;
        return {
            setters: [function(t) {
                e = t.cclegacy,
                    i = t.game
            }
                , function(t) {
                    n = t.default
                }
            ],
            execute: function() {
                e._RF.push({}, "e14d1XT+MJNr7Kf3v7QvlVS", "GlobalTimer", void 0);
                var r = function() {
                    this.name = "",
                        this.interval = 0,
                        this.fun = void 0,
                        this.target = void 0,
                        this.lastExec = 0,
                        this.args = [],
                        this.isRunning = !0
                }
                    , s = t("GlobalTimer", function() {
                    function t() {
                        this._fastInterval = 1e3 / i.getFrameRate(),
                            this._timmersName = new Map,
                            this._timmerList = [],
                            //!先都放到快速集合里面,性能跟不上了再改
                            this._fastTimmerList = []
                    }
                    var e = t.prototype;
                    return e._init = function() {
                        var t = this;
                        setInterval(function() {
                            for (var e = (new Date).valueOf(), i = t._fastTimmerList.length - 1; i >= 0; i--) {
                                var n = t._fastTimmerList[i];
                                1 == n.isRunning && e - n.lastExec > n.interval && t._exec(n)
                            }
                        }
                            .bind(this), this._fastInterval)
                    }
                        ,
                        e._registerTimer = function(t, e, i, s, a, o) {
                            if (void 0 === a && (a = !0),
                            void 0 === o && (o = !0),
                                this._timmersName.has(t))
                                1 == n.IS_LOCAL && console.error("timmer: " + t + " 已经存在");
                            else {
                                1 == n.IS_LOCAL && console.log("timmer: " + t + "  注册");
                                var m = new r;
                                m.name = t,
                                    m.interval = e,
                                    m.fun = i,
                                    m.target = s,
                                    m.lastExec = (new Date).valueOf();
                                for (var c = arguments.length, f = new Array(c > 6 ? c - 6 : 0), l = 6; l < c; l++)
                                    f[l - 6] = arguments[l];
                                f && (m.args = f),
                                    m.args = [],
                                    m.isRunning = o,
                                    this._fastTimmerList.unshift(m),
                                    this._timmersName.set(t, e),
                                a && this._exec(m)
                            }
                        }
                        ,
                        e._unregisterTimer = function(t) {
                            var e = this._fastTimmerList.findIndex((function(e) {
                                    return e.name == t
                                }
                            ));
                            -1 != e && (this._fastTimmerList.splice(e, 1),
                                this._timmersName.delete(t),
                            1 == n.IS_LOCAL && console.log("timmer: " + t + "  反注册"))
                        }
                        ,
                        e._hasTimmer = function(t) {
                            return this._timmersName.has(t)
                        }
                        ,
                        e._exec = function(e) {
                            try {
                                1 == e.isRunning && (t.log_on && console.log("timmer: " + e.name + "  执行"),
                                    e.fun.apply(e.target, e.args))
                            } catch (t) {
                                console.error(t)
                            }
                            e.lastExec = (new Date).valueOf()
                        }
                        ,
                        e._start = function(t, e) {
                            if (void 0 === e && (e = !1),
                            1 == this._hasTimmer(t)) {
                                var i = this._fastTimmerList.findIndex((function(e) {
                                        return e.name == t
                                    }
                                ));
                                -1 != i ? (this._fastTimmerList[i].isRunning = !0,
                                1 == n.IS_LOCAL && console.log("timmer: " + t + "  start"),
                                1 == e && this._exec(this._fastTimmerList[i])) : 1 == n.IS_LOCAL && console.error("GlobalTimer start error, can not find timmer=>>" + t)
                            } else
                                1 == n.IS_LOCAL && console.error("GlobalTimer start error, can not find timmer=>>" + t)
                        }
                        ,
                        e._stop = function(t) {
                            if (1 == this._hasTimmer(t)) {
                                var e = this._fastTimmerList.findIndex((function(e) {
                                        return e.name == t
                                    }
                                ));
                                -1 != e ? this._fastTimmerList[e].isRunning = !1 : console.error("GlobalTimer stop error, can not find timmer=>>" + t)
                            } else
                                console.error("GlobalTimer stop error, can not find timmer=>>" + t)
                        }
                        ,
                        t.init = function() {
                            t._instance || (t._instance = new t,
                                t._instance._init())
                        }
                        ,
                        t.registerTimer = function(e, i, n, r, s, a) {
                            var o;
                            void 0 === s && (s = !0),
                            void 0 === a && (a = !0);
                            for (var m = arguments.length, c = new Array(m > 6 ? m - 6 : 0), f = 6; f < m; f++)
                                c[f - 6] = arguments[f];
                            (o = t._instance)._registerTimer.apply(o, [e, i, n, r, s, a].concat(c))
                        }
                        ,
                        t.unregisterTimer = function(e) {
                            t._instance._unregisterTimer(e)
                        }
                        ,
                        t.hasTimmer = function(e) {
                            return t._instance._hasTimmer(e)
                        }
                        ,
                        t.start = function(e, i) {
                            void 0 === i && (i = !1),
                                t._instance._start(e, i)
                        }
                        ,
                        t.stop = function(e) {
                            t._instance._stop(e)
                        }
                        ,
                        t
                }());
                s.log_on = !1,
                    s._instance = void 0,
                    e._RF.pop()
            }
        }
    }
));
