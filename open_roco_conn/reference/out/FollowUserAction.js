System.register("chunks:///_virtual/FollowUserAction.ts", ["cc", "./global.ts", "./BagDataProxy.ts", "./SpiritBagRefProxy.ts", "./ServerKeywords.ts"], (function(e) {
        var t, i, o, n, r;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    i = e.__global
                }
                , function(e) {
                    o = e.BagDataProxy
                }
                , function(e) {
                    n = e.SpiritBagRefProxy
                }
                , function(e) {
                    r = e.ServerKeywords
                }
            ],
            execute: function() {
                t._RF.push({}, "83270f3g89Hqqw6QYhq5+Fj", "FollowUserAction", void 0);
                e("FollowUserAction", function() {
                    function e(e, t) {
                        this._sender = void 0,
                            this._receiver = void 0,
                            this._sender = e,
                            this._receiver = t,
                            this._receiver.addReceiveCallback(r.RECV_SPIRIT_FOLLOW_USER, this.onReceive.bind(this))
                    }
                    var t = e.prototype;
                    return t.send = function(e) {
                        void 0 === e && (e = null),
                            i.UI.createMiniLoading(),
                            this._sender.sendDataToServer(r.SEND_SPIRIT_FOLLOW_USER, Number(e))
                    }
                        ,
                        t.onReceive = function(e) {
                            if (i.UI.closeMiniLoading(),
                            "number" == typeof e) {
                                var t, r = Number(e), s = o.data.length;
                                if (0 != r)
                                    for (t = 0; t < s; ++t)
                                        o.data[t].following = r - 1 == t;
                                else
                                    for (t = 0; t < s; ++t)
                                        o.data[t].following = !1;
                                n.spiritBagPanel.select(o.selectedIndex)
                            } else
                                "string" == typeof e && i.UI.alert("", "" + e)
                        }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
