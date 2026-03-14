System.register("chunks:///_virtual/SpiritEquipFilter.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./SpiritBagRefProxy.ts"], (function(t) {
        var i, e, o, n, s, g, h;
        return {
            setters: [function(t) {
                i = t.createClass,
                    e = t.inheritsLoose
            }
                , function(t) {
                    o = t.cclegacy,
                        n = t.NodeEventType
                }
                , function(t) {
                    s = t.AgentNodeComponent,
                        g = t.AgentNode
                }
                , function(t) {
                    h = t.SpiritBagRefProxy
                }
            ],
            execute: function() {
                o._RF.push({}, "1e825k/ImtOCYTv/t1cQvH/", "SpiritEquipFilter", void 0),
                    t("SpiritEquipFilter", function() {
                        function t(i) {
                            this._ui = void 0,
                                this._vo = void 0,
                                this.callback = void 0,
                                this._currentType = 0,
                                this._ui = new u(i);
                            for (var e = 0; e < t.FILTER_TYPE.length; e++) {
                                var o = t.FILTER_TYPE[e]
                                    , s = this._ui["tog" + o];
                                s && (s.data = o,
                                    s.on(n.TOUCH_END, this.onClickNode, this))
                            }
                            this._ui.sureBtn.on(n.TOUCH_END, this.onSure, this),
                                this._ui.closeBtn.on(n.TOUCH_END, this.onClose, this)
                        }
                        var e = t.prototype;
                        return e.onClickNode = function(t) {
                            var i = t.target.getComponent(s).target;
                            if (i) {
                                var e = i.data;
                                this.select = e
                            }
                        }
                            ,
                            e.onSure = function(t) {
                                this.callback && this.callback(this._currentType),
                                    h.spiritBagPanel.goBack()
                            }
                            ,
                            e.onClose = function(t) {
                                h.spiritBagPanel.goBack()
                            }
                            ,
                            e.show = function(t) {
                                this._ui.visible = !0,
                                    this.select = t
                            }
                            ,
                            e.hide = function() {
                                this._ui.visible = !1
                            }
                            ,
                            e.dispose = function() {
                                this._ui = null,
                                    this.data = null;
                                for (var i = 0; i < t.FILTER_TYPE.length; i++) {
                                    var e = t.FILTER_TYPE[i]
                                        , o = this._ui["tog" + e];
                                    o && (o.data = e,
                                        o.off(n.TOUCH_END, this.onClickNode, this))
                                }
                            }
                            ,
                            i(t, [{
                                key: "visible",
                                get: function() {
                                    return this._ui.visible
                                },
                                set: function(t) {
                                    this._ui.visible = t
                                }
                            }, {
                                key: "select",
                                set: function(i) {
                                    this._currentType = i;
                                    for (var e = 0; e < t.FILTER_TYPE.length; e++) {
                                        var o = this._ui["tog" + t.FILTER_TYPE[e]];
                                        o && (o.select = i == t.FILTER_TYPE[e])
                                    }
                                }
                            }, {
                                key: "data",
                                set: function(t) {
                                    null != this._ui && (this._vo = t)
                                }
                            }]),
                            t
                    }()).FILTER_TYPE = [0, 7, 2, 3, 4, 5, 10, 9, 8, 11];
                var r = function(t) {
                    function o() {
                        for (var i, e = arguments.length, o = new Array(e), n = 0; n < e; n++)
                            o[n] = arguments[n];
                        return (i = t.call.apply(t, [this].concat(o)) || this)._img_select2 = void 0,
                            i
                    }
                    return e(o, t),
                        i(o, [{
                            key: "img_select2",
                            get: function() {
                                return this._img_select2 || (this._img_select2 = new g(this.getChildByName("img_select2"))),
                                    this._img_select2
                            }
                        }, {
                            key: "select",
                            set: function(t) {
                                this.img_select2.visible = t
                            }
                        }]),
                        o
                }(g)
                    , u = function(t) {
                    function o() {
                        for (var i, e = arguments.length, o = new Array(e), n = 0; n < e; n++)
                            o[n] = arguments[n];
                        return (i = t.call.apply(t, [this].concat(o)) || this)._closeBtn = void 0,
                            i._sureBtn = void 0,
                            i._tog0 = void 0,
                            i._tog7 = void 0,
                            i._tog2 = void 0,
                            i._tog3 = void 0,
                            i._tog4 = void 0,
                            i._tog5 = void 0,
                            i._tog10 = void 0,
                            i._tog9 = void 0,
                            i._tog8 = void 0,
                            i._tog11 = void 0,
                            i
                    }
                    return e(o, t),
                        i(o, [{
                            key: "closeBtn",
                            get: function() {
                                return this._closeBtn || (this._closeBtn = new g(this.getChildByName("closeBtn"))),
                                    this._closeBtn
                            }
                        }, {
                            key: "sureBtn",
                            get: function() {
                                return this._sureBtn || (this._sureBtn = new g(this.getChildByName("sureBtn"))),
                                    this._sureBtn
                            }
                        }, {
                            key: "tog0",
                            get: function() {
                                return this._tog0 || (this._tog0 = new r(this.getChildByName("tog0"))),
                                    this._tog0
                            }
                        }, {
                            key: "tog7",
                            get: function() {
                                return this._tog7 || (this._tog7 = new r(this.getChildByName("tog7"))),
                                    this._tog7
                            }
                        }, {
                            key: "tog2",
                            get: function() {
                                return this._tog2 || (this._tog2 = new r(this.getChildByName("tog2"))),
                                    this._tog2
                            }
                        }, {
                            key: "tog3",
                            get: function() {
                                return this._tog3 || (this._tog3 = new r(this.getChildByName("tog3"))),
                                    this._tog3
                            }
                        }, {
                            key: "tog4",
                            get: function() {
                                return this._tog4 || (this._tog4 = new r(this.getChildByName("tog4"))),
                                    this._tog4
                            }
                        }, {
                            key: "tog5",
                            get: function() {
                                return this._tog5 || (this._tog5 = new r(this.getChildByName("tog5"))),
                                    this._tog5
                            }
                        }, {
                            key: "tog10",
                            get: function() {
                                return this._tog10 || (this._tog10 = new r(this.getChildByName("tog10"))),
                                    this._tog10
                            }
                        }, {
                            key: "tog9",
                            get: function() {
                                return this._tog9 || (this._tog9 = new r(this.getChildByName("tog9"))),
                                    this._tog9
                            }
                        }, {
                            key: "tog8",
                            get: function() {
                                return this._tog8 || (this._tog8 = new r(this.getChildByName("tog8"))),
                                    this._tog8
                            }
                        }, {
                            key: "tog11",
                            get: function() {
                                return this._tog11 || (this._tog11 = new r(this.getChildByName("tog11"))),
                                    this._tog11
                            }
                        }]),
                        o
                }(g);
                o._RF.pop()
            }
        }
    }
));
