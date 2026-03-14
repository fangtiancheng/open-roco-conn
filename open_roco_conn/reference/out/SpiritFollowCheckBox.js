System.register("chunks:///_virtual/SpiritFollowCheckBox.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts"], (function(t) {
        var e, i, c, n;
        return {
            setters: [function(t) {
                e = t.createClass,
                    i = t.inheritsLoose
            }
                , function(t) {
                    c = t.cclegacy
                }
                , function(t) {
                    n = t.AgentNode
                }
            ],
            execute: function() {
                c._RF.push({}, "838ebf4FPRETbTou8WHt22L", "SpiritFollowCheckBox", void 0);
                t("SpiritFollowCheckBox", function() {
                    function t(t) {
                        this._ui = void 0,
                            this._check = void 0,
                            this._ui = new o(t),
                            this._ui.mouseChildren = !1,
                            this._ui.buttonMode = !0
                    }
                    return e(t, [{
                        key: "check",
                        get: function() {
                            return !!this._ui && this._ui.mcCheck.visible
                        },
                        set: function(t) {
                            this._check = t,
                            this._ui && (this._ui.mcCheck.visible = this._check)
                        }
                    }]),
                        t
                }());
                var o = function(t) {
                    function c() {
                        for (var e, i = arguments.length, c = new Array(i), n = 0; n < i; n++)
                            c[n] = arguments[n];
                        return (e = t.call.apply(t, [this].concat(c)) || this)._mcCheck = void 0,
                            e
                    }
                    return i(c, t),
                        e(c, [{
                            key: "mcCheck",
                            get: function() {
                                return this._mcCheck || (this._mcCheck = new n(this.getChildByName("mcCheck"))),
                                    this._mcCheck
                            }
                        }]),
                        c
                }(n);
                c._RF.pop()
            }
        }
    }
));
