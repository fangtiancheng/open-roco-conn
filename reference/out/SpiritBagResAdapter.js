System.register("chunks:///_virtual/SpiritBagResAdapter.ts", ["cc", "./Constants.ts", "./global.ts"], (function(t) {
        var e, r, i;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
                , function(t) {
                    r = t.Constants
                }
                , function(t) {
                    i = t.__global
                }
            ],
            execute: function() {
                e._RF.push({}, "b1014y58EBI+pquMNYbcsEf", "SpiritBagResAdapter", void 0);
                t("SpiritBagResAdapter", function() {
                    function t() {
                        this._resAdapter = void 0
                    }
                    var e = t.prototype;
                    return e.initialize = function() {
                        this._resAdapter = i.SysAPI.getResSysAPI().getResAdapter(r.COMBAT_RES)
                    }
                        ,
                        e.dispose = function() {}
                        ,
                        e.getSpiritIdleMC = function(t, e) {
                            return void 0 === e && (e = null),
                                null == this._resAdapter ? null : this._resAdapter.getSpiritIdleMC(t, e)
                        }
                        ,
                        e.returnSpiritIdleMC = function(t) {
                            null != this._resAdapter && this._resAdapter.returnSpiritIdleMC(t)
                        }
                        ,
                        e.getSpiritImage = function(t, e) {
                            return void 0 === e && (e = null),
                                null == this._resAdapter ? null : this._resAdapter.getSpiritImage(t, e)
                        }
                        ,
                        e.returnSpiritImage = function(t) {
                            null != this._resAdapter && this._resAdapter.returnSpiritImage(t)
                        }
                        ,
                        e.getSpiritIcon = function(t) {
                            return null == this._resAdapter ? null : this._resAdapter.getSpiritSkillImage(t)
                        }
                        ,
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
