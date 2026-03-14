System.register("chunks:///_virtual/GetItemListAction.ts", ["cc", "./global.ts", "./ItemTypes.ts", "./P_ItemType.ts", "./ItemShellDataProxy.ts", "./ServerKeywords.ts"], (function(e) {
        var t, i, n, r, s, o;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    i = e.__global
                }
                , function(e) {
                    n = e.ItemTypes
                }
                , function(e) {
                    r = e.P_ItemType
                }
                , function(e) {
                    s = e.ItemShellDataProxy
                }
                , function(e) {
                    o = e.ServerKeywords
                }
            ],
            execute: function() {
                t._RF.push({}, "3a4eevX2ihK+K/pHRXQnBHm", "GetItemListAction", void 0);
                e("GetItemListAction", function() {
                    function e(e, t) {
                        this._sender = void 0,
                            this._receiver = void 0,
                            this._sender = e,
                            this._receiver = t,
                            this._receiver.addReceiveCallback(o.RECV_ITEMS_BY_TYPE, this.onReceive.bind(this))
                    }
                    var t = e.prototype;
                    return t.send = function(e) {
                        i.UI.createMiniLoading();
                        var t = new r;
                        t.itemType = n.COMBAT,
                            t.itemSubType = 0,
                            this._sender.sendDataToServer(o.SEND_ITEMS_BY_TYPE, t)
                    }
                        ,
                        t.onReceive = function(e) {
                            i.UI.closeMiniLoading(),
                            Array.isArray(e) && (s.data = e)
                        }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
