System.register("chunks:///_virtual/EmailContentItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtil2.ts", "./EmailAttachmentIcon.ts", "./Icon.ts", "./global.ts", "./WindowMode.ts", "./CFunction.ts", "./WindowResult.ts", "./DazzleDressDataDes.ts"], (function(t) {
        var e, i, a, n, l, o, c, s, r, u, h, d, b, p, m, v, f, g, C, y, _, D, k, L;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    i = t.inheritsLoose,
                    a = t.initializerDefineProperty,
                    n = t.assertThisInitialized,
                    l = t.createClass
            }
                , function(t) {
                    o = t.cclegacy,
                        c = t._decorator,
                        s = t.Label,
                        r = t.RichText,
                        u = t.Node,
                        h = t.Button,
                        d = t.NodeEventType,
                        b = t.instantiate,
                        p = t.Layout,
                        m = t.Sprite,
                        v = t.Component
                }
                , function(t) {
                    f = t.StringUtil
                }
                , function(t) {
                    g = t.EmailAttachmentIcon
                }
                , function(t) {
                    C = t.IconType
                }
                , function(t) {
                    y = t.__global
                }
                , function(t) {
                    _ = t.WindowMode
                }
                , function(t) {
                    D = t.CFunction
                }
                , function(t) {
                    k = t.WindowResult
                }
                , function(t) {
                    L = t.DazzleDressDataDes
                }
            ],
            execute: function() {
                var w, R, E, I, A, O, z, T, S, B, N, U, x, P, M, F, H, W, Z, V, X;
                o._RF.push({}, "84d69PIyG1J27ypBkH3otA4", "EmailContentItem", void 0);
                var j = c.ccclass
                    , G = c.property;
                t("EmailContentItem", (w = j("EmailContentItem"),
                    R = G(s),
                    E = G(s),
                    I = G(s),
                    A = G(s),
                    O = G(r),
                    z = G(u),
                    T = G(h),
                    S = G(h),
                    B = G(u),
                w((x = e((U = function(t) {
                    function e() {
                        for (var e, i = arguments.length, l = new Array(i), o = 0; o < i; o++)
                            l[o] = arguments[o];
                        return e = t.call.apply(t, [this].concat(l)) || this,
                            a(e, "title", x, n(e)),
                            a(e, "time", P, n(e)),
                            a(e, "expired", M, n(e)),
                            a(e, "sender", F, n(e)),
                            a(e, "content2", H, n(e)),
                            a(e, "attachmentList", W, n(e)),
                            a(e, "btnReceive", Z, n(e)),
                            a(e, "btnDelete", V, n(e)),
                            a(e, "attachmentDemo", X, n(e)),
                            e._data = void 0,
                            e.DAZZLE_ITEM_LEVEL = ["7天", "30天", "永久"],
                            e._deleteCallback = void 0,
                            e._receiveOneCallback = void 0,
                            e._receiveAllCallback = void 0,
                            e
                    }
                    i(e, t);
                    var o = e.prototype;
                    return o.onLoad = function() {
                        this.btnDelete.node.on(d.TOUCH_END, this.onBtnDelClick, this),
                            this.btnReceive.node.on(d.TOUCH_END, this.onBtnReciveAllClick, this)
                    }
                        ,
                        o.onBtnDelClick = function(t) {
                            var e = this
                                , i = new D((function(t) {
                                    switch (t) {
                                        case k.OK:
                                            e._deleteCallback && e._deleteCallback(e.data)
                                    }
                                }
                            ),this);
                            y.showMsgBox("确定删除这封邮件吗?", _.OK_CANCEL, i)
                        }
                        ,
                        o.onBtnReciveAllClick = function(t) {
                            this._receiveAllCallback && this._receiveAllCallback(this.data)
                        }
                        ,
                        o.onBtnReciveOneClick = function(t) {
                            0 == this.data.attach[t].state && this._receiveOneCallback && this._receiveOneCallback(this.data, t)
                        }
                        ,
                        o.updateView = function() {
                            var t = f.getUtf8String(this.data.baseInfo.title);
                            this.title.string = t;
                            var e = f.formatTime(this.data.baseInfo.sendTime, "yyyy年mm月dd日");
                            this.time.string = "发件时间：" + e;
                            var i = f.formatTime(this.data.baseInfo.deadLine, "yyyy年mm月dd日");
                            this.expired.string = "过期时间：" + i;
                            var a = f.getUtf8String(this.data.baseInfo.sender);
                            this.sender.string = a;
                            var n = f.getUtf8String(this.data.content);
                            this.content2.string = f.convertFlashRichTextToCocosCreator(n),
                                this.attachmentList.active = !1,
                                this.btnReceive.node.active = !1;
                            var l = 0;
                            if (this.data.baseInfo.attach > 0) {
                                this.attachmentList.active = !0,
                                    this.btnReceive.node.active = !0,
                                    this.attachmentList.removeAllChildren();
                                for (var o = 0; o < this.data.attach.length; o++) {
                                    var c = this.data.attach[o]
                                        , s = b(this.attachmentDemo);
                                    s.active = !0;
                                    var r = s.getComponent(g);
                                    switch (c.type) {
                                        case C.ROCO_DIAMOND:
                                        case C.PROPS:
                                        case C.EXP:
                                            n = c.count <= 0 ? "" : "" + c.count;
                                            break;
                                        case C.PET:
                                            n = "Lv." + c.count;
                                            break;
                                        case C.DAZZLE_DRESS:
                                            n = L.timeLimitString[c.count];
                                            break;
                                        default:
                                            n = c.count <= 0 ? "" : "" + c.count
                                    }
                                    console.log("[jinlong]  set email attachment icon  type = " + c.type + "  id = " + c.id);
                                    var u = {
                                        type: c.type,
                                        showTips: !0
                                    }
                                        , h = {
                                        id: c.id,
                                        count: "",
                                        revicedStatus: c.state
                                    };
                                    r.params = u,
                                        r.data = h,
                                        s.parent = this.attachmentList;
                                    var v = c.serialNum;
                                    r.setGotStatus(1 == c.state),
                                        r.setCount(n),
                                        s.on(d.TOUCH_END, this.onBtnReciveOneClick.bind(this, v), this),
                                        l += 0 == c.state ? 1 : 0
                                }
                                if (6 == this.data.attach.length) {
                                    var y = this.attachmentList.getComponent(p);
                                    y.spacingX = 5,
                                        y.paddingLeft = 10,
                                        y.updateLayout(!0)
                                } else {
                                    var _ = this.attachmentList.getComponent(p);
                                    _.spacingX = 15,
                                        _.paddingLeft = 30,
                                        _.updateLayout(!0)
                                }
                                this.btnReceive.getComponent(m).grayscale = 0 == l
                            }
                        }
                        ,
                        o.setDeleteCallback = function(t) {
                            this._deleteCallback = t
                        }
                        ,
                        o.setReceiveOneCallback = function(t) {
                            this._receiveOneCallback = t
                        }
                        ,
                        o.setReceiveAllCallback = function(t) {
                            this._receiveAllCallback = t
                        }
                        ,
                        l(e, [{
                            key: "data",
                            get: function() {
                                return this._data
                            },
                            set: function(t) {
                                this._data = t,
                                    this.updateView()
                            }
                        }]),
                        e
                }(v)).prototype, "title", [R], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }),
                    P = e(U.prototype, "time", [E], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    M = e(U.prototype, "expired", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    F = e(U.prototype, "sender", [A], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    H = e(U.prototype, "content2", [O], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    W = e(U.prototype, "attachmentList", [z], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    Z = e(U.prototype, "btnReceive", [T], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    V = e(U.prototype, "btnDelete", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    X = e(U.prototype, "attachmentDemo", [B], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    N = U)) || N));
                o._RF.pop()
            }
        }
    }
));
