System.register("chunks:///_virtual/AdapterBase.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AdapterManager.ts", "./GlobalConfig.ts", "./BuildLogHelper.ts"], (function(e) {
        var t, i, o, n, s, a, r, h, c, d, l, g, u, f;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    i = e.inheritsLoose,
                    o = e.initializerDefineProperty,
                    n = e.assertThisInitialized
            }
                , function(e) {
                    s = e.cclegacy,
                        a = e._decorator,
                        r = e.CCBoolean,
                        h = e.view,
                        c = e.screen,
                        d = e.Widget,
                        l = e.Component
                }
                , function(e) {
                    g = e.AdapterManager
                }
                , function(e) {
                    u = e.GlobalConfig
                }
                , function(e) {
                    f = e.default
                }
            ],
            execute: function() {
                var p, w, b;
                s._RF.push({}, "341d9gnSo5IQae7V0Cm6iN8", "AdapterBase", void 0);
                a.ccclass;
                var v = a.property;
                e("AdapterBase", (p = v(r),
                    b = t((w = function(e) {
                        function t() {
                            for (var t, i = arguments.length, s = new Array(i), a = 0; a < i; a++)
                                s[a] = arguments[a];
                            return (t = e.call.apply(e, [this].concat(s)) || this).showLog = !1,
                                t.orPosX = 0,
                                t.orPosY = 0,
                                t.absOffsetX = 0,
                                t.absOffsetY = 0,
                                t.realWidth = 0,
                                t.realHeight = 0,
                                o(t, "active", b, n(t)),
                                t
                        }
                        i(t, e);
                        var s = t.prototype;
                        return s.setAdapter = function() {}
                            ,
                            s.caculateRealSize = function() {
                                var e = h.getDesignResolutionSize()
                                    , t = c.windowSize.height / c.windowSize.width;
                                this.showLog && console.error("scaleY=" + t),
                                    this.realHeight = e.width * t;
                                var i = e.width / e.height
                                    , o = c.windowSize.width / c.windowSize.height;
                                o > i && (this.realHeight = e.height);
                                t = c.windowSize.width / c.windowSize.height;
                                this.realWidth = e.height * t,
                                o < i && (this.realWidth = e.width)
                            }
                            ,
                            s.caculateOffset = function() {
                                this.absOffsetX = u.designWidth / 2 - Math.abs(this.orPosX),
                                    this.absOffsetY = u.designHeight / 2 - Math.abs(this.orPosY)
                            }
                            ,
                            s.onLoad = function() {
                                if (1 == f.IS_LOCAL && console.error(this.node.name + "==" + this.constructor.name + "--当前AdapterBase组件未激活！！！"),
                                0 != this.active && 0 != this.enabled) {
                                    var e = this.node.getComponent(d);
                                    e && 1 == e.enabled && console.error(this.node.name + "==" + this.constructor.name + "--已添加AdapterBase组件的Node不能挂载Widget组件！！！"),
                                    this.showLog && console.log(this.node.name + "==" + this.constructor.name + '=="onSizeChanged"'),
                                        this.orPosX = this.node.getPosition().x,
                                        this.orPosY = this.node.getPosition().y,
                                        g.Add(this.node),
                                        this.setAdapter(),
                                    this.showLog && console.log(this.node.name + "==" + this.constructor.name + '=="onSizeChanged---end"')
                                }
                            }
                            ,
                            s.setLog = function(e) {}
                            ,
                            t
                    }(l)).prototype, "active", [p], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return !0
                        }
                    }),
                    w));
                s._RF.pop()
            }
        }
    }
));
