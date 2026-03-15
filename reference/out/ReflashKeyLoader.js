System.register("chunks:///_virtual/ReflashKeyLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./XML.ts", "./UserData.ts", "./Timer.ts", "./TimerEvent.ts", "./Xml2Json.ts", "./DEFINE.ts", "./AngelURLLoader.ts", "./URLRequest.ts", "./BuildLogHelper.ts"], (function(e) {
        var t, s, o, n, r, i, a, l, u, f, c;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    s = e.cclegacy
                }
                , function(e) {
                    o = e.XML
                }
                , function(e) {
                    n = e.UserData
                }
                , function(e) {
                    r = e.Timer
                }
                , function(e) {
                    i = e.default
                }
                , function(e) {
                    a = e.Xml2Json
                }
                , function(e) {
                    l = e.DEFINE
                }
                , function(e) {
                    u = e.AngelURLLoader
                }
                , function(e) {
                    f = e.URLRequest
                }
                , function(e) {
                    c = e.default
                }
            ],
            execute: function() {
                s._RF.push({}, "82f77vkVR5A/Yf5yczu+2dB", "ReflashKeyLoader", void 0);
                e("ReflashKeyLoader", function(e) {
                    function s(t) {
                        var s;
                        return (s = e.call(this, t) || this).timer = void 0,
                            s.tryTime = 0,
                            s
                    }
                    t(s, e);
                    var u = s.prototype;
                    return u.onReflashKey = function(e) {
                        this.tryTime = 0,
                            this.reLoadKey()
                    }
                        ,
                        u.reLoadKey = function() {
                            return this.tryTime++,
                            !(this.tryTime > 3) && (this.load(new f(l.FASTCGI_ROOT + "sign2")),
                                !0)
                        }
                        ,
                        u.onLoadComplete = function(t) {
                            e.prototype.onLoadComplete.call(this, t);
                            var s = a.getJson(this.data)
                                , r = new o(s).data;
                            null != r.result && "string" == typeof r.result && "0" == r.result ? (this.serverInfo.sessionKey = r.angel_key,
                                n.sessionKey = this.serverInfo.sessionKey,
                                console.log("[ReflashKeyLoader] 签名更新成功: " + this.serverInfo.sessionKey)) : (console.error("[ReflashKeyLoader] 签名更新失败(错误原因:" + r.result.msg + ")"),
                                this.onLoadError(null))
                        }
                        ,
                        u.onLoadError = function(e) {
                            console.error("[ReflashKeyLoader] 签名更新失败! 原因:" + (null != e ? e.text : "")),
                            this.reLoadKey() && console.error("[ReflashKeyLoader] 签名更新重试!")
                        }
                        ,
                        u.start = function() {
                            var e = c.IS_LOCAL ? 6e4 : 9e5;
                            this.timer = new r(e),
                                this.timer.addEventListener(i.TIMER, this.onReflashKey.bind(this)),
                                this.timer.start()
                        }
                        ,
                        u.destroy = function() {
                            e.prototype.destroy.call(this),
                                this.timer.removeEventListener(i.TIMER, this.onReflashKey.bind(this))
                        }
                        ,
                        s
                }(u));
                s._RF.pop()
            }
        }
    }
));
