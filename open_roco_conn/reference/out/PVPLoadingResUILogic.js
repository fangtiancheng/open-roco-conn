System.register("chunks:///_virtual/PVPLoadingResUILogic.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./LoadInfoLogic.ts", "./LoadingResUILogic.ts"], (function(t) {
        var i, n, o, e, a, s, h, _, r, d;
        return {
            setters: [function(t) {
                i = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy,
                        o = t.Animation,
                        e = t.UIOpacity,
                        a = t.Tween,
                        s = t.tween,
                        h = t.v3
                }
                , function(t) {
                    _ = t.LoadInfoLogic
                }
                , function(t) {
                    r = t.NodeEvent,
                        d = t.LoadingResUILogic
                }
            ],
            execute: function() {
                n._RF.push({}, "82287RoTb9NXK6NLT+NEdW4", "PVPLoadingResUILogic", void 0);
                t("PVPLoadingResUILogic", function(t) {
                    function n(i, n) {
                        return t.call(this, i, n) || this
                    }
                    i(n, t);
                    var d = n.prototype;
                    return d.init = function() {
                        this._target.getComponent(r) || (this._nodeEventListener = this._target.addComponent(r),
                            this._nodeEventListener.node.on("start", this.onStart, this),
                            this._nodeEventListener.node.on("onLoad", this.onLoad, this)),
                            this._ani = this._target.getChildByName("ani_pk_lighting"),
                            this._ani.active = !1,
                            this._ani_pk = this._target.getChildByName("ani_pk").getComponent(o),
                            this._ani_pk.on(o.EventType.FINISHED, this.onAniEvent, this),
                            this._ani_pk.stop(),
                            this._ani_pk.node.active = !1,
                            this._loadInfo_1 = new _(this._target.getChildByName("avatarLeft"),1),
                            this._loadInfo_2 = new _(this._target.getChildByName("avatarRight"),2)
                    }
                        ,
                        d.onLoad = function() {}
                        ,
                        d.onStart = function() {
                            this.playAni()
                        }
                        ,
                        d.show = function(i) {
                            t.prototype.show.call(this, i)
                        }
                        ,
                        d.hidden = function() {
                            t.prototype.hidden.call(this)
                        }
                        ,
                        d.playAni = function() {
                            this._ani_pk.node.active = !0,
                                this._ani_pk.play(),
                                this._loadInfo_1.setPosition(-1400, 82),
                                this._loadInfo_2.setPosition(1400, -50),
                                this._target.getComponent(e).opacity = 255,
                                a.stopAllByTarget(this._loadInfo_1.target),
                                a.stopAllByTarget(this._loadInfo_2.target),
                                s(this._loadInfo_1.target).to(.16, {
                                    position: h(-375, 82, 0)
                                }).start(),
                                s(this._loadInfo_2.target).to(.16, {
                                    position: h(362, -50, 0)
                                }).start()
                        }
                        ,
                        d.onAniEvent = function(t) {
                            this._ani.active = !0,
                                this._ani_pk.node.active = !1,
                                this._ani_pk.off(o.EventType.FINISHED, this.onAniEvent, this)
                        }
                        ,
                        n
                }(d));
                n._RF.pop()
            }
        }
    }
));
