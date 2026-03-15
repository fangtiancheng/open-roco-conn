System.register("chunks:///_virtual/NewLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Timer.ts", "./TimerEvent.ts", "./DEFINE.ts", "./LoaderEvent.ts", "./ProgressEvent.ts", "./BaseLoader.ts", "./IOErrorEvent.ts", "./BuildLogHelper.ts"], (function(t) {
        var e, o, r, i, n, s, a, _, u, l, c, h;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    o = t.createClass,
                    r = t.assertThisInitialized
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    n = t.Timer
                }
                , function(t) {
                    s = t.default
                }
                , function(t) {
                    a = t.DEFINE
                }
                , function(t) {
                    _ = t.LoaderEvent
                }
                , function(t) {
                    u = t.ProgressEvent
                }
                , function(t) {
                    l = t.BaseLoader
                }
                , function(t) {
                    c = t.IOErrorEvent
                }
                , function(t) {
                    h = t.default
                }
            ],
            execute: function() {
                i._RF.push({}, "78173wwDi1FxrdTT78/G0dd", "NewLoader", void 0);
                var d = t("NewLoader", function(t) {
                    function i(e) {
                        var o;
                        return (o = t.call(this) || this)._content = void 0,
                            o.__currTime = 0,
                            o.__timer = void 0,
                            o.__currTryTimes = 0,
                            o.__loadState = i.NORMAL,
                            o.COUNT_TIME = 12,
                            o.MAX_TRY_TIMES = 3,
                            o.__timer = new n(1e3),
                            o.__timer.addEventListener(s.TIMER, o.onTimeOutError.bind(r(o))),
                            o
                    }
                    e(i, t);
                    var l = i.prototype;
                    return l.canTry = function(t) {
                        if (void 0 === t && (t = !0),
                        this.__currTryTimes < this.MAX_TRY_TIMES)
                            return !0;
                        if (this.__loadState = i.NORMAL,
                            t) {
                            var e = new c(c.IO_ERROR);
                            e.text = "加载文件出错，您的网络环境不稳定，请稍后再试!",
                                this.dispatchEvent(e)
                        }
                        return !1
                    }
                        ,
                        l.onTimeOutError = function(t) {
                            this.__currTime -= 1,
                                console.error("onTimeOutError==>" + this.__currTime),
                            this.__currTime <= 0 && this.tryReload()
                        }
                        ,
                        l.resetTimeOut = function(t, e) {
                            void 0 === t && (t = !0),
                            void 0 === e && (e = -1),
                                this.__currTime = -1 == e ? this.COUNT_TIME : e,
                                this.__timer.reset(),
                            t && this.__timer.start()
                        }
                        ,
                        l.onLoaderComplete = function(t, e) {
                            this.__loadState = i.NORMAL,
                                this.resetTimeOut(!1),
                            1 == h.IS_LOCAL && console.log("onLoaderComplete==>>闭环taskID==>" + e),
                                this._content = t,
                                this.__loadState = i.LOADER,
                                this.dispatchEvent(new u(u.PROGRESS)),
                                this.dispatchEvent(new _(_.COMPLETE))
                        }
                        ,
                        l.onStreamOpen = function(t) {
                            this.dispatchEvent(t)
                        }
                        ,
                        l.onStreamIOError = function(t) {
                            this.canTry(!1) ? this.tryReload() : this.dispatchEvent(t)
                        }
                        ,
                        l.onStreamProgress = function(t) {
                            this.dispatchEvent(t)
                        }
                        ,
                        l.onStreamComplete = function(t, e) {
                            this.__loadState = i.LOADER,
                                this.resetTimeOut(!0, 2),
                            CONFIG.DEBUG && console.log("[NewLoader]", "onStreamComplete and loadBytes url:" + this.__url),
                                this.onLoaderComplete(t, e)
                        }
                        ,
                        l.onComplete = function(t, e) {
                            1 == h.IS_LOCAL && console.log("onComplete==>>闭环taskID==>" + e),
                                this._content = t,
                                this.__loadState = i.LOADER,
                                this.dispatchEvent(new u(u.PROGRESS)),
                                this.dispatchEvent(new _(_.COMPLETE))
                        }
                        ,
                        l.getReload = function() {
                            this.unload(),
                            this.canTry() && (this.__currTryTimes++,
                                this.__loadState = i.STREAM,
                                this.load(this.__url),
                            CONFIG.DEBUG && console.log("[NewLoader]", "###加载中断，重新Get加载！url:" + this.__url))
                        }
                        ,
                        l.postReload = function() {
                            this.unload(),
                            this.canTry() && (this.__currTryTimes++,
                                this.__loadState = i.STREAM,
                                this.load(this.__url),
                                console.log("[NewLoader]", "###加载中断，重新post加载！url:" + this.__url))
                        }
                        ,
                        l.setHasProgress = function(t) {}
                        ,
                        l.tryReload = function() {
                            this.resetTimeOut(!1),
                                this.__loadState == i.LOADER ? this.postReload() : this.getReload()
                        }
                        ,
                        l.load = function(t, e) {
                            var o = this;
                            this.unload(),
                                this.__currTryTimes = 0,
                                this.__url = t,
                                this.__url = a.formatFileVersion(t),
                                this.__loadState = i.STREAM,
                                this.loadRes((function(t, e, r) {
                                        o.__url = "",
                                            t ? o.onStreamIOError(new c(c.IO_ERROR)) : o.onStreamComplete(e, r)
                                    }
                                ))
                        }
                        ,
                        l.load1 = function(t) {
                            var e = this;
                            this.unload(),
                                this.__currTryTimes = 0,
                                this.__urls = [],
                                this.__urls = this.__urls.concat(t),
                                this.__loadState = i.STREAM,
                                this.loadRes1("dynamic", (function(t, o, r) {
                                        e.__urls = [],
                                            t ? e.onStreamIOError(new c(c.IO_ERROR)) : e.onStreamComplete(o, r)
                                    }
                                ))
                        }
                        ,
                        l.loadGaf = function(t, e) {
                            var o = this;
                            this.unload(),
                                this.__currTryTimes = 0,
                                this.__loadState = i.STREAM,
                                this.loadResGaf(t, e, (function(t, e, r) {
                                        o.__urls = [],
                                            t ? o.onStreamIOError(new c(c.IO_ERROR)) : o.onStreamComplete(e, r)
                                    }
                                ))
                        }
                        ,
                        l.close = function() {}
                        ,
                        l.unload = function() {}
                        ,
                        o(i, [{
                            key: "content",
                            get: function() {
                                return this._content
                            }
                        }, {
                            key: "url",
                            get: function() {
                                return this.__url
                            }
                        }, {
                            key: "contentLoaderInfo",
                            get: function() {
                                return this
                            }
                        }, {
                            key: "loaderInfo",
                            get: function() {
                                return this
                            }
                        }]),
                        i
                }(l));
                d.NORMAL = 0,
                    d.STREAM = 1,
                    d.LOADER = 2,
                    i._RF.pop()
            }
        }
    }
));
