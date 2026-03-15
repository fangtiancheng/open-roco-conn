System.register("chunks:///_virtual/TCP.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ByteArray.ts", "./TimerHelper.ts", "./P_FreeRequest2.ts", "./NetProcessor.ts", "./ActivityAPI.ts", "./global.ts", "./StringUtil.ts"], (function(t) {
        var e, i, r, n, o, s, c, a, l;
        return {
            setters: [function(t) {
                e = t.createForOfIteratorHelperLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    r = t.ByteArray
                }
                , function(t) {
                    n = t.TimerHelper
                }
                , function(t) {
                    o = t.P_FreeRequest2
                }
                , function(t) {
                    s = t.NetProcessor
                }
                , function(t) {
                    c = t.ActivityAPI
                }
                , function(t) {
                    a = t.__global
                }
                , function(t) {
                    l = t.StringUtil
                }
            ],
            execute: function() {
                function u() {
                    return (new Date).getTime()
                }
                i._RF.push({}, "41847Z7m4pB4a8u75VNTQD5", "TCP", void 0);
                var d = t("TCP", function() {
                    function t(t, e, i, r, n, c, a) {
                        void 0 === e && (e = null),
                        void 0 === i && (i = null),
                        void 0 === r && (r = null),
                        void 0 === n && (n = null),
                        void 0 === c && (c = !1),
                        void 0 === a && (a = !0),
                            this.cmd = void 0,
                            this.param = void 0,
                            this._callBack = void 0,
                            this._useCommonErrorAert = void 0,
                            this.startTime = void 0,
                            this.cmd = t,
                            this._callBack = r,
                            this.param = n,
                            this._useCommonErrorAert = a,
                            this.startTime = u(),
                        c && this.setWaiting(!0);
                        var l = new s(t,e,i);
                        l.onsuccess = this.successHandler.bind(this),
                            l.onerror = this.errorHandler.bind(this),
                            new o(t,l,l).send(!0)
                    }
                    t.call = function(e, i, r, n, o, s, c, a) {
                        var l;
                        return void 0 === i && (i = null),
                        void 0 === r && (r = null),
                        void 0 === n && (n = null),
                        void 0 === o && (o = null),
                        void 0 === s && (s = !1),
                        void 0 === c && (c = !1),
                        void 0 === a && (a = !0),
                            c ? ((l = t._dic[e]) || (l = new t(e,i,r,n,o,s,a),
                                t._dic[e] = l),
                                l) : l = new t(e,i,r,n,o,s,a)
                    }
                        ,
                        t.checkTimeOutFuc = function() {
                            for (var i, r, o = e(t._dic.values()); !(r = o()).done; ) {
                                var s = r.value;
                                i++,
                                u() - s.startTime > t.REQUEST_TIME_OUT && s.errorHandler("Activity TCPRquestTimeOut")
                            }
                            0 == i && n.disposeTimer("TCP_TIME_OUT_CHECK_TIMER")
                        }
                    ;
                    var i = t.prototype;
                    return i.successHandler = function(e) {
                        if (this.setWaiting(!1),
                        this._useCommonErrorAert && e) {
                            var i = l.getQualifiedClassName(e);
                            e.hasOwnProperty("retInfo") && e.retInfo && 0 != e.retInfo.retCode ? (e.retInfo.retMsg instanceof r && a.showMsgBox(c.byteToString(e.retInfo.retMsg)),
                            "string" == typeof e.retInfo.retMsg && a.showMsgBox(e.retInfo.retMsg)) : -1 != i.indexOf("RetInfo") && e.retCode && 0 != e.retCode && (e.retMsg instanceof r && a.showMsgBox(c.byteToString(e.retMsg)),
                            "string" == typeof e.retMsg && a.showMsgBox(e.retMsg))
                        }
                        delete t._dic[this.cmd],
                        this._callBack && this._callBack(e, this.param),
                            this.remove()
                    }
                        ,
                        i.errorHandler = function(e) {
                            this.setWaiting(!1),
                                delete t._dic[this.cmd],
                            this._callBack && this._callBack(null, this.param),
                                this.remove()
                        }
                        ,
                        i.setWaiting = function(t) {
                            var e = a.SysAPI.getUISysAPI().commUIManager;
                            t ? e.createMiniLoading() : e.closeMiniLoading()
                        }
                        ,
                        i.remove = function() {
                            this._callBack = null,
                                this.param = null
                        }
                        ,
                        t
                }());
                d._dic = new Map,
                    d.REQUEST_TIME_OUT = 1e4,
                    i._RF.pop()
            }
        }
    }
));
