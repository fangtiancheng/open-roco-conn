System.register("chunks:///_virtual/RadarPic.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(i) {
        var t, s, a, h, r, o, c, e, l;
        return {
            setters: [function(i) {
                t = i.applyDecoratedDescriptor,
                    s = i.inheritsLoose,
                    a = i.initializerDefineProperty,
                    h = i.assertThisInitialized
            }
                , function(i) {
                    r = i.cclegacy,
                        o = i._decorator,
                        c = i.Graphics,
                        e = i.Color,
                        l = i.Component
                }
            ],
            execute: function() {
                var n, p, M, u;
                r._RF.push({}, "15d05EzpSVAAaFFSDI+qXY1", "RadarPic", void 0);
                var g = o.ccclass
                    , x = o.property;
                i("RadarPic", (n = x(c),
                g((u = t((M = function(i) {
                    function t() {
                        for (var t, s = arguments.length, r = new Array(s), o = 0; o < s; o++)
                            r[o] = arguments[o];
                        return t = i.call.apply(i, [this].concat(r)) || this,
                            a(t, "graphics", u, h(t)),
                            t.maxWG = 200,
                            t.maxMG = 200,
                            t.maxMK = 200,
                            t.maxSM = 200,
                            t.maxSD = 200,
                            t.maxFY = 200,
                            t.MAX_LENGTH = 48,
                            t
                    }
                    return s(t, i),
                        t.prototype.setData = function(i) {
                            if (this.graphics.clear(),
                            null != i) {
                                var t, s, a;
                                this.graphics.fillColor.fromHEX("#FF0000"),
                                    this.graphics.fillColor = new e(this.graphics.fillColor.r,this.graphics.fillColor.g,this.graphics.fillColor.b,102),
                                    this.graphics.lineWidth = 2,
                                    this.graphics.strokeColor.fromHEX("#D12C00");
                                var h = []
                                    , r = -60;
                                a = i.wg / this.maxWG * this.MAX_LENGTH,
                                    t = Math.cos(r * Math.PI / 180) * a * -1,
                                    s = Math.sin(r * Math.PI / 180) * a * -1,
                                    h.push({
                                        x: t,
                                        y: s
                                    }),
                                    a = i.mg / this.maxMG * this.MAX_LENGTH,
                                    t = Math.cos(r * Math.PI / 180) * a,
                                    s = Math.sin(r * Math.PI / 180) * a * -1,
                                    h.push({
                                        x: t,
                                        y: s
                                    }),
                                    t = a = i.mk / this.maxMK * this.MAX_LENGTH,
                                    s = 0,
                                    h.push({
                                        x: t,
                                        y: s
                                    }),
                                    a = i.sm / this.maxSM * this.MAX_LENGTH,
                                    t = Math.cos(r * Math.PI / 180) * a,
                                    s = Math.sin(r * Math.PI / 180) * a,
                                    h.push({
                                        x: t,
                                        y: s
                                    }),
                                    a = i.sd / this.maxSD * this.MAX_LENGTH,
                                    t = Math.cos(r * Math.PI / 180) * a * -1,
                                    s = Math.sin(r * Math.PI / 180) * a,
                                    h.push({
                                        x: t,
                                        y: s
                                    }),
                                    t = -1 * (a = i.sd / this.maxSD * this.MAX_LENGTH),
                                    s = 0,
                                    h.push({
                                        x: t,
                                        y: s
                                    }),
                                    a = i.wg / this.maxWG * this.MAX_LENGTH,
                                    t = Math.cos(r * Math.PI / 180) * a * -1,
                                    s = Math.sin(r * Math.PI / 180) * a * -1,
                                    h.push({
                                        x: t,
                                        y: s
                                    }),
                                    this.graphics.moveTo(h[0].x, h[0].y);
                                for (var o = 1; o < h.length; o++)
                                    this.graphics.lineTo(h[o].x, h[o].y);
                                this.graphics.close(),
                                    this.graphics.fill(),
                                    this.graphics.stroke()
                            }
                        }
                        ,
                        t
                }(l)).prototype, "graphics", [n], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    p = M)) || p));
                r._RF.pop()
            }
        }
    }
));
