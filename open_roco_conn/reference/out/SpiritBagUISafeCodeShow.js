System.register("chunks:///_virtual/SpiritBagUISafeCodeShow.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./AgentNode.ts", "./NodeExtendEx.ts", "./CGIUtil.ts", "./XML.ts", "./BuildLogHelper.ts"], (function(t) {
        var e, n, i, o, r, s, a, d, u, h, _, c;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.assertThisInitialized,
                    i = t.createClass
            }
                , function(t) {
                    o = t.cclegacy,
                        r = t.NodeEventType,
                        s = t.EditBox
                }
                , function(t) {
                    a = t.__global
                }
                , function(t) {
                    d = t.AgentNode
                }
                , function(t) {
                    u = t.NodeExtendEx
                }
                , function(t) {
                    h = t.CGIUtil
                }
                , function(t) {
                    _ = t.XML
                }
                , function(t) {
                    c = t.default
                }
            ],
            execute: function() {
                o._RF.push({}, "14fa0yB+XdPQpRq8OBkHv3K", "SpiritBagUISafeCodeShow", void 0);
                t("SpiritBagUISafeCodeShow", function(t) {
                    e(d, t);
                    var o = d.prototype;
                    function d(e, i) {
                        var o;
                        return void 0 === i && (i = !0),
                            (o = t.call(this) || this)._res = void 0,
                            o._self = void 0,
                            o._cgiLdr = void 0,
                            o._pa = void 0,
                            o._isOnBag = !1,
                            o._isOnBag = i,
                            o._pa = e,
                            o._self = n(o),
                            o.onPreRequest(),
                            o
                    }
                    return o.afterLoaded = function() {
                        this.init()
                    }
                        ,
                        o.onInit = function() {
                            var t = this;
                            this._res = new C(this._view),
                                this.addChild(this._res.target),
                                this._res.gotoAndStop(1),
                                this._res.txtSafeCode.text = "",
                                this._cgiLdr = new h,
                                this._cgiLdr.cgiCallbackFun = this.onCgiCallback.bind(this),
                                this._res.btnOk.on(r.TOUCH_END, (function() {
                                        if (t._self.visible = !1,
                                        6 != String(t._res.txtSafeCode.text).length)
                                            a.UI.alert("", "请输入6位安全码");
                                        else if (t._isOnBag)
                                            t._pa.sureEquipSellRelease(Number(t._res.txtSafeCode.text));
                                        else {
                                            var e = (Number(t._res.txtSafeCode.text) + a.MainRoleData.uin - a.MainRoleData.uin % 1e3).toString(16);
                                            t._cgiLdr.cgiSendData("warehouse_security_code?cmd=8&data=" + e + d.getPlatfromStr())
                                        }
                                    }
                                )),
                                this._res.btnClose.on(r.TOUCH_END, (function() {
                                        t._self.visible = !1
                                    }
                                )),
                                this._res.btnForget.on(r.TOUCH_END, (function() {
                                        t._res.gotoAndStop(2),
                                            t._res.txtIDCard.text = "",
                                            t._res.txtName.text = ""
                                    }
                                )),
                                this._res.btnSureCheck.on(r.TOUCH_END, (function() {
                                        "" == t._res.txtIDCard.text ? a.UI.alert("", "请输入18位身份证号~") : "" == t._res.txtName.text ? a.UI.alert("", "请输入姓名~") : t.checkID()
                                    }
                                )),
                                this._res.txtSafeCode.on(s.EventType.TEXT_CHANGED, this.onEditBoxChanged, this)
                        }
                        ,
                        o.onEditBoxChanged = function(t) {
                            if (t instanceof s) {
                                var e = t.string.replace(/\D/g, "");
                                t.string = e,
                                    t.blur(),
                                    t.focus()
                            }
                        }
                        ,
                        o.checkID = function() {
                            this._cgiLdr.cgiSendData("warehouse_security_code?cmd=4&cid=" + this._res.txtIDCard.text + "&name =" + this._res.txtName.text + d.getPlatfromStr())
                        }
                        ,
                        o.init = function() {
                            this._isInit && (this._res.gotoAndStop(1),
                                this._res.txtSafeCode.text = "")
                        }
                        ,
                        o.onCgiCallback = function(t) {
                            var e, n = this, i = new _(t.data).data;
                            0 == Number(i.result.value) ? (-1 != String(t.sendType).indexOf("warehouse_security_code?cmd=4") && (this._res.gotoAndStop(3),
                                this._res.btnSureNoSafeCode.on(r.TOUCH_END, (function() {
                                        n._self.visible = !1
                                    }
                                )),
                                this._res.btnClose.on(r.TOUCH_END, (function() {
                                        n._self.visible = !1
                                    }
                                ))),
                            -1 != String(t.sendType).indexOf("warehouse_security_code?cmd=6") && (this._self.visible = !1),
                            -1 != String(t.sendType).indexOf("warehouse_security_code?cmd=8") && (null == (e = this._pa) || e.sureEquipSelt())) : a.UI.alert("", String(i.result.msg))
                        }
                        ,
                        d.getPlatfromStr = function() {
                            return "&platfrom=" + d.platformValue.toString()
                        }
                        ,
                        o.dispose = function() {
                            if (1 == c.IS_LOCAL)
                                throw new Error("Method not implemented.")
                        }
                        ,
                        i(d, [{
                            key: "resBundleKey",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return "prefabs/SpiritBag_1600/UIStoreSafeCode_1600"
                            }
                        }, {
                            key: "data",
                            set: function(t) {}
                        }], [{
                            key: "platformValue",
                            get: function() {
                                return 1e4
                            }
                        }]),
                        d
                }(u));
                var f = function(t) {
                    function n() {
                        for (var e, n = arguments.length, i = new Array(n), o = 0; o < n; o++)
                            i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i)) || this)._txtSafeCode = void 0,
                            e._btnForget = void 0,
                            e._btnOk = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "txtSafeCode",
                            get: function() {
                                return this._txtSafeCode || (this._txtSafeCode = new d(this.getChildByName("txtSafeCode"))),
                                    this._txtSafeCode
                            }
                        }, {
                            key: "btnForget",
                            get: function() {
                                return this._btnForget || (this._btnForget = new d(this.getChildByName("btnForget"))),
                                    this._btnForget
                            }
                        }, {
                            key: "btnOk",
                            get: function() {
                                return this._btnOk || (this._btnOk = new d(this._target.getChildByName("btnOk"))),
                                    this._btnOk
                            }
                        }]),
                        n
                }(d)
                    , l = function(t) {
                    function n() {
                        for (var e, n = arguments.length, i = new Array(n), o = 0; o < n; o++)
                            i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i)) || this)._btnSureCheck = void 0,
                            e._txtIDCard = void 0,
                            e._txtName = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "btnSureCheck",
                            get: function() {
                                return this._btnSureCheck || (this._btnSureCheck = new d(this.getChildByName("btnSureCheck"))),
                                    this._btnSureCheck
                            }
                        }, {
                            key: "txtIDCard",
                            get: function() {
                                return this._txtIDCard || (this._txtIDCard = new d(this.getChildByName("txtIDCard"))),
                                    this._txtIDCard
                            }
                        }, {
                            key: "txtName",
                            get: function() {
                                return this._txtName || (this._txtName = new d(this.getChildByName("txtName"))),
                                    this._txtName
                            }
                        }]),
                        n
                }(d)
                    , g = function(t) {
                    function n() {
                        for (var e, n = arguments.length, i = new Array(n), o = 0; o < n; o++)
                            i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i)) || this)._btnSureNoSafeCode = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "btnSureNoSafeCode",
                            get: function() {
                                return this._btnSureNoSafeCode || (this._btnSureNoSafeCode = new d(this.getChildByName("btnSureNoSafeCode"))),
                                    this._btnSureNoSafeCode
                            }
                        }]),
                        n
                }(d)
                    , C = function(t) {
                    function n() {
                        for (var e, n = arguments.length, i = new Array(n), o = 0; o < n; o++)
                            i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i)) || this)._btnClose = void 0,
                            e._node1 = void 0,
                            e._node2 = void 0,
                            e._node3 = void 0,
                            e._txtSafeCode = void 0,
                            e._btnForget = void 0,
                            e._btnOk = void 0,
                            e._btnSureCheck = void 0,
                            e._txtIDCard = void 0,
                            e._txtName = void 0,
                            e._btnSureNoSafeCode = void 0,
                            e
                    }
                    return e(n, t),
                        i(n, [{
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new d(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "node1",
                            get: function() {
                                return this._node1 || (this._node1 = new f(this.getChildByName("node1"))),
                                    this._node1
                            }
                        }, {
                            key: "node2",
                            get: function() {
                                return this._node2 || (this._node2 = new l(this.getChildByName("node2"))),
                                    this._node2
                            }
                        }, {
                            key: "node3",
                            get: function() {
                                return this._node3 || (this._node3 = new g(this.getChildByName("node3"))),
                                    this._node3
                            }
                        }, {
                            key: "txtSafeCode",
                            get: function() {
                                return this.node1.txtSafeCode
                            }
                        }, {
                            key: "btnForget",
                            get: function() {
                                return this.node1.btnForget
                            }
                        }, {
                            key: "btnOk",
                            get: function() {
                                return this.node1.btnOk
                            }
                        }, {
                            key: "btnSureCheck",
                            get: function() {
                                return this.node2.btnSureCheck
                            }
                        }, {
                            key: "txtIDCard",
                            get: function() {
                                return this.node2.txtIDCard
                            }
                        }, {
                            key: "txtName",
                            get: function() {
                                return this.node2.txtName
                            }
                        }, {
                            key: "btnSureNoSafeCode",
                            get: function() {
                                return this.node3.btnSureNoSafeCode
                            }
                        }]),
                        n
                }(d);
                o._RF.pop()
            }
        }
    }
));
