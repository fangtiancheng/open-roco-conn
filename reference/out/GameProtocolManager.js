System.register("chunks:///_virtual/GameProtocolManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GlobalAPI.ts"], (function(t) {
        var o, e, n;
        return {
            setters: [function(t) {
                o = t.createClass
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    n = t.GlobalAPI
                }
            ],
            execute: function() {
                e._RF.push({}, "693667ZIopKtKBvevT0KsO7", "GameProtocolManager", void 0),
                    t("GameProtocolManager", function() {
                        function t() {
                            this.protocolTable = new Map
                        }
                        var e = t.prototype;
                        return e.getPropocol = function(t) {
                            return this.protocolTable.get(t)
                        }
                            ,
                            e.registerProtocol = function(t) {
                                if (!this.protocolTable.has(t)) {
                                    var o = new t;
                                    this.protocolTable.set(t, o),
                                        n.gAngelSysAPI.getNetSysAPI().addDataProcessor(o)
                                }
                            }
                            ,
                            e.unregisterProtocol = function(t) {
                                if (this.protocolTable.has(t)) {
                                    var o = this.protocolTable.get(t);
                                    n.gAngelSysAPI.getNetSysAPI().removeDataProcessor(o),
                                        this.protocolTable.delete(t)
                                }
                            }
                            ,
                            o(t, null, [{
                                key: "instance",
                                get: function() {
                                    return this._instance || (this._instance = new t),
                                        this._instance
                                }
                            }]),
                            t
                    }())._instance = void 0,
                    e._RF.pop()
            }
        }
    }
));
