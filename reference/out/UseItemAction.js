System.register("chunks:///_virtual/UseItemAction.ts", ["cc", "./global.ts", "./WindowMode.ts", "./UserItemData.ts", "./ConsumingItemProxy.ts", "./ItemShellDataProxy.ts", "./SpiritBagRefProxy.ts", "./NetActionProxy.ts", "./ServerKeywords.ts"], (function(t) {
        var e, i, n, r, s, o, a, c, u;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
                , function(t) {
                    i = t.__global
                }
                , function(t) {
                    n = t.WindowMode
                }
                , function(t) {
                    r = t.UserItemData
                }
                , function(t) {
                    s = t.ConsumingItemProxy
                }
                , function(t) {
                    o = t.ItemShellDataProxy
                }
                , function(t) {
                    a = t.SpiritBagRefProxy
                }
                , function(t) {
                    c = t.NetActionProxy
                }
                , function(t) {
                    u = t.ServerKeywords
                }
            ],
            execute: function() {
                e._RF.push({}, "bb3b3QeL+5GYLPgJLXArbu4", "UseItemAction", void 0);
                t("UseItemAction", function() {
                    function t(t, e) {
                        this._sender = void 0,
                            this._receiver = void 0,
                            this._consumingItemId = void 0,
                            this._consumingItemCount = void 0,
                            this._sender = t,
                            this._receiver = e,
                            this._receiver.addReceiveCallback(u.RECV_SPIRIT_USE_ITEM, this.onReceive.bind(this))
                    }
                    var e = t.prototype;
                    return e.send = function(t) {
                        void 0 === t && (t = null),
                            i.UI.createMiniLoading(),
                            this._consumingItemId = t.itemID,
                            this._consumingItemCount = t.num,
                            this._sender.sendDataToServer(u.SEND_SPIRIT_USE_ITEM, t)
                    }
                        ,
                        e.onReceive = function(t) {
                            i.UI.closeMiniLoading(),
                                "string" == typeof t ? i.UI.alert("", t, n.OK, null) : t instanceof r && (s.save(this._consumingItemId),
                                    c.getSpiritBag(),
                                1 == a.spiritBagPanel.useStriveUI.visible && (o.currentStriveItem && (o.currentStriveItem.count = t.itemLeft),
                                    a.spiritBagPanel.useStriveUI.spiritData = t.spirits[0],
                                    a.spiritBagPanel.useStriveUI.itemData = o.currentStriveItem,
                                    a.spiritBagPanel.useStriveUI.showAnimation()),
                                1 == a.spiritBagPanel.propertiesDetail.visible && (o.currentStriveItem && (o.currentStriveItem.count = t.itemLeft),
                                    a.spiritBagPanel.propertiesDetail.spiritData = t.spirits[0],
                                    a.spiritBagPanel.propertiesDetail.itemData = o.currentStriveItem),
                                    a.spiritBagPanel.displayRestoreAnimation(),
                                    a.spiritBagPanel.currentSpirit.cleanResData(),
                                    a.spiritBagPanel.currentEquip.cleanResData())
                        }
                        ,
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
