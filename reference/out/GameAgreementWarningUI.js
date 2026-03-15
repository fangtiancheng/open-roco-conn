System.register("chunks:///_virtual/GameAgreementWarningUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./CreateRoleMessage.ts"], (function(e) {
        var n, t, r, i, o, a, s, c, l, u;
        return {
            setters: [function(e) {
                n = e.applyDecoratedDescriptor,
                    t = e.inheritsLoose,
                    r = e.initializerDefineProperty,
                    i = e.assertThisInitialized
            }
                , function(e) {
                    o = e.cclegacy,
                        a = e._decorator,
                        s = e.Button,
                        c = e.NodeEventType
                }
                , function(e) {
                    l = e.GameUI
                }
                , function(e) {
                    u = e.CreateRoleMessage
                }
            ],
            execute: function() {
                var g, p, f, h, d, m, y;
                o._RF.push({}, "9026aIo7MVKjpx+gQ7/Imvj", "GameAgreementWarningUI", void 0);
                var B = a.ccclass
                    , E = a.property;
                e("GameAgreementWarningUI", (g = B("GameAgreementWarningUI"),
                    p = E(s),
                    f = E(s),
                g((m = n((d = function(e) {
                    function n() {
                        for (var n, t = arguments.length, o = new Array(t), a = 0; a < t; a++)
                            o[a] = arguments[a];
                        return n = e.call.apply(e, [this].concat(o)) || this,
                            r(n, "agreeBtn", m, i(n)),
                            r(n, "disagreeBtn", y, i(n)),
                            n
                    }
                    t(n, e);
                    var o = n.prototype;
                    return o.onLoad = function() {
                        this.agreeBtn.node.on(c.TOUCH_END, this.onAgreeBtn, this),
                            this.disagreeBtn.node.on(c.TOUCH_END, this.onDisagreeBtn, this)
                    }
                        ,
                        o.onAgreeBtn = function() {
                            this.notify(u.CLOSE_AGREEMENT_WARNING_VIEW),
                                this.notify(u.SHOW_AGREEMENT_VIEW)
                        }
                        ,
                        o.onDisagreeBtn = function() {
                            window.location.reload()
                        }
                        ,
                        n
                }(l)).prototype, "agreeBtn", [p], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    y = n(d.prototype, "disagreeBtn", [f], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    h = d)) || h));
                o._RF.pop()
            }
        }
    }
));
