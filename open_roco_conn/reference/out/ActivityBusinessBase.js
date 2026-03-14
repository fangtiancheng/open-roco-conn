System.register("chunks:///_virtual/ActivityBusinessBase.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeExtend.ts", "./TimerHelper.ts", "./CGI.ts", "./NetManager.ts", "./CFunction.ts", "./ActivityAPI.ts", "./CommonEvent.ts", "./global.ts", "./BaseMessage.ts", "./TCP.ts", "./BuildLogHelper.ts"], (function(e) {
        var t, n, i, a, s, o, u, c, l, d, r, h, I, f;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createClass
            }
                , function(e) {
                    i = e.cclegacy
                }
                , function(e) {
                    a = e.NodeExtend
                }
                , function(e) {
                    s = e.TimerHelper
                }
                , function(e) {
                    o = e.CGI
                }
                , function(e) {
                    u = e.NetManager
                }
                , function(e) {
                    c = e.CFunction
                }
                , function(e) {
                    l = e.ActivityAPI
                }
                , function(e) {
                    d = e.CommonEvent
                }
                , function(e) {
                    r = e.__global
                }
                , function(e) {
                    h = e.BaseMessage
                }
                , function(e) {
                    I = e.TCP
                }
                , function(e) {
                    f = e.default
                }
            ],
            execute: function() {
                i._RF.push({}, "f783aezaJRKprnGAc/4U1TL", "ActivityBusinessBase", void 0);
                e("ActivityBusinessBase", function(e) {
                    function i() {
                        var t;
                        return (t = e.call(this) || this).isQueueSending = !1,
                            t.sendData = void 0,
                            t.registStage(),
                            t
                    }
                    t(i, e);
                    var a = i.prototype;
                    return a.registStage = function() {}
                        ,
                        a.__addToStage = function(e) {}
                        ,
                        a.__removeFromStage = function(e) {}
                        ,
                        a.loadUINeedRes = function() {
                            this.loadActivityRes(this.getActMainSwfName() + ".swf", new c(this._onResLoaded,this))
                        }
                        ,
                        a.loadActivityRes = function(e, t, n) {
                            f.IS_LOCAL
                        }
                        ,
                        a.getActivityResPath = function(e) {
                            return ""
                        }
                        ,
                        a.creatResInstanceByFullName = function(e) {
                            return null
                        }
                        ,
                        a.createResInstance = function(e) {
                            return null
                        }
                        ,
                        a.getPakageName = function() {
                            return null
                        }
                        ,
                        a.getActMainSwfName = function() {
                            return null
                        }
                        ,
                        a._onResLoaded = function(e, t) {}
                        ,
                        a.onResLoaded = function(e, t) {}
                        ,
                        a.send = function(e, t, n, i, a, s, u, c) {
                            void 0 === t && (t = null),
                            void 0 === n && (n = null),
                            void 0 === i && (i = null),
                            void 0 === a && (a = !1),
                            void 0 === s && (s = !1),
                            void 0 === u && (u = !0),
                            void 0 === c && (c = !1),
                                null != i || t instanceof h ? I.call(e, t, i, l.delegateFunc(this.onDataReceived.bind(this), n), e, a, s, u) : (null == t && (t = ""),
                                    o.call(this.CONFIG.CGI + "?cmd=" + e + t + l.getSkeyStr() + l.getPlatfromStr(), l.delegateFunc(this.onDataReceived.bind(this), n), e, u, s, a, c))
                        }
                        ,
                        a.onQueueTick = function() {
                            this.checkQueueState()
                        }
                        ,
                        a.checkQueueState = function() {
                            s.disposeTimer("CGI_QUEUE_TIME" + this.CONFIG.CGI),
                                1 == r.SysAPI.getGDataAPI().getGlobalVal("ActGlobalData_CGIQueue") ? s.startTimer("CGI_QUEUE_TIME" + this.CONFIG.CGI, 1e3, 1, null, this.checkQueueState) : (r.SysAPI.getGDataAPI().addGlobalVal("ActGlobalData_CGIQueue", !0),
                                s.getTimer("CGI_QUEUE_TIME_OUT" + this.CONFIG.CGI) || s.startTimer("CGI_QUEUE_TIME_OUT" + this.CONFIG.CGI, 5e3, 1, null, this.removeQueueState),
                                null == this.sendData[1] && (this.sendData[1] = ""),
                                    o.call(this.CONFIG.CGI + "?cmd=" + this.sendData[0] + this.sendData[1] + l.getSkeyStr() + l.getPlatfromStr(), l.delegateFunc(this.onDataReceived, this.sendData[2]), this.sendData[0], this.sendData[5], this.sendData[4], this.sendData[3], this.sendData[6]))
                        }
                        ,
                        a.sendCGIWithQueue = function(e, t, n, i, a, s, o) {
                            void 0 === t && (t = null),
                            void 0 === n && (n = null),
                            void 0 === i && (i = !1),
                            void 0 === a && (a = !1),
                            void 0 === s && (s = !0),
                            void 0 === o && (o = !1),
                            this.isQueueSending || (this.isQueueSending = !0,
                                this.sendData = [e, t, n, i, a, s, o],
                                this.checkQueueState())
                        }
                        ,
                        a.removeQueueState = function(e) {
                            void 0 === e && (e = -1),
                            this.isQueueSending && (-1 == e || this.sendData && this.sendData[0] == e) && (s.disposeTimer("CGI_QUEUE_TIME_OUT" + this.CONFIG.CGI),
                                r.SysAPI.getGDataAPI().addGlobalVal("ActGlobalData_CGIQueue", !1),
                                this.isQueueSending = !1)
                        }
                        ,
                        a.setSecretKey = function(e, t) {}
                        ,
                        a.addDataProcessor = function(e, t, n) {
                            void 0 === n && (n = !0),
                                u.addDataProcessor(e, t, this.netCallBackHandler, n)
                        }
                        ,
                        a.removeDataProcessor = function(e) {
                            u.removeDataProcessor(e, this.netCallBackHandler)
                        }
                        ,
                        a.netCallBackHandler = function(e, t) {
                            this.onDataReceived(t, e)
                        }
                        ,
                        a.onDataReceived = function(e, t, n) {
                            void 0 === n && (n = null),
                                this.removeQueueState(t),
                                r.SysAPI.getGEventAPI().angelEventDispatcher.dispatchEvent(new d("onDataReceived",[e, t, n, this.CONFIG.CGI, this.CONFIG.ActId]))
                        }
                        ,
                        n(i, [{
                            key: "CONFIG",
                            get: function() {
                                return null
                            }
                        }]),
                        i
                }(a));
                i._RF.pop()
            }
        }
    }
));
