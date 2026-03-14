System.register("chunks:///_virtual/PrefabSelector.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts"], (function(e) {
        var t, r, n, i, o, s, a, c, l, u, f;
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
                        a = e._decorator,
                        c = e.Prefab,
                        l = e.instantiate,
                        u = e.Component
                }
                , function(e) {
                    f = e.default
                }
            ],
            execute: function() {
                var d, p, h, g, b;
                s._RF.push({}, "990b2H9nd5DyaTx0gFx3iPt", "PrefabSelector", void 0);
                var x = a.ccclass
                    , m = a.property
                    , y = a.menu;
                e("default", (d = y("Component/PrefabSelector"),
                    p = m([c]),
                x(h = d((b = t((g = function(e) {
                    function t() {
                        for (var t, r = arguments.length, o = new Array(r), s = 0; s < r; s++)
                            o[s] = arguments[s];
                        return (t = e.call.apply(e, [this].concat(o)) || this)._idx = 0,
                            n(t, "prefabs", b, i(t)),
                            t
                    }
                    r(t, e);
                    var s = t.prototype;
                    return s.start = function() {
                        1 == f.IS_LOCAL && console.log("PrefabSelector")
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
                                    throw f.IS_LOCAL,
                                        new Error("[" + this.constructor.name + "]'s function [set selectedIndex] param is illegal.(idx < 0),idx=" + e);
                                if (e >= this.prefabs.length)
                                    throw f.IS_LOCAL,
                                        new Error("[" + this.constructor.name + "]'s function [set selectedIndex] param is illegal.(idx > this.prefabs.length),idx=" + e);
                                this._idx = e,
                                    this.node.removeAllChildren();
                                var t = this.prefabs[e];
                                if (t) {
                                    var r = l(t);
                                    this.node.addChild(r)
                                }
                            }
                        }, {
                            key: "currentFrame",
                            get: function() {
                                return this._idx
                            },
                            set: function(e) {
                                this.gotoAndStop(e)
                            }
                        }, {
                            key: "totalFrames",
                            get: function() {
                                return this.prefabs.length
                            },
                            set: function(e) {
                                throw new Error("[" + this.constructor.name + "] totalFrames cannot be call.")
                            }
                        }]),
                        t
                }(u)).prototype, "prefabs", [p], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }),
                    h = g)) || h) || h));
                s._RF.pop()
            }
        }
    }
));
