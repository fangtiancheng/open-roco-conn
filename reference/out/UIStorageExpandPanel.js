System.register("chunks:///_virtual/UIStorageExpandPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./AgentNode.ts", "./NodeExtendEx.ts", "./Signal.ts", "./SearchData.ts", "./UIResAlertNotDiamond.ts"], (function(t) {
        var i, e, n, s, r, o, h, a, c, u, l;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        s = t.NodeEventType,
                        r = t.EditBox
                }
                , function(t) {
                    o = t.__global
                }
                , function(t) {
                    h = t.AgentNode
                }
                , function(t) {
                    a = t.NodeExtendEx
                }
                , function(t) {
                    c = t.Signal
                }
                , function(t) {
                    u = t.SearchData
                }
                , function(t) {
                    l = t.UIResAlertNotDiamond
                }
            ],
            execute: function() {
                n._RF.push({}, "53e50bnzzVKAKtMb4mmBFuB", "UIStorageExpandPanel", void 0);
                t("UIStorageExpandPanel", function(t) {
                    i(h, t);
                    var n = h.prototype;
                    function h(i) {
                        var e;
                        return (e = t.call(this) || this).par = void 0,
                            e._res = void 0,
                            e._resDiamondInsuffAlert = void 0,
                            e.lowLimit = 1,
                            e.upperLimit = 200,
                            e.onExpandStorage = new c,
                            e._normalPrice = 6,
                            e._vipPrice = 5,
                            e._totalPrice = 5,
                            e._numRecord = 0,
                            e._curCapacity = 0,
                            e.par = i,
                            e.onPreRequest(),
                            e
                    }
                    return n.dispose = function() {}
                        ,
                        n.afterLoaded = function() {
                            this.init(),
                                this.curCapacity = this._curCapacity,
                                this.num = this._numRecord
                        }
                        ,
                        n.init = function() {
                            this._isInit
                        }
                        ,
                        n.onInit = function() {
                            this._res = new d(this._view),
                                this.addChild(this._res.target),
                                this._res.on(s.TOUCH_END, this.onResClick, this),
                                this._res.btnClose.on(s.TOUCH_END, this.onResClick, this),
                                this._res.btnCancel.on(s.TOUCH_END, this.onResClick, this),
                                this._res.btnOk.on(s.TOUCH_END, this.onResClick, this),
                                this._res.btnShowIntroduce.on(s.TOUCH_END, this.onResClick, this),
                                this._res.introduceShow.btnCloseIntroduce.on(s.TOUCH_END, this.onResClick, this),
                                this._res.introduceShow.visible = !1,
                                this._res.leftBtn.on(s.TOUCH_END, this.btnHander, this),
                                this._res.rightBtn.on(s.TOUCH_END, this.btnHander, this),
                                this._res.num.on(r.EventType.TEXT_CHANGED, this.onChange, this),
                                this._res.txtCurCapacity.text = "",
                                this.num = 1,
                                this._res.txtAdd.text = "+" + this.num,
                                this._resDiamondInsuffAlert = new l
                        }
                        ,
                        n.onChange = function(t) {
                            var i = Number(this._res.num.text);
                            i < this.lowLimit && (this._res.num.text = this.lowLimit + "",
                                i = this.lowLimit),
                            i > this.upperLimit && (this._res.num.text = this.upperLimit + "",
                                i = this.upperLimit,
                                o.showMsgBox("最多只能扩容" + this.upperLimit + "格哦！"),
                                this._res.num.getComponent(r).blur()),
                                this.num = i
                        }
                        ,
                        n.onResClick = function(t) {
                            t.target,
                                t.target.name;
                            switch (t.currentTarget) {
                                case this._res.btnClose.target:
                                case this._res.btnCancel.target:
                                    this.visible = !1,
                                        this._res.introduceShow.visible = !1;
                                    break;
                                case this._res.btnOk.target:
                                    this.expandStorage();
                                    break;
                                case this._res.btnShowIntroduce.target:
                                    this._res.introduceShow.visible = !0;
                                    break;
                                case this._res.introduceShow.btnCloseIntroduce.target:
                                    this._res.introduceShow.visible = !1
                            }
                        }
                        ,
                        n.updateHandler = function(t) {}
                        ,
                        n.btnHander = function(t) {
                            var i = this.num;
                            switch (t.currentTarget.name) {
                                case "leftBtn":
                                    --i < this.lowLimit && (i = this.lowLimit),
                                    i != this.num && (this.num = i);
                                    break;
                                case "rightBtn":
                                    ++i > this.upperLimit && (i = this.upperLimit,
                                        o.showMsgBox("最多只能扩容" + this.upperLimit + "格哦！"),
                                        this._res.num.getComponent(r).blur()),
                                    i != this.num && (this.num = i)
                            }
                        }
                        ,
                        n.expandStorage = function() {
                            this.total > this.par.numDiamond ? o.showMAlert(this._resDiamondInsuffAlert, "", "", (function() {
                                    window.open("http://pay.qq.com/ipay/index.shtml?c=lkmzty", "_blank"),
                                        console.log("expandStorage===========")
                                }
                            ), null) : this.onExpandStorage.dispatch(this.num)
                        }
                        ,
                        e(h, [{
                            key: "resBundleKey",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return "prefabs/spriteStore/UIStorageExpandPanel_1600"
                            }
                        }, {
                            key: "num",
                            get: function() {
                                return Number(this._res.num.text)
                            },
                            set: function(t) {
                                if (this._numRecord = t,
                                    this._isInit) {
                                    this._res.num.text = t.toString(),
                                        this.total = 0;
                                    for (var i = 0, e = 0, n = 1; n <= t; n++)
                                        this._curCapacity + n <= 800 ? (this._vipPrice = 5,
                                            this._normalPrice = 6,
                                            this.total += o.MainRoleData.isVip ? this._vipPrice : this._normalPrice,
                                            i += 6,
                                            e += 5) : this._curCapacity + n <= 1100 ? (this._vipPrice = 10,
                                            this._normalPrice = 12,
                                            this.total += o.MainRoleData.isVip ? this._vipPrice : this._normalPrice,
                                            i += 12,
                                            e += 10) : this._curCapacity + n <= 1300 && (this._vipPrice = 16,
                                            this._normalPrice = 18,
                                            this.total += o.MainRoleData.isVip ? this._vipPrice : this._normalPrice,
                                            i += 18,
                                            e += e += 16);
                                    this._totalPrice = this.total,
                                        this._res.txtVipPrice.text = e + "",
                                        this._res.txtNormalPrice.text = i + "",
                                        this._res.txtAdd.text = "+" + t
                                }
                            }
                        }, {
                            key: "total",
                            get: function() {
                                return this._totalPrice
                            },
                            set: function(t) {
                                this._totalPrice = t
                            }
                        }, {
                            key: "curCapacity",
                            set: function(t) {
                                this._curCapacity = t,
                                this._isInit && this._res && (this._res.txtCurCapacity.text = u.allSpirits.length + "/" + t)
                            }
                        }]),
                        h
                }(a));
                var _ = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), s = 0; s < e; s++)
                            n[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._btnCloseIntroduce = void 0,
                            i
                    }
                    return i(n, t),
                        e(n, [{
                            key: "btnCloseIntroduce",
                            get: function() {
                                return this._btnCloseIntroduce || (this._btnCloseIntroduce = new h(this.getChildByName("btnCloseIntroduce"))),
                                    this._btnCloseIntroduce
                            }
                        }]),
                        n
                }(h)
                    , d = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), s = 0; s < e; s++)
                            n[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._leftBtn = void 0,
                            i._rightBtn = void 0,
                            i._btnClose = void 0,
                            i._btnCancel = void 0,
                            i._btnOk = void 0,
                            i._btnShowIntroduce = void 0,
                            i._introduceShow = void 0,
                            i._num = void 0,
                            i._txtNormalPrice = void 0,
                            i._txtVipPrice = void 0,
                            i._txtCurCapacity = void 0,
                            i._txtAdd = void 0,
                            i
                    }
                    return i(n, t),
                        e(n, [{
                            key: "leftBtn",
                            get: function() {
                                return this._leftBtn || (this._leftBtn = new h(this.getChildByName("leftBtn"))),
                                    this._leftBtn
                            }
                        }, {
                            key: "rightBtn",
                            get: function() {
                                return this._rightBtn || (this._rightBtn = new h(this.getChildByName("rightBtn"))),
                                    this._rightBtn
                            }
                        }, {
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new h(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "btnCancel",
                            get: function() {
                                return this._btnCancel || (this._btnCancel = new h(this.getChildByName("btnCancel"))),
                                    this._btnCancel
                            }
                        }, {
                            key: "btnOk",
                            get: function() {
                                return this._btnOk || (this._btnOk = new h(this.getChildByName("btnOk"))),
                                    this._btnOk
                            }
                        }, {
                            key: "btnShowIntroduce",
                            get: function() {
                                return this._btnShowIntroduce || (this._btnShowIntroduce = new h(this.getChildByName("btnShowIntroduce"))),
                                    this._btnShowIntroduce
                            }
                        }, {
                            key: "introduceShow",
                            get: function() {
                                return this._introduceShow || (this._introduceShow = new _(this.getChildByName("introduceShow"))),
                                    this._introduceShow
                            }
                        }, {
                            key: "num",
                            get: function() {
                                return this._num || (this._num = new h(this.getChildByName("num"))),
                                    this._num
                            }
                        }, {
                            key: "txtNormalPrice",
                            get: function() {
                                return this._txtNormalPrice || (this._txtNormalPrice = new h(this.getChildByName("txtNormalPrice"))),
                                    this._txtNormalPrice
                            }
                        }, {
                            key: "txtVipPrice",
                            get: function() {
                                return this._txtVipPrice || (this._txtVipPrice = new h(this.getChildByName("txtVipPrice"))),
                                    this._txtVipPrice
                            }
                        }, {
                            key: "txtCurCapacity",
                            get: function() {
                                return this._txtCurCapacity || (this._txtCurCapacity = new h(this.getChildByName("txtCurCapacity"))),
                                    this._txtCurCapacity
                            }
                        }, {
                            key: "txtAdd",
                            get: function() {
                                return this._txtAdd || (this._txtAdd = new h(this.getChildByName("txtAdd"))),
                                    this._txtAdd
                            }
                        }]),
                        n
                }(h);
                n._RF.pop()
            }
        }
    }
));
