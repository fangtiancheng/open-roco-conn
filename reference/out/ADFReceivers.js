System.register("chunks:///_virtual/ADFReceivers.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts", "./AngelDataEvent.ts", "./EventDispatcher.ts"], (function(e) {
        var t, r, n, a, i;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    r = e.cclegacy
                }
                , function(e) {
                    n = e.default
                }
                , function(e) {
                    a = e.AngelDataEvent
                }
                , function(e) {
                    i = e.EventDispatcher
                }
            ],
            execute: function() {
                r._RF.push({}, "08d00p7FQpLYITdm2dzddEc", "ADFReceivers", void 0);
                e("ADFReceivers", function(e) {
                    function r(t) {
                        var r;
                        return (r = e.call(this) || this).netSystem = void 0,
                            r.maps = void 0,
                            r.currReqsMap = void 0,
                            r.maps = new Map,
                            r.currReqsMap = new Map,
                            r.netSystem = t,
                            r
                    }
                    t(r, e);
                    var i = r.prototype;
                    return i.allSendADFHandler = function(e) {
                        var t = e.target
                            , r = this.netSystem.trySendData(e.dataType, e.data, e.hasSerNum, e.tcpID);
                        0 == r && null != t ? t.catchTrySendDataError(e.dataType, e.tcpID, e.data) : e.hasSerNum && (t.serNum = r,
                            this.currReqsMap[e.dataType + " " + r] = t)
                    }
                        ,
                        i.add = function(e) {
                            e.addEventListener(a.TRYSENDADF, this.allSendADFHandler, this);
                            for (var t = e.getAcceptTypes(), r = 0; r < t.length; r++) {
                                var n = t[r];
                                null == this.maps[n] && (this.maps[n] = []);
                                var i = this.maps[n];
                                if (-1 == i.indexOf(e)) {
                                    if (CONFIG.DEBUG) {
                                        var s = "0x0" + n.toString(16).padStart(5, "0");
                                        console.log("add receiver cmd=" + n + " hexCmd=" + s + "  receiver=" + e)
                                    }
                                    i.push(e)
                                }
                            }
                        }
                        ,
                        i.remove = function(e) {
                            e.removeEventListener(a.TRYSENDADF, this.allSendADFHandler, this);
                            for (var t = e.getAcceptTypes(), r = 0; r < t.length; r++) {
                                var n = t[r]
                                    , i = this.maps[n];
                                if (null == i)
                                    return;
                                var s = i.indexOf(e);
                                -1 != s && i.splice(s, 1)
                            }
                        }
                        ,
                        i.onDataReceive = function(e) {
                            if (null != e.head) {
                                var t = e.head.cmdID
                                    , r = e.head.uiSerialNum;
                                if (0 != r) {
                                    var a = t + " " + r
                                        , i = this.currReqsMap[a];
                                    if (null != i)
                                        return delete this.currReqsMap[a],
                                            i.onDataReceive(t, e.body),
                                            !0
                                }
                                var s = this.maps[t];
                                if (null != s) {
                                    for (var c = s.length - 1; c >= 0; )
                                        null != (i = s[c]) && i.onDataReceive(t, e.body),
                                            c--;
                                    return !0
                                }
                                return console.warn("[NetSystem] cmd = 0x" + t.toString(16) + "  未注册 ADFReceviver , 如果使用 GameProtocol 方式处理协议,忽略此警告!"),
                                1 == n.IS_LOCAL && console.error("[NetSystem] 有个命令字为0x" + t.toString(16) + "被丢弃!"),
                                null == e.body
                            }
                        }
                        ,
                        i.dispose = function() {
                            this.maps = null
                        }
                        ,
                        r
                }(i));
                r._RF.pop()
            }
        }
    }
));
