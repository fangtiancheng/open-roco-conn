System.register("chunks:///_virtual/NumberEffect.ts", ["cc", "./NumEffectPool.ts"], (function(t) {
        var i, o;
        return {
            setters: [function(t) {
                i = t.cclegacy
            }
                , function(t) {
                    o = t.NumEffectPool
                }
            ],
            execute: function() {
                i._RF.push({}, "8bc50s8B1dBsLfnL3vYrRUb", "NumberEffect", void 0);
                var c = t("NumberEffect", function() {
                    function t(t) {
                        this.res = void 0,
                            this.space = 7,
                            this.container = void 0,
                            this._expStyle = void 0,
                            this._callback = void 0,
                            this._params = void 0,
                            this._pool = void 0,
                            this._curEffect = void 0,
                            this.container = t,
                            this._pool = new o
                    }
                    var i = t.prototype;
                    return i.init = function() {}
                        ,
                        i.play = function() {}
                        ,
                        i.onEffectComplete = function(t) {}
                        ,
                        i.place = function(t, i) {}
                        ,
                        i.dispose = function() {}
                        ,
                        t
                }());
                c.COMMON_EXP = 10,
                    c.COMMON_GOODEXP = 15,
                    c.COMMON_PERFECTEXP = 20,
                    i._RF.pop()
            }
        }
    }
));
