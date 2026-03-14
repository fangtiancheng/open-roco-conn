System.register("chunks:///_virtual/SentinelIntelligenceProtocol.ts", ["cc", "./Constants.ts", "./global.ts", "./CGI.ts", "./Xml2Json.ts", "./SpiritStorageApp.ts", "./SentinelIntelligenceConfig.ts"], (function(e) {
        var t, n, i, r, s, u, o;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    n = e.Constants
                }
                , function(e) {
                    i = e.__global
                }
                , function(e) {
                    r = e.CGI
                }
                , function(e) {
                    s = e.Xml2Json
                }
                , function(e) {
                    u = e.SpiritStorageApp
                }
                , function(e) {
                    o = e.SentinelIntelligenceConfig
                }
            ],
            execute: function() {
                t._RF.push({}, "3042c2F9iNF7qExoEGM3L5z", "SentinelIntelligenceProtocol", void 0);
                var c = e("SentinelIntelligenceProtocol", function() {
                    function e() {
                        this.requestQueue = [],
                            this.isProcessing = !1,
                            this.MAX_RETRY_COUNT = 3,
                            this.REQUEST_INTERVAL = 10
                    }
                    var t = e.prototype;
                    return t.request = function(e, t, n, i, r) {
                        var s = {
                            api: e,
                            params: function() {
                                var e = {};
                                for (var n in t)
                                    t.hasOwnProperty(n) && (e[n] = t[n]);
                                return e
                            }(),
                            type: n,
                            onResponse: i,
                            onError: r,
                            retryCount: 0
                        };
                        this.requestQueue.push(s),
                            this.processQueue()
                    }
                        ,
                        t.processQueue = function() {
                            if (!this.isProcessing && 0 !== this.requestQueue.length) {
                                this.isProcessing = !0;
                                var e = this.requestQueue.shift();
                                e ? this.executeRequest(e) : this.isProcessing = !1
                            }
                        }
                        ,
                        t.executeRequest = function(e) {
                            var t = this
                                , o = i.SysAPI.getGDataAPI().getGlobalVal(n.CUR_SERVER_INFO);
                            e.params.unkown = o.pskey ? o.pskey : o.skey,
                                e.params.skey = o.skey,
                                e.params.angel_uin = o.uin,
                                e.params.angel_key = o.sessionKey,
                                e.params.platfrom = u.platformValue,
                                e.params.time = Date.now(),
                                console.log("[SentinelIntelligence] 发送请求: " + e.api, e.params),
                                r.Get(e.api, e.params, e.type, (function(n) {
                                        try {
                                            var i = s.getJson(n);
                                            console.log("[SentinelIntelligence] 请求成功: " + e.api, i),
                                                e.onResponse(i)
                                        } catch (n) {
                                            return console.error("[SentinelIntelligence] 解析响应失败: " + e.api, n),
                                                void t.handleRequestError(e, null)
                                        }
                                        setTimeout((function() {
                                                t.isProcessing = !1,
                                                    t.processQueue()
                                            }
                                        ), t.REQUEST_INTERVAL)
                                    }
                                ), (function(n) {
                                        console.error("[SentinelIntelligence] 请求失败: " + e.api, n),
                                            t.handleRequestError(e, n)
                                    }
                                ))
                        }
                        ,
                        t.handleRequestError = function(e, t) {
                            var n = this;
                            e.retryCount = (e.retryCount || 0) + 1,
                                e.retryCount < this.MAX_RETRY_COUNT ? (console.log("[SentinelIntelligence] 请求重试 (" + e.retryCount + "/" + this.MAX_RETRY_COUNT + "): " + e.api),
                                    this.requestQueue.unshift(e)) : (console.error("[SentinelIntelligence] 请求彻底失败: " + e.api),
                                    i.showMsgBox("网络繁忙，请稍后再试！"),
                                e.onError && e.onError(t)),
                                setTimeout((function() {
                                        n.isProcessing = !1,
                                            n.processQueue()
                                    }
                                ), 2 * this.REQUEST_INTERVAL)
                        }
                        ,
                        t.clearQueue = function() {
                            console.log("[SentinelIntelligence] 清空请求队列，当前队列长度: " + this.requestQueue.length),
                                this.requestQueue = [],
                                this.isProcessing = !1
                        }
                        ,
                        t.getQueueStatus = function() {
                            return {
                                queueLength: this.requestQueue.length,
                                isProcessing: this.isProcessing
                            }
                        }
                        ,
                        t.queryActivityStatus = function(e, t) {
                            var n = {
                                cmd: o.CMD.QUERY
                            };
                            this.request(o.CGI_NAME, n, "text", (function(t) {
                                    return e(t)
                                }
                            ), t)
                        }
                        ,
                        t.startFight = function(e, t, n) {
                            var i = {
                                cmd: o.CMD.START_FIGHT,
                                index: e.boss_index
                            };
                            this.request(o.CGI_NAME, i, "text", (function(e) {
                                    return t(e)
                                }
                            ), n)
                        }
                        ,
                        t.fightSettle = function(e, t) {
                            var n = {
                                cmd: o.CMD.FIGHT
                            };
                            this.request(o.CGI_NAME, n, "text", (function(t) {
                                    return e(t)
                                }
                            ), t)
                        }
                        ,
                        t.refresh = function(e, t, n) {
                            var i = {
                                cmd: o.CMD.REFRESH,
                                index: e.index
                            };
                            this.request(o.CGI_NAME, i, "text", (function(e) {
                                    return t(e)
                                }
                            ), n)
                        }
                        ,
                        t.getGift = function(e, t, n) {
                            var i = {
                                cmd: o.CMD.GET_GIFT,
                                type: e.type,
                                index: e.index,
                                c: e.catch_time
                            };
                            void 0 !== e.catch_time && (i.c = e.catch_time),
                                this.request(o.CGI_NAME, i, "text", (function(e) {
                                        return t(e)
                                    }
                                ), n)
                        }
                        ,
                        t.getPrize = function(e, t, n) {
                            var i = {
                                cmd: o.CMD.GET_PRIZE,
                                index: e.index
                            };
                            this.request(o.CGI_NAME, i, "text", (function(e) {
                                    return t(e)
                                }
                            ), n)
                        }
                        ,
                        t.queryBag = function(e, t, n) {
                            var i = {
                                cmd: o.CMD.QUERY_BAG,
                                index: e.evolveId
                            };
                            this.request(o.CGI_NAME, i, "text", (function(e) {
                                    return t(e)
                                }
                            ), n)
                        }
                        ,
                        t.queryBagByIndex = function(e, t, n) {
                            var i = {
                                cmd: o.CMD.QUERY_BAG,
                                type: 2,
                                index: e.index
                            };
                            this.request(o.CGI_NAME, i, "text", (function(e) {
                                    return t(e)
                                }
                            ), n)
                        }
                        ,
                        t.queryAllBoss = function(e, t) {
                            var n = {
                                cmd: o.CMD.QUERY_ALL
                            };
                            this.request(o.CGI_NAME, n, "text", (function(t) {
                                    return e(t)
                                }
                            ), t)
                        }
                        ,
                        e
                }())
                    , l = e("sentinelIntelligenceProtocol", new c);
                e("QueryActivityStatus", (function(e, t) {
                        return l.queryActivityStatus(e, t)
                    }
                )),
                    e("StartFight", (function(e, t, n) {
                            return l.startFight(e, t, n)
                        }
                    )),
                    e("FightSettle", (function(e, t) {
                            return l.fightSettle(e, t)
                        }
                    )),
                    e("Refresh", (function(e, t, n) {
                            return l.refresh(e, t, n)
                        }
                    )),
                    e("GetGift", (function(e, t, n) {
                            return l.getGift(e, t, n)
                        }
                    )),
                    e("GetPrize", (function(e, t, n) {
                            return l.getPrize(e, t, n)
                        }
                    )),
                    e("QueryBag", (function(e, t, n) {
                            return l.queryBag(e, t, n)
                        }
                    )),
                    e("QueryAllBoss", (function(e, t) {
                            return l.queryAllBoss(e, t)
                        }
                    ));
                t._RF.pop()
            }
        }
    }
));
