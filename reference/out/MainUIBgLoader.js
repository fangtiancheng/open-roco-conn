System.register("chunks:///_virtual/MainUIBgLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./RemoteResourceLoader.ts", "./DEFINE.ts"], (function(e) {
        var t, r, n, o, a, c, i, u, s, p, l;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    r = e.asyncToGenerator,
                    n = e.regeneratorRuntime
            }
                , function(e) {
                    o = e.cclegacy,
                        a = e._decorator,
                        c = e.Component,
                        i = e.SpriteFrame,
                        u = e.Texture2D,
                        s = e.Sprite
                }
                , function(e) {
                    p = e.RemoteResourceLoader
                }
                , function(e) {
                    l = e.DEFINE
                }
            ],
            execute: function() {
                var f;
                o._RF.push({}, "ce7be9QqqFJU7AwYDehDl2P", "MainUIBgLoader", void 0);
                var m = a.ccclass
                    , d = (a.property,
                    a.menu);
                e("MainUIBgLoader", m(f = d("AUI/MainUIBgLoader")(f = function(e) {
                    function o() {
                        return e.apply(this, arguments) || this
                    }
                    t(o, e);
                    var a = o.prototype;
                    return a.onLoad = function() {
                        this.loadRemoteTexture()
                    }
                        ,
                        a.loadRemoteTexture = function() {
                            var e = r(n().mark((function e() {
                                    var t, r, o;
                                    return n().wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.prev = 0,
                                                            e.next = 3,
                                                            p.loadRemote(l.CDN + "main/bg.png");
                                                    case 3:
                                                        t = e.sent,
                                                            (r = new i).packable = !1,
                                                            (o = new u).image = t,
                                                            r.texture = o,
                                                            this.getComponent(s).spriteFrame = r,
                                                            e.next = 16;
                                                        break;
                                                    case 13:
                                                        e.prev = 13,
                                                            e.t0 = e.catch(0),
                                                            console.error("纹理加载失败", e.t0);
                                                    case 16:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }
                                    ), e, this, [[0, 13]])
                                }
                            )));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        a.start = function() {}
                        ,
                        o
                }(c)) || f) || f);
                o._RF.pop()
            }
        }
    }
));
