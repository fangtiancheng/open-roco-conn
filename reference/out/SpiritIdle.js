System.register("chunks:///_virtual/SpiritIdle.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(i) {
        var e, t, n;
        return {
            setters: [function(i) {
                e = i.inheritsLoose
            }
                , function(i) {
                    t = i.cclegacy,
                        n = i.Node
                }
            ],
            execute: function() {
                t._RF.push({}, "9dc6bqeFuBAC6lBWoJDc/A3", "SpiritIdle", void 0),
                    i("SpiritIdle", function(i) {
                        function t(e, t) {
                            var o;
                            return (o = i.call(this) || this)._movie = void 0,
                                o._width = 0,
                                o._height = 0,
                                o.__id = 0,
                                o._face = new n,
                                o.addChild(o._face),
                                o._width = e,
                                o._height = t,
                                o
                        }
                        e(t, i),
                            t.initialize = function(i) {
                                this._resModule = i
                            }
                        ;
                        var o = t.prototype;
                        return o.setIdleByID = function(i) {
                            this.__id = i,
                                this._movie = t._resModule.getSpiritIdleMC(i, this.getRes.bind(this)),
                            null != this._movie && this.addChild(this._movie)
                        }
                            ,
                            o.show = function() {
                                null != this._movie && this.addChild(this._movie)
                            }
                            ,
                            o.getRes = function(i) {}
                            ,
                            o.getFeatureIcon = function(i) {
                                return t._resModule.getSpiritSkillImage(i)
                            }
                            ,
                            o.getPetFace = function(i) {
                                t._resModule.getSpiritImage(i, this.onFace.bind(this))
                            }
                            ,
                            o.onFace = function(i) {}
                            ,
                            t
                    }(n))._resModule = void 0,
                    t._RF.pop()
            }
        }
    }
));
