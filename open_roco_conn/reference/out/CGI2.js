System.register("chunks:///_virtual/CGI2.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GlobalAPI.ts", "./TimerHelper.ts", "./DEFINE.ts", "./URLLoader.ts", "./URLRequest.ts", "./IOErrorEvent.ts", "./global.ts", "./URLRequestMethod.ts", "./BuildLogHelper.ts", "./URLLoaderEvent.ts", "./XML.ts", "./CGIResult.ts", "./Xml2Json.ts"], (function(t) {
        var e, i, n, r, s, o, a, l, c, h, u, _, d, v, E, m;
        return {
            setters: [function(t) {
                e = t.createForOfIteratorHelperLoose
            }
                , function(t) {
                    i = t.cclegacy,
                        n = t.Event
                }
                , function(t) {
                    r = t.GlobalAPI
                }
                , function(t) {
                    s = t.TimerHelper
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
                    h = t.__global
                }
                , function(t) {
                    u = t.URLRequestMethod
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
                    m = t.Xml2Json
                }
            ],
            execute: function() {
                i._RF.push({}, "baf1dzPUmVIa53E4H8InZUT", "CGI2", void 0);
                var L = t("CGI2", function() {
                    function t(t, e, i, n, s, o, v) {
                        void 0 === o && (o = u.GET),
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
                            o == u.GET ? (this._urlL1 = h.SysAPI.getNetSysAPI().createURLLoader(!0),
                                this._urlL1.setIsQueue(!1)) : o == u.POST && (this._urlL1 = new a),
                            this._urlL1.addEventListener(d.COMPLETE, this.completeHandler1, this),
                            this._urlL1.addEventListener(c.IO_ERROR, this.errorHandler, this),
                            this._callBack = e;
                        var E = new l;
                        o == u.GET ? E.url = t : o == u.POST && _.IS_LOCAL,
                            this._urlL1.load(E),
                            this.param = i,
                            this._path = t,
                            this._isShowLoadingIcon = s,
                            this._useCommonErrorAert = n,
                            this.startTime = r.getTimer(),
                        this._isShowLoadingIcon && this.setWaiting(!0)
                    }
                    t.call = function(e, i, n, r, s, a, l) {
                        void 0 === n && (n = null),
                        void 0 === r && (r = !0),
                        void 0 === s && (s = !1),
                        void 0 === a && (a = !1),
                        void 0 === l && (l = !1);
                        var c, h = o.CGI_ROOT;
                        if (-1 != e.indexOf("/") && (h = h.replace("cgi-bin/", "")),
                        null == n) {
                            var _ = e.indexOf("&");
                            -1 == _ && (_ = e.length),
                                n = e.substring(0, _)
                        }
                        return s ? ((c = t._dic[h + e]) || (c = new t(h + e,i,n,r,a,u.GET,l),
                            t._dic[h + e] = c),
                            c) : c = new t(h + e,i,n,r,a,u.GET,l)
                    }
                        ,
                        t.checkTimeOutFuc = function() {
                            for (var i, o, a = e(this._dic.values()); !(o = a()).done; ) {
                                var l = o.value;
                                i++,
                                r.getTimer() - l.startTime > t.REQUEST_TIME_OUT && l.errorHandler(new n("CGIRquestTimeOut"))
                            }
                            0 == i && s.disposeTimer("CGI_TIME_OUT_CHECK_TIMER")
                        }
                    ;
                    var i = t.prototype;
                    return i.completeHandler1 = function(e) {
                        var i, n = "";
                        this.setWaiting(!1);
                        try {
                            this._isEncrypt || (n = m.getJsonWithArray(this._urlL1.data, !1)),
                                i = new v(n).data
                        } catch (e) {
                            i = null
                        }
                        if (console.log("onCgiEvent", this._path, "useCommonErrorAert=" + this._useCommonErrorAert, "listener=" + (null != this._callBack), "e.type=" + e.type),
                            console.log("onCgiEvent", "e.data=\n" + n),
                            delete t._dic[this._initPath],
                        this._useCommonErrorAert && i) {
                            var r = new E(i);
                            0 != r.value && (console.error("onCgiEvent", "ret=" + r.value, "msg=" + r.msg),
                            r.msg && h.showMsgBox(r.msg))
                        }
                        this._callBack && this._callBack(i, this.param),
                            this.remove()
                    }
                        ,
                        i.errorHandler = function(e) {
                            this.setWaiting(!1),
                                delete t._dic[this._initPath],
                                console.error("onCgiEvent", "e.type=" + e.type),
                            this._useCommonErrorAert && h.showMsgBox("哎呀，出现了网络故障：" + e.type),
                            this._callBack && this._callBack(null, this.param),
                                this.remove()
                        }
                        ,
                        i.setWaiting = function(t) {
                            var e = h.SysAPI.getUISysAPI().commUIManager;
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
                L._dic = new Map,
                    L.REQUEST_TIME_OUT = 1e4,
                    i._RF.pop()
            }
        }
    }
));
