System.register("chunks:///_virtual/CDNLoadPlistPipeLine.ts", ["cc", "./BuildLogHelper.ts"], (function(t) {
        var e, i, o, r, n, s, a, p, l, u;
        return {
            setters: [function(t) {
                e = t.cclegacy,
                    i = t.assetManager,
                    o = t.SpriteAtlas,
                    r = t.Texture2D,
                    n = t.path,
                    s = t.SpriteFrame,
                    a = t.Rect,
                    p = t.v2,
                    l = t.Size
            }
                , function(t) {
                    u = t.default
                }
            ],
            execute: function() {
                e._RF.push({}, "c8116c5SyJOi4xXddDIhsea", "CDNLoadPlistPipeLine", void 0);
                var c = /[\{\}]/g;
                function f(t) {
                    var e = (t = t.slice(1, -1)).split(",")
                        , i = parseFloat(e[0])
                        , o = parseFloat(e[1]);
                    return new l(i,o)
                }
                function d(t) {
                    var e = (t = t.slice(1, -1)).split(",")
                        , i = parseFloat(e[0])
                        , o = parseFloat(e[1]);
                    return p(i, o)
                }
                t("CDNLoadPlistPipeLine", function() {
                    function t() {}
                    return t.init = function() {
                        i.factory.register(".plist", this.createSpriteAtlas.bind(this)),
                            i.pipeline.insert(this.Task_Mark_Plist.bind(this), 0),
                            i.pipeline.append(this.Task_Parser_Plist.bind(this))
                    }
                        ,
                        t.createSpriteAtlas = function(t, e, i, p) {
                            p(null, function(t, e) {
                                null == t && console.error("parsePlist error!"),
                                null == e && console.error("parsePlist error!");
                                var i = new r;
                                i.image = e;
                                var p, l = t.metadata, u = t.frames, g = new o, v = g.spriteFrames;
                                for (var _ in u) {
                                    var h = u[_]
                                        , m = !1
                                        , P = void 0
                                        , L = void 0
                                        , S = void 0;
                                    0 === l.format ? (m = !1,
                                        P = "{" + h.originalWidth + "," + h.originalHeight + "}",
                                        L = "{" + h.offsetX + "," + h.offsetY + "}",
                                        S = "{{" + h.x + "," + h.y + "},{" + h.width + "," + h.height + "}}") : 1 === l.format || 2 === l.format ? (m = h.rotated,
                                        P = h.sourceSize,
                                        L = h.offset,
                                        S = h.frame) : 3 === l.format && (m = h.textureRotated,
                                        P = h.spriteSourceSize,
                                        L = h.spriteOffset,
                                        S = h.textureRect);
                                    var w = n.basename(_)
                                        , F = new s;
                                    F.texture = i,
                                        F.rect = (p = void 0,
                                            p = S.replace(c, "").split(","),
                                            new a(parseFloat(p[0] || 0),parseFloat(p[1] || 0),parseFloat(p[2] || 0),parseFloat(p[3] || 0))),
                                        F.offset = d(L),
                                        F.rotated = m,
                                        F.originalSize = f(P),
                                        F.name = w,
                                        v[w] = F
                                }
                                return g
                            }(e[0], e[1]))
                        }
                        ,
                        t.Task_Mark_Plist = function(t, e) {
                            if ("remote" === t.options.preset && ".plist" === t.options.ext) {
                                var i = t.options;
                                t.options = o,
                                    t.options.plist = !0,
                                    t.options.plist_png = t.input.url.replace(".plist", ".png"),
                                    Object.assign(t.options, i)
                            }
                            if ("remote" === t.options.preset && t.input.url && t.input.url.endsWith(".plist")) {
                                var r = t.options;
                                t.options = o,
                                    t.options.plist = !0,
                                    t.options.plist_png = t.input.url.replace(".plist", ".png"),
                                    Object.assign(t.options, r)
                            }
                            if ("remote" === t.options.preset && t.options instanceof o) {
                                var n = t.options;
                                n.plist = !0,
                                    n.plist_png = t.input.url.replace(".plist", ".png")
                            }
                            t.output = t.input,
                                e()
                        }
                        ,
                        t.Task_Parser_Plist = function(t, e) {
                            if (t.options.plist) {
                                var i = t.options.plist_png;
                                this.Task_DownLoadPng(i, (function(o, r) {
                                        o ? e(new Error("download png fail, url: " + i)) : (t.output = [t.input, r],
                                            e())
                                    }
                                ))
                            } else
                                t.output = t.input,
                                    e()
                        }
                        ,
                        t.Task_DownLoadPng = function(t, e) {
                            i.loadRemote(t, (function(t, i) {
                                    if (t && (u.IS_LOCAL,
                                    1 == u.IS_LOCAL))
                                        throw new Error("assetManager.loadBundle failed.");
                                    e(t, i)
                                }
                            ))
                        }
                        ,
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
