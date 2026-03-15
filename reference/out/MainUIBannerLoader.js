System.register("chunks:///_virtual/MainUIBannerLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DEFINE.ts", "./BuildLogHelper.ts", "./RemoteLoaderBase.ts", "./GameBannerCfgLoader.ts", "./NodeExtend.ts"], (function(n) {
        var t, e, o, r, i, s, a, h, d, _, l, c, u, m;
        return {
            setters: [function(n) {
                t = n.inheritsLoose
            }
                , function(n) {
                    e = n.cclegacy,
                        o = n._decorator,
                        r = n.sys,
                        i = n.NodeEventType,
                        s = n.UITransform,
                        a = n.tween,
                        h = n.v3,
                        d = n.Component
                }
                , function(n) {
                    _ = n.DEFINE
                }
                , function(n) {
                    l = n.default
                }
                , function(n) {
                    c = n.RemoteLoaderBase
                }
                , function(n) {
                    u = n.GameBannerCfgLoader
                }
                , function(n) {
                    m = n.NodeExtend
                }
            ],
            execute: function() {
                var p;
                e._RF.push({}, "f0f5aklShVEA4zxAM/gUo8v", "MainUIBannerLoader", void 0);
                var f = o.ccclass
                    , I = (o.property,
                    o.menu);
                n("MainUIBannerLoader", f(p = I("AUI/MainUIBannerLoader")(p = function(n) {
                    function e() {
                        for (var t, e = arguments.length, o = new Array(e), r = 0; r < e; r++)
                            o[r] = arguments[r];
                        return (t = n.call.apply(n, [this].concat(o)) || this)._bannerWidth = 390,
                            t._bannerSprArr = [],
                            t._nowIndex = 0,
                            t._timeoutId = 0,
                            t._downTime = 0,
                            t._startX = 0,
                            t._moveEnd = !0,
                            t
                    }
                    t(e, n);
                    var o = e.prototype;
                    return o.onLoad = function() {}
                        ,
                        o.start = function() {
                            r.platform == r.Platform.MOBILE_BROWSER ? (this.node.on(i.TOUCH_START, this.onBannerDown, this),
                                this.node.on(i.TOUCH_END, this.onBannerUp, this)) : (this.node.on(i.MOUSE_DOWN, this.onBannerDown, this),
                                this.node.on(i.MOUSE_UP, this.onBannerUp, this)),
                                this.loadBanner()
                        }
                        ,
                        o.loadBanner = function() {
                            this.node.removeAllChildren(),
                                this._bannerWidth = this.node.getComponent(s).width;
                            for (var n = u.Instance.bannerList.length, t = 0; t < n; t++) {
                                var e = u.Instance.bannerList[t]
                                    , o = this._bannerSprArr[t];
                                o || ((o = new m).name = "banner_" + t,
                                    o.addComponent(c),
                                    o.getComponent(s).setAnchorPoint(0, 0),
                                    o.width = 650,
                                    o.height = 210,
                                    this._bannerSprArr.push(o));
                                var r = "" + _.CDN + e.src;
                                o.getComponent(c).load(r),
                                    o.setPosition(this._bannerWidth * t, 0),
                                    this.node.addChild(o)
                            }
                            this.bannerRun(1, !0)
                        }
                        ,
                        o.bannerRun = function(n, t) {
                            var e = this;
                            void 0 === t && (t = !1),
                            1 == l.IS_LOCAL && console.error("bannerRun");
                            var o = u.Instance.bannerList.length;
                            this._moveEnd = !1;
                            var r, i = .5, s = 0;
                            if (n) {
                                (s = this._nowIndex + 1) >= o && (s -= o),
                                    (r = this._bannerSprArr[s]).setPosition(this._bannerWidth, 3),
                                    r.setScale(1, 1.05),
                                    this.node.addChild(r),
                                    a(r).to(i, {
                                        position: h(0, 0),
                                        scale: h(1, 1)
                                    }).call((function() {
                                            e._moveEnd = !0
                                        }
                                    )).start();
                                var d = this._bannerSprArr[this._nowIndex];
                                a(d).to(i, {
                                    position: h(-this._bannerWidth, -3),
                                    scale: h(1, .95)
                                }).start()
                            } else {
                                (s = this._nowIndex - 1) < 0 && (s += o),
                                    (r = this._bannerSprArr[s]).setPosition(-this._bannerWidth, -3),
                                    r.setScale(1, .95),
                                    a(r).to(i, {
                                        position: h(0, 0),
                                        scale: h(1, 1)
                                    }).call((function() {
                                            e._moveEnd = !0
                                        }
                                    )).start();
                                var _ = this._bannerSprArr[this._nowIndex];
                                a(_).to(i, {
                                    position: h(this._bannerWidth, 3),
                                    scale: h(1, 1.05)
                                }).start()
                            }
                            this._nowIndex = s,
                            this._timeoutId > 0 && clearTimeout(this._timeoutId),
                            t && !this._downTime && (this._timeoutId = setTimeout((function() {
                                    e.bannerRun(1, !0)
                                }
                            ), 5e3))
                        }
                        ,
                        o.onBannerDown = function(n) {
                            if (this._moveEnd) {
                                this._downTime = (new Date).getTime();
                                var t = this._nowIndex;
                                this._startX = n.getLocation().x,
                                1 == l.IS_LOCAL && console.error("按下活动Banner:" + t)
                            }
                        }
                        ,
                        o.onBannerUp = function(n) {
                            if (this._moveEnd) {
                                var t = (new Date).getTime()
                                    , e = n.getLocation().x - this._startX
                                    , o = this._nowIndex;
                                if (1 == l.IS_LOCAL && console.error("点击反应时间:" + this._downTime + "ms"),
                                1 == l.IS_LOCAL && console.error("水平方向滑动距离:" + Math.abs(e)),
                                Math.abs(e) > 50) {
                                    var r = 0;
                                    e < 0 && (r = 1),
                                        this._downTime = 0,
                                        this.bannerRun(r, !0),
                                    1 == l.IS_LOCAL && console.error("滑动活动Banner:" + o)
                                } else if (this._downTime > 0 && t - this._downTime < 150) {
                                    this._downTime = 0;
                                    var i = u.Instance.bannerList[this._nowIndex];
                                    i && i.url && null != i.url && null != i.url && (i.url.startsWith("http://") || i.url.startsWith("https://")) && window.open(i.url, "_blank"),
                                    1 == l.IS_LOCAL && console.error("点击活动Banner:" + o)
                                }
                            }
                        }
                        ,
                        e
                }(d)) || p) || p);
                e._RF.pop()
            }
        }
    }
));
