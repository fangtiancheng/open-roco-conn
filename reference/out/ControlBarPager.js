System.register("chunks:///_virtual/ControlBarPager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, n, i, a;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        i = t.Label,
                        a = t.NodeEventType
                }
            ],
            execute: function() {
                n._RF.push({}, "dcd37zRdltFjb/x2L5ZUYhm", "ControlBarPager", void 0);
                t("ControlBarPager", function() {
                    function t() {
                        this._currentPage = 0,
                            this._totalPages = 0,
                            this._ui = void 0,
                            this._onPageChange = void 0,
                            this._prevPageButton = void 0,
                            this._nextPageButton = void 0,
                            this._pageText = void 0
                    }
                    var n = t.prototype;
                    return n.initialize = function(t, e, n) {
                        void 0 === t && (t = null),
                        void 0 === e && (e = 1),
                        void 0 === n && (n = 1),
                            this._ui = t,
                            this._pageText = this._ui.getChildByName("pageText").getComponent(i),
                            this._prevPageButton = this._ui.getChildByName("prevPageButton"),
                            this._nextPageButton = this._ui.getChildByName("nextPageButton"),
                        null != this._ui && (null != this._prevPageButton && this._prevPageButton.on(a.TOUCH_END, this.onPrevPage, this),
                        null != this._nextPageButton && this._nextPageButton.on(a.TOUCH_END, this.onNextPage, this)),
                            this.setPage(e, n)
                    }
                        ,
                        n.dispose = function() {
                            null != this._ui && (null != this._prevPageButton && this._prevPageButton.off(a.TOUCH_END, this.onPrevPage, this),
                            null != this._nextPageButton && this._nextPageButton.off(a.TOUCH_END, this.onNextPage, this))
                        }
                        ,
                        n.setPage = function(t, e) {
                            this._currentPage = t > 0 ? t : 1,
                                this._totalPages = e > 0 ? e : 1,
                                this._currentPage = this._currentPage <= this._totalPages ? this._currentPage : this._totalPages,
                                this.refresh()
                        }
                        ,
                        n.prev = function() {
                            this.setPage(this._currentPage - 1, this._totalPages),
                            null != this._onPageChange && this._onPageChange(this._currentPage, this._totalPages)
                        }
                        ,
                        n.next = function() {
                            this.setPage(this._currentPage + 1, this._totalPages),
                            null != this._onPageChange && this._onPageChange(this._currentPage, this._totalPages)
                        }
                        ,
                        n.jump = function(t) {
                            this.setPage(t, this._totalPages),
                            null != this._onPageChange && this._onPageChange(this._currentPage, this._totalPages)
                        }
                        ,
                        n.refresh = function() {
                            null != this._ui && (null != this._prevPageButton && (this._prevPageButton.active = this._currentPage > 1),
                            null != this._nextPageButton && (this._nextPageButton.active = this._currentPage < this._totalPages),
                            null != this._pageText && (this._pageText.string = this._currentPage + " / " + this._totalPages))
                        }
                        ,
                        n.onPrevPage = function(t) {
                            this.prev()
                        }
                        ,
                        n.onNextPage = function(t) {
                            this.next()
                        }
                        ,
                        e(t, [{
                            key: "display",
                            get: function() {
                                return this._ui
                            }
                        }, {
                            key: "currentPage",
                            get: function() {
                                return this._currentPage
                            }
                        }, {
                            key: "totalPages",
                            get: function() {
                                return this._totalPages
                            }
                        }, {
                            key: "onPageChange",
                            set: function(t) {
                                this._onPageChange = t
                            }
                        }]),
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
