System.register("chunks:///_virtual/WindowManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./WindowEvent.ts", "./global.ts", "./CFunction.ts", "./Alert.ts", "./Bubble.ts", "./BubbleCombatTooltipSkin.ts", "./BubbleSkinType.ts", "./Dialog.ts", "./MAlert.ts", "./NodeUtils.ts", "./SeriseBubble.ts", "./SimpleLoading.ts", "./SimpleLoading1.ts", "./WindowBase.ts", "./WindowCloseAction.ts", "./WindowMode.ts", "./WindowType.ts", "./Constants.ts", "./DEFINE.ts", "./ItemRewardData.ts", "./ItemRewardPanel.ts", "./DazzleDressDataDes.ts", "./ItemRewardPanelBySingle.ts", "./CommonTooltipSkin.ts", "./CommonBubble.ts", "./CommonBlackBubble.ts"], (function(n) {
        var i, e, t, o, s, a, l, r, c, u, d, h, w, f, m, _, g, I, A, S, b, D, C, p, v, T, W, y;
        return {
            setters: [function(n) {
                i = n.createClass
            }
                , function(n) {
                    e = n.cclegacy
                }
                , function(n) {
                    t = n.WindowEvent
                }
                , function(n) {
                    o = n.__global
                }
                , function(n) {
                    s = n.CFunction
                }
                , function(n) {
                    a = n.Alert
                }
                , function(n) {
                    l = n.Bubble
                }
                , function(n) {
                    r = n.BubbleCombatTooltipSkin
                }
                , function(n) {
                    c = n.BubbleSkinType
                }
                , function(n) {
                    u = n.Dialog
                }
                , function(n) {
                    d = n.MAlert
                }
                , function(n) {
                    h = n.NodeUtils
                }
                , function(n) {
                    w = n.SeriseBubble
                }
                , function(n) {
                    f = n.SimpleLoading
                }
                , function(n) {
                    m = n.SimpleLoading1
                }
                , function(n) {
                    _ = n.WindowBase
                }
                , function(n) {
                    g = n.WindowCloseAction
                }
                , function(n) {
                    I = n.WindowMode
                }
                , function(n) {
                    A = n.WindowType
                }
                , function(n) {
                    S = n.Constants
                }
                , function(n) {
                    b = n.DEFINE
                }
                , function(n) {
                    D = n.ItemRewardData
                }
                , function(n) {
                    C = n.ItemRewardPanel
                }
                , function(n) {
                    p = n.DazzleDressDataDes
                }
                , function(n) {
                    v = n.ItemRewardPanelBySingle
                }
                , function(n) {
                    T = n.CommonTooltipSkin
                }
                , function(n) {
                    W = n.CommonBubble
                }
                , function(n) {
                    y = n.CommonBlackBubble
                }
            ],
            execute: function() {
                e._RF.push({}, "8ef0fBCUEdBwbT9rwCCF+lS", "WindowManager", void 0);
                var P = n("WindowManager", function() {
                    var n = e.prototype;
                    function e(n) {
                        this._container = void 0,
                            this._windows = void 0,
                            this._modalBlocker = void 0,
                            this._winCache = void 0,
                            this._winClsMap = void 0,
                            this._bubbleSkinCls = void 0,
                            this._container = n,
                            this._windows = [],
                            this._modalBlocker = null,
                            this._winCache = new Map,
                            this._winClsMap = new Map,
                            this._winClsMap[A.SIMPLE_LOADING] = f,
                            this._winClsMap[A.SIMPLE_LOADING1] = m,
                            this._winClsMap[8] = C,
                            this._winClsMap[80] = v,
                            this._bubbleSkinCls = new Map,
                            this._bubbleSkinCls[c.COMBAT_ITEMS] = r,
                            this._bubbleSkinCls[c.COMMON_TOOLTIP] = T,
                            this._bubbleSkinCls[c.BLACK_TOOLTIP] = T,
                            this._bubbleSkinCls[c.SERISE_TIPS] = null
                    }
                    return n.showFurnitureRewardArray = function(n, i) {}
                        ,
                        n.getRewardArray = function(n, i) {
                            var e = new D;
                            e.items = [];
                            for (var t, s = n.length, a = 0, l = 0, r = 0, c = -1, u = 0; u < s; u++) {
                                var d = n[u];
                                if (a = 0,
                                    l = 0,
                                    r = 0,
                                    c = -1,
                                null != d) {
                                    if (d.count ? l = d.count : d.itemCount ? l = d.itemCount : d.num && (l = d.num),
                                    d.type && (c = d.type),
                                    d.itemType && 6 == d.itemType || 7 == c)
                                        ;
                                    else if (l <= 0)
                                        continue;
                                    var h, w, f, m;
                                    if (d.id ? a = d.id : d.itemId ? a = d.itemId : d.equipItemId && (r = d.equipItemId),
                                    d.itemType && 6 == d.itemType)
                                        null == (t = o.SysAPI.getGDataAPI().getDataProxy(S.DAZZLE_DRESS_DATA).select(a)) || e.items.push({
                                            num: 1,
                                            src: b.DAZZLE_DRESS_RES_ROOT + t.type + "/" + t.id + "_bag.png",
                                            tooltip: t.name,
                                            name: t.name + "(" + p.timeLimitString[l] + ")"
                                        });
                                    else {
                                        if (-1 == c) {
                                            if (null != (t = o.SysAPI.getGDataAPI().getDataProxy(S.ITEM_DATA).select(a))) {
                                                e.items.push({
                                                    num: l,
                                                    src: t.url,
                                                    tooltip: t.name,
                                                    name: t.name
                                                });
                                                continue
                                            }
                                            if (null != (t = o.SysAPI.getGDataAPI().getDataProxy(S.SPIRIT_DATA).select(a))) {
                                                w = t,
                                                    e.items.push({
                                                        level: l,
                                                        src: w.iconSrc,
                                                        tooltip: w.name,
                                                        name: w.name,
                                                        infoTxt: '<b>恭喜你获得<color="#ff0000">' + w.name + "</color>(" + l + "级)</b>"
                                                    });
                                                continue
                                            }
                                            if (null != (t = o.SysAPI.getGDataAPI().getDataProxy(S.FURNITURE_LIST_DATA).select(a))) {
                                                f = t,
                                                    e.items.push({
                                                        num: l,
                                                        src: b.PLUGIN_ROOT + "/Home/furniture/" + a + "/" + a + "_icon.png",
                                                        tooltip: f.name,
                                                        name: f.name,
                                                        infoTxt: '<b><color="#ff0000">' + f.name + "</color>x" + l + "已放入你的家居仓库</b>"
                                                    });
                                                continue
                                            }
                                            if (null != (t = o.SysAPI.getGDataAPI().getDataProxy(S.DRESSUP_LIST_DATA).select(a))) {
                                                h = t,
                                                    e.items.push({
                                                        num: l,
                                                        src: b.COMM_ROOT + "res/ext/dressup/icon/" + a.toString(16) + ".png",
                                                        tooltip: h.name,
                                                        name: h.name,
                                                        infoTxt: '<b><color="#ff0000">' + h.name + "</color>x" + l + "已放入你的超级星工场</b>"
                                                    });
                                                continue
                                            }
                                            if (null != (t = o.SysAPI.getGDataAPI().getDataProxy(S.SEQUIP_DES_DATA).select(r))) {
                                                m = t,
                                                    e.items.push({
                                                        num: l,
                                                        src: m.src,
                                                        tooltip: m.name,
                                                        name: m.name,
                                                        infoTxt: '<b><color="#ff0000">' + m.name + "</color>x" + l + "已放入你的宠物背包</b>"
                                                    });
                                                continue
                                            }
                                            this.alert("Error", a + "未找到该物品配置");
                                            continue
                                        }
                                        switch (c) {
                                            case 0:
                                            case 1:
                                            case 2:
                                                if (null != (t = o.SysAPI.getGDataAPI().getDataProxy(S.ITEM_DATA).select(a))) {
                                                    e.items.push({
                                                        num: l,
                                                        src: t.url,
                                                        tooltip: t.name,
                                                        name: t.name
                                                    });
                                                    continue
                                                }
                                                break;
                                            case 3:
                                                if (null != (t = o.SysAPI.getGDataAPI().getDataProxy(S.FURNITURE_LIST_DATA).select(a))) {
                                                    f = t,
                                                        e.items.push({
                                                            num: l,
                                                            src: b.PLUGIN_ROOT + "/Home/furniture/" + a + "/" + a + "_icon.png",
                                                            tooltip: f.name,
                                                            name: f.name,
                                                            infoTxt: '<b><color="#ff0000">' + f.name + "</color>x" + l + "已放入你的家居仓库</b>"
                                                        });
                                                    continue
                                                }
                                                break;
                                            case 4:
                                                if (null != (t = o.SysAPI.getGDataAPI().getDataProxy(S.SPIRIT_DATA).select(a))) {
                                                    w = t,
                                                        e.items.push({
                                                            level: l,
                                                            src: w.iconSrc,
                                                            tooltip: w.name,
                                                            name: w.name,
                                                            infoTxt: '<b>恭喜你获得<color="#ff0000">' + w.name + "</color>(" + l + "级)</b>"
                                                        });
                                                    continue
                                                }
                                                break;
                                            case 5:
                                                if (null != (t = o.SysAPI.getGDataAPI().getDataProxy(S.ITEM_DATA).select(a))) {
                                                    e.items.push({
                                                        num: l,
                                                        src: t.url,
                                                        tooltip: t.name,
                                                        name: t.name
                                                    });
                                                    continue
                                                }
                                                break;
                                            case 6:
                                                if (null != (t = o.SysAPI.getGDataAPI().getDataProxy(S.SEQUIP_DES_DATA).select(a))) {
                                                    m = t,
                                                        e.items.push({
                                                            num: l,
                                                            src: m.src,
                                                            tooltip: m.name,
                                                            name: m.name,
                                                            infoTxt: '<b><color="#ff0000">' + m.name + "</color>x" + l + "已放入你的宠物背包</b>"
                                                        });
                                                    continue
                                                }
                                                break;
                                            case 7:
                                                if (null != (t = o.SysAPI.getGDataAPI().getDataProxy(S.DAZZLE_DRESS_DATA).select(a))) {
                                                    e.items.push({
                                                        num: 1,
                                                        src: b.DAZZLE_DRESS_RES_ROOT + t.type + "/" + t.id + "_bag.png",
                                                        tooltip: t.name,
                                                        name: t.name + "(" + p.timeLimitString[l] + ")",
                                                        iconName: p.timeLimitString[l]
                                                    });
                                                    continue
                                                }
                                        }
                                        this.alert("Error", a + "未找到该物品配置")
                                    }
                                }
                            }
                            return e
                        }
                        ,
                        n.showRewardArray = function(n, i) {
                            void 0 === i && (i = null);
                            var e = this.getRewardArray(n, i);
                            e.items.length && this.showManagedWin(8, e, null == i ? null : new s(i))
                        }
                        ,
                        n.showRewardArrayBySingle = function(n, i) {
                            void 0 === i && (i = null);
                            var e = this.getRewardArray(n, i);
                            e.items.length && this.showManagedWin(80, e, null == i ? null : new s(i))
                        }
                        ,
                        n.createLoadingView = function(n, i) {
                            return void 0 === n && (n = 0),
                                this.showManagedWin(n, null, null)
                        }
                        ,
                        n.instanceofIManagedWin = function(n) {
                            return !!n && void 0 !== n.IManagedWinJudge
                        }
                        ,
                        n.showManagedWin = function(n, i, e) {
                            void 0 === i && (i = null),
                            void 0 === e && (e = null);
                            var t = this._winCache[n];
                            if (null == t) {
                                var o = this._winClsMap[n];
                                if (null == o)
                                    return null;
                                (t = 8 == n || 2 == n ? this.createWindow(o, !0, this._sysWinContainer) : this.createWindow(o, !0)).closeAction = g.HIDE,
                                    this._winCache[n] = t
                            } else
                                t.show(),
                                    t.bringToFront();
                            if (this.instanceofIManagedWin(t)) {
                                var s = t;
                                s.bindHandler(e),
                                    s.setData(i)
                            }
                            return t
                        }
                        ,
                        n.alert = function(n, i, e, t) {
                            return void 0 === e && (e = I.OK),
                            void 0 === t && (t = null),
                                this.createAlert(n, i, e, t).id
                        }
                        ,
                        n.mAlert = function(n, i, e, t, o) {
                            void 0 === i && (i = ""),
                            void 0 === e && (e = ""),
                            void 0 === t && (t = null),
                            void 0 === o && (o = null);
                            var s = this.createWindow(d);
                            return s.init(n, i, e, t, o),
                                s.show(),
                                s
                        }
                        ,
                        n.createWindow = function(n, i, e) {
                            var t;
                            return void 0 === i && (i = !1),
                            void 0 === e && (e = null),
                            null == e && (e = this._container),
                                t = null != n ? i ? new n(e,!0) : new n(e) : new _,
                                this.registerWindow(t, e),
                                t
                        }
                        ,
                        n.createScaleWinow = function(n, i) {
                            return null
                        }
                        ,
                        n.closeWindow = function(n) {
                            null != n && n.close()
                        }
                        ,
                        n.instanceofIWindow = function(n) {
                            return !!n && void 0 !== n.IWindowJudge
                        }
                        ,
                        n.closeWindowByID = function(n) {
                            for (var i, e = this._windows.length, t = 0; t < e; ++t)
                                if (this._windows[t].id == n) {
                                    i = this._windows[t];
                                    break
                                }
                            this.instanceofIWindow(i) && this.closeWindow(i)
                        }
                        ,
                        n.createBubble = function(n) {
                            var i;
                            i = n == c.SERISE_TIPS ? new w : n == c.COMMON_TOOLTIP ? new W : n == c.BLACK_TOOLTIP ? new y : new l;
                            var e = this._bubbleSkinCls[n];
                            return null == e || i.setSkin(new e),
                                i
                        }
                        ,
                        n.createMiniLoading = function() {
                            return this.createLoadingView(A.SIMPLE_LOADING, !0)
                        }
                        ,
                        n.closeMiniLoading = function() {
                            var n = this._winCache[A.SIMPLE_LOADING];
                            null != n && this.closeWindow(n)
                        }
                        ,
                        n.createMiniLoading1 = function() {
                            return this.createLoadingView(A.SIMPLE_LOADING1, !0)
                        }
                        ,
                        n.closeMiniLoading1 = function() {
                            var n = this._winCache[A.SIMPLE_LOADING1];
                            null != n && this.closeWindow(n)
                        }
                        ,
                        n.closeAllWindows = function() {
                            for (var n, i = this._windows.concat(), e = i.length, t = 0; t < e; ++t)
                                n = i[t],
                                    this.closeWindow(n);
                            i = null
                        }
                        ,
                        n.createAlert = function(n, i, e, t) {
                            if (void 0 === n && (n = ""),
                            void 0 === i && (i = ""),
                            void 0 === e && (e = I.OK),
                            void 0 === t && (t = null),
                            null == this._sysWinContainer)
                                return null;
                            var o = new a(this._sysWinContainer,n,i,e,t);
                            return this.registerWindow(o, this._sysWinContainer),
                                o
                        }
                        ,
                        n.createDialog = function(n, i) {
                            if (void 0 === n && (n = !1),
                            void 0 === i && (i = ""),
                            null == this._container)
                                return null;
                            var e = new u(this._container,n,i);
                            return this.registerWindow(e),
                                e
                        }
                        ,
                        n.clear = function() {
                            for (var n = this._windows.length, i = 0; i < n; ++i) {
                                var e = this._windows[i];
                                this.unregisterWindow(e),
                                    e.close(),
                                    e = null
                            }
                            this._windows = []
                        }
                        ,
                        n.registerWindow = function(n, i) {
                            if (void 0 === i && (i = null),
                            null != n)
                                if (null == i && (i = this._container),
                                    n.addEventListener(t.CLOSED, this.onCloseWindow, this),
                                    this._windows.push(n),
                                    n.isModal)
                                    i.addChild(n);
                                else {
                                    h.addChildAt(i, n, 0);
                                    for (var e, o = i.children.length - 1; o >= 0; --o)
                                        if ((e = h.getChildAt(i, o))instanceof _ && e != n && !e.isModal) {
                                            i.removeChild(n),
                                                h.addChildAt(i, n, o);
                                            break
                                        }
                                }
                        }
                        ,
                        n.unregisterWindow = function(n) {
                            if (null != n) {
                                n.removeEventListener(t.CLOSED, this.onCloseWindow, this);
                                for (var i = this._windows.length, e = 0; e < i; ++e)
                                    if (this._windows[e] == n) {
                                        this._windows.splice(e, 1);
                                        break
                                    }
                                null != this._container && (h.contains(this._container, n) ? this._container.removeChild(n) : console.log("[WindowManager] Warning: This window is not found in the container !!!"),
                                    n.isModal && null != n.modalBlocker && h.contains(this._container, n.modalBlocker) ? this._container.removeChild(n.modalBlocker) : console.log("[WindowManager] Warning: Modal blocker of this window is not found in the container !!!")),
                                null != this._sysWinContainer && (h.contains(this._sysWinContainer, n) ? this._sysWinContainer.removeChild(n) : console.log("[WindowManager] Warning: This window is not found in the container !!!"),
                                    n.isModal && null != n.modalBlocker && h.contains(this._sysWinContainer, n.modalBlocker) ? this._sysWinContainer.removeChild(n.modalBlocker) : console.log("[WindowManager] Warning: Modal blocker of this window is not found in the container !!!"))
                            }
                        }
                        ,
                        n.onCloseWindow = function(n) {
                            var i = n.target;
                            null != i && i.closeAction == g.CLOSE && this.unregisterWindow(i)
                        }
                        ,
                        i(e, [{
                            key: "_sysWinContainer",
                            get: function() {
                                return o.SysAPI.getUISysAPI().getEffectContainer(1)
                            }
                        }]),
                        e
                }());
                P.STAGE_WIDTH = 1600,
                    P.STAGE_HEIGHT = 900,
                    e._RF.pop()
            }
        }
    }
));
