System.register("chunks:///_virtual/EquipIconTipsWithSpiritBag.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./global.ts", "./PropertyDes.ts", "./AgentNode.ts", "./NodeUtils.ts", "./ResManager.ts", "./UIManager.ts"], (function(e) {
        var t, i, s, n, r, o, h, a, c, p;
        return {
            setters: [function(e) {
                t = e.createClass,
                    i = e.inheritsLoose
            }
                , function(e) {
                    s = e.cclegacy
                }
                , function(e) {
                    n = e.Constants
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
                    a = e.NodeUtils
                }
                , function(e) {
                    c = e.default
                }
                , function(e) {
                    p = e.default
                }
            ],
            execute: function() {
                s._RF.push({}, "0665eHX4exFcoD/NpgFf7hb", "EquipIconTipsWithSpiritBag", void 0);
                e("EquipIconTipsWithSpiritBag", function() {
                    function e() {
                        this._view = void 0;
                        var e = c.Instance.getPrefabByName("common/EquipTipsRes_1");
                        this._view = new l(e),
                            this._view.mouseChildren = !1,
                            this._view.mouseEnabled = !1,
                            this.container.addChild(this._view.target)
                    }
                    var i = e.prototype;
                    return i.show = function(e, t, i) {
                        if (null != i.des) {
                            if (this.setText(this._view.nameText, this.getNameWithColor(i)),
                                this.setText(this._view.levelText, i.des.cdtLevel.toString()),
                            0 != Number(i.spiritID)) {
                                var s = r.SysAPI.getGDataAPI().getDataProxy(n.SPIRIT_DATA).select(Number(i.spiritID)).name;
                                this.setText(this._view.spiritNameText, s)
                            } else
                                this.setText(this._view.spiritNameText, "无");
                            this.setText(this._view.perp0Text, o.EQUIPMENT_PROPETY[i.baseAttr] + "：" + i.baseValue),
                                0 != i.specialAttr ? this.setText(this._view.perp1Text, o.EQUIPMENT_PROPETY[i.specialAttr] + "：" + i.specialValue) : this.setText(this._view.perp1Text, ""),
                                this.setText(this._view.getFromText, i.des.getFrom),
                                this.setText(this._view.priceText, i.price.toString()),
                                this._view.x = e,
                                this._view.y = t - 20,
                                a.setChildIndex(this.container, this._view.target, this.container.children.length - 1),
                                this._view.visible = !0
                        }
                    }
                        ,
                        i.setText = function(e, t) {
                            null != t && (e.htmlText = t)
                        }
                        ,
                        i.getNameWithColor = function(e) {
                            switch (e.quality) {
                                case 1:
                                    return "<color=#ff9900>" + e.des.name + "</color>";
                                case 2:
                                    return "<color=#009900>" + e.des.name + "</color>";
                                case 3:
                                    return "<color=#0086FF>" + e.des.name + "</color>";
                                case 4:
                                    return "<color=#FF3300>" + e.des.name + "</color>";
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
                            a.contains(this.container, this._view.target) && this.container.removeChild(this._view.target)
                        }
                        ,
                        t(e, [{
                            key: "container",
                            get: function() {
                                return p.gTips
                            }
                        }]),
                        e
                }());
                var l = function(e) {
                    function s() {
                        for (var t, i = arguments.length, s = new Array(i), n = 0; n < i; n++)
                            s[n] = arguments[n];
                        return (t = e.call.apply(e, [this].concat(s)) || this)._levelText = void 0,
                            t._perp0Text = void 0,
                            t._perp1Text = void 0,
                            t._getFromText = void 0,
                            t._priceText = void 0,
                            t._spiritNameText = void 0,
                            t._nameText = void 0,
                            t
                    }
                    return i(s, e),
                        t(s, [{
                            key: "spiritNameText",
                            get: function() {
                                return this._spiritNameText || (this._spiritNameText = new h(this.getChildByName("spiritNameText"))),
                                    this._spiritNameText
                            }
                        }, {
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
                        s
                }(h);
                s._RF.pop()
            }
        }
    }
));
