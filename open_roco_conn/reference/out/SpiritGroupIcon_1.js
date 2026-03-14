System.register("chunks:///_virtual/SpiritGroupIcon2.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./Constants.ts", "./Bitmap.ts"], (function(t) {
        var o, n, r, i, e, c, p;
        return {
            setters: [function(t) {
                o = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy,
                        r = t._decorator,
                        i = t.Component
                }
                , function(t) {
                    e = t.__global
                }
                , function(t) {
                    c = t.Constants
                }
                , function(t) {
                    p = t.Bitmap
                }
            ],
            execute: function() {
                var s;
                n._RF.push({}, "f5c0fH36TpMrqDUDEltvHYJ", "SpiritGroupIcon", void 0);
                var a = r.ccclass;
                r.property,
                    t("SpiritGroupIcon", a("SpiritGroupIcon")(s = function(t) {
                        function n() {
                            for (var o, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                                r[i] = arguments[i];
                            return (o = t.call.apply(t, [this].concat(r)) || this).tooltip = "",
                                o
                        }
                        return o(n, t),
                            n.prototype.load = function(t) {
                                if (null != e.SysAPI.getResSysAPI().getResAdapter(c.COMBAT_RES).getSpiritGroupImage(t)) {
                                    var o = new p;
                                    o.loadSpiritGroupImage(t),
                                        this.node.removeAllChildren(),
                                        this.node.addChild(o)
                                }
                            }
                            ,
                            n
                    }(i)) || s);
                n._RF.pop()
            }
        }
    }
));
