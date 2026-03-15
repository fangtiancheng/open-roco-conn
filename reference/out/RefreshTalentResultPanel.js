System.register("chunks:///_virtual/RefreshTalentResultPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./WindowBase.ts", "./AgentNode.ts", "./ResManager.ts"], (function(t) {
        var e, i, h, s, a, n, r, d;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass,
                    h = t.assertThisInitialized
            }
                , function(t) {
                    s = t.cclegacy,
                        a = t.NodeEventType
                }
                , function(t) {
                    n = t.WindowBase
                }
                , function(t) {
                    r = t.AgentNode
                }
                , function(t) {
                    d = t.default
                }
            ],
            execute: function() {
                s._RF.push({}, "561fb5ymMhJy4Y+AcReVxyo", "RefreshTalentResultPanel", void 0);
                t("RefreshTalentResultPanel", function(t) {
                    function s(e, i) {
                        var s;
                        void 0 === e && (e = null),
                            (s = t.call(this) || this)._ui = void 0,
                            s._data = void 0;
                        var n = d.Instance.getPrefabByName("SpiritBag_1600/RefreshTalentResultPanelUI");
                        return s._ui = new o(n),
                            s._ui.okButton.buttonMode = !0,
                            s._ui.okButton.mouseChildren = !1,
                            s._ui.okButton.on(a.TOUCH_END, s.onOk, h(s)),
                            s._ui.closeBtn.buttonMode = !0,
                            s._ui.closeBtn.mouseChildren = !1,
                            s._ui.closeBtn.on(a.TOUCH_END, s.onOk, h(s)),
                            s._ui.qBtn.buttonMode = !0,
                            s._ui.qBtn.mouseChildren = !1,
                            s._ui.qBtn.on(a.TOUCH_END, s.onQ, h(s)),
                            s.addChild(s._ui.target),
                            s.initialize(e, null, null, s._ui.target, !0),
                            s.center(),
                            s.data = null,
                            s
                    }
                    e(s, t);
                    var n = s.prototype;
                    return n.onQ = function(t) {}
                        ,
                        n.dispose = function() {
                            this._ui.okButton.gotoAndStop(1),
                                this._ui.okButton.off(a.TOUCH_END, this.onOk, this),
                                this.data = null
                        }
                        ,
                        n.show = function() {
                            t.prototype.show.call(this)
                        }
                        ,
                        n.onOk = function(t) {
                            this._ui.okButton.gotoAndStop(1),
                                this.close()
                        }
                        ,
                        n.setArrowState = function(t, e, i) {
                            null != t && t.gotoAndStop(i >= e ? 1 : 2)
                        }
                        ,
                        n.setChangeArrowState = function(t, e, i) {
                            null != t && (e == i ? t.visible = !1 : (t.visible = !0,
                                t.gotoAndStop(i > e ? 1 : 2)))
                        }
                        ,
                        n.setChangeText = function(t, e, i) {
                            null != t && (t.text = Math.abs(i - e) + "")
                        }
                        ,
                        i(s, [{
                            key: "data",
                            set: function(t) {
                                this._data = t,
                                    null != this._data ? (this._ui.hpText.text = this._data.hpNew.toString(),
                                        this._ui.paText.text = this._data.paNew.toString(),
                                        this._ui.pdText.text = this._data.pdNew.toString(),
                                        this._ui.maText.text = this._data.maNew.toString(),
                                        this._ui.mdText.text = this._data.mdNew.toString(),
                                        this._ui.spText.text = this._data.spNew.toString(),
                                        this._ui.hptOldText.text = this._data.hptOld.toString(),
                                        this._ui.patOldText.text = this._data.patOld.toString(),
                                        this._ui.pdtOldText.text = this._data.pdtOld.toString(),
                                        this._ui.matOldText.text = this._data.matOld.toString(),
                                        this._ui.mdtOldText.text = this._data.mdtOld.toString(),
                                        this._ui.sptOldText.text = this._data.sptOld.toString(),
                                        this._ui.hptNewText.text = this._data.hptNew.toString(),
                                        this._ui.patNewText.text = this._data.patNew.toString(),
                                        this._ui.pdtNewText.text = this._data.pdtNew.toString(),
                                        this._ui.matNewText.text = this._data.matNew.toString(),
                                        this._ui.mdtNewText.text = this._data.mdtNew.toString(),
                                        this._ui.sptNewText.text = this._data.sptNew.toString(),
                                        this.setArrowState(this._ui.hptArrow, this._data.hptOld, this._data.hptNew),
                                        this.setArrowState(this._ui.patArrow, this._data.patOld, this._data.patNew),
                                        this.setArrowState(this._ui.pdtArrow, this._data.pdtOld, this._data.pdtNew),
                                        this.setArrowState(this._ui.matArrow, this._data.matOld, this._data.matNew),
                                        this.setArrowState(this._ui.mdtArrow, this._data.mdtOld, this._data.mdtNew),
                                        this.setArrowState(this._ui.sptArrow, this._data.sptOld, this._data.sptNew),
                                        this.setChangeArrowState(this._ui.hptChangeArrow, this._data.hptOld, this._data.hptNew),
                                        this.setChangeArrowState(this._ui.patChangeArrow, this._data.patOld, this._data.patNew),
                                        this.setChangeArrowState(this._ui.pdtChangeArrow, this._data.pdtOld, this._data.pdtNew),
                                        this.setChangeArrowState(this._ui.matChangeArrow, this._data.matOld, this._data.matNew),
                                        this.setChangeArrowState(this._ui.mdtChangeArrow, this._data.mdtOld, this._data.mdtNew),
                                        this.setChangeArrowState(this._ui.sptChangeArrow, this._data.sptOld, this._data.sptNew),
                                        this.setChangeText(this._ui.hptChangeText, this._data.hptOld, this._data.hptNew),
                                        this.setChangeText(this._ui.patChangeText, this._data.patOld, this._data.patNew),
                                        this.setChangeText(this._ui.pdtChangeText, this._data.pdtOld, this._data.pdtNew),
                                        this.setChangeText(this._ui.matChangeText, this._data.matOld, this._data.matNew),
                                        this.setChangeText(this._ui.mdtChangeText, this._data.mdtOld, this._data.mdtNew),
                                        this.setChangeText(this._ui.sptChangeText, this._data.sptOld, this._data.sptNew)) : (this._ui.hpText.text = "",
                                        this._ui.paText.text = "",
                                        this._ui.pdText.text = "",
                                        this._ui.maText.text = "",
                                        this._ui.mdText.text = "",
                                        this._ui.spText.text = "",
                                        this._ui.hptOldText.text = "",
                                        this._ui.patOldText.text = "",
                                        this._ui.pdtOldText.text = "",
                                        this._ui.matOldText.text = "",
                                        this._ui.mdtOldText.text = "",
                                        this._ui.sptOldText.text = "",
                                        this._ui.hptNewText.text = "",
                                        this._ui.patNewText.text = "",
                                        this._ui.pdtNewText.text = "",
                                        this._ui.matNewText.text = "",
                                        this._ui.mdtNewText.text = "",
                                        this._ui.sptNewText.text = "",
                                        this.setArrowState(this._ui.hptArrow, 0, 0),
                                        this.setArrowState(this._ui.patArrow, 0, 0),
                                        this.setArrowState(this._ui.pdtArrow, 0, 0),
                                        this.setArrowState(this._ui.matArrow, 0, 0),
                                        this.setArrowState(this._ui.mdtArrow, 0, 0),
                                        this.setArrowState(this._ui.sptArrow, 0, 0),
                                        this.setChangeArrowState(this._ui.hptChangeArrow, 0, 0),
                                        this.setChangeArrowState(this._ui.patChangeArrow, 0, 0),
                                        this.setChangeArrowState(this._ui.pdtChangeArrow, 0, 0),
                                        this.setChangeArrowState(this._ui.matChangeArrow, 0, 0),
                                        this.setChangeArrowState(this._ui.mdtChangeArrow, 0, 0),
                                        this.setChangeArrowState(this._ui.sptChangeArrow, 0, 0),
                                        this.setChangeText(this._ui.hptChangeText, 0, 0),
                                        this.setChangeText(this._ui.patChangeText, 0, 0),
                                        this.setChangeText(this._ui.pdtChangeText, 0, 0),
                                        this.setChangeText(this._ui.matChangeText, 0, 0),
                                        this.setChangeText(this._ui.mdtChangeText, 0, 0),
                                        this.setChangeText(this._ui.sptChangeText, 0, 0))
                            }
                        }]),
                        s
                }(n));
                var o = t("RefreshTalentResultPanelUI", function(t) {
                    function h() {
                        for (var e, i = arguments.length, h = new Array(i), s = 0; s < i; s++)
                            h[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(h)) || this)._okButton = void 0,
                            e._closeBtn = void 0,
                            e._qBtn = void 0,
                            e._hpText = void 0,
                            e._paText = void 0,
                            e._pdText = void 0,
                            e._maText = void 0,
                            e._mdText = void 0,
                            e._spText = void 0,
                            e._hptOldText = void 0,
                            e._patOldText = void 0,
                            e._pdtOldText = void 0,
                            e._matOldText = void 0,
                            e._mdtOldText = void 0,
                            e._sptOldText = void 0,
                            e._hptNewText = void 0,
                            e._patNewText = void 0,
                            e._pdtNewText = void 0,
                            e._matNewText = void 0,
                            e._mdtNewText = void 0,
                            e._sptNewText = void 0,
                            e._hptArrow = void 0,
                            e._patArrow = void 0,
                            e._pdtArrow = void 0,
                            e._matArrow = void 0,
                            e._mdtArrow = void 0,
                            e._sptArrow = void 0,
                            e._hptChangeArrow = void 0,
                            e._patChangeArrow = void 0,
                            e._pdtChangeArrow = void 0,
                            e._matChangeArrow = void 0,
                            e._mdtChangeArrow = void 0,
                            e._sptChangeArrow = void 0,
                            e._hptChangeText = void 0,
                            e._patChangeText = void 0,
                            e._pdtChangeText = void 0,
                            e._matChangeText = void 0,
                            e._mdtChangeText = void 0,
                            e._sptChangeText = void 0,
                            e
                    }
                    return e(h, t),
                        i(h, [{
                            key: "okButton",
                            get: function() {
                                return this._okButton || (this._okButton = new r(this.getChildByName("okButton"))),
                                    this._okButton
                            }
                        }, {
                            key: "closeBtn",
                            get: function() {
                                return this._closeBtn || (this._closeBtn = new r(this.getChildByName("closeBtn"))),
                                    this._closeBtn
                            }
                        }, {
                            key: "qBtn",
                            get: function() {
                                return this._qBtn || (this._qBtn = new r(this.getChildByName("qBtn"))),
                                    this._qBtn
                            }
                        }, {
                            key: "hpText",
                            get: function() {
                                return this._hpText || (this._hpText = new r(this.getChildByName("hpText"))),
                                    this._hpText
                            }
                        }, {
                            key: "paText",
                            get: function() {
                                return this._paText || (this._paText = new r(this.getChildByName("paText"))),
                                    this._paText
                            }
                        }, {
                            key: "pdText",
                            get: function() {
                                return this._pdText || (this._pdText = new r(this.getChildByName("pdText"))),
                                    this._pdText
                            }
                        }, {
                            key: "maText",
                            get: function() {
                                return this._maText || (this._maText = new r(this.getChildByName("maText"))),
                                    this._maText
                            }
                        }, {
                            key: "mdText",
                            get: function() {
                                return this._mdText || (this._mdText = new r(this.getChildByName("mdText"))),
                                    this._mdText
                            }
                        }, {
                            key: "spText",
                            get: function() {
                                return this._spText || (this._spText = new r(this.getChildByName("spText"))),
                                    this._spText
                            }
                        }, {
                            key: "hptOldText",
                            get: function() {
                                return this._hptOldText || (this._hptOldText = new r(this.getChildByName("hptOldText"))),
                                    this._hptOldText
                            }
                        }, {
                            key: "patOldText",
                            get: function() {
                                return this._patOldText || (this._patOldText = new r(this.getChildByName("patOldText"))),
                                    this._patOldText
                            }
                        }, {
                            key: "pdtOldText",
                            get: function() {
                                return this._pdtOldText || (this._pdtOldText = new r(this.getChildByName("pdtOldText"))),
                                    this._pdtOldText
                            }
                        }, {
                            key: "matOldText",
                            get: function() {
                                return this._matOldText || (this._matOldText = new r(this.getChildByName("matOldText"))),
                                    this._matOldText
                            }
                        }, {
                            key: "mdtOldText",
                            get: function() {
                                return this._mdtOldText || (this._mdtOldText = new r(this.getChildByName("mdtOldText"))),
                                    this._mdtOldText
                            }
                        }, {
                            key: "sptOldText",
                            get: function() {
                                return this._sptOldText || (this._sptOldText = new r(this.getChildByName("sptOldText"))),
                                    this._sptOldText
                            }
                        }, {
                            key: "hptNewText",
                            get: function() {
                                return this._hptNewText || (this._hptNewText = new r(this.getChildByName("hptNewText"))),
                                    this._hptNewText
                            }
                        }, {
                            key: "patNewText",
                            get: function() {
                                return this._patNewText || (this._patNewText = new r(this.getChildByName("patNewText"))),
                                    this._patNewText
                            }
                        }, {
                            key: "pdtNewText",
                            get: function() {
                                return this._pdtNewText || (this._pdtNewText = new r(this.getChildByName("pdtNewText"))),
                                    this._pdtNewText
                            }
                        }, {
                            key: "matNewText",
                            get: function() {
                                return this._matNewText || (this._matNewText = new r(this.getChildByName("matNewText"))),
                                    this._matNewText
                            }
                        }, {
                            key: "mdtNewText",
                            get: function() {
                                return this._mdtNewText || (this._mdtNewText = new r(this.getChildByName("mdtNewText"))),
                                    this._mdtNewText
                            }
                        }, {
                            key: "sptNewText",
                            get: function() {
                                return this._sptNewText || (this._sptNewText = new r(this.getChildByName("sptNewText"))),
                                    this._sptNewText
                            }
                        }, {
                            key: "hptArrow",
                            get: function() {
                                return this._hptArrow || (this._hptArrow = new r(this.getChildByName("hptArrow"))),
                                    this._hptArrow
                            }
                        }, {
                            key: "patArrow",
                            get: function() {
                                return this._patArrow || (this._patArrow = new r(this.getChildByName("patArrow"))),
                                    this._patArrow
                            }
                        }, {
                            key: "pdtArrow",
                            get: function() {
                                return this._pdtArrow || (this._pdtArrow = new r(this.getChildByName("pdtArrow"))),
                                    this._pdtArrow
                            }
                        }, {
                            key: "matArrow",
                            get: function() {
                                return this._matArrow || (this._matArrow = new r(this.getChildByName("matArrow"))),
                                    this._matArrow
                            }
                        }, {
                            key: "mdtArrow",
                            get: function() {
                                return this._mdtArrow || (this._mdtArrow = new r(this.getChildByName("mdtArrow"))),
                                    this._mdtArrow
                            }
                        }, {
                            key: "sptArrow",
                            get: function() {
                                return this._sptArrow || (this._sptArrow = new r(this.getChildByName("sptArrow"))),
                                    this._sptArrow
                            }
                        }, {
                            key: "hptChangeArrow",
                            get: function() {
                                return this._hptChangeArrow || (this._hptChangeArrow = new r(this.getChildByName("hptChangeArrow"))),
                                    this._hptChangeArrow
                            }
                        }, {
                            key: "patChangeArrow",
                            get: function() {
                                return this._patChangeArrow || (this._patChangeArrow = new r(this.getChildByName("patChangeArrow"))),
                                    this._patChangeArrow
                            }
                        }, {
                            key: "pdtChangeArrow",
                            get: function() {
                                return this._pdtChangeArrow || (this._pdtChangeArrow = new r(this.getChildByName("pdtChangeArrow"))),
                                    this._pdtChangeArrow
                            }
                        }, {
                            key: "matChangeArrow",
                            get: function() {
                                return this._matChangeArrow || (this._matChangeArrow = new r(this.getChildByName("matChangeArrow"))),
                                    this._matChangeArrow
                            }
                        }, {
                            key: "mdtChangeArrow",
                            get: function() {
                                return this._mdtChangeArrow || (this._mdtChangeArrow = new r(this.getChildByName("mdtChangeArrow"))),
                                    this._mdtChangeArrow
                            }
                        }, {
                            key: "sptChangeArrow",
                            get: function() {
                                return this._sptChangeArrow || (this._sptChangeArrow = new r(this.getChildByName("sptChangeArrow"))),
                                    this._sptChangeArrow
                            }
                        }, {
                            key: "hptChangeText",
                            get: function() {
                                return this._hptChangeText || (this._hptChangeText = new r(this.getChildByName("hptChangeText"))),
                                    this._hptChangeText
                            }
                        }, {
                            key: "patChangeText",
                            get: function() {
                                return this._patChangeText || (this._patChangeText = new r(this.getChildByName("patChangeText"))),
                                    this._patChangeText
                            }
                        }, {
                            key: "pdtChangeText",
                            get: function() {
                                return this._pdtChangeText || (this._pdtChangeText = new r(this.getChildByName("pdtChangeText"))),
                                    this._pdtChangeText
                            }
                        }, {
                            key: "matChangeText",
                            get: function() {
                                return this._matChangeText || (this._matChangeText = new r(this.getChildByName("matChangeText"))),
                                    this._matChangeText
                            }
                        }, {
                            key: "mdtChangeText",
                            get: function() {
                                return this._mdtChangeText || (this._mdtChangeText = new r(this.getChildByName("mdtChangeText"))),
                                    this._mdtChangeText
                            }
                        }, {
                            key: "sptChangeText",
                            get: function() {
                                return this._sptChangeText || (this._sptChangeText = new r(this.getChildByName("sptChangeText"))),
                                    this._sptChangeText
                            }
                        }]),
                        h
                }(r));
                s._RF.pop()
            }
        }
    }
));
