System.register("chunks:///_virtual/ItemShellPager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CommonPager.ts"], (function(e) {
        var t, i, n;
        return {
            setters: [function(e) {
                t = e.createClass
            }
                , function(e) {
                    i = e.cclegacy
                }
                , function(e) {
                    n = e.CommonPager
                }
            ],
            execute: function() {
                i._RF.push({}, "9939dGnQfZH/rLq6fTO1NtH", "ItemShellPager", void 0);
                e("ItemShellPager", function() {
                    function e() {
                        this._ui = void 0,
                            this._pager = void 0,
                            this._onPageChange = void 0,
                            this._itemsPerPage = void 0,
                            this._pageIndex = void 0,
                            this._pageNum = void 0
                    }
                    var i = e.prototype;
                    return i.initialize = function(e, t) {
                        this._ui = e,
                            this._itemsPerPage = t,
                            this._pager = new n,
                            this._pager.initialize(this._ui),
                            this._pager.onPageChange = this.onCommonPageChange.bind(this),
                            this.setPage(0, 1)
                    }
                        ,
                        i.dispose = function() {
                            this._pager.dispose()
                        }
                        ,
                        i.setPage = function(e, t) {
                            this._pageIndex = e,
                                this._pageNum = t % this._itemsPerPage != 0 ? Math.floor(t / this._itemsPerPage) + 1 : Math.floor(t / this._itemsPerPage),
                                this._pageNum = Math.ceil(this._pageNum),
                                this._pager.setPage(this._pageIndex + 1, this._pageNum),
                                this.updatePageTextVisible()
                        }
                        ,
                        i.onCommonPageChange = function(e, t) {
                            this._pageIndex = e - 1,
                                this._pageNum = t,
                            null != this._onPageChange && this._onPageChange(this._pageIndex, this._pageNum)
                        }
                        ,
                        i.updatePageTextVisible = function() {}
                        ,
                        t(e, [{
                            key: "currentPage",
                            get: function() {
                                return this._pageIndex
                            }
                        }, {
                            key: "totalPages",
                            get: function() {
                                return this._pageNum
                            }
                        }, {
                            key: "onPageChange",
                            set: function(e) {
                                this._onPageChange = e
                            }
                        }]),
                        e
                }());
                i._RF.pop()
            }
        }
    }
));
