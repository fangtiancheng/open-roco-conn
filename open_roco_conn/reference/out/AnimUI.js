System.register("chunks:///_virtual/AnimUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GlobalTimer.ts", "./Timer.ts", "./TimerEvent.ts"], (function(t) {
        var i, n, e, r, o, s, a, c;
        return {
            setters: [function(t) {
                i = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy,
                        e = t._decorator,
                        r = t.Animation,
                        o = t.Component
                }
                , function(t) {
                    s = t.GlobalTimer
                }
                , function(t) {
                    a = t.Timer
                }
                , function(t) {
                    c = t.default
                }
            ],
            execute: function() {
                var u;
                n._RF.push({}, "02d59gCV31Ff7iyukSdNjBN", "AnimUI", void 0);
                var l = e.ccclass;
                e.property,
                    t("default", l("AnimUI")(u = function(t) {
                        function n() {
                            for (var i, n = arguments.length, e = new Array(n), r = 0; r < n; r++)
                                e[r] = arguments[r];
                            return (i = t.call.apply(t, [this].concat(e)) || this)._anim = void 0,
                                i.counter = 0,
                                i
                        }
                        i(n, t);
                        var e = n.prototype;
                        return e.start = function() {
                            this._anim = this.node.getComponent(r),
                                s.init();
                            var t = new a(5e3);
                            t.addEventListener(c.TIMER, this.onTimer1.bind(this)),
                                t.start()
                        }
                            ,
                            e.onTimer1 = function() {
                                this.counter++,
                                    this.counter % 2 == 0 ? this._anim.defaultClip = this._anim.clips[0] : this._anim.defaultClip = this._anim.clips[1],
                                    this._anim.play()
                            }
                            ,
                            n
                    }(o)) || u);
                n._RF.pop()
            }
        }
    }
));
