System.register("chunks:///_virtual/HistoryPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C2.ts", "./RetInfo.ts", "./AgentNode.ts", "./CommonAPI.ts", "./CtlPageList.ts", "./UICtlBase.ts", "./HistoryListItem.ts"], (function(t) {
        var e, n, o, i, s, r, c, l, h, u, a;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    o = t.cclegacy
                }
                , function(t) {
                    i = t.__global
                }
                , function(t) {
                    s = t.PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C
                }
                , function(t) {
                    r = t.RetInfo
                }
                , function(t) {
                    c = t.AgentNode
                }
                , function(t) {
                    l = t.CommonAPI
                }
                , function(t) {
                    h = t.CtlPageList
                }
                , function(t) {
                    u = t.UICtlBase
                }
                , function(t) {
                    a = t.HistoryListItem
                }
            ],
            execute: function() {
                o._RF.push({}, "ca43dbW+ApL7KnnIdhMDJb+", "HistoryPanel", void 0);
                t("HistoryPanel", function(t) {
                    function n(e, n, o, i) {
                        var s;
                        void 0 === n && (n = 0),
                        void 0 === o && (o = ""),
                        void 0 === i && (i = null),
                            (s = t.call(this, e, n, o, i) || this)._ui = void 0,
                            s._historyList = void 0,
                            s.fType = 0,
                            s._ui = new d(e.target),
                            s._historyList = new h(s._ui.content,5,a,!1);
                        for (var r = [], c = 0; c < 5; c++)
                            r[r.length] = null;
                        return s._historyList.setListData(r),
                            s._ui.noRecordFlg.visible = !0,
                            s
                    }
                    e(n, t);
                    var o = n.prototype;
                    return o.dispose = function() {
                        t.prototype.dispose.call(this),
                        this._historyList && this._historyList.dispose(),
                            this._historyList = null
                    }
                        ,
                        o.setFtype = function(t) {
                            this.fType = t
                        }
                        ,
                        o.processFunc = function(t, e) {
                            if (this.fType = e,
                            t instanceof s) {
                                var n = t;
                                if (0 == n.retInfo.retCode) {
                                    for (var o = [], c = 0; c < n.recordList.length; c++) {
                                        var h = n.recordList[c];
                                        h.ftype == this.fType && o.push(h)
                                    }
                                    this._historyList.setListData(o),
                                        0 == o.length ? this._ui.noRecordFlg.visible = !0 : this._ui.noRecordFlg.visible = !1
                                } else
                                    i.showMsgBox(l.byteToString(n.retInfo.retMsg))
                            } else if (t instanceof r) {
                                var u = t;
                                0 != u.retCode && l.showAlert(l.byteToString(u.retMsg))
                            }
                        }
                        ,
                        o.update = function() {}
                        ,
                        n
                }(u));
                var d = function(t) {
                    function o() {
                        for (var e, n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                            o[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(o)) || this)._btnClose = void 0,
                            e._content = void 0,
                            e._noRecordFlg = void 0,
                            e._btnShowIntroduce = void 0,
                            e
                    }
                    return e(o, t),
                        n(o, [{
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new c(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "content",
                            get: function() {
                                return this._content || (this._content = new c(this.getChildByName("content"))),
                                    this._content
                            }
                        }, {
                            key: "noRecordFlg",
                            get: function() {
                                return this._noRecordFlg || (this._noRecordFlg = new c(this.getChildByName("noRecordFlg"))),
                                    this._noRecordFlg
                            }
                        }, {
                            key: "btnShowIntroduce",
                            get: function() {
                                return this._btnShowIntroduce || (this._btnShowIntroduce = new c(this.getChildByName("btnShowIntroduce"))),
                                    this._btnShowIntroduce
                            }
                        }]),
                        o
                }(c);
                o._RF.pop()
            }
        }
    }
));
