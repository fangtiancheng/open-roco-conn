System.register("chunks:///_virtual/BaseLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpiritAnimation.ts", "./SpiritAnimationContainerGaf.ts", "./BuildLogHelper.ts", "./CombatLoadResVO.ts", "./EventDispatcher.ts", "./DEFINE.ts"], (function(e) {
        var t, r, n, o, s, i, l, a, u, c, _, h;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    r = e.createClass,
                    n = e.asyncToGenerator,
                    o = e.regeneratorRuntime
            }
                , function(e) {
                    s = e.cclegacy,
                        i = e.assetManager
                }
                , function(e) {
                    l = e.SpiritAnimation
                }
                , function(e) {
                    a = e.SpiritAnimationContainerGaf
                }
                , function(e) {
                    u = e.default
                }
                , function(e) {
                    c = e.CombatLoadResVO
                }
                , function(e) {
                    _ = e.EventDispatcher
                }
                , function(e) {
                    h = e.DEFINE
                }
            ],
            execute: function() {
                s._RF.push({}, "0851ch4uc5NYJHl8RJLxX8v", "BaseLoader", void 0);
                e("BaseLoader", function(e) {
                    function s() {
                        var t;
                        return (t = e.call(this) || this)._onComplete = null,
                            t._taskID = void 0,
                            t.__url = "",
                            t.__urls = new Array,
                            t._lock = !1,
                            t._loaded = [],
                            t._resRecord = new Map,
                            t._resBeginTimer1 = 0,
                            t._resBeginTimer2 = 0,
                            t
                    }
                    t(s, e);
                    var _ = s.prototype;
                    return _.loadRes = function(e) {
                        var t = this
                            , r = this._taskID;
                        if (this.__url.startsWith("http://") || this.__url.startsWith("https://")) {
                            i.loadRemote(this.__url, null, (function(n, o, s) {
                                    if (1 == u.IS_LOCAL && console.log("loadRes==>onComplete1==>" + t.__url),
                                    n && (u.IS_LOCAL,
                                    1 == u.IS_LOCAL))
                                        throw new Error("assetManager.loadRemote failed.");
                                    e(n, o, r)
                                }
                            ))
                        } else
                            1 == u.IS_LOCAL && console.log("loadRes==>onComplete==>" + this.__url),
                                e(null, null, r)
                    }
                        ,
                        _.loadRes1 = function(e, t) {
                            var r = this;
                            this._onComplete = t,
                            1 == u.IS_LOCAL && console.log("新资源开始==>" + this.__url),
                                this._resBeginTimer1 = (new Date).getTime();
                            var n = this._taskID
                                , o = function(e, t, o) {
                                if (e) {
                                    if (u.IS_LOCAL,
                                    1 == u.IS_LOCAL)
                                        throw new Error("assetManager.loadRemote failed.")
                                } else {
                                    var s = l.RES[o];
                                    null != s && null != s && 1 == u.IS_LOCAL && console.log("重复资源==>" + o),
                                    null != o && null != o || (o = (o = t._uuid).replace(h.CDN, "")),
                                    null == o && console.error("资源加载 error!"),
                                    null == o && console.error("资源加载 error!"),
                                        r._resBeginTimer2 = (new Date).getTime(),
                                    1 == u.IS_LOCAL && console.info("一份战斗资源加载资源进度完成===>" + r.constructor.name + "===>" + r._resBeginTimer1 + "==" + r._resBeginTimer2 + "==" + (r._resBeginTimer2 - r._resBeginTimer1) + "ms"),
                                    1 == u.IS_LOCAL && console.info("资源加载完成==>" + o + "上下文==>" + n),
                                        l.RES[o] = t,
                                        r._loaded.push(t),
                                    0 == r._lock && r.check(n)
                                }
                            };
                            this._lock = !0;
                            for (var s = 0; s < this.__urls.length; s++) {
                                var a = this.__urls[s]
                                    , c = this._resRecord[a];
                                null != c && null != c ? 1 == u.IS_LOCAL && console.log("重复资源record==>" + a) : this._resRecord[a] = a,
                                null == a && console.error("parsePlist error!"),
                                null == a && console.error("parsePlist error!");
                                var _ = l.RES[a];
                                if (null != _ && null != _)
                                    1 == u.IS_LOCAL && console.log("重复资源==>" + a),
                                        o(null, _, a);
                                else {
                                    var f = "" + h.CDN + a;
                                    1 == u.IS_LOCAL && console.log("开始加载==>" + f),
                                        i.loadRemote(f, null, o)
                                }
                            }
                            this._lock = !1,
                                this.check(n)
                        }
                        ,
                        _.check = function(e) {
                            this._loaded.length >= this.__urls.length && (this._loaded = [],
                            this._onComplete && this._onComplete(null, null, e))
                        }
                        ,
                        _.loadResGaf = function() {
                            var e = n(o().mark((function e(t, r, n) {
                                    var s, i;
                                    return o().wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        this._onComplete = n,
                                                        1 == u.IS_LOCAL && console.log("新资源开始==>loadResGaf==resType" + t + "==resID==" + r),
                                                            this._resBeginTimer1 = (new Date).getTime(),
                                                            s = this._taskID,
                                                            i = null,
                                                            e.t0 = t,
                                                            e.next = e.t0 === c.RES_TYPE_PET_ANIMATION ? 8 : e.t0 === c.RES_TYPE_SKILL_ANIMATION ? 13 : e.t0 === c.RES_TYPE_EFFECT_ANIMATION ? 18 : e.t0 === c.RES_TYPE_BUFF_ANIMATION ? 23 : 28;
                                                        break;
                                                    case 8:
                                                        return (i = new a).resType = t,
                                                            e.next = 12,
                                                            i.initWithPetWithGafSnyc(r);
                                                    case 12:
                                                        return e.abrupt("break", 30);
                                                    case 13:
                                                        return (i = new a).resType = t,
                                                            e.next = 17,
                                                            i.initWithSkillWithGafSync(r);
                                                    case 17:
                                                        return e.abrupt("break", 30);
                                                    case 18:
                                                        return (i = new a).resType = t,
                                                            e.next = 22,
                                                            i.initWithEffectWithGafSync(r);
                                                    case 22:
                                                        return e.abrupt("break", 30);
                                                    case 23:
                                                        return (i = new a).resType = t,
                                                            e.next = 27,
                                                            i.initWithBuffWithGafSync(r);
                                                    case 27:
                                                        return e.abrupt("break", 30);
                                                    case 28:
                                                        return u.IS_LOCAL,
                                                            e.abrupt("break", 30);
                                                    case 30:
                                                        this._lock = !1,
                                                            n(null, i, s);
                                                    case 32:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }
                                    ), e, this)
                                }
                            )));
                            return function(t, r, n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        r(s, [{
                            key: "taskID",
                            set: function(e) {
                                this._taskID = e
                            }
                        }]),
                        s
                }(_));
                s._RF.pop()
            }
        }
    }
));
