System.register("chunks:///_virtual/EquipIconTips.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts", "./global.ts", "./PropertyDes.ts", "./AgentNode.ts", "./NodeUtils.ts"], (function(e) {
        var t, i, n, s, r, o, h, l;
        return {
            setters: [function(e) {
                t = e.createClass,
                    i = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy
                }
                , function(e) {
                    s = e.default
                }
                , function(e) {
                    r = e.__global
                }
                , function(e) {
                    o = e.PropertyDes
                }
                , function(e) {
                    h = e.AgentNode
                }
                , function(e) {
                    l = e.NodeUtils
                }
            ],
            execute: function() {
                n._RF.push({}, "be8dcFt4fdMhqd2vMHuzqse", "EquipIconTips", void 0),
                    e("EquipIconTips", function() {
                        function e(t) {
                            void 0 === t && (t = 0),
                                this._view = void 0;
                            var i = e.SKIN_ARR[t]
                                , n = s.Instance.getPrefabByName(i);
                            this._view = new c(n),
                                this._view.mouseChildren = !1,
                                this._view.mouseEnabled = !1,
                                this.container.addChild(this._view.target)
                        }
                        var i = e.prototype;
                        return i.show = function(e, t, i) {
                            null != i && null != i && null != i.des && null != i.des && (this.setText(this._view.nameText, this.getNameWithColor(i)),
                                this.setText(this._view.levelText, i.des.cdtLevel.toString()),
                                this.setText(this._view.perp0Text, o.EQUIPMENT_PROPETY[i.baseAttr] + "：" + i.baseValue),
                                0 != i.specialAttr ? this.setText(this._view.perp1Text, o.EQUIPMENT_PROPETY[i.specialAttr] + "：" + i.specialValue) : this.setText(this._view.perp1Text, ""),
                                this.setText(this._view.getFromText, i.des.getFrom),
                                this.setText(this._view.priceText, i.price.toString()),
                                this._view.x = e,
                                this._view.y = t - 20,
                                l.setChildIndex(this.container, this._view.target, this.container.children.length - 1),
                                this._view.visible = !0)
                        }
                            ,
                            i.setText = function(e, t) {
                                null != t && (e.htmlText = t)
                            }
                            ,
                            i.getNameWithColor = function(e) {
                                switch (e.quality) {
                                    case 1:
                                        return "<color=#FFFF99>" + e.des.name + "</color>";
                                    case 2:
                                        return "<color=#33FF33>" + e.des.name + "</color>";
                                    case 3:
                                        return "<color=#33FFFF>" + e.des.name + "</color>";
                                    case 4:
                                        return "<color=#FFFF00>" + e.des.name + "</color>";
                                    default:
                                        return e.des.name
                                }
                            }
                            ,
                            i.hide = function() {
                                this._view.visible = !1
                            }
                            ,
                            i.dispose = function() {
                                l.contains(this.container, this._view.target) && this.container.removeChild(this._view.target)
                            }
                            ,
                            t(e, [{
                                key: "container",
                                get: function() {
                                    return r.SysAPI.getUISysAPI().getWindowContainer()
                                }
                            }]),
                            e
                    }()).SKIN_ARR = ["common/EquipTipsRes_0", "common/EquipTipsRes_1"];
                var c = function(e) {
                    function n() {
                        for (var t, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (t = e.call.apply(e, [this].concat(n)) || this)._nameText = void 0,
                            t._levelText = void 0,
                            t._perp0Text = void 0,
                            t._perp1Text = void 0,
                            t._getFromText = void 0,
                            t._priceText = void 0,
                            t
                    }
                    return i(n, e),
                        t(n, [{
                            key: "nameText",
                            get: function() {
                                return this._nameText || (this._nameText = new h(this.getChildByName("nameText"))),
                                    this._nameText
                            }
                        }, {
                            key: "levelText",
                            get: function() {
                                return this._levelText || (this._levelText = new h(this.getChildByName("levelText"))),
                                    this._levelText
                            }
                        }, {
                            key: "perp0Text",
                            get: function() {
                                return this._perp0Text || (this._perp0Text = new h(this.getChildByName("perp0Text"))),
                                    this._perp0Text
                            }
                        }, {
                            key: "perp1Text",
                            get: function() {
                                return this._perp1Text || (this._perp1Text = new h(this.getChildByName("perp1Text"))),
                                    this._perp1Text
                            }
                        }, {
                            key: "getFromText",
                            get: function() {
                                return this._getFromText || (this._getFromText = new h(this.getChildByName("getFromText"))),
                                    this._getFromText
                            }
                        }, {
                            key: "priceText",
                            get: function() {
                                return this._priceText || (this._priceText = new h(this.getChildByName("priceText"))),
                                    this._priceText
                            }
                        }]),
                        n
                }(h);
                n._RF.pop()
            }
        }
    }
));
