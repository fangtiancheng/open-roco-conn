System.register("chunks:///_virtual/SimpleTips2.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./TipsProxy.ts"], (function(e) {
        var i, t, r, n, o, p, s, a;
        return {
            setters: [function(e) {
                i = e.applyDecoratedDescriptor,
                    t = e.inheritsLoose,
                    r = e.initializerDefineProperty,
                    n = e.assertThisInitialized
            }
                , function(e) {
                    o = e.cclegacy,
                        p = e._decorator,
                        s = e.Label
                }
                , function(e) {
                    a = e.BaseTips
                }
            ],
            execute: function() {
                var l, c, u, f, y;
                o._RF.push({}, "6cbdeLo0qdDbJg67ynOTdxe", "SimpleTips", void 0);
                var b = p.ccclass
                    , d = p.property;
                e("SimpleTips", (l = b("SimpleTips"),
                    c = d(s),
                l((y = i((f = function(e) {
                    function i() {
                        for (var i, t = arguments.length, o = new Array(t), p = 0; p < t; p++)
                            o[p] = arguments[p];
                        return i = e.call.apply(e, [this].concat(o)) || this,
                            r(i, "tipsLabel", y, n(i)),
                            i
                    }
                    return t(i, e),
                        i.prototype.onUpdateTips = function(e) {
                            this.tipsLabel.name = e
                        }
                        ,
                        i
                }(a)).prototype, "tipsLabel", [c], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    u = f)) || u));
                o._RF.pop()
            }
        }
    }
));
