System.register("chunks:///_virtual/GAFAssetPreload.ts", ["cc", "./GAFMacros.ts", "./GAFTimeLineProto.ts", "./GAFAssetManager.ts"], (function(t) {
        var e, s, a, n, o, i, r;
        return {
            setters: [function(t) {
                e = t.cclegacy,
                    s = t.rect,
                    a = t.SpriteFrame,
                    n = t.assert
            }
                , function(t) {
                    o = t.GAFMacros
                }
                , function(t) {
                    i = t.GAFTimeLineProto
                }
                , function(t) {
                    r = t.GAFAssetManager
                }
            ],
            execute: function() {
                e._RF.push({}, "9056bwHMS5Lybqb7af2L83G", "GAFAssetPreload", void 0);
                t("GAFAssetPreload", function() {
                    function t() {
                        this.assets = new Map,
                            this[0] = this.End,
                            this[1] = this.Atlases,
                            this[2] = this.AnimationMasks,
                            this[3] = this.AnimationObjects,
                            this[4] = this.AnimationFrames,
                            this[5] = this.NamedParts,
                            this[6] = this.Sequences,
                            this[7] = this.TextFields,
                            this[8] = this.Atlases,
                            this[9] = this.Stage,
                            this[10] = this.AnimationObjects,
                            this[11] = this.AnimationMasks,
                            this[12] = this.AnimationFrames,
                            this[13] = this.TimeLine
                    }
                    t.CGAffineTransformCocosFormatFromFlashFormat = function(t) {
                        var e = {};
                        return e.a = t.a,
                            e.b = -t.b,
                            e.c = -t.c,
                            e.d = t.d,
                            e.tx = t.tx,
                            e.ty = -t.ty,
                            e
                    }
                    ;
                    var e = t.prototype;
                    return e.End = function(t, e, s) {
                        s && (s.getFps = function() {
                                return t.getSceneFps()
                            }
                        )
                    }
                        ,
                        e.Tag = function(t, e, s) {
                            this[e.tagId].call(this, t, e.content, s)
                        }
                        ,
                        e.Tags = function(t, e, s) {
                            var a = this;
                            e.forEach((function(e) {
                                    a.Tag(t, e, s)
                                }
                            ))
                        }
                        ,
                        e.AtlasCreateFrames = function(t, e, n) {
                            t.forEach((function(t) {
                                    var o = e._atlases[t.atlasId]
                                        , i = s(t.origin.x, t.origin.y, t.size.x, t.size.y)
                                        , r = new a;
                                    r.texture = o,
                                        r.rect = i,
                                        r.rect.width *= 1 / t.scale,
                                        r.rect.height *= 1 / t.scale,
                                        r._gafAnchor = {
                                            x: 0 - (0 - t.pivot.x / t.size.x),
                                            y: 1 - t.pivot.y / t.size.y + 0
                                        },
                                        r._scale_ = 1 / t.scale,
                                        n[t.elementAtlasId] = r
                                }
                            ))
                        }
                        ,
                        e.Atlases = function(t, e, s) {
                            var a = this
                                , o = t._atlasScales[e.scale] = t._atlasScales[e.scale] || []
                                , i = [];
                            e.atlases.forEach((function(s) {
                                    var c = s.id
                                        , f = function() {
                                        a.AtlasCreateFrames(e.elements, t, o)
                                    }
                                        , h = "";
                                    if (s.sources.forEach((function(t) {
                                            1 === t.csf && (h = t.source)
                                        }
                                    )),
                                        n("" != h, "GAF Error. Texture for current CSF not found. Reconvert animation with correct parameters."),
                                    t._textureLoadDelegate && (h = t._textureLoadDelegate(h)),
                                    t._atlases[c] || r.Instance.hasTexture2D(h)) {
                                        if (!t._atlases[c]) {
                                            var l = r.Instance.getTexture2D(h);
                                            a.assets.set(h, 1),
                                                t._atlases[c] = l
                                        }
                                        i.push(f),
                                        e.atlases.length == i.length && (i.forEach((function(t) {
                                                return t()
                                            }
                                        )),
                                            i = [])
                                    } else
                                        t._atlasesToLoad.hasOwnProperty(c) || (r.Instance.loadTexture2D(h, (function(e, s) {
                                                null == e ? a.assets ? (a.assets.set(h, 1),
                                                    t._onAtlasLoaded(c, s)) : r.Instance.release(h) : console.warn("GAF atlasPath ERRORS:", h, t.getGAFFileName(), e)
                                            }
                                        )),
                                            t._atlasesToLoad[c] = {}),
                                            t._onLoadTasks.push(f)
                                }
                            ))
                        }
                        ,
                        e.AnimationObjects = function(t, e, s) {
                            e.forEach((function(e) {
                                    e.type = void 0 === e.type ? o.TYPE_TEXTURE : e.type,
                                        s._objects.push(e.objectId),
                                        t._objects[e.objectId] = e
                                }
                            ))
                        }
                        ,
                        e.convertTint = function(t, e) {
                            return t ? {
                                mult: {
                                    r: 255 * t.redMultiplier,
                                    g: 255 * t.greenMultiplier,
                                    b: 255 * t.blueMultiplier,
                                    a: 255 * e
                                },
                                offset: {
                                    r: 255 * t.redOffset,
                                    g: 255 * t.greenOffset,
                                    b: 255 * t.blueOffset,
                                    a: 255 * t.alphaOffset
                                }
                            } : null
                        }
                        ,
                        e.convertState = function(e) {
                            return {
                                hasColorTransform: e.hasColorTransform,
                                hasMask: e.hasMask,
                                hasEffect: e.hasEffect,
                                objectIdRef: e.objectIdRef,
                                depth: e.depth,
                                alpha: 255 * e.alpha,
                                matrix: t.CGAffineTransformCocosFormatFromFlashFormat(e.matrix),
                                colorTransform: this.convertTint(e.colorTransform, e.alpha),
                                effect: e.effect,
                                maskObjectIdRef: e.maskObjectIdRef
                            }
                        }
                        ,
                        e.AnimationFrames = function(t, e, s) {
                            var a = this;
                            n(null != s, "Error. Time Line should not be null.");
                            for (var o = {}, i = [], r = 0, c = e.length; r < c; ++r) {
                                var f = e[r];
                                f.state && f.state.forEach((function(t) {
                                        0 !== t.alpha ? o[t.objectIdRef] = a.convertState(t) : o[t.objectIdRef] = null
                                    }
                                ));
                                var h = [];
                                for (var l in o)
                                    o.hasOwnProperty(l) && o[l] && h.push(o[l]);
                                i[f.frame - 1] = {
                                    states: h,
                                    actions: f.actions || null
                                }
                            }
                            s.frames = i
                        }
                        ,
                        e.NamedParts = function(t, e, s) {
                            var a = {};
                            e.forEach((function(t) {
                                    a[t.name] = t.objectId
                                }
                            )),
                                s.getNamedParts = function() {
                                    return a
                                }
                        }
                        ,
                        e.Sequences = function(t, e, s) {
                            var a = {};
                            e.forEach((function(t) {
                                    a[t.id] = {
                                        start: t.start - 1,
                                        end: t.end
                                    }
                                }
                            )),
                                s.getSequences = function() {
                                    return a
                                }
                        }
                        ,
                        e.TextFields = function(t, e, s) {}
                        ,
                        e.Stage = function(t, e, s) {
                            t._sceneFps = e.fps,
                                t._sceneColor = e.color,
                                t._sceneWidth = e.width,
                                t._sceneHeight = e.height
                        }
                        ,
                        e.AnimationMasks = function(t, e, s) {
                            e.forEach((function(e) {
                                    e.type = void 0 === e.type ? o.TYPE_TEXTURE : e.type,
                                        s._objects.push(e.objectId),
                                        t._masks[e.objectId] = e
                                }
                            ))
                        }
                        ,
                        e.TimeLine = function(t, e, s) {
                            var a = new i(e,t,e.animationFrameCount,e.boundingBox,e.pivotPoint,e.id,e.linkageName);
                            t._pushTimeLine(a),
                                this.Tags(t, e.tags, a)
                        }
                        ,
                        e.Release = function() {
                            for (var t = Array.from(this.assets.keys()), e = 0; e < t.length; e++) {
                                var s = t[e];
                                r.Instance.release(s)
                            }
                            this.assets.clear(),
                                this.assets = null
                        }
                        ,
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
