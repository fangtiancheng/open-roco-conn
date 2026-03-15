System.register("chunks:///_virtual/MoveSpiritToStorageAction.ts", ["cc", "./global.ts", "./WindowMode.ts", "./BagDataProxy.ts", "./SpiritBagRefProxy.ts", "./ServerKeywords.ts"], (function(e) {
        var i, t, n, o, r, a;
        return {
            setters: [function(e) {
                i = e.cclegacy
            }
                , function(e) {
                    t = e.__global
                }
                , function(e) {
                    n = e.WindowMode
                }
                , function(e) {
                    o = e.BagDataProxy
                }
                , function(e) {
                    r = e.SpiritBagRefProxy
                }
                , function(e) {
                    a = e.ServerKeywords
                }
            ],
            execute: function() {
                i._RF.push({}, "b358fg6uANEfrB8Okw4pLed", "MoveSpiritToStorageAction", void 0);
                e("MoveSpiritToStorageAction", function() {
                    function e(e, i) {
                        this._sender = void 0,
                            this._receiver = void 0,
                            this._sender = e,
                            this._receiver = i,
                            this._receiver.addReceiveCallback(a.RECV_SPIRIT_TO_STORAGE, this.onReceive.bind(this))
                    }
                    var i = e.prototype;
                    return i.send = function(e) {
                        void 0 === e && (e = null),
                            t.UI.createMiniLoading(),
                            this._sender.sendDataToServer(a.SEND_SPIRIT_TO_STORAGE, Number(e))
                    }
                        ,
                        i.onReceive = function(e) {
                            t.UI.closeMiniLoading(),
                                "string" == typeof e ? t.UI.alert("", e, n.OK, null) : Array.isArray(e) && (o.selectedIndex = 0,
                                    o.data = e)
                        }
                        ,
                        i.goManorHandler = function() {
                            r.spiritBagPanel.close(),
                                t.SysAPI.getPlugSysAPI().callPlugin("Manor")
                        }
                        ,
                        i.goHomeHandler = function() {
                            r.spiritBagPanel.close(),
                                t.SysAPI.getPlugSysAPI().callPlugin("Home")
                        }
                        ,
                        e
                }());
                i._RF.pop()
            }
        }
    }
));
