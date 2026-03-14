System.register("chunks:///_virtual/GameStoryNodeStepProcessor.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameStoryStepProcessor.ts", "./UIManager.ts"], (function(e) {
        var t, n, o, i, r, a, c, h, s, u, y, d, g, l;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.asyncToGenerator,
                    o = e.regeneratorRuntime
            }
                , function(e) {
                    i = e.cclegacy,
                        r = e.NodeEventType,
                        a = e.UITransform,
                        c = e.Vec2,
                        h = e.Vec3,
                        s = e.Label,
                        u = e.Camera,
                        y = e.Rect,
                        d = e.tween
                }
                , function(e) {
                    g = e.GameStoryStepProcessor
                }
                , function(e) {
                    l = e.default
                }
            ],
            execute: function() {
                i._RF.push({}, "1d56288ER5O+ptARjjrq0vM", "GameStoryNodeStepProcessor", void 0);
                e("GameStoryNodeClickStepProcessor", function(e) {
                    function n() {
                        return e.apply(this, arguments) || this
                    }
                    return t(n, e),
                        n.prototype.onExecute = function(e, t) {
                            var n = this;
                            return new Promise((function(o) {
                                    var i, d = window.__GameStoryDebug__;
                                    d && ((i = t.getChildByName("SpriteSplash")).active = !0);
                                    if (t.once(r.TOUCH_END, function s(g) {
                                        var p = g.getLocation()
                                            , m = l.gRoot.parent.getChildByName("Main Camera").getComponent(u)
                                            , w = m.screenToWorld(new h(p.x,p.y,0))
                                            , f = m.convertToUINode(w, t)
                                            , x = t.getComponent(a);
                                        f.x = f.x + x.width / 2,
                                            f.y = x.height / 2 - f.y,
                                            new y(e.x,e.y,e.width,e.height).contains(new c(f.x,f.y)) ? (d && (i.active = !1),
                                                o()) : t.once(r.TOUCH_END, s.bind(n))
                                    }
                                        .bind(n)),
                                        d) {
                                        var g = t.getComponent(a)
                                            , p = i.getComponent(a)
                                            , m = new c(e.x,e.y);
                                        m.x = e.x - g.width / 2,
                                            m.y = g.height / 2 - e.y,
                                            i.setPosition(new h(m.x,m.y,0)),
                                            p.width = e.width,
                                            p.height = e.height,
                                            i.getChildByName("Label").getComponent(s).string = "x:" + e.x + " y:" + e.y + " width:" + e.width + " height:" + e.height
                                    }
                                }
                            ))
                        }
                        ,
                        n
                }(g)),
                    e("GameStoryButtonClickStepProcessor", function(e) {
                        function i() {
                            return e.apply(this, arguments) || this
                        }
                        return t(i, e),
                            i.prototype.onExecute = function() {
                                var e = n(o().mark((function e(t, n) {
                                        var i = this;
                                        return o().wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.abrupt("return", new Promise((function(e) {
                                                                    var o, g = window.__GameStoryDebug__;
                                                                    g && ((o = n.clickNode.getChildByName("SpriteSplash")).active = !0);
                                                                    var p = function e(t, n, o) {
                                                                        return o < n.length ? e(t = t.getChildByName(n[o]), n, o + 1) : t
                                                                    };
                                                                    if (n.clickNode.once(r.TOUCH_END, function s(m) {
                                                                        var w = m.getLocation()
                                                                            , f = l.gRoot.parent.getChildByName("Main Camera").getComponent(u)
                                                                            , x = f.screenToWorld(new h(w.x,w.y,0))
                                                                            , C = f.convertToUINode(x, n.clickNode)
                                                                            , v = n.clickNode.getComponent(a);
                                                                        if (C.x = C.x + v.width / 2,
                                                                            C.y = v.height / 2 - C.y,
                                                                            new y(t.x,t.y,t.width,t.height).contains(new c(C.x,C.y))) {
                                                                            g && (o.active = !1);
                                                                            var N = p(n.animation.gafTimeLine, t.names, 0);
                                                                            if (N) {
                                                                                var S = new h(N.scale.x,N.scale.y,N.scale.z)
                                                                                    , _ = new h(S.x,S.y,S.z);
                                                                                d(N).to(.05, {
                                                                                    scale: _.multiplyScalar(.8)
                                                                                }).to(.05, {
                                                                                    scale: S
                                                                                }).call((function() {
                                                                                        return e()
                                                                                    }
                                                                                )).start()
                                                                            } else
                                                                                e()
                                                                        } else
                                                                            n.clickNode.once(r.TOUCH_END, s.bind(i))
                                                                    }
                                                                        .bind(i)),
                                                                        g) {
                                                                        var m = n.clickNode.getComponent(a)
                                                                            , w = o.getComponent(a)
                                                                            , f = new c(t.x,t.y);
                                                                        f.x = t.x - m.width / 2,
                                                                            f.y = m.height / 2 - t.y,
                                                                            o.setPosition(new h(f.x,f.y,0)),
                                                                            w.width = t.width,
                                                                            w.height = t.height,
                                                                            o.getChildByName("Label").getComponent(s).string = "x:" + t.x + " y:" + t.y + " width:" + t.width + " height:" + t.height
                                                                    }
                                                                }
                                                            )));
                                                        case 1:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                            }
                                        ), e)
                                    }
                                )));
                                return function(t, n) {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            i
                    }(g));
                i._RF.pop()
            }
        }
    }
));
