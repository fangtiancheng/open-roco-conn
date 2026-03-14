System.register("chunks:///_virtual/NetActionProxy.ts", ["cc", "./FollowUserAction.ts", "./GetItemListAction.ts", "./GetSpiritBagAction.ts", "./GetSpiritInfoAction.ts", "./MoveSpiritToStorageAction.ts", "./RefreshTalentResultAction.ts", "./SaveChangeStriveAction.ts", "./SwapSpiritsAction.ts", "./TrainOfflineAction.ts", "./UseItemAction.ts", "./NetDataSenderReceiver.ts"], (function(e) {
        var i, t, n, o, r, s, c, v, a, d, f, A;
        return {
            setters: [function(e) {
                i = e.cclegacy
            }
                , function(e) {
                    t = e.FollowUserAction
                }
                , function(e) {
                    n = e.GetItemListAction
                }
                , function(e) {
                    o = e.GetSpiritBagAction
                }
                , function(e) {
                    r = e.GetSpiritInfoAction
                }
                , function(e) {
                    s = e.MoveSpiritToStorageAction
                }
                , function(e) {
                    c = e.RefreshTalentResultAction
                }
                , function(e) {
                    v = e.SaveChangeStriveAction
                }
                , function(e) {
                    a = e.SwapSpiritsAction
                }
                , function(e) {
                    d = e.TrainOfflineAction
                }
                , function(e) {
                    f = e.UseItemAction
                }
                , function(e) {
                    A = e.NetDataSenderReceiver
                }
            ],
            execute: function() {
                i._RF.push({}, "6dd83QA/pVD+oZjUZOVp442", "NetActionProxy", void 0);
                var _ = e("NetActionProxy", function() {
                    function e() {
                        throw new Error("NetActionProxy is static class and can not be instantiated.")
                    }
                    return e.initialize = function() {
                        null == this._senderReceiver && (this._senderReceiver = new A,
                            e._getSpiritBagAction = new o,
                            e._followUserAction = new t(this._senderReceiver,this._senderReceiver),
                            e._getItemListAction = new n(this._senderReceiver,this._senderReceiver),
                            e._moveSpiritToStorageAction = new s(this._senderReceiver,this._senderReceiver),
                            e._getSpiritInfoAction = new r(this._senderReceiver,this._senderReceiver),
                            e._swapSpiritsAction = new a(this._senderReceiver,this._senderReceiver),
                            e._useItemAction = new f(this._senderReceiver,this._senderReceiver),
                            e._trainOfflineAction = new d,
                            e._saveChangeStriveAction = new v(this._senderReceiver,this._senderReceiver),
                            e._refreshTalentResultAction = new c(this._senderReceiver))
                    }
                        ,
                        e.dispose = function() {
                            this._senderReceiver && this._senderReceiver.finalize(),
                                this._senderReceiver = null
                        }
                        ,
                        e.getSpiritBag = function() {
                            e._getSpiritBagAction.send()
                        }
                        ,
                        e.followUser = function(i) {
                            e._followUserAction.send(i)
                        }
                        ,
                        e.swapSpirits = function(i, t) {
                            var n = new Object;
                            n.firstIndex = i,
                                n.secondIndex = t,
                                e._swapSpiritsAction.send(n)
                        }
                        ,
                        e.getItemList = function() {
                            e._getItemListAction.send()
                        }
                        ,
                        e.useItem = function(i, t, n, o, r) {
                            void 0 === r && (r = 1);
                            var s = new Object;
                            s.spiritID = i,
                                s.spiritIndex = t,
                                s.itemType = n,
                                s.itemID = o,
                                s.num = r,
                                e._useItemAction.send(s)
                        }
                        ,
                        e.moveSpiritToStorage = function(i) {
                            e._moveSpiritToStorageAction.send(i)
                        }
                        ,
                        e.getSpiritInfo = function(i, t) {
                            var n = new Object;
                            n.uin = i,
                                n.spiritIndex = t,
                                e._getSpiritInfoAction.send(n)
                        }
                        ,
                        e.trainOffline = function() {
                            e._trainOfflineAction.send()
                        }
                        ,
                        e.saveStriveAdd = function(i) {
                            e._saveChangeStriveAction.send(i)
                        }
                        ,
                        e
                }());
                _._senderReceiver = void 0,
                    _._getSpiritBagAction = void 0,
                    _._followUserAction = void 0,
                    _._getItemListAction = void 0,
                    _._moveSpiritToStorageAction = void 0,
                    _._getSpiritInfoAction = void 0,
                    _._swapSpiritsAction = void 0,
                    _._useItemAction = void 0,
                    _._trainOfflineAction = void 0,
                    _._saveChangeStriveAction = void 0,
                    _._refreshTalentResultAction = void 0,
                    i._RF.pop()
            }
        }
    }
));
