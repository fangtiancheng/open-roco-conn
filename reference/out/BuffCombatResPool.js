System.register("chunks:///_virtual/BuffCombatResPool.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts", "./CombatConfig.ts", "./CombatLoadResVO.ts", "./CombatResVO.ts"], (function(o) {
        var t, e, n, l, a, s;
        return {
            setters: [function(o) {
                t = o.createClass
            }
                , function(o) {
                    e = o.cclegacy
                }
                , function(o) {
                    n = o.default
                }
                , function(o) {
                    l = o.CombatConfig
                }
                , function(o) {
                    a = o.CombatLoadResVO
                }
                , function(o) {
                    s = o.CombatResVO
                }
            ],
            execute: function() {
                e._RF.push({}, "5ca52u9PW5J9o+WjapQ/GT2", "BuffCombatResPool", void 0);
                var u = o("BuffCombatResPool", function() {
                    function o() {
                        this._pool = void 0
                    }
                    var e = o.prototype;
                    return e.onCompleteHandler = function(o) {
                        void 0 === o && (o = null),
                        1 == l.isInPreloading && (l.preloadCounter++,
                        1 == n.IS_LOCAL && console.info("BuffCombatResPool==CombatConfig.preloadCounter==" + l.preloadCounter));
                        var t = o.obj
                            , e = new s;
                        switch (t.resType) {
                            case a.RES_TYPE_IMAGE:
                            case a.RES_TYPE_PET_ANIMATION:
                            case a.RES_TYPE_SKILL_ANIMATION:
                            case a.RES_TYPE_EFFECT_ANIMATION:
                            case a.RES_TYPE_BUFF_ANIMATION:
                            default:
                                e.display = o.content
                        }
                        e.id = t.id,
                            e.type = t.type,
                            e.url = t.url,
                            e.useCount = 0,
                            e.iscopy = !1,
                            e.policy = t.policy,
                            this._pool.pushResPool(e),
                        null != t.callBack && (e.useCount++,
                            t.callBack(e.display))
                    }
                        ,
                        e.splicePath = function(t) {
                            return null != o.TAG
                        }
                        ,
                        t(o, [{
                            key: "pool",
                            set: function(o) {
                                this._pool = o
                            }
                        }]),
                        o
                }());
                u.TAG = null,
                    u.linkArray = [10001, 10002, 10003, 10004, 10005, 10006, 10007, 10008, 10009, 10010, 10011, 10012, 10013, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 30001, 30002, 30003, 30004, 30005, 30006, 30007, 30008, 30009, 30010, 30011, 40001, 40002, 40003, 40004, 40005, 40006, 40007, 50001, 60001],
                    e._RF.pop()
            }
        }
    }
));
