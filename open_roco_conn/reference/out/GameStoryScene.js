System.register("chunks:///_virtual/GameStoryScene.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./GameStoryData.ts", "./GameStoryAnimation.ts", "./GameStoryStepProcessor.ts", "./GameStoryAnimationStepProcessor.ts", "./GameStoryNodeStepProcessor.ts"], (function(t) {
        var e, n, i, o, r, a, s, c, p, u, l, m, y, S, d, f, h;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    n = t.inheritsLoose,
                    i = t.initializerDefineProperty,
                    o = t.assertThisInitialized,
                    r = t.asyncToGenerator,
                    a = t.regeneratorRuntime
            }
                , function(t) {
                    s = t.cclegacy,
                        c = t._decorator,
                        p = t.Node
                }
                , function(t) {
                    u = t.GameUI
                }
                , function(t) {
                    l = t.GameStoryStepType
                }
                , function(t) {
                    m = t.GameStoryAnimation
                }
                , function(t) {
                    y = t.GameStoryStepProcessor
                }
                , function(t) {
                    S = t.GameStoryAnimationGotoAndStopStepProcessor,
                        d = t.GameStoryCreateAnimationStepProcessor
                }
                , function(t) {
                    f = t.GameStoryButtonClickStepProcessor,
                        h = t.GameStoryNodeClickStepProcessor
                }
            ],
            execute: function() {
                var G, k, b, A, P;
                s._RF.push({}, "a6b98bbUb5PUYsFsksiZJws", "GameStoryScene", void 0);
                c.ccclass;
                var v = c.property;
                t("GameStoryScene", (G = v(m),
                    k = v(p),
                    A = e((b = function(t) {
                        function e() {
                            for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
                                r[a] = arguments[a];
                            return (e = t.call.apply(t, [this].concat(r)) || this).stepData = void 0,
                                i(e, "animationList", A, o(e)),
                                i(e, "clickNodeList", P, o(e)),
                                e
                        }
                        n(e, t);
                        var s = e.prototype;
                        return s.onLoad = function() {
                            this.stepData = {
                                steps: []
                            },
                                this.initSetps()
                        }
                            ,
                            s.start = function() {
                                var t = r(a().mark((function t() {
                                        var e, n, i;
                                        return a().wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                        case 0:
                                                            e = 0;
                                                        case 1:
                                                            if (!(e < this.stepData.steps.length)) {
                                                                t.next = 10;
                                                                break
                                                            }
                                                            return n = this.stepData.steps[e],
                                                                i = this.createProcessor(n),
                                                                console.log("当前步骤 => index:" + e + ", type:" + (n.type == l.Wait ? "等待" : n.type == l.AnimationCreate ? "创建动画" : n.type == l.AnimationGotoAndStop ? "动画跳转" : n.type == l.NodeClick ? "节点点击" : "未知类型")),
                                                                t.next = 7,
                                                                i.execute();
                                                        case 7:
                                                            e++,
                                                                t.next = 1;
                                                            break;
                                                        case 10:
                                                            this.SetpsEnd();
                                                        case 11:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                            }
                                        ), t, this)
                                    }
                                )));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }(),
                            s.setupStep = function(t) {
                                this.stepData.steps.push(t)
                            }
                            ,
                            s.createProcessor = function(t) {
                                switch (t.type) {
                                    case l.Wait:
                                        return new y(t);
                                    case l.AnimationCreate:
                                        return new d(t,this.animationList[t.index]);
                                    case l.AnimationGotoAndStop:
                                        return new S(t,this.animationList[t.index]);
                                    case l.NodeClick:
                                        return new h(t,this.clickNodeList[t.index]);
                                    case l.ButtonClick:
                                        var e = t;
                                        return new f(e,{
                                            clickNode: this.clickNodeList[e.index],
                                            animation: this.animationList[e.animationIndex]
                                        });
                                    default:
                                        return null
                                }
                            }
                            ,
                            e
                    }(u)).prototype, "animationList", [G], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    P = e(b.prototype, "clickNodeList", [k], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    b));
                s._RF.pop()
            }
        }
    }
));
