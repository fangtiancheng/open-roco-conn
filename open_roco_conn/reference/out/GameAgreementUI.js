System.register("chunks:///_virtual/GameAgreementUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./CreateRoleMessage.ts"], (function(e) {
        var t, n, r, i, o, a, s, c, u, l;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    n = e.inheritsLoose,
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
                    u = e.GameUI
                }
                , function(e) {
                    l = e.CreateRoleMessage
                }
            ],
            execute: function() {
                var g, f, p, h, d, m, y;
                o._RF.push({}, "6accb2dNOhEUafwZbLSUYtx", "GameAgreementUI", void 0);
                var E = a.ccclass
                    , B = a.property;
                e("GameAgreementUI", (g = E("GameAgreementUI"),
                    f = B(s),
                    p = B(s),
                g((m = t((d = function(e) {
                    function t() {
                        for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
                            o[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(o)) || this,
                            r(t, "agreeBtn", m, i(t)),
                            r(t, "disagreeBtn", y, i(t)),
                            t
                    }
                    n(t, e);
                    var o = t.prototype;
                    return o.onLoad = function() {
                        this.agreeBtn.node.on(c.TOUCH_END, this.onAgreeBtn, this),
                            this.disagreeBtn.node.on(c.TOUCH_END, this.onDisagreeBtn, this)
                    }
                        ,
                        o.onAgreeBtn = function() {
                            this.notify(l.CLOSE_AGREEMENT_VIEW)
                        }
                        ,
                        o.onDisagreeBtn = function() {
                            this.notify(l.SHOW_AGREEMENT_WARNING_VIEW)
                        }
                        ,
                        t
                }(u)).prototype, "agreeBtn", [f], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    y = t(d.prototype, "disagreeBtn", [p], {
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
