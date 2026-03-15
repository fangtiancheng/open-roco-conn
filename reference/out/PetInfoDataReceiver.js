System.register("chunks:///_virtual/PetInfoDataReceiver.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AbstractDataReceiver.ts", "./P_FreeRequest.ts", "./P_ReturnCode.ts", "./PetInfoProtocol.ts"], (function(t) {
        var e, n, i, r, o, u;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    i = t.AbstractDataReceiver
                }
                , function(t) {
                    r = t.P_FreeRequest
                }
                , function(t) {
                    o = t.P_ReturnCode
                }
                , function(t) {
                    u = t.PetInfoProtocol
                }
            ],
            execute: function() {
                n._RF.push({}, "38680WfPQ5BbqPHb0hAR0kT", "PetInfoDataReceiver", void 0);
                t("PetInfoDataReceiver", function(t) {
                    function n() {
                        var e;
                        return (e = t.call(this) || this)._timer = null,
                            e._timeOut = !1,
                            e.returnFunction = null,
                            e
                    }
                    e(n, t);
                    var i = n.prototype;
                    return i.OverTimeTick = function() {
                        this._timeOut = !0,
                            clearTimeout(this._timer);
                        var t = new u;
                        t.code = new o,
                            t.code.code = -1,
                        null != this.returnFunction && this.returnFunction(this, t),
                            t.dispose()
                    }
                        ,
                        i.send = function(t) {
                            var e = this;
                            this._timeOut = !1,
                                this._timer = setTimeout((function() {
                                        e.OverTimeTick()
                                    }
                                ), 3e3);
                            var n = new u;
                            n.id = t;
                            var i = new r;
                            i.data = n,
                                i.respondCls = u,
                                this.sendDataToServer(720929, i)
                        }
                        ,
                        i.onDataReceive = function(t, e) {
                            clearTimeout(this._timer);
                            var n = e;
                            n && 720929 == t && (null == this.returnFunction || this._timeOut || this.returnFunction(this, n),
                                n.dispose()),
                                this._timeOut = !1
                        }
                        ,
                        i.getAcceptTypes = function() {
                            return [720929]
                        }
                        ,
                        n
                }(i));
                n._RF.pop()
            }
        }
    }
));
