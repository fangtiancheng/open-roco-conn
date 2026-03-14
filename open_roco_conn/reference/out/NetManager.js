System.register("chunks:///_virtual/NetManager.ts", ["cc", "./ByteArray.ts", "./CALLBACK.ts", "./CallbackCenter.ts", "./ActivityAPI.ts", "./CGI1.ts", "./TCP.ts", "./BaseMessage.ts", "./P_FreeRequest.ts", "./NetProcessor.ts"], (function(e) {
        var t, c, o, r, a, n, l, s, i, d;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    c = e.ByteArray
                }
                , function(e) {
                    o = e.CALLBACK
                }
                , function(e) {
                    r = e.CallbackCenter
                }
                , function(e) {
                    a = e.ActivityAPI
                }
                , function(e) {
                    n = e.CGI1
                }
                , function(e) {
                    l = e.TCP
                }
                , function(e) {
                    s = e.BaseMessage
                }
                , function(e) {
                    i = e.P_FreeRequest
                }
                , function(e) {
                    d = e.NetProcessor
                }
            ],
            execute: function() {
                t._RF.push({}, "456437jpCdPBIn81KrELml/", "NetManager", void 0);
                var u = e("NetManager", function() {
                    function e() {}
                    return e.send = function(t, c, o, r) {
                        void 0 === c && (c = null),
                        void 0 === o && (o = null),
                        void 0 === r && (r = null);
                        var a = new d(t,c,o);
                        a.onsuccess = r,
                            a.onerror = e.onerror,
                            new i(t,a,a).send(!0)
                    }
                        ,
                        e.tcpCGISend = function(e, t, c, o, r, i, d, u, P, f) {
                            void 0 === c && (c = null),
                            void 0 === o && (o = null),
                            void 0 === r && (r = null),
                            void 0 === i && (i = null),
                            void 0 === d && (d = !1),
                            void 0 === u && (u = !1),
                            void 0 === P && (P = !0),
                            void 0 === f && (f = !1),
                                null != r || c instanceof s ? l.call(t, c, r, a.delegateFunc(i.bind(this), o), t, d, u, P) : (null == c && (c = ""),
                                    -1 == t ? n.call(e + "?" + c + a.getSkeyStr() + a.getPlatfromStr(), a.delegateFunc(i.bind(this), o), t, P, u, d, f) : n.call(e + "?cmd=" + t + c + a.getSkeyStr() + a.getPlatfromStr(), a.delegateFunc(i.bind(this), o), t, P, u, d, f))
                        }
                        ,
                        e.onerror = function(e) {}
                        ,
                        e.addDataProcessor = function(t, c, a, n) {
                            void 0 === n && (n = !0),
                            null == e.dataProcessorDic && (e.dataProcessorDic = new Map,
                                r.registerCallBack(o.ANGEL_NET_ON_GET_A_SOCKET_RAW_DATA, e.onGetDecodedData, null)),
                                n ? e.dataProcessorDic[t] = [{
                                    cl: c,
                                    callback: a
                                }] : null != e.dataProcessorDic[t] ? e.dataProcessorDic[t].push({
                                    cl: c,
                                    callback: a
                                }) : e.dataProcessorDic[t] = [{
                                    cl: c,
                                    callback: a
                                }]
                        }
                        ,
                        e.removeDataProcessor = function(t, c) {
                            if (void 0 === c && (c = null),
                            null == e.dataProcessorDic && (e.dataProcessorDic = new Map,
                                r.registerCallBack(o.ANGEL_NET_ON_GET_A_SOCKET_RAW_DATA, e.onGetDecodedData, null)),
                            null != e.dataProcessorDic[t])
                                if (null == c)
                                    e.dataProcessorDic[t] = null,
                                        delete e.dataProcessorDic[t];
                                else {
                                    for (var a = e.dataProcessorDic[t], n = [], l = 0; l < a.length; l++)
                                        a[l].callback != c && n.push(a[l]);
                                    n.length > 0 ? e.dataProcessorDic[t] = n : (e.dataProcessorDic[t] = null,
                                        delete e.dataProcessorDic[t])
                                }
                        }
                        ,
                        e.onGetDecodedData = function(t, o, a, n) {
                            var l = o
                                , s = l[0]
                                , i = l[1].cmdID;
                            if (null != e.dataProcessorDic[i] || null != e.dataProcessorDic[i])
                                for (var d = e.dataProcessorDic[i], u = 0; u < d.length; u++) {
                                    var P = new c;
                                    P.writeBytes(s),
                                        P.position = 0;
                                    var f = new (0,
                                        d[u].cl);
                                    f.readExternal(P),
                                        f ? d[u].callback && d[u].callback(i, f) : onerror && onerror("系统繁忙，请稍后再试。")
                                }
                            return r.EVENT_OK
                        }
                        ,
                        e
                }());
                u.dataProcessorDic = void 0,
                    u.BeKickedOff = !1,
                    t._RF.pop()
            }
        }
    }
));
