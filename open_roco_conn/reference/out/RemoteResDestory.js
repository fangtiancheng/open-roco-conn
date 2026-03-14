System.register("chunks:///_virtual/RemoteResDestory.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts"], (function(e) {
        var t, o, r, n, i, s;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    o = e.cclegacy,
                        r = e.isValid,
                        n = e.Sprite,
                        i = e.Component
                }
                , function(e) {
                    s = e.default
                }
            ],
            execute: function() {
                o._RF.push({}, "d348eBKXgFPoolQoUjLoYZV", "RemoteResDestory", void 0);
                e("RemoteResDestory", function(e) {
                    function o() {
                        return e.apply(this, arguments) || this
                    }
                    return t(o, e),
                        o.prototype.onDestroy = function() {
                            if (this.node && r(this.node)) {
                                var e = this.node.getComponent(n);
                                if (e && e.spriteFrame) {
                                    var t = e.spriteFrame;
                                    if (e.spriteFrame.decRef(),
                                        e.spriteFrame = null,
                                    t.refCount <= 0) {
                                        var o, i, u = t.texture;
                                        if (t.packable)
                                            u = null == (o = t.original) ? void 0 : o._texture;
                                        if (u)
                                            null == (i = u.image) || i.decRef(),
                                                u.destroy()
                                    }
                                    1 == s.IS_LOCAL && console.error("RemoteResDestory-done-name=>" + this.node.name)
                                }
                            }
                        }
                        ,
                        o
                }(i));
                o._RF.pop()
            }
        }
    }
));
