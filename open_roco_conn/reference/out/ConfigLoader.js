System.register("chunks:///_virtual/ConfigLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DEFINE.ts", "./URLLoaderEvent.ts", "./EventDispatcher.ts", "./URLLoader.ts", "./URLRequest.ts", "./ErrorEvent.ts", "./IOErrorEvent.ts"], (function(r) {
        var t, e, n, i, o, s, u, a, c, d, l;
        return {
            setters: [function(r) {
                t = r.inheritsLoose,
                    e = r.assertThisInitialized
            }
                , function(r) {
                    n = r.cclegacy,
                        i = r.Event
                }
                , function(r) {
                    o = r.DEFINE
                }
                , function(r) {
                    s = r.URLLoaderEvent
                }
                , function(r) {
                    u = r.EventDispatcher
                }
                , function(r) {
                    a = r.URLLoader
                }
                , function(r) {
                    c = r.URLRequest
                }
                , function(r) {
                    d = r.ErrorEvent
                }
                , function(r) {
                    l = r.IOErrorEvent
                }
            ],
            execute: function() {
                n._RF.push({}, "9bf79lnuRJNMLThMJrRtV1W", "ConfigLoader", void 0);
                var h = r("ConfigLoader", function(r) {
                    function n(t) {
                        var n;
                        return void 0 === t && (t = null),
                            (n = r.call(this) || this).ready = !1,
                            n.urlLoader = void 0,
                            n.currURL = "",
                            n.currTimes = 0,
                            n.conf = void 0,
                            n.configName = "",
                            n.analyse(t),
                            n.urlLoader = new a,
                            n.urlLoader.addEventListener(s.COMPLETE, n.onConfStatesHandler, e(n)),
                            n.urlLoader.addEventListener(l.IO_ERROR, n.onConfStatesHandler, e(n)),
                            n
                    }
                    t(n, r);
                    var u = n.prototype;
                    return u.onConfStatesHandler = function(r) {
                        if (r.type == s.COMPLETE && (this.currURL = "",
                            this.currTimes = 0,
                            this.analyse(this.urlLoader.data.json)))
                            this.dispatchEvent(new i(n.CONF_LOAD_OK));
                        else if (!this.reload()) {
                            this.currURL = "",
                                this.currTimes = 0;
                            var t = new d(n.CONF_LOAD_ERROR);
                            t.text = "配置文件加载失败!",
                                this.dispatchEvent(t)
                        }
                    }
                        ,
                        u.reload = function() {
                            return this.currTimes++,
                            !(this.currTimes > n.MAX_TRY_TIMES) && (this.urlLoader.load(new c(o.formatFileVersion(this.currURL))),
                                !0)
                        }
                        ,
                        u.reloadByBundle = function() {
                            return this.currTimes++,
                            !(this.currTimes > n.MAX_TRY_TIMES) && (this.urlLoader.loadByBundle(new c(o.formatFileVersion(this.currURL))),
                                !0)
                        }
                        ,
                        u.isReady = function() {
                            return this.ready
                        }
                        ,
                        u.analyse = function(r) {
                            return this.conf = r,
                                !0
                        }
                        ,
                        u.loadConfByBundle = function(r) {
                            this.currTimes = 0,
                                this.currURL = r,
                                this.conf = "",
                                this.reloadByBundle()
                        }
                        ,
                        u.loadConf = function(r) {
                            this.currTimes = 0,
                                this.currURL = r,
                                this.conf = "",
                                this.reload()
                        }
                        ,
                        u.getConf = function() {
                            return this.conf
                        }
                        ,
                        u.reset = function() {
                            this.currTimes = 0,
                                this.currURL = "",
                                this.conf = ""
                        }
                        ,
                        u.dispose = function() {
                            this.urlLoader && (this.urlLoader.removeEventListener(s.COMPLETE, this.onConfStatesHandler, this),
                                this.urlLoader.removeEventListener(l.IO_ERROR, this.onConfStatesHandler, this),
                                this.urlLoader = null),
                                this.currTimes = 0,
                                this.currURL = null,
                                this.conf = null
                        }
                        ,
                        n
                }(u));
                h.CONF_LOAD_OK = "confLoadOk",
                    h.CONF_LOAD_ERROR = "confLoadError",
                    h.MAX_TRY_TIMES = 3,
                    n._RF.pop()
            }
        }
    }
));
