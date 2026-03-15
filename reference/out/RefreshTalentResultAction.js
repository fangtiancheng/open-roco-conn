System.register("chunks:///_virtual/RefreshTalentResultAction.ts", ["cc", "./SpiritBagRefProxy.ts", "./ServerKeywords.ts"], (function(e) {
        var t, r, i;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    r = e.SpiritBagRefProxy
                }
                , function(e) {
                    i = e.ServerKeywords
                }
            ],
            execute: function() {
                t._RF.push({}, "876b5Gfm9lDPo1lX+ywC5jQ", "RefreshTalentResultAction", void 0);
                e("RefreshTalentResultAction", function() {
                    function e(e) {
                        this._receiver = void 0,
                            this._receiver = e,
                            this._receiver.addReceiveCallback(i.RECV_REFRESH_SPIRIT_TALENT, this.receive.bind(this))
                    }
                    return e.prototype.receive = function(e) {
                        r.refreshTalentResultPanel.show(),
                            r.refreshTalentResultPanel.data = e
                    }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
