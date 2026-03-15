System.register("chunks:///_virtual/ItemShellDataProxy.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ItemUtils.ts", "./SpiritBagRefProxy.ts"], (function(t) {
        var e, n, i, a;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    i = t.ItemUtils
                }
                , function(t) {
                    a = t.SpiritBagRefProxy
                }
            ],
            execute: function() {
                n._RF.push({}, "9226428fKhEz5nykC/Yr71r", "ItemShellDataProxy", void 0);
                var r = t("ItemShellDataProxy", function() {
                    function t() {
                        throw new Error("ItemShellDataProxy is static class and can not be instantiated.")
                    }
                    return t.initialize = function() {
                        t._data = []
                    }
                        ,
                        t.dispose = function() {
                            t._data = []
                        }
                        ,
                        t.filterItems = function(t) {
                            if (null == t)
                                return [];
                            for (var e, n = t.length, a = [], r = 0; r < n; ++r)
                                null != (e = t[r]) && i.isDisplayableCombatItem(e.itemDes) && a.push(e);
                            return a.length > 0 ? a : []
                        }
                        ,
                        e(t, null, [{
                            key: "data",
                            get: function() {
                                return t._data
                            },
                            set: function(e) {
                                t._data = t.filterItems(e),
                                    a.spiritBagPanel.itemShell.update()
                            }
                        }]),
                        t
                }());
                r._data = void 0,
                    r.currentStriveItem = void 0,
                    n._RF.pop()
            }
        }
    }
));
