System.register("chunks:///_virtual/ModalBlocker.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeExtend.ts"], (function(o) {
        var n, t, e, i, c, d, r;
        return {
            setters: [function(o) {
                n = o.inheritsLoose,
                    t = o.assertThisInitialized
            }
                , function(o) {
                    e = o.cclegacy,
                        i = o.Button,
                        c = o.UITransform,
                        d = o.NodeEventType
                }
                , function(o) {
                    r = o.NodeExtend
                }
            ],
            execute: function() {
                e._RF.push({}, "5dd106fE11ECKpr7P7ZUENt", "ModalBlocker", void 0);
                o("ModalBlocker", function(o) {
                    function e(n, e, i) {
                        var c;
                        return void 0 === e && (e = 16777215),
                        void 0 === i && (i = 0),
                            (c = o.call(this) || this)._dpoc = void 0,
                            null == n ? t(c) : (c._dpoc = n,
                                c.draw(e, i),
                                c.on(d.TOUCH_END, c.onBlock, t(c)),
                                c)
                    }
                    n(e, o);
                    var r = e.prototype;
                    return r.draw = function(o, n) {
                        this.addComponent(i);
                        var t = this.addComponent(c);
                        t.width = 2e3,
                            t.height = 2e3
                    }
                        ,
                        r.dispose = function() {
                            this.off(d.TOUCH_END, this.onBlock, this),
                                this.destroy()
                        }
                        ,
                        r.onBlock = function(o) {
                            console.warn("[ModalBlocker] Warning: Click action is blocked by modal window.")
                        }
                        ,
                        e
                }(r));
                e._RF.pop()
            }
        }
    }
));
