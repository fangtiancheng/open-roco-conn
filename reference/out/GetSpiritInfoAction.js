System.register("chunks:///_virtual/GetSpiritInfoAction.ts", ["cc", "./global.ts", "./SpiritData.ts", "./WindowMode.ts", "./SpiritBagRefProxy.ts", "./ServerKeywords.ts"], (function(i) {
        var e, t, n, o, r, s;
        return {
            setters: [function(i) {
                e = i.cclegacy
            }
                , function(i) {
                    t = i.__global
                }
                , function(i) {
                    n = i.SpiritData
                }
                , function(i) {
                    o = i.WindowMode
                }
                , function(i) {
                    r = i.SpiritBagRefProxy
                }
                , function(i) {
                    s = i.ServerKeywords
                }
            ],
            execute: function() {
                e._RF.push({}, "17a13hbIzxD3bseppkMyTgo", "GetSpiritInfoAction", void 0);
                i("GetSpiritInfoAction", function() {
                    function i(i, e) {
                        this._sender = void 0,
                            this._receiver = void 0,
                            this._sender = i,
                            this._receiver = e,
                            this._receiver.addReceiveCallback(s.RECV_SPIRIT_INFO, this.onReceive.bind(this))
                    }
                    var e = i.prototype;
                    return e.send = function(i) {
                        void 0 === i && (i = null),
                            t.UI.createMiniLoading(),
                            this._sender.sendDataToServer(s.SEND_SPIRIT_INFO, i)
                    }
                        ,
                        e.onReceive = function(i) {
                            t.UI.closeMiniLoading(),
                                "string" == typeof i ? t.UI.alert("", i, o.OK, null) : i instanceof n && r.spiritInfo.opened && (r.spiritInfo.data = i)
                        }
                        ,
                        i
                }());
                e._RF.pop()
            }
        }
    }
));
