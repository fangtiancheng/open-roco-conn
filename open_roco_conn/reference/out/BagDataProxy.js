System.register("chunks:///_virtual/BagDataProxy.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpiritBagRefProxy.ts"], (function(t) {
        var e, n, a;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    a = t.SpiritBagRefProxy
                }
            ],
            execute: function() {
                n._RF.push({}, "6f4c6pxnuhM2Zqa3yMsE3Mi", "BagDataProxy", void 0);
                var i = t("BagDataProxy", function() {
                    function t(t) {
                        throw new Error("BagDataProxy is static class and can not be instantiated.")
                    }
                    return t.initialize = function() {
                        this._data = []
                    }
                        ,
                        t.dispose = function() {
                            this._data = []
                        }
                        ,
                        e(t, null, [{
                            key: "data",
                            get: function() {
                                return this._data
                            },
                            set: function(t) {
                                this._data = t,
                                    a.spiritBagPanel.update()
                            }
                        }, {
                            key: "selectedIndex",
                            get: function() {
                                return this._selectedIndex
                            },
                            set: function(t) {
                                this._selectedIndex = t
                            }
                        }, {
                            key: "selectedSpirit",
                            get: function() {
                                return this._data[this._selectedIndex]
                            }
                        }]),
                        t
                }());
                i._data = void 0,
                    i._selectedIndex = void 0,
                    i.striveChange = !1,
                    n._RF.pop()
            }
        }
    }
));
