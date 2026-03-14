System.register("chunks:///_virtual/SpriteGender.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var t, r, n, i, o, a, c, l, p, s;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    r = e.inheritsLoose,
                    n = e.initializerDefineProperty,
                    i = e.assertThisInitialized,
                    o = e.createClass
            }
                , function(e) {
                    a = e.cclegacy,
                        c = e._decorator,
                        l = e.ccenum,
                        p = e.Node,
                        s = e.Component
                }
            ],
            execute: function() {
                var u, f, d, g, y, h, m, E;
                a._RF.push({}, "cf620oUiWJD2atnV6TZ9kci", "SpriteGender", void 0);
                var L = c.ccclass
                    , _ = c.property
                    , b = e("SpriteGenderType", function(e) {
                    return e[e.MALE = 0] = "MALE",
                        e[e.FEMALE = 1] = "FEMALE",
                        e
                }({}));
                l(b);
                e("SpriteGender", (u = L("SpriteGender"),
                    f = _(p),
                    d = _(p),
                    g = _({
                        type: b
                    }),
                u((m = t((h = function(e) {
                    function t() {
                        for (var t, r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                            o[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(o)) || this,
                            n(t, "male", m, i(t)),
                            n(t, "female", E, i(t)),
                            t._gender = b.MALE,
                            t
                    }
                    return r(t, e),
                        o(t, [{
                            key: "gender",
                            get: function() {
                                return this._gender
                            },
                            set: function(e) {
                                this._gender = e,
                                this.male && (this.male.active = this._gender == b.MALE),
                                this.female && (this.female.active = this._gender == b.FEMALE)
                            }
                        }]),
                        t
                }(s)).prototype, "male", [f], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    E = t(h.prototype, "female", [d], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    t(h.prototype, "gender", [g], Object.getOwnPropertyDescriptor(h.prototype, "gender"), h.prototype),
                    y = h)) || y));
                a._RF.pop()
            }
        }
    }
));
