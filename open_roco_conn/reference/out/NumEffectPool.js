System.register("chunks:///_virtual/NumEffectPool.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NumberEffect.ts", "./NodeExtend.ts"], (function(t) {
        var n, e, f, o;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    f = t.NumberEffect
                }
                , function(t) {
                    o = t.NodeExtend
                }
            ],
            execute: function() {
                e._RF.push({}, "baf60mCYYJLa7ZQ64pmjluo", "NumEffectPool", void 0);
                t("NumEffectPool", function() {
                    function t() {
                        this.numEffectPool = void 0,
                            this.numEffectPool = new Map
                    }
                    var n = t.prototype;
                    return n.findNumEffect = function(t) {
                        return t in this.numEffectPool || (this.numEffectPool[t] = new Array),
                            this.numEffectPool[t].length > 0 ? this.numEffectPool[t].pop() : this.creatNumEffect(t)
                    }
                        ,
                        n.creatNumEffect = function(t) {
                            var n;
                            switch (t) {
                                case f.COMMON_EXP:
                                    n = new u;
                                    break;
                                case f.COMMON_GOODEXP:
                                    n = new c;
                                    break;
                                case f.COMMON_PERFECTEXP:
                                    n = new i
                            }
                            return this.numEffectPool[t].push(n),
                                n
                        }
                        ,
                        n.borrowNumEffect = function(t) {
                            return this.findNumEffect(t)
                        }
                        ,
                        n.disposeNumEffect = function(t, n) {
                            this.numEffectPool[t].push(n)
                        }
                        ,
                        n.dispose = function() {
                            this.numEffectPool = null
                        }
                        ,
                        t
                }());
                var u = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    return n(e, t),
                        e
                }(o)
                    , c = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    return n(e, t),
                        e
                }(o)
                    , i = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    return n(e, t),
                        e
                }(o);
                e._RF.pop()
            }
        }
    }
));
