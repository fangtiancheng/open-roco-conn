System.register("chunks:///_virtual/SpiritBagIntimacyIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./OpenAsWinDes.ts", "./AgentNode.ts", "./BagDataProxy.ts", "./LangStrings.ts", "./NetActionProxy.ts", "./ToolTip.ts", "./CFunction.ts", "./ui2114.ts"], (function(i) {
        var t, n, e, s, a, c, o, l, r, u, h, y, _, g;
        return {
            setters: [function(i) {
                t = i.createClass,
                    n = i.inheritsLoose
            }
                , function(i) {
                    e = i.cclegacy,
                        s = i.Vec2,
                        a = i.NodeEventType
                }
                , function(i) {
                    c = i.__global
                }
                , function(i) {
                    o = i.OpenAsWinDes
                }
                , function(i) {
                    l = i.AgentNode
                }
                , function(i) {
                    r = i.BagDataProxy
                }
                , function(i) {
                    u = i.LangStrings
                }
                , function(i) {
                    h = i.NetActionProxy
                }
                , function(i) {
                    y = i.ToolTipComponent
                }
                , function(i) {
                    _ = i.CFunction
                }
                , function(i) {
                    g = i.ui2114
                }
            ],
            execute: function() {
                e._RF.push({}, "40f218fX1RIo6DJTZwSv8An", "SpiritBagIntimacyIcon", void 0);
                i("SpiritBagIntimacyIcon", function() {
                    function i(i, t) {
                        void 0 === t && (t = 0),
                            this._ui = void 0,
                            this._canClick = !1,
                            this._ui = new m(i),
                            this._ui.addComponent(y),
                            this._ui.intimacyBg.gotoAndStop(1),
                            this._ui.txtIntimacy.text = "",
                            this._ui.txtIntimacy.visible = !1,
                            this._ui.on(a.TOUCH_END, this.clickIntimacy, this),
                        null != this._ui && (this._ui.mouseChildren = !1,
                            this._ui.buttonMode = !0,
                            this.intimacy = t),
                            this.addGlobalEventListener("2114_Save", this.callBack)
                    }
                    var n = i.prototype;
                    return n.addGlobalEventListener = function(i, t) {
                        this.removeGlobalEventListener(i);
                        var n = function(i) {
                            t(i.data)
                        };
                        this.setGlobalValue("Activity_" + i, n),
                            c.SysAPI.getGEventAPI().angelEventDispatcher.addEventListener("Activity_" + i, n, this)
                    }
                        ,
                        n.removeGlobalEventListener = function(i) {
                            var t = this.getGlobalValue("Activity_" + i);
                            null != t && (this.setGlobalValue("Activity_" + i, null),
                                c.SysAPI.getGEventAPI().angelEventDispatcher.removeEventListener("Activity_" + i, t, this))
                        }
                        ,
                        n.setGlobalValue = function(i, t) {
                            c.SysAPI.getGDataAPI().addGlobalVal("Activity_" + i, t)
                        }
                        ,
                        n.getGlobalValue = function(i) {
                            return c.SysAPI.getGDataAPI().getGlobalVal("Activity_" + i)
                        }
                        ,
                        n.callBack = function(i) {
                            h.getSpiritBag()
                        }
                        ,
                        n.setProperty = function(i, t) {
                            null != this._ui && (this._ui[i] = t)
                        }
                        ,
                        n.clickIntimacy = function(i) {
                            if (this._canClick) {
                                var t = r.selectedSpirit
                                    , n = new o;
                                n.winPos = new s(0,0),
                                    n.name = "",
                                    n.src = "activityApp://2114/ui2114",
                                    n.params = {
                                        ui: "NpcClick",
                                        args: {
                                            spiritData: t,
                                            closeness: t.closeness,
                                            spiritID: t.id,
                                            spiritCatchtime: t.caughtTime,
                                            spiritAddPlan: t.addPlan,
                                            spiriCount0: t.maxHP,
                                            spiriCount1: t.PA,
                                            spiriCount2: t.MA,
                                            spiriCount3: t.PD,
                                            spiriCount4: t.MD
                                        }
                                    },
                                    n.isModal = !0,
                                    n.cache = !1,
                                    g.Instance.setParams(n.params)
                            } else
                                c.showMsgBox("满亲密度时才可获得属性加成！", 1, new _(this.onClickMsgBox,this))
                        }
                        ,
                        n.onClickMsgBox = function(i) {}
                        ,
                        t(i, [{
                            key: "intimacy",
                            set: function(i) {
                                switch (i) {
                                    case 105:
                                        this._ui.visible = !0,
                                            this._ui.intimacyBg.gotoAndStop(2),
                                            this._ui.txtIntimacy.visible = !1,
                                            this._ui.intimacyBg.energyLine.visible = !1,
                                            this.setProperty("tooltip", "普通关系"),
                                            this._canClick = !0;
                                        break;
                                    case 101:
                                        this._ui.visible = !0,
                                            this._ui.intimacyBg.gotoAndStop(3),
                                            this._ui.txtIntimacy.visible = !1,
                                            this._ui.intimacyBg.energyLine.visible = !1,
                                            this.setProperty("tooltip", u.SPIRIT_INTIMACY_CLOSE),
                                            this._canClick = !0;
                                        break;
                                    case 103:
                                        this._ui.visible = !0,
                                            this._ui.intimacyBg.gotoAndStop(4),
                                            this._ui.txtIntimacy.visible = !1,
                                            this._ui.intimacyBg.energyLine.visible = !1,
                                            this.setProperty("tooltip", u.SPIRIT_INTIMACY_SHADOW),
                                            this._canClick = !0;
                                        break;
                                    case 104:
                                        this._ui.visible = !0,
                                            this._ui.intimacyBg.gotoAndStop(5),
                                            this._ui.txtIntimacy.visible = !1,
                                            this._ui.intimacyBg.energyLine.visible = !1,
                                            this.setProperty("tooltip", u.SPIRIT_INTIMACY_CONSONANT),
                                            this._canClick = !0;
                                        break;
                                    case 102:
                                        this._ui.visible = !0,
                                            this._ui.intimacyBg.gotoAndStop(6),
                                            this._ui.txtIntimacy.visible = !1,
                                            this._ui.intimacyBg.energyLine.visible = !1,
                                            this.setProperty("tooltip", u.SPIRIT_INTIMACY_NOTABANDON),
                                            this._canClick = !0;
                                        break;
                                    case -1:
                                        this._ui.visible = !1,
                                            this._canClick = !1;
                                        break;
                                    default:
                                        this._ui.visible = !0,
                                            this._ui.intimacyBg.gotoAndStop(1),
                                            this._ui.intimacyBg.energyLine.gotoAndStop(i),
                                            this._ui.txtIntimacy.text = i + "",
                                            this._ui.txtIntimacy.visible = !0,
                                            this._ui.intimacyBg.energyLine.visible = !0,
                                            this.setProperty("tooltip", u.SPIRIT_INTIMACY),
                                            this._canClick = 100 == i
                                }
                            }
                        }]),
                        i
                }());
                var p = function(i) {
                    function e() {
                        for (var t, n = arguments.length, e = new Array(n), s = 0; s < n; s++)
                            e[s] = arguments[s];
                        return (t = i.call.apply(i, [this].concat(e)) || this)._energyLine = void 0,
                            t
                    }
                    return n(e, i),
                        t(e, [{
                            key: "energyLine",
                            get: function() {
                                return this._energyLine || (this._energyLine = new l(this.getChildByName("energyLine"))),
                                    this._energyLine
                            }
                        }]),
                        e
                }(l)
                    , m = function(i) {
                    function e() {
                        for (var t, n = arguments.length, e = new Array(n), s = 0; s < n; s++)
                            e[s] = arguments[s];
                        return (t = i.call.apply(i, [this].concat(e)) || this)._intimacyBg = void 0,
                            t._txtIntimacy = void 0,
                            t
                    }
                    return n(e, i),
                        t(e, [{
                            key: "intimacyBg",
                            get: function() {
                                return this._intimacyBg || (this._intimacyBg = new p(this.getChildByName("intimacyBg"))),
                                    this._intimacyBg
                            }
                        }, {
                            key: "txtIntimacy",
                            get: function() {
                                return this._txtIntimacy || (this._txtIntimacy = new l(this.getChildByName("txtIntimacy"))),
                                    this._txtIntimacy
                            }
                        }]),
                        e
                }(l);
                e._RF.pop()
            }
        }
    }
));
