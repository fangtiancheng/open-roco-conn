System.register("chunks:///_virtual/EquipIconCompareTips.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts", "./global.ts", "./AgentNode.ts", "./NodeUtils.ts"], (function(e) {
        var t, n, i, o, s, r, a;
        return {
            setters: [function(e) {
                t = e.createClass,
                    n = e.inheritsLoose
            }
                , function(e) {
                    i = e.cclegacy
                }
                , function(e) {
                    o = e.default
                }
                , function(e) {
                    s = e.__global
                }
                , function(e) {
                    r = e.AgentNode
                }
                , function(e) {
                    a = e.NodeUtils
                }
            ],
            execute: function() {
                i._RF.push({}, "47b0fV5oadIPa+C1c3EOPiQ", "EquipIconCompareTips", void 0),
                    e("EquipIconCompareTips", function() {
                        function e(t) {
                            void 0 === t && (t = 0),
                                this._view = void 0;
                            var n = e.SKIN_ARR[t]
                                , i = o.Instance.getPrefabByName(n);
                            this._view = new c(i),
                                this._view.mouseChildren = !1,
                                this._view.mouseEnabled = !1,
                                this.container.addChild(this._view.target),
                                this._view.visible = !1
                        }
                        var n = e.prototype;
                        return n.show = function(e, t, n, i) {}
                            ,
                            n.hide = function() {
                                this._view.visible = !1
                            }
                            ,
                            n.dispose = function() {
                                a.contains(this.container, this._view.target) && this.container.removeChild(this._view.target)
                            }
                            ,
                            n.getNameWithColor = function(e) {
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
                            n.setText = function(e, t) {
                                null != t && (e.htmlText = t)
                            }
                            ,
                            t(e, [{
                                key: "container",
                                get: function() {
                                    return s.SysAPI.getUISysAPI().getWindowContainer()
                                }
                            }]),
                            e
                    }()).SKIN_ARR = ["common/EquipTipsRes_0", "common/EquipTipsRes_1"];
                var c = function(e) {
                    function i() {
                        for (var t, n = arguments.length, i = new Array(n), o = 0; o < n; o++)
                            i[o] = arguments[o];
                        return (t = e.call.apply(e, [this].concat(i)) || this)._nameText0 = void 0,
                            t._levelText0 = void 0,
                            t._perp0Text0 = void 0,
                            t._perp1Text0 = void 0,
                            t
                    }
                    return n(i, e),
                        t(i, [{
                            key: "nameText0",
                            get: function() {
                                return this._nameText0 || (this._nameText0 = new r(this.getChildByName("nameText0"))),
                                    this._nameText0
                            }
                        }, {
                            key: "levelText0",
                            get: function() {
                                return this._levelText0 || (this._levelText0 = new r(this.getChildByName("levelText0"))),
                                    this._levelText0
                            }
                        }, {
                            key: "perp0Text0",
                            get: function() {
                                return this._perp0Text0 || (this._perp0Text0 = new r(this.getChildByName("perp0Text0"))),
                                    this._perp0Text0
                            }
                        }, {
                            key: "perp1Text0",
                            get: function() {
                                return this._perp1Text0 || (this._perp1Text0 = new r(this.getChildByName("perp1Text0"))),
                                    this._perp1Text0
                            }
                        }]),
                        i
                }(r);
                i._RF.pop()
            }
        }
    }
));
