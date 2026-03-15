System.register("chunks:///_virtual/SecretRealmProtocol.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./global.ts", "./CGI.ts", "./Xml2Json.ts", "./SpiritStorageApp.ts", "./SecretRealmConfig.ts"], (function(e) {
        var t, r, o, n, s, a, c, u;
        return {
            setters: [function(e) {
                t = e.createForOfIteratorHelperLoose
            }
                , function(e) {
                    r = e.cclegacy
                }
                , function(e) {
                    o = e.Constants
                }
                , function(e) {
                    n = e.__global
                }
                , function(e) {
                    s = e.CGI
                }
                , function(e) {
                    a = e.Xml2Json
                }
                , function(e) {
                    c = e.SpiritStorageApp
                }
                , function(e) {
                    u = e.SecretRealmConfig
                }
            ],
            execute: function() {
                r._RF.push({}, "150c6h0nL1D6LQpUmXBoboA", "SecretRealmProtocol", void 0),
                    e("SecretRealmProtocol", function() {
                        function e() {
                            this.requestQueue = new Map,
                                this.REQUEST_TIMEOUT = 1e4,
                                this.MAX_RETRY_COUNT = 3,
                                this.isProcessing = !1,
                                this.initProtocolHandlers()
                        }
                        e.getInstance = function() {
                            return e.instance || (e.instance = new e),
                                e.instance
                        }
                        ;
                        var r = e.prototype;
                        return r.initProtocolHandlers = function() {
                            this.registerProtocolProcessor(),
                                this.startTimeoutChecker()
                        }
                            ,
                            r.registerProtocolProcessor = function() {
                                console.info("SecretRealmProtocol: Protocol handlers registered")
                            }
                            ,
                            r.startTimeoutChecker = function() {
                                var e = this;
                                setInterval((function() {
                                        e.checkTimeouts()
                                    }
                                ), 1e3)
                            }
                            ,
                            r.checkTimeouts = function() {
                                for (var e, r = Date.now(), o = t(this.requestQueue); !(e = o()).done; ) {
                                    var n = e.value
                                        , s = n[0];
                                    r - n[1].timestamp > this.REQUEST_TIMEOUT && (console.warn("SecretRealmProtocol: Request timeout:", s),
                                        this.handleRequestError(s, "请求超时"))
                                }
                            }
                            ,
                            r.querySecretRealmData = function(e) {
                                var t = {
                                    subcmd: u.SUBCMD_QUERY
                                };
                                this.sendRequest("query", t, e)
                            }
                            ,
                            r.openActivity = function(e) {
                                var t = {
                                    subcmd: u.SUBCMD_OPEN
                                };
                                this.sendRequest("open", t, e)
                            }
                            ,
                            r.viewMonsterDetail = function(e, t) {
                                if (u.isValidMonsterIndex(e - 1)) {
                                    var r = {
                                        subcmd: u.SUBCMD_INDEX,
                                        index: e
                                    };
                                    this.sendRequest("index", r, t, e - 1)
                                } else
                                    t(!1, null, "Invalid monster index")
                            }
                            ,
                            r.submitBattleResult = function(e) {
                                var t = {
                                    subcmd: u.SUBCMD_SUBMIT
                                };
                                this.sendRequest("submit", t, e)
                            }
                            ,
                            r.getSummonReward = function(e, t, r, o) {
                                var n = {
                                    subcmd: u.SUBCMD_GETGIFT,
                                    type: e,
                                    num: t,
                                    index: r
                                };
                                this.sendRequest("getgift", n, o)
                            }
                            ,
                            r.sendRequest = function(e, t, r, o) {
                                var n = e + "_" + Date.now() + "_" + Math.random()
                                    , s = this.buildCGIParams(e, t);
                                this.requestQueue.set(n, {
                                    callback: r,
                                    timestamp: Date.now(),
                                    retryCount: 0,
                                    params: function() {
                                        var e = {};
                                        for (var r in t)
                                            t.hasOwnProperty(r) && (e[r] = t[r]);
                                        return null != o && (e.extraParam = o),
                                            e
                                    }(),
                                    action: e,
                                    cgiParams: s,
                                    extraParam: o
                                }),
                                    console.info("SecretRealmProtocol: Sending request:", e, s),
                                    this.performActualRequest(n, e, s, o)
                            }
                            ,
                            r.buildCGIParams = function(e, t) {
                                var r = {};
                                switch (e) {
                                    case "query":
                                        r.cmd = u.SUBCMD_QUERY;
                                        break;
                                    case "open":
                                        r.cmd = u.SUBCMD_OPEN;
                                        break;
                                    case "index":
                                        r.cmd = u.SUBCMD_INDEX,
                                            r.index = t.index;
                                        break;
                                    case "submit":
                                        r.cmd = u.SUBCMD_SUBMIT;
                                        break;
                                    case "getgift":
                                        r.cmd = u.SUBCMD_GETGIFT,
                                            r.type = t.type,
                                            r.num = t.num,
                                            r.index = t.index;
                                        break;
                                    default:
                                        console.warn("SecretRealmProtocol: Unknown action:", e)
                                }
                                return r
                            }
                            ,
                            r.buildFullCGIParams = function(e) {
                                var t = n.SysAPI.getGDataAPI().getGlobalVal(o.CUR_SERVER_INFO)
                                    , r = function() {
                                    var t = {};
                                    for (var r in e)
                                        e.hasOwnProperty(r) && (t[r] = e[r]);
                                    return t
                                }();
                                return r.unkown = t.pskey ? t.pskey : t.skey,
                                    r.skey = t.skey,
                                    r.angel_uin = t.uin,
                                    r.angel_key = t.sessionKey,
                                    r.platfrom = c.platformValue,
                                    r.time = Date.now(),
                                    r
                            }
                            ,
                            r.performActualRequest = function(e, t, r, o) {
                                var n = this;
                                if (this.requestQueue.get(e)) {
                                    var c = this.buildFullCGIParams(r);
                                    console.log("[SecretRealm] 发送请求: " + t, c),
                                        s.Get(u.CMD_QUERY, c, "text", (function(r) {
                                                try {
                                                    var o = a.getJson(r);
                                                    console.log("[SecretRealm] 请求成功: " + t, o),
                                                        n.handleResponse(e, o)
                                                } catch (r) {
                                                    console.error("[SecretRealm] 解析响应失败: " + t, r),
                                                        n.handleRequestError(e, "解析响应失败")
                                                }
                                            }
                                        ), (function(r) {
                                                console.error("[SecretRealm] 请求失败: " + t, r),
                                                    n.handleRequestError(e, "网络请求失败")
                                            }
                                        ))
                                } else
                                    console.error("SecretRealmProtocol: Request data not found for:", e)
                            }
                            ,
                            r.handleRequestError = function(e, t) {
                                var r = this
                                    , o = this.requestQueue.get(e);
                                if (o)
                                    if (o.retryCount++,
                                    o.retryCount < this.MAX_RETRY_COUNT)
                                        console.log("[SecretRealm] 请求重试 (" + o.retryCount + "/" + this.MAX_RETRY_COUNT + "): " + o.action),
                                            o.timestamp = Date.now(),
                                            setTimeout((function() {
                                                    r.performActualRequest(e, o.action, o.cgiParams, o.extraParam)
                                                }
                                            ), 1e3 * o.retryCount);
                                    else {
                                        console.error("[SecretRealm] 请求彻底失败: " + o.action),
                                            this.requestQueue.delete(e),
                                            n.showMsgBox("网络繁忙，请稍后再试！");
                                        try {
                                            o.callback(!1, null, t)
                                        } catch (e) {
                                            console.error("SecretRealmProtocol: Error callback execution failed:", e)
                                        }
                                    }
                                else
                                    console.warn("SecretRealmProtocol: Request not found for error handling:", e)
                            }
                            ,
                            r.handleResponse = function(e, t) {
                                var r = this.requestQueue.get(e);
                                if (r) {
                                    this.requestQueue.delete(e);
                                    var o = this.isResponseSuccess(t)
                                        , n = this.parseResponseData(t)
                                        , s = o ? null : this.getResponseError(t);
                                    console.info("SecretRealmProtocol: Response received for:", e, {
                                        success: o,
                                        data: n,
                                        error: s
                                    });
                                    try {
                                        r.callback(o, n, s)
                                    } catch (t) {
                                        console.error("SecretRealmProtocol: Callback error for", e, ":", t)
                                    }
                                } else
                                    console.warn("SecretRealmProtocol: Request not found:", e)
                            }
                            ,
                            r.isResponseSuccess = function(e) {
                                var t, r = parseInt((null == e || null == (t = e.result) ? void 0 : t.value) || "0");
                                return e && (0 === r || r >= 0)
                            }
                            ,
                            r.parseResponseData = function(e) {
                                return e ? e.data || e : null
                            }
                            ,
                            r.getResponseError = function(e) {
                                return e ? e.result.msg || e.result.error || "未知错误" : "网络错误"
                            }
                            ,
                            r.clearRequestQueue = function() {
                                this.requestQueue.clear(),
                                    console.info("SecretRealmProtocol: Request queue cleared")
                            }
                            ,
                            r.getQueueSize = function() {
                                return this.requestQueue.size
                            }
                            ,
                            r.dispose = function() {
                                this.clearRequestQueue(),
                                    e.instance = null
                            }
                            ,
                            e
                    }()).instance = void 0,
                    r._RF.pop()
            }
        }
    }
));
