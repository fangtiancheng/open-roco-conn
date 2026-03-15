System.register("chunks:///_virtual/AbandonedStorage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CompatibleAPI.ts", "./AbandonedStorageProxy.ts", "./AbandonedStorageView.ts"], (function(i) {
        var t, e, o, n, s;
        return {
            setters: [function(i) {
                t = i.createClass
            }
                , function(i) {
                    e = i.cclegacy
                }
                , function(i) {
                    o = i.CompatibleAPI
                }
                , function(i) {
                    n = i.AbandonedStorageProxy
                }
                , function(i) {
                    s = i.AbandonedStorageView
                }
            ],
            execute: function() {
                e._RF.push({}, "21363zEt8xPTpPCReYm58Yu", "AbandonedStorage", void 0);
                i("AbandonedStorage", function() {
                    function i(i) {
                        this._app = void 0,
                            this._compatibleAPI = void 0,
                            this._container = void 0,
                            this._proxy = void 0,
                            this._view = void 0,
                            this._compatibleAPI = new o(i),
                            this._proxy = new n,
                            this._view = new s
                    }
                    var e = i.prototype;
                    return e.initialize = function() {
                        this._compatibleAPI.application = this._app,
                            this._proxy.compatibleAPI = this._compatibleAPI,
                            this._proxy.initialize(),
                            this._view.compatibleAPI = this._compatibleAPI,
                            this._view.initialize()
                    }
                        ,
                        e.dispose = function() {
                            this._proxy.dispose(),
                                this._view.dispose()
                        }
                        ,
                        e.reset = function() {
                            this._view.reset()
                        }
                        ,
                        e.show = function(i) {
                            this._view.show(i)
                        }
                        ,
                        e.hide = function() {
                            this._view.hide()
                        }
                        ,
                        e.requestSpiritList = function() {
                            this._proxy.requestSpiritList()
                        }
                        ,
                        e.addCloseHandler = function(i) {
                            this._compatibleAPI.addCloseHandler(i)
                        }
                        ,
                        e.removeCloseHandler = function(i) {
                            this._compatibleAPI.removeCloseHandler(i)
                        }
                        ,
                        t(i, [{
                            key: "application",
                            set: function(i) {
                                this._app = i
                            }
                        }, {
                            key: "container",
                            set: function(i) {
                                this._container = i,
                                    this._view.container = this._container
                            }
                        }]),
                        i
                }());
                e._RF.pop()
            }
        }
    }
));
