System.register("chunks:///_virtual/TrainOfflineAction.ts", ["cc", "./global.ts", "./P_FreeRequest.ts", "./BagDataProxy.ts", "./SpiritBagRefProxy.ts", "./OfflinePracticeProcessor.ts", "./ServerKeywords.ts"], (function(e) {
        var n, t, r, i, o, c, s;
        return {
            setters: [function(e) {
                n = e.cclegacy
            }
                , function(e) {
                    t = e.__global
                }
                , function(e) {
                    r = e.P_FreeRequest
                }
                , function(e) {
                    i = e.BagDataProxy
                }
                , function(e) {
                    o = e.SpiritBagRefProxy
                }
                , function(e) {
                    c = e.OfflinePracticeProcessor
                }
                , function(e) {
                    s = e.ServerKeywords
                }
            ],
            execute: function() {
                n._RF.push({}, "1d5fb5PFhBM7Y7CMw909Tl+", "TrainOfflineAction", void 0);
                e("TrainOfflineAction", function() {
                    function e() {}
                    var n = e.prototype;
                    return n.send = function(e) {
                        var n = new c
                            , t = new c;
                        t.bagIndex = i.selectedIndex + 1,
                            new r(s.SEND_OFFLINE_PRACTICE,t,n,this.onReceive.bind(this)).send()
                    }
                        ,
                        n.onReceive = function(e) {
                            var n = e;
                            null != n && n.returnCode.isError() && t.SysAPI.getUISysAPI().commUIManager.alert("", n.returnCode.message)
                        }
                        ,
                        n.goHomeHandler = function() {
                            o.spiritBagPanel.close(),
                                t.SysAPI.getPlugSysAPI().callPlugin("Home")
                        }
                        ,
                        e
                }());
                n._RF.pop()
            }
        }
    }
));
