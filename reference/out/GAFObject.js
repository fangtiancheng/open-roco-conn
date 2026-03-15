System.register("chunks:///_virtual/GAFObject.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GAFMacros.ts"], (function(t) {
        var e, n, r, o, a, s, i, c, l, f, u;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createForOfIteratorHelperLoose
            }
                , function(t) {
                    r = t.cclegacy,
                        o = t.AffineTransform,
                        a = t.Mat4,
                        s = t.UIOpacity,
                        i = t.Sprite,
                        c = t.color,
                        l = t.UITransform,
                        f = t.Node
                }
                , function(t) {
                    u = t.GAFMacros
                }
            ],
            execute: function() {
                r._RF.push({}, "63a97AFH0FK8oUl3LFPbG9y", "GAFObject", void 0);
                t("GAFObject", function(t) {
                    function r(e) {
                        var n;
                        (n = t.call(this) || this)._asset = null,
                            n._className = "GAFObject",
                            n._gafproto = null,
                            n._parentTimeLine = null,
                            n._lastVisibleInFrame = 0,
                            n._filterStack = null,
                            n._cascadeColorMult = null,
                            n._cascadeColorOffset = null,
                            n._needsCtx = !1,
                            n._usedAtlasScale = 1,
                            n._additionalTransform = null,
                            n._curMatrix = null,
                            n.isUpdateTransform = !1,
                        1 == arguments.length && (n._usedAtlasScale = e),
                            n._cascadeColorMult = c(255, 255, 255, 255),
                            n._cascadeColorOffset = c(0, 0, 0, 0),
                            n._filterStack = [];
                        var r = n.getComponent(l);
                        r || n.addComponent(l);
                        var o = n.getComponent(s);
                        return o || n.addComponent(s),
                            n
                    }
                    e(r, t),
                        r._stateHasCtx = function(t) {
                            if (t.hasColorTransform && (t.colorTransform.offset.r > 0 || t.colorTransform.offset.g > 0 || t.colorTransform.offset.b > 0 || t.colorTransform.offset.a > 0))
                                return !0;
                            if (t.hasEffect)
                                for (var e = 0, n = t.effect.length; e < n; ++e)
                                    if (t.effect[e].type === u.EFFECT_COLOR_MATRIX)
                                        return !0;
                            return !1
                        }
                        ,
                        r.updateZIndex = function(t, e) {
                            if (t.parent) {
                                t._zIndex_ = e;
                                var r = t.parent.children.concat();
                                r.sort((function(t, e) {
                                        return null == t._zIndex_ && (t._zIndex_ = 1e5),
                                        null == e._zIndex_ && (e._zIndex_ = 1e5),
                                        t._zIndex_ - e._zIndex_
                                    }
                                ));
                                for (var o, a = r.length, s = n(r); !(o = s()).done; ) {
                                    o.value.setSiblingIndex(a)
                                }
                            }
                        }
                        ,
                        r.areTransformsEqual = function(t, e) {
                            return t.a === e.a && t.b === e.b && t.c === e.c && t.d === e.d && t.tx === e.tx && t.ty === e.ty
                        }
                    ;
                    var f = r.prototype;
                    return f.setAnimationStartedNextLoopDelegate = function(t) {}
                        ,
                        f.setAnimationFinishedPlayDelegate = function(t) {}
                        ,
                        f.setLooped = function(t, e) {}
                        ,
                        f.getBoundingBoxForCurrentFrame = function() {
                            return null
                        }
                        ,
                        f.setFps = function(t) {}
                        ,
                        f.getObjectByName = function(t) {
                            return null
                        }
                        ,
                        f.clearSequence = function() {}
                        ,
                        f.getIsAnimationRunning = function() {
                            return !1
                        }
                        ,
                        f.getSequences = function() {
                            return []
                        }
                        ,
                        f.gotoAndStop = function(t) {}
                        ,
                        f.getStartFrame = function(t) {
                            return u.IDNONE
                        }
                        ,
                        f.setFramePlayedDelegate = function(t) {}
                        ,
                        f.getCurrentFrameIndex = function() {
                            return u.IDNONE
                        }
                        ,
                        f.getTotalFrameCount = function() {
                            return 0
                        }
                        ,
                        f.start = function() {}
                        ,
                        f.stop = function() {}
                        ,
                        f.isVisibleInCurrentFrame = function() {
                            return !(this._parentTimeLine && this._parentTimeLine.getCurrentFrameIndex() + 1 != this._lastVisibleInFrame)
                        }
                        ,
                        f.isDone = function() {
                            return !0
                        }
                        ,
                        f.playSequence = function(t, e, n) {
                            return !1
                        }
                        ,
                        f.isReversed = function() {
                            return !1
                        }
                        ,
                        f.setSequenceDelegate = function(t) {}
                        ,
                        f.setFrame = function(t) {
                            return !1
                        }
                        ,
                        f.setControlDelegate = function(t) {}
                        ,
                        f.getEndFrame = function(t) {
                            return u.IDNONE
                        }
                        ,
                        f.pauseAnimation = function() {}
                        ,
                        f.gotoAndPlay = function(t) {}
                        ,
                        f.isLooped = function() {
                            return !1
                        }
                        ,
                        f.resumeAnimation = function() {}
                        ,
                        f.setReversed = function(t) {}
                        ,
                        f.hasSequences = function() {
                            return !1
                        }
                        ,
                        f.getFps = function() {
                            return 60
                        }
                        ,
                        f.setLocator = function(t) {}
                        ,
                        f.scaleAffineTransform = function(t, e) {
                            var n = o.clone(t);
                            return n.a *= e,
                                n.b *= e,
                                n.c *= e,
                                n.d *= e,
                                n
                        }
                        ,
                        f.CGAffineToGL = function(t) {
                            null == this._curMatrix && (this._curMatrix = new a);
                            var e = this._curMatrix;
                            return e.m02 = e.m03 = e.m06 = e.m07 = e.m08 = e.m09 = e.m11 = e.m14 = 0,
                                e.m10 = e.m15 = 1,
                                e.m00 = t.a,
                                e.m04 = t.c,
                                e.m12 = t.tx,
                                e.m01 = t.b,
                                e.m05 = t.d,
                                e.m13 = t.ty,
                                e
                        }
                        ,
                        f.setExternalTransform = function(t, e, n) {
                            if (this._additionalTransform && r.areTransformsEqual(this._additionalTransform, t))
                                this.isUpdateTransform = !1;
                            else {
                                this._additionalTransform = t;
                                var o = this.CGAffineToGL(t);
                                this.matrix = o,
                                    this.isUpdateTransform = !0
                            }
                        }
                        ,
                        f.getExternalTransform = function() {
                            return this._additionalTransform
                        }
                        ,
                        f.setAnimationRunning = function(t, e) {}
                        ,
                        f._enableTick = function(t) {}
                        ,
                        f._resetState = function() {}
                        ,
                        f._updateVisibility = function(t, e) {
                            var n = t.hasColorTransform ? t.colorTransform.offset.a : 0
                                , r = this.getComponent(s)
                                , o = this.getComponent(i)
                                , a = t.alpha + n;
                            if (r && (r.opacity = a),
                                o) {
                                var l = o.color;
                                o.color = c(l.r, l.g, l.b, a)
                            }
                        }
                        ,
                        f.isVisible = function() {
                            var t = this.getComponent(s)
                                , e = this.getComponent(i);
                            return e ? e.color.a > 0 : !e || t.opacity > 0
                        }
                        ,
                        f.visit = function(t) {
                            this.isVisibleInCurrentFrame()
                        }
                        ,
                        f._getFilters = function() {
                            return null
                        }
                        ,
                        f._processAnimation = function(t) {}
                        ,
                        f._applyState = function(t, e, n, r) {
                            this._applyStateSuper(t, e, n, r)
                        }
                        ,
                        f._applyStateSuper = function(t, e, n, r) {
                            if (this._needsCtx = e._needsCtx,
                                this._filterStack.length = 0,
                                this._parentTimeLine = e,
                            1 != this._usedAtlasScale) {
                                var a = o.clone(t.matrix);
                                a.tx *= this._usedAtlasScale,
                                    a.ty *= this._usedAtlasScale,
                                    this.setExternalTransform(a, n, r)
                            } else
                                this.setExternalTransform(t.matrix, n, r);
                            t.hasEffect && (this._filterStack = this._filterStack.concat(t.effect),
                                this._needsCtx = !0),
                            e._filterStack && e._filterStack.length > 0 && (this._filterStack = this._filterStack.concat(e._filterStack)),
                            this._filterStack.length > 0 && this._filterStack[0].type === u.EFFECT_COLOR_MATRIX && (this._needsCtx = !0),
                                t.hasColorTransform ? (this._cascadeColorMult.r = t.colorTransform.mult.r * e._cascadeColorMult.r / 255,
                                    this._cascadeColorMult.g = t.colorTransform.mult.g * e._cascadeColorMult.g / 255,
                                    this._cascadeColorMult.b = t.colorTransform.mult.b * e._cascadeColorMult.b / 255,
                                    this._cascadeColorMult.a = t.colorTransform.mult.a * e._cascadeColorMult.a / 255,
                                    this._cascadeColorOffset.r = t.colorTransform.offset.r + e._cascadeColorOffset.r,
                                    this._cascadeColorOffset.g = t.colorTransform.offset.g + e._cascadeColorOffset.g,
                                    this._cascadeColorOffset.b = t.colorTransform.offset.b + e._cascadeColorOffset.b,
                                    this._cascadeColorOffset.a = t.colorTransform.offset.a + e._cascadeColorOffset.a) : (this._cascadeColorMult.r = e._cascadeColorMult.r,
                                    this._cascadeColorMult.g = e._cascadeColorMult.g,
                                    this._cascadeColorMult.b = e._cascadeColorMult.b,
                                    this._cascadeColorMult.a = t.alpha * (e._cascadeColorMult.a / 255),
                                    this._cascadeColorOffset.r = e._cascadeColorOffset.r,
                                    this._cascadeColorOffset.g = e._cascadeColorOffset.g,
                                    this._cascadeColorOffset.b = e._cascadeColorOffset.b,
                                    this._cascadeColorOffset.a = e._cascadeColorOffset.a),
                            (this._cascadeColorOffset.r > 0 || this._cascadeColorOffset.g > 0 || this._cascadeColorOffset.b > 0 || this._cascadeColorOffset.a > 0) && (this._needsCtx = !0)
                        }
                        ,
                        f._getNode = function() {
                            return this
                        }
                        ,
                        f._step = function() {}
                        ,
                        r
                }(f));
                r._RF.pop()
            }
        }
    }
));
