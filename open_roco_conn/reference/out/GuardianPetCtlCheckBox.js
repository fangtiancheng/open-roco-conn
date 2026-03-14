System.register("chunks:///_virtual/GuardianPetCtlCheckBox.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Signal.ts", "./GuardianPetCtlStateBox.ts", "./AgentNode.ts"], (function(t) {
        var e, s, i, n, o, l, a, u;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    s = t.createClass,
                    i = t.assertThisInitialized
            }
                , function(t) {
                    n = t.cclegacy,
                        o = t.NodeEventType
                }
                , function(t) {
                    l = t.Signal
                }
                , function(t) {
                    a = t.GuardianPetCtlStateBox
                }
                , function(t) {
                    u = t.AgentNode
                }
            ],
            execute: function() {
                n._RF.push({}, "b5b9e3Lib5LUqz+tFXN/6B4", "GuardianPetCtlCheckBox", void 0);
                t("GuardianPetCtlCheckBox", function(t) {
                    function n(e, s, a, c) {
                        var h;
                        return void 0 === s && (s = 0),
                        void 0 === a && (a = ""),
                        void 0 === c && (c = null),
                            (h = t.call(this, e, s, a, c) || this).m_txtLabel = void 0,
                            h.m_selected = !1,
                            h.m_state = o.TOUCH_END,
                            h.onClick = new l(n),
                        h.res.getChildByName("txtLabel") && (h.m_txtLabel = e.txtLabel,
                            h.m_txtLabel = new u(h.res.getChildByName("txtLabel"))),
                        h.m_txtLabel && (h.m_txtLabel.mouseEnabled = !1,
                            h.m_txtLabel.selectable = !1),
                            h.res.on(o.MOUSE_ENTER, h.onMouseEvent, i(h)),
                            h.res.on(o.MOUSE_LEAVE, h.onMouseEvent, i(h)),
                            h.res.on(o.TOUCH_END, h.onUIResClick, i(h)),
                            h.res.mouseChildren = !1,
                            h.res.useHandCursor = !0,
                            h.res.buttonMode = !0,
                            h.updateView(),
                            h
                    }
                    e(n, t);
                    var a = n.prototype;
                    return a.dispose = function() {
                        this.res && (this.res.off(o.MOUSE_ENTER, this.onMouseEvent, this),
                            this.res.off(o.MOUSE_LEAVE, this.onMouseEvent, this),
                            this.res.off(o.TOUCH_END, this.onUIResClick, this)),
                            this.onClick.removeAll(),
                            t.prototype.dispose.call(this)
                    }
                        ,
                        a.onMouseEvent = function(t) {
                            this.enabled
                        }
                        ,
                        a.onUIResClick = function(t) {
                            this.enabled && (this.selected = !this.selected,
                                this.dispatchEvent(t),
                                this.onClick.dispatch(this))
                        }
                        ,
                        a.updateView = function() {
                            this.m_selected ? this.res.gotoAndStop(2) : this.res.gotoAndStop(1)
                        }
                        ,
                        s(n, [{
                            key: "label",
                            set: function(t) {
                                this.m_txtLabel && (null == t && (t = ""),
                                    this.m_txtLabel.text = t)
                            }
                        }, {
                            key: "htmlLabel",
                            set: function(t) {
                                this.m_txtLabel && (null == t && (t = ""),
                                    this.m_txtLabel.htmlText = t)
                            }
                        }, {
                            key: "selected",
                            get: function() {
                                return this.m_selected
                            },
                            set: function(t) {
                                this.m_selected;
                                this.m_selected = t,
                                    this.updateView()
                            }
                        }]),
                        n
                }(a));
                n._RF.pop()
            }
        }
    }
));
