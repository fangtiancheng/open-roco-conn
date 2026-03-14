System.register("chunks:///_virtual/SimpleLoading.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts", "./WindowBase.ts", "./WindowType.ts"], (function(t) {
        var n, e, i, o, s, c;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy,
                        i = t.Animation
                }
                , function(t) {
                    o = t.default
                }
                , function(t) {
                    s = t.WindowBase
                }
                , function(t) {
                    c = t.WindowType
                }
            ],
            execute: function() {
                e._RF.push({}, "e3022rZ3StLJJXvSkgis/PV", "SimpleLoading", void 0);
                t("SimpleLoading", function(t) {
                    function e(n, e) {
                        var s;
                        return void 0 === e && (e = !1),
                            (s = t.call(this) || this).bg = void 0,
                            s.content = void 0,
                            s._target = void 0,
                            s._target = o.Instance.getPrefabByName("base/simpleLoadingUI"),
                            s.addChild(s._target),
                            s.content = s._target.getChildByName("animation").getComponent(i),
                            s.initialize(n, null, null, null, e),
                            s.center(),
                            s
                    }
                    n(e, t);
                    var s = e.prototype;
                    return s.close = function() {
                        t.prototype.close.call(this),
                            this.content.stop()
                    }
                        ,
                        s.show = function() {
                            t.prototype.show.call(this),
                                this.content.play()
                        }
                        ,
                        s.hide = function() {
                            this.content.stop(),
                                t.prototype.hide.call(this)
                        }
                        ,
                        s.setProgress = function(t) {}
                        ,
                        s.setTipText = function(t) {}
                        ,
                        s.setLabel = function(t, n) {}
                        ,
                        s.setBackGround = function(t) {}
                        ,
                        s.setCancelEnabled = function(t, n) {}
                        ,
                        s.getType = function() {
                            return c.SIMPLE_LOADING
                        }
                        ,
                        e
                }(s));
                e._RF.pop()
            }
        }
    }
));
