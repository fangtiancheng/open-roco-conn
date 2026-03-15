System.register("chunks:///_virtual/BloodTalenHandBookPage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./HandBookTalenList.ts", "./BloodTalenCGI.ts", "./HandBookPetList.ts", "./TalenIcon.ts"], (function(n) {
        var t, e, i, o, a, l, r, s, c, u, f;
        return {
            setters: [function(n) {
                t = n.applyDecoratedDescriptor,
                    e = n.inheritsLoose,
                    i = n.initializerDefineProperty,
                    o = n.assertThisInitialized
            }
                , function(n) {
                    a = n.cclegacy,
                        l = n._decorator
                }
                , function(n) {
                    r = n.GameSubUI
                }
                , function(n) {
                    s = n.HandBookTalenList
                }
                , function(n) {
                    c = n.GetBloodTalenData
                }
                , function(n) {
                    u = n.HandBookPetList
                }
                , function(n) {
                    f = n.TalenIcon
                }
            ],
            execute: function() {
                var d, p, h, T, L, b, I, B;
                a._RF.push({}, "6fbf5P6CdREboczU7t1uH8i", "BloodTalenHandBookPage", void 0);
                var y = l.ccclass
                    , g = l.property;
                n("BloodTalenHandBookPage", (d = g(f),
                    p = g(s),
                    h = g(u),
                y((b = t((L = function(n) {
                    function t() {
                        for (var t, e = arguments.length, a = new Array(e), l = 0; l < e; l++)
                            a[l] = arguments[l];
                        return t = n.call.apply(n, [this].concat(a)) || this,
                            i(t, "talenInfo", b, o(t)),
                            i(t, "talenList", I, o(t)),
                            i(t, "petList", B, o(t)),
                            t
                    }
                    e(t, n);
                    var a = t.prototype;
                    return a.onLoad = function() {
                        this.onInitTalenList()
                    }
                        ,
                        a.onInitTalenList = function() {
                            var n = this
                                , t = {
                                selectIndex: 0,
                                list: [],
                                onClick: this.onClickTalen.bind(this)
                            };
                            c((function(e) {
                                    "0" === e.result.value && (t.list = e.talentid),
                                        n.talenList.refreshView(t)
                                }
                            ))
                        }
                        ,
                        a.onClickTalen = function(n) {
                            n && this.onRefreshTalen(n)
                        }
                        ,
                        a.onRefreshTalen = function(n) {
                            this.onRefreshTalenInfo(n),
                                this.onRefreshPetList(n)
                        }
                        ,
                        a.onRefreshTalenInfo = function(n) {
                            this.talenInfo.data = {
                                id: n.tid
                            }
                        }
                        ,
                        a.onRefreshPetList = function(n) {
                            var t = [];
                            "string" == typeof n.id ? t.push(n.id) : t = n.id,
                                this.petList.refreshView({
                                    list: t
                                })
                        }
                        ,
                        t
                }(r)).prototype, "talenInfo", [d], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    I = t(L.prototype, "talenList", [p], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    B = t(L.prototype, "petList", [h], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    T = L)) || T));
                a._RF.pop()
            }
        }
    }
));
