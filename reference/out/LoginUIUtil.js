System.register("chunks:///_virtual/LoginUIUtil.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AnimationLoader.ts", "./PureNotificationCenter.ts", "./AppConstDef.ts", "./BuildLogHelper.ts", "./Timer.ts", "./TimerEvent.ts", "./GUIUtils.ts"], (function(n) {
        var o, t, e, i, c, u, s, a, l, r, f, d, h, T;
        return {
            setters: [function(n) {
                o = n.inheritsLoose,
                    t = n.createClass
            }
                , function(n) {
                    e = n.cclegacy,
                        i = n._decorator,
                        c = n.Label,
                        u = n.NodeEventType,
                        s = n.Component
                }
                , function(n) {
                    a = n.AnimationLoader
                }
                , function(n) {
                    l = n.PureNotificationCenter
                }
                , function(n) {
                    r = n.AppConstDef
                }
                , function(n) {
                    f = n.default
                }
                , function(n) {
                    d = n.Timer
                }
                , function(n) {
                    h = n.default
                }
                , function(n) {
                    T = n.GUI
                }
            ],
            execute: function() {
                var g;
                e._RF.push({}, "462c9UUid5LgovaJJo/TlSE", "LoginUIUtil", void 0);
                var p = i.ccclass
                    , _ = (i.property,
                    i.menu);
                n("default", p(g = _("AUI/LoginUIUtil")(g = function(n) {
                    function e() {
                        for (var o, t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                            e[i] = arguments[i];
                        return (o = n.call.apply(n, [this].concat(e)) || this)._button = void 0,
                            o._url = "https://web2.17roco.qq.com/fcgi-bin/check_night2?id=",
                            o._node = void 0,
                            o._sprite = void 0,
                            o._defaultFrame = void 0,
                            o._anim = void 0,
                            o.anmState = void 0,
                            o
                    }
                    o(e, n);
                    var i = e.prototype;
                    return i.onClickFastLogin = function() {
                        console.log("onClickFastLogin"),
                            this.showMainUI()
                    }
                        ,
                        i.showMainUI = function() {
                            T.instance.gotoMainView((function() {
                                    return l.sendNotification(r.NN_V_DESTORY_LOGIN_VIEW)
                                }
                            ))
                        }
                        ,
                        i.onClickRealLoginBtn = function() {
                            T.instance.gotoServerListView(),
                                l.sendNotification(r.NN_V_CLOSE_LOGIN_VIEW)
                        }
                        ,
                        i.buildLogPrint = function() {
                            var n = this.node.getChildByName("log");
                            n && (1 == f.IS_LOCAL ? n.active = !0 : n.active = !1);
                            var o = this.node.getChildByName("log").getComponent(c);
                            o && (f.IS_LOCAL,
                                o.string = "CBT:" + f.TIMER)
                        }
                        ,
                        i.checkNight = function() {}
                        ,
                        i.onRangeComplete = function(n) {
                            console.log("onRangeComplete================" + n)
                        }
                        ,
                        i.onRangeError = function(n) {
                            console.log("onRangeError================" + n)
                        }
                        ,
                        i.cza = function(n) {
                            n.currentTarget.name
                        }
                        ,
                        i.start = function() {
                            this.buildLogPrint(),
                                this.label = "初始化资源1",
                                this.node.getChildByName("touchBtn").on(u.TOUCH_START, this.onTouchStart, this, !0),
                                this.node.getChildByName("touchBtn").on(u.TOUCH_CANCEL, this.onTouchCancel, this, !0),
                                this.node.getChildByName("touchBtn").on(u.TOUCH_END, this.onTouchEnd, this, !0)
                        }
                        ,
                        i.onTouchStart = function() {
                            console.error("onTouchStart")
                        }
                        ,
                        i.onTouchCancel = function() {
                            console.error("onTouchCancel")
                        }
                        ,
                        i.onTouchEnd = function() {
                            console.error("onTouchEnd")
                        }
                        ,
                        i.onSucc99 = function() {
                            console.error("LoginUIUtil===onSucc99")
                        }
                        ,
                        i.onSuccPet = function() {
                            this.label = "pet3018加载成功"
                        }
                        ,
                        i.onSucc = function() {
                            var n = this;
                            this.label = "资源1加载成功",
                                setTimeout((function() {
                                        n.label = "更换资源24",
                                            n.node.getChildByName("ceshi1").getComponent(a).initWithWeather(24).success = n.onSucc1.bind(n)
                                    }
                                ), 5e3)
                        }
                        ,
                        i.onSucc1 = function() {
                            this.label = "资源24加载成功"
                        }
                        ,
                        i.onSuccess3 = function() {
                            this._node.play("MAGIC_START")
                        }
                        ,
                        i.onSuccess2 = function() {
                            var n = new d(1e4);
                            n.addEventListener(h.TIMER, this.onSuccess3.bind(this)),
                                n.start()
                        }
                        ,
                        i.onSuccess11 = function() {
                            console.log("onSuccess11"),
                                this._node.play("Normal")
                        }
                        ,
                        i.onClickScanBtn11 = function(n) {
                            console.log("onClickScanBtn11")
                        }
                        ,
                        i.onClickScanBtn22 = function(n) {
                            console.log("onClickScanBtn22")
                        }
                        ,
                        i.onClickNode = function(n) {
                            n.propagationImmediateStopped = !0,
                                console.log("点击node")
                        }
                        ,
                        i.onSuccess = function() {
                            var n = this;
                            setTimeout((function() {
                                    n._node.play("IDLE")
                                }
                            ), 1e3),
                                setTimeout((function() {
                                        n._node.play("STB")
                                    }
                                ), 3e3),
                                setTimeout((function() {
                                        n._node.play("BTS")
                                    }
                                ), 5e3),
                                setTimeout((function() {
                                        n._node.play("APPEAR")
                                    }
                                ), 7e3),
                                setTimeout((function() {
                                        n._node.play("UNDER_ATTACK")
                                    }
                                ), 9e3),
                                setTimeout((function() {
                                        n._node.play("BEAT_DOWN")
                                    }
                                ), 11e3),
                                setTimeout((function() {
                                        n._node.play("MISS")
                                    }
                                ), 13e3),
                                setTimeout((function() {
                                        n._node.play("MAGIC_START")
                                    }
                                ), 15e3),
                                setTimeout((function() {
                                        n._node.play("MAGIC_FOCUS")
                                    }
                                ), 17e3),
                                setTimeout((function() {
                                        n._node.play("MAGIC_END")
                                    }
                                ), 19e3),
                                setTimeout((function() {
                                        n._node.play("DEAD")
                                    }
                                ), 21e3),
                                setTimeout((function() {
                                        n._node.play("ATTACK")
                                    }
                                ), 23e3)
                        }
                        ,
                        i.restore = function() {
                            this._sprite.spriteFrame = this._defaultFrame
                        }
                        ,
                        t(e, [{
                            key: "label",
                            set: function(n) {
                                this.node.getChildByName("Label").getComponent(c).string = n
                            }
                        }]),
                        e
                }(s)) || g) || g);
                e._RF.pop()
            }
        }
    }
));
