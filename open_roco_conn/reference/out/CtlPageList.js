System.register("chunks:///_virtual/CtlPageList.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UICtlBase.ts", "./AgentNode.ts"], (function(t) {
        var e, i, s, n, a, _, m;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass,
                    s = t.assertThisInitialized
            }
                , function(t) {
                    n = t.cclegacy,
                        a = t.NodeEventType
                }
                , function(t) {
                    _ = t.UICtlBase
                }
                , function(t) {
                    m = t.AgentNode
                }
            ],
            execute: function() {
                n._RF.push({}, "29d77uBZslARYJjt1QwY/Na", "CtlPageList", void 0);
                t("CtlPageList", function(t) {
                    function n(e, i, n, _, m, r, l) {
                        var u;
                        void 0 === _ && (_ = !0),
                        void 0 === m && (m = 0),
                        void 0 === r && (r = ""),
                        void 0 === l && (l = null),
                            (u = t.call(this, e, m, r, l) || this).m_lstItem = void 0,
                            u.m_lstData = [],
                            u.m_curPageIndex = void 0,
                            u.m_pageSize = void 0,
                            u.m_totalPageNum = void 0,
                            u.m_hideBtnWhenEdge = void 0,
                            u.m_labelFormat = "%current/%total",
                            u._ui = void 0,
                            u._ui = new h(e.target),
                            u.m_hideBtnWhenEdge = _,
                            u._ui.m_btnPrev.on(a.TOUCH_END, u.onPrevClick, s(u)),
                            u._ui.m_btnNext.on(a.TOUCH_END, u.onNextClick, s(u)),
                            u.m_lstItem = [],
                            u.m_pageSize = i;
                        for (var o = 0; o < i; ++o) {
                            var c = new n(u._ui.getCtlItem(o),o);
                            u.m_lstItem.push(c)
                        }
                        return u
                    }
                    e(n, t);
                    var _ = n.prototype;
                    return _.setLabelFormat = function(t) {
                        void 0 === t && (t = "%current/%total"),
                            this.m_labelFormat = t
                    }
                        ,
                        _.dispose = function() {
                            this._ui.m_btnNext && this._ui.m_btnNext.off(a.TOUCH_END, this.onNextClick),
                            this._ui.m_btnPrev && this._ui.m_btnPrev.off(a.TOUCH_END, this.onPrevClick),
                                this.m_lstData = [],
                                this.m_lstItem = [],
                                t.prototype.dispose.call(this)
                        }
                        ,
                        _.setListData = function(t) {
                            this.m_lstData = t,
                                this.m_curPageIndex = 0,
                                this.m_totalPageNum = Math.ceil(this.m_lstData.length / this.m_pageSize),
                                this.updateView()
                        }
                        ,
                        _.getListData = function() {
                            return this.m_lstData
                        }
                        ,
                        _.onPrevClick = function(t) {
                            1 == this._ui.m_btnPrev.enableTag && (--this.m_curPageIndex,
                                this.updateView())
                        }
                        ,
                        _.onNextClick = function(t) {
                            1 == this._ui.m_btnNext.enableTag && (++this.m_curPageIndex,
                                this.updateView())
                        }
                        ,
                        _.updateView = function() {
                            if (this.m_hideBtnWhenEdge ? this.m_totalPageNum <= 1 ? (this._ui.m_btnPrev.visible = !1,
                                this._ui.m_btnNext.visible = !1) : this.m_curPageIndex <= 0 ? (this._ui.m_btnPrev.visible = !1,
                                this._ui.m_btnNext.visible = !0) : this.m_curPageIndex >= this.m_totalPageNum - 1 ? (this._ui.m_btnPrev.visible = !0,
                                this._ui.m_btnNext.visible = !1) : (this._ui.m_btnNext.visible = !0,
                                this._ui.m_btnPrev.visible = !0) : this.m_totalPageNum <= 1 ? (this.setGray(this._ui.m_btnPrev),
                                this.setGray(this._ui.m_btnNext)) : this.m_curPageIndex <= 0 ? (this.setGray(this._ui.m_btnPrev),
                                this.setGray(this._ui.m_btnNext, !1)) : this.m_curPageIndex >= this.m_totalPageNum - 1 ? (this.setGray(this._ui.m_btnPrev, !1),
                                this.setGray(this._ui.m_btnNext)) : (this.setGray(this._ui.m_btnNext, !1),
                                this.setGray(this._ui.m_btnPrev, !1)),
                            this.m_curPageIndex >= this.m_totalPageNum && (this.m_curPageIndex = this.m_totalPageNum - 1),
                            this.m_curPageIndex < 0 && (this.m_curPageIndex = 0),
                                this._ui.m_txtLabel) {
                                var t = this.m_labelFormat.replace("%current", (this.m_curPageIndex + 1).toString());
                                t = 0 == this.m_totalPageNum ? t.replace("%total", "1") : t.replace("%total", this.m_totalPageNum.toString()),
                                    this._ui.m_txtLabel.text = t
                            }
                            for (var e = this.m_curPageIndex * this.m_pageSize, i = 0; i < this.m_lstItem.length; ++i) {
                                var s = this.m_lstItem[i];
                                if (i + e < this.m_lstData.length) {
                                    var n = this.m_lstData[i + e];
                                    s.data = n,
                                        s.visible = !0
                                } else
                                    s.data = null,
                                        s.visible = !1
                            }
                        }
                        ,
                        _.setGray = function(t, e) {
                            void 0 === e && (e = !0),
                                e ? (t.grayscale = !0,
                                    t.enabled = !1,
                                    t.enableTag = !1) : (t.grayscale = !1,
                                    t.enabled = !0,
                                    t.enableTag = !0)
                        }
                        ,
                        i(n, [{
                            key: "currentPage",
                            get: function() {
                                return this.m_curPageIndex
                            },
                            set: function(t) {
                                this.m_curPageIndex = t,
                                    this.updateView()
                            }
                        }]),
                        n
                }(_));
                var h = function(t) {
                    function s() {
                        for (var e, i = arguments.length, s = new Array(i), n = 0; n < i; n++)
                            s[n] = arguments[n];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._m_btnPrev = void 0,
                            e._m_btnNext = void 0,
                            e._m_txtLabel = void 0,
                            e._ctlItems = [],
                            e
                    }
                    return e(s, t),
                        s.prototype.getCtlItem = function(t) {
                            return this._ctlItems[t] || (this._ctlItems[t] = new m(this.getChildByName("ctlItem_" + t))),
                                this._ctlItems[t]
                        }
                        ,
                        i(s, [{
                            key: "m_btnPrev",
                            get: function() {
                                return this._m_btnPrev || (this._m_btnPrev = new m(this.getChildByName("btnPrev"))),
                                    this._m_btnPrev
                            }
                        }, {
                            key: "m_btnNext",
                            get: function() {
                                return this._m_btnNext || (this._m_btnNext = new m(this.getChildByName("btnNext"))),
                                    this._m_btnNext
                            }
                        }, {
                            key: "m_txtLabel",
                            get: function() {
                                return this._m_txtLabel || (this._m_txtLabel = new m(this.getChildByName("txtLabel"))),
                                    this._m_txtLabel
                            }
                        }]),
                        s
                }(m);
                n._RF.pop()
            }
        }
    }
));
