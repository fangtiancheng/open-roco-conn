System.register("chunks:///_virtual/SpiritStorageUISafeCodeShow.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./AgentNode.ts", "./NodeExtendEx.ts", "./CGIUtil.ts", "./XML.ts", "./BuildLogHelper.ts", "./Constants.ts"], (function(t) {
        var e, n, i, o, r, s, a, d, u, h, c, _, f;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass,
                    i = t.assertThisInitialized
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
                    c = t.XML
                }
                , function(t) {
                    _ = t.default
                }
                , function(t) {
                    f = t.Constants
                }
            ],
            execute: function() {
                o._RF.push({}, "4ee74DcnKlJnLcldFrf118Y", "SpiritStorageUISafeCodeShow", void 0);
                t("SpiritStorageUISafeCodeShow", function(t) {
                    function o(e) {
                        var n;
                        return (n = t.call(this) || this)._res = void 0,
                            n._this = void 0,
                            n._cgiLdr = void 0,
                            n._pa = void 0,
                            n._pa = e,
                            n._this = i(n),
                            n._cgiLdr = new h,
                            n._cgiLdr.cgiCallbackFun = n.onCgiCallback.bind(i(n)),
                            n.onPreRequest(),
                            n
                    }
                    e(o, t);
                    var d = o.prototype;
                    return d.afterLoaded = function() {
                        this.init()
                    }
                        ,
                        d.init = function() {
                            this._isInit && (this._res.gotoAndStop(1),
                                this._res.txtSafeCode.text = "")
                        }
                        ,
                        d.onInit = function() {
                            var t = this;
                            this._res = new S(this._view),
                                this.addChild(this._res.target),
                                this._res.gotoAndStop(1),
                                this._res.txtSafeCode.text = "",
                                this._res.btnOk.on(r.TOUCH_END, (function() {
                                        t._this.visible = !1,
                                            6 != String(t._res.txtSafeCode.text).length ? a.UI.alert("", "请输入6位安全码") : t._pa.sureSPiritRelease(Number(t._res.txtSafeCode.text))
                                    }
                                )),
                                this._res.btnClose.on(r.TOUCH_END, (function() {
                                        t._this.visible = !1
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
                        d.onEditBoxChanged = function(t) {
                            if (t instanceof s) {
                                var e = t.string.replace(/\D/g, "");
                                t.string = e,
                                    t.blur(),
                                    t.focus()
                            }
                        }
                        ,
                        d.dispose = function() {
                            if (1 == _.IS_LOCAL)
                                throw new Error("Method not implemented.")
                        }
                        ,
                        d.checkID = function() {
                            this._cgiLdr.cgiSendData("warehouse_security_code?cmd=4" + this.getSkeyStr() + "&cid=" + this._res.txtIDCard.text + "&name =" + this._res.txtName.text + o.getPlatfromStr())
                        }
                        ,
                        d.onCgiCallback = function(t) {
                            var e = this
                                , n = new c(t.data).data;
                            0 == Number(n.result.value) ? (-1 != String(t.sendType).indexOf("warehouse_security_code?cmd=4") && (this._res.gotoAndStop(3),
                                this._res.btnSureNoSafeCode.on(r.TOUCH_END, (function() {
                                        e._this.visible = !1
                                    }
                                )),
                                this._res.btnClose.on(r.TOUCH_END, (function() {
                                        e._this.visible = !1
                                    }
                                ))),
                            -1 != String(t.sendType).indexOf("warehouse_security_code?cmd=6") && (this._this.visible = !1)) : a.UI.alert("", String(n.result.msg))
                        }
                        ,
                        o.getPlatfromStr = function() {
                            return "&platfrom=" + o.platformValue.toString()
                        }
                        ,
                        d.getSkeyStr = function() {
                            var t = a.SysAPI.getGDataAPI().getGlobalVal(f.CUR_SERVER_INFO)
                                , e = "";
                            return t && (e = "&unkown=" + (t.pskey ? t.pskey : t.skey) + "&skey=" + t.skey),
                                e
                        }
                        ,
                        n(o, [{
                            key: "resBundleKey",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return "prefabs/spriteStore/UIStoreSafeCode_1600"
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
                        o
                }(u));
                var l = function(t) {
                    function i() {
                        for (var e, n = arguments.length, i = new Array(n), o = 0; o < n; o++)
                            i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i)) || this)._txtSafeCode = void 0,
                            e._btnForget = void 0,
                            e._btnOk = void 0,
                            e
                    }
                    return e(i, t),
                        n(i, [{
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
                        i
                }(d)
                    , C = function(t) {
                    function i() {
                        for (var e, n = arguments.length, i = new Array(n), o = 0; o < n; o++)
                            i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i)) || this)._btnSureCheck = void 0,
                            e._txtIDCard = void 0,
                            e._txtName = void 0,
                            e
                    }
                    return e(i, t),
                        n(i, [{
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
                        i
                }(d)
                    , g = function(t) {
                    function i() {
                        for (var e, n = arguments.length, i = new Array(n), o = 0; o < n; o++)
                            i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i)) || this)._btnSureNoSafeCode = void 0,
                            e
                    }
                    return e(i, t),
                        n(i, [{
                            key: "btnSureNoSafeCode",
                            get: function() {
                                return this._btnSureNoSafeCode || (this._btnSureNoSafeCode = new d(this.getChildByName("btnSureNoSafeCode"))),
                                    this._btnSureNoSafeCode
                            }
                        }]),
                        i
                }(d)
                    , S = function(t) {
                    function i() {
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
                    return e(i, t),
                        n(i, [{
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new d(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "node1",
                            get: function() {
                                return this._node1 || (this._node1 = new l(this.getChildByName("node1"))),
                                    this._node1
                            }
                        }, {
                            key: "node2",
                            get: function() {
                                return this._node2 || (this._node2 = new C(this.getChildByName("node2"))),
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
                        i
                }(d);
                o._RF.pop()
            }
        }
    }
));
