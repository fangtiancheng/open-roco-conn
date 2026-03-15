System.register("chunks:///_virtual/CombatResPool.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpiritAnimationContainer.ts", "./SpiritAnimationContainerGaf.ts", "./BuildLogHelper.ts", "./CombatResType.ts", "./CombatResTimerPool.ts"], (function(o) {
        var e, t, n, i, s, l, r, u, a;
        return {
            setters: [function(o) {
                e = o.createClass
            }
                , function(o) {
                    t = o.cclegacy,
                        o.Node,
                        n = o.ImageAsset,
                        i = o.SpriteFrame
                }
                , function(o) {
                    s = o.SpiritAnimationContainer
                }
                , function(o) {
                    l = o.SpiritAnimationContainerGaf
                }
                , function(o) {
                    r = o.default
                }
                , function(o) {
                    u = o.CombatResType
                }
                , function(o) {
                    a = o.CombatResTimerPool
                }
            ],
            execute: function() {
                t._RF.push({}, "89edcXYo1pAhYLaDvbEKDkV", "CombatResPool", void 0),
                    o("CombatResPool", function() {
                        function o() {
                            this._pool = new Map,
                                this._count = 0,
                                this._countList = []
                        }
                        var t = o.prototype;
                        return t.findPoolById = function(o, e) {
                            var t, n = [], i = "";
                            for (i in this._pool)
                                if (t = this._pool[i],
                                    (n = i.split("_"))[0],
                                    t.iscopy) {
                                    if (t.useCount <= 0)
                                        return t
                                } else if (o.toString() == n[1] && e == n[0])
                                    return t;
                            return null
                        }
                            ,
                            t.findPoolByUrl = function(o) {
                                var e, t = [], n = "";
                                for (n in this._pool)
                                    (e = this._pool[n]).url == o && t.push(e);
                                return t
                            }
                            ,
                            t.pushResPool = function(o, e) {
                                if (void 0 === e && (e = ""),
                                    o.display,
                                "" == e) {
                                    try {
                                        o.resName = this.toKey(o.type, o.id)
                                    } catch (e) {
                                        throw CONFIG.DEBUG && console.log("[CombatResPool]  type: " + o.type + "id: " + o.id),
                                            new Event("无法命名!")
                                    }
                                    this._pool[o.resName] = o,
                                        o.display.resName = o.resName
                                } else
                                    this._pool[e] = o,
                                        o.display.resName = e;
                                CONFIG.DEBUG && console.log("[CombatResPool] 存入池中的资源:", o.type, "||", o.id, "||", e)
                            }
                            ,
                            t.getResPool = function(o, e) {
                                void 0 === e && (e = "");
                                var t = this.findPoolById(o, e);
                                return null == t ? (1 == r.IS_LOCAL && console.error("getResPool2==" + o + "==" + e),
                                    null) : t.useCount > 0 ? t.display instanceof s || t.display instanceof l ? (1 == r.IS_LOCAL && console.error("资源未归还，请排查=" + t.id + "=" + t.resName),
                                    t.useCount = 1,
                                    t) : t.display instanceof n || t.display instanceof i ? (t.useCount++,
                                    t) : null : (t.useCount++,
                                    t)
                            }
                            ,
                            t.removeResPool = function(o, e) {
                                void 0 === e && (e = -1);
                                var t = this._pool[o];
                                null != t && (t.display,
                                    t.useCount--,
                                1 == r.IS_LOCAL && console.info("removeResPool==" + o + "==" + t.useCount),
                                t.useCount <= 0 && (t.useCount = 0),
                                -1 != e && (t.policy = e))
                            }
                            ,
                            t.removeAllResPool = function() {
                                var o, e = "";
                                for (e in this._pool)
                                    (o = this._pool[e]).display,
                                    o.display instanceof l && (1 == r.IS_LOCAL && console.info("removeAllResPool==" + o.display.name + "==" + e),
                                        o.display.release(),
                                        o.display.destroy()),
                                        o.display = null,
                                        o = null,
                                        delete this._pool[e]
                            }
                            ,
                            t.removeResByPolicy = function(o, e) {
                                void 0 === e && (e = !1),
                                null != o && null != o.display && (e ? o.policy == u.POLICY_MODULE_TIMER ? a.getInstance().timePool[o.resName] = o : o.policy == u.POLICY_MODULE_END && (CONFIG.DEBUG && console.log("[CombatResPool:] 1战斗结束后根据策略释放的资源。", o.id, o.type),
                                    delete this._pool[o.resName],
                                    o.display = null,
                                    o = null) : o.policy == u.POLICY_DEL && o.useCount <= 0 && (CONFIG.DEBUG && console.log("[CombatResPool:] 2战斗结束后根据策略释放的资源。", o.id, o.type),
                                    delete this._pool[o.resName],
                                    o.display = null,
                                    o = null))
                            }
                            ,
                            t.toKey = function(o, e) {
                                var t = 0;
                                return t = this._countList.length > 0 ? this._countList.shift() : this._count++,
                                o + "_" + String(e) + "_" + String(t)
                            }
                            ,
                            e(o, [{
                                key: "pool",
                                get: function() {
                                    return this._pool
                                }
                            }, {
                                key: "count",
                                get: function() {
                                    return this._count
                                }
                            }]),
                            o
                    }()).resNmae = "Combat_",
                    t._RF.pop()
            }
        }
    }
));
