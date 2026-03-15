System.register("chunks:///_virtual/CommonCombatResPool.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatConfig.ts", "./CombatLoadResVO.ts", "./CombatResVO.ts", "./CombatResPool.ts", "./BuildLogHelper.ts"], (function(o) {
        var e, l, t, n, s, i, a;
        return {
            setters: [function(o) {
                e = o.inheritsLoose
            }
                , function(o) {
                    l = o.cclegacy
                }
                , function(o) {
                    t = o.CombatConfig
                }
                , function(o) {
                    n = o.CombatLoadResVO
                }
                , function(o) {
                    s = o.CombatResVO
                }
                , function(o) {
                    i = o.CombatResPool
                }
                , function(o) {
                    a = o.default
                }
            ],
            execute: function() {
                l._RF.push({}, "91978SLLBpHzqgzOEWJEG2w", "CommonCombatResPool", void 0);
                o("CommonCombatResPool", function(o) {
                    function l() {
                        return o.apply(this, arguments) || this
                    }
                    e(l, o);
                    var i = l.prototype;
                    return i.onCompleteHandler = function(o) {
                        void 0 === o && (o = null),
                        1 == t.isInPreloading && (t.preloadCounter++,
                        1 == a.IS_LOCAL && console.info("BuffCombatResPool==CombatConfig.preloadCounter==" + t.preloadCounter));
                        var e = o.obj
                            , l = new s;
                        switch (1 == a.IS_LOCAL && console.info("CommonCombatResPool==onCompleteHandler==id==" + e.id + "==resID==" + e.resID + "==resType==" + e.resType),
                            e.resType) {
                            case n.RES_TYPE_IMAGE:
                            case n.RES_TYPE_PET_ANIMATION:
                            case n.RES_TYPE_SKILL_ANIMATION:
                            case n.RES_TYPE_EFFECT_ANIMATION:
                            case n.RES_TYPE_BUFF_ANIMATION:
                            default:
                                l.display = o.content
                        }
                        l.id = e.id,
                            l.type = e.type,
                            l.url = e.url,
                            l.useCount = 0,
                            l.iscopy = !1,
                            l.policy = e.policy,
                            this.pushResPool(l),
                        null != e.callBack && (l.useCount++,
                            e.callBack(l.display))
                    }
                        ,
                        i.splicePath = function(o) {
                            var e, l, t;
                            if (0 == (t = this.findPoolByUrl(o.url)).length)
                                return !1;
                            var n = 0
                                , i = t.length;
                            for (n = 0; n < i; n++) {
                                if ((e = t[n]).id == o.id) {
                                    if (null != o.callBack) {
                                        var c = this.getResPool(e.id, e.type);
                                        c && c.display || a.IS_LOCAL,
                                            o.callBack(c.display)
                                    }
                                    return !0
                                }
                                l = e
                            }
                            if (null != l) {
                                if (null == l.Cls)
                                    return !1;
                                var r = new s;
                                r.copy(l),
                                    r.id = o.id;
                                try {
                                    r.display = new r.Cls
                                } catch (o) {
                                    r.display = new r.Cls(0,0)
                                }
                                r.policy = o.policy,
                                null != o.callBack && (this.getResPool(r.id, r.type),
                                    o.callBack(l.display)),
                                    this.pushResPool(r)
                            }
                            return !0
                        }
                        ,
                        l
                }(i));
                l._RF.pop()
            }
        }
    }
));
