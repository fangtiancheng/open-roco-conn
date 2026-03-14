System.register("chunks:///_virtual/CatchItemContent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ItemSubtypes.ts", "./ItemTypes.ts", "./ResManager.ts", "./CombatActionProxy.ts", "./CombatControlBarCommands.ts", "./ControlBarCell.ts", "./ControlBarPager.ts", "./CatchItemCell.ts"], (function(t) {
        var e, s, i, n, l, a, h, o, c, r;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    s = t.cclegacy
                }
                , function(t) {
                    i = t.ItemSubtypes
                }
                , function(t) {
                    n = t.ItemTypes
                }
                , function(t) {
                    l = t.default
                }
                , function(t) {
                    a = t.CombatActionProxy
                }
                , function(t) {
                    h = t.CombatControlBarCommands
                }
                , function(t) {
                    o = t.ControlBarCell
                }
                , function(t) {
                    c = t.ControlBarPager
                }
                , function(t) {
                    r = t.CatchItemCell
                }
            ],
            execute: function() {
                s._RF.push({}, "2ee2e95a5hC+qbUGlfPuXSw", "CatchItemContent", void 0);
                t("CatchItemContent", function() {
                    function t() {
                        this._controlBar = void 0,
                            this._data = void 0,
                            this._enabled = !1,
                            this._items = void 0,
                            this._pager = void 0,
                            this._pageIndex = 0,
                            this._pageNum = 0,
                            this._cells = void 0,
                            this._itemsPerPage = 0,
                            this._target = void 0,
                            this._target = l.Instance.getPrefabByName("combatSys_1600/content/ItemContentUI_1600"),
                            this.initCells(),
                            this.initPager(),
                            this.enabled = !0
                    }
                    var s = t.prototype;
                    return s.dispose = function() {
                        this.disposeCells(),
                            this.disposePager()
                    }
                        ,
                        s.reset = function() {
                            this.data = null
                        }
                        ,
                        s.initCells = function() {
                            this._cells = [new r, new r, new r, new r, new r, new r],
                                this._itemsPerPage = this._cells.length;
                            for (var t = this._cells.length, e = 0; e < t; ++e)
                                if (this._cells[e]instanceof o) {
                                    var s = this._target.getChildByName("cell" + e);
                                    this._cells[e].initialize(s),
                                        this._cells[e].data = null,
                                        this._cells[e].onSelect = this.onSelectItem.bind(this),
                                        this._cells[e].onDeselect = this.onSelectItem.bind(this),
                                        this._cells[e].mouseOver = this.mouseOver.bind(this),
                                        this._cells[e].mouseOut = this.mouseOut.bind(this)
                                }
                        }
                        ,
                        s.clearCells = function() {
                            if (null != this._cells)
                                for (var t = this._cells.length, e = 0; e < t; ++e)
                                    this._cells[e]instanceof o && (this._cells[e].data = null)
                        }
                        ,
                        s.disposeCells = function() {
                            if (null != this._cells)
                                for (var t = this._cells.length, e = 0; e < t; ++e)
                                    this._cells[e]instanceof o && (this._cells[e].dispose(),
                                        this._cells[e] = null)
                        }
                        ,
                        s.initPager = function() {
                            this._pageIndex = 0,
                                this._pageNum = 1;
                            var t = this._target.getChildByName("pager");
                            null != t && (this._pager = new c,
                                this._pager.initialize(t),
                                this._pager.onPageChange = this.onPageChange.bind(this),
                                this._pager.setPage(this._pageIndex + 1, this._pageNum))
                        }
                        ,
                        s.disposePager = function() {
                            null != this._pager && (this._pager.dispose(),
                                this._pager = null)
                        }
                        ,
                        s.requestItems = function() {
                            a.requestItems(this.onItemDataLoaded.bind(this))
                        }
                        ,
                        s.onItemDataLoaded = function(t) {
                            this._items = this.filterItems(t),
                                null != this._items ? (this._pageIndex = 0,
                                    this._pageNum = this._items.length % this._itemsPerPage != 0 ? this._items.length / this._itemsPerPage + 1 : this._items.length / this._itemsPerPage,
                                    this.displayItems()) : this.clearCells()
                        }
                        ,
                        s.displayItems = function() {
                            if (null != this._items && null != this._cells) {
                                for (var t = this._cells.length, e = this._items.length, s = this._pageIndex * this._itemsPerPage, i = 0; i < t; ++i)
                                    this._cells[i].data = s < e ? this._items[s] : null,
                                        ++s;
                                this._pager.setPage(this._pageIndex + 1, this._pageNum)
                            }
                        }
                        ,
                        s.onPageChange = function(t, e) {
                            this._pageIndex = t - 1,
                                this._pageNum = e,
                                this.clearCells(),
                                this.displayItems()
                        }
                        ,
                        s.onSelectItem = function(t) {
                            if (null != t && t.selectable) {
                                for (var e = this._cells.length, s = 0; s < e; ++s)
                                    this._cells[s].selected = !1;
                                a.useItem(t.id)
                            }
                        }
                        ,
                        s.mouseOver = function(t) {
                            a.catchPreviewRate(t.catchRate)
                        }
                        ,
                        s.mouseOut = function(t) {
                            a.catchPreviewRate(10)
                        }
                        ,
                        s.filterItems = function(t) {
                            if (null == t)
                                return null;
                            for (var e, s = t.length, i = [], n = 0; n < s; ++n)
                                e = t[n],
                                this.isItemAcceptable(e) && i.push(e);
                            return i.length > 0 ? i : null
                        }
                        ,
                        s.isItemAcceptable = function(t) {
                            return null != t && null != t.itemDes && t.itemDes.type == n.COMBAT && (t.itemDes.subtype == i.COMBAT_CATCH || t.itemDes.subtype == i.COMBAT_ABSOLUTELY_CATCH)
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
                                    null != this._data ? this.requestItems() : this.clearCells()
                            }
                        }, {
                            key: "enabled",
                            get: function() {
                                return this._enabled
                            },
                            set: function(t) {
                                for (var e = this._cells.length, s = 0; s < e; ++s)
                                    this._cells[s]instanceof o && (this._cells[s].enabled = t);
                                this._enabled = t
                            }
                        }, {
                            key: "id",
                            get: function() {
                                return h.CATCH
                            }
                        }, {
                            key: "display",
                            get: function() {
                                return this._target
                            }
                        }]),
                        t
                }());
                s._RF.pop()
            }
        }
    }
));
