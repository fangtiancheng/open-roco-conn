System.register("chunks:///_virtual/GameAgreementOpenUrl.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var n, r, t, o, i, a, c, l;
        return {
            setters: [function(e) {
                n = e.applyDecoratedDescriptor,
                    r = e.inheritsLoose,
                    t = e.initializerDefineProperty,
                    o = e.assertThisInitialized
            }
                , function(e) {
                    i = e.cclegacy,
                        a = e._decorator,
                        c = e.NodeEventType,
                        l = e.Component
                }
            ],
            execute: function() {
                var u, p, s;
                i._RF.push({}, "d3ebb9KIElPNrNmKkM/1akK", "GameAgreementOpenUrl", void 0);
                var h = a.ccclass
                    , f = a.property;
                e("GameAgreementOpenUrl", h("GameAgreementOpenUrl")((s = n((p = function(e) {
                    function n() {
                        for (var n, r = arguments.length, i = new Array(r), a = 0; a < r; a++)
                            i[a] = arguments[a];
                        return n = e.call.apply(e, [this].concat(i)) || this,
                            t(n, "url", s, o(n)),
                            n
                    }
                    r(n, e);
                    var i = n.prototype;
                    return i.onLoad = function() {
                        this.node.on(c.TOUCH_END, this.onTouch, this)
                    }
                        ,
                        i.onTouch = function() {
                            window.open(this.url)
                        }
                        ,
                        n
                }(l)).prototype, "url", [f], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return ""
                    }
                }),
                    u = p)) || u);
                i._RF.pop()
            }
        }
    }
));
