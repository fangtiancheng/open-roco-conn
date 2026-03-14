System.register("chunks:///_virtual/PageToggle.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var t, n, o, r, i, a, s, c, g, l;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    n = e.inheritsLoose,
                    o = e.initializerDefineProperty,
                    r = e.assertThisInitialized,
                    i = e.createClass
            }
                , function(e) {
                    a = e.cclegacy,
                        s = e._decorator,
                        c = e.Node,
                        g = e.Toggle,
                        l = e.Component
                }
            ],
            execute: function() {
                var p, u, h, f, d;
                a._RF.push({}, "65da9ubNURGIIpcnplaP0TI", "PageToggle", void 0);
                var v = s.ccclass
                    , y = s.property;
                e("PageToggle", (p = v("PageToggle"),
                    u = y(c),
                p((d = t((f = function(e) {
                    function t() {
                        for (var t, n = arguments.length, i = new Array(n), a = 0; a < n; a++)
                            i[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(i)) || this,
                            o(t, "pages", d, r(t)),
                            t
                    }
                    n(t, e);
                    var a = t.prototype;
                    return a.onLoad = function() {
                        this.onChange(this.node.getComponent(g))
                    }
                        ,
                        a.start = function() {
                            var e = this;
                            this.node.on("toggle", (function(t) {
                                    return e.onChange(t)
                                }
                            ))
                        }
                        ,
                        a.onChange = function(e) {
                            for (var t = 0; t < this.pages.length; t++)
                                this.pages[t].active = e.isChecked
                        }
                        ,
                        i(t, [{
                            key: "pageList",
                            get: function() {
                                return this.pages
                            }
                        }]),
                        t
                }(l)).prototype, "pages", [u], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }),
                    h = f)) || h));
                a._RF.pop()
            }
        }
    }
));
