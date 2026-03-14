System.register("chunks:///_virtual/CGILoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./URLLoaderEvent.ts", "./EventDispatcher.ts", "./URLRequest.ts", "./IOErrorEvent.ts", "./Xml2Json.ts", "./CGIEvent.ts", "./global.ts", "./Constants.ts", "./SpiritStorageApp.ts"], (function(t) {
        var e, n, o, i, r, a, s, l, u, v, d, c;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.assertThisInitialized
            }
                , function(t) {
                    o = t.cclegacy
                }
                , function(t) {
                    i = t.URLLoaderEvent
                }
                , function(t) {
                    r = t.EventDispatcher
                }
                , function(t) {
                    a = t.URLRequest
                }
                , function(t) {
                    s = t.IOErrorEvent
                }
                , function(t) {
                    l = t.Xml2Json
                }
                , function(t) {
                    u = t.CGIEvent
                }
                , function(t) {
                    v = t.__global
                }
                , function(t) {
                    d = t.Constants
                }
                , function(t) {
                    c = t.SpiritStorageApp
                }
            ],
            execute: function() {
                o._RF.push({}, "e87a9DLkB5KL7zWYtrIkrqa", "CGILoader", void 0);
                t("CGILoader", function(t) {
                    function o(e, o) {
                        var r;
                        return (r = t.call(this) || this).loader = void 0,
                            r.cgiRoot = void 0,
                            r.xevent = void 0,
                            r.cgiRoot = e,
                            r.loader = o,
                            r.loader.addEventListener(i.COMPLETE, r.loadDataComplete, n(r)),
                            r.loader.addEventListener(s.IO_ERROR, r.loadDataError, n(r)),
                            r
                    }
                    e(o, t);
                    var r = o.prototype;
                    return r.loadDataComplete = function(t) {
                        var e = l.getJson(this.loader.data);
                        this.xevent.data = e;
                        var n = this.xevent;
                        this.xevent = null,
                            this.dispatchEvent(n)
                    }
                        ,
                        r.loadDataError = function(t) {
                            var e = new u(u.GOT_ERROR);
                            e.msg = t.text,
                                this.xevent = null,
                                this.dispatchEvent(e)
                        }
                        ,
                        r.sendData = function(t, e) {
                            if (void 0 === e && (e = null),
                            null == this.xevent) {
                                this.xevent = new u(u.COMPLETE,t,e);
                                var n = this.cgiRoot + t;
                                if (null != e)
                                    for (var o in e)
                                        n += "&" + o + "=" + e[o];
                                this.loader.load(new a(n))
                            }
                        }
                        ,
                        r.sendData1 = function(t, e, n) {
                            if (void 0 === n && (n = null),
                            null == this.xevent) {
                                "number" == typeof e && (e += ""),
                                    this.xevent = new u(u.COMPLETE,e,n);
                                var o = this.cgiRoot + t;
                                if (null != n)
                                    for (var i in n)
                                        o += "&" + i + "=" + n[i];
                                console.error("" + o),
                                    this.loader.load(new a(o))
                            }
                        }
                        ,
                        r.dispose = function() {
                            this.loader && (this.loader.removeEventListener(i.COMPLETE, this.loadDataComplete, this),
                                this.loader.removeEventListener(s.IO_ERROR, this.loadDataError, this)),
                                this.loader = null,
                                this.xevent = null
                        }
                        ,
                        r.getSendObj = function(t) {
                            void 0 === t && (t = null);
                            var e = new Object
                                , n = v.SysAPI.getGDataAPI().getGlobalVal(d.CUR_SERVER_INFO);
                            if (e.unkown = n.pskey ? n.pskey : n.skey,
                                e.skey = n.skey,
                                e.platfrom = c.getPlatfromStr(),
                            null != t)
                                for (var o in t)
                                    e[o] = t[o];
                            return e
                        }
                        ,
                        o
                }(r));
                o._RF.pop()
            }
        }
    }
));
