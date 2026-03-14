System.register("chunks:///_virtual/AbandonedStorageView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeUtils.ts", "./AbandonedSearchBarSprite.ts", "./AbandonedSpiritChangeBar.ts", "./AbandonedSpiritContainer.ts", "./AbandonedSpiritInformationBar.ts"], (function(i) {
        var t, n, a, r, e, o, s;
        return {
            setters: [function(i) {
                t = i.createClass
            }
                , function(i) {
                    n = i.cclegacy
                }
                , function(i) {
                    a = i.NodeUtils
                }
                , function(i) {
                    r = i.AbandonedSearchBarSprite
                }
                , function(i) {
                    e = i.AbandonedSpiritChangeBar
                }
                , function(i) {
                    o = i.AbandonedSpiritContainer
                }
                , function(i) {
                    s = i.AbandonedSpiritInformationBar
                }
            ],
            execute: function() {
                n._RF.push({}, "52e98OkR6dMArErE0ZZAtmw", "AbandonedStorageView", void 0);
                i("AbandonedStorageView", function() {
                    function i() {
                        this._compatibleAPI = void 0,
                            this._container = void 0,
                            this._containerBar = void 0,
                            this._informationBar = void 0,
                            this._searchBar = void 0,
                            this._changeBar = void 0
                    }
                    var n = i.prototype;
                    return n.initialize = function() {
                        this._containerBar = new o(this._compatibleAPI),
                            this._informationBar = new s(this._compatibleAPI),
                            this._searchBar = new r(this._compatibleAPI),
                            this._changeBar = new e(this._compatibleAPI),
                            this._containerBar.reform(),
                            this._informationBar.reform(),
                            this._searchBar.reform(),
                            this._changeBar.reform(),
                        null != this._compatibleAPI && (this._compatibleAPI.containerBar = this._containerBar,
                            this._compatibleAPI.informationBar = this._informationBar,
                            this._compatibleAPI.searchBar = this._searchBar,
                            this._compatibleAPI.changeBar = this._changeBar)
                    }
                        ,
                        n.dispose = function() {
                            this._containerBar.dispose(),
                                this._informationBar.dispose(),
                                this._searchBar.dispose(),
                                this._changeBar.dispose()
                        }
                        ,
                        n.reset = function() {
                            this._searchBar.reset()
                        }
                        ,
                        n.show = function(i) {
                            null != this._container && (a.contains(this._container, this._containerBar.display) || (this._container.addChild(this._containerBar.display),
                                this._containerBar.setBgStyleByArr(i)),
                            a.contains(this._container, this._informationBar.display) || (this._container.addChild(this._informationBar.display),
                                this._informationBar.setBgStyleByID(i[2])),
                            a.contains(this._container, this._searchBar.display) || this._container.addChild(this._searchBar.display),
                            a.contains(this._container, this._changeBar.display) || this._container.removeChild(this._changeBar.display))
                        }
                        ,
                        n.hide = function() {
                            null != this._container && (a.contains(this._container, this._containerBar.display) && this._container.removeChild(this._containerBar.display),
                            a.contains(this._container, this._informationBar.display) && this._container.removeChild(this._informationBar.display),
                            a.contains(this._container, this._searchBar.display) && this._container.removeChild(this._searchBar.display),
                            a.contains(this._container, this._changeBar.display) && this._container.removeChild(this._changeBar.display))
                        }
                        ,
                        t(i, [{
                            key: "compatibleAPI",
                            set: function(i) {
                                this._compatibleAPI = i
                            }
                        }, {
                            key: "container",
                            set: function(i) {
                                this._container = i
                            }
                        }]),
                        i
                }());
                n._RF.pop()
            }
        }
    }
));
