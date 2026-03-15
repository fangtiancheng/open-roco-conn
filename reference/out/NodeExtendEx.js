System.register("chunks:///_virtual/NodeExtendEx.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts", "./BuildLogHelper.ts", "./NodeExtend.ts"], (function(e) {
        var i, t, n, s, o, r, d;
        return {
            setters: [function(e) {
                i = e.inheritsLoose,
                    t = e.createClass
            }
                , function(e) {
                    n = e.cclegacy,
                        s = e.isValid
                }
                , function(e) {
                    o = e.default
                }
                , function(e) {
                    r = e.default
                }
                , function(e) {
                    d = e.NodeExtend
                }
            ],
            execute: function() {
                n._RF.push({}, "b7800/Ox3FJ/ImW7nXT5rGu", "NodeExtendEx", void 0);
                e("NodeExtendEx", function(e) {
                    function n() {
                        var i;
                        return (i = e.call(this) || this)._view = void 0,
                            i._isLoad = !1,
                            i._isInit = !1,
                            i._params = void 0,
                            i._resBeginTimer = 0,
                            i._resEndTimer = 0,
                            i
                    }
                    i(n, e);
                    var h = n.prototype;
                    return h.onPreRequest = function() {
                        var e = this;
                        if (1 != this._isInit)
                            if (this._view && s(this._view))
                                r.IS_LOCAL;
                            else if (this.exportLink.length > 0 && this.resBundleKey.length > 0)
                                this.beginTimer(),
                                    o.Instance.loadingRes(this.resBundleKey, this.exportLink, (function(i, t) {
                                            if (t) {
                                                var n = o.Instance.getPrefab(e.resBundleKey, e.exportLink);
                                                e.onAssetLoaded(n)
                                            }
                                        }
                                    ));
                            else {
                                this.beginTimer();
                                var i = new d;
                                this.onAssetLoaded(i)
                            }
                        else
                            r.IS_LOCAL
                    }
                        ,
                        h.onAssetLoaded = function(e) {
                            this.endTimer(),
                                this.initView(e)
                        }
                        ,
                        h.initView = function(e) {
                            this._view = e,
                            0 == this._isInit && (this.onInit(),
                                this._isInit = !0,
                                this.afterLoaded())
                        }
                        ,
                        h.initLog = function() {
                            1 == r.IS_LOCAL && console.log(this.constructor.name + "==>>init")
                        }
                        ,
                        h.getChildByName1 = function(e) {
                            return this.view || r.IS_LOCAL,
                                this.view.getChildByName(e)
                        }
                        ,
                        h.beginTimer = function() {
                            this._resBeginTimer = (new Date).getTime(),
                            1 == r.IS_LOCAL && console.info("NodeExtendEx-加载资源进度开始===>" + this.constructor.name + "===>" + this._resBeginTimer + "ms")
                        }
                        ,
                        h.endTimer = function() {
                            this._resEndTimer = (new Date).getTime(),
                            1 == r.IS_LOCAL && console.log("NodeExtendEx-加载资源进度完成===>" + this.constructor.name + "===>" + this._resBeginTimer + "==" + this._resEndTimer + "==" + (this._resEndTimer - this._resBeginTimer) + "ms")
                        }
                        ,
                        t(n, [{
                            key: "view",
                            get: function() {
                                return this._view && s(this._view) ? this._view : null
                            }
                        }]),
                        n
                }(d));
                n._RF.pop()
            }
        }
    }
));
