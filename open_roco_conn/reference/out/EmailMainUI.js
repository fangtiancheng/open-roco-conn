System.register("chunks:///_virtual/EmailMainUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./EmailMessage.ts", "./EmailContentItem.ts", "./EmailListItem.ts", "./EmailQueryListProtocol.ts", "./EmailDelProtocol.ts", "./global.ts", "./EmailOpenProtocol.ts", "./CFunction.ts", "./WindowMode.ts", "./EmailGetAttachmentProtocol.ts", "./Constants.ts", "./StringUtil2.ts", "./EmailIconEntrance.ts", "./NotificationCenter.ts", "./NotifyDef.ts", "./Icon.ts", "./UIScrollViewWithBar.ts", "./WindowResult.ts"], (function(t) {
        var e, n, i, l, o, a, s, c, r, u, h, d, f, m, M, g, I, C, p, E, _, b, S, v, D, O, N, R, P, y, A, w, T, U, L, B, k;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    n = t.inheritsLoose,
                    i = t.initializerDefineProperty,
                    l = t.assertThisInitialized,
                    o = t.createForOfIteratorHelperLoose
            }
                , function(t) {
                    a = t.cclegacy,
                        s = t._decorator,
                        c = t.Button,
                        r = t.Label,
                        u = t.ScrollView,
                        h = t.Sprite,
                        d = t.Prefab,
                        f = t.NodeEventType,
                        m = t.instantiate
                }
                , function(t) {
                    M = t.GameUI
                }
                , function(t) {
                    g = t.EmailMessage
                }
                , function(t) {
                    I = t.EmailContentItem
                }
                , function(t) {
                    C = t.EmailListItem
                }
                , function(t) {
                    p = t.EmailQueryListProtocol,
                        E = t.EmailQueryListReq
                }
                , function(t) {
                    _ = t.EmailDelProtocol,
                        b = t.EmailDelReq
                }
                , function(t) {
                    S = t.__global
                }
                , function(t) {
                    v = t.EmailOpenProtocol,
                        D = t.EmailOpenReq
                }
                , function(t) {
                    O = t.CFunction
                }
                , function(t) {
                    N = t.WindowMode
                }
                , function(t) {
                    R = t.EmailGetAttachmentProtocol,
                        P = t.EmailGetAttachmentReq
                }
                , function(t) {
                    y = t.Constants
                }
                , function(t) {
                    A = t.StringUtil
                }
                , function(t) {
                    w = t.EmailIconEntrance
                }
                , function(t) {
                    T = t.NotificationCenter
                }
                , function(t) {
                    U = t.NotifyDef
                }
                , function(t) {
                    L = t.IconType
                }
                , function(t) {
                    B = t.UIScrollViewWithBar
                }
                , function(t) {
                    k = t.WindowResult
                }
            ],
            execute: function() {
                var x, F, z, H, X, q, G, Q, W, Z, V, K, j, J, Y, $, tt, et, nt, it, lt, ot, at, st, ct;
                a._RF.push({}, "9ddaajx7RxOmqefN/avBB3e", "EmailMainUI", void 0);
                var rt = function(t) {
                    return t[t.ROCO_SHELL = 0] = "ROCO_SHELL",
                        t[t.ROCO_DIAMOND = 1] = "ROCO_DIAMOND",
                        t[t.PROPS = 2] = "PROPS",
                        t[t.FURNITURE = 3] = "FURNITURE",
                        t[t.SPIRITS = 4] = "SPIRITS",
                        t[t.EXP = 5] = "EXP",
                        t[t.SPIRIT_EQUIPMENT = 6] = "SPIRIT_EQUIPMENT",
                        t[t.DAZZLE_DRESS = 7] = "DAZZLE_DRESS",
                        t
                }(rt || {})
                    , ut = s.ccclass
                    , ht = s.property;
                t("EmailMainUI", (x = ht(c),
                    F = ht(r),
                    z = ht(c),
                    H = ht(c),
                    X = ht(c),
                    q = ht(u),
                    G = ht(I),
                    Q = ht(h),
                    W = ht(d),
                    Z = ht(B),
                    V = ht(r),
                ut(((ct = function(t) {
                    function e() {
                        for (var e, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
                            o[a] = arguments[a];
                        return e = t.call.apply(t, [this].concat(o)) || this,
                            i(e, "btnClose", J, l(e)),
                            i(e, "lblCount", Y, l(e)),
                            i(e, "btnMultiSelect", $, l(e)),
                            i(e, "btnConfirmDelete", tt, l(e)),
                            i(e, "btnCancelMultiSelect", et, l(e)),
                            i(e, "list", nt, l(e)),
                            i(e, "content", it, l(e)),
                            i(e, "noMail", lt, l(e)),
                            i(e, "listItemDemo", ot, l(e)),
                            i(e, "scrollViewWithBar", at, l(e)),
                            i(e, "lblMaxCountTip", st, l(e)),
                            e._selectedMail = void 0,
                            e._mailDetails = new Map,
                            e._attachments = [],
                            e._mailRspList = null,
                            e._isEnableMultiSelect = !1,
                            e._isEnableDelete = !1,
                            e
                    }
                    n(e, t);
                    var a = e.prototype;
                    return a.onLoad = function() {
                        this.list.content.removeAllChildren(),
                            this.noMail.node.active = !0,
                            this.content.node.active = !1,
                            this.btnClose.node.on(f.TOUCH_END, this.onCloseBtn, this),
                            this.btnMultiSelect.node.on(f.TOUCH_END, this.onMultiSelectBtn, this),
                            this.btnConfirmDelete.node.on(f.TOUCH_END, this.onConfirmDeleteBtn, this),
                            this.btnCancelMultiSelect.node.on(f.TOUCH_END, this.onCancelMultiSelectBtn, this),
                            this.content.setDeleteCallback(this.onDeleteOneMail.bind(this)),
                            this.content.setReceiveOneCallback(this.onReceiveOneMail.bind(this)),
                            this.content.setReceiveAllCallback(this.onReceiveAllMail.bind(this)),
                            this.lblMaxCountTip.string = "最多可保留" + e.MAX_EMAIL_COUNT + "封邮件，请及时清理，防止丢失"
                    }
                        ,
                        a.onDeleteOneMail = function(t, n) {
                            var i = this;
                            void 0 === n && (n = !0),
                                console.log("删除邮件", t);
                            var l = this.getPropocol(_)
                                , o = new b;
                            o.data.serialNum.push(this._selectedMail.data.serialNum);
                            var a = function() {
                                var t = i.list.content.children.indexOf(i._selectedMail.node);
                                i._mailDetails.delete(i._selectedMail.data.serialNum),
                                    i._selectedMail.node.removeFromParent();
                                var n = i.list.content.children;
                                if (i.lblCount.string = "邮件数量：" + n.length + "/" + e.MAX_EMAIL_COUNT,
                                n.length > 0) {
                                    var l = n[Math.min(t, n.length - 1)].getComponent(C);
                                    i._selectedMail = l,
                                        l.SelectedEmail = !0,
                                        i._mailDetails.has(l.data.serialNum) ? i.showMailDetail(i._mailDetails.get(l.data.serialNum)) : i.reqOpenMail(l.data.serialNum)
                                } else
                                    i._selectedMail = null,
                                        i.content.node.active = !1,
                                        i.noMail.node.active = !0
                            };
                            n ? l.send(o, (function(t) {
                                    if (console.log("删除邮件结果", t),
                                    0 != t.data.retInfo.retCode) {
                                        var e = A.getUtf8String(t.data.retInfo.retMsg);
                                        return console.log("onDeleteOneMail error = " + t.code + "  msg = " + e),
                                            void S.showMsgBox(e)
                                    }
                                    a()
                                }
                            )) : a()
                        }
                        ,
                        a.onDeleteMultiMail = function() {
                            var t = this;
                            console.log("批量删除邮件");
                            var n = this.list.content.getComponentsInChildren(C).filter((function(t) {
                                    return t.IsChecked
                                }
                            ));
                            if (console.log("选中的邮件", n),
                            0 != n.length) {
                                var i = new O((function() {
                                        var i = t.getPropocol(_)
                                            , l = new b;
                                        l.data.serialNum = n.map((function(t) {
                                                return t.data.serialNum
                                            }
                                        )),
                                            i.send(l, (function(i) {
                                                    if (console.log("删除邮件结果", i),
                                                    0 != i.data.retInfo.retCode) {
                                                        var l = A.getUtf8String(i.data.retInfo.retMsg);
                                                        return console.log("onDeleteMultiMail error = " + i.code + "  msg = " + l),
                                                            void S.showMsgBox(l)
                                                    }
                                                    console.log("删除邮件成功");
                                                    var o = n[n.length - 1].data.sendTime;
                                                    n.forEach((function(e) {
                                                            t._mailDetails.delete(e.data.serialNum)
                                                        }
                                                    )),
                                                        n.forEach((function(t) {
                                                                t.node.removeFromParent()
                                                            }
                                                        )),
                                                        t.lblCount.string = "邮件数量：" + t.list.content.children.length + "/" + e.MAX_EMAIL_COUNT;
                                                    var a = t.list.content.getComponentsInChildren(C).find((function(t) {
                                                            return t.data.sendTime < o
                                                        }
                                                    ));
                                                    a ? (t._selectedMail = a,
                                                        a.SelectedEmail = !0) : t.selectedFirst()
                                                }
                                            ))
                                    }
                                ),this)
                                    , l = new O((function(t) {
                                        switch (t) {
                                            case k.OK:
                                                i && i.call()
                                        }
                                    }
                                ),this)
                                    , o = "确定删除被选中的" + n.length + "封邮件吗?\r\n(未领取的奖励将一同被删除哦!)";
                                S.showMsgBox(o, N.OK_CANCEL, l)
                            } else
                                console.log("没有选中的邮件")
                        }
                        ,
                        a.onReceiveOneMail = function(t, e) {
                            var n = this;
                            console.log("领取单个附件", t, e);
                            var i = this.getPropocol(R)
                                , l = new P;
                            l.data.serialNum = t.baseInfo.serialNum,
                                l.data.attachId = e,
                                i.send(l, (function(i) {
                                        if (console.log("领取单个附件结果", i),
                                        0 != i.data.retInfo.retCode) {
                                            var l = A.getUtf8String(i.data.retInfo.retMsg);
                                            return console.log("onReceiveOneMail error = " + i.code + "  msg = " + l),
                                                void S.showMsgBox(l)
                                        }
                                        console.log("领取单个附件成功"),
                                            t.attach[e].state = 1,
                                            n.content.data = t;
                                        var o = t.attach.find((function(t) {
                                                return t.serialNum == e
                                            }
                                        ));
                                        n.showAttachmentGetResult(o, !1),
                                        o.type != L.ROCO_SHELL && o.type != L.ROCO_DIAMOND || T.sendNotification(U.MAIN_UI_UPDATE_DIAMOND),
                                        t.attach.every((function(t) {
                                                return 1 == t.state
                                            }
                                        )) && n.onDeleteOneMail(t, !1)
                                    }
                                ))
                        }
                        ,
                        a.onReceiveAllMail = function(t) {
                            var e = this;
                            console.log("领取所有附件", t);
                            var n = t.attach.filter((function(t) {
                                    return 0 == t.state
                                }
                            ));
                            n.length > 0 && function i(l) {
                                if (l >= n.length)
                                    e.onDeleteOneMail(t, !1);
                                else {
                                    var o = n[l]
                                        , a = e.getPropocol(R)
                                        , s = new P;
                                    s.data.serialNum = t.baseInfo.serialNum,
                                        s.data.attachId = o.serialNum,
                                        a.send(s, (function(n) {
                                                if (0 != n.data.retInfo.retCode) {
                                                    var a = A.getUtf8String(n.data.retInfo.retMsg);
                                                    return console.log("onReceiveOneMail error = " + n.code + "  msg = " + a),
                                                        void S.showMsgBox(a)
                                                }
                                                o.state = 1,
                                                    e.content.data = t,
                                                    e.showAttachmentGetResult(o, !1),
                                                    i(l + 1),
                                                o.type != L.ROCO_SHELL && o.type != L.ROCO_DIAMOND || T.sendNotification(U.MAIN_UI_UPDATE_DIAMOND)
                                            }
                                        ))
                                }
                            }(0),
                                T.sendNotification(U.MAIN_UI_UPDATE_DIAMOND)
                        }
                        ,
                        a.showNextAttachment = function() {
                            var t = this;
                            if (0 !== this._attachments.length) {
                                var e = this._attachments.findIndex((function(t) {
                                        return t.type === rt.SPIRITS
                                    }
                                ));
                                if (e >= 0) {
                                    var n = this._attachments.splice(e, 1)[0]
                                        , i = S.SysAPI.getGDataAPI().getDataProxy(y.SPIRIT_DATA).select(n.id);
                                    if (i)
                                        return void S.showMsgBox("恭喜你获得了" + i.name + "!", N.OK, new O((function() {
                                                t.showNextAttachment()
                                            }
                                        ),this))
                                }
                                var l = this._attachments.filter((function(t) {
                                        return t.type !== rt.SPIRITS && t.type !== rt.EXP
                                    }
                                ));
                                if (this._attachments = this._attachments.filter((function(t) {
                                        return t.type === rt.SPIRITS || t.type === rt.EXP
                                    }
                                )),
                                l.length > 0) {
                                    for (var a, s = [], c = o(l); !(a = c()).done; ) {
                                        var r = a.value
                                            , u = {};
                                        switch (u.count = r.count,
                                            r.type) {
                                            case rt.ROCO_SHELL:
                                            case rt.ROCO_DIAMOND:
                                            case rt.PROPS:
                                            case rt.FURNITURE:
                                                u.id = r.id;
                                                break;
                                            case rt.SPIRIT_EQUIPMENT:
                                                u.equipItemId = r.id;
                                                break;
                                            case rt.DAZZLE_DRESS:
                                                u.id = r.id,
                                                    u.type = 7
                                        }
                                        s.push(u)
                                    }
                                    s.length > 0 && S.showItemPanel(s, (function() {
                                            t._attachments.length > 0 && t.showNextAttachment()
                                        }
                                    ))
                                } else
                                    this._attachments.length > 0 && (this._attachments = this._attachments.filter((function(t) {
                                            return t.type !== rt.EXP
                                        }
                                    )),
                                    this._attachments.length > 0 && this.showNextAttachment())
                            }
                        }
                        ,
                        a.showAttachmentGetResult = function(t, e) {
                            if (t && -1 !== t.type) {
                                var n = {};
                                switch (n.count = t.count,
                                    t.type) {
                                    case rt.ROCO_SHELL:
                                    case rt.ROCO_DIAMOND:
                                    case rt.PROPS:
                                    case rt.FURNITURE:
                                    case rt.SPIRITS:
                                        n.id = t.id;
                                        break;
                                    case rt.SPIRIT_EQUIPMENT:
                                        n.equipItemId = t.id;
                                        break;
                                    case rt.DAZZLE_DRESS:
                                        n.id = t.id,
                                            n.type = 7;
                                        break;
                                    case rt.EXP:
                                        n.id = t.id,
                                            n.type = t.type
                                }
                                S.showItemPanelBySingle([n])
                            }
                        }
                        ,
                        a.onCloseBtn = function() {
                            this.notify(g.CLOSE_MAIN_VIEW)
                        }
                        ,
                        a.refreshAwakePage = function() {
                            var t = this
                                , e = this.getPropocol(p)
                                , n = new E;
                            e.send(n, (function(e) {
                                    0 == e.data.retInfo.retCode ? (t._mailRspList = e,
                                        console.log("EmailQueryListProtocol success"),
                                        t.updateMailList(e)) : console.log("EmailQueryListProtocol error: " + e.data.retInfo.retCode)
                                }
                            ))
                        }
                        ,
                        a.updateMailList = function(t) {
                            var n = t.data.mailBaseInfo;
                            if (this.lblCount.string = "邮件数量：0/" + e.MAX_EMAIL_COUNT,
                            0 == n.length)
                                return this.btnMultiSelect.getComponent(h).grayscale = !0,
                                    void (this._isEnableMultiSelect = !1);
                            this.btnMultiSelect.getComponent(h).grayscale = !1,
                                this._isEnableMultiSelect = !0,
                                n.sort((function(t, e) {
                                        return e.sendTime - t.sendTime
                                    }
                                ));
                            for (var i = 0; i < n.length; i++) {
                                var l = m(this.listItemDemo)
                                    , o = l.getComponent(C);
                                o.data = n[i],
                                    o.onSingleSelectedCallback = this.onSingleModelMailClick.bind(this),
                                    o.onMultipSelectedCallback = this.onMultipModelMailClick.bind(this),
                                    o.MultiSelectModel = !1,
                                    o.SelectedEmail = !1,
                                    this.list.content.addChild(l)
                            }
                            this.lblCount.string = "邮件数量：" + n.length + "/" + e.MAX_EMAIL_COUNT,
                                this.selectedFirst()
                        }
                        ,
                        a.onSingleModelMailClick = function(t) {
                            if (t) {
                                this._selectedMail = t,
                                    this.content.node.active = !0;
                                for (var e = this.list.content.getComponentsInChildren(C), n = 0, i = 0; i < e.length; i++) {
                                    var l = e[i];
                                    n += l.IsChecked ? 1 : 0,
                                    l != t && (l.SelectedEmail = !1)
                                }
                                this.reqOpenMail(t.data.serialNum),
                                    this._isEnableDelete = n > 0,
                                    this.btnConfirmDelete.node.getComponent(h).grayscale = !this._isEnableDelete
                            }
                        }
                        ,
                        a.onMultipModelMailClick = function(t) {
                            t && (this._selectedMail = t,
                                this.content.node.active = !0,
                                this.reqOpenMail(t.data.serialNum))
                        }
                        ,
                        a.reqOpenMail = function(t) {
                            var e = this;
                            if (this._mailDetails.has(t))
                                this.showMailDetail(this._mailDetails.get(t));
                            else {
                                var n = this.getPropocol(v)
                                    , i = new D;
                                i.data.serialNum = t,
                                    n.send(i, (function(n) {
                                            0 == n.data.retInfo.retCode ? (0 == e._selectedMail.data.state && e.NotifyMailEntrance(),
                                                console.log("获取邮件详情成功"),
                                                e._mailDetails.set(t, n.data.mailDetail),
                                                e.showMailDetail(n.data.mailDetail)) : console.log("请求邮件详情失败: " + n.data.retInfo.retCode)
                                        }
                                    ))
                            }
                        }
                        ,
                        a.showMailDetail = function(t) {
                            if (t) {
                                this.content.data = t;
                                for (var e = this.list.content.getComponentsInChildren(C), n = 0; n < e.length; n++) {
                                    var i = e[n];
                                    i.data.serialNum == t.baseInfo.serialNum && (i.data = t.baseInfo)
                                }
                            }
                        }
                        ,
                        a.onMultiSelectBtn = function() {
                            this._isEnableMultiSelect && (console.log("开始多选"),
                                this.list.content.getComponentsInChildren(C).forEach((function(t) {
                                        t.MultiSelectModel = !0
                                    }
                                )),
                                this.btnMultiSelect.node.active = !1,
                                this.btnConfirmDelete.node.active = !0,
                                this.btnCancelMultiSelect.node.active = !0,
                                this.btnConfirmDelete.node.getComponent(h).grayscale = !0,
                                this._isEnableDelete = !1)
                        }
                        ,
                        a.onConfirmDeleteBtn = function() {
                            this._isEnableDelete && (console.log("确认删除多封邮件"),
                                this.onDeleteMultiMail())
                        }
                        ,
                        a.onCancelMultiSelectBtn = function() {
                            console.log("取消多选"),
                                this.list.content.getComponentsInChildren(C).forEach((function(t) {
                                        t.MultiSelectModel = !1,
                                            t.SelectedEmail = !1
                                    }
                                )),
                                this.btnMultiSelect.node.active = !0,
                                this.btnConfirmDelete.node.active = !1,
                                this.btnCancelMultiSelect.node.active = !1,
                                this._selectedMail ? this._selectedMail.SelectedEmail = !0 : this.selectedFirst()
                        }
                        ,
                        a.selectedFirst = function() {
                            if (this.list.content.children.length > 0) {
                                var t = this.list.content.children[0].getComponent(C);
                                t.SelectedEmail = !0,
                                    this.onSingleModelMailClick(t),
                                    this.noMail.node.active = !1
                            } else
                                this.noMail.node.active = !0,
                                    this.content.node.active = !1
                        }
                        ,
                        a.NotifyMailEntrance = function() {
                            T.sendNotification(w.UPDATE_STATE, 0)
                        }
                        ,
                        e
                }(M)).MAX_EMAIL_COUNT = 40,
                    J = e((j = ct).prototype, "btnClose", [x], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    Y = e(j.prototype, "lblCount", [F], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    $ = e(j.prototype, "btnMultiSelect", [z], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    tt = e(j.prototype, "btnConfirmDelete", [H], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    et = e(j.prototype, "btnCancelMultiSelect", [X], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    nt = e(j.prototype, "list", [q], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    it = e(j.prototype, "content", [G], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    lt = e(j.prototype, "noMail", [Q], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    ot = e(j.prototype, "listItemDemo", [W], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    at = e(j.prototype, "scrollViewWithBar", [Z], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    st = e(j.prototype, "lblMaxCountTip", [V], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    K = j)) || K));
                a._RF.pop()
            }
        }
    }
));
