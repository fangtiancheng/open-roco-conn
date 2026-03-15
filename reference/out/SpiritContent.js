System.register("chunks:///_virtual/SpiritContent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts", "./CombatActionProxy.ts", "./CombatControlBarCommands.ts", "./ControlBarCell.ts", "./SpiritCell.ts"], (function(t) {
        var e, i, l, n, s, o, r;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    l = t.default
                }
                , function(t) {
                    n = t.CombatActionProxy
                }
                , function(t) {
                    s = t.CombatControlBarCommands
                }
                , function(t) {
                    o = t.ControlBarCell
                }
                , function(t) {
                    r = t.SpiritCell
                }
            ],
            execute: function() {
                i._RF.push({}, "8c24egLdxhHRJ9sjJ7mR1Dj", "SpiritContent", void 0);
                t("SpiritContent", function() {
                    function t() {
                        this._controlBar = void 0,
                            this._data = void 0,
                            this._enabled = !1,
                            this._cells = void 0,
                            this._target = void 0,
                            this._target = l.Instance.getPrefabByName("combatSys_1600/content/SpiritContentUI_1600"),
                            this.initCells(),
                            this.enabled = !0
                    }
                    var i = t.prototype;
                    return i.dispose = function() {
                        this.disposeCells()
                    }
                        ,
                        i.reset = function() {
                            this.data = null
                        }
                        ,
                        i.initCells = function() {
                            this._cells = [new r, new r, new r, new r, new r, new r];
                            for (var t = this._cells.length, e = 0; e < t; ++e)
                                if (this._cells[e]instanceof o) {
                                    var i = this._target.getChildByName("cell" + e);
                                    this._cells[e].initialize(i),
                                        this._cells[e].data = null,
                                        this._cells[e].onSelect = this.onSelectSpirit.bind(this)
                                }
                        }
                        ,
                        i.disposeCells = function() {
                            if (null != this._cells)
                                for (var t = this._cells.length, e = 0; e < t; ++e)
                                    this._cells[e]instanceof o && (this._cells[e].dispose(),
                                        this._cells[e] = null)
                        }
                        ,
                        i.setSpirits = function(t) {
                            for (var e = this._cells.length, i = 0; i < e; ++i)
                                null != t && null != t.spirits && null != t.spirits[i] ? this._cells[i].data = t.spirits[i] : this._cells[i].data = null
                        }
                        ,
                        i.selectCurrentSpirit = function(t) {
                            if (null != t)
                                for (var e = this._cells.length, i = 0; i < e; ++i)
                                    this._cells[i].selected = i == t.index - 1
                        }
                        ,
                        i.onSelectSpirit = function(t) {
                            if (null != t && t.selectable) {
                                for (var e = this._cells.length, i = 0; i < e; ++i)
                                    this._cells[i].selected = this._cells[i] == t;
                                n.changeSpirit(t.index)
                            }
                        }
                        ,
                        e(t, [{
                            key: "controlBar",
                            set: function(t) {
                                this._controlBar = t
                            }
                        }, {
                            key: "data",
                            set: function(t) {
                                this._data = t,
                                    null != this._data ? (this.setSpirits(this._data.myInfo),
                                        this.selectCurrentSpirit(this._data.myCurSpirit)) : this.setSpirits(null)
                            }
                        }, {
                            key: "enabled",
                            get: function() {
                                return this._enabled
                            },
                            set: function(t) {
                                for (var e = this._cells.length, i = 0; i < e; ++i)
                                    this._cells[i]instanceof o && (this._cells[i].enabled = t);
                                this._enabled = t
                            }
                        }, {
                            key: "id",
                            get: function() {
                                return s.SPIRIT
                            }
                        }, {
                            key: "display",
                            get: function() {
                                return this._target
                            }
                        }]),
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
