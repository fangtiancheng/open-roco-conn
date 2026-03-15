System.register("chunks:///_virtual/SkillContainer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./ResManager.ts", "./Utils.ts", "./SkillInfoContainer.ts"], (function(t) {
        var i, r, s, e, n, o, l, c, a, h, _, u;
        return {
            setters: [function(t) {
                i = t.createClass,
                    r = t.inheritsLoose,
                    s = t.assertThisInitialized
            }
                , function(t) {
                    e = t.cclegacy,
                        n = t.ScrollView,
                        o = t.Slider,
                        l = t.NodeEventType
                }
                , function(t) {
                    c = t.AgentNode,
                        a = t.AgentNodeComponent
                }
                , function(t) {
                    h = t.default
                }
                , function(t) {
                    _ = t.Utils
                }
                , function(t) {
                    u = t.SkillInfoContainer
                }
            ],
            execute: function() {
                e._RF.push({}, "fe76bOgLChFl74HQMeb/t/k", "SkillContainer", void 0),
                    t("SkillContainer", function() {
                        function t() {
                            var t = this;
                            this._mc = void 0,
                                this._skillCanvas = void 0,
                                this._voList = void 0,
                                this._scrollBarMc = void 0,
                                this._currentSkillBar = void 0,
                                this._myScroll = void 0,
                                this._barlist = void 0,
                                this._ca = void 0,
                                this._scroll_Bar = void 0,
                                this._showSilder = !0,
                                this._curProg = 0,
                                this._mc = new g,
                                this._scrollBarMc = this._mc.scrollBarMc,
                                this._skillCanvas = new c(this._mc.containerMc.getChildByName("scroll").getChildByName("container")),
                                this._scroll_Bar = this._mc.containerMc.getChildByName("scroll_Bar"),
                                this._scroll_Bar.active = !1,
                                this._mc.containerMc.silder.getComponent(o).progress = 1,
                                this._mc.containerMc.silder.on("slide", this.onSlider, this),
                                this._mc.containerMc.downArrow.on(l.TOUCH_END, this.onClickDownArrow, this),
                                this._mc.containerMc.upArrow.on(l.TOUCH_END, this.onClickUpArrow, this),
                                this._mc.containerMc.scroll.target.on("scroll-ended", (function(i) {
                                        var r = i.getScrollOffset().y / i.getMaxScrollOffset().y;
                                        console.log("scroll-ended==" + r),
                                            t._mc.containerMc.silder.progress = 1 - r,
                                            t._curProg = 1 - r
                                    }
                                ))
                        }
                        var r = t.prototype;
                        return r.showSilder = function(t) {
                            this._mc.containerMc.silder.visible = t,
                                this._mc.containerMc.downArrow.visible = t,
                                this._mc.containerMc.upArrow.visible = t,
                                this._mc.containerMc.scroll.getComponent(n).vertical = t,
                                this._showSilder = t
                        }
                            ,
                            r.showSilder2 = function(t) {
                                0 != this._showSilder && (this._mc.containerMc.silder.visible = t,
                                    this._mc.containerMc.downArrow.visible = t,
                                    this._mc.containerMc.upArrow.visible = t,
                                    this._mc.containerMc.scroll.getComponent(n).vertical = t,
                                    this._showSilder = t)
                            }
                            ,
                            r.onClickDownArrow = function(i) {
                                this._curProg = Math.max(0, this._curProg - t.SCROLL_ONCE_PROGRESS),
                                    this._mc.containerMc.silder.progress = this._curProg,
                                    console.log("prog==" + this._curProg),
                                    this._mc.containerMc.scroll.getComponent(n).scrollToPercentVertical(this._curProg, .01)
                            }
                            ,
                            r.onClickUpArrow = function(i) {
                                this._curProg = Math.min(1, this._curProg + t.SCROLL_ONCE_PROGRESS),
                                    this._mc.containerMc.silder.progress = this._curProg,
                                    console.log("prog==" + this._curProg),
                                    this._mc.containerMc.scroll.getComponent(n).scrollToPercentVertical(this._curProg, .01)
                            }
                            ,
                            r.onSlider = function(t) {
                                var i = t.progress;
                                this._curProg = i,
                                    console.log("prog==" + this._curProg),
                                    this._mc.containerMc.scroll.getComponent(n).scrollToPercentVertical(i, .01)
                            }
                            ,
                            r.setXY = function(t, i) {
                                this._mc.x = t,
                                    this._mc.y = i
                            }
                            ,
                            r.addSkillBar = function() {
                                var t = this._voList.length;
                                this._barlist = [];
                                for (var i = 0; i < t; i++)
                                    this.addSkillInfoContainer(this._voList[i], i + 1, t);
                                this._skillCanvas.height = 130 * t + 15,
                                    this._scroll_Bar.active = !1,
                                    this.showSilder2(t > _.skillNum),
                                    t > _.skillNum ? this.setScollBar(!0) : this.setScollBar(!1),
                                    t > 0 ? (this._currentSkillBar = this._barlist[0],
                                        this._currentSkillBar.chooseState()) : this._currentSkillBar = null
                            }
                            ,
                            r.setScollBar = function(t) {}
                            ,
                            r.mouseClickHander = function(t) {
                                var i = t.currentTarget;
                                null != this._currentSkillBar && this._currentSkillBar.commonState(),
                                    this._currentSkillBar = i
                            }
                            ,
                            r.addSkillInfoContainer = function(t, i, r) {
                                var s = new u;
                                return (s = new u((i - 1) % 2 == 0 ? 0 : 1)).index = i,
                                    s.commonState(),
                                    s.ui.y = -130 * (i - 1) - 15,
                                    s.ca = this._ca,
                                    s.data = t,
                                    0 == t.isHeredity ? s.ui.tooltip = t.des.description : s.ui.tooltip = t.des.description + "\n遗传技能不能被替换!",
                                    s.setHeredityVisible(t.isHeredity),
                                    this._skillCanvas.addChild(s.ui.target),
                                    this._barlist.push(s),
                                    s.addEventListener(u.CLICK, this.mouseClickHander, this),
                                    s
                            }
                            ,
                            r.deleteSkillInfoContainer = function(t) {
                                this.rest(),
                                    this._voList.splice(t - 1, 1),
                                    this.addSkillBar()
                            }
                            ,
                            r.rest = function() {
                                for (var t, i = this._skillCanvas.numChildren, r = 0; r < i; r++)
                                    (t = this._barlist[r]).removeEventListener(u.CLICK, this.mouseClickHander, this),
                                        t.ui.tooltip = null,
                                        t.removeAll()
                            }
                            ,
                            r.removeAll = function() {
                                this.rest(),
                                    this._myScroll = null,
                                    this._currentSkillBar = null,
                                    this._scrollBarMc = null,
                                    this._voList = null,
                                    this._skillCanvas = null,
                                    this._mc = null
                            }
                            ,
                            i(t, [{
                                key: "data",
                                set: function(t) {
                                    if (this._voList = t,
                                    null == this._voList || this._voList.length <= 0)
                                        return this._skillCanvas.visible = !1,
                                            void this.setScollBar(!1);
                                    this._skillCanvas.visible = !0,
                                        this.addSkillBar()
                                }
                            }, {
                                key: "ca",
                                set: function(t) {
                                    this._ca = t
                                }
                            }, {
                                key: "ui",
                                get: function() {
                                    return this._mc
                                }
                            }, {
                                key: "currentSkillBar",
                                get: function() {
                                    return this._currentSkillBar
                                }
                            }]),
                            t
                    }()).SCROLL_ONCE_PROGRESS = .1;
                var d = function(t) {
                    function s() {
                        for (var i, r = arguments.length, s = new Array(r), e = 0; e < r; e++)
                            s[e] = arguments[e];
                        return (i = t.call.apply(t, [this].concat(s)) || this)._silder = void 0,
                            i._scroll = void 0,
                            i._upArrow = void 0,
                            i._downArrow = void 0,
                            i
                    }
                    return r(s, t),
                        i(s, [{
                            key: "silder",
                            get: function() {
                                return this._silder || (this._silder = new c(this.getChildByName("silder"))),
                                    this._silder
                            }
                        }, {
                            key: "scroll",
                            get: function() {
                                return this._scroll || (this._scroll = new c(this.getChildByName("scroll"))),
                                    this._scroll
                            }
                        }, {
                            key: "upArrow",
                            get: function() {
                                return this._upArrow || (this._upArrow = new c(this.getChildByName("upArrow"))),
                                    this._upArrow
                            }
                        }, {
                            key: "downArrow",
                            get: function() {
                                return this._downArrow || (this._downArrow = new c(this.getChildByName("downArrow"))),
                                    this._downArrow
                            }
                        }]),
                        s
                }(c)
                    , g = function(t) {
                    function e() {
                        var i;
                        return (i = t.call(this) || this)._scrollBarMc = void 0,
                            i._maskMc = void 0,
                            i._containerMc = void 0,
                            i._target = h.Instance.getPrefabByName("SpiritBag_1600/SkillWindow_1600"),
                        i._target && null == i._target.getComponent(a) && (i._target.addComponent(a).target = s(i)),
                            i
                    }
                    return r(e, t),
                        i(e, [{
                            key: "scrollBarMc",
                            get: function() {
                                return this._scrollBarMc || (this._scrollBarMc = new c(this.getChildByName("scrollBarMc"))),
                                    this._scrollBarMc
                            }
                        }, {
                            key: "maskMc",
                            get: function() {
                                return this._maskMc || (this._maskMc = new c(this.getChildByName("maskMc"))),
                                    this._maskMc
                            }
                        }, {
                            key: "containerMc",
                            get: function() {
                                return this._containerMc || (this._containerMc = new d(this.getChildByName("containerMc"))),
                                    this._containerMc
                            }
                        }]),
                        e
                }(c);
                e._RF.pop()
            }
        }
    }
));
