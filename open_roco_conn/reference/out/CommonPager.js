System.register("chunks:///_virtual/CommonPager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./BuildLogHelper.ts"], (function(t) {
        var e, n, i, s, a, o;
        return {
            setters: [function(t) {
                e = t.createClass,
                    n = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy,
                        s = t.NodeEventType
                }
                , function(t) {
                    a = t.AgentNode
                }
                , function(t) {
                    o = t.default
                }
            ],
            execute: function() {
                i._RF.push({}, "6a187fhgXtDqrrrux6igMSo", "CommonPager", void 0);
                t("CommonPager", function() {
                    function t() {
                        this._currentPage = void 0,
                            this._totalPages = void 0,
                            this._ui = void 0,
                            this._onPageChange = void 0
                    }
                    var n = t.prototype;
                    return n.initialize = function(t, e, n) {
                        void 0 === t && (t = null),
                        void 0 === e && (e = 1),
                        void 0 === n && (n = 1),
                            this._ui = new g(t),
                        null != this._ui && (null != this._ui.prevPageButton && this._ui.prevPageButton.on(s.TOUCH_END, this.onPrevPage, this),
                        null != this._ui.nextPageButton && this._ui.nextPageButton.on(s.TOUCH_END, this.onNextPage, this)),
                            this.setPage(e, n)
                    }
                        ,
                        n.dispose = function() {
                            null != this._ui && (null != this._ui.prevPageButton && this._ui.prevPageButton.off(s.TOUCH_END, this.onPrevPage, this),
                            null != this._ui.nextPageButton && this._ui.nextPageButton.off(s.TOUCH_END, this.onNextPage, this))
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
                            null != this._ui && null != this._ui.pageText && (0 == this.isInteger(this._currentPage) && o.IS_LOCAL,
                            0 == this.isInteger(this._totalPages) && o.IS_LOCAL,
                                this._ui.pageText.text = this._currentPage + " / " + this._totalPages)
                        }
                        ,
                        n.isInteger = function(t) {
                            return t % 1 == 0
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
                                return this._ui.target
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
                var g = function(t) {
                    function i() {
                        for (var e, n = arguments.length, i = new Array(n), s = 0; s < n; s++)
                            i[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(i)) || this)._pageText = void 0,
                            e._prevPageButton = void 0,
                            e._nextPageButton = void 0,
                            e
                    }
                    return n(i, t),
                        e(i, [{
                            key: "pageText",
                            get: function() {
                                return this._pageText || (this._pageText = new a(this.getChildByName("pageText"))),
                                    this._pageText
                            }
                        }, {
                            key: "prevPageButton",
                            get: function() {
                                return this._prevPageButton || (this._prevPageButton = new a(this.getChildByName("prevPageButton"))),
                                    this._prevPageButton
                            }
                        }, {
                            key: "nextPageButton",
                            get: function() {
                                return this._nextPageButton || (this._nextPageButton = new a(this.getChildByName("nextPageButton"))),
                                    this._nextPageButton
                            }
                        }]),
                        i
                }(a);
                i._RF.pop()
            }
        }
    }
));
