System.register("chunks:///_virtual/BubbleCombatTooltipSkin.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts", "./AbstractBubbleSkin.ts"], (function(t) {
        var e, i, n, o, r, s, a;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        o = t.UITransform,
                        r = t.Rect
                }
                , function(t) {
                    s = t.default
                }
                , function(t) {
                    a = t.AbstractBubbleSkin
                }
            ],
            execute: function() {
                n._RF.push({}, "686aa/S4tpNKbLyoyI7/oAv", "BubbleCombatTooltipSkin", void 0);
                t("BubbleCombatTooltipSkin", function(t) {
                    function n() {
                        return t.call(this) || this
                    }
                    e(n, t);
                    var a = n.prototype;
                    return a.init = function() {
                        t.prototype.init.call(this),
                            this._target = s.Instance.getPrefabByName("combatSys_1600/BubbleCombatTooltipSkin_1600"),
                            this._bg = this._target.getChildByName("bg"),
                            this._arrow = this._target.getChildByName("arrow")
                    }
                        ,
                        a.setSize = function(t, e) {
                            this._bg.getComponent(o).setContentSize(t, e)
                        }
                        ,
                        a.unload = function() {
                            this._bg.parent && this._bg.removeFromParent(),
                                this._bg.destroy(),
                                this._bg = null
                        }
                        ,
                        a.disopse = function() {
                            this._target && this._target.parent && this._target.removeFromParent(),
                            this._target && this._target.destroy(),
                                this._target = null
                        }
                        ,
                        i(n, [{
                            key: "contentRect",
                            get: function() {
                                return new r(this._bg.position.x,this._bg.position.y,this._bg.position.x + this._bg.getComponent(o).width,this._bg.position.y + this._bg.getComponent(o).height)
                            }
                        }, {
                            key: "borderWidth",
                            get: function() {
                                return 20
                            }
                        }, {
                            key: "borderHeight",
                            get: function() {
                                return 12
                            }
                        }]),
                        n
                }(a));
                n._RF.pop()
            }
        }
    }
));
