System.register("chunks:///_virtual/AngelCombatResAdapter.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts", "./Constants.ts", "./LoadTaskEvent.ts", "./ResLoadTask.ts", "./global.ts", "./BuffCombatResPool.ts", "./CommonCombatResPool.ts", "./IconCombatResPool.ts", "./CombatResType.ts", "./CombatLoadResVO.ts", "./EventDispatcher.ts", "./CFunction.ts"], (function(e) {
        var t, o, s, i, l, n, r, a, c, u, p, h, m, _, P;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    o = e.createClass
            }
                , function(e) {
                    s = e.cclegacy
                }
                , function(e) {
                    i = e.default
                }
                , function(e) {
                    l = e.Constants
                }
                , function(e) {
                    n = e.LoadTaskEvent
                }
                , function(e) {
                    r = e.ResLoadTask
                }
                , function(e) {
                    a = e.__global
                }
                , function(e) {
                    c = e.BuffCombatResPool
                }
                , function(e) {
                    u = e.CommonCombatResPool
                }
                , function(e) {
                    p = e.IconCombatResPool
                }
                , function(e) {
                    h = e.CombatResType
                }
                , function(e) {
                    m = e.CombatLoadResVO
                }
                , function(e) {
                    _ = e.EventDispatcher
                }
                , function(e) {
                    P = e.CFunction
                }
            ],
            execute: function() {
                s._RF.push({}, "1e5c7RleR9BArDg8g8lF+RZ", "AngelCombatResAdapter", void 0);
                e("AngelCombatResAdapter", function(e) {
                    function s() {
                        var t;
                        return (t = e.call(this) || this)._resLoadManager = void 0,
                            t._resTask = void 0,
                            t._currentPool = void 0,
                            t._isAllComplete = !0,
                            t._paths = [],
                            t.itemsLoaded = 0,
                            t.itemsTotal = 0,
                            t._commonPool = void 0,
                            t._iconPool = void 0,
                            t._buffPool = void 0,
                            t
                    }
                    t(s, e);
                    var _ = s.prototype;
                    return _.initialize = function() {
                        this._resTask = new r,
                            this._resTask.resType = this.getAdapterResType(),
                        null != this.onSWFProgress && (this._resTask.progressHandler = new P(this.onSWFProgress,this)),
                        null != this.onSWFError && (this._resTask.errorHandler = new P(this.onSWFError,this)),
                        null != this.onSWFComplete && (this._resTask.completeHandler = new P(this.onSWFComplete,this)),
                        null != this.onSWFAllComplete && (this._resTask.allCompleteHandler = new P(this.onSWFAllComplete,this)),
                            this._resLoadManager.createVipChannel(this.getAdapterResType()),
                            this._commonPool = new u,
                            this._iconPool = new p,
                            this._iconPool.onCompleteHandler(null),
                            this._buffPool = new c,
                            this._buffPool.pool = this._commonPool
                    }
                        ,
                        _.finalize = function() {}
                        ,
                        _.setResLoadTaskManager = function(e) {
                            this._resLoadManager = e
                        }
                        ,
                        _.requestRes = function() {
                            return this._isAllComplete ? (this._isAllComplete = !1,
                                this._paths = arguments.length <= 0 ? void 0 : arguments[0],
                                this.itemsLoaded = 0,
                                this.itemsTotal = this._paths.length,
                                this.load(this._paths[0])) : (this._paths = this._paths.concat(arguments.length <= 0 ? void 0 : arguments[0]),
                                this.itemsTotal = this._paths.length),
                                null
                        }
                        ,
                        _.cancelRequest = function() {
                            return !0
                        }
                        ,
                        _.disposeRes = function() {}
                        ,
                        _.getAdapterResType = function() {
                            return "combatResAdapter"
                        }
                        ,
                        _.removeAllCacheRes = function() {}
                        ,
                        _.stopAllResRequest = function() {}
                        ,
                        _.getSpiritIdleMC = function(e, t) {
                            var o = this._commonPool.getResPool(e, h.TYPE_SPIRIT_PREVIEW);
                            if (null != o)
                                return null != t && t(o.display),
                                    o.display;
                            var s = new m;
                            s.id = e,
                                s.linkName = "Spirit",
                                s.policy = h.POLICY_DEFAULT,
                                s.resPool = this._commonPool,
                                s.type = h.TYPE_SPIRIT_PREVIEW;
                            var i = a.SysAPI.getGDataAPI().getDataProxy(l.SPIRIT_DATA);
                            if (e > 1e5 && e < 2e5) {
                                var n = Math.floor(Number(e / 10) - 1e4);
                                s.url = i.select(n).previewSrc.split("previews/")[0] + "previews/" + (1e5 + 10 * Number(i.select(n).previewSrc.split("previews/")[1].split("-idle.swf")[0]) + e % 10) + "-idle.swf" + i.select(n).previewSrc.split("previews/")[1].split("-idle.swf")[1]
                            } else
                                s.url = i.select(e).previewSrc;
                            return s.callBack = t,
                                this.requestRes([s]),
                                null
                        }
                        ,
                        _.returnSpiritIdleMC = function(e) {
                            this._commonPool.removeResPool(e)
                        }
                        ,
                        _.getSpiritImage = function(e, t) {
                            var o = this._commonPool.getResPool(e, h.TYPE_SPIRIT_ICON);
                            if (null != o)
                                return null != t && t(o.display),
                                    o.display;
                            var s = new m;
                            s.id = e,
                                s.policy = h.POLICY_DEFAULT,
                                s.resPool = this._commonPool,
                                s.type = h.TYPE_SPIRIT_ICON;
                            var i = a.SysAPI.getGDataAPI().getDataProxy(l.SPIRIT_DATA);
                            if (e > 1e5 && e < 2e5) {
                                var n = Math.floor(Number(e / 10) - 1e4);
                                s.url = i.select(n).iconSrc.split("icons/")[0] + "icons/" + (1e5 + 10 * Number(i.select(n).iconSrc.split("icons/")[1].split("-.png")[0]) + e % 10) + "-.png" + i.select(n).iconSrc.split("icons/")[1].split("-.png")[1]
                            } else
                                s.url = i.select(e).iconSrc;
                            return s.callBack = t,
                                this.requestRes([s]),
                                null
                        }
                        ,
                        _.returnSpiritImage = function(e) {
                            this._commonPool.removeResPool(e)
                        }
                        ,
                        _.getSuperSkillBgImage = function(e, t) {
                            var o = this._commonPool.getResPool(e, h.TYPE_SUPER_SKILL_BG);
                            if (null != o)
                                return null != t && t(o.display),
                                    o.display;
                            var s = new m;
                            s.id = e,
                                s.policy = h.POLICY_DEFAULT,
                                s.resPool = this._commonPool,
                                s.type = h.TYPE_SUPER_SKILL_BG;
                            var i = a.SysAPI.getGDataAPI().getDataProxy(l.SSKILL_DATA);
                            return s.url = i.select(e).superSkillBgSrc,
                                s.callBack = t,
                                this.requestRes([s]),
                                null
                        }
                        ,
                        _.returnSuperSkillBgImage = function(e) {
                            this._commonPool.removeResPool(e)
                        }
                        ,
                        _.getSpiritSkillImage = function(e) {
                            return this._iconPool.getResPool(e).display
                        }
                        ,
                        _.getSpiritGroupImage = function(e) {
                            return this._iconPool.getResPool(e + 500).display
                        }
                        ,
                        _.onSWFProgress = function(e) {
                            e.resData.itemsLoaded = this.itemsLoaded,
                                e.resData.itemsTotal = this.itemsTotal,
                                this.dispatchEvent(e),
                            1 == i.IS_LOCAL && console.log("aa", this.itemsLoaded, this.itemsTotal)
                        }
                        ,
                        _.onSWFError = function(e) {
                            CONFIG.DEBUG && console.log("[CombatResAdapter]", "资源加载错误！", e.message),
                                this.isAllComplete()
                        }
                        ,
                        _.onSWFComplete = function(e) {
                            this._currentPool.onCompleteHandler(e.resData),
                                this.isAllComplete()
                        }
                        ,
                        _.onSWFAllComplete = function(e) {}
                        ,
                        _.load = function(e) {
                            null == e && i.IS_LOCAL,
                            null == e && i.IS_LOCAL,
                            null == e.resPool && i.IS_LOCAL,
                            null == e.resPool && i.IS_LOCAL,
                            e || i.IS_LOCAL,
                            e.resPool || i.IS_LOCAL,
                                this._currentPool = e.resPool;
                            var t = !1;
                            e.type != h.TYPE_SPIRIT_LEFT && e.type != h.TYPE_SPIRIT_RIGHT || (t = !0),
                                this._currentPool.splicePath(e) && 0 == t ? this.isAllComplete() : (this._resTask.paths = [e],
                                    this._resLoadManager.addLoadTask(this._resTask))
                        }
                        ,
                        _.isAllComplete = function() {
                            this.itemsLoaded++,
                                this._paths.shift(),
                                this._paths.length <= 0 ? (this._isAllComplete = !0,
                                    this.dispatchEvent(new n(n.TASK_COMPLETE)),
                                CONFIG.DEBUG && console.log("[CombatResAdapter: ]", "队列资源全部加载完毕！")) : this.load(this._paths[0])
                        }
                        ,
                        o(s, [{
                            key: "commonCombatResPool",
                            get: function() {
                                return this._commonPool
                            }
                        }, {
                            key: "iconCombatResPool",
                            get: function() {
                                return this._iconPool
                            }
                        }, {
                            key: "buffCombatResPool",
                            get: function() {
                                return this._buffPool
                            }
                        }]),
                        s
                }(_));
                s._RF.pop()
            }
        }
    }
));
