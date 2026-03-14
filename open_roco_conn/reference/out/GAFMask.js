System.register("chunks:///_virtual/GAFMask.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GAFObject.ts", "./GAFSpriteProto.ts"], (function(t) {
        var o, e, r, n, i, a, s, f, l, p;
        return {
            setters: [function(t) {
                o = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy,
                        r = t.assert,
                        n = t.SpriteFrame,
                        i = t.Sprite,
                        a = t.Mask,
                        s = t.UITransform,
                        f = t.AffineTransform
                }
                , function(t) {
                    l = t.GAFObject
                }
                , function(t) {
                    p = t.GAFSpriteProto
                }
            ],
            execute: function() {
                e._RF.push({}, "9743cbLuPNAF6NPQdHaSEHn", "GAFMask", void 0);
                t("GAFMask", function(t) {
                    function e(o, e) {
                        var n;
                        return (n = t.call(this, e) || this)._gafproto = void 0,
                            r(null != o, "错误！缺少必需的参数。"),
                            n._gafproto = o,
                            n
                    }
                    o(e, t);
                    var c = e.prototype;
                    return c._init = function() {
                        var t = this._gafproto.getMaskNodeProto();
                        if (t instanceof p) {
                            r(null != t, "错误。未找到id引用为 " + this._gafproto.getIdRef() + " 的遮罩节点。");
                            var o = t.getFrame();
                            r(o instanceof n, "错误。对象类型不正确。");
                            var e = this.getComponent(i);
                            e || (e = this.addComponent(i)),
                                e.spriteFrame = o;
                            var f = this.getComponent(a);
                            null == f && (f = this.addComponent(a)),
                                f.alphaThreshold = .5,
                                f.type = a.Type.SPRITE_STENCIL;
                            var l = t.getAnchor()
                                , c = this.getComponent(s);
                            l && c.setAnchorPoint(l.x, l.y)
                        } else
                            r(null != t, "错误。未找到id引用为 " + this._gafproto.getIdRef() + " 的遮罩节点。")
                    }
                        ,
                        c.setExternalTransform = function(t, o, e) {
                            var n = this._gafproto.getMaskNodeProto();
                            if (n instanceof p) {
                                var i = n.getScale()
                                    , a = t;
                                if (1 != i && ((a = f.clone(t)).tx *= i,
                                    a.ty *= i),
                                this._additionalTransform && l.areTransformsEqual(this._additionalTransform, a))
                                    this.isUpdateTransform = !1;
                                else {
                                    this._additionalTransform = a;
                                    var s = a
                                        , c = this.CGAffineToGL(s);
                                    this.matrix = c,
                                        this.isUpdateTransform = !0
                                }
                            } else
                                r(null != n, "错误。未找到id引用为 " + this._gafproto.getIdRef() + " 的遮罩节点。")
                        }
                        ,
                        e
                }(l));
                e._RF.pop()
            }
        }
    }
));
