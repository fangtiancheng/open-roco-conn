System.register("chunks:///_virtual/GAFTimeLine.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GAFMacros.ts", "./GAFObject.ts", "./GAFEvent.ts"], (function(e) {
        var t, n, i, s, r, a, o, u, _, c, h;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.createForOfIteratorHelperLoose
            }
                , function(e) {
                    i = e.cclegacy,
                        s = e.UITransform,
                        r = e.assert,
                        a = e.isValid,
                        o = e.Vec3,
                        u = e.Rect
                }
                , function(e) {
                    _ = e.GAFMacros
                }
                , function(e) {
                    c = e.GAFObject
                }
                , function(e) {
                    h = e.GAFEvent
                }
            ],
            execute: function() {
                i._RF.push({}, "c4759PRPrNDX4USDrjmqiSx", "GAFTimeLine", void 0),
                    e("GAFTimeLine", function(e) {
                        function i(t, n) {
                            var s;
                            return (s = e.call(this, n) || this)._objects = null,
                                s._container = null,
                                s._animationStartedNextLoopDelegate = null,
                                s._animationFinishedPlayDelegate = null,
                                s._framePlayedDelegate = null,
                                s._sequenceDelegate = null,
                                s._fps = 24,
                                s._frameTime = 1 / 24,
                                s._currentSequenceStart = _.FIRST_FRAME_INDEX,
                                s._currentSequenceEnd = _.FIRST_FRAME_INDEX,
                                s._totalFrameCount = 0,
                                s._isRunning = !1,
                                s._isLooped = !1,
                                s._isReversed = !1,
                                s._timeDelta = 0,
                                s._animationsSelectorScheduled = !1,
                                s._currentFrame = _.FIRST_FRAME_INDEX,
                                s._gafproto = null,
                                s._showingFrame = -1,
                                s._name1 = "GAFTimeLine",
                                s._destroyed = !1,
                                s._processAnimationsHandler = null,
                                s._aaa = !1,
                                s._flashStarted = !1,
                                s._objects = {},
                                r(null != t, "错误！缺少必需的参数。"),
                                s._gafproto = t,
                                s._name1 = "GAFTimeLine" + i.COUNTER,
                                i.COUNTER++,
                                s._destroyed = !1,
                                s
                        }
                        t(i, e),
                            i.rearrangeSubobject = function(e, t, n) {
                                t.parent !== e && (t.parent = e),
                                    t._zIndex_ = n
                            }
                        ;
                        var c = i.prototype;
                        return c._init = function() {
                            this.getComponent(s).setContentSize(this._gafproto.getBoundingBox()),
                                this._currentSequenceEnd = this._gafproto.getTotalFrames(),
                                this._totalFrameCount = this._currentSequenceEnd,
                                this._container = this;
                            for (var e = this._gafproto.getAsset(), t = this._gafproto.getObjects(), n = 0; n < t.length; n++) {
                                var r = t[n]
                                    , a = e._getProtos()[r];
                                if (a) {
                                    var o = this._gafproto.getNamedPart(r)
                                        , u = a._gafConstruct();
                                    u._name = o ? o.name : "GAF." + r,
                                    u instanceof i && u.setFps(24),
                                        this._objects[r] = u
                                }
                            }
                        }
                            ,
                            c.setAnimationStartedNextLoopDelegate = function(e) {
                                this._animationStartedNextLoopDelegate = e
                            }
                            ,
                            c.setAnimationFinishedPlayDelegate = function(e) {
                                this._animationFinishedPlayDelegate = e
                            }
                            ,
                            c.setLooped = function(e, t) {
                                if (this._isLooped = e,
                                    t)
                                    for (var n in this._objects) {
                                        this._objects[n].setLooped(e, t)
                                    }
                            }
                            ,
                            c.getBoundingBoxForCurrentFrame = function() {
                                var e = null
                                    , t = !0;
                                for (var n in this._objects) {
                                    var i = this._objects[n];
                                    if (i.isVisibleInCurrentFrame() && i.isVisible()) {
                                        var r = i.getBoundingBoxForCurrentFrame();
                                        if (!r)
                                            r = i.getComponent(s).getBoundingBoxToWorld();
                                        if (t)
                                            t = !1,
                                                e = r;
                                        else {
                                            var a = new u;
                                            u.union(e, r, a),
                                                e = a
                                        }
                                    }
                                }
                                return e
                            }
                            ,
                            c.setFps = function(e) {
                                for (var t in r(0 !== e, "错误！帧率设置为零。"),
                                    this._fps = e,
                                    this._frameTime = 1 / e,
                                    this._objects) {
                                    var n = this._objects[t];
                                    n instanceof i && n.setFps(e)
                                }
                            }
                            ,
                            c.getObjectByName = function(e) {
                                var t = e.split(".")
                                    , n = null
                                    , i = -1
                                    , s = this
                                    , r = {};
                                try {
                                    t.forEach((function(e) {
                                            var t = s._gafproto.getNamedParts();
                                            if (!t.hasOwnProperty(e))
                                                throw r.lastElement = e,
                                                    r;
                                            i = t[e],
                                                n = s._objects[i],
                                                s = n
                                        }
                                    ))
                                } catch (t) {
                                    if (t !== r)
                                        throw t;
                                    return console.warn("序列不正确：`" + e + "` 在：`" + r.lastElement + "`"),
                                        null
                                }
                                return n
                            }
                            ,
                            c.clearSequence = function() {
                                this._currentSequenceStart = _.FIRST_FRAME_INDEX,
                                    this._currentSequenceEnd = this._gafproto.getTotalFrames()
                            }
                            ,
                            c.getIsAnimationRunning = function() {
                                return this._isRunning
                            }
                            ,
                            c.gotoAndStop = function(e) {
                                var t = 0;
                                return t = "string" == typeof e ? this.getStartFrame(e) : e,
                                !!this.setFrame(t) && (this.setAnimationRunning(!1, !0),
                                    !0)
                            }
                            ,
                            c.gotoAndPlay = function(e) {
                                var t = 0;
                                return t = "string" == typeof e ? this.getStartFrame(e) : e,
                                !!this.setFrame(t) && (this.setAnimationRunning(!0, !1),
                                    !0)
                            }
                            ,
                            c.getStartFrame = function(e) {
                                var t = this._gafproto.getSequences()[e];
                                return t ? t.start : _.IDNONE
                            }
                            ,
                            c.getEndFrame = function(e) {
                                var t = this._gafproto.getSequences()[e];
                                return t ? t.end : _.IDNONE
                            }
                            ,
                            c.setFramePlayedDelegate = function(e) {
                                this._framePlayedDelegate = e
                            }
                            ,
                            c.getCurrentFrameIndex = function() {
                                return this._showingFrame
                            }
                            ,
                            c.getTotalFrameCount = function() {
                                return this._gafproto.getTotalFrames()
                            }
                            ,
                            c.start = function(e) {
                                (this._enableTick(!0),
                                    this._isRunning) || (this._setSequence(e) || (this._currentFrame = _.FIRST_FRAME_INDEX),
                                    this.setAnimationRunning(!0, !0))
                            }
                            ,
                            c.stop = function(e) {
                                void 0 === e && (e = !0),
                                    this._enableTick(!1),
                                this._isRunning && this.setAnimationRunning(!1, e)
                            }
                            ,
                            c.remove = function() {
                                if (1 != this._destroyed) {
                                    if (this._enableTick(!1),
                                        this._objects)
                                        for (var e in this._objects) {
                                            var t = this._objects[e];
                                            1 == a(t) && (t instanceof i ? t.remove() : t.destroy())
                                        }
                                    this._objects = null,
                                        this._container = null,
                                        this._animationStartedNextLoopDelegate = null,
                                        this._animationFinishedPlayDelegate = null,
                                        this._framePlayedDelegate = null,
                                        this._sequenceDelegate = null,
                                        this._gafproto = null,
                                        this.destroy(),
                                        this._destroyed = !0
                                }
                            }
                            ,
                            c.isDone = function() {
                                return !this._isLooped && (this._isReversed ? this._currentFrame < _.FIRST_FRAME_INDEX - 1 : this._currentFrame > this._totalFrameCount)
                            }
                            ,
                            c.getSequences = function() {
                                return this._gafproto.getSequences()
                            }
                            ,
                            c.playSequence = function(e, t) {
                                return !!this._setSequence(e) && (this.setLooped(t, !1),
                                    this.resumeAnimation(),
                                    !0)
                            }
                            ,
                            c._setSequence = function(e) {
                                if (null == e || 0 == e.length)
                                    return !1;
                                var t = this.getStartFrame(e)
                                    , n = this.getEndFrame(e);
                                return _.IDNONE !== t && _.IDNONE !== n && (this._currentSequenceStart = t,
                                    this._currentSequenceEnd = n,
                                this._currentFrame < this._currentSequenceStart || (this._currentFrame,
                                    this._currentSequenceEnd),
                                    this._currentFrame = this._currentSequenceStart,
                                    !0)
                            }
                            ,
                            c.isReversed = function() {
                                return this._isReversed
                            }
                            ,
                            c.setSequenceDelegate = function(e) {
                                this._sequenceDelegate = e
                            }
                            ,
                            c.setFrame = function(e) {
                                return e >= _.FIRST_FRAME_INDEX && e < this._totalFrameCount && (this._currentFrame = e,
                                    this._processAnimation(!1),
                                    !0)
                            }
                            ,
                            c.pauseAnimation = function() {
                                this._isRunning && this.setAnimationRunning(!1, !1)
                            }
                            ,
                            c.isLooped = function() {
                                return this._isLooped
                            }
                            ,
                            c.resumeAnimation = function() {
                                this._isRunning || this.setAnimationRunning(!0, !1)
                            }
                            ,
                            c.setReversed = function(e) {
                                this._isReversed = e
                            }
                            ,
                            c.hasSequences = function() {
                                return this._gafproto.getSequences().length > 0
                            }
                            ,
                            c.getFps = function() {
                                return this._fps
                            }
                            ,
                            c._enableTick = function(e) {
                                if (0 != a(this) && null != this._components) {
                                    var t = this.getComponent(s);
                                    this._processAnimationsHandler || (this._processAnimationsHandler = this._processAnimations.bind(this)),
                                        !this._animationsSelectorScheduled && e ? (0 == this._aaa && (t.schedule(this._processAnimationsHandler),
                                            this._aaa = !0),
                                            this._animationsSelectorScheduled = !0) : this._animationsSelectorScheduled && !e && (this._animationsSelectorScheduled = !1)
                                }
                            }
                            ,
                            c._processAnimations = function(e) {
                                for (this._timeDelta += e; this._timeDelta >= this._frameTime; )
                                    this._timeDelta -= this._frameTime,
                                        this._step()
                            }
                            ,
                            c._step = function() {
                                if (this._container) {
                                    var e = this._showingFrame == this._currentFrame && this._currentFrame > -1;
                                    if (this.getIsAnimationRunning()) {
                                        if (this._sequenceDelegate) {
                                            var t = null;
                                            (t = this._isReversed ? this._getSequenceByFirstFrame(this._currentFrame + 1) : this._getSequenceByLastFrame(this._currentFrame)) && this._sequenceDelegate(this, t)
                                        }
                                        this._isCurrentFrameLastInSequence() && (this._isLooped ? this._animationStartedNextLoopDelegate && this._animationStartedNextLoopDelegate(this) : (this.setAnimationRunning(!1, !1),
                                        this._animationFinishedPlayDelegate && this._animationFinishedPlayDelegate(this))),
                                            this._processAnimation(e),
                                        this.getIsAnimationRunning() && (this._currentFrame = this._nextFrame())
                                    } else
                                        this._processAnimation(e)
                                }
                            }
                            ,
                            c._isCurrentFrameLastInSequence = function() {
                                return this._isReversed ? this._currentFrame == this._currentSequenceStart : this._currentFrame == this._currentSequenceEnd - 1
                            }
                            ,
                            c._nextFrame = function() {
                                return this._isCurrentFrameLastInSequence() ? this._isLooped ? this._isReversed ? this._currentSequenceEnd - 1 : this._currentSequenceStart : this._currentFrame : this._currentFrame + (this._isReversed ? -1 : 1)
                            }
                            ,
                            c._processAnimation = function(e) {
                                this._realizeFrame(this._container, this._currentFrame, e),
                                this._isRunning && this._framePlayedDelegate && this._framePlayedDelegate(this, this._currentFrame)
                            }
                            ,
                            c._getObjectState = function(e, t) {
                                for (var n = [], i = [], s = function() {
                                    var n = t[r];
                                    -1 == e.findIndex((function(e) {
                                            return e.objectIdRef == n.objectIdRef
                                        }
                                    )) && i.push(n.objectIdRef)
                                }, r = 0; r < t.length; r++)
                                    s();
                                for (var a = function() {
                                    var i = e[o];
                                    -1 == t.findIndex((function(e) {
                                            return e.objectIdRef == i.objectIdRef
                                        }
                                    )) && n.push(i.objectIdRef)
                                }, o = 0; o < e.length; o++)
                                    a();
                                return {
                                    added: n,
                                    removed: i
                                }
                            }
                            ,
                            c._realizeFrame = function(e, t, n) {
                                if (a(e) && !n) {
                                    var s = this
                                        , r = s._objects
                                        , u = s._gafproto.getFrames();
                                    if (!(t > u.length)) {
                                        for (var c = u[t], l = c ? c.states : [], f = 0; f < l.length; f++) {
                                            var m = l[f]
                                                , d = r[m.objectIdRef];
                                            if (d && (d instanceof i && d.flashStart(),
                                            m.alpha < 0 && d._resetState(),
                                                d._updateVisibility(m, s),
                                                d.isVisible())) {
                                                d._applyState(m, s, m.objectIdRef, f);
                                                var g = e;
                                                if (m.hasMask && r[m.maskObjectIdRef] && (g = r[m.maskObjectIdRef]._getNode(),
                                                    d.isUpdateTransform)) {
                                                    var p = g.scale
                                                        , S = d.getScale()
                                                        , F = d.position
                                                        , v = g.position
                                                        , A = new o;
                                                    p.x < 0 ? (A.x = -1 * (F.x - v.x),
                                                        S.x *= -1) : A.x = F.x - v.x,
                                                        p.y < 0 ? (A.y = -1 * (F.y - v.y),
                                                            S.y *= -1) : A.y = F.y - v.y,
                                                        d.setPosition(A),
                                                        d.setScale(S)
                                                }
                                                d._lastVisibleInFrame = 1 + t,
                                                    i.rearrangeSubobject(g, d, m.depth)
                                            }
                                        }
                                        var R, I = u[s._showingFrame], y = I ? I.states : [];
                                        R = s._getObjectState(l, y);
                                        for (var b = 0; b < R.removed.length; b++) {
                                            var E = r[R.removed[b]];
                                            E && (E.active = !1)
                                        }
                                        for (var T = 0; T < R.added.length; T++) {
                                            var q = r[R.added[T]];
                                            q && (q.active = !0)
                                        }
                                        s._showingFrame = t;
                                        var D = c ? c.actions : null;
                                        if (D)
                                            for (var N in D) {
                                                var j = D[N]
                                                    , P = j.params[_.PI_EVENT_TYPE];
                                                if (j.type == _.ACTION_STOP)
                                                    s.flashStop();
                                                else if (j.type == _.ACTION_PLAY)
                                                    s.flashPlay();
                                                else if (j.type == _.ACTION_GO_TO_AND_STOP) {
                                                    var x = parseInt(P[0]) - 1;
                                                    s.flashGotoAndStop(x)
                                                } else if (j.type == _.ACTION_GO_TO_AND_PLAY) {
                                                    var L = parseInt(P[0]) - 1;
                                                    s.flashGotoAndPlay(L)
                                                } else
                                                    j.type == _.ACTION_DISPATCH_EVENT && s.dispatchEvent(new h(_.DISPATCH_FRAME_EVENT,!0,j.params[_.PI_EVENT_TYPE],j))
                                            }
                                        this.updateChildrenZIndex(e)
                                    }
                                }
                            }
                            ,
                            c.updateChildrenZIndex = function(e) {
                                var t = e.children.concat();
                                t.sort((function(e, t) {
                                        return null == e._zIndex_ && (e._zIndex_ = 1e5),
                                        null == t._zIndex_ && (t._zIndex_ = 1e5),
                                        e._zIndex_ - t._zIndex_
                                    }
                                ));
                                for (var i, s = t.length, r = n(t); !(i = r()).done; ) {
                                    i.value.setSiblingIndex(s)
                                }
                            }
                            ,
                            c.setAnimationRunning = function(e, t) {
                                if (this._isRunning = e,
                                    t)
                                    for (var n in this._objects) {
                                        var i = this._objects[n];
                                        i && i.setAnimationRunning && i.setAnimationRunning(e, t)
                                    }
                            }
                            ,
                            c._getSequenceByLastFrame = function(e) {
                                var t = this._gafproto.getSequences();
                                for (var n in t)
                                    if (t.hasOwnProperty(n) && t[n].end === e + 1)
                                        return n;
                                return ""
                            }
                            ,
                            c._resetState = function() {
                                e.prototype._resetState.call(this),
                                    this._currentFrame = this._currentSequenceStart
                            }
                            ,
                            c._getSequenceByFirstFrame = function(e) {
                                var t = this._gafproto.getSequences();
                                for (var n in t)
                                    if (t.hasOwnProperty(n) && t[n].start === e)
                                        return n;
                                return ""
                            }
                            ,
                            c.flashStart = function() {
                                this._flashStarted || (this._flashStarted = !0,
                                    this.flashGotoAndPlay(0))
                            }
                            ,
                            c.flashPlay = function() {
                                this._enableTick(!0),
                                    this._isRunning = !0,
                                    this.setLooped(!0, !1)
                            }
                            ,
                            c.flashStop = function(e) {
                                if (void 0 === e && (e = !1),
                                    this._enableTick(!1),
                                    this._isRunning = !1,
                                    e)
                                    for (var t in this._objects) {
                                        var n = this._objects[t];
                                        n instanceof i && n.flashStop()
                                    }
                            }
                            ,
                            c.flashGotoAndPlay = function(e) {
                                e < 0 && (e = 0),
                                e >= this._currentSequenceEnd && (e = this._currentSequenceEnd),
                                    this._currentFrame = e,
                                    this._step(),
                                    this.flashPlay()
                            }
                            ,
                            c.flashGotoAndStop = function(e) {
                                e < 0 && (e = 0),
                                e >= this._currentSequenceEnd && (e = this._currentSequenceEnd),
                                    this._currentFrame = e,
                                    this._step(),
                                    this.flashStop()
                            }
                            ,
                            i
                    }(c)).COUNTER = 1,
                    i._RF.pop()
            }
        }
    }
));
