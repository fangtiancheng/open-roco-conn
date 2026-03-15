System.register("chunks:///_virtual/GameTest.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./HttpRequest.ts", "./UserData.ts", "./Xml2Json.ts", "./ActivityAPI.ts"], (function(t) {
        var e, n, r, o, s, a, i, c, u, f;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.asyncToGenerator,
                    r = t.regeneratorRuntime
            }
                , function(t) {
                    o = t.cclegacy,
                        s = t._decorator,
                        a = t.Component
                }
                , function(t) {
                    i = t.HttpRequest
                }
                , function(t) {
                    c = t.UserData
                }
                , function(t) {
                    u = t.Xml2Json
                }
                , function(t) {
                    f = t.ActivityAPI
                }
            ],
            execute: function() {
                var p;
                o._RF.push({}, "5865e/QGgFHyIp0i/YAp8Fs", "GameTest", void 0);
                var l = s.ccclass;
                s.property,
                    t("default", l("GameTest")(p = function(t) {
                        function o() {
                            return t.apply(this, arguments) || this
                        }
                        e(o, t);
                        var s = o.prototype;
                        return s.propTip = function() {
                            for (var t = new Map([[1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 0]], [2, [0, 0, -1, 0, 1, 1, 0, 0, 0, 0, 0, 1, -1, 0, -1, 0, 1, 0, 0, 0, -1]], [3, [0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 0, 1, 0, -1, 0, 0, 0, 0, -1, 0]], [4, [0, 0, 1, -1, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0]], [5, [0, -1, 1, 0, -1, 0, 0, -1, 1, -1, 0, -1, 1, 0, -1, 0, -1, 0, -1, -1, 0]], [6, [0, -1, -1, 0, 1, -1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, -1, 0, -1, 0, -1]], [7, [1, 0, 0, 0, 0, 1, 0, -1, 0, -1, -1, -1, 1, 0, 0, 1, 1, 0, 0, 0, 0]], [8, [0, 0, 0, 0, 1, 0, 0, -1, -1, 0, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0]], [9, [0, 1, 0, 1, -1, 0, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 1, 0, 0, -1, 0]], [10, [0, 0, 0, -1, 1, 0, 1, 0, 0, 0, 0, 1, -1, 0, 0, 0, -1, 0, 0, 0, 0]], [11, [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, -1, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0]], [12, [0, -1, 0, 0, 1, 0, -1, -1, 0, -1, 1, 0, 0, -1, 0, 1, -1, 0, -1, 0, 0]], [13, [0, 1, 0, 0, 0, 1, -1, 0, -1, 1, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0]], [14, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, -1, -1, 0, 0, 0, 0]], [15, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, -1, 0, 0, 0, 0]], [16, [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, -1, -1, 0, 0, 0, 0]], [17, [0, -1, -1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, -1, 0, -1, 0, -1]], [18, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], [19, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, -1]], [20, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 0, 1]], [21, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 0]]]), e = t.get(20), n = 0; n < e.length; n++)
                                e[n];
                            for (var r = 1; r <= 21; r++)
                                (e = t.get(r))[19]
                        }
                            ,
                            s.start1 = function() {}
                            ,
                            s.start = function() {
                                this.start1()
                            }
                            ,
                            s.test = function() {}
                            ,
                            s.onLoad = function() {}
                            ,
                            s.sendLogByU8 = function(t) {
                                for (var e = "", n = 0; n < t.byteLength; n++)
                                    e += t[n].toString(16).padStart(2, "0") + " ";
                                console.log("sendLogByU8 : ", e)
                            }
                            ,
                            s.ladder = function() {
                                var t = FightSvrProto.PTB_0x0B0519_LadderFightMatchResult_C2S.create();
                                t.uin = c.uin;
                                var e = FightSvrProto.PTB_0x0B0519_LadderFightMatchResult_C2S.encode(t).finish();
                                this.sendLogByU8(e);
                                var n = FightSvrProto.PTB_0x0B0519_LadderFightMatchResult_C2S.decode(e);
                                console.log("value22222 = " + n.uin)
                            }
                            ,
                            s.writeUint32 = function(t, e, n) {
                                return isNaN(t) && (t = 0),
                                    t = Math.floor(t),
                                    new DataView(n.buffer).setUint32(e, t),
                                    e += 4
                            }
                            ,
                            s.execute = function() {
                                var t = n(r().mark((function t() {
                                        return r().wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                        case 0:
                                                            return t.next = 2,
                                                                this.xhrReq();
                                                        case 2:
                                                            return console.log("execute==================="),
                                                                t.next = 5,
                                                                this.printf();
                                                        case 5:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                            }
                                        ), t, this)
                                    }
                                )));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }(),
                            s.LoadCommonAssets = function() {
                                var t = n(r().mark((function t() {
                                        return r().wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                        case 0:
                                                            return t.abrupt("return", new Promise((function(t, e) {
                                                                    var o = new XMLHttpRequest;
                                                                    o.onreadystatechange = n(r().mark((function e() {
                                                                            var n;
                                                                            return r().wrap((function(e) {
                                                                                    for (; ; )
                                                                                        switch (e.prev = e.next) {
                                                                                            case 0:
                                                                                                if (!(4 == o.readyState && o.status >= 200 && o.status < 400)) {
                                                                                                    e.next = 7;
                                                                                                    break
                                                                                                }
                                                                                                return e.next = 3,
                                                                                                    o.responseText;
                                                                                            case 3:
                                                                                                n = e.sent,
                                                                                                    console.log("response==================="),
                                                                                                    console.log(n),
                                                                                                    t();
                                                                                            case 7:
                                                                                            case "end":
                                                                                                return e.stop()
                                                                                        }
                                                                                }
                                                                            ), e)
                                                                        }
                                                                    ))),
                                                                        o.open("GET", "https://3344.qq.com/notice.xml?v=" + 1e3 * Math.random()),
                                                                        o.setRequestHeader("pragma", "no-cache"),
                                                                        o.send()
                                                                }
                                                            )));
                                                        case 1:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                            }
                                        ), t)
                                    }
                                )));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }(),
                            s.printf = function() {
                                var t = n(r().mark((function t() {
                                        return r().wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                        case 0:
                                                            console.log("GameTest===================");
                                                        case 1:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                            }
                                        ), t)
                                    }
                                )));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }(),
                            s.xhrReq = function() {
                                var t = "https://3344.qq.com/notice.xml?v=" + 1e3 * Math.random();
                                i.Instance.getSync(t, this.onComplete.bind(this), this.onError.bind(this))
                            }
                            ,
                            s.onComplete = function(t) {
                                console.log("onComplete================" + t)
                            }
                            ,
                            s.onError = function(t) {
                                console.log("onError================" + t)
                            }
                            ,
                            s.loadConfig = function() {
                                f.parseConfig(1989, ["client_star_tower_new"], (function(t) {
                                        t = u.getJsonNew(t.client_star_tower_new);
                                        f.setGlobalValue("1989", t.client_star_tower_new)
                                    }
                                ))
                            }
                            ,
                            s.onAllConfsLoaded = function(t) {}
                            ,
                            s.onConfsLoadError = function(t) {}
                            ,
                            o
                    }(a)) || p);
                o._RF.pop()
            }
        }
    }
));
