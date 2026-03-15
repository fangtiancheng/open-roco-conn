System.register("chunks:///_virtual/CtlList.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UICtlBase.ts", "./AgentNode.ts", "./SpiritItem.ts"], (function(t) {
        var e, i, l, s, n, _, c;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    l = t.cclegacy,
                        s = t.NodeEventType
                }
                , function(t) {
                    n = t.UICtlBase
                }
                , function(t) {
                    _ = t.AgentNode
                }
                , function(t) {
                    c = t.SpiritItem
                }
            ],
            execute: function() {
                l._RF.push({}, "ece81DaoBpA1YkwphvXL56z", "CtlList", void 0);
                t("CtlList", function(t) {
                    function l(e, i, l, s, n, _, o) {
                        var h;
                        void 0 === l && (l = 0),
                        void 0 === s && (s = ""),
                        void 0 === n && (n = null),
                        void 0 === o && (o = !0),
                            (h = t.call(this, e, l, s, n) || this)._ui = void 0,
                            h.m_lstItem = void 0,
                            h.m_lstData = [],
                            h.selectedItem = void 0,
                            h._ui = new m(e.target),
                            h.m_lstItem = [];
                        for (var r = 0; r < i; ++r) {
                            var I = new c(h._ui["ctlItem_" + r],r,s);
                            h.m_lstItem.push(I)
                        }
                        return h.listeningClick = o,
                            h
                    }
                    e(l, t);
                    var n = l.prototype;
                    return n.dispose = function() {
                        this.m_lstData = [];
                        for (var e = 0; e < this.m_lstItem.length; ++e) {
                            this.m_lstItem[e].dispose()
                        }
                        this.m_lstItem = [],
                            t.prototype.dispose.call(this)
                    }
                        ,
                        n.setListData = function(t) {
                            this.m_lstData = t,
                                this.updateView()
                        }
                        ,
                        n.updateView = function() {
                            for (var t = 0; t < this.m_lstItem.length; ++t) {
                                var e = this.m_lstItem[t];
                                if (t + 0 < this.m_lstData.length) {
                                    var i = this.m_lstData[t + 0];
                                    e.data = i,
                                        e.visible = !0
                                } else
                                    e.data = null,
                                        e.visible = !1
                            }
                        }
                        ,
                        n.onItemMouseClickedHandler = function(t) {}
                        ,
                        i(l, [{
                            key: "listeningClick",
                            set: function(t) {
                                var e, i;
                                for (e = 0; e < this.m_lstItem.length; e++)
                                    i = this.m_lstItem[e],
                                        t ? i._ui.on(s.TOUCH_END, this.onItemMouseClickedHandler, this) : i._ui.off(s.TOUCH_END, this.onItemMouseClickedHandler, this)
                            }
                        }]),
                        l
                }(n));
                var m = function(t) {
                    function l() {
                        for (var e, i = arguments.length, l = new Array(i), s = 0; s < i; s++)
                            l[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(l)) || this)._ctlItem_0 = void 0,
                            e._ctlItem_1 = void 0,
                            e._ctlItem_2 = void 0,
                            e._ctlItem_3 = void 0,
                            e._ctlItem_4 = void 0,
                            e._ctlItem_5 = void 0,
                            e
                    }
                    return e(l, t),
                        i(l, [{
                            key: "ctlItem_0",
                            get: function() {
                                return this._ctlItem_0 || (this._ctlItem_0 = new _(this.getChildByName("ctlItem_0"))),
                                    this._ctlItem_0
                            }
                        }, {
                            key: "ctlItem_1",
                            get: function() {
                                return this._ctlItem_1 || (this._ctlItem_1 = new _(this.getChildByName("ctlItem_1"))),
                                    this._ctlItem_1
                            }
                        }, {
                            key: "ctlItem_2",
                            get: function() {
                                return this._ctlItem_2 || (this._ctlItem_2 = new _(this.getChildByName("ctlItem_2"))),
                                    this._ctlItem_2
                            }
                        }, {
                            key: "ctlItem_3",
                            get: function() {
                                return this._ctlItem_3 || (this._ctlItem_3 = new _(this.getChildByName("ctlItem_3"))),
                                    this._ctlItem_3
                            }
                        }, {
                            key: "ctlItem_4",
                            get: function() {
                                return this._ctlItem_4 || (this._ctlItem_4 = new _(this.getChildByName("ctlItem_4"))),
                                    this._ctlItem_4
                            }
                        }, {
                            key: "ctlItem_5",
                            get: function() {
                                return this._ctlItem_5 || (this._ctlItem_5 = new _(this.getChildByName("ctlItem_5"))),
                                    this._ctlItem_5
                            }
                        }]),
                        l
                }(_);
                l._RF.pop()
            }
        }
    }
));
