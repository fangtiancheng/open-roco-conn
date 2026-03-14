System.register("chunks:///_virtual/SecretRealmMainMonsterItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts", "./SecretRealmConfig.ts"], (function(e) {
        var t, n, o, a, r, s, i, l, c, f, u, m, p;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    n = e.inheritsLoose,
                    o = e.initializerDefineProperty,
                    a = e.assertThisInitialized
            }
                , function(e) {
                    r = e.cclegacy,
                        s = e._decorator,
                        i = e.Sprite,
                        l = e.Vec2,
                        c = e.NodeEventType,
                        f = e.SpriteFrame,
                        u = e.Component
                }
                , function(e) {
                    m = e.default
                }
                , function(e) {
                    p = e.SecretRealmConfig
                }
            ],
            execute: function() {
                var S, h, E, g, M, d, T, _, I, L, w, A;
                r._RF.push({}, "807a2EcUKlFYo5BMH79iTXa", "SecretRealmMainMonsterItem", void 0);
                var R = s.ccclass
                    , y = s.property;
                e("SecretRealmMainMonsterItem", (S = R("SecretRealmMainMonsterItem"),
                    h = y(i),
                    E = y(i),
                    g = y(i),
                    M = y(i),
                S(((A = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), s = 0; s < n; s++)
                            r[s] = arguments[s];
                        return t = e.call.apply(e, [this].concat(r)) || this,
                            o(t, "monsterIcon", _, a(t)),
                            o(t, "challengeBtn", I, a(t)),
                            o(t, "challengeBtnGray", L, a(t)),
                            o(t, "completeStamp", w, a(t)),
                            t.monster = null,
                            t
                    }
                    n(t, e);
                    var r = t.prototype;
                    return r.onLoad = function() {
                        this.challengeBtn.node.on(c.TOUCH_END, this.onChallengeBtnTouchEnd, this)
                    }
                        ,
                        r.setMonsterData = function(e) {
                            var n = this;
                            this.monster = e;
                            var o = "prefabs/secret-realm/imgs/monster-avatar/山海异兽-" + e.name + "-" + (e.id + 1);
                            m.Instance.loadingRes("gui", o, (function(o, a) {
                                    if (o)
                                        console.error("[jinlong] [SecretRealmMainMonsterItem] loadingRes error: " + o.message);
                                    else {
                                        var r = f.createWithImage(a);
                                        n.monsterIcon.spriteFrame = r;
                                        var s = t.IMAGE_SCALE_AND_OFFSET.get(e.id);
                                        s ? (n.monsterIcon.node.setPosition(s.offset.x, s.offset.y, 0),
                                            n.monsterIcon.node.setScale(s.scale, s.scale, 1)) : n.monsterIcon.node.setScale(1, 1, 1)
                                    }
                                }
                            )),
                                this.challengeBtnGray.node.active = e.status === p.MONSTER_STATUS.CHALLENGED,
                                this.challengeBtn.node.active = e.status === p.MONSTER_STATUS.NOT_CHALLENGED,
                                this.completeStamp.node.active = e.status === p.MONSTER_STATUS.CHALLENGED
                        }
                        ,
                        r.onChallengeBtnTouchEnd = function() {
                            console.info("[jinlong] [SecretRealmMainMonsterItem] onChallengeBtnTouchEnd: " + this.monster.name),
                            this.monster.status === p.MONSTER_STATUS.NOT_CHALLENGED && this.node.emit(t.SHOW_CHALLENGE_VIEW, this.monster)
                        }
                        ,
                        t
                }(u)).SHOW_CHALLENGE_VIEW = "SecretRealmMainMonsterItem.SHOW_CHALLENGE_VIEW",
                    A.IMAGE_SCALE_AND_OFFSET = new Map([[0, {
                        scale: 1,
                        offset: new l(28,0)
                    }], [1, {
                        scale: 1,
                        offset: new l(28,0)
                    }], [2, {
                        scale: 1,
                        offset: new l(28,0)
                    }], [3, {
                        scale: 1,
                        offset: new l(28,0)
                    }], [4, {
                        scale: 1,
                        offset: new l(28,0)
                    }], [5, {
                        scale: .9,
                        offset: new l(10,0)
                    }], [6, {
                        scale: 1,
                        offset: new l(28,0)
                    }], [7, {
                        scale: 1,
                        offset: new l(-68,0)
                    }], [9, {
                        scale: .9,
                        offset: new l(28,0)
                    }], [10, {
                        scale: 1,
                        offset: new l(28,0)
                    }], [11, {
                        scale: 1,
                        offset: new l(28,0)
                    }], [12, {
                        scale: 1,
                        offset: new l(28,0)
                    }]]),
                    _ = t((T = A).prototype, "monsterIcon", [h], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    I = t(T.prototype, "challengeBtn", [E], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    L = t(T.prototype, "challengeBtnGray", [g], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    w = t(T.prototype, "completeStamp", [M], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    d = T)) || d));
                r._RF.pop()
            }
        }
    }
));
