System.register("chunks:///_virtual/ItemCells.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ItemShellDataProxy.ts", "./ConsumableItemCell.ts", "./ClickItemLogic.ts"], (function(e) {
        var t, l, s, i, n;
        return {
            setters: [function(e) {
                t = e.createClass
            }
                , function(e) {
                    l = e.cclegacy
                }
                , function(e) {
                    s = e.ItemShellDataProxy
                }
                , function(e) {
                    i = e.ConsumableItemCell
                }
                , function(e) {
                    n = e.ClickItemLogic
                }
            ],
            execute: function() {
                l._RF.push({}, "3f5b9lAN3xKpYGpTeo14NWV", "ItemCells", void 0);
                var r = e("ItemCells", function() {
                    function e(t) {
                        this._ui = void 0,
                            this._cellsPerPage = void 0,
                            this._clickItemLogic = void 0,
                            this._cells = void 0,
                            this._restoreSpiritCells = void 0,
                            this._ui = t,
                            this._cellsPerPage = e.CELL_ROWS * e.CELL_COLS,
                            this._clickItemLogic = new n,
                            this.initRestoreSpiritCells(),
                            this.initConsumableCells()
                    }
                    var l = e.prototype;
                    return l.dispose = function() {
                        for (var e, t = this._cells.length, l = 0; l < t; ++l)
                            null != (e = this._cells[l]) && e.dispose();
                        this._clickItemLogic.dispose()
                    }
                        ,
                        l.setDataAtPage = function(e) {
                            this.setRestoreSpiritCellsData(e),
                                this.setConsumableCellsData(e)
                        }
                        ,
                        l.empty = function() {
                            this.emptyDefaultCells(),
                                this.emptyNormalCells()
                        }
                        ,
                        l.initRestoreSpiritCells = function() {
                            this._restoreSpiritCells = []
                        }
                        ,
                        l.initConsumableCells = function() {
                            var t, l, s;
                            this._cells = [];
                            for (var n = 0; n < e.CELL_ROWS; ++n)
                                for (var r = 0; r < e.CELL_COLS; ++r)
                                    l = e.CELL_X + r * e.CELL_SPACE_X,
                                        s = e.CELL_Y + n * -e.CELL_SPACE_Y,
                                        t = new i(l + 292,s + 268,this.onConsumableCellClick.bind(this),n + "_" + r),
                                        this._ui.addChild(t.display),
                                        this._cells.push(t)
                        }
                        ,
                        l.hideAllCells = function() {
                            for (var e = 0; e < this._cells.length; e++)
                                this._cells[e] && (this._cells[e].visible = !1)
                        }
                        ,
                        l.showAllCells = function() {
                            for (var e = 0; e < this._cells.length; e++)
                                this._cells[e] && (this._cells[e].visible = !0)
                        }
                        ,
                        l.setRestoreSpiritCellsData = function(e) {
                            for (var t = this._restoreSpiritCells.length, l = 0; l < t; ++l)
                                this._restoreSpiritCells[l].data = 0 == e
                        }
                        ,
                        l.setConsumableCellsData = function(e) {
                            for (var t = this._cells.length, l = 0 == e ? this._restoreSpiritCells.length : 0, i = e * this._cellsPerPage - this._restoreSpiritCells.length, n = s.data.length, r = 0; r < t; ++r)
                                this._cells[r].data = r < l ? null : i < n ? s.data[i] : null,
                                    ++i
                        }
                        ,
                        l.onRestoreSpiritCellClick = function(e) {
                            this._clickItemLogic.restore(e)
                        }
                        ,
                        l.onConsumableCellClick = function(e, t) {
                            this._clickItemLogic.consume(e, t)
                        }
                        ,
                        l.emptyDefaultCells = function() {
                            for (var e, t = this._restoreSpiritCells.length, l = 0; l < t; ++l)
                                null != (e = this._restoreSpiritCells[l]) && (e.data = !1)
                        }
                        ,
                        l.emptyNormalCells = function() {
                            for (var e, t = this._cells.length, l = 0; l < t; ++l)
                                null != (e = this._cells[l]) && (e.data = null)
                        }
                        ,
                        l.calcConsumingItemPage = function(e) {
                            return null == e ? 0 : s.data.length > e.index ? this.calcPageByIndex(e.index) : this.calcMaxPage()
                        }
                        ,
                        l.calcMaxPage = function() {
                            return (this.totalItems % this._cellsPerPage != 0 ? this.totalItems / this._cellsPerPage + 1 : this.totalItems / this._cellsPerPage) - 1
                        }
                        ,
                        l.calcPageByIndex = function(e) {
                            var t = e + this._restoreSpiritCells.length;
                            return Math.floor(t / this._cellsPerPage)
                        }
                        ,
                        t(e, [{
                            key: "cellsPerPage",
                            get: function() {
                                return this._cellsPerPage
                            }
                        }, {
                            key: "totalItems",
                            get: function() {
                                return s.data.length + this._restoreSpiritCells.length
                            }
                        }, {
                            key: "cells",
                            get: function() {
                                return this._cells
                            }
                        }]),
                        e
                }());
                r.CELL_ROWS = 5,
                    r.CELL_COLS = 4,
                    r.CELL_X = 7,
                    r.CELL_Y = 13,
                    r.CELL_SPACE_X = 106,
                    r.CELL_SPACE_Y = 114,
                    l._RF.pop()
            }
        }
    }
));
