System.register("chunks:///_virtual/SentinelForestIntelligenceRewardItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SentinelForestIntelligenceRewardItemIcon.ts", "./Icon.ts", "./ActivityAPI.ts"], (function(e) {
        var t, i, n, r, o, a, c, s, l, u, d, h, p, v;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    i = e.inheritsLoose,
                    n = e.initializerDefineProperty,
                    r = e.assertThisInitialized
            }
                , function(e) {
                    o = e.cclegacy,
                        a = e._decorator,
                        c = e.Label,
                        s = e.Sprite,
                        l = e.Node,
                        u = e.NodeEventType,
                        d = e.Component
                }
                , function(e) {
                    h = e.SentinelForestIntelligenceRewardItemIcon
                }
                , function(e) {
                    p = e.IconType
                }
                , function(e) {
                    v = e.ActivityAPI
                }
            ],
            execute: function() {
                var f, g, I, m, y, b, w, B, R, N, S, E, P, F, _, T;
                o._RF.push({}, "c122bqH9CBNIq3DxfbVnlxR", "SentinelForestIntelligenceRewardItem", void 0);
                var z = a.ccclass
                    , C = a.property;
                e("SentinelForestIntelligenceRewardItem", (f = z("SentinelForestIntelligenceRewardItem"),
                    g = C(c),
                    I = C(c),
                    m = C(s),
                    y = C(l),
                    b = C(l),
                    w = C(l),
                f(((T = function(e) {
                    function t() {
                        for (var t, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
                            o[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(o)) || this,
                            n(t, "rewardName", N, r(t)),
                            n(t, "finishProgress", S, r(t)),
                            n(t, "rewardIcon", E, r(t)),
                            n(t, "questionIcon", P, r(t)),
                            n(t, "receiveBtn", F, r(t)),
                            n(t, "receiveBtnGray", _, r(t)),
                            t.backupProgressFormat = "",
                            t.data = null,
                            t
                    }
                    i(t, e);
                    var o = t.prototype;
                    return o.onLoad = function() {
                        this.receiveBtn.on(u.TOUCH_END, this.onReceiveBtn, this),
                            this.receiveBtnGray.on(u.TOUCH_END, this.onReceiveBtnGray, this),
                            this.backupProgressFormat = this.finishProgress.string
                    }
                        ,
                        o.onReceiveBtn = function() {
                            this.node.emit(t.EVENT_ON_RECEIVE_BTN, this.data)
                        }
                        ,
                        o.onReceiveBtnGray = function() {}
                        ,
                        o.setRewardData = function(e) {
                            if (this.data = e,
                            0 === e.schedule)
                                return this.questionIcon.active = !0,
                                    this.rewardName.node.active = !1,
                                    this.receiveBtn.active = !1,
                                    this.receiveBtnGray.active = !1,
                                    this.rewardIcon.node.active = !1,
                                    void (this.finishProgress.node.active = !1);
                            this.rewardName.node.active = !0,
                                this.rewardIcon.node.active = !0,
                                this.finishProgress.node.active = !0;
                            var t = v.getSpiritName(e.id.toString());
                            this.rewardName.string = t,
                                this.finishProgress.string = this.backupProgressFormat.replace("{0}", e.schedule.toString()).replace("{1}", e.maxSchedule.toString()),
                                this.questionIcon.active = !1,
                                this.receiveBtn.active = e.schedule >= e.maxSchedule,
                                this.receiveBtnGray.active = e.schedule < e.maxSchedule;
                            var i = {
                                id: e.id
                            }
                                , n = {
                                type: p.PET
                            }
                                , r = this.rewardIcon.getComponent(h);
                            r.params = n,
                                r.data = i
                        }
                        ,
                        t
                }(d)).EVENT_ON_RECEIVE_BTN = "onReceiveBtn@SentinelForestIntelligenceRewardItem",
                    N = t((R = T).prototype, "rewardName", [g], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    S = t(R.prototype, "finishProgress", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    E = t(R.prototype, "rewardIcon", [m], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    P = t(R.prototype, "questionIcon", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    F = t(R.prototype, "receiveBtn", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    _ = t(R.prototype, "receiveBtnGray", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    B = R)) || B));
                o._RF.pop()
            }
        }
    }
));
