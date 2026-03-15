System.register("chunks:///_virtual/SpiritItemShell.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./ConsumingItemProxy.ts", "./ItemCells.ts", "./ItemShellPager.ts"], (function(e) {
        var t, i, s, l, n, h, r;
        return {
            setters: [function(e) {
                t = e.createClass,
                    i = e.inheritsLoose
            }
                , function(e) {
                    s = e.cclegacy
                }
                , function(e) {
                    l = e.AgentNode
                }
                , function(e) {
                    n = e.ConsumingItemProxy
                }
                , function(e) {
                    h = e.ItemCells
                }
                , function(e) {
                    r = e.ItemShellPager
                }
            ],
            execute: function() {
                s._RF.push({}, "088b2R7wdRCnonAv/cbof5V", "SpiritItemShell", void 0);
                e("SpiritItemShell", function() {
                    function e(e) {
                        this._ui = void 0,
                            this._cells = void 0,
                            this._pager = void 0,
                            this._hideAllCells = void 0,
                            this._ui = new a(e),
                            this._ui.y = 0,
                            this._cells = new h(this._ui.target),
                            this._pager = new r,
                            this._pager.initialize(this._ui.pagerUI, this._cells.cellsPerPage),
                            this._pager.onPageChange = this.onPageChange.bind(this),
                            this.reset()
                    }
                    var i = e.prototype;
                    return i.dispose = function() {
                        this._cells.dispose(),
                            this._pager.dispose()
                    }
                        ,
                        i.reset = function() {
                            this._cells.empty(),
                                this._pager.setPage(0, 1)
                        }
                        ,
                        i.hideCells = function() {
                            this._cells.hideAllCells(),
                                this._hideAllCells = !0
                        }
                        ,
                        i.showCells = function() {
                            this._cells.showAllCells(),
                                this._hideAllCells = !1
                        }
                        ,
                        i.update = function() {
                            var e = this._cells.calcConsumingItemPage(n.item);
                            this._cells.setDataAtPage(e),
                                this._hideAllCells ? this._pager.setPage(0, 1) : this._pager.setPage(e, this._cells.totalItems),
                                n.clear()
                        }
                        ,
                        i.onPageChange = function(e, t) {
                            this._cells.setDataAtPage(this._pager.currentPage)
                        }
                        ,
                        t(e, [{
                            key: "cells",
                            get: function() {
                                return this._cells.cells
                            }
                        }, {
                            key: "visible",
                            get: function() {
                                return this._ui.visible
                            },
                            set: function(e) {
                                this._ui.visible = e
                            }
                        }]),
                        e
                }());
                var a = function(e) {
                    function s() {
                        for (var t, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
                            s[l] = arguments[l];
                        return (t = e.call.apply(e, [this].concat(s)) || this)._pagerUI = void 0,
                            t
                    }
                    return i(s, e),
                        t(s, [{
                            key: "pagerUI",
                            get: function() {
                                return this._pagerUI || (this._pagerUI = this.getChildByName("pagerUI")),
                                    this._pagerUI
                            }
                        }]),
                        s
                }(l);
                s._RF.pop()
            }
        }
    }
));
