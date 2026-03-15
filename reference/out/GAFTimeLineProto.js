System.register("chunks:///_virtual/GAFTimeLineProto.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GAFTimeLine.ts", "./GAFProto.ts"], (function(t) {
        var e, n, i, r;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    i = t.GAFTimeLine
                }
                , function(t) {
                    r = t.GAFProto
                }
            ],
            execute: function() {
                n._RF.push({}, "e543824xaRBcqfFM19Qlfm5", "GAFTimeLineProto", void 0);
                t("GAFTimeLineProto", function(t) {
                    function n(e, n, i, r, o, s, u) {
                        var a;
                        return void 0 === s && (s = 0),
                        void 0 === u && (u = ""),
                            (a = t.call(this, e) || this)._objects = void 0,
                            a.frames = void 0,
                            a.NamedParts = [],
                            a.content = e,
                            a.asset = n,
                            a.animationFrameCount = i,
                            a.boundingBox = r,
                            a.pivotPoint = o,
                            a.id = s,
                            a.linkageName = u,
                            a._objects = [],
                            a.NamedParts = a.getNamedParts(),
                            a
                    }
                    e(n, t);
                    var r = n.prototype;
                    return r.getTotalFrames = function() {
                        return this.animationFrameCount
                    }
                        ,
                        r.getBoundingBox = function() {
                            return this.boundingBox
                        }
                        ,
                        r.getId = function() {
                            return this.id
                        }
                        ,
                        r.getLinkageName = function() {
                            return this.linkageName
                        }
                        ,
                        r.getPivot = function() {
                            return this.pivotPoint
                        }
                        ,
                        r.getRect = function() {
                            return this.boundingBox
                        }
                        ,
                        r.getNamedParts = function() {
                            for (var t = this.content.tags, e = 0; e < t.length; e++) {
                                var n = t[e];
                                if ("TagDefineNamedParts" === n.tagName)
                                    return n.content
                            }
                            return []
                        }
                        ,
                        r.getNamedPart = function(t) {
                            for (var e = 0; e < this.NamedParts.length; e++) {
                                var n = this.NamedParts[e];
                                if (n.objectId === t)
                                    return n
                            }
                            return null
                        }
                        ,
                        r.getSequences = function() {
                            return {}
                        }
                        ,
                        r.getFrames = function() {
                            return this.frames
                        }
                        ,
                        r.getFps = function() {
                            return 60
                        }
                        ,
                        r.getObjects = function() {
                            return this._objects
                        }
                        ,
                        r.getAsset = function() {
                            return this.asset
                        }
                        ,
                        r._gafConstruct = function() {
                            var t = this.getAsset()._usedAtlasScale
                                , e = new i(this,t);
                            return e._init(),
                                e
                        }
                        ,
                        n
                }(r));
                n._RF.pop()
            }
        }
    }
));
