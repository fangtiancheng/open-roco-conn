System.register("chunks:///_virtual/BanSpiritPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UICtlBase.ts", "./AgentNode.ts", "./CombatInfoTxtLogic.ts", "./ScrollBarLogic.ts"], (function(t) {
        var o, e, n, l, i, r, s, c, a, u, f;
        return {
            setters: [function(t) {
                o = t.inheritsLoose,
                    e = t.assertThisInitialized,
                    n = t.createClass
            }
                , function(t) {
                    l = t.cclegacy,
                        i = t.ScrollView,
                        r = t.NodeEventType,
                        s = t.Slider
                }
                , function(t) {
                    c = t.UICtlBase
                }
                , function(t) {
                    a = t.AgentNode
                }
                , function(t) {
                    u = t.CombatInfoTxtLogic
                }
                , function(t) {
                    f = t.ScrollBarLogic
                }
            ],
            execute: function() {
                l._RF.push({}, "8a360w+pE9EDpwaz3LGrQO1", "BanSpiritPanel", void 0);
                t("BanSpiritPanel", function(t) {
                    function n(o, n, l, i) {
                        var c;
                        void 0 === n && (n = 0),
                        void 0 === l && (l = ""),
                        void 0 === i && (i = null),
                            (c = t.call(this, o, n, l, i) || this)._ui = void 0,
                            c._scrollInfoTxt = void 0,
                            c._scrollBarMc = void 0,
                            c._ui = new d(o.target);
                        var a = o.target.getChildByName("scroll").getChildByName("info_txt");
                        return c._scrollInfoTxt = new u(a),
                            c._scrollBarMc = new f(o.target),
                            c._scrollBarMc.slider.on("slide", c.onSlider, e(c)),
                            c._ui.btnClose.on(r.TOUCH_END, c.onUIClick, e(c)),
                            c._ui.scroll.target.on("scroll-ended", (function(t) {
                                    var o = 0
                                        , e = t.getScrollOffset().y
                                        , n = t.getMaxScrollOffset().y;
                                    o = 0 == n ? 1 : e / n,
                                        c._scrollBarMc.slider.getComponent(s).progress = 1 - o
                                }
                            )),
                            c
                    }
                    o(n, t);
                    var l = n.prototype;
                    return l.onUIClick = function(t) {
                        switch (t.target.name) {
                            case "btnClose":
                                this.visible = !1
                        }
                    }
                        ,
                        l.onSlider = function(t) {
                            var o = t.progress;
                            this._ui.scroll.getComponent(i).scrollToPercentVertical(o, .01)
                        }
                        ,
                        l.dispose = function() {
                            t.prototype.dispose.call(this),
                                this._ui.btnClose.off(r.TOUCH_END, this.onUIClick, this)
                        }
                        ,
                        l.update = function() {}
                        ,
                        l.updateDes = function(t) {
                            this._scrollInfoTxt.getTarget().htmlText = "<outline color=black width=3>" + t + "</outline>",
                                this._scrollBarMc.slider.getComponent(s).progress = 1
                        }
                        ,
                        n
                }(c));
                var d = function(t) {
                    function e() {
                        for (var o, e = arguments.length, n = new Array(e), l = 0; l < e; l++)
                            n[l] = arguments[l];
                        return (o = t.call.apply(t, [this].concat(n)) || this)._btnClose = void 0,
                            o._scroll = void 0,
                            o
                    }
                    return o(e, t),
                        n(e, [{
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new a(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "scroll",
                            get: function() {
                                return this._scroll || (this._scroll = new a(this.getChildByName("scroll"))),
                                    this._scroll
                            }
                        }]),
                        e
                }(a);
                l._RF.pop()
            }
        }
    }
));
