System.register("chunks:///_virtual/GAFSpriteRender.ts", ["cc", "./GAFMacros.ts"], (function(t) {
        var i, r, e, s, a, n, l;
        return {
            setters: [function(t) {
                i = t.cclegacy,
                    r = t.resources,
                    e = t.Material,
                    s = t.assert,
                    a = t.v4,
                    n = t.mat4
            }
                , function(t) {
                    l = t.GAFMacros
                }
            ],
            execute: function() {
                i._RF.push({}, "164cbpUlHJE6ISCXHl0eOs6", "GAFSpriteRender", void 0);
                t("GAFSpriteRender", function() {
                    function t(t) {
                        this._identityVec = [1, 1, 1, 1],
                            this._zeroVec = [0, 0, 0, 0],
                            this._identityMat = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                            this._tintMult = null,
                            this._tintOffset = null,
                            this._ctxMatrixBody = null,
                            this._ctxMatrixAppendix = null,
                            this._renderState = 0,
                            this._sprite = null,
                            this._material = null,
                            this._sprite = t,
                            this._renderState = 0,
                            this._tintMult = null,
                            this._tintOffset = null,
                            this._ctxMatrixBody = null,
                            this._ctxMatrixAppendix = null
                    }
                    var i = t.prototype;
                    return i._disableCtx = function() {
                        this._renderState = 0,
                            this._sprite.customMaterial = null,
                            this._material = null
                    }
                        ,
                        i._enableCtx = function() {
                            this._renderState = 1;
                            var t = r.get("materials/gaf-sprite-material", e);
                            s(null != t, "GAFSpriteRender: GAF材质未加载 gaf-sprite-material"),
                                this._sprite.customMaterial = t,
                                this._material = this._sprite.getMaterialInstance(0)
                        }
                        ,
                        i.setUniform = function(t, i) {
                            if (this._material) {
                                var r = this._material.passes[0];
                                if (r) {
                                    var e = r.getHandle(t);
                                    r.setUniform(e, i)
                                }
                            }
                        }
                        ,
                        i._setUniforms = function() {
                            1 == this._renderState && (this.setUniform("CUSTOM_ALPHA", this._renderState),
                                this.setUniform("colorTransformMult", a.apply(void 0, this._tintMult)),
                                this.setUniform("colorTransformOffsets", a.apply(void 0, this._tintOffset)),
                                this._ctxMatrixBody && this._ctxMatrixAppendix ? (this.setUniform("colorMatrix", n.apply(void 0, this._ctxMatrixBody)),
                                    this.setUniform("colorMatrix2", a.apply(void 0, this._ctxMatrixAppendix))) : (this.setUniform("colorMatrix", n.apply(void 0, this._identityMat)),
                                    this.setUniform("colorMatrix2", a.apply(void 0, this._zeroVec))))
                        }
                        ,
                        i._applyCtxState = function(t) {
                            var i = t._cascadeColorMult;
                            this._tintMult = [i.r / 255, i.g / 255, i.b / 255, i.a / 255];
                            var r = t._cascadeColorOffset;
                            this._tintOffset = [r.r / 255, r.g / 255, r.b / 255, r.a / 255];
                            var e = t._filterStack;
                            if (e && e.length > 0 && e[0].type === l.EFFECT_COLOR_MATRIX) {
                                var s = e[0].colorMatrix;
                                this._ctxMatrixBody = [s.rr, s.rg, s.rb, s.ra, s.gr, s.gg, s.gb, s.ga, s.br, s.bg, s.bb, s.ba, s.ar, s.ag, s.ab, s.aa],
                                    this._ctxMatrixAppendix = [s.r / 255, s.g / 255, s.b / 255, s.a / 255]
                            } else
                                this._ctxMatrixBody = null,
                                    this._ctxMatrixAppendix = null;
                            this._setUniforms()
                        }
                        ,
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
