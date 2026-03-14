System.register("chunks:///_virtual/Model.ts", ["cc"], (function(t) {
        var e;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
            ],
            execute: function() {
                e._RF.push({}, "d2db11A9BdK54DfK2TL00qX", "Model", void 0);
                var n = t("Model", function() {
                    function t(e) {
                        if (this.proxyMap = null,
                            this.multitonKey = null,
                            t.instanceMap[e])
                            throw Error(t.MULTITON_MSG);
                        t.instanceMap[e] = this,
                            this.multitonKey = e,
                            this.proxyMap = {},
                            this.initializeModel()
                    }
                    var e = t.prototype;
                    return e.initializeModel = function() {}
                        ,
                        e.registerProxy = function(t) {
                            t.initializeNotifier(this.multitonKey),
                                this.proxyMap[t.getProxyName()] = t,
                                t.onRegister()
                        }
                        ,
                        e.removeProxy = function(t) {
                            var e = this.proxyMap[t];
                            return e && (delete this.proxyMap[t],
                                e.onRemove()),
                                e
                        }
                        ,
                        e.retrieveProxy = function(t) {
                            return this.proxyMap[t] || null
                        }
                        ,
                        e.hasProxy = function(t) {
                            return null != this.proxyMap[t]
                        }
                        ,
                        t.getInstance = function(e) {
                            return t.instanceMap[e] || (t.instanceMap[e] = new t(e)),
                                t.instanceMap[e]
                        }
                        ,
                        t.removeModel = function(e) {
                            delete t.instanceMap[e]
                        }
                        ,
                        t
                }());
                n.MULTITON_MSG = "Model instance for this multiton key already constructed!",
                    n.instanceMap = {},
                    e._RF.pop()
            }
        }
    }
));
