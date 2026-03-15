System.register("chunks:///_virtual/SpiritInfoSearch.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./PReadHelp.ts"], (function(t) {
        var n, i, e, r;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    e = t.EventDispatcher
                }
                , function(t) {
                    r = t.PReadHelp
                }
            ],
            execute: function() {
                i._RF.push({}, "8baf4Az6NBBirZUdA8TByUI", "SpiritInfoSearch", void 0),
                    t("SpiritInfoSearch", function(t) {
                        function i(n) {
                            var i;
                            return (i = t.call(this) || this)._system = void 0,
                                i
                        }
                        n(i, t),
                            i.getInstance = function() {
                                return null == this._instance && (this._instance = new i(new s)),
                                    this._instance
                            }
                        ;
                        var e = i.prototype;
                        return e.initialize = function(t) {
                            this._system = t
                        }
                            ,
                            e.getOwnSpiritInfo = function(t) {
                                return this._system.getCurrCombatData().myInfo.spirits[t - 1]
                            }
                            ,
                            e.getNewSpiritInfo = function(t) {
                                return r.spiritProxy.select(t)
                            }
                            ,
                            i
                    }(e))._instance = void 0;
                var s = function() {};
                i._RF.pop()
            }
        }
    }
));
