System.register("chunks:///_virtual/IconCombatResPool.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts", "./CombatResType.ts", "./CombatResVO.ts", "./CombatResPool.ts"], (function(o) {
        var t, e, n, s, i, l, c, a;
        return {
            setters: [function(o) {
                t = o.inheritsLoose
            }
                , function(o) {
                    e = o.cclegacy,
                        n = o.SpriteFrame,
                        s = o.Texture2D
                }
                , function(o) {
                    i = o.default
                }
                , function(o) {
                    l = o.CombatResType
                }
                , function(o) {
                    c = o.CombatResVO
                }
                , function(o) {
                    a = o.CombatResPool
                }
            ],
            execute: function() {
                e._RF.push({}, "2b289+xJIdKVbwX18V+rScF", "IconCombatResPool", void 0);
                o("IconCombatResPool", function(o) {
                    function e() {
                        return o.call(this) || this
                    }
                    t(e, o);
                    var a = e.prototype;
                    return a.onCompleteHandler = function(o) {}
                        ,
                        a.splicePath = function(o) {
                            return !1
                        }
                        ,
                        a.getResPool = function(t, e) {
                            void 0 === e && (e = "");
                            var a = o.prototype.getResPool.call(this, t, e);
                            return null == a && ((a = new c).id = t,
                                a.type = "",
                                a.policy = l.POLICY_DEFAULT,
                                null != a.Cls ? a.display = new a.Cls(0,0) : (a.display = new n,
                                    i.Instance.loadingRes("combatIcon", "ICON_" + t, (function(o, t) {
                                            if (t) {
                                                var e = new s;
                                                e.image = t,
                                                    a.display.texture = e
                                            }
                                        }
                                    ))),
                                this.pushResPool(a, e)),
                                a
                        }
                        ,
                        e
                }(a));
                e._RF.pop()
            }
        }
    }
));
