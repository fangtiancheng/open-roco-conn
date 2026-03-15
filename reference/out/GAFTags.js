System.register("chunks:///_virtual/GAFTags.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GAFMacros.ts"], (function(t) {
        var n, e, a;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    a = t.GAFMacros
                }
            ],
            execute: function() {
                e._RF.push({}, "95892z2SFZFJrIiigDaPOmj", "GAFTags", void 0);
                var r = function() {
                    function t() {
                        this.tagName = null
                    }
                    var n = t.prototype;
                    return n.parse = function(t, n) {
                        var e = t.Uint();
                        t.startNestedBuffer(e);
                        var a = this.doParse(t);
                        return t.endNestedBuffer(),
                            a.tagName = this.tagName,
                            a.tagId = n,
                            a
                    }
                        ,
                        n.doParse = function(t) {
                            return {}
                        }
                        ,
                        t
                }()
                    , o = function(t) {
                    function e() {
                        for (var n, e = arguments.length, a = new Array(e), r = 0; r < e; r++)
                            a[r] = arguments[r];
                        return (n = t.call.apply(t, [this].concat(a)) || this).tagName = "TagEnd",
                            n
                    }
                    return n(e, t),
                        e
                }(r)
                    , i = function(t) {
                    function e() {
                        for (var n, e = arguments.length, a = new Array(e), r = 0; r < e; r++)
                            a[r] = arguments[r];
                        return (n = t.call.apply(t, [this].concat(a)) || this).tagName = "TagDefineAtlas",
                            n
                    }
                    return n(e, t),
                        e.prototype.doParse = function(t) {
                            return {
                                content: t.fields("scale", "Float", "atlases", t.array("Ubyte", t.fields("id", "Uint", "sources", t.array("Ubyte", t.fields("source", "String", "csf", "Float")))), "elements", t.array("Uint", t.fields("pivot", "Point", "origin", "Point", "scale", "Float", "size", "Point", "atlasId", "Uint", "elementAtlasId", "Uint")))()
                            }
                        }
                        ,
                        e
                }(r)
                    , l = function(t) {
                    function e() {
                        for (var n, e = arguments.length, a = new Array(e), r = 0; r < e; r++)
                            a[r] = arguments[r];
                        return (n = t.call.apply(t, [this].concat(a)) || this).tagName = "TagDefineAnimationMasks",
                            n
                    }
                    return n(e, t),
                        e.prototype.doParse = function(t) {
                            return {
                                content: t.array("Uint", t.fields("objectId", "Uint", "elementAtlasIdRef", "Uint"))()
                            }
                        }
                        ,
                        e
                }(r)
                    , s = function(t) {
                    function e() {
                        for (var n, e = arguments.length, a = new Array(e), r = 0; r < e; r++)
                            a[r] = arguments[r];
                        return (n = t.call.apply(t, [this].concat(a)) || this).tagName = "TagDefineAnimationObjects",
                            n
                    }
                    return n(e, t),
                        e.prototype.doParse = function(t) {
                            return {
                                content: t.array("Uint", t.fields("objectId", "Uint", "elementAtlasIdRef", "Uint"))()
                            }
                        }
                        ,
                        e
                }(r)
                    , c = function(t) {
                    function e() {
                        for (var n, e = arguments.length, a = new Array(e), r = 0; r < e; r++)
                            a[r] = arguments[r];
                        return (n = t.call.apply(t, [this].concat(a)) || this).tagName = "TagDefineAnimationFrames",
                            n
                    }
                    return n(e, t),
                        e.prototype.doParse = function(t) {
                            return {
                                content: t.array("Uint", t.fields("frame", "Uint", "state", t.array("Uint", t.fields("hasColorTransform", "Ubyte", "hasMask", "Ubyte", "hasEffect", "Ubyte", "objectIdRef", "Uint", "depth", "Int", "alpha", "Float", "matrix", "Matrix", "colorTransform", t.condition("hasColorTransform", 1, t.fields("alphaOffset", "Float", "redMultiplier", "Float", "redOffset", "Float", "greenMultiplier", "Float", "greenOffset", "Float", "blueMultiplier", "Float", "blueOffset", "Float")), "effect", t.condition("hasEffect", 1, t.array("Ubyte", m._readFilter(t))), "maskObjectIdRef", t.condition("hasMask", 1, t.fields("maskObjectIdRef", "Uint"))))))()
                            }
                        }
                        ,
                        e
                }(r)
                    , f = function(t) {
                    function e() {
                        for (var n, e = arguments.length, a = new Array(e), r = 0; r < e; r++)
                            a[r] = arguments[r];
                        return (n = t.call.apply(t, [this].concat(a)) || this).tagName = "TagDefineNamedParts",
                            n
                    }
                    return n(e, t),
                        e.prototype.doParse = function(t) {
                            return {
                                content: t.array("Uint", t.fields("objectId", "Uint", "name", "String"))()
                            }
                        }
                        ,
                        e
                }(r)
                    , u = function(t) {
                    function e() {
                        for (var n, e = arguments.length, a = new Array(e), r = 0; r < e; r++)
                            a[r] = arguments[r];
                        return (n = t.call.apply(t, [this].concat(a)) || this).tagName = "TagDefineSequences",
                            n
                    }
                    return n(e, t),
                        e.prototype.doParse = function(t) {
                            return {
                                content: t.array("Uint", t.fields("id", "String", "start", "Ushort", "end", "Ushort"))()
                            }
                        }
                        ,
                        e
                }(r)
                    , d = function(t) {
                    function e() {
                        for (var n, e = arguments.length, a = new Array(e), r = 0; r < e; r++)
                            a[r] = arguments[r];
                        return (n = t.call.apply(t, [this].concat(a)) || this).tagName = "TagDefineTextFields",
                            n
                    }
                    return n(e, t),
                        e.prototype.doParse = function(t) {
                            return {
                                content: t.array("Uint", t.fields("id", "Uint", "pivot", "Point", "width", "Float", "height", "Float", "text", "String", "embedFonts", "Boolean", "multiline", "Boolean", "wordWrap", "Boolean", "hasRestrict", "Boolean", "restrict", t.condition("hasRestrict", 1, (function() {
                                        return t.String
                                    }
                                )), "editable", "Boolean", "selectable", "Boolean", "displayAsPassword", "Boolean", "maxChars", "Uint", "align", "Uint", "blockIndent", "Uint", "bold", "Boolean", "bullet", "Boolean", "color", "color", "font", "String", "indent", "Uint", "italic", "Boolean", "kerning", "Boolean", "leading", "Uint", "leftMargin", "Uint", "letterSpacing", "Float", "rightMargin", "Uint", "size", "Uint", "tabStops", t.array("Uint", t.fields("value", "Uint")), "target", "String", "underline", "Boolean", "url", "String"))()
                            }
                        }
                        ,
                        e
                }(r)
                    , g = function(t) {
                    function e() {
                        for (var n, e = arguments.length, a = new Array(e), r = 0; r < e; r++)
                            a[r] = arguments[r];
                        return (n = t.call.apply(t, [this].concat(a)) || this).tagName = "TagDefineAtlas2",
                            n
                    }
                    return n(e, t),
                        e.prototype.doParse = function(t) {
                            return {
                                content: t.fields("scale", "Float", "atlases", t.array("Ubyte", t.fields("id", "Uint", "sources", t.array("Ubyte", t.fields("source", "String", "csf", "Float")))), "elements", t.array("Uint", t.fields("pivot", "Point", "origin", "Point", "scale", "Float", "size", "Point", "atlasId", "Uint", "elementAtlasId", "Uint", "hasScale9Grid", "Boolean", "scale9GridRect", t.condition("hasScale9Grid", 1, (function() {
                                        return t.Rect()
                                    }
                                )))))()
                            }
                        }
                        ,
                        e
                }(r)
                    , h = function(t) {
                    function e() {
                        for (var n, e = arguments.length, a = new Array(e), r = 0; r < e; r++)
                            a[r] = arguments[r];
                        return (n = t.call.apply(t, [this].concat(a)) || this).tagName = "TagDefineStage",
                            n
                    }
                    return n(e, t),
                        e.prototype.doParse = function(t) {
                            return {
                                content: t.fields("fps", "Ubyte", "color", "color", "width", "Ushort", "height", "Ushort")()
                            }
                        }
                        ,
                        e
                }(r)
                    , p = function(t) {
                    function e() {
                        for (var n, e = arguments.length, a = new Array(e), r = 0; r < e; r++)
                            a[r] = arguments[r];
                        return (n = t.call.apply(t, [this].concat(a)) || this).tagName = "TagDefineAnimationObjects2",
                            n
                    }
                    return n(e, t),
                        e.prototype.doParse = function(t) {
                            return {
                                content: t.array("Uint", t.fields("objectId", "Uint", "elementAtlasIdRef", "Uint", "type", "Ushort"))()
                            }
                        }
                        ,
                        e
                }(r)
                    , y = function(t) {
                    function e() {
                        for (var n, e = arguments.length, a = new Array(e), r = 0; r < e; r++)
                            a[r] = arguments[r];
                        return (n = t.call.apply(t, [this].concat(a)) || this).tagName = "TagDefineAnimationMasks2",
                            n
                    }
                    return n(e, t),
                        e.prototype.doParse = function(t) {
                            return {
                                content: t.array("Uint", t.fields("objectId", "Uint", "elementAtlasIdRef", "Uint", "type", "Ushort"))()
                            }
                        }
                        ,
                        e
                }(r)
                    , F = function(t) {
                    function e() {
                        for (var n, e = arguments.length, a = new Array(e), r = 0; r < e; r++)
                            a[r] = arguments[r];
                        return (n = t.call.apply(t, [this].concat(a)) || this).tagName = "TagDefineAnimationFrames2",
                            n
                    }
                    return n(e, t),
                        e.prototype.doParse = function(t) {
                            return {
                                content: t.array("Uint", t.fields("frame", "Uint", "hasChangesInDisplayList", "Boolean", "hasActions", "Boolean", "state", t.condition("hasChangesInDisplayList", 1, t.array("Uint", t.fields("hasColorTransform", "Boolean", "hasMask", "Boolean", "hasEffect", "Boolean", "objectIdRef", "Uint", "depth", "Int", "alpha", "Float", "matrix", "Matrix", "colorTransform", t.condition("hasColorTransform", 1, t.fields("alphaOffset", "Float", "redMultiplier", "Float", "redOffset", "Float", "greenMultiplier", "Float", "greenOffset", "Float", "blueMultiplier", "Float", "blueOffset", "Float")), "effect", t.condition("hasEffect", 1, t.array("Ubyte", m._readFilter(t))), "maskObjectIdRef", t.condition("hasMask", 1, (function() {
                                        return t.Uint()
                                    }
                                ))))), "actions", t.condition("hasActions", 1, t.array("Uint", t.fields("type", "Uint", "scope", "String", "params", m._readActionArguments(t))))))()
                            }
                        }
                        ,
                        e
                }(r)
                    , U = function(t) {
                    function e() {
                        for (var n, e = arguments.length, a = new Array(e), r = 0; r < e; r++)
                            a[r] = arguments[r];
                        return (n = t.call.apply(t, [this].concat(a)) || this).tagName = "TagDefineTimeline",
                            n
                    }
                    return n(e, t),
                        e.prototype.doParse = function(t) {
                            var n = {
                                content: t.fields("id", "Uint", "animationFrameCount", "Uint", "boundingBox", "Rect", "pivotPoint", "Point", "hasLinkage", "Boolean", "linkageName", t.condition("hasLinkage", 1, (function() {
                                        return t.String()
                                    }
                                )))()
                            };
                            return n.content.tags = b.ReadTags(t),
                                n
                        }
                        ,
                        e
                }(r)
                    , m = function() {
                    function t() {
                        this.Default = null,
                            this.Default = new r,
                            this[0] = new o,
                            this[1] = new i,
                            this[2] = new l,
                            this[3] = new s,
                            this[4] = new c,
                            this[5] = new f,
                            this[6] = new u,
                            this[7] = new d,
                            this[8] = new g,
                            this[9] = new h,
                            this[10] = new p,
                            this[11] = new y,
                            this[12] = new F,
                            this[13] = new U
                    }
                    return t._readActionArguments = function(t) {
                        return function() {
                            var n = t.Uint()
                                , e = [];
                            for (t.startNestedBuffer(n); t.maxOffset() > t.tell(); )
                                e.push(t.String());
                            return t.endNestedBuffer(),
                                e
                        }
                    }
                        ,
                        t._readFilter = function(t) {
                            return t.fields("type", "Uint", "dropShadow", t.condition("type", a.EFFECT_DROP_SHADOW, t.fields("color", "color", "blurX", "Float", "blurY", "Float", "angle", "Float", "distance", "Float", "strength", "Float", "inner", "Boolean", "knockout", "Boolean")), "blur", t.condition("type", a.EFFECT_BLUR, t.fields("blurX", "Float", "blurY", "Float")), "glow", t.condition("type", a.EFFECT_GLOW, t.fields("color", "color", "blurX", "Float", "blurY", "Float", "strength", "Float", "inner", "Boolean", "knockout", "Boolean")), "colorMatrix", t.condition("type", a.EFFECT_COLOR_MATRIX, t.fields("rr", "Float", "gr", "Float", "br", "Float", "ar", "Float", "r", "Float", "rg", "Float", "gg", "Float", "bg", "Float", "ag", "Float", "g", "Float", "rb", "Float", "gb", "Float", "bb", "Float", "ab", "Float", "b", "Float", "ra", "Float", "ga", "Float", "ba", "Float", "aa", "Float", "a", "Float")))
                        }
                        ,
                        t
                }()
                    , b = t("GAFTags", function() {
                    function t() {}
                    return t.ReadSingleTag = function(n) {
                        var e = n.Ushort()
                            , a = t.tags[e]
                            , r = {};
                        return void 0 === a ? (console.log("GAF. Non implemented tag detected."),
                            t.tags.Default.parse(n, e)) : r = a.parse(n, e),
                            r
                    }
                        ,
                        t.ReadTags = function(n) {
                            var e = [];
                            try {
                                do {
                                    var a = t.ReadSingleTag(n);
                                    e.push(a)
                                } while (0 != a.tagId)
                            } catch (t) {
                                if (!(t instanceof Error && "GAF format error" == t.message))
                                    throw console.log(t.stack),
                                        t;
                                console.log("GAF format error:\n" + t.stack)
                            }
                            return e
                        }
                        ,
                        t
                }());
                b.tags = new m,
                    e._RF.pop()
            }
        }
    }
));
