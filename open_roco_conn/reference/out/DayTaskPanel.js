System.register("chunks:///_virtual/DayTaskPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UICtlBase.ts", "./AgentNode.ts"], (function(t) {
        var i, s, e, n, l;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    s = t.createClass
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    n = t.UICtlBase
                }
                , function(t) {
                    l = t.AgentNode
                }
            ],
            execute: function() {
                e._RF.push({}, "305123tvfVJz5q0AK7vusYW", "DayTaskPanel", void 0);
                t("DayTaskPanel", function(t) {
                    function s(i, s, e, n) {
                        var l;
                        return void 0 === s && (s = 0),
                        void 0 === e && (e = ""),
                        void 0 === n && (n = null),
                            (l = t.call(this, i, s, e, n) || this)._ui = void 0,
                            l._ui = new a(i.target),
                            l
                    }
                    i(s, t);
                    var e = s.prototype;
                    return e.dispose = function() {
                        t.prototype.dispose.call(this)
                    }
                        ,
                        e.update = function() {}
                        ,
                        s
                }(n));
                var a = function(t) {
                    function e() {
                        for (var i, s = arguments.length, e = new Array(s), n = 0; n < s; n++)
                            e[n] = arguments[n];
                        return (i = t.call.apply(t, [this].concat(e)) || this)._btnClose = void 0,
                            i._mcFlg0 = void 0,
                            i._mcFlg1 = void 0,
                            i._txtMission0 = void 0,
                            i._txtMission1 = void 0,
                            i._ctlTask0 = void 0,
                            i._ctlTask1 = void 0,
                            i._ctlTask0_img_flg = void 0,
                            i._ctlTask1_img_flg = void 0,
                            i._ctlTask0_txtName = void 0,
                            i._ctlTask1_txtName = void 0,
                            i._ctlTask0_btnGiveup = void 0,
                            i._ctlTask1_btnGiveup = void 0,
                            i
                    }
                    return i(e, t),
                        s(e, [{
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new l(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "mcFlg0",
                            get: function() {
                                return this._mcFlg0 || (this._mcFlg0 = new l(this.getChildByName("mcFlg0"))),
                                    this._mcFlg0
                            }
                        }, {
                            key: "mcFlg1",
                            get: function() {
                                return this._mcFlg1 || (this._mcFlg1 = new l(this.getChildByName("mcFlg1"))),
                                    this._mcFlg1
                            }
                        }, {
                            key: "txtMission0",
                            get: function() {
                                return this._txtMission0 || (this._txtMission0 = new l(this.getChildByName("txtMission0"))),
                                    this._txtMission0
                            }
                        }, {
                            key: "txtMission1",
                            get: function() {
                                return this._txtMission1 || (this._txtMission1 = new l(this.getChildByName("txtMission1"))),
                                    this._txtMission1
                            }
                        }, {
                            key: "ctlTask0",
                            get: function() {
                                return this._ctlTask0 || (this._ctlTask0 = new l(this.getChildByName("ctlTask0"))),
                                    this._ctlTask0
                            }
                        }, {
                            key: "ctlTask1",
                            get: function() {
                                return this._ctlTask1 || (this._ctlTask1 = new l(this.getChildByName("ctlTask1"))),
                                    this._ctlTask1
                            }
                        }, {
                            key: "ctlTask0_img_flg",
                            get: function() {
                                return this._ctlTask1_img_flg || (this._ctlTask0_img_flg = this.getChildByName("ctlTask0").getChildByName("img_flg")),
                                    this._ctlTask0_img_flg
                            }
                        }, {
                            key: "ctlTask1_img_flg",
                            get: function() {
                                return this._ctlTask1_img_flg || (this._ctlTask1_img_flg = this.getChildByName("ctlTask1").getChildByName("img_flg")),
                                    this._ctlTask1_img_flg
                            }
                        }, {
                            key: "ctlTask0_txtName",
                            get: function() {
                                return this._ctlTask0_txtName || (this._ctlTask0_txtName = new l(this.getChildByName("ctlTask0").getChildByName("txtName"))),
                                    this._ctlTask0_txtName
                            }
                        }, {
                            key: "ctlTask1_txtName",
                            get: function() {
                                return this._ctlTask1_txtName || (this._ctlTask1_txtName = new l(this.getChildByName("ctlTask1").getChildByName("txtName"))),
                                    this._ctlTask1_txtName
                            }
                        }, {
                            key: "ctlTask0_btnGiveup",
                            get: function() {
                                return this._ctlTask0_btnGiveup || (this._ctlTask0_btnGiveup = new l(this.getChildByName("ctlTask0").getChildByName("btnGiveup"))),
                                    this._ctlTask0_btnGiveup
                            }
                        }, {
                            key: "ctlTask1_btnGiveup",
                            get: function() {
                                return this._ctlTask1_btnGiveup || (this._ctlTask1_btnGiveup = new l(this.getChildByName("ctlTask1").getChildByName("btnGiveup"))),
                                    this._ctlTask1_btnGiveup
                            }
                        }]),
                        e
                }(l);
                e._RF.pop()
            }
        }
    }
));
