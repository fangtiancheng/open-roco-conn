System.register("chunks:///_virtual/NetProxy.ts", ["cc", "./global.ts", "./AllocateExpReq.ts", "./AllocateExpRsp.ts", "./GetRemainExpRsp.ts", "./NetManager.ts"], (function(t) {
        var n, e, i, a, o, c;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
                , function(t) {
                    e = t.__global
                }
                , function(t) {
                    i = t.AllocateExpReq
                }
                , function(t) {
                    a = t.AllocateExpRsp
                }
                , function(t) {
                    o = t.GetRemainExpRsp
                }
                , function(t) {
                    c = t.NetManager
                }
            ],
            execute: function() {
                n._RF.push({}, "fd153abYX9MyamW2pH1G5Gm", "NetProxy", void 0);
                t("NetProxy", function() {
                    function t() {}
                    var n = t.prototype;
                    return n.getUIdata = function(t) {
                        this.setWaiting(!0),
                            c.send(721006, null, o, t)
                    }
                        ,
                        n.useExp = function(t, n, e) {
                            this.setWaiting(!0);
                            var o = new i;
                            o.index = t,
                                o.allocateExp = n,
                                c.send(721005, o, a, e)
                        }
                        ,
                        n.setWaiting = function(t) {
                            var n = e.SysAPI.getUISysAPI().commUIManager;
                            t ? n.createMiniLoading() : n.closeMiniLoading()
                        }
                        ,
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
