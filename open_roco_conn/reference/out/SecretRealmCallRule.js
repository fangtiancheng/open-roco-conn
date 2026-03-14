System.register("chunks:///_virtual/SecretRealmCallRule.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./SecretRealmMessage.ts"], (function(e) {
        var t, n, o, r, l, i, a, c, s, u;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    n = e.inheritsLoose,
                    o = e.initializerDefineProperty,
                    r = e.assertThisInitialized
            }
                , function(e) {
                    l = e.cclegacy,
                        i = e._decorator,
                        a = e.Button,
                        c = e.NodeEventType
                }
                , function(e) {
                    s = e.GameUI
                }
                , function(e) {
                    u = e.SecretRealmMessage
                }
            ],
            execute: function() {
                var p, f, C, h;
                l._RF.push({}, "37b8cqMl3tBaYoXCdRuyOAn", "SecretRealmCallRule", void 0);
                var y = i.ccclass
                    , R = i.property;
                e("SecretRealmCallRule", (p = R(a),
                y((h = t((C = function(e) {
                    function t() {
                        for (var t, n = arguments.length, l = new Array(n), i = 0; i < n; i++)
                            l[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(l)) || this,
                            o(t, "btnClose", h, r(t)),
                            t
                    }
                    n(t, e);
                    var l = t.prototype;
                    return l.onLoad = function() {
                        this.btnClose.node.on(c.TOUCH_END, this.onCloseClick, this)
                    }
                        ,
                        l.refreshAwakePage = function() {}
                        ,
                        l.onCloseClick = function() {
                            this.notify(u.CLOSE_CALL_RULE_VIEW)
                        }
                        ,
                        t
                }(s)).prototype, "btnClose", [p], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }),
                    f = C)) || f));
                l._RF.pop()
            }
        }
    }
));
