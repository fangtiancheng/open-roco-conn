System.register("chunks:///_virtual/BasePanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts", "./BuildLogHelper.ts", "./BaseView.ts", "./NodeExtend.ts", "./PreLoader.ts", "./UserData.ts"], (function(i) {
        var t, e, s, n, o, r, h, a, _, u, c;
        return {
            setters: [function(i) {
                t = i.inheritsLoose,
                    e = i.createClass
            }
                , function(i) {
                    s = i.cclegacy,
                        n = i.isValid,
                        o = i.UITransform
                }
                , function(i) {
                    r = i.default
                }
                , function(i) {
                    h = i.default
                }
                , function(i) {
                    a = i.BaseView
                }
                , function(i) {
                    _ = i.NodeExtend
                }
                , function(i) {
                    u = i.PreLoader
                }
                , function(i) {
                    c = i.UserData
                }
            ],
            execute: function() {
                s._RF.push({}, "e0205OD5TxCSa/MC5vonPFx", "BasePanel", void 0);
                i("BasePanel", function(i) {
                    t(a, i);
                    var s = a.prototype;
                    function a(t) {
                        var e;
                        return (e = i.call(this) || this).__name = "BasePanel",
                            e._view = void 0,
                            e._root = void 0,
                            e._isLoad = !1,
                            e._isInit = !1,
                            e._isShow = !1,
                            e._params = void 0,
                            e._preLoader = void 0,
                            e._resBeginTimer1 = 0,
                            e._resBeginTimer2 = 0,
                            e._view = t,
                            e._preLoader = new u,
                        t && n(t) && h.IS_LOCAL,
                            e.afterConstructor(),
                            e
                    }
                    return s.afterConstructor = function() {}
                        ,
                        s.init = function() {
                            this._isInit || (this._isInit = !0,
                                this.onInit(),
                            this._isShow && (this.onUpdate(this._params),
                                this.onShow()))
                        }
                        ,
                        s.update = function(i) {}
                        ,
                        s.show = function(i) {
                            if (!this._isLoad || this._isInit)
                                if (this._isShow)
                                    this.update(i);
                                else if (this._params = i,
                                    this._isShow = !0,
                                    this._isInit)
                                    this.onUpdate(this._params),
                                        this.onShow();
                                else if (this.view && n(this._view))
                                    this.init();
                                else {
                                    if (this._isLoad)
                                        return;
                                    this._isLoad = !0,
                                        this.onPreLoad()
                                }
                        }
                        ,
                        s.onPreLoad = function() {
                            this.preLoadArr ? (this._resBeginTimer1 = (new Date).getTime(),
                            1 == h.IS_LOCAL && console.info("预加载资源进度开始===>" + this.constructor.name + "===>" + this._resBeginTimer1 + "ms"),
                                this._preLoader.preLoadResPackage(this.preLoadArr, null, function() {
                                    this._resBeginTimer2 = (new Date).getTime(),
                                    1 == h.IS_LOCAL && console.info("预加载资源进度完成===>" + this.constructor.name + "===>" + this._resBeginTimer1 + "==" + this._resBeginTimer2 + "==" + (this._resBeginTimer2 - this._resBeginTimer1) + "ms"),
                                        this.onPreRequest()
                                }
                                    .bind(this))) : this.onPreRequest()
                        }
                        ,
                        s.onPreRequest = function() {
                            var i = this;
                            if (this.exportLink.length > 0 && this.resBundleKey.length > 0)
                                this.beginTimer(),
                                    r.Instance.loadingRes(this.resBundleKey, this.exportLink, (function(t, e) {
                                            if (e) {
                                                var s = r.Instance.getPrefab(i.resBundleKey, i.exportLink);
                                                i.onAssetLoaded(s)
                                            }
                                        }
                                    ));
                            else {
                                this.beginTimer();
                                var t = new _;
                                this.onAssetLoaded(t)
                            }
                        }
                        ,
                        s.onAssetLoaded = function(i) {
                            this.endTimer(),
                                this.initView(i)
                        }
                        ,
                        s.initView = function(i) {
                            this._view = i,
                            this._root || (this._target = this._view),
                            !this._isInit && this.init()
                        }
                        ,
                        s.createRoot = function() {
                            if (this._root && n(this._root))
                                return this._root;
                            this._root = new _;
                            var i = this._root.addComponent(o);
                            return i.width = 0,
                                i.height = 0,
                                this._target = this._root,
                                this._root
                        }
                        ,
                        s.addParent = function(i) {
                            if (!i || !n(i))
                                throw new Error("[BasePanel] class addParent’s param is illegal");
                            if (this._view && n(this._view) && i == this._view)
                                throw new Error("[BasePanel] class addParent’s param is illegal");
                            i.addChild(this.createRoot())
                        }
                        ,
                        s.close = function() {
                            this._isShow && (this.onUpdate(null),
                            this._view && n(this._view) && this._view.removeFromParent(),
                                this.onClose(),
                                this._isShow = !1,
                                this._params = void 0,
                            1 == h.IS_LOCAL && console.log("BasePanel==close==" + this.constructor.name))
                        }
                        ,
                        s.destroy = function() {
                            this._isInit && (this._isInit = !1,
                            this._isShow && this.close(),
                                this.onDestroy(),
                            this._view && n(this._view) && this._view.destroy(),
                                this._view = null)
                        }
                        ,
                        s.initLog = function() {
                            1 == h.IS_LOCAL && console.log(this.constructor.name + "==>>init")
                        }
                        ,
                        s.addChild = function(i) {
                            this._view && n(this._view) && i && n(i) && this._view.addChild(i)
                        }
                        ,
                        s.addChildAt = function(i, t) {
                            this._view && n(this._view) && i && n(i) && this._view.insertChild(i, t)
                        }
                        ,
                        s.beginTimer = function() {
                            this._resBeginTimer = (new Date).getTime(),
                            (1 == h.IS_LOCAL || c.isWhite(c.uin)) && console.info("BasePanel-加载资源进度开始===>" + this.constructorName + "===>" + this._resBeginTimer + "ms")
                        }
                        ,
                        s.endTimer = function() {
                            this._resEndTimer = (new Date).getTime(),
                            (1 == h.IS_LOCAL || c.isWhite(c.uin)) && console.info("BasePanel-加载资源进度完成===>" + this.constructorName + "===>" + this._resBeginTimer + "==" + this._resEndTimer + "==" + (this._resEndTimer - this._resBeginTimer) + "ms")
                        }
                        ,
                        e(a, [{
                            key: "preLoadArr",
                            get: function() {
                                return null
                            }
                        }, {
                            key: "view",
                            get: function() {
                                return this._view && n(this._view) ? this._view : null
                            }
                        }, {
                            key: "root",
                            get: function() {
                                if (this._root && n(this._root))
                                    return this._root;
                                throw new Error("[" + this.constructor.name + "] get root params is null.")
                            }
                        }, {
                            key: "constructorName",
                            get: function() {
                                return 1 == h.IS_LOCAL ? this.constructor.name : this.__name
                            }
                        }]),
                        a
                }(a));
                s._RF.pop()
            }
        }
    }
));
