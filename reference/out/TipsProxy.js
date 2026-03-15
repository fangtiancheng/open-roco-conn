System.register("chunks:///_virtual/TipsProxy.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts", "./ComponentParams.ts"], (function(t) {
        var e, i, n, o, s, a, h, r, p, d;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        o = t.NodeEventType,
                        s = t.UITransform,
                        a = t.v3,
                        h = t.instantiate,
                        r = t.Component
                }
                , function(t) {
                    p = t.default
                }
                , function(t) {
                    d = t.ComponentParams
                }
            ],
            execute: function() {
                n._RF.push({}, "50e57gOg7NL5IRuM0/qkWC7", "TipsProxy", void 0);
                t("TipsProxy", function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this).bundleName = void 0,
                            e.prefabPath = void 0,
                            e.eventType = o.TOUCH_START,
                            e.automaticClose = !0,
                            e.parent = void 0,
                            e.tips = void 0,
                            e._params = void 0,
                            e
                    }
                    e(n, t);
                    var a = n.prototype;
                    return a.start = function() {
                        this.node.on(this.eventType, this.onCreateTips, this),
                        this.automaticClose && (this.node.on(o.TOUCH_END, this.onCloseTips, this),
                            this.node.on(o.TOUCH_CANCEL, this.onCloseTips, this))
                    }
                        ,
                        a.onDisable = function() {
                            this.onCloseTips()
                        }
                        ,
                        a.onDestroy = function() {
                            this.onCloseTips()
                        }
                        ,
                        a.onCreateTips = function() {
                            var t = this
                                , e = function(e) {
                                var i = h(e)
                                    , n = i.addComponent(d)
                                    , o = t.node.parent.getComponent(s).convertToWorldSpaceAR(t.node.position)
                                    , a = t.node.getComponent(s).contentSize;
                                o = t.parent.getComponent(s).convertToNodeSpaceAR(o),
                                    n.setParams(t._params, o, a),
                                    t.parent.addChild(i),
                                    t.tips = i
                            }
                                , i = p.Instance.getAsset(this.bundleName, this.prefabPath);
                            i ? e(i) : p.Instance.loadingRes(this.bundleName, this.prefabPath, (function(t, i) {
                                    if (t)
                                        throw new Error(t.message);
                                    e(i)
                                }
                            ))
                        }
                        ,
                        a.onCloseTips = function() {
                            this.tips && this.tips.isValid && this.tips.destroy(),
                                this.tips = null
                        }
                        ,
                        i(n, [{
                            key: "params",
                            set: function(t) {
                                (this._params = t,
                                this.tips && this.tips.isValid) && this.tips.getComponent(d).setParams(this._params)
                            }
                        }]),
                        n
                }(r)),
                    t("BaseTips", function(t) {
                        function i() {
                            return t.apply(this, arguments) || this
                        }
                        e(i, t);
                        var n = i.prototype;
                        return n.delayTime = function() {
                            return 100
                        }
                            ,
                            n.onRefreshView = function(t, e, i) {
                                var n = this;
                                if (this.onUpdateTips(t),
                                e && i) {
                                    var o = this.node.parent.getComponent(s);
                                    this.node.setPosition(a(o.width - 1e3, o.height - 1e3)),
                                        setTimeout((function() {
                                                if (n.isValid) {
                                                    var t = n.node.getComponent(s)
                                                        , h = o.width / -2 - t.width / 2
                                                        , r = o.height / -2 - t.height / 2
                                                        , p = o.height / 2 - t.height / 2
                                                        , d = a();
                                                    d.x = e.x - (i.width + t.width) / 2,
                                                    d.x < h && (d.x = e.x + (i.width + t.width) / 2),
                                                        d.y = e.y + t.height / 2,
                                                        d.y + t.height / 2 > p ? d.y = p - t.height / 2 : d.y + t.height / 2 < r && (d.y = r - t.height / 2),
                                                        n.node.setPosition(d)
                                                }
                                            }
                                        ), this.delayTime())
                                }
                            }
                            ,
                            i
                    }(r));
                n._RF.pop()
            }
        }
    }
));
