System.register("chunks:///_virtual/SpiritDetailButton.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts"], (function(t) {
        var e, i, n, s;
        return {
            setters: [function(t) {
                e = t.createClass,
                    i = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    s = t.AgentNode
                }
            ],
            execute: function() {
                n._RF.push({}, "be6dawIHSZJxLIyEt47sXbK", "SpiritDetailButton", void 0);
                t("SpiritDetailButton", function() {
                    function t(t, e, i, n) {
                        void 0 === e && (e = null),
                        void 0 === i && (i = null),
                        void 0 === n && (n = 0),
                            this._ui = void 0,
                            this._onSelect = void 0,
                            this._onDeselect = void 0,
                            this._selected = void 0,
                            this._childrenIndex = void 0,
                            this._ui = new o(t),
                            this._ui.mouseChildren = !1,
                            this._ui.mouseEnabled = !1,
                            this._ui.gotoAndStop(1),
                            this._onSelect = e,
                            this._onDeselect = i,
                            this._childrenIndex = n,
                            this.selected = !1
                    }
                    var i = t.prototype;
                    return i.dispose = function() {
                        this._onSelect = null,
                            this._onDeselect = null
                    }
                        ,
                        i.onClick = function(t) {
                            this.selected = !0
                        }
                        ,
                        e(t, [{
                            key: "display",
                            get: function() {
                                return this._ui.target
                            }
                        }, {
                            key: "childrenIndex",
                            get: function() {
                                return this._childrenIndex
                            },
                            set: function(t) {
                                this._childrenIndex = t
                            }
                        }, {
                            key: "selected",
                            get: function() {
                                return this._selected
                            },
                            set: function(t) {
                                this._ui.gotoAndStop(t ? 3 : 1),
                                    this._selected = t,
                                    t ? null != this._onSelect && this._onSelect(this) : null != this._onDeselect && this._onDeselect(this)
                            }
                        }]),
                        t
                }());
                var o = function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._uiBg = void 0,
                            e._hitTarget = void 0,
                            e
                    }
                    return i(n, t),
                        e(n, [{
                            key: "uiBg",
                            get: function() {
                                return this._uiBg || (this._uiBg = new s(this.getChildByName("uiBg"))),
                                    this._uiBg
                            }
                        }, {
                            key: "hitTarget",
                            get: function() {
                                return this._hitTarget || (this._hitTarget = new s(this.getChildByName("hitTarget"))),
                                    this._hitTarget
                            }
                        }]),
                        n
                }(s);
                n._RF.pop()
            }
        }
    }
));
