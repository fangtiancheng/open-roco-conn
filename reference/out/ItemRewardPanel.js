System.register("chunks:///_virtual/ItemRewardPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./WindowBase.ts", "./IConItem1.ts", "./ResManager.ts", "./AgentNode.ts"], (function(t) {
        var e, i, n, o, s, a;
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
                    o = t.IConItem1
                }
                , function(t) {
                    s = t.default
                }
                , function(t) {
                    a = t.AgentNode
                }
            ],
            execute: function() {
                i._RF.push({}, "eb074Bfx/pBIIwjCEHIot3S", "ItemRewardPanel", void 0);
                t("ItemRewardPanel", function(t) {
                    e(n, t);
                    var i = n.prototype;
                    function n(e, i, n) {
                        var o;
                        return void 0 === i && (i = !1),
                            (o = t.call(this) || this).bg = void 0,
                            o.infoTxt = void 0,
                            o.knowBtn = void 0,
                            o._list = void 0,
                            o.item_0 = void 0,
                            o.arrowMC = void 0,
                            o.data = void 0,
                            o.currIndex = 0,
                            o.handler = void 0,
                            o._iconItems = void 0,
                            o._target = void 0,
                            o._target = s.Instance.getPrefabByName("base/ItemRewardPanel"),
                            o.addChild(o._target),
                            o.bg = o._target.getChildByName("bg"),
                            o.infoTxt = new a(o._target.getChildByName("infoTxt")),
                            o.knowBtn = o._target.getChildByName("knowBtn"),
                            o._list = o._target.getChildByName("list"),
                            o._list.removeAllChildren(),
                            o.initialize(e, o.bg, o.knowBtn, null, i),
                            o.infoTxt.mouseEnabled = !1,
                            o.infoTxt.visible = !1,
                            o
                    }
                    return i.IManagedWinJudge = function() {
                        CONFIG.DEBUG && console.log("i am a IWindow")
                    }
                        ,
                        i.addList = function() {
                            this._iconItems || (this._iconItems = new Array);
                            for (var t = 0, e = this.data.items.length, i = 0; i < e; i++) {
                                var n = this.data.items[i]
                                    , s = new o;
                                s.setData(n),
                                    i > 9 ? (s.x = 150 * t,
                                        s.y = -90,
                                        t++) : (s.x = 150 * i,
                                        s.y = e > 10 ? 60 : 0),
                                    s.scaleX = 1.67,
                                    s.scaleY = 1.67,
                                    this._list.addChild(s),
                                    this._iconItems.push(s)
                            }
                            var a = 0
                                , r = e > 9 ? 10 : e;
                            a = r % 2 == 0 ? -r / 2 * 150 + 78 : 150 * -Math.floor(r / 2) - 0,
                            1 == this.data.items.length && (a = 0),
                                this._list.setPosition(a, 0)
                        }
                        ,
                        i.setData = function(t) {
                            this.data = t,
                            null != this.data && null != this.data.items && (this.currIndex = 0,
                                this.addList())
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
                            t.prototype.close.call(this);
                            var e = this.handler;
                            this.handler = null,
                            null != e && e.invoke(),
                            this._iconItems && (this._iconItems.forEach((function(t) {
                                    t.destroy()
                                }
                            )),
                                this._iconItems = [])
                        }
                        ,
                        n
                }(n));
                i._RF.pop()
            }
        }
    }
));
