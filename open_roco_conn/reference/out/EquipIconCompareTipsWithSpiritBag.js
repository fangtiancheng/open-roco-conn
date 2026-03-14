System.register("chunks:///_virtual/EquipIconCompareTipsWithSpiritBag.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./NodeUtils.ts", "./ResManager.ts", "./UIManager.ts"], (function(e) {
        var t, i, n, o, r, s, a;
        return {
            setters: [function(e) {
                t = e.createClass,
                    i = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    o = e.AgentNode
                }
                , function(e) {
                    r = e.NodeUtils
                }
                , function(e) {
                    s = e.default
                }
                , function(e) {
                    a = e.default
                }
            ],
            execute: function() {
                n._RF.push({}, "52c46BulAJFkptNigpUkGx0", "EquipIconCompareTipsWithSpiritBag", void 0),
                    e("EquipIconCompareTipsWithSpiritBag", function() {
                        function e(t) {
                            void 0 === t && (t = 0),
                                this._view = void 0;
                            var i = e.SKIN_ARR[t]
                                , n = s.Instance.getPrefabByName(i);
                            this._view = new u(n),
                                this._view.mouseChildren = !1,
                                this._view.mouseEnabled = !1,
                                this.container.addChild(this._view.target),
                                this._view.visible = !1
                        }
                        var i = e.prototype;
                        return i.show = function(e, t, i, n) {}
                            ,
                            i.hide = function() {
                                this._view.visible = !1
                            }
                            ,
                            i.dispose = function() {
                                r.contains(this.container, this._view.target) && this.container.removeChild(this._view.target)
                            }
                            ,
                            i.getNameWithColor = function(e) {
                                switch (e.quality) {
                                    case 1:
                                        return "<font color='#FF9900'>" + e.des.name + "</font>";
                                    case 2:
                                        return "<font color='#009900'>" + e.des.name + "</font>";
                                    case 3:
                                        return "<font color='#0086FF'>" + e.des.name + "</font>";
                                    case 4:
                                        return "<font color='#FF3300'>" + e.des.name + "</font>";
                                    default:
                                        return e.des.name
                                }
                            }
                            ,
                            i.setText = function(e, t) {
                                null != t && (e.htmlText = t)
                            }
                            ,
                            t(e, [{
                                key: "container",
                                get: function() {
                                    return a.gTips
                                }
                            }]),
                            e
                    }()).SKIN_ARR = ["common/EquipTipsRes_0", "common/EquipTipsRes_1"];
                var u = function(e) {
                    function n() {
                        for (var t, i = arguments.length, n = new Array(i), o = 0; o < i; o++)
                            n[o] = arguments[o];
                        return (t = e.call.apply(e, [this].concat(n)) || this)._nameText0 = void 0,
                            t._levelText0 = void 0,
                            t._perp0Text0 = void 0,
                            t._perp1Text0 = void 0,
                            t
                    }
                    return i(n, e),
                        t(n, [{
                            key: "nameText0",
                            get: function() {
                                return this._nameText0 || (this._nameText0 = new o(this.getChildByName("nameText0"))),
                                    this._nameText0
                            }
                        }, {
                            key: "levelText0",
                            get: function() {
                                return this._levelText0 || (this._levelText0 = new o(this.getChildByName("levelText0"))),
                                    this._levelText0
                            }
                        }, {
                            key: "perp0Text0",
                            get: function() {
                                return this._perp0Text0 || (this._perp0Text0 = new o(this.getChildByName("perp0Text0"))),
                                    this._perp0Text0
                            }
                        }, {
                            key: "perp1Text0",
                            get: function() {
                                return this._perp1Text0 || (this._perp1Text0 = new o(this.getChildByName("perp1Text0"))),
                                    this._perp1Text0
                            }
                        }]),
                        n
                }(o);
                n._RF.pop()
            }
        }
    }
));
