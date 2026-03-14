System.register("chunks:///_virtual/SkillInfoContainer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./AgentNode.ts", "./NodeExtend.ts", "./ToolTip.ts", "./ResManager.ts", "./SpiritDataReader.ts", "./SpiritBagSpiritIcon.ts"], (function(t) {
        var i, e, n, s, o, h, c, r, a, _, d, l, p;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        s = t.NodeEventType,
                        o = t.Event,
                        h = t.Vec2
                }
                , function(t) {
                    c = t.EventDispatcher
                }
                , function(t) {
                    r = t.AgentNode
                }
                , function(t) {
                    a = t.NodeExtend
                }
                , function(t) {
                    _ = t.ToolTipComponent
                }
                , function(t) {
                    d = t.default
                }
                , function(t) {
                    l = t.SpiritDataReader
                }
                , function(t) {
                    p = t.SpiritBagSpiritIcon
                }
            ],
            execute: function() {
                n._RF.push({}, "65691CLTwBI4KCyuBJCeOQN", "SkillInfoContainer", void 0),
                    t("SkillInfoContainer", function(t) {
                        function n(i) {
                            var e;
                            return void 0 === i && (i = 0),
                                (e = t.call(this) || this)._mc = void 0,
                                e._index = void 0,
                                e._vo = void 0,
                                e._ca = void 0,
                                e._icon = void 0,
                                e._type = 0,
                                e.isclick = !1,
                                e._type = i,
                                e.init(),
                                e
                        }
                        i(n, t);
                        var h = n.prototype;
                        return h.init = function() {
                            0 == this._type ? this._mc = new u : this._mc = new g,
                                this._mc.heredityMc.visible = !1,
                                this._mc.buttonMode = !0,
                                this._mc.mouseChildren = !1,
                                this._icon = new a,
                                this._icon.addComponent(_),
                                this._mc.addChild(this._icon),
                                this._mc.bg1.visible = !0,
                                this._mc.bg2.visible = !1,
                                this._mc.on(s.TOUCH_END, this.mouseClickHandler, this)
                        }
                            ,
                            h.setSkillIcon = function(t) {
                                var i = new p;
                                i.ui = this._icon,
                                    null != t && null != t.property ? (i.tooltip = t.property.name,
                                        i.load(t.property.id)) : (i.tooltip = null,
                                        i.load(0))
                            }
                            ,
                            h.setHeredityVisible = function(t) {
                                void 0 === t && (t = 0),
                                    this._mc.heredityMc.visible = 0 != t,
                                    this._mc.addChild(this._mc.heredityMc.target)
                            }
                            ,
                            h.upadte = function(t, i) {
                                null != this._icon && (this._mc.addChild(i),
                                    this._icon = i,
                                this._icon.getComponent(_) || this._icon.addComponent(_)),
                                    this._vo = t,
                                    this._mc.nameTxt.text = this._vo.des.name,
                                    this._mc.powerTxt.text = "威力：" + this._vo.des.power,
                                    this._mc.ppTxt.text = "PP：" + this._vo.PP + "/" + this._vo.des.ppMax,
                                    this._mc.bar.gotoAndStop(this._vo.PP / this._vo.des.ppMax * 100),
                                    this._mc.tooltip = this._vo.des.description
                            }
                            ,
                            h.mouseClickHandler = function(t) {
                                if (!this.isclick) {
                                    this.chooseState();
                                    var i = new o("CLICK");
                                    i.currentTarget = this,
                                        this.dispatchEvent(i)
                                }
                            }
                            ,
                            h.commonState = function() {
                                this.isclick = !1,
                                    this._mc.bg1.visible = !0,
                                    this._mc.bg2.visible = !1
                            }
                            ,
                            h.chooseState = function() {
                                this.isclick = !0,
                                    this._mc.bg1.visible = !1,
                                    this._mc.bg2.visible = !0
                            }
                            ,
                            h.removeAll = function() {
                                null != this._mc.parent && this._mc.parent.removeChild(this._mc.target),
                                    this._mc.off(s.TOUCH_END, this.mouseClickHandler, this),
                                    this._icon.tooltip = null,
                                    this._mc.removeChild(this._icon),
                                    this._mc = null,
                                    this._vo = null,
                                    this._ca = null,
                                    this._icon = null
                            }
                            ,
                            e(n, [{
                                key: "index",
                                get: function() {
                                    return this._index
                                },
                                set: function(t) {
                                    this._index = t
                                }
                            }, {
                                key: "ca",
                                set: function(t) {
                                    this._ca = t
                                }
                            }, {
                                key: "data",
                                get: function() {
                                    return this._vo
                                },
                                set: function(t) {
                                    this._vo = t,
                                        this._mc.nameTxt.mouseEnabled = !1,
                                        this._mc.nameTxt.selectable = !1,
                                        this._mc.powerTxt.mouseEnabled = !1,
                                        this._mc.powerTxt.selectable = !1,
                                        this._mc.ppTxt.mouseEnabled = !1,
                                        this._mc.ppTxt.selectable = !1,
                                        this._mc.nameTxt.text = this._vo.des.name,
                                        this._mc.powerTxt.text = "" + this._vo.des.power,
                                        this._mc.ppTxt.text = this._vo.PP + "/" + this._vo.des.ppMax,
                                        this._mc.bar.gotoAndStop(this._vo.PP / this._vo.des.ppMax * 100);
                                    var i = l.getDamageType(t.id);
                                    this._mc.damageMC.gotoAndStop(i);
                                    var e = l.getSpeed(t.id);
                                    this._mc.speedText.text = e.toString(),
                                        this._icon.name = "bim",
                                        this._icon.x = -82,
                                        this._icon.y = -42,
                                        this._icon.tooltip = this._vo.des.property.name,
                                        this.setSkillIcon(this._vo.des)
                                }
                            }, {
                                key: "ui",
                                get: function() {
                                    return this._mc
                                }
                            }, {
                                key: "icon",
                                get: function() {
                                    return this._icon
                                }
                            }]),
                            n
                    }(c)).CLICK = "CLICK";
                var m = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), s = 0; s < e; s++)
                            n[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._heredityMc = void 0,
                            i._bg1 = void 0,
                            i._bg2 = void 0,
                            i._nameTxt = void 0,
                            i._powerTxt = void 0,
                            i._ppTxt = void 0,
                            i._speedText = void 0,
                            i._damageMC = void 0,
                            i._bar = void 0,
                            i
                    }
                    return i(n, t),
                        e(n, [{
                            key: "heredityMc",
                            get: function() {
                                return this._heredityMc || (this._heredityMc = new r(this.getChildByName("heredityMc"))),
                                    this._heredityMc
                            }
                        }, {
                            key: "bg1",
                            get: function() {
                                return this._bg1 || (this._bg1 = new r(this.getChildByName("bg1"))),
                                    this._bg1
                            }
                        }, {
                            key: "bg2",
                            get: function() {
                                return this._bg2 || (this._bg2 = new r(this.getChildByName("bg2"))),
                                    this._bg2
                            }
                        }, {
                            key: "nameTxt",
                            get: function() {
                                return this._nameTxt || (this._nameTxt = new r(this.getChildByName("nameTxt"))),
                                    this._nameTxt
                            }
                        }, {
                            key: "powerTxt",
                            get: function() {
                                return this._powerTxt || (this._powerTxt = new r(this.getChildByName("powerTxt"))),
                                    this._powerTxt
                            }
                        }, {
                            key: "ppTxt",
                            get: function() {
                                return this._ppTxt || (this._ppTxt = new r(this.getChildByName("ppTxt"))),
                                    this._ppTxt
                            }
                        }, {
                            key: "speedText",
                            get: function() {
                                return this._speedText || (this._speedText = new r(this.getChildByName("speedText"))),
                                    this._speedText
                            }
                        }, {
                            key: "damageMC",
                            get: function() {
                                return this._damageMC || (this._damageMC = new r(this.getChildByName("damageMC"))),
                                    this._damageMC
                            }
                        }, {
                            key: "bar",
                            get: function() {
                                return this._bar || (this._bar = new r(this.getChildByName("bar"))),
                                    this._bar
                            }
                        }]),
                        n
                }(r)
                    , u = function(t) {
                    function e() {
                        var i;
                        return (i = t.call(this) || this)._target = d.Instance.getPrefabByName("SpiritBag_1600/SpiritSkillInfoMC1_1600"),
                        i._target.getComponent(_) || (i._target.addComponent(_),
                            i._target.tooltipPos = new h(0,-62)),
                            i
                    }
                    return i(e, t),
                        e
                }(m)
                    , g = function(t) {
                    function e() {
                        var i;
                        return (i = t.call(this) || this)._target = d.Instance.getPrefabByName("SpiritBag_1600/SpiritSkillInfoMC2_1600"),
                        i._target.getComponent(_) || (i._target.addComponent(_),
                            i._target.tooltipPos = new h(0,-62)),
                            i
                    }
                    return i(e, t),
                        e
                }(m);
                n._RF.pop()
            }
        }
    }
));
