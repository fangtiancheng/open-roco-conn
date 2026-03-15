System.register("chunks:///_virtual/SentinelIntelligenceEntrance.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./PureNotificationCenter.ts", "./SentinelIntelligenceMessage.ts"], (function(e) {
        var n, t, i, o, r, l, c, a, u, s, p, f;
        return {
            setters: [function(e) {
                n = e.applyDecoratedDescriptor,
                    t = e.inheritsLoose,
                    i = e.initializerDefineProperty,
                    o = e.assertThisInitialized
            }
                , function(e) {
                    r = e.cclegacy,
                        l = e._decorator,
                        c = e.Node,
                        a = e.Label,
                        u = e.NodeEventType,
                        s = e.Component
                }
                , function(e) {
                    p = e.PureNotificationCenter
                }
                , function(e) {
                    f = e.SentinelIntelligenceMessage
                }
            ],
            execute: function() {
                var d, g, b, y, h, I, v, E, S;
                r._RF.push({}, "702e6mbRqZM6b3uyMzv2SIv", "SentinelIntelligenceEntrance", void 0);
                var m = l.ccclass
                    , _ = l.property;
                e("SentinelIntelligenceEntrance", (d = m("SentinelIntelligenceEntrance"),
                    g = _(c),
                    b = _(c),
                    y = _(a),
                d((v = n((I = function(e) {
                    function n() {
                        for (var n, t = arguments.length, r = new Array(t), l = 0; l < t; l++)
                            r[l] = arguments[l];
                        return n = e.call.apply(e, [this].concat(r)) || this,
                            i(n, "mailIcon", v, o(n)),
                            i(n, "redPoint", E, o(n)),
                            i(n, "unReadCount", S, o(n)),
                            n
                    }
                    t(n, e);
                    var r = n.prototype;
                    return r.onLoad = function() {
                        this.node.on(u.TOUCH_END, this.onTouchEnd, this)
                    }
                        ,
                        r.onTouchEnd = function() {
                            console.log("点击图标"),
                                p.sendNotification(f.SHOW_MASTER_VIEW)
                        }
                        ,
                        n
                }(s)).prototype, "mailIcon", [g], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    E = n(I.prototype, "redPoint", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    S = n(I.prototype, "unReadCount", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    h = I)) || h));
                r._RF.pop()
            }
        }
    }
));
