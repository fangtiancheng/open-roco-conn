System.register("chunks:///_virtual/EmptySpiritBallUILogic.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./AgentNode.ts", "./CFunction.ts", "./PureNotificationCenter.ts", "./AppConstDef.ts", "./BagDataProxy.ts"], (function(i) {
        var t, n, d, e, s, r, o, h, c, p;
        return {
            setters: [function(i) {
                t = i.createClass,
                    n = i.inheritsLoose
            }
                , function(i) {
                    d = i.cclegacy,
                        e = i.NodeEventType
                }
                , function(i) {
                    s = i.__global
                }
                , function(i) {
                    r = i.AgentNode
                }
                , function(i) {
                    o = i.CFunction
                }
                , function(i) {
                    h = i.PureNotificationCenter
                }
                , function(i) {
                    c = i.AppConstDef
                }
                , function(i) {
                    p = i.BagDataProxy
                }
            ],
            execute: function() {
                d._RF.push({}, "95581OT3KBO6YsxJYtQ5vEa", "EmptySpiritBallUILogic", void 0);
                i("EmptySpiritBallUILogic", function() {
                    function i(i) {
                        this._ui = void 0,
                            this._ui = new u(i),
                            this._ui.btnAddSpirit0.on(e.TOUCH_END, this.clickHandler, this),
                            this._ui.btnAddSpirit1.on(e.TOUCH_END, this.clickHandler, this),
                            this._ui.btnAddSpirit2.on(e.TOUCH_END, this.clickHandler, this),
                            this._ui.btnAddSpirit3.on(e.TOUCH_END, this.clickHandler, this),
                            this._ui.btnAddSpirit4.on(e.TOUCH_END, this.clickHandler, this),
                            this._ui.btnAddSpirit5.on(e.TOUCH_END, this.clickHandler, this)
                    }
                    var n = i.prototype;
                    return n.clickHandler = function(i) {
                        switch (i.target.name) {
                            case "btnAddSpirit0":
                            case "btnAddSpirit1":
                            case "btnAddSpirit2":
                            case "btnAddSpirit3":
                            case "btnAddSpirit4":
                            case "btnAddSpirit5":
                                s.showMsgBox("这个阵容位是空的，要从仓库中带出一只宠物吗？", 2, new o(this.goHome,this))
                        }
                    }
                        ,
                        n.goHome = function(i) {
                            void 0 === i && (i = 1),
                            1 == i && (s.MainRoleData.isVip ? (h.sendNotification(c.NN_V_SHOW_SPIRIT_STORAGE_VIEW),
                                setTimeout((function() {
                                        h.sendNotification(c.NN_V_CLOSE_SPIRIT_BAG_VIEW)
                                    }
                                ), 50)) : s.showVipConfirm())
                        }
                        ,
                        n.update = function() {
                            if (p.data.length < 6) {
                                for (var i = 0; i < 6; i++)
                                    i < p.data.length ? this._ui["btnAddSpirit" + i].visible = !1 : this._ui["btnAddSpirit" + i].visible = !0;
                                this.visible = !0
                            } else
                                this.visible = !1
                        }
                        ,
                        n.reset = function() {
                            this.visible = !1
                        }
                        ,
                        n.dispose = function() {
                            this._ui.btnAddSpirit0.off(e.TOUCH_END, this.clickHandler, this),
                                this._ui.btnAddSpirit1.off(e.TOUCH_END, this.clickHandler, this),
                                this._ui.btnAddSpirit2.off(e.TOUCH_END, this.clickHandler, this),
                                this._ui.btnAddSpirit3.off(e.TOUCH_END, this.clickHandler, this),
                                this._ui.btnAddSpirit4.off(e.TOUCH_END, this.clickHandler, this),
                                this._ui.btnAddSpirit5.off(e.TOUCH_END, this.clickHandler, this)
                        }
                        ,
                        t(i, [{
                            key: "visible",
                            get: function() {
                                return this._ui.visible
                            },
                            set: function(i) {
                                this._ui.visible = i
                            }
                        }]),
                        i
                }());
                var u = function(i) {
                    function d() {
                        for (var t, n = arguments.length, d = new Array(n), e = 0; e < n; e++)
                            d[e] = arguments[e];
                        return (t = i.call.apply(i, [this].concat(d)) || this)._btnAddSpirit0 = void 0,
                            t._btnAddSpirit1 = void 0,
                            t._btnAddSpirit2 = void 0,
                            t._btnAddSpirit3 = void 0,
                            t._btnAddSpirit4 = void 0,
                            t._btnAddSpirit5 = void 0,
                            t
                    }
                    return n(d, i),
                        t(d, [{
                            key: "btnAddSpirit0",
                            get: function() {
                                return this._btnAddSpirit0 || (this._btnAddSpirit0 = new r(this.getChildByName("btnAddSpirit0"))),
                                    this._btnAddSpirit0
                            }
                        }, {
                            key: "btnAddSpirit1",
                            get: function() {
                                return this._btnAddSpirit1 || (this._btnAddSpirit1 = new r(this.getChildByName("btnAddSpirit1"))),
                                    this._btnAddSpirit1
                            }
                        }, {
                            key: "btnAddSpirit2",
                            get: function() {
                                return this._btnAddSpirit2 || (this._btnAddSpirit2 = new r(this.getChildByName("btnAddSpirit2"))),
                                    this._btnAddSpirit2
                            }
                        }, {
                            key: "btnAddSpirit3",
                            get: function() {
                                return this._btnAddSpirit3 || (this._btnAddSpirit3 = new r(this.getChildByName("btnAddSpirit3"))),
                                    this._btnAddSpirit3
                            }
                        }, {
                            key: "btnAddSpirit4",
                            get: function() {
                                return this._btnAddSpirit4 || (this._btnAddSpirit4 = new r(this.getChildByName("btnAddSpirit4"))),
                                    this._btnAddSpirit4
                            }
                        }, {
                            key: "btnAddSpirit5",
                            get: function() {
                                return this._btnAddSpirit5 || (this._btnAddSpirit5 = new r(this.getChildByName("btnAddSpirit5"))),
                                    this._btnAddSpirit5
                            }
                        }]),
                        d
                }(r);
                d._RF.pop()
            }
        }
    }
));
