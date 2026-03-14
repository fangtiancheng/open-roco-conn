System.register("chunks:///_virtual/GAFSprite.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GAFObject.ts", "./GAFSpriteRender.ts"], (function(t) {
        var e, n, r, i, s, o, a, h, l;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy,
                        r = t.assert,
                        i = t.SpriteFrame,
                        s = t.Sprite,
                        o = t.UITransform,
                        a = t.Color
                }
                , function(t) {
                    h = t.GAFObject
                }
                , function(t) {
                    l = t.GAFSpriteRender
                }
            ],
            execute: function() {
                n._RF.push({}, "3363dF7kPtBs5jfZ1DEa/Fu", "GAFSprite", void 0);
                t("GAFSprite", function(t) {
                    function n(e, n) {
                        var i;
                        return (i = t.call(this, n) || this)._hasCtx = !1,
                            i._hasFilter = !1,
                            i._gafproto = void 0,
                            i._render = null,
                            r(null != e, "错误！缺少必需的参数。"),
                            i._gafproto = e,
                            i
                    }
                    e(n, t);
                    var p = n.prototype;
                    return p._init = function() {
                        var t = this._gafproto.getFrame();
                        r(t instanceof i, "错误。对象类型不正确。");
                        var e = this.getComponent(s);
                        e || (e = this.addComponent(s)),
                            e.spriteFrame = t;
                        var n = this._gafproto.getAnchor()
                            , a = this.getComponent(o);
                        n && a.setAnchorPoint(n.x, n.y),
                            this._render = new l(e)
                    }
                        ,
                        p.setExternalTransform = function(t, e, n) {
                            if (this._additionalTransform && h.areTransformsEqual(this._additionalTransform, t))
                                this.isUpdateTransform = !1;
                            else {
                                this._additionalTransform = t,
                                    this.isUpdateTransform = !0;
                                var r = t
                                    , i = this.CGAffineToGL(r);
                                this.matrix = i
                            }
                        }
                        ,
                        p._applyState = function(t, e, n, r) {
                            this._applyStateSuper(t, e, n, r);
                            var i = this.getComponent(s);
                            this._needsCtx ? (this._hasCtx || (this._enableCtx(),
                                this._hasCtx = !0),
                                this._applyCtxState(t)) : (this._hasCtx && (this._disableCtx(),
                                this._hasCtx = !1),
                            a.equals(i.color, this._cascadeColorMult) || (i.color = this._cascadeColorMult))
                        }
                        ,
                        p._enableCtx = function() {
                            this._render._enableCtx()
                        }
                        ,
                        p._disableCtx = function() {
                            this._render._disableCtx()
                        }
                        ,
                        p._applyCtxState = function(t) {
                            this._render._applyCtxState(this)
                        }
                        ,
                        p.getBoundingBoxForCurrentFrame = function() {
                            return this.getComponent(o).getBoundingBoxToWorld()
                        }
                        ,
                        n
                }(h));
                n._RF.pop()
            }
        }
    }
));
