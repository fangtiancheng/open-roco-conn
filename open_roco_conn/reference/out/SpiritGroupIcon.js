System.register("chunks:///_virtual/SpiritGroupIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts", "./SpiritBagSpiritIcon.ts", "./BuildLogHelper.ts"], (function(t) {
        var i, n, o, r, c;
        return {
            setters: [function(t) {
                i = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    o = t.default
                }
                , function(t) {
                    r = t.SpiritBagSpiritIcon
                }
                , function(t) {
                    c = t.default
                }
            ],
            execute: function() {
                n._RF.push({}, "6cc70bQ/LFPJbws/TrgBOen", "SpiritGroupIcon", void 0);
                t("SpiritGroupIcon", function(t) {
                    function n() {
                        return t.call(this) || this
                    }
                    i(n, t);
                    var r = n.prototype;
                    return r.load = function(t) {
                        this.clear(),
                        t > 0 && (this.loadSpiritGroupImage(t),
                            this.__id = t)
                    }
                        ,
                        r.loadSpiritGroupImage = function(t) {
                            var i = this;
                            t += 500,
                            1 == c.IS_LOCAL && console.log("setSkillIcon==>" + t),
                                o.Instance.loadingRes("combatIcon", "ICON_" + t, (function(t, n) {
                                        n && i.setSource(n)
                                    }
                                ))
                        }
                        ,
                        n
                }(r));
                n._RF.pop()
            }
        }
    }
));
