System.register("chunks:///_virtual/NetDataSenderReceiver.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AbstractDataReceiver.ts", "./global.ts", "./BagDataProcessor.ts", "./FollowUserProcessor.ts", "./MoveToStorageProcessor.ts", "./RefreshTalentResultProcessor.ts", "./SaveChangeStriveProcessor.ts", "./SpiritInfoProcessor.ts", "./SwapSpiritsProcessor.ts", "./UseItemProcessor.ts", "./ServerKeywords.ts"], (function(e) {
        var s, r, o, t, a, c, i, P, n, l, S, _, v, I;
        return {
            setters: [function(e) {
                s = e.inheritsLoose,
                    r = e.assertThisInitialized
            }
                , function(e) {
                    o = e.cclegacy
                }
                , function(e) {
                    t = e.AbstractDataReceiver
                }
                , function(e) {
                    a = e.__global
                }
                , function(e) {
                    c = e.BagDataProcessor
                }
                , function(e) {
                    i = e.FollowUserProcessor
                }
                , function(e) {
                    P = e.MoveToStorageProcessor
                }
                , function(e) {
                    n = e.RefreshTalentResultProcessor
                }
                , function(e) {
                    l = e.SaveChangeStriveProcessor
                }
                , function(e) {
                    S = e.SpiritInfoProcessor
                }
                , function(e) {
                    _ = e.SwapSpiritsProcessor
                }
                , function(e) {
                    v = e.UseItemProcessor
                }
                , function(e) {
                    I = e.ServerKeywords
                }
            ],
            execute: function() {
                o._RF.push({}, "6a0e0wVSRRJsrhkR1N05rKU", "NetDataSenderReceiver", void 0);
                e("NetDataSenderReceiver", function(e) {
                    function o() {
                        var s;
                        return (s = e.call(this) || this)._receiveCallbacks = void 0,
                            s._bagDataProcessor = void 0,
                            s._followUserProcessor = void 0,
                            s._swapSpiritsProcessor = void 0,
                            s._useItemProcessor = void 0,
                            s._moveToStorageProcessor = void 0,
                            s._spiritInfoProcessor = void 0,
                            s._refreshTalentResultProcessor = void 0,
                            s._saveChangeStriveProcessor = void 0,
                            s._receiveCallbacks = [],
                            s._bagDataProcessor = new c,
                            s._followUserProcessor = new i,
                            s._swapSpiritsProcessor = new _,
                            s._useItemProcessor = new v,
                            s._moveToStorageProcessor = new P,
                            s._spiritInfoProcessor = new S,
                            s._refreshTalentResultProcessor = new n,
                            s._saveChangeStriveProcessor = new l,
                            a.SysAPI.getNetSysAPI().addDataProcessor(s._followUserProcessor),
                            a.SysAPI.getNetSysAPI().addDataProcessor(s._swapSpiritsProcessor),
                            a.SysAPI.getNetSysAPI().addDataProcessor(s._useItemProcessor),
                            a.SysAPI.getNetSysAPI().addDataProcessor(s._moveToStorageProcessor),
                            a.SysAPI.getNetSysAPI().addDataProcessor(s._spiritInfoProcessor),
                            a.SysAPI.getNetSysAPI().addDataProcessor(s._refreshTalentResultProcessor),
                            a.SysAPI.getNetSysAPI().addDataProcessor(s._saveChangeStriveProcessor),
                            a.SysAPI.getNetSysAPI().addDataReceiver(r(s)),
                            s
                    }
                    s(o, e);
                    var t = o.prototype;
                    return t.finalize = function() {
                        e.prototype.finalize.call(this),
                            a.SysAPI.getNetSysAPI().removeDataReceiver(this),
                            a.SysAPI.getNetSysAPI().removeDataProcessor(this._followUserProcessor),
                            a.SysAPI.getNetSysAPI().removeDataProcessor(this._swapSpiritsProcessor),
                            a.SysAPI.getNetSysAPI().removeDataProcessor(this._useItemProcessor),
                            a.SysAPI.getNetSysAPI().removeDataProcessor(this._moveToStorageProcessor),
                            a.SysAPI.getNetSysAPI().removeDataProcessor(this._spiritInfoProcessor),
                            a.SysAPI.getNetSysAPI().removeDataProcessor(this._refreshTalentResultProcessor),
                            a.SysAPI.getNetSysAPI().removeDataProcessor(this._saveChangeStriveProcessor),
                            this._receiveCallbacks = [],
                            this._bagDataProcessor = null,
                            this._followUserProcessor = null,
                            this._swapSpiritsProcessor = null,
                            this._useItemProcessor = null,
                            this._moveToStorageProcessor = null,
                            this._spiritInfoProcessor = null,
                            this._refreshTalentResultProcessor = null,
                            this._saveChangeStriveProcessor = null
                    }
                        ,
                        t.onDataReceive = function(e, s) {
                            for (var r = this.getAcceptTypes(), o = r.length, t = 0; t < o; ++t)
                                if (e == r[t])
                                    return void (null != this._receiveCallbacks[t] && this._receiveCallbacks[t](s))
                        }
                        ,
                        t.getAcceptTypes = function() {
                            return [I.RECV_SPIRIT_FOLLOW_USER, I.RECV_SWAP_SPIRITS, I.RECV_ITEMS_BY_TYPE, I.RECV_SPIRIT_USE_ITEM, I.RECV_SPIRIT_TO_STORAGE, I.RECV_SPIRIT_INFO, I.RECV_REFRESH_SPIRIT_TALENT, I.SAVE_STRIVE_ADD]
                        }
                        ,
                        t.addReceiveCallback = function(e, s) {
                            for (var r = this.getAcceptTypes(), o = r.length, t = 0; t < o; ++t)
                                if (e == r[t])
                                    return void (null == this._receiveCallbacks[t] && (this._receiveCallbacks[t] = s))
                        }
                        ,
                        o
                }(t));
                o._RF.pop()
            }
        }
    }
));
