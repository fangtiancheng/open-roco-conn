System.register("chunks:///_virtual/SpriteFrameSelector.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts"], (function(e) {
        var t, r, n, i, o, s, c, a, l, u, p;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    r = e.inheritsLoose,
                    n = e.initializerDefineProperty,
                    i = e.assertThisInitialized,
                    o = e.createClass
            }
                , function(e) {
                    s = e.cclegacy,
                        c = e._decorator,
                        a = e.SpriteFrame,
                        l = e.Sprite,
                        u = e.Component
                }
                , function(e) {
                    p = e.default
                }
            ],
            execute: function() {
                var d, h, f, m, g;
                s._RF.push({}, "06b2dvJ4lpHibk+fjZ5dq/+", "SpriteFrameSelector", void 0);
                var S = c.ccclass
                    , x = c.property
                    , y = c.menu;
                e("default", (d = y("Component/SpriteFrameSelector"),
                    h = x([a]),
                S(f = d((g = t((m = function(e) {
                    function t() {
                        for (var t, r = arguments.length, o = new Array(r), s = 0; s < r; s++)
                            o[s] = arguments[s];
                        return (t = e.call.apply(e, [this].concat(o)) || this)._idx = 0,
                            n(t, "sp", g, i(t)),
                            t
                    }
                    r(t, e);
                    var s = t.prototype;
                    return s.start = function() {
                        1 == p.IS_LOCAL && console.log("SpriteFrameSelector")
                    }
                        ,
                        s.gotoAndStop = function(e) {
                            e -= 1,
                                this.selectedIndex = e
                        }
                        ,
                        o(t, [{
                            key: "selectedIndex",
                            get: function() {
                                return this._idx
                            },
                            set: function(e) {
                                if (e < 0)
                                    throw p.IS_LOCAL,
                                        new Error("[" + this.constructor.name + "]'s function [set selectedIndex] param is illegal.(idx < 0),idx=" + e);
                                if (e >= this.sp.length)
                                    throw p.IS_LOCAL,
                                        new Error("[" + this.constructor.name + "]'s function [set selectedIndex] param is illegal.(idx > this.sp.length),idx=" + e);
                                this._idx = e,
                                this.node.getComponent(l) && (this.node.getComponent(l).spriteFrame = this.sp[e])
                            }
                        }, {
                            key: "currentFrame",
                            get: function() {
                                return this._idx + 1
                            },
                            set: function(e) {
                                this.gotoAndStop(e)
                            }
                        }, {
                            key: "totalFrames",
                            get: function() {
                                return this.sp.length
                            },
                            set: function(e) {
                                throw new Error("[" + this.constructor.name + "] totalFrames cannot be call.")
                            }
                        }]),
                        t
                }(u)).prototype, "sp", [h], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }),
                    f = m)) || f) || f));
                s._RF.pop()
            }
        }
    }
));
