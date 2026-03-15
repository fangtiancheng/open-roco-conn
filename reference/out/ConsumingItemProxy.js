System.register("chunks:///_virtual/ConsumingItemProxy.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ConsumingItemData.ts", "./ItemShellDataProxy.ts"], (function(n) {
        var t, e, i, o;
        return {
            setters: [function(n) {
                t = n.createClass
            }
                , function(n) {
                    e = n.cclegacy
                }
                , function(n) {
                    i = n.ConsumingItemData
                }
                , function(n) {
                    o = n.ItemShellDataProxy
                }
            ],
            execute: function() {
                e._RF.push({}, "9fce50RFEFLWLwWraOlxL0Z", "ConsumingItemProxy", void 0),
                    n("ConsumingItemProxy", function() {
                        function n() {}
                        return n.save = function(n) {
                            for (var t = o.data, e = t.length, u = 0; u < e; ++u)
                                if (t[u].id == n)
                                    return this._consumingItem = new i,
                                        this._consumingItem.id = t[u].id,
                                        this._consumingItem.count = t[u].count,
                                        void (this._consumingItem.index = u);
                            this._consumingItem = null
                        }
                            ,
                            n.clear = function() {
                                this._consumingItem = null
                            }
                            ,
                            t(n, null, [{
                                key: "item",
                                get: function() {
                                    return this._consumingItem
                                }
                            }]),
                            n
                    }())._consumingItem = void 0,
                    e._RF.pop()
            }
        }
    }
));
