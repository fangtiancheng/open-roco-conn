System.register("chunks:///_virtual/SpiritStorageResAdapter.ts", ["cc", "./Constants.ts", "./global.ts"], (function(t) {
        var e, r, n;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
                , function(t) {
                    r = t.Constants
                }
                , function(t) {
                    n = t.__global
                }
            ],
            execute: function() {
                e._RF.push({}, "cfdfanPv05FbJzpmFwAlgoO", "SpiritStorageResAdapter", void 0),
                    t("SpiritStorageResAdapter", function() {
                        function t(t) {
                            if (this._resAdapter = void 0,
                            t != i)
                                throw new Error("Invalid Singleton access. Use SpiritStorageResAdapter.getInstance() instead.");
                            this._resAdapter = n.SysAPI.getResSysAPI().getResAdapter(r.COMBAT_RES)
                        }
                        t.getInstance = function() {
                            return null == t._instance && (t._instance = new t(i)),
                                t._instance
                        }
                        ;
                        var e = t.prototype;
                        return e.dispose = function() {
                            this._resAdapter = null
                        }
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
                            e.getSpiritGroupIcon = function(t) {
                                if (null == this._resAdapter)
                                    return null;
                                try {
                                    return this._resAdapter.getSpiritGroupImage(t)
                                } catch (t) {}
                                return null
                            }
                            ,
                            t
                    }())._instance = void 0;
                var i = function() {};
                e._RF.pop()
            }
        }
    }
));
