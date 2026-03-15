System.register("chunks:///_virtual/DiamondShopItemIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, n, o, r;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    o = t.cclegacy,
                        r = t.Component
                }
            ],
            execute: function() {
                o._RF.push({}, "4af01KPw9dIULOqUqSv2Sfe", "DiamondShopItemIcon", void 0);
                t("DiamondShopItemIcon", function(t) {
                    function o() {
                        for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                            o[r] = arguments[r];
                        return (e = t.call.apply(t, [this].concat(o)) || this)._currentItem = void 0,
                            e
                    }
                    return e(o, t),
                        o.prototype.onLoad = function() {}
                        ,
                        n(o, [{
                            key: "item",
                            get: function() {
                                return this._currentItem
                            }
                        }, {
                            key: "data",
                            set: function(t) {
                                this._currentItem != t && (this._currentItem = t,
                                    this.node.removeAllChildren(),
                                    t.itemType)
                            }
                        }]),
                        o
                }(r));
                o._RF.pop()
            }
        }
    }
));
