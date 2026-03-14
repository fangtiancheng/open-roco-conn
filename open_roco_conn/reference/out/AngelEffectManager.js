System.register("chunks:///_virtual/AngelEffectManager.ts", ["cc", "./CALLBACK.ts", "./CallbackCenter.ts"], (function(t) {
        var n, e, i;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
                , function(t) {
                    e = t.CALLBACK
                }
                , function(t) {
                    i = t.CallbackCenter
                }
            ],
            execute: function() {
                n._RF.push({}, "b4443igA8NItY6XAkD0ROnT", "AngelEffectManager", void 0);
                t("AngelEffectManager", function() {
                    function t(t) {
                        this.uiSys = void 0,
                            this.effects = void 0,
                            this.effectsCls = void 0,
                            this.uiSys = t,
                            this.effects = [],
                            i.registerCallBack(e.ANGEL_COMBAT_ON_A_COMBAT_END, this.onCombatEnd.bind(this), this)
                    }
                    var n = t.prototype;
                    return n.onCombatEnd = function(t, n, e, c) {
                        return i.EVENT_OK
                    }
                        ,
                        n.playEffect = function(t, n, e) {}
                        ,
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
