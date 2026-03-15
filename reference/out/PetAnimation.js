System.register("chunks:///_virtual/PetAnimation.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AnimationGAF.ts", "./PetResCfgLoader.ts", "./DEFINE.ts"], (function(t) {
        var i, a, n, e, o, s, r;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    a = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        e = t._decorator
                }
                , function(t) {
                    o = t.AnimationGAF
                }
                , function(t) {
                    s = t.PetResCfgLoader
                }
                , function(t) {
                    r = t.DEFINE
                }
            ],
            execute: function() {
                var c;
                n._RF.push({}, "3c179zPi5lEYq3FhGNuifjF", "PetAnimation", void 0);
                var p = e.ccclass;
                e.property,
                    t("PetAction", function(t) {
                        return t[t.IDLE = 0] = "IDLE",
                            t
                    }({})),
                    t("PetAnimation", p(c = function(t) {
                        function n() {
                            for (var i, a = arguments.length, n = new Array(a), e = 0; e < a; e++)
                                n[e] = arguments[e];
                            return (i = t.call.apply(t, [this].concat(n)) || this).params = {},
                                i.available = void 0,
                                i
                        }
                        i(n, t);
                        var e = n.prototype;
                        return e.onUpdateId = function(t) {
                            var i = this;
                            if (void 0 !== t.id && this.params.id !== t.id) {
                                this.available = !1,
                                    this.params = {},
                                    this.params.id = t.id;
                                var a = s.Instance.getPath(t.id);
                                this.url(r.CDN + "gaf/Pet/" + a, (function() {
                                        i.available = !0,
                                            i.data = t
                                    }
                                ))
                            }
                        }
                            ,
                            e.onUpdateLinkName = function(t) {
                                var i = t.linkName;
                                void 0 === this.params.linkName && void 0 === i && (i = "Spirit"),
                                void 0 !== i && this.params.linkName !== i && (this.params.linkName = i,
                                    this.create(i),
                                    this.gafTimeLine.setPosition(-1250, 500))
                            }
                            ,
                            e.onUpdateActionName = function(t) {
                                var i = t.actionName;
                                void 0 !== i && this.params.actionName !== i && (this.params.actionName = i,
                                    this.gotoAndStop(i))
                            }
                            ,
                            a(n, [{
                                key: "data",
                                get: function() {
                                    return this.params
                                },
                                set: function(t) {
                                    t && (this.onUpdateId(t),
                                    this.available && (this.onUpdateLinkName(t),
                                        this.onUpdateActionName(t)))
                                }
                            }]),
                            n
                    }(o)) || c);
                n._RF.pop()
            }
        }
    }
));
