System.register("chunks:///_virtual/GuardianPetCtlFlipPageList.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./FilterFactory.ts", "./AgentNode.ts", "./GuardianPetUICtlBase.ts"], (function(t) {
        var e, i, a, s, n, r, m, l;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createForOfIteratorHelperLoose,
                    a = t.assertThisInitialized
            }
                , function(t) {
                    s = t.cclegacy,
                        n = t.NodeEventType
                }
                , function(t) {
                    r = t.FilterFactory
                }
                , function(t) {
                    m = t.AgentNode
                }
                , function(t) {
                    l = t.GuardianPetUICtlBase
                }
            ],
            execute: function() {
                s._RF.push({}, "f0635Bc2kxM87e1uH3tcQOQ", "GuardianPetCtlFlipPageList", void 0);
                t("GuardianPetCtlFlipPageList", function(t) {
                    function s(e, i, s, r, l, h, o) {
                        var _;
                        if (void 0 === r && (r = !0),
                        void 0 === l && (l = 0),
                        void 0 === h && (h = ""),
                        void 0 === o && (o = null),
                            (_ = t.call(this, e, l, h, o) || this).m_btnPrev = void 0,
                            _.m_btnNext = void 0,
                            _.m_lstItem = void 0,
                            _.m_txtLabel = void 0,
                            _.m_lstData = [],
                            _.m_curPageIndex = void 0,
                            _.m_pageSize = void 0,
                            _.m_totalPageNum = void 0,
                            _._selectedItem = void 0,
                            _.m_hideBtnWhenEdge = void 0,
                            _.m_curBaseAvatarID = void 0,
                            _.m_txtLabel = e.txtLabel,
                            _.m_hideBtnWhenEdge = r,
                            _.m_btnPrev = new m(e.getChildByName("btnPrev")),
                            _.m_btnPrev.visible = !1,
                            _.m_btnPrev.on(n.TOUCH_END, _.onPrevClick, a(_)),
                            _.m_btnNext = new m(e.getChildByName("btnNext")),
                            _.m_btnNext.visible = !1,
                            _.m_btnNext.on(n.TOUCH_END, _.onNextClick, a(_)),
                            !_.m_btnPrev)
                            throw new Error("资源规范缺少上一页按钮!");
                        if (!_.m_btnNext)
                            throw new Error("资源规范缺少下一页按钮!");
                        _.m_lstItem = [],
                            _.m_pageSize = i;
                        for (var u = 0; u < i; ++u) {
                            var d = new s(e.getChildByName("ctlItem" + u));
                            _.m_lstItem.push(d)
                        }
                        return _
                    }
                    e(s, t);
                    var l = s.prototype;
                    return l.dispose = function() {
                        this.m_btnNext && this.m_btnNext.off(n.TOUCH_END, this.onNextClick, this),
                        this.m_btnPrev && this.m_btnPrev.off(n.TOUCH_END, this.onPrevClick, this),
                            this.m_lstData = [],
                            this.m_lstItem = []
                    }
                        ,
                        l.setCurAvatarBaseId = function(t) {
                            var e;
                            this.m_curBaseAvatarID = t;
                            for (var a, s = i(this.m_lstData); !(a = s()).done; )
                                (e = a.value).isCurAvatar = e.baseId == this.m_curBaseAvatarID;
                            this.updateView()
                        }
                        ,
                        l.setListData = function(t) {
                            var e;
                            this.m_lstData = t,
                                this.m_curPageIndex = 0,
                                this.m_totalPageNum = Math.ceil(this.m_lstData.length / this.m_pageSize);
                            for (var a, s = i(this.m_lstData); !(a = s()).done; )
                                (e = a.value).isCurAvatar = e.baseId == this.m_curBaseAvatarID;
                            this.updateView()
                        }
                        ,
                        l.onPrevClick = function(t) {
                            --this.m_curPageIndex,
                                this.updateView()
                        }
                        ,
                        l.onNextClick = function(t) {
                            ++this.m_curPageIndex,
                                this.updateView()
                        }
                        ,
                        l.enableBtn = function(t) {
                            t.filters = [],
                                t.mouseEnabled = !0,
                                t.enabled = !0
                        }
                        ,
                        l.disableBtn = function(t) {
                            t.filters = [r.createGrayFilter()],
                                t.mouseEnabled = !1,
                                t.enabled = !1
                        }
                        ,
                        l.updateView = function() {
                            this.m_hideBtnWhenEdge && (this.m_totalPageNum <= 1 ? (this.disableBtn(this.m_btnPrev),
                                this.disableBtn(this.m_btnNext)) : this.m_curPageIndex <= 0 ? (this.disableBtn(this.m_btnPrev),
                                this.enableBtn(this.m_btnNext)) : this.m_curPageIndex >= this.m_totalPageNum - 1 ? (this.enableBtn(this.m_btnPrev),
                                this.disableBtn(this.m_btnNext)) : (this.enableBtn(this.m_btnNext),
                                this.enableBtn(this.m_btnPrev))),
                            this.m_curPageIndex >= this.m_totalPageNum && (this.m_curPageIndex = this.m_totalPageNum - 1),
                            this.m_curPageIndex < 0 && (this.m_curPageIndex = 0),
                            this.m_txtLabel && (this.m_txtLabel.text = this.m_curPageIndex + 1 + "/" + this.m_totalPageNum);
                            for (var t = this.m_curPageIndex * this.m_pageSize, e = 0; e < this.m_lstItem.length; ++e) {
                                var i = this.m_lstItem[e];
                                if (e + t < this.m_lstData.length) {
                                    var a = this.m_lstData[e + t];
                                    i.data = a,
                                        i.visible = !0
                                } else
                                    i.data = null,
                                        i.visible = !1
                            }
                        }
                        ,
                        s
                }(l));
                s._RF.pop()
            }
        }
    }
));
