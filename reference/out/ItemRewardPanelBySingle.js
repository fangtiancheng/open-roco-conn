System.register("chunks:///_virtual/ItemRewardPanelBySingle.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./WindowBase.ts", "./IConItem1.ts", "./ResManager.ts", "./AgentNode.ts", "./WindowState.ts"], (function(t) {
        var e, i, n, a, o, s, l;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    n = t.WindowBase
                }
                , function(t) {
                    a = t.IConItem1
                }
                , function(t) {
                    o = t.default
                }
                , function(t) {
                    s = t.AgentNode
                }
                , function(t) {
                    l = t.WindowState
                }
            ],
            execute: function() {
                i._RF.push({}, "18be9MIvdlLy6Z8yjmm/7cX", "ItemRewardPanelBySingle", void 0);
                t("ItemRewardPanelBySingle", function(t) {
                    e(n, t);
                    var i = n.prototype;
                    function n(e, i, n) {
                        var l;
                        return void 0 === i && (i = !1),
                        void 0 === n && (n = null),
                            (l = t.call(this) || this).bg = void 0,
                            l.infoTxt = void 0,
                            l.knowBtn = void 0,
                            l.item_0 = void 0,
                            l.arrowMC = void 0,
                            l.data = void 0,
                            l.currIndex = 0,
                            l.handler = void 0,
                            l._target = void 0,
                            l._target = o.Instance.getPrefabByName("base/ItemRewardPanel"),
                            l.addChild(l._target),
                            l.bg = l._target.getChildByName("bg"),
                            l.infoTxt = new s(l._target.getChildByName("infoTxt")),
                            l.knowBtn = l._target.getChildByName("knowBtn"),
                            null != n ? l.addChild(l.item_0 = new a(n.x,n.y)) : l.addChild(l.item_0 = new a),
                            l.item_0.x = 0,
                            l.item_0.y = 0,
                            l.item_0.scaleX = 1.67,
                            l.item_0.scaleY = 1.67,
                            l.initialize(e, l.bg, l.knowBtn, null, i),
                            l.infoTxt.mouseEnabled = !1,
                            l.infoTxt.visible = !1,
                            l
                    }
                    return i.IManagedWinJudge = function() {
                        CONFIG.DEBUG && console.log("i am a IWindow")
                    }
                        ,
                        i.setData = function(t) {
                            var e = t;
                            if (null == this.data) {
                                if (this.data = e,
                                null == this.data || null == this.data.items)
                                    return;
                                this.currIndex = 0,
                                    this.setItemList()
                            } else if (this.data.items && e.items)
                                for (var i = 0; i < e.items.length; i++)
                                    this.data.items.push(e.items[i])
                        }
                        ,
                        i.bindHandler = function(t) {
                            this.handler = t
                        }
                        ,
                        i.setItemList = function() {
                            if (null == this.data)
                                return !1;
                            if (this.data.items.length - this.currIndex <= 0)
                                return !1;
                            var t = this.data.items[this.currIndex];
                            this.item_0.setData(t),
                                this.currIndex++;
                            var e = this.item_0.getCount();
                            return t.hasOwnProperty("infoTxt") ? this.infoTxt.htmlText = t.infoTxt : this.infoTxt.htmlText = '<b><font color="#ff0000">' + t.name + "</font>x" + e + "已放入你的背包</b>",
                                !0
                        }
                        ,
                        i.show = function() {
                            t.prototype.show.call(this),
                                this.center()
                        }
                        ,
                        i.close = function() {
                            if (!this.setItemList()) {
                                this.data = null,
                                    t.prototype.close.call(this);
                                var e = this.handler;
                                this.handler = null,
                                null != e && e.invoke()
                            }
                        }
                        ,
                        i.isOnShow = function() {
                            return this._state == l.INITIALIZED
                        }
                        ,
                        n
                }(n));
                i._RF.pop()
            }
        }
    }
));
