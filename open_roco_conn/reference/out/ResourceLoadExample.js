System.register("chunks:///_virtual/ResourceLoadExample.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./RemoteResourceLoader.ts", "./DEFINE.ts"], (function(e) {
        var n, r, t, o, a, c, s;
        return {
            setters: [function(e) {
                n = e.createClass,
                    r = e.asyncToGenerator,
                    t = e.regeneratorRuntime
            }
                , function(e) {
                    o = e.cclegacy,
                        a = e._decorator
                }
                , function(e) {
                    c = e.RemoteResourceLoader
                }
                , function(e) {
                    s = e.DEFINE
                }
            ],
            execute: function() {
                var u, i;
                o._RF.push({}, "4d637aSWcBCXKcVeHepN1IR", "ResourceLoadExample", void 0);
                var p = a.ccclass
                    , l = function() {};
                e("ResourceLoadExample", p("ResourceLoadExample")(((i = function() {
                    function e(e) {
                        if (null == e)
                            throw new Error("ResourceLoadExample can not be instantiated.")
                    }
                    return e.prototype.start = function() {
                        var e = r(t().mark((function e() {
                                var n, r, o, a;
                                return t().wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return n = [s.CDN + "guardianPet/previews/100000101.png", s.CDN + "guardianPet/previews/100000102.png", s.CDN + "guardianPet/previews/100000103.png", s.CDN + "guardianPet/previews/100000104.png", s.CDN + "guardianPet/previews/100000105.png"],
                                                        e.next = 3,
                                                        c.loadTexts(n, (function(e, n) {
                                                                return console.error("加载进度======: " + (100 * e).toFixed(1) + "%")
                                                            }
                                                        ));
                                                case 3:
                                                    r = e.sent,
                                                        o = r.successes,
                                                        a = r.errors,
                                                        console.error("加载成功:============", o),
                                                        console.error("加载失败:============", a);
                                                case 8:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                        n(e, null, [{
                            key: "Instance",
                            get: function() {
                                return null == e._instance && (e._instance = new e(new l)),
                                    e._instance
                            }
                        }]),
                        e
                }())._instance = void 0,
                    u = i)) || u);
                o._RF.pop()
            }
        }
    }
));
