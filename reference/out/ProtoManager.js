System.register("chunks:///_virtual/ProtoManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./index.mjs_cjs=&original=.js", "./BuildLogHelper.ts", "./index.js"], (function(e) {
        var t, n, r, o, i, s, l, a, c, u;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    n = e.inheritsLoose,
                    r = e.initializerDefineProperty,
                    o = e.assertThisInitialized
            }
                , function(e) {
                    i = e.cclegacy,
                        s = e._decorator,
                        l = e.TextAsset,
                        a = e.Component
                }
                , null, function(e) {
                    c = e.default
                }
                , function(e) {
                    u = e.default
                }
            ],
            execute: function() {
                var p, f, h, d, b, g;
                i._RF.push({}, "97076znAhJJrJPWihQL54wr", "ProtoManager", void 0);
                var y = s.ccclass
                    , x = s.property;
                e("default", (p = y("ProtoManager"),
                    f = x(l),
                p(((g = function(e) {
                    function t() {
                        for (var t, n = arguments.length, i = new Array(n), s = 0; s < n; s++)
                            i[s] = arguments[s];
                        return t = e.call.apply(e, [this].concat(i)) || this,
                            r(t, "pbTexAsset", b, o(t)),
                            t.pb = null,
                            t
                    }
                    n(t, e);
                    var i = t.prototype;
                    return i.onLoad = function() {
                        null === t.Instance ? (t.Instance = this,
                        this.pbTexAsset && (this.pb = u.parse(this.pbTexAsset.text),
                        1 == c.IS_LOCAL && (console.log("this.pb"),
                            console.log(this.pb)))) : this.destroy()
                    }
                        ,
                        i.SerializeMsg = function(e, t) {
                            var n = this.pb.root.lookupType(e)
                                , r = n.create(t);
                            return n.encode(r).finish()
                        }
                        ,
                        i.DeserializeMsg = function(e, t) {
                            return this.pb.root.lookupType(e).decode(t)
                        }
                        ,
                        t
                }(a)).Instance = null,
                    b = t((d = g).prototype, "pbTexAsset", [f], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    h = d)) || h));
                i._RF.pop()
            }
        }
    }
));
