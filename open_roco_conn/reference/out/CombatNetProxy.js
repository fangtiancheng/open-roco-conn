System.register("chunks:///_virtual/CombatNetProxy.ts", ["cc", "./UserData.ts", "./LadderMatchNetCmdsType.ts", "./ProtoManager.ts", "./GlobalTimer.ts", "./tagADFHeadH5.ts", "./WebSocketClient.ts"], (function(e) {
        var t, n, o, c, a, i, r;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    n = e.UserData
                }
                , function(e) {
                    o = e.LadderMatchNetCmdsType
                }
                , function(e) {
                    c = e.default
                }
                , function(e) {
                    a = e.GlobalTimer
                }
                , function(e) {
                    i = e.tagADFHeadH5
                }
                , function(e) {
                    r = e.WebSocketClient
                }
            ],
            execute: function() {
                t._RF.push({}, "fb229tkd2tEQq2nskk/ZsHE", "CombatNetProxy", void 0);
                var s = e("CombatNetProxy", function() {
                    function e() {}
                    return e.send = function() {
                        1 != e.ON_MATTCHING ? (this.sendMsg(),
                            e._counter = 0,
                            e.ON_MATTCHING = !0,
                            a.registerTimer(e.TIMER_COMBATNETPROXY, 1e3, (function() {
                                    e.log()
                                }
                            ), this)) : e.sendCancelMsg()
                    }
                        ,
                        e.log = function() {
                            e._counter = e._counter + 1,
                                console.log("正在匹配中...", e._counter),
                            e._counter > 30 && e.endingMatch()
                        }
                        ,
                        e.endingMatch = function() {
                            e._counter = 0,
                                e.ON_MATTCHING = !1,
                                a.unregisterTimer(e.TIMER_COMBATNETPROXY),
                                console.log("停止匹配")
                        }
                        ,
                        e.sendCancelMsg = function() {
                            var t = new i;
                            t.uin = n.uin,
                                t.cmdID = o.T_CancelMatch,
                                t.length = 0;
                            var c = t.encode();
                            r.Instance.send(c, o.T_CancelMatch),
                                e.endingMatch()
                        }
                        ,
                        e.sendMsg = function() {
                            var e = o.T_Match
                                , t = {
                                uin: n.uin
                            }
                                , a = c.Instance.SerializeMsg(o.getName(e), t);
                            if (null !== a) {
                                a.length;
                                var s = a.buffer.slice(0, a.byteLength);
                                console.log("bodyBuffer", s);
                                var u = new i;
                                u.cmdID = o.T_Match,
                                    u.uin = n.uin,
                                    u.length = s.byteLength;
                                for (var g = u.encode(), d = new ArrayBuffer(g.byteLength + s.byteLength), f = new DataView(d), h = new DataView(g), l = new DataView(s), T = 0; T < g.byteLength; T++)
                                    f.setUint8(T, h.getUint8(T));
                                for (var M = 0; M < s.byteLength; M++)
                                    f.setUint8(M + g.byteLength, l.getUint8(M));
                                r.Instance.send(d, o.T_Match)
                            }
                        }
                        ,
                        e.sendLog = function() {
                            var e = FightSvrProto.PTB_0x0B0519_LadderFightMatchResult_C2S.create({
                                uin: n.uin
                            })
                                , t = FightSvrProto.PTB_0x0B0519_LadderFightMatchResult_C2S.encode(e).finish();
                            r.Instance.sendLogByU8(t)
                        }
                        ,
                        e.ceshi = function() {}
                        ,
                        e.sendLogByU8 = function(e, t) {
                            void 0 === t && (t = "");
                            for (var n = "", o = 0; o < e.byteLength; o++)
                                n += e[o].toString(16).padStart(2, "0") + " ";
                            console.log("sendLogByU8 : " + t, n)
                        }
                        ,
                        e
                }());
                s.TIMER_COMBATNETPROXY = "CombatNetProxy",
                    s._counter = 0,
                    s.ON_MATTCHING = !1,
                    t._RF.pop()
            }
        }
    }
));
