System.register("chunks:///_virtual/SecretRealmMasterUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./ActivityAPI.ts", "./SecretRealmMessage.ts", "./SecretRealmProtocol.ts", "./SecretRealmDataProcessor.ts"], (function(e) {
        var t, r, o, n, a, s, c, i, l, u, f, p, S;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    r = e.inheritsLoose,
                    o = e.initializerDefineProperty,
                    n = e.assertThisInitialized
            }
                , function(e) {
                    a = e.cclegacy,
                        s = e._decorator,
                        c = e.Button,
                        i = e.NodeEventType
                }
                , function(e) {
                    l = e.GameUI
                }
                , function(e) {
                    u = e.ActivityAPI
                }
                , function(e) {
                    f = e.SecretRealmMessage
                }
                , function(e) {
                    p = e.SecretRealmProtocol
                }
                , function(e) {
                    S = e.SecretRealmDataProcessor
                }
            ],
            execute: function() {
                var g, y, h, m;
                a._RF.push({}, "fde21NdlT5NEK8DGFcLXp4/", "SecretRealmMasterUI", void 0);
                var I = s.ccclass
                    , R = s.property;
                e("SecretRealmMasterUI", (g = R(c),
                I((m = t((h = function(e) {
                    function t() {
                        for (var t, r = arguments.length, a = new Array(r), s = 0; s < r; s++)
                            a[s] = arguments[s];
                        return t = e.call.apply(e, [this].concat(a)) || this,
                            o(t, "btnClose", m, n(t)),
                            t
                    }
                    r(t, e);
                    var a = t.prototype;
                    return a.onLoad = function() {
                        this.btnClose.node.on(i.TOUCH_END, this.onCloseClick, this)
                    }
                        ,
                        a.refreshAwakePage = function() {
                            var e = this;
                            p.getInstance().querySecretRealmData((function(t, r, o) {
                                    t ? (S.getInstance().processServerData(r),
                                        console.log("[jinlong] [SecretRealmMasterUI] [refreshAwakePage] [success] [data] " + JSON.stringify(r)),
                                        e.notify(f.SHOW_MAIN_VIEW)) : (console.log("[jinlong] [SecretRealmMasterUI] [refreshAwakePage] [error] " + o),
                                        u.showAlert(o),
                                        e.notify(f.CLOSE_MASTER_VIEW))
                                }
                            ))
                        }
                        ,
                        a.onCloseClick = function() {
                            this.notify(f.CLOSE_MASTER_VIEW)
                        }
                        ,
                        t
                }(l)).prototype, "btnClose", [g], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }),
                    y = h)) || y));
                a._RF.pop()
            }
        }
    }
));
