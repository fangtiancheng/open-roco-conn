System.register("chunks:///_virtual/AttackContent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts", "./CombatActionProxy.ts", "./CombatControlBarCommands.ts", "./ControlBarCell.ts", "./AttackSkillCell.ts"], (function(t) {
        var l, e, s, n, i, a, c;
        return {
            setters: [function(t) {
                l = t.createClass
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    s = t.default
                }
                , function(t) {
                    n = t.CombatActionProxy
                }
                , function(t) {
                    i = t.CombatControlBarCommands
                }
                , function(t) {
                    a = t.ControlBarCell
                }
                , function(t) {
                    c = t.AttackSkillCell
                }
            ],
            execute: function() {
                e._RF.push({}, "6cb968be7dJUIJ46bTVb5bG", "AttackContent", void 0);
                var o = t("AttackContent", function() {
                    function t() {
                        this._controlBar = void 0,
                            this._data = void 0,
                            this._enabled = !1,
                            this._cells = void 0,
                            this._target = void 0,
                            this._target = s.Instance.getPrefabByName("combatSys_1600/content/AttackContentUI_1600"),
                            this.initCells(),
                            this.enabled = !0
                    }
                    var e = t.prototype;
                    return e.dispose = function() {
                        this.disposeCells()
                    }
                        ,
                        e.reset = function() {
                            this.data = null
                        }
                        ,
                        e.initCells = function() {
                            this._cells = [new c, new c, new c, new c];
                            for (var t = this._cells.length, l = 0; l < t; ++l)
                                if (this._cells[l]instanceof a) {
                                    var e = this._target.getChildByName("cell" + l);
                                    this._cells[l].initialize(e),
                                        this._cells[l].data = null,
                                        this._cells[l].onSelect = this.onSelectSkillCell.bind(this)
                                }
                        }
                        ,
                        e.clearCells = function() {
                            if (null != this._cells)
                                for (var t = this._cells.length, l = 0; l < t; ++l)
                                    this._cells[l]instanceof a && (this._cells[l].data = null)
                        }
                        ,
                        e.disposeCells = function() {
                            if (null != this._cells)
                                for (var t = this._cells.length, l = 0; l < t; ++l)
                                    this._cells[l]instanceof a && (this._cells[l].dispose(),
                                        this._cells[l] = null)
                        }
                        ,
                        e.setAvatar = function(t) {
                            null != t && t.spiritDes
                        }
                        ,
                        e.setSkills = function(t) {
                            if (null != this._cells) {
                                var l = this._cells.length
                                    , e = 0
                                    , s = 0;
                                if (null != t && null != t.skills)
                                    for (e = t.skills.length,
                                             s = 0; s < l; ++s)
                                        this._cells[s].data = e > s ? t.skills[s] : null;
                                else
                                    for (s = 0; s < l; ++s)
                                        this._cells[s].data = null
                            }
                        }
                        ,
                        e.onSelectSkillCell = function(t) {
                            if (null != t && t.selectable) {
                                for (var l = this._cells.length, e = 0; e < l; ++e)
                                    this._cells[e].selected = !1;
                                n.attack(t.id)
                            }
                        }
                        ,
                        e.mirror = function(t, l) {}
                        ,
                        l(t, [{
                            key: "controlBar",
                            set: function(t) {
                                this._controlBar = t
                            }
                        }, {
                            key: "data",
                            set: function(t) {
                                this._data = t,
                                    null != this._data ? (this.setAvatar(this._data.myCurSpirit),
                                        this.setSkills(this._data.myCurSpirit)) : (this.setAvatar(null),
                                        this.setSkills(null))
                            }
                        }, {
                            key: "enabled",
                            get: function() {
                                return this._enabled
                            },
                            set: function(t) {
                                for (var l = this._cells.length, e = 0; e < l; ++e)
                                    this._cells[e]instanceof a && (this._cells[e].enabled = t);
                                this._enabled = t
                            }
                        }, {
                            key: "id",
                            get: function() {
                                return i.ATTACK
                            }
                        }, {
                            key: "display",
                            get: function() {
                                return this._target
                            }
                        }]),
                        t
                }());
                o.ICON_WIDTH = 68,
                    o.ICON_HEIGHT = 68,
                    o.ICON_X = 17,
                    o.ICON_Y = 7,
                    e._RF.pop()
            }
        }
    }
));
