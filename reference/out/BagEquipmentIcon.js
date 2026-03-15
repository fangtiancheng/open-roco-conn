System.register("chunks:///_virtual/BagEquipmentIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./EquipmentIcon.ts", "./ResManager.ts"], (function(t) {
        var n, o, e, i, a;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    o = t.cclegacy
                }
                , function(t) {
                    e = t.AgentNode
                }
                , function(t) {
                    i = t.EquipmentIcon
                }
                , function(t) {
                    a = t.default
                }
            ],
            execute: function() {
                o._RF.push({}, "b17f13BfhFLSof8jVwPK1tm", "BagEquipmentIcon", void 0);
                var s = function(t) {
                    function o() {
                        return t.apply(this, arguments) || this
                    }
                    return n(o, t),
                        o
                }(e);
                t("BagEquipmentIcon", function(t) {
                    function o(n, o, e, i, u) {
                        var r;
                        (r = t.call(this, n, o, e, i) || this)._staMC = void 0,
                            r.buttonMode = !0;
                        var c = a.Instance.getPrefabByName("SpiritBag_1600/EqItemStateRes_1600");
                        return r._staMC = new s(c),
                            r.addChild(r._staMC.target),
                            0 != r._data.spiritID ? r._staMC.gotoAndStop(1) : r._staMC.gotoAndStop(2),
                            r
                    }
                    return n(o, t),
                        o.prototype.update = function(n) {
                            t.prototype.update.call(this, n),
                                n && 0 != n.spiritID ? this._staMC.gotoAndStop(1) : this._staMC.gotoAndStop(2)
                        }
                        ,
                        o
                }(i));
                o._RF.pop()
            }
        }
    }
));
