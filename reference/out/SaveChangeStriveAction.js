System.register("chunks:///_virtual/SaveChangeStriveAction.ts", ["cc", "./global.ts", "./WindowMode.ts", "./AddStriveResData.ts", "./BagDataProxy.ts", "./SpiritBagRefProxy.ts", "./NetActionProxy.ts", "./ServerKeywords.ts"], (function(e) {
        var t, i, n, s, r, a, o, d;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    i = e.__global
                }
                , function(e) {
                    n = e.WindowMode
                }
                , function(e) {
                    s = e.AddStriveResData
                }
                , function(e) {
                    r = e.BagDataProxy
                }
                , function(e) {
                    a = e.SpiritBagRefProxy
                }
                , function(e) {
                    o = e.NetActionProxy
                }
                , function(e) {
                    d = e.ServerKeywords
                }
            ],
            execute: function() {
                t._RF.push({}, "da766A1D9RKYoPxuj7oJ4vY", "SaveChangeStriveAction", void 0);
                e("SaveChangeStriveAction", function() {
                    function e(e, t) {
                        this._sender = void 0,
                            this._receiver = void 0,
                            this._sender = e,
                            this._receiver = t,
                            this._receiver.addReceiveCallback(d.SAVE_STRIVE_ADD, this.onReceive.bind(this))
                    }
                    var t = e.prototype;
                    return t.send = function(e) {
                        void 0 === e && (e = null),
                            i.UI.createMiniLoading(),
                            this._sender.sendDataToServer(d.SAVE_STRIVE_ADD, e)
                    }
                        ,
                        t.onReceive = function(e) {
                            i.UI.closeMiniLoading(),
                                "string" == typeof e ? i.UI.alert("", e, n.OK, null) : e instanceof s && (o.getSpiritBag(),
                                    r.data[r.selectedIndex].GHP = e.spirits.GHP,
                                    r.data[r.selectedIndex].GSP = e.spirits.GSP,
                                    r.data[r.selectedIndex].GPA = e.spirits.GPA,
                                    r.data[r.selectedIndex].GPD = e.spirits.GPD,
                                    r.data[r.selectedIndex].GMA = e.spirits.GMA,
                                    r.data[r.selectedIndex].GMD = e.spirits.GMD,
                                    a.spiritBagPanel.update())
                        }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
