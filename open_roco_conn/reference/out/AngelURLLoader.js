System.register("chunks:///_virtual/AngelURLLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CALLBACK.ts", "./CallbackCenter.ts", "./Constants.ts", "./URLLoaderEvent.ts", "./global.ts", "./IOErrorEvent.ts", "./NetManager.ts", "./URLLoader.ts"], (function(e) {
        var t, n, s, i, o, r, a, u, l, L, h, c;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass,
                    s = e.assertThisInitialized
            }
                , function(e) {
                    i = e.cclegacy
                }
                , function(e) {
                    o = e.CALLBACK
                }
                , function(e) {
                    r = e.CallbackCenter
                }
                , function(e) {
                    a = e.Constants
                }
                , function(e) {
                    u = e.URLLoaderEvent
                }
                , function(e) {
                    l = e.__global
                }
                , function(e) {
                    L = e.IOErrorEvent
                }
                , function(e) {
                    h = e.NetManager
                }
                , function(e) {
                    c = e.URLLoader
                }
            ],
            execute: function() {
                i._RF.push({}, "573839TBZRK0aik7j2nDuNp", "AngelURLLoader", void 0);
                var f = e("AngelURLLoader", function(e) {
                    function i(t) {
                        var n;
                        return (n = e.call(this) || this)._serverInfo = void 0,
                            n.requestsList = void 0,
                            n.isLoading = !1,
                            n.noCache = !1,
                            n.isQueue = !0,
                            n.url = void 0,
                            n._serverInfo = t,
                            n.requestsList = [],
                            n.addEventListener(u.COMPLETE, n.onLoadComplete, s(n)),
                            n.addEventListener(L.IO_ERROR, n.onLoadError, s(n)),
                            n
                    }
                    t(i, e);
                    var c = i.prototype;
                    return c.onLoadComplete = function(e) {
                        this.isLoading = !1,
                            this.nextRequest()
                    }
                        ,
                        c.onLoadError = function(e) {
                            this.isLoading = !1,
                                this.nextRequest()
                        }
                        ,
                        c.nextRequest = function() {
                            if (!h.BeKickedOff && 0 != this.requestsList.length) {
                                var t = this.requestsList.shift();
                                this.url = t.url,
                                    r.notifyEvent(o.ANGEL_NET_ON_SEND_A_CGI_RAW_DATA, [t, this], this),
                                    r.notifyEvent(o.ANGEL_NET_ON_SEND_A_RAW_DATA, [t, this], this),
                                    e.prototype.load.call(this, t),
                                    this.isLoading = !0
                            }
                        }
                        ,
                        c.load = function(e) {
                            var t = e.url
                                , n = "";
                            null != this.serverInfo ? n = "angel_uin=" + this.serverInfo.uin + "&angel_key=" + this.serverInfo.sessionKey : console.error("[AngelURLLoader] serverInfo为空!!"),
                                -1 != t.indexOf("?") ? t += "&" + n : t += "?" + n,
                            this.noCache && (t += "&time=" + (new Date).getTime());
                            var s = this.serverInfo;
                            if (s && (s.pskey || s.skey)) {
                                try {
                                    var i = t.substring(t.lastIndexOf("/") + 1, t.lastIndexOf("?"))
                                } catch (e) {}
                                if ("qgame_gift" == i || "invite" == i || "homelittlepaper" == i || "sendspiritegg" == i || "sign2" == i) {
                                    for (var o = s.pskey ? s.pskey : s.skey, r = "", a = 0; a < o.length; a++)
                                        r += "%" + o.charCodeAt(a).toString(16);
                                    t += "&unkown=" + r
                                }
                            }
                            CONFIG.DEBUG && console.log("[AngelURLLoader] 请求CGI:" + t),
                                e.url = t,
                                this.requestsList.push(e),
                            this.isLoading && this.isQueue || this.nextRequest()
                        }
                        ,
                        c.setNoCache = function(e) {
                            this.noCache = e
                        }
                        ,
                        c.setTimeOut = function(e, t) {}
                        ,
                        c.setIsQueue = function(e) {
                            this.isQueue = e
                        }
                        ,
                        c.getLatestURL = function() {
                            return this.url
                        }
                        ,
                        c.destroy = function() {
                            this.removeEventListener(u.COMPLETE, this.onLoadComplete, this),
                                this.removeEventListener(L.IO_ERROR, this.onLoadError, this)
                        }
                        ,
                        n(i, [{
                            key: "serverInfo",
                            get: function() {
                                return l.SysAPI.getGDataAPI().getGlobalVal(a.CUR_SERVER_INFO)
                            }
                        }]),
                        i
                }(c));
                f.sm_everGetClass = void 0,
                    f.sm_angelHostSwitcherClass = void 0,
                    i._RF.pop()
            }
        }
    }
));
