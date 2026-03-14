System.register("chunks:///_virtual/BloodTalentAwakeUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./TalenIcon.ts", "./BloodTalenMessage.ts"], (function(e) {
        var n, t, o, i, r, a, l, c, s, u, p;
        return {
            setters: [function(e) {
                n = e.applyDecoratedDescriptor,
                    t = e.inheritsLoose,
                    o = e.initializerDefineProperty,
                    i = e.assertThisInitialized
            }
                , function(e) {
                    r = e.cclegacy,
                        a = e._decorator,
                        l = e.Node,
                        c = e.NodeEventType
                }
                , function(e) {
                    s = e.GameUI
                }
                , function(e) {
                    u = e.TalenIcon
                }
                , function(e) {
                    p = e.BloodTalenMessage
                }
            ],
            execute: function() {
                var f, d, y, h, I, B;
                r._RF.push({}, "98dbcQKFW1K2J9tytpx6Sxs", "BloodTalentAwakeUI", void 0);
                var T = a.ccclass
                    , b = a.property;
                e("BloodTalentAwakeUI", (f = b(l),
                    d = b(u),
                T((I = n((h = function(e) {
                    function n() {
                        for (var n, t = arguments.length, r = new Array(t), a = 0; a < t; a++)
                            r[a] = arguments[a];
                        return n = e.call.apply(e, [this].concat(r)) || this,
                            o(n, "closeBtn", I, i(n)),
                            o(n, "talenIcon", B, i(n)),
                            n
                    }
                    t(n, e);
                    var r = n.prototype;
                    return r.onLoad = function() {
                        this.closeBtn.on(c.TOUCH_END, this.onCloseBtn, this)
                    }
                        ,
                        r.refresh = function(e) {
                            this.talenIcon.data = {
                                id: e.type
                            }
                        }
                        ,
                        r.onCloseBtn = function() {
                            this.notify(p.CLOSE_TALEN_AWAKE_VIEW)
                        }
                        ,
                        n
                }(s)).prototype, "closeBtn", [f], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    B = n(h.prototype, "talenIcon", [d], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    y = h)) || y));
                r._RF.pop()
            }
        }
    }
));
