System.register("chunks:///_virtual/GAFAsset.ts", ["cc", "./GAFMacros.ts", "./GAFLoader.ts", "./GAFTimeLineProto.ts", "./GAFAssetPreload.ts", "./GAFSpriteProto.ts", "./GAFMaskProto.ts", "./BuildLogHelper.ts"], (function(t) {
        var e, s, i, a, n, o, r, l, h, c, u;
        return {
            setters: [function(t) {
                e = t.cclegacy,
                    s = t.assetManager,
                    i = t.BufferAsset,
                    a = t.assert
            }
                , function(t) {
                    n = t.GAFMacros
                }
                , function(t) {
                    o = t.GafLoader
                }
                , function(t) {
                    r = t.GAFTimeLineProto
                }
                , function(t) {
                    l = t.GAFAssetPreload
                }
                , function(t) {
                    h = t.GAFSpriteProto
                }
                , function(t) {
                    c = t.GAFMaskProto
                }
                , function(t) {
                    u = t.default
                }
            ],
            execute: function() {
                e._RF.push({}, "77a26Tn6YJMA5itFTS5xEVH", "GAFAsset", void 0),
                    t("GAFAsset", function() {
                        var t = e.prototype;
                        function e(t, s, i) {
                            this._header = null,
                                this._timeLines = null,
                                this._textFields = null,
                                this._protos = null,
                                this._objects = null,
                                this._masks = null,
                                this._rootTimeLine = null,
                                this._textureLoadDelegate = null,
                                this._sceneFps = 60,
                                this._sceneWidth = 0,
                                this._sceneHeight = 0,
                                this._sceneColor = 0,
                                this._gafData = null,
                                this._desiredAtlasScale = 1,
                                this._usedAtlasScale = 0,
                                this._atlases = null,
                                this._onLoadTasks = null,
                                this._atlasScales = null,
                                this._textureLoaded = !1,
                                this._atlasesToLoad = null,
                                this._gafName = null,
                                this._timeLinesToLink = void 0,
                                this._loadedCall = null,
                                this._destroyed = !1,
                                this._name = "gafasset",
                                this._assetPreload = new l,
                                this._destroyed = !1,
                                this._header = {},
                                this._timeLines = [],
                                this._textFields = [],
                                this._objects = [],
                                this._masks = [],
                                this._protos = [],
                                this._atlases = {},
                                this._onLoadTasks = [],
                                this._atlasScales = [],
                                this._atlasesToLoad = {},
                                this._loadedCall = i,
                            null != t && this.preInitWithGAFFile(t, s),
                                this._name = "gafasset" + e.COUNTER,
                                e.COUNTER++
                        }
                        return t.release = function() {
                            for (var t in this._atlasScales) {
                                if (this._atlasScales.hasOwnProperty(t))
                                    this._atlasScales[t].forEach((function(t) {
                                            t.destroy()
                                        }
                                    ))
                            }
                            this._assetPreload.Release(),
                                this._header = null,
                                this._timeLines = null,
                                this._textFields = null,
                                this._protos = null,
                                this._objects = null,
                                this._masks = null,
                                this._rootTimeLine = null,
                                this._textureLoadDelegate = null,
                                this._gafData = null,
                                this._atlases = null,
                                this._onLoadTasks = null,
                                this._atlasScales = null,
                                this._atlasesToLoad = null,
                                this._timeLinesToLink = null,
                                this._loadedCall = null,
                                this._destroyed = !0
                        }
                            ,
                            e.create = function(t, s, i) {
                                return new e(t,s,i)
                            }
                            ,
                            e.createWithBundle = function(t, s, i) {
                                var a = new e;
                                return a.initWithGAFBundle(t, s, i),
                                    a
                            }
                            ,
                            t.preInitWithGAFFile = function(t, e) {
                                var i = this;
                                this._textureLoadDelegate = e,
                                    this._gafName = t;
                                var a = function t(e, s) {
                                    for (var a = 0; a < e.length; a++) {
                                        var n = e[a];
                                        switch (n.tagId) {
                                            case 1:
                                            case 8:
                                                for (var o = n.content.atlases, r = 0; r < o.length; r++)
                                                    for (var l = o[r].sources, h = 0; h < l.length; h++)
                                                        if (1 === l[h].csf) {
                                                            var c = l[h].source
                                                                , u = i._textureLoadDelegate(c);
                                                            s.set(u, !0)
                                                        }
                                                break;
                                            case 13:
                                                t(n.content.tags, s)
                                        }
                                    }
                                }
                                    , n = function(t) {
                                    for (var e = Array.from(t.keys()), a = [], n = 0; n < e.length; n++) {
                                        var o = e[n];
                                        a.push({
                                            url: o
                                        })
                                    }
                                    s.preloadAny(a, (function(t, e) {
                                            i._loadedCall && i._loadedCall()
                                        }
                                    ))
                                }
                                    , r = s.assets.get(t);
                                if (r) {
                                    var l = new Map;
                                    a(o.LoadFile(r).tags, l),
                                        n(l)
                                } else
                                    s.loadRemote(t, function(t, e) {
                                        if (t)
                                            console.error(t);
                                        else if (1 != i._destroyed) {
                                            var s = new Map;
                                            a(o.LoadFile(e).tags, s),
                                                n(s)
                                        }
                                    }
                                        .bind(this))
                            }
                            ,
                            t.initWithGAFFile = function(t, e) {
                                var i = this;
                                this._textureLoadDelegate = e,
                                    this._gafName = t;
                                var a = s.assets.get(t);
                                a ? this._init(o.LoadFile(a)) : s.loadRemote(t, function(t, e) {
                                    t ? console.error(t) : 1 != i._destroyed && i._init(o.LoadFile(e))
                                }
                                    .bind(this))
                            }
                            ,
                            t.InitWithRemoteGAFFile = function(t, e, a) {
                                var n = this;
                                this._textureLoadDelegate = e,
                                    this._gafName = t,
                                    s.loadRemote(t, i, (function(t, e) {
                                            t ? console.error(t) : 1 != n._destroyed && n._init(o.LoadFile(e))
                                        }
                                    ))
                            }
                            ,
                            t.createGAFFile = function(t) {
                                return o.LoadFile(t)
                            }
                            ,
                            t.createGAFAsset = function(t, e) {
                                var s = this;
                                !function t(i) {
                                    for (var a = 0; a < i.length; a++) {
                                        var n = i[a];
                                        switch (n.tagId) {
                                            case 1:
                                            case 8:
                                                for (var o = n.content.atlases, r = 0; r < o.length; r++)
                                                    for (var l = o[r], h = l.sources, c = function() {
                                                        var t = h[u].source;
                                                        t = t.substring(0, t.lastIndexOf("."));
                                                        var i = e.find((function(e) {
                                                                return e.name == t
                                                            }
                                                        ));
                                                        s._atlases[l.id] = i.texture,
                                                            s._atlasesToLoad[l.id] = {}
                                                    }, u = 0; u < h.length; u++)
                                                        c();
                                                break;
                                            case 13:
                                                t(n.content.tags)
                                        }
                                    }
                                }(t.tags),
                                    this._init(t)
                            }
                            ,
                            t.initWithGAFBundle = function(t, e, s) {
                                return a(!1, "initWithGAFBundle is not yet implemented"),
                                    !1
                            }
                            ,
                            t.getTimeLines = function() {
                                for (var t = [], e = 1, s = this._timeLines.length; e < s; ++e) {
                                    this._timeLines[e] && t.push(e)
                                }
                                return t
                            }
                            ,
                            t.setRootTimelineWithIndex = function(t) {
                                return !!this._timeLines[t] && (this._setRootTimeline(this._timeLines[t]),
                                    !0)
                            }
                            ,
                            t.getLinkageNames = function() {
                                for (var t = [], e = 0, s = this._timeLines.length; e < s; ++e) {
                                    var i = this._timeLines[e];
                                    if (i) {
                                        var a = i.getLinkageName();
                                        a && a.length > 0 && t.push(a)
                                    }
                                }
                                return t
                            }
                            ,
                            t.setRootTimelineWithName = function(t) {
                                u.IS_LOCAL;
                                for (var e = 0, s = this._timeLines.length; e < s; ++e) {
                                    var i = this._timeLines[e];
                                    if (i && i.getLinkageName() === t)
                                        return this._setRootTimeline(i),
                                            !0
                                }
                                return !1
                            }
                            ,
                            t.getTimeLineByLinkageName = function(t) {
                                for (var e = 0, s = this._timeLines.length; e < s; ++e) {
                                    var i = this._timeLines[e];
                                    if (i && i.getLinkageName() === t)
                                        return i
                                }
                                return null
                            }
                            ,
                            t.getFirstFramePosByLinkageName = function(t) {
                                var e = []
                                    , s = this.getTimeLineByLinkageName(t)
                                    , i = s.getSequences()
                                    , a = s.getFrames();
                                for (var n in i)
                                    if (i.hasOwnProperty(n)) {
                                        var o = a[i[n].start];
                                        if (!o || !o.states || 0 === o.states.length)
                                            continue;
                                        var r = o.states[0];
                                        if (!r || !r.matrix)
                                            continue;
                                        var l = r.matrix;
                                        e.push({
                                            id: n,
                                            pos: {
                                                x: l.tx * this._usedAtlasScale,
                                                y: l.ty * this._usedAtlasScale
                                            }
                                        })
                                    }
                                return e
                            }
                            ,
                            t.isAssetVersionPlayable = function() {
                                return !0
                            }
                            ,
                            t.desiredAtlasScale = function() {
                                return this._desiredAtlasScale
                            }
                            ,
                            t.setDesiredAtlasScale = function(t) {
                                for (var e in this._desiredAtlasScale = t,
                                    this._atlasScales)
                                    if (this._atlasScales.hasOwnProperty(e)) {
                                        var s = e;
                                        (0 === this._usedAtlasScale || Math.abs(this._usedAtlasScale - t) > Math.abs(s - t)) && (this._usedAtlasScale = e)
                                    }
                            }
                            ,
                            t.createObjectWithIndex = function(t) {
                                var e = this.setRootTimelineWithIndex(t);
                                return a(e, "GAFAsset::createObjectWithIndex 无效索引: " + t),
                                    this._timeLines[t]._gafConstruct()
                            }
                            ,
                            t.createObjectWithName = function(t) {
                                var e = this.setRootTimelineWithName(t);
                                return a(e, "GAFAsset::createObjectWithName 无效AS链接名: " + t),
                                    this._rootTimeLine._gafConstruct()
                            }
                            ,
                            t.createObject = function() {
                                return this._instantiateGaf()
                            }
                            ,
                            t.createObjectAndRun = function(t) {
                                a(1 === arguments.length, "GAFAsset::createObjectAndRun should have one param");
                                var e = this._instantiateGaf();
                                return e.setLooped(t, !0),
                                    e.start(),
                                    e
                            }
                            ,
                            t.setTextureLoadDelegate = function(t) {}
                            ,
                            t.getSceneFps = function() {
                                return this._sceneFps
                            }
                            ,
                            t.getSceneWidth = function() {
                                return 0
                            }
                            ,
                            t.getSceneHeight = function() {
                                return 0
                            }
                            ,
                            t.getSceneColor = function() {}
                            ,
                            t.setSceneFps = function(t) {
                                this._sceneFps = t
                            }
                            ,
                            t.setSceneWidth = function(t) {}
                            ,
                            t.setSceneHeight = function(t) {}
                            ,
                            t.setSceneColor = function(t) {}
                            ,
                            t.getHeader = function() {
                                return this._header
                            }
                            ,
                            t.getGAFFileName = function() {
                                return this._gafName
                            }
                            ,
                            t._getProtos = function() {
                                return this._protos
                            }
                            ,
                            t._setRootTimeline = function(t) {
                                this._rootTimeLine = t,
                                    this._header.pivot = t.getPivot(),
                                    this._header.frameSize = t.getRect()
                            }
                            ,
                            t._setHeader = function(t) {
                                for (var e in t)
                                    t.hasOwnProperty(e) && (this._header[e] = t[e])
                            }
                            ,
                            t._getMajorVerison = function() {
                                return this._header.versionMajor
                            }
                            ,
                            t._init = function(t) {
                                var e = this;
                                for (var s in this._gafData = t,
                                    this._setHeader(t.header),
                                    this._timeLinesToLink = [],
                                this._getMajorVerison() < 4 && this._pushTimeLine(new r({
                                    tags: []
                                },this,this._header.framesCount,this._header.frameSize,this._header.pivot)),
                                    this._assetPreload.Tags(this, t.tags, this._rootTimeLine),
                                    this._objects) {
                                    var i = this._objects[s];
                                    switch (i.type) {
                                        case n.TYPE_TEXTURE:
                                            this._protos[i.objectId] || (this._protos[i.objectId] = new h({
                                                tags: []
                                            },this,this._atlasScales,i.elementAtlasIdRef));
                                            break;
                                        case n.TYPE_TIME_LINE:
                                            this._protos[i.objectId] = this._timeLines[i.elementAtlasIdRef];
                                            break;
                                        case n.TYPE_TEXT_FIELD:
                                            this._protos[i.objectId] = this._textFields[i.elementAtlasIdRef];
                                            break;
                                        default:
                                            console.warn("Unknown object type: " + i.type)
                                    }
                                }
                                for (var a in this._masks) {
                                    var o = this._masks[a];
                                    if (!this._protos[o.objectId]) {
                                        var l = null;
                                        switch (o.type) {
                                            case n.TYPE_TEXTURE:
                                                l = new h({
                                                    tags: []
                                                },this,this._atlasScales,o.elementAtlasIdRef);
                                                break;
                                            case n.TYPE_TIME_LINE:
                                                l = this._timeLines[o.elementAtlasIdRef];
                                                break;
                                            case n.TYPE_TEXT_FIELD:
                                                l = this._textFields[o.elementAtlasIdRef]
                                        }
                                        this._protos[o.objectId] = new c({
                                            tags: []
                                        },this,l,o.elementAtlasIdRef)
                                    }
                                }
                                this.setDesiredAtlasScale(this._desiredAtlasScale),
                                0 === Object.keys(this._atlasesToLoad).length && (this._textureLoaded = !0,
                                    new Promise((function(t, e) {
                                            t()
                                        }
                                    )).then((function() {
                                            e._loadedCall && e._loadedCall()
                                        }
                                    )))
                            }
                            ,
                            t._pushTimeLine = function(t) {
                                this._timeLines[t.getId()] = t,
                                0 === t.getId() && this._setRootTimeline(t)
                            }
                            ,
                            t._instantiateGaf = function() {
                                return this._rootTimeLine._gafConstruct()
                            }
                            ,
                            t._onAtlasLoaded = function(t, e) {
                                null != this._atlases && (this._atlases[t] = e,
                                    delete this._atlasesToLoad[t],
                                0 === Object.keys(this._atlasesToLoad).length && (this._onLoadTasks.forEach((function(t) {
                                        t()
                                    }
                                )),
                                    this._onLoadTasks.length = 0,
                                    this._textureLoaded = !0,
                                this._loadedCall && this._loadedCall()))
                            }
                            ,
                            t.isLoaded = function() {
                                return this._textureLoaded
                            }
                            ,
                            e
                    }()).COUNTER = 1,
                    e._RF.pop()
            }
        }
    }
));
