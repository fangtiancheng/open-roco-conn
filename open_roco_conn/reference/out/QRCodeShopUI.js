System.register("chunks:///_virtual/QRCodeShopUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./PureNotificationCenter.ts", "./ActivityAPI.ts", "./AppConstDef.ts"], (function(e) {
        var t, n, o, i, r, c, a, s, p, l, d, u, f;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    n = e.inheritsLoose,
                    o = e.initializerDefineProperty,
                    i = e.assertThisInitialized
            }
                , function(e) {
                    r = e.cclegacy,
                        c = e._decorator,
                        a = e.Button,
                        s = e.Sprite,
                        p = e.NodeEventType,
                        l = e.Component
                }
                , function(e) {
                    d = e.PureNotificationCenter
                }
                , function(e) {
                    u = e.ActivityAPI
                }
                , function(e) {
                    f = e.AppConstDef
                }
            ],
            execute: function() {
                var _, h, m, D, y, C, g, v;
                r._RF.push({}, "ec3943IMy9PD7GEvI0JEhUk", "QRCodeShopUI", void 0);
                var b = c.ccclass
                    , I = c.property
                    , R = c.menu;
                e("default", (_ = R("AUI/QRCodeShopUI"),
                    h = I(a),
                    m = I(s),
                b(D = _(((v = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), c = 0; c < n; c++)
                            r[c] = arguments[c];
                        return t = e.call.apply(e, [this].concat(r)) || this,
                            o(t, "closeBtn", C, i(t)),
                            o(t, "codeBtn", g, i(t)),
                            t
                    }
                    n(t, e);
                    var r = t.prototype;
                    return r.onLoad = function() {}
                        ,
                        r.start = function() {
                            this.closeBtn.node.on(p.TOUCH_END, this.onClose, this),
                                this.codeBtn.node.on(p.TOUCH_END, this.onCodeOpen, this)
                        }
                        ,
                        r.onDestroy = function() {}
                        ,
                        r.onClose = function() {
                            d.sendNotification(f.NN_V_DESTORY_QRCODESHOP_VIEW)
                        }
                        ,
                        r.onCodeOpen = function() {
                            u.showConfirmAlert("即将前往腾讯草场地周边商城", (function() {
                                    u.navigateToURL(t.URL, "_blank")
                                }
                            ))
                        }
                        ,
                        t
                }(l)).URL = "https://mall.video.qq.com/ecommerce/ip-products?ipId=1615&entity_type=9&ref_pg=pgid%3Dpage_home_channel%26ztid%3D110827%26theme_id%3D18&ref_ele=mod_id%3Dsearch_area%26eid%3Dsearch_icon&from_pg=pgid%3Dpage_home_channel%26ztid%3D110827%26theme_id%3D18&from_ele=mod_id%3Dsearch_area%26eid%3Dsearch_icon&theme_id=18&theme_title=腾讯视频官方周边商城-草场地&page_from=16003&strategy_id=498098f29ded4fcc86d8b3d1eb96b6f6",
                    C = t((y = v).prototype, "closeBtn", [h], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    g = t(y.prototype, "codeBtn", [m], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    D = y)) || D) || D));
                r._RF.pop()
            }
        }
    }
));
