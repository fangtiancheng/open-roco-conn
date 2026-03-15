System.register("chunks:///_virtual/CGI1.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GlobalAPI.ts", "./TimerHelper.ts", "./DEFINE.ts", "./URLLoader.ts", "./URLRequest.ts", "./IOErrorEvent.ts", "./global.ts", "./URLRequestMethod.ts", "./BuildLogHelper.ts", "./URLLoaderEvent.ts", "./XML.ts", "./CGIResult.ts", "./Xml2Json.ts"], (function(t) {
        var e, i, n, s, r, o, a, l, c, u, h, _, d, v, E, L;
        return {
            setters: [function(t) {
                e = t.createForOfIteratorHelperLoose
            }
                , function(t) {
                    i = t.cclegacy,
                        n = t.Event
                }
                , function(t) {
                    s = t.GlobalAPI
                }
                , function(t) {
                    r = t.TimerHelper
                }
                , function(t) {
                    o = t.DEFINE
                }
                , function(t) {
                    a = t.URLLoader
                }
                , function(t) {
                    l = t.URLRequest
                }
                , function(t) {
                    c = t.IOErrorEvent
                }
                , function(t) {
                    u = t.__global
                }
                , function(t) {
                    h = t.URLRequestMethod
                }
                , function(t) {
                    _ = t.default
                }
                , function(t) {
                    d = t.URLLoaderEvent
                }
                , function(t) {
                    v = t.XML
                }
                , function(t) {
                    E = t.CGIResult
                }
                , function(t) {
                    L = t.Xml2Json
                }
            ],
            execute: function() {
                i._RF.push({}, "8ee23ZMriJE96Nqsu9tcLFb", "CGI1", void 0);
                var m = t("CGI1", function() {
                    function t(t, e, i, n, r, o, v) {
                        void 0 === o && (o = h.GET),
                        void 0 === v && (v = !1),
                            this.param = void 0,
                            this._urlL1 = void 0,
                            this._callBack = void 0,
                            this._initPath = void 0,
                            this._path = void 0,
                            this._isShowLoadingIcon = !1,
                            this._useCommonErrorAert = void 0,
                            this._isEncrypt = void 0,
                            this.startTime = void 0,
                            this._initPath = t,
                            this._isEncrypt = v,
                            this._isEncrypt,
                            o == h.GET ? (this._urlL1 = u.SysAPI.getNetSysAPI().createURLLoader(!0),
                                this._urlL1.setIsQueue(!1)) : o == h.POST && (this._urlL1 = new a),
                            this._urlL1.addEventListener(d.COMPLETE, this.completeHandler1, this),
                            this._urlL1.addEventListener(c.IO_ERROR, this.errorHandler, this),
                            this._callBack = e;
                        var E = new l;
                        o == h.GET ? E.url = t : o == h.POST && _.IS_LOCAL,
                            this._urlL1.load(E),
                            this.param = i,
                            this._path = t,
                            this._isShowLoadingIcon = r,
                            this._useCommonErrorAert = n,
                            this.startTime = s.getTimer(),
                        this._isShowLoadingIcon && this.setWaiting(!0)
                    }
                    t.call = function(e, i, n, s, r, a, l) {
                        void 0 === n && (n = null),
                        void 0 === s && (s = !0),
                        void 0 === r && (r = !1),
                        void 0 === a && (a = !1),
                        void 0 === l && (l = !1);
                        var c, u = o.CGI_ROOT;
                        if (-1 != e.indexOf("/") && (u = u.replace("cgi-bin/", "")),
                        null == n) {
                            var _ = e.indexOf("&");
                            -1 == _ && (_ = e.length),
                                n = e.substring(0, _)
                        }
                        return r ? ((c = t._dic[u + e]) || (c = new t(u + e,i,n,s,a,h.GET,l),
                            t._dic[u + e] = c),
                            c) : c = new t(u + e,i,n,s,a,h.GET,l)
                    }
                        ,
                        t.checkTimeOutFuc = function() {
                            for (var i, o, a = e(this._dic.values()); !(o = a()).done; ) {
                                var l = o.value;
                                i++,
                                s.getTimer() - l.startTime > t.REQUEST_TIME_OUT && l.errorHandler(new n("CGIRquestTimeOut"))
                            }
                            0 == i && r.disposeTimer("CGI_TIME_OUT_CHECK_TIMER")
                        }
                    ;
                    var i = t.prototype;
                    return i.completeHandler1 = function(e) {
                        var i, n = "";
                        this.setWaiting(!1);
                        try {
                            this._isEncrypt || (n = L.getJson(this._urlL1.data)),
                                i = new v(n).data
                        } catch (e) {
                            i = null
                        }
                        if (1 == _.IS_LOCAL && console.log("onCgiEvent", this._path, "useCommonErrorAert=" + this._useCommonErrorAert, "listener=" + (null != this._callBack), "e.type=" + e.type),
                        1 == _.IS_LOCAL && console.log("onCgiEvent", "e.data=\n" + n),
                            delete t._dic[this._initPath],
                        this._useCommonErrorAert && i) {
                            var s = new E(i);
                            0 != s.value && (console.error("onCgiEvent", "ret=" + s.value, "msg=" + s.msg),
                            s.msg && u.showMsgBox(s.msg))
                        }
                        this._callBack && this._callBack(i, this.param),
                            this.remove()
                    }
                        ,
                        i.errorHandler = function(e) {
                            this.setWaiting(!1),
                                delete t._dic[this._initPath],
                                console.error("onCgiEvent", "e.type=" + e.type),
                            this._useCommonErrorAert && u.showMsgBox("哎呀，出现了网络故障：" + e.type),
                            this._callBack && this._callBack(null, this.param),
                                this.remove()
                        }
                        ,
                        i.setWaiting = function(t) {
                            var e = u.SysAPI.getUISysAPI().commUIManager;
                            t ? e.createMiniLoading() : e.closeMiniLoading()
                        }
                        ,
                        i.remove = function() {
                            this._urlL1.removeEventListener(d.COMPLETE, this.completeHandler1, this),
                                this._urlL1.removeEventListener(c.IO_ERROR, this.errorHandler, this),
                                this._urlL1 = null,
                                this._callBack = null,
                                this.param = null
                        }
                        ,
                        t
                }());
                m._dic = new Map,
                    m.REQUEST_TIME_OUT = 1e4,
                    i._RF.pop()
            }
        }
    }
));
