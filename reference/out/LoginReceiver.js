System.register("chunks:///_virtual/LoginReceiver.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AbstractDataReceiver.ts", "./ADFCmdsType.ts"], (function(i) {
        var t, e, n, s, o;
        return {
            setters: [function(i) {
                t = i.inheritsLoose,
                    e = i.createClass
            }
                , function(i) {
                    n = i.cclegacy
                }
                , function(i) {
                    s = i.AbstractDataReceiver
                }
                , function(i) {
                    o = i.ADFCmdsType
                }
            ],
            execute: function() {
                n._RF.push({}, "f24c97h/2lBVp0CNZqDIwnV", "LoginReceiver", void 0);
                i("LoginReceiver", function(i) {
                    function n(t) {
                        var e;
                        return void 0 === t && (t = null),
                            (e = i.call(this) || this).fun = void 0,
                            e.commUIMgr = void 0,
                            e.loadingBar = void 0,
                            e._view = void 0,
                            e.init(t),
                            e
                    }
                    t(n, i);
                    var s = n.prototype;
                    return s.init = function(i) {
                        var t;
                        this.commUIMgr = null == i || null == (t = i.getUISysAPI()) ? void 0 : t.commUIManager
                    }
                        ,
                        s.sendData = function(i, t, e) {
                            this._view && this._view.setWaiting(!0),
                                this.sendevent.tcpID = i,
                                this.sendDataToServer(t, e)
                        }
                        ,
                        s.setLoading = function(i) {
                            this._view = i
                        }
                        ,
                        s.onDataReceive = function(i, t) {
                            this._view && this._view.setWaiting(!1),
                                this.fun(i, t)
                        }
                        ,
                        s.catchTrySendDataError = function(i, t, e) {
                            this._view && (this._view.setWaiting(!1),
                                this._view.setErroMsg(!0))
                        }
                        ,
                        s.finalize = function() {
                            this._view && this._view.setWaiting(!1)
                        }
                        ,
                        s.getAcceptTypes = function() {
                            return [o.T_LoginRoom, o.T_DIR_RANGE_REPLY, o.T_DIR_RECOMMEND_REPLY, o.T_DIR_FAST_GETIN, o.T_DIR_INITIAL_COMPONENT, o.T_ROOM_INITIAL_COMPONENT]
                        }
                        ,
                        e(n, [{
                            key: "handle",
                            set: function(i) {
                                this.fun = i
                            }
                        }]),
                        n
                }(s));
                n._RF.pop()
            }
        }
    }
));
