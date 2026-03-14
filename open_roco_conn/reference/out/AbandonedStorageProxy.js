System.register("chunks:///_virtual/AbandonedStorageProxy.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./P_FreeRequest.ts", "./P_DGetAbandonSpiritsList.ts", "./P_DGetSpiritsDetail.ts", "./P_ReqSpiritsDetail.ts", "./SpiritKey.ts", "./P_AdoptSpirit.ts"], (function(i) {
        var t, n, e, o, s, l, r, c, a;
        return {
            setters: [function(i) {
                t = i.createClass
            }
                , function(i) {
                    n = i.cclegacy
                }
                , function(i) {
                    e = i.__global
                }
                , function(i) {
                    o = i.P_FreeRequest
                }
                , function(i) {
                    s = i.P_DGetAbandonSpiritsList
                }
                , function(i) {
                    l = i.P_DGetSpiritsDetail
                }
                , function(i) {
                    r = i.P_ReqSpiritsDetail
                }
                , function(i) {
                    c = i.SpiritKey
                }
                , function(i) {
                    a = i.P_AdoptSpirit
                }
            ],
            execute: function() {
                n._RF.push({}, "07368YMQ1BAx7LRRwzY7sAW", "AbandonedStorageProxy", void 0);
                var p = i("AbandonedStorageProxy", function() {
                    function i() {
                        this._compatibleAPI = void 0
                    }
                    var n = i.prototype;
                    return n.initialize = function() {
                        null != this._compatibleAPI && (this._compatibleAPI.proxy = this)
                    }
                        ,
                        n.dispose = function() {}
                        ,
                        n.requestSpiritList = function() {
                            null != e.UI && e.UI.createMiniLoading(),
                                new o(i.CMD_SPIRIT_LIST,null,s,this.onReceiveSpiritList.bind(this)).send()
                        }
                        ,
                        n.requestSpiritDetail = function(t, n) {
                            null != e.UI && e.UI.createMiniLoading();
                            var s = new r;
                            s.fill([new c(t,n)]),
                                new o(i.CMD_SPIRIT_DETAIL,s,l,this.onReceiveSpiritDetail.bind(this)).send()
                        }
                        ,
                        n.requestSpiritAdoption = function(t, n) {
                            null != e.UI && e.UI.createMiniLoading();
                            var s = new a;
                            s.key = new c(t,n),
                                new o(i.CMD_SPIRIT_ADOPTION,s,a,this.onReceiveSpiritAdoption.bind(this)).send()
                        }
                        ,
                        n.onReceiveSpiritList = function(i) {
                            null != e.UI && e.UI.closeMiniLoading(),
                            null != this._compatibleAPI && this._compatibleAPI.onGotAbandonSpiritList(i)
                        }
                        ,
                        n.onReceiveSpiritDetail = function(i) {
                            null != e.UI && e.UI.closeMiniLoading(),
                            null != this._compatibleAPI && this._compatibleAPI.onGotSpiritDetail(i)
                        }
                        ,
                        n.onReceiveSpiritAdoption = function(i) {
                            null != e.UI && e.UI.closeMiniLoading(),
                            null != this._compatibleAPI && this._compatibleAPI.onSpiritAdoption(i)
                        }
                        ,
                        t(i, [{
                            key: "compatibleAPI",
                            set: function(i) {
                                this._compatibleAPI = i
                            }
                        }]),
                        i
                }());
                p.CMD_SPIRIT_LIST = 721012,
                    p.CMD_SPIRIT_DETAIL = 721010,
                    p.CMD_SPIRIT_ADOPTION = 721011,
                    n._RF.pop()
            }
        }
    }
));
