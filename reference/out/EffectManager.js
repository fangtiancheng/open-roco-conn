System.register("chunks:///_virtual/EffectManager.ts", ["cc", "./LevelupEffect.ts", "./AdvanceEffect.ts", "./NumberEffect.ts", "./NodeExtendEx.ts", "./ResManager.ts"], (function(e) {
        var t, n, f, c, i;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    n = e.LevelupEffect
                }
                , function(e) {
                    f = e.AdvanceEffect
                }
                , function(e) {
                    c = e.NumberEffect
                }
                , null, function(e) {
                    i = e.default
                }
            ],
            execute: function() {
                t._RF.push({}, "e5dbc1uC7xM1IM+gF9BzS1t", "EffectManager", void 0),
                    e("EffectManager", function() {
                        function e(e) {
                            if (this._levelEffect = void 0,
                                this._advanceEffect = void 0,
                                this._numberEffect = void 0,
                                this._callback = void 0,
                                this._params = void 0,
                                this._container = void 0,
                            null == e)
                                throw new Error("it is a single instance!")
                        }
                        e.getInstance = function() {
                            return null == this._instance && (this._instance = new e(new a)),
                                this._instance
                        }
                        ;
                        var t = e.prototype;
                        return t.initialize = function(e) {
                            this._container = e,
                                this._levelEffect = new n(i.Instance.getPrefabByName("guardianPet/effect/levelUp"),e),
                                this._numberEffect = new c(e),
                                this._advanceEffect = new f(i.Instance.getPrefabByName("guardianPet/effect/advance"),e),
                                this._levelEffect.init(),
                                this._advanceEffect.init()
                        }
                            ,
                            t.playNumEffect = function(e, t, n) {
                                this._numberEffect.play(e, t, n)
                            }
                            ,
                            t.playLevelupEffect = function(e, t) {
                                this._levelEffect.play(e, t)
                            }
                            ,
                            t.playAdavanceEffect = function(e, t) {
                                this._advanceEffect.play(e, t)
                            }
                            ,
                            t.dispose = function() {
                                this._advanceEffect.dispose(),
                                    this._numberEffect.dispose(),
                                    this._levelEffect.dispose(),
                                    this._advanceEffect = null,
                                    this._numberEffect = null,
                                    this._levelEffect = null
                            }
                            ,
                            e
                    }())._instance = void 0;
                var a = function() {};
                t._RF.pop()
            }
        }
    }
));
