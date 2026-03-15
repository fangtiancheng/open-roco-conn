System.register("chunks:///_virtual/Alert.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts", "./AlertContent.ts", "./WindowBase.ts"], (function(t) {
        var n, e, o, i, r;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    o = t.default
                }
                , function(t) {
                    i = t.AlertContent
                }
                , function(t) {
                    r = t.WindowBase
                }
            ],
            execute: function() {
                e._RF.push({}, "3f87689nCtDY7B1D436Pro+", "Alert", void 0);
                t("Alert", function(t) {
                    function e(n, e, r, c, l) {
                        var s;
                        return void 0 === e && (e = ""),
                        void 0 === r && (r = ""),
                        void 0 === c && (c = 0),
                        void 0 === l && (l = null),
                            (s = t.call(this) || this)._target = void 0,
                            s.bg = void 0,
                            s.content = void 0,
                            s._target = o.Instance.getPrefabByName("common/Alert_1600"),
                            s.addChild(s._target),
                            s.bg = s._target.getChildByName("bg"),
                            s.content = new i,
                            s.initialize(n, s.bg, null, s.content, !0),
                            s.initContent(e, r, c, l),
                            s.center(),
                            s
                    }
                    return n(e, t),
                        e.prototype.initContent = function(t, n, e, o) {
                            void 0 === t && (t = ""),
                            void 0 === n && (n = ""),
                            void 0 === e && (e = 0),
                            void 0 === o && (o = null),
                                this.content.title = t,
                                this.content.message = n,
                                this.content.mode = e,
                                this.content.handler = o
                        }
                        ,
                        e
                }(r));
                e._RF.pop()
            }
        }
    }
));
