System.register("chunks:///_virtual/SpiritResAdapter.ts", ["cc", "./Constants.ts", "./global.ts"], (function(t) {
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
                e._RF.push({}, "26d4dJN7pVPMYqOQEPtUcBJ", "SpiritResAdapter", void 0);
                var i = t("SpiritResAdapter", function() {
                    function t(e) {
                        if (this._resAdapter = void 0,
                        e != s)
                            throw new Error("Invalid Singleton access. Use SpiritResAdapter.getInstance() instead.");
                        this._resAdapter = n.SysAPI.getResSysAPI().getResAdapter(r.COMBAT_RES),
                            this._resAdapter.cza = t._counter,
                            this.cza = t._counter,
                            t._counter++
                    }
                    t.getInstance = function() {
                        return null == this._instance && (this._instance = new t(s)),
                            this._instance
                    }
                    ;
                    var e = t.prototype;
                    return e.dispose = function() {}
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
                }());
                i._instance = void 0,
                    i._counter = 100;
                var s = function() {};
                e._RF.pop()
            }
        }
    }
));
