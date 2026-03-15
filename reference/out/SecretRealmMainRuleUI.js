System.register("chunks:///_virtual/SecretRealmMainRuleUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./SecretRealmMessage.ts"], (function(e) {
        var t, n, r, i, o, a, s, c, l, u;
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
                    l = e.GameUI
                }
                , function(e) {
                    u = e.SecretRealmMessage
                }
            ],
            execute: function() {
                var p, f, h, R;
                o._RF.push({}, "63b7aarcQtFH5SsE+KR17s2", "SecretRealmMainRuleUI", void 0);
                var y = a.ccclass
                    , m = a.property;
                e("SecretRealmMainRuleUI", (p = m(s),
                y((R = t((h = function(e) {
                    function t() {
                        for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
                            o[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(o)) || this,
                            r(t, "btnClose", R, i(t)),
                            t
                    }
                    n(t, e);
                    var o = t.prototype;
                    return o.onLoad = function() {
                        this.btnClose.node.on(c.TOUCH_END, this.onCloseClick, this)
                    }
                        ,
                        o.refreshAwakePage = function() {}
                        ,
                        o.onCloseClick = function() {
                            this.notify(u.CLOSE_MAIN_RULE_VIEW)
                        }
                        ,
                        t
                }(l)).prototype, "btnClose", [p], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }),
                    f = h)) || f));
                o._RF.pop()
            }
        }
    }
));
