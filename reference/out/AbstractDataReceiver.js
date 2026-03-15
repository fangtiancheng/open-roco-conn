System.register("chunks:///_virtual/AbstractDataReceiver.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AngelDataEvent.ts", "./EventDispatcher.ts", "./AngelError.ts"], (function(t) {
        var e, n, s, i, r;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    s = t.AngelDataEvent
                }
                , function(t) {
                    i = t.EventDispatcher
                }
                , function(t) {
                    r = t.AngelError
                }
            ],
            execute: function() {
                n._RF.push({}, "c6240ERiAdGs5j5ti40ddpB", "AbstractDataReceiver", void 0);
                t("AbstractDataReceiver", function(t) {
                    function n() {
                        for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++)
                            i[r] = arguments[r];
                        return (e = t.call.apply(t, [this].concat(i)) || this).sendevent = new s(s.TRYSENDADF),
                            e.sysApi = void 0,
                            e.serNum = 0,
                            e
                    }
                    e(n, t);
                    var i = n.prototype;
                    return i.catchTrySendDataError = function(t, e, n) {
                        console.error("[AbstractDataReceiver] cmdType:0x" + t.toString(16) + ",tcpID:" + e + "发送失败!")
                    }
                        ,
                        i.setAngelSysAPI = function(t) {
                            this.sysApi = t
                        }
                        ,
                        i.initialize = function() {}
                        ,
                        i.finalize = function() {}
                        ,
                        i.onDataReceive = function(t, e) {
                            throw new r(r.METHOD_NOT_IMPL,this)
                        }
                        ,
                        i.sendDataToServer = function(t, e) {
                            this.sendevent.dataType = t,
                                this.sendevent.hasSerNum = !1,
                                this.serNum = 0,
                                this.sendevent.data = e,
                                this.dispatchEvent(this.sendevent)
                        }
                        ,
                        i.sendDataWithSerNum = function(t, e) {
                            this.sendevent.dataType = t,
                                this.sendevent.data = e,
                                this.sendevent.hasSerNum = !0,
                                this.serNum = 0,
                                this.sendevent.target = this,
                                this.dispatchEvent(this.sendevent)
                        }
                        ,
                        i.getAcceptTypes = function() {
                            throw new r(r.METHOD_NOT_IMPL,this)
                        }
                        ,
                        n
                }(i));
                n._RF.pop()
            }
        }
    }
));
