System.register("chunks:///_virtual/GameView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseView.ts", "./ResManager.ts", "./GameProtocolManager.ts", "./PureNotificationCenter.ts", "./ComponentParams.ts"], (function(e) {
        var t, n, o, i, r, s, a, d, u, c;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy,
                        o = e.Event,
                        i = e.instantiate,
                        r = e.Component
                }
                , function(e) {
                    s = e.BaseView
                }
                , function(e) {
                    a = e.default
                }
                , function(e) {
                    d = e.GameProtocolManager
                }
                , function(e) {
                    u = e.PureNotificationCenter
                }
                , function(e) {
                    c = e.ComponentParams
                }
            ],
            execute: function() {
                n._RF.push({}, "2432c2T2t9MdYlyPD68pGLe", "GameView", void 0);
                var h = e("GameViewProxy", function(e) {
                    function n() {
                        for (var t, n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                            o[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(o)) || this).currMediator = void 0,
                            t
                    }
                    return t(n, e),
                        n.prototype.onEnable = function() {
                            var e = new o(n.ADD_TO_NODE);
                            this.node.dispatchEvent(e)
                        }
                        ,
                        n
                }(r));
                h.ADD_TO_NODE = "addToNode@GameViewProxy";
                e("GameView", function(e) {
                    function n(t) {
                        var n;
                        return (n = e.call(this) || this).node = void 0,
                            n.currMediator = void 0,
                            n.isOpen = !1,
                            n.currMediator = t,
                            n.onInit(),
                            n
                    }
                    t(n, e);
                    var o = n.prototype;
                    return o.notify = function(e, t, n) {
                        void 0 === t && (t = null),
                        void 0 === n && (n = null),
                            u.sendNotification(e, t, n)
                    }
                        ,
                        o.getPropocol = function(e) {
                            return d.instance.getPropocol(e)
                        }
                        ,
                        o.show = function(e) {
                            var t = this;
                            if (this.node && this.node.isValid)
                                this.refreshView(e);
                            else if (!this.isOpen) {
                                this.isOpen = !0;
                                var n = a.Instance.getPrefab(this.bundleName, this.prefabPath);
                                n ? this.addToParent(n, e) : a.Instance.loadingRes(this.bundleName, this.prefabPath, (function(n, o) {
                                        if (n)
                                            throw new Error("loading err:not found(" + t.bundleName + "//" + t.prefabPath + ")");
                                        var r = i(o);
                                        if (!r)
                                            throw new Error("asset type err: not perfab(" + t.bundleName + "//" + t.prefabPath + ")");
                                        t.isOpen && t.addToParent(r, e)
                                    }
                                ))
                            }
                        }
                        ,
                        o.update = function(e) {
                            this.node && this.node.isValid && this.node.getComponent(c).setParams(e)
                        }
                        ,
                        o.close = function() {
                            this.isOpen = !1,
                            this.node && this.node.isValid && (this.onClose(),
                                this.node.destroy(),
                                this.node = null)
                        }
                        ,
                        o.destroy = function() {
                            this.close(),
                                this.onDestroy(),
                                this.currMediator = null
                        }
                        ,
                        o.addToParent = function(e, t) {
                            var n = this;
                            this.node = e;
                            var o = this.node.getComponent(h) || this.node.addComponent(h)
                                , i = this.node.getComponent(c) || this.node.addComponent(c);
                            o.currMediator = this.currMediator,
                                i.setParams(t),
                                this.node.on(h.ADD_TO_NODE, (function() {
                                        return n.onAdded(t)
                                    }
                                )),
                                this.guiParent.addChild(this.node)
                        }
                        ,
                        o.onAdded = function(e) {
                            this.refreshView(e)
                        }
                        ,
                        o.refreshView = function(e) {}
                        ,
                        n
                }(s));
                n._RF.pop()
            }
        }
    }
));
