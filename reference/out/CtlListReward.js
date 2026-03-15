System.register("chunks:///_virtual/CtlListReward.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UICtlBase.ts", "./AgentNode.ts", "./RewardIcon.ts"], (function(t) {
        var e, i, l, s, _, c;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    l = t.cclegacy
                }
                , function(t) {
                    s = t.UICtlBase
                }
                , function(t) {
                    _ = t.AgentNode
                }
                , function(t) {
                    c = t.RewardIcon
                }
            ],
            execute: function() {
                l._RF.push({}, "46cb3p4aoFEcoeORKtXZuK9", "CtlListReward", void 0);
                t("CtlListReward", function(t) {
                    function i(e, i) {
                        var l;
                        (l = t.call(this, e) || this)._ui = void 0,
                            l.m_lstItem = void 0,
                            l.m_lstData = [],
                            l._ui = new n(e.target),
                            l.m_lstItem = [];
                        for (var s = 0; s < i; ++s) {
                            var _ = new c(l._ui["ctlItem_" + s],s);
                            l.m_lstItem.push(_)
                        }
                        return l
                    }
                    e(i, t);
                    var l = i.prototype;
                    return l.dispose = function() {
                        this.m_lstData = [];
                        for (var e = 0; e < this.m_lstItem.length; ++e) {
                            this.m_lstItem[e].dispose()
                        }
                        this.m_lstItem = [],
                            t.prototype.dispose.call(this)
                    }
                        ,
                        l.setListData = function(t) {
                            this.m_lstData = t,
                                this.updateView()
                        }
                        ,
                        l.updateView = function() {
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
                        i
                }(s));
                var n = function(t) {
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
