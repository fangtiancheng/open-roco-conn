System.register("chunks:///_virtual/SwapSpiritsAction.ts", ["cc", "./global.ts", "./BagDataProxy.ts", "./ServerKeywords.ts"], (function(e) {
        var i, t, s, n;
        return {
            setters: [function(e) {
                i = e.cclegacy
            }
                , function(e) {
                    t = e.__global
                }
                , function(e) {
                    s = e.BagDataProxy
                }
                , function(e) {
                    n = e.ServerKeywords
                }
            ],
            execute: function() {
                i._RF.push({}, "f2f0fqS0tpDwpTWIUCiKTMh", "SwapSpiritsAction", void 0);
                e("SwapSpiritsAction", function() {
                    function e(e, i) {
                        this._sender = void 0,
                            this._receiver = void 0,
                            this._swapObj = void 0,
                            this._sender = e,
                            this._receiver = i,
                            this._receiver.addReceiveCallback(n.RECV_SWAP_SPIRITS, this.onReceive.bind(this))
                    }
                    var i = e.prototype;
                    return i.send = function(e) {
                        void 0 === e && (e = null),
                        e.firstIndex != e.secondIndex && (t.UI.createMiniLoading(),
                            this._swapObj = e,
                            this._sender.sendDataToServer(n.SEND_SWAP_SPIRITS, e))
                    }
                        ,
                        i.onReceive = function(e) {
                            t.UI.closeMiniLoading(),
                            Array.isArray(e) && (null != this._swapObj && (s.selectedIndex == this._swapObj.firstIndex - 1 ? s.selectedIndex = this._swapObj.secondIndex - 1 : s.selectedIndex == this._swapObj.secondIndex - 1 && (s.selectedIndex = this._swapObj.firstIndex - 1)),
                                s.data = e)
                        }
                        ,
                        e
                }());
                i._RF.pop()
            }
        }
    }
));
